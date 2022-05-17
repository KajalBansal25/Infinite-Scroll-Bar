import React, {useEffect, useState} from 'react';
import {
  FlatList,
  TextInput,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

const ChatPage = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const addMessage = () => {
    console.log('ppp', input);
    setItems([...items, input]);
    setInput('');
  };

  return (
    <ScrollView style={{}}>
      <View style={{borderWidth: 1, marginHorizontal: 10, marginTop: 10}}>
        {items.map((item, index) => {
          return (
            <View
              style={{
                backgroundColor: index % 2 == 0 ? '#aaa' : '#ddd',

                borderRadius: 20,
                marginVertical: 2,
                paddingVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 25,
                  marginHorizontal: 20,
                  textAlign: index % 2 == 0 ? 'left' : 'right',
                }}>
                {item}
              </Text>
            </View>
          );
        })}
        <TextInput
          defaultValue={input}
          onChangeText={userdata => setInput(userdata)}
          style={styles.textStyle}
          multiline={true}
        />
        <TouchableOpacity onPress={() => addMessage()}>
          <Image
            source={{
              uri: 'https://www.kindpng.com/picc/m/307-3073858_submit-now-clipart-icon-hd-png-download.png',
            }}
            style={{height: 30, width: 30, marginLeft: 330, marginTop: -300}}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    borderWidth: 1,
    marginHorizontal: 50,
    // backgroundColor: '#rgba(14,14,14,0.01)',
    backgroundColor: 'white',
    marginVertical: 250,
    borderColor: 'blue',
  },
});
