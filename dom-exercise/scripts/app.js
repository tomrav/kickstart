
var init = function() {
    document.addEventListener("DOMContentLoaded", function (event) {
        DataManager.init(35);
        Pagination.init();
        initTable();
        Cart.init();
    });
};

init();