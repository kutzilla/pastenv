<template>
    <div>
        <input type="button" value="switch" v-on:click="create=!create"/>
        <CreateSession v-if="create" />
        <ConnectSession v-else/>
    </div>
</template>

<style>
    #choose-list {
        list-style-type: none; 
        border: solid;
        border-width: 1px;
        border-radius: 10px;
    }
    #choose-list p {
        text-align: center;
    }
    #createButton {
        background: #d2ffd2;
    }

     #connectButton {
        color: black;
        background: #ffffb4;

     }

    .chooseButton {
        margin-bottom: 5%;
        margin-top: 5%;
        margin-left: 30%;
        margin-right: 30%;
        padding-top:  2%;
        padding-bottom: 2%;
        border-style: solid;
        border-radius: 20px;
    }
</style>

<script lang='ts'>
  import { Options, Vue } from 'vue-class-component';
  import CreateSession from './CreateSession.vue';
  import ConnectSession from './ConnectSession.vue';
  @Options({
    components: {
        CreateSession,
        ConnectSession
    }
  })
  export default class ChooseCreateOrConnect extends Vue {

    create = true;

    createMode() {
        this.create = true;
    }

    connectMode() {
        this.create = false;
    }

  }
</script>