import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      A simple {name} alert for TAMOAgro with{" "}
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </MDTypography>
      . Give it a click if you like.
    </MDTypography>
  );

  // Sample notifications for the manager
  const renderNotifications = (
    <>
      <MDAlert color="info" dismissible>
        <MDTypography variant="body2" color="white">
          Chika O. sent a request for leave.{" "}
          <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="primary">
            Read more
          </MDTypography>
        </MDTypography>
      </MDAlert>

      <MDAlert color="primary" dismissible>
        <MDTypography variant="body2" color="white">
          New order received for tomato supply.{" "}
          <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="primary">
            View details
          </MDTypography>
        </MDTypography>
      </MDAlert>

      <MDAlert color="warning" dismissible>
        <MDTypography variant="body2" color="white">
          Task &quot;Supply Chain Analysis&quot; completed by John Doe.{" "}
          <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="primary">
            View report
          </MDTypography>
        </MDTypography>
      </MDAlert>

      <MDAlert color="error" dismissible>
        <MDTypography variant="body2" color="white">
          System error detected in the farm production module.{" "}
          <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="primary">
            Resolve now
          </MDTypography>
        </MDTypography>
      </MDAlert>

      <MDAlert color="info" dismissible>
        <MDTypography variant="body2" color="white">
          Employee profile updated for Michael O.{" "}
          <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="primary">
            Check details
          </MDTypography>
        </MDTypography>
      </MDAlert>

      <MDAlert color="primary" dismissible>
        <MDTypography variant="body2" color="white">
          Vendor contract approved with FarmTech Ltd.{" "}
          <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="primary">
            View contract
          </MDTypography>
        </MDTypography>
      </MDAlert>
    </>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5" color="black">
                  Manager Notifications
                </MDTypography>
                <br />
                <MDTypography variant="body2" color="black" fontWeight="regular">
                  Stay updated with important requests, task completions, system updates, and vendor
                  activities.
                </MDTypography>
              </MDBox>
              <MDBox pt={2} px={2}>
                {renderNotifications}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
