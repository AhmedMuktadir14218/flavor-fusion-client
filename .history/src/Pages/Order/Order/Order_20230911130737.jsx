import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import 'react-tabs/style/react-tabs.css';
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../Hooks/useMenu";
const Order = () => {
//     
