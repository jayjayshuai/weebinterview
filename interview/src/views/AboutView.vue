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
  display: grid;
  width: 300px;
  height: 300px;
  border: 5px solid silver;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
}

div {
  height: 100px;
  width: 100px;
  background-color: blueviolet;
  background-clip: content-box;
  border: 1px solid blueviolet;
  padding: 10px;
  box-sizing: border-box;
}
</style>
