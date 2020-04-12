<template>
  <div>
    <p>Home page</p>
    <p>All measures from backend of</p>
    <button @click="getRandom">New random child and age</button>
    <div id="measures">
      <ol>
        <li v-for="measure in randomMeasures" :key="measure.id"> 
          {{ measure.id }}
        </li>
      </ol>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      randomMeasures: []
    }
  },
  methods: {
    getRandom () {
      // this.randomMeasure = this.getRandomInt(1, 100)
      this.randomMeasures = this.getRandomFromBackend()
    },
    getRandomFromBackend () {
      const path = `http://localhost:5000/v1/random`
      axios.get(path)
      .then(response => {
        this.randomMeasures = response.data
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  },
  created () {
    this.getRandom()
  }
}
</script>