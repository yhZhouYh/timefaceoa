import Vue from 'vue'
const API_ROOT = '/tfoa/'

function fetch(child) {
  return new Promise((resolve, reject) => {
    Vue.http.post(API_ROOT + child).then((response) => {
      resolve(response.body)
    }, reject)
  })
}

export function login() {
  return fetch('')
}