<template>
  <div>
    <p>A Day In The Life Of {{ qrCode }}</p>
    <p>at {{ age }} years old</p>
    <button @click="getRandom">New random child and age</button>
    <div id="measures">
      <table>
        <tr>
          <th>type</th>
          <th>age</th>
          <th>height</th>
          <th>weight</th>
          <th>muac</th>
          <th>oedema</th>
          <th>sync_timestamp</th>
          <th>created_by</th>
          <th>visible</th>
          <th>deleted</th>
          <th>deleted_by</th>
          <th>id</th>
        </tr>
        <tr v-for="measure in measures" :key="measure.id">
          <th>{{ measure.type }}</th>
          <th>{{ measure.age }}</th>
          <th>{{ measure.height }}</th>
          <th>{{ measure.weight }}</th>
          <th>{{ measure.muac }}</th>
          <th>{{ measure.oedema }}</th>
          <th>{{ measure.sync_timestamp }}</th>
          <th>{{ measure.created_by }}</th>
          <th>{{ measure.visible }}</th>
          <th>{{ measure.deleted }}</th>
          <th>{{ measure.deleted_by }}</th>
          <th>{{ measure.id }}</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      qrCode: "...",
      age: 0.0,
      measures: [{}]
    };
  },
  methods: {
    getRandom() {
      // this.randomMeasure = this.getRandomInt(1, 100)
      this.measures = this.getRandomFromBackend();

      // this.qrCode = measures
    },
    getRandomFromBackend() {
      //const path = `http://localhost:5000/v1/random`;
      const path = `https://cgm-grafana-cgm-backend-dev.azurewebsites.net/v1/random`;
      axios
        .get(path)
        .then(response => {
          this.measures = response.data;
          this.qrCode = response.data[0]["qr_code"];
          this.age = (response.data[0]["age"] / 365).toPrecision(2);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.getRandom();
  }
};
</script>
