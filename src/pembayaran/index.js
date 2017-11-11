import React, { Component } from "react";
import Pembayaran from "./pembayaran.js";
import PembayaranDetail from "./pembayaranDetail.js";
import PembayaranEdit from "./pembayaranEdit.js";
import PembayaranCreate from "./pembayaranCreate.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
	Pembayaran : {screen : Pembayaran ,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }},
  PembayaranDetail: { screen: PembayaranDetail,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }  },
	PembayaranEdit: { screen: PembayaranEdit,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }  },
	PembayaranCreate: { screen: PembayaranCreate,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }  }
}));