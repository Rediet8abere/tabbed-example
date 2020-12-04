import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import LablesAndStars from './LablesAndStars'


const Item = ({pet, breed}) => {
  // console.log("pets ----------->", pet)

  // console.log("keys", keys)
  //

  const petBreedObj = pet.filter((obj) => {
    return obj.breed == breed
  })

  console.log("petBreedObj------>", petBreedObj, breed)

  const keys = Object.keys(petBreedObj)
  console.log("keys---->", keys)
  const features = keys.map((item)=> {
    return <LablesAndStars text={item} value={petBreedObj[item]}/>

  })
  return (
    <View key={breed} style={styles.item}>
       { features }
    </View>
    );
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: '#f3c2ff',
    width: '100%',
    margin: 10
  },
})

export default Item
