let data = {
    title: 'The VueJS Instance',
    showParagraph: false
};

let vm1 = new Vue({
    el: '#app1',
    data: data,
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
            this.$refs.myButton.innerText = 'Test';
            console.log(this.$refs.myButton);
        },
        updateTitle: function (title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function () {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function (value) {
            alert('Title changed, new value: ' + value);
        }
    }
});

vm1.newPro = 'New!';
console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'Something else';

setTimeout(function () {
    vm1.title = 'Changed by Timer';
    vm1.show();
}, 3000);

let vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The VueJS Instance',
        showParagraph: false
    },
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
        },
        updateTitle: function (title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function () {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function (value) {
            alert('Title changed, new value: ' + value);
        }
    }
});
