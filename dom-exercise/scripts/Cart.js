// Cart Content
//  id:
//      item: item
//      quantity: num


var Cart = {

    addToCartEvtId: 0,

    cartElement: undefined,

    cartContent: {},

    addItem: function (item) {
        itemId = item.id;
        var itemInCart = this.cartContent[itemId];
        if (itemInCart) {
            itemInCart.quantity++;
            this.updateCart();
        } else {
            this.cartContent[itemId] = {};
            this.cartContent[itemId].quantity = 1;
            this.cartContent[itemId].data = item;
        }

        return itemInCart;
    },

    removeItem: function (itemId) {
        var itemInCart = this.cartContent[itemId];
        if (itemInCart.quantity > 1) {
            itemInCart.quantity--;
            this.updateCart();
        } else {
            delete itemInCart;
        }
        this.updateCart();
        return itemInCart;
    },

    updateCart: function () {
        // TODO: call for a re-render of the cart table with new content.
        // TODO: re-calc sum total.
    },

    sortCart: function() {
    },

    init: function () {
        EventManager.addEventType('addToCart');
        EventManager.addEventType('sort-cart');
        EventManager.subscribe('sort-cart', Cart.sortCart);
        Cart.addToCartEvtId = EventManager.subscribe('addToCart', this.addItem.bind(this));
        Cart.cartElement = document.querySelector('.cart');
        Cart.cartElement = Painter.createTable(this.cartContent, CartHeaders, 'cart');
        DomHelper.insertAfter(Cart.cartElement, document.getElementById('cart-title'));
    }
};

var CartHeaders = {
    id: 'ID',
    name: 'Name',
    img: 'Image',
    note: 'Note',
    quantity: 'Quantity',
    price: 'Price'
};