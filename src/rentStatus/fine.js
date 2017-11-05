import React from "react";
import { StatusBar, Image, MapView, AsyncStorage, Alert, TouchableOpacity} from "react-native";
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
    H1,H2,
    Thumbnail,
    Form,
    Item,
    Label,
    Input,
	List,
	ListItem,
	View

} from "native-base";

import Modal from 'react-native-modal';



export default class Late extends React.Component {

    constructor(){
        super()
        this.state = {     
            dataLate : [],
			dataBarang : [],
			dataSewaLate : [],
			today : new Date(),
			denda : Number,
			dendast : "",
			username : ""
        }
    }
	
	
	

    _hideModal = () => this.setState({ isModalVisible: false })
	
	
	componentDidMount(){
		AsyncStorage.getItem("username", (error, result) => {
            if (result) {
                console.log("username : " + result)
            }
			this.state.username = result;
			
			AsyncStorage.getItem("token", (error, result2) => {
			fetch("https://penyewaanbatch124.herokuapp.com/api/datasewa/search3/"+result+"?token="+result2,{
            method:"GET"
			})
			.then((response) => response.json())
			.then((data) => {
            
            this.setState({
                dataLate : data
            });
			})
			.catch((error)=>{
				console.log(error);
			})
	
			})
        })
        
    }

    render() {
        return (
      <Container>

        <Content>
          <List>
		  {
				this.state.dataLate.map((item,index)=>(
            <ListItem>
              <Thumbnail square size={80} source={require('../../assets/images/rumahsakit.jpg')} />
              <Body>
                <Text>{item.KdDataSewa}</Text>
                <Text note>Jumlah Barang : {item.JumlahBarang}</Text>
              </Body>
			  <Right>
				<TouchableOpacity onPress={()=>{this._showModal(item._id,item.KdBarang)}}>
                        <Text note>View</Text>
                </TouchableOpacity>
			  </Right>
            </ListItem>
			
			
			 ))
			}
          </List>
		  
		  <Modal isVisible={this.state.isModalVisible}>
                        <View style={{ flex: 1, backgroundColor: "white", borderRadius : 50, marginTop:"5%", marginBottom:"15%"}}>
                            <H2 style={{ marginBottom:30,marginTop: 20, marginLeft: 30, marginRight: 100 }}>Late Detail</H2>
                   
							  <List >
							  <ListItem>
								<Text> Kode Data Sewa : {this.state.dataSewaLate.KdDataSewa}</Text>
								</ListItem>
								<ListItem>
								<Text> Status : {this.state.dataSewaLate.StatusDataSewa}</Text>
								</ListItem>
								<ListItem>
								<Text> Tanggal Mulai : {this.state.dataSewaLate.TglMulai}</Text>
								</ListItem>
								<ListItem>
								<Text> Tanggal Selesai : {this.state.dataSewaLate.TglSelesai}</Text>
								</ListItem>
								<ListItem>
								<Text> Jumlah Barang : {this.state.dataSewaLate.JumlahBarang}</Text>
								</ListItem>
								<ListItem>
								<Text> Denda : {this.state.dendast}</Text>
								</ListItem>
							</List>							  
						

						{
						this.state.dataBarang.map((item,index)=>(							  
							  <List >
							  <ListItem>
								<Text> Nama Barang : {item.NamaBarang}</Text>
								</ListItem>																	
							  </List>							  
							   ))
						}		

								
								<Button  style={{ marginTop:10, width: "25%", marginLeft:"65%"}} rounded light onPress={this._hideModal}>
								
									<Text>Close</Text>
								
								</Button> 
                            
                        </View>

                    </Modal>
        </Content>
      </Container>
        );
    }
	


	_showModal(id,KdBarang) {
        AsyncStorage.getItem("token", (error, result) => {
            if (result) {
                fetch("https://penyewaanbatch124.herokuapp.com/api/datasewa/"+id+"?token="+result, {
                    method: "GET"
                })
                    .then((response) => response.json())
                    .then((data) => {
        
                        this.setState({
                            dataSewaLate: data
                            
                        });
									fetch("https://penyewaanbatch124.herokuapp.com/api/kdbarang/"+KdBarang, {
								method: "GET"
								})
								.then((response) => response.json())
								.then((data) => {
					
									this.setState({
										dataBarang: data
										
									});
									
									this.state.denda=(this.state.dataBarang[0].HargaDenda * Math.floor((Date.parse(this.state.today.toString()) - Date.parse(this.state.dataSewaLate.TglSelesai.toString())) / 86400000))
									this.state.dendast = this.state.denda.toString();
									this.state.dataSewaLate.TglMulai=this.state.dataSewaLate.TglMulai.toString().slice(0,10)
									this.state.dataSewaLate.TglSelesai=this.state.dataSewaLate.TglSelesai.toString().slice(0,10)
									console.log(this.state.dataSewaLate.JumlahBarang);
									console.log(this.state.dendast);
									
									console.log(this.state.dataBarang[0].HargaDenda);
									console.log(Date.parse(this.state.today.toString()));
									console.log(Date.parse(this.state.dataSewaLate.TglSelesai.toString()));
									
									console.log(data);
									this.setState({ isModalVisible: true })
								})
								.catch((error) => {
									console.log(error);
								})
        
                        console.log("data 2 : "+this.state.dataSewaAktif);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            
                
            }
        })
        
    
    }  
    

}





