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


export default class Active extends React.Component {

    constructor() {
        super()
        this.state = {
            dataAktif : [],
			dataSewaAktif : [],
			dataBarang : [],
			dataSewaAktifDetail : [],
			username : ""
		
        }
    }
	
	
	componentDidMount(){
		AsyncStorage.getItem("username", (error, result) => {
            if (result) {
                console.log("username : " + result)
            }
			this.state.username = result;
			
						
			fetch("https://penyewaanbatch124.herokuapp.com/api/datasewa/search/"+this.state.username,{
            method:"GET"
			})
			.then((response) => response.json())
			.then((data) => {
            
            this.setState({
                dataAktif : data,
				
            });
			
			console.log(this.state.dataAktif)
			})
			.catch((error)=>{
				console.log(error);
			})
	
		
        })
        
    }


    render() {
        return (
           <Container>

        <Content>
          <List>
		  {
				this.state.dataAktif.map((item,index)=>(
            <ListItem>
              <Thumbnail square size={80} source={require('../../assets/images/rumahsakit.jpg')} />
              <Body>
                <Text>{item.KdDataSewa}</Text>
                <Text note>Jumlah Barang : {item.JumlahBarang}</Text>
              </Body>
			  <Right>
				<TouchableOpacity onPress={()=>{this._showModal(item._id,item.KdBarang,item.KdDataSewa)}}>
                        <Text note>View</Text>
                </TouchableOpacity>
			  </Right>
            </ListItem>
			
			
			 ))
			}
          </List>
		  
		  <Modal isVisible={this.state.isModalVisible}>
                        <View style={{ flex: 1, backgroundColor: "white", borderRadius : 50, marginTop:"5%", marginBottom:"15%"}}>
                            <H2 style={{ marginBottom:30,marginTop: 20, marginLeft: 30, marginRight: 100 }}>Aktif Detail</H2>
                   
								{
								this.state.dataBarang.map((item,index)=>(							  
									  <List >
									  <ListItem>
										<Text> Nama Barang : {item.NamaBarang}</Text>
										</ListItem>																	
									  </List>							  
									   ))
								}
							  <List >
							  <ListItem>
								<Text> Kode Data Sewa : {this.state.dataSewaAktif.KdDataSewa}</Text>
								</ListItem>
								
								<ListItem>
								<Text> Jumlah Barang : {this.state.dataSewaAktif.JumlahBarang}</Text>
								</ListItem>
								
								<ListItem>
								<Text> Tanggal Mulai : {this.state.dataSewaAktif.TglMulai}</Text>
								</ListItem>
								
								<ListItem>
								<Text> Tanggal Selesai : {this.state.dataSewaAktif.TglSelesai}</Text>
								</ListItem>
								
								<ListItem>
								<Text> Harga : {this.state.dataSewaAktifDetail.HargaTotal}</Text>
								</ListItem>
							
								
							</List>	

										
				
								<Button  style={{ marginTop:10, width: "25%", marginLeft:"65%"}} rounded light onPress={this._hideModal}>
								
									<Text>Close</Text>
								
								</Button>
	
                            
                        </View>

                    </Modal>
        </Content>
      </Container>
        );
    }

   _showModal(id,KdBarang,KdDataSewa) {
        AsyncStorage.getItem("username", (error, result) => {
            if (result) {
                fetch("https://penyewaanbatch124.herokuapp.com/api/datasewa/"+id, {
                    method: "GET"
                })
                    .then((response) => response.json())
                    .then((data) => {
        
                        this.setState({
                            dataSewaAktif: data
                            
                        });
						this.state.dataSewaAktif.TglMulai=this.state.dataSewaAktif.TglMulai.toString().slice(0,10);
						this.state.dataSewaAktif.TglSelesai=this.state.dataSewaAktif.TglSelesai.toString().slice(0,10);
									fetch("https://penyewaanbatch124.herokuapp.com/api/kdbarang/"+KdBarang, {
								method: "GET"
								})
								.then((response) => response.json())
								.then((data) => {
					
									this.setState({
										dataBarang: data
										
									});
									
													fetch("https://penyewaanbatch124.herokuapp.com/api/pembayaran/kddatasewa/"+KdDataSewa, {
													method: "GET"
													})
													.then((response) => response.json())
													.then((data) => {
										
														this.setState({
															dataSewaAktifDetail: data
															
														});
													
														console.log(data);
													})
													.catch((error) => {
														console.log(error);
													})
									console.log(data);
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
        this.setState({ isModalVisible: true })
    
    }
	
	 _hideModal = () => this.setState({ isModalVisible: false })

    

}



