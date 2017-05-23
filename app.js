// import todoitem from 'components/todoitem';
localStorage.setItem("todo", JSON.stringify(
	[
		{ id: 0, text: 'Vegetables'},
		{ id: 1, text: 'Cheese', completed: 'Tue May 23 2017 12:06:47 GMT+0000 (Greenwich Standard Time)'},
		{ id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
));

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: JSON.parse(localStorage.getItem('todo')) || []
  }
})



// let item = {"message": "smegma"};
// localStorage.setItem("todo", JSON.stringify(item));

// new Vue({
//   el: '#app',
//   data: {
//     message: JSON.parse(localStorage.getItem("todo")).message
//   },
//   methods: {
//   	addToDo: function(){

//   	},
//   	removeToDo: function(){

//   	},
//   	updateToDo: function(){

//   	},
//   	finishToDo: function(){

//   	}
//   }
// })