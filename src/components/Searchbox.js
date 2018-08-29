import React from 'react';

// searchChange är en property till Searchbox i App.js
// searchField är en del av state som håller koll på vad som
// skrivs in i sökrutan
const Searchbox = ({searchField, searchChange }) => {
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
 export default Searchbox;