import React, { Component } from "react";
import Login from "./login.js";
import Register from "./register.js";

import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
	Login : {screen : Login ,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }},
    Register : {screen : Register ,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }},
 
}));