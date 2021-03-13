import React from "react";
import MainApp from "./app/index";

// Use Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Imports: Redux Persist Persister
import { store, persistor } from './redux/store'; // Import redux store

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
}

export default App;
