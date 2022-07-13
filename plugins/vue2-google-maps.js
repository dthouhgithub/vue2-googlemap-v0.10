import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

export default (context) => {
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDX4b19Ejhlzoq6abiCZM8qoretxKuawKM',
      libraries: ['places', 'geometry'],
      region: 'jp',
      language: 'jp',
    },
  })
}