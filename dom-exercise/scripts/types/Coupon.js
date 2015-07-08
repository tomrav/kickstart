
function Coupon() {
    this.code = faker.hacker.abbreviation() + faker.finance.mask();
}