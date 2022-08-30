<template>
  <div class="questions-ctr ">
    <div class="" v-if="questions.length" >
      <div class="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700">
        <div class="bg-green-600 h-2.5 rounded-full dark:bg-green-500" :style="{width : `${(questionsAnswered / questions.length) * 100}%`}"></div>
      </div>
      <div class="text-center  text-white my-4 text-2xl">
        <span class="bg-green-100 text-green-800 text-xl font-semibold mx-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
          {{questionsAnswered}}
        </span>
        out of
        <span class="bg-red-100 text-red-800 text-xl font-semibold mx-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
        {{questions.length}}
        </span>
        questions answered</div>
    </div>
    <div class="mt-6" v-for="(question,i) in questions" :key="question.question" v-show="i === questionsAnswered" >
      <h1 class="text-4xl font-extrabold dark:text-rose-500">{{question.question}}</h1>
      <ul class="w-full mt-6 py-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">

        <div  v-for="(answer,i) in question.answers" :key="answer" class="px-4 " >
          <li class="py-4 px-4 w-full border-b border-gray-200 dark:border-gray-600 text-lg bg-gray-600 my-4 cursor-pointer" @click.prevent="selectAnswer(i,question.correct_answer)" v-if="answer" >
            <div  class="h-full"  >
              {{answer}}
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Question',
  props:['questions','questionsAnswered'],
  emits:['question-answered','show-results'],
  methods:{
    showResults(){
      this.$emit('show-results')
    },
    selectAnswer(answer,correct_answer){
      let is_correct  = false
      if(answer == correct_answer  ){
        is_correct = true
        this.$swal({title:'Correct Answer ' , background:"#6ee7b7", color:"white" , position: 'top-start', showConfirmButton: false,timer:2000, timerProgressBar : true, toast : true} );
      }else{
        this.$swal({title:'Wrong Answer ', background:"#fb7185" , color:"white" ,  position: 'top-start', showConfirmButton: false,timer:2000 , timerProgressBar:true , toast:true} );
      }
        this.$emit('question-answered',is_correct)
    }
  }
}
</script>
