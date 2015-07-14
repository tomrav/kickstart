var productsPerPageInput = document.querySelector('#itemsPerPage');
var tableHeaders = ItemHeaders;
var currentSort = '';

function addToCartProxy(event) {
    event = event || window.event;
    var id = event.target.parentElement.parentElement.firstChild.textContent;
    var itemData = DataManager.productsList.filter(function (element) {
        return element.id === id;
    });
    if (Array.isArray(itemData) && itemData.length === 1) {
        itemData = itemData[0];
        EventManager.publish('addToCart', itemData);
    }
}

function generateTable(event) {
    event = event || window.event;
    var pageIndex = event && event.type === 'changePage' ? event.detail : 0;
    removeTable();
    var paginatedProducts = Pagination.getPaginatedProducts(pageIndex);
    var tableString = Painter.createTable(paginatedProducts, 'shop', ItemHeaders);
    var table = document.createElement('div');
    table.innerHTML = tableString;
    var tablePlacement = document.querySelector('h1');
    DomHelper.insertAfter(table, tablePlacement);
}

function removeTable() {
    var tableContainer = document.querySelector('.table-container');
    DomHelper.removeElement(tableContainer);
}

function sortTable(event) {
    //TODO:  get sort param and compare to current sort
    var target = event.target;
    var sortParam = target.textContent.toLowerCase();
    var comperator = function (a, b) {
        if (a[sortParam] > b[sortParam]) {
            return 1;
        }
        if (a[sortParam] < b[sortParam]) {
            return -1;
        }
        return 0;
    };
    if (sortParam === currentSort) {
        DataManager.productsList.sort(function (a, b) {
            return (0 - comperator(a, b));
        });
        currentSort = '';
    } else {
        DataManager.productsList.sort(comperator);
        currentSort = sortParam;
    }
    generateTable();
}

function initTable() {
    document.addEventListener('changePage', generateTable);
    EventManager.addEventType('sort-shop');
    EventManager.subscribe('sort-shop', sortTable);
    generateTable();
}
