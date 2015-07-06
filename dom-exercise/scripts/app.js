
var init = function() {
    productsPerPageInput.addEventListener('change', updatePageSize);
    document.addEventListener("DOMContentLoaded", function (event) {
        initTable();
        Cart.init();
    });
};

init();