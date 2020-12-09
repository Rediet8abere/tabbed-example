import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newTodo } from '../actions'

import { StyleSheet, View, Text, FlatList, TouchableOpacity, SafeAreaView, ScrollView, Button } from 'react-native';
import LablesAndStars from './LablesAndStars';

import NewTodo from './todo-new'

function OnePet({navigation, route}) {
  const {breed} = route.params


  const keys = Object.keys(route.params)
  const features = keys.filter((key)=> {
    if (key === "breed") return false
    return true
  }).map((key) => {
    return <LablesAndStars text={key} value={route.params[key]}/>
  })

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>  Pet  {breed}</Text>

        <Button
          style={{
             backgroundColor: '#222',
             borderRadius: 5,
             padding: 10,
             margin: 20
           }}
          onPress= {() =>
            navigation.navigate('NewTodo', breed)
          }
          title={breed}
        />
        {features}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold'
  },
  scrollView: {
    marginHorizontal: 20,
  }
});

export default OnePet
