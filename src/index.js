import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBRF5qdq6k31N6CMdmE4fyCpDq0tBwuga0';

import SearchBar from './components/search_bar';

const App = () => {
	return (
		<div>
		    <SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));