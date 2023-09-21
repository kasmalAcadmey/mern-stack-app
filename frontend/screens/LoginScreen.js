import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    Alert
  } from "react-native";
  import React, { useState,useEffect } from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
  
  const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation();
  useEffect(()=>{
const featchData = async ()=>{
  try{
const token  =await AsyncStorage.getItem('authToken')
if(token){
  navigation.navigate('Main')
}

  }catch(err){
    console.log(err)
  }
}
featchData()
  },[])
    const handleLogin =  () => {
      navigation.navigate('Main')
    const user = {
      email,
      password
    }
   setLoading(true)
     axios.post('http://192.168.1.105:8000/api/auth/login',user).then((respond)=> {
console.log(respond)
setLoading(false)
Alert.alert('Register is Succufull', 'please  go your email we send activation code')
navigation.navigate('Main')
setEmail('')
setName('')
setPassword('')
     }).catch((err)=> {
      console.log(err.response)
      setLoading(false)
      Alert.alert('Regisreation Filed', 'please try again  ')
     })
     console.warn('cliked')
      };

    
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "white", alignItems: "center",marginTop:50 }}
      >
        <View>
          <Image
            style={{ width: 150, height: 100 , resizeMode: 'contain'}}
            source={{
              uri: "https://www.kasmal.com/_next/image?url=%2Fimages%2Fkasmal%2Fkasmal0.png&w=1920&q=75",
            }}
          />
        </View>
  
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginTop: 12,
                color: "#041E42",
              }}
            >
              Login In to your Account
            </Text>
          </View>
  
          <View style={{ marginTop: 70 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <MaterialIcons
                style={{ marginLeft: 8 }}
                name="email"
                size={24}
                color="gray"
              />
  
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: email ? 16 : 16,
                }}
                placeholder="enter your Email"
              />
            </View>
          </View>
  
          <View style={{ marginTop: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <AntDesign
                name="lock1"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />
  
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: password ? 16 : 16,
                }}
                placeholder="enter your Password"
              />
            </View>
          </View>
  
          <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Keep me logged in</Text>
  
            <Text style={{ color: "#007FFF", fontWeight: "500" }}>
              Forgot Password
            </Text>
          </View>
  
          <View style={{ marginTop: 80 }} />
  
          <Pressable
            onPress={handleLogin}
            style={{
              width: 330,
              backgroundColor: "royalblue",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
            }}
          >
          {loading ? 
          
          <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Loading...
        </Text>
          :
           
           <Text
           style={{
             textAlign: "center",
             color: "white",
             fontSize: 16,
             fontWeight: "bold",

           }}
         >
           Login
         </Text>
          }
          </Pressable>
  
          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Don't have an account? Sign Up
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
            }
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({});
  

