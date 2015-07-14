//
//  ####  DATA MODEL  ############
//  # {                          #
//  #     someEvent: [           #
//  #         {                  #
//  #             id: someId,    #
//  #             cb: someCb     #
//  #         }                  #
//  #     ]                      #
//  # }                          #
//  ##############################
//

//  Event Types:

//  * addToCart
//  * removeFromCart


var EventManager = {

    eventStore: {},

    counter: 0,

    addEventType: function (type) {
        if (!this.eventStore[type]) {
            this.eventStore[type] = [];
        }
    },

    removeEventType: function (type) {
        if (this.eventStore[type]) {
            this.eventStore[type] = undefined;
        }
    },

    subscribe: function (evtType, cb) {
        if (this.eventStore[evtType]) {
            this.counter++;
            this.eventStore[evtType].push({
                id: this.counter,
                cb: cb
            });

            return this.counter;
        }
    },

    publish: function (evtType, payload) {
        payload = payload || null;
        if (this.eventStore[evtType]) {
            this.eventStore[evtType].forEach(function (value, index, array) {
                value.cb(payload);
            });
        }
    },

    unsubscribe: function (evtType, id) {
        this.eventStore[evtType].forEach(function (value, index, array) {
            if (value.id === id) {
                delete eventStore[evtType][index];
            }
        })
    }

};


