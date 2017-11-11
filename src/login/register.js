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

        }
    }


    render() {
        return (
            <Container>

                <Content padder style={{ backgroundColor: "#448afc" }}  >

                    <Form>
                        {/* <Text style={{ height: 450 }} /> */}
                        <Button full transparent
                        style={{flex: 1,marginTop:150,marginBottom:30 }} >
                        <H1 style={{color:"white"}}>Register</H1>
                        </Button>
                        <Item rounded floatingLabel style={{ backgroundColor: "white", marginRight: 200, marginLeft: 200, paddingLeft: 25 }}>
                            <Label style={{ paddingLeft: 25 }}>Full Name</Label>
                            <Input />
                        </Item>
                        <Item rounded floatingLabel style={{ backgroundColor: "white", marginRight: 200, marginLeft: 200, paddingLeft: 25 }}>
                            <Label style={{ paddingLeft: 25 }}>Email</Label>
                            <Input />
                        </Item>
                        <Item rounded floatingLabel style={{ backgroundColor: "white", marginRight: 200, marginLeft: 200, paddingLeft: 25 }}>
                            <Label style={{ paddingLeft: 25 }}>Address</Label>
                            <Input />
                        </Item>
                        <Item rounded floatingLabel style={{ backgroundColor: "white", marginRight: 200, marginLeft: 200, paddingLeft: 25 }}>
                            <Label style={{ paddingLeft: 25 }}>Phone Number</Label>
                            <Input keyboardType = 'numeric'/>
                        </Item>
                        <Item rounded floatingLabel style={{ backgroundColor: "white", marginRight: 200, marginLeft: 200, paddingLeft: 25 }}>
                            <Label style={{ paddingLeft: 25 }}>Username</Label>
                            <Input />
                        </Item>
                        <Item rounded floatingLabel style={{ backgroundColor: "white", marginRight: 200, marginLeft: 200, paddingLeft: 25 }}>
                            <Label style={{ paddingLeft: 25 }}>Password</Label>
                            <Input secureTextEntry={true} />
                        </Item>
                        <Button full rounded light style={{ backgroundColor: "white", marginRight: 200, marginLeft: 200, marginTop:50, height:50 }}>
                            <Text >Register</Text>
                        </Button>
                        <Button full rounded light style={{ backgroundColor: "white", marginRight: 200, marginLeft: 200, marginTop:10, height:50 }}
                        onPress={() => this.props.navigation.navigate("Login")}
                        >
                           
                            <Text >Back to Login</Text>
                        </Button>
                       
                    </Form>

                </Content>

            </Container>
        );
    }

}



