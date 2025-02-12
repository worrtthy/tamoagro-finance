/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
// TamoAgro

// @mui material components
import Icon from "@mui/material/Icon";

// TAMOAgro Finance React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Random Avatars (These are online placeholder avatars)
const avatar1 = "https://randomuser.me/api/portraits/men/1.jpg";
const avatar2 = "https://randomuser.me/api/portraits/men/2.jpg";
const avatar3 = "https://randomuser.me/api/portraits/men/3.jpg";
const avatar4 = "https://randomuser.me/api/portraits/men/4.jpg";
const avatar5 = "https://randomuser.me/api/portraits/men/5.jpg";
const avatar6 = "https://randomuser.me/api/portraits/men/6.jpg";

export default function data() {
  const EmployeeTask = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "employee", accessor: "employee", width: "30%", align: "left" },
      { Header: "task", accessor: "task", align: "left" },
      { Header: "budget (₦)", accessor: "budget", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        employee: <EmployeeTask image={avatar1} name="Tolu A." />,
        task: "Manage Team Tasks",
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            ₦1,200,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            In Progress
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        employee: <EmployeeTask image={avatar2} name="Adebayo A." />,
        task: "Software Development",
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            ₦2,500,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Completed
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        employee: <EmployeeTask image={avatar3} name="Chika M." />,
        task: "Marketing Campaign",
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            ₦1,800,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Cancelled
          </MDTypography>
        ),
        completion: <Progress color="error" value={30} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        employee: <EmployeeTask image={avatar4} name="Damilola S." />,
        task: "Product Testing",
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            ₦3,000,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            In Progress
          </MDTypography>
        ),
        completion: <Progress color="info" value={80} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        employee: <EmployeeTask image={avatar5} name="Emeka O." />,
        task: "Client Feedback Collection",
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            ₦700,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Cancelled
          </MDTypography>
        ),
        completion: <Progress color="error" value={0} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        employee: <EmployeeTask image={avatar6} name="Titi J." />,
        task: "Market Research",
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            ₦1,000,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Completed
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
    ],
  };
}
