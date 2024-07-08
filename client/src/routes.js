
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import UserPage from "views/User.js";

import AddLitigantForm from "views/Litigants/AddLitigantForm";
import Litigant from "views/Litigants/Litigant";
import ViewLitigant from "views/Litigants/ViewLitigant";
import Other from "views/Others/Other";
import ViewOther from "views/Others/ViewOther";
import ClientAssociate from "views/ClientAssociates/ClientAssociate";
import ViewClientAssociate from "views/ClientAssociates/ViewClientAssociate";
import AddAssociate from "views/ClientAssociates/AddAssociate";
import ViewNonClient from "views/Others/ViewNonClient";
import AddOthers from "views/Others/AddOthers";
import ManageCourts from "views/Settings/ManageCourts";
import ManageFirms from "views/Settings/ManageFirms";
import Settings from "views/Settings/Settings";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/",
  },
  {
    path: "/cases",
    name: "Cases",
    icon: "nc-icon nc-diamond",
    component: <Icons />,
    layout: "/",
  },
  {
    path: "/litigants",
    name: "Litigants",
    icon: "nc-icon nc-pin-3",
    component: <Litigant />,
    layout: "/",
  },
  {
    path: "/addLitigant",
    name: "Add Litigant",
    // icon: "nc-icon nc-single-02",
    component: <AddLitigantForm />,
    layout: "/",
  },
  {
    path: `/viewLitigant`,
    name: "View Litigant",
    // icon: "nc-icon nc-single-02",
    component: <ViewLitigant />,
    layout: "/",
  },
  {
    path: "/others",
    name: "Others",
    icon: "nc-icon nc-pin-3",
    component: <Other />,
    layout: "/",
  },
  {
    path: "/viewOthers/:type",
    name: "View Others",
    icon: "nc-icon nc-pin-3",
    component: <ViewOther />,
    layout: "/",
  },
  {
    path: "/addOthers",
    name: "Add Others",
    icon: "nc-icon nc-pin-3",
    component: <AddOthers />,
    layout: "/",
  },
  {
    path: "/viewNonclient",
    name: "View Non Client",
    icon: "nc-icon nc-pin-3",
    component: <ViewNonClient />,
    layout: "/",
  },
  {
    path: "/clientAssociate",
    name: "Client Associate",
    icon: "nc-icon nc-pin-3",
    component: <ClientAssociate />,
    layout: "/",
  },
  {
    path: "/addClientAssociate",
    name: "Add Client Associate",
    icon: "nc-icon nc-pin-3",
    component: <AddAssociate />,
    layout: "/",
  },
  {
    path: "/viewClientAssociate",
    name: "Client Associate",
    icon: "nc-icon nc-pin-3",
    component: <ViewClientAssociate />,
    layout: "/",
  },
  {
    path: "/team",
    name: "Team",
    icon: "nc-icon nc-bell-55",
    component: <Notifications />,
    layout: "/",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "nc-icon nc-single-02",
    component: <Settings />,
    layout: "/",
  },

  //admin routes
 {
    path: "/settings/manageCourts",
    name: "Manage Courts",
    icon: "nc-icon nc-single-02",
    component: <ManageCourts />,
    layout: "/",
  },
 {
    path: "/settings/manageFirms",
    name: "Manage Firms",
    icon: "nc-icon nc-single-02",
    component: <ManageFirms />,
    layout: "/",
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: <Typography />,
  //   layout: "/",
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: <UpgradeToPro />,
  //   layout: "/",
  // },
];
export default routes;
