var TemplateManager = {

    partialsList: ['shopRow', 'cartRow', 'shopHeaderRow', 'cartHeaderRow', 'textCell', 'imgCell', 'addToCartCell', 'cartQuantityCell'],

    viewList: ['shop', 'pagination', 'cart'],

    compiledViews: {},

    ajax: function (method, url, cb, name) {
        var client = new XMLHttpRequest();
        client.open(method, url);
        client.onreadystatechange = function () {
            if (client.readyState === 4) {
                cb(name, client.responseText);
            }
        };
        client.send();
    },

    getView: function (name) {
        var url = './scripts/views/' + name + '.hbs';
        this.ajax('GET', url, this.compileView.bind(this), name);
    },

    compileView: function (name, template) {
        this.compiledViews[name] = Handlebars.compile(template);
        //TODO: fire event signaling loading of view successful
    },

    getPartial: function (name) {
        var url = './scripts/views/partials/' + name + '.hbs';
        this.ajax('GET', url, this.loadPartial.bind(this), name);
    },

    loadPartial: function (name, res) {
        Handlebars.registerPartial(name, res);
        var numOfPartials = Object.keys(Handlebars.partials).length;
        if (numOfPartials === this.partialsList.length) {
            this.initViewLoading();
        }
    },

    initViewLoading: function () {
        this.viewList.forEach(function (value) {
            this.getView(value)
        }.bind(this));
    },

    init: function () {
        this.partialsList.forEach(function (value) {
            this.getPartial(value);
        }.bind(this));
    }
};