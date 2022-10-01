<template>
    <div id="choose-component">
    <p>Do you want to create or connect to a paste enviornment?</p>
    <ul id="choose-list">
        <li><a>Create</a></li>
        <li><a>Connect</a></li>
    </ul>
    </div>
</template>

<style>
    #choose-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    #choose-list li {
        float: unset;
    }
</style>

<script>
  export default {
    name: "ChooseComponent",
  };
</script>