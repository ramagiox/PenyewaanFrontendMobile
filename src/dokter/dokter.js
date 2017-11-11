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
import DokterDetail from "./dokterDetail";

export default class Dokter extends Component {
   constructor(){
        super()
        this.state = {     
            dataDokter : []
        }
    }
	
	
	componentDidMount(){
        fetch("https://apirumahsakitbatch124.herokuapp.com/api/dokter",{
            method:"GET"
        })
		.then((response) => response.json())
        .then((data) => {
            
            this.setState({
                dataDokter : data
            });
			debugger;
            console.log(this.state.dataDokter);
			console.log(this.state.dataDokter[0].NamaDokter);
        
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
            <Title>Dokter</Title>
          </Body>
		  <Right>
				
				<Title onPress={() => this.props.navigation.navigate("DokterCreate")}><H1 style={styles.buttonStyle}>+</H1></Title> 
				
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
						this.state.dataDokter.map((item,index)=>(
						<Card>
						<CardItem>
						<Body>
			  
							<TouchableOpacity onPress={() => this.props.navigation.navigate("DokterDetail", {idDokter:item._id})}   key = {item._id}>
								<Text>{item.NamaDokter}</Text>
							
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