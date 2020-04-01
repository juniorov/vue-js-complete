<template>
  <div class="row">
    <h1>{{ title }}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit cumque dolores incidunt, culpa modi doloribus laboriosam assumenda atque eaque tempora, voluptatum, magni exercitationem voluptate. Ad velit nostrum fugiat eum!</p>
    <table class="table table-bordered">
      <tr>
        <td>test</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default{
  name: 'Posts',
  data(){
    return{
      title: 'Test title',
    }
  }
}
</script>

<style>
</style>
