

const INITIAL_STATE = {}

function getId(state) {
    return state.todo.todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -1) + 1
}


let reducer = (state = INITIAL_STATE, action) => {
    console.log(state);
    console.log(state.todo);
    console.log(state.todos);
    // console.log(state.length);
    let id = Object.keys(state)?.length;
    id = id ? id + 1 : 1;
    switch (action.type) {
      case 'ADD_TODO':
        return {...state, 
           [id] :{
            title: action.title,
            text: action.text,
            completed: false,
          }
        }
      case 'DELETE_TODO':
        return { 
            // TODO: add the remining data back to store 
          state: Object.keys(state).filter((id) => {
            console.log(id);
            return id !== action.id
          })
        }
      default:
        return state;
      }
  }
  export default reducer