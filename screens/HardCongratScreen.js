import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Alert,
} from 'react-native';

const HardCongratScreen = ({navigation}) => {
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
          <Text
            style={{
              color: '#ff6a02',
              fontSize: 50,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Congrat, you've completed the HARD way!
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 50,
              borderWidth: 3,
              borderColor: '#ff6a02',
              padding: 10,
              borderRadius: 50,
              backgroundColor: 'rgba(0, 5, 141, 0.7)',
            }}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text
              style={{
                color: '#ff6a02',
                fontSize: 30,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Back to Home
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default HardCongratScreen;
