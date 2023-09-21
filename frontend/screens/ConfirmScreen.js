import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const ConfirmScreen = () => {
  const steps = [
    { title: "Address", content: "Address Form" },
    { title: "Delivery", content: "Delivery Options" },
    { title: "Payment", content: "Payment Details" },
    { title: "Place Order", content: "Order Summary" },
  ];
  const [currentState, setCurrentState] = useState(0);
  const [slected, SetSlected] = useState([])
  const [option, setOption] = useState(false)
  const [selectedOption, setSelectedOption]= useState('')
  
  const addresses = [
    {
      id: "1",
      country: "somalia",
      houseNo: "guriga u dhaw haawa taako",
      street: "wada mka al",
      name: "hussei mohamed",
      landmark: "3191",
      mobileNo: 1919821,
      postalCode: 1221,
    },
    {
      id: "2",
      country: "somalia",
      houseNo: "guriga u dhaw haawa taako",
      street: "wada mka al",
      name: "hussei mohamed",
      landmark: "3191",
      mobileNo: 1919821,
      postalCode: 1221,
    },
    {
      id: "3",
      country: "somalia",
      houseNo: "guriga u dhaw haawa taako",
      street: "wada mka al",
      name: "hussei mohamed",
      landmark: "3191",
      mobileNo: 1919821,
      postalCode: 1221,
    },
  ];
  const navigation = useNavigation()
  const handlePlaceOrder = ()=>{
    navigation.navigate('Main')
  }

  selectedAddress ={
    name: 'hussein mohamed'
  }
  const cart = useSelector((state)=> state.cart)
  const total = cart.price
console.log('here is total ',total)
  return (
    <ScrollView style={{ marginTop: 40 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        {steps.map((item, index) => (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {index > 0 && (
              <View
                style={[
                  { backgroundColor: "green", height: 2, flex: 1 },
                  index <= currentState && { backgroundColor: "green" },
                ]}
              ></View>
            )}
            <View
              style={[
                {
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: "#ccc",
                  alignItems: "center",
                  justifyContent: "center",
                },
                index < currentState && { backgroundColor: "green" },
              ]}
            >
              {index < currentState ? (
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  {" "}
                  &#10003;
                </Text>
              ) : (
                <Text>{index + 1}</Text>
              )}
            </View>
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
              }}
            >
              {item.title}
            </Text>
          </View>
        ))}
      </View>
      {currentState == 0 && (
        <View style={{ marginTop: 20 }}>
          <Text
            style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}
          >
            Slect your Current Address{" "}
          </Text>
          <ScrollView>
            {addresses.map((item) => (
                <View>
              <Pressable
              key={item.id}
              onPress={()=> SetSlected(item.id)}
                style={{
                  borderColor: "#ccc",
                  borderWidth: 1,
                  borderRadius: 1,
                  margin: 10,
                  padding: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >{slected.includes(item.id) ? (

                  <FontAwesome5 name="dot-circle" size={24} color="black" />
              )
                :
                (

<Entypo name="circle" size={24} color="black" />
                )

              }
                
                <View style={{justifyContent: 'center', marginLeft: 10}}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 3,
                    }}
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
                  {slected.includes(item.id) &&  
                  (
                    <Pressable
                    onPress={()=> setCurrentState(currentState + 1)}
                    style={{backgroundColor: 'royalblue', marginTop: 10, padding: 9, justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
                    <Text style={{fontSize: 18, color: 'white', }}>Delivery to this Address</Text>
                </Pressable>
                  )
                  }
                 
                </View>
              </Pressable>
               
              </View>
            ))}
          </ScrollView>
        </View>
        
      )}
       {currentState == 1 && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Choose your delivery options
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              padding: 8,
              gap: 7,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            {option ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo
                onPress={() => setOption(!option)}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text style={{ flex: 1 }}>
              <Text style={{ color: "green", fontWeight: "500" }}>
                Tomorrow by 10pm
              </Text>{" "}
              - FREE delivery with your Prime membership
            </Text>
          </View>

          <Pressable
            onPress={() => setCurrentState(2)}
            style={{
              backgroundColor: "#FFC72C",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text>Continue</Text>
          </Pressable>
        </View>
      )}
       {currentState == 2 && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Select your payment Method
          </Text>

          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 7,
              marginTop: 12,
            }}
          >
            {selectedOption === "cash" ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo
                onPress={() => setSelectedOption("cash")}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text>Cash on Delivery</Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 7,
              marginTop: 12,
            }}
          >
            {selectedOption === "evc" ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo
                onPress={() => setSelectedOption("evc")}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text>Evc Plus</Text>
          </View>

          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 7,
              marginTop: 12,
            }}
          >
            {selectedOption === "card" ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo
                onPress={() => {
                  setSelectedOption("card");
                  Alert.alert("UPI/Debit card", "Pay Online", [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel is pressed"),
                    },
                    {
                      text: "OK",
                      onPress: () => pay(),
                    },
                  ]);
                }}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text>UPI / Credit or debit card</Text>
          </View>
          <Pressable
            onPress={() => setCurrentState(3)}
            style={{
              backgroundColor: "#FFC72C",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text>Continue</Text>
          </Pressable>
        </View>
      )}
 {currentState === 3 && selectedOption === "evc" && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Order Now</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                Save 5% and never run out
              </Text>
              <Text style={{ fontSize: 15, color: "gray", marginTop: 5 }}>
                Turn on auto deliveries
              </Text>
            </View>

            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>

          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <Text>Shipping to {selectedAddress?.name}</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>
                Items
              </Text>

              <Text style={{ color: "gray", fontSize: 16 }}>${total}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>
                Delivery
              </Text>

              <Text style={{ color: "gray", fontSize: 14 }}>$0</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Order Total
              </Text>

              <Text
                style={{ color: "#C60C30", fontSize: 17, fontWeight: "bold" }}
              >
                {/* ${total} */}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "gray" }}>Pay With</Text>

            <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 7 }}>
              Pay on delivery (Cash)
            </Text>
          </View>

          <Pressable
            onPress={handlePlaceOrder}
            style={{
              backgroundColor: "#FFC72C",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text>Place your order</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({});
