import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { dogs } from './breeds';


function Dogs({navigation}) {

  return (
    <View style={styles.container}>
    <Text style = {styles.text}> Dogs List </Text>

        <FlatList
          data={dogs}
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

export default Dogs
