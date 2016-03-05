import fetch from 'isomorphic-fetch'

export const Access = (url,params) => {
	return function(dispatch) {
		return fetch(url,{
			 method: "POST",
			 body: params
		})
			.then(response =>{
				dispatch({
					type: 'ConsoleShow',
					response
				})
				return response.json();
			})
			.then((json)=>{
				dispatch({
					type: 'ShowJson',
					json
				})
			})
	}
}