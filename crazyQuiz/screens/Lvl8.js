import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Alert,
  Animated,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ConfettiCannon from 'react-native-confetti-cannon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useWindowDimensions} from 'react-native';

const Lvl8 = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  console.log('correctAnswersCount==>', correctAnswersCount);
  const [levelRaiting, setLevelRaiting] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [confetiState, setConfetiState] = useState(false);
  const [open9Lvl, setOpen9Lvl] = useState(false);
  console.log('open9Lvl==>', open9Lvl);
  const {height, width} = useWindowDimensions();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [open9Lvl]);

  const setData = async () => {
    try {
      const data = {
        open9Lvl,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`Lvl8`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
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

  useEffect(() => {
    if (correctAnswersCount === 5) {
      setOpen9Lvl(true);
    }
  }, [correctAnswersCount]);
  ///////////////////////////////////

  useEffect(() => {
    if (correctAnswersCount === 5) {
      setLevelRaiting(true);
      setTimeout(() => {
        setConfetiState(true);
      }, 1500);
    }
  }, [correctAnswersCount, navigation]);
  //navigation.navigate('Home');
  const questions = [
    {
      question:
        'Which comedy series is set in a fictional town in Indiana and follows the employees of the Pawnee Parks and Recreation Department?',
      options: [
        'The Office (US)',
        '30 Rock',
        'The Good Place',
        'Parks and Recreation',
      ],
      correctAnswer: 'Parks and Recreation',
    },
    {
      question: `What is the name of the TV show centered around the lives of four single women in New York City, focusing on their romantic escapades?`,
      options: ['Girls', 'Gossip Girl', 'Sex and the City', 'Ally McBeal'],
      correctAnswer: 'Sex and the City',
    },
    {
      question:
        'In the TV series "Brooklyn Nine-Nine," who is the goofy and lovable detective known for his obsession with food?',
      options: [
        'Charles Boyle',
        'Jake Peralta',
        'Amy Santiago',
        'Terry Jeffords',
      ],
      correctAnswer: 'Charles Boyle',
    },
    {
      question:
        'Which comedy series is set in a fictional electronics store called Cloud 9, where a diverse group of employees work together?',
      options: ['The Office (US)', '30 Rock', 'Superstore', 'Brooklyn 9-9'],
      correctAnswer: 'Superstore',
    },
    {
      question:
        'What is the name of the TV show following the lives of a group of nerdy friends and their interactions with each other and the world?',
      options: ['Friends', 'Big Bang Theory', 'Community', 'Scrubs'],
      correctAnswer: 'Big Bang Theory',
    },
    // Add more questions here
  ];

  const handleAnswer = selectedAnswer => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      // Правильна відповідь
      setCorrectAnswersCount(correctAnswersCount + 1);
      Alert.alert('Correct', 'You answered correctly.', [{text: 'OK'}]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Неправильна відповідь
      Alert.alert(
        'Wrong',
        'Sorry, wrong answer.',
        [{text: 'Try again!'}],
        setTimeout(() => {
          navigation.navigate('Home');
        }, 2000),
      );
    }
  };

  const renderOptions = options => {
    return options.map((option, index) => (
      <TouchableOpacity
        style={{
          width: width * 0.9,
          marginBottom: 10,
          borderWidth: 3,
          borderRadius: 15,
          borderColor: '#ffd97a',
          backgroundColor: '#ffd97a',
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#ffd97a',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.8,
          shadowRadius: 2,
        }}
        key={index}
        onPress={() => handleAnswer(option)}>
        <Text
          style={{
            marginVertical: 20,
            fontFamily: 'Starnberg',
            fontWeight: 'bold',
            fontSize: 25,
          }}>
          {option}
        </Text>
      </TouchableOpacity>
    ));
  };

  //////////// LOADER
  const appearingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ImageBackground
        source={require('../assets/rediz/newBgr.jpg')}
        style={{flex: 1}}>
        {!levelRaiting ? (
          <Animated.View
            style={{
              opacity: appearingAnim,
              flex: 1,
              alignItems: 'center',
              marginTop: 40,
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Starnberg',
                fontWeight: 'bold',
                fontSize: 45,
              }}>
              LEVEL 8
            </Text>
            {currentQuestionIndex < questions.length && (
              <>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Starnberg',
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#fff',
                    marginBottom: 40,
                    marginTop: 30,
                  }}>
                  {questions[currentQuestionIndex].question}
                </Text>
                {renderOptions(questions[currentQuestionIndex].options)}
              </>
            )}

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
          </Animated.View>
        ) : (
          <View
            style={{
              flex: 1,
              //position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Starnberg',
                fontWeight: 'bold',
                fontSize: 30,
                color: '#fff',
              }}>
              Congrat!!!
            </Text>
            <Text
              style={{
                fontFamily: 'Starnberg',
                fontWeight: 'bold',
                fontSize: 30,
                color: '#fff',
              }}>
              You passed the 8th level!
            </Text>
            <Text
              style={{
                fontFamily: 'Starnberg',
                fontWeight: 'bold',
                fontSize: 30,
                color: '#fff',
              }}>
              You like it?
            </Text>

            <View style={{flexDirection: 'row', marginBottom: 30}}>
              <TouchableOpacity
                style={{marginRight: 30}}
                onPress={() => {
                  setLike(!like);
                  setDislike(like);
                }}>
                <AntDesign
                  name="like1"
                  style={{color: like ? '#ffd97a' : '#000', fontSize: 60}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setDislike(!dislike);
                  setLike(dislike);
                }}>
                <AntDesign
                  name="dislike1"
                  style={{color: dislike ? '#ffd97a' : '#000', fontSize: 60}}
                />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontFamily: 'Starnberg',
                fontWeight: 'bold',
                fontSize: 30,
                color: '#fff',
              }}>
              Tab "NEXT" to move on
            </Text>
            <Text
              style={{
                fontFamily: 'Starnberg',
                fontWeight: 'bold',
                fontSize: 30,
                color: '#fff',
              }}>
              next level
            </Text>

            <TouchableOpacity
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
              }}
              onPress={() => {
                navigation.navigate('Lvl9');
              }}>
              <Text style={{fontSize: 40, fontFamily: 'Starnberg'}}>NEXT</Text>
            </TouchableOpacity>
            {confetiState && (
              <>
                <ConfettiCannon count={200} origin={{x: 0, y: 0}} />
                <ConfettiCannon count={200} origin={{x: 400, y: 0}} />
              </>
            )}
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default Lvl8;
