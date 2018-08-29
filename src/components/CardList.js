import React from 'react';
import Card from './Card';

// I index.js har CardList-taggen en property robots={robots}.
// därifrån får den tillgång till hela robots-arrayen och således 
// behöver inte CardList.js importera robots från ./Robots
const CardList = ({ robots }) => {
	return (
		<div>	
			{
				robots.map(user => {
					return (
						<Card
							key={user.id}
							id={user.id}
							name={user.name}
							email={user.email}
						/>
					)
				})
			}
		</div>
	)
}

export default CardList;