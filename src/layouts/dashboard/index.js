/**
=========================================================
* TAMOAgro Finance Department - v1.0
=========================================================

* Custom Dashboard for Financial Management

Coded by TAMOAgro Tech Team

 =========================================================
*/

// @mui material components
import Grid from "@mui/material/Grid";

// TAMOAgro Finance Department components
import MDBox from "components/MDBox";

// TAMOAgro Finance Department example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {/* Transaction Logs */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="receipt_long"
                title="Transaction Logs"
                count={845}
                percentage={{
                  color: "success",
                  amount: "+12%",
                  label: "increase in transactions",
                }}
              />
            </MDBox>
          </Grid>
          {/* Employee Details */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="people"
                title="Employee Details"
                count="120"
                percentage={{
                  color: "success",
                  amount: "+5%",
                  label: "new employees this month",
                }}
              />
            </MDBox>
          </Grid>
          {/* Company Revenue */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="attach_money"
                title="Company Revenue"
                count="₦450M"
                percentage={{
                  color: "success",
                  amount: "+8%",
                  label: "compared to last quarter",
                }}
              />
            </MDBox>
          </Grid>
          {/* Audit Reports */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="assessment"
                title="Audit Reports"
                count="25"
                percentage={{
                  color: "danger",
                  amount: "-2%",
                  label: "fewer audits this cycle",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {/* Revenue Trend */}
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Revenue Growth"
                  description="Quarterly Revenue Performance"
                  date="Updated this month"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            {/* Daily Transactions */}
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Daily Transactions"
                  description={
                    <>
                      (<strong>+20%</strong>) increase in transactions.
                    </>
                  }
                  date="Updated 2 hours ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            {/* Audits Overview */}
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Audit Performance"
                  description="Audit compliance reports"
                  date="Updated weekly"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>

        <MDBox>
          <Grid container spacing={3}>
            {/* Recent Financial Activities */}
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            {/* Financial Overview */}
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
