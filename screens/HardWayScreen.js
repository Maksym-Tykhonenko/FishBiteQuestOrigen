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

const HardWayScreen = ({navigation}) => {
  const [FirstHardLevelComplite, setFirstHardLevelComplite] = useState(false);
  const [SecondHardLevelComplite, setSecondHardLevelComplite] = useState(false);
  const [ThirdHardLevelComplite, setThirdHardLevelComplite] = useState(false);
  const [FoureHardLevelComplite, setFoureHardLevelComplite] = useState(false);
  const [FiveHardLevelComplite, setFiveHardLevelComplite] = useState(false);
  const [SixeHardLevelComplite, setSixeHardLevelComplite] = useState(false);
  const [SevenHardLevelComplite, setSevenHardLevelComplite] = useState(false);
  console.log('FoureHardLevelComplite==>', FoureHardLevelComplite);

  useEffect(() => {
    getFirstHardLevelComplite();
    getSecondHardLevelComplite();
    getThirdHardLevelComplite();
    getFoureHardLevelComplite();
    getFiveHardLevelComplite();
    getSixeHardLevelComplite();
    getSevenHardLevelComplite();
  }, []);

  const getFirstHardLevelComplite = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`FirstHardLvl`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setFirstHardLevelComplite(parsedData.FirstHardLevelComplite);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getSecondHardLevelComplite = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`SecondHardLvl`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setSecondHardLevelComplite(parsedData.SecondHardLevelComplite);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getThirdHardLevelComplite = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`ThirdHardLvl`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setThirdHardLevelComplite(parsedData.ThirdHardLevelComplite);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getFoureHardLevelComplite = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`FourthHardLvl`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setFoureHardLevelComplite(parsedData.FoureHardLevelComplite);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getFiveHardLevelComplite = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`FiveHardLvl`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setFiveHardLevelComplite(parsedData.FiveHardLevelComplite);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getSixeHardLevelComplite = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`SixeHardLvl`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setSixeHardLevelComplite(parsedData.SixeHardLevelComplite);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getSevenHardLevelComplite = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`SevenHardLvl`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setSevenHardLevelComplite(parsedData.SevenHardLevelComplite);
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
                onPress={() => navigation.navigate('FirstHardLvl')}>
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
                disabled={FirstHardLevelComplite ? false : true}
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: FirstHardLevelComplite
                    ? 'rgba(0, 5, 141, 0.7)'
                    : 'rgba(128, 128, 128, 0.8)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('SecondHardLvl')}>
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
                disabled={SecondHardLevelComplite ? false : true}
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: SecondHardLevelComplite
                    ? 'rgba(0, 5, 141, 0.7)'
                    : 'rgba(128, 128, 128, 0.8)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('ThirdHardLvl')}>
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
                disabled={ThirdHardLevelComplite ? false : true}
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: ThirdHardLevelComplite
                    ? 'rgba(0, 5, 141, 0.7)'
                    : 'rgba(128, 128, 128, 0.8)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('FourthHardLvl')}>
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
                disabled={FoureHardLevelComplite ? false : true}
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: FoureHardLevelComplite
                    ? 'rgba(0, 5, 141, 0.7)'
                    : 'rgba(128, 128, 128, 0.8)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('FiveHardLvl')}>
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
                disabled={FiveHardLevelComplite ? false : true}
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: FiveHardLevelComplite
                    ? 'rgba(0, 5, 141, 0.7)'
                    : 'rgba(128, 128, 128, 0.8)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('SixeHardLvl')}>
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
                disabled={SixeHardLevelComplite ? false : true}
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: SixeHardLevelComplite
                    ? 'rgba(0, 5, 141, 0.7)'
                    : 'rgba(128, 128, 128, 0.8)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('SevenHardLvl')}>
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
                disabled={SevenHardLevelComplite ? false : true}
                style={{
                  width: windowWidth * 0.9,
                  height: 120,
                  borderWidth: 5,
                  borderRadius: 150,
                  borderColor: '#ff6a02',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: SevenHardLevelComplite
                    ? 'rgba(0, 5, 141, 0.7)'
                    : 'rgba(128, 128, 128, 0.8)',
                  marginBottom: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('EightHardLvl')}>
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

export default HardWayScreen;
