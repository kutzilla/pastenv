<template>
  <div class="clip-board">
    <h1>Clipboard</h1>
    <p>Paste your stuff here.</p>
    <ul class="entry-list">
      <li class="entry" v-for="e in entrys" :key="e.text">{{e.text}}</li>
    </ul>
    <input class="new-entry-field" placeholder="Enter your stuff here." v-model="newEntry" v-on:keyup.enter="sendMessage(newEntry)" />
  </div>
</template>

<style>
ul.entry-list {
    list-style-type: none;
    padding-left: 1%;
    padding-right: 1%;
    overflow: hidden;
}
li.entry {
  text-align: left;
  margin-bottom: 1%;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 1%;
  border: 1px;
  border-style: solid;
  background-color: lightgrey;
}
input.new-entry-field {
  width: 97.5%;
  height: 3em;
  
}
</style>
<script>
export default {
  name: "ClipBoard",
    data() {
    return {
      ws: null,
      newEntry: '',
      entrys: []
    }
  },
  methods: {
    addEntry(entry) {
      this.entrys.push({text: entry});
      this.newEntry = ''
    },
    sendMessage(message) {
      console.log('Sending ' + message)
      this.ws.send(message);
    }
  },
  created: function() {
    console.log('Starting connection to pastenv-api');
    this.ws = new WebSocket('ws://0.0.0.0:15674/pastenv');

    this.ws.onopen = function(event) {
      console.log(event)
      console.log("Successfully connected to pastenv server")
    };

    var addEntry = this.addEntry

    this.ws.addEventListener('message', (message) => {
      console.log('Recevied ' + message.data)
      addEntry(message.data)
    });
  },

};
</script>