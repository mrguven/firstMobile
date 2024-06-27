
import React from 'react'
import { View,Text, Button, StyleSheet, Image, ImageBackground } from 'react-native'
export default function Alert () {

function onPressLearnMore(){

  
}

  return (
    <View >
      <ImageBackground  source={require('../assets/images/OIG3.jpeg')}  style={style.buttonIcon}>

      </ImageBackground>
    <Text>Alert</Text>
      <Button
  onPress={onPressLearnMore}
  title='search'
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
  )
}

const style=StyleSheet.create({
  buttonIcon: {
    flex: 1,
    width:500,
    height:800,
    opacity:.1
    

    
  }
})