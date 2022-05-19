import React from 'react';
import ChatPage from './src/components/ChatPage';
import InfiniteScrolling from './src/components/InfiniteScrolling';
import Order from './src/components/Order';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#27d9bb'},
        headerStatusBarHeight: 20,
        headerTintColor: 'white',
      }}
      initialRouteName="order"
      style={styles.shadow}>
      <Tab.Screen
        name="Orders"
        component={Order}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            iconName = 'home';
            size = focused ? 25 : 20;
            color = focused ? '#27d9bb' : '#555';
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Order}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            iconName = 'shopping-cart';
            size = focused ? 25 : 20;
            color = focused ? '#27d9bb' : '#555';
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Store"
        component={Order}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            iconName = 'store';
            size = focused ? 25 : 20;
            color = focused ? '#27d9bb' : '#555';
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="HelpDesk"
        component={Order}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            iconName = 'hire-a-helper';
            size = focused ? 25 : 20;
            color = focused ? '#27d9bb' : '#555';
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="instructions"
        component={Order}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            iconName = 'book-open';
            size = focused ? 25 : 20;
            color = focused ? '#27d9bb' : '#555';
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="bottomTab"
          component={MyTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // <Order />
  // <ChatPage />
  // <InfiniteScrolling />;
};

export default App;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#ddd',
    shadowOffset: {
      width: 8,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
