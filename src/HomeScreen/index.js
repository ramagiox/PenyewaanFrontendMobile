import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
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
    Login : { screen : Login},
    Rent : { screen : Rent },
	RentStatus : { screen : RentStatus },
    Profile : { screen : Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
