

import React from 'react'
import {createStore} from 'redux'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import Root from '../containers/JsonFormat'
import indexStroe from '../stores/index'

const store = indexStroe()

render(
	<Provider store={store}>
   		<Root></Root>
  	</Provider>,
	document.getElementById('body')
)



