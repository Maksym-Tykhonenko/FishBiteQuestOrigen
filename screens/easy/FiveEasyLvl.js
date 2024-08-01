import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Alert,
  Modal,
  Image,
} from 'react-native';
import {winter} from '../../data/winter';
import ConfettiCannon from 'react-native-confetti-cannon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Функція для перемішування масиву
const shuffleArray = array => {
  return array.sort(() => Math.random() - 0.5);
};

const FiveEasyLvl = ({navigation}) => {
  const [fishArray, setFishArray] = useState([]);
  const [baitArray, setBaitArray] = useState([]);
  const [selectedFish, setSelectedFish] = useState(null);
  const [selectedBait, setSelectedBait] = useState(null);
  const [correctPairs, setCorrectPairs] = useState([]);
  console.log('correctPairs==>', correctPairs);
  console.log('correctPairs length==>', correctPairs.length);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);

  const [congratModal, setCongratModal] = useState(false);
  const [luserModal, setLuserModal] = useState(false);
  const [incorrectPairModal, setIncorrectPairModal] = useState(false);
  //
  const [FiveEasyLevelComplite, setFiveEasyLevelComplite] = useState(false);
  console.log('FiveEasyLevelComplite==>', FiveEasyLevelComplite);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [FiveEasyLevelComplite]);

  const setData = async () => {
    try {
      const data = {
        FiveEasyLevelComplite,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`FiveEasyLvl`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
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

  useEffect(() => {
    if (correctPairs.length >= 9) {
      setCongratModal(true);
      setFiveEasyLevelComplite(true);
      setShowInfo(true);
    }
  }, [correctPairs]);

  useEffect(() => {
    const shuffledFish = shuffleArray([...winter]);
    const shuffledBait = shuffleArray([...winter]);

    setFishArray(shuffledFish);
    setBaitArray(shuffledBait);
  }, []);

  useEffect(() => {
    if (selectedFish && selectedBait) {
      if (selectedFish.id === selectedBait.id) {
        //setBaitStatus(prev => ({...prev, [selectedBait.id]: 'correct'}));
        setTimeout(() => {
          setCorrectPairs(prev => [...prev, selectedFish.id]);

          setSelectedFish(null);
          setSelectedBait(null);
        }, 1000);
      } else {
        setIncorrectAttempts(prev => prev + 1);
        if (incorrectAttempts + 1 >= 3) {
          setLuserModal(true);
        } else {
          setIncorrectPairModal(true);
        }
        setSelectedFish(null);
        setSelectedBait(null);
      }
    }
  }, [selectedFish, selectedBait, incorrectAttempts, navigation]);

  const goToNextLvl = () => {
    navigation.navigate('SixeEasyLvl');
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../accets/bcgr.jpeg')}>
        <SafeAreaView
          style={{
            flex: 1,
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {!showInfo ? (
            <View
              style={{
                flex: 1,
                position: 'relative',
                marginTop: 5,
                marginBottom: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ScrollView>
                {/* Блок риб */}
                <View
                  style={{
                    flex: 0.5,
                    height: windowHeight * 0.36,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}>
                  {fishArray.map(
                    item =>
                      !correctPairs.includes(item.id) && (
                        <TouchableOpacity
                          onPress={() => setSelectedFish(item)}
                          style={{
                            marginHorizontal: 3,
                            marginVertical: 3,
                            width: windowWidth * 0.25,
                            height: windowWidth * 0.25,
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor:
                              selectedFish?.id === item.id
                                ? 'green'
                                : '#ff6a02',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 5,
                            borderColor:
                              selectedFish?.id === item.id
                                ? 'green'
                                : '#ff6a02',
                          }}
                          key={item.id}>
                          <Text
                            style={{
                              fontSize: 20,
                              textAlign: 'center',
                              color: 'blue',
                            }}>
                            {item.fish}
                          </Text>
                        </TouchableOpacity>
                      ),
                  )}
                </View>

                <View
                  style={{
                    marginVertical: 10,
                    height: windowHeight * 0.1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                  }}>
                  <Image
                    style={{width: 70, height: 70}}
                    source={require('../../accets/clown-fish.png')}
                  />
                  <Entypo
                    name="arrow-long-up"
                    style={{fontSize: 40, color: '#ff6a02'}}
                  />

                  <Text
                    style={{
                      fontSize: 40,
                      fontWeight: 'bold',
                      color: '#ff6a02',
                    }}>
                    {correctPairs.length} / 9
                  </Text>

                  <Entypo
                    name="arrow-long-down"
                    style={{fontSize: 40, color: '#ff6a02'}}
                  />
                  <Image
                    style={{width: 70, height: 70}}
                    source={require('../../accets/fishing-baits.png')}
                  />
                </View>

                {/* Блок наживок */}
                <View
                  style={{
                    flex: 0.5,
                    height: windowHeight * 0.36,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}>
                  {baitArray.map(
                    item =>
                      !correctPairs.includes(item.id) && (
                        <TouchableOpacity
                          onPress={() => setSelectedBait(item)}
                          style={{
                            marginHorizontal: 3,
                            marginVertical: 3,
                            width: windowWidth * 0.25,
                            height: windowWidth * 0.25,
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor:
                              selectedBait?.id === item.id
                                ? 'green'
                                : '#ff6a02',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 5,
                            borderColor:
                              selectedBait?.id === item.id
                                ? 'green'
                                : '#ff6a02',
                          }}
                          key={item.id}>
                          <Text
                            style={{
                              fontSize: 20,
                              textAlign: 'center',
                              color: 'blue',
                            }}>
                            {item.bait}
                          </Text>
                        </TouchableOpacity>
                      ),
                  )}
                </View>

                <View style={{height: 100}}></View>
              </ScrollView>
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                position: 'relative',
                marginTop: 5,
                marginBottom: 10,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(0, 5, 141, 0.6)',
                  borderRadius: 10,
                  padding: 3,
                }}>
                <ScrollView>
                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    1. **Currents and Weather**: Gulf Stream Currents and
                    Weather Caribbean conditions create ideal conditions for a
                    large Pisces. Check the forecast and weather conditions
                    before fishing can greatly increase your chances of success.
                  </Text>
                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    2. **Time of Day**: Many large fish, such as marlin and
                    tuna, are the most active at dawn and dusk. Plan your
                    fishing at these times for better results.
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    3. **Plots of Reefs**: Reefs and underwater structures
                    attract many species of fish. They create shelters for small
                    fish, which is attractive larger predators. Use sonar or
                    fish finder equipment to detect these structures.
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    4. **Live Lures**: Using live baits such as sardines, shrimp
                    or squid, can greatly increase your chances of a big catch.
                    Live bait is more attractive to predatory fish.
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    5. **Trolling**: Trolling (dragging the bait behind the
                    boat) is available an effective method for catching large
                    fish such as marlin, sailboat and wahoo. Use bright baits
                    and different ones trolling speed to attract fish.
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    6. **Use High Quality Cords**: Water in the Caribbean Sea
                    may be extremely transparent, so the use of high-quality
                    cords and lines that are less visible in the water can be
                    useful.
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    7. **Choosing Lure Colors**: On bright sunny days use bright
                    colored lures such as blue, green and yellow. It is better
                    on cloudy days and in muddy water dark colored lures such as
                    black or purple
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    8. **Fighting the Big Fish**: When fishing large fish such
                    as marlin or shark, be prepared for long struggle Use
                    appropriate equipment and be patient
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    9. **Fishing Safety**: Always have the necessary safety
                    equipment on board: life preservers vests, first aid kit,
                    radio communication and spare tackle. Weather on the sea can
                    change very quickly, so be prepared to unforeseen
                    conditions.
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    10. **Respect Nature**: Follow the rules and regulations of
                    fishing established local authorities. catch and release
                    fish that do not meet the size or quota to contribute
                    preservation of marine ecosystems.
                  </Text>
                  <View style={{height: 100}}></View>
                </ScrollView>
              </View>
            </View>
          )}
          {/**Cofeti */}
          {showInfo && (
            <>
              <ConfettiCannon count={200} origin={{x: 0, y: 0}} />
              <ConfettiCannon count={200} origin={{x: 400, y: 0}} />
            </>
          )}

          {/**Congrat Modal */}
          <Modal animationType="fade" transparent={true} visible={congratModal}>
            <View
              style={{
                backgroundColor: '#ff6a02',
                flex: 1,
                marginVertical: '50%',
                marginHorizontal: '5%',
                borderRadius: 10,
                borderWidth: 3,
                borderColor: 'blue',
              }}>
              <View
                style={{
                  flex: 0.8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{flexDirection: 'row', marginBottom: 20}}>
                  <Image
                    style={{width: 60, height: 60}}
                    source={require('../../accets/party-popper2.png')}
                  />
                  <Image
                    style={{width: 60, height: 60}}
                    source={require('../../accets/party-popper2.png')}
                  />

                  <Image
                    style={{width: 60, height: 60}}
                    source={require('../../accets/party-popper2.png')}
                  />
                </View>

                <Text
                  style={{
                    color: 'blue',
                    fontSize: 30,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Congrat !!!!
                </Text>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 30,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  You won!
                </Text>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 30,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Your result: {correctPairs.length} /9
                </Text>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 30,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Keep the valuable advice
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    setCongratModal(false);
                  }}
                  style={{
                    marginTop: 40,
                    width: 140,
                    height: 50,
                    borderWidth: 3,
                    borderRadius: 50,
                    borderColor: 'blue',
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: 'blue',
                    shadowOffset: {width: 30, height: 10},
                    shadowRadius: 15,
                    shadowOpacity: 0.2,
                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      color: 'blue',
                      fontSize: 20,
                      fontWeight: 'bold',
                      shadowColor: 'blue',
                      shadowOffset: {width: 30, height: 10},
                      shadowRadius: 15,
                      shadowOpacity: 0.2,
                      elevation: 5,
                    }}>
                    Ok
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/**Luser Modal */}
          <Modal animationType="fade" transparent={true} visible={luserModal}>
            <View
              style={{
                backgroundColor: '#ff6a02',
                flex: 1,
                marginVertical: '50%',
                marginHorizontal: '5%',
                borderRadius: 10,
                borderWidth: 3,
                borderColor: 'blue',
              }}>
              <View
                style={{
                  flex: 0.8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{flexDirection: 'row', marginBottom: 20}}>
                  <Image
                    style={{width: 60, height: 60}}
                    source={require('../../accets/lost-items.png')}
                  />
                </View>

                <Text style={{color: 'blue', fontSize: 30, fontWeight: 'bold'}}>
                  Unfortunately
                </Text>
                <Text style={{color: 'blue', fontSize: 30, fontWeight: 'bold'}}>
                  You lost!
                </Text>
                <Text style={{color: 'blue', fontSize: 30, fontWeight: 'bold'}}>
                  Try again!!!
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    setLuserModal(false);
                    navigation.navigate('EasyWayScreen');
                  }}
                  style={{
                    marginTop: 40,
                    width: 140,
                    height: 50,
                    borderWidth: 3,
                    borderRadius: 50,
                    borderColor: 'blue',
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: 'blue',
                    shadowOffset: {width: 30, height: 10},
                    shadowRadius: 15,
                    shadowOpacity: 0.2,
                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      color: 'blue',
                      fontSize: 20,
                      fontWeight: 'bold',
                      shadowColor: 'blue',
                      shadowOffset: {width: 30, height: 10},
                      shadowRadius: 15,
                      shadowOpacity: 0.2,
                      elevation: 5,
                    }}>
                    Ok
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/**Incorect Paire Modal */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={incorrectPairModal}>
            <View
              style={{
                backgroundColor: '#ff6a02',
                flex: 1,
                marginVertical: '50%',
                marginHorizontal: '5%',
                borderRadius: 10,
                borderWidth: 3,
                borderColor: 'blue',
              }}>
              <View
                style={{
                  flex: 0.8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{flexDirection: 'row', marginBottom: 20}}>
                  <Image
                    style={{width: 60, height: 60}}
                    source={require('../../accets/warning.png')}
                  />
                  <Image
                    style={{width: 60, height: 60}}
                    source={require('../../accets/warning.png')}
                  />
                  <Image
                    style={{width: 60, height: 60}}
                    source={require('../../accets/warning.png')}
                  />
                </View>

                <Text
                  style={{
                    textAlign: 'center',
                    color: 'blue',
                    fontSize: 30,
                    fontWeight: 'bold',
                  }}>
                  Incorrect Pair
                </Text>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 30,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  You used {incorrectAttempts} of 2 mistakes
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'blue',
                    fontSize: 30,
                    fontWeight: 'bold',
                  }}>
                  Be more careful!
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    setIncorrectPairModal(false);
                  }}
                  style={{
                    marginTop: 40,
                    width: 140,
                    height: 50,
                    borderWidth: 3,
                    borderRadius: 50,
                    borderColor: 'blue',
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: 'blue',
                    shadowOffset: {width: 30, height: 10},
                    shadowRadius: 15,
                    shadowOpacity: 0.2,
                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      color: 'blue',
                      fontSize: 20,
                      fontWeight: 'bold',
                      shadowColor: 'blue',
                      shadowOffset: {width: 30, height: 10},
                      shadowRadius: 15,
                      shadowOpacity: 0.2,
                      elevation: 5,
                    }}>
                    Ok
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/**BTN BAck/Go */}
          {!showInfo ? (
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
              <Entypo
                name="chevron-left"
                style={{fontSize: 40, color: 'blue'}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                goToNextLvl();
              }}
              style={{
                position: 'absolute',
                bottom: 20,
                right: 10,
                width: 170,
                height: 60,
                backgroundColor: '#ff6a02',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
              }}>
              <Text style={{fontWeight: 'bold', color: 'blue', fontSize: 20}}>
                Go to next lvl
              </Text>
            </TouchableOpacity>
          )}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default FiveEasyLvl;
