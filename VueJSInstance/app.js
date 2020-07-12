new Vue({
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

new Vue({
  el: "#app2",
  data: {
    title: "The second instance",
  },
});
