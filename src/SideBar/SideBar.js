import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Thumbnail
} from "native-base";
const routes = ["Home", "Profil"];
export default class SideBar extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <Container>
        <Content>
          <Text

            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#448afc"
            }}
          >
            <Thumbnail
              style={{ marginTop: 10, marginLeft: 10 }}
              source={require("../../assets/images/hospital.png")}
            />
          </Text>
          <List>

            <ListItem
              button
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Icon name="home" />
              <Text>{"    "}Home</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Icon name="unlock" />
              <Text>{"    "}Login</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Icon name="people" />
              <Text>{"    "}Profile</Text>
            </ListItem>
			<ListItem
              button
              onPress={() => this.props.navigation.navigate("RentStatus")}
            >
              <Icon name="md-cart" />
              <Text>{"    "}Rent Status</Text>
            </ListItem>


          </List>
        </Content>
      </Container>
    );
  }
}
