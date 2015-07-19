var app = (function() {

    var templatesLoaded = function () {
        initTable();
        Cart.init();
        Coupon.init();
    };

    var loadModules = function () {
        DataManager.init(35);
        app.pagination = Pagination.init();
        templatesLoaded();
    };

    var init = function () {
        document.addEventListener("DOMContentLoaded", function (event) {
            EventManager.subscribe('templatesLoaded', this.loadModules.bind(app));
            TemplateManager.init();
        }.bind(this));
    };

    return {
        init: init,
        loadModules: loadModules,
        templatesLoaded: templatesLoaded
    }

})();

app.init();

