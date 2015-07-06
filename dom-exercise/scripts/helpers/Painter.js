
var Painter = {

    createTable: function(dataSet, headersMap, tableType) {
        var table = document.createElement('div');
        DomHelper.addClasses(table, 'table-container');
        table.appendChild(this.createRow(headersMap, 'header'));
        dataSet.forEach(function(val) {
            table.appendChild(this.createRow(val, tableType));
        }.bind(this));

        return table;
    },

    createRow: function(dataItem, rowType) {
        var row = document.createElement('div');
        if (rowType === 'header') {
            DomHelper.addClasses(row, 'table-header');
        } else {
            DomHelper.addClasses(row, 'table-row');
        }
        for (key in dataItem) {
            // TODO: add check for keys with hasOwnProperty
            row.appendChild(this.createCell(key, dataItem[key]));
        }
        if (rowType === 'table') {
            row.appendChild(this.createCell('addToCart'));
        } else if (rowType === 'cart') {

        }

        return row;
    },

    createCell: function(key, value) {
        var cell = document.createElement('div');
        DomHelper.addClasses(cell, 'cell');
        switch (key) {
            case 'image':
                var img = document.createElement('img');
                img.setAttribute('src', value);
                cell.appendChild(img);
                break;
            case 'addToCart':
                var button = document.createElement('button');
                DomHelper.addClasses(button, 'addToCartButton');
                button.addEventListener('click', addToCartProxy, false);
                button.innerText = 'Add to Cart';
                cell.appendChild(button);
                break;
            default:
                cell.textContent = value;
        }

        return cell;
    }
};