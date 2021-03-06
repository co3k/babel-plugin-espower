'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType"],"ClassBody":["body"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"ClassProperty":["key","value","typeAnnotation","decorators"],"DeclareClass":["id","typeParameters","extends","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","body"],"DeclareModule":["id","body"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareVariable":["id"],"ExistentialTypeParam":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumericLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameter":["bound"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"ObjectTypeAnnotation":["properties","indexers","callProperties"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value"],"ObjectTypeProperty":["key","value"],"QualifiedTypeIdentifier":["id","qualification"],"UnionTypeAnnotation":["types"],"VoidTypeAnnotation":[],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"Noop":[],"ParenthesizedExpression":["expression"],"AwaitExpression":["argument"],"BindExpression":["object","callee"],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"ExportNamespaceSpecifier":["exported"],"RestProperty":["argument"],"SpreadProperty":["argument"]}',
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { return { powerAssertContext: { value: value, events: this.captured }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder(),
    _rec6 = new _powerAssertRecorder(),
    _rec7 = new _powerAssertRecorder(),
    _rec6$_capt,
    _rec6$_capt2,
    _rec7$_capt,
    _rec7$_capt2;

assert(_rec._expr(_rec._capt(counter += 1, 'arguments/0'), {
  content: 'assert(counter += 1)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 3,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"AssignmentExpression","operator":"+=","left":{"type":"Identifier","name":"counter","range":[7,14]},"right":{"type":"NumericLiteral","value":1,"range":[18,19]},"range":[7,19]}],"range":[0,20]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"counter","range":[7,14]},{"type":{"label":"_="},"value":"+=","range":[15,17]},{"type":{"label":"num"},"value":1,"range":[18,19]},{"type":{"label":")"},"range":[19,20]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec2._expr(_rec2._capt(dog.age += 1, 'arguments/0'), {
  content: 'assert(dog.age += 1)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 5,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"AssignmentExpression","operator":"+=","left":{"type":"MemberExpression","object":{"type":"Identifier","name":"dog","range":[7,10]},"property":{"type":"Identifier","name":"age","range":[11,14]},"computed":false,"range":[7,14]},"right":{"type":"NumericLiteral","value":1,"range":[18,19]},"range":[7,19]}],"range":[0,20]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"dog","range":[7,10]},{"type":{"label":"."},"range":[10,11]},{"type":{"label":"name"},"value":"age","range":[11,14]},{"type":{"label":"_="},"value":"+=","range":[15,17]},{"type":{"label":"num"},"value":1,"range":[18,19]},{"type":{"label":")"},"range":[19,20]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec3._expr(_rec3._capt(dog.age += 1, 'arguments/0'), {
  content: 'assert(dog.age += 1)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 7,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"AssignmentExpression","operator":"+=","left":{"type":"MemberExpression","object":{"type":"Identifier","name":"dog","range":[7,10]},"property":{"type":"Identifier","name":"age","range":[11,14]},"computed":false,"range":[7,14]},"right":{"type":"NumericLiteral","value":1,"range":[18,19]},"range":[7,19]}],"range":[0,20]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"dog","range":[7,10]},{"type":{"label":"."},"range":[10,11]},{"type":{"label":"name"},"value":"age","range":[11,14]},{"type":{"label":"_="},"value":"+=","range":[15,17]},{"type":{"label":"num"},"value":1,"range":[18,19]},{"type":{"label":")"},"range":[19,20]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.strictEqual(_rec4._expr(_rec4._capt(dog.age += 1, 'arguments/0'), {
  content: 'assert.strictEqual(dog.age += 1, three)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"strictEqual","range":[7,18]},"computed":false,"range":[0,18]},"arguments":[{"type":"AssignmentExpression","operator":"+=","left":{"type":"MemberExpression","object":{"type":"Identifier","name":"dog","range":[19,22]},"property":{"type":"Identifier","name":"age","range":[23,26]},"computed":false,"range":[19,26]},"right":{"type":"NumericLiteral","value":1,"range":[30,31]},"range":[19,31]},{"type":"Identifier","name":"three","range":[33,38]}],"range":[0,39]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"strictEqual","range":[7,18]},{"type":{"label":"("},"range":[18,19]},{"type":{"label":"name"},"value":"dog","range":[19,22]},{"type":{"label":"."},"range":[22,23]},{"type":{"label":"name"},"value":"age","range":[23,26]},{"type":{"label":"_="},"value":"+=","range":[27,29]},{"type":{"label":"num"},"value":1,"range":[30,31]},{"type":{"label":","},"range":[31,32]},{"type":{"label":"name"},"value":"three","range":[33,38]},{"type":{"label":")"},"range":[38,39]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec5._expr(_rec5._capt(three, 'arguments/1'), {
  content: 'assert.strictEqual(dog.age += 1, three)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"strictEqual","range":[7,18]},"computed":false,"range":[0,18]},"arguments":[{"type":"AssignmentExpression","operator":"+=","left":{"type":"MemberExpression","object":{"type":"Identifier","name":"dog","range":[19,22]},"property":{"type":"Identifier","name":"age","range":[23,26]},"computed":false,"range":[19,26]},"right":{"type":"NumericLiteral","value":1,"range":[30,31]},"range":[19,31]},{"type":"Identifier","name":"three","range":[33,38]}],"range":[0,39]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"strictEqual","range":[7,18]},{"type":{"label":"("},"range":[18,19]},{"type":{"label":"name"},"value":"dog","range":[19,22]},{"type":{"label":"."},"range":[22,23]},{"type":{"label":"name"},"value":"age","range":[23,26]},{"type":{"label":"_="},"value":"+=","range":[27,29]},{"type":{"label":"num"},"value":1,"range":[30,31]},{"type":{"label":","},"range":[31,32]},{"type":{"label":"name"},"value":"three","range":[33,38]},{"type":{"label":")"},"range":[38,39]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec6._expr(_rec6._capt((_rec6$_capt = _rec6._capt([3], 'arguments/0/right'), _rec6$_capt2 = _slicedToArray(_rec6$_capt, 1), x = _rec6$_capt2[0], _rec6$_capt), 'arguments/0'), {
  content: 'assert([x] = [3])',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 11,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"AssignmentExpression","operator":"=","left":{"type":"ArrayPattern","elements":[{"type":"Identifier","name":"x","range":[8,9]}],"range":[7,10]},"right":{"type":"ArrayExpression","elements":[{"type":"NumericLiteral","value":3,"range":[14,15]}],"range":[13,16]},"range":[7,16]}],"range":[0,17]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"["},"range":[7,8]},{"type":{"label":"name"},"value":"x","range":[8,9]},{"type":{"label":"]"},"range":[9,10]},{"type":{"label":"="},"value":"=","range":[11,12]},{"type":{"label":"["},"range":[13,14]},{"type":{"label":"num"},"value":3,"range":[14,15]},{"type":{"label":"]"},"range":[15,16]},{"type":{"label":")"},"range":[16,17]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec7._expr(_rec7._capt((_rec7$_capt = _rec7._capt([_rec7._capt(foo, 'arguments/0/right/elements/0')], 'arguments/0/right'), _rec7$_capt2 = _slicedToArray(_rec7$_capt, 1), x = _rec7$_capt2[0], _rec7$_capt), 'arguments/0'), {
  content: 'assert([x] = [foo])',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 13,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"AssignmentExpression","operator":"=","left":{"type":"ArrayPattern","elements":[{"type":"Identifier","name":"x","range":[8,9]}],"range":[7,10]},"right":{"type":"ArrayExpression","elements":[{"type":"Identifier","name":"foo","range":[14,17]}],"range":[13,18]},"range":[7,18]}],"range":[0,19]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"["},"range":[7,8]},{"type":{"label":"name"},"value":"x","range":[8,9]},{"type":{"label":"]"},"range":[9,10]},{"type":{"label":"="},"value":"=","range":[11,12]},{"type":{"label":"["},"range":[13,14]},{"type":{"label":"name"},"value":"foo","range":[14,17]},{"type":{"label":"]"},"range":[17,18]},{"type":{"label":")"},"range":[18,19]}]',
  visitorKeys: _powerAssertVisitorKeys
}));
