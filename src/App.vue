<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "styles/variables.scss";

  * {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 0;
  }

  #app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-size: $-f-main-size;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    max-width: 1240px;
    padding: 0 5px;

    &--info {
      justify-content: center;
    }

    &--main {
       flex-direction: column;
       justify-content: center;
    }

    &--footer {
      padding: 33px 0;
      justify-content: space-between;
      align-items: flex-end;

      @media (max-width: 599px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
