var Painter = {

    createTable: function (dataSet, headersMap, tableType) {
        var table = document.createElement('div');
        DomHelper.addClasses(table, 'table-container');
        table.appendChild(this.createRow(headersMap, 'header'));
        dataSet.forEach(function (val) {
            table.appendChild(this.createRow(val, tableType));
        }.bind(this));

        return table;
    },

    createRow: function (dataItem, rowType) {
        var row = document.createElement('div');
        rowType = rowType || 'row';
        DomHelper.addClasses(row, 'table-' + rowType);
        for (key in dataItem) {
            // TODO: add check for keys with hasOwnProperty
            row.appendChild(this.createCell(key, dataItem[key]));
        }
        if (rowType === 'row') {
            row.appendChild(this.createCell('addToCart'));
        } else if (rowType === 'cart') {

        }

        return row;
    },

    createCell: function (key, value) {
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
                //cell.textContent = value;
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
        child.setAttribute('src', src);
        return child;
    }
};