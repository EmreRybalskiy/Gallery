import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {ArrowBackIcon} from 'native-base';

const HeaderButton: React.FC = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.goBack();
      }}>
      <ArrowBackIcon />
    </Pressable>
  );
};

export default HeaderButton;
