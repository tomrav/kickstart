define([], function () {
    return {
        generateCoupon: function CouponItem(type, amount) {
            this.code = faker.hacker.abbreviation() + faker.finance.mask();
            this.type = type;
            this.amount = amount;
        },
        mockCoupons: [
            {
                code: 'THX4489',
                type: 'itemOff',
                amount: 1
            },
            {
                code: 'XSS8309',
                type: 'itemOff',
                amount: 1
            },
            {
                code: 'GB0009',
                type: 'percentOff',
                amount: 20
            }
        ],
        couponList: {},

        registerCoupon: function (couponObj) {
            if (couponObj instanceof CouponItem) {
                this.addCouponToList(couponObj);
            }
        },

        listCoupons: function () {
            console.log(this.couponList);
        },

        getCouponValue: function (couponCode) {
            return this.couponList[couponCode];
        },

        addCouponToList: function (couponObj) {
            this.couponList[couponObj.code] = couponObj;
        },

        validateCoupon: function (couponCode) {
            return Boolean(this.couponList[couponCode]);
        },

        init: function () {
            this.mockCoupons.forEach(function (value) {
                this.addCouponToList(value);
            }.bind(this))
        }
    }
});

