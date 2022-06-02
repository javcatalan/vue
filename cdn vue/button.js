Vue.component("btn-demo", {
  props: ["initial"],
  data: function () {
    return {
      counter: 0,
    };
  },
  template: `
        <div class="number-counter">
            <button v-on:click="add()">+</button>
            <span>{{parseInt(initial) + counter}}</span>
            <button v-on:click="minus()">-</button>
        </div>
        `,
  methods: {
    add: function () {
      this.counter = this.counter + 1;
    },
    minus: function () {
      this.counter = this.counter - 1;
    },
  },
});
