let actions = {
    addTodo: function(payload) {
        return {
          type: 'ADD_TODO',
          title: payload.title,
          text: payload.text
        }
    },
    // TODO
    editTodo: function(id) {
        return {
            type: 'EDIT_TODO',
            id: id
        }
    },
    // TODO: 
    deleteTodo: function(id) {
    return {
        type: 'DELETE_TODO',
        id: id
        }
    }
}
export default actions;