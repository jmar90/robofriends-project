// Create Scroll component that allows us to scroll through robots while keeping the search bar at top of page. 
// Essentially, we are making it so that the only part of the page that scrolls is the section with the robot pics (ie, CardList component)
// All other parts of page do not scroll.

import React from 'react';

const Scroll = (props) =>  {
	return (
		<div style = {{ overflowY: 'scroll', borderTop: '2px solid black', height: '500px' }}>  {/* In jsx, use double curly brackets to add CSS styles. */}
			{props.children}
		</div>
	);
};

export default Scroll;