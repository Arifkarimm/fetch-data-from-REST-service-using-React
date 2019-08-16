import React from 'react';
import { Switch, Route } from "react-router-dom";
import App from "./App.js";
import SinglePost from "./SinglePost";

const Main = () => (
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/posts/:id" component={SinglePost} />
		</Switch>	
	)

export default Main;