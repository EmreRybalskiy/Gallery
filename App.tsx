import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/RootStack';
import {StyleSheet} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NativeBaseProvider>
          <RootStack />
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
