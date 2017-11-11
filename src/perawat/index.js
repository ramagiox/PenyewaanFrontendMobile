import React, { Component } from "react";
import Perawat from "./perawat.js";
import PerawatDetail from "./perawatDetail.js";
import PerawatEdit from "./perawatEdit.js";
import PerawatCreate from "./perawatCreate.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
	Perawat : {screen : Perawat ,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }},
  PerawatDetail: { screen: PerawatDetail,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }  },
	PerawatEdit: { screen: PerawatEdit,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }  },
	PerawatCreate: { screen: PerawatCreate,
	headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }  }
}));