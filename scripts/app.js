Vue.component('my-cmp', {
    data: () => {
        return {
            status: 'Critical'
        }
    },
    template: '<p>Server Status: {{status}}</p>'
});

new Vue({
    el: '#app',
});