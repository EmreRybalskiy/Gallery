import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ItemStackNavigationProps} from '../../../navigation/types';
import {Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

const Item: React.FC<ItemStackNavigationProps> = ({route}): JSX.Element => {
  const {image} = route.params;
  const {width, height} = Dimensions.get('screen');

  return (
    <SafeAreaView style={{flex: 1}}>
      <FastImage style={{width: width, height: height}} source={{uri: image}} />
    </SafeAreaView>
  );
};

export default Item;
