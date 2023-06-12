import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/RootStack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <NativeBaseProvider>
            <RootStack />
          </NativeBaseProvider>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
