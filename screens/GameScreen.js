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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GameScreen = ({navigation}) => {
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
                alignItems: 'center',
                justifyContent: 'center',
                height: windowHeight,
              }}>
              <TouchableOpacity
                style={{
                  width: windowWidth * 0.7,
                  height: 100,
                  borderWidth: 5,
                  borderRadius: 50,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 5, 141, 0.6)',
                  marginBottom: 20,
                }}
                onPress={() => navigation.navigate('EasyWayScreen')}>
                <Text
                  style={{fontSize: 40, color: '#ff6a02', fontWeight: 'bold'}}>
                  Easy way
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: windowWidth * 0.7,
                  height: 100,
                  borderWidth: 5,
                  borderRadius: 50,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 5, 141, 0.6)',
                  marginBottom: 20,
                }}
                onPress={() => navigation.navigate('HardWayScreen')}>
                <Text
                  style={{fontSize: 40, color: '#ff6a02', fontWeight: 'bold'}}>
                  Hard way
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/**BTN goBack */}
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

export default GameScreen;
