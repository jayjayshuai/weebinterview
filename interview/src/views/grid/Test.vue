<script setup>

</script>

<template>
  <article>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
  </article>
</template>

<style scoped>
article {
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border:5px solid red
}
div {
  background-clip: content-box;
  padding: 10px;
  background-color: blue;

}
</style>