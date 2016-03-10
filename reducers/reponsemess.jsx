import {
	Map
}
from 'immutable'

export default function change(state = {a:1,b:3}, action) {
	switch(action.type){
		case 'setResponse':
			return action.json;
		default	:
			break;
	}
	return state;
}

