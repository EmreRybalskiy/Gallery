import {RootStackParamsList} from './types';
import {SCREENS} from '../constants/enums';
import List from '../components/List/List';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Item from '../components/List/Item/Item';

const RootStacks = createNativeStackNavigator<RootStackParamsList>();

export const RootStack = () => {
  return (
    <RootStacks.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
      initialRouteName={SCREENS.List}>
      <RootStacks.Screen name={SCREENS.List} component={List} />
      <RootStacks.Screen name={SCREENS.Item} component={Item} />
    </RootStacks.Navigator>
  );
};
