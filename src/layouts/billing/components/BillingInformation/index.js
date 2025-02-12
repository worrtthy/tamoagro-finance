// TamoAgro

// @mui material components
import Card from "@mui/material/Card";

// TAMOAgro Finance React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Billing Information
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="Chidi Okafor"
            department="Animal Husbandry"
            email="chidi@animalhusbandry.com"
            vat="FRB1235476"
          />
          <Bill
            name="Ngozi Eze"
            department="Inventory Management"
            email="ngozi@inventory.com"
            vat="FRB1235476"
          />
          <Bill
            name="Tunde Balogun"
            department="Human Resources"
            email="tunde@hr.com"
            vat="FRB1235476"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
