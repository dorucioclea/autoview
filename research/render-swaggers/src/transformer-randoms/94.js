import * as __typia_transform__randomBoolean from "typia/lib/internal/_randomBoolean.js";
import * as __typia_transform__randomString from "typia/lib/internal/_randomString.js";
import * as __typia_transform__randomArray from "typia/lib/internal/_randomArray.js";
import * as __typia_transform__randomFormatUri from "typia/lib/internal/_randomFormatUri.js";
import * as __typia_transform__randomPick from "typia/lib/internal/_randomPick.js";
import * as __typia_transform__randomFormatIpv4 from "typia/lib/internal/_randomFormatIpv4.js";
import * as __typia_transform__randomFormatIpv6 from "typia/lib/internal/_randomFormatIpv6.js";
import typia from "typia";
export function random() {
    return (() => { const _ro0 = (_recursive = false, _depth = 0) => { var _a, _b, _c, _d, _e; return ({
        secret: ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.boolean) !== null && _a !== void 0 ? _a : __typia_transform__randomBoolean._randomBoolean)({
            type: "boolean"
        }),
        type: "question",
        customer: _ro1(_recursive, _recursive ? 1 + _depth : _depth),
        answer: "any type used...",
        read_by_seller: ((_b = _generator === null || _generator === void 0 ? void 0 : _generator.boolean) !== null && _b !== void 0 ? _b : __typia_transform__randomBoolean._randomBoolean)({
            type: "boolean"
        }),
        id: ((_c = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _c !== void 0 ? _c : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        snapshots: ((_d = _generator === null || _generator === void 0 ? void 0 : _generator.array) !== null && _d !== void 0 ? _d : __typia_transform__randomArray._randomArray)({
            type: "array",
            element: () => _ro3(_recursive, _recursive ? 1 + _depth : _depth)
        }),
        created_at: ((_e = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _e !== void 0 ? _e : __typia_transform__randomString._randomString)({
            type: "string"
        })
    }); }; const _ro1 = (_recursive = false, _depth = 0) => { var _a, _b, _c; return ({
        type: "customer",
        member: "any type used...",
        citizen: "any type used...",
        id: ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        channel: _ro2(_recursive, _recursive ? 1 + _depth : _depth),
        external_user: "any type used...",
        href: ((_b = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _b !== void 0 ? _b : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        referrer: __typia_transform__randomPick._randomPick([
            () => null,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.uri) !== null && _a !== void 0 ? _a : __typia_transform__randomFormatUri._randomFormatUri)(); },
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
                type: "string",
                maxLength: 0
            }); }
        ])(),
        ip: __typia_transform__randomPick._randomPick([
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.ipv4) !== null && _a !== void 0 ? _a : __typia_transform__randomFormatIpv4._randomFormatIpv4)(); },
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.ipv6) !== null && _a !== void 0 ? _a : __typia_transform__randomFormatIpv6._randomFormatIpv6)(); }
        ])(),
        created_at: ((_c = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _c !== void 0 ? _c : __typia_transform__randomString._randomString)({
            type: "string"
        })
    }); }; const _ro2 = (_recursive = false, _depth = 0) => { var _a, _b, _c, _d; return ({
        id: ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        created_at: ((_b = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _b !== void 0 ? _b : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        code: ((_c = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _c !== void 0 ? _c : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        name: ((_d = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _d !== void 0 ? _d : __typia_transform__randomString._randomString)({
            type: "string"
        })
    }); }; const _ro3 = (_recursive = false, _depth = 0) => { var _a, _b, _c, _d, _e; return ({
        id: ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        created_at: ((_b = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _b !== void 0 ? _b : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        format: __typia_transform__randomPick._randomPick([
            () => "html",
            () => "md",
            () => "txt"
        ])(),
        title: ((_c = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _c !== void 0 ? _c : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        body: ((_d = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _d !== void 0 ? _d : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        files: ((_e = _generator === null || _generator === void 0 ? void 0 : _generator.array) !== null && _e !== void 0 ? _e : __typia_transform__randomArray._randomArray)({
            type: "array",
            element: () => _ro4(_recursive, _recursive ? 1 + _depth : _depth)
        })
    }); }; const _ro4 = (_recursive = false, _depth = 0) => { var _a, _b; return ({
        name: ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        extension: __typia_transform__randomPick._randomPick([
            () => null,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
                type: "string",
                minLength: 1,
                maxLength: 8
            }); }
        ])(),
        url: ((_b = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _b !== void 0 ? _b : __typia_transform__randomString._randomString)({
            type: "string"
        })
    }); }; let _generator; return generator => {
        _generator = generator;
        return _ro0();
    }; })()();
}
//# sourceMappingURL=94.js.map