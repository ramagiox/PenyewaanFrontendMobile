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

export default class PembayarandetailDetail extends Component {
   constructor(props){
        super(props)
        this.state = {     
			idPembayarandetail : this.props.navigation.state.params.idPembayarandetail,
            dataPembayarandetail : ""
			
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
				
            });
           
			
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
              onPress={() => this.props.navigation.navigate("Pembayarandetail")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Pembayaran Detail</Title>
          </Body>
          <Right>
			<Title onPress={() => this.props.navigation.navigate("PembayarandetailEdit",{idPembayarandetail:this.state.dataPembayarandetail._id})}><Icon name="color-filter" /></Title>
			</Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
			  
                <List>
						
						
						
						<View >
							<H1>Pembayarandetail {this.state.dataPembayarandetail.NamaPembayarandetail}{"\n"}</H1>
							<Text style={{fontSize : 20}}>Kode Pembayaran : {this.state.dataPembayarandetail.KdPembayaran}</Text>
							<Text style={{fontSize : 20}}>Kode Ruangan : {this.state.dataPembayarandetail.KdRuangan}</Text>
							<Text style={{fontSize : 20}}>Harga Ruangan : {this.state.dataPembayarandetail.HargaRuangan}</Text>
							<Text style={{fontSize : 20}}>Kode Dokter : {this.state.dataPembayarandetail.KdDokter}</Text>
							<Text style={{fontSize : 20}}>Harga Dokter : {this.state.dataPembayarandetail.HargaDokter}</Text>
							
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
				return fetch("https://apirumahsakitbatch124.herokuapp.com/api/pembayarandetail/"+this.state.dataPembayarandetail._id, {
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
							{text: 'OK', onPress: () => this.props.navigation.navigate("Pembayarandetail")}
						],
						{ cancelable: false }
					)
				)
			}}
		  ],
		  { cancelable: false }
		)
   }
   
   deletePembayarandetail = () => {
	
	   
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