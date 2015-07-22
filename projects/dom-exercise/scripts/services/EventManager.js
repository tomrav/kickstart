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


define([''], function () {
    'use strict';
    return {

        eventStore: {},

        counter: 0,

        removeEventType: function (type) {
            if (this.eventStore[type]) {
                this.eventStore[type] = undefined;
            }
        },

        subscribe: function (evtType, cb) {
            this.eventStore[evtType] = this.eventStore[evtType] || [];

            this.counter++;
            this.eventStore[evtType].push({
                id: this.counter,
                cb: cb
            });

            return this.counter;
        },

        publish: function (evtType, payload) {
            payload = payload || null;
            if (this.eventStore[evtType]) {
                this.eventStore[evtType].forEach(function (value) {
                    value.cb(payload);
                });
            }
        },

        unsubscribe: function (evtType, id) {
            this.eventStore[evtType].forEach(function (value, index) {
                if (value.id === id) {
                    delete this.eventStore[evtType][index];
                }
            }.bind(this));
        }
    };
});

