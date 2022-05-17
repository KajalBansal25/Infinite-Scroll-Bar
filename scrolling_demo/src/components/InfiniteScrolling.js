import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import axios from 'axios';

const InfiniteScrolling = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios({
      method: 'get',
      url: 'https://gorest.co.in/public/v2/todos',
    }).then(response => {
      setUsers([...users, response.data]);
      console.log('>>>>>>>>>>>', users);
    });
  };
  const renderItem = ({item, index}) => {
    if (index > 19) {
      index = index % 10;
    }
    return (
      <View>
        <View style={styles.containerContent}>
          <Text>User_id: {`${item[index].user_id}`}</Text>
          <Text>title: {item[index].title}</Text>
          <Text>Due_on: {item[index].due_on}</Text>
          <Text>Status: {item[index].status}</Text>
        </View>
      </View>
    );
  };

  const renderLoader = () => {
    return (
      <View style={StyleSheet.loaderStyle}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  };

  const loadMoreItem = () => {
    console.log('load more items');
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <FlatList
      style={{borderWidth: 1, backgroundColor: 'yellow'}}
      data={users}
      renderItem={renderItem}
      keyExtractor={(item, index) => index}
      ListFooterComponent={renderLoader}
      onEndReached={loadMoreItem}
      onEndReachedThreshold={0.5}
      sidebar="visible"
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{marginHorizontal: 5, backgroundColor: 'white'}}
    />
  );
};

export default InfiniteScrolling;

const styles = StyleSheet.create({
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
  containerContent: {
    borderBottomColor: '#aaa',
    borderTopWidth: 0,
    borderWidth: 1,
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
