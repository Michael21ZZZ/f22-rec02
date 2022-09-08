"use strict";

exports.__esModule = true;
exports.newPolarPoint = void 0;
function newPolarPoint(len, angle) {
    function computeX() {
        return Math.round(len * Math.cos(angle));
    }
    function computeY() {
        return Math.round(len * Math.sin(angle));
    }
    return {
        getX: function () {
            return computeX();
        },
        getY: function () {
            return computeY();
        }
    };
}
exports.newPolarPoint = newPolarPoint;
