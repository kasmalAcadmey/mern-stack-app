import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { MaterialIcons, Ionicons ,Entypo} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";



const addresses =[
  {
    id: '1',
    country: 'somalia',
  houseNo: 'guriga u dhaw haawa taako',
  street: 'wada mka al',
  name: 'hussei mohamed',
  landmark: '3191',
  mobileNo: 1919821,
  postalCode: 1221
  },
  {
    id: '2',
    country: 'somalia',
  houseNo: 'guriga u dhaw haawa taako',
  street: 'wada mka al',
  name: 'hussei mohamed',
  landmark: '3191',
  mobileNo: 1919821,
  postalCode: 1221
  },
  {
    id: '3',
    country: 'somalia',
  houseNo: 'guriga u dhaw haawa taako',
  street: 'wada mka al',
  name: 'hussei mohamed',
  landmark: '3191',
  mobileNo: 1919821,
  postalCode: 1221
  },
]
const AddAdressScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{       paddingTop: 40}}>
      <View
        style={{
        
          justifyContent: "center",
          width: "100%",
          height: 40,
    
        }}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black"  onPress={()=> navigation.goBack()}/>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Addresses</Text>

        <Pressable
          onPress={() => navigation.navigate("Add")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            paddingVertical: 7,
            paddingHorizontal: 5,
          }}
        >
          <Text>Add a new Address</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </Pressable>

        <Pressable>
          {/* all the added adresses */}
          {addresses?.map((item, index) => (
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: "#D0D0D0",
                padding: 10,
                flexDirection: "column",
                gap: 5,
                marginVertical: 10,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {item?.name}
                </Text>
                <Entypo name="location-pin" size={24} color="red" />
              </View>

              <Text style={{ fontSize: 15, color: "#181818" }}>
                {item?.houseNo}, {item?.landmark}
              </Text>

              <Text style={{ fontSize: 15, color: "#181818" }}>
                {item?.street}
              </Text>

              <Text style={{ fontSize: 15, color: "#181818" }}>
                India, Bangalore
              </Text>

              <Text style={{ fontSize: 15, color: "#181818" }}>
                phone No : {item?.mobileNo}
              </Text>
              <Text style={{ fontSize: 15, color: "#181818" }}>
                pin code : {item?.postalCode}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 7,
                }}
              >
                <Pressable
                  style={{
                    backgroundColor: "#F5F5F5",
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 5,
                    borderWidth: 0.9,
                    borderColor: "#D0D0D0",
                  }}
                >
                  <Text>Edit</Text>
                </Pressable>

                <Pressable
                  style={{
                    backgroundColor: "#F5F5F5",
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 5,
                    borderWidth: 0.9,
                    borderColor: "#D0D0D0",
                  }}
                >
                  <Text>Remove</Text>
                </Pressable>

                <Pressable
                  style={{
                    backgroundColor: "#F5F5F5",
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 5,
                    borderWidth: 0.9,
                    borderColor: "#D0D0D0",
                  }}
                >
                  <Text>Set as Default</Text>
                </Pressable>
              </View>
            </Pressable>
          ))}
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddAdressScreen;

const styles = StyleSheet.create({});
