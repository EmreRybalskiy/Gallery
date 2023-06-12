import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamsList = {
  List: undefined;
  Item: {image: string};
};

export type ListStackNavigationProps = NativeStackScreenProps<
  RootStackParamsList,
  'List'
>;
export type ItemStackNavigationProps = NativeStackScreenProps<
  RootStackParamsList,
  'Item'
>;
