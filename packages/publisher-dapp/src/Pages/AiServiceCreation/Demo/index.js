import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";
import Actions from "./Actions";
import UploadDemoFiles from "./UploadDemoFiles";

const Demo = ({ classes }) => {
  const { orgUuid } = useParams();
  const serviceDetails = useSelector(state => state.aiServiceDetails);

  return (
    <Grid container className={classes.demoContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">Demo Setup</Typography>
        <div className={classes.wrapper}>
          <Typography className={classes.demoPageDescription}>
            AI publishers can create a unique demo experience that users on the AI Marketpalce can engage with. A
            positive demo experience will users engage and integrate your AI into their applications. We encourage to
            follow our best pratices on how to properly setup your demo on our AI Marketplace. The steps for creating a
            demo UI involves
          </Typography>

          <div className={classes.stepOneContainer}>
            <Typography variant="subtitle1" className={classes.stepsHeading}>
              Step 1: Download Demo UI Package
            </Typography>
            <Typography variant="subtitle2">
              Using our starter node demo UI pacake will help you to set up a local development and testing environment.
              Download the package from the following link and follow the instructions to set up a local working
              environment. Click here to see the contents of the package.
            </Typography>
            <div className={classes.downloadBtn}>
              <a href="https://github.com/singnet/snet-dapp/archive/master.zip" download>
                <SNETButton children="download demo ui package v1.03" color="primary" variant="contained" />
              </a>
            </div>
            <hr />
          </div>

          <div className={classes.stepTwoContainer}>
            <Typography variant="subtitle1" className={classes.stepsHeading}>
              Step 2: Set Up Local Test Environment
            </Typography>
            <Typography variant="subtitle2">
              Extract the contents of the downloaded zip and navigate to that path in terminal / command prompt. Run the
              following commands
            </Typography>
            <ul>
              <li>
                <Typography variant="subtitle2">
                  <span>1. Install required packages: </span>npm install
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2">
                  <span>2. Update .env file: </span>
                  cp .env.sandbox .env
                  <br />
                  Update .env file to reflect the actual values for each environment variable.
                  <ul>
                    <li>
                      REACT_APP_SANDBOX_SERVICE_ENDPOINT The endpoint of the service running locally. snetd defaults to
                      http://localhost:8088.
                    </li>
                    <li>
                      REACT_APP_SANDBOX_ORG_ID & REACT_APP_SANDBOX_SERVICE_ID The org_id to which the service belongs
                      and the service_id of the service. The values set for these variables will be used for registering
                      the custom ui.
                    </li>
                  </ul>
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2">
                  <span>3. Start Service: </span>Start the AI service locally along with the snet daemon. Make sure the
                  blockchain is disabled in the daemon configuration.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2">
                  <span>4. Building Custom UI: </span>
                  <ul>
                    <li>
                      Generate js stubs from .proto files For the custom ui to talk to the services on SingularityNET
                      platform via the DApp, we are using gRPC-web by improbable-eng. Apart from the steps mentioned at
                      the official documentation to generate js stubs from .proto definitions, you also need to provide
                      the namespace_prefix flag to the generator. Here is an example which illustrates the usage protoc
                      \ --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
                      --js_out=import_style=commonjs,binary,namespace_prefix=&lt;uniq_name_space&gt;:. \
                      --ts_out=service=true:. \ example_service.proto &lt;uniq_name_space&gt; should be a combination of
                      package_name + org_id + service_id. For the following proto file with org_id=snet and
                      service_id=example-service the namespace_prefix would be example_service_snet_example_service. PS:
                      All the - should be replaced by _.
                    </li>
                    <li>
                      You need build the custom UI following the steps Create a new directory named after the org-id to
                      which this service belongs inside src/assets/thirdPartyServices. It could be possible that the
                      directory already exists, in which case you can use it instead of creating a new one. Create a new
                      directory named after the service-id under the newly created directory in the above step e.g. for
                      a service with org-id: snet and service-id: example-service you will have to do the following
                      assuming you are at the root of the snet-dapp cd src/assets/thirdPartyServices mkdir snet cd snet
                      mkdir example_service cd example_service Put the all the resources used by the custom ui under
                      this directory including the js stubs.
                    </li>
                  </ul>
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2">
                  <span>5. Register the custom ui: </span>
                  Add an entry for the new service in src/assets/thirdPartyServices/index.js if it does not already
                  exist. Add the following line towards the end of the file. Make sure to replace orgId, serviceId and
                  CustomUIComponent accordingly. thirdPartyCustomUIComponents.addCustomUIComponent(orgId, serviceId,
                  CustomUIComponent);
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2">
                  <span>5. Start Sandbox: </span>
                  Assuming that the snet daemon is running on port 8088, running the bellow commands should bring up the
                  DApp in sandbox mode for local development. npm run sandbox
                </Typography>
              </li>
            </ul>
            <div className={classes.stepTwoBtnsContaier}>
              <Typography variant="subtitle2">Getting stuck or have questions?</Typography>
              <SNETButton
                children="setup docs"
                color="primary"
                variant="text"
                href="https://github.com/singnet/snet-dapp"
                target="_blank"
                rel="noopener nofollow"
              />
              <SNETButton children="f.a.q" color="primary" variant="text" />
              <SNETButton children="contact us" color="primary" variant="text" />
            </div>
            <hr />
          </div>

          <UploadDemoFiles
            classes={classes}
            orgUuid={orgUuid}
            serviceUuid={serviceDetails.uuid}
            demoFilesUrl={serviceDetails.assets.demoFiles.url}
          />
        </div>
      </Grid>
      <Actions classes={classes} />
    </Grid>
  );
};
export default withStyles(useStyles)(Demo);
