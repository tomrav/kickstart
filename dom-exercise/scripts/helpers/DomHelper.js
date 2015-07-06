var DomHelper = {

    addClasses: function (element, classes) {
        // first case for single class, second for array of classes
        if (typeof classes === 'string') {
            element.classList.add(classes);
        } else if (Array.isArray(classes)) {
            classList.forEach(function (value, index, array) {
                element.classList.add(value);
            })
        }
    },

    insertAfter: function (newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
};