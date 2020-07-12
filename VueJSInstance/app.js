var vm1 = new Vue({
  el: "#app1",
  data: {
    title: "VueJs Instance",
    showParagraph: false,
  },
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle("The VueJs Instance (Updated)");
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
