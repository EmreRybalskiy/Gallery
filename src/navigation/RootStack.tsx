import {RootStackParamsList} from './types';
import {SCREENS} from '../constants/enums';
import List from '../components/List/List';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Item from '../components/List/Item/Item';
import HeaderButton from '../common/headerButton/HeaderButton';

const RootStacks = createNativeStackNavigator<RootStackParamsList>();

export const RootStack = () => {
  return (
    <RootStacks.Navigator
      screenOptions={({route}) => ({
        headerLeft: () =>
          route.name === SCREENS.Item ? <HeaderButton /> : null,
        headerTitleAlign: 'center',
      })}
      initialRouteName={SCREENS.List}>
      <RootStacks.Screen
        name={SCREENS.List}
        component={List}
        options={{title: 'Gallery'}}
      />
      <RootStacks.Screen
        name={SCREENS.Item}
        component={Item}
        options={{title: 'Photography'}}
      />
    </RootStacks.Navigator>
  );
};
