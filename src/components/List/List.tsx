import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../redux/hooks';
import {ListStackNavigationProps} from '../../navigation/types';
import {getGallery} from '../../redux/action-creators/gallery';
import {IGalleryItem} from '../../redux/types/types';
import Loader from '../../common/Loader/Loader';
import {SCREENS} from '../../constants/enums';
import {Box, View, FlatList, Text} from 'native-base';
import {ListRenderItem, Pressable, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from '../../constants/colors';

const List: React.FC<ListStackNavigationProps> = ({
  navigation,
}): JSX.Element => {
  const {gallery, isLoading, error} = useTypedSelector(state => state.gallery);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(getGallery());
  }, []);

  const onPress = (object: IGalleryItem) => {
    navigation.navigate(SCREENS.Item, {
      image: object?.urls.full,
    });
  };

  const renderItem: ListRenderItem<IGalleryItem> = ({item}) => {
    return (
      <View style={styles.container}>
        <Box style={styles.content}>
          <Pressable onPress={() => onPress(item)} style={styles.imageWrapper}>
            <FastImage
              style={{width: 100, height: 100}}
              source={{uri: item?.urls?.small}}
            />
          </Pressable>
          <Box style={styles.authorDescriptionWrapper}>
            <Text style={styles.authorText}>{item?.user?.name}</Text>
            <Text style={styles.descriptionText}>
              {item?.description || item?.alt_description}
            </Text>
          </Box>
        </Box>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading && <Loader />}
      {!isLoading && (
        <FlatList
          data={gallery || null}
          keyExtractor={({id}) => id}
          renderItem={renderItem}
          style={{paddingHorizontal: 10}}
        />
      )}
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: 5,
    borderColor: colors.borderColor,
    borderWidth: 1,
  },
  imageWrapper: {
    marginRight: 15,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorDescriptionWrapper: {
    flexShrink: 1,
  },
  authorText: {
    fontSize: 16,
    textShadowRadius: 5,
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 12,
  },
  errorMessage: {
    fontSize: 18,
    fontWeight: '800',
    color: 'red',
    alignSelf: 'center',
    marginTop: 50,
  },
});

export default List;
