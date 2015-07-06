
var DataGenerator = {

    generateItems: function(count) {
        var items = [];
        for (var i = 0; i < count; i++) {
            var obj = new Item();
            items.push(obj);
        }
        return items;
    }
};