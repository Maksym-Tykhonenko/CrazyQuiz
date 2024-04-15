import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

const WinnerScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('../assets/bbb.jpeg')} style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          <Text style={{color: 'red', fontWeight: 'bold', fontSize: 40}}>
            CONGRAT!!!
          </Text>
          <Text style={{color: 'red', fontWeight: 'bold', fontSize: 40}}>
            you won
          </Text>
          <Text style={{color: 'red', fontWeight: 'bold', fontSize: 40}}>
            Click 'OK' if you
          </Text>
          <Text style={{color: 'red', fontWeight: 'bold', fontSize: 40}}>
            want to play again
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{
              marginTop: 100,
              width: 300,
              borderWidth: 3,
              borderColor: 'red',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 15,
              shadowColor: '#d8ab45',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}>
            <Text style={{color: 'red', fontWeight: 'bold', fontSize: 25}}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WinnerScreen;
