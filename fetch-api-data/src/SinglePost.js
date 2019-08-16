import React, { Component } from 'react';



class SinglePost extends Component {
	constructor(props){
		super(props);

		this.state = {
			show: null
		}
	}

	componentDidMount(){
		const { id } = this.props.match.params;
		 fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
		 
	    .then(response => response.json())
	    .then(json => this.setState({ show: json }));

	}

	render(){

		const { show } = this.state;
console.log(show);
		return(
			<div>
				

				{ show !== null && (
					<div>
						<p>{show.name}</p>
						<p>{show.email}</p>
						<p>{show.body}</p>
					
						

					</div>
				)}
			</div>
		)
	}
}

export default SingleSeries;