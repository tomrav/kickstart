define(['../services/TemplateManager'], function (TemplateManager) {
    'use strict';
    return {

        createTable: function (products, tableType, headers) {
            var tableData = {
                items: products,
                headers: headers
            };

            return TemplateManager.applyContextToView(tableData, tableType);
        },

        createPagination: function (numOfPagesArray) {

            return TemplateManager.applyContextToView(numOfPagesArray, 'pagination');
        }
    };
});

