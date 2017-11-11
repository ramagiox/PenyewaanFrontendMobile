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
            isModalVisible: false
        }


    }
    _showModal = () => this.setState({ isModalVisible: true })

    _hideModal = () => this.setState({ isModalVisible: false })


    render() {
        AsyncStorage.getItem("username", (error, result) => {
            if (result) {
                console.log("username : " + result)
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

                    <H1 style={{ marginTop: 20, marginLeft: 30, marginRight: 100 }}>Testing</H1>
                    <Card style={{ marginLeft: 30 }}>
                        <Item style={{ paddingLeft: 20, marginRight: 30 }}>
                            <Icon active name='mail' />

                            <Input style={{ marginRight: 30 }} defaultValue='ini email' />
                        </Item>
                        <Item style={{ paddingLeft: 20, marginRight: 30 }}>
                            <Icon active name='home' />

                            <Input style={{ marginRight: 30 }} defaultValue='ini alamat' />
                        </Item>
                        <Item style={{ paddingLeft: 20, marginRight: 30 }}>
                            <Icon active name='call' />

                            <Input style={{ marginRight: 30 }} defaultValue='ini telepon' />
                        </Item>

                    </Card>
                    <TouchableOpacity onPress={this._showModal}>
                        <Text>Show Modal</Text>
                    </TouchableOpacity>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={{ flex: 1, backgroundColor: "white", borderRadius : 50}}>
                            <H1 style={{ marginTop: 20, marginLeft: 30, marginRight: 100 }}>Edit</H1>
                            <Card style={{ marginLeft: 30 }}>
                                <Item style={{ paddingLeft: 20, marginRight: 30 }}>
                                    <Icon active name='mail' />

                                    <Input style={{ marginRight: 30 }} defaultValue='ini email' />
                                </Item>
                                <Item style={{ paddingLeft: 20, marginRight: 30 }}>
                                    <Icon active name='home' />

                                    <Input style={{ marginRight: 30 }} defaultValue='ini alamat' />
                                </Item>
                                <Item style={{ paddingLeft: 20, marginRight: 30 }}>
                                    <Icon active name='call' />

                                    <Input style={{ marginRight: 30 }} defaultValue='ini telepon' />
                                </Item>
								<Item>
								<TouchableOpacity onPress={this._hideModal}>
									<Text>Close Modal</Text>
								</TouchableOpacity>
								</Item>

                            </Card>
                            
                        </View>

                    </Modal>
                </Content>

            </Container>
        );
    }

}



