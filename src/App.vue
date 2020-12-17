<template>
  <div id="app">
    <router-view />

    <tabbar></tabbar>
  </div>
</template>

<script>
import axios from "axios";
import tabbar from "./components/Tabbar";
export default {
  data() {
    return {
      datalist: [1, 2, 3],
    };
  },
  components: {
    tabbar,
  },
};
</script>
<style lang="less">
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
form,
input,
p,
th,
td {
  margin: 0;
  padding: 0;
}
body {
  font-size: 12px;
  color: #666;
  font-family: Verdana, Microsoft YaHei, Simsun;
}
img {
  border: 0;
  display: block;
}
ol,
ul {
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
em {
  font-style: normal;
}
input,
button,
select,
textarea {
  outline: none;
}
textarea {
  resize: none;
}
a {
  color: #666;
  text-decoration: none;
}
html,
body {
  height: 100%;
}
html {
  font-size: 27.67vw;
}
.population {
  height: 100%;
  position: relative;
}
.hander {
  width: 100%;
  height: 1.15rem;
  background-color: #0085ff;
}
</style>