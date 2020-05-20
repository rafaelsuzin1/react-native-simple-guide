import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Button from './components/Button'

export default function Exemplo1() {

  const [courseGoals, setCourseGoals] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {

  }, [courseGoals])

  console.log(courseGoals)
  

  const addGoalHandler = goal => {
    if (goal.length === 0)
      return

    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goal }])
    setModalVisible(false)
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId)
    })
  }

  const clearGoalsHandler = () => {
    setCourseGoals([])
  }

  return (

    <View style={styles.screen}>
      <View style={styles.modal}>
        <GoalInput
          modalVisible={modalVisible}
          hint={"Goal Here"}
          titleButtonPositive={'OK'}
          titleButtonNegative={'Cancelar'}
          onAddGoal={addGoalHandler}
          onClose={() => setModalVisible(false)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Limpar" onPress={clearGoalsHandler} />
        <Button title="Adicionar" onPress={() => setModalVisible(true)} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem goalId={itemData.item.key} onDelete={removeGoalHandler} value={itemData.item.value} />
        } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 5,
    borderRadius: 10,
  }
})
