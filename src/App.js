import React,{Component} from 'react';
import CardList from './CardList';
import { robots } from './robots.js';
import SearchRequest from './SearchRequest';
import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChanged = (event) => {
		this.setState({ searchfield: event.target.value})		
	}

	render() {
			const filteredRobots= this.state.robots.filter(robots => {
				return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})

		return (
			<div className='tc'>
				<h1 className='f1'>RobotFriends</h1>
				<SearchRequest searchChange={this.onSearchChanged}/>
				<CardList robots={filteredRobots} />
			</div>
			);
		}
}

export default App;