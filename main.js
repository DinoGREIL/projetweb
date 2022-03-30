//mise en place du state de vuex pour stocker mon token et mon utilisateur
const getDefaultState = () => {
    return {
      token: '',
      utilisateur:{premium:0}
    }
  }
  //creation du store pour stocker les variables dedans
  const store = new Vuex.Store({
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
      isLoggedIn: state => {
        return state.token
      },
      getUser: state => {
        return state.utilisateur
      },
      
    },
    mutations: {
      SET_TOKEN: (state, token) => {
        state.token = token
      },
      SET_USER: (state, user) => {
        state.utilisateur = user
      },
      
      
      RESET: state => {
        Object.assign(state, getDefaultState())
      },
      
    },
    actions: {
      login: ({ commit, dispatch }, { token, utilisateur }) => {
        commit('SET_TOKEN', token)
        commit('SET_USER', utilisateur)
      },
      logout: ({ commit }) => {
        commit('RESET', '')
      },
      
    }
  })

console.log(store)

const app = Vue.createApp({
    
    data(){
        return{
            
        }
    },
    methods:{
        

    }
})  
app.use(store);