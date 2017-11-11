import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, AppRegistry, StatusBar, Alert } from 'react-native';
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label,
  List,
  ListItem,
  H1
} from "native-base";
import HomeScreen from "../HomeScreen";
import PembayarandetailDetail from "./pembayarandetailDetail";

export default class Pembayarandetail extends Component {
   constructor(){
        super()
        this.state = {     
            dataPembayarandetail : []
        }
    }
	
	
	componentDidMount(){
        fetch("https://apirumahsakitbatch124.herokuapp.com/api/pembayarandetail",{
            method:"GET"
        })
		.then((response) => response.json())
        .then((data) => {
            
            this.setState({
                dataPembayarandetail : data
            });
			
         
        
        })
        .catch((error)=>{
            console.log(error);
        })
    }
   render() {
      return (
         <Container style={styles.container}>
        <Header style = {{backgroundColor : "green"}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Pembayaran Detail</Title>
          </Body>
		  <Right>
				
				<Title onPress={() => this.props.navigation.navigate("PembayarandetailCreate")}><H1 style={styles.buttonStyle}>+</H1></Title> 
				
				</Right>
          
        </Header>
        <Content padder>
				<Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          
          <Button transparent>
            <Text>Search</Text>
			
          </Button>
		  </Item>
                <List>
					{
						this.state.dataPembayarandetail.map((item,index)=>(
						<Card>
						<CardItem>
						<Body>
			  
							<TouchableOpacity onPress={() => this.props.navigation.navigate("PembayarandetailDetail", {idPembayarandetail:item._id})}   key = {item._id}>
								<Text>{item.KdPembayaran}</Text>
							
							</TouchableOpacity>
							 </Body>
							</CardItem>
							</Card>
						))
					}
				</List>
				
				
        </Content>
      </Container>
      )
   }
   
   
}

const styles = StyleSheet.create ({
	buttonStyle: {
		color : "white"
      
   },
	searchStyle: {
	
	},
   container: {
      flex : 1
   },
   text: {
      color: '#4f603c'
   }
})