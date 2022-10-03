<template>
    <div id="choose-create-or-connect">
    <ul id="choose-list">
        <li id="createButton" class="chooseButton"><a>Create a new paste environment</a></li>
        <li id="connectButton" class="chooseButton"><a>Connect to an existing paste environment</a></li>
    </ul>
    </div>
</template>

<style>
    #choose-list {
        list-style-type: none; 
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

<script>
  import { Vue } from 'vue-class-component';  
  export default class ChooseCreateOrConnect extends Vue {

  }
</script>