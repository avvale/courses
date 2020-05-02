"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var StringValueObject = /** @class */ (function () {
    function StringValueObject(value) {
        this.value = value;
    }
    StringValueObject.prototype.toString = function () {
        return this.value;
    };
    return StringValueObject;
}());
var IntValueObject = /** @class */ (function () {
    function IntValueObject(value) {
        this.value = value;
    }
    IntValueObject.prototype.toString = function () {
        return this.value;
    };
    return IntValueObject;
}());
var ValueObject = /** @class */ (function () {
    function ValueObject(value) {
        this.value = value;
    }
    ValueObject.prototype.toString = function () {
        return this.value;
    };
    return ValueObject;
}());
var Author = /** @class */ (function (_super) {
    __extends(Author, _super);
    function Author(value) {
        var _this = _super.call(this, value) || this;
        _this.value = value;
        return _this;
    }
    return Author;
}(StringValueObject));
exports.Author = Author;
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title(value) {
        var _this = _super.call(this, value) || this;
        _this.value = value;
        return _this;
    }
    return Title;
}(StringValueObject));
exports.Title = Title;
var Year = /** @class */ (function (_super) {
    __extends(Year, _super);
    function Year(value) {
        var _this = _super.call(this, value) || this;
        _this.value = value;
        return _this;
    }
    return Year;
}(IntValueObject));
exports.Year = Year;
