define(['handlebars'], function(Handlebars) {

this["Templates"] = this["Templates"] || {};

Handlebars.registerPartial("cartHeaderRow", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class="
    + alias3(((helper = (helper = helpers.rowStyle || (depth0 != null ? depth0.rowStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rowStyle","hash":{},"data":data}) : helper)))
    + ">\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1.img : stack1), depth0))
    + "\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1.description : stack1), depth0))
    + "\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1.quantity : stack1), depth0))
    + "\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1.price : stack1), depth0))
    + "\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1.removeFromCart : stack1), depth0))
    + "\n    </div>\n</div>";
},"useData":true}));

Handlebars.registerPartial("cartRow", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression;

  return "                "
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.currency : stack1), depth0))
    + alias1((helpers.itemAfterDiscount || (depth0 && depth0.itemAfterDiscount) || helpers.helperMissing).call(depth0,depth0,{"name":"itemAfterDiscount","hash":{},"data":data}))
    + "\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "                "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.currency : stack1), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.price : stack1), depth0))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class=\""
    + alias3(((helper = (helper = helpers.rowStyle || (depth0 != null ? depth0.rowStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rowStyle","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n    </div>\n    <div class=\"thumbnail-container "
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        <img src=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.image : stack1), depth0))
    + "\" class=\"thumbnail-image\"/>\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.description : stack1), depth0))
    + "\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        <button name=\"increaseButton\" class=\"addToCartButton increase-quantity\">+</button>\n        "
    + alias3(alias4((depth0 != null ? depth0.quantity : depth0), depth0))
    + "\n        <button name=\"decreaseButton\" class=\"addToCartButton decrease-quantity\">-</button>\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + " price-container\">\n        <p>\n            Item price:\n        </p>\n        <span>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.discountAmount : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        </span>\n        <p>\n            Total Price:\n        </p>\n        <span>\n            "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.currency : stack1), depth0))
    + alias3((helpers.itemTotal || (depth0 && depth0.itemTotal) || alias1).call(depth0,depth0,{"name":"itemTotal","hash":{},"data":data}))
    + "\n        </span>\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        <button name=\"removeFromCart\" class=\"addToCartButton removeFromCart\">\n            Remove from Cart\n        </button>\n    </div>\n</div>";
},"useData":true}));

Handlebars.registerPartial("shopHeaderRow", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class="
    + alias3(((helper = (helper = helpers.rowStyle || (depth0 != null ? depth0.rowStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rowStyle","hash":{},"data":data}) : helper)))
    + ">\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.sortIcon || (depth0 != null ? depth0.sortIcon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sortIcon","hash":{},"data":data}) : helper)))
    + "\" id=\"shopHeaderName\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1.img : stack1), depth0))
    + "\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.sortIcon || (depth0 != null ? depth0.sortIcon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sortIcon","hash":{},"data":data}) : helper)))
    + "\" id=\"shopHeaderDescription\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1.description : stack1), depth0))
    + "\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.sortIcon || (depth0 != null ? depth0.sortIcon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sortIcon","hash":{},"data":data}) : helper)))
    + "\" id=\"shopHeaderLimit\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1.limit : stack1), depth0))
    + "\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.sortIcon || (depth0 != null ? depth0.sortIcon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sortIcon","hash":{},"data":data}) : helper)))
    + "\" id=\"shopHeaderPrice\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1.currency : stack1), depth0))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1.price : stack1), depth0))
    + "\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1.addToCartButton : stack1), depth0))
    + "\n    </div>\n</div>";
},"useData":true}));

Handlebars.registerPartial("shopRow", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class=\""
    + alias3(((helper = (helper = helpers.rowStyle || (depth0 != null ? depth0.rowStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rowStyle","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n    </div>\n    <img src=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.image : stack1), depth0))
    + "\" class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + " thumbnail-image\"/>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.description : stack1), depth0))
    + "\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.limit : stack1), depth0))
    + "\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias3((helpers.checkDiscount || (depth0 && depth0.checkDiscount) || alias1).call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"checkDiscount","hash":{},"data":data}))
    + "\n    </div>\n    <div class=\""
    + alias3(((helper = (helper = helpers.cellStyle || (depth0 != null ? depth0.cellStyle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cellStyle","hash":{},"data":data}) : helper)))
    + "\">\n        <button class=\"addToCartButton\">\n            Add to Cart\n        </button>\n    </div>\n</div>";
},"useData":true}));

this["Templates"]["cart"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.cartRow,depth0,{"name":"cartRow","hash":{"cellStyle":"cell","rowStyle":"table-row"},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h2>à la carte</h2>\n<div class=\"table-container\" id=\"cart\">\n"
    + ((stack1 = this.invokePartial(partials.cartHeaderRow,depth0,{"name":"cartHeaderRow","hash":{"sortIcon":"sort-icon","cellStyle":"cell","rowStyle":"table-header","data":depth0},"data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<div class=\"clearfix cart-total\" id=\"cartTotal\">\n    <div class=\"right\">\n        <strong>Total:</strong>\n        <span>\n            $"
    + this.escapeExpression((helpers.cartTotal || (depth0 && depth0.cartTotal) || helpers.helperMissing).call(depth0,depth0,{"name":"cartTotal","hash":{},"data":data}))
    + "\n        </span>\n    </div>\n    <div class=\"coupon-container\">\n        <label for=\"couponInput\">\n            Apply Coupon:\n            <input class=\"coupon-input\" type=\"text\" id=\"couponInput\" placeholder=\"enter coupon code here\"/>\n        </label>\n        <button class=\"addToCartButton\" id=\"submitCoupon\">\n            Submit!\n        </button>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Templates"]["pagination"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "            <li id=\""
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n                "
    + alias1(this.lambda(depth0, depth0))
    + "\n            </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "\n<div class=\"positionPaging\" id=\"shopPagination\">\n    <label for=\"itemsPerPage\">\n        Items per Page:\n        <input type=\"number\" id=\"itemsPerPage\" min=\"0\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.productsPerPage || (depth0 != null ? depth0.productsPerPage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"productsPerPage","hash":{},"data":data}) : helper)))
    + "\"/>\n    </label>\n    <ul id=\"shopPagination\" class=\"table-pagination\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pagesButtonArray : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>";
},"useData":true});

this["Templates"]["shop"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.shopRow,depth0,{"name":"shopRow","hash":{"cellStyle":"cell","rowStyle":"table-row","data":depth0},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"table-container\" id=\"shop\">\n"
    + ((stack1 = this.invokePartial(partials.shopHeaderRow,depth0,{"name":"shopHeaderRow","hash":{"sortIcon":"sort-icon","cellStyle":"cell","rowStyle":"table-header","data":depth0},"data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

return this["Templates"];

});