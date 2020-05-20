import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, View, Modal  } from 'react-native'
import Button from './Button'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const closeHandler = () => {
        props.onClose()
        setEnteredGoal('')
    }

    return (
        <Modal animationType='slide' visible={props.modalVisible}>
            <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder={props.hint}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                    style={styles.input} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title={props.titleButtonNegative} onPress={closeHandler} />
                <Button title={props.titleButtonPositive} onPress={() => {
                    props.onAddGoal(enteredGoal)
                    setEnteredGoal('')
                }} />
            </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        margin: 5,
        width: '80%'
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginTop: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 5,
        borderRadius: 10,
        alignItems: 'center'
    },

})
