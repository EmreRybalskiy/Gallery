import {IGalleryItem} from './types';

export interface GalleryState {
  gallery: IGalleryItem[];
  isLoading: boolean;
  error: null | string;
}

export enum GalleryActionTypes {
  GET_GALLERY = 'GET_GALLERY',
  GALLERY_SUCCESS = 'GALLERY_SUCCESS',
  GALLERY_ERROR = 'GALLERY_ERROR',
}

interface GalleryAction {
  type: GalleryActionTypes.GET_GALLERY;
}
interface GallerySuccessAction {
  type: GalleryActionTypes.GALLERY_SUCCESS;
  payload: IGalleryItem[];
}
interface GalleryErrorAction {
  type: GalleryActionTypes.GALLERY_ERROR;
  payload: string;
}

export type GalleryActionType =
  | GalleryAction
  | GalleryErrorAction
  | GallerySuccessAction;
