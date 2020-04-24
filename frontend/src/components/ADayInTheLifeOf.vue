<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <img src="../assets/default.jpg" class="img-fluid" alt="Response" />
          <p>A Day In The Life Of {{ qrCode }}</p>
          <p>at {{ age }} years old</p>
          <button @click="getRandom" class="btn btn-primary margin-top">New random child and age</button>
        </div>
        <div class="col-md-4">
          <div class="table-responsive">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th v-for="measure in measures" :key="measure.id">ID {{ measure.id }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Type</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.type }}</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.age }}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.height }}</td>
                </tr>
                <tr>
                  <td>Width</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.weight }}</td>
                </tr>
                <tr>
                  <td>Muac</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.muac }}</td>
                </tr>
                <tr>
                  <td>Oedema</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.oedema }}</td>
                </tr>
                <tr>
                  <td>Sync Timestamp</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.sync_timestamp }}</td>
                </tr>
                <tr>
                  <td>Created By</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.created_by }}</td>
                </tr>
                <tr>
                  <td>Deleted</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.deleted }}</td>
                </tr>
                <tr>
                  <td>Deleted By</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.deleted_by }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row"></div>
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
