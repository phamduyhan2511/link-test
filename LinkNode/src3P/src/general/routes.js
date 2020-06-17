import DashboardWrapper from "../pages/wrappers/DashboardWrapper";
import ProfileWrapper from "../pages/wrappers/ProfileWrapper";
import PPPWrapper from "../pages/wrappers/PPPWrapper";
import StatisticWrapper from "../pages/wrappers/StatisticWrapper";
import EvaluateWrapper from "../pages/wrappers/EvaluateWrapper";
import React from 'react';
import TaskWrapper from "../pages/wrappers/TaskWrapper";

export const paths = {
    root: "/",
    dashboard: "/Dashboard",
    '3p': "/3P"
}

function createRoute(path, component){
    return({path: path, component: component})
}
export const mainRoutes = [
    createRoute("/", DashboardWrapper),
    createRoute("/Dashboard", DashboardWrapper),
    createRoute("/3P", PPPWrapper),
    createRoute("/Profile", ProfileWrapper),
    createRoute("/Evaluate", EvaluateWrapper),
    createRoute("/Statistic", StatisticWrapper),
    createRoute("/Tasks", TaskWrapper),
]


const DashBoardIcon = <i className="fas fa-columns"></i>;
const Icon3P = <span>3P</span>;
const TaskIcon = <i className="fas fa-tasks"></i>;
const UserIcon = <i className="fas fa-user-md"></i>; 
const NotificationIcon = <i className="far fa-bell"></i>;
const StatisticIcon = <i className="fas fa-euro-sign"></i>

function createTab(label, icon, path){
    return ({label, icon, path});
}
export const tabbars = [
    createTab("Trang chủ", DashBoardIcon, "/"),
    createTab("3P", Icon3P, "/3P"),
    createTab("Tác vụ", TaskIcon, "/Tasks"),
    createTab("Thống kê", StatisticIcon, "/Statistic"),
    createTab("Cá nhân", UserIcon, "/Profile"),
]

export const menu = [
    createTab("Trang chủ", DashBoardIcon, "/"),
    createTab("Chi tiết 3P", Icon3P, "/3P"),
    createTab("Tác vụ", TaskIcon, "/Tasks"),
    createTab("Cá nhân", UserIcon, "/Profile"),
    createTab("Thống kê", StatisticIcon, "/Statistic"),
    createTab("Thông báo", NotificationIcon, "/Notification"),
]