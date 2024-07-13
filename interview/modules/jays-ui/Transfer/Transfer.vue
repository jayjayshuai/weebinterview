<script setup>
import propsDefination from "./extends/props.js";
import {useTarget} from "./extends/hooks.js";

const props = defineProps(propsDefination)

console.log(props.data)
const options = props.data.map(({title}) => title)
console.log(options)

function selectTargetIndex(e) {
  console.log(e)
}

const [targetIndex, setTargetIndex] = useTarget(12)
console.log(targetIndex.value)
console.log(setTargetIndex())
</script>

<template>
  <div>
    <div>
      <select @change="selectTargetIndex($event.target.value)">
        <option v-for="(title ,index) of options" :key="index" :value="index">
          {{ title }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>

</style>