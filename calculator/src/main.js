import Vue from 'vue'
import App from './App'

new Vue({
    //  el: '#app',  //mesma coisa que o mount
    render: h => h(App)
    // render(createElement) {
    //     return createElement(App)
    // }
}).$mount("#app")