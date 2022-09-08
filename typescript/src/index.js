"use strict";
exports.__esModule = true;
var line_1 = require("./line");
var polarPoint_1 = require("./points/polarPoint");
var point1 = (0, polarPoint_1.newPolarPoint)(2, 0);
var point2 = (0, polarPoint_1.newPolarPoint)(4, Math.PI);
var line = (0, line_1.newLine)(point1, point2);
line.draw();
