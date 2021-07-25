<template>
  <div id="getIp">
    <div>
      <h2>Get IP Address</h2>
      <div>
        <input @click="getIp" type="button" value="Get IP Address" />
      </div>
      <h2 v-text="ipAddress"></h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "GetIp",
  data() {
    return {
      ipAddress: "Click the button",
    };
  },
  methods: {
    getIp() {
      this.ipAddress = "Hold on a second...";
      this.$axios
        .get("https://httpbin.org/get")
        .then((response) => {
          this.ipAddress = `Your IP address is ${response.data.origin}`;
        })
        .catch((reason) => {
          this.ipAddress = "Getting the IP Address failed..";
        });
    },
  },
};
</script>