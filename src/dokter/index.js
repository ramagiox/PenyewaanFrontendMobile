import React, { Component } from "react";
import Dokter from "./dokter.js";
import DokterDetail from "./dokterDetail.js";
import DokterEdit from "./dokterEdit.js";
import DokterCreate from "./dokterCreate.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
	Dokter : {screen : Dokter ,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }},
  DokterDetail: { screen: DokterDetail,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }  },
	DokterEdit: { screen: DokterEdit,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }  },
	DokterCreate: { screen: DokterCreate,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }  }
}));