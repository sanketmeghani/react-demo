import EventDispatcher from '../dispatchers/event-dispatcher';
import { EventEmitter } from 'events';
import _ from 'lodash';

var CHANGE_EVENT = 'change';

var ParameterStore = _.assign({}, EventEmitter.prototype, {

    parameters: [],

    handleEvent: function(event) {

        console.log("Received event", JSON.stringify(event));

        switch (event.type) {

            case 'get-all':

                console.log("Handling get-all!");
                ParameterStore.notifyListeners();
                break;

            case 'add':

                console.log("Handling add");
                ParameterStore.notifyListeners();
                break;
        }
    },

    notifyListeners: function() {
        console.log("Emitting change event");
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callbackFunction) {
        this.on(CHANGE_EVENT, callbackFunction);
    },

    removeChangeListener: function(callbackFunction) {
        this.removeListener(CHANGE_EVENT, callbackFunction);
    }
});

EventDispatcher.register(ParameterStore.handleEvent);

module.exports = ParameterStore;
