import React from "react";
import { StatusBar, Image, MapView, Picker, Alert, AsyncStorage, View, TouchableHighlight, TouchableOpacity } from "react-native";
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right,
    Footer,
    FooterTab,
    H1,
    Thumbnail,
    Form,
    Item,
    Label,
    Input

} from "native-base";

import Modal from 'react-native-modal';

export default class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            username : "",
            dataPenyewa : [],
            namaPenyewa : "",
            emailPenyewa : "",
            alamatPenyewa : "",
            noTelp : ""
        }


    }
    _showModal = () => {
        AsyncStorage.getItem("username", (error, result) => {
            if (result) {
                fetch("https://penyewaanbatch124.herokuapp.com/api/penyewa/search/" + result, {
                    method: "GET"
                })
                    .then((response) => response.json())
                    .then((data) => {
        
                        this.setState({
                            dataPenyewa: data,
                            namaPenyewa : data.NamaPenyewa,
                            emailPenyewa : data.EmailPenyewa,
                            alamatPenyewa : data.AlamatPenyewa,
                            noTelp : data.NoTelp
                        });
        
                        console.log(this.state.dataPenyewa);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            
                
            }
        })
        this.setState({ isModalVisible: true })
    
    }

    _hideModal = () => this.setState({ isModalVisible: false })

    componentDidMount() {
       
        
        
    }


    render() {
        AsyncStorage.getItem("username", (error, result) => {
            if (result) {
                fetch("https://penyewaanbatch124.herokuapp.com/api/penyewa/search/" + result, {
                    method: "GET"
                })
                    .then((response) => response.json())
                    .then((data) => {
        
                        this.setState({
                            dataPenyewa: data
                        });
        
                        console.log(this.state.dataPenyewa);
                    })
                    .catch((error) => {
                        console.log(error);
                    })    
            }
        })
        return (
            <Container>
                <Header style={{ backgroundColor: "#448afc" }}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Home")}
                        >
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Profile</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder style={{ backgroundColor: "#f7f7f7" }}  >

                    <H1 style={{ marginTop: 50, marginLeft: 30, marginBottom:30 }}>{this.state.dataPenyewa.NamaPenyewa}</H1>
                    <Card style={{ marginLeft: 30 }}>
                        <Item style={{ paddingLeft: 20, marginRight: 30 }}>
                            <Icon active name='mail' />

                            <Input disabled style={{ marginRight: 30 }} defaultValue={this.state.dataPenyewa.EmailPenyewa} />
                        </Item>
                        <Item style={{ paddingLeft: 20, marginRight: 30 }}>
                            <Icon active name='home' />

                            <Input disabled style={{ marginRight: 30 }} defaultValue={this.state.dataPenyewa.AlamatPenyewa} />
                        </Item>
                        <Item style={{ paddingLeft: 20, marginRight: 30 }}>
                            <Icon active name='call' />

                            <Input disabled style={{ marginRight: 30 }} defaultValue={this.state.dataPenyewa.NoTelp} />
                        </Item>

                    </Card>

                    <Button iconLeft primary rounded style={{marginLeft:"80%", marginTop:50}} onPress={this._showModal}>
                        <Icon name='md-color-filter' />
                        <Text>Edit</Text>
                    </Button>

                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={{ flex: 1, backgroundColor: "white", height: "40%", marginTop: "5%", borderRadius: 50 }}>
                            <H1 style={{ marginTop: 20, marginLeft: 30, marginRight: 100 }}>Edit</H1>
                            <Card style={{ marginLeft: 30, borderRadius: 50 }}>
                                <Item style={{ paddingLeft: 20, marginRight: 30 }}>
                                    <Icon active name='people' />

                                    <Input style={{ marginRight: 30 }} defaultValue={this.state.dataPenyewa.NamaPenyewa} onChangeText = {this.handleNamaPenyewa}/>
                                </Item>
                                <Item style={{ paddingLeft: 20, marginRight: 30 }}>
                                    <Icon active name='mail' />

                                    <Input style={{ marginRight: 30 }} defaultValue={this.state.dataPenyewa.EmailPenyewa} onChangeText = {this.handleEmailPenyewa}/>
                                </Item>
                                <Item style={{ paddingLeft: 20, marginRight: 30 }}>
                                    <Icon active name='home' />

                                    <Input style={{ marginRight: 30 }} defaultValue={this.state.dataPenyewa.AlamatPenyewa} onChangeText = {this.handleAlamatPenyewa}/>
                                </Item>
                                <Item style={{ paddingLeft: 20, marginRight: 30 }}>
                                    <Icon active name='call' />

                                    <Input style={{ marginRight: 30 }} defaultValue={this.state.dataPenyewa.NoTelp} onChangeText = {this.handleNoTelp}/>
                                </Item>

                                <CardItem style={{ marginLeft: "63%", marginTop: 50, marginRight: "5%" }}>

                                    <Button danger rounded style={{ marginRight: 20 }} onPress={this._hideModal}>
                                        <Text>Cancel</Text>
                                    </Button>
                                    <Button primary rounded style={{}} onPress = {this.editPenyewa}>
                                        <Text>Edit</Text>
                                    </Button>

                                </CardItem>

                            </Card>

                        </View>

                    </Modal>
                </Content>

            </Container>
        );
    }

    editPenyewa = () => {
        console.log(this.state.dataPenyewa._id);
		return fetch("https://penyewaanbatch124.herokuapp.com/api/penyewa/"+this.state.dataPenyewa._id, {
        method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
        body: JSON.stringify({
            UserNamePenyewa : this.state.dataPenyewa.UserNamePenyewa,
			NamaPenyewa: this.state.namaPenyewa,
            AlamatPenyewa: this.state.alamatPenyewa,
            EmailPenyewa: this.state.emailPenyewa,
            NoTelp: this.state.noTelp
		})
    })
    .then(response => response.json())
	.then( 
		Alert.alert(
			'Pesan',
			'Update Berhasil',
		  [
			//{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
			//{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => {

            this.setState({ isModalVisible: false });
            this.setState(this.state);

            }},
		  ],
		  { cancelable: false }
		)
	)
	   
   }

    handleNamaPenyewa = (text) => {
        this.setState({ namaPenyewa: text })
     }
     handleEmailPenyewa = (text) => {
        this.setState({ emailPenyewa: text })
     }
     handleAlamatPenyewa = (text) => {
        this.setState({ alamatPenyewa: text })
     }
     handleNoTelp = (text) => {
        this.setState({ noTelp: text })
     }

}



