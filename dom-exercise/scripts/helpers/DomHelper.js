var DomHelper = {

    createElement: function (tagName) {
        return document.createElement(tagName);
    },

    addClasses: function (element, items) {
        // first case for single class, second for array of classes
        if (typeof items === 'string') {
            element.classList.add(items);
        } else if (Object.prototype.toString.call(items) === '[object Array]') {
            classList.forEach(function (value, index, array) {
                element.classList.add(value);
            })
        }
    }
};