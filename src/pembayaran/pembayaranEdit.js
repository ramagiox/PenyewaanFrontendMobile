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

export default class PembayaranEdit extends Component {
   constructor(props){
        super(props)
        this.state = {     
			idPembayaran : this.props.navigation.state.params.idPembayaran,
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
	
	componentDidMount(){
		
		
		console.log("id pembayaran : "+this.state.idPembayaran);
        fetch("https://apirumahsakitbatch124.herokuapp.com/api/pembayaran/"+this.state.idPembayaran,{
            method:"GET"
        })
		.then((response) => response.json())
        .then((data) => {
            this.setState({
				dataPembayaran : data,
                kodePembayaran: data.KdPembayaran,
				tglPembayaran: data.TglPembayaran,
				kdPasien: data.KdPasien,
				kdPetugas: data.KdPetugas,
				hargaTotal: data.HargaTotal,
				jumlahPembayaran : data.JumlahPembayaran,
				sisaPembayaran : data.SisaPembayaran,
				statusPembayaran : data.StatusPembayaran,
            });
           
			debugger;
           
        
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
              onPress={() => this.props.navigation.navigate("PembayaranDetail",{idPembayaran:this.state.dataPembayaran._id})}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Pembayaran Edit</Title>
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
							<TextInput  defaultValue = {this.state.dataPembayaran.KdPembayaran} onChangeText = {this.handleKodePembayaran}></TextInput>
							<Text style={{fontSize : 20}}>Tanggal Pembayaran </Text>
							<TextInput defaultValue = {this.state.dataPembayaran.TglPembayaran} onChangeText = {this.handleTglPembayaran}></TextInput>
							<Text style={{fontSize : 20}}>Kode Pasien</Text>
							<TextInput  defaultValue = {this.state.dataPembayaran.KdPasien} onChangeText = {this.handleKdPasien}></TextInput>
							<Text style={{fontSize : 20}}>Kode Petugas</Text>
							<TextInput  defaultValue = {this.state.dataPembayaran.KdPetugas} onChangeText = {this.handleKdPetugas}></TextInput>
							<Text style={{fontSize : 20}}>Harga Total</Text>
							<TextInput  defaultValue = {this.state.dataPembayaran.HargaTotal} onChangeText = {this.handleHargaTotal}></TextInput>
							<Text style={{fontSize : 20}}>Jumlah Pembayaran</Text>
							<TextInput  defaultValue = {this.state.dataPembayaran.JumlahPembayaran} onChangeText = {this.handleJumlahPembayaran}></TextInput>
							<Text style={{fontSize : 20}}>Sisa Pembayaran</Text>
							<TextInput  defaultValue = {this.state.dataPembayaran.SisaPembayaran} onChangeText = {this.handleSisaPembayaran}></TextInput>
							<Text style={{fontSize : 20}}>Status Pembayaran</Text>
							<TextInput  defaultValue = {this.state.dataPembayaran.StatusPembayaran} onChangeText = {this.handleStatusPembayaran}></TextInput>
							<Text>{"\n"}</Text>
							<Button primary onPress = {this.editPembayaran}><Text>Edit</Text></Button>
						</View>
						
				</List>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      )
   }
   
   editPembayaran = () => {
		return fetch("https://apirumahsakitbatch124.herokuapp.com/api/pembayaran/"+this.state.idPembayaran, {
        method: 'PUT',
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
			'Edit Berhasil',
		  [
			//{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
			//{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			{text: 'OK', onPress: () => this.props.navigation.navigate("PembayaranDetail",{idPembayaran:this.state.dataPembayaran._id})},
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