var itemsRange = 0;

function getTableHeaders() {

    var tableHeader = document.querySelector('#mainTable > tr');
    var arrayOfHeaders = [];
    for (var i = 1; i < tableHeader.children.length; i++) {
        arrayOfHeaders.push(tableHeader.children[i].attributes['name'].value);
    }

    return arrayOfHeaders;
}

function createSelectTag(index, range) {
    var td = document.createElement('td');
    var select = document.createElement('select');
    select.setAttribute('current-index', index);
    td.appendChild(select);
    for (var i = 0; i < range; i++) {
        var option = document.createElement('option');
        option.textContent = i;
        if (index === i) {
            option.setAttribute('selected', 'true');
        }
        select.appendChild(option);
        select.setAttribute('onchange', 'changeIndex(this)');
    }
    return td;
}

function createTableRow(headers, rowData, index, range) {
    var tr = document.createElement('tr');
    tr.appendChild(createSelectTag(index, range));
    for (var i = 0; i < headers.length; i++) {
        var td = document.createElement('td');
        td.textContent = rowData[headers[i]];
        tr.appendChild(td);
    }

    return tr;
}

function generateTable() {
    var tableBody = document.querySelector('#tableBody');
    var arrayOfHeaders = getTableHeaders();
    var tableFragment = document.createDocumentFragment();
    items.forEach(function (value, index, array) {
        tableFragment.appendChild(createTableRow(arrayOfHeaders, value, index, array.length));
        if (index === items.length - 1) {
            tableBody.appendChild(tableFragment);
        }
    });

    itemsRange = items.length;
}

function changeIndex(select) {
    var tableBody = document.querySelector('#tableBody');
    var prevIndex = select.getAttribute('current-index');
    var newIndex = select.value;
    prevIndex = parseInt(prevIndex, 10);
    newIndex = parseInt(newIndex, 10);
    changeRowLocation(prevIndex, newIndex, tableBody);
    updateIndices(prevIndex, newIndex, tableBody);
}

function changeRowLocation(prevIndex, newIndex, tableBody) {
    var rowToMove = tableBody.children[prevIndex];
    rowToMove.remove();
    var newRowLocation = tableBody.children[newIndex];
    tableBody.insertBefore(rowToMove, newRowLocation);
}

function updateIndices(prevIndex, newIndex, tableBody) {
    var workingRange = Math.min(prevIndex, newIndex);
    var range = Math.abs(prevIndex - newIndex);

    for (var i = 0; i <= range; i++) {
        currentRow = tableBody.children[workingRange];
        currentRow.querySelector('td').remove();
        var newSelect = createSelectTag(workingRange, itemsRange);
        currentRow.insertBefore(newSelect, currentRow.querySelector('td'));
        workingRange = workingRange + 1;
    }
}

generateTable();
