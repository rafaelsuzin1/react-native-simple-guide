import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Button = props => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.allCaps ? props.title.toUpperCase() : props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 5,
        borderRadius: 10,
        alignItems: 'center'
    },
    button: {
        margin: 5,
        backgroundColor: '#565895',
        paddingVertical:10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
    }

})
