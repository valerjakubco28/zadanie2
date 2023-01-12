<template>
  <div class="order-button">
    <button value="firstname" @click="orderHandler">Zoradit podla mena</button>
    <button value="lastname" @click="orderHandler">Zoradit podla priezviska</button>
    <button value="age" @click="orderHandler">Zoradit podla veku</button>
  </div>



<div style="overflow-x: auto">
  <table class="table">

  <thead class="thead-dark">
  <tr>
    <th>Meno</th>
    <th>Priezvisko</th>
    <th>Vek</th>
    <th>Pribuzenstvo</th>
    <th></th>
  </tr>
  </thead>
  </table>
  <div v-for="user in users">
    <table class="table is-fullwidth">

    <tbody>
      <tr>
        <td>{{ user.firstname }}</td>
        <td>{{ user.lastname }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.kinship }}</td>
        <td><button @click="deleteUser(user.id)">Vymazat</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</div>






</template>

<script setup>


import { db } from "../firebase"
import { query, orderBy, collection, deleteDoc, onSnapshot, doc } from "firebase/firestore";
import {onMounted, onUpdated, ref} from "vue";

const orderType = ref('firstname')
const users = ref([])
const orderHandler = (e) => {
  orderType.value = e.target.value
  sortPersonsBy()

}

  const sortPersonsBy = () => {
    let sortedData = users.value.sort((a,b) => {
      if (orderType.value === "age"){
        return a[orderType.value] - b[orderType.value]
      }
      return a[orderType.value].localeCompare(b[orderType.value]);
    })

  }

  const usersCollectionRef = collection(db, 'family')

  const usersCollectionOrderBy = query(usersCollectionRef, orderBy(orderType.value))

  const deleteUser = id => {
    deleteDoc(doc(usersCollectionRef, id))
  }



onMounted(async () => {
  onSnapshot(usersCollectionOrderBy, (querySnapshot) => {
  let fbUsers = [];
  querySnapshot.forEach((doc) => {
    const user = {
      id: doc.id,
      firstname: doc.data().firstname,
      lastname: doc.data().lastname,
      age: doc.data().age,
      kinship: doc.data().kinship
    }
    fbUsers.push(user)
    console.log(fbUsers)
  })
  users.value = fbUsers
})
//  const querySnapshot = await getDocs(collection(db, "family"));
//   let fbUsers = []
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     const user = {
//       id: doc.id,
//       firstname: doc.data().firstname,
//       lastname: doc.data().lastname,
//       age: doc.data().age,
//       kinship: doc.data().kinship
//     }
//     fbUsers.push(user)
//   })
//   users.value = fbUsers
// })

})

</script>

<style scoped>

.order-button {
  display: flex;
  font-size: 2em;
  gap: 2rem;
  margin: 2rem 0;
  justify-content: center;

}

table {
  width: 100%;
  table-layout: fixed;
}
th, td {
  padding: 5px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

</style>