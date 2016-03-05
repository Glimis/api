import React from 'react'
import {
	createStore
}
from 'redux'
import {
	render
}
from 'react-dom'
import {
	Provider
}
from 'react-redux'

// import Root from '../../jsonformat'
import indexStroe from '../stores/index'

import Root from '../containers/index'

const store = indexStroe()
function click(e){
	
	this.dispatch({
		type:"Change"
	})

}
render(
	<Provider store={store}>
		<Root></Root>
  	</Provider>,
	document.getElementById('body')
)