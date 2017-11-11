import React from "react";
import { StatusBar, Image, MapView, TouchableOpacity } from "react-native";
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
    Thumbnail

} from "native-base";





export default class HomeScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            dataBarang: []
        }
    }

    componentDidMount() {
        fetch("https://penyewaanbatch124.herokuapp.com/api/barang", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {

                this.setState({
                    dataBarang: data
                });




            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "#448afc" }}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Rent</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder style={{ backgroundColor: "#f7f7f7" }}  >
                    {this.state.dataBarang.map((item, index) => (


                        <Card key={item._id}>
                            <CardItem>
                                <Left>

                                    <Body>
                                        <Text>{item.NamaBarang}</Text>

                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody >
                                
                                    <Image source={{ uri: item.Foto }} style={{ height: 300, width: null, flex: 1 }} />
                               
                            </CardItem>
                            <CardItem>
                                <Left>

                                    <Icon name="pricetag" />
                                    <Text>Rp.{item.HargaSewa} / Day</Text>

                                </Left>
                                <Body>

                                </Body>
                                <Right>
                                    <Button transparent onPress={() => this.props.navigation.navigate("Item", {idBarang:item._id})}>
                                       
                                        <Text>Detail</Text>
                                        <Icon name="information-circle" />

                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
                    ))}
                </Content>
               
            </Container>
        );
    }
}



