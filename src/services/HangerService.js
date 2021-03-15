import Api from '@/services/Api'


export default {
    fetchHangers() {
	return Api().get('hangers')
    },

    addHanger (params) {
        return Api().post('hangers', params)
    },

    updateHanger (params) {
        return Api().put('hangers/' + params.id, params)
    },

    getHanger (params) {
        return Api().get('hanger/' + params.id)
    },

    deleteHanger (id) {
        return Api().delete('hangers/' + id)
    },

    findHanger (params) {
        return Api().get('findhanger/' + params.bolts + '&' + params.qr + '&' + params.thruAxle + '&' + params.outside + '&' + params.inside)
    }

}
