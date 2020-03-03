function EventEmmiter() {
  this._events = Object.create(null);
}

function createInitialEvent() {
  const event = Object.create(null);
  event.handlers = [];
  return event;
}

function getEvent(_events, evtName) {
  return _events[evtName];
}

function addEvent(_events, evtName, fn, once) {
  const eventObj = _events[evtName] || createInitialEvent();
  const handlerObj = Object.create(null);
  handlerObj.fn = fn;
  handlerObj.once = once;
  eventObj.handlers.push(handlerObj);
  _events[evtName] = eventObj;
}

function clearEvents(_events) {
  for (let evtName in _events) {
    if (_events[evtName].handlers.length === 0) {
      delete _events[evtName];
    }
  }
}

EventEmmiter.prototype = Object.create(null);

EventEmmiter.prototype.on = function (evtName, fn) {
  if (typeof fn !== 'function') {
    throw new Error('fn is not function');
  }
  addEvent(this._events, evtName, fn, false);
  return this;
}

EventEmmiter.prototype.once = function (evtName, fn) {
  if (typeof fn !== 'function') {
    throw new Error('fn is not function');
  }
  addEvent(this._events, evtName, fn, true);
  return this;
}

EventEmmiter.prototype.emit = function (evtName, ...args) {
  const eventObj = getEvent(this._events, evtName);
  if (typeof eventObj !== 'object') {
    throw new Error(`no event: ${evtName}`);
  }
  eventObj.handlers.forEach(function (item, idx) {
    if (!item || typeof item.fn !== 'function') {
      return;
    }
    item.fn.apply(this, args);
    if (item.once) {
      eventObj.handlers[idx] = null;
    }
  });
  eventObj.handlers = eventObj.handlers.filter(Boolean);
  clearEvents(this._events);
  return this;
}

EventEmmiter.prototype.off = function (evtName, fn) {
  if (fn === undefined) {
    delete this._events[evtName];
    return;
  }
  if (typeof fn !== 'function') {
    throw new Error('fn is not a function');
  }
  const eventObj = getEvent(this._events, evtName);
  if (!eventObj) {
    throw new Error(`no event: ${evtName} found.`);
  }
  eventObj.handlers = eventObj.handlers.filter((item) => item.fn !== fn);
  clearEvents(this._events);
  return this;
}

EventEmmiter.prototype.addEventListener = EventEmmiter.prototype.on;
EventEmmiter.prototype.removeEventListener = EventEmmiter.prototype.off;


export default EventEmmiter;
