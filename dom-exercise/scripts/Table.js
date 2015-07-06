var products = [];
var productsPerPageInput = document.querySelector('#itemsPerPage');
var tableHeaders = ItemHeaders;

function addToCartProxy(event) {
    event = event || window.event;
    var id = event.target.parentElement.parentElement.firstChild.textContent;
    var itemData = products.filter(function (element) {
        return element.id === id;
    });
    if (Array.isArray(itemData) && itemData.length === 1) {
        itemData = itemData[0];
        EventManager.publish('addToCart', itemData);
    }
}

function generateTable(event) {
    event = event || window.event;
    var pageIndex = 0;
    if (event.type === 'changePage') {
        pageIndex = event.detail;
        removeTable();
    } else if (event.type === 'change') {
        removeTable();
    }
    var paginatedProducts = getPaginatedProducts(pageIndex);
    var table = Painter.createTable(paginatedProducts, tableHeaders, 'table');
    var tablePlacement = document.querySelector('h1');
    DomHelper.insertAfter(table, tablePlacement);
}

function removeTable() {
    var tableContainer = document.querySelector('.table-container');
    DomHelper.removeElement(tableContainer);
}

function createPaginationButtons() {
    var numOfPages = Math.ceil(products.length / productsPerPageInput.value);
    var itemsPerPageLabel = document.querySelector('#itemsPerPageLabel');
    var tablePagination = document.querySelector('#tablePagination');
    if (tablePagination) {
        DomHelper.removeElement(tablePagination);
    }
    tablePagination = document.createElement('ul');
    tablePagination.id = 'tablePagination';
    DomHelper.addClasses(tablePagination, ['tablePagination', 'clearfix']);
    DomHelper.insertAfter(tablePagination, itemsPerPageLabel);
    for (var i = 1; i < numOfPages + 1; i++) {
        var pageItem = document.createElement('li');
        pageItem.textContent = i;
        // -1 for the correct pagination index
        pageItem.setAttribute('data-index', i - 1);
        pageItem.addEventListener('click', fireCustomEvent);
        tablePagination.appendChild(pageItem);
    }
}

function getPaginatedProducts(index) {
    var productsPerPage = productsPerPageInput.value;
    return products.slice(index * productsPerPage, (index * productsPerPage) + productsPerPage);
}

function updatePageSize(event) {
    if (event.target.value < 1) {
        event.target.value = 1;
    }
    generateTable(event);
    createPaginationButtons();
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

productsPerPageInput.addEventListener('change', updatePageSize);

document.addEventListener("DOMContentLoaded", function (event) {
    init();
    Cart.init();
});