Vue.component('like-button', {
    data() {
        return {
            count: 0,
        }
    },
    template: `<button type="button" @click='count++'>&#9829; {{ count }}</button>`,
});

var app = new Vue({
    el:      '#app',
    data:    {
        placeholder:    'Поле Input',
        disabled:       true,
        msg:            '',
        typeBtn:        "submit",
        tasks:          [
            {
                text: "Развернуть окружение в Codepen",
                done: true,
            },
            {
                text: "Пройти курс по Vue",
                done: false,
            },
            {
                text: "Сделать интернет-магазин на Vue",
                done: false,
            },
        ],
        completedTasks: [
            "Поиграть в хоккей",
            "Поиграть в футбол",
            "Поиграть в программиста",
        ],
    },
    methods: {
        addNewTask() {
            this.tasks.push({text: this.msg, done: false});
            this.msg = '';
        },
        getCountUncompletedTasks() {
            return this.tasks.filter(task => !task.done).length;
        }
    }
});
