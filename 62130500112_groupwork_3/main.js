const app = {
    data() {
        return {
            tasks: [{
                    image: './images/r.jpg',
                    article: 'Rose',
                    done: false
                },
                {
                    image: './images/y.jpg',
                    article: 'Yellow Rose',
                    done: false
                },
                {
                    image: './images/b.jpg',
                    article: 'Blue Rose',
                    done: false
                },
                {
                    image: './images/w.jpg',
                    article: 'White Rose',
                    done: false
                }

            ]
        }
    },

    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        }
    },
    computed: {
        countUndone() {
            return this.tasks.filter(t => !t.done).length
        }
    }

}
Vue.createApp(app).mount('#app')