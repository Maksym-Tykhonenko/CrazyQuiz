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

const Lvl5 = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  console.log('correctAnswersCount==>', correctAnswersCount);
  const [levelRaiting, setLevelRaiting] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [confetiState, setConfetiState] = useState(false);
  const [open6Lvl, setOpen6Lvl] = useState(false);
  console.log('open6Lvl==>', open6Lvl);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [open6Lvl]);

  const setData = async () => {
    try {
      const data = {
        open6Lvl,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`Lvl5`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
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

  useEffect(() => {
    if (correctAnswersCount === 5) {
      setOpen6Lvl(true);
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
      question: 'Who created the famous comic book character Spider-Man?',
      options: ['Bob Kane', 'Stan Lee', 'Jack Kirby', 'Will Eisner'],
      correctAnswer: 'Stan Lee',
    },
    {
      question: `What is the name of the fictional city where Batman operates?`,
      options: ['Metropolis', 'Star City', 'Coast City', 'Gotham City'],
      correctAnswer: 'Gotham City',
    },
    {
      question: `In the comic strip "Peanuts," what is the name of Snoopy's bird friend?`,
      options: ['Woodstock', 'Tweety', 'Daffy', 'Chirpy'],
      correctAnswer: 'Woodstock',
    },
    {
      question: 'Who is the arch-nemesis of the superhero Superman?',
      options: [
        'The Joker',
        'The Green Goblin',
        'Lex Luthor',
        'Doctor Octopus',
      ],
      correctAnswer: 'Lex Luthor',
    },
    {
      question:
        'What is the name of the group of superheroes in the Marvel Comics universe, led by Professor Xavier?',
      options: [
        'The Avengers',
        'The X-Men',
        'The Fantastic Four',
        'The Justice League',
      ],
      correctAnswer: 'The X-Men',
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
              LEVEL 5
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
          <View
            style={{
              flex: 1,
              //position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 30}}>
              Congrat!!!
            </Text>
            <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 30}}>
              You passed the 5th level!
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
                navigation.navigate('Lvl6');
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
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default Lvl5;
