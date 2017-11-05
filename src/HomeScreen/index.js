import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import Dokter from "../dokter/index.js";
import Perawat from "../perawat/index.js";
import Pembayaran from "../pembayaran/index.js";
import Pembayarandetail from "../pembayarandetail/index.js";
import Login from "../login/index.js";
import SideBar from "../SideBar/SideBar.js";
import Item from "./item.js";
import Rent from "./rent.js";
import Profile from "./profil.js"
import RentStatus from "../rentStatus/index.js";

import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Item: { screen: Item},
    Dokter: { screen: Dokter },
    Perawat: { screen: Perawat },
    Pembayaran: { screen: Pembayaran },
    Pembayarandetail: { screen: Pembayarandetail },
    Login : { screen : Login},
    Rent : { screen : Rent },
    Profile : { screen : Profile },
    RentStatus : { screen : RentStatus }
    
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
