<script setup>
import axios from 'axios';
import { ref } from 'vue';

let greeting = ref('');
let user = ref('');

function callHello() {
  axios.get('/api/hello')
    .then(function (response) {
      greeting.value = response.data;
    })
    .catch(function (error) {
      greeting.value = "/api/hello loading failed";
    });
}

function callUser()
{
  axios.get('/api/user')
    .then(function (response) {
      user.value = response.data;
    })
    .catch(function (error) {
      user.value = "/api/user loading failed";
    });
}

callHello();
callUser();

</script>


<template>

  <h3>/api/hello</h3>

  <div>{{ greeting }}</div>

  <h3>/api/user</h3>

  <div>{{ user.username }} / {{ user.email }}</div>

</template>
