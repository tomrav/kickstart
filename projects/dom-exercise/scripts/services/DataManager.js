var DataManager = {

    productsList: [],

    productsMap: {},

    cart: window.Cart,

    getCartContent: function () {
        return Object.keys(this.cart.cartContent).map(function (value) {
            return {
                item: this.productsMap[value],
                quantity: this.cart.cartContent[value]
            };
        }.bind(this))
    },

    sortItems: function (currentSortParam, newSortParam) {
        function comperator (a, b) {
            if (a[newSortParam] > b[newSortParam]) {
                return 1;
            }
            if (a[newSortParam] < b[newSortParam]) {
                return -1;
            }
            return 0;
        };
        if (newSortParam === currentSortParam) {
            this.productsList.sort(function (a, b) {
                return 0 - comperator(a, b);
            });
            currentSortParam = '';
        } else {
            this.productsList.sort(comperator);
            currentSortParam = newSortParam;
        }
        return currentSortParam;
    },

    getItem: function (id) {
        return this.productsMap[id];
    },

    init: function (count) {
        for (var i = 0; i < count; i++) {
            var id = faker.random.uuid(),
                image = faker.image.avatar(),
                name = faker.name.findName(),
                description = faker.lorem.sentence(),
                limit = faker.random.number({min: 1, max: 10}),
                price = faker.helpers.randomNumber(100),
                currency = '$';

            var obj = new Item(id, image, name, description, limit, price, currency);
            if (i % 5 === 0) {
                obj = Object.create(obj);
                obj.discountAmount = faker.random.number({min: 1, max: 5});
            }
            this.productsList.push(obj);
            this.productsMap[id] = obj;
        }
    }
};