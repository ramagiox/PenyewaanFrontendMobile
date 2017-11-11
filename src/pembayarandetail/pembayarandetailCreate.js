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

export default class PembayarandetailCreate extends Component {
   constructor(props){
        super(props)
        this.state = {     
			
            dataPembayarandetail : "",
			kodePembayaran : "",
			kdRuangan : "",
			hargaRuangan :"",
			kdDokter :"",
			hargaDokter : "",
			
        }
    }
	
   render() {
      return (
         <Container>
        <Header style = {{backgroundColor : "green"}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Pembayarandetail")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Pembayaran Detail Create</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
			  
                <List>
						
						<View >
							<H1>Data Pembayaran Detail{"\n"}</H1>
							<Text style={{fontSize : 20}}>Kode Pembayaran</Text>
							<TextInput   onChangeText = {this.handleKodePembayaran}></TextInput>
							<Text style={{fontSize : 20}}>Kode Ruangan</Text>
							<TextInput onChangeText = {this.handleKdRuangan}></TextInput>
							<Text style={{fontSize : 20}}>Harga Ruangan</Text>
							<TextInput   onChangeText = {this.handleHargaRuangan}></TextInput>
							<Text style={{fontSize : 20}}>Kode Dokter</Text>
							<TextInput  onChangeText = {this.handleKdDokter}></TextInput>
							<Text style={{fontSize : 20}}>Harga Dokter</Text>
							<TextInput  onChangeText = {this.handleHargaDokter}></TextInput>
							<Text>{"\n"}</Text>
							<Button primary onPress = {this.createPembayarandetail}><Text>Create</Text></Button>
						</View>
						
				</List>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      )
   }
   
   createPembayarandetail = () => {
		return fetch("https://apirumahsakitbatch124.herokuapp.com/api/pembayarandetail/", {
        method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
        body: JSON.stringify({
			KdPembayaran: this.state.kodePembayaran,
			KdRuangan: this.state.kdRuangan,
			HargaRuangan: this.state.hargaRuangan,
			KdDokter: this.state.kdDokter,
			HargaDokter: this.state.hargaDokter,
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
			{text: 'OK', onPress: () => this.props.navigation.navigate("Pembayarandetail")},
		  ],
		  { cancelable: false }
		)
	)
	   
   }
   
   handleKodePembayaran = (text) => {
      this.setState({ kodePembayaran: text })
   }
   handleKdRuangan = (text) => {
      this.setState({ kdRuangan: text })
   }
   handleHargaRuangan = (text) => {
      this.setState({ hargaRuangan: text })
   }
   handleKdDokter = (text) => {
      this.setState({ kdDokter: text })
   }
   handleHargaDokter = (text) => {
      this.setState({ hargaDokter: text })
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