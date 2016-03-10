import React from 'react'

import {render} from 'react-dom'
import Jsonformat from '../components/Console'


var a={
	a:1,
	b:2
}
render(<Jsonformat json={a}></Jsonformat>,
	document.getElementById('body')
)



