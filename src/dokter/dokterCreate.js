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

export default class DokterCreate extends Component {
   constructor(props){
        super(props)
        this.state = {     
			
            dataDokter : "",
			namaDokter : "",
			spesialis :"",
			hariTugas :"",
			jamTugasMulai : "",
			jamTugasAkhir : "",
			keteranganTambahan : ""
			
        }
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
            <Title>Dokter Create</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
			  
                <List>
						
						<View >
							<H1>Data Dokter{"\n"}</H1>
							<Text style={{fontSize : 20}}>Nama Dokter </Text>
							<TextInput  onChangeText = {this.handleNamaDokter}></TextInput>
							<Text style={{fontSize : 20}}>Spesialis </Text>
							<TextInput onChangeText = {this.handleSpesialis}></TextInput>
							<Text style={{fontSize : 20}}>Hari Tugas </Text>
							<TextInput  onChangeText = {this.handleHariTugas}></TextInput>
							<Text style={{fontSize : 20}}>Jam Tugas Mulai </Text>
							<TextInput  onChangeText = {this.handleJamTugasMulai}></TextInput>
							<Text style={{fontSize : 20}}>Jam Tugas Selesai </Text>
							<TextInput  onChangeText = {this.handleJamTugasSelesai}></TextInput>
							<Text style={{fontSize : 20}}>Keterangan Tambahan</Text>
							<TextInput  onChangeText = {this.handleKeteranganTambahan}></TextInput>
							<Text>{"\n"}</Text>
							<Button primary onPress = {this.createDokter}><Text>Create</Text></Button>
						</View>
						
				</List>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      )
   }
   
   createDokter = () => {
		return fetch("https://apirumahsakitbatch124.herokuapp.com/api/dokter/", {
        method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
        body: JSON.stringify({
			NamaDokter: this.state.namaDokter,
			Spesialis: this.state.spesialis,
			HariTugas: this.state.hariTugas,
			JamTugasMulai: this.state.jamTugasMulai,
			JamTugasSelesai: this.state.jamTugasSelesai,
			KeteranganTambahan : this.state.keteranganTambahan
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
			{text: 'OK', onPress: () => this.props.navigation.navigate("Dokter")},
		  ],
		  { cancelable: false }
		)
	)
	   
   }
   
   handleNamaDokter = (text) => {
      this.setState({ namaDokter: text })
   }
   handleSpesialis = (text) => {
      this.setState({ spesialis: text })
   }
   handleHariTugas = (text) => {
      this.setState({ hariTugas: text })
   }
   handleJamTugasMulai = (text) => {
      this.setState({ jamTugasMulai: text })
   }
   handleJamTugasSelesai = (text) => {
      this.setState({ jamTugasSelesai: text })
   }
   handleKeteranganTambahan = (text) => {
      this.setState({ keteranganTambahan: text })
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