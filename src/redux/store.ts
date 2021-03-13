import { createStore, applyMiddleware } from "redux"; // Redux
import { persistStore, persistReducer } from "redux-persist"; // Redux Persist
import { createLogger } from "redux-logger"; // Redux Logger
import storage from "redux-persist/lib/storage"; // Redux Persist Storage
import rootReducer from "./reducers"; // Import Reducer

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: "primary",
  // Storage Method
  storage: storage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["auth"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};

// Middleware
const persistedReducer = persistReducer(persistConfig, rootReducer);
const development: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";
const middleware: any = [development && createLogger()].filter(Boolean);
const createStoreWithMiddleware = applyMiddleware(...middleware);

// Redux: Store
const store = createStore(
  persistedReducer,
  createStoreWithMiddleware
);

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export { store, persistor };
