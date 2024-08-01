// ThirdHardLvl
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
import {redSea} from '../../data/redSea';
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

const ThirdHardLvl = ({navigation}) => {
  const [fishArray, setFishArray] = useState([]);
  const [baitArray, setBaitArray] = useState([]);
  const [selectedFish, setSelectedFish] = useState(null);
  const [selectedBait, setSelectedBait] = useState(null);
  const [correctPairs, setCorrectPairs] = useState([]);
  console.log('correctPairs==>', correctPairs);
  console.log('correctPairs length==>', correctPairs.length);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);
  //console.log('incorrectAttempts==>', incorrectAttempts);

  const [congratModal, setCongratModal] = useState(false);
  const [luserModal, setLuserModal] = useState(false);
  const [incorrectPairModal, setIncorrectPairModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90); // Додаємо стан для таймера
  //
  const [ThirdHardLevelComplite, setThirdHardLevelComplite] = useState(false);
  console.log('ThirdHardLevelComplite==>', ThirdHardLevelComplite);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [ThirdHardLevelComplite]);

  const setData = async () => {
    try {
      const data = {
        ThirdHardLevelComplite,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`ThirdHardLvl`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
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

  useEffect(() => {
    if (correctPairs.length >= 9) {
      setCongratModal(true);
      setThirdHardLevelComplite(true);
      setShowInfo(true);
    }
  }, [correctPairs]);

  useEffect(() => {
    const shuffledFish = shuffleArray([...redSea]);
    const shuffledBait = shuffleArray([...redSea]);

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

  useEffect(() => {
    if (timeLeft === 0 && !showInfo) {
      setLuserModal(true); // Відображаємо модальне вікно програшу, якщо час закінчився
    } else if (timeLeft > 0 && !showInfo) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000); // Запускаємо таймер
      return () => clearTimeout(timerId); // Очищаємо таймер при розмонтуванні
    }
  }, [timeLeft, showInfo]);

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
                {/* Таймер */}
                <View style={{alignItems: 'center', marginBottom: 5}}>
                  <View
                    style={{
                      marginVertical: 0,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      backgroundColor: 'rgba(0, 5, 141, 0.7)',
                      borderRadius: 10,
                      borderWidth: 3,
                      borderColor: '#ff6a02',
                      width: 300,
                    }}>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#ff6a02',
                      }}>
                      Time Left: {timeLeft}s
                    </Text>
                  </View>
                </View>

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
                              color: 'blue',
                              fontSize: 20,
                              textAlign: 'center',
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
                    1. **Peak season**: The best time for fishing in the Red Sea
                    is from October to April. In summer, the water is very warm,
                    which can affect the activity of fish.
                  </Text>
                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    2. **Night Fishing**: Night fishing can be very effective,
                    especially for tuna and grouper. Nights in the Red Sea often
                    provide better bites.
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    3. **Use live bait**: For larger predators like tuna and
                    barracuda, using live bait like small fish can greatly
                    increase your chances of success.
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    4. **Warm water**: The water temperature in the Red Sea can
                    be quite high, especially in summer. Make sure your baits
                    and lures can withstand high temperatures.
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    5. **Coral Reefs**: Fishing near coral reefs can be very
                    productive. Fish such as grouper and snapper are often found
                    near reefs.
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    6. **Appropriate clothing**: Protect yourself from the sun,
                    wear light clothing, hats and use sunscreen. The sun can be
                    intense and you want to avoid overheating and sunburn.
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    7. **Use Fishing Buoys**: Fishing buoys can help you find
                    deep water spots where fish congregate. This is especially
                    useful for catching large fish.
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    8. **Check Local Rules**: Always check local rules and
                    regulations before fishing, as some species of fish may be
                    protected or have catch limits.
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    9. **Trolling lures**: Use trolling lures to catch tuna and
                    barracuda. This allows you to attract fish that may be a
                    long way from your boat.
                  </Text>

                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    10. **Fish Keeping**: If you plan to release the fish, try
                    to do as little trauma as possible. Use special tools to
                    remove the hook and minimize the time the fish is in the
                    air.
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

                <Text style={{color: 'blue', fontSize: 30, fontWeight: 'bold'}}>
                  Congrat !!!!
                </Text>
                <Text style={{color: 'blue', fontSize: 30, fontWeight: 'bold'}}>
                  You won!
                </Text>
                <Text style={{color: 'blue', fontSize: 30, fontWeight: 'bold'}}>
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
                    navigation.navigate('HardWayScreen');
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
                navigation.navigate('FourthHardLvl');
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
              <Text style={{fontWeight: 'bold', fontSize: 20, color: 'blue'}}>
                Go to next lvl
              </Text>
            </TouchableOpacity>
          )}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default ThirdHardLvl;
