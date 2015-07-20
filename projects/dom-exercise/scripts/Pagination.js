
var Pagination = (function () {

    var productsPerPageInput;

    var createPagination = function (changePageSize) {
        var productsPerPage = productsPerPageInput && productsPerPageInput.value || 10;
        var paginationData = {
            productsPerPage: productsPerPage,
            pagesButtonArray: []
        };
        removePagination();
        var numOfPages = Math.ceil(DataManager.productsList.length / productsPerPage);
        for (var i = 0; i < numOfPages; i++) {
            paginationData.pagesButtonArray[i] = i + 1;
        }
        var paginationContainer = document.querySelector('#paginationContainer');
        paginationContainer.innerHTML = Painter.createPagination(paginationData);
        productsPerPageInput = document.querySelector('#itemsPerPage');
        productsPerPageInput.addEventListener('change', updatePageSize);
        if (changePageSize) {
            productsPerPageInput.focus();
        }
        wirePaginationButtonEvents();
    };

    var removePagination = function () {
        var shopPagination = document.querySelector('#shopPagination');
        if (shopPagination) {
            shopPagination.remove();
        }
    };

    var wirePaginationButtonEvents = function () {
        var paginationButtons = document.querySelectorAll('#shopPagination > li');
        var paginationButtonsArray = Array.prototype.slice.call(paginationButtons, 0);
        paginationButtonsArray.forEach(function (value) {
            value.addEventListener('click', changePageProxy);
        }.bind(this))
    };

    var getPaginatedProducts = function (index) {
        index = parseInt(index, 10);
        var productsPerPage = parseInt(productsPerPageInput.value, 10);
        return DataManager.productsList.slice(index * productsPerPage, (index * productsPerPage) + productsPerPage);
    };

    var updatePageSize = function (event) {
        if (event.target.value < 1) {
            event.target.value = 1;
        }
        generateTable(event);

        createPagination(true);
    };

    var changePageProxy = function (event) {
        event = event || window.event;
        var pageIndex = parseInt(event.target.textContent.trim() - 1, 10);
        EventManager.publish('changePage', pageIndex);
    };

    var init = function () {
        EventManager.subscribe('changePage', generateTable);
        createPagination();

        return this;
    };

    return  {
        init: init,
        changePageProxy: changePageProxy,
        updatePageSize: updatePageSize,
        getPaginatedProducts: getPaginatedProducts
    }
})();
