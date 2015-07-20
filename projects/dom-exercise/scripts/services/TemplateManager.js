define(['../helpers/HandlebarHelpers', '../views/compiledViews'], function (HandlebarHelpers, Templates) {
    return {

        applyContextToView: function (context, viewName) {
            return Templates[viewName](context);
        },

        init: function () {
            HandlebarHelpers();
        }
    }
});