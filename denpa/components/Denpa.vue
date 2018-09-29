<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand href="#">Denpa</b-navbar-brand>
    </b-navbar>
    <br />
    <b-container fluid>
      <b-list-group>
        <torrent v-for="torrent in torrents" :key="torrent.id" :torrent="torrent"></torrent>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "denpa",
  data() {
    return {
      torrents: []
    };
  },
  methods: {
    getTorrents() {
      axios.get("torrents").then(response => {
        this.torrents = response.data;
      });
      setTimeout(() => this.getTorrents(), 2000);
    }
  },
  mounted() {
    this.getTorrents();
  }
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-vue/dist/bootstrap-vue.css";
</style>
