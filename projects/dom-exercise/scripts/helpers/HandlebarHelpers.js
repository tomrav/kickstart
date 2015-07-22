define(['handlebars'], function (Handlebars) {
    'use strict';
    return function () {
        Handlebars.registerHelper('itemTotal',
            function (itemData) {
                var result;
                if (itemData.item.discountAmount) {
                    var discountedPrice = itemData.item.price - itemData.item.discountAmount;
                    var itemTotal = discountedPrice * itemData.quantity;
                    result = '<span>' + itemTotal + '</span>';
                } else {
                    result = itemData.item.price * itemData.quantity;
                }
                return new Handlebars.SafeString(result);
            });

        Handlebars.registerHelper('itemAfterDiscount',
            function (itemData) {
                return new Handlebars.SafeString(itemData.item.price - itemData.item.discountAmount);
            });

        Handlebars.registerHelper('checkDiscount',
            function (itemData) {
                var result = '';
                if (itemData.discountAmount) {
                    var discountedPrice = itemData.price - itemData.discountAmount;
                    result = '<span class="full-price">' + itemData.currency + itemData.price +
                        '</span><br><span class="discount-price">' + itemData.currency + discountedPrice + '</span>';
                } else {
                    result = itemData.currency + itemData.price;
                }
                return new Handlebars.SafeString(result);
            });

        Handlebars.registerHelper('log', function (something) {
            console.log(something);
        });
    };
});