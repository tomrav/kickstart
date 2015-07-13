var itemsPerPageLabel = document.querySelector('#itemsPerPageLabel');

var Pagination = {

    createPaginationButtons: function () {
        var numOfPages = Math.ceil(DataManager.productsList.length / productsPerPageInput.value);
        var tablePagination = document.querySelector('#tablePagination');
        tablePagination && DomHelper.removeElement(tablePagination);
        tablePagination = document.createElement('ul');
        tablePagination.id = 'tablePagination';
        DomHelper.addClasses(tablePagination, ['tablePagination', 'clearfix']);
        DomHelper.insertAfter(tablePagination, itemsPerPageLabel);
        for (var i = 1; i < numOfPages + 1; i++) {
            var pageItem = document.createElement('li');
            pageItem.textContent = i;
            // -1 for the correct pagination index
            pageItem.setAttribute('data-index', i - 1);
            pageItem.addEventListener('click', Pagination.fireCustomEvent);
            tablePagination.appendChild(pageItem);
        }
    },

    getPaginatedProducts: function (index) {
        index = parseInt(index, 10);
        var productsPerPage = parseInt(productsPerPageInput.value, 10);
        return DataManager.productsList.slice(index * productsPerPage, (index * productsPerPage) + productsPerPage);
    },

    updatePageSize: function (event) {
        if (event.target.value < 1) {
            event.target.value = 1;
        }
        generateTable(event);
        Pagination.createPaginationButtons();
    },

    fireCustomEvent: function (event) {
        var index = event.target.dataset.index;
        var customEvent = new CustomEvent('changePage', {detail: index});
        document.dispatchEvent(customEvent);
    },

    init: function() {
        productsPerPageInput.addEventListener('change', Pagination.updatePageSize);
        Pagination.createPaginationButtons();
    }
};