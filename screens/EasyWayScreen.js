import React, {useState, useRef, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EasyWayScreen = ({navigation}) => {
  const [FirstEasyLevelComplite, setFirstEasyLevelComplite] = useState(false);
  const [SecondEasyLevelComplite, setSecondEasyLevelComplite] = useState(false);
  const [ThirdEasyLevelComplite, setThirdEasyLevelComplite] = useState(false);
  const [FoureEasyLevelComplite, setFoureEasyLevelComplite] = useState(false);
  const [FiveEasyLevelComplite, setFiveEasyLevelComplite] = useState(false);
  const [SixeEasyLevelComplite, setSixeEasyLevelComplite] = useState(false);
  const [SevenEasyLevelComplite, setSevenEasyLevelComplite] = useState(false);
  console.log('FoureEasyLevelComplite==>', FoureEasyLevelComplite);

  useEffect(() => {
    getFirstEasyLevelComplite();
    getSecondEasyLevelComplite();
    getThirdEasyLevelComplite();
    getFoureEasyLevelComplite();
    getFiveEasyLevelComplite();
    getSixeEasyLevelComplite();
    getSevenEasyLevelComplite();
  }, []);

  const getFirstEasyLevelComplite = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`FirstEasyLvl`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setFirstEasyLevelComplite(parsedData.FirstEasyLevelComplite);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getSecondEasyLevelComplite = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`SecondEasyLvl`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setSecondEasyLevelComplite(parsedData.SecondEasyLevelComplite);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getThirdEasyLevelComplite = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`ThirdEasyLvl`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setThirdEasyLevelComplite(parsedData.ThirdEasyLevelComplite);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getFoureEasyLevelComplite = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`FourthEasyLvl`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setFoureEasyLevelComplite(parsedData.FoureEasyLevelComplite);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getFiveEasyLevelComplite = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`FiveEasyLvl`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setFiveEasyLevelComplite(parsedData.FiveEasyLevelComplite);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getSixeEasyLevelComplite = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`SixeEasyLvl`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setSixeEasyLevelComplite(parsedData.SixeEasyLevelComplite);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getSevenEasyLevelComplite = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`SevenEasyLvl`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setSevenEasyLevelComplite(parsedData.SevenEasyLevelComplite);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
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
              }}>
              {/**1 */}
              <TouchableOpacity
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 5, 141, 0.7)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('FirstEasyLvl')}>
                <Text
                  style={{
                    fontSize: 30,
                    color: '#ff6a02',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: windowWidth * 0.8,
                  }}>
                  Fishing in Caribian sea
                </Text>
              </TouchableOpacity>

              {/**2 */}
              <TouchableOpacity
                disabled={FirstEasyLevelComplite ? false : true}
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: FirstEasyLevelComplite
                    ? 'rgba(0, 5, 141, 0.7)'
                    : 'rgba(128, 128, 128, 0.8)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('SecondEasyLvl')}>
                <Text
                  style={{
                    fontSize: 30,
                    color: '#ff6a02',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: windowWidth * 0.8,
                  }}>
                  Fishing in Mediterranean Sea
                </Text>
              </TouchableOpacity>

              {/**3 */}
              <TouchableOpacity
                disabled={SecondEasyLevelComplite ? false : true}
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: SecondEasyLevelComplite
                    ? 'rgba(0, 5, 141, 0.7)'
                    : 'rgba(128, 128, 128, 0.8)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('ThirdEasyLvl')}>
                <Text
                  style={{
                    fontSize: 30,
                    color: '#ff6a02',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: windowWidth * 0.8,
                  }}>
                  Fishing in Red Sea
                </Text>
              </TouchableOpacity>

              {/**4 */}
              <TouchableOpacity
                disabled={ThirdEasyLevelComplite ? false : true}
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: ThirdEasyLevelComplite
                    ? 'rgba(0, 5, 141, 0.7)'
                    : 'rgba(128, 128, 128, 0.8)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('FourthEasyLvl')}>
                <Text
                  style={{
                    fontSize: 30,
                    color: '#ff6a02',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: windowWidth * 0.8,
                  }}>
                  Fishing on lakes
                </Text>
              </TouchableOpacity>

              {/**5 */}
              <TouchableOpacity
                disabled={FoureEasyLevelComplite ? false : true}
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: FoureEasyLevelComplite
                    ? 'rgba(0, 5, 141, 0.7)'
                    : 'rgba(128, 128, 128, 0.8)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('FiveEasyLvl')}>
                <Text
                  style={{
                    fontSize: 30,
                    color: '#ff6a02',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: windowWidth * 0.8,
                  }}>
                  Winter fishing
                </Text>
              </TouchableOpacity>

              {/**6 */}
              <TouchableOpacity
                disabled={FiveEasyLevelComplite ? false : true}
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: FiveEasyLevelComplite
                    ? 'rgba(0, 5, 141, 0.7)'
                    : 'rgba(128, 128, 128, 0.8)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('SixeEasyLvl')}>
                <Text
                  style={{
                    fontSize: 30,
                    color: '#ff6a02',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: windowWidth * 0.8,
                  }}>
                  Fishing in the ocean
                </Text>
              </TouchableOpacity>

              {/**7 */}
              <TouchableOpacity
                disabled={SixeEasyLevelComplite ? false : true}
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: SixeEasyLevelComplite
                    ? 'rgba(0, 5, 141, 0.7)'
                    : 'rgba(128, 128, 128, 0.8)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('SevenEasyLvl')}>
                <Text
                  style={{
                    fontSize: 30,
                    color: '#ff6a02',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: windowWidth * 0.8,
                  }}>
                  Fishing in Canadian lakes
                </Text>
              </TouchableOpacity>

              {/**8 */}
              <TouchableOpacity
                disabled={SevenEasyLevelComplite ? false : true}
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: SevenEasyLevelComplite
                    ? 'rgba(0, 5, 141, 0.7)'
                    : 'rgba(128, 128, 128, 0.8)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('EightEasyLvl')}>
                <Text
                  style={{
                    fontSize: 30,
                    color: '#ff6a02',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: windowWidth * 0.8,
                  }}>
                  Fishing on Australian coast
                </Text>
              </TouchableOpacity>
              <View style={{height: 100}}></View>
            </View>
          </ScrollView>

          {/**BTN goBack */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GameScreen');
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

export default EasyWayScreen;
