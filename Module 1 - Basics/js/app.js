let app = new Vue({
    el: '#app',
    data: {
        placeholder: 'Поле Input',
        disabled: true,
        typeBtn: 'submit',
        tasks: [
            {
                text: 'Развернуть окружение в Codepen',
                done: false,
            },
            {
                text: 'Пройти курс по Vue',
                done: true,
            },
            {
                text: 'Сделать интернет-магазин на Vue',
                done: false,
            },
        ],
        completedTasks: [
            'Поиграть в хоккей',
            'Поиграть в футбол',
            'Поиграть в программиста',
        ],
    }
})
