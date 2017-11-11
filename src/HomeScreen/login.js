import React from "react";
import { StatusBar, Image, MapView, View, TextInput } from "react-native";
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
    List

} from "native-base";



export default class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    componentDidMount() {

    }
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "green" }}>

                    <Body>
                        <Title>Rumah Sakit Login</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder style={{ backgroundColor: "#f7f7f7" }}  >
                    <Card>
                        <CardItem>
                            <Body>

                                <List>

                                    <View >
                                        <H1>Login {"\n"}</H1>
                                        <Text style={{ fontSize: 20 }}>Username </Text>
                                        <TextInput onChangeText={this.handleUsername}></TextInput>
                                        <Text style={{ fontSize: 20 }}>Login </Text>
                                        <TextInput onChangeText={this.handlePassword}></TextInput>

                                        <Text>{"\n"}</Text>
                                        <Button primary onPress={this.loginValidasi}><Text>Login</Text></Button>
                                    </View>

                                </List>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }

    loginValidasi = () => {
        return fetch("https://apirumahsakitbatch124.herokuapp.com/api/login/authenticate", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Username: this.state.username,
                Password: this.state.password
            })
        })
            .then(response => response.json())
            .then((token) => {
                console.log(token.token);
            })
    }

    // Alert.alert(
    //     'Pesan',
    //     'Create Berhasil',
    //   [
    //     //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    //     //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //     {text: 'OK', onPress: () => this.props.navigation.navigate("Dokter")},
    //   ],
    //   { cancelable: false }
    // )


    handleUsername = (text) => {
        this.setState({ username: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
}
