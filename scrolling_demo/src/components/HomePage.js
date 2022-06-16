import React, {useState} from 'react';
import moment from 'moment';
import {
  TextInput,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';

const HomePage = () => {
  return (
    <SafeAreaView style={{}}>
      <ScrollView>
        <ScrollView horizontal={true} style={{margin: 20}}>
          <View style={{}}>
            <View
              style={{
                position: 'absolute',
                zIndex: 2,
                marginTop: 30,
                marginLeft: 30,
              }}>
              <Text style={{color: 'white', fontSize: 30, fontWeight: '700'}}>
                360 view of
              </Text>
              <Text style={{color: 'white', fontSize: 30, fontWeight: '700'}}>
                cash flow
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#0de78c',
                  padding: 10,
                  width: 150,
                  borderRadius: 5,
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
                  Click here
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              style={{
                height: 200,
                width: 350,
                marginRight: 10,
                borderRadius: 25,
                borderWidth: 1,
              }}
              source={{
                uri: 'https://t3.ftcdn.net/jpg/03/33/11/06/360_F_333110603_6ktDp5V1eMjPAVqwcUV1NCLzrZI4AFW7.jpg',
              }}
            />
          </View>
          <Image
            style={{
              height: 200,
              width: 350,
              marginRight: 10,
              borderRadius: 25,
              borderWidth: 1,
            }}
            source={{
              uri: 'https://t3.ftcdn.net/jpg/03/33/11/06/360_F_333110603_6ktDp5V1eMjPAVqwcUV1NCLzrZI4AFW7.jpg',
            }}
          />
        </ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'white',
          }}>
          <View style={{}}>
            <TouchableOpacity
              style={{
                margin: 20,
                alignItems: 'center',
                // borderWidth: 1,
                padding: 10,
                elevation: 3,
                // backgroundColor:"white",
              }}>
              <Image
                style={{height: 40, width: 40}}
                source={{
                  uri: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/store.png',
                }}
              />
              <Text style={{margin: 10, fontWeight: '700'}}>New Order</Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <TouchableOpacity
              style={{
                margin: 20,
                alignItems: 'center',
                // borderWidth: 1,
                elevation: 3,

                padding: 10,
              }}>
              <Image
                style={{height: 40, width: 40}}
                source={{
                  uri: 'https://icon-library.com/images/payment-icon-png/payment-icon-png-0.jpg',
                }}
              />
              <Text style={{margin: 10, fontWeight: '700'}}>Payments</Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <TouchableOpacity
              style={{
                margin: 20,
                alignItems: 'center',
                // borderWidth: 1,
                elevation: 3,
                padding: 10,
              }}>
              <Image
                style={{height: 40, width: 40}}
                source={{
                  uri: 'https://image.apktoy.com/img/5e/com.vaibhavkalpe.android.khatabook/icon.png',
                }}
              />
              <Text style={{margin: 10, fontWeight: '700'}}>Khaata Entry</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontSize: 25, padding: 15, fontWeight: '700'}}>
          Manage Business
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: 'white',
            elevation: 3,
            marginHorizontal: 15,
            paddingVertical: 10,
          }}>
          <View style={{}}>
            <Image
              style={{height: 40, width: 40, backgroundColor: '#0de78c'}}
              source={{
                uri: 'https://img.icons8.com/ios/500/attendance-mark.png',
              }}
            />
          </View>
          <View>
            <Text>Mark your</Text>
            <Text>Employee's</Text>
            <Text>Attendance</Text>
          </View>
          <TouchableOpacity
            style={{backgroundColor: '#0de78c', padding: 10, borderRadius: 1}}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{padding:20,backgroundColor:"white",marginTop:20}}>
          <View style={{flexDirection: 'row',justifyContent:"space-around"}}>
            <Text style={{fontSize:20,fontWeight:"600"}}>Recently added Employees</Text>
            <TouchableOpacity style={{backgroundColor:"#0de78c",padding:10,borderRadius:1}}>
              <Text style={{color:"white",fontWeight:"700",fontSize:15}}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-around"}}>
            <Image
              style={{height: 30, width: 30}}
              source={{
                uri: 'https://i.pinimg.com/originals/75/3c/3a/753c3abff1e7f357d7bd56aa468ee7e2.png',
              }}
            />
            <View>
              <Text>Kajal</Text>
              <Text>Manager</Text>
              <Text>Added on 16 Jun 2022</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
