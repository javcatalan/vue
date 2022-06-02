var app = new Vue ({
    el: '#app',
    data:{
        message: 'Hola Vue'
    }
})

var app2 = new Vue ({
    el: '#app-2',
    data: {
        message: 'usted cargo esta pagina el' + new Date().toLocaleString()
    }
})

var app3 = new Vue ({
    el : '#app-3',
    data : {
        seen: true
    }
})

var app4 = new Vue ({
    el: '#app-4',
    data: {
        todos : [
            {text : 'aprender JavaScript'},
            {text : 'aprender Vue'},
            {text : 'construir algo increible'}
        ]
    }
})

var app5 = new Vue ({
    el : "#app-5",
    data: {
        message : 'hola vue.js'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hola Vue'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li> {{ todo.text }}</li>'
})

var app7 = new Vue ({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'Vegetales'},
            {id: 1, text: 'queso'},
            {id: 2, text: 'cualquier otra cosa'}
        ]
    }
})