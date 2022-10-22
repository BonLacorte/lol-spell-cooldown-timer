import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { spells } from './constants' 


// const OPTIONS = ['barrier', 'flash']
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height 
const ModalPicker = (props) => {
  
  const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Modal: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    touchableOpacity: {
      justifyContent: 'center',
      alignItems: 'stretch',
      flexDirection: 'row',
    },
    text: {
      margin: 20,
      fontSize: 20,
      fontWeight: 'bold'
    },
    scrollView: {
      //flexDirection: 'row',
    }, 
    icon: {
      borderRadius: 10
    }
})

  const onPressItem = (spell) => {
    props.changeModalVisibility(false)
    props.setPhoto(spell.uri)             // photo
    props.setCooldown(spell.cooldown)     // cooldown
    props.setName(spell.name)             // name
    props.setStart(spell.cooldown)        // cooldownStart
  }

  const spell = spells.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.touchableOpacity}
        key={index}
        onPress={() => {
          // console.log('hello')
          onPressItem(item)
        }}
      >
        <Image 
          style={styles.icon}
          source={item.uri}>
        </Image>
        <Text style={styles.text}>
          {item.name}
        </Text>
      </TouchableOpacity>
    )
  })

  return (
    <TouchableOpacity
        onPress={() => props.changeModalVisibility(false)}
        style={styles.Container}
    >
      <View style={[styles.Modal, {width: WIDTH - 64, height: HEIGHT / 2}]}>
        <ScrollView style={styles.scrollView}>
          {spell}
        </ScrollView>
      </View>
    </TouchableOpacity>
  )
}

export default ModalPicker