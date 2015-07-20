define([], function () {
    return {
        addClasses: function (element, classes) {
            // first case for single class, second for array of classes
            if (typeof classes === 'string') {
                element.classList.add(classes);
            } else if (Array.isArray(classes)) {
                classes.forEach(function (value) {
                    element.classList.add(value);
                });
            }
        },

        removeClasses: function (element, classes) {
            if (typeof classes === 'string') {
                element.classList.remove(classes);
            } else if (Array.isArray(classes)) {
                classes.forEach(function (value) {
                    element.classList.remove(value);
                });
            }
        },

        insertAfter: function (newNode, referenceNode) {
            referenceNode && referenceNode.parentNode && referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        },

        removeElement: function (referenceNode) {
            referenceNode && referenceNode.parentElement && referenceNode.parentElement.removeChild(referenceNode);
        }
    }
});
