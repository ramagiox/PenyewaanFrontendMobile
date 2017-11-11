import React, { Component } from "react";
import Pembayarandetail from "./pembayarandetail.js";
import PembayarandetailDetail from "./pembayarandetailDetail.js";
import PembayarandetailEdit from "./pembayarandetailEdit.js";
import PembayarandetailCreate from "./pembayarandetailCreate.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
	Pembayarandetail : {screen : Pembayarandetail ,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }},
  PembayarandetailDetail: { screen: PembayarandetailDetail,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }  },
	PembayarandetailEdit: { screen: PembayarandetailEdit,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }  },
	PembayarandetailCreate: { screen: PembayarandetailCreate,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }  }
}));