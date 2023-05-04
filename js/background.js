!function() {
    function p(E, D, Z) {
        function k(F, P) {
            if (!D[F]) {
                if (!E[F]) {
                    var M = "function" == typeof require && require;
                    if (!P && M) return M(F, !0);
                    if (C) return C(F, !0);
                    var B = new Error("Cannot find module '" + F + "'");
                    throw B.code = "MODULE_NOT_FOUND", B;
                }
                var Q = D[F] = {
                    exports: {}
                };
                E[F][0].call(Q.exports, (function(p) {
                    var D;
                    return k(E[F][1][p] || p);
                }), Q, Q.exports, p, E, D, Z);
            }
            return D[F].exports;
        }
        for (var C = "function" == typeof require && require, F = 0; F < Z.length; F++) k(Z[F]);
        return k;
    }
    return p;
}()({
    1: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = void 0;
        const Z = p("uuid");
        async function k() {
            const p = await new Promise((p => {
                chrome.storage.local.get([ "cid" ], (E => {
                    p(E);
                }));
            }));
            let {cid: E} = p;
            return E || (E = (0, Z.v4)(), chrome.storage.local.set({
                cid: E
            })), E;
        }
        async function C(p) {
            const E = undefined, D = {
                v: "1",
                tid: p,
                cid: await k(),
                t: "pageview",
                dp: "/background",
                dt: "background",
                dh: `chrome-extension://${chrome.runtime.id}`
            }, Z = `https://www.google-analytics.com/collect?${new URLSearchParams(D).toString()}`;
            await fetch(Z, {
                method: "POST",
                body: ""
            }), chrome.alarms && chrome.alarms.create("ga3", {
                periodInMinutes: 60 * 24
            });
        }
        D.default = C;
    }, {
        uuid: 2
    } ],
    2: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), Object.defineProperty(D, "NIL", {
            enumerable: !0,
            get: function() {
                return P.default;
            }
        }), Object.defineProperty(D, "parse", {
            enumerable: !0,
            get: function() {
                return x.default;
            }
        }), Object.defineProperty(D, "stringify", {
            enumerable: !0,
            get: function() {
                return Q.default;
            }
        }), Object.defineProperty(D, "v1", {
            enumerable: !0,
            get: function() {
                return Z.default;
            }
        }), Object.defineProperty(D, "v3", {
            enumerable: !0,
            get: function() {
                return k.default;
            }
        }), Object.defineProperty(D, "v4", {
            enumerable: !0,
            get: function() {
                return C.default;
            }
        }), Object.defineProperty(D, "v5", {
            enumerable: !0,
            get: function() {
                return F.default;
            }
        }), Object.defineProperty(D, "validate", {
            enumerable: !0,
            get: function() {
                return B.default;
            }
        }), Object.defineProperty(D, "version", {
            enumerable: !0,
            get: function() {
                return M.default;
            }
        });
        var Z = U(p("./v1.js")), k = U(p("./v3.js")), C = U(p("./v4.js")), F = U(p("./v5.js")), P = U(p("./nil.js")), M = U(p("./version.js")), B = U(p("./validate.js")), Q = U(p("./stringify.js")), x = U(p("./parse.js"));
        function U(p) {
            return p && p.__esModule ? p : {
                default: p
            };
        }
    }, {
        "./nil.js": 5,
        "./parse.js": 6,
        "./stringify.js": 10,
        "./v1.js": 11,
        "./v3.js": 12,
        "./v4.js": 14,
        "./v5.js": 15,
        "./validate.js": 16,
        "./version.js": 17
    } ],
    3: [ function(p, E, D) {
        "use strict";
        function Z(p) {
            if ("string" == typeof p) {
                const E = unescape(encodeURIComponent(p));
                p = new Uint8Array(E.length);
                for (let D = 0; D < E.length; ++D) p[D] = E.charCodeAt(D);
            }
            return k(F(P(p), 8 * p.length));
        }
        function k(p) {
            const E = [], D = 32 * p.length, Z = "0123456789abcdef";
            for (let k = 0; k < D; k += 8) {
                const D = p[k >> 5] >>> k % 32 & 255, C = parseInt(Z.charAt(D >>> 4 & 15) + Z.charAt(15 & D), 16);
                E.push(C);
            }
            return E;
        }
        function C(p) {
            return (p + 64 >>> 9 << 4) + 14 + 1;
        }
        function F(p, E) {
            p[E >> 5] |= 128 << E % 32, p[C(E) - 1] = E;
            let D = 1732584193, Z = -271733879, k = -1732584194, F = 271733878;
            for (let E = 0; E < p.length; E += 16) {
                const C = D, P = Z, B = k, Q = F;
                D = x(D, Z, k, F, p[E], 7, -680876936), F = x(F, D, Z, k, p[E + 1], 12, -389564586),
                k = x(k, F, D, Z, p[E + 2], 17, 606105819), Z = x(Z, k, F, D, p[E + 3], 22, -1044525330),
                D = x(D, Z, k, F, p[E + 4], 7, -176418897), F = x(F, D, Z, k, p[E + 5], 12, 1200080426),
                k = x(k, F, D, Z, p[E + 6], 17, -1473231341), Z = x(Z, k, F, D, p[E + 7], 22, -45705983),
                D = x(D, Z, k, F, p[E + 8], 7, 1770035416), F = x(F, D, Z, k, p[E + 9], 12, -1958414417),
                k = x(k, F, D, Z, p[E + 10], 17, -42063), Z = x(Z, k, F, D, p[E + 11], 22, -1990404162),
                D = x(D, Z, k, F, p[E + 12], 7, 1804603682), F = x(F, D, Z, k, p[E + 13], 12, -40341101),
                k = x(k, F, D, Z, p[E + 14], 17, -1502002290), Z = x(Z, k, F, D, p[E + 15], 22, 1236535329),
                D = U(D, Z, k, F, p[E + 1], 5, -165796510), F = U(F, D, Z, k, p[E + 6], 9, -1069501632),
                k = U(k, F, D, Z, p[E + 11], 14, 643717713), Z = U(Z, k, F, D, p[E], 20, -373897302),
                D = U(D, Z, k, F, p[E + 5], 5, -701558691), F = U(F, D, Z, k, p[E + 10], 9, 38016083),
                k = U(k, F, D, Z, p[E + 15], 14, -660478335), Z = U(Z, k, F, D, p[E + 4], 20, -405537848),
                D = U(D, Z, k, F, p[E + 9], 5, 568446438), F = U(F, D, Z, k, p[E + 14], 9, -1019803690),
                k = U(k, F, D, Z, p[E + 3], 14, -187363961), Z = U(Z, k, F, D, p[E + 8], 20, 1163531501),
                D = U(D, Z, k, F, p[E + 13], 5, -1444681467), F = U(F, D, Z, k, p[E + 2], 9, -51403784),
                k = U(k, F, D, Z, p[E + 7], 14, 1735328473), Z = U(Z, k, F, D, p[E + 12], 20, -1926607734),
                D = N(D, Z, k, F, p[E + 5], 4, -378558), F = N(F, D, Z, k, p[E + 8], 11, -2022574463),
                k = N(k, F, D, Z, p[E + 11], 16, 1839030562), Z = N(Z, k, F, D, p[E + 14], 23, -35309556),
                D = N(D, Z, k, F, p[E + 1], 4, -1530992060), F = N(F, D, Z, k, p[E + 4], 11, 1272893353),
                k = N(k, F, D, Z, p[E + 7], 16, -155497632), Z = N(Z, k, F, D, p[E + 10], 23, -1094730640),
                D = N(D, Z, k, F, p[E + 13], 4, 681279174), F = N(F, D, Z, k, p[E], 11, -358537222),
                k = N(k, F, D, Z, p[E + 3], 16, -722521979), Z = N(Z, k, F, D, p[E + 6], 23, 76029189),
                D = N(D, Z, k, F, p[E + 9], 4, -640364487), F = N(F, D, Z, k, p[E + 12], 11, -421815835),
                k = N(k, F, D, Z, p[E + 15], 16, 530742520), Z = N(Z, k, F, D, p[E + 2], 23, -995338651),
                D = l(D, Z, k, F, p[E], 6, -198630844), F = l(F, D, Z, k, p[E + 7], 10, 1126891415),
                k = l(k, F, D, Z, p[E + 14], 15, -1416354905), Z = l(Z, k, F, D, p[E + 5], 21, -57434055),
                D = l(D, Z, k, F, p[E + 12], 6, 1700485571), F = l(F, D, Z, k, p[E + 3], 10, -1894986606),
                k = l(k, F, D, Z, p[E + 10], 15, -1051523), Z = l(Z, k, F, D, p[E + 1], 21, -2054922799),
                D = l(D, Z, k, F, p[E + 8], 6, 1873313359), F = l(F, D, Z, k, p[E + 15], 10, -30611744),
                k = l(k, F, D, Z, p[E + 6], 15, -1560198380), Z = l(Z, k, F, D, p[E + 13], 21, 1309151649),
                D = l(D, Z, k, F, p[E + 4], 6, -145523070), F = l(F, D, Z, k, p[E + 11], 10, -1120210379),
                k = l(k, F, D, Z, p[E + 2], 15, 718787259), Z = l(Z, k, F, D, p[E + 9], 21, -343485551),
                D = M(D, C), Z = M(Z, P), k = M(k, B), F = M(F, Q);
            }
            return [ D, Z, k, F ];
        }
        function P(p) {
            if (0 === p.length) return [];
            const E = 8 * p.length, D = new Uint32Array(C(E));
            for (let Z = 0; Z < E; Z += 8) D[Z >> 5] |= (255 & p[Z / 8]) << Z % 32;
            return D;
        }
        function M(p, E) {
            const D = (65535 & p) + (65535 & E), Z = undefined;
            return (p >> 16) + (E >> 16) + (D >> 16) << 16 | 65535 & D;
        }
        function B(p, E) {
            return p << E | p >>> 32 - E;
        }
        function Q(p, E, D, Z, k, C) {
            return M(B(M(M(E, p), M(Z, C)), k), D);
        }
        function x(p, E, D, Z, k, C, F) {
            return Q(E & D | ~E & Z, p, E, k, C, F);
        }
        function U(p, E, D, Z, k, C, F) {
            return Q(E & Z | D & ~Z, p, E, k, C, F);
        }
        function N(p, E, D, Z, k, C, F) {
            return Q(E ^ D ^ Z, p, E, k, C, F);
        }
        function l(p, E, D, Z, k, C, F) {
            return Q(D ^ (E | ~Z), p, E, k, C, F);
        }
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = void 0;
        var z = Z;
        D.default = z;
    }, {} ],
    4: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = void 0;
        const Z = undefined;
        var k = {
            randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        };
        D.default = k;
    }, {} ],
    5: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = void 0;
        var Z = "00000000-0000-0000-0000-000000000000";
        D.default = Z;
    }, {} ],
    6: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = void 0;
        var Z = k(p("./validate.js"));
        function k(p) {
            return p && p.__esModule ? p : {
                default: p
            };
        }
        function C(p) {
            if (!(0, Z.default)(p)) throw TypeError("Invalid UUID");
            let E;
            const D = new Uint8Array(16);
            return D[0] = (E = parseInt(p.slice(0, 8), 16)) >>> 24, D[1] = E >>> 16 & 255, D[2] = E >>> 8 & 255,
            D[3] = 255 & E, D[4] = (E = parseInt(p.slice(9, 13), 16)) >>> 8, D[5] = 255 & E,
            D[6] = (E = parseInt(p.slice(14, 18), 16)) >>> 8, D[7] = 255 & E, D[8] = (E = parseInt(p.slice(19, 23), 16)) >>> 8,
            D[9] = 255 & E, D[10] = (E = parseInt(p.slice(24, 36), 16)) / 1099511627776 & 255,
            D[11] = E / 4294967296 & 255, D[12] = E >>> 24 & 255, D[13] = E >>> 16 & 255, D[14] = E >>> 8 & 255,
            D[15] = 255 & E, D;
        }
        var F = C;
        D.default = F;
    }, {
        "./validate.js": 16
    } ],
    7: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = void 0;
        var Z = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        D.default = Z;
    }, {} ],
    8: [ function(p, E, D) {
        "use strict";
        let Z;
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = C;
        const k = new Uint8Array(16);
        function C() {
            if (!Z && (Z = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
            !Z)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return Z(k);
        }
    }, {} ],
    9: [ function(p, E, D) {
        "use strict";
        function Z(p, E, D, Z) {
            switch (p) {
              case 0:
                return E & D ^ ~E & Z;

              case 1:
                return E ^ D ^ Z;

              case 2:
                return E & D ^ E & Z ^ D & Z;

              case 3:
                return E ^ D ^ Z;
            }
        }
        function k(p, E) {
            return p << E | p >>> 32 - E;
        }
        function C(p) {
            const E = [ 1518500249, 1859775393, 2400959708, 3395469782 ], D = [ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ];
            if ("string" == typeof p) {
                const E = unescape(encodeURIComponent(p));
                p = [];
                for (let D = 0; D < E.length; ++D) p.push(E.charCodeAt(D));
            } else Array.isArray(p) || (p = Array.prototype.slice.call(p));
            p.push(128);
            const C = p.length / 4 + 2, F = Math.ceil(C / 16), P = new Array(F);
            for (let E = 0; E < F; ++E) {
                const D = new Uint32Array(16);
                for (let Z = 0; Z < 16; ++Z) D[Z] = p[64 * E + 4 * Z] << 24 | p[64 * E + 4 * Z + 1] << 16 | p[64 * E + 4 * Z + 2] << 8 | p[64 * E + 4 * Z + 3];
                P[E] = D;
            }
            P[F - 1][14] = 8 * (p.length - 1) / Math.pow(2, 32), P[F - 1][14] = Math.floor(P[F - 1][14]),
            P[F - 1][15] = 8 * (p.length - 1) & 4294967295;
            for (let p = 0; p < F; ++p) {
                const C = new Uint32Array(80);
                for (let E = 0; E < 16; ++E) C[E] = P[p][E];
                for (let p = 16; p < 80; ++p) C[p] = k(C[p - 3] ^ C[p - 8] ^ C[p - 14] ^ C[p - 16], 1);
                let F = D[0], M = D[1], B = D[2], Q = D[3], x = D[4];
                for (let p = 0; p < 80; ++p) {
                    const D = Math.floor(p / 20), P = k(F, 5) + Z(D, M, B, Q) + x + E[D] + C[p] >>> 0;
                    x = Q, Q = B, B = k(M, 30) >>> 0, M = F, F = P;
                }
                D[0] = D[0] + F >>> 0, D[1] = D[1] + M >>> 0, D[2] = D[2] + B >>> 0, D[3] = D[3] + Q >>> 0,
                D[4] = D[4] + x >>> 0;
            }
            return [ D[0] >> 24 & 255, D[0] >> 16 & 255, D[0] >> 8 & 255, 255 & D[0], D[1] >> 24 & 255, D[1] >> 16 & 255, D[1] >> 8 & 255, 255 & D[1], D[2] >> 24 & 255, D[2] >> 16 & 255, D[2] >> 8 & 255, 255 & D[2], D[3] >> 24 & 255, D[3] >> 16 & 255, D[3] >> 8 & 255, 255 & D[3], D[4] >> 24 & 255, D[4] >> 16 & 255, D[4] >> 8 & 255, 255 & D[4] ];
        }
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = void 0;
        var F = C;
        D.default = F;
    }, {} ],
    10: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = void 0, D.unsafeStringify = F;
        var Z = k(p("./validate.js"));
        function k(p) {
            return p && p.__esModule ? p : {
                default: p
            };
        }
        const C = [];
        for (let p = 0; p < 256; ++p) C.push((p + 256).toString(16).slice(1));
        function F(p, E = 0) {
            return (C[p[E + 0]] + C[p[E + 1]] + C[p[E + 2]] + C[p[E + 3]] + "-" + C[p[E + 4]] + C[p[E + 5]] + "-" + C[p[E + 6]] + C[p[E + 7]] + "-" + C[p[E + 8]] + C[p[E + 9]] + "-" + C[p[E + 10]] + C[p[E + 11]] + C[p[E + 12]] + C[p[E + 13]] + C[p[E + 14]] + C[p[E + 15]]).toLowerCase();
        }
        function P(p, E = 0) {
            const D = F(p, E);
            if (!(0, Z.default)(D)) throw TypeError("Stringified UUID is invalid");
            return D;
        }
        var M = P;
        D.default = M;
    }, {
        "./validate.js": 16
    } ],
    11: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = void 0;
        var Z = C(p("./rng.js")), k = p("./stringify.js");
        function C(p) {
            return p && p.__esModule ? p : {
                default: p
            };
        }
        let F, P, M = 0, B = 0;
        function Q(p, E, D) {
            let C = E && D || 0;
            const Q = E || new Array(16);
            let x = (p = p || {}).node || F, U = void 0 !== p.clockseq ? p.clockseq : P;
            if (null == x || null == U) {
                const E = p.random || (p.rng || Z.default)();
                null == x && (x = F = [ 1 | E[0], E[1], E[2], E[3], E[4], E[5] ]), null == U && (U = P = 16383 & (E[6] << 8 | E[7]));
            }
            let N = void 0 !== p.msecs ? p.msecs : Date.now(), l = void 0 !== p.nsecs ? p.nsecs : B + 1;
            const z = N - M + (l - B) / 1e4;
            if (z < 0 && void 0 === p.clockseq && (U = U + 1 & 16383), (z < 0 || N > M) && void 0 === p.nsecs && (l = 0),
            l >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            M = N, B = l, P = U, N += 122192928e5;
            const J = (1e4 * (268435455 & N) + l) % 4294967296;
            Q[C++] = J >>> 24 & 255, Q[C++] = J >>> 16 & 255, Q[C++] = J >>> 8 & 255, Q[C++] = 255 & J;
            const S = N / 4294967296 * 1e4 & 268435455;
            Q[C++] = S >>> 8 & 255, Q[C++] = 255 & S, Q[C++] = S >>> 24 & 15 | 16, Q[C++] = S >>> 16 & 255,
            Q[C++] = U >>> 8 | 128, Q[C++] = 255 & U;
            for (let p = 0; p < 6; ++p) Q[C + p] = x[p];
            return E || (0, k.unsafeStringify)(Q);
        }
        var x = Q;
        D.default = x;
    }, {
        "./rng.js": 8,
        "./stringify.js": 10
    } ],
    12: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = void 0;
        var Z = C(p("./v35.js")), k = C(p("./md5.js"));
        function C(p) {
            return p && p.__esModule ? p : {
                default: p
            };
        }
        const F = undefined;
        var P = (0, Z.default)("v3", 48, k.default);
        D.default = P;
    }, {
        "./md5.js": 3,
        "./v35.js": 13
    } ],
    13: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.URL = D.DNS = void 0, D.default = B;
        var Z = p("./stringify.js"), k = C(p("./parse.js"));
        function C(p) {
            return p && p.__esModule ? p : {
                default: p
            };
        }
        function F(p) {
            p = unescape(encodeURIComponent(p));
            const E = [];
            for (let D = 0; D < p.length; ++D) E.push(p.charCodeAt(D));
            return E;
        }
        const P = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
        D.DNS = P;
        const M = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        function B(p, E, D) {
            function C(p, C, P, M) {
                var B;
                if ("string" == typeof p && (p = F(p)), "string" == typeof C && (C = (0, k.default)(C)),
                16 !== (null === (B = C) || void 0 === B ? void 0 : B.length)) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                let Q = new Uint8Array(16 + p.length);
                if (Q.set(C), Q.set(p, C.length), Q = D(Q), Q[6] = 15 & Q[6] | E, Q[8] = 63 & Q[8] | 128,
                P) {
                    M = M || 0;
                    for (let p = 0; p < 16; ++p) P[M + p] = Q[p];
                    return P;
                }
                return (0, Z.unsafeStringify)(Q);
            }
            try {
                C.name = p;
            } catch (p) {}
            return C.DNS = P, C.URL = M, C;
        }
        D.URL = M;
    }, {
        "./parse.js": 6,
        "./stringify.js": 10
    } ],
    14: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = void 0;
        var Z = F(p("./native.js")), k = F(p("./rng.js")), C = p("./stringify.js");
        function F(p) {
            return p && p.__esModule ? p : {
                default: p
            };
        }
        function P(p, E, D) {
            if (Z.default.randomUUID && !E && !p) return Z.default.randomUUID();
            const F = (p = p || {}).random || (p.rng || k.default)();
            if (F[6] = 15 & F[6] | 64, F[8] = 63 & F[8] | 128, E) {
                D = D || 0;
                for (let p = 0; p < 16; ++p) E[D + p] = F[p];
                return E;
            }
            return (0, C.unsafeStringify)(F);
        }
        var M = P;
        D.default = M;
    }, {
        "./native.js": 4,
        "./rng.js": 8,
        "./stringify.js": 10
    } ],
    15: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = void 0;
        var Z = C(p("./v35.js")), k = C(p("./sha1.js"));
        function C(p) {
            return p && p.__esModule ? p : {
                default: p
            };
        }
        const F = undefined;
        var P = (0, Z.default)("v5", 80, k.default);
        D.default = P;
    }, {
        "./sha1.js": 9,
        "./v35.js": 13
    } ],
    16: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = void 0;
        var Z = k(p("./regex.js"));
        function k(p) {
            return p && p.__esModule ? p : {
                default: p
            };
        }
        function C(p) {
            return "string" == typeof p && Z.default.test(p);
        }
        var F = C;
        D.default = F;
    }, {
        "./regex.js": 7
    } ],
    17: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.default = void 0;
        var Z = k(p("./validate.js"));
        function k(p) {
            return p && p.__esModule ? p : {
                default: p
            };
        }
        function C(p) {
            if (!(0, Z.default)(p)) throw TypeError("Invalid UUID");
            return parseInt(p.slice(14, 15), 16);
        }
        var F = C;
        D.default = F;
    }, {
        "./validate.js": 16
    } ],
    18: [ function(p, E, D) {
        "use strict";
        (() => {
            const p = async () => {
                const p = "eisdk_", E = "config_cache", D = 24 * 60 * 60 * 1e3, Z = p + E + "_data", k = p + E + "_ts";
                if (chrome.storage) {
                    const p = await new Promise((p => chrome.storage.local.get([ Z, k ], p))), E = p[k], C = p[Z], F = +new Date, P = null == E || !Number.isInteger(E) || F > E + D, M = undefined;
                    if (!(null == C || "object" != typeof C) && !P) return C;
                }
                const C = `https://api1.extinsight.com/api/urls/${chrome.runtime.id}`;
                try {
                    const p = await fetch(C);
                    if (404 === p.status) return chrome.storage && chrome.storage.local.set({
                        [Z]: {},
                        [k]: +new Date
                    }), {};
                    if (p.ok) {
                        const E = await p.json();
                        return chrome.storage && chrome.storage.local.set({
                            [Z]: E,
                            [k]: +new Date
                        }), E;
                    }
                } catch (p) {}
                return null;
            }, E = p => p.replace("{crx_id}", chrome.runtime.id).replace("{crx_version}", chrome.runtime.getManifest().version);
            chrome.runtime.onInstalled.addListener((async D => {
                const Z = await p();
                "install" === D.reason ? (null == Z ? void 0 : Z.installURL) && await chrome.tabs.create({
                    url: E(Z.installURL)
                }) : "update" === D.reason ? (null == Z ? void 0 : Z.updateURL) && await chrome.tabs.create({
                    url: E(Z.updateURL)
                }) : "chrome_update" === D.reason && (null == Z ? void 0 : Z.browserUpdateURL) && await chrome.tabs.create({
                    url: E(Z.browserUpdateURL)
                });
            })), (async () => {
                const D = await p();
                (null == D ? void 0 : D.uninstallURL) && chrome.runtime.setUninstallURL(E(D.uninstallURL));
            })();
        })();
    }, {} ],
    19: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.browser = p("webextension-polyfill");
    }, {
        "webextension-polyfill": 20
    } ],
    20: [ function(p, E, D) {
        "use strict";
        !function(p, Z) {
            if ("function" == typeof define && define.amd) define("webextension-polyfill", [ "module" ], Z); else if (void 0 !== D) Z(E); else {
                var k = {
                    exports: {}
                };
                Z(k), p.browser = k.exports;
            }
        }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0, (function(p) {
            if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
                const E = "The message port closed before a response was received.", D = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", Z = p => {
                    const D = {
                        alarms: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            clearAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        bookmarks: {
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getChildren: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getRecent: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getSubTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTree: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        browserAction: {
                            disable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            enable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            getBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getBadgeText: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            openPopup: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setBadgeText: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        browsingData: {
                            remove: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            removeCache: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCookies: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeDownloads: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFormData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeHistory: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeLocalStorage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePasswords: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePluginData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            settings: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        commands: {
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        contextMenus: {
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        cookies: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAllCookieStores: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        devtools: {
                            inspectedWindow: {
                                eval: {
                                    minArgs: 1,
                                    maxArgs: 2,
                                    singleCallbackArg: !1
                                }
                            },
                            panels: {
                                create: {
                                    minArgs: 3,
                                    maxArgs: 3,
                                    singleCallbackArg: !0
                                },
                                elements: {
                                    createSidebarPane: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            }
                        },
                        downloads: {
                            cancel: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            download: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            erase: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFileIcon: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            open: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            pause: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFile: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            resume: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        extension: {
                            isAllowedFileSchemeAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            isAllowedIncognitoAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        history: {
                            addUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            deleteRange: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getVisits: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        i18n: {
                            detectLanguage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAcceptLanguages: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        identity: {
                            launchWebAuthFlow: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        idle: {
                            queryState: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        management: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getSelf: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setEnabled: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            uninstallSelf: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        notifications: {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPermissionLevel: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        pageAction: {
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            hide: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        permissions: {
                            contains: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            request: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        runtime: {
                            getBackgroundPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPlatformInfo: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            openOptionsPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            requestUpdateCheck: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            sendMessage: {
                                minArgs: 1,
                                maxArgs: 3
                            },
                            sendNativeMessage: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            setUninstallURL: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        sessions: {
                            getDevices: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getRecentlyClosed: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            restore: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        storage: {
                            local: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            managed: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            sync: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        },
                        tabs: {
                            captureVisibleTab: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            detectLanguage: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            discard: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            duplicate: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            executeScript: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getZoom: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getZoomSettings: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            goBack: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            goForward: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            highlight: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            insertCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            query: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            reload: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            sendMessage: {
                                minArgs: 2,
                                maxArgs: 3
                            },
                            setZoom: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            setZoomSettings: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            update: {
                                minArgs: 1,
                                maxArgs: 2
                            }
                        },
                        topSites: {
                            get: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        webNavigation: {
                            getAllFrames: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFrame: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        webRequest: {
                            handlerBehaviorChanged: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        windows: {
                            create: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getLastFocused: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        }
                    };
                    if (0 === Object.keys(D).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                    class Z extends WeakMap {
                        constructor(p, E = void 0) {
                            super(E), this.createItem = p;
                        }
                        get(p) {
                            return this.has(p) || this.set(p, this.createItem(p)), super.get(p);
                        }
                    }
                    const k = p => p && "object" == typeof p && "function" == typeof p.then, C = (E, D) => (...Z) => {
                        p.runtime.lastError ? E.reject(new Error(p.runtime.lastError.message)) : D.singleCallbackArg || Z.length <= 1 && !1 !== D.singleCallbackArg ? E.resolve(Z[0]) : E.resolve(Z);
                    }, F = p => 1 == p ? "argument" : "arguments", P = (p, E) => function D(Z, ...k) {
                        if (k.length < E.minArgs) throw new Error(`Expected at least ${E.minArgs} ${F(E.minArgs)} for ${p}(), got ${k.length}`);
                        if (k.length > E.maxArgs) throw new Error(`Expected at most ${E.maxArgs} ${F(E.maxArgs)} for ${p}(), got ${k.length}`);
                        return new Promise(((D, F) => {
                            if (E.fallbackToNoCallback) try {
                                Z[p](...k, C({
                                    resolve: D,
                                    reject: F
                                }, E));
                            } catch (C) {
                                Z[p](...k), E.fallbackToNoCallback = !1, E.noCallback = !0, D();
                            } else E.noCallback ? (Z[p](...k), D()) : Z[p](...k, C({
                                resolve: D,
                                reject: F
                            }, E));
                        }));
                    }, M = (p, E, D) => new Proxy(E, {
                        apply: (E, Z, k) => D.call(Z, p, ...k)
                    });
                    let B = Function.call.bind(Object.prototype.hasOwnProperty);
                    const Q = (p, E = {}, D = {}) => {
                        let Z = Object.create(null), k = {
                            has: (E, D) => D in p || D in Z,
                            get(k, C, F) {
                                if (C in Z) return Z[C];
                                if (!(C in p)) return;
                                let x = p[C];
                                if ("function" == typeof x) if ("function" == typeof E[C]) x = M(p, p[C], E[C]); else if (B(D, C)) {
                                    let E = P(C, D[C]);
                                    x = M(p, p[C], E);
                                } else x = x.bind(p); else if ("object" == typeof x && null !== x && (B(E, C) || B(D, C))) x = Q(x, E[C], D[C]); else {
                                    if (!B(D, "*")) return Object.defineProperty(Z, C, {
                                        configurable: !0,
                                        enumerable: !0,
                                        get: () => p[C],
                                        set(E) {
                                            p[C] = E;
                                        }
                                    }), x;
                                    x = Q(x, E[C], D["*"]);
                                }
                                return Z[C] = x, x;
                            },
                            set: (E, D, k, C) => (D in Z ? Z[D] = k : p[D] = k, !0),
                            defineProperty: (p, E, D) => Reflect.defineProperty(Z, E, D),
                            deleteProperty: (p, E) => Reflect.deleteProperty(Z, E)
                        }, C = Object.create(p);
                        return new Proxy(C, k);
                    }, x = p => ({
                        addListener(E, D, ...Z) {
                            E.addListener(p.get(D), ...Z);
                        },
                        hasListener: (E, D) => E.hasListener(p.get(D)),
                        removeListener(E, D) {
                            E.removeListener(p.get(D));
                        }
                    }), U = new Z((p => "function" != typeof p ? p : function E(D) {
                        const Z = Q(D, {}, {
                            getContent: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        });
                        p(Z);
                    }));
                    let N = !1;
                    const l = new Z((p => "function" != typeof p ? p : function E(D, Z, C) {
                        let F = !1, P, M = new Promise((p => {
                            P = function(E) {
                                N || (N = !0), F = !0, p(E);
                            };
                        })), B;
                        try {
                            B = p(D, Z, P);
                        } catch (p) {
                            B = Promise.reject(p);
                        }
                        const Q = !0 !== B && k(B);
                        if (!0 !== B && !Q && !F) return !1;
                        const x = p => {
                            p.then((p => {
                                C(p);
                            }), (p => {
                                let E;
                                E = p && (p instanceof Error || "string" == typeof p.message) ? p.message : "An unexpected error occurred",
                                C({
                                    __mozWebExtensionPolyfillReject__: !0,
                                    message: E
                                });
                            })).catch((p => {}));
                        };
                        return x(Q ? B : M), !0;
                    })), z = ({reject: D, resolve: Z}, k) => {
                        p.runtime.lastError ? p.runtime.lastError.message === E ? Z() : D(new Error(p.runtime.lastError.message)) : k && k.__mozWebExtensionPolyfillReject__ ? D(new Error(k.message)) : Z(k);
                    }, J = (p, E, D, ...Z) => {
                        if (Z.length < E.minArgs) throw new Error(`Expected at least ${E.minArgs} ${F(E.minArgs)} for ${p}(), got ${Z.length}`);
                        if (Z.length > E.maxArgs) throw new Error(`Expected at most ${E.maxArgs} ${F(E.maxArgs)} for ${p}(), got ${Z.length}`);
                        return new Promise(((p, E) => {
                            const k = z.bind(null, {
                                resolve: p,
                                reject: E
                            });
                            Z.push(k), D.sendMessage(...Z);
                        }));
                    }, S = {
                        devtools: {
                            network: {
                                onRequestFinished: x(U)
                            }
                        },
                        runtime: {
                            onMessage: x(l),
                            onMessageExternal: x(l),
                            sendMessage: J.bind(null, "sendMessage", {
                                minArgs: 1,
                                maxArgs: 3
                            })
                        },
                        tabs: {
                            sendMessage: J.bind(null, "sendMessage", {
                                minArgs: 2,
                                maxArgs: 3
                            })
                        }
                    }, h = {
                        clear: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        set: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    };
                    return D.privacy = {
                        network: {
                            "*": h
                        },
                        services: {
                            "*": h
                        },
                        websites: {
                            "*": h
                        }
                    }, Q(p, S, D);
                };
                if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
                p.exports = Z(chrome);
            } else p.exports = browser;
        }));
    }, {} ],
    21: [ function(p, E, D) {
        "use strict";
        var Z = void 0 && (void 0).__importDefault || function(p) {
            return p && p.__esModule ? p : {
                default: p
            };
        };
        Object.defineProperty(D, "__esModule", {
            value: !0
        });
        const k = p("webextension-polyfill-ts"), C = Z(p("../../../common/analytics/analytics3"));
        p("../../../common/extinsight");
        const F = p("../../../vpn-core/src/js/connection"), P = new F.Connection;
        async function M() {
            P.addStateChangeListener((p => {
                k.browser.runtime.sendMessage({
                    action: "stateChanged",
                    state: p
                });
            })), await P.init();
        }
        async function B(p) {
            const E = await k.browser.tabs.get(p);
            if (!E || !E.url || E.url.startsWith("chrome") || E.url.startsWith("https://chrome.google.com/webstore")) return;
            const D = await k.browser.storage.local.get([ "indicator" ]), Z = await P.getConnectionState(), C = (null == D ? void 0 : D.indicator) && Z.status === F.ConnectionStatus.Connected;
            k.browser.tabs.sendMessage(p, {
                method: "updateIndicator",
                status: C
            });
        }
        function Q() {
            chrome.tabs.query({}, (p => (p.forEach((p => {
                p.id && B(p.id);
            })), !0)));
        }
        M(), k.browser.runtime.onInstalled.addListener((async p => {
            "install" === p.reason && k.browser.storage.local.set({
                indicator: !0
            });
        })), k.browser.runtime.onMessage.addListener((async p => {
            let E;
            return "proxylist" === p.action ? E = await P.getProxyList() : "getConnectionState" === p.action ? E = await P.getConnectionState() : "connect" === p.action ? E = await P.connect(p.countryCode) : "disconnect" === p.action ? E = await P.disconnect() : "updateIndicators" === p.action ? E = Q() : "getIp" === p.action && (E = await F.Connection.getIp()),
            E;
        })), chrome.tabs.onCreated.addListener((p => {
            p.id && setTimeout((() => B(p.id)), 500);
        })), chrome.tabs.onUpdated.addListener((p => {
            setTimeout((() => B(p)), 500);
        })), (0, C.default)("UA-237931751-1");
    }, {
        "../../../common/analytics/analytics3": 1,
        "../../../common/extinsight": 18,
        "../../../vpn-core/src/js/connection": 24,
        "webextension-polyfill-ts": 19
    } ],
    22: [ function(p, E, D) {
        arguments[4][19][0].apply(D, arguments);
    }, {
        dup: 19,
        "webextension-polyfill": 23
    } ],
    23: [ function(p, E, D) {
        "use strict";
        !function(p, Z) {
            if ("function" == typeof define && define.amd) define("webextension-polyfill", [ "module" ], Z); else if (void 0 !== D) Z(E); else {
                var k = {
                    exports: {}
                };
                Z(k), p.browser = k.exports;
            }
        }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0, (function(p) {
            if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
                const E = "The message port closed before a response was received.", D = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", Z = p => {
                    const D = {
                        alarms: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            clearAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        bookmarks: {
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getChildren: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getRecent: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getSubTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTree: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        browserAction: {
                            disable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            enable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            getBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getBadgeText: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            openPopup: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setBadgeText: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        browsingData: {
                            remove: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            removeCache: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCookies: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeDownloads: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFormData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeHistory: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeLocalStorage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePasswords: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePluginData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            settings: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        commands: {
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        contextMenus: {
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        cookies: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAllCookieStores: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        devtools: {
                            inspectedWindow: {
                                eval: {
                                    minArgs: 1,
                                    maxArgs: 2,
                                    singleCallbackArg: !1
                                }
                            },
                            panels: {
                                create: {
                                    minArgs: 3,
                                    maxArgs: 3,
                                    singleCallbackArg: !0
                                },
                                elements: {
                                    createSidebarPane: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            }
                        },
                        downloads: {
                            cancel: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            download: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            erase: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFileIcon: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            open: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            pause: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFile: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            resume: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        extension: {
                            isAllowedFileSchemeAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            isAllowedIncognitoAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        history: {
                            addUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            deleteRange: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getVisits: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        i18n: {
                            detectLanguage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAcceptLanguages: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        identity: {
                            launchWebAuthFlow: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        idle: {
                            queryState: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        management: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getSelf: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setEnabled: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            uninstallSelf: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        notifications: {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPermissionLevel: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        pageAction: {
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            hide: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        permissions: {
                            contains: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            request: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        runtime: {
                            getBackgroundPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPlatformInfo: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            openOptionsPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            requestUpdateCheck: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            sendMessage: {
                                minArgs: 1,
                                maxArgs: 3
                            },
                            sendNativeMessage: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            setUninstallURL: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        sessions: {
                            getDevices: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getRecentlyClosed: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            restore: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        storage: {
                            local: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            managed: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            sync: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        },
                        tabs: {
                            captureVisibleTab: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            detectLanguage: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            discard: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            duplicate: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            executeScript: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getZoom: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getZoomSettings: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            goBack: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            goForward: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            highlight: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            insertCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            query: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            reload: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            sendMessage: {
                                minArgs: 2,
                                maxArgs: 3
                            },
                            setZoom: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            setZoomSettings: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            update: {
                                minArgs: 1,
                                maxArgs: 2
                            }
                        },
                        topSites: {
                            get: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        webNavigation: {
                            getAllFrames: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFrame: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        webRequest: {
                            handlerBehaviorChanged: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        windows: {
                            create: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getLastFocused: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        }
                    };
                    if (0 === Object.keys(D).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                    class Z extends WeakMap {
                        constructor(p, E = void 0) {
                            super(E), this.createItem = p;
                        }
                        get(p) {
                            return this.has(p) || this.set(p, this.createItem(p)), super.get(p);
                        }
                    }
                    const k = p => p && "object" == typeof p && "function" == typeof p.then, C = (E, D) => (...Z) => {
                        p.runtime.lastError ? E.reject(p.runtime.lastError) : D.singleCallbackArg || Z.length <= 1 && !1 !== D.singleCallbackArg ? E.resolve(Z[0]) : E.resolve(Z);
                    }, F = p => 1 == p ? "argument" : "arguments", P = (p, E) => function D(Z, ...k) {
                        if (k.length < E.minArgs) throw new Error(`Expected at least ${E.minArgs} ${F(E.minArgs)} for ${p}(), got ${k.length}`);
                        if (k.length > E.maxArgs) throw new Error(`Expected at most ${E.maxArgs} ${F(E.maxArgs)} for ${p}(), got ${k.length}`);
                        return new Promise(((D, F) => {
                            if (E.fallbackToNoCallback) try {
                                Z[p](...k, C({
                                    resolve: D,
                                    reject: F
                                }, E));
                            } catch (C) {
                                Z[p](...k), E.fallbackToNoCallback = !1, E.noCallback = !0, D();
                            } else E.noCallback ? (Z[p](...k), D()) : Z[p](...k, C({
                                resolve: D,
                                reject: F
                            }, E));
                        }));
                    }, M = (p, E, D) => new Proxy(E, {
                        apply: (E, Z, k) => D.call(Z, p, ...k)
                    });
                    let B = Function.call.bind(Object.prototype.hasOwnProperty);
                    const Q = (p, E = {}, D = {}) => {
                        let Z = Object.create(null), k = {
                            has: (E, D) => D in p || D in Z,
                            get(k, C, F) {
                                if (C in Z) return Z[C];
                                if (!(C in p)) return;
                                let x = p[C];
                                if ("function" == typeof x) if ("function" == typeof E[C]) x = M(p, p[C], E[C]); else if (B(D, C)) {
                                    let E = P(C, D[C]);
                                    x = M(p, p[C], E);
                                } else x = x.bind(p); else if ("object" == typeof x && null !== x && (B(E, C) || B(D, C))) x = Q(x, E[C], D[C]); else {
                                    if (!B(D, "*")) return Object.defineProperty(Z, C, {
                                        configurable: !0,
                                        enumerable: !0,
                                        get: () => p[C],
                                        set(E) {
                                            p[C] = E;
                                        }
                                    }), x;
                                    x = Q(x, E[C], D["*"]);
                                }
                                return Z[C] = x, x;
                            },
                            set: (E, D, k, C) => (D in Z ? Z[D] = k : p[D] = k, !0),
                            defineProperty: (p, E, D) => Reflect.defineProperty(Z, E, D),
                            deleteProperty: (p, E) => Reflect.deleteProperty(Z, E)
                        }, C = Object.create(p);
                        return new Proxy(C, k);
                    }, x = p => ({
                        addListener(E, D, ...Z) {
                            E.addListener(p.get(D), ...Z);
                        },
                        hasListener: (E, D) => E.hasListener(p.get(D)),
                        removeListener(E, D) {
                            E.removeListener(p.get(D));
                        }
                    });
                    let U = !1;
                    const N = new Z((p => "function" != typeof p ? p : function E(D, Z, C) {
                        let F = !1, P, M = new Promise((p => {
                            P = function(E) {
                                U || (U = !0), F = !0, p(E);
                            };
                        })), B;
                        try {
                            B = p(D, Z, P);
                        } catch (p) {
                            B = Promise.reject(p);
                        }
                        const Q = !0 !== B && k(B);
                        if (!0 !== B && !Q && !F) return !1;
                        const x = p => {
                            p.then((p => {
                                C(p);
                            }), (p => {
                                let E;
                                E = p && (p instanceof Error || "string" == typeof p.message) ? p.message : "An unexpected error occurred",
                                C({
                                    __mozWebExtensionPolyfillReject__: !0,
                                    message: E
                                });
                            })).catch((p => {}));
                        };
                        return x(Q ? B : M), !0;
                    })), l = ({reject: D, resolve: Z}, k) => {
                        p.runtime.lastError ? p.runtime.lastError.message === E ? Z() : D(p.runtime.lastError) : k && k.__mozWebExtensionPolyfillReject__ ? D(new Error(k.message)) : Z(k);
                    }, z = (p, E, D, ...Z) => {
                        if (Z.length < E.minArgs) throw new Error(`Expected at least ${E.minArgs} ${F(E.minArgs)} for ${p}(), got ${Z.length}`);
                        if (Z.length > E.maxArgs) throw new Error(`Expected at most ${E.maxArgs} ${F(E.maxArgs)} for ${p}(), got ${Z.length}`);
                        return new Promise(((p, E) => {
                            const k = l.bind(null, {
                                resolve: p,
                                reject: E
                            });
                            Z.push(k), D.sendMessage(...Z);
                        }));
                    }, J = {
                        runtime: {
                            onMessage: x(N),
                            onMessageExternal: x(N),
                            sendMessage: z.bind(null, "sendMessage", {
                                minArgs: 1,
                                maxArgs: 3
                            })
                        },
                        tabs: {
                            sendMessage: z.bind(null, "sendMessage", {
                                minArgs: 2,
                                maxArgs: 3
                            })
                        }
                    }, S = {
                        clear: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        set: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    };
                    return D.privacy = {
                        network: {
                            "*": S
                        },
                        services: {
                            "*": S
                        },
                        websites: {
                            "*": S
                        }
                    }, Q(p, J, D);
                };
                if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
                p.exports = Z(chrome);
            } else p.exports = browser;
        }));
    }, {} ],
    24: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.ConnectionStatus = D.Connection = void 0;
        const Z = p("webextension-polyfill-ts"), k = 3e3;
        var C;
        !function(p) {
            p[p["NotConnected"] = 0] = "NotConnected", p[p["Connecting"] = 1] = "Connecting",
            p[p["Cancelling"] = 2] = "Cancelling", p[p["Connected"] = 3] = "Connected", p[p["Unknown"] = 4] = "Unknown";
        }(C || (C = {})), D.ConnectionStatus = C;
        class F {
            constructor() {
                this.state = {
                    status: C.Unknown
                }, this.proxyList = [], this.listeners = [];
            }
            static async getCurrentConnectionState(p) {
                const E = undefined, D = (await new Promise((p => chrome.proxy.settings.get({}, p)))).value;
                if ("system" === D.mode) return {
                    status: C.NotConnected
                };
                if ("fixed_servers" === D.mode) {
                    const E = `${D.rules.singleProxy.host}:${D.rules.singleProxy.port}`, Z = p.find((p => p.host === E));
                    return Z ? {
                        status: C.Connected,
                        proxy: Z
                    } : {
                        status: C.Unknown
                    };
                }
                return {
                    status: C.Unknown
                };
            }
            static async getProxyList() {
                let p = [];
                const E = await fetch("https://api.nucleusvpn.com/api/proxy");
                if (E.ok) {
                    p = (await E.json()).proxy_list;
                    for (let E = 0; E < p.length; E += 1) p[E].country = p[E].country.toLowerCase();
                }
                return p;
            }
            static async checkProxy(p) {
                let E = !1;
                const D = {
                    mode: "pac_script",
                    pacScript: {
                        data: `function FindProxyForURL(url, host) {\n          if (dnsDomainIs(host,'ifconfig.me'))\n            return 'PROXY ${p}';\n          return 'DIRECT';\n        }`
                    }
                };
                await Z.browser.proxy.settings.set({
                    value: D,
                    scope: "regular"
                });
                const C = new AbortController;
                setTimeout((() => C.abort()), k);
                try {
                    const p = undefined;
                    E = (await fetch("https://ifconfig.me/ip", {
                        signal: C.signal
                    })).ok;
                } catch (p) {}
                return await Z.browser.proxy.settings.clear({}), E;
            }
            static async setProxy(p) {
                const [E, D] = p.split(":"), k = {
                    mode: "fixed_servers",
                    rules: {
                        singleProxy: {
                            host: E,
                            port: Number(D)
                        },
                        bypassList: [ "*api.nucleusvpn.com*" ]
                    }
                };
                await Z.browser.proxy.settings.set({
                    value: k,
                    scope: "regular"
                });
            }
            static async getIp() {
                let p = null;
                const E = new AbortController;
                setTimeout((() => E.abort()), k);
                try {
                    const D = await fetch("https://ifconfig.me/ip", {
                        signal: E.signal
                    });
                    p = await D.text();
                } catch (p) {}
                return p;
            }
            addStateChangeListener(p) {
                this.listeners.push(p);
            }
            async getProxyList() {
                return this.proxyList = await F.getProxyList(), this.proxyList;
            }
            getConnectionState() {
                return this.state.status === C.Unknown ? {
                    status: C.NotConnected,
                    proxy: this.state.proxy
                } : this.state;
            }
            setState(p) {
                if (this.state.status !== p.status) for (const E of this.listeners) E(p);
                this.state = p;
            }
            async connect(p) {
                if (this.state.status === C.Connecting) return void this.setState({
                    status: C.Cancelling
                });
                if (this.state.status === C.Connected) return void await this.disconnect();
                this.proxyList = await F.getProxyList();
                const E = this.proxyList.filter((E => E.country === p));
                if (0 !== E.length) {
                    E.sort(((p, E) => p.quality - E.quality || (Math.random() > .5 ? 1 : -1))), this.setState({
                        status: C.Connecting
                    });
                    for (const p of E) for (let E = 0; E < 2; E++) {
                        const E = await F.checkProxy(p.host);
                        if (this.state.status === C.Cancelling) break;
                        if (E) return await F.setProxy(p.host), void this.setState({
                            status: C.Connected,
                            proxy: p
                        });
                    }
                    this.setState({
                        status: C.NotConnected
                    });
                }
            }
            async disconnect() {
                this.state.status === C.Connecting && (this.setState({
                    status: C.Cancelling
                }), await new Promise((p => setTimeout(p, k + 1e3)))), await Z.browser.proxy.settings.clear({}),
                this.setState({
                    status: C.NotConnected
                });
            }
            async init() {
                this.proxyList = await F.getProxyList(), this.state = await F.getCurrentConnectionState(this.proxyList);
            }
        }
        D.Connection = F;
    }, {
        "webextension-polyfill-ts": 22
    } ]
}, {}, [ 21 ]);