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

export default class PerawatEdit extends Component {
   constructor(props){
        super(props)
        this.state = {     
			idPerawat : this.props.navigation.state.params.idPerawat,
            dataPerawat : "",
			kodePerawat : "",
			namaPerawat : "",
			alamatPerawat :"",
			kodeProvinsi :"",
			tglMulaiKerja : "",
			tingkatPerawat : "",
			
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
                kodePerawat: data.KdPerawat,
				namaPerawat: data.NamaPerawat,
				alamatPerawat: data.AlamatPerawat,
				kodeProvinsi: data.KdProvinsi,
				tglMulaiKerja: data.TglMulaiKerja,
				tingkatPerawat : data.TingkatPerawat
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
              onPress={() => this.props.navigation.navigate("Perawat",{idPerawat:this.state.dataPerawat._id})}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Perawat Edit</Title>
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
							<TextInput  defaultValue = {this.state.dataPerawat.KdPerawat} onChangeText = {this.handleKodePerawat}></TextInput>
							<Text style={{fontSize : 20}}>Nama Perawat </Text>
							<TextInput defaultValue = {this.state.dataPerawat.NamaPerawat} onChangeText = {this.handleNamaPerawat}></TextInput>
							<Text style={{fontSize : 20}}>Alamat Perawat</Text>
							<TextInput  defaultValue = {this.state.dataPerawat.AlamatPerawat} onChangeText = {this.handleAlamatPerawat}></TextInput>
							<Text style={{fontSize : 20}}>Kode Provinsi</Text>
							<TextInput  defaultValue = {this.state.dataPerawat.KdProvinsi} onChangeText = {this.handleKodeProvinsi}></TextInput>
							<Text style={{fontSize : 20}}>Tanggal Mulai Kerja</Text>
							<TextInput  defaultValue = {this.state.dataPerawat.TglMulaiKerja} onChangeText = {this.handleTanggalMulaiKerja}></TextInput>
							<Text style={{fontSize : 20}}>Tingkat Perawat</Text>
							<TextInput  defaultValue = {this.state.dataPerawat.TingkatPerawat} onChangeText = {this.handleTingkatPerawat}></TextInput>
							<Text>{"\n"}</Text>
							<Button primary onPress = {this.editPerawat}><Text>Edit</Text></Button>
						</View>
						
				</List>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      )
   }
   
   editPerawat = () => {
		return fetch("https://apirumahsakitbatch124.herokuapp.com/api/perawat/"+this.state.idPerawat, {
        method: 'PUT',
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
			'Edit Berhasil',
		  [
			//{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
			//{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			{text: 'OK', onPress: () => this.props.navigation.navigate("Perawat",{idPerawat:this.state.dataPerawat._id})},
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