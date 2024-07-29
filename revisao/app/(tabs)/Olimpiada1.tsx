import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const Brasil = ({nome, ouro, prata, bronze}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}> {nome}</Text>
            <Text style={styles.text}> Ouro:{ouro}</Text>
            <Text style={styles.text}> Prata:{prata}</Text>
            <Text style={styles.text}> Bronze:{bronze}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        alignItems: 'center',
    },
    text:{
        fontSize: 30,
        color: '#333',
    },

});

export default Brasil