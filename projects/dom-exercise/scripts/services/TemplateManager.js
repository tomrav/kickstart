define(['../helpers/HandlebarHelpers', '../views/compiledViews'], function (handlebarHelpers, Templates) {
    'use strict';
    return {

        applyContextToView: function (context, viewName) {
            return Templates[viewName](context);
        },

        init: function () {
            handlebarHelpers();
        }
    };
});