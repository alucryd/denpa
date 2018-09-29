<template>
  <b-list-group-item :variant="listVariant">
    <b-row>
      <b-col cols="10">
        <span class="d-inline-block text-truncate">
          <b>{{ torrent.name }}</b>
        </span>
      </b-col>
      <b-col class="d-flex justify-content-end">
        <font-awesome-icon icon="play-circle" size="lg" class="m-1 text-primary" v-if="torrent.status === 0" @click="startTorrent()" />
        <font-awesome-icon icon="stop-circle" size="lg" class="m-1 text-primary" v-else @click="stopTorrent()" />
        <font-awesome-icon icon="times-circle" size="lg" class="m-1 text-danger" @click="removeTorrent()" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <span :class="[torrent.rateDownload > 0 ? 'text-primary' : 'text-secondary']">
          <font-awesome-icon icon="arrow-alt-circle-down" />
          {{ torrent.rateDownload | prettyBytes }}/s ({{ torrent.downloadedEver | prettyBytes}})
        </span>
        <span :class="[torrent.rateUpload > 0 ? 'text-primary' : 'text-secondary']">
          <font-awesome-icon icon="arrow-alt-circle-up" />
          {{ torrent.rateUpload | prettyBytes }}/s ({{ torrent.uploadedEver | prettyBytes}})
        </span>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-progress height="1.2rem">
          <b-progress-bar :value="torrent.percentDone * 100" :variant="progressVariant" :label="progressLabel" />
        </b-progress>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        {{ torrent.totalSize | prettyBytes }} ({{ torrent.uploadRatio | ratio }})
      </b-col>
    </b-row>
  </b-list-group-item>
</template>

<script>
const axios = require("axios");
const prettyBytes = require("pretty-bytes");
const prettyMs = require("pretty-ms");

const statuses = {
  0: { label: "Stopped", variant: "secondary" },
  1: { label: "Starting check", variant: "warning" },
  2: { label: "Checking", variant: "" },
  3: { label: "Starting download", variant: "warning" },
  4: { label: "Downloading", variant: "" },
  5: { label: "Starting seed", variant: "warning" },
  6: { label: "Seeding", variant: "" },
  7: { label: "Isolated", variant: "danger" }
};

export default {
  name: "torrent",
  props: {
    torrent: Object
  },
  data() {
    return {};
  },
  computed: {
    listVariant() {
      return statuses[this.torrent.status].variant;
    },
    progressVariant() {
      return this.torrent.percentDone === 1 ? "success" : "primary";
    },
    progressLabel() {
      return statuses[this.torrent.status].label;
    }
  },
  methods: {
    startTorrent() {
      axios.post(`torrents/${this.torrent.id}/start`).then(response => {
        console.log(response.data);
      });
    },
    stopTorrent() {
      axios.post(`torrents/${this.torrent.id}/stop`).then(response => {
        console.log(response.data);
      });
    },
    removeTorrent() {
      axios.post(`torrents/${this.torrent.id}/remove`).then(response => {
        console.log(response.data);
      });
    }
  },
  filters: {
    ratio: value => value.toFixed(2),
    prettyBytes: value => prettyBytes(value),
    prettyMs: value => prettyMs(value)
  },
  mounted() {}
};
</script>

<style>
</style>
