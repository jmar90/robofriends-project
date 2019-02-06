/// CREATE CARD LIST COMPONENT. Card List will be a parent of Card. It will contain a list of cards - this will clean up index.js file
import React from 'react';
import Card from './Card';

// Since Card is a component, if we want multiple cards on the page, we simply write <Card /> multiple times!
// Also, in below code, remember that robots is an array, so when we write robots[0].id, we are referring to the id of the 
// 1st item in the array. The brackets {} indicate that it is a JavaScript expression.

// Use map to loop thru array (could have also done a for/forEach loop, but map is quicker.
// In map, 2nd parameter (i) is equal to index. User = each individual object in robots array.
// When looping, React requires that each item in array being looped thru has a unique key that doesn't change. 
// So, we'll assign id as key. Index not ideal choice for key, b/c index can change if array items moved/deleted.
const CardList = ({ robots }) => {	// Remember, the prop 'robots' is equal to the filteredRobots array (App passed down filteredrobots as 'robots' to CardList)
	return (
		<div>
			{
				robots.map((user, i) => {
					return ( 
						<Card 
							key={robots[i].id} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email} 
						/>
					);
				})  
			}  
		</div>
	);
}

export default CardList;