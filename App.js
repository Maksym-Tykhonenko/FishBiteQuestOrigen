import React, {useRef, useState, useEffect} from 'react';
import {ImageBackground, Text, View, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import RulseScreen from './screens/RulseScreen';
import ProfileScreen from './screens/ProfileScreen';
////////////////////
import EasyWayScreen from './screens/EasyWayScreen';
import FirstEasyLvl from './screens/easy/FirstEasyLvl';
import SecondEasyLvl from './screens/easy/SecondEasyLvl';
import ThirdEasyLvl from './screens/easy/ThirdEasyLvl';
import FourthEasyLvl from './screens/easy/FourthEasyLvl';
import FiveEasyLvl from './screens/easy/FiveEasyLvl';
import SixeEasyLvl from './screens/easy/SixeEasyLvl';
import SevenEasyLvl from './screens/easy/SevenEasyLvl';
import EightEasyLvl from './screens/easy/EightEasyLvl';
import CongratScreen from './screens/CongratScreen';
import HardCongratScreen from './screens/HardCongratScreen';
/////////////////////
import HardWayScreen from './screens/HardWayScreen';
import FirstHardLvl from './screens/hard/FirstHardLvl';
import SecondHardLvl from './screens/hard/SecondHardLvl';
import ThirdHardLvl from './screens/hard/ThirdHardLvl';
import FourthHardLvl from './screens/hard/FourthHardLvl';
import FiveHardLvl from './screens/hard/FiveHardLvl';
import SixeHardLvl from './screens/hard/SixeHardLvl';
import SevenHardLvl from './screens/hard/SevenHardLvl';
import EightHardLvl from './screens/hard/EightHardLvl';

const Stack = createNativeStackNavigator();

const App = () => {
  ////////////////////////Louder
  const [louderIsEnded, setLouderIsEnded] = useState(false);

  const appearingAnim = useRef(new Animated.Value(0)).current;
  const appearingSecondAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingSecondAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLouderIsEnded(true);
    }, 7000);
  }, []);
  return (
    <NavigationContainer>
      {!louderIsEnded ? (
        <View style={{flex: 1}}>
          <ImageBackground
            style={{flex: 1}}
            source={require('./accets/bcgr.jpeg')}>
            <Animated.View
              style={{
                opacity: appearingAnim,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 5, 141, 0.5)',
              }}>
              <Text
                style={{fontSize: 50, fontWeight: 'bold', color: '#ff6a02'}}>
                Hello !!!
              </Text>
              <Text
                style={{fontSize: 50, fontWeight: 'bold', color: '#ff6a02'}}>
                it`s
              </Text>
              <Text
                style={{
                  fontSize: 70,
                  fontWeight: 'bold',
                  color: '#ff6a02',
                  textAlign: 'center',
                }}>
                Bite with Fish
              </Text>
              <Text
                style={{fontSize: 70, fontWeight: 'bold', color: '#ff6a02'}}>
                Quest
              </Text>
            </Animated.View>
          </ImageBackground>
        </View>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GameScreen"
            component={GameScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RulseScreen"
            component={RulseScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EasyWayScreen"
            component={EasyWayScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FirstEasyLvl"
            component={FirstEasyLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SecondEasyLvl"
            component={SecondEasyLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ThirdEasyLvl"
            component={ThirdEasyLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FourthEasyLvl"
            component={FourthEasyLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FiveEasyLvl"
            component={FiveEasyLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SixeEasyLvl"
            component={SixeEasyLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SevenEasyLvl"
            component={SevenEasyLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EightEasyLvl"
            component={EightEasyLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CongratScreen"
            component={CongratScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HardWayScreen"
            component={HardWayScreen}
            options={{headerShown: false}}
          />
          {/** */}
          <Stack.Screen
            name="FirstHardLvl"
            component={FirstHardLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SecondHardLvl"
            component={SecondHardLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ThirdHardLvl"
            component={ThirdHardLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FourthHardLvl"
            component={FourthHardLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FiveHardLvl"
            component={FiveHardLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SixeHardLvl"
            component={SixeHardLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SevenHardLvl"
            component={SevenHardLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EightHardLvl"
            component={EightHardLvl}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HardCongratScreen"
            component={HardCongratScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default App;
