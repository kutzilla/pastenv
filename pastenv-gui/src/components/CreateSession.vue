<template>
    <div id="create-session">
        <p>Create a new paste environment</p>
        <form action="/create" method="POST">
            <label for="sessionid">Session ID</label> 
            <input id="sessionId" type="text" placeholder="session id" v-model="sessionId" readonly/>
            <label for="secret">Secret</label>
            <input id="secret" type="text" placeholder="secret (optional)"/>
            <input type="submit" value="Create"/>
        </form>
    </div>
</template>

<style>
    #create-session {
        border: 1px solid darkgray;
        border-radius: 4px;
    }

    /* Style inputs */
    input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    }

    input[type=text]:read-only {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid darkgray;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: lightgray;
    }

    /* Style the submit button */
    input[type=submit] {
    width: 100%;
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    }

    /* Add a background color to the submit button on mouse-over */
    input[type=submit]:hover {
    background-color: #45a049;
    }

</style>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class CreateSession extends Vue {

    data() {
        return {
            sessionId: this.generateSessionId()
        }
    }

    generateSessionId() : string {
        return (Math.random() + 1).toString(36).substring(7);
    }
}
</script>