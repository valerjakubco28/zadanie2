<template>
  <form @submit.prevent="addPerson">
    <label>Meno</label>
    <input type="text" class="firstname">
    <label>Priezvisko</label>
    <input type="text" class="lastname">
    <label>Vek</label>
    <input type="text" class="age">
    <label>Pribuzenstvo</label>
    <input type="text" class="kinship">
    <button>Post Data</button>
  </form>
</template>

<script setup>
import {onMounted, ref} from "vue";
  import { collection, addDoc } from "firebase/firestore";
  import { db } from '../firebase';

const addPerson = () => {
  addDoc(collection(db, "family"), {
    firstname: document.querySelector(".firstname").value,
    lastname: document.querySelector(".lastname").value,
    age: document.querySelector(".age").value,
    kinship: document.querySelector(".kinship").value
  })
  alert("Uspesne pridane")
  document.querySelector(".firstname").value = ''
  document.querySelector(".lastname").value = ''
  document.querySelector(".age").value = ''
  document.querySelector(".kinship").value = ''
}
</script>

<style scoped>
  form{
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
</style>