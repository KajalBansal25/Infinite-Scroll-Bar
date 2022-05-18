import React, {useState} from 'react';
import {
  TextInput,
  ScrollView,
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
    console.log('>>>', input);
    setItems([...items, input]);
    setInput('');
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{}}>
        <View
          style={{
            // borderWidth: 2,
            marginHorizontal: 10,
            marginTop: 10,
            flex: 1,
          }}>
          {items.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  marginVertical: 2,
                  paddingVertical: 10,
                  alignItems: index % 2 == 0 ? 'flex-start' : 'flex-end',
                  // borderWidth:5,
                }}>
                <Text
                  style={{
                    maxWidth: '70%',
                    borderRadius: 20,
                    padding: 10,
                    fontSize: 25,
                    textAlign: index % 2 == 0 ? 'left' : 'right',
                    backgroundColor: '#ddd',
                  }}>
                  {item}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={{}}>
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
            style={{
              height: 30,
              width: 30,
              marginLeft: 330,
              marginTop: -50,
              alignItems: 'flex-end',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    borderWidth: 1,
    // marginHorizontal: 50,
    // backgroundColor: '#rgba(14,14,14,0.01)',
    backgroundColor: 'white',
    // marginVertical: 20,
    borderColor: 'blue',
    borderTopWidth: 1,
    // alignItems:"flex-end",
    paddingRight: 70,
  },
});
