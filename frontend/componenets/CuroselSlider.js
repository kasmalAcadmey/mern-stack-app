import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CuroselSlider = () => {
    const images = [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
        "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
      ];
  return (
    <View style={{paddingVertical: 6}}>
    <Image source={{uri: images[2]}} style={{width: '100%', height: 220}} />
    </View>
  )
}

export default CuroselSlider

const styles = StyleSheet.create({})