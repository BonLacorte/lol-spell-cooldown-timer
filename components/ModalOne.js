import { View, Text, SafeAreaView, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import ModalPicker from './ModalPicker'

const ModalOne = () => {

  const [ chooseName, setChooseName ] = useState()
  const [ chooseCooldown, setChooseCooldown ] = useState('0')
  const [ cooldownStart, setCooldownStart ] = useState()
  const [ choosePhoto, setChoosePhoto ] = useState()
  const  [timeLeft, setTimeLeft ] = useState(0);

  const [ isModalVisible, setIsModalVisible ] = useState(false)

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool)
  }

  const changeCountStatus = (bool) => {
    setIsStarted(bool)
  }

  const setPhoto = (spell) => {
    setChoosePhoto(spell)
  }

  const setCooldown = (spell) => {
    setChooseCooldown(spell)
  }

  const setName = (spell) => {
    setChooseName(spell)
  }

  const setStart = (spell) => {
    setCooldownStart(spell)
  }

  let timer = () => {};

  const startTimer = () => {
      timer = setTimeout(() => {
          if(timeLeft <= 0){
              clearTimeout(timer);
              return false;
          }
          setTimeLeft(timeLeft-1);
      }, 1000)
  }

  useEffect(() => {
      startTimer();
      return () => clearTimeout(timer);
  });  

  const start = () => {
    setTimeLeft(chooseCooldown);
    clearTimeout(timer);
    startTimer();
}

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onLongPress={() => changeModalVisibility(true)}
        onPress={() => {
          setChooseCooldown(cooldownStart)
          start()
        }}
        style={styles.touchableOpacity}
      >
        <Image 
          style={styles.icon}
          //source={chooseData}></Image>
          source={choosePhoto}></Image>
        {/* <Text style={styles.text}>{chooseName}</Text> */}
        
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType='fade'
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker 
          changeModalVisibility={changeModalVisibility}
          //setData={setData}
          setPhoto={setPhoto}
          setCooldown={setCooldown}
          setName={setName}
          setStart={setStart}
        />
      </Modal>
      {/* <Text style={styles.text}>{cooldownStart}</Text> */}
      <Text style={styles.text}>{timeLeft}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  touchableOpacity: {
      width:64,
      height:64,
      backgroundColor: '#aaaaaa',
      borderRadius: 10,
      borderWidth:2,
      borderColor: '#ff9819'
  },
  text: {
    //marginVertical: 20,
    fontSize: 25,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
    color: 'white'
  },
  container: {
    flex: 1,
    //backgroundColor: '#3d3d3d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  icon: {
    borderRadius: 10
  },
})

export default ModalOne
