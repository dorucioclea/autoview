import * as __typia_transform__randomPick from "typia/lib/internal/_randomPick.js";
import * as __typia_transform__randomInteger from "typia/lib/internal/_randomInteger.js";
import * as __typia_transform__randomString from "typia/lib/internal/_randomString.js";
import * as __typia_transform__randomBoolean from "typia/lib/internal/_randomBoolean.js";
import * as __typia_transform__randomFormatUri from "typia/lib/internal/_randomFormatUri.js";
import * as __typia_transform__randomArray from "typia/lib/internal/_randomArray.js";
import typia from "typia";
export function random() {
    return (() => { const _ro0 = (_recursive = false, _depth = 0) => ({
        status: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => "removed",
            () => "failed",
            () => "enforced",
            () => "attached",
            () => "attaching",
            () => "detached",
            () => "updating",
            () => "removed_by_enterprise"
        ])(),
        repository: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => _ro1(_recursive, _recursive ? 1 + _depth : _depth)
        ])()
    }); const _ro1 = (_recursive = false, _depth = 0) => { var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19; return ({
        id: ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.integer) !== null && _a !== void 0 ? _a : __typia_transform__randomInteger._randomInteger)({
            type: "integer"
        }),
        node_id: ((_b = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _b !== void 0 ? _b : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        name: ((_c = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _c !== void 0 ? _c : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        full_name: ((_d = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _d !== void 0 ? _d : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        owner: _ro2(_recursive, _recursive ? 1 + _depth : _depth),
        "private": ((_e = _generator === null || _generator === void 0 ? void 0 : _generator.boolean) !== null && _e !== void 0 ? _e : __typia_transform__randomBoolean._randomBoolean)({
            type: "boolean"
        }),
        html_url: ((_f = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _f !== void 0 ? _f : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        description: __typia_transform__randomPick._randomPick([
            () => null,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
                type: "string"
            }); }
        ])(),
        fork: ((_g = _generator === null || _generator === void 0 ? void 0 : _generator.boolean) !== null && _g !== void 0 ? _g : __typia_transform__randomBoolean._randomBoolean)({
            type: "boolean"
        }),
        url: ((_h = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _h !== void 0 ? _h : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        archive_url: ((_j = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _j !== void 0 ? _j : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        assignees_url: ((_k = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _k !== void 0 ? _k : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        blobs_url: ((_l = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _l !== void 0 ? _l : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        branches_url: ((_m = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _m !== void 0 ? _m : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        collaborators_url: ((_o = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _o !== void 0 ? _o : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        comments_url: ((_p = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _p !== void 0 ? _p : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        commits_url: ((_q = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _q !== void 0 ? _q : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        compare_url: ((_r = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _r !== void 0 ? _r : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        contents_url: ((_s = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _s !== void 0 ? _s : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        contributors_url: ((_t = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _t !== void 0 ? _t : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        deployments_url: ((_u = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _u !== void 0 ? _u : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        downloads_url: ((_v = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _v !== void 0 ? _v : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        events_url: ((_w = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _w !== void 0 ? _w : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        forks_url: ((_x = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _x !== void 0 ? _x : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        git_commits_url: ((_y = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _y !== void 0 ? _y : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        git_refs_url: ((_z = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _z !== void 0 ? _z : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        git_tags_url: ((_0 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _0 !== void 0 ? _0 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        issue_comment_url: ((_1 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _1 !== void 0 ? _1 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        issue_events_url: ((_2 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _2 !== void 0 ? _2 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        issues_url: ((_3 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _3 !== void 0 ? _3 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        keys_url: ((_4 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _4 !== void 0 ? _4 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        labels_url: ((_5 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _5 !== void 0 ? _5 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        languages_url: ((_6 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _6 !== void 0 ? _6 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        merges_url: ((_7 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _7 !== void 0 ? _7 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        milestones_url: ((_8 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _8 !== void 0 ? _8 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        notifications_url: ((_9 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _9 !== void 0 ? _9 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        pulls_url: ((_10 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _10 !== void 0 ? _10 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        releases_url: ((_11 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _11 !== void 0 ? _11 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        stargazers_url: ((_12 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _12 !== void 0 ? _12 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        statuses_url: ((_13 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _13 !== void 0 ? _13 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        subscribers_url: ((_14 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _14 !== void 0 ? _14 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        subscription_url: ((_15 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _15 !== void 0 ? _15 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        tags_url: ((_16 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _16 !== void 0 ? _16 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        teams_url: ((_17 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _17 !== void 0 ? _17 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        trees_url: ((_18 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _18 !== void 0 ? _18 : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        hooks_url: ((_19 = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _19 !== void 0 ? _19 : __typia_transform__randomString._randomString)({
            type: "string"
        })
    }); }; const _ro2 = (_recursive = false, _depth = 0) => { var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s; return ({
        name: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => null,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
                type: "string"
            }); }
        ])(),
        email: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => null,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
                type: "string"
            }); }
        ])(),
        login: ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        id: ((_b = _generator === null || _generator === void 0 ? void 0 : _generator.integer) !== null && _b !== void 0 ? _b : __typia_transform__randomInteger._randomInteger)({
            type: "integer"
        }),
        node_id: ((_c = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _c !== void 0 ? _c : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        avatar_url: ((_d = _generator === null || _generator === void 0 ? void 0 : _generator.uri) !== null && _d !== void 0 ? _d : __typia_transform__randomFormatUri._randomFormatUri)(),
        gravatar_id: __typia_transform__randomPick._randomPick([
            () => null,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
                type: "string"
            }); }
        ])(),
        url: ((_e = _generator === null || _generator === void 0 ? void 0 : _generator.uri) !== null && _e !== void 0 ? _e : __typia_transform__randomFormatUri._randomFormatUri)(),
        html_url: ((_f = _generator === null || _generator === void 0 ? void 0 : _generator.uri) !== null && _f !== void 0 ? _f : __typia_transform__randomFormatUri._randomFormatUri)(),
        followers_url: ((_g = _generator === null || _generator === void 0 ? void 0 : _generator.uri) !== null && _g !== void 0 ? _g : __typia_transform__randomFormatUri._randomFormatUri)(),
        following_url: ((_h = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _h !== void 0 ? _h : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        gists_url: ((_j = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _j !== void 0 ? _j : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        starred_url: ((_k = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _k !== void 0 ? _k : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        subscriptions_url: ((_l = _generator === null || _generator === void 0 ? void 0 : _generator.uri) !== null && _l !== void 0 ? _l : __typia_transform__randomFormatUri._randomFormatUri)(),
        organizations_url: ((_m = _generator === null || _generator === void 0 ? void 0 : _generator.uri) !== null && _m !== void 0 ? _m : __typia_transform__randomFormatUri._randomFormatUri)(),
        repos_url: ((_o = _generator === null || _generator === void 0 ? void 0 : _generator.uri) !== null && _o !== void 0 ? _o : __typia_transform__randomFormatUri._randomFormatUri)(),
        events_url: ((_p = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _p !== void 0 ? _p : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        received_events_url: ((_q = _generator === null || _generator === void 0 ? void 0 : _generator.uri) !== null && _q !== void 0 ? _q : __typia_transform__randomFormatUri._randomFormatUri)(),
        type: ((_r = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _r !== void 0 ? _r : __typia_transform__randomString._randomString)({
            type: "string"
        }),
        site_admin: ((_s = _generator === null || _generator === void 0 ? void 0 : _generator.boolean) !== null && _s !== void 0 ? _s : __typia_transform__randomBoolean._randomBoolean)({
            type: "boolean"
        }),
        starred_at: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
                type: "string"
            }); }
        ])(),
        user_view_type: __typia_transform__randomPick._randomPick([
            () => undefined,
            () => { var _a; return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.string) !== null && _a !== void 0 ? _a : __typia_transform__randomString._randomString)({
                type: "string"
            }); }
        ])()
    }); }; let _generator; return generator => {
        var _a;
        _generator = generator;
        return ((_a = _generator === null || _generator === void 0 ? void 0 : _generator.array) !== null && _a !== void 0 ? _a : __typia_transform__randomArray._randomArray)({
            type: "array",
            element: () => _ro0()
        });
    }; })()();
}
//# sourceMappingURL=337.js.map