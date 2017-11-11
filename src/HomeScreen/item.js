import React from "react";
import { StatusBar, Image, MapView } from "react-native";
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





export default class Item extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            idBarang: this.props.navigation.state.params.idBarang,
            dataBarang: []
        }
    }

    componentDidMount() {
        fetch("https://penyewaanbatch124.herokuapp.com/api/barang/" + this.state.idBarang, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {

                this.setState({
                    dataBarang: data
                });

                console.log(this.state.dataBarang);
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
                            onPress={() => this.props.navigation.navigate("Home")}
                        >
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Item</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder style={{ backgroundColor: "#f7f7f7" }}  >
                   
                    <Card style={{ flex: 0 }} >
                        <CardItem>
                            <Left>
            
                                <Body>
                                    <Text>{this.state.dataBarang.NamaBarang}</Text>
                                    <Text note>{this.state.dataBarang.KdBarang}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                    
                                
                                <Image source={{ uri: "https://i.imgur.com/oImplax.jpg" }} style={{height: 600, width: 700, flex: 1 }} />
                                <Text style={{marginTop : 30}}>Status : {this.state.dataBarang.StatusBarang}</Text>
                                <Text>Stock : {this.state.dataBarang.JumlahBarang}</Text>
                            </Body>
                           
                        </CardItem>
                        <CardItem>
                            <Body>
                               <Button transparent />
                            </Body>
                             <Right>
                                <Button rounded primary onPress={() => this.props.navigation.navigate("Rent", {idBarang:this.state.dataBarang._id})}>
                                    <Icon name="cart" />
                                    <Text>Rent</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                   
                </Content>
                
            </Container>
        );
    }
}



