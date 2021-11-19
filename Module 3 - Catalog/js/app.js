import { message } from './modules/vars.js';
import { getMessage } from "./modules/functions.js";

Vue.component('like', {
    data() {
        return {
            count: 0,
        }
    },
    template: `<button title="like" type='button' @click='count++'>&#9829; {{ count }}</button>`,
});

Vue.component('dislike', {
    data() {
        return {
            count: 0,
        }
    },
    template: `<button title="dislike" type='button' @click='count++'>&#9829; {{ count }}</button>`,
});

let app = new Vue({
    el: '#app',
    data: {
        placeholder: 'Поле Input',
        disabled: true,
        msg: '',
        typeBtn: 'submit',
        tasks: [
            {
                id: 0,
                text: 'Развернуть окружение в Codepen',
                done: true,
            },
            {
                id: 1,
                text: 'Пройти курс по Vue',
                done: false,
            },
            {
                id: 2,
                text: 'Сделать интернет-магазин на Vue',
                done: false,
            },
            {
                id: 3,
                text: 'Поиграть в хоккей',
                done: true,
            },
            {
                id: 4,
                text: 'Поиграть в футбол',
                done: true,
            },
            {
                id: 5,
                text: 'Поиграть в программиста',
                done: true,
            },
        ],
    },
    methods: {
        addNewTask() {
            this.tasks.push({text: this.msg, done: false});
            this.msg = '';
        },
        getUncompletedTasks() {
            return this.tasks.filter(task => !task.done);
        },
        getCountUncompletedTasks() {
            return this.getUncompletedTasks().length;
        },
        getCompletedTasks() {
            return this.tasks.filter(task => task.done);
        }
    }
})

getMessage(message);
getMessage('My second message from app.js');
