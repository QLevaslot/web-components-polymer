// element registration
Polymer({
    is: "todo-list",
    // add properties and methods on the element's prototype
    properties: {
        filterText: {
            type: String,
            observer: "filterTextChanged"
        },
        todos: {
            type: Array
        },
        currentTodos: {
            type: String,
            computed: "getCurrentTodos(todos, filterText)"
        }
    },
    ready: function () {
        this.todos = [];
        this.filterText = "";
    },
    filterTextChanged: function (newValue, oldValue) {
        this.$.todoList.render();
    },
    todoListFilter: function (item) {
        return item.name.match(new RegExp(this.filterText, 'i'));
    },
    getCurrentTodos: function () {
        var current = 0;
        for (var i in this.todos) {
            if (this.todoListFilter(this.todos[i])) {
                current++
            }
        }
        return current;
    },
    gotTodos: function (event, ironRequest) {
        this.todos = ironRequest.response;
    },
    gotError: function (event, ironRequest) {
        this.error = event;
    }
});