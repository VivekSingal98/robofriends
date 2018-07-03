import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchRequest from '../components/SearchRequest';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	onSearchChanged = (event) => {
		this.setState({ searchfield: event.target.value})		
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=> {this.setState({robots:users})});
 
	}
	render() {
			const {robots, searchfield}=this.state;
			const filteredRobots= robots.filter(robots => {
				return robots.name.toLowerCase().includes(searchfield.toLowerCase());
			})

		if(robots.length==0) {
			return <h1> Loading</h1>;
		}	
		return (
			<div className='tc'>
				<h1 className='f1'>RobotFriends</h1>
				<SearchRequest searchChange={this.onSearchChanged}/>
				<Scroll>
				<CardList robots={filteredRobots} />
				</Scroll>
			</div>
			);
		}
}

export default App;