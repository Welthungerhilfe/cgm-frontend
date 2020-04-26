<template>
  <div>
    <div class="content container-fluid">
      <div class="row">
        <div class="col-md-6">
          <b-carousel
            id="carousel-1"
            :interval="4000"
            controls
            indicators
            background="#DADADA"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            class="fit-images"
            v-if="imageData.length"
          >
            <b-carousel-slide v-for="imgData in imageData" :key="imgData.src">
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  :src="'https://cgminbmzdev.z29.web.core.windows.net/' + imgData.src"
                  alt="image"
                />
              </template>
            </b-carousel-slide>
          </b-carousel>
          <button
            @click="getRandomFromBackend"
            class="btn btn-primary margin-top"
          >New random child and age</button>
        </div>
        <div class="col-md-6">
          <div class="table-responsive" v-if="measures.length">
            <table class="table thead-dark table-bordered">
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
                  <td>Muac</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.muac }}</td>
                </tr>
                <tr>
                  <td>Muac</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.muac }}</td>
                </tr>
                <tr>
                  <td>Sync Timestamp</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.sync_timestamp }}</td>
                </tr>
                <tr>
                  <td>Oedema</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.oedema }}</td>
                </tr>
                <tr>
                  <td>Created By</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.created_by }}</td>
                </tr>
                <tr>
                  <td>QR Code</td>
                  <td v-for="measure in measures" :key="measure.id">{{ measure.qr_code }}</td>
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
//import Vue from "vue";
import { globalConf } from "../main";

export default {
  data() {
    return {
      qrCode: "...",
      age: 0.0,
      measures: [],
      imageData: [],
      globalConf: globalConf
    };
  },
  methods: {
    getRandomFromBackend() {
      //const path = `https://cgminbmz-dev.azurewebsites.net/v1/random`;
      //const path = `http://localhost:5000/v1/random`;
      const imageDataPath =
        globalConf.backendUrl + `/v1/qrcodes/Preprod2/ages/1475/images`;
      const dataPath = globalConf.backendUrl + `/v1/qrcodes/Preprod2/ages/1475`;

      Promise.all([
        axios.get(imageDataPath, { withCredentials: true }),
        axios.get(dataPath, { withCredentials: true })
      ])
        .then(responses => {
          this.imageData = responses[0].data;
          this.measures = responses[1].data;
          console.log(this.imageData);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.getRandomFromBackend();
  }
};
</script>

<style lang="scss" scoped>
.fit-images {
  img {
    max-height: 470px;
    object-fit: contain;
  }
}
</style>
