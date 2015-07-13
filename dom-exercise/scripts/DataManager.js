
var DataManager = {

    productsList: [],

    productsMap: {},

    init: function(count) {
        for (var i = 0; i < count; i++) {
            var id = faker.random.uuid(),
                image = faker.image.avatar(),
                name = faker.name.findName(),
                description = faker.lorem.sentence(),
                limit = faker.random.number({min: 1, max: 10}),
                price = faker.helpers.randomNumber(100),
                currency = '$';

            var obj = new Item(id, image, name, description, limit, price, currency);
            this.productsList.push(obj);
            this.productsMap[id] = obj;
        }
    }
};