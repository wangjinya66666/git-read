import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        books: [],
    },
    mutations: {
        addBooks(state, anbook) {
            let oldState = null;
            for (let item of state.books) { //判断重复值
                if (item.id === anbook.id) {
                    oldState = item;
                }
            }
            if (oldState) {
                // console.log(1111)
            } else {
                state.books.unshift(anbook);
            }
        },
        toDleter(state, did) {
            const item = state.books.findIndex(value => {
                return value.id == did
            })
            this.state.state = this.state.books.splice(item, 1);
            // state.books.filter((value, index) => {
            //     if (value.id == did) {
            //         this.state.books = this.state.books.splice(index, 1);
            //     }
            // }) //无法删除，采用上面方法
        }
    },
})
export default store