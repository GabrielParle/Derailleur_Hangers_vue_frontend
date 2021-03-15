import axios from 'axios'

export default() => {
    return axios.create({
	baseURL: 'https://serene-sands-51186.herokuapp.com/'
    })
}