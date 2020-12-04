import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import LablesAndStars from './LablesAndStars';


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
