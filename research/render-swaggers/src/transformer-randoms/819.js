import * as __typia_transform__randomString from "typia/lib/internal/_randomString.js";
import * as __typia_transform__randomInteger from "typia/lib/internal/_randomInteger.js";
import * as __typia_transform__randomPick from "typia/lib/internal/_randomPick.js";
import typia from "typia";
export function random() {
    return (() => { const _ro0 = (_recursive = false, _depth = 0) => { var _a, _b; return ({
        id: __typia_transform__randomPick._randomPick([
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
                type: "string"
            }); },
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.integer) !== null && _a !== void 0 ? _a : __typia_transform__randomInteger._randomInteger)({
                type: "integer"
            }); }
        ])(),
        status_url: ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        page_url: ((_b = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _b !== void 0 ? _b : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        preview_url: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
                type: "string"
            }); }
        ])()
    }); }; let _generator; return generator => {
        _generator = generator;
        return _ro0();
    }; })()();
}
//# sourceMappingURL=819.js.map