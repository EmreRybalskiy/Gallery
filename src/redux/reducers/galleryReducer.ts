import {
  GalleryActionType,
  GalleryActionTypes,
  GalleryState,
} from '../types/gallery.types';

const initialState = {
  gallery: [],
  isLoading: false,
  error: null,
};

export const galleryReducer = (
  state: GalleryState = initialState,
  action: GalleryActionType,
): GalleryState => {
  switch (action.type) {
    case GalleryActionTypes.GALLERY:
      return {isLoading: true, error: null, gallery: []};
    case GalleryActionTypes.GALLERY_SUCCESS:
      return {isLoading: false, error: null, gallery: action.payload};
    case GalleryActionTypes.GALLERY_ERROR:
      return {
        isLoading: false,
        gallery: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
