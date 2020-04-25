<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <img src="../assets/artifacts/test_rotated.jpg" class="img-fluid fit-img" alt="Response" />
          <p>A Day In The Life Of {{ qrCode }}</p>
          <p>at {{ age }} years old</p>
          <button @click="getRandom" class="btn btn-primary margin-top">New random child and age</button>
        </div>
        <div class="col-md-6">
          <div class="table-responsive">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th v-for="(measure, index) in measures" v-bind:key="index">ID</th>
                </tr>
              </thead>
              <tbody>
                <tr></tr>
                <tr>
                  <td>Age</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.age }}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.height }}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.weight }}</td>
                </tr>
                <tr>
                  <td>Muac</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.muac }}</td>
                </tr>
                <tr>
                  <td>Sync Timestamp</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.createTimestamp }}</td>
                </tr>
                <tr>
                  <td>Head Circumference</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.headCircumference }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
      const path = `https://cgminbmz-dev.azurewebsites.net/v1/random`;
      axios
        .get(path)
        .then(response => {
          this.measures = [
            {
              age: 1260,
              createTimestamp: new Date(1585849905761).toLocaleString(),
              height: 87.3,
              weight: 10.2,
              muac: 13.3,
              headCircumference: 5.0
            },
            {
              age: 1260,
              createTimestamp: new Date(1585849905761).toLocaleString(),
              height: 87.3,
              weight: 10.2,
              muac: 13.3,
              headCircumference: 0.0
            }
          ];
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

<style lang="scss" scoped>
.fit-img {
  max-height: 470px;
}
</style>
