var itemsRange = 0;
var productsPerPage = 10;

function getTableHeaders() {
    var tableHeader = document.querySelector('#tableHeader');
    var arrayOfHeaders = [];
    for (var i = 0; i < tableHeader.children.length; i++) {
        arrayOfHeaders.push(tableHeader.children[i].attributes['name'].value);
    }

    return arrayOfHeaders;
}

function createTableRow(headers, rowData) {
    var row = document.createElement('div');
    DomHelper.addClasses(row, 'table-row');
    for (var i = 0; i < headers.length; i++) {
        var cell = document.createElement('div');
        DomHelper.addClasses(cell, 'cell');
        switch (headers[i]) {
            case 'image':
                var img = createImage(rowData['image']);
                cell.appendChild(img);
                break;
            case 'addToCart':
                var button = createButton(Cart.add, 'Add to Cart');
                cell.appendChild(button);
                break;
            default:
                cell.textContent = rowData[headers[i]];
        }
        row.appendChild(cell);
    }
    return row;
}

function createImage(src) {
    var img = document.createElement('img');
    img.setAttribute('src', src);
    return img;
}

function createButton(cb, text) {
    var button = document.createElement('button');
    button.addEventListener('click', cb, false);
    button.innerText = text;
    return button;
}

function generateTable(event) {
    event = event || window.event;
    var tableIndex = +event.detail || 0;
    var tableBody = document.querySelector('.table-container');
    while (event.type === 'changePage' && tableBody.children.length > 1) {
        tableBody.children[1].remove();
    }
    var arrayOfHeaders = getTableHeaders();
    var tableFragment = document.createDocumentFragment();
    var paginatedProducts = getPaginatedProducts(tableIndex);
    paginatedProducts.forEach(function (value, index, array) {
        tableFragment.appendChild(createTableRow(arrayOfHeaders, value, index, array.length));
        if (index === paginatedProducts.length - 1) {
            tableBody.appendChild(tableFragment);
        }
    });
}

function createPaginationButtons() {
    var numOfPages = Math.ceil(products.length / productsPerPage);
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

function fireCustomEvent(event) {
    var index = event.target.dataset.index;
    var customEvent = new CustomEvent('changePage', {detail: index});
    document.dispatchEvent(customEvent);
}

function getPaginatedProducts(index) {
    return products.slice(index * productsPerPage, index * productsPerPage + 10);
}

function init() {
    document.addEventListener('changePage', generateTable);
    generateTable();
    createPaginationButtons();
}

document.addEventListener("DOMContentLoaded", function(event) {
    init();
});