import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Item from './Item';
import { dogs } from './breeds';

function OnePet({navigation, route}) {
  const {breed} = route.params

  const keys = Object.keys(route.params)
  const features = keys.filter((key)=> {
    if (key === "breed") return false
    return true
  }).map((key) => {
    return <Text> {key} : {route.params[key]} </Text>
  })

  return (
    <View style={styles.container}>
      <Text style={styles.text}>  One Pet  {breed}</Text>
      {features}
    </View>
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
  }
});

export default OnePet
