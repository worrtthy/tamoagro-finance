/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Employee Orders Overview
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              18%
            </MDTypography>{" "}
            increase in employee purchases this month
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="shopping_cart"
          title="Adebayo James (EMP001) - Laptop Bag"
          dateTime="22 DEC 7:20 PM"
          description="₦15,000 deducted from salary"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="Chioma Okeke (EMP002) - Wireless Mouse"
          dateTime="21 DEC 11 PM"
          description="₦5,500 deducted from salary"
        />
        <TimelineItem
          color="info"
          icon="chair"
          title="Ibrahim Musa (EMP003) - Office Chair"
          dateTime="21 DEC 9:34 PM"
          description="₦45,000 deducted from salary"
        />
        <TimelineItem
          color="warning"
          icon="ac_unit"
          title="Ngozi Uche (EMP004) - Standing Fan"
          dateTime="20 DEC 2:20 AM"
          description="₦30,000 deducted from salary"
        />
        <TimelineItem
          color="primary"
          icon="keyboard"
          title="Emeka Obi (EMP005) - USB Keyboard"
          dateTime="18 DEC 4:54 AM"
          description="₦7,200 deducted from salary"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
