import React from "react";
import { StatusBar, Image, MapView, Alert } from "react-native";
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





export default class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dataPenyewa : [],
            namaPenyewa: "",
            emailPenyewa: "",
            noTelp: "",
            alamatPenyewa: "",
            usernamePenyewa: "",
            passwordPenyewa: ""
        }
    }


    render() {
        return (
            <Container>

                <Content padder style={{ backgroundColor: "#448afc" }}  >

                    <Form>
                        {/* <Text style={{ height: 450 }} /> */}
                        <Button full transparent
                            style={{ flex: 1, marginTop: 150, marginBottom: 30 }} >
                            <H1 style={{ color: "white" }}>Register</H1>
                        </Button>
                        <Item rounded floatingLabel style={{ backgroundColor: "white", width: '50%', marginLeft: "25%", paddingLeft: 25 }}>
                            <Label style={{ paddingLeft: 25 }}>Full Name</Label>
                            <Input onChangeText={this.handleNamaPenyewa} />
                        </Item>
                        <Item rounded floatingLabel style={{ backgroundColor: "white", width: '50%', marginLeft: "25%", paddingLeft: 25 }}>
                            <Label style={{ paddingLeft: 25 }}>Email</Label>
                            <Input onChangeText={this.handleEmailPenyewa} />
                        </Item>
                        <Item rounded floatingLabel style={{ backgroundColor: "white", width: '50%', marginLeft: "25%", paddingLeft: 25 }}>
                            <Label style={{ paddingLeft: 25 }}>Address</Label>
                            <Input onChangeText={this.handleAlamatPenyewa} />
                        </Item>
                        <Item rounded floatingLabel style={{ backgroundColor: "white", width: '50%', marginLeft: "25%", paddingLeft: 25 }}>
                            <Label style={{ paddingLeft: 25 }}>Phone Number</Label>
                            <Input onChangeText={this.handleNoTelp} keyboardType='numeric' />
                        </Item>
                        <Item rounded floatingLabel style={{ backgroundColor: "white", width: '50%', marginLeft: "25%", paddingLeft: 25 }}>
                            <Label style={{ paddingLeft: 25 }}>Username</Label>
                            <Input onChangeText={this.handleUserNamePenyewa} />
                        </Item>
                        <Item rounded floatingLabel style={{ backgroundColor: "white", width: '50%', marginLeft: "25%", paddingLeft: 25 }}>
                            <Label style={{ paddingLeft: 25 }}>Password</Label>
                            <Input onChangeText={this.handlePasswordPenyewa} secureTextEntry={true} />
                        </Item>
                        <Button onPress={this.createUser} full rounded light style={{ backgroundColor: "white", width: '50%', marginLeft: "25%", marginTop: 50, height: 50 }}>
                            <Text >Register</Text>
                        </Button>
                        <Button full rounded light style={{ backgroundColor: "white", width: '50%', marginLeft: "25%", marginTop: 10, height: 50 }}
                            onPress={() => this.props.navigation.navigate("Login")}
                        >

                            <Text >Back to Login</Text>
                        </Button>

                    </Form>

                </Content>

            </Container>
        );
    }

    createUser = () => {
        fetch("https://penyewaanbatch124.herokuapp.com/api/penyewa/search/" + this.state.usernamePenyewa, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {

                if (this.state.passwordPenyewa == "" || this.state.usernamePenyewa == "" || this.state.noTelp == "" || this.state.namaPenyewa == "" || this.state.emailPenyewa == "" || this.state.alamatPenyewa == "") {
                    Alert.alert(
                        'Warning',
                        'All field must be filled',
                        [
                            //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                            //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            { text: 'OK' },
                        ],
                        { cancelable: false }
                    )
                } else if(data != null){
                   
                    Alert.alert(
                        'Warning',
                        'username already used',
                        [
                            //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                            //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            { text: 'OK' },
                        ],
                        { cancelable: false }
                    )
                } else {
                    return fetch("https://penyewaanbatch124.herokuapp.com/api/penyewa/", {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            NamaPenyewa: this.state.namaPenyewa,
                            EmailPenyewa: this.state.emailPenyewa,
                            AlamatPenyewa: this.state.alamatPenyewa,
                            NoTelp: this.state.noTelp,
                            UserNamePenyewa: this.state.usernamePenyewa,
                            PasswordPenyewa: this.state.passwordPenyewa
                        })
                    })
                        .then(response => response.json())
                        .then(
                        Alert.alert(
                            'Message',
                            'Register Success',
                            [
                                //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                { text: 'OK', onPress: () => this.props.navigation.navigate("Login") },
                            ],
                            { cancelable: false }
                        )
                        )
                }

            })
            .catch((error) => {
                console.log(error);
            })

       

    }

    handleNamaPenyewa = (text) => {
        this.setState({ namaPenyewa: text })
    }
    handleAlamatPenyewa = (text) => {
        this.setState({ alamatPenyewa: text })
    }
    handleEmailPenyewa = (text) => {
        this.setState({ emailPenyewa: text })
    }
    handleNoTelp = (text) => {
        this.setState({ noTelp: text })
    }
    handleUserNamePenyewa = (text) => {
        this.setState({ usernamePenyewa: text })
    }

    handlePasswordPenyewa = (text) => {
        this.setState({ passwordPenyewa: text })
    }

}



