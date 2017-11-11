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

export default class DokterDetail extends Component {
   constructor(props){
        super(props)
        this.state = {     
			idDokter : this.props.navigation.state.params.idDokter,
            dataDokter : ""
			
        }
    }
	
	componentDidMount(){
		
			console.log("id dokter : "+this.state.idDokter);
        fetch("https://apirumahsakitbatch124.herokuapp.com/api/dokter/"+this.state.idDokter,{
            method:"GET"
        })
		.then((response) => response.json())
        .then((data) => {
            this.setState({
                dataDokter : data,
				
            });
           
			debugger;
            console.log(this.state.dataDokter);
			console.log(this.state.dataDokter[0].NamaDokter);
        
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
              onPress={() => this.props.navigation.navigate("Dokter")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Dokter Detail</Title>
          </Body>
          <Right>
			<Title onPress={() => this.props.navigation.navigate("DokterEdit",{idDokter:this.state.dataDokter._id})}><Icon name="color-filter" /></Title>
			</Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
			  
                <List>
						
						
						
						<View >
							<H1>Dokter {this.state.dataDokter.NamaDokter}{"\n"}</H1>
							<Text style={{fontSize : 20}}>Spesialis : {this.state.dataDokter.Spesialis}</Text>
							<Text style={{fontSize : 20}}>Hari Tugas : {this.state.dataDokter.HariTugas}</Text>
							<Text style={{fontSize : 20}}>Jam Tugas Mulai : {this.state.dataDokter.JamTugasMulai}</Text>
							<Text style={{fontSize : 20}}>Jam Tugas Selesai : {this.state.dataDokter.JamTugasSelesai}</Text>
							<Text style={{fontSize : 20}}>Keterangan Tambahan : {this.state.dataDokter.KeteranganTambahan}</Text>
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
				return fetch("https://apirumahsakitbatch124.herokuapp.com/api/dokter/"+this.state.dataDokter._id, {
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
							{text: 'OK', onPress: () => this.props.navigation.navigate("Dokter")}
						],
						{ cancelable: false }
					)
				)
			}}
		  ],
		  { cancelable: false }
		)
   }
   
   deleteDokter = () => {
	
	   
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