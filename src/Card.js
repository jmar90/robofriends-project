// BUILD CARD COMPONENT //
import React from 'react';

const Card = ({ name, email, id }) => {  // Destructure props to clean up code. Now, instead of writing 'props.name' below, we can just write name.
	return (
		<div id='container' className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
			{ /* The above classes are tachyon classes, which we use to style the cards (eg, grow = animation, light-green = background) */ }
				<img alt='robots' src={`https://robohash.org/${id}?200x200`} />  
					{ /* Remember, this is AJX, so syntax is slightly different from HTML, which is why we have a / before closing bracket of img */ }
					{ /* One of the properties (props) we passed thru to Cards in index.js was id. We can use this id to pull a random img for each robot from robohas.org via template strings. B/C we are using template string (a JS expression), we must wrap in {} */}
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
		</div>
	);
}

export default Card;