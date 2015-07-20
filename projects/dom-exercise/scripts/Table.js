var currentSort = '';
var headerSortingOptions = ['shopHeaderName', 'shopHeaderDescription', 'shopHeaderLimit', 'shopHeaderPrice'];
var ItemHeaders = {
    id : 'ID',
    img : 'Image',
    name : 'Name',
    description : 'Description',
    limit : 'Limit',
    price : 'Price',
    addToCartButton : 'Add to Cart'
};

function addToCartProxy(event) {
    event = event || window.event;
    var id = event.target.parentElement.parentElement.id;
    var itemData = DataManager.productsList.filter(function (element) {
        return element.id === id;
    });
    if (Array.isArray(itemData) && itemData.length > 0) {
        itemData = itemData[0];
        EventManager.publish('addToCart', itemData);
    }
}

function generateTable(event) {
    event = event || window.event;
    var pageIndex = event && typeof event === 'number' ? event : 0;
    removeTable();
    var paginatedProducts = app.pagination.getPaginatedProducts(pageIndex);
    var table = document.querySelector('#shopContainer');
    table.innerHTML = Painter.createTable(paginatedProducts, 'shop', ItemHeaders);
    wireSortEvents();
    wireAddToCartEvent();
}

function wireSortEvents() {
    headerSortingOptions.forEach(function(value) {
        var headerCell = document.querySelector('#' + value);
        headerCell.addEventListener('click', sortEventProxy);
    }.bind(this));
}

function sortEventProxy (event) {
    event = event || window.event;
    var eventName = 'sort-shop';
    EventManager.publish(eventName, event);
}

function wireAddToCartEvent() {
    var rows = document.querySelectorAll('#shop .table-row');
    var rowsArray = Array.prototype.slice.call(rows, 0);
    rowsArray.forEach(function (value) {
        value.addEventListener('click', addToCartProxy);
    }.bind(this))
}

function removeTable() {
    var shop = document.querySelector('#shop');
    if (shop !== null) {
        headerSortingOptions.forEach(function (value) {
            var cell = document.querySelector('#' + value);
            cell.removeEventListener('click', sortEventProxy);
        }.bind(this));
        var rows = document.querySelectorAll('#shop .table-row');
        var rowsArray = Array.prototype.slice.call(rows, 0);
        rowsArray.forEach(function (value) {
            value.removeEventListener('click', addToCartProxy);
        }.bind(this));
        DomHelper.removeElement(shop);
    }
}

function sortTable(event) {
    var target = event.target;
    var sortParam = target.textContent.toLowerCase().trim();
    currentSort = DataManager.sortItems(currentSort, sortParam);
    generateTable();
}

function initTable() {
    document.addEventListener('changePage', generateTable);
    EventManager.subscribe('sort-shop', sortTable);
    generateTable();
}
