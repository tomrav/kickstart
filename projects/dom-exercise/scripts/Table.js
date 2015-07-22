define(['./services/DataManager', './services/EventManager', './helpers/Painter', './Pagination', './helpers/DomHelper', 'lodash'], function (DataManager, EventManager, Painter, Pagination, DomHelper, _) {
    'use strict';
    return {
        currentSort: '',
        headerSortingOptions: ['shopHeaderName', 'shopHeaderDescription', 'shopHeaderLimit', 'shopHeaderPrice'],
        itemHeaders: {
            id: 'ID',
            img: 'Image',
            name: 'Name',
            description: 'Description',
            limit: 'Limit',
            price: 'Price',
            addToCartButton: 'Add to Cart'
        },

        addToCartProxy: function (event) {
            event = event || window.event;
            var id = event.target.parentElement.parentElement.id;
            var itemData = DataManager.productsList.filter(function (element) {
                return element.id === id;
            });
            if (Array.isArray(itemData) && itemData.length > 0) {
                itemData = itemData[0];
                EventManager.publish('addToCart', itemData);
            }
        },

        generateTable: function (event) {
            event = event || window.event;
            var pageIndex = event && typeof event === 'number' ? event : 0;
            this.removeTable();
            var paginatedProducts = Pagination.getPaginatedProducts(pageIndex);
            var table = document.querySelector('#shopContainer');
            table.innerHTML = Painter.createTable(paginatedProducts, 'shop', this.itemHeaders);
            this.wireSortEvents();
            this.wireAddToCartEvent();
        },

        wireSortEvents: function () {
            this.headerSortingOptions.forEach(function (value) {
                var headerCell = document.querySelector('#' + value);
                headerCell.addEventListener('click', this.sortEventProxy);
            }.bind(this));
        },

        sortEventProxy: function (event) {
            event = event || window.event;
            var eventName = 'sort-shop';
            EventManager.publish(eventName, event);
        },

        wireAddToCartEvent: function () {
            var rows = document.querySelectorAll('#shop .table-row');
            var rowsArray = _.toArray(rows);
            rowsArray.forEach(function (value) {
                value.addEventListener('click', this.addToCartProxy);
            }.bind(this));
        },

        removeTable: function () {
            var shop = document.querySelector('#shop');
            if (shop !== null) {
                this.headerSortingOptions.forEach(function (value) {
                    var cell = document.querySelector('#' + value);
                    cell.removeEventListener('click', this.sortEventProxy);
                }.bind(this));
                var rows = document.querySelectorAll('#shop .table-row');
                var rowsArray = _.toArray(rows);
                rowsArray.forEach(function (value) {
                    value.removeEventListener('click', this.addToCartProxy);
                }.bind(this));
                DomHelper.removeElement(shop);
            }
        },

        sortTable: function (event) {
            var target = event.target;
            var sortParam = target.textContent.toLowerCase().trim();
            this.currentSort = DataManager.sortItems(this.currentSort, sortParam);
            this.generateTable();
        },

        init: function () {
            //document.addEventListener('changePage', this.generateTable);
            EventManager.subscribe('changePage', this.generateTable.bind(this));
            EventManager.subscribe('redraw-shop', this.generateTable.bind(this));
            EventManager.subscribe('sort-shop', this.sortTable.bind(this));
            this.generateTable();
        }
    }
});

