
var DataGenerator = {

    generateItems: function(count) {
        var items = [];
        for (var i = 0; i < count; i++) {
            var obj = {};
            obj.id = faker.random.uuid();
            obj.limit = faker.random.number({min: 1, max: 20});
            obj.name = faker.name.findName();
            obj.image = faker.image.avatar();
            obj.description = faker.lorem.sentence();
            obj.price = faker.helpers.randomNumber(100);
            items.push(obj);
        }

        return items;
    }

};