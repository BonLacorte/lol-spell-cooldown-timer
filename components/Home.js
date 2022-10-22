import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import ModalOne from './ModalOne';
import Icon from 'react-native-vector-icons/Entypo'

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    const styles = StyleSheet.create({
        container: {
            backgroundColor: darkMode ? '#282f3b' : '#f5f5f5',
            flex: 1,
            paddingTop: 10,

        },
        header: {
            fontSize: 50,
            color: darkMode ? '#B5B7BB' : '#7c7c7c',
            textAlign: "center",
            textAlignVertical: 'center'
            //backgroundColor: '#fff'
        },
        body: {
            marginRight: 20,
            marginLeft: 20,
            //marginTop:10,
            padding: 5,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: darkMode ? '#414853' : '#ededed',
            borderRadius:25
        },
        row: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },
        rowThemeButton: {
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        themeButton: {
            alignSelf: 'flex-start',
            bottom: '5%',
            marginTop: 10,
            marginLeft: 20,
            backgroundColor: darkMode ? '#414853' : '#e5e5e5',
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
        },
        text: {
            color: darkMode ? '#B5B7BB' : '#7c7c7c',
            fontSize: 20,
            flex: 1,
            alignSelf: 'center',
            textAlign: 'center'
        },
    })

    return (
    // <View>
    //   <Buttons selectedSpell = {selectedSpell} setSelectedSpell = {setSelectedSpell}/>
    // </View> 
    <View style={styles.container}>
        <View>
            <Text style={styles.header}>SPELL TIMER</Text>
        </View>

        <View style={styles.body}>        
            <View style={styles.row}>
                <Text style={styles.text}>Top</Text>
                <ModalOne darkMode={darkMode} setDarkMode={setDarkMode}/>
                <ModalOne darkMode={darkMode} setDarkMode={setDarkMode}/>
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Jungle</Text>
                <ModalOne darkMode={darkMode} setDarkMode={setDarkMode}/>
                <ModalOne darkMode={darkMode} setDarkMode={setDarkMode}/>
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Mid</Text>
                <ModalOne darkMode={darkMode} setDarkMode={setDarkMode}/>
                <ModalOne darkMode={darkMode} setDarkMode={setDarkMode}/>
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Bottom</Text>
                <ModalOne darkMode={darkMode} setDarkMode={setDarkMode}/>
                <ModalOne darkMode={darkMode} setDarkMode={setDarkMode}/>
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Support</Text>
                <ModalOne darkMode={darkMode} setDarkMode={setDarkMode}/>
                <ModalOne darkMode={darkMode} setDarkMode={setDarkMode}/>
            </View>
        </View>
        <View style={styles.rowThemeButton}>
            <TouchableOpacity style={styles.themeButton}>
                <Icon name={darkMode ? 'light-up' : 'moon'} size={24}
                color={darkMode ? 'white' : 'black'}
                onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)}
                />
            </TouchableOpacity>
        </View>
    </View>     
    
    )
}

export default Home