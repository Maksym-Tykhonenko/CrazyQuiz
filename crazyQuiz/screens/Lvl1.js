import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Alert,
  SafeAreaView,
  Animated,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ConfettiCannon from 'react-native-confetti-cannon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Lvl1 = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  console.log('correctAnswersCount==>', correctAnswersCount);
  const [levelRaiting, setLevelRaiting] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [confetiState, setConfetiState] = useState(false);
  const [open2Lvl, setOpen2Lvl] = useState(false);
  console.log('open2Lvl==>', open2Lvl);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [open2Lvl]);

  const setData = async () => {
    try {
      const data = {
        open2Lvl,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`Lvl1`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
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

  useEffect(() => {
    if (correctAnswersCount === 5) {
      setOpen2Lvl(true);
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
        'What is the term for a humorous situation that ends well despite initial concerns?',
      options: [
        'Comedy of errors',
        'Divine intervention',
        'Happy accident',
        'Farce',
      ],
      correctAnswer: 'Happy accident',
    },
    {
      question: `Which of the following is an example of a situation where someone's embarrassing mistake leads to laughter and a positive outcome?`,
      options: [
        'Falling asleep during a meeting',
        'Tripping over a sidewalk',
        `Forgetting someone's name`,
        'Mispronouncing a word',
      ],
      correctAnswer: 'Mispronouncing a word',
    },
    {
      question:
        'What is the term for the humorous outcome resulting from a misunderstanding or misinterpretation?',
      options: ['Irony', 'Satire', 'Slapstick', 'Miscommunication'],
      correctAnswer: 'Miscommunication',
    },
    {
      question: `Which of the following is an example of a situation where someone's practical joke unexpectedly turns out well for everyone involved?`,
      options: [
        'Setting off a fire alarm',
        `Filling office with balloons`,
        'Putting a whoopee cushion on a chair',
        'Sending a fake resignation letter to the boss',
      ],
      correctAnswer: `Filling office with balloons`,
    },
    {
      question: `What is the term for the comedic device where a character's actions lead to humorous consequences?`,
      options: ['Slapstick', 'Foil', 'Exaggeration', 'Pun'],
      correctAnswer: 'Slapstick',
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
          width: 300,
          marginBottom: 20,
          borderWidth: 3,
          borderColor: '#d8ab45',
          backgroundColor: 'rgba(60,11,103,0.7)',
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#d8ab45',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.8,
          shadowRadius: 2,
        }}
        key={index}
        onPress={() => handleAnswer(option)}>
        <Text
          style={{
            marginVertical: 20,
            color: '#d8ab45',
            fontWeight: 'bold',
            fontSize: 20,
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
        source={require('../assets/bcgr.jpeg')}
        style={{flex: 1}}>
        {!levelRaiting ? (
          <Animated.View
            style={{
              opacity: appearingAnim,
              flex: 1,
              alignItems: 'center',
              marginTop: 40,
            }}>
            <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 35}}>
              LEVEL 1
            </Text>
            {currentQuestionIndex < questions.length && (
              <>
                <Text
                  style={{
                    borderWidth: 3,
                    textAlign: 'center',
                    borderColor: '#d8ab45',
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: '#d8ab45',
                    marginBottom: 40,
                    marginTop: 40,
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
                borderColor: '#d8ab45',
                borderWidth: 3,
                width: 60,
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
              <FontAwesome
                name="arrow-left"
                style={{color: '#d8ab45', fontSize: 30}}
              />
            </TouchableOpacity>
          </Animated.View>
        ) : (
          <Animated.View
            style={{
              opacity: appearingAnim,
              flex: 1,
              //position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 30}}>
              Congrat!!!
            </Text>
            <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 30}}>
              You passed the 1st level!
            </Text>
            <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 30}}>
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

            <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 30}}>
              Tab "NEXT" to move on
            </Text>
            <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 30}}>
              next level
            </Text>

            <TouchableOpacity
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
              }}
              onPress={() => {
                navigation.navigate('Lvl2');
              }}>
              <Text
                style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 25}}>
                NEXT
              </Text>
            </TouchableOpacity>
            {confetiState && (
              <>
                <ConfettiCannon count={200} origin={{x: 0, y: 0}} />
                <ConfettiCannon count={200} origin={{x: 400, y: 0}} />
              </>
            )}
          </Animated.View>
        )}
      </ImageBackground>
    </View>
  );
};

export default Lvl1;
