<template>
  <div class="text-white text-center">
    <div class="text-white text-4xl font-extrabold tracking-tight leading-none">Your Score : {{score}} %</div>

    <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 ">
    <div class="text-4xl font-extrabold tracking-tight leading-none">
      you answered
      <span class="bg-green-100 text-green-800 text-2xl font-semibold mx-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
        {{totalCorrect}}
      </span>
       questions correctly of
      <span class="bg-green-100 text-orange-800 text-2xl font-semibold mx-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
        {{questions.length}}
      </span>
       total questions
    </div>
  </div>
</template>
<script>
export default {
  name: 'Result',
  props:['results','totalCorrect','questions'],
  computed:{
    score(){
      let score = (this.totalCorrect / this.questions.length) * 100

      return score
    }
  }
}
</script>