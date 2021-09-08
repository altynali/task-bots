import { combineReducers } from 'redux';
import app from './app';
import login from './login';
import task from './task';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import bot from './bot';
import acc from './acc';

const persistConfig = {
  key: 'main',
  storage,
};

const root = combineReducers({
  app,
  login,
  task,
  bot,
  acc,
});
const persistedReducer = persistReducer(persistConfig, root);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default root;
