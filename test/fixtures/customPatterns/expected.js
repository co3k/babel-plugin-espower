'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { return { powerAssertContext: { value: value, events: this.captured }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder(),
    _rec6 = new _powerAssertRecorder(),
    _rec7 = new _powerAssertRecorder(),
    _rec8 = new _powerAssertRecorder(),
    _rec9 = new _powerAssertRecorder(),
    _rec10 = new _powerAssertRecorder(),
    _rec11 = new _powerAssertRecorder(),
    _rec12 = new _powerAssertRecorder();

assert.isNull(_rec._expr(_rec._capt(falsy, 'arguments/0'), {
  content: 'assert.isNull(falsy)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 3
}));

assert.isNull(_rec2._expr(_rec2._capt(falsy, 'arguments/0'), {
  content: 'assert.isNull(falsy, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 5
}), message);

assert.same(_rec3._expr(_rec3._capt(foo, 'arguments/0'), {
  content: 'assert.same(foo, bar)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 7
}), _rec4._expr(_rec4._capt(bar, 'arguments/1'), {
  content: 'assert.same(foo, bar)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 7
}));

assert.same(_rec5._expr(_rec5._capt(foo, 'arguments/0'), {
  content: 'assert.same(foo, bar, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 9
}), _rec6._expr(_rec6._capt(bar, 'arguments/1'), {
  content: 'assert.same(foo, bar, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 9
}), message);

assert.near(actualVal, expectedVal);

assert.near(_rec7._expr(_rec7._capt(actualVal, 'arguments/0'), {
  content: 'assert.near(actualVal, expectedVal, delta)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 13
}), _rec8._expr(_rec8._capt(expectedVal, 'arguments/1'), {
  content: 'assert.near(actualVal, expectedVal, delta)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 13
}), _rec9._expr(_rec9._capt(delta, 'arguments/2'), {
  content: 'assert.near(actualVal, expectedVal, delta)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 13
}));

assert.near(_rec10._expr(_rec10._capt(actualVal, 'arguments/0'), {
  content: 'assert.near(actualVal, expectedVal, delta, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 15
}), _rec11._expr(_rec11._capt(expectedVal, 'arguments/1'), {
  content: 'assert.near(actualVal, expectedVal, delta, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 15
}), _rec12._expr(_rec12._capt(delta, 'arguments/2'), {
  content: 'assert.near(actualVal, expectedVal, delta, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 15
}), message);
