var TemplateManager = {

    partialsList: ['shopRow', 'cartRow', 'shopHeaderRow', 'cartHeaderRow'],

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
        if (Object.keys(this.compiledViews).length === this.viewList.length) {
            EventManager.publish('templatesLoaded');
        }
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

    addHelpers: function () {
        Handlebars.registerHelper('itemTotal',
            function (itemData) {
                var result;
                if (itemData.item.discountAmount) {
                    var discountedPrice = itemData.item.price - itemData.item.discountAmount;
                    var itemTotal = discountedPrice * itemData.quantity;
                    result = '<span>' + itemData.item.currency + itemTotal + '</span>';
                } else {
                    result = itemData.item.price * itemData.quantity;
                }
                return new Handlebars.SafeString(result);
            });
        Handlebars.registerHelper('itemAfterDiscount',
            function (itemData) {
                return new Handlebars.SafeString(itemData.item.price - itemData.item.discountAmount);
            });
        Handlebars.registerHelper('cartTotal',
            function (cartData) {
                var result = Cart.calculateTotal(cartData.items);
                return new Handlebars.SafeString(result);
            });
        Handlebars.registerHelper('checkDiscount',
            function (itemData) {
                var result = '';
                if (itemData.discountAmount) {
                    discountedPrice = itemData.price - itemData.discountAmount;
                    result = '<span class="full-price">' + itemData.currency + itemData.price +
                        '</span><br><span class="discount-price">' + itemData.currency + discountedPrice + '</span>'
                } else {
                    result = itemData.price;
                }
                return new Handlebars.SafeString(result);
            });

        Handlebars.registerHelper("log", function (something) {
            console.log(something);
        });
    },

    applyContextToView: function (context, viewName) {
        return this.compiledViews[viewName](context);
    },

    initViewLoading: function () {
        this.viewList.forEach(function (value) {
            this.getView(value)
        }.bind(this));
    },

    init: function () {
        this.addHelpers();
        this.partialsList.forEach(function (value) {
            this.getPartial(value);
        }.bind(this));
    }
};