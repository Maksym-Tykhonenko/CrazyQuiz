import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';

const FirstCongratScreen = ({navigation}) => {
  const [confetiState, setConfetiState] = useState(false);

  //////////// LOADER
  const appearingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ImageBackground
        source={require('../assets/bcgr.jpeg')}
        style={{flex: 1}}>
        <Animated.View
          style={{
            opacity: appearingAnim,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 45}}>
            Hello
          </Text>
          <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 45}}>
            It's
          </Text>
          <Text
            style={{
              color: '#d8ab45',
              fontWeight: 'bold',
              fontSize: 55,
              marginTop: 40,
            }}>
            CRAZY
          </Text>
          <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 55}}>
            COMEDY QUIZ
          </Text>
          {/**BTN NEXT */}
        </Animated.View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SecondCongratScreen');
          }}
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            borderColor: '#d8ab45',
            borderWidth: 3,
            width: 120,
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
          <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 25}}>
            NEXT
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default FirstCongratScreen;
