import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react';
import ModalOne from './ModalOne';



const Home = () => {
    

    return (
    // <View>
    //   <Buttons selectedSpell = {selectedSpell} setSelectedSpell = {setSelectedSpell}/>
    // </View>      
    <View style={styles.Container}>         

        <View>
            <Text style={styles.header}>SPELL TIMER</Text>
        </View>

        <View style={styles.Row}>
            <Text style={styles.text}>Top</Text>
            <ModalOne/>
            <ModalOne/>
        </View>

        <View style={styles.Row}>
            <Text style={styles.text}>Jungle</Text>
            <ModalOne/>
            <ModalOne/>
        </View>

        <View style={styles.Row}>
            <Text style={styles.text}>Mid</Text>
            <ModalOne/>
            <ModalOne/>
        </View>

        <View style={styles.Row}>
            <Text style={styles.text}>Bottom</Text>
            <ModalOne/>
            <ModalOne/>
        </View>

        <View style={styles.Row}>
            <Text style={styles.text}>Support</Text>
            <ModalOne/>
            <ModalOne/>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 50,
        color: 'white'
    },
    Buttons: {
        //flexWrap: 'wrap',
        // justifyContent: 'center',
        // alignItems: 'center'
        flexDirection: 'row',
        paddingLeft: 10,
    },
    Row: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
    },
    Container: {
        //marginBottom: 50,
        padding: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#3d3d3d',
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //padding: 20,
        color: 'white'
    }
    
})

export default Home