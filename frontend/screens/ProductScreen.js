import { StyleSheet, Text, View, Pressable, TextInput, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Feather, AntDesign} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const ProductScreen = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const featchData = async () => {
          try {
            const res = await axios.get("https://fakestoreapi.com/products");
            setData(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        featchData();
      }, []);
      const navigation = useNavigation()
  return (
    <ScrollView>
        <View
          style={{
            backgroundColor: "#00CED1",
            padding: 10,
            flexDirection: "row",
            paddingTop: 55,
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 38,
              flex: 1,
            }}
          >
            <AntDesign
              style={{ paddingLeft: 10 }}
              name="search1"
              size={22}
              color="black"
            />
            <TextInput placeholder="Search Amazon.in" />
          </Pressable>
  
          <Feather name="mic" size={24} color="black" />
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
            <View style={{ margin: 10 }}>
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
                <Text style={{ fontSize: 14, color: "white" }}>
                  Add To Cart
                </Text>
              </Pressable>
            </View>
          ))}
        </View>

    </ScrollView>
  )
}

export default ProductScreen

const styles = StyleSheet.create({})