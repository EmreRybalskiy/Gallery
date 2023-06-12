import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {View} from 'native-base';

const Loader: React.FC = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Loader;
