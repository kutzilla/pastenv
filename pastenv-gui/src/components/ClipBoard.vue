<template>
  <div class="clip-board">
    <h1>Clipboard</h1>
    <p>Paste your stuff here.</p>
    <ul class="entry-list">
      <li class="entry" v-for="e in entrys" :key="e">{{e}}</li>
    </ul>
    <input class="new-entry-field" placeholder="Enter your stuff here." v-model="newEntry" v-on:keyup.enter="sendMessage(newEntry)" />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class ClipBoard extends Vue {

  ws : WebSocket = new WebSocket('ws://localhost:15674/pastenv');
  newEntry = '';
  entrys = [] as string[];

  addEntry(entry: string) {
    console.log(`Adding ${entry}`);
    this.entrys.push(entry);
    this.newEntry = ''
  }

  sendMessage(message: string) {
    console.log(`Sending ${message}`);
    this.ws.send(message);
  }
  mounted() {


    console.log('Starting connection to pastenv-api');

    this.ws.onopen = (event) => {
      console.log(event);
      console.log("Successfully connected to pastenv server");
    };

    var addEntry = this.addEntry;
    this.ws.onmessage = (message: MessageEvent) => {
      var messageData = message.data;
      console.log('Recevied ' + messageData);
      addEntry(messageData)
    };
  }
}
</script>

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
