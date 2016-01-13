'use strict';

require('./index.html');
require('./styles/style.css');

var Elm = require('./Main');

Elm.embed(Elm.Main, document.getElementById('main'));
