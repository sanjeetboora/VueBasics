var data = {
  title: "VueJs Instance",
  showParagraph: false,
};

var vm1 = new Vue({
  el: "#app1",
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
console.log(vm1.$data === data);
vm1.$refs.heading.innerText = "Something else";
setTimeout(function () {
  vm1.title = "title changed by timer";
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
