import React from 'react'

import {render} from 'react-dom'
import Jsonformat from '../components/Jsonformat'


var a={
	a:1,
	b:2
}
render(<Jsonformat json={a}></Jsonformat>,
	document.getElementById('body')
)



