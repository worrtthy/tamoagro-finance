// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import ManagerProfile from "layouts/profile"; // Changed from Profile to ManagerProfile
import SignIn from "layouts/authentication/sign-in";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Employees", // Changed to Employees
    key: "employees",
    icon: <Icon fontSize="small">people</Icon>, // Changed icon to "people"
    route: "/employees", // Update this if the route is different
    component: <Tables />, // If you have a layout for Employees, replace "Tables" with the actual layout
  },
  {
    type: "collapse",
    name: "Transactions", // Changed to Transactions
    key: "transactions",
    icon: <Icon fontSize="small">credit_card</Icon>, // Changed icon to "credit_card"
    route: "/transactions", // Update this if the route is different
    component: <Billing />, // If you have a layout for Transactions, replace "Billing" with the actual layout
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Manager Profile", // Changed from Profile to Manager Profile
    key: "manager-profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <ManagerProfile />, // Changed component to ManagerProfile
  },
  {
    type: "collapse",
    name: "Logout", // Replaced "Sign Up" with Logout
    key: "logout",
    icon: <Icon fontSize="small">logout</Icon>, // Changed icon to "logout"
    route: "/authentication/logout", // Update this if the route for logout is different
    component: <SignIn />, // You can change this to a logout functionality
  },
];

export default routes;
