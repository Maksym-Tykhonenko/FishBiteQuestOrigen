import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const RulseScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../accets/bcgr.jpeg')}>
        <SafeAreaView
          style={{
            flex: 1,
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                backgroundColor: 'rgba(0, 5, 141, 0.5)',
                marginHorizontal: 5,
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 20,
              }}>
              <Text style={{color: '#ff6a02', fontSize: 30}}>
                - The aim of the game is to find matching pairs of fish and
                baits. The game will end when you find all 9 pairs.
              </Text>
              <Text style={{color: '#ff6a02', fontSize: 30}}>
                - After starting the game, you will be shown two sets of cards:
                one with fish, the other with bait. All cards are shuffled
                randomly.
              </Text>
              <Text style={{color: '#ff6a02', fontSize: 30}}>
                - The user has to click on the fish and bait cards to select
                them. If the selected cards (fish and bait) form a pair, they
                disappear.
              </Text>
              <Text style={{color: '#ff6a02', fontSize: 30}}>
                - The user has only 2 attempts to make a mistake.
              </Text>
              <Text style={{color: '#ff6a02', fontSize: 30}}>
                - The game has a timer that counts down the time. If time runs
                out before all pairs are found, the game is lost.
              </Text>
              <Text style={{color: '#ff6a02', fontSize: 30}}>
                - The game ends when all 9 pairs are found. A welcome message
                will then be displayed and you can proceed to the next level.
              </Text>
              <Text style={{color: '#ff6a02', fontSize: 30}}>
                - If you run out of attempts for a mistake or time runs out, the
                game ends with a loss. You will be shown a message about the
                loss, after which you can try again.
              </Text>
              <Text style={{color: '#ff6a02', fontSize: 30}}>
                - The game has 2 ways Hard and Easy (with timer and without
                timer)
              </Text>
              <Text style={{color: '#ff6a02', fontSize: 30}}>
                - If you win, you will be shown a set of tips for successful
                fishing. These tips can be useful for real life or the next
                levels of the game.
              </Text>
              <Text style={{color: '#ff6a02', fontSize: 30}}>
                Good luck in the game and good fishing experience!
              </Text>
              <View style={{height: 100}}></View>
            </View>
          </ScrollView>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              position: 'absolute',
              bottom: 20,
              right: 10,
              width: 60,
              height: 60,
              backgroundColor: '#ff6a02',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
            }}>
            <Entypo name="chevron-left" style={{fontSize: 40, color: 'blue'}} />
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default RulseScreen;
