<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>测试axios+mockjs demo</h2>
    <ul>
        <li v-for="(item, index) in productsList" :key="index">{{ index }} ---- {{ item.author_name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      productsList: []
    }
  },
  mounted: function () {
    this.getAlldata()
  },
  methods: {
    getAlldata () {
      var that = this
      this.$axios.get('/products').then(function (res) {
        console.log('链接成功')
        console.log(res.data)
        that.productsList = res.data.data
      }).catch(function (err) {
        console.log('连接错误' + err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
