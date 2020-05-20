import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => props.onDelete(props.goalId)}>
            <View style={styles.item} onTouchEnd={() => props.onPress} >
                <Text style={styles.itemText}>{props.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        backgroundColor: '#565895'
    },
    itemText: {
        color: 'white',
    }
})
