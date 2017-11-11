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

export default class PembayaranDetail extends Component {
   constructor(props){
        super(props)
        this.state = {     
			idPembayaran : this.props.navigation.state.params.idPembayaran,
            dataPembayaran : ""
			
        }
    }
	
	componentDidMount(){
		
			console.log("id pembayaran : "+this.state.idPembayaran);
        fetch("https://apirumahsakitbatch124.herokuapp.com/api/pembayaran/"+this.state.idPembayaran,{
            method:"GET"
        })
		.then((response) => response.json())
        .then((data) => {
            this.setState({
                dataPembayaran : data,
				
            });
           
			debugger;
            console.log(this.state.dataPembayaran);
			console.log(this.state.dataPembayaran[0].NamaPembayaran);
        
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
              onPress={() => this.props.navigation.navigate("Pembayaran")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Pembayaran Detail</Title>
          </Body>
          <Right>
			<Title onPress={() => this.props.navigation.navigate("PembayaranEdit",{idPembayaran:this.state.dataPembayaran._id})}><Icon name="color-filter" /></Title>
			</Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
			  
                <List>
						
						
						
						<View >
							<H1>Pembayaran {this.state.dataPembayaran.NamaPembayaran}{"\n"}</H1>
							<Text style={{fontSize : 20}}>Kode Pembayaran : {this.state.dataPembayaran.KdPembayaran}</Text>
							<Text style={{fontSize : 20}}>Tanggal Pembayaran : {this.state.dataPembayaran.TglPembayaran}</Text>
							<Text style={{fontSize : 20}}>Kode Pasien : {this.state.dataPembayaran.KdPasien}</Text>
							<Text style={{fontSize : 20}}>Kode Petugas : {this.state.dataPembayaran.KdPetugas}</Text>
							<Text style={{fontSize : 20}}>Harga Total : {this.state.dataPembayaran.HargaTotal}</Text>
							<Text style={{fontSize : 20}}>Jumlah Pembayaran : {this.state.dataPembayaran.JumlahPembayaran}</Text>
							<Text style={{fontSize : 20}}>Sisa Pembayaran : {this.state.dataPembayaran.SisaPembayaran}</Text>
							<Text style={{fontSize : 20}}>Status Pembayaran : {this.state.dataPembayaran.StatusPembayaran}</Text>
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
				return fetch("https://apirumahsakitbatch124.herokuapp.com/api/pembayaran/"+this.state.dataPembayaran._id, {
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
							{text: 'OK', onPress: () => this.props.navigation.navigate("Pembayaran")}
						],
						{ cancelable: false }
					)
				)
			}}
		  ],
		  { cancelable: false }
		)
   }
   
   deletePembayaran = () => {
	
	   
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