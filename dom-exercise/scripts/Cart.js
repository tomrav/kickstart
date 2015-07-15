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

    calculateTotal: function (items) {
        return '$' + items.reduce(function (previousValue, currentValue) {
            return previousValue + (currentValue.item.price * currentValue.quantity);
        }, 0)
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
        }.bind(this))
    },

    init: function () {
        EventManager.subscribe('sort-cart', Cart.sortCart);
        Cart.addToCartEvtId = EventManager.subscribe('addToCart', this.addItem.bind(this));
        Cart.removeFomCartEvtId = EventManager.subscribe('removeFromCart', this.removeAllOfItemId.bind(this));
        Cart.increaseQuantityEvtId = EventManager.subscribe('increaseButton', this.increaseItemQuantity.bind(this));
        Cart.decreaseQuantityEvtId = EventManager.subscribe('decreaseButton', this.decreaseItemQuantity.bind(this));
        Cart.drawCart();
    }
};

