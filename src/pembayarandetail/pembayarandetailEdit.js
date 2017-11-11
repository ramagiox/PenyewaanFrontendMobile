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

export default class PembayarandetailEdit extends Component {
   constructor(props){
        super(props)
        this.state = {     
			idPembayarandetail : this.props.navigation.state.params.idPembayarandetail,
            dataPembayarandetail : "",
			kodePembayaran : "",
			kdRuangan : "",
			hargaRuangan :"",
			kdDokter :"",
			hargaDokter : "",
			
        }
    }
	
	componentDidMount(){
		
		
		console.log("id pembayarandetail : "+this.state.idPembayarandetail);
        fetch("https://apirumahsakitbatch124.herokuapp.com/api/pembayarandetail/"+this.state.idPembayarandetail,{
            method:"GET"
        })
		.then((response) => response.json())
        .then((data) => {
            this.setState({
				dataPembayarandetail : data,
                kodePembayaran: data.KdPembayarandetail,
				kdRuangan: data.KdRuangan,
				hargaRuangan: data.HargaRuangan,
				kdDokter: data.KdDokter,
				hargaDokter: data.HargaDokter,
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
              onPress={() => this.props.navigation.navigate("PembayarandetailDetail",{idPembayarandetail:this.state.dataPembayarandetail._id})}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Pembayaran Detail Edit</Title>
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
							<TextInput  defaultValue = {this.state.dataPembayarandetail.KdPembayaran} onChangeText = {this.handleKodePembayaran}></TextInput>
							<Text style={{fontSize : 20}}>Kode Ruangan</Text>
							<TextInput defaultValue = {this.state.dataPembayarandetail.KdRuangan} onChangeText = {this.handleKdRuangan}></TextInput>
							<Text style={{fontSize : 20}}>Harga Ruangan</Text>
							<TextInput  defaultValue = {this.state.dataPembayarandetail.HargaRuangan} onChangeText = {this.handleHargaRuangan}></TextInput>
							<Text style={{fontSize : 20}}>Kode Dokter</Text>
							<TextInput  defaultValue = {this.state.dataPembayarandetail.KdDokter} onChangeText = {this.handleKdDokter}></TextInput>
							<Text style={{fontSize : 20}}>Harga Dokter</Text>
							<TextInput  defaultValue = {this.state.dataPembayarandetail.HargaDokter} onChangeText = {this.handleHargaDokter}></TextInput>
							<Text>{"\n"}</Text>
							<Button primary onPress = {this.editPembayarandetail}><Text>Edit</Text></Button>
						</View>
						
				</List>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      )
   }
   
   editPembayarandetail = () => {
		return fetch("https://apirumahsakitbatch124.herokuapp.com/api/pembayarandetail/"+this.state.idPembayarandetail, {
        method: 'PUT',
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
			'Edit Berhasil',
		  [
			//{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
			//{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			{text: 'OK', onPress: () => this.props.navigation.navigate("PembayarandetailDetail",{idPembayarandetail:this.state.dataPembayarandetail._id})},
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