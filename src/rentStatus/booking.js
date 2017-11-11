import React from "react";
import { StatusBar, Image, MapView, AsyncStorage, Alert, TouchableOpacity } from "react-native";
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
	H1, H2,
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



export default class Booking extends React.Component {

	constructor() {
		super()
		this.state = {
			dataBooking: [],
			dataBarang: [],
			username: "",
			dataBarangDetail: [],
			dataSewaDetail: [],
			dataBarang_id: "",
			KdBarang: "",
			NamaBarang: "",
			KdKategori: "",
			HargaSewa: Number,
			HargaDenda: Number,
			StatusBarang: "",
			Foto: "",
			JumlahBarang: Number

		}
	}




	_hideModal = () => this.setState({ isModalVisible: false })


	componentDidMount() {
		AsyncStorage.getItem("username", (error, result) => {
			if (result) {
				console.log("username : " + result)
			}
			this.state.username = result;


			fetch("https://penyewaanbatch124.herokuapp.com/api/datasewa/search2/" + this.state.username, {
				method: "GET"
			})
				.then((response) => response.json())
				.then((data) => {

					this.setState({
						dataBooking: data
					});
				})
				.catch((error) => {
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
							this.state.dataBooking.map((item, index) => (
								<ListItem>
									<Thumbnail square size={80} source={require(item.Foto)} />
									<Body>
										<Text>{item.KdDataSewa}</Text>
										<Text note>Jumlah Barang : {item.JumlahBarang}</Text>
									</Body>
									<Right>
										<TouchableOpacity onPress={() => { this._showModal(item.KdBarang) }}>
											<Text note>View</Text>
										</TouchableOpacity>
									</Right>
								</ListItem>


							))
						}
					</List>

					<Modal isVisible={this.state.isModalVisible}>
						<View style={{ flex: 1, backgroundColor: "white", borderRadius: 50, marginTop: "5%", marginBottom: "5%" }}>
							<H2 style={{ marginBottom: 30, marginTop: 20, marginLeft: 30, marginRight: 100 }}>Booking Detail</H2>

							{
								this.state.dataBooking.map((item, index) => (


									<List >
										<ListItem>
											<Text> Kode Data Sewa : {item.KdDataSewa}</Text>
										</ListItem>
										<ListItem>
											<Text> Status : {item.StatusDataSewa}</Text>
										</ListItem>
										<ListItem>
											<Text> Tanggal Mulai : {item.TglMulai}</Text>
										</ListItem>
										<ListItem>
											<Text> Tanggal Selesai : {item.TglSelesai}</Text>
										</ListItem>
										<ListItem>
											<Text> Jumlah Barang : {item.JumlahBarang}</Text>
										</ListItem>
									</List>

								))
							}

							{
								this.state.dataBarang.map((item, index) => (
									<List >
										<ListItem>
											<Text> Nama Barang : {item.NamaBarang}</Text>
										</ListItem>
									</List>
								))
							}


							<Button style={{ marginTop: 10, width: "25%", marginLeft: "0%" }} rounded light onPress={this._hideModal}>

								<Text>Close</Text>

							</Button>

							{
								this.state.dataBooking.map((item, index) => (

									<Button style={{ marginTop: 10, width: "25%", marginLeft: "65%" }} rounded light onPress={() => { this.dataSewaDelete(item._id, item.KdBarang) }}>

										<Text>Cencel</Text>

									</Button>


								))
							}

						</View>

					</Modal>
				</Content>
			</Container>
		);
	}



	_showModal(KdBarang) {
		AsyncStorage.getItem("username", (error, result) => {
			if (result) {
				fetch("https://penyewaanbatch124.herokuapp.com/api/kdbarang/" + KdBarang, {
					method: "GET"
				})
					.then((response) => response.json())
					.then((data) => {

						this.setState({
							dataBarang: data

						});

						console.log(data);
					})
					.catch((error) => {
						console.log(error);
					})


			}
		})
		this.setState({ isModalVisible: true })

	}


	dataSewaDelete(id, KdBarang) {
		fetch("https://penyewaanbatch124.herokuapp.com/api/kdbarang/" + KdBarang, {
			method: "GET"
		})
			.then((response) => response.json())
			.then((data) => {

				this.setState({
					dataBarangDetail: data[0],
					dataBarang_id: data[0]._id,
					KdBarang: data[0].KdBarang,
					NamaBarang: data[0].NamaBarang,
					KdKategori: data[0].KdKategori,
					HargaSewa: data[0].HargaSewa,
					StatusBarang: data[0].StatusBarang,
					JumlahBarang: data[0].JumlahBarang,
					HargaDenda: data[0].HargaDenda,
					Foto: data[0].Foto



				});

				console.log(this.state.dataBarangDetail);
				console.log("pert : " + this.state.JumlahBarang)
				console.log("id : " + this.state.dataBarang_id);

				fetch("https://penyewaanbatch124.herokuapp.com/api/datasewa/" + id, {
					method: "GET"
				})
					.then((response) => response.json())
					.then((data) => {

						this.setState({
							dataSewaDetail: data,
							JumlahBarangDetail: data.JumlahBarang

						});
						console.log(this.state.dataSewaDetail)
						console.log("kedua : " + this.state.JumlahBarangDetail)
						this.state.JumlahBarang = this.state.JumlahBarang + this.state.JumlahBarangDetail;
						console.log("total : " + this.state.JumlahBarang)

						fetch("https://penyewaanbatch124.herokuapp.com/api/barang/" + this.state.dataBarang_id, {
							method: "PUT",
							headers: {
								'Content-Type': 'application/json',
								'Accept': 'application/json'
							},
							body: JSON.stringify({
								KdBarang: this.state.KdBarang,
								NamaBarang: this.state.NamaBarang,
								KdKategori: this.state.KdKategori,
								HargaSewa: this.state.HargaSewa,
								HargaDenda: this.state.HargaDenda,
								StatusBarang: this.state.StatusBarang,
								JumlahBarang: this.state.JumlahBarang,
								Foto: this.state.Foto
							})
						})

							.then(response => response.json())


							.then(
							fetch("https://penyewaanbatch124.herokuapp.com/api/datasewa/" + id, {
								method: "DELETE"
							})
								.then(
								Alert.alert(
									'Cancel Booking',
									'Anda Telah membatalkan Peminjaman',
									[
										//{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
										//{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
										{
											text: 'OK', onPress: () => {
												
												this.setState({ isModalVisible: false });

												this.props.navigation.navigate("Home");
												
											}
										},
									],
									{ cancelable: false }
								)
								)
							)



					})
					.catch((error) => {
						console.log(error);
					})


			})
			.catch((error) => {
				console.log(error);
			})







	}




}





