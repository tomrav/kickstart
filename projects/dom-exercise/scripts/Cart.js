// Cart Content
//  id : quantity
//


var Cart = {

    cartHeaders: {
        name: 'Name',
        img: 'Image',
        description: 'Description',
        quantity: 'Quantity',
        price: 'Price',
        removeFromCart: 'Remove from Cart'
    },

    addToCartEvtId: 0,
    cartContent: {},
    activeCoupons: {},
    cartTotal: 0,

    addItem: function (item) {
        var itemId = item.id;
        if (this.cartContent[itemId]) {
            this.cartContent[itemId]++;
        } else {
            this.cartContent[itemId] = 1;
        }
        this.updateCart();
    },

    removeItem: function (itemId, all) {
        var itemInCart = this.cartContent[itemId];
        if (itemInCart && itemInCart > 1) {
            if (all) {
                delete this.cartContent[itemId];
            } else {
                this.cartContent[itemId]--;
            }
        } else {
            delete this.cartContent[itemId];
        }
        this.updateCart();
    },

    updateCart: function () {
        this.drawCart();
    },

    calculateCouponValue: function (coupon) {
        var lowestPrice = 0;
        var discount = 0;
        if (coupon.type === 'itemOff') {
            for (var key in this.cartContent) {
                var price = DataManager.getItem(key).price;
                if ( lowestPrice === 0 || price < lowestPrice) {
                    lowestPrice = price;
                }
            }
        }
        if (coupon.type === 'percentOff') {
            discount = this.cartTotal * (coupon.amount / 100);
        }


        return lowestPrice + discount;
    },

    calculateActiveCoupons: function () {
        var discount = 0;
        for (var code in this.activeCoupons) {
            if (this.activeCoupons.hasOwnProperty(code)) {
                discount += this.calculateCouponValue(this.activeCoupons[code]);
            }
        }
        return discount;
    },

    calculateTotal: function (items) {
        var discount = this.calculateActiveCoupons() || 0;
        this.cartTotal = items.reduce(function (previousValue, currentValue) {
            if (currentValue.item.discountAmount) {
                return previousValue + ((currentValue.item.price - currentValue.item.discountAmount) * currentValue.quantity);
            } else {
                return previousValue + (currentValue.item.price * currentValue.quantity)
            }
        }, 0);
        var totalWithDiscount = this.cartTotal - discount;
        return (totalWithDiscount < 0) ? 0 : totalWithDiscount ;
    },

    applyCoupon: function (couponCode) {
        if (Coupon.validateCoupon(couponCode)) {
            if (!this.activeCoupons[couponCode]) {
                var coupon = Coupon.getCouponValue(couponCode);
                this.activeCoupons[couponCode] = coupon;
                this.updateCart();
            }
        }
    },

    drawCart: function () {
        var cartElement = document.querySelector('#cart-container');
        cartElement.innerHTML = '';
        var computedCartContent = DataManager.getCartContent();
        cartElement.innerHTML = Painter.createTable(computedCartContent, 'cart', this.cartHeaders);
        var cartRows = document.querySelectorAll('#cart-container .table-row');
        var cartRowsArray = Array.prototype.slice.call(cartRows, 0);
        this.wireCartButtonEvents(cartRowsArray);
    },

    cartEventProxy: function (event) {
        event = event || window.event;
        var eventName = event.target.name;
        itemId = event.target.parentElement.parentElement.id;
        EventManager.publish(eventName, itemId);
    },

    increaseItemQuantity: function (itemId) {
        var item = DataManager.getItem(itemId);
        this.addItem(item);
    },

    decreaseItemQuantity: function (itemId) {
        var item = this.removeItem(itemId);
        this.removeItem(item);
    },

    removeAllOfItemId: function (itemId) {
        this.removeItem(itemId, true);
    },

    wireCartButtonEvents: function (cartRowsArray) {
        cartRowsArray.forEach(function (value) {
            var increaseButton = value.querySelector('.increase-quantity');
            increaseButton.addEventListener('click', this.cartEventProxy);
            var decreaseButton = value.querySelector('.decrease-quantity');
            decreaseButton.addEventListener('click', this.cartEventProxy);
            var removeButton = value.querySelector('.removeFromCart');
            removeButton.addEventListener('click', this.cartEventProxy);
        }.bind(this));
        var submitCoupon = document.querySelector('#submitCoupon');
        submitCoupon.addEventListener('click', this.submitCouponEventProxy);
    },

    submitCouponEventProxy: function (event) {
        event = event || window.event;
        code = document.querySelector('#couponInput').value;
        EventManager.publish('submitCoupon', code);
    },

    init: function () {
        EventManager.subscribe('sort-cart', Cart.sortCart);
        Cart.addToCartEvtId = EventManager.subscribe('addToCart', this.addItem.bind(this));
        Cart.removeFomCartEvtId = EventManager.subscribe('removeFromCart', this.removeAllOfItemId.bind(this));
        Cart.increaseQuantityEvtId = EventManager.subscribe('increaseButton', this.increaseItemQuantity.bind(this));
        Cart.decreaseQuantityEvtId = EventManager.subscribe('decreaseButton', this.decreaseItemQuantity.bind(this));
        Cart.submitCouponEvtId = EventManager.subscribe('submitCoupon', this.applyCoupon.bind(this));
        Cart.drawCart();
    }
};

