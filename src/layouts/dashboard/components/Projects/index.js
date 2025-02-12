/**
=========================================================
* TAMOAgro Finance React - v2.2.0
=========================================================
*/

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

// TAMOAgro Finance React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// TAMOAgro Finance React examples
import DataTable from "examples/Tables/DataTable";

// Data (Sample request data)
const columns = [
  { Header: "Request", accessor: "request" },
  { Header: "Request Sender", accessor: "requestSender" },
  { Header: "Department", accessor: "department" },
  { Header: "Completion", accessor: "completion" },
  { Header: "Date Sent", accessor: "dateSent" },
];

const rows = [
  {
    request: "Request for office leave",
    requestSender: "Adebayo James",
    department: "HR",
    completion: "Approved",
    dateSent: "22 DEC 7:20 PM",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    request: "Sick leave request",
    requestSender: "Chioma Okeke",
    department: "IT",
    completion: "Pending",
    dateSent: "21 DEC 11 PM",
    avatar: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    request: "Appeal for salary increase",
    requestSender: "Ibrahim Musa",
    department: "Finance",
    completion: "Denied",
    dateSent: "21 DEC 9:34 PM",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    request: "Request for additional leave days",
    requestSender: "Ngozi Uche",
    department: "Admin",
    completion: "Approved",
    dateSent: "20 DEC 2:20 AM",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    request: "Request for new office chair",
    requestSender: "Emeka Obi",
    department: "Operations",
    completion: "Pending",
    dateSent: "18 DEC 4:54 AM",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

function EmployeeRequests() {
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Employee Requests Overview
          </MDTypography>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <MDTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>5 requests</strong> this month
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </MDBox>
        {renderMenu}
      </MDBox>
      <MDBox>
        <DataTable
          table={{
            columns,
            rows: rows.map((row) => ({
              ...row,
              completion: (
                <Chip
                  label={row.completion}
                  color={
                    row.completion === "Approved"
                      ? "success"
                      : row.completion === "Pending"
                      ? "warning"
                      : "error"
                  }
                  sx={{
                    color: "white", // Set the font color to white inside the badge
                    fontWeight: "bold",
                  }}
                />
              ),
              requestSender: (
                <MDBox display="flex" alignItems="center">
                  <Avatar alt={row.requestSender} src={row.avatar} sx={{ mr: 2 }} />
                  <MDTypography variant="body2">{row.requestSender}</MDTypography>
                </MDBox>
              ),
            })),
          }}
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
          entriesPerPage={false}
        />
      </MDBox>
    </Card>
  );
}

export default EmployeeRequests;
