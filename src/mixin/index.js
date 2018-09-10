let eventMixin = {
  on(eventName, handler) {
    if (!this._eventhandlers) this._eventhandlers = {};
    if (!this._eventhandlers[eventName]) {
      this._eventhandlers[eventName] = [];
    }
    this._eventhandlers[eventName].push(handler);
  },

  off(eventName, handler) {
    let handlers = this._eventhandlers && this._eventhandlers[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },
  trigger(eventName, ...args) {
    if (!this._eventhandlers || !this._eventhandlers[eventName]) {
      return;
    }
    this._eventhandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};

class Menu {
  choose(value) {
    this.trigger('select', value);
  }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();
menu.on('select', value => console.log(`Value selected: ${value}`));

menu.choose('123')