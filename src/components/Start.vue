<template>
  <form class="flex flex-col space-y-4">
    <form>
      <label for="questions" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select number of questions</label>
      <select v-model="questions" id="questions" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500">
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </form>
    <div>
      <label for="categories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Category</label>
      <select v-model="category" id="categories" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500">
        <option value="Linux">Linux</option>
        <option value="DevOps">DevOps</option>
        <option value="code">Code</option>
        <option value="Docker">Docker</option>
      </select>
    </div>
    <div>
      <label for="difficulty" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Difficulty</label>
      <select v-model="difficulty" id="difficulty" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
    <div>
      <label for="tags" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Tags (optional)</label>
      <select multiple v-model="tags" id="tags" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500">
        <option value="PHP">PHP</option>
        <option value="HTML">HTML</option>
        <option value="LARAVEL">LARAVEL</option>
        <option value="JAVASCRIPT">JAVASCRIPT</option>
        <option value="DOCKER">DOCKER</option>
      </select>
    </div>
    <button  @click.prevent="Start" type="submit"
            class="btn">
      Start Quiz
    </button>
  </form>
</template>

<script>
export default {
  name: "Start",
  data (){
    return {
      questions: 10,
      category: "code",
      difficulty: "easy",
      tags:[],
    }
  },
  methods: {
    Start() {

      const tags = this.tags.join(',')
      console.log(tags)
      this.$router.push({ name: "quiz", query: { questions: this.questions , category:this.category, difficulty:this.difficulty  , tags } });
    }
  }
}
</script>

<style >

</style>