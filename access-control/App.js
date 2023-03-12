import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './Pages/HomePage';
import CodeInput from './Pages/CodeInput';
import QRScan from './Pages/QRScan';
import Result from './Pages/Result';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk"
import reducers from './reducers';
import ErrorPage from './Pages/ErrorPage';




export default function App() {
  const Stack = createNativeStackNavigator();

  const store = createStore(reducers,compose(applyMiddleware(thunk)))

  return (
    <Provider store={store}>
        <NavigationContainer initialRouteName="HOME" >
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="HOME" component={HomePage} />
                <Stack.Screen name="CODE_INPUT" component={CodeInput} />
                <Stack.Screen name="QRSCAN" component={QRScan} />
                <Stack.Screen name="RESULT" component={Result} />
                <Stack.Screen name="ERROR_PAGE" component={ErrorPage} />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
