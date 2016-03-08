import fetch from 'isomorphic-fetch'

export const setJson = (json) =>({
					type: 'jsonformat:setJson',
					json
})