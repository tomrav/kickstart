var products = [];
var productsPerPageInput = document.querySelector('#itemsPerPage');
var tableHeaders = ItemHeaders;

function addToCartProxy(event) {
    event = event || window.event;
    var id = event.target.parentElement.parentElement.firstChild.textContent;
    var itemData = products.filter(function(element) {
        return element.id === id;
    });
    if (Array.isArray(itemData) && itemData.length === 1) {
        itemData = itemData[0];
        EventManager.publish('addToCart', itemData);
    } else {
        console.log('Something went wrong.');
    }
}

function generateTable(event) {
    var paginatedProducts = getPaginatedProducts(0);
    var table = Painter.createTable(paginatedProducts, tableHeaders, 'table');
    var tablePlacement = document.querySelector('h1');
    DomHelper.insertAfter(table, tablePlacement);
}

function createPaginationButtons() {
    var numOfPages = Math.ceil(products.length / productsPerPageInput.value);
    var tablePagination = document.querySelector('#tablePagination');
    for (var i = 1; i < numOfPages + 1; i++) {
        var pageButton = document.createElement('li');
        pageButton.textContent = i;
        // -1 for the correct pagination index
        pageButton.setAttribute('data-index', i - 1);
        pageButton.addEventListener('click', fireCustomEvent);
        tablePagination.appendChild(pageButton);
    }
}

function getPaginatedProducts(index) {
    return products.slice(index * productsPerPageInput.value, index * productsPerPageInput.value + 10);
}

function updatePagination(event) {
    generateTable(0);
    createPaginationButtons();
    console.log(event.target.value);
}

function fireCustomEvent(event) {
    var index = event.target.dataset.index;
    var customEvent = new CustomEvent('changePage', {detail: index});
    document.dispatchEvent(customEvent);
}

function init() {
    products = DataGenerator.generateItems(35);
    document.addEventListener('changePage', generateTable);
    generateTable();
    createPaginationButtons();
}

productsPerPageInput.addEventListener('change', updatePagination);

document.addEventListener("DOMContentLoaded", function(event) {
    init();
    Cart.init();
});