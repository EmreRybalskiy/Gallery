import {applyMiddleware, combineReducers} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import {galleryReducer} from './reducers/galleryReducer';

const rootReducer = combineReducers({
  gallery: galleryReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
