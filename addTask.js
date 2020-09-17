new Vue({
    el: '#form',
    data: {
        preview: '',
        tasks: []
    },

    methods: {
        addTask: function () {
            if (this.preview === '') {
                alert('No se puede insertar un valor vacío');
            } else {
                this.tasks.push(this.preview);
            }
        }
    }

});