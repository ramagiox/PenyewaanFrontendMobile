import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, AppRegistry, StatusBar, Alert, TextInput } from 'react-native';
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

export default class PembayaranCreate extends Component {
   constructor(props){
        super(props)
        this.state = {     
			
            dataPembayaran : "",
			kodePembayaran : "",
			tglPembayaran : "",
			kdPasien :"",
			kdPetugas :"",
			hargaTotal : "",
			jumlahPembayaran : "",
			sisaPembayaran : "",
			statusPembayaran : ""
			
        }
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
            <Title>Pembayaran Create</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
			  
                <List>
						
						<View >
							<H1>Data Pembayaran{"\n"}</H1>
							<Text style={{fontSize : 20}}>Kode Pembayaran </Text>
							<TextInput   onChangeText = {this.handleKodePembayaran}></TextInput>
							<Text style={{fontSize : 20}}>Tanggal Pembayaran </Text>
							<TextInput onChangeText = {this.handleTglPembayaran}></TextInput>
							<Text style={{fontSize : 20}}>Kode Pasien</Text>
							<TextInput   onChangeText = {this.handleKdPasien}></TextInput>
							<Text style={{fontSize : 20}}>Kode Petugas</Text>
							<TextInput  onChangeText = {this.handleKdPetugas}></TextInput>
							<Text style={{fontSize : 20}}>Harga Total</Text>
							<TextInput   onChangeText = {this.handleHargaTotal}></TextInput>
							<Text style={{fontSize : 20}}>Jumlah Pembayaran</Text>
							<TextInput   onChangeText = {this.handleJumlahPembayaran}></TextInput>
							<Text style={{fontSize : 20}}>Sisa Pembayaran</Text>
							<TextInput   onChangeText = {this.handleSisaPembayaran}></TextInput>
							<Text style={{fontSize : 20}}>Status Pembayaran</Text>
							<TextInput   onChangeText = {this.handleStatusPembayaran}></TextInput>
							<Text>{"\n"}</Text>
							<Button primary onPress = {this.createPembayaran}><Text>Create</Text></Button>
						</View>
						
				</List>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      )
   }
   
   createPembayaran = () => {
		return fetch("https://apirumahsakitbatch124.herokuapp.com/api/pembayaran/", {
        method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
        body: JSON.stringify({
			KdPembayaran: this.state.kodePembayaran,
			TglPembayaran: this.state.tglPembayaran,
			KdPasien: this.state.kdPasien,
			KdPetugas: this.state.kdPetugas,
			HargaTotal: this.state.hargaTotal,
			JumlahPembayaran : this.state.jumlahPembayaran,
			SisaPembayaran : this.state.sisaPembayaran,
			StatusPembayaran : this.state.statusPembayaran,
		})
    })
    .then(response => response.json())
	.then( 
		Alert.alert(
			'Pesan',
			'Create Berhasil',
		  [
			//{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
			//{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			{text: 'OK', onPress: () => this.props.navigation.navigate("Pembayaran")},
		  ],
		  { cancelable: false }
		)
	)
	   
   }
   
  handleKodePembayaran = (text) => {
      this.setState({ kodePembayaran: text })
   }
   handleTglPembayaran = (text) => {
      this.setState({ tglPembayaran: text })
   }
   handleKdPasien = (text) => {
      this.setState({ kdPasien: text })
   }
   handleKdPetugas = (text) => {
      this.setState({ kdPetugas: text })
   }
   handleHargaTotal = (text) => {
      this.setState({ hargaTotal: text })
   }
   handleJumlahPembayaran = (text) => {
      this.setState({ jumlahPembayaran: text })
   }
   handleSisaPembayaran = (text) => {
      this.setState({ sisaPembayaran: text })
   }
   handleStatusPembayaran = (text) => {
      this.setState({ statusPembayaran: text })
   }
   
   
}



const styles = StyleSheet.create ({
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