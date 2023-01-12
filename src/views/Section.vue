<template>
  <div class="grid-container">
    <div class="sekcia">
      <div class="sekcia-img-container">
        <img src="../assets/kvitok2.jpg" alt="obrazok reklamy na kvitok" />
      </div>
      <div class="sekcia-img-container">
        <img src="../assets/junior.jpg" alt="dzatko junior" />
      </div>
      <div class="sekcia-img-container">
        <img src="../assets/kvitok2.jpg" alt="obrazok reklamy na kvitok2" />
      </div>
      <div class="sekcia-img-container">
        <img src="../assets/junior.jpg" alt="dzatko junior" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section"
}
</script>

<style scoped>
.grid-container .sekcia {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: unset;
  gap: 1em;
}
.grid-container {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 1.5rem;

  justify-items: center;
}

.sekcia > img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sekcia-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1500px) {
  body {
    background-color: black;
  }
  .grid-container .sekcia {
    padding: 0 2.5em;
    gap: 2.5em;
  }
  .sekcia-img-container {
    margin: 0;
    padding: 0;
  }
  .sekcia-img-container > img {
    display: block;
    max-width: 100%;
    height: auto;
  }
}

@media only screen and (max-width: 1100px) {
  body {
    background-color: blue;
  }
}

@media only screen and (max-width: 800px) {
  body {
    background-color: orange;
  }

  .nadpisV{
    font-size: 4rem;
  }

  .grid-container .sekcia {
    margin-top: 3rem;
    grid-template-columns: 1fr;

  }
}

@media only screen and (max-width: 500px) {
  body {
    background-color: green;
  }
}

@media only screen and (max-width: 280px) {
  body {
    background-color: yellow;
  }
  .grid-container .sekcia {
    padding: 0 1em;
    gap: 0.5em;
  }
}
</style>