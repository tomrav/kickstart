
requirejs.config({
    paths: {
        Handlebars: './libs/Handlebars'
    }
})

define('app', ['./Cart', './services/DataManager', './Table', './services/EventManager', './services/TemplateManager', './Pagination', './types/Coupon'], function (Cart, DataManager, Table, EventManager, TemplateManager, Pagination, Coupon) {

    TemplateManager.init();
    DataManager.init(35);
    Coupon.init();
    Pagination.init();
    Table.init();
    Cart.init();

});