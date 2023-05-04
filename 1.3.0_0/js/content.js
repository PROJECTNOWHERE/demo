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
        }), D.browser = p("webextension-polyfill");
    }, {
        "webextension-polyfill": 2
    } ],
    2: [ function(p, E, D) {
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
    3: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        });
        const Z = p("webextension-polyfill-ts");
        document.addEventListener("DOMContentLoaded", (() => {
            const p = undefined;
            if (!document.getElementById(`${Z.browser.runtime.id}-img`)) {
                const p = chrome.runtime.getURL("/web_accessible_resources/status_on.png"), E = `<img class='safum-vpn-status' id='${Z.browser.runtime.id}-img' src='${p}' alt='status'>`;
                document.body.insertAdjacentHTML("beforeBegin", `${E}`);
            }
        })), Z.browser.runtime.onMessage.addListener((p => {
            const E = document.getElementById(`${Z.browser.runtime.id}-img`);
            switch (p.method) {
              case "updateIndicator":
                if (!E) return;
                p.status ? E.classList.contains("view-status") || E.classList.add("view-status") : E.classList.remove("view-status");
                break;

              default:
                break;
            }
        }));
    }, {
        "webextension-polyfill-ts": 1
    } ]
}, {}, [ 3 ]);