import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'Redux/store';
import {BrowserRouter} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter basename='/goit-react-hw-08-phonebook'>
				<App />
				</BrowserRouter>
				</PersistGate>
		</Provider>
	</>
)