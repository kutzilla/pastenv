<template>
    <div class="navigation-bar">
      <ul class="navigation-bar-list">
        <li id="title" class="nav-bar-entry"><a href="/">pastenv.io</a></li>
        <li class="nav-bar-entry"><a href="/use-cases">use cases</a></li>
        <li class="nav-bar-entry right"><a href="/about">about</a></li>
      </ul>
    </div>
  </template>
    
  <script lang="ts">
  export default {
    name: "NavigationBar",
  };
  </script>
  
<style>
  ul.navigation-bar-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: white;
  }

  li.nav-bar-entry  {
    float: left;
  }
  
  li.right {
    float: right;
  }

  li.nav-bar-entry a {
    display: block;
    color: lightgray;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li.nav-bar-entry a:hover {
    color: black;
    background-color: white;
  }

  li#title.nav-bar-entry a {
    color: black;
    font-style: bold;
  }

  li#title.nav-bar-entry a:hover {
    color: lightgray;
    background: white;
  }

  </style>