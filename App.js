import * as React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import Pets from './components/Pets';
import OnePet from './components/OnePet'
import { dogs, cats } from './breeds';



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Settings!
      </Text>
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
      <Stack.Screen name="Pets" component={Pets} />
      <Stack.Screen name="OnePet" component={OnePet} />
    </Stack.Navigator>
  );
}



function PetsWorldScreen({navigation}) {

  return (
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
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Pets') {
            iconName = focused ? 'ios-happy-outline' : 'ios-happy';
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
    <Tab.Screen name="Settings" component={SettingsScreen} />
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
  keyValue: {
    padding: 20,
  }
});
