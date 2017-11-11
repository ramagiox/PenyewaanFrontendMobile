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

export default class PerawatCreate extends Component {
   constructor(props){
        super(props)
        this.state = {     
			
            dataPerawat : "",
			kodePerawat : "",
			namaPerawat : "",
			alamatPerawat :"",
			kodeProvinsi :"",
			tglMulaiKerja : "",
			tingkatPerawat : "",
			
        }
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
            <Title>Perawat Create</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
			  
                <List>
						
						<View >
							<H1>Data Perawat{"\n"}</H1>
							<Text style={{fontSize : 20}}>Kode Perawat </Text>
							<TextInput  onChangeText = {this.handleKodePerawat}></TextInput>
							<Text style={{fontSize : 20}}>Nama Perawat </Text>
							<TextInput onChangeText = {this.handleNamaPerawat}></TextInput>
							<Text style={{fontSize : 20}}>Alamat Perawat</Text>
							<TextInput  onChangeText = {this.handleAlamatPerawat}></TextInput>
							<Text style={{fontSize : 20}}>Kode Provinsi</Text>
							<TextInput  onChangeText = {this.handleKodeProvinsi}></TextInput>
							<Text style={{fontSize : 20}}>Tanggal Mulai Kerja</Text>
							<TextInput  onChangeText = {this.handleTanggalMulaiKerja}></TextInput>
							<Text style={{fontSize : 20}}>Tingkat Perawat</Text>
							<TextInput  onChangeText = {this.handleTingkatPerawat}></TextInput>
							<Text>{"\n"}</Text>
							<Button primary onPress = {this.createPerawat}><Text>Create</Text></Button>
						</View>
						
				</List>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      )
   }
   
   createPerawat = () => {
		return fetch("https://apirumahsakitbatch124.herokuapp.com/api/perawat/", {
        method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
        body: JSON.stringify({
			KdPerawat: this.state.kodePerawat,
			NamaPerawat: this.state.namaPerawat,
			AlamatPerawat: this.state.alamatPerawat,
			KdProvinsi: this.state.kodeProvinsi,
			TglMulaiKerja: this.state.tglMulaiKerja,
			TingkatPerawat : this.state.tingkatPerawat
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
			{text: 'OK', onPress: () => this.props.navigation.navigate("Perawat")},
		  ],
		  { cancelable: false }
		)
	)
	   
   }
   
   handleKodePerawat = (text) => {
      this.setState({ kodePerawat: text })
   }
   handleNamaPerawat = (text) => {
      this.setState({ namaPerawat: text })
   }
   handleAlamatPerawat = (text) => {
      this.setState({ alamatPerawat: text })
   }
   handleKodeProvinsi = (text) => {
      this.setState({ kodeProvinsi: text })
   }
   handleTanggalMulaiKerja = (text) => {
      this.setState({ tglMulaiKerja: text })
   }
   handleTingkatPerawat = (text) => {
      this.setState({ tingkatPerawat: text })
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