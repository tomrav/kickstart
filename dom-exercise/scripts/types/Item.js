
function Item() {

    this.id = faker.random.uuid();
    this.image = faker.image.avatar();
    this.name = faker.name.findName();
    this.description = faker.lorem.sentence();
    this.limit = faker.random.number({min: 1, max: 10});
    this.price = faker.helpers.randomNumber(100);
    
}

ItemHeaders = {
    id : 'ID',
    img : 'Image',
    name : 'Name',
    description : 'Description',
    limit : 'Limit',
    price : 'Price',
    addToCartButton : 'Add to Cart'
};