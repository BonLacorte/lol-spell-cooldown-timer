import { View, Text, SafeAreaView, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import ModalPicker from './ModalPicker'

const ModalOne = ({ darkMode, setDarkMode }) => {

  const [ chooseName, setChooseName ] = useState()
  const [ chooseCooldown, setChooseCooldown ] = useState('0')
  const [ cooldownStart, setCooldownStart ] = useState()
  const [ choosePhoto, setChoosePhoto ] = useState()
  const  [timeLeft, setTimeLeft ] = useState(0);

  const [ isModalVisible, setIsModalVisible ] = useState(false)

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool)
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

  const styles = StyleSheet.create({
    touchableOpacity: {
        width:68,
        height:68,
        backgroundColor: '#FF6666',
        borderRadius: 10,
        borderWidth:2,
        borderColor: '#ededed',
    },
    modal: {
      backgroundColor: darkMode ? '#7b8084' : '#e5e5e5',
      borderRadius: 25,
    },
    text: {
      fontSize: 25,
      alignItems: 'center',
      justifyContent: 'center',
      color: darkMode ? '#B5B7BB' : '#7c7c7c',
    },
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      //padding: 20
      paddingTop: 10
    },
    icon: {
      borderRadius: 10
    },
  })

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
      <Modal style={styles.modal}
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
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </Modal>
      {/* <Text style={styles.text}>{cooldownStart}</Text> */}
      <Text style={styles.text}>{timeLeft}</Text>
    </SafeAreaView>
  )
}

export default ModalOne
