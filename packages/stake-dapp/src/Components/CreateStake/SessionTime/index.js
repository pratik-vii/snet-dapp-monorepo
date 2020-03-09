import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import ArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import InfoIcon from "@material-ui/icons/Info";

import { useStyles } from "./styles";
import { userPreferenceTypes } from "../../../Utils/user";
import { preferenceActions } from "../../../Services/Redux/actionCreators/userActions";

import Timer from "./Timer";

const SessionTime = ({ stakeDetails }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const currentTime = moment().unix();

  // TODO - Get the state from the Redux to set as Default Checked value
  const [stakeNotification, setStakeNotification] = useState(false);

  // currentTime < stakeDetails.startPeriod ? currentTime : stakeDetails.startPeriod
  const [startTime] = useState(currentTime);
  const [endTime] = useState(
    currentTime < stakeDetails.startPeriod ? stakeDetails.startPeriod : stakeDetails.submissionEndPeriod
  );

  const interval = 1000;

  const getSessionTitle = () => {
    let sessionTitle = "Currently no staking enabled";

    if (currentTime < stakeDetails.startPeriod) {
      sessionTitle = "Next Session in:";
    }
    if (currentTime >= stakeDetails.startPeriod && currentTime <= stakeDetails.endPeriod) {
      sessionTitle = "Open Staking for:";
    }

    return sessionTitle;
  };

  const getClosingTime = () => {
    let closeTime = "-";

    if (currentTime < stakeDetails.startPeriod) {
      closeTime = "Opens: " + moment.unix(stakeDetails.startPeriod).format("DD MMM YYYY");
    }
    if (currentTime >= stakeDetails.startPeriod && currentTime <= stakeDetails.endPeriod) {
      closeTime = "Closes: " + moment.unix(stakeDetails.endPeriod).format("DD MMM YYYY");
    }

    return closeTime;
  };

  const handleStakeNotificationChange = event => {
    setStakeNotification(event.target.checked);

    const emailPreferences = {
      [userPreferenceTypes.TOKEN_STAKE_NOTIFICATION]: event.target.checked,
    };

    dispatch(preferenceActions.updateEmailPreferences(emailPreferences));
  };

  return (
    <div className={classes.sessionTimeContainer}>
      <div className={classes.header}>
        <Typography variant="h6">Session Time</Typography>
        <ArrowUpIcon />
      </div>
      <div className={classes.content}>
        <Typography variant="subtitle1">{getSessionTitle()}</Typography>
        <Timer key={startTime} startTime={startTime} endTime={endTime} interval={interval} />
        <Typography className={classes.closingTime}>{getClosingTime()}</Typography>
        <div className={classes.checkbox}>
          <InfoIcon />
          <FormControlLabel
            control={<Checkbox color="primary" checked={stakeNotification} onClick={handleStakeNotificationChange} />}
            label="Staking notifications"
          />
        </div>
      </div>
    </div>
  );
};

export default SessionTime;
