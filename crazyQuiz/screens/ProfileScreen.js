import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ConfettiCannon from 'react-native-confetti-cannon';

const ProfileScreen = ({navigation, onPress}) => {
  const [confetiState, setConfetiState] = useState(false);

  handleConfetiStart = () => {
    explosion && explosion.start();
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ImageBackground
        source={require('../assets/bcgr.jpeg')}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {confetiState && (
            <>
              <ConfettiCannon count={200} origin={{x: 0, y: 0}} />
              <ConfettiCannon count={200} origin={{x: 400, y: 0}} />
            </>
          )}

          <TouchableOpacity
            onPress={() => {
              setConfetiState(!confetiState);
            }}>
            <Text>GO</Text>
          </TouchableOpacity>

          {/**BTN BACK */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              borderColor: '#d8ab45',
              borderWidth: 3,
              width: 60,
              height: 60,
              //borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(60,11,103,0.7)',
              paddingVertical: 8,
              shadowColor: '#d8ab45',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}>
            <FontAwesome
              name="arrow-left"
              style={{
                color: '#d8ab45',
                fontSize: 30,
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
