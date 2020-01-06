<template>
  <div class="top-bar">
    <div class="top-bar__upper">
      <a href="/">
        <img src="../assets/images/logo.png" class="top-bar__logo" />
      </a>
      <div class="top-bar__search-container">
        <div class="top-bar__filter">
          All
          <span class="icon-chevron-down" />
        </div>
        <input
          type="text"
          placeholder="What are you looking for?"
          class="top-bar__search"
          @keyup="onSearchKey"
          @focus="onSearch"
          @blur="onSearch"
        />
        <div class="top-bar__search-button" @click="onSearch">
          <span class="icon-search" />
        </div>
      </div>
      <div class="top-bar__cart-container">
        Cart <span class="icon-shopping-cart" />
      </div>
      <div class="top-bar__user-container">
        Hey, Elgin
        <img
          src="https://avatars1.githubusercontent.com/u/44731827?s=460&v=4"
        />
        <span class="icon-chevron-down" />
      </div>
    </div>
    <div class="top-bar__lower">
      <div>
        <span class="icon-home" />
        Delivering to 1311 Chestnut St.
        <span class="icon-chevron-down" />
      </div>
      <div>
        <span class="icon-package" />
        Start A Storr
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TopBar extends Vue {
  onSearchKey(evt: KeyboardEvent) {
    this.$router.replace({
      path: `/search/${
        evt.target ? (evt.target as HTMLTextAreaElement).value : ""
      }`
    });
  }

  onSearch(evt: KeyboardEvent) {
    this.$router.push({
      path: `/search/${
        evt.target ? (evt.target as HTMLTextAreaElement).value : ""
      }`
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 160px;
  padding: 0px 50px;

  background-color: #ffffff;
  box-shadow: 0px 5px 20px 0px #00000020;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.top-bar__upper,
.top-bar__lower {
  position: relative;
  width: 100%;
  height: 80px;

  color: #202020;
  font-size: 16px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.top-bar__logo {
  position: realtive;
  flex-grow: 0;
  flex-shrink: 0;
  height: 30px;
  padding-right: 40px;
  filter: invert(100%);
}

.top-bar__search-container {
  position: relative;
  width: 60%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.top-bar__filter {
  position: relative;
  z-index: 10;
  flex-grow: 0;
  flex-shrink: 0;
  height: 38px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  margin-right: -16px;
  width: auto;
  padding: 0px 14px;
  background-color: #3b80fa;
  color: #ffffff;
  font-size: 14px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 10px;
  }
}

.top-bar__search {
  position: relative;
  width: calc(100% - 34px);
  padding: 10px 16px;
  padding-left: 32px;
  background-color: #f4f4f4;
  color: #202020;
  font-family: inherit;
  font-size: 14px;
  border: 0;
  outline: 0;
  border-radius: 8px;
}

.top-bar__search-button {
  position: relative;
  z-index: 10;
  width: 50px;
  height: 38px;
  margin-left: -16px;
  border-radius: 8px;
  background-color: #f4f4f4;
  color: #202020;
  font-size: 12px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

.top-bar__cart-container {
  position: realtive;
  flex-grow: 0;
  flex-shrink: 0;
  height: 34px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 10px;
    color: #3b80fa;
  }
}

.top-bar__user-container {
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  height: auto;
  height: 34px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    margin: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
