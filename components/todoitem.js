Vue.component('todo-item', {
  props: ['item'],
  template: `
  	<li class="todoitem">
  		<img v-if="item.completed" src="http://www.iconsdb.com/icons/preview/green/checkmark-xxl.png"></img>
  		{{ item.text }}
  		<p v-if="item.completed"></p>
	</li>`
});