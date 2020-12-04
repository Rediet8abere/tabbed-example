import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';


function Pets({navigation, route}) {
  const {dogs} = route.params
  return (
    <View style={styles.container}>
    <Text style = {styles.text}>  All Pets </Text>

        <FlatList
          data={route.params}
          renderItem= {({index, item}) => {
            return (
              <TouchableOpacity
                 key = {item.breed}
                 style={styles.buttonContainer}
                 onPress={() => {
                         navigation.navigate('OnePet', item)
                       }} >

                 <Text style={styles.buttonText}> {item.breed} </Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={dogs => dogs.breed}
          />

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
  },
  buttonContainer: {
   backgroundColor: '#222',
   borderRadius: 5,
   padding: 10,
   margin: 20
 },
 buttonText: {
    fontSize: 20,
    color: '#fff'
  },
});

export default Pets
