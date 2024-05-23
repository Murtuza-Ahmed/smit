/**
 * TYPE CASTING
 */
// const elem = <HTMLInputElement>document.getElementById("input")!;
// elem.value;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
/**
 * GENERIC
 * TYPE GENERIC <>
 * ADDITIONAL INFORMATION OR ISSE PASS GENERIC KE THROU KARTE HN
 */
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("done");
    }, 2000);
});
promise.then(function (data) {
    data.split("");
});
/**
 * HELPER FUNCTION
 * GENERICE <>
 */
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
var merged = merge({ name: "sheroz" }, { age: 26 });
console.log(merged.name);
/**
 * DECORATORS
 * DECORATORS SIMPLE EK FUNCTION HE OR YE CLASS KE SATH USE HOGA
 * CLASS KE SATH DECORATORS USE KARNE KYLYE EK SPECIFIC SIGN HOTA HE (@)
 * (@) USKE BAD DECORATORS KA NAME
 */
function Logger(data) {
    return function (_) {
        console.log("loggin...." + data);
    };
}
function FillHTML(template, id) {
    return function (_) {
        var ele = document.getElementById(id);
        if (ele) {
            ele.innerHTML = template;
        }
    };
}
var Persone = function () {
    var _classDecorators = [Logger("data"), FillHTML("<b>this is my data</b>", "app")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Persone = _classThis = /** @class */ (function () {
        function Persone_1() {
            this.name = "sheikh";
            console.log("called");
        }
        return Persone_1;
    }());
    __setFunctionName(_classThis, "Persone");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Persone = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Persone = _classThis;
}();
var sheroz = new Persone();
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else {
        throw Error("Type check kar");
    }
}
add(1, 2).toFixed();
add("abc", "bca").split("");
