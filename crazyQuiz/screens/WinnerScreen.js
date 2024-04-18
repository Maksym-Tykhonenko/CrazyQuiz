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
          <Text style={{fontSize: 47, fontFamily: 'Starnberg'}}>
            CONGRAT!!!
          </Text>
          <Text style={{fontSize: 47, fontFamily: 'Starnberg'}}>you won</Text>
          <Text style={{fontSize: 47, fontFamily: 'Starnberg'}}>
            Click 'OK' if you
          </Text>
          <Text style={{fontSize: 47, fontFamily: 'Starnberg'}}>
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
              borderRadius: 15,
              borderColor: '#ffd97a',
              backgroundColor: '#ffd97a',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 15,
              shadowColor: '#ffd97a',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}>
            <Text style={{fontSize: 40, fontFamily: 'Starnberg'}}>OK</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WinnerScreen;
