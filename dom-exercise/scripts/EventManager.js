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

var EventManager = {

    eventStore: {},

    counter: 0,

    addEventType: function(type) {
        if (!this.eventStore.type) {
            this.eventStore.type = [];
            return 'event type created';
        } else {
            return 'event type already exists';
        }

    },

    removeEventType: function(type) {
        if (this.eventStore.type) {
            this.eventStore.type = undefined;
        } else {
            return 'event type does not exist';
        }
    },

    subscribe: function (evtType, cb) {

        this.eventStore.evtType = evtType;
        this.counter++;
        this.eventStore.evtType.push({
            id: this.counter,
            cb: cb
        });

        return this.counter;
    },

    publish: function (evtType, payload) {

        if (this.eventStore.evtType) {
            this.eventStore.evtType.forEach(function (value, index, array) {
                value.cb(payload);
            })
        } else {
            console.log('No one registered to event name: ' + evtType);
        }
    },

    unsubscribe: function (evtType, id) {

        this.eventStore.evtType.forEach(function (value, index, array) {
            if (value.id === id) {
                eventStore.evtType[index].remove();
            }
        })

    }

};


