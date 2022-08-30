
<template>
  <div class="dark container mx-auto px-4 min-h-screen py-6">
<!--    <Quiz  :question-answered="questionAnswered" :questions="questions" :questions-answered="questionsAnswered"-->
<!--                  :reset="reset" :results="results" :show-result="showResult" :toggle-result="toggleResult"-->
<!--                  :total-correct="totalCorrect"/>-->
    <router-view />
  </div>
</template>

<script>
import './assets/main.css'
export default {
  name:"App",
}
</script>
