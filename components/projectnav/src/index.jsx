import React from 'react'

import {render} from 'react-dom'
import Projects from '../components/Projects'


var a=[{
	name:'教师',
	children:[{
		name:'所有学生'
	}]
}]
render(<Projects data={a}></Projects>,
	document.getElementById('body')
)



