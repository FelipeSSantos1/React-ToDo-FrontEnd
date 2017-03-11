import axios from 'axios'

/**
 * [backend URL]
 * @type {String}
 */
const URL = 'http://localhost:3003/api/todos'
/**
 * [Change input value]
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
export const changeDescription = event => {
	return [
		{type: 'DESCRIPTION_CHANGED', payload: event.target.value},
		searchLocal(event.target.value)
	]
}
/**
 * [description]
 * @return {[type]} [description]
 */
export const search = () => {
	return(dispatch, getState) => {
		const description = getState().todo.description
		const search = description ? `&description__regex=/${description}/` : ''
		const request = axios.get(`${URL}?sort=-createdAt${search}`)
			.then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
	}
}
/**
 * Search only in array without to request database
 * @return {[type]} [description]
 */
export const searchLocal = () => {
	return(dispatch, getState) => {
		const description = getState().todo.description.toLowerCase()
		const lista = getState().todo.list.filter(list => list.description.toLowerCase().indexOf(description) != -1)
		if (description == ''){
			axios.get(`${URL}?sort=-createdAt`)
			.then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
		}else{
			dispatch({type: 'TODO_SEARCHED_LOCAL', payload: lista})
		}
	}
}
/**
 * Add a new task
 * @param  {[type]} description [description]
 * @return {[type]}             [description]
 */
export const add = (description) => {
	return dispatch => {
		axios.post(URL, {description})
			.then(resp => dispatch(clear()))
			.then(resp => dispatch(search()))
	}
}
/**
 * Mark task as done
 * @param  {[type]} todo [description]
 * @return {[type]}      [description]
 */
export const markAsDoneOrNot = (todo) => {
	return dispatch => {
		axios.put(`${URL}/${todo._id}`, {...todo, done: !todo.done}).then(resp => dispatch(search()))
	}	
}
/**
 * delete a task
 * @param  {[type]} todo [description]
 * @return {[type]}      [description]
 */
export const deleteTask = (todo) => {
	return dispatch => {
		axios.delete(`${URL}/${todo._id}`).then(resp => dispatch(search()))
	}	
}
/**
 * clear Form
 * @return {[type]} [description]
 */
export const clear = () => {
	return [{type: 'TODO_CLEAR'}, search()]
}