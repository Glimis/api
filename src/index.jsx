import React from 'react'
import {createStore}from 'redux'
import {	render}from 'react-dom'
import {	Provider}from 'react-redux'

import indexStroe from '../stores/index'

import Root from '../containers/index'

const store = indexStroe()

render(
	<Provider store={store}>
		<Root></Root>
  	</Provider>,
	document.getElementById('body')
)