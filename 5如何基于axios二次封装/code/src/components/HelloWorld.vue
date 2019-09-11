<template>
  <div class="hello">
    <h1>{{apione.mes}}</h1>
    <button>请求</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: "Welcome to Your Vue.js App",
      apione: "",
      mydata:""
    };
  },
  mounted: function() {
    // axios.get('./apione').then(function(res) {
    //   this.apione = res.data;
    //   {
    //     mes:{
    //       data:[]
    //     }
    //   }
    // });
    this.a.v(this);
    this.a.apione();
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
