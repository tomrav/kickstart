var TemplateManager = {

    applyContextToView: function (context, viewName) {
        return Templates[viewName](context);
    },

    init: function () {
        HandlebarHelpers();
        EventManager.publish('templatesLoaded');
    }
};