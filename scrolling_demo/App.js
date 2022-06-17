import React from 'react';
import ChatPage from './src/components/ChatPage';
import InfiniteScrolling from './src/components/InfiniteScrolling';
import Order from './src/components/Order';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomePage from './src/components/HomePage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyDrawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#0de78c'},
        headerStatusBarHeight: 20,
        headerTintColor: 'white',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        // tabBarStyle:{display:"none"}
      }}
      initialRouteName="order"
      style={styles.shadow}>
      <Tab.Screen
        name="Homepage"
        component={HomePage}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            iconName = 'home';
            size = focused ? 25 : 20;
            color = focused ? '#0de78c' : '#555';
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          headerShown: false,
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
            color = focused ? '#0de78c' : '#555';
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
            color = focused ? '#0de78c' : '#555';
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="HelpDesk"
        component={InfiniteScrolling}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            iconName = 'hire-a-helper';
            size = focused ? 25 : 20;
            color = focused ? '#0de78c' : '#555';
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="instructions"
        component={ChatPage}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            iconName = 'book-open';
            size = focused ? 25 : 20;
            color = focused ? '#0de78c' : '#555';
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
        {/* <Stack.Screen
          name="bottomTab"
          component={MyTabs}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="drawer"
          component={MyDrawer}
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
