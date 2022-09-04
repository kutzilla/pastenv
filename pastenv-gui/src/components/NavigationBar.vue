<template>
    <div class="navigation-bar">
      <ul>
        <li><a>Home</a></li>
        <li class="right"><a>About</a></li>
      </ul>
    </div>
  </template>
    
  <script>
  export default {
    name: "NavigationBar",
  };
  </script>
  
<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: white;
  }
  
  li {
    float: left;
  }
  
  li.right {
    float: right;
  }

  li a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li a:hover {
    color: white;
    background-color: black;
  }
  </style>