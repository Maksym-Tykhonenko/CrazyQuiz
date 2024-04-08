import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProfileScreen');
        }}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LelSelectionScreen');
        }}>
        <Text>Go to Lvls Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('RulseScreen');
        }}>
        <Text>Go to Rules</Text>
      </TouchableOpacity>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ProfileScreen Screen</Text>
    </View>
  );
}
function LelSelectionScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>LelSelectionScreen Screen</Text>
    </View>
  );
}

function RulseScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>RulseScreen Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LelSelectionScreen"
          component={LelSelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RulseScreen"
          component={RulseScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
