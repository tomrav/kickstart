var app = (function () {

    function templatesLoaded() {
        initTable();
        Cart.init();
        Coupon.init();
    }

    function loadModules() {
        DataManager.init(35);
        app.pagination = Pagination.init();
        templatesLoaded();
    }

    function init() {
        document.addEventListener("DOMContentLoaded", function () {
            EventManager.subscribe('templatesLoaded', this.loadModules.bind(app));
            TemplateManager.init();
        }.bind(this));
    }

    return {
        init: init,
        loadModules: loadModules,
        templatesLoaded: templatesLoaded
    };

})();

app.init();