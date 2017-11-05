import React from "react";
import { StatusBar, Image, MapView, AsyncStorage, Alert } from "react-native";
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





export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }


    render() {
        return (
            <Container style={{}}>

                <Content padder style={{ backgroundColor: "#448afc" }}  >

                    <Form>
                        {/* <Text style={{ height: 450 }} /> */}
                        <Image source={{ uri: "https://images.vexels.com/media/users/3/130856/isolated/preview/e2427d48d6395aa84a017e165a62f333-hanging-rent-sign-by-vexels.png" }}
                            style={{ height: 250, width: 250, marginLeft: "33%", flex: 1, marginTop: 75, marginBottom: 75 }} />

                    
                        <Item rounded floatingLabel style={{ backgroundColor: "white", width : '50%', marginLeft:"25%", paddingLeft: 25}}>
                            <Label style={{ paddingLeft: 25 }}>Username</Label>
                            <Input onChangeText={this.handleUsername}/>
                        </Item>
                        <Item rounded floatingLabel style={{ backgroundColor: "white", width : '50%', marginLeft:"25%", paddingLeft: 25 }}>
                            <Label style={{ paddingLeft: 25 }}>Password</Label>
                            <Input secureTextEntry={true} onChangeText={this.handlePassword} />
                        </Item>
                        <Button onPress={this.login}
                            full rounded light style={{ backgroundColor: "white", width : '50%', marginLeft:"25%", marginTop: 50, height: 50 }}>
                            <Text >Login</Text>
                        </Button>
                        <Button full transparent style={{ width : '50%', marginLeft:"25%", marginTop: 50, height: 50 }}
                            onPress={() => this.props.navigation.navigate("Register")}>
                            <Text >Not a member? Sign up now.</Text>
                        </Button>
                    </Form>

                </Content>

            </Container>
        );
    }

    handleUsername = (text) => {
        this.setState({ username: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }

    login = () => {
        return fetch("https://penyewaanbatch124.herokuapp.com/api/login/authenticate", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                UserNamePenyewa: this.state.username,
                PasswordPenyewa: this.state.password
            })
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                AsyncStorage.setItem("username",this.state.username);
                AsyncStorage.setItem("token",data)
                AsyncStorage.getItem("token",(error, result)=> {
                    if(result){
                        console.log("token : "+result)
                    } 
                    console.log("token2 : "+result);
                    if(result==null){
                        
                        Alert.alert(
                            'Pesan',
                            'wrong username/password',
                            [
                                //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                { text: 'OK',style : 'cancel' },
                            ],
                            { cancelable: false }
                        )
                    } else{
                        Alert.alert(
                            'Pesan',
                            'Login Berhasil',
                            [
                                //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                { text: 'OK', onPress: () => 
                                {this.props.navigation.navigate("Home");
                                this.setState(this.state);} },
                            ],
                            { cancelable: false }
                        )
                    }
                })
                
               
           
            })

    }

}



