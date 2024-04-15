import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Animated,
} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LelSelectionScreen = ({navigation}) => {
  //////////// LOADER
  const appearingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

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
          <SafeAreaView>
            <ScrollView style={{marginTop: 20}}>
              <Animated.View style={{opacity: appearingAnim}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Lvl1');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: '#d8ab45',
                    borderWidth: 3,
                    width: 300,
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
                  <Text
                    style={{
                      color: '#d8ab45',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    First Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Lvl2');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: '#d8ab45',
                    borderWidth: 3,
                    width: 300,
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
                  <Text
                    style={{
                      color: '#d8ab45',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Second Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Lvl3');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: '#d8ab45',
                    borderWidth: 3,
                    width: 300,
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
                  <Text
                    style={{
                      color: '#d8ab45',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Third Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Lvl4');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: '#d8ab45',
                    borderWidth: 3,
                    width: 300,
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
                  <Text
                    style={{
                      color: '#d8ab45',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Fourth Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Lvl5');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: '#d8ab45',
                    borderWidth: 3,
                    width: 300,
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
                  <Text
                    style={{
                      color: '#d8ab45',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Fifth Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Lvl6');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: '#d8ab45',
                    borderWidth: 3,
                    width: 300,
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
                  <Text
                    style={{
                      color: '#d8ab45',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Sixth Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Lvl7');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: '#d8ab45',
                    borderWidth: 3,
                    width: 300,
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
                  <Text
                    style={{
                      color: '#d8ab45',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Seventh Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Lvl8');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: '#d8ab45',
                    borderWidth: 3,
                    width: 300,
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
                  <Text
                    style={{
                      color: '#d8ab45',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Eighth Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Lvl9');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: '#d8ab45',
                    borderWidth: 3,
                    width: 300,
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
                  <Text
                    style={{
                      color: '#d8ab45',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Ninth Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Lvl10');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: '#d8ab45',
                    borderWidth: 3,
                    width: 300,
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
                  <Text
                    style={{
                      color: '#d8ab45',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Tenth Level
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </ScrollView>
          </SafeAreaView>

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

export default LelSelectionScreen;
