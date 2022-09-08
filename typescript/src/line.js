"use strict";
//import { newPolarPoint } from "./points/polarPoint";
exports.__esModule = true;
exports.newLine = void 0;
function newLine(point1, point2) {
    return {
        draw: function () {
            var x1 = point1.getX();
            var y1 = point1.getY();
            var x2 = point2.getX();
            var y2 = point2.getY();
            // assume implementation 
            console.log("Line drawn from (" + x1 + ", " + y1 +
                ") to (" + x2 + ", " + y2 + ")");
        }
    };
}
exports.newLine = newLine;
