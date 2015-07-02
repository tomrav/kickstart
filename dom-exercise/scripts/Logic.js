var itemsRange = 0;
var productsPerPage = 10;

function getTableHeaders() {

    var tableHeader = document.querySelector('#tableHeader > tr');
    var arrayOfHeaders = [];
    for (var i = 0; i < tableHeader.children.length; i++) {
        arrayOfHeaders.push(tableHeader.children[i].attributes['name'].value);
    }

    return arrayOfHeaders;
}

function createTableRow(headers, rowData) {
    var tr = document.createElement('tr');
    for (var i = 0; i < headers.length; i++) {
        var td = document.createElement('td');
        if (headers[i] === 'image') {
            var img = document.createElement('img');
            img.setAttribute('src', rowData['image']);
            td.appendChild(img);
        } else if (headers[i] === 'addToCart'){
            var addToCartButton = document.createElement('button');
            addToCartButton.addEventListener('click', addToCartClicked, false);
            addToCartButton.innerText = 'Add to Cart';
            td.appendChild(addToCartButton);
        } else {
            td.textContent = rowData[headers[i]];
        }
        tr.appendChild(td);
    }
    return tr;
}

function addToCartClicked(event) {
    event = event || window.event;
    console.log(event);
}

function createPaginationButtons() {
    var numOfPages = Math.ceil(products.length / productsPerPage);
    var tablePagination = document.querySelector('#tablePagination');
    for (var i = 1; i < numOfPages + 1; i++) {
        var pageButton = document.createElement('button');
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

function generateTable(event) {
    event = event || window.event;
    var tableIndex = +event.detail || 0;
    var tableBody = document.querySelector('#tableBody');
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
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

function init() {
    document.addEventListener('changePage', generateTable);
    generateTable();
    createPaginationButtons();
}

document.addEventListener("DOMContentLoaded", function(event) {
    init();
});