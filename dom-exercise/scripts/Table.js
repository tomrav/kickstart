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
    var pageIndex = event.type === 'changePage' ? event.detail : 0;
    removeTable();
    var paginatedProducts = Pagination.getPaginatedProducts(pageIndex);
    var table = Painter.createTable(paginatedProducts, tableHeaders, 'shop');
    var tablePlacement = document.querySelector('h1');
    DomHelper.insertAfter(table, tablePlacement);
}

function removeTable() {
    var tableContainer = document.querySelector('.table-container');
    DomHelper.removeElement(tableContainer);
}

function sort() {
}

function initTable() {
    document.addEventListener('changePage', generateTable);
    EventManager.addEventType('sort-shop');
    EventManager.subscribe('sort-shop', sort);
    generateTable();
}
