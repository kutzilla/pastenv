<template>
    <div id="connect-session">
        <p>Connect to an existing paste environment</p>
        <form action="/connect" method="POST">
            <label for="sessionid">Session ID</label> 
            <input id="sessionId" type="text" placeholder="session id"/>
            <label for="secret">Secret</label>
            <input id="secret" type="text" placeholder="secret (optional)"/>
            <input id="connect-button" type="submit" value="Connect"/>
        </form>
    </div>
</template>

<style>
    #connect-session {
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
    #connect-button {
    width: 100%;
    background-color: #d7e272;
    color: black;
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

}
</script>