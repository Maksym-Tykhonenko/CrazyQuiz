import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Animated,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ConfettiCannon from 'react-native-confetti-cannon';

const RulseScreen = ({navigation}) => {
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
          }}>
          <ScrollView style={{marginHorizontal: 10, marginTop: 70}}>
            <Animated.View style={{opacity: appearingAnim}}>
              <Text
                style={{
                  color: '#d8ab45',
                  fontWeight: 'bold',
                  fontSize: 28,
                  marginBottom: 20,
                }}>
                Rules for "Crazy Comedy Quiz":
              </Text>
              <Text
                style={{
                  color: '#d8ab45',
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginBottom: 15,
                }}>
                1. The game has 10 levels, each of which contains 5 questions.{' '}
              </Text>
              <Text
                style={{
                  color: '#d8ab45',
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginBottom: 15,
                }}>
                {' '}
                2. Each question has 4 answer options.{' '}
              </Text>
              <Text
                style={{
                  color: '#d8ab45',
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginBottom: 15,
                }}>
                3. Initially, only the first level is available to the player.
              </Text>
              <Text
                style={{
                  color: '#d8ab45',
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginBottom: 15,
                }}>
                {' '}
                4. After successfully completing each level, the next level is
                unlocked for the player.
              </Text>
              <Text
                style={{
                  color: '#d8ab45',
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginBottom: 15,
                }}>
                5. The player needs to choose the correct answer for each
                question to complete the level.{' '}
              </Text>
              <Text
                style={{
                  color: '#d8ab45',
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginBottom: 15,
                }}>
                {' '}
                6. If the player answers any question incorrectly, he has the
                opportunity to try again.{' '}
              </Text>
              <Text
                style={{
                  color: '#d8ab45',
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginBottom: 15,
                }}>
                7. After successfully completing all 5 questions in a level, the
                player moves on to the next level.{' '}
              </Text>
              <Text
                style={{
                  color: '#d8ab45',
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginBottom: 15,
                }}>
                8. The cycle repeats until reaching the last, tenth level.{' '}
              </Text>
              <Text
                style={{
                  color: '#d8ab45',
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginBottom: 15,
                }}>
                9. Successful completion of all 10 levels is considered game
                over.{' '}
              </Text>
              <Text
                style={{
                  color: '#d8ab45',
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginBottom: 15,
                }}>
                10. The main purpose of the game is to have fun and enjoy
                humorous questions and answers.
              </Text>
            </Animated.View>
          </ScrollView>

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

export default RulseScreen;
