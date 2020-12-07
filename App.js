import React, { useState } from 'react';
import {  ImageBackground, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import Pets from './components/Pets';
import OnePet from './components/OnePet'
import { dogs, cats } from './breeds';
import { Searchbar } from 'react-native-paper';


const image = { uri: "https://stmedia.stimg.co/ows_154117507482497.jpg?auto=compress&crop=faces&dpr=2&w=1094&fit=clip&h=471" };

function HomeScreen() {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>Welcome to Pets Home!</Text>
      </View>
    </ImageBackground>
  );
}

function SearchScreen({navigation}) {
  const [search, setSearch] = useState('')

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Searchbar
         placeholder="Search"
         onChangeText={(text) => setSearch(text)}
         value={search}
       />

        <FlatList
          data={dogs.filter(dog => dog.breed.toLowerCase().includes(search.toLowerCase()))}
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

const Stack = createStackNavigator();
function StackScreen() {
  return (
    <Stack.Navigator
        initialRouteName="Screen1"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen name="Screen1" component={PetsWorldScreen} />
      <Stack.Screen name="Search" component={PetsWorldScreen} />
      <Stack.Screen name="Pets" component={Pets} />
      <Stack.Screen name="OnePet" component={OnePet} />
    </Stack.Navigator>
  );
}

function StackSearchScreen() {
  return (
    <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="OnePet" component={OnePet} />
    </Stack.Navigator>
  );
}



function PetsWorldScreen({navigation}) {

  return (
    <ImageBackground source={image} style={styles.image}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Pets World:)</Text>
          <TouchableOpacity
           style={styles.buttonContainer}
           onPress={() => navigation.navigate('Pets', dogs)}
         >
           <Text style={styles.buttonText}>Go to Dogs </Text>
         </TouchableOpacity>

         <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Pets', cats)}
        >
          <Text style={styles.buttonText}>Go to Cats </Text>
        </TouchableOpacity>

        </View>
    </ImageBackground>
  );

}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search';
          } else if (route.name === 'Pets') {
            iconName = focused ? 'ios-happy' : 'ios-happy';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={StackSearchScreen} />
    <Tab.Screen name="Pets" component={StackScreen} />



    </Tab.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
 title: {
    fontSize: 32,
  },
  text: {
    fontSize: 20,
    backgroundColor: '#fff',
    padding: 10,
  },
  keyValue: {
    padding: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
