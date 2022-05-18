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
} from 'react-native';

const ChatPage = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [currTime, setCurrTime] = useState('');
  const [username, setUsername] = useState('kajal');

  const addMessage = () => {
    console.log('>>>', input);
    setItems([...items, input]);
    setInput('');
    let time = moment().utcOffset('+05:30').format('hh:mm:ss a');
    setCurrTime(time);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{}}>
        <View
          style={{
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
                }}>
                <View
                  style={{
                    maxWidth: '70%',
                    borderRadius: 20,
                    padding: 10,
                    textAlign: index % 2 == 0 ? 'left' : 'right',
                    backgroundColor: '#ddd',
                  }}>
                  <Text style={{fontSize: 25}}> {item}</Text>
                  <View
                    style={{
                      flexDirection: 'row',

                      justifyContent: 'flex-end',
                    }}>
                    <Text
                      style={{
                        marginRight: 10,
                        fontSize: 10,
                        justifyContent: 'flex-end',
                      }}>
                      {username}
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                      }}>
                      {currTime}
                    </Text>
                  </View>
                </View>
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
    backgroundColor: 'white',
    borderColor: 'blue',
    borderTopWidth: 1,
    paddingRight: 70,
  },
});
