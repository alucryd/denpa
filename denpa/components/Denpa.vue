<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark" sticky="true">
      <b-navbar-brand href="#">Denpa</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-text class="mr-sm-2">
          <font-awesome-icon icon="arrow-down" />
        </b-nav-text>
        <b-nav-text class="mr-sm-2">{{download | prettyBytes}}</b-nav-text>
        <b-nav-text class="mr-sm-2">
          <font-awesome-icon icon="arrow-up" />
        </b-nav-text>
        <b-nav-text class="mr-sm-2">{{upload | prettyBytes}}</b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-button size="sm" class="mr-sm-2" @click="startTorrents()">
          <font-awesome-icon icon="play" />
        </b-button>
        <b-button size="sm" class="mr-sm-2" @click="stopTorrents()">
          <font-awesome-icon icon="stop" />
        </b-button>
        <b-button size="sm" class="mr-sm-2" @click="removeTorrents()">
          <font-awesome-icon icon="times" />
        </b-button>
        <b-nav-form @submit="addTorrent">
          <b-form-input v-model="filename" size="sm" class="mr-sm-2" type="text" placeholder="Torrent URL"/>
          <b-button size="sm" class="mr-sm-2" type="submit">
            <font-awesome-icon icon="plus" />
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
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
const prettyBytes = require("pretty-bytes");

export default {
  name: "denpa",
  data() {
    return {
      filename: "",
      torrents: []
    };
  },
  computed: {
    download() {
      return this.torrents.reduce(
        (accumulator, torrent) => accumulator + torrent.rateDownload,
        0
      );
    },
    upload() {
      return this.torrents.reduce(
        (accumulator, torrent) => accumulator + torrent.rateUpload,
        0
      );
    }
  },
  methods: {
    getTorrents() {
      axios.get("torrents").then(response => {
        this.torrents = response.data;
      });
      setTimeout(() => this.getTorrents(), 2000);
    },
    startTorrents() {
      axios.post(`torrents/start`).then(response => {});
    },
    stopTorrents() {
      axios.post(`torrents/stop`).then(response => {});
    },
    removeTorrents() {
      axios.delete(`torrents/remove`).then(response => {});
    },
    addTorrent(evt) {
      evt.preventDefault();
      axios.post("torrents", { filename: this.filename }).then(response => {
        this.filename = "";
      });
    }
  },
  filters: {
    prettyBytes: value => prettyBytes(value)
  },
  mounted() {
    this.getTorrents();
  }
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~bootstrap-vue/dist/bootstrap-vue.min.css";
</style>
