import {
	Map
}
from 'immutable'

export default function change(state = {a:1,b:3}, action) {
	debugger
	switch(action.type){
		case 'setJson':
			debugger
			return action.json;
		default	:
			break;
	}
	return state;
}