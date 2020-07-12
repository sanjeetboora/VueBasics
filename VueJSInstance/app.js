var data = {
  title: "VueJs Instance",
  showParagraph: false,
};
Vue.component("hello", {
  template: "<h1> Hello World! </h1>",
});
var vm1 = new Vue({
  data: data,
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle("The VueJs Instance (Updated)");
      this.$refs.myButton.innerText = "Test";
    },
    updateTitle: function (title) {
      this.title = title;
    },
  },
  computed: {
    lowerCaseTitle: function () {
      return this.title.toLowerCase();
    },
  },
  watch: {
    title: function (value) {
      alert("title changed, new title: " + value);
    },
  },
});
vm1.$mount("#app1");
console.log(vm1.$data === data);
vm1.$refs.heading.innerText = "Something else";

setTimeout(function () {
  vm1.title = "title changed by timer";
  vm1.show();
}, 3000);

var vm2 = new Vue({
  el: "#app2",
  data: {
    title: "The second instance",
  },
  methods: {
    onChange: function () {
      vm1.title = "Title Changed!!";
    },
  },
});

var vm3 = new Vue({
  template: "<h1> Hello World </h1>",
});

// vm3.$mount("#app3");
vm3.$mount();
document.getElementById("app3").appendChild(vm3.$el);
