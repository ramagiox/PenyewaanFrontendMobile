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

export default class PerawatDetail extends Component {
   constructor(props){
        super(props)
        this.state = {     
			idPerawat : this.props.navigation.state.params.idPerawat,
            dataPerawat : ""
			
        }
    }
	
	componentDidMount(){
		
			console.log("id perawat : "+this.state.idPerawat);
        fetch("https://apirumahsakitbatch124.herokuapp.com/api/perawat/"+this.state.idPerawat,{
            method:"GET"
        })
		.then((response) => response.json())
        .then((data) => {
            this.setState({
                dataPerawat : data,
				
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
         <Container>
        <Header style = {{backgroundColor : "green"}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Perawat")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Perawat Detail</Title>
          </Body>
          <Right>
			<Title onPress={() => this.props.navigation.navigate("PerawatEdit",{idPerawat:this.state.dataPerawat._id})}><Icon name="color-filter" /></Title>
			</Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
			  
                <List>
						
						
						
						<View >
							<H1>Perawat {this.state.dataPerawat.NamaPerawat}{"\n"}</H1>
							<Text style={{fontSize : 20}}>Kode Perawat : {this.state.dataPerawat.KdPerawat}</Text>
							<Text style={{fontSize : 20}}>Alamat Perawat : {this.state.dataPerawat.AlamatPerawat}</Text>
							<Text style={{fontSize : 20}}>Kode Provinsi : {this.state.dataPerawat.KdProvinsi}</Text>
							<Text style={{fontSize : 20}}>Tanggal Mulai Kerja : {this.state.dataPerawat.TglMulaiKerja}</Text>
							<Text style={{fontSize : 20}}>Tingkat Perawat : {this.state.dataPerawat.TingkatPerawat}</Text>
						</View>
						
				</List>
              </Body>
			  
            </CardItem>
			<Left><Button transparent /></Left>
			<CardItem style={styles.card}>
			<Right>
				<Button rounded danger onPress = {this.alertDelete}><Icon name="trash" /></Button>
			</Right>
			</CardItem>
          </Card>
		  
        </Content>
		
      </Container>
      )
   }
   alertDelete = () => {
	   Alert.alert(
			'Pesan',
			'Yakin untuk menghapus data?',
		  [
			//{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
			{text: 'Cancel', style: 'cancel'},
			{text: 'OK', onPress: () => {
				return fetch("https://apirumahsakitbatch124.herokuapp.com/api/perawat/"+this.state.dataPerawat._id, {
				method: 'DELETE',
				})
				.then(response => response.json())
				.then( 
					Alert.alert(
						'Pesan',
						'Data berhasil dihapus',
						[
							//{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
							//{text: 'Cancel', style: 'cancel'},
							{text: 'OK', onPress: () => this.props.navigation.navigate("Perawat")}
						],
						{ cancelable: false }
					)
				)
			}}
		  ],
		  { cancelable: false }
		)
   }
   
   deletePerawat = () => {
	
	   
   }
}



const styles = StyleSheet.create ({
	card : {
		
	},
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})