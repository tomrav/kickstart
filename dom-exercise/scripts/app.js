var app = {

    templatesLoaded: function () {
        DataManager.init(35);
        Pagination.init();
        initTable();
        Cart.init();
    },

    init: function () {
        document.addEventListener("DOMContentLoaded", function (event) {
            EventManager.addEventType('templatesLoaded');
            EventManager.subscribe('templatesLoaded', this.templatesLoaded);
            TemplateManager.init();
        }.bind(this));
    }

};

app.init();

