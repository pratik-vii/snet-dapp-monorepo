import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { organizationActions } from "../../../Services/Redux/actionCreators";
import { TermsAndConditionsDetails, tncAgreementVesrion } from "./content";
import TermsAndConditions from "shared/dist/components/TermsAndConditions";
import { OnboardingRoutes } from "../OnboardingRouter/Routes";
import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";
import { userEntities } from "../../../Utils/user";
import { organizationTypes } from "../../../Utils/organizationSetup";
import { loginActions } from "../../../Services/Redux/actionCreators/userActions";

const selectState = state => ({
  isInitialized: state.user.isInitialized,
  isLoggedIn: state.user.isLoggedIn,
  entity: state.user.entity,
  organization: state.organization,
  email: state.user.email,
});
const AcceptServiceAgreement = ({ history }) => {
  const classes = useStyles();
  const { isInitialized, isLoggedIn, entity, organization, email } = useSelector(selectState);

  const [agreed, setAgreed] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitialized && !isLoggedIn) {
      history.push(GlobalRoutes.LOGIN.path);
    }
  }, [history, isInitialized, isLoggedIn]);

  const handleAccept = async () => {
    if (entity === userEntities.INDIVIDUAL) {
      await dispatch(organizationActions.createOrganization({ ...organization, type: organizationTypes.INDIVIDUAL }));
      dispatch(organizationActions.setOrgOwner(email));
    }
    try {
      dispatch(loginActions.updateUserTnCAttribute(tncAgreementVesrion));
      history.push(OnboardingRoutes.AUTHENTICATE_ID.path);
    } catch (error) {
      history.push(GlobalRoutes.OVERVIEW.path);
    }
  };

  const handleNavigateBack = () => {
    history.push(OnboardingRoutes.SINGULARITY_ACCOUNT.path);
  };

  const handleCancel = () => {
    dispatch(organizationActions.resetOrganizationData());
    history.push(OnboardingRoutes.SINGULARITY_ACCOUNT.path);
  };

  return (
    <div>
      <TermsAndConditions
        title={TermsAndConditionsDetails.title}
        formLabel={TermsAndConditionsDetails.formLabel}
        agreed={agreed}
        onChangeAgreed={() => setAgreed(!agreed)}
      />
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="cancel" onClick={handleCancel} />
        <SNETButton color="primary" children="back" onClick={handleNavigateBack} />
        <SNETButton color="primary" variant="contained" children="accept" onClick={handleAccept} disabled={!agreed} />
      </div>
    </div>
  );
};

export default AcceptServiceAgreement;
