import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import store from './store';

import Header from './components/Header';
import Counter from './components/Counter';

import './App.css';

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Counter />
		</Provider>
	);
}

export default App;
