import React from "react";
import { AppRegistry, Image, StatusBar, AsyncStorage } from "react-native";
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

  constructor(props) {
    super(props)
    this.state = {
      showTheThing: true,
      showTheThing2: true
    }
  }

  componentDidMount() {
    AsyncStorage.getItem("username", (error, result) => {
      if (result) {
        this.setState({ showTheThing: false })
        this.setState({ showTheThing2: true })
      } else{
        this.setState({ showTheThing: true })
        this.setState({ showTheThing2: false })  
      }
    })
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
            {this.state.showTheThing &&
              <ListItem
                button
                onPress={() => this.props.navigation.navigate("Login")}
                style={this.state.style}
              >
                <Icon name="unlock" />
                <Text>{"    "}Login</Text>
              </ListItem>
            }

            {this.state.showTheThing2 && <ListItem
              button
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Icon name="people" />
              <Text>{"    "}Profile</Text>
            </ListItem>
            }
            {this.state.showTheThing2 &&<ListItem
              button
              onPress={() => this.props.navigation.navigate("RentStatus")}
            >
              <Icon name="md-cart" />
              <Text>{"    "}Rent Status</Text>
            </ListItem>}

            {this.state.showTheThing2 &&
              <ListItem
                button
                onPress={() => {
                  AsyncStorage.removeItem("username");
                  AsyncStorage.removeItem("token");
                  this.setState(this.state);
                  this.props.navigation.navigate("Home")
                }}
                style={this.state.style}
              >
                <Icon name="unlock" />
                <Text>{"    "}Logout</Text>
              </ListItem>
            }

          </List>
        </Content>
      </Container>
    );
  }
}
