<template>
  <div id="app">
    <div class="starts">
        <div class="container grid">
            <HelloWorld /> 
            <Form />
        </div>
    </div>
  <List />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Form from './components/Form.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    List,
    Form
  }
}
</script>

<style>
        #app {
          font-family: sans-serif;
          text-transform: capitalize;
        }
        .container {
            margin: 0 auto;
            max-width: 1200px;
            padding: 0 40px;
            overflow: auto;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            justify-content: center;
            align-items: center;
        }
</style>
