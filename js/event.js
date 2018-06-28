var EventUtil = {
    addHandlers: function (element, type, handler) {
        if (element,addEventListener){
            element.addEventListener(type, handler, false);
        } else {
            element["on" + type] = handler;
        }
    },

    removeHandlers: function(element, type, handler) {
        if (element,removeEventListener){
            element.removeEventListener(type, handler, false);
        } else {
            element["on" + type] = handler;
        }
    },

    getEvent: function (e) {
        return e?e:e.which;
    },

    getTarget: function (e) {
        return e.target || event.srcElement;
    },

    //阻止默认行为
    preventDefault: function (e) {
        if (e.preventDefault){
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    },

    //阻止冒泡
    stopPropagation: function (e) {
        if (e.stopPropagation){
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    }
};