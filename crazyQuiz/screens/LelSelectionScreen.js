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
                  disabled={!open2Lvl ? true : false}
                  onPress={() => {
                    navigation.navigate('Lvl2');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: open2Lvl ? '#d8ab45' : '#e2e7e3',
                    borderWidth: 3,
                    width: 300,
                    height: 60,
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
                      color: open2Lvl ? '#d8ab45' : '#e2e7e3',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Second Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!open3Lvl ? true : false}
                  onPress={() => {
                    navigation.navigate('Lvl3');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: open3Lvl ? '#d8ab45' : '#e2e7e3',
                    borderWidth: 3,
                    width: 300,
                    height: 60,
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
                      color: open3Lvl ? '#d8ab45' : '#e2e7e3',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Third Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!open4Lvl ? true : false}
                  onPress={() => {
                    navigation.navigate('Lvl4');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: open4Lvl ? '#d8ab45' : '#e2e7e3',
                    borderWidth: 3,
                    width: 300,
                    height: 60,
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
                      color: open4Lvl ? '#d8ab45' : '#e2e7e3',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Fourth Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!open5Lvl ? true : false}
                  onPress={() => {
                    navigation.navigate('Lvl5');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: open5Lvl ? '#d8ab45' : '#e2e7e3',
                    borderWidth: 3,
                    width: 300,
                    height: 60,
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
                      color: open5Lvl ? '#d8ab45' : '#e2e7e3',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Fifth Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!open6Lvl ? true : false}
                  onPress={() => {
                    navigation.navigate('Lvl6');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: open6Lvl ? '#d8ab45' : '#e2e7e3',
                    borderWidth: 3,
                    width: 300,
                    height: 60,
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
                      color: open6Lvl ? '#d8ab45' : '#e2e7e3',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Sixth Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!open7Lvl ? true : false}
                  onPress={() => {
                    navigation.navigate('Lvl7');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: open7Lvl ? '#d8ab45' : '#e2e7e3',
                    borderWidth: 3,
                    width: 300,
                    height: 60,
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
                      color: open7Lvl ? '#d8ab45' : '#e2e7e3',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Seventh Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!open8Lvl ? true : false}
                  onPress={() => {
                    navigation.navigate('Lvl8');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: open8Lvl ? '#d8ab45' : '#e2e7e3',
                    borderWidth: 3,
                    width: 300,
                    height: 60,
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
                      color: open8Lvl ? '#d8ab45' : '#e2e7e3',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Eighth Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!open9Lvl ? true : false}
                  onPress={() => {
                    navigation.navigate('Lvl9');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: open9Lvl ? '#d8ab45' : '#e2e7e3',
                    borderWidth: 3,
                    width: 300,
                    height: 60,
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
                      color: open9Lvl ? '#d8ab45' : '#e2e7e3',
                      fontWeight: 'bold',
                      fontSize: 30,
                    }}>
                    Ninth Level
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!open10Lvl ? true : false}
                  onPress={() => {
                    navigation.navigate('Lvl10');
                  }}
                  style={{
                    marginBottom: 20,
                    borderColor: open10Lvl ? '#d8ab45' : '#e2e7e3',
                    borderWidth: 3,
                    width: 300,
                    height: 60,
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
                      color: open10Lvl ? '#d8ab45' : '#e2e7e3',
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
