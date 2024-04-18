import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Animated,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LelSelectionScreen = ({navigation}) => {
  const [open2Lvl, setOpen2Lvl] = useState(false);
  const [open3Lvl, setOpen3Lvl] = useState(false);
  const [open4Lvl, setOpen4Lvl] = useState(false);
  const [open5Lvl, setOpen5Lvl] = useState(false);
  const [open6Lvl, setOpen6Lvl] = useState(false);
  const [open7Lvl, setOpen7Lvl] = useState(false);
  const [open8Lvl, setOpen8Lvl] = useState(false);
  const [open9Lvl, setOpen9Lvl] = useState(false);
  const [open10Lvl, setOpen10Lvl] = useState(false);

  useEffect(() => {
    getDataAbout2Lvl();
    getDataAbout3Lvl();
    getDataAbout4Lvl();
    getDataAbout5Lvl();
    getDataAbout6Lvl();
    getDataAbout7Lvl();
    getDataAbout8Lvl();
    getDataAbout9Lvl();
    getDataAbout10Lvl();
  }, []);

  const getDataAbout2Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Lvl1`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setOpen2Lvl(parsedData.open2Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout3Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Lvl2`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setOpen3Lvl(parsedData.open3Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout4Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Lvl3`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setOpen4Lvl(parsedData.open4Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout5Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Lvl4`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setOpen5Lvl(parsedData.open5Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout6Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Lvl5`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setOpen6Lvl(parsedData.open6Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout7Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Lvl6`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setOpen7Lvl(parsedData.open7Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout8Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Lvl7`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setOpen8Lvl(parsedData.open8Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout9Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Lvl8`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setOpen9Lvl(parsedData.open9Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout10Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Lvl9`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setOpen10Lvl(parsedData.open10Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

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
        source={require('../assets/rediz/newBgr.jpg')}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SafeAreaView>
            <View style={{alignItems: 'center', marginBottom: 40}}>
              <Text
                style={{color: '#fff', fontFamily: 'Starnberg', fontSize: 70}}>
                Levels
              </Text>
            </View>

            <Animated.View
              style={{
                opacity: appearingAnim,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 20,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Lvl1');
                }}
                style={{
                  marginBottom: 20,
                  borderColor: '#ffd97a',
                  borderWidth: 3,
                  borderRadius: 15,
                  width: 80,
                  height: 80,
                  marginRight: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffd97a',
                  paddingVertical: 8,
                  shadowColor: '#ffd97a',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                }}>
                <Text
                  style={{
                    fontSize: 40,
                    fontFamily: 'Starnberg',
                  }}>
                  1
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!open2Lvl ? true : false}
                onPress={() => {
                  navigation.navigate('Lvl2');
                }}
                style={{
                  marginBottom: 20,
                  borderColor: open2Lvl ? '#ffd97a' : 'grey',
                  borderWidth: 3,
                  borderRadius: 15,
                  borderRadius: 15,
                  width: 80,
                  height: 80,
                  marginRight: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffd97a',
                  paddingVertical: 8,
                  shadowColor: '#ffd97a',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                }}>
                <Text
                  style={{
                    color: open2Lvl ? '#000' : 'grey',
                    fontSize: 40,
                    fontFamily: 'Starnberg',
                  }}>
                  2
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!open3Lvl ? true : false}
                onPress={() => {
                  navigation.navigate('Lvl3');
                }}
                style={{
                  marginBottom: 20,
                  borderColor: open3Lvl ? '#ffd97a' : 'grey',
                  borderWidth: 3,
                  borderRadius: 15,
                  width: 80,
                  height: 80,
                  marginRight: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffd97a',
                  paddingVertical: 8,
                  shadowColor: '#ffd97a',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                }}>
                <Text
                  style={{
                    color: open3Lvl ? '#000' : 'grey',
                    fontSize: 40,
                    fontFamily: 'Starnberg',
                  }}>
                  3
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!open4Lvl ? true : false}
                onPress={() => {
                  navigation.navigate('Lvl4');
                }}
                style={{
                  marginBottom: 20,
                  borderColor: open4Lvl ? '#ffd97a' : 'grey',
                  borderWidth: 3,
                  borderRadius: 15,
                  width: 80,
                  height: 80,
                  marginRight: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffd97a',
                  paddingVertical: 8,
                  shadowColor: '#ffd97a',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                }}>
                <Text
                  style={{
                    color: open4Lvl ? '#000' : 'grey',
                    fontSize: 40,
                    fontFamily: 'Starnberg',
                  }}>
                  4
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!open5Lvl ? true : false}
                onPress={() => {
                  navigation.navigate('Lvl5');
                }}
                style={{
                  marginBottom: 20,
                  borderColor: open5Lvl ? '#ffd97a' : 'grey',
                  borderWidth: 3,
                  borderRadius: 15,
                  width: 80,
                  height: 80,
                  marginRight: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffd97a',
                  paddingVertical: 8,
                  shadowColor: '#ffd97a',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                }}>
                <Text
                  style={{
                    color: open5Lvl ? '#000' : 'grey',
                    fontSize: 40,
                    fontFamily: 'Starnberg',
                  }}>
                  5
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!open6Lvl ? true : false}
                onPress={() => {
                  navigation.navigate('Lvl6');
                }}
                style={{
                  marginBottom: 20,
                  borderColor: open6Lvl ? '#ffd97a' : 'grey',
                  borderWidth: 3,
                  borderRadius: 15,
                  width: 80,
                  height: 80,
                  marginRight: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffd97a',
                  paddingVertical: 8,
                  shadowColor: '#ffd97a',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                }}>
                <Text
                  style={{
                    color: open6Lvl ? '#000' : 'grey',
                    fontSize: 40,
                    fontFamily: 'Starnberg',
                  }}>
                  6
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!open7Lvl ? true : false}
                onPress={() => {
                  navigation.navigate('Lvl7');
                }}
                style={{
                  marginBottom: 20,
                  borderColor: open7Lvl ? '#ffd97a' : 'grey',
                  borderWidth: 3,
                  borderRadius: 15,
                  width: 80,
                  height: 80,
                  marginRight: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffd97a',
                  paddingVertical: 8,
                  shadowColor: '#ffd97a',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                }}>
                <Text
                  style={{
                    color: open7Lvl ? '#000' : 'grey',
                    fontSize: 40,
                    fontFamily: 'Starnberg',
                  }}>
                  7
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!open8Lvl ? true : false}
                onPress={() => {
                  navigation.navigate('Lvl8');
                }}
                style={{
                  marginBottom: 20,
                  borderColor: open8Lvl ? '#ffd97a' : 'grey',
                  borderWidth: 3,
                  borderRadius: 15,
                  width: 80,
                  height: 80,
                  marginRight: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffd97a',
                  paddingVertical: 8,
                  shadowColor: '#ffd97a',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                }}>
                <Text
                  style={{
                    color: open8Lvl ? '#000' : 'grey',
                    fontSize: 40,
                    fontFamily: 'Starnberg',
                  }}>
                  8
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!open9Lvl ? true : false}
                onPress={() => {
                  navigation.navigate('Lvl9');
                }}
                style={{
                  marginBottom: 20,
                  borderColor: open9Lvl ? '#ffd97a' : 'grey',
                  borderWidth: 3,
                  borderRadius: 15,
                  width: 80,
                  height: 80,
                  marginRight: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffd97a',
                  paddingVertical: 8,
                  shadowColor: '#ffd97a',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                }}>
                <Text
                  style={{
                    color: open9Lvl ? '#000' : 'grey',
                    fontSize: 40,
                    fontFamily: 'Starnberg',
                  }}>
                  9
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!open10Lvl ? true : false}
                onPress={() => {
                  navigation.navigate('Lvl10');
                }}
                style={{
                  marginBottom: 20,
                  borderColor: open10Lvl ? '#ffd97a' : 'grey',
                  borderWidth: 3,
                  borderRadius: 15,
                  width: 80,
                  height: 80,
                  marginRight: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffd97a',
                  paddingVertical: 8,
                  shadowColor: '#ffd97a',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                }}>
                <Text
                  style={{
                    color: open10Lvl ? '#000' : 'grey',
                    fontSize: 40,
                    fontFamily: 'Starnberg',
                  }}>
                  10
                </Text>
              </TouchableOpacity>
            </Animated.View>
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
              borderColor: '#ffd97a',
              borderWidth: 3,
              borderRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffd97a',
              paddingVertical: 8,
              shadowColor: '#ffd97a',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}>
            <Text
              style={{
                fontSize: 40,
                fontFamily: 'Starnberg',
              }}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LelSelectionScreen;
