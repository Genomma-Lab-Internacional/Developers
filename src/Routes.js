import React from "react"
import { Switch, Route } from "react-router-dom"

import Index from "./components/Index"
import Login from "./components/Login"


export default () => {
	return (
		<Switch>
			<Route exact path="/" component={Index}/>
			<Route exact path="/login" component={Login}/>	
		</Switch>
  )
}