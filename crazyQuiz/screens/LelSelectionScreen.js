import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';

const LelSelectionScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/bgr1.jpeg')}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>
      </ImageBackground>
    </View>
  );
};

export default LelSelectionScreen;
