import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VModal from 'vue-js-modal';
import setAuthToken from './utils/setAuthToken';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';

setAuthToken(localStorage.token);

// Add a rule for VeeValidate
extend('required', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true,
  message: 'The {_field_} field must not be empty'
});

// Register validation globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.use(VModal);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
