// import DashboardWrapper from "../pages/wrappers/DashboardWrapper";
// import ProfileWrapper from "../pages/wrappers/ProfileWrapper";
// import PPPWrapper from "../pages/wrappers/PPPWrapper";
// import StatisticWrapper from "../pages/wrappers/StatisticWrapper";
// import EvaluateWrapper from "../pages/wrappers/EvaluateWrapper";
import React from 'react';
// import TaskWrapper from "../pages/wrappers/TaskWrapper";
import LabConfigWrapper from "../pages/wrappers/LabConfigWrapper";

export const paths = {
    root: "/",
    dashboard: "/Dashboard",
    'Management': "/management"
}

function createRoute(path, component){
    return({path: path, component: component})
}
export const mainRoutes = [
    createRoute("/", LabConfigWrapper),
    createRoute("/Dashboard", LabConfigWrapper),
    createRoute("/Management", LabConfigWrapper)
    // createRoute("/3P", PPPWrapper),
    // createRoute("/Profile", ProfileWrapper),
    // createRoute("/Evaluate", EvaluateWrapper),
    // createRoute("/Statistic", StatisticWrapper),
    // createRoute("/Tasks", TaskWrapper),
]

const SamplesIcon = <i className="fas fa-vials"></i>;
const InstrumentIcon = <i className="far fa-list-alt"></i>;
const StatBoardIcon = <i className="fas fa-network-wired"></i>;
const SearchIcon = <i className="fas fa-search"></i>;
const QCIcon = <span>QC</span>;
const ManagementIcon = <i className="fas fa-cog"></i>;

function createTab(label, icon, path){
    return ({label, icon, path});
}
export const tabbars = [
    createTab("INSTRUMENTS", InstrumentIcon, "/"),
    createTab("STAT BOARD", StatBoardIcon, "/StatBoard"),
    createTab("SAMPLES", SamplesIcon, "/Samples"),
    createTab("SEARCH", SearchIcon, "/Search"),
    createTab("QUANLITY CONTROL", QCIcon, "/QC"),
    createTab("MANAGEMENT", ManagementIcon, "/Management"),

]

// export const menu = [
//     createTab("Trang chủ", DashBoardIcon, "/"),
//     createTab("Chi tiết 3P", Icon3P, "/3P"),
//     createTab("Tác vụ", TaskIcon, "/Tasks"),
//     createTab("Cá nhân", UserIcon, "/Profile"),
//     createTab("Thống kê", StatisticIcon, "/Statistic"),
//     createTab("Thông báo", NotificationIcon, "/Notification"),
// ]