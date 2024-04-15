import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Animated,
  ScrollView,
  Modal,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {uid} from 'uid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation, onPress}) => {
  const [avatar, setAvatart] = useState(null);
  const [onChangeName, setOnChangeName] = useState('');
  const [name, setName] = useState();
  const [scoreEvent, setScoreEvent] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [scoreTime, setScoreTime] = useState('');
  const [selected, setSelected] = useState('');

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [name, scoreEvent, avatar]);
  //, selectPhoto
  const setData = async () => {
    try {
      const data = {
        name,
        scoreEvent,
        avatar,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`ProfileScreen`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`ProfileScreen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setName(parsedData.name);
        setScoreEvent(parsedData.scoreEvent);
        setAvatart(parsedData.avatar);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const AvatartPicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel) {
        console.log('response==>', response.assets[0].uri);
        setAvatart(response.assets[0].uri);
      } else {
        console.log('Вибір скасовано');
      }
    });
  };

  const handleSeveName = () => {
    setName(onChangeName);
    setOnChangeName('');
  };
  const handlSaveScoreEvent = () => {
    let newScoreEvent = {
      data: selected,
      score: scoreTime,
    };

    setScoreEvent([...scoreEvent, newScoreEvent]);

    setSelected('');
    setScoreTime('');
    setModalIsOpen(false);
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
        <Animated.View
          style={{
            opacity: appearingAnim,
            flex: 1,
            alignItems: 'center',
          }}>
          <View style={{marginTop: 50}}>
            {!avatar ? (
              <TouchableOpacity
                onPress={() => {
                  AvatartPicker();
                }}
                style={{
                  width: 300,
                  height: 300,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#d8ab45',
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: '#d8ab45',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.8,
                  shadowRadius: 10,
                  elevation: 10,
                }}>
                <Text
                  style={{
                    color: '#d8ab45',
                    fontSize: 40,
                    fontWeight: 'bold',
                    shadowColor: '#d8ab45',
                    shadowOffset: {width: 0, height: 18},
                    shadowOpacity: 0.8,
                    shadowRadius: 30,
                    elevation: 10,
                  }}>
                  Press Me!
                </Text>
              </TouchableOpacity>
            ) : (
              <Image
                source={{uri: avatar}}
                style={{
                  width: 300,
                  height: 300,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#d8ab45',
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: '#d8ab45',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.8,
                  shadowRadius: 30,
                }}
              />
            )}
          </View>
          <ScrollView>
            {!name ? (
              <View style={{marginTop: 20, alignItems: 'center'}}>
                <TextInput
                  placeholderTextColor="#d8ab45"
                  placeholder="Enter your name..."
                  value={onChangeName}
                  onChangeText={setOnChangeName}
                  style={{
                    shadowOffset: {width: 3, height: 4},
                    shadowOpacity: 0.8,
                    elevation: 9,
                    marginTop: 5,
                    marginBottom: 15,
                    paddingLeft: 10,
                    fontSize: 20,
                    borderWidth: 3,
                    borderColor: '#d8ab45',
                    color: '#d8ab45',
                    backgroundColor: 'rgba(60,11,103,0.7)',
                    width: 280,
                    height: 60,
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    handleSeveName();
                  }}
                  style={{
                    width: 100,
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: '#d8ab45',
                    borderWidth: 3,
                    backgroundColor: 'rgba(60,11,103,0.7)',
                  }}>
                  <Text
                    style={{
                      color: '#d8ab45',
                      fontSize: 20,
                      fontWeight: 'bold',
                      shadowColor: '#d8ab45',
                      shadowOffset: {width: 0, height: 18},
                      shadowOpacity: 0.8,
                      shadowRadius: 30,
                      elevation: 10,
                    }}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{marginTop: 20, alignItems: 'center'}}>
                <Text
                  style={{
                    color: '#d8ab45',
                    fontSize: 40,
                    fontWeight: 'bold',
                    shadowColor: '#d8ab45',
                    shadowOffset: {width: 0, height: 18},
                    shadowOpacity: 0.8,
                    shadowRadius: 30,
                    elevation: 10,
                  }}>
                  {name}
                </Text>
              </View>
            )}

            {/**Best Score block */}
            <View style={{marginTop: 20}}>
              <TouchableOpacity
                onPress={() => {
                  setModalIsOpen(true);
                }}
                style={{
                  height: 60,
                  borderWidth: 3,
                  borderColor: '#d8ab45',
                  backgroundColor: 'rgba(60,11,103,0.7)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  shadowColor: '#d8ab45',
                  shadowOffset: {width: 0, height: 10},
                  shadowOpacity: 0.7,
                  shadowRadius: 10,
                }}>
                <Text
                  style={{
                    color: '#d8ab45',
                    fontSize: 35,
                  }}>
                  Tab to enter the result
                </Text>
              </TouchableOpacity>

              <View>
                {scoreEvent.map(e => {
                  return (
                    <View
                      style={{
                        marginTop: 10,
                        paddingHorizontal: 5,
                        borderWidth: 3,
                        borderColor: '#d8ab45',
                        backgroundColor: 'rgba(60,11,103,0.7)',
                      }}
                      key={uid()}>
                      <Text
                        style={{
                          color: '#d8ab45',

                          fontSize: 25,
                        }}>
                        Data: {e.data}
                      </Text>
                      <Text
                        style={{
                          color: '#d8ab45',

                          fontSize: 25,
                        }}>
                        Levels complited: {e.score}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>

          <Modal animationType="fade" transparent={true} visible={modalIsOpen}>
            <View
              style={{
                position: 'relative',
                alignItems: 'center',
                paddingTop: 40,
                backgroundColor: 'rgba(60,11,103, 0.9)',
                flex: 1,
                marginRight: '5%',
                marginLeft: '5%',
                marginTop: '35%',
                marginBottom: '35%',
                borderWidth: 5,
                borderColor: '#d8ab45',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setModalIsOpen(false);
                }}
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  marginTop: 15,
                  borderWidth: 3,
                  borderColor: '#d8ab45',
                  backgroundColor: 'rgba(60,11,103,0.7)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  shadowColor: '#d8ab45',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 20,
                  width: 60,
                  height: 60,
                }}>
                <Text
                  style={{
                    fontSize: 40,
                    color: '#d8ab45',
                    shadowColor: '#d8ab45',
                    shadowOffset: {width: 0, height: 18},
                    shadowOpacity: 0.9,
                    shadowRadius: 20,
                  }}>
                  X
                </Text>
              </TouchableOpacity>

              <ScrollView
                style={{marginTop: 50}}
                showsVerticalScrollIndicator={false}>
                <TextInput
                  placeholderTextColor="#d8ab45"
                  placeholder="Enter your time..."
                  value={scoreTime}
                  onChangeText={setScoreTime}
                  style={{
                    shadowOffset: {width: 3, height: 4},
                    shadowOpacity: 0.8,
                    elevation: 9,
                    marginTop: 5,
                    marginBottom: 15,
                    paddingLeft: 10,
                    fontSize: 20,
                    borderWidth: 3,
                    borderColor: '#d8ab45',
                    color: '#d8ab45',
                    backgroundColor: 'rgba(60,11,103,0.7)',
                    borderRadius: 15,
                    width: 280,
                    height: 60,
                  }}
                />

                <Calendar
                  style={{borderRadius: 15}}
                  onDayPress={day => {
                    setSelected(day.dateString);
                  }}
                  markedDates={{
                    [selected]: {
                      selected: true,
                      disableTouchEvent: true,
                      selectedDotColor: 'orange',
                    },
                  }}
                />
                {/** */}
                <TouchableOpacity
                  onPress={() => {
                    handlSaveScoreEvent();
                  }}
                  style={{
                    marginTop: 15,
                    borderWidth: 3,
                    borderColor: '#d8ab45',
                    backgroundColor: 'rgba(60,11,103,0.7)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    shadowColor: '#d8ab45',
                    shadowOffset: {width: 0, height: 18},
                    shadowOpacity: 0.9,
                    shadowRadius: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 40,

                      color: '#d8ab45',
                      shadowColor: '#d8ab45',
                      shadowOffset: {width: 0, height: 18},
                      shadowOpacity: 0.9,
                      shadowRadius: 20,
                    }}>
                    Save
                  </Text>
                </TouchableOpacity>
                <View style={{height: 200}}></View>
              </ScrollView>
            </View>
          </Modal>
        </Animated.View>

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
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
