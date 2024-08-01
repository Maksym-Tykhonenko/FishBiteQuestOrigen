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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
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
                onPress={() => navigation.navigate('GameScreen')}
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
                }}>
                <Text
                  style={{fontSize: 40, color: '#ff6a02', fontWeight: 'bold'}}>
                  Start
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('RulseScreen')}
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
                }}>
                <Text
                  style={{fontSize: 40, color: '#ff6a02', fontWeight: 'bold'}}>
                  Rulse
                </Text>
              </TouchableOpacity>
              {/** 
              <TouchableOpacity
                onPress={() => navigation.navigate('ProfileScreen')}
                style={{
                  width: windowWidth * 0.7,
                  height: 100,
                  borderWidth: 5,
                  borderRadius: 50,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 5, 141, 0.6)',
                }}>
                <Text
                  style={{fontSize: 40, color: '#ff6a02', fontWeight: 'bold'}}>
                  Profile
                </Text>
              </TouchableOpacity>*/}
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
