import * as __typia_transform__randomPick from "typia/lib/internal/_randomPick.js";
import * as __typia_transform__randomString from "typia/lib/internal/_randomString.js";
import * as __typia_transform__randomNumber from "typia/lib/internal/_randomNumber.js";
import * as __typia_transform__randomInteger from "typia/lib/internal/_randomInteger.js";
import typia from "typia";
export function random() {
    return (() => { const _ro0 = (_recursive = false, _depth = 0) => ({
        bot: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => _ro1(_recursive, _recursive ? 1 + _depth : _depth)
        ])()
    }); const _ro1 = (_recursive = false, _depth = 0) => { var _a, _b; return ({
        id: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
                type: "string"
            }); }
        ])(),
        channelId: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
                type: "string"
            }); }
        ])(),
        name: ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        createdAt: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.number) !== null && _a !== void 0 ? _a : __typia_transform__randomNumber._randomNumber)({
                type: "number"
            }); }
        ])(),
        avatar: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => _ro2(_recursive, _recursive ? 1 + _depth : _depth)
        ])(),
        avatarUrl: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
                type: "string"
            }); }
        ])(),
        color: ((_b = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _b !== void 0 ? _b : __typia_transform__randomString._randomString)({
            type: "string",
            "default": "#123456"
        })
    }); }; const _ro2 = (_recursive = false, _depth = 0) => { var _a, _b; return ({
        bucket: ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        key: ((_b = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _b !== void 0 ? _b : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        width: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.integer) !== null && _a !== void 0 ? _a : __typia_transform__randomInteger._randomInteger)({
                type: "integer"
            }); }
        ])(),
        height: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.integer) !== null && _a !== void 0 ? _a : __typia_transform__randomInteger._randomInteger)({
                type: "integer"
            }); }
        ])()
    }); }; let _generator; return generator => {
        _generator = generator;
        return _ro0();
    }; })()();
}
//# sourceMappingURL=172.js.map