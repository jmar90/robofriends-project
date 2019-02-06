import React from 'react';

// html onchange attribute fires the moment when the value of the element is changed
// Anytime the input value for the search box changes, the onSearchChange function (which was passed down as 'searchChange' prop) will run.
	// The onSearchChange function is defined in App.js (the parent component). This is how SearchBox communicates with its parent, App.

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots' 
				onChange={searchChange} 
			/>
		</div>
	);
}

export default SearchBox;