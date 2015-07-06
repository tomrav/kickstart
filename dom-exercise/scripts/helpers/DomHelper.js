var DomHelper = {

    addClasses: function (element, classes) {
        // first case for single class, second for array of classes
        if (typeof classes === 'string') {
            element.classList.add(classes);
        } else if (Array.isArray(classes)) {
            classes.forEach(function (value) {
                element.classList.add(value);
            })
        }
    },

    insertAfter: function (newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    },

    removeElement: function (referenceNode) {
        referenceNode.parentElement.removeChild(referenceNode);
    }
};