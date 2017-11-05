import React from "react";
import { StatusBar, Image, MapView, Picker, Alert, AsyncStorage } from "react-native";
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

import DatePicker from 'react-native-datepicker';

export default class Rent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            idBarang: this.props.navigation.state.params.idBarang,
            dataBarang: [],
            date: new Date(),
            jumlahBarang: "",
            tglMulai: new Date(),
            tglSelesai: ""
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
                            onPress={() => this.props.navigation.navigate("Item", { idBarang: this.state.dataBarang._id })}
                        >
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Rent</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder style={{ backgroundColor: "#f7f7f7" }}  >
                    <Text style={{ flex: 0, marginTop: 50, width : "80%",marginLeft: "10%" }}>Item Detail</Text>
                    <Card style={{ flex: 0, width : "80%",marginLeft: "10%", paddingBottom: 10, paddingRight: 10 }} >
                        <Form>

                            <Item stackedLabel>
                                <Label>Item Name</Label>
                                <Input disabled defaultValue={this.state.dataBarang.NamaBarang} />
                            </Item>
                            <Item stackedLabel>
                                <Label>Rent Price / Day</Label>
                                <Input disabled defaultValue={"" + this.state.dataBarang.HargaSewa} />
                            </Item>
                            <Item stackedLabel>
                                <Label>Stock</Label>
                                <Input disabled defaultValue={"" + this.state.dataBarang.JumlahBarang} />
                            </Item>
                        </Form>
                    </Card>
                    <Text style={{ flex: 0, marginTop: 25, width : "80%",marginLeft: "10%"  }}>Rent Form</Text>
                    <Card style={{ flex: 0, width : "80%",marginLeft: "10%" , paddingBottom: 10, paddingRight: 10 }}  >
                        <Form>
                            <Item stackedLabel>
                                <Label>Amount of Item</Label>
                                <Input keyboardType='numeric' onChangeText={this.handleJumlahBarang} />
                            </Item>
                            <Item stackedLabel>
                                <Label>Rent Date</Label>

                                <DatePicker
                                    style={{ width : "80%",marginLeft: "10%" , marginTop: 10, alignContent: "flex-start", alignItems: "flex-start" }}
                                    date={this.state.tglMulai}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    minDate={this.state.date}
                                    //maxDate="2016-06-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => { this.setState({ tglMulai: date }) }}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label>Return Date</Label>
                                <DatePicker
                                    style={{ width : "80%",marginLeft: "10%" , alignContent: "flex-start", alignItems: "flex-start" }}
                                    date={this.state.tglSelesai}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    minDate={this.state.tglMulai}
                                    //maxDate="2016-06-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => { this.setState({ tglSelesai: date }) }}
                                />
                            </Item>

                        </Form>
                    </Card>

                    <Right>
                        <Button rounded primary onPress={this.submitRent}
                            style={{ marginTop: 100 }}
                        >
                            <Text>Submit Rent</Text>
                        </Button>
                    </Right>
                </Content>

            </Container>
        );
    }
    handleJumlahBarang = (text) => {
        this.setState({ jumlahBarang: text })
    }
    submitRent = () => {
        if (this.state.jumlahBarang == "" || this.state.tglMulai == "" || this.state.tglSelesai == "") {
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
        } else if(this.state.dataBarang.JumlahBarang-this.state.jumlahBarang>=0){
           
            
            AsyncStorage.getItem("token", (error, result) => {
                if (result) {
                    AsyncStorage.getItem("username", (error, result2) => {
                    return fetch("https://penyewaanbatch124.herokuapp.com/api/datasewa?token="+result, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            UserNamePenyewa: result2,
                            JumlahBarang: this.state.jumlahBarang,
                            KdBarang: this.state.idBarang,
                            TglMulai: this.state.tglMulai,
                            TglSelesai: this.state.tglSelesai,
                            StatusDataSewa: "booked",
                            KdDataSewa: "",
                            UserNamePegawai: ""
                        })
                    })
                        .then(response => response.json())
                        .then(
                        Alert.alert(
                            'Message',
                            'Rent Booking Success',
                            [
                                //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                { text: 'OK', onPress: () => {
                                    this.props.navigation.navigate("Home");
                                    if(this.state.dataBarang.JumlahBarang-this.state.jumlahBarang>0){
                                        return fetch("https://penyewaanbatch124.herokuapp.com/api/barang/"+this.state.dataBarang._id, {
                                            method: 'PUT',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify({
                                                JumlahBarang: this.state.dataBarang.JumlahBarang-this.state.jumlahBarang
                                            })
                                        })
                                    } else{
                                        return fetch("https://penyewaanbatch124.herokuapp.com/api/barang/"+this.state.dataBarang._id, {
                                            method: 'PUT',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify({
                                                JumlahBarang: this.state.dataBarang.JumlahBarang-this.state.jumlahBarang,
                                                StatusBarang : "Out of stock"
                                            })
                                        })
                                    }
                                    
                                } },
                            ],
                            { cancelable: false }
                        )
                        )
                    })
                }

            })

        } else{
            Alert.alert(
                'Warning',
                'insufficient stock',
                [
                    //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    { text: 'OK' },
                ],
                { cancelable: false }
            )
        }
    }
}



