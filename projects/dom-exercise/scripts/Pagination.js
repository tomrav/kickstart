define(['./services/DataManager', './services/EventManager', './helpers/Painter', './Table'], function (DataManager, EventManager, Painter, Table) {
    return {
        productsPerPageInput: null,

        createPagination: function (changePageSize) {
            var productsPerPage = this.productsPerPageInput && this.productsPerPageInput.value || 10;
            var paginationData = {
                productsPerPage: productsPerPage,
                pagesButtonArray: []
            };
            this.removePagination();
            var numOfPages = Math.ceil(DataManager.productsList.length / productsPerPage);
            for (var i = 0; i < numOfPages; i++) {
                paginationData.pagesButtonArray[i] = i + 1;
            }
            var paginationContainer = document.querySelector('#paginationContainer');
            paginationContainer.innerHTML = Painter.createPagination(paginationData);
            this.productsPerPageInput = document.querySelector('#itemsPerPage');
            this.productsPerPageInput.addEventListener('change', this.updatePageSize.bind(this));
            if (changePageSize) {
                this.productsPerPageInput.focus();
            }
            this.wirePaginationButtonEvents();
        },

        removePagination: function () {
            var shopPagination = document.querySelector('#shopPagination');
            if (shopPagination) {
                shopPagination.remove();
            }
        },

        wirePaginationButtonEvents: function () {
            var paginationButtons = document.querySelectorAll('#shopPagination > li');
            var paginationButtonsArray = Array.prototype.slice.call(paginationButtons, 0);
            paginationButtonsArray.forEach(function (value) {
                value.addEventListener('click', this.changePageProxy);
            }.bind(this))
        },

        getPaginatedProducts: function (index) {
            index = parseInt(index, 10);
            var productsPerPage = parseInt(this.productsPerPageInput.value, 10);
            return DataManager.productsList.slice(index * productsPerPage, (index * productsPerPage) + productsPerPage);
        },

        updatePageSize: function (event) {
            if (event.target.value < 1) {
                event.target.value = 1;
            }
            EventManager.publish('redraw-shop', event);
            //Table.generateTable(event);

            this.createPagination(true);
        },

        changePageProxy: function (event) {
            event = event || window.event;
            var pageIndex = parseInt(event.target.textContent.trim() - 1, 10);
            EventManager.publish('changePage', pageIndex);
        },

        init: function () {
            this.createPagination();
        }
    }
});

