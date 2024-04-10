import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/bgr1.jpeg')}
        style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              width: 250,
              height: 80,
              borderWidth: 3,
              borderRadius: 20,
              marginBottom: 20,
              borderColor: '#d8ab45',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('LelSelectionScreen');
            }}>
            <Text style={{color: '#d8ab45', fontSize: 30, fontWeight: 'bold'}}>
              PLAY
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 250,
              height: 80,
              borderWidth: 3,
              borderRadius: 20,
              marginBottom: 20,
              borderColor: '#d8ab45',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('RulseScreen');
            }}>
            <Text style={{color: '#d8ab45', fontSize: 30, fontWeight: 'bold'}}>
              RULES
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 250,
              height: 80,
              borderWidth: 3,
              borderRadius: 20,
              marginBottom: 20,
              borderColor: '#d8ab45',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}>
            <Text style={{color: '#d8ab45', fontSize: 30, fontWeight: 'bold'}}>
              PROFILE
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
