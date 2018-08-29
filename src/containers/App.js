import React, { Component} from 'react';
import CardList from '../components/CardList';
// import { robots } from './Robots';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super();

		// state är något som kan förändras.
		// state beskriver vår apps nuvarande utförande.
		// state hör hemma i parent-node. Den node som kan skicka vidare infon
		// om appens utförande till alla berörda children-nodes.

		// till skillnad från searchbox komponenten och Cardlist komponenten
		// så har App-komponeneten ett state vilket gör att den kallas för
		// en smart-komponent. och smart-komponenter tenderar att ha denna
		// class syntax.
		this.state = {
			robots: [],
			searchField: ''
		}
		console.log('constructor');
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState( {robots: users} ));
		
		console.log('componentDidMount');
		// när componentDidMount() har körts och uppdaterat state
		// körs render() per automatik igen. det är en del av Reacts upplägg
		// kan läsas om i reacts lifecycle hooks
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value});
	}

	render() {
		const {robots, searchField} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return !robots.length ?
			<h1 className='tc'>Loading</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<Searchbox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			)
	}
}
export default App;