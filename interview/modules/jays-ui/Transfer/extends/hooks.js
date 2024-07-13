import {ref} from "vue";

export  function useTarget(initialIndex){
    const targetIndex=ref(initialIndex)
    function setTargetIndex(index){
        targetIndex.value=Number(index)
    }
    return [targetIndex,setTargetIndex]
}