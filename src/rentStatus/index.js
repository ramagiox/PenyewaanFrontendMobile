import React, { Component } from "react";
import {Tab,
	Tabs,
	Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right,
    Footer,
    FooterTab,
    H1,
    Thumbnail,
    Form,
    Item,
    Label,
    Input } from 'native-base';
import Booking from "./booking.js";
import Active from "./active.js";
import Fine from "./fine.js";



export default class RentStatus extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#448afc" }}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Home")}
                        >
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Rent Status</Title>
                    </Body>
                    <Right />
                </Header>
				
        <Tabs initialPage={1} tabBarUnderlineStyle={{borderBottomWidth:2}}>
          <Tab heading="Booking" tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#F5F5DC'}} activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
            <Booking />
          </Tab>
          <Tab heading="Active" tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#F5F5DC'}} activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
            <Active />
          </Tab>
          <Tab heading="Fine" tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#F5F5DC'}} activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
            <Fine />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}