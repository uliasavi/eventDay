import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store= new Vuex.Store({
	state:{
		speakers:[]
	},
	mutations:{
		SET_SPEAKERS_TO_STATE:(state, speakers)=>{
			state.speakers = speakers;
		}
	},
	actions:{
		GET_SPEAKERS_FROM_API({commit}){
			return axios('http://localhost:3000/speakers',{
				method: "GET"
			})
			.then((speakers)=> {
				commit('SET_SPEAKERS_TO_STATE', speakers.data);
				return speakers;
			})
			.catch((error)=>{
				console.log(error)
				return error;
			})
		}
	},
	getters:{
		SPEAKERS(state){
			return state.speakers;
		}
	}
});
export default store;
