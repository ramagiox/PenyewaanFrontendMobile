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
import PerawatDetail from "./perawatDetail";

export default class Perawat extends Component {
   constructor(){
        super()
        this.state = {     
            dataPerawat : []
        }
    }
	
	
	componentDidMount(){
        fetch("https://apirumahsakitbatch124.herokuapp.com/api/perawat",{
            method:"GET"
        })
		.then((response) => response.json())
        .then((data) => {
            
            this.setState({
                dataPerawat : data
            });
			debugger;
            console.log(this.state.dataPerawat);
			console.log(this.state.dataPerawat[0].NamaPerawat);
        
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
            <Title>Perawat</Title>
          </Body>
		  <Right>
				
				<Title onPress={() => this.props.navigation.navigate("PerawatCreate")}><H1 style={styles.buttonStyle}>+</H1></Title> 
				
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
						this.state.dataPerawat.map((item,index)=>(
						<Card>
						<CardItem>
						<Body>
			  
							<TouchableOpacity onPress={() => this.props.navigation.navigate("PerawatDetail", {idPerawat:item._id})}   key = {item._id}>
								<Text>{item.NamaPerawat}</Text>
							
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