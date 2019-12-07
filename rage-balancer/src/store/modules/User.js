import Measure from '../../models/Measure.js';

const User = {
    
    state: {
        storage: null,
        measures: []
    },

    getters: {
        
        /**
         * @param {*} state 
         * @return {number}
         */
        getRagePercent: function(state) {
            let lastMeasure = new Measure();
            if (state.measures.length > 0) {
                lastMeasure = state.measures[state.measures.length - 1];
            }
            return Math.round(lastMeasure.value / lastMeasure.max * 100);
        },

        /**
         * @return {{
         *  time: String
         *  value: Number
         *  max: Number
         * }}
         */
        getLastMeasure: (state) => {
            if (state.measures.length > 0) {
                return state.measures[state.measures.length - 1];
            }
            return new Measure();
        }
    },
    
    mutations: {
        NEW_MEASURE: (state) => {
            console.debug('NEW_MEASURE');
            let measure = new Measure();
            measure.time = new Date();
            if (state.measures.length > 0) {
                const lastMeasure = state.measures[state.measures.length - 1];
                measure.max = lastMeasure.max;
            }
            state.measures.push(measure);
        },
        INCREASE_RAGE: (state) => {
            const lastMeasure = state.measures[state.measures.length - 1];
            console.debug('INCREASE_RAGE', lastMeasure);
            lastMeasure.value++;
            if (lastMeasure.value > lastMeasure.max) {
                lastMeasure.max = lastMeasure.value;
            }
            state.measures[state.measures.length - 1] = lastMeasure;
        },
        RESET: (state) => {
            state.measures = [];
        }
    },
    actions: {
        ResetStore: (state) => {
            state.commit('RESET');
        },
        NewMeasure: (state) => {
            state.commit('NEW_MEASURE');
        },
        IncreaseRage: (state) => {
            if (state.getters.getLastMeasure.time === null) {
                state.commit('NEW_MEASURE');
            }
            state.commit('INCREASE_RAGE');
        }
    }
}
  
export default User;