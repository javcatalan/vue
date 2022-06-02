Vue.component("todo-item", {
  props: ["task"],
  template: `
            <li>
            <input type="checkbox" v-model="task.done"/> 
            <span v-if= "task.done">
           <s> {{task.text}} </s>
            </span>
            <span v-else>
            {{task.text}}
            </span>
        </li>
    `,
});
