<template>
  <div class="flex flex-col justify-center items-center my-4">
    <div v-if="emptyQuestions" class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
      <span class="font-medium">No Questions found</span> please refine your selection.
    </div>
    <button  @click.prevent="this.$router.push({name:'start'})" type="button"
            class="btn">
    Start Over
    </button>
  </div>
  <!-- Breadcrumb -->
  <nav class="flex px-5 py-3 mb-6 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <span class="breadcrumb-text">Category : {{category}}</span>
      </li>
      <li>
        <div class="flex items-center">
          <span class="text-white p-1" >/</span>
          <span class="breadcrumb-text">{{questionsLength }} questions</span>
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          <span class="text-white p-1" >/</span>
          <span class="breadcrumb-text"> difficulty : {{ difficulty }}</span>
        </div>
      </li>
    </ol>
  </nav>

  <Question @show-result="toggleResult" @question-answered="questionAnswered" :questionsAnswered="questionsAnswered"
            :questions="questions" v-if="questionsAnswered < questions.length"/>
  <Result :questions="questions" :totalCorrect="totalCorrect" :results="results" v-if="showResult"/>
  <div class="flex justify-center items-center mt-6">
    <button v-if="showResult" @click="reset" type="button"
            class="btn">
      Reset
    </button>
  </div>
</template>
<script>
import Question from "@/components/Question.vue"
import Result from "@/components/Result.vue"

export default {
  name: 'Quiz',
  components: {Question, Result},
  data (){
    return {
      startQuiz:false,
      questionsAnswered:0,
      totalCorrect:0,
      questions: [],
      showResult:false,
      results: [
        {
          min: 0,
          max: 2,
          title: "Try again!",
          desc: "Do a little more studying and you may succeed!"
        },
        {
          min: 3,
          max: 3,
          title: "Wow, you're a genius!",
          desc: "Studying has definitely paid off for you!"
        }
      ],
      questionsLength:10,
      category:"code",
      difficulty:'easy',
      tags:[]
    }
  },
  mounted() {
    this.questionsLength = this.$route.query.questions
    this.category = this.$route.query.category
    this.difficulty = this.$route.query.difficulty
    this.tags = this.$route.query.tags
    this.fetchData()
  },
  methods:{
    toggleResult(){
      this.showResult = !this.showResult
    },
    fetchData(questionsLength){
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.API_KEY,
          'X-RapidAPI-Host': 'quizapi3.p.rapidapi.com'
        }
      };

      fetch(`https://quizapi3.p.rapidapi.com/api/v1/questions?apiKey=liWDaxYDvzDN4hOydCDzN69CpLcHtmsFOCdDSvaK&category=${this.category}&tags=${this.tags}&difficulty=${this.difficulty}&limit=${this.questionsLength}`, options)
          .then(response => response.json())
          .then(response => this.questions = response)
          .catch(err => console.log(err));

    },
    reset(){
      this.questionsAnswered = 0
      this.totalCorrect = 0
      this.toggleResult()
      this.$router.push({name:'start'})
    },
    questionAnswered(is_correct){
      if(is_correct){
        this.totalCorrect++
      }
      this.questionsAnswered++
      if(this.questionsAnswered === this.questions.length){
        this.showResult = true
      }
    }
  },
  computed:{
    emptyQuestions(){
      return this.questions.error
    }
  }
}
</script>