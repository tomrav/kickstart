var Painter = {

    createTable: function (dataSet, headersMap, tableType) {
        var table = document.createElement('div');
        DomHelper.addClasses(table, 'table-container');
        table.id = tableType;
        table.appendChild(this.createRow(headersMap, 'header'));
        dataSet.forEach(function (val) {
            table.appendChild(this.createRow(val, tableType));
        }.bind(this));

        return table;
    },

    createRow: function (dataItem, rowType) {
        var row = document.createElement('div');
        var rowClass = (rowType === 'header') ? 'table-header' : 'table-row';
        DomHelper.addClasses(row, rowClass);
        for (key in dataItem) {
            // TODO: add check for keys with hasOwnProperty
            row.appendChild(this.createCell(key, dataItem[key], rowType));
        }
        if (rowType === 'shop') {
            row.appendChild(this.createCell('addToCart'));
        }

        return row;
    },

    createCell: function (key, value, header) {
        header = header || false;
        var cell = document.createElement('div');
        var child;
        DomHelper.addClasses(cell, 'cell');
        switch (key) {
            case 'image':
                child = Painter.createImg(child, value);
                break;
            case 'addToCart':
                child = Painter.createButton(child, 'Add to Cart', 'addToCartButton');
                break;
            default:
                child = document.createTextNode(value);
        }
        if (header === 'header') {
            DomHelper.addClasses(cell, 'sort-icon');
            cell.addEventListener('click', Painter.sortEventProxy);
        }
        cell.appendChild(child);
        return cell;
    },

    createButton: function (button, text, classes) {
        button = document.createElement('button');
        DomHelper.addClasses(button, classes);
        button.addEventListener('click', addToCartProxy, false);
        button.innerText = text;
        return button;
    },

    createImg: function (child, src) {
        child = document.createElement('img');
        DomHelper.addClasses(child, 'thumbnail-image');
        child.setAttribute('src', src);
        return child;
    },

    sortEventProxy: function (event) {
        event = event || window.event;
        eventName = 'sort-' + event.target.parentElement.parentElement.id;
        EventManager.publish(eventName, event);
    },

    init: function () {
    }
};

Painter.init();