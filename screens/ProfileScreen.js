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

const ProfileScreen = ({navigation}) => {
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
            <Text style={{color: '#ff6a02', fontSize: 30}}>
              Profile Screen Screen
            </Text>
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

export default ProfileScreen;
