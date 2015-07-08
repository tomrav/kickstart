// Cart Content
// id - quantity


var Cart = {

    addToCartEvtId: 0,

    cartElement: undefined,

    cartContent: {},

    add: function (itemId) {
        if (this.cartContent[itemId]) {
            this.cartContent[itemId]++;
            this.update();
        }

        //console.log(item);
        //var cartItem = document.createElement('div');
        //for (key in item) {
        //    var cartCell = document.createElement('div');
        //    DomHelper.addClasses(cartCell, 'cell');
        //    switch (key) {
        //        case 'image':
        //            var img = createImage(item['image']);
        //            cartCell.appendChild(img);
        //            break;
        //        case 'addToCart':
        //            var button = createButton('Add to Cart', item);
        //            cartCell.appendChild(button);
        //            break;
        //        default:
        //            cartCell.textContent = item[key];
        //    }
        //    DomHelper.addClasses(cartItem, 'table-row');
        //    cartItem.appendChild(cartCell);
        //}
        //this.cartElement.appendChild(cartItem);
    },

    remove: function (itemId) {
        if (this.cartContent[itemId]) {
            this.cartContent[itemId]--;
            this.update();
        }
    },

    update: function () {
        // TODO: call for a re-render of the cart table with new content.
        // TODO: re-calc sum total.
    },

    sort: function() {
    },

    init: function () {
        EventManager.addEventType('addToCart');
        EventManager.addEventType('sort-cart');
        EventManager.subscribe('sort-cart', Cart.sort);
        Cart.addToCartEvtId = EventManager.subscribe('addToCart', this.add.bind(this));
        Cart.cartElement = document.querySelector('.cart');
        Cart.cartElement = Painter.createTable([], CartHeaders, 'cart');
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