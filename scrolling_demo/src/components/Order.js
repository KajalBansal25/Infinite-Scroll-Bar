import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
} from 'react-native';

const Order = () => {
  const [search, setSearch] = useState('');

  let items = [
    {
      orderId: '9810780049',
      cost: '₹ 4,784',
      quantity: '(7 Items)',
      status: 'open',
      date: '21 Jun,2021',
      store: 'Gupta Grocery Store',
    },
    {
      orderId: '9810780050',
      cost: '₹ 4,784',
      quantity: '(7 Items)',
      status: 'open',
      date: '21 Jun,2021',
      store: 'Guptas Grocery Store',
    },
    {
      orderId: '9810780051',
      cost: '₹ 4,784',
      quantity: '(7 Items)',
      status: 'open',
      date: '21 Jun,2021',
      store: 'jindal Grocery Store',
    },
    {
      orderId: '9810780052',
      cost: '₹ 4,784',
      quantity: '(7 Items)',
      status: 'open',
      date: '21 Jun,2021',
      store: 'Gupta Grocery Store',
    },
    {
      orderId: '9810780053',
      cost: '₹ 4,784',
      quantity: '(7 Items)',
      status: 'open',
      date: '21 Jun,2021',
      store: 'Gupta Grocery Store',
    },
    {
      orderId: '9810780054',
      cost: '₹ 4,784',
      quantity: '(7 Items)',
      status: 'open',
      date: '21 Jun,2021',
      store: 'Gupta Grocery Store',
    },
    {
      orderId: '9810780055',
      cost: '₹ 4,784',
      quantity: '(7 Items)',
      status: 'open',
      date: '21 Jun,2021',
      store: 'Gupta Grocery Store',
    },
    {
      orderId: '9810780056',
      cost: '₹ 4,784',
      quantity: '(7 Items)',
      status: 'open',
      date: '21 Jun,2021',
      store: 'Gupta Grocery Store',
    },
  ];
  const [searchedItem, setSearchedItem] = useState(items);

  const filterList = () => {
    const order = items.filter(
      listItem =>
        (listItem.orderId &&
          listItem.store &&
          listItem.orderId.toLowerCase().includes(search.toLowerCase())) ||
        listItem.store.toLowerCase().includes(search.toLowerCase()),
    );
    setSearchedItem(order);
  };

  return (
    <View style={{position: 'relative'}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          padding: 10,
          backgroundColor: '#0de78c',
          zIndex: 1,
          maxWidth: '50%',
          marginHorizontal: 100,
          alignItems: 'center',
          borderRadius: 10,
          position: 'absolute',
          bottom: 80,
          // add shadows for Android only
          elevation: 10,
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
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: '700',
              borderWidth: 1,
              flex: 1,
              marginRight: 10,
            }}
            placeholder="Search "
            onChangeText={searched => setSearch(searched)}
          />
          {console.log('item to be searched>>', search)}
          <TouchableOpacity onPress={() => filterList()} style={{}}>
            <Image
              style={{height: 35, width: 35,tintColor:"black"}}
              source={{
                uri:'https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{borderWidth: 0, marginBottom: 70}} contentInset={{}}>
        {searchedItem.map((item, index) => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                marginHorizontal: 20,
                marginVertical: 10,
                borderRadius: 10,
                elevation: 10,
              }}
              key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  paddingVertical: 30,
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}>
                <View style={{}}>
                  <Text>{item.orderId}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}>
                    <Text
                      style={{
                        fontWeight: '800',
                        fontSize: 20,
                        marginRight: 10,
                      }}>
                      {item.cost}
                    </Text>
                    <Text>{item.quantity}</Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                  }}>
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
                    {item.status}
                  </Text>
                  <Text>{item.date}</Text>
                  <Text style={{fontWeight: '700'}}>{item.store}</Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Image
                    style={{height: 30, width: 30, tintColor: 'grey'}}
                    source={{
                      uri: 'https://cdn2.iconfinder.com/data/icons/mobile-web-apps-1/32/arrow_right-512.png',
                    }}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
