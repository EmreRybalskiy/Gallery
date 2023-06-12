import {Dispatch} from 'redux';
import {GalleryActionType, GalleryActionTypes} from '../types/gallery.types';
import AxiosService from '../../common/axios/axios';

export const getGallery = () => {
  return async (dispatch: Dispatch<GalleryActionType>) => {
    try {
      dispatch({
        type: GalleryActionTypes.GALLERY,
      });
      const response = await AxiosService.get(
        '/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
      );
      dispatch({
        type: GalleryActionTypes.GALLERY_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: GalleryActionTypes.GALLERY_ERROR,
        payload: 'Something went Wrong!',
      });
    }
  };
};
