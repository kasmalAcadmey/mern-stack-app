import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { deals, list, offers } from "../data";
import CuroselSlider from "../componenets/CuroselSlider";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { addTocart } from "../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [added, setAdded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const AddedTocart = (item) => {
    setAdded(true);
    dispatch(addTocart(item));
    setTimeout(() => {
      setAdded(false);
    }, 6000);
  };
  useEffect(() => {
    const featchData = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products?limit=6"
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    featchData();
  }, []);
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  console.log("her is the information", cart);
  return (
    <>
      <View style={{}}>
        <ScrollView>
          <View
            style={{
              backgroundColor: "#00ced1",
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 55,
              gap: 5,
            }}
          >
            <Pressable
              style={{
                backgroundColor: "white",
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                marginHorizontal: 7,
                borderRadius: 4,
                height: 38,
                gap: 10,
              }}
            >
              <Feather name="search" size={17} color="black" />
              <TextInput placeholder="What are you looking for ?" />
            </Pressable>
            <FontAwesome name="microphone" size={24} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              backgroundColor: "#77f6fb",
              padding: 10,
            }}
          >
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                marginLeft: 7,
              }}
            >
              <Ionicons name="location-outline" size={24} color="black" />
              <Text style={{ fontSize: 14, fontWeight: "500" }}>
                Add your addres this addres is
              </Text>
            </Pressable>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list.map((item, index) => (
              <Pressable
                key={index}
                style={{
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={{ uri: item.image }}
                />

                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: "500",
                    marginTop: 5,
                  }}
                >
                  {item?.name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
          <CuroselSlider />

          <View>
            <Text
              style={{ marginHorizontal: 10, fontSize: 22, fontWeight: "500" }}
            >
              Today's Deals
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {offers.map((item) => (
                <Pressable
              
                  onPress={() =>
                    navigation.navigate("Info", {
                      id: item.id,
                      title: item.title,
                      price: item?.price,
                      carouselImages: item.carouselImages,
                      color: item?.color,
                      size: item?.size,
                      oldPrice: item?.oldPrice,
                      item: item,
                    })
                  }
                  key={item.id}
                  style={{ marginTop: 20, marginHorizontal: 5 }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 120, height: 120, resizeMode: "contain" }}
                  />
                  <View
                    style={{
                      marginVertical: 5,
                      backgroundColor: "red",
                      borderRadius: 10,
                      paddingHorizontal: 5,
                      paddingVertical: 3,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 15, color: "white" }}>
                      Upto {item.offer}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
            <Text
              style={{
                height: 1,
                width: "100%",
                borderColor: "lightgray",
                borderWidth: 1,
                marginVertical: 15,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pressable
              style={{ alignItems: "center", gap: 10, marginVertical: 10 }}
            >
              <View
                style={{
                  backgroundColor: "#feb6be",
                  borderRadius: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                  width: 170,
                  height: 100,
                }}
              >
                <View style={{ gap: 5 }}>
                  <Text style={{ fontSize: 14, color: "gray" }}>Its Yours</Text>
                  <Text>Electronics</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "white",
                      textDecorationLine: "underline",
                    }}
                  >
                    Shop Now
                  </Text>
                </View>
                <Image
                  source={require("../assets/Home-Category-3-Smart-Watches.png")}
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    marginHorizontal: 20,
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 20,
                  position: "relative",
                  width: 170,
                  height: 270,
                }}
              >
                <View style={{ marginTop: 20 }}>
                  <Text>Oh-so-sweet from $19.9</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "black",
                      textDecorationLine: "underline",
                    }}
                  >
                    Shop Now
                  </Text>
                </View>
                <Image
                  source={require("../assets/Home-Category-2-Smart-Watches.png")}
                  style={{
                    width: 170,
                    height: 140,
                    resizeMode: "contain",
                    position: "absolute",
                    bottom: 0,
                  }}
                />
              </View>
            </Pressable>
            <Pressable style={{ marginLeft: 10, width: 200, height: 400 }}>
              <ImageBackground
                source={require("../assets/wd-ship-1.jpg")}
                style={{
                  width: 200,
                  height: 400,
                  borderRadius: 10,
                  resizeMode: "cover",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    top: 45,
                    marginVertical: 10,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ fontSize: 17, color: "white" }}>
                    Home account they will{" "}
                  </Text>
                  <Text style={{ color: "white", fontSize: 16 }}>love</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "white",
                      textDecorationLine: "underline",
                    }}
                  >
                    Shop Now
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>
          </View>
          <View>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 10,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Tranding Deals of the week
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                marginVertical: 10,
                marginHorizontal: 10,
              }}
            >
              {deals.map((item) => {
                return (
                  <Pressable
                    onPress={() =>
                      navigation.navigate("Info", {
                        id: item.id,
                        title: item.title,
                        price: item?.price,
                        carouselImages: item.carouselImages,
                        color: item?.color,
                        size: item?.size,
                        oldPrice: item?.oldPrice,
                        item: item,
                      })
                    }
                    key={item.id}
                    style={{ marginVertical: 10 }}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={{ width: 170, height: 170, resizeMode: "contain" }}
                    />
                  </Pressable>
                );
              })}
            </View>
          </View>

          <Text
            style={{
              height: 1,
              width: "100%",
              borderColor: "lightgray",
              borderWidth: 1,
              marginVertical: 15,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 19 }}>Most View Products</Text>
            <Text style={{ color: "#f3b62c", fontSize: 16 }}>View All</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.map((item) => (
              <Pressable key={item.id} style={{ margin: 10 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 160, height: 160 }}
                  resizeMode="contain"
                />
                <Text numberOfLines={1} style={{ width: 150 }}>
                  {item.title}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginHorizontal: 5,
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    ${item.price}
                  </Text>
                  <Text style={{ fontSize: 16, color: "royalblue" }}>
                    {item.rating.rate} ratings
                  </Text>
                </View>
                <Pressable
                  onPress={() => AddedTocart(item)}
                  style={{
                    backgroundColor: "#f3b62c",
                    padding: 8,
                    borderRadius: 50,
                    marginVertical: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 5,
                  }}
                >
                  {added ? (
                    <Text style={{ fontSize: 14, color: "white" }}>
                      Added your cart
                    </Text>
                  ) : (
                    <Text style={{ fontSize: 14, color: "white" }}>
                      Add To Cart
                    </Text>
                  )}
                </Pressable>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
      <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent>
          <View style={{ width: "100%", height: 400 }}>
            <View>
              <Text style={{fontSize: 16, fontWeight : '500', marginBottom: 2}}>Choose your location</Text>
              <Text style={{fontSize: 15, color: 'gray'}}>
                Select a delivery location to see product availabltiy and
                delivery options{" "}
              </Text>
<ScrollView>


              <Pressable
              onPress={()=>  {
                setModalVisible(false)
                navigation.navigate('Address')
              }}
                style={{
                  width: 130,
               height: 130,
                  borderRadius: 1,
                  backgroundColor: "white",
                  borderColor: "lightgray",
                  borderWidth: 2,
                  padding: 10,
                  justifyContent : 'center',
                  marginVertical: 20
                }}
              >
                <Text style={{fontSize: 14, color: 'royalblue'}}>Add on Address </Text>
                <Text style={{fontSize: 14}}>Or pick up ponit</Text>
              </Pressable>
              </ScrollView>
              <View style={{ flexDirection: "column", gap: 10 }}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Ionicons name="location-outline" size={24} color="black" />
                  <Text>Enter on somalia address</Text>
                </View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <MaterialIcons name="my-location" size={24} color="black" />
                  <Text>use your conrrect location</Text>
                </View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Fontisto name="world" size={24} color="black" />
                  <Text>Enter on somalia address</Text>
                </View>
              </View>
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
