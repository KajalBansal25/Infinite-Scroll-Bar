import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

const Order = () => {
  return (
    <View style={{position: 'relative'}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          padding: 10,
          backgroundColor: '27d9bb',
          zIndex: 1,
          backgroundColor: '#27d9bb',
          maxWidth: '50%',
          marginHorizontal: 100,
          alignItems: 'center',
          borderRadius: 10,
          position: 'absolute',
          bottom: 80,
        }}>
        <Image
          style={{height: 30, width: 30, tintColor: 'white'}}
          source={{
            uri: 'https://cdn.onlinewebfonts.com/svg/img_414457.png',
          }}
        />
        <Text style={{marginLeft: 20, color: 'white', fontSize: 20}}>
          New Order
        </Text>
      </TouchableOpacity>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 20,
            backgroundColor: 'white',
          }}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>
            178 Orders worth ₹ 67,400
          </Text>
          <Image
            style={{height: 25, width: 25}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2948/2948037.png',
            }}
          />
        </View>
      </View>

      <ScrollView style={{}}>
        <View
          style={{
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 30,
            }}>
            <View>
              <Text>Order ID:9810780049</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{fontWeight: '800', fontSize: 20, marginRight: 10}}>
                  ₹ 4,784
                </Text>
                <Text>(7 Items)</Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: '#457fde',
                  color: 'white',
                  textAlign: 'center',
                  maxWidth: '50%',
                  fontWeight: '700',
                  borderRadius: 2,
                  padding: 5,
                }}>
                Open
              </Text>
              <Text>21 Jun,2021</Text>
              <Text style={{fontWeight: '700'}}>Gupta Grocery Store</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 30,
            }}>
            <View>
              <Text>Order ID:9810780049</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{fontWeight: '800', fontSize: 20, marginRight: 10}}>
                  ₹ 4,784
                </Text>
                <Text>(7 Items)</Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: '#457fde',
                  color: 'white',
                  textAlign: 'center',
                  maxWidth: '50%',
                  fontWeight: '700',
                  borderRadius: 2,
                  padding: 5,
                }}>
                Open
              </Text>
              <Text>21 Jun,2021</Text>
              <Text style={{fontWeight: '700'}}>Gupta Grocery Store</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 30,
            }}>
            <View>
              <Text>Order ID:9810780049</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{fontWeight: '800', fontSize: 20, marginRight: 10}}>
                  ₹ 4,784
                </Text>
                <Text>(7 Items)</Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: '#457fde',
                  color: 'white',
                  textAlign: 'center',
                  maxWidth: '50%',
                  fontWeight: '700',
                  borderRadius: 2,
                  padding: 5,
                }}>
                Open
              </Text>
              <Text>21 Jun,2021</Text>
              <Text style={{fontWeight: '700'}}>Gupta Grocery Store</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 30,
            }}>
            <View>
              <Text>Order ID:9810780049</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{fontWeight: '800', fontSize: 20, marginRight: 10}}>
                  ₹ 4,784
                </Text>
                <Text>(7 Items)</Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: '#457fde',
                  color: 'white',
                  textAlign: 'center',
                  maxWidth: '50%',
                  fontWeight: '700',
                  borderRadius: 2,
                  padding: 5,
                }}>
                Open
              </Text>
              <Text>21 Jun,2021</Text>
              <Text style={{fontWeight: '700'}}>Gupta Grocery Store</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 30,
            }}>
            <View>
              <Text>Order ID:9810780049</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{fontWeight: '800', fontSize: 20, marginRight: 10}}>
                  ₹ 4,784
                </Text>
                <Text>(7 Items)</Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: '#457fde',
                  color: 'white',
                  textAlign: 'center',
                  maxWidth: '50%',
                  fontWeight: '700',
                  borderRadius: 2,
                  padding: 5,
                }}>
                Open
              </Text>
              <Text>21 Jun,2021</Text>
              <Text style={{fontWeight: '700'}}>Gupta Grocery Store</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 30,
            }}>
            <View>
              <Text>Order ID:9810780049</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{fontWeight: '800', fontSize: 20, marginRight: 10}}>
                  ₹ 4,784
                </Text>
                <Text>(7 Items)</Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: '#457fde',
                  color: 'white',
                  textAlign: 'center',
                  maxWidth: '50%',
                  fontWeight: '700',
                  borderRadius: 2,
                  padding: 5,
                }}>
                Open
              </Text>
              <Text>21 Jun,2021</Text>
              <Text style={{fontWeight: '700'}}>Gupta Grocery Store</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 30,
            }}>
            <View>
              <Text>Order ID:9810780049</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{fontWeight: '800', fontSize: 20, marginRight: 10}}>
                  ₹ 4,784
                </Text>
                <Text>(7 Items)</Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: '#457fde',
                  color: 'white',
                  textAlign: 'center',
                  maxWidth: '50%',
                  fontWeight: '700',
                  borderRadius: 2,
                  padding: 5,
                }}>
                Open
              </Text>
              <Text>21 Jun,2021</Text>
              <Text style={{fontWeight: '700'}}>Gupta Grocery Store</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
