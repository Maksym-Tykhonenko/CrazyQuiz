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
import {useWindowDimensions} from 'react-native';

const Lvl10 = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  console.log('correctAnswersCount==>', correctAnswersCount);
  const [levelRaiting, setLevelRaiting] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [confetiState, setConfetiState] = useState(false);
  const {height, width} = useWindowDimensions();

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
        'Who is the protagonist of the TV show "Arrested Development," known for his cluelessness and naivety?',
      options: ['Gob Bluth', 'Tobias Fünke', 'Michael Bluth', 'Buster Bluth'],
      correctAnswer: 'Michael Bluth',
    },
    {
      question: `What is the name of the titular character in the TV show "Brooklyn Nine-Nine," known for his childish antics and love of solving crime?`,
      options: ['Amy Santiago', 'Jake Peralta', 'Terry Jeffords', 'Rosa Diaz'],
      correctAnswer: 'Jake Peralta',
    },
    {
      question:
        'In the comedy film series "Austin Powers," who is the main character, a British spy known for his outlandish behavior and catchphrases?',
      options: ['Dr. Evil', 'Mini-Me', 'Austin Powers', 'Fat Bastard'],
      correctAnswer: 'Austin Powers',
    },
    {
      question:
        'What is the name of the character in "The Big Bang Theory" who has a strict adherence to routine and an obsessive-compulsive personality?',
      options: [
        'Leonard Hofstadter',
        'Howard Wolowitz',
        'Penny',
        'Sheldon Cooper',
      ],
      correctAnswer: 'Sheldon Cooper',
    },
    {
      question:
        'In the TV show "Parks and Recreation," who is the enthusiastic and determined government employee known for her love of waffles and her positive attitude?',
      options: [
        'Leslie Knope',
        'Ron Swanson',
        'April Ludgate',
        'Tom Haverford',
      ],
      correctAnswer: 'Leslie Knope',
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
              LEVEL 10
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
              You passed the 10th level!
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
              Tab "NEXT" to move
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
                navigation.navigate('WinnerScreen');
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

export default Lvl10;
