const DefaultMeasure = () => {
    return {
        time: null,
        value: 0,
        max: 10
    }
};

const User = {
    state: {
        storage: null,
        measures: []
    },
    getters: {
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
            console.debug('getLastMeasure.default');
            return DefaultMeasure();
        }
    },
    mutations: {
        NEW_MEASURE: (state) => {
            console.debug('NEW_MEASURE');
            let measure = DefaultMeasure();
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
            console.debug('RESET');
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