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

const Lvl4 = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  console.log('correctAnswersCount==>', correctAnswersCount);
  const [levelRaiting, setLevelRaiting] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [confetiState, setConfetiState] = useState(false);
  const [open5Lvl, setOpen5Lvl] = useState(false);
  console.log('open5Lvl==>', open5Lvl);
  const {height, width} = useWindowDimensions();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [open5Lvl]);

  const setData = async () => {
    try {
      const data = {
        open5Lvl,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`Lvl4`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
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

  useEffect(() => {
    if (correctAnswersCount === 5) {
      setOpen5Lvl(true);
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
      question: `In the TV show "Seinfeld," what is the name of Jerry's eccentric neighbor who always seems to have outrageous adventures?`,
      options: ['Kramer', 'Elaine Benes', 'Newman', 'Mr. Peterman'],
      correctAnswer: 'Kramer',
    },
    {
      question: `Which comedy series follows the lives of a group of employees working at a fictional big-box store called Cloud 9?`,
      options: ['The Office (US)', '30 Rock', 'Cheers', 'Superstore'],
      correctAnswer: 'Superstore',
    },
    {
      question: `What is the name of the character played by Will Ferrell in the film "Anchorman: The Legend of Ron Burgundy"?`,
      options: ['Champ Kind', 'Brick Tamland', 'Ron Burgundy', 'Baxter'],
      correctAnswer: 'Brick Tamland',
    },
    {
      question: `Which comedy film features a man who discovers that his new neighbor is a former CIA operative?`,
      options: ['Ride Along', 'The Other Guys', 'Central Intelligence', 'Red'],
      correctAnswer: 'Central Intelligence',
    },
    {
      question: `In the TV show "Friends," what is the name of Ross's second wife, who leaves him for another woman?`,
      options: [
        'Rachel Green',
        'Carol Willick',
        'Emily Waltham',
        'Janice Litman',
      ],
      correctAnswer: 'Carol Willick',
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
              LEVEL 4
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
              You passed the 4th level!
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
                  style={{color: like ? '#d8ab45' : '#000', fontSize: 60}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setDislike(!dislike);
                  setLike(dislike);
                }}>
                <AntDesign
                  name="dislike1"
                  style={{color: dislike ? '#d8ab45' : '#000', fontSize: 60}}
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
                navigation.navigate('Lvl5');
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

export default Lvl4;
