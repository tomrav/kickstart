
function Item(id, image, name, description, limit, price, currency) {

    this.id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.limit = limit;
    this.price = price;
    this.currency = currency;

}

function ExtendedItem() {
    this.props = {
    }
}

ExtendedItem.prototype = new Item();
ExtendedItem.prototype.constructor = ExtendedItem;

ItemHeaders = {
    id : 'ID',
    img : 'Image',
    name : 'Name',
    description : 'Description',
    limit : 'Limit',
    price : 'Price',
    addToCartButton : 'Add to Cart'
};