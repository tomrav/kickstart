
var init = function() {
    document.addEventListener("DOMContentLoaded", function (event) {
        products = DataGenerator.generateItems(35);
        Pagination.init();
        initTable();
        Cart.init();
    });
};

init();