function b(t) {
    throw t
}
function u() {
    return function(t) {
        return t
    }
}
function z() {
    return function() {}
}
function A(t) {
    return function(i) {
        this[t] = i
    }
}
function E(t) {
    return function() {
        return this[t]
    }
}
function F(t) {
    return function() {
        return t
    }
}
function aa(t, i, e, n, s) {
    var h = this;
    h.Dba = t,
        h.Zw = i,
        h.Ms = [],
        h.BM = e,
        h.CM = s,
        h.Km = n,
        h.fx = s,
        h.mN = t instanceof Array ? [] : {},
        h.uM = r,
        M.WO(t,
            function(t, i) {
                h.Ms.push({
                    index: i,
                    value: t
                })
            }),
        h.size = h.Ms.length,
        h.JF = 0,
        h.YE = 0,
        h.Zw = h.Zw || h.size,
        h.Pja = function(t, i) {
            h.BM = t,
                h.CM = i
        },
        h.Oja = function(t, i) {
            h.Km = t,
                h.fx = i
        },
        h.lM = function() {
            var t = this;
            if (0 != t.Ms.length && !(t.YE >= t.Zw)) {
                var i = t.Ms.shift(),
                    e = i.value,
                    n = i.index;
                t.YE++,
                    t.BM.call(t.CM, e, n,
                        function(i) {
                            if (!t.uM) if (t.JF++, t.YE--, i) t.uM = p,
                            t.Km && t.Km.call(t.fx, i);
                            else {
                                var e = Array.prototype.slice.call(arguments, 1);
                                t.mN[this.index] = e[0],
                                    t.JF == t.size ? t.Km && t.Km.call(t.fx, q, t.mN) : t.lM()
                            }
                        }.bind(i), t)
            }
        },
        h.gq = function() {
            if (0 == this.Ms.length) this.Km && this.Km.call(this.fx, q, []);
            else for (var t = 0; t < this.Zw; t++) this.lM()
        }
}
function fa() {
    this.timestamp = this.e = this.y = this.x = 0
}
function U(t, i) {
    this.x = t || 0,
        this.y = i || 0
}
function V(t, i, e) {
    this.x = t || 0,
        this.y = i || 0,
        this.e = e || 0
}
function ea(t, i) {
    this.ma = t || 0,
        this.na = i || 0
}
function ga() {
    this.fontName = "Arial",
        this.fontSize = 12,
        this.textAlign = M.mi,
        this.verticalAlign = M.Nr,
        this.fillStyle = M.color(255, 255, 255, 255),
        this.boundingHeight = this.boundingWidth = 0,
        this.uH = r,
        this.strokeStyle = M.color(255, 255, 255, 255),
        this.lineWidth = 1,
        this.NR = r,
        this.shadowBlur = this.shadowOffsetY = this.shadowOffsetX = 0,
        this.shadowOpacity = 1
}
function ia() {
    this.L = this.e = this.y = this.x = 0
}
function ja() {
    this.position = M.d(0, 0),
        this.T7 = M.d(0, 0),
        this.vt = M.d(0, 0)
}
function la(t) {
    var i;
    return t.Up++,
        i = 1 & t.Ui,
        t.Ui >>= 1,
    0 == t.Ui && (t.Ui = t.X(), i = 1 & t.Ui, t.Ui = 128 | t.Ui >> 1),
        i
}
function W(t, i) {
    for (var e = 0, n = i; n--;) e = e << 1 | la(t);
    return i && (e = M.ra.Pa.eF[e] >> 8 - i),
        e
}
function ma(t, i) {
    t.hF[t.Uh++] = i,
        t.$t.push(String.fromCharCode(i)),
    32768 == t.Uh && (t.Uh = 0)
}
function na(t) {
    for (;;) {
        if (t.hq[t.di] >= t.iP) return - 1;
        if (t.gP[t.hq[t.di]] == t.di) return t.hq[t.di]++;
        t.hq[t.di]++
    }
}
function oa(t) {
    var i,
        e = t.RA[t.zu];
    if (17 == t.di) return - 1;
    if (t.zu++, t.di++, i = na(t), i >= 0) e.$x = i;
    else if (e.$x = 32768, oa(t)) return - 1;
    if (i = na(t), i >= 0) e.ay = i,
        e.vG = q;
    else if (e.ay = 32768, e.vG = t.RA[t.zu], e.z4 = t.zu, oa(t)) return - 1;
    return t.di--,
        0
}
function qa(t, i, e, n) {
    for (t.RA = i, t.zu = 0, t.gP = n, t.iP = e, i = 0; 17 > i; i++) t.hq[i] = 0;
    return t.di = 0,
        oa(t) ? -1: 0
}
function ua(t, i) {
    for (var e, n, r = 0, s = i[r];;) if (e = la(t)) {
        if (! (32768 & s.ay)) return s.ay;
        for (s = s.vG, e = i.length, n = 0; e > n; n++) if (i[n] === s) {
            r = n;
            break
        }
    } else {
        if (! (32768 & s.$x)) return s.$x;
        r++,
            s = i[r]
    }
    return - 1
}
function va(t) {
    var i,
        e,
        n,
        r,
        s;
    do
        if (i = la(t), n = W(t, 2), 0 == n) for (t.Ui = 1, n = t.X(), n |= t.X() << 8, e = t.X(), e |= t.X() << 8, 65535 & (n ^ ~e) && document.write("BlockLen checksum mismatch\n"); n--;) e = t.X(),
            ma(t, e);
        else if (1 == n) for (;;) if (n = M.ra.Pa.eF[W(t, 7)] >> 1, n > 23 ? (n = n << 1 | la(t), n > 199 ? (n -= 128, n = n << 1 | la(t)) : (n -= 48, n > 143 && (n += 136))) : n += 256, 256 > n) ma(t, n);
        else {
            if (256 == n) break;
            var h;
            for (n -= 257, s = W(t, M.ra.Pa.EO[n]) + M.ra.Pa.DO[n], n = M.ra.Pa.eF[W(t, 5)] >> 3, 8 < M.ra.Pa.bq[n] ? (h = W(t, 8), h |= W(t, M.ra.Pa.bq[n] - 8) << 8) : h = W(t, M.ra.Pa.bq[n]), h += M.ra.Pa.CO[n], n = 0; s > n; n++) e = t.hF[32767 & t.Uh - h],
                ma(t, e)
        } else if (2 == n) {
            var a = Array(320);
            for (e = 257 + W(t, 5), h = 1 + W(t, 5), r = 4 + W(t, 4), n = 0; 19 > n; n++) a[n] = 0;
            for (n = 0; r > n; n++) a[M.ra.Pa.border[n]] = W(t, 3);
            for (s = t.wn.length, r = 0; s > r; r++) t.wn[r] = new M.ra.Pa.xA;
            if (qa(t, t.wn, 19, a)) return t.Uh = 0,
                void 0;
            s = e + h,
                r = 0;
            for (var o = -1; s > r;) if (o++, n = ua(t, t.wn), 16 > n) a[r++] = n;
            else if (16 == n) {
                var c;
                if (n = 3 + W(t, 2), r + n > s) return t.Uh = 0,
                    void 0;
                for (c = r ? a[r - 1] : 0; n--;) a[r++] = c
            } else {
                if (n = 17 == n ? 3 + W(t, 3) : 11 + W(t, 7), r + n > s) return t.Uh = 0,
                    void 0;
                for (; n--;) a[r++] = 0
            }
            for (s = t.Pt.length, r = 0; s > r; r++) t.Pt[r] = new M.ra.Pa.xA;
            if (qa(t, t.Pt, e, a)) return t.Uh = 0,
                void 0;
            for (s = t.Pt.length, r = 0; s > r; r++) t.wn[r] = new M.ra.Pa.xA;
            for (n = [], r = e; r < a.length; r++) n[r - e] = a[r];
            if (qa(t, t.wn, h, n)) return t.Uh = 0,
                void 0;
            for (;;) if (n = ua(t, t.Pt), n >= 256) {
                if (n -= 256, 0 == n) break;
                for (n--, s = W(t, M.ra.Pa.EO[n]) + M.ra.Pa.DO[n], n = ua(t, t.wn), 8 < M.ra.Pa.bq[n] ? (h = W(t, 8), h |= W(t, M.ra.Pa.bq[n] - 8) << 8) : h = W(t, M.ra.Pa.bq[n]), h += M.ra.Pa.CO[n]; s--;) e = t.hF[32767 & t.Uh - h],
                    ma(t, e)
            } else ma(t, n)
        }
    while (!i);
    t.Uh = 0,
        t.Ui = 1
}
function ka(t) {
    t.$t = [],
        t.fz = r;
    var i = [];
    if (i[0] = t.X(), i[1] = t.X(), 120 == i[0] && 218 == i[1] && (va(t), t.Vz[t.files] = [t.$t.join(""), "geonext.gxt"], t.files++), 31 == i[0] && 139 == i[1] && (wa(t), t.Vz[t.files] = [t.$t.join(""), "file"], t.files++), 80 == i[0] && 75 == i[1] && (t.fz = p, i[2] = t.X(), i[3] = t.X(), 3 == i[2] && 4 == i[3])) {
        i[0] = t.X(),
            i[1] = t.X(),
            t.$j = t.X(),
            t.$j |= t.X() << 8,
            i = t.X(),
            i |= t.X() << 8,
            t.X(),
            t.X(),
            t.X(),
            t.X(),
            t.X(),
            t.X(),
            t.X(),
            t.X(),
            t.X(),
            t.X(),
            t.X(),
            t.X();
        var e = t.X(),
            e = e | t.X() << 8,
            n = t.X(),
            n = n | t.X() << 8,
            s = 0;
        for (t.Bq = []; e--;) {
            var h = t.X();
            "/" == h | ":" == h ? s = 0: s < M.ra.Pa.tI - 1 && (t.Bq[s++] = String.fromCharCode(h))
        }
        t.dP || (t.dP = t.Bq);
        for (var s = 0; n > s;) t.X(),
            s++;
        8 == i && (va(t), t.Vz[t.files] = [t.$t.join(""), t.Bq.join("")], t.files++),
            wa(t)
    }
}
function wa(t) {
    var i,
        e = [];
    if (8 & t.$j && (e[0] = t.X(), e[1] = t.X(), e[2] = t.X(), e[3] = t.X(), t.X(), t.X(), t.X(), t.X(), t.X(), t.X(), t.X(), t.X()), t.fz && ka(t), e[0] = t.X(), 8 == e[0]) {
        if (t.$j = t.X(), t.X(), t.X(), t.X(), t.X(), t.X(), t.X(), 4 & t.$j) for (e[0] = t.X(), e[2] = t.X(), t.di = e[0] + 256 * e[1], e = 0; e < t.di; e++) t.X();
        if (8 & t.$j) for (e = 0, t.Bq = []; i = t.X();)("7" == i || ":" == i) && (e = 0),
        e < M.ra.Pa.tI - 1 && (t.Bq[e++] = i);
        if (16 & t.$j) for (; t.X(););
        2 & t.$j && (t.X(), t.X()),
            va(t),
            t.X(),
            t.X(),
            t.X(),
            t.X(),
        t.fz && ka(t)
    }
}
var k = void 0,
    p = !0,
    q = null,
    r = !1,
    M = M || {};
M.M = M.M || {},
    M.i = {},
    T = window,
    T = Object.prototype,
    delete window._p,
    M.Wb = function(t) {
        return document.createElement(t)
    },
    M.Na = function(t, i, e, n) {
        t.addEventListener(i, e, n)
    },
    M.vM = "undefined" != typeof require && require("fs"),
    M.WO = function(t, i) {
        if (t) if (t instanceof Array) for (var e = 0, n = t.length; n > e && i.call(k, t[e], e) !== r; e++);
        else for (e in t) if (i.call(k, t[e], e) === r) break
    },
    M.extend = function(t) {
        var i = 2 <= arguments.length ? Array.prototype.slice.call(arguments, 1) : [];
        return M.WO(i,
            function(i) {
                for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e])
            }),
            t
    },
    M.Vb = function(t) {
        return "function" == typeof t
    },
    M.Kt = function(t) {
        return "number" == typeof t || "[object Number]" == Object.prototype.toString.call(t)
    },
    M.zd = function(t) {
        return "string" == typeof t || "[object String]" == Object.prototype.toString.call(t)
    },
    M.isArray = function(t) {
        return "[object Array]" == Object.prototype.toString.call(t)
    },
    M.ck = function(t) {
        return "undefined" == typeof t
    },
    M.wq = function(t) {
        var i = typeof t;
        return "function" == i || t && "object" == i
    },
    M.Dl = function(t) {
        if (!t) return M.log("invalid URL"),
            r;
        var i = t.indexOf("://");
        return - 1 == i ? r: (i = t.indexOf("/", i + 3), ( - 1 == i ? t: t.substring(0, i)) != location.origin)
    },
    M.async = {
        qla: function(t, i, e) {
            return t = new aa(t, 1,
                function(t, i, n) {
                    t.call(e, n)
                },
                i, e),
                t.gq(),
                t
        },
        mka: function(t, i, e) {
            return t = new aa(t, 0,
                function(t, i, n) {
                    t.call(e, n)
                },
                i, e),
                t.gq(),
                t
        },
        joa: function(t, i, e) {
            var n = [],
                r = [q],
                s = new aa(t, 1,
                    function(i, s, h) {
                        n.push(function() {
                            n = Array.prototype.slice.call(arguments, 1),
                            t.length - 1 == s && (r = r.concat(n)),
                                h.apply(q, arguments)
                        }),
                            i.apply(e, n)
                    },
                    function(t) {
                        if (i) {
                            if (t) return i.call(e, t);
                            i.apply(e, r)
                        }
                    });
            return s.gq(),
                s
        },
        map: function(t, i, e, n) {
            var r = i;
            return "object" == typeof i && (e = i.sn, n = i.vha, r = i.uha),
                t = new aa(t, 0, r, e, n),
                t.gq(),
                t
        },
        sja: function(t, i, e, n, r) {
            return t = new aa(t, i, e, n, r),
                t.gq(),
                t
        }
    },
    M.path = {
        join: function() {
            for (var t = arguments.length, i = "", e = 0; t > e; e++) i = (i + ("" == i ? "": "/") + arguments[e]).replace(/(\/|\\\\)$/, "");
            return i
        },
        xl: function(t) {
            return (t = /(\.[^\.\/\?\\]*)(\?.*)?$/.exec(t)) ? t[1] : q
        },
        rja: function(t) {
            if (t) {
                var i = t.lastIndexOf(".");
                if ( - 1 !== i) return t.substring(0, i)
            }
            return t
        },
        d1: function(t, i) {
            var e = t.indexOf("?");
            return e > 0 && (t = t.substring(0, e)),
                (e = /(\/|\\\\)([^(\/|\\\\)]+)$/g.exec(t.replace(/(\/|\\\\)$/, ""))) ? (e = e[2], i && t.substring(t.length - i.length).toLowerCase() == i.toLowerCase() ? e.substring(0, e.length - i.length) : e) : q
        },
        dirname: function(t) {
            return t.replace(/((.*)(\/|\\|\\\\))?(.*?\..*$)?/, "$2")
        },
        vO: function(t, i) {
            i = i || "";
            var e = t.indexOf("?"),
                n = "";
            return e > 0 && (n = t.substring(e), t = t.substring(0, e)),
                e = t.lastIndexOf("."),
                0 > e ? t + i + n: t.substring(0, e) + i + n
        },
        Xp: function(t, i, e) {
            if (0 == i.indexOf(".")) return this.vO(t, i);
            var n = t.indexOf("?"),
                r = "";
            return e = e ? this.xl(t) : "",
            n > 0 && (r = t.substring(n), t = t.substring(0, n)),
                n = t.lastIndexOf("/"),
            t.substring(0, 0 >= n ? 0: n + 1) + i + e + r
        }
    },
    M.aa = {
        DM: {},
        qx: {},
        kZ: {},
        nm: {},
        vz: "",
        a1: "",
        dg: {},
        yy: function() {
            return window.XMLHttpRequest ? new window.XMLHttpRequest: new ActiveXObject("MSXML2.XMLHTTP")
        },
        $L: function(t) {
            var i = t[0],
                e = t[1],
                n = t[2],
                r = ["", q, q];
            return 1 === t.length ? r[1] = i instanceof Array ? i: [i] : 2 === t.length ? "function" == typeof e ? (r[1] = i instanceof Array ? i: [i], r[2] = e) : (r[0] = i || "", r[1] = e instanceof Array ? e: [e]) : 3 === t.length ? (r[0] = i || "", r[1] = e instanceof Array ? e: [e], r[2] = n) : b("arguments error to load js!"),
                r
        },
        i5: function() {
            var t = this,
                i = t.DM,
                e = t.$L(arguments),
                n = e[0],
                s = e[1],
                e = e[2]; - 1 < navigator.userAgent.indexOf("Trident/5") ? t.IM(n, s, 0, e) : M.async.map(s,
                function(e, s, h) {
                    return e = M.path.join(n, e),
                        i[e] ? h(q) : (t.MK(e, r, h), void 0)
                },
                e)
        },
        yQ: function() {
            var t = this.pZ(),
                i = this.$L(arguments);
            this.i5(i[0], i[1],
                function(e) {
                    e && b(e),
                        t.parentNode.removeChild(t),
                    i[2] && i[2]()
                })
        },
        MK: function(t, i, e) {
            var n = document,
                s = M.Wb("script");
            s.async = i,
                s.src = t,
                this.DM[t] = p,
                M.Na(s, "load",
                    function() {
                        s.parentNode.removeChild(s),
                            this.removeEventListener("load", arguments.callee, r),
                            e()
                    },
                    r),
                M.Na(s, "error",
                    function() {
                        s.parentNode.removeChild(s),
                            e("Load " + t + " failed!")
                    },
                    r),
                n.body.appendChild(s)
        },
        IM: function(t, i, e, n) {
            if (e >= i.length) n && n();
            else {
                var s = this;
                s.MK(M.path.join(t, i[e]), r,
                    function(r) {
                        return r ? n(r) : (s.IM(t, i, e + 1, n), void 0)
                    })
            }
        },
        pZ: function() {
            var t = document,
                i = t.getElementById("cocos2d_loadJsImg");
            if (!i) {
                i = M.Wb("img"),
                M.LM && (i.src = M.LM),
                    t = t.getElementById(M.Lb.Je.id),
                    t.style.backgroundColor = "black",
                    t.parentNode.appendChild(i);
                var e = getComputedStyle ? getComputedStyle(t) : t.currentStyle;
                e || (e = {
                    width: t.width,
                    height: t.height
                }),
                    i.style.left = t.offsetLeft + (parseFloat(e.width) - i.width) / 2 + "px",
                    i.style.top = t.offsetTop + (parseFloat(e.height) - i.height) / 2 + "px",
                    i.style.position = "absolute"
            }
            return i
        },
        cz: function(t, i) {
            if (M.vM) require("fs").Cka(t,
                function(t, e) {
                    t ? i(t) : i(q, e.toString())
                });
            else {
                var e = this.yy(),
                    n = "load " + t + " failed!";
                e.open("GET", t, p),
                    /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (e.setRequestHeader("Accept-Charset", "utf-8"), e.onreadystatechange = function() {
                        4 == e.readyState && (200 == e.status ? i(q, e.responseText) : i(n))
                    }) : (e.overrideMimeType && e.overrideMimeType("text/plain; charset=utf-8"), e.onload = function() {
                        4 == e.readyState && (200 == e.status ? i(q, e.responseText) : i(n))
                    }),
                    e.send(q)
            }
        },
        JM: function(t) {
            if (M.vM) return require("fs").Dka(t).toString();
            var i = this.yy();
            return i.open("GET", t, r),
                /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? i.setRequestHeader("Accept-Charset", "utf-8") : i.overrideMimeType && i.overrideMimeType("text/plain; charset=utf-8"),
                i.send(q),
                4 == !i.readyState || 200 != i.status ? q: i.responseText
        },
        g5: function(t, i) {
            var e = new XMLHttpRequest;
            e.open("GET", t, p),
                e.responseType = "arraybuffer",
                e.onload = function() {
                    var n = e.response;
                    n && (window.wja = n),
                    4 == e.readyState && (200 == e.status ? i(q, e.response) : i("load " + t + " failed!"))
                },
                e.send(q)
        },
        zQ: function(t, i) {
            this.cz(t,
                function(e, n) {
                    try {
                        e ? i(e) : i(q, JSON.parse(n))
                    } catch(r) {
                        b("load json [" + t + "] failed : " + r)
                    }
                })
        },
        GK: function(t) {
            return /(\.png)|(\.jpg)|(\.bmp)|(\.jpeg)|(\.gif)/.exec(t) != q
        },
        Aq: function(t, i, e) {
            function n() {
                this.removeEventListener("error", n, r),
                    a.crossOrigin && "anonymous" == a.crossOrigin.toLowerCase() ? (h.Dl = r, M.aa.Aq(t, h, e)) : "function" == typeof e && e("load image failed")
            }
            function s() {
                this.removeEventListener("load", s, r),
                    this.removeEventListener("error", n, r),
                e && e(q, a)
            }
            var h = {
                Dl: p
            };
            e !== k ? h.Dl = i.Dl == q ? h.Dl: i.Dl: i !== k && (e = i);
            var a = new Image;
            return h.Dl && "file://" != location.origin && (a.crossOrigin = "Anonymous"),
                M.Na(a, "load", s),
                M.Na(a, "error", n),
                a.src = t,
                a
        },
        qZ: function(t, i, e) {
            var n = this,
                r = q; (i = t.type) ? (i = "." + i.toLowerCase(), r = t.src ? t.src: t.name + i) : (r = t, i = M.path.xl(r));
            var s = n.dg[r];
            return s ? e(q, s) : (s = q, i && (s = n.qx[i.toLowerCase()]), s ? (i = n.J3(s.oy ? s.oy() : n.vz, r), s.load(i, r, t,
                function(t, i) {
                    t ? (M.log(t), n.dg[r] = q, delete n.dg[r], e()) : (n.dg[r] = i, e(q, i))
                }), void 0) : (M.error("loader for [" + i + "] not exists!"), e()))
        },
        J3: function(t, i) {
            var e = this.kZ,
                n = M.path;
            if (t !== k && i === k) {
                i = t;
                var r = n.xl(i),
                    r = r ? r.toLowerCase() : "";
                t = (r = this.qx[r]) ? r.oy ? r.oy() : this.vz: this.vz
            }
            if (i = M.path.join(t || "", i), i.match(/[\/(\\\\)]lang[\/(\\\\)]/i)) {
                if (e[i]) return e[i];
                n = n.xl(i) || "",
                    i = e[i] = i.substring(0, i.length - n.length) + "_" + M.qa.language + n
            }
            return i
        },
        load: function(t, i, e) {
            var n = this,
                r = arguments.length;
            return 0 == r && b("arguments error!"),
                3 == r ? "function" == typeof i && (i = "function" == typeof e ? {
                    fS: i,
                    sn: e
                }: {
                    sn: i,
                    p1: e
                }) : 2 == r ? "function" == typeof i && (i = {
                    sn: i
                }) : 1 == r && (i = {}),
            t instanceof Array || (t = [t]),
                r = new aa(t, 0,
                    function(t, e, r, s) {
                        n.qZ(t, e,
                            function(t) {
                                if (t) return r(t);
                                var e = Array.prototype.slice.call(arguments, 1);
                                i.fS && i.fS.call(i.Yna, e[0], s.size, s.JF),
                                    r(q, e[0])
                            })
                    },
                    i.sn, i.p1),
                r.gq(),
                r
        },
        kM: function(t, i) {
            var e,
                n = this.nm,
                r = [];
            for (e in t) {
                var s = t[e];
                n[e] = s,
                    r.push(s)
            }
            this.load(r, i)
        },
        oja: function(t, i) {
            var e = this,
                n = e.Yd(t);
            n ? e.kM(n.filenames, i) : e.load(t,
                function(t, n) {
                    e.kM(n[0].filenames, i)
                })
        },
        ej: function(t, i) {
            if (t && i) {
                if ("string" == typeof t) return this.qx[t.trim().toLowerCase()] = i;
                for (var e = 0, n = t.length; n > e; e++) this.qx["." + t[e].trim().toLowerCase()] = i
            }
        },
        Yd: function(t) {
            return this.dg[t] || this.dg[this.nm[t]]
        },
        fj: function(t) {
            var i = this.dg,
                e = this.nm;
            delete i[t],
                delete i[e[t]],
                delete e[t]
        },
        Mka: function() {
            var t,
                i = this.dg,
                e = this.nm;
            for (t in i) delete i[t];
            for (t in e) delete e[t]
        }
    },
    M.KF = function() {
        var t = arguments,
            i = t.length;
        if (1 > i) return "";
        var e = t[0],
            n = p;
        "object" == typeof e && (n = r);
        for (var s = 1; i > s; ++s) {
            var h = t[s];
            if (n) for (;;) {
                var a = q;
                if ("number" == typeof h && (a = e.match(/(%d)|(%s)/))) {
                    e = e.replace(/(%d)|(%s)/, h);
                    break
                }
                e = (a = e.match(/%s/)) ? e.replace(/%s/, h) : e + ("    " + h);
                break
            } else e += "    " + h
        }
        return e
    },
    function() {
        function t() {
            M.wa && M.Lb.os && M.wa.dispatchEvent(M.Lb.os),
            M.Lb.Bm && (window.cancelAnimationFrame(M.Lb.Bm), M.Lb.YD())
        }
        function i() {
            M.wa && M.Lb.ns && M.wa.dispatchEvent(M.Lb.ns)
        }
        var e,
            n,
            s = window;
        M.ck(document.hidden) ? M.ck(document.uja) ? M.ck(document.vja) ? M.ck(document.moa) || (e = "webkitHidden", n = "webkitvisibilitychange") : (e = "msHidden", n = "msvisibilitychange") : (e = "mozHidden", n = "mozvisibilitychange") : (e = "hidden", n = "visibilitychange"),
            e ? M.Na(document, n,
                function() {
                    document[e] ? i() : t()
                },
                r) : (M.Na(s, "blur", i, r), M.Na(s, "focus", t, r)),
        -1 < navigator.userAgent.indexOf("MicroMessenger") && (s.onfocus = function() {
            t()
        }),
        "onpageshow" in window && "onpagehide" in window && (M.Na(s, "pagehide", i, r), M.Na(s, "pageshow", t, r)),
            n = s = q
    } (),
    M.log = M.warn = M.error = M.assert = z(),
    M.FO = function(t, i) {
        for (var e = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], n = q, r = 0; r < e.length; ++r) {
            try {
                n = t.getContext(e[r], i)
            } catch(s) {}
            if (n) break
        }
        return n
    },
    M.ZY = function(t, i) {
        M.ya = 0,
            M.Z = 1,
            M.qa = {};
        var e = M.qa;
        e.$T = "en",
            e.i$ = "zh",
            e.k$ = "fr",
            e.n$ = "it",
            e.l$ = "de",
            e.u$ = "es",
            e.j$ = "du",
            e.t$ = "ru",
            e.p$ = "ko",
            e.o$ = "ja",
            e.m$ = "hu",
            e.s$ = "pt",
            e.h$ = "ar",
            e.q$ = "no",
            e.r$ = "pl",
            e.xI = "Windows",
            e.po = "iOS",
            e.LA = "OS X",
            e.CU = "UNIX",
            e.wI = "Linux",
            e.vI = "Android",
            e.DU = "Unknown",
            e.zaa = 0,
            e.v$ = 1,
            e.w$ = 2,
            e.V8 = 3,
            e.f$ = 4,
            e.e$ = 5,
            e.e9 = 6,
            e.A$ = 7,
            e.P9 = 8,
            e.eaa = 9,
            e.Aaa = 10,
            e.Baa = 11,
            e.hU = 100,
            e.bT = 101,
            e.cA = "wechat",
            e.CS = "androidbrowser",
            e.$z = "ie",
            e.ES = "qqbrowser",
            e.OH = "mqqbrowser",
            e.PH = "ucbrowser",
            e.h9 = "360browser",
            e.DS = "baiduboxapp",
            e.NH = "baidubrowser",
            e.i9 = "maxthon",
            e.aA = "opera",
            e.k9 = "oupeng",
            e.j9 = "miuibrowser",
            e.$q = "firefox",
            e.bA = "safari",
            e.Zz = "chrome",
            e.FS = "unknown",
            e.gha = r;
        var n = [e.NH, e.aA, e.$q, e.Zz, e.bA],
            s = [e.po, e.xI, e.LA, e.wI],
            h = [e.NH, e.aA, e.$q, e.Zz, e.DS, e.bA, e.PH, e.ES, e.OH, e.$z],
            a = window,
            o = a.navigator,
            c = document.documentElement,
            u = o.userAgent.toLowerCase();
        e.hh = -1 != u.indexOf("mobile") || -1 != u.indexOf("android"),
            e.platform = e.hh ? e.hU: e.bT;
        var f = o.language,
            f = (f = f ? f: o.browserLanguage) ? f.split("-")[0] : e.$T;
        e.language = f;
        var f = e.FS,
            l = u.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baiduboxapp|baidubrowser|maxthon|trident|oupeng|opera|miuibrowser|firefox/i) || u.match(/chrome|safari/i);
        if (l && 0 < l.length && (f = l[0].toLowerCase(), "micromessenger" == f ? f = e.cA: "safari" === f && u.match(/android.*applewebkit/) ? f = e.CS: "trident" == f && (f = e.$z)), e.Vh = f, f = u.match(/(iPad|iPhone|iPod)/i) ? p: r, u = u.match(/android/i) || o.platform.match(/android/i) ? p: r, l = e.DU, -1 != o.appVersion.indexOf("Win") ? l = e.xI: f ? l = e.po: -1 != o.appVersion.indexOf("Mac") ? l = e.LA: -1 != o.appVersion.indexOf("X11") ? l = e.CU: u ? l = e.vI: -1 != o.appVersion.indexOf("Linux") && (l = e.wI), e.Kl = l, e.c0 = -1 < h.indexOf(e.Vh), h = parseInt(t[i.ku]), u = M.Z, f = M.Wb("Canvas"), M.Hx = p, n = !window.WebGLRenderingContext || -1 == n.indexOf(e.Vh) || -1 == s.indexOf(e.Kl), (1 === h || 0 === h && n || "file://" == location.origin) && (u = M.ya), e.tX = function() {
                var t = document.createElement("canvas");
                t.width = 1,
                    t.height = 1,
                    t = t.getContext("2d"),
                    t.fillStyle = "#000",
                    t.fillRect(0, 0, 1, 1),
                    t.globalCompositeOperation = "multiply";
                var i = document.createElement("canvas");
                i.width = 1,
                    i.height = 1;
                var e = i.getContext("2d");
                return e.fillStyle = "#fff",
                    e.fillRect(0, 0, 1, 1),
                    t.drawImage(i, 0, 0, 1, 1),
                0 === t.getImageData(0, 0, 1, 1).data[0]
            },
                e.Gx = e.tX(), u != M.Z || a.WebGLRenderingContext && M.FO(f, {
                stencil: p,
                preserveDrawingBuffer: p
            }) || (0 == h ? u = M.ya: M.Hx = r), u == M.ya) try {
            f.getContext("2d")
        } catch(d) {
            M.Hx = r
        }
        M.B = u;
        try {
            e.Ix = !!new(a.AudioContext || a.webkitAudioContext || a.mozAudioContext)
        } catch(g) {
            e.Ix = r
        }
        try {
            var b = e.localStorage = a.localStorage;
            b.setItem("storage", ""),
                b.removeItem("storage"),
                b = q
        } catch(v) { ("SECURITY_ERR" === v.name || "QuotaExceededError" === v.name) && M.warn("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option"),
            e.localStorage = z()
        }
        b = e.nF = {
            canvas: p
        },
        M.B == M.Z && (b.opengl = p),
        (c.ontouchstart !== k || o.msPointerEnabled) && (b.touches = p),
        c.onmouseup !== k && (b.mouse = p),
        c.onkeyup !== k && (b.keyboard = p),
        (a.DeviceMotionEvent || a.DeviceOrientationEvent) && (b.accelerometer = p),
            e.bea = z(),
            e.fda = z(),
            e.fla = z(),
            e.dda = function() {
                var t;
                t = "" + ("isMobile : " + this.hh + "\r\n"),
                    t += "language : " + this.language + "\r\n",
                    t += "browserType : " + this.Vh + "\r\n",
                    t += "capabilities : " + JSON.stringify(this.nF) + "\r\n",
                    t += "os : " + this.Kl + "\r\n",
                    t += "platform : " + this.platform + "\r\n",
                    M.log(t)
            }
    },
    M.H$ = 0,
    M.I$ = 1,
    M.F$ = 2,
    M.G$ = 3,
    M.ye = q,
    M.l = q,
    M.fb = q,
    M.eY = q,
    M.rx = r,
    M.DN = r,
    M.S_ = function(t) {
        var i,
            e;
        if (!M.DN) {
            M.DN = p;
            var n = window,
                s = new Date,
                h = 1e3 / M.Lb.Je[M.Lb.xg.yt],
                a = function(t) {
                    var i = (new Date).getTime(),
                        e = Math.max(0, h - (i - s)),
                        n = window.setTimeout(function() {
                                t()
                            },
                            e);
                    return s = i + e,
                        n
                },
                o = function(t) {
                    clearTimeout(t)
                };
            M.qa.Kl === M.qa.po && M.qa.Vh === M.qa.cA ? (n.uz = a, n.cancelAnimationFrame = o) : 60 != M.Lb.Je[M.Lb.xg.yt] ? (n.uz = a, n.cancelAnimationFrame = o) : (n.uz = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || n.msRequestAnimationFrame || a, n.cancelAnimationFrame = window.cancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || o),
                o = M.Ab(t) || M.Ab("#" + t),
                "CANVAS" == o.tagName ? (i = i || o.width, e = e || o.height, a = M.un = M.Wb("DIV"), t = M.fb = o, t.parentNode.insertBefore(a, t), t.lO(a), a.setAttribute("id", "Cocos2dGameContainer")) : ("DIV" != o.tagName && M.log("Warning: target element is not a DIV or CANVAS"), i = i || o.clientWidth, e = e || o.clientHeight, a = M.un = o, t = M.fb = M.Ab(M.Wb("CANVAS")), o.appendChild(t)),
                t.jO("gameCanvas"),
                t.setAttribute("width", i || 480),
                t.setAttribute("height", e || 320),
                t.setAttribute("tabindex", 99),
                t.style.outline = "none",
                o = a.style,
                o.width = (i || 480) + "px",
                o.height = (e || 320) + "px",
                o.margin = "0 auto",
                o.position = "relative",
                o.overflow = "hidden",
                a.top = "100%",
            M.B == M.Z && (M.l = M.loa = M.FO(t, {
                stencil: p,
                preserveDrawingBuffer: p,
                antialias: !M.qa.hh,
                alpha: r
            })),
                M.l ? (n.gl = M.l, M.ye = new M.oT(M.l), M.rx = p, M.Ma.bZ(), M.be.xs()) : (M.l = t.getContext("2d"), M.kba = M.l, M.l.translate(0, t.height), M.ye = M.bI ? new M.bI(M.l) : q),
                M.eY = a,
                M.log(M.pA),
                M.s_(),
            M.qa.hh && (i = M.Wb("style"), i.type = "text/css", document.body.appendChild(i), i.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}"),
                M.view = M.nA.HC(),
                M.eQ.a6(M.fb),
                M.K = M.cb.HC(),
            M.K.Iz && M.K.Iz(M.view),
                M.Eu = M.K.Ea(),
                M.lla = new M.wv,
                M.L5 = new M.QU
        }
    },
    M.lC = function() {
        M.B !== M.Z && b("This feature supports WebGL render mode only.")
    },
    M.tM = r,
    M.s_ = function() {
        M.tM = r,
            M.fb.oncontextmenu = function() {
                return M.tM ? void 0: r
            }
    },
    M.Lb = {
        $S: 0,
        YS: 1,
        x9: 2,
        VH: 3,
        ZS: 4,
        y9: 5,
        XS: 6,
        qA: "game_on_hide",
        Ou: "game_on_show",
        ns: q,
        os: q,
        oba: [],
        xg: {
            HF: "engineDir",
            Pca: "dependencies",
            ut: "debugMode",
            G7: "showFPS",
            yt: "frameRate",
            id: "id",
            ku: "renderMode",
            w4: "jsList",
            r1: "classReleaseMode"
        },
        ZM: r,
        nx: r,
        wc: p,
        Bm: q,
        Je: q,
        EQ: q,
        Qja: q,
        Xla: function(t) {
            this.Je[this.xg.yt] = t,
            this.Bm && window.cancelAnimationFrame(this.Bm),
                this.wc = p,
                this.YD()
        },
        YD: function() {
            var t,
                i = this,
                e = M.K;
            e.M6(i.Je[i.xg.G7]),
                t = function() {
                    i.wc || (e.n5(), i.Bm && window.cancelAnimationFrame(i.Bm), i.Bm = window.uz(t))
                },
                window.uz(t),
                i.wc = r
        },
        y6: function(t) {
            function i() {
                t && (e.Je[e.xg.id] = t),
                e.ZM || e.P5(function() {
                    e.nx = p
                }),
                M.Hx && (e.uX = setInterval(function() {
                        e.nx && (M.S_(e.Je[e.xg.id]), e.YD(), e.ns = e.ns || new M.bm(e.qA), e.ns.setUserData(e), e.os = e.os || new M.bm(e.Ou), e.os.setUserData(e), e.EQ(), clearInterval(e.uX))
                    },
                    10))
            }
            var e = this;
            document.body ? i() : M.Na(window, "load",
                function() {
                    this.removeEventListener("load", arguments.callee, r),
                        i()
                },
                r)
        },
        TY: function() {
            function t(t) {
                return t[i.HF] = t[i.HF] || "frameworks/cocos2d-html5",
                t[i.ut] == q && (t[i.ut] = 0),
                    t[i.yt] = t[i.yt] || 60,
                t[i.ku] == q && (t[i.ku] = 1),
                    t
            }
            var i = this.xg;
            if (document.ccConfig) this.Je = t(document.ccConfig);
            else try {
                for (var e = document.getElementsByTagName("script"), n = 0; n < e.length; n++) {
                    var r = e[n].getAttribute("cocos");
                    if ("" == r || r) break
                }
                var s,
                    h,
                    a;
                n < e.length && ((s = e[n].src) && (a = /(.*)\//.exec(s)[0], M.aa.vz = a, s = M.path.join(a, "project.json")), h = M.aa.JM(s)),
                h || (h = M.aa.JM("project.json"));
                var o = JSON.parse(h);
                this.Je = t(o || {})
            } catch(c) {
                M.log("Failed to read or parse project.json"),
                    this.Je = t({})
            }
            M.ZY(this.Je, i)
        },
        iZ: {},
        dM: function(t, i, e) {
            var n = this.iZ;
            if (n[i]) return q;
            e = e || "";
            var r = [],
                s = t[i];
            s || b("can not find module [" + i + "]"),
                i = M.path;
            for (var h = 0, a = s.length; a > h; h++) {
                var o = s[h];
                if (!n[o]) {
                    var c = i.xl(o);
                    c ? ".js" == c.toLowerCase() && r.push(i.join(e, o)) : (c = this.dM(t, o, e)) && (r = r.concat(c)),
                        n[o] = 1
                }
            }
            return r
        },
        P5: function(t) {
            var i = this,
                e = i.Je,
                n = i.xg,
                r = e[n.HF],
                s = M.aa;
            M.Hx || b("The renderer doesn't support the renderMode " + e[n.ku]),
                i.ZM = p;
            var h = e[n.w4] || [];
            M.xa ? s.yQ("", h,
                function(e) {
                    e && b(e),
                        i.nx = p,
                    t && t()
                }) : (n = M.path.join(r, "moduleConfig.json"), s.zQ(n,
                function(n, s) {
                    n && b(n);
                    var a = e.modules || [],
                        o = s.module,
                        c = [];
                    M.B == M.Z ? a.splice(0, 0, "shaders") : 0 > a.indexOf("core") && a.splice(0, 0, "core");
                    for (var u = 0, f = a.length; f > u; u++) {
                        var l = i.dM(o, a[u], r);
                        l && (c = c.concat(l))
                    }
                    c = c.concat(h),
                        M.aa.yQ(c,
                            function(e) {
                                e && b(e),
                                    i.nx = p,
                                t && t()
                            })
                }))
        }
    },
    M.Lb.TY(),
    Function.prototype.bind = Function.prototype.bind ||
        function(t) {
            function i() {
                return r.apply(this instanceof e && t ? this: t, n.concat(Array.prototype.slice.call(arguments)))
            }
            function e() {}
            M.Vb(this) || b(new TypeError("Function.prototype.bind - what is trying to be bound is not callable"));
            var n = Array.prototype.slice.call(arguments, 1),
                r = this;
            return e.prototype = this.prototype,
                i.prototype = new e,
                i
        },
    M.i = {
        GH: "cc.ActionManager.addAction(): action must be non-null",
        zS: "cocos2d: removeAction: Target not found",
        Z8: "cc.ActionManager.removeActionByTag(): an invalid tag",
        a9: "cc.ActionManager.removeActionByTag(): target must be non-null",
        xS: "cc.ActionManager.getActionByTag(): an invalid tag",
        yS: "cocos2d : getActionByTag(tag = %s): Action not found",
        v1: "cocos2d: **** WARNING **** CC_ENABLE_PROFILERS is defined. Disable it when you finish profiling (from ccConfig.js)",
        w1: "Expected 'data' dict, but not found. Config file: %s",
        x1: "Please load the resource first : %s",
        hT: "cocos2d: Director: Error in gettimeofday",
        iT: "cocos2d: Director: unrecognized projection",
        O9: "cocos2d: Director: unrecognized projection",
        gT: "cocos2d: Director: Error in gettimeofday",
        fT: "running scene should not null",
        $H: "the scene should not null",
        ot: "element type is wrong!",
        kV: "CCSheduler#scheduleCallback. Callback already scheduled. Updating interval from:%s to %s",
        lV: "cc.scheduler.scheduleCallbackForTarget(): callback_fn should be non-null.",
        mV: "cc.scheduler.scheduleCallbackForTarget(): target should be non-null.",
        iV: "cc.Scheduler.pauseTarget():target should be non-null",
        jV: "cc.Scheduler.resumeTarget():target should be non-null",
        hV: "cc.Scheduler.isTargetPaused():target should be non-null",
        pU: "getZOrder is deprecated. Please use getLocalZOrder instead.",
        zU: "setZOrder is deprecated. Please use setLocalZOrder instead.",
        nU: "RotationX != RotationY. Don't know which one to return",
        oU: "ScaleX != ScaleY. Don't know which one to return",
        B$: "An Node can't be added as a child of itself.",
        C$: "child already added. It can't be added again",
        kU: "child must be non-null",
        tU: "removeFromParentAndCleanup is deprecated. Use removeFromParent instead",
        lU: "boundingBox is deprecated. Use getBoundingBox instead",
        rU: "argument tag is an invalid tag",
        sU: "cocos2d: removeChildByTag(tag = %s): child not found!",
        E$: "removeAllChildrenWithCleanup is deprecated. Use removeAllChildren instead",
        AU: "cc.Node.stopActionBy(): argument tag an invalid tag",
        mU: "cc.Node.getActionByTag(): argument tag is an invalid tag",
        vU: "resumeSchedulerAndActions is deprecated, please use resume instead.",
        qU: "pauseSchedulerAndActions is deprecated, please use pause instead.",
        jU: "Unknown callback function",
        uU: "child must be non-null",
        wU: "cc.Node.runAction(): action must be non-null",
        xU: "callback function must be non-null",
        yU: "interval must be positive",
        D$: "cocos2d: Could not initialize cc.AtlasNode. Invalid Texture.",
        BS: "cc.AtlasNode.updateAtlasValues(): Shall be overridden in subclasses",
        d9: "",
        IH: "cocos2d: Could not initialize cc.AtlasNode. Invalid Texture.",
        QW: "cc._EventListenerKeyboard.checkAvailable(): Invalid EventListenerKeyboard!",
        SW: "cc._EventListenerTouchOneByOne.checkAvailable(): Invalid EventListenerTouchOneByOne!",
        RW: "cc._EventListenerTouchAllAtOnce.checkAvailable(): Invalid EventListenerTouchAllAtOnce!",
        PW: "cc._EventListenerAcceleration.checkAvailable(): _onAccelerationEvent must be non-nil",
        wT: "Invalid parameter.",
        Vv: "Don't call this method if the event is for touch.",
        e2: "Invalid scene graph priority!",
        f2: "0 priority is forbidden for fixed priority since it's used for scene graph based priority.",
        j2: "Invalid listener type!",
        k2: "Can't set fixed priority with scene graph based listener.",
        g2: "Invalid parameters.",
        h2: "listener must be a cc.EventListener object when adding a fixed priority listener",
        i2: "The listener has been registered, please don't register it again.",
        cU: "parameters should not be ending with null in Javascript",
        dU: "Invalid index in MultiplexLayer switchTo message",
        eU: "Invalid index in MultiplexLayer switchTo message",
        bU: "cc.Layer.addLayer(): layer should be non-null",
        pT: "Resolution not valid",
        qT: "should set resolutionPolicy",
        k4: "The touches is more than MAX_TOUCHES, nUnusedIndex = %s",
        XR: "cc.swap is being modified from original macro, please check usage",
        Zp: "WebGL error %s",
        P0: "cocos2d: cc.AnimationCache: No animations were found in provided dictionary.",
        Q0: "cc.AnimationCache. Invalid animation format",
        X0: "cc.AnimationCache.addAnimations(): File could not be found",
        R0: "cocos2d: cc.AnimationCache: Animation '%s' found in dictionary without any frames - cannot add to animation cache.",
        S0: "cocos2d: cc.AnimationCache: Animation '%s' refers to frame '%s' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.",
        T0: "cocos2d: cc.AnimationCache: None of the frames for animation '%s' were found in the cc.SpriteFrameCache. Animation is not being added to the Animation Cache.",
        U0: "cocos2d: cc.AnimationCache: An animation in your dictionary refers to a frame which is not in the cc.SpriteFrameCache. Some or all of the frames for the animation '%s' may be missing.",
        V0: "cocos2d: CCAnimationCache: Animation '%s' found in dictionary without any frames - cannot add to animation cache.",
        W0: "cocos2d: cc.AnimationCache: Animation '%s' refers to frame '%s' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.",
        Y0: "cc.AnimationCache.addAnimations(): Invalid texture file name",
        LV: "cc.Sprite.reorderChild(): this child is not in children list",
        DV: "cc.Sprite.ignoreAnchorPointForPosition(): it is invalid in cc.Sprite when using SpriteBatchNode",
        OV: "cc.Sprite.setDisplayFrameWithAnimationName(): Frame not found",
        PV: "cc.Sprite.setDisplayFrameWithAnimationName(): Invalid frame index",
        NV: "setDisplayFrame is deprecated, please use setSpriteFrame instead.",
        wV: "cc.Sprite._updateBlendFunc(): _updateBlendFunc doesn't work when the sprite is rendered using a cc.CCSpriteBatchNode",
        FV: "cc.Sprite.initWithSpriteFrame(): spriteFrame should be non-null",
        GV: "cc.Sprite.initWithSpriteFrameName(): spriteFrameName should be non-null",
        HV: " is null, please check.",
        EV: "cc.Sprite.initWithFile(): filename should be non-null",
        QV: "cc.Sprite.setDisplayFrameWithAnimationName(): animationName must be non-null",
        MV: "cc.Sprite.reorderChild(): child should be non-null",
        xV: "cc.Sprite.addChild(): cc.Sprite only supports cc.Sprites as children when using cc.SpriteBatchNode",
        yV: "cc.Sprite.addChild(): cc.Sprite only supports a sprite using same texture as children when using cc.SpriteBatchNode",
        zV: "cc.Sprite.addChild(): child should be non-null",
        SV: "cc.Sprite.texture setter: Batched sprites should use the same texture as the batchnode",
        V$: "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
        JV: "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
        AV: "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children",
        BV: "cc.SpriteBatchNode.addChild(): cc.Sprite is not using the same texture",
        IV: "Sprite.initWithTexture(): Argument must be non-nil ",
        RV: "Invalid spriteFrameName",
        TV: "Invalid argument: cc.Sprite.texture setter expects a CCTexture2D.",
        W$: "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null",
        KV: "cc.SpriteBatchNode.insertQuadFromSprite(): sprite should be non-null",
        CV: "cc.SpriteBatchNode.addChild(): child should be non-null",
        pV: "cc.SpriteBatchNode.addQuadFromSprite(): SpriteBatchNode only supports cc.Sprites as children",
        rV: "cocos2d: CCSpriteBatchNode: resizing TextureAtlas capacity from %s to %s.",
        sV: "cocos2d: WARNING: Not enough memory to resize the atlas",
        uV: "cc.SpriteBatchNode.addChild(): Child doesn't belong to Sprite",
        tV: "cc.SpriteBatchNode.addChild(): sprite batch node should contain the child",
        qV: "cc.SpriteBatchNode.addQuadFromSprite(): child should be non-null",
        vV: "cc.SpriteBatchNode.addChild():child should be non-null",
        N7: "cocos2d: WARNING: originalWidth/Height not found on the cc.SpriteFrame. AnchorPoint won't work as expected. Regenrate the .plist",
        P7: "cocos2d: WARNING: an alias with name %s already exists",
        M7: "cocos2d: WARNING: Sprite frame: %s has already been added by another source, please fix name conflit",
        S7: "cocos2d: cc.SpriteFrameCahce: Frame %s not found",
        O7: "Please load the resource first : %s",
        Q7: "cc.SpriteFrameCache.addSpriteFrames(): plist should be non-null",
        R7: "Argument must be non-nil",
        fA: "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
        NS: "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
        JS: "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children",
        MS: "Sprite.initWithTexture(): Argument must be non-nil ",
        KS: "cc.Sprite.addChild(): child should be non-null",
        PS: "Invalid spriteFrameName",
        QS: "Invalid argument: cc.Sprite texture setter expects a CCTexture2D.",
        RS: "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null",
        OS: "cc.SpriteBatchNode.insertQuadFromSprite(): sprite should be non-null",
        LS: "cc.SpriteBatchNode.addChild(): child should be non-null",
        mW: "cocos2d: Could not open file: %s",
        vJ: "cc.TextureAtlas.insertQuad(): invalid totalQuads",
        nW: "cc.TextureAtlas.initWithTexture():texture should be non-null",
        xW: "cc.TextureAtlas.updateQuad(): quad should be non-null",
        yW: "cc.TextureAtlas.updateQuad(): Invalid index",
        qW: "cc.TextureAtlas.insertQuad(): Invalid index",
        rW: "cc.TextureAtlas.insertQuad(): Invalid index + amount",
        oW: "cc.TextureAtlas.insertQuadFromIndex(): Invalid newIndex",
        pW: "cc.TextureAtlas.insertQuadFromIndex(): Invalid fromIndex",
        vW: "cc.TextureAtlas.removeQuadAtIndex(): Invalid index",
        wW: "cc.TextureAtlas.removeQuadsAtIndex(): index + amount out of bounds",
        sW: "cc.TextureAtlas.moveQuadsFromIndex(): move is out of bounds",
        tW: "cc.TextureAtlas.moveQuadsFromIndex(): Invalid newIndex",
        uW: "cc.TextureAtlas.moveQuadsFromIndex(): Invalid oldIndex",
        g8: "TextureCache:addPVRTCImage does not support on HTML5",
        e8: "TextureCache:addPVRTCImage does not support on HTML5",
        l8: "textureForKey is deprecated. Please use getTextureForKey instead.",
        f8: "addPVRImage does not support on HTML5",
        h8: "cocos2d: Couldn't add UIImage in TextureCache",
        j8: "cocos2d: '%s' id=%s %s x %s",
        ZR: "cocos2d: '%s' id= HTMLCanvasElement %s x %s",
        k8: "cocos2d: TextureCache dumpDebugInfo: %s textures, HTMLCanvasElement for %s KB (%s MB)",
        i8: "cc.Texture.addUIImage(): image should be non-null",
        dW: "initWithETCFile does not support on HTML5",
        hW: "initWithPVRFile does not support on HTML5",
        jW: "initWithPVRTCData does not support on HTML5",
        $V: "cc.Texture.addImage(): path should be non-null",
        fW: "cocos2d: cc.Texture2D. Can't create Texture. UIImage is nil",
        gW: "cocos2d: WARNING: Image (%s x %s) is bigger than the supported %s x %s",
        lW: "initWithString isn't supported on cocos2d-html5",
        eW: "initWithETCFile does not support on HTML5",
        iW: "initWithPVRFile does not support on HTML5",
        kW: "initWithPVRTCData does not support on HTML5",
        bW: "bitsPerPixelForFormat: %s, cannot give useful result, it's a illegal pixel format",
        ZV: "cocos2d: cc.Texture2D: Using RGB565 texture since image has no alpha",
        aW: "cc.Texture.addImage(): path should be non-null",
        cW: "NSInternalInconsistencyException",
        Bd: "Missing file: %s",
        PQ: "cc.radiansToDegress() should be called cc.radiansToDegrees()",
        fB: "Rect width exceeds maximum margin: %s",
        dB: "Rect height exceeds maximum margin: %s",
        xT: "If program goes here, there should be event in dispatch.",
        yT: "_inDispatch should be 1 here."
    },
    M.sZ = function(t) {
        if (M.fb) {
            var i = M.rZ,
                e = document;
            if (!i) {
                var n = e.createElement("Div"),
                    i = n.style;
                n.setAttribute("id", "logInfoDiv"),
                    M.fb.parentNode.appendChild(n),
                    n.setAttribute("width", "200"),
                    n.setAttribute("height", M.fb.height),
                    i.zIndex = "99999",
                    i.position = "absolute",
                    i.top = "0",
                    i.left = "0",
                    i = M.rZ = e.createElement("textarea"),
                    e = i.style,
                    i.setAttribute("rows", "20"),
                    i.setAttribute("cols", "30"),
                    i.setAttribute("disabled", p),
                    n.appendChild(i),
                    e.backgroundColor = "transparent",
                    e.borderBottom = "1px solid #cccccc",
                    e.borderRightWidth = "0px",
                    e.borderLeftWidth = "0px",
                    e.borderTopWidth = "0px",
                    e.borderTopStyle = "none",
                    e.borderRightStyle = "none",
                    e.borderLeftStyle = "none",
                    e.padding = "0px",
                    e.margin = 0
            }
            i.value = i.value + t + "\r\n",
                i.scrollTop = i.scrollHeight
        }
    },
    M.VL = function(t) {
        if (!M.wq(t)) return t;
        try {
            return JSON.stringify(t)
        } catch(i) {
            return ""
        }
    },
    M.UY = function() {
        var t = M.Lb.Je[M.Lb.xg.ut],
            i = M.Lb;
        if (t != i.$S) {
            var e;
            t > i.VH ? (e = M.sZ.bind(M), M.error = function() {
                e("ERROR :  " + M.KF.apply(M, arguments))
            },
                M.assert = function(t, i) {
                    if (!t && i) {
                        for (var n = 2; n < arguments.length; n++) i = i.replace(/(%s)|(%d)/, M.VL(arguments[n]));
                        e("Assert: " + i)
                    }
                },
            t != i.XS && (M.warn = function() {
                e("WARN :  " + M.KF.apply(M, arguments))
            }), t == i.ZS && (M.log = function() {
                e(M.KF.apply(M, arguments))
            })) : console && (M.error = function() {
                return console.error.apply(console, arguments)
            },
                M.assert = function(t, i) {
                    if (!t && i) {
                        for (var e = 2; e < arguments.length; e++) i = i.replace(/(%s)|(%d)/, M.VL(arguments[e]));
                        b(i)
                    }
                },
            t != i.VH && (M.warn = function() {
                return console.warn.apply(console, arguments)
            }), t == i.YS && (M.log = function() {
                return console.log.apply(console, arguments)
            }))
        }
    },
    M.UY(),
    M.aa.f5 = function(t, i) {
        var e = this,
            n = this.yy(),
            r = "load " + t + " failed!";
        n.open("GET", t, p),
            /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (n.setRequestHeader("Accept-Charset", "x-user-defined"), n.onreadystatechange = function() {
                if (4 == n.readyState && 200 == n.status) {
                    var t = M.JK(n.responseBody);
                    i(q, e.Ex(t))
                } else i(r)
            }) : (n.overrideMimeType && n.overrideMimeType("text/plain; charset=x-user-defined"), n.onload = function() {
                4 == n.readyState && 200 == n.status ? i(q, e.Ex(n.responseText)) : i(r)
            }),
            n.send(q)
    },
    M.aa.Ex = function(t) {
        if (!t) return q;
        for (var i = new Uint8Array(t.length), e = 0; e < t.length; e++) i[e] = 255 & t.charCodeAt(e);
        return i
    },
    M.aa.pja = function(t) {
        var i = this.yy(),
            e = "load " + t + " failed!";
        if (i.open("GET", t, r), t = q, /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
            if (i.setRequestHeader("Accept-Charset", "x-user-defined"), i.send(q), 200 != i.status) return M.log(e),
                q; (i = M.JK(i.responseBody)) && (t = this.Ex(i))
        } else {
            if (i.overrideMimeType && i.overrideMimeType("text/plain; charset=x-user-defined"), i.send(q), 200 != i.status) return M.log(e),
                q;
            t = this.Ex(i.responseText)
        }
        return t
    };
var Uint8Array = Uint8Array || Array;
if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
    var ba = M.Wb("script");
    ba.type = "text/vbscript",
        ba.textContent = '<!-- IEBinaryToArray_ByteStr -->\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr = CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex = LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last = ""\r\n   End If\r\nEnd Function\r\n',
        document.body.appendChild(ba),
        M.JK = function(t) {
            for (var i = {},
                     e = 0; 256 > e; e++) for (var n = 0; 256 > n; n++) i[String.fromCharCode(e + 256 * n)] = String.fromCharCode(e) + String.fromCharCode(n);
            return e = IEBinaryToArray_ByteStr(t),
                t = IEBinaryToArray_ByteStr_Last(t),
            e.replace(/[\s\S]/g,
                function(t) {
                    return i[t]
                }) + t
        }
}
M = M || {},
    M.LM = "data:image/gif;base64,R0lGODlhEAAQALMNAD8/P7+/vyoqKlVVVX9/fxUVFUBAQGBgYMDAwC8vL5CQkP///wAAAP///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAANACwAAAAAEAAQAAAEO5DJSau9OOvNex0IMnDIsiCkiW6g6BmKYlBFkhSUEgQKlQCARG6nEBwOgl+QApMdCIRD7YZ5RjlGpCUCACH5BAUAAA0ALAAAAgAOAA4AAAQ6kLGB0JA4M7QW0hrngRllkYyhKAYqKUGguAws0ypLS8JxCLQDgXAIDg+FRKIA6v0SAECCBpXSkstMBAAh+QQFAAANACwAAAAACgAQAAAEOJDJORAac6K1kDSKYmydpASBUl0mqmRfaGTCcQgwcxDEke+9XO2WkxQSiUIuAQAkls0n7JgsWq8RACH5BAUAAA0ALAAAAAAOAA4AAAQ6kMlplDIzTxWC0oxwHALnDQgySAdBHNWFLAvCukc215JIZihVIZEogDIJACBxnCSXTcmwGK1ar1hrBAAh+QQFAAANACwAAAAAEAAKAAAEN5DJKc4RM+tDyNFTkSQF5xmKYmQJACTVpQSBwrpJNteZSGYoFWjIGCAQA2IGsVgglBOmEyoxIiMAIfkEBQAADQAsAgAAAA4ADgAABDmQSVZSKjPPBEDSGucJxyGA1XUQxAFma/tOpDlnhqIYN6MEAUXvF+zldrMBAjHoIRYLhBMqvSmZkggAIfkEBQAADQAsBgAAAAoAEAAABDeQyUmrnSWlYhMASfeFVbZdjHAcgnUQxOHCcqWylKEohqUEAYVkgEAMfkEJYrFA6HhKJsJCNFoiACH5BAUAAA0ALAIAAgAOAA4AAAQ3kMlJq704611SKloCAEk4lln3DQgyUMJxCBKyLAh1EMRR3wiDQmHY9SQslyIQUMRmlmVTIyRaIgA7",
    M.bp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAYAAAD9qabkAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfcAgcQLxxUBNp/AAAQZ0lEQVR42u2be3QVVZbGv1N17829eRLyIKAEOiISEtPhJTJAYuyBDmhWjAEx4iAGBhxA4wABbVAMWUAeykMCM+HRTcBRWkNH2l5moS0LCCrQTkYeQWBQSCAIgYRXEpKbW/XNH5zS4noR7faPEeu31l0h4dSpvc+t/Z199jkFWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhY/H9D/MR9qfKnLj/00U71aqfJn9+HCkCR/Wk36ddsgyJ/1wF4fkDfqqm9/gPsUeTnVr6a2xlQfnxdI7zs0W7irzD17Ytb2WT7EeNv/r4ox1O3Quf2QP2pgt9utwfout4FQE8AVBSlnaRmfvAURQkg2RlAbwB9AThlW5L0GaiKojhJhgOIBqDa7XaPrusdPtr5kQwF0BVAAoBIABRCKDd5aFUhRDAAw57eAOwAhKIoupft3zoqhB1AqLwuHIBut9uFt02qqvqRDJR2dAEQJj/BAOjn56dqmma+xiaECAEQAWAggLsB6A6HQ2iaZggBhBAqgEAAnQB0kzaEmT4hAITT6VQ8Ho/HJAKKECJQtr8LwD1y/A1/vcdfEUIEyfZ9AcQbYvZ942Px88L2UwlJR0dH0EMPPbRj5syZPUeNGrXR7Xb/641xIwJ1XY9NSUlZm52dfW+XLl1w8uRJzJ8//+OGhoYJqqqe1TSt1Wsm9NN1PSIqKmr12rVrR5WUlHy1bdu2AQCumWc3IYRD1/UwVVXnFRQUTIuNjUVzczN2797dWFJSkq8oymZd15sAGAEnFEUJ1nX9nzIzM1dnZmZGh4SE4OTJk5g5c+Zf29vbp9pstrMej6fVOyhIhgAYU1hY+B+hoaGoqKg4XVlZea+XTULTNFdCQsLGiRMnPuR2u3UhBOV9eeDAAWXTpk095DUe6WsoyRE5OTlr0tLSAux2O/bs2cO5c+e+pijKUpIXSHaQVAGkvPLKK++6XK4OksJLCFlXV2cvKSlJBFAjhU+x2WwhHo9nUHp6+urMzMy7wsLCUF9fjxdffPHjxsbGiTab7WuPx9NiEutOuq4PyMjI+M+srKyYqKgoHD58GDNmzNjq8XhyVFU9b/q+LH7hBAEYu3PnTlZVVRFAGgCX6f/tAHoOHDjwa0p27txp/JO9e/f+QM7cipw9nfL3kQBKt2zZQpJ87rnn6mQmoHilw2EACs+cOUOSrK+vZ1NTE0nyo48+IoBpxswoBcMJ4Ndjx471kOTFixe5d+9ekqTH42H//v13A4jyzpAURfEH0H/OnDnthu1z5sw558MmFUCPWbNmnaMP3nrrLZoyDmP8Hl68eDFJ8siRI9/Yc+zYMQKYKdtAztrTrl27xptRXV1NAKMAOAyBBBA/Y8aMdpLs6Ojgxx9//E37+++//29yvFXppwvAwMcee8xjtDHsuXLlCqOjo//ia3wsfpkoALqFhoZuIckJEyackimm3dQmEMDUmpoakmRISMhhAHOHDx/eQJIbN24kgKEyMAHAFRMTs2XXrl1saWkhSZ0kp0+ffhrAr3wEW/S8efOukORLL72kA1gKYMPWrVtJkk899dRJAHeYrgsEsIQkjx8/TgDvAPjd448/3kaSb7zxBmUa7vC6z53BwcFbSHL9+vU6Sc6aNes8gF5ewWAH0PfVV18lSQL4DMBGIcQ6AKtcLleBFC2jXtFt8ODBe0iyoqKCAJYByC8qKmJDQwOzsrK+MAmqo1OnTveHhoa+GRkZ+XZkZOSWiIiIvzgcjk9mzpypkWRmZuZpmbYbGV4AgPnNzc1sa2sjgN0A5iQmJtaSZHl5OQHcb/K3s81mW0uSTU1NBFAFYFbfvn1Pk+Tbb79NAA8IIVzW42/hByA+Pz/fLR/2ZXIda05NI/z9/TeR5J49ewhgqlxTrtI0jY2NjQQw3zTLuWJiYjaUlJToS5Ys6fjkk080kwDEeAmADcA9GzZsIElGRUW9CyAWwLApU6Y0kOSKFSsog9QICGdERMTGsrIyZmVlEcC9AB4IDw/fTpLbtm0jgN94CUAnAJmVlZVcs2aNZ/LkyRdJcvbs2b4EwAkgZfPmzTxw4AABFAN4BkC6vFeUSewcAO5duXIlSTIhIaEawGMAxgKYAmAGgCS73e5vrKVk/yGythANYEhCQsIhkly+fDkBpKqqGmL6DgIALDKN/3yZpVWQZGVlJQE8aPI3KiMjo5okV61aRQAjAPQBMPfIkSN0u90EUCBtsPiFEwpgbn19PdetW2fM5N4zQ9ekpKQqkty0aRMBpMjiWM6JEydIkoqirJUFJ6iq6pAPVy8A6cZMehMBUACEuVyuFwG8HBwcPEIWx367ZMkSjSQXLVrUJouTRorrkAHdA8BdQogsAOsKCwtJkmPGjDkvMw2bDDo/ADEjRoz4XylyFbm5uY0mAbjLyyZ/AOOrq6tZVlbWsWDBgo69e/eyoqKCgwcPPg4gSQaoIRbp27dvN7KF+tLSUr28vJwFBQXtMpvpYRIM7+wrAkDeqVOnePbsWQIoNKfzpiXPg8uXLydJJicnNwF4f+nSpW6STEtLq5fjYwhk1wkTJtSQ5Ouvv04AqTKj+N2xY8dIkgEBAW/Ie1v8wncRegwZMmQvSfbr12+3Ua33WqPfOWbMmP0kWVpaSgCDZAqcfejQIWNZsEGKgvnh9gfQb9myZd8nAEJVVZtMkUNk8CcNHTq0liR1XWdYWNhmH1mJIme80OnTp18x1rp5eXkEsNJms92Fb7e/IgEsvHz5Mp999tkmAI/l5uZeMC0B7vEqqAYAyL106RJJsra2lpWVld+sucePH38ZQG+5NncBeOrgwYMkqbe3t/Po0aOsra011wAWyl0H7x0JJ4DE+fPnu0kyPT29DsDdUrBuyNKEEAkAdpw/f/6GeoEM8GUmfwEgPCIiopwkGxsbabPZPgOw6L777vvm4p49e26VGYjFLxUhhD+ApLKyMp44ccIoVnXybgbgzkcfffRzklyzZg0BDJYCMMmoCwQFBXkLgLGWvvcWAgBToSsKwNPTp09vMR7UuLi4rwH0lgU8c/Db5ezbeeTIkRWzZ8++aMxu+fn5BPCADBwHgP4LFy701NXVEUAJgAnPP/98kyxMNgHo53A4zH77BQQETMvPz7+Um5vbBuAlAFMSExPPmdbVL0qh8Acw8fDhw5SCchVAEYAVb775JknyhRdeaJYztHfxMwLAaqNwCGC2FArv8x0hAHKNLGPKlCme5OTk/Zs3bzb7O0wKiiG8KXl5ed8IxenTp0mSR48e1UmyW7duWywBuD2xyQcgFECgoih+8H1gyJgZV5Lkyy+/3CbTRIePtl2HDBmyw1QBHyGDdXZdXR1JUghRKkXBjOMHCoBdpr0L3nvvPZLkF198wejo6O0A4lVVDTb74HQ6AwD8Wq7Jh8rgGgDgQ13XjVR8qaxJuADMbmlpYXl5uV5UVNRWUFDgfv/993Vj/ZydnU1c37eHXML4S3viAcQqitJD2l104cIFY8lTKsXSBWBMVVWVcd9yed2A1NTUQ6Zl00CvLMMOoHdubm6zFIlWOf5+PsY/Kj09vdrU11QAwwGsv3jxIk21m2DZr10I0RXAuAcffPBgaWkpV69eTYfDcdiwUxY0w6xw+flX8L1xApjevXv3lREREaW6rofB93aPDUDQpEmTMgHgtddeqwBwEd/utZvpqK6uPgEAcXFxkA94NwB9unfvjrNnz4LklwDcf08iIqv66Zs2bXrl4YcfxooVKxAbG7uqrq5uAYA2TdOEqqpGYIi2tjbl6aeffu/YsWPv5uTk7JaC1wHg4Pnz542MwoVvTx+21dbWYvjw4WLixIl+2dnZ9lGjRgmSTE1NRUpKCkwFTGiaxtTU1OXTpk3707Bhw/6g67pDipnT4biuj7qut+Lbk3Vf1tTUXI9qu91Pjq1QFEUBgJaWFgBo8yGOQ8eNGxcAAOvXr/8QwBUfYygAKL169eoCABcuXACAWtn2hOGv0+kMNO1KiPDw8F4A4rZv3/7R1KlTR0+bNu1ht9u9r1+/fqitrQXJgwDarRC6/QjPzs4+QJIffPCB9/aQmSAA43ft2mW0e1QGoi8CAPyLsZccExNTC2BlRkbGRdOyYJCP2csBIN6UAZzCd7cBbQCijYp/dXU1ExMTz6SmptaMHj36f9LS0vYlJCRsl6mxIWSdu3fv/g5J7t+/nwC2AShMTk6+SJKff/45AWRLYbD7+fndAeDf5BJnLoCCyZMnt5JkdnZ2C4B/F0KEm1Pu+Pj4rST55ZdfEsBWAK+mpaVdMo3raDn7KwDuSEpK+m+S3LBhAwG8DuCtHTt2UBbpjgC408vvcFVV15HkuXPnjMp+p5uMf0RcXNyHJNnQ0EBVVfcCWBQXF3fG+Jv0yxABPwB5LS0tRmFxN4BlTzzxxGWSXLx4sS5F3GGFy+1Hp5SUlJq6ujoWFxdTpsZ2H+0iIyMj/0iSWVlZX5mr5jfJFroPGzasxlhTnjp1iiTZ3NxMl8tlrCd9pfa9SkpKSJI5OTmnZOageLUZZqxvfVFWVkZcPwdgNwnSCKPqb17jkmR8fPzfZMDZ5CRsFBmNI7h95s2b1yhT7/MAYmStwCx4vy0uLqa3v5qmEcCfvSr1QQAeXb16NY3Cm3HQ55133iGAp+SxZTNhKSkpfzUddkrFjYevzAQCeGjp0qXfsYckY2NjTwD4leGDLCL2HTdunNtoY+zWSHFcIHdsFCtcfuZ1vO9Eqs3m7/F47sb1k2qX/f3997W2tl7BjWfpBYDOzzzzzIVJkyZh0KBBCwEsB3AJvl9AETabLcDj8dwRFRW1ctasWb8JCgpSzp07d62wsPC/Wltb8xRFadR1/ZqPXYbgAQMGbI2Pjw/+6quv9ldVVT0r01ezuPRJSUn5Y9euXXVd11WzDaqq6kePHm3+7LPPRgO4KlNuxWazhXo8nuTk5OSXMjIyEl0uFxoaGtqKior+dPXq1VdUVT0jj7r68ieoT58+vx8yZMjdx48fP1JVVTVF9m20VW02WyfZf97YsWPjXS4X6urqWvPy8jYCWCyEuEDS8FdVFKWzruv//OSTTy5OTk7uqWkaPv3007qysrJ8RVH+LI8ym8/rB3Tu3HnRI488knLo0KG2ffv2ZQI4C98vP6mqqoZqmpaclpa2cOTIkX39/f3R0NDQUVxc/G5TU9PLqqrWa5rWLH1QVFUN0TStX1JSUvH48eP7BwYG4uDBg1cKCgpeBbBe2u+2Qug2EwD5N5sMPuNtMe8XP4TT6Qxoa2sbIGeXvUKIK7d4IISiKC5d1wPljOfA9bPwzYqiXNV13dd6Uqiq6qdpml2mpe02m63d4/G4vcTF5fF47LJf71nJA6BZVVW3pmntuPHlmAD5wk6Q9NnbHp9vHaqq6tA0zU/64PZhk1FfCZB9G/23ALiqKEqzD39tpvbGUqoFwFUhRLP3yzpCCDtJpxyXDulfG27+pqRR3DXsUWVd4Yq0x/taVQjhIhksC8L+ABpM9ljBf5sKwI8pIBr75L5E4vvu+UNeG/a+hv+AL7yFH8qPtOfHjtOP6V/Bja8D6z/B2Nys/1u9Xv33tLf4GfF/LC4GCJwByWIAAAAASUVORK5CYII=",
    M.KM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABPCAMAAACZM3rMAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFyGo/9tQLzylD8rgW6GA38Kgc/PfZrWBd88IS9dcJ9+sCvYx318Kgiysq7ZMj+/gA+fHZ/fncsYhhrGpdxqWF///86ms0///////6+/oA+PIA+fQAsnBlnnVCwn9/l3A51rCkxYmDnE5F58G14LSkxIyE7YQq7M25////+PIA/PoAuotxm4Y+vbNy0KKUkS4ywR87///01rWf4sCsnGFAzbmM2qWYyJOI042Ev3x3+vcA//73oXFJzp+TiD0htZpqwLZ4vm5wwHFw0ZmS4NSttntr69G+38Gn///9///4///6//3x+fUAkIYqjT0r9unP8eDItm5rr2Nj6Luq/foC/PsA37qppjdFjw0mm1pAjzItowwsvR46lUs2rFdd8eHK5smysV1h8OPGl3o36Me2//79//wUixMmhB0dmGE6oZZGikYlx4qEpIhM//3ck20zlUg3/vzsoYdH/v7p/vvh/vvdlEc0jzMvqJJS/fzqrZ1a/ffZ+O7UzyZB8d7HlWg1jB4pn29G///lnolD+/bY///q//3jri5AmV88/fnap4pRjlcr6tG8/ffekTExn3xEjCUn/vvem0c/kDgu//302yhFkGMx+O7Sgwwd8vDKkk0zgxIdpZtMkwMkySM/gQYciAgg/Pft1NCafwIWhAId4y9Kiwkh4ytL/fe2jRUp4y1L4yxL5CtLhwci4CpJ5C1MzcqP3ylI4y5L4ytL+epz3ShG4StK5CtM5CxL5CxL3SlH4yxLhgwi4SlLhgwh0SpG5CxL3ytJ3i9M4itLhgsihwsi5SxM4ipK4StK4yxLnxQt5CxL2idErBw1sTQ5AAAA+f8A+v8A+vkAmZM5nZs+qaRS+PMAw898tsFn3Oel6/a97erB8/zK8O3FwcB66Oa64N2t5OKz0dyTvbhzt7Rp5fC0rKlYyMSGsa1gp69Or7xco59I2tiipKhK9/TQ+/nXqrVT///o///m///+///v///q///3///j///e///h///t//3Z///y//7c//za//zburuAXQAAANB0Uk5Tp4Z50JfIOInh8fq85I/LbFQ9u5vT2YjKOFLlh7CklM+PrmSCdHSnuKn9Xcvk6qaETfm6tJDqY4YeSaJb08Cv2/M8MVPqjKTI8IlIcsD6pMjZY3YyKT2lI0+gVEc8fEuszCnn55AtFnCMqeO9ZOr526Nm0ejU85KZ57vytOBYvcSFxfvxyPScMr/t38fWgHO4ReCNZCC20fJg/rF39F1bM1UW/kpCcGc5CzFjazM6lnT+oFdEBqxJE3o/p1MZLikYfigNISASToiNXAqDvgUBAFkP5NwAABU+SURBVGje3Vt3dBNXuuecV7ak7KZuOukkIYENhAChE0roHUzvLfTeMcUGG4wxJRgX4hoXHt5VgMUQZBnbEnkokea9gCnuRbYlWZY00lRpZvTunaaRLDv5A/ud3R8cjsrVvd/v69+V6IL4kfbSmLFXkX9SdFE8PjvuqzE5/wJEcpYfce86e9Vo/GcmYsxJS1u+6S/ur8YtT8vJeUxUDEaDsZOJGHPOjh2z6yu32/3pCx8MSHssgWI06Iv1hs62SA40h4AXNqU9lkAx6vML8/XGziaS9tLYcR8Ak3wwYPnZnMdjkfySgqLiziaCXM1JOzv2A/dfXkrLufp4DjfkX7l8qdDQ2USgCh9v+jXkf/d+dsn/BxEkbeyYsY+LiNFYXPLiv12+lG8wGjsloSuJ5Cxf/ngSlgEkLBAh7//x+pWSwvzOyV1KIsacxxMfIF+VZN/+7t9//79Pv//i5UtFnZK7ugT6w+OJjuKSgovv//7D//nllz/8x4vXLhXqO8S5Ajft0gEnGIoLC27c/O7Hp3/55sc7124UFXaIRYwrVhg7mIgRMCkpyL79/h9+vJhdBKpih3QqhhkzrnY0EaPBAK3y4tN3sgvBw46JkKsffZTTwUREjZXcuX6lqOMS1tVXv1jROUQKL13J7sDKfvWLV6Z3ChFQEQtKOrDXujr+/sudQwR2vx04kMx45f4XOVcBjB1MBNT3jolzY870GX96dfwr9+9/+Mr4Lz6aIWThDiSCdFCTZVwx40/jP7zP48Pxf+oEIh2ln5wV06fPePnVP94f/9H0FTkd71odDBDsH3VKsHc4kS8+nP6vQaSzCmKHE3n55d/UouQM2LNoUbd3C9vcx4jkjD2ycFl/MTOdPbE/ZtLo0aPeXRw6Qk+M6j1z2efDA1995sj+0d2W9f8tYm/as6jbMuXehunT22ka0/iWIm3MiVHRFMUwDBE5UouETKInKidv47w44Y55G3wmZxdO4R4SfoLonYcgxWs//3J4QHuyByXgu5Om6CRNXZ22i/PCV8EWeqT9TD0g2svCvXvNMcorc3LamUe2Rn8J1vX7lMQozgfA4a6Hc4DUp/ZM2rPsPaVCjqC4sIJoOKk3HIlZQuJe/jnrrn5dh+xyY0T8/s918vpNHFjOcZg7fb6Bl2WTg+M3ACAqvs5F2uzKxkUsjGeFsyj3o5O60JwDiTzD4u4RZxDDFko8wscxtuRcZC1Boi7MjUVM0ctEvOICPMG6XW/Uv35yiUcQjMLqTiJfujmfC3dvG6kWz53m4/fkaKLupI4nQrHSISxT97WmTZNEeFFapMyR6APh079CZA/HUcSj1cgot1c6BLNZ5iPIQpxXNgZpCpJ9yYibs1xl+cxZerVuKiPQ57AaZ0YhTsOHHmboHEHXas4lvOuptH5mAC8tpziFtiyftTlGRvj8ACud80MaL4DIOBaqDH+w3bAVl07x2KyvaZH+hLAPS5SJttVvIcW9WRxze56N06knoRL3ls8W0JCIz4tVWOfw6ws5cT1FVyXnQVF2oTITrNayWdOWb+3iFEzwSutB7a8ROSE4OVNjSZl1iBb1javMS9ZPWrhelNpHAC+FGxn2okpFlTnnIG8KbH1kuS3hkKhvyvVgM39w2npZlibLfKj+xZGk9BJjaxmYom+DyJ8xr/8k2mFKDtO3SyQtgpVJr0Z6MyIRV9O97TPdpKQVDrU//Aw2tdM4SqEol/0hiAuRiJfEUMlvOE9T8xleg1slcXCVZTavi7WMeCLrqboXrm4zZS3D/DahOVNpbCgvlImknZJWk/aHx9Q9RKEosr70/AJCjktooq9zgRgf+JQWRytbPta8i/law9PUcpoPz2WEaCPaZNnIZzONR9QFS9lUz/edsriNKDFGoAqNmRvn69ojske2H17euC63m0ciUjXhzH6PUjJbS6wemcYEiOsqV9VEo97WPChXleW0Gup/OG9WjvUkmJ3btYVpaf3WkpJ+OJcHA1Vmb9/QZnmP8PmjqbQ0S90OkWf8KQSrsXTNjZBCkzQnT2aUygc5aTZwFFLxEo3RLOYhudY8OKaysTFWOHitm/DgHo/DYbfHL4nE1xNM4AdYDneXv64NkZOmuP1qTG85FtYekXGc33eanIm5p2jpea2d4QKI1FqidAsZITH4UA8AVVPuak2CdeE4Q9Y7N4eJel7Qq7qsrO4BhbpQnA7BGqaSBlAaW4n5juyzFF3vjErRtRPsJ+TNPAmNzpVxUtaCtT3wTCzdsnGB2+Plq5unpgmg6p4qwNNYinZhmMteWdFQ5Ww8kKsvnobABGFInXh8wzGK9rUFmEqEpBiYgBVuX2rdrmkvaw0Q0wxHMk2WY3m5dFunUXi9c6O6/yk3g6MuR7q5fuiQxME7Tm/B/XQ50sUm1KhMzYc3LD088ECmFnl3GXIUGfZOt949fpeRtxdvkwifXecEE8mJlnMmlt6yO6vdOmLYCrM1x+FE+r3mJMPRYCKw7IEgABWxtrSxpxbRj+xjq6murnXgWOTk5zJ0U90MLeVjl82cnFy6e2if51+LzcjM0+qR/a4eoycRDIYRRMyZXgTXJhHSYQbZNbiQyOtpn8l5MFPdbosyLJLAcJSqrL/b2P2N3qfYQBocjlfbWCCJp7rRejBDrderYz+ptdM4SDwU4/nkDDJlL7CDcKJH1dxnhP1QpIdhTv1OY9AjxVtIAuM9FLSUNUNxqk3XwspLG2ODQ2CPv65XNzf2zNW332vppz5ZU2NrUtXaIwkmKAOxVLXp7r2B3W2PHjgtA7NykcIXorcdwkWrgQbYEodoPhvqFV5gHRyGkTTL+liC3h0Hajjqty+FmmoIX+D2HIm7SAgGq7LsTA3S+NltCoOZDp8P6VkSkbRpCxa8N7q23E6CNNpaYRRX01S/MTUjKTEqaseFPDViOIXTrD8/lFtf1+l0c9YLOZnz+yUH+tpcZBZLKhKyqjkeBJgH97OhyqvtXoiyKufDjXlBFtmkiD7M1hzbbvf7Z5wgGA/uotjQJveijGtJjzidJjMzTwPTSjd/FQcNc3pLOLD3rC10a1+pAd3qrEOKquOpaT74xoiKshqHrDC8tnnnsd0Ahw+v2xgWnJQiFOaj0Qdd27XI2fVeX/vgKDBdPKc1qHX89eHnbml7MCXWlJqeWPveqFMhPkXUOEE+3UorOwNneErGxuOfYP55BGtaeiAJYOXKC5maII3/JxcYRM75xvay1kKc8/0aFY7BP4mTylWEWwxturKpxelgCDfWOmNzHrvZulqLjFIkKo/KcjBPq07Z6z+RQx0PE1M0EFp1cEd4JEDFLAZ81dgOkf7uVkRYinSBlgL3y+fFWKvIZNrwmUKnROGmCedWLSKCfZKlXRSH1jY7d2ZpkWFuXGqHYQZdrdGBoZNTKjrBcsaoD3VbnLYtYGfO5Xi4OtTXxHLWGuWWg48DDFAcJB7OXlnWUEEyrPwO8+hrDR+Ap/RxixhB4BrVa5op7oDjaBTD6HI7RVY+PJcFcgOylhZ357BakEE1iOEFOrAnK0tOCdkwnmCDu7faljMhxnaZiH4/QUpGBH1dZcOjugfm5KUbjh8Pf5KRNyN9D2dDfXw1aWR4D0bsYRhi0dt7A1zTUVlb12h2kByTsG6lFgav+i0hJFjQ1u9M1SLvBFVFlikDKmotX9q2Vo6C1X2saZuIEdTqeJc45qTfO7x0w7njgzfOPg0Qm9HDfyqWnhwHmni3r2LJKTnrUG7VJwzGsqw0/NSXLj1+zA5GWQoVB0SkLyEOO2ZnYh4yXHZFVuocmIqdIZiMaZWEOBf9IIRzyRYBWyzCpPpZP+SJQYN6jY7ZC6oezvSaGi23kJ5q52k98jkB2l7/5QEYKu89v5dhxNJAkaYJO97aBi9VOCZdHBAXCh2Wp7alsSdIY+KNC8e6pCbPh3lBKgnC2fWyV7O0P6CcrZ1LMbMXSyoGoyoAGHRwkqYA3CobrphpD2ohkQCgCdbw1NeaHollyJXeFE8IzQEjDYiTcNGiLesyDXsYUdGso8YhT1c4VheLBEq4R+GADilUOaYhOS+YiYLIMH8osBA0yFkga4HZrcomj4g0VfV1HH9rpYCXqXYey0g5P1su7UJnBdIcmAlO83PQXlocdiyJmv2EfClW3lwuR5eXJOpWB1TDAf5jyIQmlpLDpGFz8AWogsgml6L3wVGStVdWNzyygf6qpVq2CIs2NZ9BhmGUMkUxoLUHtUGnjcEkRYhy0ibnsVStUa7PYOK/9+x+/2iIqSYoRhkOE++8JMeKVl5o3a3E5bTKtGLSJUTloeim+iqTOfnwxx9vOLd58/HBq+NRxWVCc6yhWHEVSdP2ajg+af2BINd8l8qZfEDoncTdGVXpIUZxJdPYEhXjvyShqXr+ZkNqTvypl3bV31Vh/gLBlAUx6RLCH2my/m74yWef7T46JiZmyd6YQVMnuxSFueW0GnnHjYtNO2k3mZuXRmVpdcPfjTgU2E6Q9baqxFTh5u2ElxNuKUw+fwUBDWRj1lSCUozZlvn6EDUdlp/m2Xv9PgOS3JCAobhLyKtJhz0+OhJj4DzuInF3fDmpnP63gwr3ZkKFEKWempalSW9NnTpzL0Eoh2KgNHtjM/NE+Bmhd+q3nhI/L2cOL1bZbI3KNCyTI45CqyzbpVH3hCLzUmi95Vjmm4SyEaaHzglpEeNWVjGrumiQgViWomiSZhIqSaVFtsPKkHdQ6M3x6paoNyIjAYuAIYMjsZrSCenuJ0H2FQSLoAV+vmqHFEGoybJ7ZS6YycUBhcMdZud2taEVD2gQ60bNrEhFOwCS3KP5oYjknPJfZqCgxQLzHejrScpLVTSVowEXboCIAZlD0sKoYqt1z1wSdEMBhu+qCROGHEKph6t10FfOSs04iCmp67Kb7javgk27YaaL4kkCLZlj+dwguaLCIBc0yJvKbAmSXMVJOVD8RK7KRFhfeW1DWdkjW50KxDycEhLQANfia/VRgQjHerBDu9OZYCJ2VVWfaJTDqpPjwOqXtlGthzWVuar71AWL+/UrXrwfdqAsmX7XEpXJZ+sjAeZlaoBBQNIo3hLgvT6iIjlOvAcLZRGaNE/YsGbNmvDwqKioxI07esbGYAoiltkCEXkOJB2lpuCLKsCPYWgvaI4fnFQj/b5qPbCxDgd9KBL7FICIjIbuxvoSGo6d14Ikd3ZrAA+XzwyyOEwaawMLGMvUJee2tohX7t9tTYPeemvQopjJS+Lj47fFT46nWhMZLg9GLrt5wyBxPGGpViOi5Qyy0BNivmFh10DBkgMeiYFF2I/NQQwn8MAZBCQ381NCFl/IeAPmnWowZBuCstZ+0q8C0NESBI6iwp0ASgXMRQKR5bINQNuyNLW3mwHjC4aTVKBp8Err9qMeyvfbwBENzrjFbm9g414NkluG0HvO2hLQZrvs1mN5wURm+hsouZFtrUa0SowRfz9HOh6uy9D2XcI6ympVdUFO5kowhb8n9bpgXibbZwKUslm/EFNGAkxlO7OkS6D+buUND3CG0jP6ICJftnNxxipv0HoKyonwu5ZpXZjOmLl6Z/LhpWued1OBXzE1du0rdnEgY1U7CNzHtUfEXJoyTDGmeVG0vsV8IE++uF5L+L/p4nB4R64L/sZqq7hCcF6aJlHUgwH/wjGPNKmC/NGy84Kw6TuiB4CZzQKIGHSasKyV5zMyeyl1xhE2S/gUgQhHM6p7pj7xDONqy+Cg/SxtPA/SrNzp4nhVs3VipuLqZApGsNIQQKS3iPdgSiLD3LAXZEmchgWRZR0VFWVlFQBltjpccE2MNlsPihdPhVuEGRjnW0YdYtSptRqtVqd/gyHEbz5YmrCbrRu1k6CxORdha7YeTzrw2givR5gR2EAfZinGVe/cGaZHZoIhHxRkCiUc9S3WxMArogWTCYaEukaJ8lJJnIAvQxdEgykEo231D+rr600mcynoG9cBfLz0XPdP3Qxo6B31TlCLxV2PRhMEeM3XZDH3FE4y8FXc8PYiEuzj8TAYWW2y7szSLd7iJjDGld5iHZiVmZJyfnt3VW2Fl8Q9GPyCB/MIAMsr653WHfBrg77x4A0PabeZnI0TUwNuSY2IduQIGpRs0mEzW3eK4gR+Pa19TgVGdWfz8VUQBw4krczKOg+RmvH2oNqyhrqHoJvNlN1VOzKdf610h9L0iEGv6TnE1tAAx35L88CkPDWifmNE2aMqizMqK0+t12k1mVmrEgcOGdpUV1f36FGDCHh0y7odGXyXmfdcH1vdA2vz4YMHwnJ1Qb8r1mWeHtKkqrI2Jw9cmac2tCJi0KtTd6xZk3ggFagNIDdXI0KrVWuSErtu6Jq4MlNTbDDoIYr16vMTj58LT0wKyy0sViBfq8lIAu+cO3c88anzmZr8fL0udeK5rvC6VQvfL5ylSclMzUpaNXHwYFB54cpzXTdsAMt3ZGXm6vQGQ7Fak7pq8JrEHUmp8GrTyN8UiUCMejU44KmJE3esDEvR+is7/HmHUVir0+bmZWbm5aoLJeRLD4pyMy9cuJA69+isEglFBfPmXsjKuhA2r6CIR0FRQUEB/PfSvLlh4J0s8IG/zgOvwRcugGfCE7Cw4Oi8eXPnzg1LvQCRxWMlXD53XpGw+dGjeXMzwsLicouAEBIERQEdFmo1KXl5eSkgJA38Tw67iL+bBmrKhzKXFB09erQA7iULBqSAyL5x7a8AV24IuMLj2u1933677/Y1Hrev3fbjJngDYt9N8Pim+Bw+EXFNXLVv37dwi2+F5fuuXbsinXDjyrVr4Ljs7EsieFl4lQlqhA8KeXZ6vaEL8Kf8QvgqEDc7m5cQiHTz8s3Ld+7cuXjx4n8BfAfwd4Dr16/fun7r1q2fAH4Mwn8Lf/xQPg4N+KFgwI3h9uCUW+A4eOrf4fFQDCDNRSDUZagXQBjIypMsgMTyu8Bf5BddAuxvQ9Ev8qIDsYHIt+Cm8MC/QXwP8cMPP/wD4hseP3/z88/8P48HcKtvJMBTwGk/8MfC8wXmkCGk953AC7C6fPM2sNqlEkikpCBb4MHrn9c9VL6se0H9ohr/psD3fvwQiH9AxvJfAeJj4V0lFNt8799cYThAgDcTb6jroqGglXgqkAkgAl0LRC0IgRu8T928LPqU4FUKxxLpCbjF85TxE6B866eQ+FH+ExL8R39SbAW913+O4FyydykcTPYw4F8FRYVd+P/BWSwEuhhCUnxnQyhCW4hoKZh5gFCC1AXcASqAWvjNuMwL5MdNEVI+4MEfzQvBy5Mthr0c8zCz5hfr/w/mhF+TnGcYaAAAAABJRU5ErkJggg==";
var M = M || {},
    da = {
        id: 0 | 998 * Math.random(),
        l4: 0 | 998 * Math.random(),
        yO: function(t, i, e) {
            t = t.toString();
            var n = t.substring(t.indexOf("(") + 1, t.indexOf(")")),
                n = n.trim();
            for (t = t.substring(t.indexOf("{") + 1, t.lastIndexOf("}")); - 1 != t.indexOf("this._super");) {
                var r = t.indexOf("this._super"),
                    s = t.indexOf("(", r),
                    h = t.substring(s + 1, t.indexOf(")", s)),
                    h = h.trim();
                t = t.substring(0, r) + "ClassManager[" + e + "]." + i + ".call(this" + (h ? ",": "") + t.substring(s + 1)
            }
            return Function(n, t)
        },
        h3: function() {
            return this.id++
        },
        i3: function() {
            return this.l4++
        }
    };
switch (da.yO.w9 = da,
    function() {
        var t = /\b_super\b/,
            i = M.Lb.Je[M.Lb.xg.r1];
        i && console.log("release Mode"),
            M.xa = z(),
            M.xa.extend = function() {
                function e() {
                    this.ka = da.i3(),
                    this.ctor && this.ctor.apply(this, arguments)
                }
                var n = this.prototype,
                    s = Object.create(n),
                    h = da.h3();
                da[h] = n;
                var a = {
                    writable: p,
                    enumerable: r,
                    configurable: p
                };
                s.ka = q,
                    e.id = h,
                    a.value = h,
                    Object.defineProperty(s, "__pid", a),
                    e.prototype = s,
                    a.value = e,
                    Object.defineProperty(e.prototype, "constructor", a),
                this.qi && (e.qi = M.m(this.qi)),
                this.ri && (e.ri = M.m(this.ri));
                for (var o = 0, c = arguments.length; c > o; ++o) {
                    var u,
                        f = arguments[o];
                    for (u in f) {
                        var l = "function" == typeof f[u],
                            d = "function" == typeof n[u],
                            g = t.test(f[u]);
                        if (i && l && d && g ? (a.value = da.yO(f[u], u, h), Object.defineProperty(s, u, a)) : l && d && g ? (a.value = function(t, i) {
                                return function() {
                                    var e = this._super;
                                    this._super = n[t];
                                    var r = i.apply(this, arguments);
                                    return this._super = e,
                                        r
                                }
                            } (u, f[u]), Object.defineProperty(s, u, a)) : l ? (a.value = f[u], Object.defineProperty(s, u, a)) : s[u] = f[u], l) {
                            var b,
                                v;
                            if (this.qi && this.qi[u]) {
                                var y,
                                    l = this.qi[u];
                                for (y in this.ri) if (this.ri[y] == l) {
                                    v = y;
                                    break
                                }
                                M.k(s, l, f[u], f[v] ? f[v] : s[v], u, v)
                            }
                            if (this.ri && this.ri[u]) {
                                l = this.ri[u];
                                for (y in this.qi) if (this.qi[y] == l) {
                                    b = y;
                                    break
                                }
                                M.k(s, l, f[b] ? f[b] : s[b], f[u], b, u)
                            }
                        }
                    }
                }
                return e.extend = M.xa.extend,
                    e.Pga = function(t) {
                        for (var i in t) s[i] = t[i]
                    },
                    e
            }
    } (), M.k = function(t, i, e, n, s, h) {
    if (t.__defineGetter__) e && t.__defineGetter__(i, e),
    n && t.__defineSetter__(i, n);
    else if (Object.defineProperty) {
        var a = {
            enumerable: r,
            configurable: p
        };
        e && (a.get = e),
        n && (a.set = n),
            Object.defineProperty(t, i, a)
    } else b(Error("browser does not support getters"));
    if (!s && !h) for (var a = e != q, o = n != k, c = Object.getOwnPropertyNames(t), M = 0; M < c.length; M++) {
        var u = c[M];
        if ((t.__lookupGetter__ ? !t.__lookupGetter__(u) : !Object.getOwnPropertyDescriptor(t, u)) && "function" == typeof t[u]) {
            var f = t[u];
            if (a && f === e && (s = u, !o || h)) break;
            if (o && f === n && (h = u, !a || s)) break
        }
    }
    t = t.constructor,
    s && (t.qi || (t.qi = {}), t.qi[s] = i),
    h && (t.ri || (t.ri = {}), t.ri[h] = i)
},
    M.m = function(t) {
        var i,
            e = t.constructor ? new t.constructor: {};
        for (i in t) {
            var n = t[i];
            e[i] = "object" != typeof n || !n || n instanceof M.n || n instanceof HTMLElement ? n: M.m(n)
        }
        return e
    },
    M = M || {},
    M.M = M.M || {},
    M.ica = z(), M.ur = {
    oO: 8,
    c8: 9,
    XO: 13,
    shift: 16,
    Mca: 17,
    alt: 18,
    pause: 19,
    rca: 20,
    escape: 27,
    lka: 33,
    kka: 34,
    end: 35,
    home: 36,
    left: 37,
    $na: 38,
    right: 39,
    bda: 40,
    Tga: 45,
    M9: 46,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    a: 65,
    b: 66,
    s: 67,
    z: 68,
    ah: 69,
    Xh: 70,
    g: 71,
    tq: 72,
    Ft: 73,
    Py: 74,
    Qy: 75,
    $y: 76,
    dz: 77,
    Gl: 78,
    gz: 79,
    d: 80,
    rz: 81,
    r: 82,
    VG: 83,
    vH: 84,
    ma: 85,
    na: 86,
    L: 87,
    x: 88,
    y: 89,
    e: 90,
    zja: 96,
    Aja: 97,
    Bja: 98,
    Cja: 99,
    Dja: 100,
    Eja: 101,
    Fja: 102,
    Gja: 103,
    Hja: 104,
    Ija: 105,
    "*": 106,
    "+": 107,
    "-": 109,
    numdel: 110,
    "/": 111,
    Kda: 112,
    Oda: 113,
    Pda: 114,
    Qda: 115,
    Rda: 116,
    Sda: 117,
    Tda: 118,
    Uda: 119,
    Vda: 120,
    Lda: 121,
    Mda: 122,
    Nda: 123,
    Lja: 144,
    nla: 145,
    pla: 186,
    ",": 186,
    Ida: 187,
    "=": 187,
    ";": 188,
    Bca: 188,
    Nca: 189,
    ".": 190,
    rka: 190,
    $da: 191,
    Mga: 192,
    "[": 219,
    Vja: 219,
    "]": 221,
    xca: 221,
    jca: 220,
    quote: 222,
    Cna: 32
},
    M.S9 = 0, M.tA = 1, M.dI = 2, M.T9 = 3, M.U9 = 4, M.BT = 5, M.V2 = function(t) {
    return 8 < t.length && 137 == t[0] && 80 == t[1] && 78 == t[2] && 71 == t[3] && 13 == t[4] && 10 == t[5] && 26 == t[6] && 10 == t[7] ? M.tA: 2 < t.length && (73 == t[0] && 73 == t[1] || 77 == t[0] && 77 == t[1] || 255 == t[0] && 216 == t[1]) ? M.dI: M.BT
},
    M.Qga = function(t, i) {
        function e() {}
        e.prototype = i.prototype,
            t.Rz = i.prototype,
            t.prototype = new e,
            t.prototype.constructor = t
    },
    M.kca = function(t, i) {
        var e = arguments.callee.caller;
        if (e.Rz) return ret = e.Rz.constructor.apply(t, Array.prototype.slice.call(arguments, 1));
        for (var n = Array.prototype.slice.call(arguments, 2), s = r, h = t.constructor; h; h = h.Rz && h.Rz.constructor) if (h.prototype[i] === e) s = p;
        else if (s) return h.prototype[i].apply(t, n);
        return t[i] === e ? t.constructor.prototype[i].apply(t, n) : (b(Error("cc.base called from a method of one name to a method of a different name")), void 0)
    },
    M.N$ = function(t, i) {
        this.x = t || 0,
            this.y = i || 0
    },
    M.d = function(t, i) {
        return t == k ? {
            x: 0,
            y: 0
        }: i == k ? {
            x: t.x,
            y: t.y
        }: {
            x: t,
            y: i
        }
    },
    M.qz = function(t, i) {
        return t && i && t.x === i.x && t.y === i.y
    },
    M.T$ = function(t, i) {
        this.width = t || 0,
            this.height = i || 0
    },
    M.size = function(t, i) {
        return t === k ? {
            width: 0,
            height: 0
        }: i === k ? {
            width: t.width,
            height: t.height
        }: {
            width: t,
            height: i
        }
    },
    M.Bna = function(t, i) {
        return t && i && t.width == i.width && t.height == i.height
    },
    M.XI = function(t, i, e, n) {
        this.x = t || 0,
            this.y = i || 0,
            this.width = e || 0,
            this.height = n || 0
    },
    M.rect = function(t, i, e, n) {
        return t === k ? {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }: i === k ? {
            x: t.x,
            y: t.y,
            width: t.width,
            height: t.height
        }: {
            x: t,
            y: i,
            width: e,
            height: n
        }
    },
    M.SQ = function(t, i) {
        return t && i && t.x === i.x && t.y === i.y && t.width === i.width && t.height === i.height
    },
    M.MD = function(t) {
        return t && 0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height
    },
    M.Hka = function(t, i) {
        return t && i ? !(t.x >= i.x || t.y >= i.y || t.x + t.width <= i.x + i.width || t.y + t.height <= i.y + i.height) : r
    },
    M.hu = function(t) {
        return t.x + t.width
    },
    M.Ika = function(t) {
        return t.x + t.width / 2
    },
    M.Gq = function(t) {
        return t.x
    },
    M.iu = function(t) {
        return t.y + t.height
    },
    M.Jka = function(t) {
        return t.y + t.height / 2
    },
    M.Hq = function(t) {
        return t.y
    },
    M.fu = function(t, i) {
        return i.x >= M.Gq(t) && i.x <= M.hu(t) && i.y >= M.Hq(t) && i.y <= M.iu(t)
    },
    M.Z5 = function(t, i) {
        var e = t.y + t.height,
            n = i.x + i.width,
            r = i.y + i.height;
        return ! (t.x + t.width < i.x || n < t.x || e < i.y || r < t.y)
    },
    M.Lka = function(t, i) {
        return ! (t.x + t.width < i.x || i.x + i.width < t.x || t.y + t.height < i.y || i.y + i.height < t.y)
    },
    M.sz = function(t, i) {
        var e = M.rect(0, 0, 0, 0);
        return e.x = Math.min(t.x, i.x),
            e.y = Math.min(t.y, i.y),
            e.width = Math.max(t.x + t.width, i.x + i.width) - e.x,
            e.height = Math.max(t.y + t.height, i.y + i.height) - e.y,
            e
    },
    M.Kka = function(t, i) {
        var e = M.rect(Math.max(M.Gq(t), M.Gq(i)), Math.max(M.Hq(t), M.Hq(i)), 0, 0);
        return e.width = Math.min(M.hu(t), M.hu(i)) - M.Gq(e),
            e.height = Math.min(M.iu(t), M.iu(i)) - M.Hq(e),
            e
    },
    M.wv = M.xa.extend({
        UM: q,
        YC: q,
        ctor: function() {
            window.DOMParser ? (this.YC = p, this.UM = new DOMParser) : this.YC = r
        },
        parse: function(t) {
            return this.tD(t)
        },
        tD: function(t) {
            var i;
            return this.YC ? i = this.UM.parseFromString(t, "text/xml") : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(t)),
                i
        }
    }), M.QU = M.wv.extend({
    parse: function(t) {
        t = this.tD(t).documentElement,
        "plist" != t.tagName && b("Not a plist file!");
        for (var i = q, e = 0, n = t.childNodes.length; n > e && (i = t.childNodes[e], !(1 == i.nodeType)); e++);
        return this.sD(i)
    },
    sD: function(t) {
        var i = q,
            e = t.tagName;
        if ("dict" == e) i = this.MZ(t);
        else if ("array" == e) i = this.LZ(t);
        else if ("string" == e) if (1 == t.childNodes.length) i = t.firstChild.nodeValue;
        else for (i = "", e = 0; e < t.childNodes.length; e++) i += t.childNodes[e].nodeValue;
        else "false" == e ? i = r: "true" == e ? i = p: "real" == e ? i = parseFloat(t.firstChild.nodeValue) : "integer" == e && (i = parseInt(t.firstChild.nodeValue, 10));
        return i
    },
    LZ: function(t) {
        for (var i = [], e = 0, n = t.childNodes.length; n > e; e++) {
            var r = t.childNodes[e];
            1 == r.nodeType && i.push(this.sD(r))
        }
        return i
    },
    MZ: function(t) {
        for (var i = {},
                 e = q, n = 0, r = t.childNodes.length; r > n; n++) {
            var s = t.childNodes[n];
            1 == s.nodeType && ("key" == s.tagName ? e = s.firstChild.nodeValue: i[e] = this.sD(s))
        }
        return i
    }
}), M.XN = {
    load: function(t, i, e, n) {
        M.aa.cz(t, n)
    }
},
    M.aa.ej(["txt", "xml", "vsh", "fsh", "atlas"], M.XN), M.jZ = {
    load: function(t, i, e, n) {
        M.aa.zQ(t, n)
    }
},
    M.aa.ej(["json", "ExportJson"], M.jZ), M.RY = {
    load: function(t, i, e, n) {
        M.aa.dg[i] = M.aa.Aq(t,
            function(t, e) {
                return t ? n(t) : (M.Ma.Fb(i), n(q, e), void 0)
            })
    }
},
    M.aa.ej("png jpg bmp jpeg gif ico".split(" "), M.RY), M.j_ = {
    load: function(t, i, e, n) {
        M.aa.dg[i] = M.aa.Aq(e.src,
            function(t, e) {
                return t ? n(t) : (M.Ma.Fb(i), n(q, e), void 0)
            })
    }
},
    M.aa.ej(["serverImg"], M.j_), M.RZ = {
    load: function(t, i, e, n) {
        M.aa.cz(t,
            function(t, i) {
                return t ? n(t) : (n(q, M.L5.parse(i)), void 0)
            })
    }
},
    M.aa.ej(["plist"], M.RZ), M.cY = {
    YV: {
        ".eot": "embedded-opentype",
        ".ttf": "truetype",
        ".woff": "woff",
        ".svg": "svg"
    },
    HM: function(t, i, e) {
        var n = document,
            r = M.path,
            s = this.YV,
            h = M.Wb("style");
        h.type = "text/css",
            n.body.appendChild(h);
        var a = "@font-face { font-family:" + t + "; src:";
        if (i instanceof Array) for (var o = 0, c = i.length; c > o; o++) e = r.xl(i[o]).toLowerCase(),
            a += "url('" + i[o] + "') format('" + s[e] + "')",
            a += o == c - 1 ? ";": ",";
        else a += "url('" + i + "') format('" + s[e] + "');";
        h.textContent += a + "};",
            i = M.Wb("div"),
            e = i.style,
            e.fontFamily = t,
            i.innerHTML = ".",
            e.position = "absolute",
            e.left = "-100px",
            e.top = "-100px",
            n.body.appendChild(i)
    },
    load: function(t, i, e, n) {
        i = e.type,
            t = e.name,
            i = e.Dna,
            M.zd(e) ? (i = M.path.xl(e), t = M.path.d1(e, i), this.HM(t, e, i)) : this.HM(t, i),
            n(q, p)
    }
},
    M.aa.ej(["font", "eot", "ttf", "woff", "svg"], M.cY), M.Laa = {
    load: function(t, i, e, n) {
        M.aa.f5(t, n)
    }
},
    M.MX = {
        load: function(t, i, e, n) {
            M.aa.g5(t, n)
        }
    },
    M.aa.ej(["csb"], M.MX), window.CocosEngine = M.pA = "Cocos2d-JS v3.1", M.fo = 0, M.kA = M.d(0, 0), M.cT = .5, M.v9 = 1, M.zv = 1, M.BU = 0, M.nJ = 0, M.nB = 0, M.Y$ = 0, M.P$ = 1, M.O$ = "-hd", M.MW = 1, M.so = 0, M.R$ = 0, M.ZT = 0, M.YT = 0, M.AA = 1, M.z9 = M.pA + "-canvas", M.Mu = 1, M.th = 1, M.Ab = function(t) {
    var i = this == M ? document: this;
    return (t = t instanceof HTMLElement ? t: i.querySelector(t)) && (t.find = t.find || M.Ab, t.fG = t.fG ||
        function(t) {
            return this.className.match(RegExp("(\\s|^)" + t + "(\\s|$)"))
        },
        t.jO = t.jO ||
            function(t) {
                return this.fG(t) || (this.className && (this.className += " "), this.className += t),
                    this
            },
        t.f6 = t.f6 ||
            function(t) {
                return this.fG(t) && (this.className = this.className.replace(t, "")),
                    this
            },
        t.remove = t.remove ||
            function() {
                return this.parentNode && this.parentNode.removeChild(this),
                    this
            },
        t.lO = t.lO ||
            function(t) {
                return t.appendChild(this),
                    this
            },
        t.Q5 = t.Q5 ||
            function(t) {
                return t.childNodes[0] ? t.insertBefore(this, t.childNodes[0]) : t.appendChild(this),
                    this
            },
        t.yu = t.yu ||
            function() {
                return this.style[M.Ab.r8] = M.Ab.translate(this.position) + M.Ab.rotate(this.rotation) + M.Ab.scale(this.scale) + M.Ab.Pq(this.Pq),
                    this
            },
        t.position = t.position || {
                x: 0,
                y: 0
            },
        t.rotation = t.rotation || 0, t.scale = t.scale || {
            x: 1,
            y: 1
        },
        t.Pq = t.Pq || {
                x: 0,
                y: 0
            },
        t.eS = function(t, i) {
            this.position.x = t,
                this.position.y = i,
                this.yu()
        },
        t.rotate = function(t) {
            return this.rotation = t,
                this.yu(),
                this
        },
        t.lu = function(t, i) {
            return this.scale.x = t,
                this.scale.y = i,
                this.yu(),
                this
        },
        t.Qma = function(t, i) {
            return this.Pq.x = t,
                this.Pq.y = i,
                this.yu(),
                this
        }),
        t
},
    M.qa.Vh) {
    case M.qa.$q:
        M.Ab.au = "Moz",
            M.Ab.uq = p;
        break;
    case M.qa.Zz:
    case M.qa.bA:
        M.Ab.au = "webkit",
            M.Ab.uq = p;
        break;
    case M.qa.aA:
        M.Ab.au = "O",
            M.Ab.uq = r;
        break;
    case M.qa.$z:
        M.Ab.au = "ms",
            M.Ab.uq = r;
        break;
    default:
        M.Ab.au = "webkit",
            M.Ab.uq = p
}
M.Ab.r8 = M.Ab.au + "Transform",
    M.Ab.translate = M.Ab.uq ?
        function(t) {
            return "translate3d(" + t.x + "px, " + t.y + "px, 0) "

        }: function(t) {
        return "translate(" + t.x + "px, " + t.y + "px) "
    },
    M.Ab.rotate = M.Ab.uq ?
        function(t) {
            return "rotateZ(" + t + "deg) "
        }: function(t) {
        return "rotate(" + t + "deg) "
    },
    M.Ab.scale = function(t) {
        return "scale(" + t.x + ", " + t.y + ") "
    },
    M.Ab.Pq = function(t) {
        return "skewX(" + -t.x + "deg) skewY(" + t.y + "deg)"
    },
    M.wS = function() {
        return M.Ab(document.createElement("input"))
    },
    M.Ab.Yda = function(t) {
        var i = 0,
            e = 0;
        do i += t.offsetLeft,
            e += t.offsetTop;
        while (t = t.offsetParent);
        return {
            x: i,
            y: e
        }
    },
    M.d$ = -1,
    M.PI = Math.PI,
    M.AT = parseFloat("3.402823466e+38F"),
    M.R9 = parseFloat("1.175494351e-38F"),
    M.RU = M.PI / 180,
    M.XH = 180 / M.PI,
    M.cK = 4294967295,
    M.XR = function(t, i, e) {
        if (!M.wq(e) || M.ck(e.x) || M.ck(e.y)) M.log(M.i.XR);
        else {
            var n = e[t];
            e[t] = e[i],
                e[i] = n
        }
    },
    M.kja = function(t, i, e) {
        return t + (i - t) * e
    },
    M.Mb = function() {
        return 16777215 * Math.random()
    },
    M.W5 = function() {
        return 2 * (Math.random() - .5)
    },
    M.Aka = Math.random,
    M.cf = function(t) {
        return t * M.RU
    },
    M.PG = function(t) {
        return t * M.XH
    },
    M.PQ = function(t) {
        return M.log(M.i.PQ),
        t * M.XH
    },
    M.Ar = Number.MAX_VALUE - 1,
    M.pc = M.BU ? 1: 770,
    M.oc = 771,
    M.St = function(t) {
        t.la && (t.la.sb(), t.la.lf())
    },
    M.Hda = z(),
    M.Tca = z(),
    M.fh = function() {
        M.Wc += 1
    },
    M.fv = 1.192092896e - 7,
    M.zb = M.AA ?
        function() {
            return M.K.yh
        }: F(1),
    M.M5 = function(t) {
        var i = M.zb();
        return M.d(t.x * i, t.y * i)
    },
    M.MG = function(t) {
        var i = M.zb();
        return M.d(t.x / i, t.y / i)
    },
    M.xD = function(t, i) {
        var e = M.zb();
        i.x = t.x / e,
            i.y = t.y / e
    },
    M.I7 = function(t) {
        var i = M.zb();
        return M.size(t.width * i, t.height * i)
    },
    M.OR = function(t) {
        var i = M.zb();
        return M.size(t.width / i, t.height / i)
    },
    M.JN = function(t, i) {
        var e = M.zb();
        i.width = t.width / e,
            i.height = t.height / e
    },
    M.Nl = M.AA ?
        function(t) {
            var i = M.zb();
            return M.rect(t.x / i, t.y / i, t.width / i, t.height / i)
        }: u(),
    M.ju = M.AA ?
        function(t) {
            var i = M.zb();
            return M.rect(t.x * i, t.y * i, t.width * i, t.height * i)
        }: u(),
    M.ONE = 1,
    M.ZERO = 0,
    M.SRC_ALPHA = 770,
    M.SRC_ALPHA_SATURATE = 776,
    M.SRC_COLOR = 768,
    M.DST_ALPHA = 772,
    M.DST_COLOR = 774,
    M.ONE_MINUS_SRC_ALPHA = 771,
    M.ONE_MINUS_SRC_COLOR = 769,
    M.ONE_MINUS_DST_ALPHA = 773,
    M.ONE_MINUS_DST_COLOR = 775,
    M.ONE_MINUS_CONSTANT_ALPHA = 32772,
    M.ONE_MINUS_CONSTANT_COLOR = 32770,
    M.Zp = function() {
        if (M.ku == M.Z) {
            var t = M.l.getError();
            t && M.log(M.i.Zp, t)
        }
    },
    M.G9 = 0,
    M.E9 = 1,
    M.H9 = 2,
    M.F9 = 3,
    M.D9 = 2,
    M.xaa = 0,
    M.Dd = 1,
    M.vo = 2,
    M.wo = 4,
    M.wh = M.Dd | M.vo | M.wo,
    M.W9 = 0,
    M.eb = 0,
    M.nd = 1,
    M.bd = 2,
    M.yaa = 3,
    M.Lr = 0,
    M.Kr = 1,
    M.uo = 2,
    M.Rv = 3,
    M.Qv = 4,
    M.Pv = 5,
    M.Mr = 6,
    M.GB = 7,
    M.uaa = 8,
    M.oj = "ShaderPositionTextureColor",
    M.yv = "ShaderPositionTextureColorAlphaTest",
    M.xv = "ShaderPositionColor",
    M.Dr = "ShaderPositionTexture",
    M.jB = "ShaderPositionTexture_uColor",
    M.iB = "ShaderPositionTextureA8Color",
    M.kB = "ShaderPosition_uColor",
    M.cJ = "ShaderPositionLengthTextureColor",
    M.GW = "CC_PMatrix",
    M.EW = "CC_MVMatrix",
    M.FW = "CC_MVPMatrix",
    M.KW = "CC_Time",
    M.JW = "CC_SinTime",
    M.DW = "CC_CosTime",
    M.HW = "CC_Random01",
    M.IW = "CC_Texture0",
    M.dK = "CC_alpha_value",
    M.Zq = "a_color",
    M.Xl = "a_position",
    M.Zn = "a_texCoord",
    M.MT = 32,
    M.QH = 3233828865,
    M.Sv = 3233828866,
    M.iU = 8801,
M.SU = 8802,
M.dT = 8803,
M.ot = function(t, i) {
    if (t && 0 < t.length) for (var e = 0; e < t.length; e++) if (! (t[e] instanceof i)) return M.log("element type is wrong!"),
        r;
    return p
},
M.ne = function(t, i) {
    for (var e = 0, n = t.length; n > e; e++) if (t[e] == i) {
        t.splice(e, 1);
        break
    }
},
M.hca = function(t, i) {
    for (var e = 0, n = i.length; n > e; e++) M.ne(t, i[e])
},
M.gca = function(t, i, e) {
    return t.splice.apply(t, [e, 0].concat(i)),
        t
},
M.BO = function(t) {
    var i,
        e = t.length,
        n = Array(e);
    for (i = 0; e > i; i += 1) n[i] = t[i];
    return n
},
M = M || {},
M.M = M.M || {},
M.M.KB = function() {
    M.color = function(t, i, e, n, r, s) {
        return t === k ? new M.de(0, 0, 0, 255, r, s) : M.zd(t) ? (t = M.RP(t), new M.de(t.r, t.g, t.b, t.a)) : M.wq(t) ? new M.de(t.r, t.g, t.b, t.a, t.Tp, t.offset) : new M.de(t, i, e, n, r, s)
    },
        M.de = function(t, i, e, n, r, s) {
            this.od = r || new ArrayBuffer(M.de.BYTES_PER_ELEMENT),
                this.Ga = s || 0,
                r = this.od,
                s = this.Ga;
            var h = Uint8Array.BYTES_PER_ELEMENT;
            this.KD = new Uint8Array(r, s, 1),
                this.DC = new Uint8Array(r, s + h, 1),
                this.aC = new Uint8Array(r, s + 2 * h, 1),
                this.TB = new Uint8Array(r, s + 3 * h, 1),
                this.KD[0] = t || 0,
                this.DC[0] = i || 0,
                this.aC[0] = e || 0,
                this.TB[0] = n == q ? 255: n,
            n === k && (this.y0 = p)
        },
        M.de.BYTES_PER_ELEMENT = 4;
    var t = M.de.prototype;
    t.FY = function() {
        return this.KD[0]
    },
        t.z_ = function(t) {
            this.KD[0] = 0 > t ? 0: t
        },
        t.tY = function() {
            return this.DC[0]
        },
        t.u_ = function(t) {
            this.DC[0] = 0 > t ? 0: t
        },
        t.lY = function() {
            return this.aC[0]
        },
        t.l_ = function(t) {
            this.aC[0] = 0 > t ? 0: t
        },
        t.hY = function() {
            return this.TB[0]
        },
        t.k_ = function(t) {
            this.TB[0] = 0 > t ? 0: t
        },
        M.k(t, "r", t.FY, t.z_),
        M.k(t, "g", t.tY, t.u_),
        M.k(t, "b", t.lY, t.l_),
        M.k(t, "a", t.hY, t.k_),
        U = function(t, i, e, n) {
            this.od = e || new ArrayBuffer(U.BYTES_PER_ELEMENT),
                this.Ga = n || 0,
                this.jn = new Float32Array(this.od, this.Ga, 1),
                this.kn = new Float32Array(this.od, this.Ga + 4, 1),
                this.jn[0] = t || 0,
                this.kn[0] = i || 0
        },
        U.BYTES_PER_ELEMENT = 8,
        Object.defineProperties(U.prototype, {
            x: {
                get: function() {
                    return this.jn[0]
                },
                set: function(t) {
                    this.jn[0] = t
                },
                enumerable: p
            },
            y: {
                get: function() {
                    return this.kn[0]
                },
                set: function(t) {
                    this.kn[0] = t
                },
                enumerable: p
            }
        }),
        V = function(t, i, e, n, r) {
            this.od = n || new ArrayBuffer(V.BYTES_PER_ELEMENT),
                this.Ga = r || 0,
                n = this.od,
                r = this.Ga,
                this.jn = new Float32Array(n, r, 1),
                this.jn[0] = t || 0,
                this.kn = new Float32Array(n, r + Float32Array.BYTES_PER_ELEMENT, 1),
                this.kn[0] = i || 0,
                this.$E = new Float32Array(n, r + 2 * Float32Array.BYTES_PER_ELEMENT, 1),
                this.$E[0] = e || 0
        },
        V.BYTES_PER_ELEMENT = 12,
        Object.defineProperties(V.prototype, {
            x: {
                get: function() {
                    return this.jn[0]
                },
                set: function(t) {
                    this.jn[0] = t
                },
                enumerable: p
            },
            y: {
                get: function() {
                    return this.kn[0]
                },
                set: function(t) {
                    this.kn[0] = t
                },
                enumerable: p
            },
            e: {
                get: function() {
                    return this.$E[0]
                },
                set: function(t) {
                    this.$E[0] = t
                },
                enumerable: p
            }
        }),
        ea = function(t, i, e, n) {
            this.od = e || new ArrayBuffer(ea.BYTES_PER_ELEMENT),
                this.Ga = n || 0,
                this.IE = new Float32Array(this.od, this.Ga, 1),
                this.OE = new Float32Array(this.od, this.Ga + 4, 1),
                this.IE[0] = t || 0,
                this.OE[0] = i || 0
        },
        ea.BYTES_PER_ELEMENT = 8,
        Object.defineProperties(ea.prototype, {
            ma: {
                get: function() {
                    return this.IE[0]
                },
                set: function(t) {
                    this.IE[0] = t
                },
                enumerable: p
            },
            na: {
                get: function() {
                    return this.OE[0]
                },
                set: function(t) {
                    this.OE[0] = t
                },
                enumerable: p
            }
        }),
        M.cB = function(t, i, e, n, r, s) {
            this.od = r || new ArrayBuffer(M.cB.BYTES_PER_ELEMENT),
                this.Ga = s || 0,
                r = this.od,
                s = U.BYTES_PER_ELEMENT,
                this.Fp = t ? new U(t.x, t.y, r, 0) : new U(0, 0, r, 0),
                this.Ip = i ? new U(i.x, i.y, r, s) : new U(0, 0, r, s),
                this.Do = e ? new U(e.x, e.y, r, 2 * s) : new U(0, 0, r, 2 * s),
                this.Ho = n ? new U(n.x, n.y, r, 3 * s) : new U(0, 0, r, 3 * s)
        },
        M.cB.BYTES_PER_ELEMENT = 32,
        M.sv = function(t, i, e, n) {
            this.J = t || new V(0, 0, 0),
                this.V = i || new V(0, 0, 0),
                this.U = e || new V(0, 0, 0),
                this.N = n || new V(0, 0, 0)
        },
        Object.defineProperties(M.cB.prototype, {
            U: {
                get: E("Fp"),
                set: function(t) {
                    this.Fp.x = t.x,
                        this.Fp.y = t.y
                },
                enumerable: p
            },
            N: {
                get: E("Ip"),
                set: function(t) {
                    this.Ip.x = t.x,
                        this.Ip.y = t.y
                },
                enumerable: p
            },
            J: {
                get: E("Do"),
                set: function(t) {
                    this.Do.x = t.x,
                        this.Do.y = t.y
                },
                enumerable: p
            },
            V: {
                get: E("Ho"),
                set: function(t) {
                    this.Ho.x = t.x,
                        this.Ho.y = t.y
                },
                enumerable: p
            }
        }),
        M.Eg = function(t, i, e, n, r) {
            this.od = n || new ArrayBuffer(M.Eg.BYTES_PER_ELEMENT),
                this.Ga = r || 0,
                n = this.od,
                r = this.Ga;
            var s = V.BYTES_PER_ELEMENT;
            this.Xa = t ? new V(t.x, t.y, t.e, n, r) : new V(0, 0, 0, n, r),
                this.bs = i ? M.color(i.r, i.g, i.b, i.a, n, r + s) : M.color(0, 0, 0, 0, n, r + s),
                this.Af = e ? new ea(e.ma, e.na, n, r + s + M.de.BYTES_PER_ELEMENT) : new ea(0, 0, n, r + s + M.de.BYTES_PER_ELEMENT)
        },
        M.Eg.BYTES_PER_ELEMENT = 24,
        Object.defineProperties(M.Eg.prototype, {
            j: {
                get: E("Xa"),
                set: function(t) {
                    var i = this.Xa;
                    i.x = t.x,
                        i.y = t.y,
                        i.e = t.e
                },
                enumerable: p
            },
            A: {
                get: E("bs"),
                set: function(t) {
                    var i = this.bs;
                    i.r = t.r,
                        i.g = t.g,
                        i.b = t.b,
                        i.a = t.a
                },
                enumerable: p
            },
            p: {
                get: E("Af"),
                set: function(t) {
                    this.Af.ma = t.ma,
                        this.Af.na = t.na
                },
                enumerable: p
            }
        }),
        M.Bb = function(t, i, e, n, r, s) {
            this.od = r || new ArrayBuffer(M.Bb.BYTES_PER_ELEMENT),
                this.Ga = s || 0,
                r = this.od,
                s = this.Ga;
            var h = M.Eg.BYTES_PER_ELEMENT;
            this.Fp = t ? new M.Eg(t.j, t.A, t.p, r, s) : new M.Eg(q, q, q, r, s),
                this.Do = i ? new M.Eg(i.j, i.A, i.p, r, s + h) : new M.Eg(q, q, q, r, s + h),
                this.Ip = e ? new M.Eg(e.j, e.A, e.p, r, s + 2 * h) : new M.Eg(q, q, q, r, s + 2 * h),
                this.Ho = n ? new M.Eg(n.j, n.A, n.p, r, s + 3 * h) : new M.Eg(q, q, q, r, s + 3 * h)
        },
        M.Bb.BYTES_PER_ELEMENT = 96,
        Object.defineProperties(M.Bb.prototype, {
            U: {
                get: E("Fp"),
                set: function(t) {
                    var i = this.Fp;
                    i.j = t.j,
                        i.A = t.A,
                        i.p = t.p
                },
                enumerable: p
            },
            J: {
                get: E("Do"),
                set: function(t) {
                    var i = this.Do;
                    i.j = t.j,
                        i.A = t.A,
                        i.p = t.p
                },
                enumerable: p
            },
            N: {
                get: E("Ip"),
                set: function(t) {
                    var i = this.Ip;
                    i.j = t.j,
                        i.A = t.A,
                        i.p = t.p
                },
                enumerable: p
            },
            V: {
                get: E("Ho"),
                set: function(t) {
                    var i = this.Ho;
                    i.j = t.j,
                        i.A = t.A,
                        i.p = t.p
                },
                enumerable: p
            },
            Tp: {
                get: E("od"),
                enumerable: p
            }
        }),
        M.fK = function() {
            return new M.Bb
        },
        M.eK = function(t) {
            if (!t) return M.fK();
            var i = t.U,
                e = t.J,
                n = t.N;
            return t = t.V,
            {
                U: {
                    j: {
                        x: i.j.x,
                        y: i.j.y,
                        e: i.j.e
                    },
                    A: {
                        r: i.A.r,
                        g: i.A.g,
                        b: i.A.b,
                        a: i.A.a
                    },
                    p: {
                        ma: i.p.ma,
                        na: i.p.na
                    }
                },
                J: {
                    j: {
                        x: e.j.x,
                        y: e.j.y,
                        e: e.j.e
                    },
                    A: {
                        r: e.A.r,
                        g: e.A.g,
                        b: e.A.b,
                        a: e.A.a
                    },
                    p: {
                        ma: e.p.ma,
                        na: e.p.na
                    }
                },
                N: {
                    j: {
                        x: n.j.x,
                        y: n.j.y,
                        e: n.j.e
                    },
                    A: {
                        r: n.A.r,
                        g: n.A.g,
                        b: n.A.b,
                        a: n.A.a
                    },
                    p: {
                        ma: n.p.ma,
                        na: n.p.na
                    }
                },
                V: {
                    j: {
                        x: t.j.x,
                        y: t.j.y,
                        e: t.j.e
                    },
                    A: {
                        r: t.A.r,
                        g: t.A.g,
                        b: t.A.b,
                        a: t.A.a
                    },
                    p: {
                        ma: t.p.ma,
                        na: t.p.na
                    }
                }
            }
        },
        M.waa = function(t) {
            if (!t) return [];
            for (var i = [], e = 0; e < t.length; e++) i.push(M.eK(t[e]));
            return i
        },
        M.Cd = function(t, i, e, n, r) {
            this.od = n || new ArrayBuffer(M.Cd.BYTES_PER_ELEMENT),
                this.Ga = r || 0,
                n = this.od,
                r = this.Ga;
            var s = U.BYTES_PER_ELEMENT;
            this.Xa = t ? new U(t.x, t.y, n, r) : new U(0, 0, n, r),
                this.bs = i ? M.color(i.r, i.g, i.b, i.a, n, r + s) : M.color(0, 0, 0, 0, n, r + s),
                this.Af = e ? new ea(e.ma, e.na, n, r + s + M.de.BYTES_PER_ELEMENT) : new ea(0, 0, n, r + s + M.de.BYTES_PER_ELEMENT)
        },
        M.Cd.BYTES_PER_ELEMENT = 20,
        Object.defineProperties(M.Cd.prototype, {
            j: {
                get: E("Xa"),
                set: function(t) {
                    this.Xa.x = t.x,
                        this.Xa.y = t.y
                },
                enumerable: p
            },
            A: {
                get: E("bs"),
                set: function(t) {
                    var i = this.bs;
                    i.r = t.r,
                        i.g = t.g,
                        i.b = t.b,
                        i.a = t.a
                },
                enumerable: p
            },
            p: {
                get: E("Af"),
                set: function(t) {
                    this.Af.ma = t.ma,
                        this.Af.na = t.na
                },
                enumerable: p
            }
        }),
        M.fc = function(t, i, e, n, r) {
            this.od = n || new ArrayBuffer(M.fc.BYTES_PER_ELEMENT),
                this.Ga = r || 0,
                n = this.od,
                r = this.Ga;
            var s = M.Cd.BYTES_PER_ELEMENT;
            this.pK = t ? new M.Cd(t.j, t.A, t.p, n, r) : new M.Cd(q, q, q, n, r),
                this.zK = i ? new M.Cd(i.j, i.A, i.p, n, r + s) : new M.Cd(q, q, q, n, r + s),
                this.FK = e ? new M.Cd(e.j, e.A, e.p, n, r + 2 * s) : new M.Cd(q, q, q, n, r + 2 * s)
        },
        M.fc.BYTES_PER_ELEMENT = 60,
        Object.defineProperties(M.fc.prototype, {
            a: {
                get: E("pK"),
                set: function(t) {
                    var i = this.pK;
                    i.j = t.j,
                        i.A = t.A,
                        i.p = t.p
                },
                enumerable: p
            },
            b: {
                get: E("zK"),
                set: function(t) {
                    var i = this.zK;
                    i.j = t.j,
                        i.A = t.A,
                        i.p = t.p
                },
                enumerable: p
            },
            s: {
                get: E("FK"),
                set: function(t) {
                    var i = this.FK;
                    i.j = t.j,
                        i.A = t.A,
                        i.p = t.p
                },
                enumerable: p
            }
        })
},
M.M.WA = function() {
    var t = M.color;
    t.PY = function() {
        return t(255, 255, 255)
    },
        t.QY = function() {
            return t(255, 255, 0)
        },
        t.nY = function() {
            return t(0, 0, 255)
        },
        t.vY = function() {
            return t(0, 255, 0)
        },
        t.GY = function() {
            return t(255, 0, 0)
        },
        t.AY = function() {
            return t(255, 0, 255)
        },
        t.mY = function() {
            return t(0, 0, 0)
        },
        t.EY = function() {
            return t(255, 127, 0)
        },
        t.uY = function() {
            return t(166, 166, 166)
        },
        M.k(t, "WHITE", t.PY),
        M.k(t, "YELLOW", t.QY),
        M.k(t, "BLUE", t.nY),
        M.k(t, "GREEN", t.vY),
        M.k(t, "RED", t.GY),
        M.k(t, "MAGENTA", t.AY),
        M.k(t, "BLACK", t.mY),
        M.k(t, "ORANGE", t.EY),
        M.k(t, "GRAY", t.uY),
        M.Xb.QX = function() {
            return new M.Xb(M.ONE, M.ZERO)
        },
        M.Xb.dX = function() {
            return new M.Xb(M.ONE, M.ONE_MINUS_SRC_ALPHA)
        },
        M.Xb.cX = function() {
            return new M.Xb(M.SRC_ALPHA, M.ONE_MINUS_SRC_ALPHA)
        },
        M.Xb.bX = function() {
            return new M.Xb(M.SRC_ALPHA, M.ONE)
        },
        M.k(M.Xb, "DISABLE", M.Xb.QX),
        M.k(M.Xb, "ALPHA_PREMULTIPLIED", M.Xb.dX),
        M.k(M.Xb, "ALPHA_NON_PREMULTIPLIED", M.Xb.cX),
        M.k(M.Xb, "ADDITIVE", M.Xb.bX)
},
M.de = function(t, i, e, n) {
    this.r = t || 0,
        this.g = i || 0,
        this.b = e || 0,
        this.a = n == q ? 255: n
},
M.color = function(t, i, e, n) {
    return t === k ? {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    }: M.zd(t) ? M.RP(t) : M.wq(t) ? {
        r: t.r,
        g: t.g,
        b: t.b,
        a: t.a == q ? 255: t.a
    }: {
        r: t,
        g: i,
        b: e,
        a: n == q ? 255: n
    }
},
M.yca = function(t, i) {
    return t.r === i.r && t.g === i.g && t.b === i.b
},
M.Wz = function(t, i) {
    return new U(t, i)
},
M.hoa = function(t, i, e) {
    return new V(t, i, e)
},
M.Pna = function(t, i) {
    return new ea(t, i)
},
M.Xb = function(t, i) {
    this.src = t,
        this.I = i
},
M.mca = function() {
    return new M.Xb(M.ONE, M.ZERO)
},
M.RP = function(t) {
    return t = t.replace(/^#?/, "0x"),
        t = parseInt(t),
        M.color(t >> 16, (t >> 8) % 256, t % 256)
},
M.Aca = function(t) {
    var i = t.r.toString(16),
        e = t.g.toString(16),
        n = t.b.toString(16);
    return "#" + (16 > t.r ? "0" + i: i) + (16 > t.g ? "0" + e: e) + (16 > t.b ? "0" + n: n)
},
M.Ev = 0,
M.mi = 1,
M.pJ = 2,
M.Nr = 0,
M.NW = 1,
M.gK = 2,
M.Eaa = M.xa.extend({
    np: q,
    it: q,
    SB: 0,
    ctor: function() {
        this.np = {},
            this.it = {},
            this.SB = 2 << (0 | 10 * Math.random())
    },
    XW: function() {
        return this.SB++,
        "key_" + this.SB
    },
    uma: function(t, i) {
        if (i != q) {
            var e = this.XW();
            this.np[e] = i,
                this.it[e] = t
        }
    },
    t5: function(t) {
        if (t == q) return q;
        var i,
            e = this.np;
        for (i in e) if (e[i] === t) return this.it[i];
        return q
    },
    goa: function(t) {
        return this.t5(t)
    },
    h6: function(t) {
        if (t != q) {
            var i,
                e = this.np;
            for (i in e) if (e[i] === t) {
                delete this.it[i],
                    delete e[i];
                break
            }
        }
    },
    Zka: function(t) {
        if (t != q) for (var i = 0; i < t.length; i++) this.h6(t[i])
    },
    N0: function() {
        var t,
            i = [],
            e = this.np;
        for (t in e) i.push(e[t]);
        return i
    },
    Tka: function() {
        this.np = {},
            this.it = {}
    },
    count: function() {
        return this.N0().length
    }
}),
M.B === M.Z && (M.assert(M.Vb(M.M.KB), M.i.Bd, "CCTypesWebGL.js"), M.M.KB(), delete M.M.KB),
M.assert(M.Vb(M.M.WA), M.i.Bd, "CCTypesPropertyDefine.js"),
M.M.WA(),
delete M.M.WA,
M.raa = [],
M.saa = {},
M.A9 = "device-dpi",
M.aT = "high-dpi",
M.C9 = "medium-dpi",
M.B9 = "low-dpi",
M.nA = M.xa.extend({
    Raa: q,
    xi: q,
    Ok: q,
    tp: q,
    Ie: q,
    sl: q,
    VD: r,
    $B: p,
    xm: 1,
    TE: "",
    SD: q,
    pa: 1,
    QM: 1,
    Ta: 1,
    RM: 1,
    gp: 0,
    iD: 5,
    Ii: q,
    pN: q,
    tN: q,
    sN: q,
    qN: q,
    rN: q,
    ys: r,
    Maa: r,
    Iba: q,
    iM: q,
    jM: q,
    Eba: r,
    nC: q,
    Uk: q,
    CC: 1,
    Xv: r,
    sM: p,
    Mx: q,
    ctor: function() {
        var t = document,
            i = M.sk,
            e = M.yg;
        this.Uk = M.un.parentNode === t.body ? t.documentElement: M.un.parentNode,
            this.xi = M.size(0, 0),
            this.SC();
        var t = M.fb.width,
            n = M.fb.height;
        this.Ok = M.size(t, n),
            this.tp = M.size(t, n),
            this.Ie = M.rect(0, 0, t, n),
            this.sl = M.rect(0, 0, t, n),
            this.nC = {
                left: 0,
                top: 0
            },
            this.TE = "Cocos2dHTML5",
            t = M.qa,
            this.a2(t.Kl == t.po || t.Kl == t.LA),
        M.Wn && M.Wn.ha(this.sl),
            this.pN = new M.nf(i.Nu, e.Pu),
            this.tN = new M.nf(i.NU, e.lB),
            this.sN = new M.nf(i.Nu, e.KA),
            this.qN = new M.nf(i.Nu, e.rA),
            this.rN = new M.nf(i.Nu, e.sA),
            this.iM = M.fb,
            this.jM = M.l,
            this.Mx = M.aT
    },
    TD: function() {
        var t = this.tp.width,
            i = this.tp.height;
        this.SD && (this.SC(), this.SD.call()),
        t > 0 && this.bH(t, i, this.Ii)
    },
    Yma: function(t) {
        this.Mx = t,
            this.CN()
    },
    lga: E("Mx"),
    p6: function(t) {
        t ? this.Xv || (this.Xv = p, t = this.TD.bind(this), M.Na(window, "resize", t, r)) : this.Xv && (this.Xv = p, t = this.TD.bind(this), window.removeEventListener("resize", t, r))
    },
    Lma: function(t) { (M.Vb(t) || t == q) && (this.SD = t)
    },
    SC: function() {
        var t = this.xi;
        t.width = this.Uk.clientWidth,
            t.height = this.Uk.clientHeight
    },
    Faa: function() {
        var t = this.tp.width,
            i = this.tp.height;
        t > 0 && this.bH(t, i, this.Ii)
    },
    CN: function() {
        if (this.sM) {
            var t = document.getElementById("cocosMetaElement");
            t && document.head.removeChild(t);
            var i,
                e,
                n = (t = document.getElementsByName("viewport")) ? t[0] : q,
                t = M.Wb("meta");
            t.id = "cocosMetaElement",
                t.name = "viewport",
                t.content = "",
                i = M.qa.hh && M.qa.Vh == M.qa.$q ? {
                    width: "device-width",
                    "initial-scale": "1.0"
                }: {
                    width: "device-width",
                    "user-scalable": "no",
                    "maximum-scale": "1.0",
                    "initial-scale": "1.0"
                },
            M.qa.hh && (i["target-densitydpi"] = this.Mx),
                e = n ? n.content: "";
            for (var r in i) RegExp(r).test(e) || (e += "," + r + "=" + i[r]);
            "" != e && (e = e.substr(1)),
                t.content = e,
            n && (n.content = e),
                document.head.appendChild(t)
        }
    },
    xba: function() {
        var t = M.zb();
        this.Ta = this.pa = t
    },
    uba: function() {
        this.pa = this.QM,
            this.Ta = this.RM
    },
    Gaa: z(),
    j4: function() {
        this.ys = p
    },
    G0: A("sM"),
    a2: function(t) {
        this.VD = t ? p: r
    },
    lha: E("VD"),
    Z1: function(t) {
        this.$B = t ? p: r
    },
    Yga: E("$B"),
    end: z(),
    iha: function() {
        return this.iM != q && this.jM != q
    },
    Zla: function(t) {
        this.CC = t,
            M.K.Tn(M.K.Gn())
    },
    Mna: z(),
    ema: z(),
    Kla: function(t, i) {
        this.nC = {
            left: t,
            top: i
        }
    },
    vea: E("nC"),
    Wea: function() {
        return M.size(this.xi.width, this.xi.height)
    },
    Yla: function(t, i) {
        this.xi.width = t,
            this.xi.height = i,
            this.Uk.style.width = t + "px",
            this.Uk.style.height = i + "px",
            this.TD(),
            M.K.Tn(M.K.Gn())
    },
    sca: z(),
    rq: function() {
        return M.size(this.sl.width, this.sl.height)
    },
    xy: function() {
        return M.d(this.sl.x, this.sl.y)
    },
    pca: F(p),
    Rfa: E("Ii"),
    h7: function(t) {
        if (t instanceof M.nf) this.Ii = t;
        else {
            var i = M.nf;
            t === i.Pu && (this.Ii = this.pN),
            t === i.lB && (this.Ii = this.tN),
            t === i.KA && (this.Ii = this.sN),
            t === i.rA && (this.Ii = this.qN),
            t === i.sA && (this.Ii = this.rN)
        }
    },
    bH: function(t, i, e) {
        isNaN(t) || 0 == t || isNaN(i) || 0 == i ? M.log(M.i.pT) : (this.h7(e), (e = this.Ii) ? (e.Nn(this), M.qa.hh && this.CN(), this.SC(), this.Ok = M.size(t, i), this.tp = M.size(t, i), t = e.apply(this, this.Ok), t.scale && 2 == t.scale.length && (this.pa = t.scale[0], this.Ta = t.scale[1]), t.viewport && (t = this.Ie = t.viewport, i = this.sl, i.width = M.fb.width / this.pa, i.height = M.fb.height / this.Ta, i.x = -t.x / this.pa, i.y = -t.y / this.Ta), t = M.K, t.ac.width = this.Ok.width, t.ac.height = this.Ok.height, e.Mn(this), M.Eu.width = t.ac.width, M.Eu.height = t.ac.height, M.B == M.Z && (t.No(), t.sR()), this.QM = this.pa, this.RM = this.Ta, M.eT && M.eT.tba(), M.Wn && M.Wn.ha(this.sl)) : M.log(M.i.qT))
    },
    PF: function() {
        return M.size(this.Ok.width, this.Ok.height)
    },
    B7: function(t, i, e, n) {
        var r = this.CC,
            s = this.pa,
            h = this.Ta;
        M.l.viewport(t * s * r + this.Ie.x * r, i * h * r + this.Ie.y * r, e * s * r, n * h * r)
    },
    Nma: function(t, i, e, n) {
        var r = this.CC,
            s = this.pa,
            h = this.Ta;
        M.l.scissor(t * s * r + this.Ie.x * r, i * h * r + this.Ie.y * r, e * s * r, n * h * r)
    },
    nha: function() {
        var t = M.l;
        return t.isEnabled(t.SCISSOR_TEST)
    },
    Wfa: function() {
        var t = M.l,
            i = this.pa,
            e = this.Ta,
            t = t.getParameter(t.SCISSOR_BOX);
        return M.rect((t[0] - this.Ie.x) / i, (t[1] - this.Ie.y) / e, t[2] / i, t[3] / e)
    },
    yna: function(t) {
        t != q && 0 < t.length && (this.TE = t)
    },
    Ega: E("TE"),
    Fga: E("Ie"),
    BP: E("pa"),
    CP: E("Ta"),
    Dea: E("xm"),
    sF: function(t, i, e) {
        return {
            x: this.xm * (t - e.left),
            y: this.xm * (e.top + e.height - i)
        }
    },
    IX: function(t, i) {
        var e = this.Ie;
        t.x = (this.xm * (t.x - i.left) - e.x) / this.pa,
            t.y = (this.xm * (i.top + i.height - t.y) - e.y) / this.Ta
    },
    pw: function(t) {
        for (var i, e, n, r = this.Ie, s = this.pa, h = this.Ta, a = 0; a < t.length; a++) i = t[a],
            e = i.td,
            n = i.Kh,
            i.jE((e.x - r.x) / s, (e.y - r.y) / h),
            i.Wm((n.x - r.x) / s, (n.y - r.y) / h)
    }
}),
M.nA.HC = function() {
    return this.Pw || (this.Pw = this.Pw || new M.nA, this.Pw.j4()),
        this.Pw
},
M.sk = M.xa.extend({
    Nn: z(),
    apply: z(),
    Mn: z(),
    nE: function(t, i, e) {
        var n = t.Uk;
        M.view.$B && M.qa.hh && n == document.documentElement && M.screen.c1(n);
        var n = M.fb,
            r = M.un;
        r.style.width = n.style.width = i + "px",
            r.style.height = n.style.height = e + "px",
            r = t.xm = 1,
        t.VD && (r = t.xm = window.devicePixelRatio || 1),
            n.width = i * r,
            n.height = e * r,
            t = document.body;
        var s;
        t && (s = t.style) && (s.paddingTop = s.paddingTop || "0px", s.paddingRight = s.paddingRight || "0px", s.paddingBottom = s.paddingBottom || "0px", s.paddingLeft = s.paddingLeft || "0px", s.borderTop = s.borderTop || "0px", s.borderRight = s.borderRight || "0px", s.borderBottom = s.borderBottom || "0px", s.borderLeft = s.borderLeft || "0px", s.marginTop = s.marginTop || "0px", s.marginRight = s.marginRight || "0px", s.marginBottom = s.marginBottom || "0px", s.marginLeft = s.marginLeft || "0px")
    },
    SL: function() {
        document.body.insertBefore(M.un, document.body.firstChild);
        var t = document.body.style;
        t.width = window.innerWidth + "px",
            t.height = window.innerHeight + "px",
            t.overflow = "hidden",
            t = M.un.style,
            t.position = "fixed",
            t.left = t.top = "0px",
            document.body.scrollTop = 0
    }
}),
M.yg = M.xa.extend({
    UD: {
        scale: [1, 1],
        viewport: q
    },
    Xr: function(t, i, e, n, r, s) {
        return 2 > Math.abs(t - e) && (e = t),
        2 > Math.abs(i - n) && (n = i),
            t = M.rect(Math.round((t - e) / 2), Math.round((i - n) / 2), e, n),
        M.B == M.ya && M.l.translate(t.x, t.y + n),
            this.UD.scale = [r, s],
            this.UD.viewport = t,
            this.UD
    },
    Nn: z(),
    apply: function() {
        return {
            scale: [1, 1]
        }
    },
    Mn: z()
}),
function() {
    var t = M.sk.extend({
            apply: function(t) {
                this.nE(t, t.xi.width, t.xi.height)
            }
        }),
        i = M.sk.extend({
            apply: function(t, i) {
                var e,
                    n,
                    r = t.xi.width,
                    s = t.xi.height,
                    h = M.un.style,
                    a = i.width,
                    o = i.height,
                    c = r / a,
                    u = s / o;
                u > c ? (e = r, n = o * c) : (e = a * u, n = s),
                    a = Math.round((r - e) / 2),
                    n = Math.round((s - n) / 2),
                    this.nE(t, r - 2 * a, s - 2 * n),
                    h.marginLeft = a + "px",
                    h.marginRight = a + "px",
                    h.marginTop = n + "px",
                    h.marginBottom = n + "px"
            }
        });
    t.extend({
        Nn: function(t) {
            this._super(t),
                t.Uk = document.documentElement
        },
        apply: function(t) {
            this._super(t),
                this.SL()
        }
    }),
        i.extend({
            Nn: function(t) {
                this._super(t),
                    t.Uk = document.documentElement
            },
            apply: function(t, i) {
                this._super(t, i),
                    this.SL()
            }
        });
    var e = M.sk.extend({
        apply: function(t) {
            this.nE(t, M.fb.width, M.fb.height)
        }
    });
    M.sk.Nu = new t,
        M.sk.NU = new i,
        M.sk.J$ = new e;
    var t = M.yg.extend({
            apply: function(t, i) {
                var e = M.fb.width,
                    n = M.fb.height;
                return this.Xr(e, n, e, n, e / i.width, n / i.height)
            }
        }),
        i = M.yg.extend({
            apply: function(t, i) {
                var e,
                    n,
                    r = M.fb.width,
                    s = M.fb.height,
                    h = i.width,
                    a = i.height,
                    o = r / h,
                    c = s / a,
                    u = 0;
                return c > o ? (u = o, e = r, n = a * u) : (u = c, e = h * u, n = s),
                    this.Xr(r, s, e, n, u, u)
            }
        }),
        e = M.yg.extend({
            apply: function(t, i) {
                var e,
                    n,
                    r,
                    s = M.fb.width,
                    h = M.fb.height,
                    a = i.width,
                    o = i.height,
                    c = s / a,
                    u = h / o;
                return u > c ? (e = u, n = a * e, r = h) : (e = c, n = s, r = o * e),
                    this.Xr(s, h, n, r, e, e)
            }
        }),
        n = M.yg.extend({
            apply: function(t, i) {
                var e = M.fb.width,
                    n = M.fb.height,
                    r = n / i.height;
                return this.Xr(e, n, e, n, r, r)
            },
            Mn: function(t) {
                M.K.ac = t.rq()
            }
        }),
        r = M.yg.extend({
            apply: function(t, i) {
                var e = M.fb.width,
                    n = M.fb.height,
                    r = e / i.width;
                return this.Xr(e, n, e, n, r, r)
            },
            Mn: function(t) {
                M.K.ac = t.rq()
            }
        });
    M.yg.Pu = new t,
        M.yg.lB = new i,
        M.yg.KA = new e,
        M.yg.rA = new n,
        M.yg.sA = new r
} (),
M.nf = M.xa.extend({
    nw: q,
    ow: q,
    ctor: function(t, i) {
        this.H6(t),
            this.I6(i)
    },
    Nn: function(t) {
        this.nw.Nn(t),
            this.ow.Nn(t)
    },
    apply: function(t, i) {
        return this.nw.apply(t, i),
            this.ow.apply(t, i)
    },
    Mn: function(t) {
        this.nw.Mn(t),
            this.ow.Mn(t)
    },
    H6: function(t) {
        t instanceof M.sk && (this.nw = t)
    },
    I6: function(t) {
        t instanceof M.yg && (this.ow = t)
    }
}),
M.nf.Pu = 0,
M.nf.KA = 1,
M.nf.lB = 2,
M.nf.rA = 3,
M.nf.sA = 4,
M.nf.LW = 5,
M.screen = {
    Kx: r,
    DD: q,
    GE: "",
    Tk: q,
    aY: [["requestFullscreen", "exitFullscreen", "fullscreenchange", "fullscreenEnabled", "fullscreenElement"], ["requestFullScreen", "exitFullScreen", "fullScreenchange", "fullScreenEnabled", "fullScreenElement"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitIsFullScreen", "webkitCurrentFullScreenElement"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozFullScreen", "mozFullScreenElement"], ["msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "msFullscreenEnabled", "msFullscreenElement"]],
    ha: function() {
        this.Tk = {};
        var t,
            i,
            e,
            n = this.aY;
        for (t = 0, l = n.length; l > t; t++) if ((i = n[t]) && i[1] in document) {
            for (t = 0, e = i.length; e > t; t++) this.Tk[n[0][t]] = i[t];
            break
        }
        this.Kx = this.Tk.requestFullscreen != k,
            this.GE = "ontouchstart" in window ? "touchstart": "mousedown"
    },
    fullScreen: function() {
        return this.Kx && document[this.Tk.fullscreenEnabled]
    },
    ZQ: function(t, i) {
        if (this.Kx) {
            if (t = t || document.documentElement, t[this.Tk.requestFullscreen](), i) {
                var e = this.Tk.aea;
                this.DD && document.removeEventListener(e, this.DD),
                    this.DD = i,
                    M.Na(document, e, i, r)
            }
            return t[this.Tk.requestFullscreen]()
        }
    },
    Jda: function() {
        return this.Kx ? document[this.Tk.exitFullscreen]() : p
    },
    c1: function(t, i) {
        function e() {
            r.ZQ(t, i),
                n.removeEventListener(r.GE, e)
        }
        t = t || document.body;
        var n = M.fb || t,
            r = this;
        this.ZQ(t, i),
            M.Na(n, this.GE, e)
    }
},
M.screen.ha(),
M.Wn = {
    aS: M.d(0, 0),
    bS: M.d(0, 0),
    top: M.d(0, 0),
    gF: M.d(0, 0),
    rO: M.d(0, 0),
    bottom: M.d(0, 0),
    dy: M.d(0, 0),
    left: M.d(0, 0),
    right: M.d(0, 0),
    width: 0,
    height: 0,
    ha: function(t) {
        var i = this.width = t.width,
            e = this.height = t.height,
            n = t.x;
        t = t.y;
        var r = t + e,
            s = n + i;
        this.aS.x = n,
            this.aS.y = r,
            this.bS.x = s,
            this.bS.y = r,
            this.top.x = n + i / 2,
            this.top.y = r,
            this.gF.x = n,
            this.gF.y = t,
            this.rO.x = s,
            this.rO.y = t,
            this.bottom.x = n + i / 2,
            this.bottom.y = t,
            this.dy.x = n + i / 2,
            this.dy.y = t + e / 2,
            this.left.x = n,
            this.left.y = t + e / 2,
            this.right.x = s,
            this.right.y = t + e / 2
    }
},
M.zW = -90,
M.AW = 90,
M.BW = 180,
M.taa = 0,
M.eQ = {
    qp: r,
    xM: r,
    XM: M.d(0, 0),
    XZ: M.d(0, 0),
    YM: [],
    ED: 0,
    ql: [],
    HE: {},
    gp: 0,
    iD: 5,
    Zv: r,
    $v: 1 / 30,
    sK: 1,
    lm: 0,
    UB: q,
    Yv: q,
    NY: function() {
        for (var t = this.gp, i = 0; i < this.iD; i++) {
            if (! (1 & t)) return this.gp |= 1 << i,
                i;
            t >>= 1
        }
        return - 1
    },
    e_: function(t) {
        0 > t || t >= this.iD || (t = ~ (1 << t), this.gp &= t)
    },
    Wk: q,
    dG: function(t) {
        for (var i, e, n, r = [], s = this.HE, h = 0, a = t.length; a > h; h++) if (i = t[h], n = i.Mg, e = s[n], e == q) {
            var o = this.NY(); - 1 == o ? M.log(M.i.k4, o) : (e = this.ql[o] = new M.Nv(i.td.x, i.td.y, i.Mg), e.Wm(i.Kh), s[n] = o, r.push(e))
        }
        0 < r.length && (this.Wk.pw(r), t = new M.zg(r), t.Rk = M.zg.eo.Yz, M.wa.dispatchEvent(t))
    },
    eG: function(t) {
        for (var i, e, n = [], r = this.ql, s = 0, h = t.length; h > s; s++) i = t[s],
            e = i.Mg,
            e = this.HE[e],
        e != q && r[e] && (r[e].jE(i.td), r[e].Wm(i.Kh), n.push(r[e]));
        0 < n.length && (this.Wk.pw(n), t = new M.zg(n), t.Rk = M.zg.eo.FA, M.wa.dispatchEvent(t))
    },
    Cy: function(t) {
        t = this.DP(t),
        0 < t.length && (this.Wk.pw(t), t = new M.zg(t), t.Rk = M.zg.eo.oA, M.wa.dispatchEvent(t))
    },
    PP: function(t) {
        t = this.DP(t),
        0 < t.length && (this.Wk.pw(t), t = new M.zg(t), t.Rk = M.zg.eo.eA, M.wa.dispatchEvent(t))
    },
    DP: function(t) {
        for (var i, e, n, r = [], s = this.ql, h = this.HE, a = 0, o = t.length; o > a; a++) i = t[a],
            n = i.Mg,
            e = h[n],
        e != q && s[e] && (s[e].jE(i.td), s[e].Wm(i.Kh), r.push(s[e]), this.e_(e), delete h[n]);
        return r
    },
    Zh: function(t) {
        var i = document.documentElement,
            e = window,
            n = q,
            n = M.Vb(t.getBoundingClientRect) ? t.getBoundingClientRect() : t instanceof HTMLCanvasElement ? {
                left: 0,
                top: 0,
                width: t.width,
                height: t.height
            }: {
                left: 0,
                top: 0,
                width: parseInt(t.style.width),
                height: parseInt(t.style.height)
            };
        return {
            left: n.left + e.pageXOffset - i.clientLeft,
            top: n.top + e.pageYOffset - i.clientTop,
            width: n.width,
            height: n.height
        }
    },
    q3: function(t) {
        for (var i = q, e = this.YM, n = t.Mg, r = e.length - 1; r >= 0; r--) if (e[r].Mg == n) {
            i = e[r];
            break
        }
        return i || (i = t),
            i
    },
    g7: function(t) {
        for (var i = r, e = this.YM, n = t.Mg, s = e.length - 1; s >= 0; s--) if (e[s].Mg == n) {
            e[s] = t,
                i = p;
            break
        }
        i || (50 >= e.length ? e.push(t) : (e[this.ED] = t, this.ED = (this.ED + 1) % 50))
    },
    Ct: function(t, i, e) {
        var n = this.XM;
        return t = this.Wk.sF(t, i, e),
            i = new M.Nv(t.x, t.y),
            i.Wm(n.x, n.y),
            n.x = t.x,
            n.y = t.y,
            i
    },
    nq: function(t, i, e) {
        var n = this.XZ;
        return this.Wk.IX(t, i),
            i = new M.ad(e),
            i.V6(t.x, t.y),
            i.y_(n.x, n.y),
            n.x = t.x,
            n.y = t.y,
            i
    },
    pq: function(t, i) {
        return t.pageX != q ? {
            x: t.pageX,
            y: t.pageY
        }: (i.left -= document.body.scrollLeft, i.top -= document.body.scrollTop, {
            x: t.clientX,
            y: t.clientY
        })
    },
    wy: function(t, i) {
        for (var e, n, r = [], s = this.Wk, h = this.XM, a = t.changedTouches.length, o = 0; a > o; o++) if (e = t.changedTouches[o]) {
            var c;
            c = M.qa.$q === M.qa.Vh ? s.sF(e.pageX, e.pageY, i) : s.sF(e.clientX, e.clientY, i),
                e.identifier != q ? (e = new M.Nv(c.x, c.y, e.identifier), n = this.q3(e).zl(), e.Wm(n.x, n.y), this.g7(e)) : (e = new M.Nv(c.x, c.y), e.Wm(h.x, h.y)),
                h.x = c.x,
                h.y = c.y,
                r.push(e)
        }
        return r
    },
    a6: function(t) {
        if (!this.xM) {
            this.Wk = M.view;
            var i = this,
                e = "touches" in M.qa.nF;
            if ("mouse" in M.qa.nF && (M.Na(window, "mousedown",
                    function() {
                        i.qp = p
                    },
                    r), M.Na(window, "mouseup",
                    function(n) {
                        var s = i.qp;
                        if (i.qp = r, s) {
                            var s = i.Zh(t),
                                h = i.pq(n, s);
                            M.fu(new M.XI(s.left, s.top, s.width, s.height), h) || (e || i.Cy([i.Ct(h.x, h.y, s)]), s = i.nq(h, s, M.ad.HB), s.Rn(n.button), M.wa.dispatchEvent(s))
                        }
                    },
                    r), M.Na(t, "mousedown",
                    function(n) {
                        i.qp = p;
                        var r = i.Zh(t),
                            s = i.pq(n, r);
                        e || i.dG([i.Ct(s.x, s.y, r)]),
                            r = i.nq(s, r, M.ad.YH),
                            r.Rn(n.button),
                            M.wa.dispatchEvent(r),
                            n.stopPropagation(),
                            n.preventDefault(),
                            t.focus()
                    },
                    r), M.Na(t, "mouseup",
                    function(n) {
                        i.qp = r;
                        var s = i.Zh(t),
                            h = i.pq(n, s);
                        e || i.Cy([i.Ct(h.x, h.y, s)]),
                            s = i.nq(h, s, M.ad.HB),
                            s.Rn(n.button),
                            M.wa.dispatchEvent(s),
                            n.stopPropagation(),
                            n.preventDefault()
                    },
                    r), M.Na(t, "mousemove",
                    function(n) {
                        var r = i.Zh(t),
                            s = i.pq(n, r);
                        e || i.eG([i.Ct(s.x, s.y, r)]),
                            r = i.nq(s, r, M.ad.pI),
                            i.qp ? r.Rn(n.button) : r.Rn(q),
                            M.wa.dispatchEvent(r),
                            n.stopPropagation(),
                            n.preventDefault()
                    },
                    r), M.Na(t, "mousewheel",
                    function(e) {
                        var n = i.Zh(t),
                            r = i.pq(e, n),
                            n = i.nq(r, n, M.ad.hB);
                        n.Rn(e.button),
                            n.IR(0, e.wheelDelta),
                            M.wa.dispatchEvent(n),
                            e.stopPropagation(),
                            e.preventDefault()
                    },
                    r), M.Na(t, "DOMMouseScroll",
                    function(e) {
                        var n = i.Zh(t),
                            r = i.pq(e, n),
                            n = i.nq(r, n, M.ad.hB);
                        n.Rn(e.button),
                            n.IR(0, -120 * e.detail),
                            M.wa.dispatchEvent(n),
                            e.stopPropagation(),
                            e.preventDefault()
                    },
                    r)), window.navigator.msPointerEnabled) {
                var n,
                    s = {
                        MSPointerDown: i.dG,
                        MSPointerMove: i.eG,
                        MSPointerUp: i.Cy,
                        MSPointerCancel: i.PP
                    };
                for (n in s) !
                    function(e, n) {
                        M.Na(t, e,
                            function(e) {
                                var r = i.Zh(t);
                                r.left -= document.documentElement.scrollLeft,
                                    r.top -= document.documentElement.scrollTop,
                                    n.call(i, [i.Ct(e.clientX, e.clientY, r)]),
                                    e.stopPropagation()
                            },
                            r)
                    } (n, s[n])
            }
            e && (M.Na(t, "touchstart",
                function(e) {
                    if (e.changedTouches) {
                        var n = i.Zh(t);
                        n.left -= document.body.scrollLeft,
                            n.top -= document.body.scrollTop,
                            i.dG(i.wy(e, n)),
                            e.stopPropagation(),
                            e.preventDefault(),
                            t.focus()
                    }
                },
                r), M.Na(t, "touchmove",
                function(e) {
                    if (e.changedTouches) {
                        var n = i.Zh(t);
                        n.left -= document.body.scrollLeft,
                            n.top -= document.body.scrollTop,
                            i.eG(i.wy(e, n)),
                            e.stopPropagation(),
                            e.preventDefault()
                    }
                },
                r), M.Na(t, "touchend",
                function(e) {
                    if (e.changedTouches) {
                        var n = i.Zh(t);
                        n.left -= document.body.scrollLeft,
                            n.top -= document.body.scrollTop,
                            i.Cy(i.wy(e, n)),
                            e.stopPropagation(),
                            e.preventDefault()
                    }
                },
                r), M.Na(t, "touchcancel",
                function(e) {
                    if (e.changedTouches) {
                        var n = i.Zh(t);
                        n.left -= document.body.scrollLeft,
                            n.top -= document.body.scrollTop,
                            i.PP(i.wy(e, n)),
                            e.stopPropagation(),
                            e.preventDefault()
                    }
                },
                r)),
                this.hN(),
                this.gN(),
                this.xM = p
        }
    },
    hN: z(),
    gN: z(),
    update: function(t) {
        this.lm > this.$v && (this.lm -= this.$v, M.wa.dispatchEvent(new M.vT(this.UB))),
            this.lm += t
    }
};
var T = M.eQ;
if (T.sla = function(t) {
        this.Zv !== t && (this.Zv = t, t = M.K.Al(), this.Zv ? (this.lm = 0, t.XG(this)) : (this.lm = 0, t.Au(this)))
    },
        T.tla = function(t) {
            this.$v !== t && (this.$v = t)
        },
        T.hN = function() {
            M.Na(M.fb, "keydown",
                function(t) {
                    M.wa.dispatchEvent(new M.cI(t.keyCode, p)),
                        t.stopPropagation(),
                        t.preventDefault()
                },
                r),
                M.Na(M.fb, "keyup",
                    function(t) {
                        M.wa.dispatchEvent(new M.cI(t.keyCode, r)),
                            t.stopPropagation(),
                            t.preventDefault()
                    },
                    r)
        },
        T.gN = function() {
            var t = window;
            this.UB = new fa,
                this.Yv = t.DeviceMotionEvent || t.DeviceOrientationEvent,
            M.qa.Vh == M.qa.OH && (this.Yv = window.DeviceOrientationEvent);
            var i = this.Yv == t.DeviceMotionEvent ? "devicemotion": "deviceorientation",
                e = navigator.userAgent; (/Android/.test(e) || /Adr/.test(e) && M.qa.Vh == M.PH) && (this.nba = -1),
                M.Na(t, i, this.D1.bind(this), r)
        },
        T.D1 = function(t) {
            var i = window;
            if (this.Zv) {
                var e,
                    n,
                    r,
                    s = this.UB;
                this.Yv == window.DeviceMotionEvent ? (r = t.accelerationIncludingGravity, e = .1 * this.sK * r.x, n = .1 * this.sK * r.y, r = .1 * r.e) : (e = .981 * (t.gamma / 90), n = .981 * -(t.beta / 90), r = .981 * (t.alpha / 90)),
                    M.qa.Kl === M.qa.vI ? (s.x = -e, s.y = -n) : (s.x = e, s.y = n),
                    s.e = r,
                    s.timestamp = t.timeStamp || Date.now(),
                    t = s.x,
                    i.orientation === M.AW ? (s.x = -s.y, s.y = t) : i.orientation === M.zW ? (s.x = s.y, s.y = -t) : i.orientation === M.BW && (s.x = -s.x, s.y = -s.y)
            }
        },
        delete T, M.c9 = function(t, i, e, n, r, s) {
        this.a = t,
            this.b = i,
            this.s = e,
            this.z = n,
            this.P = r,
            this.Q = s
    },
        M.Xba = function(t, i, e, n, r, s) {
            return {
                a: t,
                b: i,
                s: e,
                z: n,
                P: r,
                Q: s
            }
        },
        M.OQ = function(t, i) {
            return {
                x: i.a * t.x + i.s * t.y + i.P,
                y: i.b * t.x + i.z * t.y + i.Q
            }
        },
        M.cl = function(t, i, e) {
            return {
                x: e.a * t + e.s * i + e.P,
                y: e.b * t + e.z * i + e.Q
            }
        },
        M.Ana = function(t, i) {
            return {
                width: i.a * t.width + i.s * t.height,
                height: i.b * t.width + i.z * t.height
            }
        },
        M.Yba = function() {
            return {
                a: 1,
                b: 0,
                s: 0,
                z: 1,
                P: 0,
                Q: 0
            }
        },
        M.Wba = function() {
            return {
                a: 1,
                b: 0,
                s: 0,
                z: 1,
                P: 0,
                Q: 0
            }
        },
        M.QG = function(t, i) {
            var e = M.Hq(t),
                n = M.Gq(t),
                r = M.hu(t),
                s = M.iu(t),
                h = M.cl(n, e, i),
                e = M.cl(r, e, i),
                n = M.cl(n, s, i),
                a = M.cl(r, s, i),
                r = Math.min(h.x, e.x, n.x, a.x),
                s = Math.max(h.x, e.x, n.x, a.x),
                o = Math.min(h.y, e.y, n.y, a.y),
                h = Math.max(h.y, e.y, n.y, a.y);
            return M.rect(r, o, s - r, h - o)
        },
        M.YZ = function(t, i) {
            var e = M.Hq(t),
                n = M.Gq(t),
                r = M.hu(t),
                s = M.iu(t),
                h = M.cl(n, e, i),
                e = M.cl(r, e, i),
                n = M.cl(n, s, i),
                a = M.cl(r, s, i),
                r = Math.min(h.x, e.x, n.x, a.x),
                s = Math.max(h.x, e.x, n.x, a.x),
                o = Math.min(h.y, e.y, n.y, a.y),
                h = Math.max(h.y, e.y, n.y, a.y);
            return t.x = r,
                t.y = o,
                t.width = s - r,
                t.height = h - o,
                t
        },
        M.H0 = function(t, i, e) {
            return {
                a: t.a,
                b: t.b,
                s: t.s,
                z: t.z,
                P: t.P + t.a * i + t.s * e,
                Q: t.Q + t.b * i + t.z * e
            }
        },
        M.$ba = function(t, i, e) {
            return {
                a: t.a * i,
                b: t.b * i,
                s: t.s * e,
                z: t.z * e,
                P: t.P,
                Q: t.Q
            }
        },
        M.Zba = function(t, i) {
            var e = Math.sin(i),
                n = Math.cos(i);
            return {
                a: t.a * n + t.s * e,
                b: t.b * n + t.z * e,
                s: t.s * n - t.a * e,
                z: t.z * n - t.b * e,
                P: t.P,
                Q: t.Q
            }
        },
        M.mn = function(t, i) {
            return {
                a: t.a * i.a + t.b * i.s,
                b: t.a * i.b + t.b * i.z,
                s: t.s * i.a + t.z * i.s,
                z: t.s * i.b + t.z * i.z,
                P: t.P * i.a + t.Q * i.s + i.P,
                Q: t.P * i.b + t.Q * i.z + i.Q
            }
        },
        M.Vba = function(t, i) {
            return t.a === i.a && t.b === i.b && t.s === i.s && t.z === i.z && t.P === i.P && t.Q === i.Q
        },
        M.Rp = function(t) {
            var i = 1 / (t.a * t.z - t.b * t.s);
            return {
                a: i * t.z,
                b: -i * t.b,
                s: -i * t.s,
                z: i * t.a,
                P: i * (t.s * t.Q - t.z * t.P),
                Q: i * (t.b * t.P - t.a * t.Q)
            }
        },
        M.BI = parseFloat("1.192092896e-07F"), M.IG = function(t) {
        return M.d( - t.x, -t.y)
    },
        M.ik = function(t, i) {
            return M.d(t.x + i.x, t.y + i.y)
        },
        M.$d = function(t, i) {
            return M.d(t.x - i.x, t.y - i.y)
        },
        M.cj = function(t, i) {
            return M.d(t.x * i, t.y * i)
        },
        M.KQ = function(t, i) {
            return M.cj(M.ik(t, i), .5)
        },
        M.Dq = function(t, i) {
            return t.x * i.x + t.y * i.y
        },
        M.x5 = function(t, i) {
            return t.x * i.y - t.y * i.x
        },
        M.nz = function(t) {
            return M.d( - t.y, t.x)
        },
        M.fka = function(t) {
            return M.d(t.y, -t.x)
        },
        M.eka = function(t, i) {
            return M.cj(i, M.Dq(t, i) / M.Dq(i, i))
        },
        M.gka = function(t, i) {
            return M.d(t.x * i.x - t.y * i.y, t.x * i.y + t.y * i.x)
        },
        M.jka = function(t, i) {
            return M.d(t.x * i.x + t.y * i.y, t.y * i.x - t.x * i.y)
        },
        M.IQ = function(t) {
            return M.Dq(t, t)
        },
        M.HQ = function(t, i) {
            return M.IQ(M.$d(t, i))
        },
        M.Ll = function(t) {
            return Math.sqrt(M.IQ(t))
        },
        M.$ja = function(t, i) {
            return M.Ll(M.$d(t, i))
        },
        M.ih = function(t) {
            return M.cj(t, 1 / M.Ll(t))
        },
        M.aka = function(t) {
            return M.d(Math.cos(t), Math.sin(t))
        },
        M.A5 = function(t) {
            return Math.atan2(t.y, t.x)
        },
        M.jd = function(t, i, e) {
            if (i > e) {
                var n = i;
                i = e,
                    e = n
            }
            return i > t ? i: e > t ? t: e
        },
        M.GQ = function(t) {
            var i = M.d(0, 0),
                e = M.d(1, 1);
            return M.d(M.jd(t.x, i.x, e.x), M.jd(t.y, i.y, e.y))
        },
        M.bka = function(t) {
            return M.d(t.width, t.height)
        },
        M.Zja = function(t, i) {
            return M.d(i(t.x), i(t.y))
        },
        M.JQ = function(t, i, e) {
            return M.ik(M.cj(t, 1 - e), M.cj(i, e))
        },
        M.cka = function(t, i, e) {
            return t.x - e <= i.x && i.x <= t.x + e && t.y - e <= i.y && i.y <= t.y + e ? p: r
        },
        M.Yja = function(t, i) {
            return M.d(t.x * i.x, t.y * i.y)
        },
        M.Xja = function(t, i) {
            var e = M.ih(t),
                n = M.ih(i),
                e = Math.atan2(e.x * n.y - e.y * n.x, M.Dq(e, n));
            return Math.abs(e) < M.BI ? 0: e
        },
        M.Wja = function(t, i) {
            var e = Math.acos(M.Dq(M.ih(t), M.ih(i)));
            return Math.abs(e) < M.BI ? 0: e
        },
        M.z5 = function(t, i, e) {
            t = M.$d(t, i);
            var n = Math.cos(e);
            e = Math.sin(e);
            var r = t.x;
            return t.x = r * n - t.y * e + i.x,
                t.y = r * e + t.y * n + i.y,
                t
        },
        M.HG = function(t, i, e, n, s) {
            if (t.x == i.x && t.y == i.y || e.x == n.x && e.y == n.y) return r;
            var h = i.x - t.x;
            i = i.y - t.y;
            var a = n.x - e.x;
            n = n.y - e.y;
            var o = t.x - e.x;
            return t = t.y - e.y,
                e = n * h - a * i,
                s.x = a * t - n * o,
                s.y = h * t - i * o,
                0 == e ? 0 == s.x || 0 == s.y ? p: r: (s.x /= e, s.y /= e, p)
        },
        M.ika = function(t, i, e, n) {
            var s = M.d(0, 0);
            return M.HG(t, i, e, n, s) && 0 <= s.x && 1 >= s.x && 0 <= s.y && 1 >= s.y ? p: r
        },
        M.dka = function(t, i, e, n) {
            var r = M.d(0, 0);
            return M.HG(t, i, e, n, r) ? (e = M.d(0, 0), e.x = t.x + r.x * (i.x - t.x), e.y = t.y + r.x * (i.y - t.y), e) : M.d(0, 0)
        },
        M.hka = function(t, i) {
            return t != q && i != q ? t.x == i.x && t.y == i.y: r
        },
        M.oz = function(t) {
            t.x = 0,
                t.y = 0
        },
        M.jk = function(t, i) {
            t.x = i.x,
                t.y = i.y
        },
        M.Eq = function(t, i) {
            t.x *= i,
                t.y *= i
        },
        M.LQ = function(t, i) {
            t.x -= i.x,
                t.y -= i.y
        },
        M.mz = function(t, i) {
            t.x += i.x,
                t.y += i.y
        },
        M.y5 = function(t) {
            M.Eq(t, 1 / Math.sqrt(t.x * t.x + t.y * t.y))
        },
        M.zH = function(t, i, e, n, r) {
            if (r += n, !(1 >= r)) {
                i *= .5;
                for (var s, h = r - 1, a = n; r > a; a++) {
                    s = 2 * a;
                    var o,
                        c = M.d(t[2 * a], t[2 * a + 1]);
                    if (0 === a) o = M.nz(M.ih(M.$d(c, M.d(t[2 * (a + 1)], t[2 * (a + 1) + 1]))));
                    else if (a === h) o = M.nz(M.ih(M.$d(M.d(t[2 * (a - 1)], t[2 * (a - 1) + 1]), c)));
                    else {
                        o = M.d(t[2 * (a - 1)], t[2 * (a - 1) + 1]);
                        var u = M.d(t[2 * (a + 1)], t[2 * (a + 1) + 1]),
                            f = M.ih(M.$d(u, c)),
                            l = M.ih(M.$d(o, c)),
                            d = Math.acos(M.Dq(f, l));
                        o = d < M.cf(70) ? M.nz(M.ih(M.KQ(f, l))) : d < M.cf(170) ? M.ih(M.KQ(f, l)) : M.nz(M.ih(M.$d(u, o)))
                    }
                    o = M.cj(o, i),
                        e[2 * s] = c.x + o.x,
                        e[2 * s + 1] = c.y + o.y,
                        e[2 * (s + 1)] = c.x - o.x,
                        e[2 * (s + 1) + 1] = c.y - o.y
                }
                for (a = 0 == n ? 0: n - 1; h > a; a++) s = 2 * a,
                    t = s + 2,
                    i = M.Wz(e[2 * s], e[2 * s + 1]),
                    r = M.Wz(e[2 * (s + 1)], e[2 * (s + 1) + 1]),
                    s = M.Wz(e[2 * t], e[2 * t]),
                    n = M.Wz(e[2 * (t + 1)], e[2 * (t + 1) + 1]),
                    i = !M.E8(i.x, i.y, n.x, n.y, r.x, r.y, s.x, s.y),
                !i.Lt && (0 > i.value || 1 < i.value) && (i.Lt = p),
                i.Lt && (e[2 * t] = n.x, e[2 * t + 1] = n.y, e[2 * (t + 1)] = s.x, e[2 * (t + 1) + 1] = s.y)
            }
        },
        M.E8 = function(t, i, e, n, s, h, a, o) {
            return t == e && i == n || s == a && h == o ? {
                Lt: r,
                value: 0
            }: (e -= t, n -= i, s -= t, h -= i, a -= t, o -= i, t = Math.sqrt(e * e + n * n), e /= t, n /= t, i = s * e + h * n, h = h * e - s * n, s = i, i = a * e + o * n, o = o * e - a * n, a = i, h == o ? {
                Lt: r,
                value: 0
            }: {
                Lt: p,
                value: (a + (s - a) * o / (o - h)) / t
            })
        },
        M.ioa = function(t) {
            for (var i = 0, e = t.length; e > i; i++) {
                var n = t[(i + 1) % e],
                    s = t[(i + 2) % e];
                if (0 < M.x5(M.$d(n, t[i]), M.$d(s, n))) return r
            }
            return p
        },
        M.u9 = function(t, i) {
            i[2] = i[3] = i[6] = i[7] = i[8] = i[9] = i[11] = i[14] = 0,
                i[10] = i[15] = 1,
                i[0] = t.a,
                i[4] = t.s,
                i[12] = t.P,
                i[1] = t.b,
                i[5] = t.z,
                i[13] = t.Q
        },
        M.V9 = function(t, i) {
            i.a = t[0],
                i.s = t[4],
                i.P = t[12],
                i.b = t[1],
                i.z = t[5],
                i.Q = t[13]
        },
        M.Nv = M.xa.extend({
            td: q,
            Kh: q,
            Mg: 0,
            ON: r,
            Mi: q,
            ctor: function(t, i, e) {
                this.td = M.d(t || 0, i || 0),
                    this.Mg = e || 0
            },
            zl: function() {
                return {
                    x: this.td.x,
                    y: this.td.y
                }
            },
            b3: function() {
                return this.td.x
            },
            c3: function() {
                return this.td.y
            },
            Lfa: function() {
                return {
                    x: this.Kh.x,
                    y: this.Kh.y
                }
            },
            aga: function() {
                return {
                    x: this.Mi.x,
                    y: this.Mi.y
                }
            },
            lq: function() {
                return M.$d(this.td, this.Kh)
            },
            a3: function() {
                return {
                    x: this.td.x,
                    y: this.td.y
                }
            },
            Mfa: function() {
                return {
                    x: this.Kh.x,
                    y: this.Kh.y
                }
            },
            bga: function() {
                return {
                    x: this.Mi.x,
                    y: this.Mi.y
                }
            },
            afa: E("Mg"),
            bfa: function() {
                return M.log("getId is deprecated. Please use getID instead."),
                    this.Mg
            },
            gna: function(t, i, e) {
                this.Kh = this.td,
                    this.td = M.d(i || 0, e || 0),
                    this.Mg = t,
                this.ON || (this.Mi = M.d(this.td), this.ON = p)
            },
            jE: function(t, i) {
                i === k ? (this.td.x = t.x, this.td.y = t.y) : (this.td.x = t, this.td.y = i)
            },
            Wm: function(t, i) {
                this.Kh = i === k ? M.d(t.x, t.y) : M.d(t || 0, i || 0)
            }
        }), M.Dc = M.xa.extend({
        Rb: 0,
        Cm: r,
        rc: q,
        cE: A("rc"),
        ctor: A("Rb"),
        bG: E("Rb"),
        stopPropagation: function() {
            this.Cm = p
        },
        rha: E("Cm"),
        xea: E("rc")
    }), M.Dc.Iv = 0, M.Dc.jo = 1, M.Dc.Xn = 2, M.Dc.mo = 3, M.Dc.ar = 4, M.bm = M.Dc.extend({
        yC: q,
        dO: q,
        ctor: function(t) {
            M.Dc.prototype.ctor.call(this, M.Dc.ar),
                this.yC = t
        },
        setUserData: A("dO"),
        getUserData: E("dO"),
        Qea: E("yC")
    }), M.ad = M.Dc.extend({
        OL: 0,
        EK: 0,
        Sh: 0,
        af: 0,
        FD: 0,
        GD: 0,
        vN: 0,
        wN: 0,
        ctor: function(t) {
            M.Dc.prototype.ctor.call(this, M.Dc.mo),
                this.OL = t
        },
        IR: function(t, i) {
            this.vN = t,
                this.wN = i
        },
        Xfa: E("vN"),
        Yfa: E("wN"),
        V6: function(t, i) {
            this.Sh = t,
                this.af = i
        },
        zl: function() {
            return {
                x: this.Sh,
                y: this.af
            }
        },
        a3: function() {
            return {
                x: this.Sh,
                y: M.view.Ok.height - this.af
            }
        },
        y_: function(t, i) {
            this.FD = t,
                this.GD = i
        },
        lq: function() {
            return {
                x: this.Sh - this.FD,
                y: this.af - this.GD
            }
        },
        Bea: function() {
            return this.Sh - this.FD
        },
        Cea: function() {
            return this.af - this.GD
        },
        Rn: A("EK"),
        jea: E("EK"),
        b3: E("Sh"),
        c3: E("af")
    }), M.ad.NONE = 0, M.ad.YH = 1, M.ad.HB = 2, M.ad.pI = 3, M.ad.hB = 4, M.ad.q9 = 0, M.ad.s9 = 2, M.ad.r9 = 1, M.ad.l9 = 3, M.ad.m9 = 4, M.ad.n9 = 5, M.ad.o9 = 6, M.ad.p9 = 7, M.zg = M.Dc.extend({
        Rk: 0,
        ql: q,
        ctor: function(t) {
            M.Dc.prototype.ctor.call(this, M.Dc.Iv),
                this.ql = t || []
        },
        Pea: E("Rk"),
        vga: E("ql"),
        wba: A("Rk"),
        zba: A("ql")
    }), M.zg.x$ = 5, M.zg.eo = {
        Yz: 0,
        FA: 1,
        oA: 2,
        eA: 3
    },
        M.sa = M.xa.extend({
            mD: q,
            Rb: 0,
            Ai: q,
            yf: r,
            Sk: 0,
            S: q,
            wc: p,
            kp: p,
            ctor: function(t, i, e) {
                this.mD = e,
                    this.Rb = t || 0,
                    this.Ai = i || ""
            },
            iE: A("wc"),
            fba: E("wc"),
            Rs: A("yf"),
            hZ: E("yf"),
            dba: E("Rb"),
            aba: E("Ai"),
            dE: A("Sk"),
            $aa: E("Sk"),
            Ss: A("S"),
            bba: E("S"),
            vl: function() {
                return this.mD != q
            },
            m: F(q),
            Le: A("kp"),
            isEnabled: E("kp"),
            xz: z(),
            fj: z()
        }), M.sa.LW = 0, M.sa.km = 1, M.sa.rB = 2, M.sa.jo = 3, M.sa.mo = 4, M.sa.Xn = 5, M.sa.ar = 6, M.Or = M.sa.extend({
        Hs: q,
        ctor: function(t, i) {
            this.Hs = i;
            var e = this;
            M.sa.prototype.ctor.call(this, M.sa.ar, t,
                function(t) {
                    e.Hs != q && e.Hs(t)
                })
        },
        vl: function() {
            return M.sa.prototype.vl.call(this) && this.Hs != q
        },
        m: function() {
            return new M.Or(this.Ai, this.Hs)
        }
    }), M.Or.create = function(t, i) {
        return new M.Or(t, i)
    },
    M.Hk = M.sa.extend({
        hz: q,
        kz: q,
        iz: q,
        jz: q,
        ctor: function() {
            var t = this;
            M.sa.prototype.ctor.call(this, M.sa.mo, M.Hk.Ec,
                function(i) {
                    var e = M.ad;
                    switch (i.OL) {
                        case e.YH:
                            t.hz && t.hz(i);
                            break;
                        case e.HB:
                            t.kz && t.kz(i);
                            break;
                        case e.pI:
                            t.iz && t.iz(i);
                            break;
                        case e.hB:
                            t.jz && t.jz(i)
                    }
                })
        },
        m: function() {
            var t = new M.Hk;
            return t.hz = this.hz,
                t.kz = this.kz,
                t.iz = this.iz,
                t.jz = this.jz,
                t
        },
        vl: F(p)
    }), M.Hk.Ec = "__cc_mouse", M.Hk.create = function() {
    return new M.Hk
},
    M.pi = M.sa.extend({
        Ko: q,
        Tl: r,
        hk: q,
        Jl: q,
        Il: q,
        Vt: q,
        ctor: function() {
            M.sa.prototype.ctor.call(this, M.sa.km, M.pi.Ec, q),
                this.Ko = []
        },
        Vma: A("Tl"),
        m: function() {
            var t = new M.pi;
            return t.hk = this.hk,
                t.Jl = this.Jl,
                t.Il = this.Il,
                t.Vt = this.Vt,
                t.Tl = this.Tl,
                t
        },
        vl: function() {
            return this.hk ? p: (M.log(M.i.SW), r)
        }
    }), M.pi.Ec = "__cc_touch_one_by_one", M.pi.create = function() {
    return new M.pi
},
    M.oi = M.sa.extend({
        Wt: q,
        Zt: q,
        Yt: q,
        Xt: q,
        ctor: function() {
            M.sa.prototype.ctor.call(this, M.sa.rB, M.oi.Ec, q)
        },
        m: function() {
            var t = new M.oi;
            return t.Wt = this.Wt,
                t.Zt = this.Zt,
                t.Yt = this.Yt,
                t.Xt = this.Xt,
                t
        },
        vl: function() {
            return this.Wt == q && this.Zt == q && this.Yt == q && this.Xt == q ? (M.log(M.i.RW), r) : p
        }
    }), M.oi.Ec = "__cc_touch_all_at_once", M.oi.create = function() {
    return new M.oi
},
    M.sa.create = function(t) {
        M.assert(t && t.event, M.i.wT);
        var i = t.event;
        delete t.event;
        var e = q;
        i === M.sa.km ? e = new M.pi: i === M.sa.rB ? e = new M.oi: i === M.sa.mo ? e = new M.Hk: i === M.sa.ar ? (e = new M.Or(t.l2, t.Wp), delete t.l2, delete t.Wp) : i === M.sa.jo ? e = new M.Gk: i === M.sa.Xn && (e = new M.Fk(t.Wp), delete t.Wp);
        for (var n in t) e[n] = t[n];
        return e
    },
    M.TW = M.xa.extend({
        Uf: q,
        $f: q,
        OP: 0,
        ctor: function() {
            this.Uf = [],
                this.$f = []
        },
        size: function() {
            return this.Uf.length + this.$f.length
        },
        empty: function() {
            return 0 === this.Uf.length && 0 === this.$f.length
        },
        push: function(t) {
            0 == t.Sk ? this.$f.push(t) : this.Uf.push(t)
        },
        t1: function() {
            this.$f.length = 0
        },
        s1: function() {
            this.Uf.length = 0
        },
        clear: function() {
            this.$f.length = 0,
                this.Uf.length = 0
        },
        Sea: E("Uf"),
        Vfa: E("$f")
    }), M.Vv = function(t) {
    var i = M.Dc,
        e = t.Rb;
    return e === i.Xn ? M.Fk.Ec: e === i.ar ? t.yC: e === i.jo ? M.Gk.Ec: e === i.mo ? M.Hk.Ec: (e === i.Iv && M.log(M.i.Vv), "")
},
    M.wa = {
        lA: 0,
        Ku: 1,
        dr: 2,
        I9: 3,
        Ng: {},
        Ns: {},
        Ci: {},
        bx: {},
        gM: {},
        Gp: [],
        hs: [],
        Am: 0,
        kp: r,
        NM: 0,
        gZ: [M.Lb.qA, M.Lb.Ou],
        wx: function(t) {
            this.Ci[t.ka] != q && this.hs.push(t),
                t = t.u;
            for (var i = 0, e = t.length; e > i; i++) this.wx(t[i])
        },
        Fq: function(t, i) {
            var e,
                n,
                r = this.Ci[t.ka];
            if (r) for (e = 0, n = r.length; n > e; e++) r[e].iE(p);
            if (i === p) for (r = t.u, e = 0, n = r.length; n > e; e++) this.Fq(r[e], p)
        },
        mk: function(t, i) {
            var e,
                n,
                s = this.Ci[t.ka];
            if (s) for (e = 0, n = s.length; n > e; e++) s[e].iE(r);
            if (this.wx(t), i === p) for (s = t.u, e = 0, n = s.length; n > e; e++) this.mk(s[e], p)
        },
        aX: function(t) {
            0 === this.Am ? this.UL(t) : this.Gp.push(t)
        },
        UL: function(t) {
            var i = t.Ai,
                e = this.Ng[i];
            e || (e = new M.TW, this.Ng[i] = e),
                e.push(t),
                0 == t.Sk ? (this.il(i, this.dr), i = t.S, i == q && M.log(M.i.e2), this.iX(i, t), i.Mh && this.mk(i)) : this.il(i, this.Ku)
        },
        KC: function(t) {
            return this.Ng[t]
        },
        o0: function() {
            if (0 != this.hs.length) {
                for (var t, i, e = this.hs, n = this.Ci, r = 0, s = e.length; s > r; r++) if (t = n[e[r].ka]) for (var h = 0, a = t.length; a > h; h++)(i = t[h]) && this.il(i.Ai, this.dr);
                this.hs.length = 0
            }
        },
        iN: function(t) {
            if (t) for (var i, e = 0; e < t.length;) i = t[e],
                i.Rs(r),
            i.S != q && (this.dL(i.S, i), i.Ss(q)),
                0 === this.Am ? M.ne(t, i) : ++e
        },
        Rm: function(t) {
            var i = this.Ng[t];
            if (i) {
                var e = i.Uf;
                this.iN(i.$f),
                    this.iN(e),
                    delete this.Ns[t],
                this.Am || (i.clear(), delete this.Ng[t])
            }
            for (var n, e = this.Gp, i = 0; i < e.length;)(n = e[i]) && n.Ai == t ? M.ne(e, n) : ++i
        },
        pE: function(t) {
            var i = this.lA,
                e = this.Ns;
            e[t] && (i = e[t]),
            i != this.lA && (e[t] = this.lA, i & this.Ku && this.Z_(t), i & this.dr && ((i = M.K.fd) ? this.a0(t, i) : e[t] = this.dr))
        },
        a0: function(t, i) {
            var e = this.KC(t);
            if (e) {
                var n = e.$f;
                n && 0 !== n.length && (this.NM = 0, this.bx = {},
                    this.UE(i, p), e.$f.sort(this.Y_))
            }
        },
        Y_: function(t, i) {
            var e = M.wa.bx;
            return t && i && t.S && i.S ? e[i.S.ka] - e[t.S.ka] : -1
        },
        Z_: function(t) {
            if (t = this.Ng[t]) {
                var i = t.Uf;
                if (i && 0 !== i.length) {
                    i.sort(this.$_);
                    for (var e = 0, n = i.length; n > e && !(0 <= i[e].Sk);)++e;
                    t.OP = e
                }
            }
        },
        $_: function(t, i) {
            return t.Sk - i.Sk
        },
        nD: function(t) {
            if (t = this.Ng[t]) {
                var i,
                    e,
                    n = t.Uf,
                    r = t.$f;
                if (r) for (i = 0; i < r.length;) e = r[i],
                    e.yf ? ++i: M.ne(r, e);
                if (n) for (i = 0; i < n.length;) e = n[i],
                    e.yf ? ++i: M.ne(n, e);
                r && 0 === r.length && t.t1(),
                n && 0 === n.length && t.s1()
            }
        },
        Sx: function(t) {
            var i = this.Am;
            if (M.assert(i > 0, M.i.xT), t.Rb == M.Dc.Iv ? (this.nD(M.pi.Ec), this.nD(M.oi.Ec)) : this.nD(M.Vv(t)), !(i > 1)) {
                M.assert(1 == i, M.i.yT),
                    t = this.Ng;
                var e,
                    i = this.Ns;
                for (e in t) t[e].empty() && (delete i[e], delete t[e]);
                if (e = this.Gp, 0 !== e.length) {
                    for (t = 0, i = e.length; i > t; t++) this.UL(e[t]);
                    this.Gp.length = 0
                }
            }
        },
        HZ: function(t, i) {
            if (!t.hZ) return r;
            var e = i.event,
                n = i.hR;
            e.cE(t.S);
            var s,
                h = r,
                a = e.Rk,
                o = M.zg.eo;
            return a == o.Yz ? t.hk && (h = t.hk(n, e)) && t.yf && t.Ko.push(n) : 0 < t.Ko.length && -1 != (s = t.Ko.indexOf(n)) && (h = p, a === o.FA && t.Jl ? t.Jl(n, e) : a === o.oA ? (t.Il && t.Il(n, e), t.yf && t.Ko.splice(s, 1)) : a === o.eA && (t.Vt && t.Vt(n, e), t.yf && t.Ko.splice(s, 1))),
                e.Cm ? (M.wa.Sx(e), p) : h && t.yf && t.Tl ? (i.q5 && i.touches.splice(n, 1), p) : r
        },
        TX: function(t) {
            this.pE(M.pi.Ec),
                this.pE(M.oi.Ec);
            var i = this.KC(M.pi.Ec),
                e = this.KC(M.oi.Ec);
            if (q != i || q != e) {
                var n = t.ql,
                    r = M.BO(n),
                    s = {
                        event: t,
                        q5: i && e,
                        touches: r,
                        hR: q
                    };
                if (i) for (var h = 0; h < n.length; h++) if (s.hR = n[h], this.sC(i, this.HZ, s), t.Cm) return;
                if (e && 0 < r.length && (this.sC(e, this.JZ, {
                        event: t,
                        touches: r
                    }), t.Cm)) return;
                this.Sx(t)
            }
        },
        JZ: function(t, i) {
            if (!t.yf) return r;
            var e = M.zg.eo,
                n = i.event,
                s = i.touches,
                h = n.Rk;
            return n.cE(t.S),
                h == e.Yz && t.Wt ? t.Wt(s, n) : h == e.FA && t.Zt ? t.Zt(s, n) : h == e.oA && t.Yt ? t.Yt(s, n) : h == e.eA && t.Xt && t.Xt(s, n),
                n.Cm ? (M.wa.Sx(n), p) : r
        },
        iX: function(t, i) {
            var e = this.Ci[t.ka];
            e || (e = [], this.Ci[t.ka] = e),
                e.push(i)
        },
        dL: function(t, i) {
            var e = this.Ci[t.ka];
            e && (M.ne(e, i), 0 === e.length && delete this.Ci[t.ka])
        },
        sC: function(t, i, e) {
            var n,
                s = r,
                h = t.Uf,
                a = t.$f,
                o = 0;
            if (h && 0 !== h.length) for (; o < t.OP; ++o) if (n = h[o], n.isEnabled() && !n.wc && n.yf && i(n, e)) {
                s = p;
                break
            }
            if (a && !s) for (t = 0; t < a.length; t++) if (n = a[t], n.isEnabled() && !n.wc && n.yf && i(n, e)) {
                s = p;
                break
            }
            if (h && !s) for (; o < h.length && (n = h[o], !(n.isEnabled() && !n.wc && n.yf && i(n, e))); ++o);
        },
        il: function(t, i) {
            var e = this.Ns;
            e[t] = e[t] == q ? i: i | e[t]
        },
        UE: function(t, i) {
            var e = t.u,
                n = 0,
                s = e.length,
                h = this.gM,
                a = this.Ci;
            if (s > 0) {
                for (var o; s > n && (o = e[n]) && 0 > o.Ib; n++) this.UE(o, r);
                for (a[t.ka] != q && (h[t.vj] || (h[t.vj] = []), h[t.vj].push(t.ka)); s > n; n++)(o = e[n]) && this.UE(o, r)
            } else a[t.ka] != q && (h[t.vj] || (h[t.vj] = []), h[t.vj].push(t.ka));
            if (i) {
                var c,
                    e = [];
                for (c in h) e.push(c);
                for (e.sort(this.b0), c = e.length, o = this.bx, n = 0; c > n; n++) for (s = h[e[n]], a = 0; a < s.length; a++) o[s[a]] = ++this.NM;
                this.gM = {}
            }
        },
        b0: function(t, i) {
            return t - i
        },
        addListener: function(t, i) {
            if (M.assert(t && i, M.i.g2), t instanceof M.sa) {
                if (t.yf) return M.log(M.i.i2),
                    void 0
            } else M.assert(!M.Kt(i), M.i.h2),
                t = M.sa.create(t);
            if (t.vl()) {
                if (M.Kt(i)) {
                    if (0 == i) return M.log(M.i.f2),
                        void 0;
                    t.Ss(q),
                        t.dE(i),
                        t.Rs(p),
                        t.iE(r)
                } else t.Ss(i),
                    t.dE(0),
                    t.Rs(p);
                return this.aX(t),
                    t
            }
        },
        aF: function(t, i) {
            var e = new M.Or(t, i);
            return this.addListener(e, 1),
                e
        },
        removeListener: function(t) {
            if (t != q) {
                var i,
                    e,
                    n = this.Ng;
                for (e in n) {
                    var r = n[e],
                        s = r.Uf;
                    if ((i = this.jN(r.$f, t)) ? this.il(t.Ai, this.dr) : (i = this.jN(s, t)) && this.il(t.Ai, this.Ku), r.empty() && (delete this.Ns[t.Ai], delete n[e]), i) break
                }
                if (!i) for (i = this.Gp, n = 0, e = i.length; e > n; n++) if (r = i[n], r == t) {
                    M.ne(i, r);
                    break
                }
            }
        },
        jN: function(t, i) {
            if (t == q) return r;
            for (var e = 0, n = t.length; n > e; e++) {
                var s = t[e];
                if (s == i) return s.Rs(r),
                s.S != q && (this.dL(s.S, s), s.Ss(q)),
                0 == this.Am && M.ne(t, s),
                    p
            }
            return r
        },
        VQ: function(t, i) {
            if (t instanceof M.n) {
                delete this.bx[t.ka],
                    M.ne(this.hs, t);
                var e = this.Ci[t.ka];
                if (e) {
                    for (var n = M.BO(e), e = 0; e < n.length; e++) this.removeListener(n[e]);
                    n.length = 0
                }
                for (n = this.Gp, e = 0; e < n.length;) {
                    var s = n[e];
                    s.S == t ? (s.Ss(q), s.Rs(r), n.splice(e, 1)) : ++e
                }
                if (i === p) for (n = t.u, e = 0, s = n.length; s > e; e++) this.VQ(n[e], p)
            } else t == M.sa.km ? this.Rm(M.pi.Ec) : t == M.sa.rB ? this.Rm(M.oi.Ec) : t == M.sa.mo ? this.Rm(M.Hk.Ec) : t == M.sa.Xn ? this.Rm(M.Fk.Ec) : t == M.sa.jo ? this.Rm(M.Gk.Ec) : M.log(M.i.j2)
        },
        Xka: function(t) {
            this.Rm(t)
        },
        Ska: function() {
            var t,
                i = this.Ng,
                e = this.gZ;
            for (t in i) - 1 === e.indexOf(t) && this.Rm(t)
        },
        Gma: function(t, i) {
            if (t != q) {
                var e,
                    n = this.Ng;
                for (e in n) {
                    var r = n[e].Uf;
                    if (r && -1 != r.indexOf(t)) {
                        t.S != q && M.log(M.i.k2),
                        t.Sk !== i && (t.dE(i), this.il(t.Ai, this.Ku));
                        break
                    }
                }
            }
        },
        Le: A("kp"),
        isEnabled: E("kp"),
        dispatchEvent: function(t) {
            if (this.kp) {
                if (this.o0(), this.Am++, (!t || !t.bG) && b("event is undefined"), t.Rb == M.Dc.Iv) this.TX(t);
                else {
                    var i = M.Vv(t);
                    this.pE(i),
                        i = this.Ng[i],
                    i != q && this.sC(i, this.BZ, t),
                        this.Sx(t)
                }
                this.Am--
            }
        },
        BZ: function(t, i) {
            return i.cE(t.S),
                t.mD(i),
                i.Cm
        },
        Wca: function(t, i) {
            var e = new M.bm(t);
            e.setUserData(i),
                this.dispatchEvent(e)
        }
    },
    M.uh = z(), M.uh.prototype = {
    constructor: M.uh,
    apply: function(t) {
        t.addEventListener = M.uh.prototype.addEventListener,
            t.gG = M.uh.prototype.gG,
            t.removeEventListener = M.uh.prototype.removeEventListener,
            t.dispatchEvent = M.uh.prototype.dispatchEvent
    },
    addEventListener: function(t, i, e) {
        this.al === k && (this.al = {});
        var n = this.al;
        n[t] === k && (n[t] = []),
        this.gG(t, i, e) || n[t].push({
            Wp: i,
            IF: e
        })
    },
    gG: function(t, i, e) {
        if (this.al === k) return r;
        var n = this.al;
        if (n[t] !== k) {
            t = 0;
            for (var s = n.length; s > t; t++) {
                var h = n[t];
                if (h.Wp == i && h.IF == e) return p
            }
        }
        return r
    },
    removeEventListener: function(t, i) {
        if (this.al !== k) {
            var e = this.al[t];
            if (e !== k) for (var n = 0; n < e.length;) e[n].IF == i ? e.splice(n, 1) : n++
        }
    },
    dispatchEvent: function(t, i) {
        if (this.al !== k) {
            i == q && (i = p);
            var e = this.al[t];
            if (e !== k) {
                for (var n = [], r = e.length, s = 0; r > s; s++) n[s] = e[s];
                for (s = 0; r > s; s++) n[s].Wp.call(n[s].IF, this);
                i && (e.length = 0)
            }
        }
    }
},
    M.vT = M.Dc.extend({
        rK: q,
        ctor: function(t) {
            M.Dc.prototype.ctor.call(this, M.Dc.Xn),
                this.rK = t
        }
    }), M.cI = M.Dc.extend({
    aD: 0,
    wM: r,
    ctor: function(t, i) {
        M.Dc.prototype.ctor.call(this, M.Dc.jo),
            this.aD = t,
            this.wM = i
    }
}), M.Fk = M.sa.extend({
    ex: q,
    ctor: function(t) {
        this.ex = t;
        var i = this;
        M.sa.prototype.ctor.call(this, M.sa.Xn, M.Fk.Ec,
            function(t) {
                i.ex(t.rK, t)
            })
    },
    vl: function() {
        return M.assert(this.ex, M.i.PW),
            p
    },
    m: function() {
        return new M.Fk(this.ex)
    }
}), M.Fk.Ec = "__cc_acceleration", M.Fk.create = function(t) {
    return new M.Fk(t)
},
    M.Gk = M.sa.extend({
        Tt: q,
        Ut: q,
        ctor: function() {
            var t = this;
            M.sa.prototype.ctor.call(this, M.sa.jo, M.Gk.Ec,
                function(i) {
                    i.wM ? t.Tt && t.Tt(i.aD, i) : t.Ut && t.Ut(i.aD, i)
                })
        },
        m: function() {
            var t = new M.Gk;
            return t.Tt = this.Tt,
                t.Ut = this.Ut,
                t
        },
        vl: function() {
            return this.Tt == q && this.Ut == q ? (M.log(M.i.QW), r) : p
        }
    }), M.Gk.Ec = "__cc_keyboard", M.Gk.create = function() {
    return new M.Gk
},
M.B === M.ya && (M.m6 = {
    oe: p,
    Ti: [],
    Hj: [],
    Sw: r,
    Zr: {},
    Yr: [],
    sj: 0,
    Ya: function(t) {
        var i,
            e = this.Hj,
            n = M.view.pa,
            r = M.view.Ta,
            s = t || M.l;
        for (t = 0, i = e.length; i > t; t++) e[t].Ya(s, n, r)
    },
    sx: function(t, i) {
        t || M.log("The context of RenderTexture is invalid."),
            i = i || this.sj;
        var e,
            n,
            s = this.Zr[i];
        for (e = 0, n = s.length; n > e; e++) s[e].Ya(t, 1, 1);
        s.length = 0,
            s = this.Yr,
            delete this.Zr[i],
            M.ne(s, i),
            0 === s.length ? this.Sw = r: this.sj = s[s.length - 1]
    },
    Jp: function(t) {
        this.Sw = p,
            t = t || 0,
            this.Zr[t] = [],
            this.Yr.push(t),
            this.sj = t
    },
    j0: function() {
        this.Sw = r
    },
    aR: function() {
        this.oe = r,
            this.Ti.length = 0
    },
    transform: function() {
        var t = this.Ti;
        t.sort(this.qE);
        for (var i = 0, e = t.length; e > i; i++) t[i].Sm && t[i].Ye();
        t.length = 0
    },
    cS: function() {
        return 0 < this.Ti.length
    },
    qE: function(t, i) {
        return t.zh - i.zh
    },
    cu: function(t) {
        this.Ti.push(t)
    },
    xO: function() {
        this.Hj.length = 0
    },
    nc: function(t) {
        if (this.Sw) {
            var i = this.Zr[this.sj]; - 1 === i.indexOf(t) && i.push(t)
        } else - 1 === this.Hj.indexOf(t) && this.Hj.push(t)
    }
},
    M.ia = M.m6, M.wJ = function(t) {
    this.S = t,
        this.Pi = {
            Jq: 0,
            Kq: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            Wl: r
        }
},
    M.wJ.prototype.Ya = function(t, i, e) {
        var n = this.S;
        t = t || M.l;
        var r = this.Pi;
        if (! (n.F && (0 === r.width || 0 === r.height) || !r.Wl && 0 === n.Wa || n.F && !n.F.Db)) {
            var s,
                h = n.vd,
                a = n.Jb.x,
                o = -n.Jb.y - n.za.height,
                c = n.za.width,
                u = n.za.height,
                f = "source" !== n.Gg;
            s = n.Wa / 255,
                1 !== h.a || 0 !== h.b || 0 !== h.s || 1 !== h.z || n.hc || n.ic ? (t.save(), t.globalAlpha = s, t.transform(h.a, h.s, h.b, h.z, h.P * i, -h.Q * e), f && (t.globalCompositeOperation = n.Gg), n.hc && (a = -a - c, t.scale( - 1, 1)), n.ic && (o = n.Jb.y, t.scale(1, -1)), n.F ? (s = n.F.Sa, n.as ? t.drawImage(s, 0, 0, r.width, r.height, a * i, o * e, c * i, u * e) : t.drawImage(s, r.Jq, r.Kq, r.width, r.height, a * i, o * e, c * i, u * e)) : (c = n.R, r.Wl && (n = n.ta, t.fillStyle = "rgba(" + n.r + "," + n.g + "," + n.b + ",1)", t.fillRect(a * i, o * e, c.width * i, c.height * e))), t.restore()) : (f && (t.save(), t.globalCompositeOperation = n.Gg), t.globalAlpha = s, n.F ? (s = n.F.Sa, n.as ? t.drawImage(s, 0, 0, r.width, r.height, (h.P + a) * i, ( - h.Q + o) * e, c * i, u * e) : t.drawImage(s, r.Jq, r.Kq, r.width, r.height, (h.P + a) * i, ( - h.Q + o) * e, c * i, u * e)) : (c = n.R, r.Wl && (n = n.ta, t.fillStyle = "rgba(" + n.r + "," + n.g + "," + n.b + ",1)", t.fillRect((h.P + a) * i, ( - h.Q + o) * e, c.width * i, c.height * e))), f && t.restore()),
                M.Wc++
        }
    },
    M.YI = A("S"), M.YI.prototype.Ya = function(t, i, e) {
    t = t || M.l;
    var n = this.S,
        r = n.vd,
        s = n.ta,
        h = n.Wa / 255,
        a = n.R.width,
        o = n.R.height;
    if (0 !== h) {
        var c = 1 !== r.a || 0 !== r.b || 0 !== r.s || 1 !== r.z,
            u = "source" !== n.Gg || c;
        u && (t.save(), t.globalCompositeOperation = n.Gg),
            t.globalAlpha = h,
            t.fillStyle = "rgba(" + (0 | s.r) + "," + (0 | s.g) + "," + (0 | s.b) + ", 1)",
            c ? (t.transform(r.a, r.s, r.b, r.z, r.P * i, -r.Q * e), t.fillRect(0, 0, a * i, -o * e)) : t.fillRect(r.P * i, -r.Q * e, a * i, -o * e),
        u && t.restore(),
            M.Wc++
    }
},
    M.iI = function(t) {
        this.S = t,
            this.Mi = M.d(0, 0),
            this.zw = M.d(0, 0),
            this.NL = this.PN = q
    },
    M.iI.prototype.Ya = function(t, i, e) {
        t = t || M.l;
        var n = this.S,
            r = n.Wa / 255,
            s = n.vd;
        if (0 !== r) {
            var h = 1 !== s.a || 0 !== s.b || 0 !== s.s || 1 !== s.z,
                a = "source" !== n.Gg || h;
            a && (t.save(), t.globalCompositeOperation = n.Gg),
                t.globalAlpha = r;
            var r = n.R.width,
                n = n.R.height,
                o = t.createLinearGradient(this.Mi.x, this.Mi.y, this.zw.x, this.zw.y);
            o.addColorStop(0, this.PN),
                o.addColorStop(1, this.NL),
                t.fillStyle = o,
                h ? (t.transform(s.a, s.s, s.b, s.z, s.P * i, -s.Q * e), t.fillRect(0, 0, r * i, -n * e)) : t.fillRect(s.P * i, -s.Q * e, r * i, -n * e),
            a && t.restore(),
                M.Wc++
        }
    },
    M.NI = A("S"), M.NI.prototype.Ya = function(t, i, e) {
    t = t || M.l;
    var n = this.S,
        r = n.vd,
        s = n.Nm;
    t.save(),
        t.transform(r.a, r.s, r.b, r.z, r.P * i, -r.Q * e),
        t.globalCompositeOperation = n.gQ() ? "lighter": "source-over";
    var h;
    if (i = this.S.Ad, e = this.S.Ej, M.o.eJ == M.o.oB) {
        if (!n.F || !n.F.Db) return t.restore(),
            void 0;
        var a = n.F.Sa;
        if (!a.width || !a.height) return t.restore(),
            void 0;
        for (var o = M.Ma, c = a, n = 0; i > n; n++) if (r = e[n], h = r.color.a / 255, 0 !== h) {
            t.globalAlpha = h,
                t.save(),
                t.translate(0 | r.Xj.x, -(0 | r.Xj.y));
            var u = 4 * Math.floor(r.size / 4);
            h = s.width;
            var f = s.height;
            t.scale(Math.max(1 / h * u, 1e - 6), Math.max(1 / f * u, 1e - 6)),
            r.rotation && t.rotate(M.cf(r.rotation)),
            r.sG && (u = o.Bt(a)) && (u.Me || (u.Me = M.Wb("canvas"), u.Me.width = a.width, u.Me.height = a.height), M.yl(a, u, r.color, this.Nm, u.Me), c = u.Me),
                t.drawImage(c, -(0 | h / 2), -(0 | f / 2)),
                t.restore()
        }
    } else for (a = M.ye, n = 0; i > n; n++) r = e[n],
        s = 0 | .5 * r.size,
        h = r.color.a / 255,
    0 !== h && (t.globalAlpha = h, t.save(), t.translate(0 | r.Xj.x, -(0 | r.Xj.y)), M.o.MH == M.o.fJ ? (r.rotation && t.rotate(M.cf(r.rotation)), a.VO(t, s, r.color)) : a.SO(t, s, r.color), t.restore());
    t.restore(),
        M.Wc++
},
    M.UI = function(t) {
        this.mK = Math.PI / 180,
            this.S = t,
            this.Eb = q,
            this.Rb = M.Qa.Dg,
            this.AK = M.rect(0, 0, 0, 0),
            this.qD = M.d(0, 0),
            this.xf = 0,
            this.ML = this.MN = 270,
            this.LK = r
    },
    M.UI.prototype.Ya = function(t, i, e) {
        t = t || M.l;
        var n = this.S,
            r = this.Eb,
            s = r.$.Pi,
            h = r.Wa / 255;
        if (0 !== s.width && 0 !== s.height && r.F && s.Wl && 0 !== h) {
            n = n.vd,
                t.save(),
                t.transform(n.a, n.s, n.b, n.z, n.P * i, -n.Q * e),
            "source" != r.Gg && (t.globalCompositeOperation = r.Gg),
                t.globalAlpha = h;
            var a = r.za,
                o = r.Jb,
                h = r.fL,
                n = 0 | o.x,
                c = -o.y - a.height;
            h.width = a.width * i,
                h.height = a.height * e,
            r.hc && (n = -o.x - a.width, t.scale( - 1, 1)),
            r.ic && (c = o.y, t.scale(1, -1)),
                n *= i,
                c *= e,
                this.Rb == M.Qa.Ak ? (a = this.AK, t.beginPath(), t.rect(a.x * i, a.y * e, a.width * i, a.height * e), t.clip(), t.closePath()) : this.Rb == M.Qa.Dg && (i *= this.qD.x, a = this.qD.y * e, t.beginPath(), t.arc(i, a, this.xf * e, this.mK * this.MN, this.mK * this.ML, this.LK), t.lineTo(i, a), t.clip(), t.closePath()),
                t.drawImage(r.F.Sa, s.Jq, s.Kq, s.width, s.height, n, c, h.width, h.height),
                t.restore(),
                M.Wc++
        }
    },
    M.lj = function(t) {
        this.S = t,
            this.q = this.xe = this.Da = q
    },
    M.lj.prototype.Ya = function(t, i, e) {
        var n = t || M.l,
            r = this.S,
            s = r.Wa / 255;
        if (0 !== s) {
            for (n.globalAlpha = s, r = r.vd, n.save(), t.transform(r.a, r.s, r.b, r.z, r.P * i, -r.Q * e), this.q && this.q.src == M.SRC_ALPHA && this.q.I == M.ONE && (n.globalCompositeOperation = "lighter"), t = this.Da, r = 0, s = t.length; s > r; r++) {
                var h = t[r];
                switch (h.type) {
                    case M.$c.sB:
                        this.js(n, h, i, e);
                        break;
                    case M.$c.uJ:
                        this.ls(n, h, i, e);
                        break;
                    case M.$c.pj:
                        this.ks(n, h, i, e)
                }
            }
            n.restore()
        }
    },
    M.lj.prototype.js = function(t, i, e, n) {
        var s = i.fillColor,
            h = i.te[0];
        i = i.lineWidth,
            t.fillStyle = "rgba(" + (0 | s.r) + "," + (0 | s.g) + "," + (0 | s.b) + "," + s.a / 255 + ")",
            t.beginPath(),
            t.arc(h.x * e, -h.y * n, i * e, 0, 2 * Math.PI, r),
            t.closePath(),
            t.fill()
    },
    M.lj.prototype.ls = function(t, i, e, n) {
        var r = i.ei,
            s = i.te[0],
            h = i.te[1],
            a = i.lineWidth;
        i = i.lineCap,
            t.strokeStyle = "rgba(" + (0 | r.r) + "," + (0 | r.g) + "," + (0 | r.b) + "," + r.a / 255 + ")",
            t.lineWidth = a * e,
            t.beginPath(),
            t.lineCap = i,
            t.moveTo(s.x * e, -s.y * n),
            t.lineTo(h.x * e, -h.y * n),
            t.stroke()
    },
    M.lj.prototype.ks = function(t, i, e, n) {
        var r = i.te,
            s = i.lineCap,
            h = i.fillColor,
            a = i.lineWidth,
            o = i.ei,
            c = i.It,
            M = i.Jt;
        if (i = i.Zi, r != q) {
            var u = r[0];
            for (t.lineCap = s, h && (t.fillStyle = "rgba(" + (0 | h.r) + "," + (0 | h.g) + "," + (0 | h.b) + "," + h.a / 255 + ")"), a && (t.lineWidth = a * e), o && (t.strokeStyle = "rgba(" + (0 | o.r) + "," + (0 | o.g) + "," + (0 | o.b) + "," + o.a / 255 + ")"), t.beginPath(), t.moveTo(u.x * e, -u.y * n), s = 1, h = r.length; h > s; s++) t.lineTo(r[s].x * e, -r[s].y * n);
            c && t.closePath(),
            M && t.fill(),
            i && t.stroke()
        }
    },
    M.TH = A("S"), M.TH.prototype.Ya = function(t, i, e) {
    var n = this.S;
    t = t || M.l,
        n.Lo ? (i = M.ec.eM(), e = t.canvas, i.width = e.width, i.height = e.height, i.getContext("2d").drawImage(e, 0, 0), t.save()) : (n.transform(), n = n.vd, t.save(), t.save(), t.transform(n.a, n.s, n.b, n.z, n.P * i, -n.Q * e))
},
    M.RH = A("S"), M.RH.prototype.Ya = function(t, i, e) {
    var n = this.S;
    t = t || M.l,
        n.Lo ? (t.globalCompositeOperation = n.bi ? "destination-out": "destination-in", n = n.vd, t.transform(n.a, n.s, n.b, n.z, n.P * i, -n.Q * e)) : (t.restore(), n.bi && (i = t.canvas, t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.moveTo(0, 0), t.lineTo(0, i.height), t.lineTo(i.width, i.height), t.lineTo(i.width, 0), t.lineTo(0, 0), t.restore()), t.clip())
},
    M.SH = A("S"), M.SH.prototype.Ya = function(t) {
    var i = this.S,
        e = M.ec.eM();
    t = t || M.l,
    i.Lo && (t.restore(), t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.globalCompositeOperation = "destination-over", t.drawImage(e, 0, 0)),
        t.restore()
},
    M.rv = function(t) {
        this.S = t,
            this.Da = t.Da
    },
    M.rv.prototype.Ya = function(t, i, e) {
        var n = this.S;
        n.Ws && (n.Ws.Q1(M.nT.bind(n)), n.Ws.P1(M.kT.bind(n)), M.lj.prototype.Ya.call(this, t, i, e), n.clear())
    },
    M.rv.prototype.js = M.lj.prototype.js, M.rv.prototype.ls = M.lj.prototype.ls, M.rv.prototype.ks = M.lj.prototype.ks, M.Fv = function(t) {
    this.S = t,
        this.HK = []
},
    M.Fv.prototype.KX = function(t) {
        if (t) for (var i = this.HK, e = i.length = 0, n = t.length; n > e; e++) i[e] = t[e]
    },
    M.Fv.prototype.f_ = function(t, i) {
        var e = this.S;
        if (e.ge) {
            var n = this.HK,
                s = e.fe,
                h = e.Td;
            s.save(),
                s.clearRect(0, 0, h.width, -h.height),
                h = M.Rp(e.vd),
                s.transform(h.a, h.s, h.b, h.z, h.P * t, -h.Q * i);
            for (var h = 0, a = n.length; a > h; h++) n[h].Ya(s, t, i),
            n[h].S && (n[h].S.ge = r);
            s.restore(),
                e.ge = r
        }
    },
    M.Fv.prototype.Ya = function(t, i, e) {
        var n = this.S,
            r = n.Wa / 255;
        if (! (0 >= r)) {
            this.f_(i, e),
                t = t || M.l,
                t.globalAlpha = r;
            var r = 0 | -n.Cb.x,
                s = 0 | -n.Cb.y,
                h = n.Td,
                a = n.vd;
            h && 0 !== h.width && 0 !== h.height && (t.save(), t.transform(a.a, a.s, a.b, a.z, a.P * i, -a.Q * e), a = h.height * e, n.$i === M.yk ? t.drawImage(h, 0, 0, h.width, h.height, r, -(s + a) + .5 * n.Zb.height * e, h.width * i, a) : t.drawImage(h, 0, 0, h.width, h.height, r, -(s + a), h.width * i, a), t.restore()),
                M.Wc++
        }
    },
    M.UH = function(t, i) {
        this.S = t,
            this.Qc = i
    },
    M.UH.prototype.Ya = function(t, i, e) {
        this.Qc && this.Qc.call(this.S, t, i, e)
    },
    M.nV = A("S"), M.nV.prototype.Ya = function(t, i, e) {
    var n = this.S;
    if (t = t || M.l, n.pC || n.oC) {
        var r = n.vd;
        t.save(),
            t.transform(r.a, r.s, r.b, r.z, r.P * i, -r.Q * e),
            i = n.V_;
        var s,
            h,
            a = M.ye;
        if (n.pC) {
            a.If(0, 0, 255, 255),
                a.Sn(1);
            var o = [];
            for (e = 0, r = i.PR.length; r > e; e++) h = i.TO[e],
            h.ul && h.ul.type == sp.DH.WI && (s = h.ul, sp.qba(s, h, o), a.qe(o, 4, p))
        }
        if (n.oC) {
            for (a.Sn(2), a.If(255, 0, 0, 255), e = 0, r = i.qn.length; r > e; e++) n = i.qn[e],
                a.Wh({
                        x: n.Fu,
                        y: n.Gu
                    },
                    {
                        x: n.data.length * n.k5 + n.Fu,
                        y: n.data.length * n.l5 + n.Gu
                    });
            for (a.gH(4), a.If(0, 0, 255, 255), e = 0, r = i.qn.length; r > e; e++) n = i.qn[e],
                a.CF({
                    x: n.Fu,
                    y: n.Gu
                }),
            0 === e && a.If(0, 255, 0, 255)
        }
        t.restore()
    }
}), M.B === M.Z && (M.n6 = {
    oe: p,
    Ti: [],
    Hj: [],
    Rw: r,
    hw: {},
    Yr: [],
    sj: 0,
    Ya: function(t) {
        var i,
            e = this.Hj,
            n = t || M.l;
        for (t = 0, i = e.length; i > t; t++) e[t].Ya(n)
    },
    Jp: function(t) {
        this.Rw = p,
            t = t || 0,
            this.hw[t] = [],
            this.Yr.push(t),
            this.sj = t
    },
    j0: function() {
        this.Rw = r
    },
    g_: function(t) {
        t = t || this.sj;
        var i,
            e,
            n = this.hw[t],
            s = M.l,
            h = this.Yr;
        for (i = 0, e = n.length; e > i; i++) n[i].Ya(s);
        n.length = 0,
            delete this.hw[t],
            M.ne(h, t),
            0 === h.length ? this.Rw = r: this.sj = h[h.length - 1]
    },
    aR: function() {
        this.oe = r,
            this.Ti.length = 0
    },
    transform: function() {
        var t = this.Ti;
        t.sort(this.qE);
        for (var i = 0, e = t.length; e > i; i++) t[i].Sm && t[i].Ye();
        t.length = 0
    },
    cS: function() {
        return 0 < this.Ti.length
    },
    qE: function(t, i) {
        return t.zh - i.zh
    },
    cu: function(t) {
        this.Ti.push(t)
    },
    xO: function() {
        this.Hj.length = 0
    },
    nc: function(t) {
        if (this.Rw) {
            var i = this.hw[this.sj]; - 1 === i.indexOf(t) && i.push(t)
        } else - 1 === this.Hj.indexOf(t) && this.Hj.push(t)
    }
},
    M.ia = M.n6, M.xJ = A("S"), M.xJ.prototype.Ya = function(t) {
    var i = this.S;
    if (i.Aa && 0 !== i.Wa) {
        t = t || M.l;
        var e = i.F;
        e ? e.Db && (i.la.sb(), i.la.Oh(i.Kb), M.kd(i.q.src, i.q.I), M.zy(0, e), M.Sb(M.wh), t.bindBuffer(t.ARRAY_BUFFER, i.up), i.Id && (t.bufferData(t.ARRAY_BUFFER, i.Pb.Tp, t.DYNAMIC_DRAW), i.Id = r), t.vertexAttribPointer(0, 3, t.FLOAT, r, 24, 0), t.vertexAttribPointer(1, 4, t.UNSIGNED_BYTE, p, 24, 12), t.vertexAttribPointer(2, 2, t.FLOAT, r, 24, 16), t.drawArrays(t.TRIANGLE_STRIP, 0, 4)) : (i.la.sb(), i.la.Oh(i.Kb), M.kd(i.q.src, i.q.I), M.yd(q), M.Sb(M.Dd | M.vo), t.bindBuffer(t.ARRAY_BUFFER, i.up), i.Id && (t.bufferData(t.ARRAY_BUFFER, i.Pb.Tp, t.STATIC_DRAW), i.Id = r), t.vertexAttribPointer(M.eb, 3, t.FLOAT, r, 24, 0), t.vertexAttribPointer(M.nd, 4, t.UNSIGNED_BYTE, p, 24, 12), t.drawArrays(t.TRIANGLE_STRIP, 0, 4)),
            M.Wc++
    }
},
    M.eB = A("S"), M.eB.prototype.Ya = function(t) {
    t = t || M.l;
    var i = this.S;
    i.la.sb(),
        i.la.Oh(i.Kb),
        M.Sb(M.Dd | M.vo),
        t.bindBuffer(t.ARRAY_BUFFER, i.Yx),
        t.vertexAttribPointer(M.eb, 2, t.FLOAT, r, 0, 0),
        t.bindBuffer(t.ARRAY_BUFFER, i.lw),
        t.vertexAttribPointer(M.nd, 4, t.UNSIGNED_BYTE, p, 0, 0),
        M.kd(i.q.src, i.q.I),
        t.drawArrays(t.TRIANGLE_STRIP, 0, 4)
},
    M.aI = A("S"), M.aI.prototype.Ya = function() {
    var t = this.S;
    M.kd(t.q.src, t.q.I),
        t.la.sb(),
        t.la.Oh(t.Kb),
        t.lN()
},
    M.sI = A("S"), M.sI.prototype.Ya = function(t) {
    var i = this.S; ! (1 >= i.Di) && i.texture && i.texture.Db && (t = t || M.l, i.la.sb(), i.la.Oh(i.Kb), M.Sb(M.wh), M.kd(i.q.src, i.q.I), M.yd(i.texture), t.bindBuffer(t.ARRAY_BUFFER, i.hd), t.bufferData(t.ARRAY_BUFFER, i.Xa, t.DYNAMIC_DRAW), t.vertexAttribPointer(M.eb, 2, t.FLOAT, r, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, i.$m), t.bufferData(t.ARRAY_BUFFER, i.Af, t.DYNAMIC_DRAW), t.vertexAttribPointer(M.bd, 2, t.FLOAT, r, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, i.vm), t.bufferData(t.ARRAY_BUFFER, i.um, t.DYNAMIC_DRAW), t.vertexAttribPointer(M.nd, 4, t.UNSIGNED_BYTE, p, 0, 0), t.drawArrays(t.TRIANGLE_STRIP, 0, 2 * i.Di), M.Wc++)
},
    M.VI = A("S"), M.VI.prototype.Ya = function(t) {
    var i = this.S;
    if (t = t || M.l, i.yc && i.Eb) {
        i.la.sb(),
            i.la.Oh(i.Kb);
        var e = i.Eb.Ef();
        M.kd(e.src, e.I),
            M.Sb(M.wh),
            M.yd(i.Eb.texture),
            t.bindBuffer(t.ARRAY_BUFFER, i.Xx),
        i.gn && (t.bufferData(t.ARRAY_BUFFER, i.$e, t.DYNAMIC_DRAW), i.gn = r),
            e = M.Cd.BYTES_PER_ELEMENT,
            t.vertexAttribPointer(M.eb, 2, t.FLOAT, r, e, 0),
            t.vertexAttribPointer(M.nd, 4, t.UNSIGNED_BYTE, p, e, 8),
            t.vertexAttribPointer(M.bd, 2, t.FLOAT, r, e, 12),
            i.Rb === M.Qa.Dg ? t.drawArrays(t.TRIANGLE_FAN, 0, i.Hc) : i.Rb == M.Qa.Ak && (i.Jd ? (t.drawArrays(t.TRIANGLE_STRIP, 0, i.Hc / 2), t.drawArrays(t.TRIANGLE_STRIP, 4, i.Hc / 2), M.Wc++) : t.drawArrays(t.TRIANGLE_STRIP, 0, i.Hc)),
            M.Wc++
    }
},
    M.OI = A("S"), M.OI.prototype.Ya = function(t) {
    var i = this.S;
    i.F && (t = t || M.l, i.la.sb(), i.la.Oh(i.Kb), M.yd(i.F), M.Ay(i.q.src, i.q.I), M.Sb(M.wh), t.bindBuffer(t.ARRAY_BUFFER, i.gc[0]), t.vertexAttribPointer(M.eb, 3, t.FLOAT, r, 24, 0), t.vertexAttribPointer(M.nd, 4, t.UNSIGNED_BYTE, p, 24, 12), t.vertexAttribPointer(M.bd, 2, t.FLOAT, r, 24, 16), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, i.gc[1]), t.drawElements(t.TRIANGLES, 6 * i.Ue, t.UNSIGNED_SHORT, 0))
},
    M.FI = A("S"), M.FI.prototype.Ya = function() {
    var t = this.S;
    0 != t.textureAtlas.totalQuads && (t.la.sb(), t.la.Oh(t.Kb), M.Ay(t.q.src, t.q.I), t.textureAtlas.wl())
},
    M.ZI = A("S"), M.ZI.prototype.Ya = function(t) {
    var i = t || M.l;
    if (t = this.S, t.pn) {
        t.$g();
        var e = t.rt;
        if (e) {
            var n = [0, 0, 0, 0],
                r = 0,
                s = 0;
            e & i.COLOR_BUFFER_BIT && (n = i.getParameter(i.COLOR_CLEAR_VALUE), i.clearColor(t.Pf.r / 255, t.Pf.g / 255, t.Pf.b / 255, t.Pf.a / 255)),
            e & i.DEPTH_BUFFER_BIT && (r = i.getParameter(i.DEPTH_CLEAR_VALUE), i.clearDepth(t.ey)),
            e & i.STENCIL_BUFFER_BIT && (s = i.getParameter(i.STENCIL_CLEAR_VALUE), i.clearStencil(t.fy)),
                i.clear(e),
            e & i.COLOR_BUFFER_BIT && i.clearColor(n[0], n[1], n[2], n[3]),
            e & i.DEPTH_BUFFER_BIT && i.clearDepth(r),
            e & i.STENCIL_BUFFER_BIT && i.clearStencil(s)
        }
        for (t.Lc(), i = t.u, e = 0; e < i.length; e++) n = i[e],
        n != t.sprite && n.G();
        t.end()
    }
},
    M.mB = A("S"), M.mB.prototype.Ya = function() {
    var t = this.S;
    0 !== t.textureAtlas.totalQuads && (t.la.sb(), t.la.Oh(t.Kb), t.Nf(t.u, M.n.qf.se), M.kd(t.q.src, t.q.I), t.textureAtlas.wl())
},
    M.HH = A("S"), M.HH.prototype.Ya = function(t) {
    t = t || M.l;
    var i = this.S;
    i.la.sb(),
        i.la.Oh(i.Kb),
        M.kd(i.q.src, i.q.I),
    i.gt && i.tm && (t.uniform4fv(i.gt, i.tm), i.textureAtlas.BF(i.quadsToDraw))
},
    M.$n = function(t, i) {
        this.S = t,
            this.Qc = i
    },
    M.$n.prototype.Ya = function(t) {
        this.Qc && this.Qc.call(this.S, t)
    },
    M.qJ = A("S"), M.qJ.prototype.Ya = M.mB.prototype.Ya, M.PU = A("S"), M.PU.prototype.Ya = function() {
    var t = this.S;
    t.Ws && (t.Ws.Q1(M.nT.bind(t)), t.Ws.P1(M.kT.bind(t)), M.$c.prototype.Ia.call(t), t.clear())
},
    M.oV = A("S"), M.oV.prototype.Ya = function() {
    var t = this.S;
    t.la.sb(),
        t.la.Oh(t.Kb);
    var i = t.fg(),
        e = t.V_;
    e.r = i.r / 255,
        e.g = i.g / 255,
        e.b = i.b / 255,
        e.a = t.bh() / 255,
    t.VZ && (e.r *= e.a, e.g *= e.a, e.b *= e.a);
    var n,
        r,
        s,
        h,
        a,
        o = new M.Bb,
        c = t.q,
        i = 0;
    for (a = e.PR.length; a > i; i++) if (h = e.TO[i], h.ul && h.ul.type == sp.DH.WI) {
        s = h.ul;
        var u = t.vy(s);
        if (h.data.Uba != n ? (r && (r.wl(), r.Iq()), n = !n, M.kd(c.src, n ? M.ONE: c.I)) : u != r && r && (r.wl(), r.Iq()), r = u, u = r.Ua, r.pd == u && (r.wl(), r.Iq(), !r.wz(2 * r.pd))) return;
        sp.ZZ(s, h, o, t.VZ),
            r.Cu(o, u)
    }
    if (r && (r.wl(), r.Iq()), t.oC || t.pC) {
        if (M.Ke(M.Kf), M.ob.stack.push(M.ob.top), M.ob.top = t.Kb, n = M.ye, t.pC) for (n.If(0, 0, 255, 255), n.Sn(1), i = 0, a = e.PR.length; a > i; i++) h = e.TO[i],
        h.ul && h.ul.type == sp.DH.WI && (s = h.ul, o = new M.Bb, sp.ZZ(s, h, o), r = [], r.push(M.d(o.J.j.x, o.J.j.y)), r.push(M.d(o.V.j.x, o.V.j.y)), r.push(M.d(o.N.j.x, o.N.j.y)), r.push(M.d(o.U.j.x, o.U.j.y)), n.qe(r, 4, p));
        if (t.oC) {
            for (n.Sn(2), n.If(255, 0, 0, 255), i = 0, a = e.qn.length; a > i; i++) t = e.qn[i],
                o = t.data.length * t.k5 + t.Fu,
                r = t.data.length * t.l5 + t.Gu,
                n.Wh(M.d(t.Fu, t.Gu), M.d(o, r));
            for (n.gH(4), n.If(0, 0, 255, 255), i = 0, a = e.qn.length; a > i; i++) t = e.qn[i],
                n.CF(M.d(t.Fu, t.Gu)),
            0 == i && n.If(0, 255, 0, 255)
        }
        M.dk()
    }
},
    M.AS = A("S"), M.AS.prototype.Ya = function(t) {
    var i = this.S;
    M.Ke(M.Kf),
        M.Jn(),
        M.I4(i.Kb);
    for (var e = i.u, n = M.Xb.ALPHA_PREMULTIPLIED, r = M.Xb.ALPHA_NON_PREMULTIPLIED, s = 0, h = e.length; h > s; s++) {
        var a = e[s];
        if (a && a.K2) {
            var o = a.K2();
            if (q != o) switch (o.ru(i.la), a.Fea()) {
                case ccs.K9:
                    if (o instanceof ccs.U$) {
                        o.se();
                        var c = a.Ef();
                        c.src != n.src || c.I != n.I ? o.Od(a.Ef()) : i.q.src != n.src || i.q.I != n.I || o.Ja().ai() ? o.Od(i.q) : o.Od(r),
                            o.Ia(t)
                    }
                    break;
                case ccs.J9:
                    o.Ia(t);
                    break;
                default:
                    o.G(t)
            }
        } else a instanceof M.n && (a.ru(i.la), a.G(t))
    }
    M.dk()
}), M.M.JB = function() {
    var t = M.n.prototype;
    t.Px = q,
        t.Kb = q,
        t.OC = q,
        t.Hg = q,
        t.ctor = function() {
            this.TC();
            var t = new M.da;
            t.c[2] = t.c[3] = t.c[6] = t.c[7] = t.c[8] = t.c[9] = t.c[11] = t.c[14] = 0,
                t.c[10] = t.c[15] = 1,
                this.Px = t,
                this.OC = 0,
                this.Kb = new M.da,
                this.Vd()
        },
        t.La = function() {
            this.Tj === r && (this.Tg(), this.Sm = this.Tj = this.Qw = p, M.ia.cu(this))
        },
        t.G = function() {
            if (this.zc) {
                this.Ha && (this.zh = this.Ha.zh + 1);
                var t,
                    i = M.ob;
                i.stack.push(i.top),
                    M.hg(this.Kb, i.top),
                    i.top = this.Kb,
                    this.transform();
                var e = this.u;
                if (e && 0 < e.length) {
                    var n = e.length;
                    for (this.Lc(), t = 0; n > t && e[t] && 0 > e[t].Ib; t++) e[t].G();
                    for (this.$ && M.ia.nc(this.$); n > t; t++) e[t] && e[t].G()
                } else this.$ && M.ia.nc(this.$);
                i.top = i.stack.pop()
            }
        },
        t.Ye = function(t) {
            var i = this.Px,
                e = this.Kb;
            t = t || (this.Ha ? this.Ha.Kb: M.ob.top);
            var n = this.Hl(),
                s = i.c;
            if (s[0] = n.a, s[4] = n.s, s[12] = n.P, s[1] = n.b, s[5] = n.z, s[13] = n.Q, s[14] = this.Pp, M.ef(e, t, i), this.Hg != q && !(this.grid != q && this.grid.bk()) && (i = this.Cb.x, t = this.Cb.y, 0 !== i || 0 !== t ? (M.zv || (i |= 0, t |= 0), n = new M.da, M.Sy(n, i, t, 0), M.ef(e, e, n), this.Hg.MM(e), M.Sy(n, -i, -t, 0), M.ef(e, e, n)) : this.Hg.MM(e)), this.Sm = r, this.u && 0 !== this.u.length) for (n = this.u, i = 0, t = n.length; t > i; i++) n[i].Ye(e)
        },
        t.transform = function() {
            var t = this.Px,
                i = M.ob.top,
                e = this.Hl(),
                n = t.c;
            n[0] = e.a,
                n[4] = e.s,
                n[12] = e.P,
                n[1] = e.b,
                n[5] = e.z,
                n[13] = e.Q,
                n[14] = this.Pp,
                M.ef(i, i, t),
            this.Hg != q && !(this.grid != q && this.grid.bk()) && (t = this.Cb.x, i = this.Cb.y, 0 !== t || 0 !== i ? (M.zv || (t |= 0, i |= 0), M.yq(t, i), this.Hg.Rt(), M.yq( - t, -i)) : this.Hg.Rt())
        },
        t.Vi = t.BY
},
    M.M.VA = function() {
        var t = M.n.prototype;
        M.k(t, "x", t.df, t.yR),
            M.k(t, "y", t.eh, t.zR),
            M.k(t, "width", t.Bh, t.Mj),
            M.k(t, "height", t.Vk, t.Lj),
            M.k(t, "anchorX", t.jY, t.aE),
            M.k(t, "anchorY", t.kY, t.bE),
            M.k(t, "skewX", t.B3, t.m7),
            M.k(t, "skewY", t.C3, t.n7),
            M.k(t, "zIndex", t.Z2, t.uR),
            M.k(t, "vertexZ", t.L3, t.z7),
            M.k(t, "rotation", t.u3, t.iH),
            M.k(t, "rotationX", t.w3, t.k7),
            M.k(t, "rotationY", t.x3, t.l7),
            M.k(t, "scale", t.y3, t.Pd),
            M.k(t, "scaleX", t.BP, t.pu),
            M.k(t, "scaleY", t.CP, t.qu),
            M.k(t, "children", t.B2),
            M.k(t, "childrenCount", t.C2),
            M.k(t, "parent", t.getParent, t.xR),
            M.k(t, "visible", t.u4, t.Oz),
            M.k(t, "running", t.s4),
            M.k(t, "ignoreAnchor", t.p4, t.Fy),
            M.k(t, "actionManager", t.my, t.iR),
            M.k(t, "scheduler", t.Al, t.HR),
            M.k(t, "shaderProgram", t.YF, t.ru),
            M.k(t, "opacity", t.bh, t.pb),
            M.k(t, "opacityModifyRGB", t.gg),
            M.k(t, "cascadeOpacity", t.jQ, t.nR),
            M.k(t, "color", t.fg, t.mb),
            M.k(t, "cascadeColor", t.iQ, t.mR)
    },
    M.uI = -1, M.WG = 1, M.n = M.xa.extend({
    Ib: 0,
    vj: 0,
    Pp: 0,
    Jj: 0,
    Um: 0,
    pa: 1,
    Ta: 1,
    ua: q,
    Jm: q,
    Wx: r,
    kD: r,
    Ug: 0,
    Vg: 0,
    u: q,
    zc: p,
    cd: q,
    Cb: q,
    R: q,
    Mh: r,
    Ha: q,
    yj: r,
    tag: M.uI,
    userData: q,
    userObject: q,
    Tj: p,
    Qw: p,
    ge: r,
    Lk: q,
    Gba: q,
    Sj: q,
    vd: q,
    rM: q,
    le: r,
    la: q,
    arrivalOrder: 0,
    Fg: q,
    ag: q,
    Xaa: q,
    pM: r,
    Rr: r,
    aw: q,
    Ig: q,
    ZC: r,
    wp: 0,
    ux: 0,
    Hb: "Node",
    IN: r,
    rp: "",
    Wa: 255,
    Rg: 255,
    ta: q,
    ke: q,
    rf: r,
    Of: r,
    eba: 0,
    zh: -1,
    $: q,
    sba: r,
    TC: function() {
        this.cd = M.d(0, 0),
            this.Cb = M.d(0, 0),
            this.R = M.size(0, 0),
            this.ua = M.d(0, 0),
            this.Jm = M.d(0, 0),
            this.u = [],
            this.Sj = {
                a: 1,
                b: 0,
                s: 0,
                z: 1,
                P: 0,
                Q: 0
            },
            this.vd = {
                a: 1,
                b: 0,
                s: 0,
                z: 1,
                P: 0,
                Q: 0
            };
        var t = M.K;
        this.Fg = t.my(),
            this.ag = t.Al(),
            this.pM = p,
            this.aw = {
                a: 1,
                b: 0,
                s: 0,
                z: 1,
                P: 0,
                Q: 0
            },
        M.VS && (this.Ig = new M.VS(this)),
            this.Rg = this.Wa = 255,
            this.ta = M.color(255, 255, 255, 255),
            this.ke = M.color(255, 255, 255, 255),
            this.Of = this.rf = r

    },
    ha: function() {
        return this.pM === r && this.TC(),
            p
    },
    Nf: function(t, i) {
        if (t && 0 !== t.length) {
            var e,
                n,
                r = t.length;
            switch (e = M.n.qf, i) {
                case e.W:
                    for (e = 0; r > e; e++)(n = t[e]) && n.W();
                    break;
                case e.xb:
                    for (e = 0; r > e; e++)(n = t[e]) && n.xb();
                    break;
                case e.fi:
                    for (e = 0; r > e; e++)(n = t[e]) && n.fi();
                    break;
                case e.bf:
                    for (e = 0; r > e; e++)(n = t[e]) && n.bf();
                    break;
                case e.se:
                    for (e = 0; r > e; e++)(n = t[e]) && n.se();
                    break;
                case e.ig:
                    for (e = 0; r > e; e++)(n = t[e]) && n.ig();
                    break;
                case e.Lc:
                    for (e = 0; r > e; e++)(n = t[e]) && n.Lc();
                    break;
                default:
                    M.assert(0, M.i.jU)
            }
        }
    },
    La: q,
    Th: function(t) {
        for (var i in t) this[i] = t[i]
    },
    B3: E("Ug"),
    m7: function(t) {
        this.Ug = t,
            this.La()
    },
    C3: E("Vg"),
    n7: function(t) {
        this.Vg = t,
            this.La()
    },
    uR: function(t) {
        this.Ib = t,
        this.Ha && this.Ha.Lq(this, t),
            M.wa.wx(this)
    },
    xx: A("Ib"),
    Z2: E("Ib"),
    Gga: function() {
        return M.log(M.i.pU),
            this.Ib
    },
    zna: function(t) {
        M.log(M.i.zU),
            this.uR(t)
    },
    bma: function(t) {
        this.vj != t && (this.vj = t, M.wa.wx(this))
    },
    Zea: E("vj"),
    L3: E("Pp"),
    z7: A("Pp"),
    u3: function() {
        return this.Jj !== this.Um && M.log(M.i.nU),
            this.Jj
    },
    iH: function(t) {
        this.Jj = this.Um = t,
            this.wp = .017453292519943295 * this.Jj,
            this.ux = .017453292519943295 * this.Um,
            this.La()
    },
    w3: E("Jj"),
    k7: function(t) {
        this.Jj = t,
            this.wp = .017453292519943295 * this.Jj,
            this.La()
    },
    x3: E("Um"),
    l7: function(t) {
        this.Um = t,
            this.ux = .017453292519943295 * this.Um,
            this.La()
    },
    y3: function() {
        return this.pa !== this.Ta && M.log(M.i.oU),
            this.pa
    },
    Pd: function(t, i) {
        this.pa = t,
            this.Ta = i || 0 === i ? i: t,
            this.La()
    },
    BP: E("pa"),
    pu: function(t) {
        this.pa = t,
            this.La()
    },
    CP: E("Ta"),
    qu: function(t) {
        this.Ta = t,
            this.La()
    },
    H: function(t, i) {
        var e = this.ua;
        i === k ? (e.x = t.x, e.y = t.y) : (e.x = t, e.y = i),
            this.La(),
            this.Wx = r
    },
    sma: function(t, i) {
        var e = this.Jm;
        i === k ? (e.x = t.x, e.y = t.y) : (e.x = t, e.y = i),
            this.La(),
            this.kD = this.Wx = p
    },
    dh: function() {
        return M.d(this.ua)
    },
    vfa: function() {
        return M.d(this.Jm)
    },
    df: function() {
        return this.ua.x
    },
    yR: function(t) {
        this.ua.x = t,
            this.La()
    },
    eh: function() {
        return this.ua.y
    },
    zR: function(t) {
        this.ua.y = t,
            this.La()
    },
    C2: function() {
        return this.u.length
    },
    B2: E("u"),
    u4: E("zc"),
    Oz: function(t) {
        this.zc != t && ((this.zc = t) && this.La(), M.ia.oe = p)
    },
    dea: function() {
        return M.d(this.cd)
    },
    Ol: function(t, i) {
        var e = this.cd;
        if (i === k) {
            if (t.x === e.x && t.y === e.y) return;
            e.x = t.x,
                e.y = t.y
        } else {
            if (t === e.x && i === e.y) return;
            e.x = t,
                e.y = i
        }
        var n = this.Cb,
            r = this.R;
        n.x = r.width * e.x,
            n.y = r.height * e.y,
            this.La()
    },
    Zaa: E("cd"),
    xN: function(t) {
        var i = t.x;
        t = t.y,
        this.cd.x !== i && (this.cd.x = i, this.Cb.x = this.R.width * i),
        this.cd.y !== t && (this.cd.y = t, this.Cb.y = this.R.height * t),
            this.La()
    },
    jY: function() {
        return this.cd.x
    },
    aE: function(t) {
        this.cd.x !== t && (this.cd.x = t, this.Cb.x = this.R.width * t, this.La())
    },
    kY: function() {
        return this.cd.y
    },
    bE: function(t) {
        this.cd.y !== t && (this.cd.y = t, this.Cb.y = this.R.height * t, this.La())
    },
    ny: function() {
        return M.d(this.Cb)
    },
    Bh: function() {
        return this.R.width
    },
    Mj: function(t) {
        this.R.width = t,
            this.Cb.x = t * this.cd.x,
            this.La()
    },
    Vk: function() {
        return this.R.height
    },
    Lj: function(t) {
        this.R.height = t,
            this.Cb.y = t * this.cd.y,
            this.La()
    },
    wd: function() {
        return M.size(this.R)
    },
    re: function(t, i) {
        var e = this.R;
        if (i === k) {
            if (t.width === e.width && t.height === e.height) return;
            e.width = t.width,
                e.height = t.height
        } else {
            if (t === e.width && i === e.height) return;
            e.width = t,
                e.height = i
        }
        var n = this.Cb,
            r = this.cd;
        n.x = e.width * r.x,
            n.y = e.height * r.y,
            this.La()
    },
    s4: E("Mh"),
    getParent: E("Ha"),
    xR: A("Ha"),
    p4: E("yj"),
    Fy: function(t) {
        t != this.yj && (this.yj = t, this.La())
    },
    $F: E("tag"),
    Nz: A("tag"),
    Z6: A("rp"),
    getName: E("rp"),
    getUserData: E("userData"),
    setUserData: A("userData"),
    Bga: E("userObject"),
    wna: function(t) {
        this.userObject != t && (this.userObject = t)
    },
    Afa: E("arrivalOrder"),
    c7: A("arrivalOrder"),
    my: function() {
        return this.Fg || (this.Fg = M.K.my()),
            this.Fg
    },
    iR: function(t) {
        this.Fg != t && (this.sH(), this.Fg = t)
    },
    Al: function() {
        return this.ag || (this.ag = M.K.Al()),
            this.ag
    },
    HR: function(t) {
        this.ag != t && (this.Uz(), this.ag = t)
    },
    oca: function() {
        return M.log(M.i.lU),
            this.NF()
    },
    NF: function() {
        var t = M.rect(0, 0, this.R.width, this.R.height);
        return M.YZ(t, this.Vi())
    },
    bf: function() {
        this.sH(),
            this.Uz(),
            M.wa.VQ(this),
            this.Nf(this.u, M.n.qf.bf)
    },
    Yh: function(t) {
        var i = this.u;
        if (i != q) for (var e = 0; e < i.length; e++) {
            var n = i[e];
            if (n && n.tag == t) return n
        }
        return q
    },
    pea: function(t) {
        if (!t) return M.log("Invalid name"),
            q;
        for (var i = this.u, e = 0, n = i.length; n > e; e++) if (i[e].rp == t) return i[e];
        return q
    },
    T: function(t, i, e) {
        i = i === k ? t.Ib: i;
        var n,
            s = r;
        M.ck(e) ? (e = k, n = t.rp) : M.zd(e) ? (n = e, e = k) : M.Kt(e) && (s = p, n = ""),
            M.assert(t, M.i.kU),
            M.assert(t.Ha === q, "child already added. It can't be added again"),
            this.WB(t, i, e, n, s)
    },
    WB: function(t, i, e, n, r) {
        this.u || (this.u = []),
            this.cZ(t, i),
            r ? t.Nz(e) : t.Z6(n),
            t.xR(this),
            t.c7(M.WG++),
        this.Mh && (t.W(), this.ZC && t.fi()),
        this.rf && this.JL(),
        this.Of && this.KL()
    },
    TG: function(t) {
        this.Ha && (t == q && (t = p), this.Ha.removeChild(this, t))
    },
    Yka: function(t) {
        M.log(M.i.tU),
            this.TG(t)
    },
    removeChild: function(t, i) {
        0 !== this.u.length && (i == q && (i = p), -1 < this.u.indexOf(t) && this.PX(t, i), this.La(), M.ia.oe = p)
    },
    SG: function(t, i) {
        t === M.uI && M.log(M.i.rU);
        var e = this.Yh(t);
        e == q ? M.log(M.i.sU, t) : this.removeChild(e, i)
    },
    Rka: function(t) {
        this.Hf(t)
    },
    Hf: function(t) {
        var i = this.u;
        if (i != q) {
            t == q && (t = p);
            for (var e = 0; e < i.length; e++) {
                var n = i[e];
                n && (this.Mh && (n.ig(), n.xb()), t && n.bf(), n.parent = q)
            }
            this.u.length = 0
        }
    },
    PX: function(t, i) {
        this.Mh && (t.ig(), t.xb()),
        i && t.bf(),
            t.parent = q,
            t.Lk = q,
            M.ne(this.u, t)
    },
    cZ: function(t, i) {
        M.ia.oe = this.le = p,
            this.u.push(t),
            t.xx(i)
    },
    Lq: function(t, i) {
        M.assert(t, M.i.uU),
            M.ia.oe = this.le = p,
            t.arrivalOrder = M.WG,
            M.WG++,
            t.xx(i),
            this.La()
    },
    Lc: function() {
        if (this.le) {
            var t,
                i,
                e,
                n = this.u,
                s = n.length;
            for (t = 1; s > t; t++) {
                for (e = n[t], i = t - 1; i >= 0;) {
                    if (e.Ib < n[i].Ib) n[i + 1] = n[i];
                    else {
                        if (! (e.Ib === n[i].Ib && e.arrivalOrder < n[i].arrivalOrder)) break;
                        n[i + 1] = n[i]
                    }
                    i--
                }
                n[i + 1] = e
            }
            this.le = r
        }
    },
    Ia: z(),
    s8: function() {
        this.Ha != q && (this.Ha.s8(), this.Ha.transform())
    },
    W: function() {
        this.ZC = r,
            this.Mh = p,
            this.Nf(this.u, M.n.qf.W),
            this.Mq()
    },
    fi: function() {
        this.ZC = p,
            this.Nf(this.u, M.n.qf.fi)
    },
    ig: function() {
        this.Nf(this.u, M.n.qf.ig)
    },
    xb: function() {
        this.Mh = r,
            this.pause(),
            this.Nf(this.u, M.n.qf.xb),
            this.d6()
    },
    lb: function(t) {
        return M.assert(t, M.i.wU),
            this.actionManager.C0(t, this, !this.Mh),
            t
    },
    sH: function() {
        this.actionManager && this.actionManager.UQ(this)
    },
    V7: function(t) {
        this.actionManager.TQ(t)
    },
    W7: function(t) {
        t === M.Yn ? M.log(M.i.AU) : this.actionManager.c6(t, this)
    },
    LF: function(t) {
        return t === M.Yn ? (M.log(M.i.mU), q) : this.actionManager.LF(t, this)
    },
    xfa: function() {
        return this.actionManager.s5(this)
    },
    fR: function() {
        this.gR(0)
    },
    gR: function(t) {
        this.scheduler.XG(this, t, !this.Mh)
    },
    lS: function() {
        this.scheduler.Au(this)
    },
    nu: function(t, i, e, n) {
        i = i || 0,
            M.assert(t, M.i.xU),
            M.assert(i >= 0, M.i.yU),
            e = e == q ? M.Ar: e,
            this.scheduler.z6(this, t, i, e, n || 0, !this.Mh)
    },
    mla: function(t, i) {
        this.nu(t, 0, 0, i)
    },
    iS: function(t) {
        t && this.scheduler.kS(this, t)
    },
    Uz: function() {
        this.scheduler.jS(this)
    },
    gla: function() {
        M.log(M.i.vU),
            this.Mq()
    },
    Mq: function() {
        this.scheduler.mk(this),
        this.actionManager && this.actionManager.mk(this),
            M.wa.mk(this)
    },
    qka: function() {
        M.log(M.i.qU),
            this.pause()
    },
    pause: function() {
        this.scheduler.Fq(this),
        this.actionManager && this.actionManager.Fq(this),
            M.wa.Fq(this)
    },
    ula: function(t) {
        this.aw = t,
            this.Rr = this.Tj = p
    },
    n3: function() {
        return this.Qw && (this.rM = M.Rp(this.Vi()), this.Qw = r),
            this.rM
    },
    nka: function() {
        return this.n3()
    },
    At: function() {
        for (var t = this.Vi(), i = this.Ha; i != q; i = i.parent) t = M.mn(t, i.Vi());
        return t
    },
    CQ: function() {
        return this.At()
    },
    NP: function() {
        return M.Rp(this.At())
    },
    ooa: function() {
        return this.NP()
    },
    aq: function(t) {
        return M.OQ(t, this.NP())
    },
    gy: function(t) {
        return t = t || M.d(0, 0),
            M.OQ(t, this.At())
    },
    y1: function(t) {
        return M.$d(this.aq(t), this.Cb)
    },
    Eca: function(t) {
        return t = t || M.d(0, 0),
            t = M.ik(t, this.Cb),
            this.gy(t)
    },
    Qaa: function(t) {
        return t = this.gy(t),
            M.K.AO(t)
    },
    Fca: function(t) {
        return this.aq(t.zl())
    },
    Gca: function(t) {
        return t = t.zl(),
            t = M.K.zO(t),
            this.y1(t)
    },
    update: function(t) {
        this.Ig && !this.Ig.dha() && this.Ig.G(t)
    },
    se: function() {
        this.Nf(this.u, M.n.qf.se)
    },
    xz: z(),
    fj: z(),
    E2: function(t) {
        return this.Ig ? this.Ig.E2(t) : q
    },
    Kba: function(t) {
        this.Ig && this.Ig.add(t)
    },
    Wka: function(t) {
        return this.Ig ? this.Ig.remove(t) : r
    },
    d6: function() {
        this.Ig && this.Ig.Pka()
    },
    grid: q,
    ctor: q,
    G: q,
    transform: q,
    Hl: function() {
        return this.Vi()
    },
    Vi: q,
    Tg: function() {
        if (this.ge === r) {
            this.ge = p;
            var t = this.Lk;
            t && t != this && t.Tg()
        }
    },
    Qs: function(t) {
        if (this.Lk != t) {
            this.Lk = t;
            for (var i = this.u, e = 0, n = i.length; n > e; e++) i[e].Qs(t)
        }
    },
    En: function() {
        return this.Hg || (this.Hg = new M.br),
            this.Hg
    },
    zt: E("grid"),
    S6: A("grid"),
    YF: E("la"),
    ru: A("la"),
    Yea: E("OC"),
    ama: A("OC"),
    z2: function() {
        var t = M.rect(0, 0, this.R.width, this.R.height),
            i = this.At(),
            t = M.QG(t, this.At());
        if (!this.u) return t;
        for (var e = this.u, n = 0; n < e.length; n++) {
            var r = e[n];
            r && r.zc && (r = r.rs(i)) && (t = M.sz(t, r))
        }
        return t
    },
    rs: function(t) {
        var i = M.rect(0, 0, this.R.width, this.R.height);
        if (t = t == q ? this.Vi() : M.mn(this.Vi(), t), i = M.QG(i, t), !this.u) return i;
        for (var e = this.u, n = 0; n < e.length; n++) {
            var r = e[n];
            r && r.zc && (r = r.rs(t)) && (i = M.sz(i, r))
        }
        return i
    },
    BY: function() {
        if (this.Wx && this.Ha) {
            var t = this.Ha.R;
            this.ua.x = this.Jm.x * t.width,
                this.ua.y = this.Jm.y * t.height,
                this.kD = r
        }
        if (this.Tj) {
            var t = this.ua.x,
                i = this.ua.y,
                e = this.Cb.x,
                n = -e,
                s = this.Cb.y,
                h = -s,
                a = this.pa,
                o = this.Ta;
            this.yj && (t += e, i += s);
            var c = 1,
                u = 0,
                f = 1,
                l = 0; (0 !== this.Jj || 0 !== this.Um) && (c = Math.cos( - this.wp), u = Math.sin( - this.wp), f = Math.cos( - this.ux), l = Math.sin( - this.ux));
            var d = this.Ug || this.Vg;
            d || 0 === e && 0 === s || (t += f * n * a + -u * h * o, i += l * n * a + c * h * o);
            var p = this.Sj;
            p.a = f * a,
                p.b = l * a,
                p.s = -u * o,
                p.z = c * o,
                p.P = t,
                p.Q = i,
            d && (p = M.mn({
                    a: 1,
                    b: Math.tan(M.cf(this.Vg)),
                    s: Math.tan(M.cf(this.Ug)),
                    z: 1,
                    P: 0,
                    Q: 0
                },
                p), 0 !== e || 0 !== s) && (p = M.H0(p, n, h)),
            this.Rr && (p = M.mn(p, this.aw), this.Rr = r),
                this.Sj = p,
                this.Tj = r
        }
        return this.Sj
    },
    mc: z(),
    bh: E("Rg"),
    L2: E("Wa"),
    pb: function(t) {
        this.Wa = this.Rg = t;
        var i = 255,
            e = this.Ha;
        e && e.cascadeOpacity && (i = e.Wa),
            this.Mc(i),
            this.ta.a = this.ke.a = t
    },
    Mc: function(t) {
        if (this.Wa = this.Rg * t / 255, this.$ && this.$.Be !== k && (this.$.Be = this.Wa / 255), this.Of) {
            t = this.u;
            for (var i = 0; i < t.length; i++) {
                var e = t[i];
                e && e.Mc(this.Wa)
            }
        }
    },
    jQ: E("Of"),
    nR: function(t) {
        this.Of !== t && ((this.Of = t) ? this.KL() : this.SX())
    },
    KL: function() {
        var t = 255,
            i = this.Ha;
        i && i.cascadeOpacity && (t = i.Wa),
            this.Mc(t)
    },
    SX: function() {
        this.Wa = this.Rg;
        for (var t = this.u, i = 0; i < t.length; i++) {
            var e = t[i];
            e && e.Mc(255)
        }
    },
    fg: function() {
        var t = this.ke;
        return M.color(t.r, t.g, t.b, t.a)
    },
    py: function() {
        var t = this.ta;
        return M.color(t.r, t.g, t.b, t.a)
    },
    mb: function(t) {
        var i = this.ta,
            e = this.ke;
        i.r = e.r = t.r,
            i.g = e.g = t.g,
            i.b = e.b = t.b,
            t = (t = this.Ha) && t.cascadeColor ? t.py() : M.color.WHITE,
            this.Zc(t)
    },
    Zc: function(t) {
        var i = this.ta,
            e = this.ke;
        if (i.r = 0 | e.r * t.r / 255, i.g = 0 | e.g * t.g / 255, i.b = 0 | e.b * t.b / 255, this.rf) for (t = this.u, e = 0; e < t.length; e++) {
            var n = t[e];
            n && n.Zc(i)
        }
    },
    iQ: E("rf"),
    mR: function(t) {
        this.rf !== t && ((this.rf = t) ? this.JL() : this.RX())
    },
    JL: function() {
        var t;
        t = (t = this.Ha) && t.cascadeColor ? t.py() : M.color.WHITE,
            this.Zc(t)
    },
    RX: function() {
        var t = this.ta,
            i = this.ke;
        t.r = i.r,
            t.g = i.g,
            t.b = i.b;
        for (var t = this.u, i = M.color.WHITE, e = 0; e < t.length; e++) {
            var n = t[e];
            n && n.Zc(i)
        }
    },
    Jf: z(),
    gg: F(r),
    Vd: z(),
    Ye: q
}), M.n.create = function() {
    return new M.n
},
    M.n.qf = {
        W: 1,
        xb: 2,
        bf: 3,
        fi: 4,
        se: 5,
        ig: 6,
        Lc: 7
    },
    M.B === M.ya ? (T = M.n.prototype, T.ctor = function() {
        this.TC(),
            this.Vd()
    },
        T.La = function() {
            this.Tj === r && (this.Tg(), this.Sm = this.Tj = this.Qw = p, M.ia.cu(this))
        },
        T.G = function() {
            if (this.zc) {
                this.Ha && (this.zh = this.Ha.zh + 1);
                var t,
                    i,
                    e = this.u;
                this.transform();
                var n = e.length;
                if (n > 0) {
                    for (this.Lc(), t = 0; n > t && (i = e[t], 0 > i.Ib); t++) i.G();
                    for (this.$ && M.ia.nc(this.$); n > t; t++) e[t].G()
                } else this.$ && M.ia.nc(this.$);
                this.ge = r
            }
        },
        T.Ye = function() {
            var t = this.Hl(),
                i = this.vd;
            if (this.Ha) {
                var e = this.Ha.vd;
                if (i.a = t.a * e.a + t.b * e.s, i.b = t.a * e.b + t.b * e.z, i.s = t.s * e.a + t.z * e.s, i.z = t.s * e.b + t.z * e.z, !this.Ug || this.Vg) {
                    var n = this.Ha.Sj,
                        s = -(n.b + n.s) * t.P;
                    i.P = t.P * e.a + t.Q * e.s + e.P + -(n.b + n.s) * t.Q,
                        i.Q = t.P * e.b + t.Q * e.z + e.Q + s
                } else i.P = t.P * e.a + t.Q * e.s + e.P,
                    i.Q = t.P * e.b + t.Q * e.z + e.Q
            } else i.a = t.a,
                i.b = t.b,
                i.s = t.s,
                i.z = t.z,
                i.P = t.P,
                i.Q = t.Q;
            if (this.Sm = r, this.u && 0 !== this.u.length) for (e = this.u, t = 0, i = e.length; i > t; t++) e[t].Ye()
        },
        T.transform = function() {
            var t = this.Vi(),
                i = this.vd;
            if (this.Ha) {
                var e = this.Ha.vd;
                i.a = t.a * e.a + t.b * e.s,
                    i.b = t.a * e.b + t.b * e.z,
                    i.s = t.s * e.a + t.z * e.s,
                    i.z = t.s * e.b + t.z * e.z;
                var n = this.Ha.Sj,
                    r = -(n.b + n.s) * t.P;
                i.P = t.P * e.a + t.Q * e.s + e.P + -(n.b + n.s) * t.Q,
                    i.Q = t.P * e.b + t.Q * e.z + e.Q + r
            } else i.a = t.a,
                i.b = t.b,
                i.s = t.s,
                i.z = t.z,
                i.P = t.P,
                i.Q = t.Q
        },
        T.Vi = function() {
            if (this.Wx && this.Ha) {
                var t = this.Ha.R;
                this.ua.x = this.Jm.x * t.width,
                    this.ua.y = this.Jm.y * t.height,
                    this.kD = r
            }
            if (this.Tj) {
                t = this.Sj,
                    t.P = this.ua.x,
                    t.Q = this.ua.y;
                var i = 1,
                    e = 0;
                this.Jj && (i = Math.cos(this.wp), e = Math.sin(this.wp)),
                    t.a = t.z = i,
                    t.b = -e,
                    t.s = e;
                var n = this.pa,
                    s = this.Ta,
                    h = this.Cb.x,
                    a = this.Cb.y,
                    o = 1e - 6 > n && n > -1e - 6 ? 1e - 6: n,
                    c = 1e - 6 > s && s > -1e - 6 ? 1e - 6: s;
                if (this.Ug || this.Vg) {
                    var u = Math.tan( - this.Ug * Math.PI / 180),
                        f = Math.tan( - this.Vg * Math.PI / 180);
                    1 / 0 === u && (u = 99999999),
                    1 / 0 === f && (f = 99999999);
                    var l = a * u * o,
                        d = h * f * c;
                    t.a = i + -e * f,
                        t.b = i * u + -e,
                        t.s = e + i * f,
                        t.z = e * u + i,
                        t.P += i * l + -e * d,
                        t.Q += e * l + i * d
                } (1 !== n || 1 !== s) && (t.a *= o, t.s *= o, t.b *= c, t.z *= c),
                    t.P += i * -h * o + -e * a * c,
                    t.Q -= e * -h * o + i * a * c,
                this.yj && (t.P += h, t.Q += a),
                this.Rr && (this.Sj = M.mn(t, this.aw), this.Rr = r),
                    this.Tj = r
            }
            return this.Sj
        },
        T = q) : (M.assert(M.Vb(M.M.JB), M.i.Bd, "BaseNodesWebGL.js"), M.M.JB(), delete M.M.JB), M.assert(M.Vb(M.M.VA), M.i.Bd, "BaseNodesPropertyDefine.js"), M.M.VA(), delete M.M.VA, M.rk = M.n.extend({
    textureAtlas: q,
    quadsToDraw: 0,
    mp: 0,
    AM: 0,
    zi: 0,
    Gh: 0,
    rj: q,
    kb: r,
    q: q,
    Nw: r,
    Hb: "AtlasNode",
    ctor: function(t, i, e, n) {
        M.n.prototype.ctor.call(this),
            this.rj = M.color.WHITE,
            this.q = {
                src: M.pc,
                I: M.oc
            },
            this.Nw = r,
        n !== k && this.f4(t, i, e, n)
    },
    Vd: function() {
        M.B === M.Z && (this.$ = new M.HH(this))
    },
    Xq: function() {
        M.log(M.i.BS)
    },
    fg: function() {
        return this.kb ? this.rj: M.n.prototype.fg.call(this)
    },
    Jf: function(t) {
        var i = this.color;
        this.kb = t,
            this.color = i
    },
    gg: E("kb"),
    Ef: E("q"),
    Od: function(t, i) {
        this.q = i === k ? t: {
            src: t,
            I: i
        }
    },
    lH: A("textureAtlas"),
    vy: E("textureAtlas"),
    Ofa: E("quadsToDraw"),
    Hma: A("quadsToDraw"),
    Qi: q,
    vc: q,
    gt: q,
    tm: q,
    f4: function(t, i, e, n) {
        return t || b("cc.AtlasNode.initWithTileFile(): title should not be null"),
            t = M.Ma.Vc(t),
            this.Ca(t, i, e, n)
    },
    Ca: q,
    UC: function(t, i, e, n) {
        return this.zi = i,
            this.Gh = e,
            this.kb = p,
            this.vc = t,
            this.vc ? (this.Qi = this.vc, this.iw(), this.quadsToDraw = n, p) : (M.log(M.i.IH), r)
    },
    VC: function(t, i, e, n) {
        return this.zi = i,
            this.Gh = e,
            this.rj = M.color.WHITE,
            this.kb = p,
            this.q.src = M.pc,
            this.q.I = M.oc,
            i = this.ke,
            this.tm = new Float32Array([i.r / 255, i.g / 255, i.b / 255, this.Rg / 255]),
            this.textureAtlas = new M.ni,
            this.textureAtlas.Ca(t, n),
            this.textureAtlas ? (this.cg(), this.cO(), this.iw(), this.quadsToDraw = n, this.shaderProgram = M.be.Bc(M.jB), this.gt = M.l.getUniformLocation(this.shaderProgram.Fn(), "u_color"), p) : (M.log(M.i.IH), r)
    },
    Ia: q,
    uj: function(t) {
        t = t || M.l,
            M.St(this),
            M.kd(this.q.src, this.q.I),
        this.gt && this.tm && (t.uniform4fv(this.gt, this.tm), this.textureAtlas.BF(this.quadsToDraw))
    },
    mb: q,
    q_: function(t) {
        var i = this.ke;
        i.r == t.r && i.g == t.g && i.b == t.b || (i = M.color(t.r, t.g, t.b), this.rj = t, this.kb && (t = this.Wa, i.r = i.r * t / 255, i.g = i.g * t / 255, i.b = i.b * t / 255), this.ve())
    },
    ve: function() {
        var t = this.Ja();
        if (t && this.vc) {
            var i = this.vc.Sa;
            if (i) {
                var e = t.Sa,
                    t = M.rect(0, 0, i.width, i.height);
                e instanceof HTMLCanvasElement ? M.Cn(i, this.rj, t, e) : (e = M.Cn(i, this.rj, t), t = new M.fa, t.ld(e), t.Fb(), this.bb(t))
            }
        }
    },
    r_: function(t) {
        var i = M.color(t.r, t.g, t.b);
        this.rj = t;
        var e = this.Wa;
        this.kb && (i.r = i.r * e / 255, i.g = i.g * e / 255, i.b = i.b * e / 255),
            M.n.prototype.mb.call(this, t),
            t = this.ta,
            this.tm = new Float32Array([t.r / 255, t.g / 255, t.b / 255, e / 255])
    },
    pb: z(),
    zN: function(t) {
        M.n.prototype.pb.call(this, t),
        this.kb && (this.color = this.rj)
    },
    hE: function(t) {
        M.n.prototype.pb.call(this, t),
            this.kb ? this.color = this.rj: (t = this.ta, this.tm = new Float32Array([t.r / 255, t.g / 255, t.b / 255, this.Wa / 255]))
    },
    Ja: q,
    ss: E("Qi"),
    NC: function() {
        return this.textureAtlas.texture
    },
    bb: q,
    lE: A("Qi"),
    mE: function(t) {
        this.textureAtlas.texture = t,
            this.cg(),
            this.cO()
    },
    iw: q,
    rX: function() {
        var t = this.texture.wd();
        this.AM = 0 | t.height / this.Gh,
            this.mp = 0 | t.width / this.zi
    },
    sX: function() {
        var t = this.texture,
            i = t.wd();
        this.Nw && (i = t.R),
            this.AM = 0 | i.height / this.Gh,
            this.mp = 0 | i.width / this.zi
    },
    cg: function() {
        this.textureAtlas.texture.ai() || (this.q.src = M.SRC_ALPHA, this.q.I = M.ONE_MINUS_SRC_ALPHA)
    },
    cO: function() {
        this.kb = this.textureAtlas.texture.ai()
    },
    eE: A("Nw")
}), T = M.rk.prototype, M.B === M.Z ? (T.Ca = T.VC, T.Ia = T.uj, T.mb = T.r_, T.pb = T.hE, T.Ja = T.NC, T.bb = T.mE, T.iw = T.sX) : (T.Ca = T.UC, T.Ia = M.n.prototype.Ia, T.mb = T.q_, T.pb = T.zN, T.Ja = T.ss, T.bb = T.lE, T.iw = T.rX, M.qa.Gx || (T.ve = function() {
    var t,
        i = this.Ja();
    if (i && this.vc && (t = i.Sa)) {
        var e = this.vc.Sa; (i = M.Ma.Bt(e)) && (e = M.rect(0, 0, e.width, e.height), t instanceof HTMLCanvasElement ? M.yl(t, i, this.ta, e, t) : (t = M.yl(t, i, this.ta, e), i = new M.fa, i.ld(t), i.Fb(), this.bb(i)))
    }
})), M.k(T, "opacity", T.bh, T.pb), M.k(T, "color", T.fg, T.mb), M.k(T, "texture", T.Ja, T.bb), M.rk.create = function(t, i, e, n) {
    return new M.rk(t, i, e, n)
},
    M.M.PB = function() {
        M.fa = M.xa.extend({
            pba: p,
            Gi: q,
            Gj: 0,
            Fj: 0,
            rp: "",
            R: q,
            aj: 0,
            bj: 0,
            Mw: r,
            fp: r,
            shaderProgram: q,
            Db: r,
            Sa: q,
            me: q,
            url: q,
            ctor: function() {
                this.R = M.size(0, 0),
                    this.Gi = M.fa.JO
            },
            RG: function() {
                this.me && M.l.deleteTexture(this.me),
                    M.aa.fj(this.url)
            },
            uP: E("Gi"),
            VF: E("Gj"),
            UF: E("Fj"),
            getName: E("me"),
            wd: function() {
                return M.size(this.R.width / M.zb(), this.R.height / M.zb())
            },
            Bh: function() {
                return this.R.width / M.zb()
            },
            Vk: function() {
                return this.R.height / M.zb()
            },
            F2: E("R"),
            e3: E("aj"),
            W6: A("aj"),
            f3: E("bj"),
            X6: A("bj"),
            YF: E("shaderProgram"),
            ru: A("shaderProgram"),
            ai: E("Mw"),
            T3: E("fp"),
            description: function() {
                return "<cc.Texture2D | Name = " + this.rp + " | Dimensions = " + this.Gj + " x " + this.Fj + " | Coordinates = (" + this.aj + ", " + this.bj + ")>"
            },
            b6: z(),
            A4: u(),
            Ht: function(t, i, e, n, s) {
                var h = M.fa,
                    a = M.l,
                    o = a.RGBA,
                    c = a.UNSIGNED_BYTE,
                    u = e * M.fa.kK[i] / 8;
                switch (0 === u % 8 ? a.pixelStorei(a.UNPACK_ALIGNMENT, 8) : 0 === u % 4 ? a.pixelStorei(a.UNPACK_ALIGNMENT, 4) : 0 === u % 2 ? a.pixelStorei(a.UNPACK_ALIGNMENT, 2) : a.pixelStorei(a.UNPACK_ALIGNMENT, 1), this.me = a.createTexture(), M.yd(this), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), i) {
                    case h.nj:
                        o = a.RGBA;
                        break;
                    case h.zr:
                        o = a.RGB;
                        break;
                    case h.pv:
                        c = a.UNSIGNED_SHORT_4_4_4_4;
                        break;
                    case h.ov:
                        c = a.UNSIGNED_SHORT_5_5_5_1;
                        break;
                    case h.yr:
                        c = a.UNSIGNED_SHORT_5_6_5;
                        break;
                    case h.NA:
                        o = a.LUMINANCE_ALPHA;
                        break;
                    case h.xr:
                        o = a.ALPHA;
                        break;
                    case h.OA:
                        o = a.LUMINANCE;
                        break;
                    default:
                        M.assert(0, M.i.cW)
                }
                return a.texImage2D(a.TEXTURE_2D, 0, o, e, n, 0, o, c, t),
                    this.R.width = s.width,
                    this.R.height = s.height,
                    this.Gj = e,
                    this.Fj = n,
                    this.Gi = i,
                    this.aj = s.width / e,
                    this.bj = s.height / n,
                    this.fp = this.Mw = r,
                    this.shaderProgram = M.be.Bc(M.Dr),
                    this.Db = p
            },
            I1: function(t) {
                var i = [0, this.bj, this.aj, this.bj, 0, 0, this.aj, 0],
                    e = this.Gj * this.aj,
                    n = this.Fj * this.bj;
                t = [t.x, t.y, 0, e + t.x, t.y, 0, t.x, n + t.y, 0, e + t.x, n + t.y, 0],
                    M.Sb(M.Dd | M.wo),
                    this.la.sb(),
                    this.la.tu(),
                    M.yd(this),
                    e = M.l,
                    e.vertexAttribPointer(M.eb, 2, e.FLOAT, r, 0, t),
                    e.vertexAttribPointer(M.bd, 2, e.FLOAT, r, 0, i),
                    e.drawArrays(e.TRIANGLE_STRIP, 0, 4)
            },
            K1: function(t) {
                var i = [0, this.bj, this.aj, this.bj, 0, 0, this.aj, 0];
                t = [t.x, t.y, t.x + t.width, t.y, t.x, t.y + t.height, t.x + t.width, t.y + t.height],
                    M.Sb(M.Dd | M.wo),
                    this.la.sb(),
                    this.la.tu(),
                    M.yd(this);
                var e = M.l;
                e.vertexAttribPointer(M.eb, 2, e.FLOAT, r, 0, t),
                    e.vertexAttribPointer(M.bd, 2, e.FLOAT, r, 0, i),
                    e.drawArrays(e.TRIANGLE_STRIP, 0, 4)
            },
            YP: function(t) {
                if (t == q) return M.log(M.i.fW),
                    r;
                var i = t.N3(),
                    e = t.S2(),
                    n = M.$p.Es;
                return i > n || e > n ? (M.log(M.i.gW, i, e, n, n), r) : (this.Db = p, this.XY(t, i, e))
            },
            ld: function(t) {
                t && (this.me = M.l.createTexture(), this.Sa = t)
            },
            U2: E("Sa"),
            q4: E("Db"),
            Fb: function() {
                if (M.rx) {
                    if (!this.Sa) {
                        var t = M.aa.Yd(this.url);
                        if (!t) return;
                        this.ld(t)
                    }
                    this.Sa.width && this.Sa.height && (this.Db = p, t = M.l, M.yd(this), t.pixelStorei(t.UNPACK_ALIGNMENT, 4), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this.Sa), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), this.shaderProgram = M.be.Bc(M.Dr), M.yd(q), t = this.Sa.height, this.Gj = this.R.width = this.Sa.width, this.Fj = this.R.height = t, this.Gi = M.fa.nj, this.bj = this.aj = 1, this.fp = this.Mw = r, this.dispatchEvent("load"))
                }
            },
            Nd: function() {
                return M.log(M.i.lW),
                    q
            },
            Z3: function() {
                return M.log(M.i.eW),
                    r
            },
            b4: function() {
                return M.log(M.i.iW),
                    r
            },
            c4: function() {
                return M.log(M.i.kW),
                    r
            },
            s7: function(t, i, e, n) {
                var r = M.l;
                i !== k && (t = {
                    p5: t,
                    m5: i,
                    sS: e,
                    tS: n
                }),
                    M.assert(this.Gj == M.wk(this.Gj) && this.Fj == M.wk(this.Fj) || t.sS == r.CLAMP_TO_EDGE && t.tS == r.CLAMP_TO_EDGE, "WebGLRenderingContext.CLAMP_TO_EDGE should be used in NPOT textures"),
                    M.yd(this),
                    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, t.p5),
                    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, t.m5),
                    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, t.sS),
                    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, t.tS)
            },
            C6: function() {
                var t = M.l;
                M.yd(this),
                    this.fp ? t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_NEAREST) : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR)
            },
            YG: function() {
                var t = M.l;
                M.yd(this),
                    this.fp ? t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST_MIPMAP_NEAREST) : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST),
                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST)
            },
            generateMipmap: function() {
                M.assert(this.Gj == M.wk(this.Gj) && this.Fj == M.wk(this.Fj), "Mimpap texture only works in POT textures"),
                    M.yd(this),
                    M.l.generateMipmap(M.l.TEXTURE_2D),
                    this.fp = p
            },
            a8: function() {
                return M.fa.VW[this.Gi]
            },
            j1: function(t) {
                t = t || this.Gi;
                var i = M.fa.kK[t];
                return i != q ? i: (M.log(M.i.bW, t), -1)
            },
            XY: function(t, i, e) {
                var n = M.fa,
                    r = t.getData(),
                    s = q,
                    s = q,
                    h = t.Oga(),
                    a = M.size(t.N3(), t.S2()),
                    o = n.JO,
                    c = t.iea();
                h || (c >= 8 ? o = n.zr: (M.log(M.i.ZV), o = n.yr));
                var u = i * e;
                if (o == n.yr) if (h) for (r = new Uint16Array(i * e), s = t.getData(), c = 0; u > c; ++c) r[c] = (255 & s[c] >> 0) >> 3 << 11 | (255 & s[c] >> 8) >> 2 << 5 | (255 & s[c] >> 16) >> 3 << 0;
                else for (r = new Uint16Array(i * e), s = t.getData(), c = 0; u > c; ++c) r[c] = (255 & s[c]) >> 3 << 11 | (255 & s[c]) >> 2 << 5 | (255 & s[c]) >> 3 << 0;
                else if (o == n.pv) for (r = new Uint16Array(i * e), s = t.getData(), c = 0; u > c; ++c) r[c] = (255 & s[c] >> 0) >> 4 << 12 | (255 & s[c] >> 8) >> 4 << 8 | (255 & s[c] >> 16) >> 4 << 4 | (255 & s[c] >> 24) >> 4 << 0;
                else if (o == n.ov) for (r = new Uint16Array(i * e), s = t.getData(), c = 0; u > c; ++c) r[c] = (255 & s[c] >> 0) >> 3 << 11 | (255 & s[c] >> 8) >> 3 << 6 | (255 & s[c] >> 16) >> 3 << 1 | (255 & s[c] >> 24) >> 7 << 0;
                else if (o == n.xr) for (r = new Uint8Array(i * e), s = t.getData(), c = 0; u > c; ++c) r[c] = 255 & s >> 24;
                if (h && o == n.zr) for (s = t.getData(), r = new Uint8Array(3 * i * e), c = 0; u > c; ++c) r[3 * c] = 255 & s >> 0,
                    r[3 * c + 1] = 255 & s >> 8,
                    r[3 * c + 2] = 255 & s >> 16;
                return this.Ht(r, o, i, e, a),
                    t.getData(),
                    this.Mw = t.kha(),
                    p
            },
            nt: function(t, i) {
                this.addEventListener("load", t, i)
            },
            g6: function(t) {
                this.removeEventListener("load", t)
            }
        })
    },
    M.M.QB = function() {
        var t = M.ni.prototype;
        t.Xm = function() {
            var t = M.l;
            this.gc[0] = t.createBuffer(),
                this.gc[1] = t.createBuffer(),
                this.Pm = t.createBuffer(),
                this.$w()
        },
            t.$w = function() {
                var t = M.l;
                t.bindBuffer(t.ARRAY_BUFFER, this.Pm),
                    t.bufferData(t.ARRAY_BUFFER, this.ud, t.DYNAMIC_DRAW),
                    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.gc[1]),
                    t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.ub, t.STATIC_DRAW)
            },
            t.BF = function(t) {
                var i;
                if (i = 0, 0 !== t && this.texture && this.texture.Db) {
                    var e = M.l;
                    M.yd(this.texture),
                        M.Sb(M.wh),
                        e.bindBuffer(e.ARRAY_BUFFER, this.Pm),
                    this.dirty && e.bufferData(e.ARRAY_BUFFER, this.ud, e.DYNAMIC_DRAW),
                        e.vertexAttribPointer(M.eb, 3, e.FLOAT, r, 24, 0),
                        e.vertexAttribPointer(M.nd, 4, e.UNSIGNED_BYTE, p, 24, 12),
                        e.vertexAttribPointer(M.bd, 2, e.FLOAT, r, 24, 16),
                    this.dirty && (this.dirty = r),
                        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.gc[1]),
                        M.nJ ? e.drawElements(e.TRIANGLE_STRIP, 6 * t, e.UNSIGNED_SHORT, 6 * i * this.ub.BYTES_PER_ELEMENT) : e.drawElements(e.TRIANGLES, 6 * t, e.UNSIGNED_SHORT, 6 * i * this.ub.BYTES_PER_ELEMENT),
                        M.Wc++
                }
            }
    },
    M.M.RB = function() {
        var t = M.Ma;
        t.Fb = function(t) {
            var i = this.Uc;
            M.rx || (i = this.Ds);
            var e = i[t];
            e || (e = i[t] = new M.fa, e.url = t),
                e.Fb()
        },
            t.Vc = function(t, i, e) {
                M.assert(t, M.i.aW);
                var n = this.Uc;
                M.rx || (n = this.Ds);
                var r = n[t] || n[M.aa.nm[t]];
                return r ? (i && i.call(e, r), r) : (M.aa.Yd(t) || (M.aa.GK(t) ? M.aa.load(t,
                    function() {
                        i && i.call(e)
                    }) : M.aa.Aq(t,
                    function(n, s) {
                        return n ? i ? i(n) : n: (M.aa.dg[t] = s, M.Ma.Fb(t), i && i.call(e, r), void 0)
                    })), r = n[t] = new M.fa, r.url = t, r)
            },
            t = q
    },
    M.M.aB = function() {
        var t = M.fa;
        t.M$ = function(t) {
            M.OU = t
        },
            t.nj = 2,
            t.zr = 3,
            t.yr = 4,
            t.xr = 5,
            t.OA = 6,
            t.NA = 7,
            t.pv = 8,
            t.ov = 7,
            t.AI = 9,
            t.zI = 10,
            t.FU = t.nj;
        var i = M.fa.VW = {};
        i[t.nj] = "RGBA8888",
            i[t.zr] = "RGB888",
            i[t.yr] = "RGB565",
            i[t.xr] = "A8",
            i[t.OA] = "I8",
            i[t.NA] = "AI88",
            i[t.pv] = "RGBA4444",
            i[t.ov] = "RGB5A1",
            i[t.AI] = "PVRTC4",
            i[t.zI] = "PVRTC2",
            i = M.fa.kK = {},
            i[t.nj] = 32,
            i[t.zr] = 24,
            i[t.yr] = 16,
            i[t.xr] = 8,
            i[t.OA] = 8,
            i[t.NA] = 16,
            i[t.pv] = 16,
            i[t.ov] = 16,
            i[t.AI] = 4,
            i[t.zI] = 3,
            i = M.fa.prototype,
            M.k(i, "name", i.getName),
            M.k(i, "pixelFormat", i.uP),
            M.k(i, "pixelsWidth", i.VF),
            M.k(i, "pixelsHeight", i.UF),
            M.k(i, "width", i.Bh),
            M.k(i, "height", i.Vk),
            t.JO = t.FU
    },
    M.M.bB = function() {
        var t = M.ni.prototype;
        M.k(t, "totalQuads", t.MP),
            M.k(t, "capacity", t.mP),
            M.k(t, "quads", t.wP, t.CR)
    },
    M.P8 = 51, M.S8 = 19, M.U8 = 18, M.R8 = 50, M.O8 = 34, M.M8 = 35, M.N8 = 33, M.Q8 = 49, M.T8 = 17, M.OU = r, M.B === M.ya ? M.fa = M.xa.extend({
    R: q,
    Db: r,
    Sa: q,
    url: q,
    ctor: function() {
        this.R = M.size(0, 0),
            this.Db = r,
            this.Sa = q
    },
    VF: function() {
        return this.R.width
    },
    UF: function() {
        return this.R.height
    },
    wd: function() {
        var t = M.zb();
        return M.size(this.R.width / t, this.R.height / t)
    },
    Bh: function() {
        return this.R.width / M.zb()
    },
    Vk: function() {
        return this.R.height / M.zb()
    },
    F2: E("R"),
    ld: function(t) {
        t && (this.Sa = t)
    },
    U2: E("Sa"),
    q4: E("Db"),
    Fb: function() {
        if (!this.Db) {
            if (!this.Sa) {
                var t = M.aa.Yd(this.url);
                if (!t) return;
                this.ld(t)
            }
            this.Db = p,
                t = this.Sa,
                this.R.width = t.width,
                this.R.height = t.height,
                this.dispatchEvent("load")
        }
    },
    description: function() {
        return "<cc.Texture2D | width = " + this.R.width + " height " + this.R.height + ">"
    },
    Ht: F(r),
    YP: F(r),
    Nd: F(r),
    RG: z(),
    getName: F(q),
    e3: F(1),
    W6: z(),
    f3: F(1),
    X6: z(),
    uP: F(q),
    YF: F(q),
    ru: z(),
    ai: F(r),
    T3: F(r),
    b6: z(),
    A4: u(),
    I1: z(),
    K1: z(),
    Z3: function() {
        return M.log(M.i.dW),
            r
    },
    b4: function() {
        return M.log(M.i.hW),
            r
    },
    c4: function() {
        return M.log(M.i.jW),
            r
    },
    s7: z(),
    C6: z(),
    YG: z(),
    generateMipmap: z(),
    a8: F(""),
    j1: F( - 1),
    nt: function(t, i) {
        this.addEventListener("load", t, i)
    },
    g6: function(t) {
        this.removeEventListener("load", t)
    }
}) : (M.assert(M.Vb(M.M.PB), M.i.Bd, "TexturesWebGL.js"), M.M.PB(), delete M.M.PB), M.uh.prototype.apply(M.fa.prototype), M.assert(M.Vb(M.M.aB), M.i.Bd, "TexturesPropertyDefine.js"), M.M.aB(), delete M.M.aB, M.Ma = {
    Uc: {},
    ct: {},
    FE: 0 | 1e3 * Math.random(),
    Ds: {},
    bZ: function() {
        var t,
            i = this.Ds,
            e = this.Uc;
        for (t in i) {
            var n = i[t];
            n.Fb(),
                e[t] = n
        }
        this.Ds = {}
    },
    Oba: function() {
        M.log(M.i.g8)
    },
    Lba: function() {
        M.log(M.i.e8)
    },
    description: function() {
        return "<TextureCache | Number of textures = " + this.Uc.length + ">"
    },
    Qna: function(t) {
        return M.log(M.i.l8),
            this.Cl(t)
    },
    Cl: function(t) {
        return this.Uc[t] || this.Uc[M.aa.nm[t]]
    },
    W2: function(t) {
        for (var i in this.Uc) if (this.Uc[i] == t) return i;
        return q
    },
    gY: function() {
        return this.FE++,
        "_textureKey_" + this.FE
    },
    Bt: function(t) {
        var i = this.W2(t);
        return i || (i = t instanceof HTMLImageElement ? t.src: this.gY()),
        this.ct[i] || (this.ct[i] = M.iq(t)),
            this.ct[i]
    },
    Nba: function() {
        M.log(M.i.f8)
    },
    Uka: function() {
        var t,
            i = this.Uc;
        for (t in i) i[t] && i[t].RG();
        this.Uc = {}
    },
    dla: function(t) {
        if (t) {
            var i,
                e = this.Uc;
            for (i in e) e[i] == t && (e[i].RG(), delete e[i])
        }
    },
    ela: function(t) {
        t != q && this.Uc[t] && delete this.Uc[t]
    },
    l1: function(t, i) {
        if (i instanceof M.fa) this.Uc[t] = i;
        else {
            var e = new M.fa;
            e.ld(i),
                e.Fb(),
                this.Uc[t] = e
        }
    },
    Tba: function(t, i) {
        if (M.assert(t, M.i.i8), i && this.Uc[i]) return this.Uc[i];
        var e = new M.fa;
        return e.YP(t),
            i != q && e != q ? this.Uc[i] = e: M.log(M.i.h8),
            e
    },
    eda: function() {
        var t,
            i = 0,
            e = 0,
            n = this.Uc;
        for (t in n) {
            var r = n[t];
            i++,
                r.Sa instanceof HTMLImageElement ? M.log(M.i.j8, t, r.Sa.src, r.pixelsWidth, r.pixelsHeight) : M.log(M.i.ZR, t, r.pixelsWidth, r.pixelsHeight),
                e += 4 * r.pixelsWidth * r.pixelsHeight
        }
        n = this.ct;
        for (t in n) {
            var s,
                r = n[t];
            for (s in r) {
                var h = r[s];
                i++,
                    M.log(M.i.ZR, t, h.width, h.height),
                    e += 4 * h.width * h.height
            }
        }
        M.log(M.i.k8, i, e / 1024, (e / 1048576).toFixed(2))
    },
    Mk: function() {
        this.Uc = {},
            this.ct = {},
            this.FE = 0 | 1e3 * Math.random(),
            this.Ds = {}
    }
},
    M.B === M.ya ? (T = M.Ma, T.Fb = function(t) {
        var i = this.Uc,
            e = i[t];
        e || (e = i[t] = new M.fa, e.url = t),
            e.Fb()
    },
        T.Vc = function(t, i, e) {
            M.assert(t, M.i.$V);
            var n = this.Uc,
                r = n[t] || n[M.aa.nm[t]];
            return r ? (i && i.call(e, r), r) : (r = n[t] = new M.fa, r.url = t, M.aa.Yd(t) ? r.Fb() : M.aa.GK(t) ? M.aa.load(t,
                function() {
                    i && i.call(e)
                }) : M.aa.Aq(t,
                function(n, s) {
                    return n ? i ? i(n) : n: (M.aa.dg[t] = s, M.Ma.Fb(t), i && i.call(e, r), void 0)
                }), r)
        },
        T = q) : (M.assert(M.Vb(M.M.RB), M.i.Bd, "TexturesWebGL.js"), M.M.RB(), delete M.M.RB), M.ni = M.xa.extend({
    dirty: r,
    texture: q,
    ub: q,
    gc: q,
    pd: 0,
    Rc: q,
    ud: q,
    Pm: q,
    Zf: q,
    ctor: function(t, i) {
        this.gc = [],
            M.zd(t) ? this.Ac(t, i) : t instanceof M.fa && this.Ca(t, i)
    },
    MP: E("Ua"),
    mP: E("pd"),
    Ja: E("texture"),
    bb: A("texture"),
    oR: A("dirty"),
    tG: E("dirty"),
    wP: E("Rc"),
    CR: A("Rc"),
    JX: function(t, i) {
        if (t) for (var e = 0; e < t.length; e++) this.yx(t[e], i + e)
    },
    yx: function(t, i) {
        var e = this.Rc;
        e[i] ? (e[i].J = t.J, e[i].V = t.V, e[i].U = t.U, e[i].N = t.N) : e[i] = new M.Bb(t.U, t.J, t.N, t.V, this.ud, i * M.Bb.BYTES_PER_ELEMENT)
    },
    description: function() {
        return "<cc.TextureAtlas | totalQuads =" + this.Ua + ">"
    },
    EN: function() {
        if (0 !== this.pd) for (var t = this.ub, i = this.pd, e = 0; i > e; e++) M.nJ ? (t[6 * e + 0] = 4 * e + 0, t[6 * e + 1] = 4 * e + 0, t[6 * e + 2] = 4 * e + 2, t[6 * e + 3] = 4 * e + 1, t[6 * e + 4] = 4 * e + 3, t[6 * e + 5] = 4 * e + 3) : (t[6 * e + 0] = 4 * e + 0, t[6 * e + 1] = 4 * e + 1, t[6 * e + 2] = 4 * e + 2, t[6 * e + 3] = 4 * e + 3, t[6 * e + 4] = 4 * e + 2, t[6 * e + 5] = 4 * e + 1)
    },
    Xm: function() {
        var t = M.l;
        this.gc[0] = t.createBuffer(),
            this.gc[1] = t.createBuffer(),
            this.Pm = t.createBuffer(),
            this.$w()
    },
    $w: function() {
        var t = M.l;
        t.bindBuffer(t.ARRAY_BUFFER, this.Pm),
            t.bufferData(t.ARRAY_BUFFER, this.ud, t.DYNAMIC_DRAW),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.gc[1]),
            t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.ub, t.STATIC_DRAW)
    },
    Ac: function(t, i) {
        var e = M.Ma.Vc(t);
        return e ? this.Ca(e, i) : (M.log(M.i.mW, t), r)
    },
    Ca: function(t, i) {
        M.assert(t, M.i.nW),
            this.pd = i |= 0,
            this.Ua = 0,
            this.texture = t,
            this.Rc = [],
            this.ub = new Uint16Array(6 * i);
        var e = M.Bb.BYTES_PER_ELEMENT;
        if (this.ud = new ArrayBuffer(e * i), this.Zf = new Uint8Array(this.ud), (!this.Rc || !this.ub) && i > 0) return r;
        for (var n = this.Rc, s = 0; i > s; s++) n[s] = new M.Bb(q, q, q, q, this.ud, s * e);
        return this.EN(),
            this.Xm(),
            this.dirty = p
    },
    Cu: function(t, i) {
        M.assert(t, M.i.xW),
            M.assert(i >= 0 && i < this.pd, M.i.yW),
            this.Ua = Math.max(i + 1, this.Ua),
            this.yx(t, i),
            this.dirty = p
    },
    rG: function(t, i) {
        if (M.assert(i < this.pd, M.i.qW), this.Ua++, this.Ua > this.pd) M.log(M.i.vJ);
        else {
            var e = M.Bb.BYTES_PER_ELEMENT,
                n = i * e,
                r = (this.Ua - 1 - i) * e;
            this.Rc[this.Ua - 1] = new M.Bb(q, q, q, q, this.ud, (this.Ua - 1) * e),
                this.Zf.set(this.Zf.subarray(n, n + r), n + e),
                this.yx(t, i),
                this.dirty = p
        }
    },
    Vga: function(t, i, e) {
        e = e || t.length,
            M.assert(i + e <= this.pd, M.i.rW);
        var n = M.Bb.BYTES_PER_ELEMENT;
        if (this.Ua += e, this.Ua > this.pd) M.log(M.i.vJ);
        else {
            var r,
                s = i * n,
                h = (this.Ua - 1 - i - e) * n,
                a = this.Ua - 1 - e;
            for (r = 0; e > r; r++) this.Rc[a + r] = new M.Bb(q, q, q, q, this.ud, (this.Ua - 1) * n);
            for (this.Zf.set(this.Zf.subarray(s, s + h), s + n * e), r = 0; e > r; r++) this.yx(t[r], i + r);
            this.dirty = p
        }
    },
    Uga: function(t, i) {
        if (t !== i) {
            M.assert(i >= 0 || i < this.Ua, M.i.oW),
                M.assert(t >= 0 || t < this.Ua, M.i.pW);
            var e,
                n = M.Bb.BYTES_PER_ELEMENT,
                r = this.Zf,
                s = r.subarray(t * n, n);
            t > i ? (e = i * n, r.set(r.subarray(e, e + (t - i) * n), e + n), r.set(s, e)) : (e = (t + 1) * n, r.set(r.subarray(e, e + (i - t) * n), e - n), r.set(s, i * n)),
                this.dirty = p
        }
    },
    WQ: function(t) {
        M.assert(t < this.Ua, M.i.vW);
        var i = M.Bb.BYTES_PER_ELEMENT;
        if (this.Ua--, this.Rc.length = this.Ua, t !== this.Ua) {
            var e = (t + 1) * i;
            this.Zf.set(this.Zf.subarray(e, e + (this.Ua - t) * i), e - i)
        }
        this.dirty = p
    },
    i6: function(t, i) {
        if (M.assert(t + i <= this.Ua, M.i.wW), this.Ua -= i, t !== this.Ua) {
            var e = M.Bb.BYTES_PER_ELEMENT,
                n = (t + i) * e;
            this.Zf.set(this.Zf.subarray(n, n + (this.Ua - t) * e), t * e)
        }
        this.dirty = p
    },
    Iq: function() {
        this.Ua = this.Rc.length = 0
    },
    il: A("dirty"),
    wz: function(t) {
        if (t == this.pd) return p;
        var i = M.Bb.BYTES_PER_ELEMENT,
            e = this.pd;
        this.Ua = Math.min(this.Ua, t);
        var n = this.pd = 0 | t,
            r = this.Ua;
        if (this.Rc == q) for (this.Rc = [], this.ud = new ArrayBuffer(i * n), this.Zf = new Uint8Array(this.ud), t = 0; n > t; t++) this.Rc = new M.Bb(q, q, q, q, this.ud, t * i);
        else {
            var s,
                h,
                a = this.Rc;
            if (n > e) {
                for (s = [], h = new ArrayBuffer(i * n), t = 0; r > t; t++) s[t] = new M.Bb(a[t].U, a[t].J, a[t].N, a[t].V, h, t * i);
                for (; n > t; t++) s[t] = new M.Bb(q, q, q, q, h, t * i)
            } else for (r = Math.max(r, n), s = [], h = new ArrayBuffer(i * n), t = 0; r > t; t++) s[t] = new M.Bb(a[t].U, a[t].J, a[t].N, a[t].V, h, t * i);
            this.Zf = new Uint8Array(h),
                this.Rc = s,
                this.ud = h
        }
        return this.ub == q ? this.ub = new Uint16Array(6 * n) : n > e ? (i = new Uint16Array(6 * n), i.set(this.ub, 0), this.ub = i) : this.ub = this.ub.subarray(0, 6 * n),
            this.EN(),
            this.$w(),
            this.dirty = p
    },
    SP: function(t) {
        this.Ua += t
    },
    AQ: function(t, i, e) {
        if (e === k) {
            if (e = i, i = this.Ua - t, M.assert(e + (this.Ua - t) <= this.pd, M.i.sW), 0 === i) return
        } else if (M.assert(e + i <= this.Ua, M.i.tW), M.assert(t < this.Ua, M.i.uW), t == e) return;
        var n = M.Bb.BYTES_PER_ELEMENT,
            r = t * n,
            s = i * n,
            h = this.Zf,
            a = h.subarray(r, r + s),
            o = e * n;
        t > e ? (i = e * n, h.set(h.subarray(i, i + (t - e) * n), i + s)) : (i = (t + i) * n, h.set(h.subarray(i, i + (e - t) * n), r)),
            h.set(a, o),
            this.dirty = p
    },
    eP: function(t, i) {
        for (var e = i * M.Bb.BYTES_PER_ELEMENT, n = new Uint8Array(this.ud, t * M.Bb.BYTES_PER_ELEMENT, e), r = 0; e > r; r++) n[r] = 0
    },
    wl: function() {
        this.BF(this.Ua)
    },
    rba: function() {
        var t = M.l;
        this.gc && (this.gc[0] && t.deleteBuffer(this.gc[0]), this.gc[1] && t.deleteBuffer(this.gc[1])),
        this.Pm && t.deleteBuffer(this.Pm)
    }
}), T = M.ni.prototype, M.k(T, "totalQuads", T.MP), M.k(T, "capacity", T.mP), M.k(T, "quads", T.wP, T.CR), M.ni.create = function(t, i) {
    return new M.ni(t, i)
},
    M.ni.tF = M.ni.create, M.B === M.Z && (M.assert(M.Vb(M.M.QB), M.i.Bd, "TexturesWebGL.js"), M.M.QB(), delete M.M.QB), M.assert(M.Vb(M.M.bB), M.i.Bd, "TexturesPropertyDefine.js"), M.M.bB(), delete M.M.bB, M.xk = M.n.extend({
    Hb: "Scene",
    ctor: function() {
        M.n.prototype.ctor.call(this),
            this.yj = p,
            this.Ol(.5, .5),
            this.re(M.K.Ea())
    }
}), M.xk.create = function() {
    return new M.xk
},
    M.EA = M.xk.extend({
        Yk: q,
        qd: q,
        Hb: "LoaderScene",
        ha: function() {
            var t = this,
                i = 200,
                e = t.oX = new M.Oc(M.color(251, 88, 115, 255));
            e.H(M.Wn.gF),
                t.T(e, 0);
            var n = 24,
                s = -i / 2 + 100;
            return M.KM && (M.aa.Aq(M.KM, {
                    Dl: r
                },
                function(e, n) {
                    i = n.height,
                        t.YY(n, M.Wn.dy)
                }), n = 14, s = -i / 2 - 10),
                n = t.qd = new M.Y("loading... 0%", "Arial", n),
                n.H(M.ik(M.Wn.dy, M.d(0, s))),
                n.mb(M.color(255, 255, 255)),
                e.T(this.qd, 10),
                p
        },
        YY: function(t, i) {
            var e = this.Fba = new M.fa;
            e.ld(t),
                e.Fb(),
                e = this.jba = new M.O(e),
                e.Pd(M.zb()),
                e.x = i.x,
                e.y = i.y,
                this.oX.T(e, 10)
        },
        W: function() {
            M.n.prototype.W.call(this),
                this.nu(this.NN, .3)
        },
        xb: function() {
            M.n.prototype.xb.call(this),
                this.qd.Kc("loading... 0%")
        },
        e4: function(t, i) {
            M.zd(t) && (t = [t]),
                this.q6 = t || [],
                this.sn = i
        },
        NN: function() {
            var t = this;
            t.iS(t.NN),
                M.aa.load(t.q6,
                    function(i, e, n) {
                        i = Math.min(0 | 100 * (n / e), 100),
                            t.qd.Kc("loading... " + i + "%")
                    },
                    function() {
                        t.sn && t.sn()
                    })
        }
    }), M.EA.NG = function(t, i) {
    var e = M;
    return e.Qt || (e.Qt = new M.EA, e.Qt.ha()),
        e.Qt.e4(t, i),
        M.K.mu(e.Qt),
        e.Qt
},
    M.M.DA = function() {
        var t = M.Nc.prototype;
        t.pO = z(),
            t.hS = z(),
            t.G = M.n.prototype.G
    },
    M.M.MB = function() {
        var t = M.Oc.prototype;
        t.Bx = q,
            t.uE = q,
            t.Yx = q,
            t.lw = q,
            t.wE = q,
            t.vE = q,
            t.ctor = function(t, i, e) {
                this.wE = new ArrayBuffer(32),
                    this.vE = new ArrayBuffer(16);
                var n = this.wE,
                    r = this.vE,
                    s = U.BYTES_PER_ELEMENT,
                    h = M.de.BYTES_PER_ELEMENT;
                this.Bx = [new U(0, 0, n, 0), new U(0, 0, n, s), new U(0, 0, n, 2 * s), new U(0, 0, n, 3 * s)],
                    this.uE = [M.color(0, 0, 0, 255, r, 0), M.color(0, 0, 0, 255, r, h), M.color(0, 0, 0, 255, r, 2 * h), M.color(0, 0, 0, 255, r, 3 * h)],
                    this.Yx = M.l.createBuffer(),
                    this.lw = M.l.createBuffer(),
                    M.Nc.prototype.ctor.call(this),
                    this.q = new M.Xb(M.pc, M.oc),
                    M.Oc.prototype.ha.call(this, t, i, e)
            },
            t.Vd = function() {
                this.$ = new M.eB(this)
            },
            t.re = function(t, i) {
                var e = this.Bx;
                i === k ? (e[1].x = t.width, e[2].y = t.height, e[3].x = t.width, e[3].y = t.height) : (e[1].x = t, e[2].y = i, e[3].x = t, e[3].y = i),
                    this.dC(),
                    M.Nc.prototype.re.call(this, t, i)
            },
            t.Mj = function(t) {
                var i = this.Bx;
                i[1].x = t,
                    i[3].x = t,
                    this.dC(),
                    M.Nc.prototype.Mj.call(this, t)
            },
            t.Lj = function(t) {
                var i = this.Bx;
                i[2].y = t,
                    i[3].y = t,
                    this.dC(),
                    M.Nc.prototype.Lj.call(this, t)
            },
            t.mc = function() {
                for (var t = this.ta, i = this.Wa, e = this.uE, n = 0; 4 > n; n++) e[n].r = t.r,
                    e[n].g = t.g,
                    e[n].b = t.b,
                    e[n].a = i;
                this.CK()
            },
            t.Ia = function(t) {
                t = t || M.l,
                    M.St(this),
                    M.Sb(M.Dd | M.vo),
                    t.bindBuffer(t.ARRAY_BUFFER, this.Yx),
                    t.vertexAttribPointer(M.eb, 2, t.FLOAT, r, 0, 0),
                    t.bindBuffer(t.ARRAY_BUFFER, this.lw),
                    t.vertexAttribPointer(M.nd, 4, t.UNSIGNED_BYTE, p, 0, 0),
                    M.kd(this.q.src, this.q.I),
                    t.drawArrays(t.TRIANGLE_STRIP, 0, 4)
            },
            t.dC = function() {
                var t = M.l;
                t.bindBuffer(t.ARRAY_BUFFER, this.Yx),
                    t.bufferData(t.ARRAY_BUFFER, this.wE, t.STATIC_DRAW)
            },
            t.CK = function() {
                var t = M.l;
                t.bindBuffer(t.ARRAY_BUFFER, this.lw),
                    t.bufferData(t.ARRAY_BUFFER, this.vE, t.STATIC_DRAW)
            }
    },
    M.M.NB = function() {
        var t = M.cm.prototype;
        t.Vd = function() {
            this.$ = new M.eB(this)
        },
            t.Ia = M.Oc.prototype.Ia,
            t.mc = function() {
                var t = this.Jk,
                    i = M.Ll(t);
                if (0 !== i) {
                    var e = Math.sqrt(2),
                        t = M.d(t.x / i, t.y / i);
                    this.mw && (t = M.cj(t, 1 / (Math.abs(t.x) + Math.abs(t.y)) * e));
                    var n = this.Wa / 255,
                        i = this.ta,
                        r = this.Se,
                        i = {
                            r: i.r,
                            g: i.g,
                            b: i.b,
                            a: this.Bp * n
                        },
                        n = {
                            r: r.r,
                            g: r.g,
                            b: r.b,
                            a: this.So * n
                        },
                        s = this.uE,
                        r = s[0],
                        h = s[1],
                        a = s[2],
                        s = s[3];
                    r.r = n.r + (i.r - n.r) * ((e + t.x + t.y) / (2 * e)),
                        r.g = n.g + (i.g - n.g) * ((e + t.x + t.y) / (2 * e)),
                        r.b = n.b + (i.b - n.b) * ((e + t.x + t.y) / (2 * e)),
                        r.a = n.a + (i.a - n.a) * ((e + t.x + t.y) / (2 * e)),
                        h.r = n.r + (i.r - n.r) * ((e - t.x + t.y) / (2 * e)),
                        h.g = n.g + (i.g - n.g) * ((e - t.x + t.y) / (2 * e)),
                        h.b = n.b + (i.b - n.b) * ((e - t.x + t.y) / (2 * e)),
                        h.a = n.a + (i.a - n.a) * ((e - t.x + t.y) / (2 * e)),
                        a.r = n.r + (i.r - n.r) * ((e + t.x - t.y) / (2 * e)),
                        a.g = n.g + (i.g - n.g) * ((e + t.x - t.y) / (2 * e)),
                        a.b = n.b + (i.b - n.b) * ((e + t.x - t.y) / (2 * e)),
                        a.a = n.a + (i.a - n.a) * ((e + t.x - t.y) / (2 * e)),
                        s.r = n.r + (i.r - n.r) * ((e - t.x - t.y) / (2 * e)),
                        s.g = n.g + (i.g - n.g) * ((e - t.x - t.y) / (2 * e)),
                        s.b = n.b + (i.b - n.b) * ((e - t.x - t.y) / (2 * e)),
                        s.a = n.a + (i.a - n.a) * ((e - t.x - t.y) / (2 * e)),
                        this.CK()
                }
            }
    },
    M.M.YA = function() {
        var t = M.Oc.prototype;
        M.k(t, "width", t.Bh, t.Mj),
            M.k(t, "height", t.Vk, t.Lj)
    },
    M.M.ZA = function() {
        var t = M.cm.prototype;
        M.k(t, "startColor", t.uy, t.jf),
            M.k(t, "endColor", t.qy, t.gf),
            M.k(t, "startOpacity", t.E3, t.p7),
            M.k(t, "endOpacity", t.M2, t.O6),
            M.k(t, "vector", t.K3, t.y7)
    },
    M.Nc = M.n.extend({
        Zk: r,
        om: q,
        Bo: q,
        Hb: "Layer",
        ctor: function() {
            var t = M.n.prototype;
            t.ctor.call(this),
                this.yj = p,
                t.Ol.call(this, .5, .5),
                t.re.call(this, M.Eu)
        },
        ha: function() {
            return this.yj = p,
                this.Ol(.5, .5),
                this.re(M.Eu),
                this.cascadeColor = this.cascadeOpacity = r,
                p
        },
        pO: q,
        hS: q,
        ew: q,
        $ga: E("Zk"),
        G: q
    }), M.Nc.create = function() {
    return new M.Nc
},
M.B === M.ya) {
    var ha = M.Nc.prototype;
    ha.pO = function() {
        if (!this.Zk) {
            this.Zk = this.ge = M.ia.oe = p,
            !this.Bo && this.ew && (this.Bo = new M.UH(this, this.ew)),
                this.Lk = this;
            for (var t = this.u, i = 0, e = t.length; e > i; i++) t[i].Qs(this);
            this.om || (this.om = new M.GS, this.om.Ha = this)
        }
    },
        ha.hS = function() {
            if (this.Zk) {
                M.ia.oe = p,
                    this.Zk = r,
                    this.ge = p,
                    this.Lk = q;
                for (var t = this.u, i = 0, e = t.length; e > i; i++) t[i].Qs(q)
            }
        },
        ha.T = function(t, i, e) {
            M.n.prototype.T.call(this, t, i, e),
            t.Ha == this && this.Zk && t.Qs(this)
        },
        ha.ew = function() {
            if (this.ge) {
                var t = this.u,
                    i = this.om,
                    e = this.EC();
                e.width |= 0,
                    e.height |= 0;
                var n = i.fe;
                i.$Q(e.width, e.height),
                    n.translate(0 - e.x, e.height + e.y);
                var s = M.Rp(this.vd);
                for (n.transform(s.a, s.s, s.b, s.z, s.P * M.view.pa, -s.Q * M.view.Ta), s = i.ny(), i.H(s.x + e.x, s.y + e.y), this.Lc(), M.ia.Jp(this.ka), i = 0, e = t.length; e > i; i++) t[i].G(n);
                M.ia.sx(n, this.ka),
                    this.ge = r
            }
        },
        ha.G = function(t) {
            if (this.Zk) {
                t = t || M.l;
                var i = this.u.length;
                this.zc && 0 !== i && (this.transform(t), this.Bo && M.ia.nc(this.Bo), this.om.G(t))
            } else M.n.prototype.G.call(this, t)
        },
        ha.EC = function() {
            var t = q;
            if (!this.u || 0 === this.u.length) return M.rect(0, 0, 10, 10);
            for (var i = this.u, e = 0; e < i.length; e++) {
                var n = i[e];
                n && n.zc && (t ? (n = n.rs()) && (t = M.sz(t, n)) : t = n.rs())
            }
            return t
        },
        ha = q
} else M.assert(M.Vb(M.M.DA), M.i.Bd, "CCLayerWebGL.js"),
    M.M.DA(),
    delete M.M.DA;
M.Oc = M.Nc.extend({
    q: q,
    Hb: "LayerColor",
    Ef: E("q"),
    vca: function(t, i) {
        this.width = t,
            this.height = i
    },
    uca: A("width"),
    tca: A("height"),
    Jf: z(),
    gg: F(r),
    mb: function(t) {
        M.Nc.prototype.mb.call(this, t),
            this.mc()
    },
    pb: function(t) {
        M.Nc.prototype.pb.call(this, t),
            this.mc()
    },
    Gg: "source",
    ctor: q,
    ha: function(t, i, e) {
        M.B !== M.ya && (this.shaderProgram = M.be.Bc(M.xv));
        var n = M.K.Ea();
        return t = t || M.color(0, 0, 0, 255),
            i = i === k ? n.width: i,
            e = e === k ? n.height: e,
            n = this.ta,
            n.r = t.r,
            n.g = t.g,
            n.b = t.b,
            n = this.ke,
            n.r = t.r,
            n.g = t.g,
            n.b = t.b,
            this.Rg = this.Wa = t.a,
            t = M.Oc.prototype,
            t.re.call(this, i, e),
            t.mc.call(this),
            p
    },
    Od: function(t, i) {
        var e = this.q;
        i === k ? (e.src = t.src, e.I = t.I) : (e.src = t, e.I = i),
        M.B === M.ya && (this.Gg = M.aM(e))
    },
    Mj: q,
    Lj: q,
    mc: q,
    Zc: function(t) {
        M.Nc.prototype.Zc.call(this, t),
            this.mc()
    },
    Mc: function(t) {
        M.Nc.prototype.Mc.call(this, t),
            this.mc()
    },
    Ia: q
}),
    M.Oc.create = function(t, i, e) {
        return new M.Oc(t, i, e)
    },
    M.B === M.ya ? (T = M.Oc.prototype, T.ctor = function(t, i, e) {
        M.Nc.prototype.ctor.call(this),
            this.q = new M.Xb(M.pc, M.oc),
            M.Oc.prototype.ha.call(this, t, i, e)
    },
        T.Vd = function() {
            this.$ = new M.YI(this)
        },
        T.Mj = function(t) {
            M.n.prototype.Mj.call(this, t)
        },
        T.Lj = function(t) {
            M.n.prototype.Lj.call(this, t)
        },
        T.mc = function() {
            var t = this.$;
            if (t && t.he) {
                var i = this.ta;
                t.he.r = i.r,
                    t.he.g = i.g,
                    t.he.b = i.b,
                    t.he.a = this.Wa / 255
            }
        },
        T.Ia = function(t) {
            t = t || M.l;
            var i = M.view,
                e = this.ta;
            t.fillStyle = "rgba(" + (0 | e.r) + "," + (0 | e.g) + "," + (0 | e.b) + "," + this.Wa / 255 + ")",
                t.fillRect(0, 0, this.width * i.pa, -this.height * i.Ta),
                M.Wc++
        },
        T.ew = function() {
            if (this.ge) {
                var t = this.om,
                    i = this.u,
                    e = i.length,
                    n = this.EC();
                n.width |= 0,
                    n.height |= 0;
                var s = t.fe;
                t.$Q(n.width, n.height);
                var h = t.ny(),
                    a = this.ua;
                if (this.yj) s.translate(0 - n.x + a.x, n.height + n.y - a.y),
                    t.H(h.x + n.x - a.x, h.y + n.y - a.y);
                else {
                    var o = this.ny(),
                        c = a.x - o.x,
                        a = a.y - o.y;
                    s.translate(0 - n.x + c, n.height + n.y - a),
                        t.H(h.x + n.x - c, h.y + n.y - a)
                }
                if (t = M.Rp(this.vd), s.transform(t.a, t.s, t.b, t.z, t.P * M.view.pa, -t.Q * M.view.Ta), M.ia.Jp(this.ka), e > 0) {
                    for (this.Lc(), t = 0; e > t && (n = i[t], 0 > n.Ib); t++) n.G(s);
                    for (this.$ && M.ia.nc(this.$); e > t; t++) i[t].G(s)
                } else this.$ && M.ia.nc(this.$);
                M.ia.sx(s, this.ka),
                    this.ge = r
            }
        },
        T.G = function(t) {
            this.Zk ? (t = t || M.l, this.zc && (this.transform(t), this.Bo && M.ia.nc(this.Bo), this.om.G(t))) : M.n.prototype.G.call(this, t)
        },
        T.EC = function() {
            var t = M.rect(0, 0, this.R.width, this.R.height),
                i = this.CQ(),
                t = M.QG(t, this.CQ());
            if (!this.u || 0 === this.u.length) return t;
            for (var e = this.u, n = 0; n < e.length; n++) {
                var r = e[n];
                r && r.zc && (r = r.rs(i), t = M.sz(t, r))
            }
            return t
        },
        T = q) : (M.assert(M.Vb(M.M.MB), M.i.Bd, "CCLayerWebGL.js"), M.M.MB(), delete M.M.MB),
    M.assert(M.Vb(M.M.YA), M.i.Bd, "CCLayerPropertyDefine.js"),
    M.M.YA(),
    delete M.M.YA,
    M.cm = M.Oc.extend({
        Se: q,
        Bp: 255,
        So: 255,
        Jk: q,
        mw: r,
        Hb: "LayerGradient",
        ctor: function(t, i, e) {
            M.Oc.prototype.ctor.call(this),
                this.Se = M.color(0, 0, 0, 255),
                this.Jk = M.d(0, -1),
                this.So = this.Bp = 255,
                M.cm.prototype.ha.call(this, t, i, e)
        },
        Vd: function() {
            this.$ = new M.iI(this)
        },
        ha: function(t, i, e) {
            t = t || M.color(0, 0, 0, 255),
                i = i || M.color(0, 0, 0, 255),
                e = e || M.d(0, -1);
            var n = this.Se;
            return this.Bp = t.a,
                n.r = i.r,
                n.g = i.g,
                n.b = i.b,
                this.So = i.a,
                this.Jk = e,
                this.mw = p,
                M.Oc.prototype.ha.call(this, M.color(t.r, t.g, t.b, 255)),
                M.cm.prototype.mc.call(this),
                p
        },
        re: function(t, i) {
            M.Oc.prototype.re.call(this, t, i),
                this.mc()
        },
        Mj: function(t) {
            M.Oc.prototype.Mj.call(this, t),
                this.mc()
        },
        Lj: function(t) {
            M.Oc.prototype.Lj.call(this, t),
                this.mc()
        },
        uy: E("ke"),
        jf: A("color"),
        gf: function(t) {
            this.Se = t,
                this.mc()
        },
        qy: E("Se"),
        p7: function(t) {
            this.Bp = t,
                this.mc()
        },
        E3: E("Bp"),
        O6: function(t) {
            this.So = t,
                this.mc()
        },
        M2: E("So"),
        y7: function(t) {
            this.Jk.x = t.x,
                this.Jk.y = t.y,
                this.mc()
        },
        K3: function() {
            return M.d(this.Jk.x, this.Jk.y)
        },
        bha: E("mw"),
        Hla: function(t) {
            this.mw = t,
                this.mc()
        },
        Uaa: q,
        mc: q
    }),
    M.cm.create = function(t, i, e) {
        return new M.cm(t, i, e)
    },
    M.B === M.ya ? (T = M.cm.prototype, T.mc = function() {
        var t = this.Jk,
            i = .5 * this.width,
            e = .5 * this.height,
            n = this.$;
        n.Mi.x = i * -t.x + i,
            n.Mi.y = e * t.y - e,
            n.zw.x = i * t.x + i,
            n.zw.y = e * -t.y - e,
            t = this.ta,
            i = this.Se,
            e = this.So,
            n.PN = "rgba(" + Math.round(t.r) + "," + Math.round(t.g) + "," + Math.round(t.b) + "," + this.Bp.toFixed(4) + ")",
            n.NL = "rgba(" + Math.round(i.r) + "," + Math.round(i.g) + "," + Math.round(i.b) + "," + e.toFixed(4) + ")"
    },
        T = q) : (M.assert(M.Vb(M.M.NB), M.i.Bd, "CCLayerWebGL.js"), M.M.NB(), delete M.M.NB),
    M.assert(M.Vb(M.M.ZA), M.i.Bd, "CCLayerPropertyDefine.js"),
    M.M.ZA(),
    delete M.M.ZA,
    M.nv = M.Nc.extend({
        zm: 0,
        Ae: q,
        Hb: "LayerMultiplex",
        ctor: function(t) {
            M.Nc.prototype.ctor.call(this),
                t instanceof Array ? M.nv.prototype.$P.call(this, t) : M.nv.prototype.$P.call(this, Array.prototype.slice.call(arguments))
        },
        $P: function(t) {
            return 0 < t.length && t[t.length - 1] == q && M.log(M.i.cU),
                this.Ae = t,
                this.zm = 0,
                this.T(this.Ae[this.zm]),
                p
        },
        Nna: function(t) {
            t >= this.Ae.length ? M.log(M.i.dU) : (this.removeChild(this.Ae[this.zm], p), this.zm = t, this.T(this.Ae[t]))
        },
        Ona: function(t) {
            t >= this.Ae.length ? M.log(M.i.eU) : (this.removeChild(this.Ae[this.zm], p), this.Ae[this.zm] = q, this.zm = t, this.T(this.Ae[t]))
        },
        Mba: function(t) {
            t ? this.Ae.push(t) : M.log(M.i.bU)
        }
    }),
    M.nv.create = function() {
        return new M.nv(Array.prototype.slice.call(arguments))
    },
    M.M.OB = function() {
        var t = M.O.prototype;
        t.tE = function(t) {
            this.La(p),
                this.yb(t.$h(), t.De, t.oq()),
                this.dispatchEvent("load")
        },
            t.Jf = function(t) {
                this.kb !== t && (this.kb = t, this.Bu())
            },
            t.Mc = function(t) {
                M.n.prototype.Mc.call(this, t),
                    this.Bu()
            },
            t.ctor = function(t, i, e) {
                M.n.prototype.ctor.call(this),
                    this.kl = r,
                    this.Jb = M.d(0, 0),
                    this.Rh = M.d(0, 0),
                    this.q = {
                        src: M.pc,
                        I: M.oc
                    },
                    this.za = M.rect(0, 0, 0, 0),
                    this.Pb = new M.Bb,
                    this.up = M.l.createBuffer(),
                    this.Aa = this.Id = p,
                    this.KN(t, i, e)
            },
            t.Vd = function() {
                this.$ = new M.xJ(this)
            },
            t.Od = function(t, i) {
                var e = this.q;
                i === k ? (e.src = t.src, e.I = t.I) : (e.src = t, e.I = i)
            },
            t.ha = function() {
                if (0 < arguments.length) return this.Ac(arguments[0], arguments[1]);
                M.n.prototype.ha.call(this),
                    this.dirty = this.Lh = r,
                    this.q.src = M.pc,
                    this.q.I = M.oc,
                    this.texture = q,
                    this.Aa = p,
                    this.hc = this.ic = r,
                    this.anchorY = this.anchorX = .5,
                    this.Jb.x = 0,
                    this.Jb.y = 0,
                    this.yi = r;
                var t = {
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 255
                };
                return this.Pb.J.A = t,
                    this.Pb.V.A = t,
                    this.Pb.U.A = t,
                    this.Pb.N.A = t,
                    this.Id = p,
                    this.yb(M.rect(0, 0, 0, 0), r, M.size(0, 0)),
                    p
            },
            t.Ca = function(t, i, e) {
                if (M.assert(0 != arguments.length, M.i.IV), e = e || r, !M.n.prototype.ha.call(this)) return r;
                this.ba = q,
                    this.dirty = this.Lh = r,
                    this.kb = p,
                    this.q.src = M.pc,
                    this.q.I = M.oc,
                    this.hc = this.ic = r,
                    this.anchorY = this.anchorX = .5,
                    this.Jb.x = 0,
                    this.Jb.y = 0,
                    this.yi = r;
                var n = M.color(255, 255, 255, 255),
                    s = this.Pb;
                return s.J.A = n,
                    s.V.A = n,
                    s.U.A = n,
                    s.N.A = n,
                    this.Aa = n = t.Db,
                    n ? (i || (i = M.rect(0, 0, t.width, t.height)), t && t.url && (e ? (n = i.x + i.height, s = i.y + i.width) : (n = i.x + i.width, s = i.y + i.height), n > t.width && M.error(M.i.fB, t.url), s > t.height && M.error(M.i.dB, t.url)), this.texture = t, this.yb(i, e), this.batchNode = q, this.Id = p) : (this.Sc = e || r, i && (n = this.za, n.x = i.x, n.y = i.y, n.width = i.width, n.height = i.height), t.addEventListener("load", this.Nx, this), p)
            },
            t.Nx = function(t) {
                if (!this.Aa) {
                    this.Aa = p;
                    var i = this.za;
                    i ? M.MD(i) && (i.width = t.width, i.height = t.height) : i = M.rect(0, 0, t.width, t.height),
                        this.texture = t,
                        this.yb(i, this.Sc),
                        this.batchNode = this.ba,
                        this.Id = p,
                        this.dispatchEvent("load")
                }
            },
            t.yb = function(t, i, e) {
                this.Sc = i || r,
                    this.re(e || t),
                    this.oH(t),
                    this.BN(t),
                    t = this.Rh,
                this.hc && (t.x = -t.x),
                this.ic && (t.y = -t.y);
                var n = this.za;
                if (this.Jb.x = t.x + (this.R.width - n.width) / 2, this.Jb.y = t.y + (this.R.height - n.height) / 2, this.ba) this.dirty = p;
                else {
                    t = this.Jb.x,
                        i = this.Jb.y,
                        e = t + n.width;
                    var n = i + n.height,
                        s = this.Pb;
                    s.J.j = {
                        x: t,
                        y: i,
                        e: 0
                    },
                        s.V.j = {
                            x: e,
                            y: i,
                            e: 0
                        },
                        s.U.j = {
                            x: t,
                            y: n,
                            e: 0
                        },
                        s.N.j = {
                            x: e,
                            y: n,
                            e: 0
                        },
                        this.Id = p
                }
            },
            t.se = function() {
                if (this.dirty) {
                    var t = this.Pb,
                        i = this.Ha;
                    if (!this.zc || i && i != this.ba && i.kl) t.V.j = t.U.j = t.N.j = t.J.j = {
                        x: 0,
                        y: 0,
                        e: 0
                    },
                        this.kl = p;
                    else {
                        this.kl = r;
                        var e = this.en = i && i != this.ba ? M.mn(this.Hl(), i.en) : this.Hl(),
                            n = this.za,
                            i = this.Jb.x,
                            s = this.Jb.y,
                            h = i + n.width,
                            a = s + n.height,
                            o = e.P,
                            c = e.Q,
                            u = e.a,
                            f = e.b,
                            l = e.z,
                            d = -e.s,
                            e = i * u - s * d + o,
                            n = i * f + s * l + c,
                            g = h * u - s * d + o,
                            s = h * f + s * l + c,
                            b = h * u - a * d + o,
                            h = h * f + a * l + c,
                            o = i * u - a * d + o,
                            i = i * f + a * l + c,
                            a = this.Pp;
                        M.zv || (e |= 0, n |= 0, g |= 0, s |= 0, b |= 0, h |= 0, o |= 0, i |= 0),
                            t.J.j = {
                                x: e,
                                y: n,
                                e: a
                            },
                            t.V.j = {
                                x: g,
                                y: s,
                                e: a
                            },
                            t.U.j = {
                                x: o,
                                y: i,
                                e: a
                            },
                            t.N.j = {
                                x: b,
                                y: h,
                                e: a
                            }
                    }
                    this.textureAtlas.Cu(t, this.atlasIndex),
                        this.dirty = this.Lh = r
                }
                this.yi && this.Nf(this.u, M.n.qf.se),
                M.so && (t = [M.d(this.Pb.J.j.x, this.Pb.J.j.y), M.d(this.Pb.V.j.x, this.Pb.V.j.y), M.d(this.Pb.N.j.x, this.Pb.N.j.y), M.d(this.Pb.U.j.x, this.Pb.U.j.y)], M.ye.qe(t, 4, p))
            },
            t.T = function(t, i, e) {
                if (M.assert(t, M.i.zV), i == q && (i = t.Ib), e == q && (e = t.tag), this.ba) {
                    if (! (t instanceof M.O)) return M.log(M.i.xV),
                        void 0;
                    t.texture.me !== this.textureAtlas.texture.me && M.log(M.i.yV),
                        this.ba.appendChild(t),
                    this.le || this.kE()
                }
                M.n.prototype.T.call(this, t, i, e),
                    this.yi = p
            },
            t.pb = function(t) {
                M.n.prototype.pb.call(this, t),
                    this.Bu()
            },
            t.mb = function(t) {
                M.n.prototype.mb.call(this, t),
                    this.Bu()
            },
            t.Zc = function(t) {
                M.n.prototype.Zc.call(this, t),
                    this.Bu()
            },
            t.Ql = function(t) {
                var i = this;
                M.zd(t) && (t = M.Sl.Zj(t), M.assert(t, M.i.RV)),
                    i.La(p);
                var e = t.Yj();
                i.Rh.x = e.x,
                    i.Rh.y = e.y,
                    e = t.Ja(),
                t.Aa || (i.Aa = r, t.addEventListener("load",
                    function(t) {
                        i.Aa = p;
                        var e = t.Ja();
                        e != i.F && (i.texture = e),
                            i.yb(t.$h(), t.De, t.oq()),
                            i.dispatchEvent("load")
                    },
                    i)),
                e != i.F && (i.texture = e),
                    i.Sc = t.De,
                    i.yb(t.$h(), i.Sc, t.oq())
            },
            t.kQ = function(t) {
                return M.SQ(t.$h(), this.za) && t.Ja().getName() == this.F.getName() && M.qz(t.Yj(), this.Rh)
            },
            t.Pl = function(t) {
                if (this.ba = t) this.en = {
                    a: 1,
                    b: 0,
                    s: 0,
                    z: 1,
                    P: 0,
                    Q: 0
                },
                    this.textureAtlas = this.ba.textureAtlas;
                else {
                    this.atlasIndex = M.O.zA,
                        this.textureAtlas = q,
                        this.dirty = this.Lh = r,
                        t = this.Jb.x;
                    var i = this.Jb.y,
                        e = t + this.za.width,
                        n = i + this.za.height,
                        s = this.Pb;
                    s.J.j = {
                        x: t,
                        y: i,
                        e: 0
                    },
                        s.V.j = {
                            x: e,
                            y: i,
                            e: 0
                        },
                        s.U.j = {
                            x: t,
                            y: n,
                            e: 0
                        },
                        s.N.j = {
                            x: e,
                            y: n,
                            e: 0
                        },
                        this.Id = p
                }
            },
            t.bb = function(t) {
                var i = this;
                if (t && M.zd(t)) {
                    t = M.Ma.Vc(t),
                        i.bb(t);
                    var e = t.wd();
                    i.yb(M.rect(0, 0, e.width, e.height)),
                    t.Db || t.addEventListener("load",
                        function() {
                            var e = t.wd();
                            i.yb(M.rect(0, 0, e.width, e.height))
                        },
                        this)
                } else M.assert(!t || t instanceof M.fa, M.i.TV),
                    i.ba && i.ba.texture != t ? M.log(M.i.SV) : (i.shaderProgram = t ? M.be.Bc(M.oj) : M.be.Bc(M.xv), !i.ba && i.F != t && (i.F = t, i.cg()))
            },
            t.Ia = function() {
                if (this.Aa) {
                    var t = M.l,
                        i = this.F;
                    i ? i.Db && (this.la.sb(), this.la.lf(), M.kd(this.q.src, this.q.I), M.zy(0, i), M.Sb(M.wh), t.bindBuffer(t.ARRAY_BUFFER, this.up), this.Id && (t.bufferData(t.ARRAY_BUFFER, this.Pb.Tp, t.DYNAMIC_DRAW), this.Id = r), t.vertexAttribPointer(0, 3, t.FLOAT, r, 24, 0), t.vertexAttribPointer(1, 4, t.UNSIGNED_BYTE, p, 24, 12), t.vertexAttribPointer(2, 2, t.FLOAT, r, 24, 16), t.drawArrays(t.TRIANGLE_STRIP, 0, 4)) : (this.la.sb(), this.la.lf(), M.kd(this.q.src, this.q.I), M.yd(q), M.Sb(M.Dd | M.vo), t.bindBuffer(t.ARRAY_BUFFER, this.up), this.Id && (M.l.bufferData(M.l.ARRAY_BUFFER, this.Pb.Tp, M.l.STATIC_DRAW), this.Id = r), t.vertexAttribPointer(M.eb, 3, t.FLOAT, r, 24, 0), t.vertexAttribPointer(M.nd, 4, t.UNSIGNED_BYTE, p, 24, 12), t.drawArrays(t.TRIANGLE_STRIP, 0, 4)),
                        M.Wc++,
                    (0 !== M.so || this.IN) && (1 === M.so || this.IN ? (t = this.Pb, t = [M.d(t.U.j.x, t.U.j.y), M.d(t.J.j.x, t.J.j.y), M.d(t.V.j.x, t.V.j.y), M.d(t.N.j.x, t.N.j.y)], M.ye.qe(t, 4, p)) : 2 === M.so && (t = this.LP(), i = this.l3(), t = [M.d(i.x, i.y), M.d(i.x + t.width, i.y), M.d(i.x + t.width, i.y + t.height), M.d(i.x, i.y + t.height)], M.ye.qe(t, 4, p)))
                }
            },
            delete t
    },
    M.M.$A = function() {
        var t = M.O.prototype;
        M.k(t, "opacityModifyRGB", t.gg, t.Jf),
            M.k(t, "opacity", t.bh, t.pb),
            M.k(t, "color", t.fg, t.mb),
            M.k(t, "flippedX", t.m4, t.Cz),
            M.k(t, "flippedY", t.n4, t.eH),
            M.k(t, "offsetX", t.CY),
            M.k(t, "offsetY", t.DY),
            M.k(t, "texture", t.Ja, t.bb),
            M.k(t, "textureRectRotated", t.t4),
            M.k(t, "batchNode", t.MF, t.Pl),
            M.k(t, "quad", t.s3)
    },
    M.Cn = function(t, i, e, n) {
        n = n || M.Wb("canvas"),
            e = e || M.rect(0, 0, t.width, t.height);
        var r = n.getContext("2d");
        return n.width != e.width || n.height != e.height ? (n.width = e.width, n.height = e.height) : r.globalCompositeOperation = "source-over",
            r.fillStyle = "rgb(" + (0 | i.r) + "," + (0 | i.g) + "," + (0 | i.b) + ")",
            r.fillRect(0, 0, e.width, e.height),
            r.globalCompositeOperation = "multiply",
            r.drawImage(t, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height),
            r.globalCompositeOperation = "destination-atop",
            r.drawImage(t, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height),
            n
    },
    M.yl = function(t, i, e, n, r) {
        n || (n = M.rect(0, 0, t.width, t.height)),
            t = e.r / 255;
        var s = e.g / 255;
        e = e.b / 255;
        var h,
            a = Math.min(n.width, i[0].width),
            o = Math.min(n.height, i[0].height);
        r ? (h = r.getContext("2d"), h.clearRect(0, 0, a, o)) : (r = M.Wb("canvas"), r.width = a, r.height = o, h = r.getContext("2d")),
            h.save(),
            h.globalCompositeOperation = "lighter";
        var c = h.globalAlpha;
        return t > 0 && (h.globalAlpha = t * c, h.drawImage(i[0], n.x, n.y, a, o, 0, 0, a, o)),
        s > 0 && (h.globalAlpha = s * c, h.drawImage(i[1], n.x, n.y, a, o, 0, 0, a, o)),
        e > 0 && (h.globalAlpha = e * c, h.drawImage(i[2], n.x, n.y, a, o, 0, 0, a, o)),
        1 > t + s + e && (h.globalAlpha = c, h.drawImage(i[3], n.x, n.y, a, o, 0, 0, a, o)),
            h.restore(),
            r
    },
    M.iq = function(t) {
        function i() {
            var i = M.iq,
                n = t.width,
                r = t.height;
            e[0].width = n,
                e[0].height = r,
                e[1].width = n,
                e[1].height = r,
                e[2].width = n,
                e[2].height = r,
                e[3].width = n,
                e[3].height = r,
                i.canvas.width = n,
                i.canvas.height = r;
            var s = i.canvas.getContext("2d");
            s.drawImage(t, 0, 0),
                i.wH.width = n,
                i.wH.height = r;
            for (var s = s.getImageData(0, 0, n, r).data, h = 0; 4 > h; h++) {
                var a = e[h].getContext("2d");
                a.getImageData(0, 0, n, r).data,
                    i.YR.drawImage(t, 0, 0);
                for (var o = i.YR.getImageData(0, 0, n, r), c = o.data, u = 0; u < s.length; u += 4) c[u] = 0 === h ? s[u] : 0,
                    c[u + 1] = 1 === h ? s[u + 1] : 0,
                    c[u + 2] = 2 === h ? s[u + 2] : 0,
                    c[u + 3] = s[u + 3];
                a.putImageData(o, 0, 0)
            }
            t.onload = q
        }
        if (t.wO) return t.wO;
        var e = [M.Wb("canvas"), M.Wb("canvas"), M.Wb("canvas"), M.Wb("canvas")];
        try {
            i()
        } catch(n) {
            t.onload = i
        }
        return t.wO = e
    },
    M.iq.canvas = M.Wb("canvas"),
    M.iq.wH = M.Wb("canvas"),
    M.iq.YR = M.iq.wH.getContext("2d"),
    M.vF = function(t, i) {
        if (!t) return q;
        if (!i) return t;
        var e = M.Wb("canvas");
        e.width = i.width,
            e.height = i.height;
        var n = e.getContext("2d");
        return n.translate(e.width / 2, e.height / 2),
            n.rotate( - 1.5707963267948966),
            n.drawImage(t, i.x, i.y, i.height, i.width, -i.height / 2, -i.width / 2, i.height, i.width),
            e
    },
    M.aM = function(t) {
        return t ? t.src == M.SRC_ALPHA && t.I == M.ONE || t.src == M.ONE && t.I == M.ONE ? "lighter": t.src == M.ZERO && t.I == M.SRC_ALPHA ? "destination-in": t.src == M.ZERO && t.I == M.ONE_MINUS_SRC_ALPHA ? "destination-out": "source": "source"
    },
    M.O = M.n.extend({
        dirty: r,
        atlasIndex: 0,
        textureAtlas: q,
        ba: q,
        Lh: q,
        yi: q,
        kl: r,
        en: q,
        q: q,
        F: q,
        za: q,
        Sc: r,
        Jb: q,
        Rh: q,
        kb: r,
        hc: r,
        ic: r,
        Aa: r,
        ax: q,
        Hb: "Sprite",
        PM: M.color.WHITE,
        wu: E("Aa"),
        nt: function(t, i) {
            this.addEventListener("load", t, i)
        },
        tG: E("dirty"),
        oR: A("dirty"),
        t4: E("Sc"),
        kq: E("atlasIndex"),
        ZG: A("atlasIndex"),
        LP: function() {
            return M.rect(this.za)
        },
        vy: E("textureAtlas"),
        lH: A("textureAtlas"),
        l3: function() {
            return M.d(this.Jb)
        },
        CY: function() {
            return this.Jb.x
        },
        DY: function() {
            return this.Jb.y
        },
        Ef: E("q"),
        Xi: function(t) {
            M.assert(t, M.i.FV),
            t.Aa || (this.Aa = r, t.addEventListener("load", this.tE, this));
            var i = M.B === M.ya ? r: t.De,
                i = this.Ca(t.Ja(), t.$h(), i);
            return this.Ql(t),
                i
        },
        tE: q,
        Sga: function(t) {
            M.assert(t, M.i.GV);
            var i = M.Sl.Zj(t);
            return M.assert(i, t + M.i.HV),
                this.Xi(i)
        },
        doa: function(t) {
            this.textureAtlas = t.textureAtlas,
                this.ba = t
        },
        oH: function(t) {
            var i = this.za;
            i.x = t.x,
                i.y = t.y,
                i.width = t.width,
                i.height = t.height
        },
        Lc: function() {
            if (this.le) {
                var t,
                    i,
                    e,
                    n = this.u,
                    s = n.length;
                for (t = 1; s > t; t++) {
                    for (e = n[t], i = t - 1; i >= 0;) {
                        if (e.Ib < n[i].Ib) n[i + 1] = n[i];
                        else {
                            if (! (e.Ib === n[i].Ib && e.arrivalOrder < n[i].arrivalOrder)) break;
                            n[i + 1] = n[i]
                        }
                        i--
                    }
                    n[i + 1] = e
                }
                this.ba && this.Nf(n, M.n.qf.Lc),
                    this.le = r
            }
        },
        Lq: function(t, i) {
            M.assert(t, M.i.MV),
                -1 === this.u.indexOf(t) ? M.log(M.i.LV) : i !== t.zIndex && (this.ba && !this.le && (this.kE(), this.ba.XQ(p)), M.n.prototype.Lq.call(this, t, i))
        },
        removeChild: function(t, i) {
            this.ba && this.ba.On(t),
                M.n.prototype.removeChild.call(this, t, i)
        },
        Oz: function(t) {
            M.n.prototype.Oz.call(this, t),
                this.cH(p)
        },
        Hf: function(t) {
            var i = this.u,
                e = this.ba;
            if (e && i != q) for (var n = 0, s = i.length; s > n; n++) e.On(i[n]);
            M.n.prototype.Hf.call(this, t),
                this.yi = r
        },
        cH: function(t) {
            this.dirty = this.Lh = t,
                t = this.u;
            for (var i, e = t ? t.length: 0, n = 0; e > n; n++) i = t[n],
            i instanceof M.O && i.cH(p)
        },
        La: function(t) {
            M.n.prototype.La.call(this),
            !t && this.ba && !this.Lh && (this.yi ? this.cH(p) : this.dirty = this.Lh = p)
        },
        Fy: function(t) {
            this.ba ? M.log(M.i.DV) : M.n.prototype.Fy.call(this, t)
        },
        Cz: function(t) {
            this.hc != t && (this.hc = t, this.yb(this.za, this.Sc, this.R), this.La(p))
        },
        eH: function(t) {
            this.ic != t && (this.ic = t, this.yb(this.za, this.Sc, this.R), this.La(p))
        },
        m4: E("hc"),
        n4: E("ic"),
        Jf: q,
        gg: E("kb"),
        Mc: q,
        Rla: function(t, i) {
            M.assert(t, M.i.QV);
            var e = M.Zx.kP(t);
            e ? (e = e.je[i]) ? this.Ql(e.Zj()) : M.log(M.i.PV) : M.log(M.i.OV)
        },
        MF: E("ba"),
        kE: function() {
            if (!this.le) {
                this.le = p;
                for (var t = this.Ha; t && t != this.ba;) t.kE(),
                    t = t.parent
            }
        },
        Ja: E("F"),
        Pb: q,
        up: q,
        Id: r,
        as: r,
        Gg: "source",
        vc: q,
        fL: q,
        ctor: q,
        KN: function(t, i, e) {
            t === k ? M.O.prototype.ha.call(this) : M.zd(t) ? "#" === t[0] ? (t = M.Sl.Zj(t.substr(1, t.length - 1)), this.Xi(t)) : M.O.prototype.ha.call(this, t, i) : M.wq(t) && (t instanceof M.fa ? this.Ca(t, i, e) : t instanceof M.ue ? this.Xi(t) : (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) && (i = new M.fa, i.ld(t), i.Fb(), this.Ca(i)))
        },
        s3: E("Pb"),
        Od: q,
        ha: q,
        Ac: function(t, i) {
            M.assert(t, M.i.EV);
            var e = M.Ma.Cl(t);
            if (e) {
                if (!i) {
                    var n = e.wd();
                    i = M.rect(0, 0, n.width, n.height)
                }
                return this.Ca(e, i)
            }
            return e = M.Ma.Vc(t),
                this.Ca(e, i || M.rect(0, 0, e.R.width, e.R.height))
        },
        Ca: q,
        Nx: q,
        yb: q,
        se: q,
        T: q,
        Bu: function() {
            var t = this.ta,
                i = this.Wa,
                t = {
                    r: t.r,
                    g: t.g,
                    b: t.b,
                    a: i
                };
            this.kb && (t.r *= i / 255, t.g *= i / 255, t.b *= i / 255),
                i = this.Pb,
                i.J.A = t,
                i.V.A = t,
                i.U.A = t,
                i.N.A = t,
            this.ba && (this.atlasIndex != M.O.zA ? this.textureAtlas.Cu(i, this.atlasIndex) : this.dirty = p),
                this.Id = p
        },
        pb: q,
        mb: q,
        Zc: q,
        Ql: q,
        L6: function(t) {
            M.log(M.i.NV),
                this.Ql(t)
        },
        kQ: q,
        H1: function() {
            return new M.ue(this.F, M.ju(this.za), this.Sc, M.M5(this.Rh), M.I7(this.R))
        },
        Pl: q,
        bb: q,
        cg: function() {
            this.ba ? M.log(M.i.wV) : this.F && this.F.ai() ? (this.q.src = M.pc, this.q.I = M.oc, this.opacityModifyRGB = p) : (this.q.src = M.SRC_ALPHA, this.q.I = M.ONE_MINUS_SRC_ALPHA, this.opacityModifyRGB = r)
        },
        ve: function() {
            var t,
                i = this.F,
                e = this.$.Pi;
            i && e.Wl && this.vc && (t = i.Sa) && (this.as = p, t instanceof HTMLCanvasElement && !this.Sc && !this.ax && this.vc.Sa != t ? M.Cn(this.vc.Sa, this.ta, e, t) : (t = M.Cn(this.vc.Sa, this.ta, e), i = new M.fa, i.ld(t), i.Fb(), this.texture = i))
        },
        BN: function(t) {
            t = M.ju(t);
            var i = this.ba ? this.textureAtlas.texture: this.F;
            if (i) {
                var e,
                    n = i.pixelsWidth,
                    r = i.pixelsHeight,
                    s = this.Pb;
                this.Sc ? (M.fo ? (i = (2 * t.x + 1) / (2 * n), n = i + (2 * t.height - 2) / (2 * n), e = (2 * t.y + 1) / (2 * r), t = e + (2 * t.width - 2) / (2 * r)) : (i = t.x / n, n = (t.x + t.height) / n, e = t.y / r, t = (t.y + t.width) / r), this.hc && (r = e, e = t, t = r), this.ic && (r = i, i = n, n = r), s.J.p.ma = i, s.J.p.na = e, s.V.p.ma = i, s.V.p.na = t, s.U.p.ma = n, s.U.p.na = e, s.N.p.ma = n, s.N.p.na = t) : (M.fo ? (i = (2 * t.x + 1) / (2 * n), n = i + (2 * t.width - 2) / (2 * n), e = (2 * t.y + 1) / (2 * r), t = e + (2 * t.height - 2) / (2 * r)) : (i = t.x / n, n = (t.x + t.width) / n, e = t.y / r, t = (t.y + t.height) / r), this.hc && (r = i, i = n, n = r), this.ic && (r = e, e = t, t = r), s.J.p.ma = i, s.J.p.na = t, s.V.p.ma = n, s.V.p.na = t, s.U.p.ma = i, s.U.p.na = e, s.N.p.ma = n, s.N.p.na = e),
                    this.Id = p
            }
        }
    }),
    M.O.create = function(t, i, e) {
        return new M.O(t, i, e)
    },
    M.O.tF = M.O.create,
    M.O.Kca = M.O.create,
    M.O.Jca = M.O.create,
    M.O.zA = -1,
    M.B === M.ya ? (T = M.O.prototype, T.tE = function(t) {
        this.La(p),
            this.yb(t.$h(), t.De, t.oq()),
            t = this.color,
        (255 !== t.r || 255 !== t.g || 255 !== t.b) && this.ve(),
            this.dispatchEvent("load")
    },
        T.Jf = function(t) {
            this.kb !== t && (this.kb = t, this.La(p))
        },
        T.Mc = function(t) {
            M.n.prototype.Mc.call(this, t),
                this.Tg()
        },
        T.ctor = function(t, i, e) {
            M.n.prototype.ctor.call(this),
                this.kl = r,
                this.Jb = M.d(0, 0),
                this.Rh = M.d(0, 0),
                this.q = {
                    src: M.pc,
                    I: M.oc
                },
                this.za = M.rect(0, 0, 0, 0),
                this.ax = r,
                this.Aa = p,
                this.fL = M.size(0, 0),
                this.KN(t, i, e)
        },
        T.Vd = function() {
            this.$ = new M.wJ(this)
        },
        T.Od = function(t, i) {
            var e = this.q;
            i === k ? (e.src = t.src, e.I = t.I) : (e.src = t, e.I = i),
            M.B === M.ya && (this.Gg = M.aM(e))
        },
        T.ha = function() {
            return 0 < arguments.length ? this.Ac(arguments[0], arguments[1]) : (M.n.prototype.ha.call(this), this.dirty = this.Lh = r, this.q.src = M.pc, this.q.I = M.oc, this.texture = q, this.Aa = p, this.hc = this.ic = r, this.anchorY = this.anchorX = .5, this.Jb.x = 0, this.Jb.y = 0, this.yi = r, this.yb(M.rect(0, 0, 0, 0), r, M.size(0, 0)), p)
        },
        T.Ca = function(t, i, e) {
            if (M.assert(0 != arguments.length, M.i.MS), (e = e || r) && t.Db) {
                var n = t.Sa,
                    n = M.vF(n, i),
                    s = new M.fa;
                s.ld(n),
                    s.Fb(),
                    t = s,
                    this.za = M.rect(0, 0, i.width, i.height)
            }
            return M.n.prototype.ha.call(this) ? (this.ba = q, this.dirty = this.Lh = r, this.kb = p, this.q.src = M.pc, this.q.I = M.oc, this.hc = this.ic = r, this.anchorY = this.anchorX = .5, this.Jb.x = 0, this.Jb.y = 0, this.yi = r, this.Aa = n = t.Db, n ? (i || (i = M.rect(0, 0, t.width, t.height)), t && t.url && (n = i.y + i.height, i.x + i.width > t.width && M.error(M.i.fB, t.url), n > t.height && M.error(M.i.dB, t.url)), this.texture = this.vc = t, this.yb(i, e), this.batchNode = q, p) : (this.Sc = e, i && (this.za.x = i.x, this.za.y = i.y, this.za.width = i.width, this.za.height = i.height), this.texture && this.texture.removeEventListener("load", this), t.addEventListener("load", this.Nx, this), this.texture = t, p)) : r
        },
        T.Nx = function(t) {
            if (!this.Aa) {
                this.Aa = p;
                var i = this.za;
                i ? M.MD(i) && (i.width = t.width, i.height = t.height) : i = M.rect(0, 0, t.width, t.height),
                    this.texture = this.vc = t,
                    this.yb(i, this.Sc),
                    t = this.ta,
                (255 != t.r || 255 != t.g || 255 != t.b) && this.ve(),
                    this.batchNode = this.ba,
                    this.dispatchEvent("load")
            }
        },
        T.yb = function(t, i, e) {
            this.Sc = i || r,
                this.re(e || t),
                this.oH(t),
                i = this.$.Pi,
                e = M.zb(),
                i.Jq = i.x = 0 | t.x * e,
                i.Kq = i.y = 0 | t.y * e,
                i.width = 0 | t.width * e,
                i.height = 0 | t.height * e,
                i.Wl = !(0 === i.width || 0 === i.height || 0 > i.x || 0 > i.y),
                t = this.Rh,
            this.hc && (t.x = -t.x),
            this.ic && (t.y = -t.y),
                this.Jb.x = t.x + (this.R.width - this.za.width) / 2,
                this.Jb.y = t.y + (this.R.height - this.za.height) / 2,
            this.ba && (this.dirty = p)
        },
        T.se = function() {
            if (this.dirty) {
                var t = this.Ha; ! this.zc || t && t != this.ba && t.kl ? this.kl = p: (this.kl = r, this.en = t && t != this.ba ? M.mn(this.Hl(), t.en) : this.Hl()),
                    this.dirty = this.Lh = r
            }
            this.yi && this.Nf(this.u, M.n.qf.se)
        },
        T.T = function(t, i, e) {
            M.assert(t, M.i.KS),
            i == q && (i = t.Ib),
            e == q && (e = t.tag),
                M.n.prototype.T.call(this, t, i, e),
                this.yi = p
        },
        T.pb = function(t) {
            M.n.prototype.pb.call(this, t),
                this.Tg()
        },
        T.mb = function(t) {
            var i = this.color;
            this.PM = i,
            i.r === t.r && i.g === t.g && i.b === t.b || M.n.prototype.mb.call(this, t)
        },
        T.Zc = function(t) {
            M.n.prototype.Zc.call(this, t),
                t = this.PM;
            var i = this.ta;
            t.r === i.r && t.g === i.g && t.b === i.b || (this.ve(), this.Tg())
        },
        T.Ql = function(t) {
            var i = this;
            M.zd(t) && (t = M.Sl.Zj(t), M.assert(t, M.i.PS)),
                i.La(p);
            var e = t.Yj();
            i.Rh.x = e.x,
                i.Rh.y = e.y,
                i.Sc = t.De;
            var e = t.Ja(),
                n = t.Aa;
            n || (i.Aa = r, t.addEventListener("load",
                function(t) {
                    i.Aa = p;
                    var e = t.Ja();
                    e != i.F && (i.texture = e),
                        i.yb(t.$h(), t.De, t.oq()),
                        i.dispatchEvent("load")
                },
                i)),
            e != i.F && (i.texture = e),
            i.Sc && (i.vc = e),
                i.yb(t.$h(), i.Sc, t.oq()),
                i.as = r,
                i.$.Pi.Jq = i.$.Pi.x,
                i.$.Pi.Kq = i.$.Pi.y,
            n && (t = i.color, (255 !== t.r || 255 !== t.g || 255 !== t.b) && i.ve())
        },
        T.kQ = function(t) {
            return t.Ja() != this.F ? r: M.SQ(t.$h(), this.za)
        },
        T.Pl = function(t) { (this.ba = t) ? (this.en = {
            a: 1,
            b: 0,
            s: 0,
            z: 1,
            P: 0,
            Q: 0
        },
            this.textureAtlas = this.ba.textureAtlas) : (this.atlasIndex = M.O.zA, this.textureAtlas = q, this.dirty = this.Lh = r)
        },
        T.bb = function(t) {
            var i = this;
            if (t && M.zd(t)) {
                t = M.Ma.Vc(t),
                    i.bb(t);
                var e = t.wd();
                i.yb(M.rect(0, 0, e.width, e.height)),
                t.Db || t.addEventListener("load",
                    function() {
                        var e = t.wd();
                        i.yb(M.rect(0, 0, e.width, e.height))
                    },
                    this)
            } else M.assert(!t || t instanceof M.fa, M.i.QS),
            i.F != t && (t && t.Sa instanceof HTMLImageElement && (i.vc = t), i.F = t)
        },
    M.qa.Gx || (T.ve = function() {
        var t,
            i = this.F,
            e = this.$.Pi;
        i && e.Wl && this.vc && (t = i.Sa) && (i = M.Ma.Bt(this.vc.Sa)) && (this.as = p, t instanceof HTMLCanvasElement && !this.Sc && !this.ax ? M.yl(t, i, this.ta, e, t) : (t = M.yl(t, i, this.ta, e), i = new M.fa, i.ld(t), i.Fb(), this.texture = i))
    }), T = q) : (M.assert(M.Vb(M.M.OB), M.i.Bd, "SpritesWebGL.js"), M.M.OB(), delete M.M.OB),
    M.uh.prototype.apply(M.O.prototype),
    M.assert(M.Vb(M.M.$A), M.i.Bd, "SpritesPropertyDefine.js"),
    M.M.$A(),
    delete M.M.$A,
    M.jA = 29,
    M.Pe = M.n.extend({
        textureAtlas: q,
        q: q,
        Ud: q,
        Hb: "SpriteBatchNode",
        F0: function(t, i, e) {
            if (M.assert(t, M.i.qV), !(t instanceof M.O)) return M.log(M.i.pV),
                q;
            t.atlasIndex = i;
            var n = 0,
                s = this.Ud;
            if (s && 0 < s.length) for (var h = 0; h < s.length; h++) {
                var a = s[h];
                a && a.atlasIndex >= i && ++n
            }
            return s.splice(n, 0, t),
                M.n.prototype.T.call(this, t, i, e),
                this.XQ(r),
                this
        },
        vy: E("textureAtlas"),
        lH: function(t) {
            t != this.textureAtlas && (this.textureAtlas = t)
        },
        H2: E("Ud"),
        Ac: function(t, i) {
            var e = M.Ma.Cl(t);
            return e || (e = M.Ma.Vc(t)),
                this.Ca(e, i)
        },
        Tg: function() {
            this.ge = p
        },
        ha: function(t, i) {
            var e = M.Ma.Cl(t);
            return e || (e = M.Ma.Vc(t)),
                this.Ca(e, i)
        },
        Iy: function() {
            var t = this.textureAtlas.capacity,
                i = Math.floor(4 * (t + 1) / 3);
            M.log(M.i.rV, t, i),
            this.textureAtlas.wz(i) || M.log(M.i.sV)
        },
        e6: function(t, i) {
            this.removeChild(this.u[t], i)
        },
        RQ: function(t, i) {
            var e = t.children;
            if (e && 0 < e.length) for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r && 0 > r.zIndex && (i = this.RQ(r, i))
            }
            if (!t == this && (t.atlasIndex = i, i++), e && 0 < e.length) for (n = 0; n < e.length; n++)(r = e[n]) && 0 <= r.zIndex && (i = this.RQ(r, i));
            return i
        },
        iG: function(t) {
            var i = t.children;
            return i && 0 != i.length ? this.iG(i[i.length - 1]) : t.atlasIndex
        },
        j5: function(t) {
            var i = t.children;
            return i && 0 != i.length ? this.j5(i[i.length - 1]) : t.atlasIndex
        },
        Z0: function(t, i) {
            var e = t.parent,
                n = e.children,
                r = n.indexOf(t),
                s = q;
            return r > 0 && r < M.cK && (s = n[r - 1]),
                e == this ? 0 == r ? 0: this.iG(s) + 1: 0 == r ? 0 > i ? e.atlasIndex: e.atlasIndex + 1: 0 > s.zIndex && 0 > i || 0 <= s.zIndex && i >= 0 ? this.iG(s) + 1: e.atlasIndex + 1
        },
        XQ: A("le"),
        Od: function(t, i) {
            this.q = i === k ? t: {
                src: t,
                I: i
            }
        },
        Ef: E("q"),
        Lq: function(t, i) {
            M.assert(t, M.i.vV),
                -1 === this.u.indexOf(t) ? M.log(M.i.uV) : i !== t.zIndex && (M.n.prototype.Lq.call(this, t, i), this.La())
        },
        removeChild: function(t, i) {
            t != q && ( - 1 === this.u.indexOf(t) ? M.log(M.i.tV) : (this.On(t), M.n.prototype.removeChild.call(this, t, i)))
        },
        Qi: q,
        Hba: r,
        vc: q,
        ctor: q,
        cs: function(t, i) {
            M.n.prototype.ctor.call(this);
            var e;
            i = i || M.jA,
                M.zd(t) ? (e = M.Ma.Cl(t)) || (e = M.Ma.Vc(t)) : t instanceof M.fa && (e = t),
            e && this.Ca(e, i)
        },
        ds: function(t, i) {
            M.n.prototype.ctor.call(this);
            var e;
            i = i || M.jA,
                M.zd(t) ? (e = M.Ma.Cl(t)) || (e = M.Ma.Vc(t)) : t instanceof M.fa && (e = t),
            e && this.Ca(e, i)
        },
        Vd: function() {
            M.B === M.Z && (this.$ = new M.mB(this))
        },
        oS: q,
        r0: function(t, i) {
            M.assert(t, M.i.RS),
                t instanceof M.O ? (t.batchNode = this, t.atlasIndex = i, t.dirty = p, t.se()) : M.log(M.i.fA)
        },
        s0: function(t, i) {
            if (M.assert(t, M.i.fA), t instanceof M.O) {
                for (var e = this.textureAtlas.capacity; i >= e || e == this.textureAtlas.totalQuads;) this.Iy();
                t.batchNode = this,
                    t.atlasIndex = i,
                    t.dirty = p,
                    t.se()
            } else M.log(M.i.fA)
        },
        ol: function(t, i) {
            var e = this.Ud,
                n = this.textureAtlas,
                r = n.quads,
                s = e[t],
                h = M.eK(r[t]);
            e[i].atlasIndex = t,
                e[t] = e[i],
                n.Cu(r[i], t),
                e[i] = s,
                n.Cu(h, i)
        },
        Ny: q,
        dZ: function(t, i) {
            M.assert(t, M.i.OS),
                t instanceof M.O ? (t.batchNode = this, t.atlasIndex = i, t.dirty = p, t.se(), t.Qs(this), this.u.splice(i, 0, t)) : M.log(M.i.NS)
        },
        eZ: function(t, i) {
            if (M.assert(t, M.i.KV), t instanceof M.O) {
                for (var e = this.textureAtlas; i >= e.capacity || e.capacity === e.totalQuads;) this.Iy();
                t.batchNode = this,
                    t.atlasIndex = i,
                    e.rG(t.quad, i),
                    t.dirty = p,
                    t.se()
            } else M.log(M.i.JV)
        },
        bO: function(t, i) {
            var e = 0,
                n = t.children;
            n && (e = n.length);
            var s = 0;
            if (0 === e) s = t.atlasIndex,
                t.atlasIndex = i,
                t.arrivalOrder = 0,
            s != i && this.ol(s, i),
                i++;
            else {
                for (s = p, 0 <= n[0].zIndex && (s = t.atlasIndex, t.atlasIndex = i, t.arrivalOrder = 0, s != i && this.ol(s, i), i++, s = r), e = 0; e < n.length; e++) {
                    var h = n[e];
                    s && 0 <= h.zIndex && (s = t.atlasIndex, t.atlasIndex = i, t.arrivalOrder = 0, s != i && this.ol(s, i), i++, s = r),
                        i = this.bO(h, i)
                }
                s && (s = t.atlasIndex, t.atlasIndex = i, t.arrivalOrder = 0, s != i && this.ol(s, i), i++)
            }
            return i
        },
        cg: function() {
            this.textureAtlas.texture.ai() || (this.q.src = M.SRC_ALPHA, this.q.I = M.ONE_MINUS_SRC_ALPHA)
        },
        Ca: q,
        UC: function(t) {
            return this.u = [],
                this.Ud = [],
                this.q = new M.Xb(M.pc, M.oc),
                this.Qi = this.vc = t,
                p
        },
        VC: function(t, i) {
            return this.u = [],
                this.Ud = [],
                this.q = new M.Xb(M.pc, M.oc),
                i = i || M.jA,
                this.textureAtlas = new M.ni,
                this.textureAtlas.Ca(t, i),
                this.cg(),
                this.shaderProgram = M.be.Bc(M.oj),
                p
        },
        qG: function(t, i) {
            t.batchNode = this,
                t.atlasIndex = i,
                t.dirty = p;
            var e = this.textureAtlas;
            e.totalQuads >= e.capacity && this.Iy(),
                e.rG(t.quad, i),
                this.Ud.splice(i, 0, t);
            var e = i + 1,
                n = this.Ud;
            if (n && 0 < n.length) for (; e < n.length; e++) n[e].atlasIndex++;
            var r,
                n = t.children;
            if (n) for (e = 0, l = n.length || 0; l > e; e++)(r = n[e]) && this.qG(r, this.Z0(r, r.zIndex))
        },
        appendChild: q,
        eX: function(t) {
            this.le = p,
                t.batchNode = this,
                t.dirty = p,
                this.Ud.push(t),
                t.atlasIndex = this.Ud.length - 1,
                t = t.children;
            for (var i = 0, e = t.length || 0; e > i; i++) this.appendChild(t[i])
        },
        fX: function(t) {
            this.le = p,
                t.batchNode = this,
                t.dirty = p,
                this.Ud.push(t);
            var i = this.Ud.length - 1;
            t.atlasIndex = i;
            var e = this.textureAtlas;
            for (e.totalQuads == e.capacity && this.Iy(), e.rG(t.quad, i), t = t.children, i = 0, e = t.length || 0; e > i; i++) this.appendChild(t[i])
        },
        On: q,
        c_: function(t) {
            t.batchNode = q;
            var i = this.Ud,
                e = i.indexOf(t);
            if ( - 1 != e) {
                i.splice(e, 1);
                for (var n = i.length; n > e; ++e) i[e].atlasIndex--
            }
            if (t = t.children) for (i = 0, e = t.length || 0; e > i; i++) t[i] && this.On(t[i])
        },
        d_: function(t) {
            this.textureAtlas.WQ(t.atlasIndex),
                t.batchNode = q;
            var i = this.Ud,
                e = i.indexOf(t);
            if ( - 1 != e) {
                i.splice(e, 1);
                for (var n = i.length; n > e; ++e) i[e].atlasIndex--
            }
            if (t = t.children) for (i = 0, e = t.length || 0; e > i; i++) t[i] && this.On(t[i])

        },
        Ja: q,
        ss: E("Qi"),
        NC: function() {
            return this.textureAtlas.texture
        },
        bb: q,
        lE: function(t) {
            this.Qi = t;
            for (var i = this.u, e = 0; e < i.length; e++) i[e].texture = t
        },
        mE: function(t) {
            this.textureAtlas.texture = t,
                this.cg()
        },
        G: q,
        hn: function(t) {
            var i = t || M.l;
            if (this.zc) {
                i.save(),
                    this.transform(t);
                var e = this.u;
                if (e) for (this.Lc(), t = 0; t < e.length; t++) e[t] && e[t].G(i);
                i.restore()
            }
        },
        jt: function(t) {
            if (t = t || M.l, this.zc) {
                var i = M.ob;
                i.stack.push(i.top),
                    M.hg(this.Kb, i.top),
                    i.top = this.Kb,
                    this.Lc(),
                    this.transform(t),
                this.$ && M.ia.nc(this.$),
                    i.top = i.stack.pop()
            }
        },
        T: q,
        VB: function(t, i, e) {
            M.assert(t != q, M.i.LS),
                t instanceof M.O ? (i = i == q ? t.zIndex: i, e = e == q ? t.tag: e, M.n.prototype.T.call(this, t, i, e), this.appendChild(t), this.La()) : M.log(M.i.JS)
        },
        $W: function(t, i, e) {
            M.assert(t != q, M.i.CV),
                t instanceof M.O ? t.texture != this.textureAtlas.texture ? M.log(M.i.BV) : (i = i == q ? t.zIndex: i, e = e == q ? t.tag: e, M.n.prototype.T.call(this, t, i, e), this.appendChild(t), this.La()) : M.log(M.i.AV)
        },
        Hf: q,
        a_: function(t) {
            var i = this.Ud;
            if (i && 0 < i.length) for (var e = 0, n = i.length; n > e; e++) i[e] && (i[e].batchNode = q);
            M.n.prototype.Hf.call(this, t),
                this.Ud.length = 0
        },
        b_: function(t) {
            var i = this.Ud;
            if (i && 0 < i.length) for (var e = 0, n = i.length; n > e; e++) i[e] && (i[e].batchNode = q);
            M.n.prototype.Hf.call(this, t),
                this.Ud.length = 0,
                this.textureAtlas.Iq()
        },
        Lc: q,
        W_: function() {
            if (this.le) {
                var t,
                    i,
                    e = 0,
                    n = this.u,
                    s = n.length;
                for (t = 1; s > t; t++) {
                    var h = n[t],
                        e = t - 1;
                    for (i = n[e]; e >= 0 && (h.Ib < i.Ib || h.Ib == i.Ib && h.arrivalOrder < i.arrivalOrder);) n[e + 1] = i,
                        e -= 1,
                        i = n[e];
                    n[e + 1] = h
                }
                0 < n.length && this.Nf(n, M.n.qf.Lc),
                    this.le = r
            }
        },
        X_: function() {
            if (this.le) {
                var t,
                    i,
                    e = this.u,
                    n = 0,
                    s = e.length;
                for (t = 1; s > t; t++) {
                    var h = e[t],
                        n = t - 1;
                    for (i = e[n]; n >= 0 && (h.Ib < i.Ib || h.Ib == i.Ib && h.arrivalOrder < i.arrivalOrder);) e[n + 1] = i,
                        n -= 1,
                        i = e[n];
                    e[n + 1] = h
                }
                if (0 < e.length) for (this.Nf(e, M.n.qf.Lc), t = n = 0; t < e.length; t++) n = this.bO(e[t], n);
                this.le = r
            }
        },
        Ia: q,
        uj: function() {
            0 !== this.textureAtlas.totalQuads && (this.la.sb(), this.la.lf(), this.Nf(this.u, M.n.qf.se), M.kd(this.q.src, this.q.I), this.textureAtlas.wl())
        }
    }),
    T = M.Pe.prototype,
    M.B === M.Z ? (T.ctor = T.ds, T.oS = T.s0, T.Ny = T.eZ, T.Ca = T.VC, T.appendChild = T.fX, T.On = T.d_, T.Ja = T.NC, T.bb = T.mE, T.G = T.jt, T.T = T.$W, T.Hf = T.b_, T.Lc = T.X_, T.Ia = T.uj) : (T.ctor = T.cs, T.oS = T.r0, T.Ny = T.dZ, T.Ca = T.UC, T.appendChild = T.eX, T.On = T.c_, T.Ja = T.ss, T.bb = T.lE, T.G = T.hn, T.Hf = T.a_, T.T = T.VB, T.Lc = T.W_, T.Ia = M.n.prototype.Ia),
    M.k(T, "texture", T.Ja, T.bb),
    M.k(T, "descendants", T.H2),
    M.Pe.create = function(t, i) {
        return new M.Pe(t, i)
    },
    M.Pe.tF = M.Pe.create,
    M.GS = M.O.extend({
        Td: q,
        fe: q,
        ctor: function() {
            M.O.prototype.ctor.call(this);
            var t = document.createElement("canvas");
            t.width = t.height = 10,
                this.Td = t,
                this.fe = t.getContext("2d");
            var i = new M.fa;
            i.ld(t),
                i.Fb(),
                this.bb(i)
        },
        lea: E("fe"),
        kea: E("Td"),
        $Q: function(t, i) {
            i === k && (i = t.height, t = t.width);
            var e = this.Td;
            e.width = t,
                e.height = i,
                this.Ja().Fb(),
                this.yb(M.rect(0, 0, t, i), r)
        }
    }),
    M.wg = M.xa.extend({
        zp: q,
        ie: 0,
        Op: q,
        ctor: function(t, i, e) {
            this.zp = t || q,
                this.ie = i || 0,
                this.Op = e || q
        },
        m: function() {
            var t = new M.wg;
            return t.Xi(this.zp.m(), this.ie, this.Op),
                t
        },
        iy: function() {
            return M.m(this)
        },
        copy: function() {
            var t = new M.wg;
            return t.Xi(this.zp.m(), this.ie, this.Op),
                t
        },
        Xi: function(t, i, e) {
            return this.zp = t,
                this.ie = i,
                this.Op = e,
                p
        },
        Zj: E("zp"),
        Ql: A("zp"),
        zea: E("ie"),
        Ola: A("ie"),
        Aga: E("Op"),
        vna: A("Op")
    }),
    M.wg.create = function(t, i, e) {
        return new M.wg(t, i, e)
    },
    M.jj = M.xa.extend({
        je: q,
        Aj: 0,
        Tm: r,
        t: 0,
        ie: 0,
        Si: 0,
        ctor: function(t, i, e) {
            if (this.je = [], t === k) this.dQ(q, 0);
            else {
                var n = t[0];
                n && (n instanceof M.ue ? this.dQ(t, i, e) : n instanceof M.wg && this.Jy(t, i, e))
            }
        },
        Xea: E("je"),
        $la: A("je"),
        cF: function(t) {
            var i = new M.wg;
            i.Xi(t, 1, q),
                this.je.push(i),
                this.Si++
        },
        Qba: function(t) {
            t = M.Ma.Vc(t);
            var i = M.rect(0, 0, 0, 0);
            i.width = t.width,
                i.height = t.height,
                t = new M.ue(t, i),
                this.cF(t)
        },
        Rba: function(t, i) {
            var e = new M.ue(t, i);
            this.cF(e)
        },
        Jy: function(t, i, e) {
            for (M.ot(t, M.wg), this.ie = i, this.Aj = e === k ? 1: e, this.Si = 0, i = this.je, e = i.length = 0; e < t.length; e++) {
                var n = t[e];
                i.push(n),
                    this.Si += n.ie
            }
            return p
        },
        m: function() {
            var t = new M.jj;
            return t.Jy(this.KK(), this.ie, this.Aj),
                t.Kz(this.Tm),
                t
        },
        iy: function() {
            var t = new M.jj;
            return t.Jy(this.KK(), this.ie, this.Aj),
                t.Kz(this.Tm),
                t
        },
        KK: function() {
            for (var t = [], i = 0; i < this.je.length; i++) t.push(this.je[i].m());
            return t
        },
        copy: function() {
            return this.iy(q)
        },
        nfa: E("Aj"),
        mma: A("Aj"),
        Kz: A("Tm"),
        Sfa: E("Tm"),
        mq: function() {
            return this.Si * this.ie
        },
        yea: E("ie"),
        Nla: A("ie"),
        tga: E("Si"),
        dQ: function(t, i, e) {
            if (M.ot(t, M.ue), this.Aj = e === k ? 1: e, this.ie = i || 0, this.Si = 0, i = this.je, i.length = 0, t) {
                for (e = 0; e < t.length; e++) {
                    var n = t[e],
                        r = new M.wg;
                    r.Xi(n, 1, q),
                        i.push(r)
                }
                this.Si += t.length
            }
            return p
        },
        xz: z(),
        fj: z()
    }),
    M.jj.create = function(t, i, e) {
        return new M.jj(t, i, e)
    },
    M.jj.Hca = M.jj.create,
    M.Zx = {
        zo: {},
        iO: function(t, i) {
            this.zo[i] = t
        },
        Vka: function(t) {
            t && this.zo[t] && delete this.zo[t]
        },
        kP: function(t) {
            return this.zo[t] ? this.zo[t] : q
        },
        ZW: function(t, i) {
            var e = t.animations;
            if (e) {
                var n = 1,
                    r = t.properties;
                if (r) for (var n = r.format != q ? parseInt(r.format) : n, r = r.spritesheets, s = M.Sl, h = M.path, a = 0; a < r.length; a++) s.E0(h.Xp(i, r[a]));
                switch (n) {
                    case 1:
                        this.PZ(e);
                        break;
                    case 2:
                        this.QZ(e);
                        break;
                    default:
                        M.log(M.i.Q0)
                }
            } else M.log(M.i.P0)
        },
        Jba: function(t) {
            M.assert(t, M.i.Y0);
            var i = M.aa.Yd(t);
            i ? this.ZW(i, t) : M.log(M.i.X0)
        },
        PZ: function(t) {
            var i,
                e = M.Sl;
            for (i in t) {
                var n = t[i],
                    r = n.frames,
                    n = parseFloat(n.delay) || 0,
                    s = q;
                if (r) {
                    for (var s = [], h = 0; h < r.length; h++) {
                        var a = e.Zj(r[h]);
                        if (a) {
                            var o = new M.wg;
                            o.Xi(a, 1, q),
                                s.push(o)
                        } else M.log(M.i.S0, i, r[h])
                    }
                    0 === s.length ? M.log(M.i.T0, i) : (s.length != r.length && M.log(M.i.U0, i), s = new M.jj(s, n, 1), M.Zx.iO(s, i))
                } else M.log(M.i.R0, i)
            }
        },
        QZ: function(t) {
            var i,
                e = M.Sl;
            for (i in t) {
                var n = t[i],
                    s = parseInt(n.loops),
                    s = n.loop ? M.Ar: isNaN(s) ? 1: s,
                    h = n.restoreOriginalFrame && n.restoreOriginalFrame == p ? p: r,
                    a = n.frames;
                if (a) {
                    for (var o = [], c = 0; c < a.length; c++) {
                        var u = a[c],
                            f = u.spriteframe,
                            l = e.Zj(f);
                        if (l) {
                            var f = parseFloat(u.delayUnits) || 0,
                                u = u.notification,
                                d = new M.wg;
                            d.Xi(l, f, u),
                                o.push(d)
                        } else M.log(M.i.W0, i, f)
                    }
                    n = parseFloat(n.delayPerUnit) || 0,
                        a = new M.jj,
                        a.Jy(o, n, s),
                        a.Kz(h),
                        M.Zx.iO(a, i)
                } else M.log(M.i.V0, i)
            }
        },
        Mk: function() {
            this.zo = {}
        }
    },
    M.ue = M.xa.extend({
        Ga: q,
        bl: q,
        Ve: q,
        De: r,
        za: q,
        Pg: q,
        Yf: q,
        F: q,
        Dp: "",
        Aa: r,
        ctor: function(t, i, e, n, s) {
            this.Ga = M.d(0, 0),
                this.Pg = M.d(0, 0),
                this.bl = M.size(0, 0),
                this.De = r,
                this.Yf = M.size(0, 0),
                this.Dp = "",
                this.F = q,
                this.Aa = r,
            t !== k && i !== k && (e === k || n === k || s === k ? this.Ca(t, i) : this.Ca(t, i, e, n, s))
        },
        wu: E("Aa"),
        nt: function(t, i) {
            this.addEventListener("load", t, i)
        },
        t3: function() {
            var t = this.Ve;
            return M.rect(t.x, t.y, t.width, t.height)
        },
        Kma: function(t) {
            this.Ve || (this.Ve = M.rect(0, 0, 0, 0)),
                this.Ve.x = t.x,
                this.Ve.y = t.y,
                this.Ve.width = t.width,
                this.Ve.height = t.height,
                this.za = M.Nl(t)
        },
        mha: E("De"),
        Mma: A("De"),
        $h: function() {
            var t = this.za;
            return M.rect(t.x, t.y, t.width, t.height)
        },
        DR: function(t) {
            this.za || (this.za = M.rect(0, 0, 0, 0)),
                this.za.x = t.x,
                this.za.y = t.y,
                this.za.width = t.width,
                this.za.height = t.height,
                this.Ve = M.ju(this.za)
        },
        k3: function() {
            return M.d(this.Pg)
        },
        vma: function(t) {
            this.Pg.x = t.x,
                this.Pg.y = t.y,
                M.xD(this.Pg, this.Ga)
        },
        Cfa: function() {
            return M.size(this.Yf)
        },
        yma: function(t) {
            this.Yf.width = t.width,
                this.Yf.height = t.height
        },
        oq: function() {
            return M.size(this.bl)
        },
        xma: function(t) {
            this.bl.width = t.width,
                this.bl.height = t.height
        },
        Ja: function() {
            if (this.F) return this.F;
            if ("" !== this.Dp) {
                var t = M.Ma.Vc(this.Dp);
                return t && (this.Aa = t.Db),
                    t
            }
            return q
        },
        bb: function(t) {
            if (this.F != t) {
                var i = t.Db;
                this.Aa = i,
                    this.F = t,
                i || t.addEventListener("load",
                    function(t) {
                        if (this.Aa = p, this.De && M.B === M.ya) {
                            var i = t.Sa,
                                i = M.vF(i, this.$h()),
                                e = new M.fa;
                            e.ld(i),
                                e.Fb(),
                                this.bb(e),
                                i = this.$h(),
                                this.DR(M.rect(0, 0, i.width, i.height))
                        }
                        i = this.za,
                        0 === i.width && 0 === i.height && (i = t.width, t = t.height, this.za.width = i, this.za.height = t, this.Ve = M.ju(this.za), this.Yf.width = this.Ve.width, this.Yf.height = this.Ve.height, this.bl.width = i, this.bl.height = t),
                            this.dispatchEvent("load")
                    },
                    this)
            }
        },
        Yj: function() {
            return M.d(this.Ga)
        },
        Hz: function(t) {
            this.Ga.x = t.x,
                this.Ga.y = t.y
        },
        m: function() {
            var t = new M.ue;
            return t.Ca(this.Dp, this.Ve, this.De, this.Pg, this.Yf),
                t.bb(this.F),
                t
        },
        iy: function() {
            var t = new M.ue;
            return t.Ca(this.Dp, this.Ve, this.De, this.Pg, this.Yf),
                t.bb(this.F),
                t
        },
        copy: function() {
            return this.iy()
        },
        Ca: function(t, i, e, n, s) {
            if (2 === arguments.length && (i = M.ju(i)), n = n || M.d(0, 0), s = s || i, e = e || r, M.zd(t) ? (this.F = q, this.Dp = t) : t instanceof M.fa && this.bb(t), t = this.Ja(), this.Ve = i, i = this.za = M.Nl(i), t && t.url && t.Db) {
                var h,
                    a;
                e ? (h = i.x + i.height, a = i.y + i.width) : (h = i.x + i.width, a = i.y + i.height),
                h > t.VF() && M.error(M.i.fB, t.url),
                a > t.UF() && M.error(M.i.dB, t.url)
            }
            return this.Pg.x = n.x,
                this.Pg.y = n.y,
                M.xD(n, this.Ga),
                this.Yf.width = s.width,
                this.Yf.height = s.height,
                M.JN(s, this.bl),
                this.De = e,
                p
        }
    }),
    M.uh.prototype.apply(M.ue.prototype),
    M.ue.create = function(t, i, e, n, r) {
        return new M.ue(t, i, e, n, r)
    },
    M.ue.tF = M.ue.create,
    M.ue.Yaa = function(t, i, e, n, r) {
        var s = new M.ue;
        return s.F = t,
            s.Ve = i,
            s.za = M.Nl(i),
            s.Pg.x = n.x,
            s.Pg.y = n.y,
            M.xD(s.Pg, s.Ga),
            s.Yf.width = r.width,
            s.Yf.height = r.height,
            M.JN(s.Yf, s.bl),
            s.De = e,
            s
    },
    M.Sl = {
        lK: /^\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*$/,
        OW: /^\s*\{\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*,\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*\}\s*$/,
        Ph: {},
        Oj: {},
        cp: {},
        fN: function(t) {
            return t = this.OW.exec(t),
                t ? M.rect(parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3]), parseFloat(t[4])) : M.rect(0, 0, 0, 0)
        },
        WM: function(t) {
            return t = this.lK.exec(t),
                t ? M.d(parseFloat(t[1]), parseFloat(t[2])) : M.d(0, 0)
        },
        oE: function(t) {
            return t = this.lK.exec(t),
                t ? M.size(parseFloat(t[1]), parseFloat(t[2])) : M.size(0, 0)
        },
        sY: function(t) {
            var i = M.aa.Yd(t);
            if (M.assert(i, M.i.O7, t), M.aa.fj(t), i.hp) return this.cp[t] = i;
            var e = i.frames,
                n = i.metadata || i.meta,
                i = {},
                s = {},
                h = 0;
            n && (h = n.format, h = 1 >= h.length ? parseInt(h) : h, s.V3 = n.textureFileName || n.textureFileName || n.image);
            for (var a in e) {
                var o = e[a];
                if (o) {
                    if (n = {},
                        0 == h) {
                        n.rect = M.rect(o.x, o.y, o.width, o.height),
                            n.Az = r,
                            n.offset = M.d(o.offsetX, o.offsetY);
                        var c = o.originalWidth,
                            o = o.originalHeight; (!c || !o) && M.log(M.i.N7),
                            c = Math.abs(c),
                            o = Math.abs(o),
                            n.size = M.size(c, o)
                    } else if (1 == h || 2 == h) n.rect = this.fN(o.frame),
                        n.Az = o.rotated || r,
                        n.offset = this.WM(o.offset),
                        n.size = this.oE(o.sourceSize);
                    else if (3 == h) {
                        var c = this.oE(o.spriteSize),
                            u = this.fN(o.textureRect);
                        c && (u = M.rect(u.x, u.y, c.width, c.height)),
                            n.rect = u,
                            n.Az = o.textureRotated || r,
                            n.offset = this.WM(o.spriteOffset),
                            n.size = this.oE(o.spriteSourceSize),
                            n.K0 = o.aliases
                    } else c = o.frame,
                        u = o.sourceSize,
                        a = o.filename || a,
                        n.rect = M.rect(c.x, c.y, c.w, c.h),
                        n.Az = o.rotated || r,
                        n.offset = M.d(0, 0),
                        n.size = M.size(u.w, u.h);
                    i[a] = n
                }
            }
            return this.cp[t] = {
                hp: p,
                frames: i,
                o5: s
            }
        },
        E0: function(t, i) {
            M.assert(t, M.i.Q7);
            var e = this.cp[t] || M.aa.Yd(t);
            if (e && e.frames) {
                var n = this.cp[t] || this.sY(t),
                    e = n.frames,
                    n = n.o5;
                i ? i instanceof M.fa || (M.zd(i) ? i = M.Ma.Vc(i) : M.assert(0, M.i.R7)) : i = M.Ma.Vc(M.path.Xp(t, n.V3 || ".png"));
                var r,
                    n = this.Oj,
                    s = this.Ph;
                for (r in e) {
                    var h = e[r],
                        a = s[r];
                    if (!a) {
                        if (a = new M.ue(i, h.rect, h.Az, h.offset, h.size), h = h.K0) for (var o = 0, c = h.length; c > o; o++) {
                            var u = h[o];
                            n[u] && M.log(M.i.P7, u),
                                n[u] = r
                        }
                        M.B === M.ya && a.De && a.Ja().Db && (h = a.Ja().Sa, h = M.vF(h, a.t3()), o = new M.fa, o.ld(h), o.Fb(), a.bb(o), h = a.za, a.DR(M.rect(0, 0, h.width, h.height))),
                            s[r] = a
                    }
                }
            }
        },
        Naa: function(t) {
            t = t.frames;
            for (var i in t) this.Ph[i] && M.log(M.i.M7, i)
        },
        cF: function(t, i) {
            this.Ph[i] = t
        },
        ala: function() {
            this.Ph = {},
                this.Oj = {}
        },
        $ka: function(t) {
            t && (this.Oj[t] && delete this.Oj[t], this.Ph[t] && delete this.Ph[t])
        },
        bla: function(t) {
            var i = this.Ph,
                e = this.Oj;
            if (t = this.cp[t]) {
                t = t.frames;
                for (var n in t) if (i[n]) {
                    delete i[n];
                    for (var r in e) e[r] == n && delete e[r]
                }
            }
        },
        cla: function(t) {
            var i,
                e = this.Ph,
                n = this.Oj;
            for (i in e) {
                var r = e[i];
                if (r && r.Ja() == t) {
                    delete e[i];
                    for (var s in n) n[s] == i && delete n[s]
                }
            }
        },
        Zj: function(t) {
            var i = this.Ph[t];
            if (!i) {
                var e = this.Oj[t];
                e && ((i = this.Ph[e.toString()]) || delete this.Oj[t])
            }
            return i || M.log(M.i.S7, t),
                i
        },
        Mk: function() {
            this.Ph = {},
                this.Oj = {},
                this.cp = {}
        }
    },
    M.$p = {
        Q9: 0,
        S$: 1,
        INT: 2,
        L9: 3,
        g9: 4,
        Es: 0,
        uZ: 0,
        DE: r,
        Lx: r,
        BE: r,
        CE: r,
        EE: r,
        lba: 0,
        hD: 0,
        Uv: "",
        ht: {},
        hp: r,
        xs: function() {
            var t = this.ht;
            t["cocos2d.x.version"] = M.pA,
                t["cocos2d.x.compiled_with_profiler"] = r,
                t["cocos2d.x.compiled_with_gl_state_cache"] = M.th,
                this.hp = p
        },
        sfa: E("Es"),
        rfa: E("uZ"),
        tfa: E("hD"),
        Ina: E("Lx"),
        Jna: E("DE"),
        Hna: F(r),
        Kna: F(r),
        Ena: F(r),
        Fna: E("BE"),
        Gna: E("CE"),
        Lna: E("EE"),
        Yp: function(t) {
            return - 1 < this.Uv.indexOf(t)
        },
        Cga: function(t, i) {
            this.hp || this.xs();
            var e = this.ht;
            return e[t] ? e[t] : i
        },
        xna: function(t, i) {
            this.ht[t] = i
        },
        O1: function() {
            0 === M.th && (M.log(""), M.log(M.i.v1), M.log(""))
        },
        w2: function() {
            if (M.B !== M.ya) {
                this.hp || this.xs();
                var t = M.l,
                    i = this.ht;
                i["gl.vendor"] = t.getParameter(t.VENDOR),
                    i["gl.renderer"] = t.getParameter(t.RENDERER),
                    i["gl.version"] = t.getParameter(t.VERSION),
                    this.Uv = "";
                for (var e = t.getSupportedExtensions(), n = 0; n < e.length; n++) this.Uv += e[n] + " ";
                this.Es = t.getParameter(t.MAX_TEXTURE_SIZE),
                    i["gl.max_texture_size"] = this.Es,
                    this.hD = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    i["gl.max_texture_units"] = this.hD,
                    this.DE = this.Yp("GL_IMG_texture_compression_pvrtc"),
                    i["gl.supports_PVRTC"] = this.DE,
                    this.Lx = r,
                    i["gl.supports_NPOT"] = this.Lx,
                    this.BE = this.Yp("GL_IMG_texture_format_BGRA888"),
                    i["gl.supports_BGRA8888"] = this.BE,
                    this.CE = this.Yp("GL_EXT_discard_framebuffer"),
                    i["gl.supports_discard_framebuffer"] = this.CE,
                    this.EE = this.Yp("vertex_array_object"),
                    i["gl.supports_vertex_array_object"] = this.EE,
                    M.Zp()
            }
        },
        qja: function(t) {
            this.hp || this.xs();
            var i = M.aa.Yd(t);
            if (i || b("Please load the resource first : " + t), M.assert(i, M.i.x1, t), i = i.data) for (var e in i) this.ht[e] = i[e];
            else M.log(M.i.w1, t)
        }
    },
    M.M.mA = function() {
        M.N9 = M.xa.extend({
            boa: z()
        });
        var t = M.cb.prototype;
        t.Tn = function(t) {
            var i = this.ac;
            this.pH();
            var e = this.Ih,
                n = e.Ie.x / e.pa,
                r = e.Ie.y / e.Ta;
            switch (t) {
                case M.cb.KU:
                    M.Ke(M.Ag),
                        M.El(),
                        e = new M.da,
                        M.xG(e, 0, i.width, 0, i.height, -1024, 1024),
                        M.xq(e),
                        M.Ke(M.Kf),
                        M.El();
                    break;
                case M.cb.CI:
                    var s = this.sq(),
                        h = new M.da,
                        e = new M.da;
                    M.Ke(M.Ag),
                        M.El(),
                        M.N4(h, i.width / i.height, 2 * s),
                        M.xq(h),
                        M.Ke(M.Kf),
                        M.El(),
                        s = M.ek(q, -n + i.width / 2, -r + i.height / 2, s),
                        i = M.ek(q, -n + i.width / 2, -r + i.height / 2, 0),
                        n = M.ek(q, 0, 1, 0),
                        M.wG(e, s, i, n),
                        M.xq(e);
                    break;
                case M.cb.LU:
                    break;
                default:
                    M.log(M.i.iT)
            }
            this.Os = t,
                M.wa.dispatchEvent(this.Cw),
                M.BR(),
                M.ia.oe = p
        },
            t.aH = function(t) {
                var i = M.l;
                t ? (i.clearDepth(1), i.enable(i.DEPTH_TEST), i.depthFunc(i.LEQUAL)) : i.disable(i.DEPTH_TEST)
            },
            t.Iz = function(t) {
                this.ac.width = M.fb.width,
                    this.ac.height = M.fb.height,
                    this.Ih = t || M.view,
                    t = M.$p,
                    t.w2(),
                    t.O1(),
                    this.No(),
                    this.sR(),
                M.wa && M.wa.Le(p)
            },
            t.Mk = function() {
                var t = M.l;
                t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT)
            },
            t.bC = function() {
                M.Jn()
            },
            t.XB = function() {
                M.dk()
            },
            t.No = function() {
                if (M.li) {
                    if (M.cb.WL != q && M.cb.WL != r) {
                        var t = new M.fa;
                        t.ld(M.cb.bp),
                            t.Fb();
                        var i = M.view.PF().height / 320;
                        0 === i && (i = this.ac.height / 320);
                        var e = new M.li;
                        e.eE(p),
                            e.Nd("00.0", t, 12, 32, "."),
                            e.scale = i,
                            this.Lf = e,
                            e = new M.li,
                            e.eE(p),
                            e.Nd("0.000", t, 12, 32, "."),
                            e.scale = i,
                            this.Mf = e,
                            e = new M.li,
                            e.eE(p),
                            e.Nd("000", t, 12, 32, "."),
                            e.scale = i,
                            this.Sf = e,
                            t = M.kA,
                            this.Sf.H(t.x, 34 * i + t.y),
                            this.Mf.H(t.x, 17 * i + t.y),
                            this.Lf.H(t)
                    }
                } else this.LX()
            },
            t.LX = function() {
                var t = 0,
                    t = this.ac.width > this.ac.height ? 0 | 24 * (this.ac.height / 320) : 0 | 24 * (this.ac.width / 320);
                this.Lf = new M.Y("000.0", "Arial", t),
                    this.Mf = new M.Y("0.000", "Arial", t),
                    this.Sf = new M.Y("0000", "Arial", t),
                    t = M.kA,
                    this.Sf.H(this.Sf.width / 2 + t.x, 5 * this.Sf.height / 2 + t.y),
                    this.Mf.H(this.Mf.width / 2 + t.x, 3 * this.Mf.height / 2 + t.y),
                    this.Lf.H(this.Lf.width / 2 + t.x, this.Lf.height / 2 + t.y)
            },
            t.zO = function(t) {
                var i = new M.da;
                M.hI(i);
                var e = new M.da;
                M.M4(e, i);
                var i = i.c[14] / i.c[15],
                    n = this.Ih.PF(),
                    r = new M.rb;
                return M.vQ(r, new M.rb(2 * t.x / n.width - 1, 1 - 2 * t.y / n.height, i), e),
                    M.d(r.x, r.y)
            },
            t.AO = function(t) {
                var i = new M.da;
                M.hI(i);
                var e = new M.rb;
                return M.vQ(e, new M.rb(t.x, t.y, 0), i),
                    t = this.Ih.PF(),
                    M.d(t.width * (.5 * e.x + .5), t.height * (.5 * -e.y + .5))
            },
            t.rq = function() {
                return this.Ih.rq()
            },
            t.xy = function() {
                return this.Ih.xy()
            },
            t.sq = function() {
                return this.ac.height / 1.1566
            },
            t.pH = function() {
                var t = this.Ih;
                if (t) {
                    var i = this.ac;
                    t.B7( - t.Ie.x / t.pa, -t.Ie.y / t.Ta, i.width, i.height)
                }
            },
            t.m3 = E("Ih"),
            t.Gn = E("Os"),
            t.jR = function(t) {
                t ? M.kd(M.pc, M.oc) : M.kd(M.l.ONE, M.l.ZERO)
            },
            t.sR = function() {
                this.jR(p),
                    this.aH(r),
                    this.Tn(this.Os),
                    M.l.clearColor(0, 0, 0, 1)
            }
    },
    M.Wc = 0,
    M.hI = function(t) {
        var i = new M.da;
        M.Nt(M.Ag, i);
        var e = new M.da;
        M.Nt(M.Kf, e),
            M.ef(t, i, e)
    },
    M.cb = M.xa.extend({
        hba: r,
        Fs: r,
        wc: r,
        ox: r,
        fl: r,
        yo: 0,
        lD: 0,
        Os: 0,
        xo: 0,
        yh: 1,
        is: r,
        Nk: 0,
        BC: 0,
        Lf: q,
        Mf: q,
        Sf: q,
        ac: q,
        $k: q,
        Bi: q,
        cx: q,
        Ih: q,
        Li: q,
        JD: q,
        fd: q,
        je: 0,
        ft: 0,
        ZD: 0,
        Taa: q,
        ag: q,
        Fg: q,
        Cw: q,
        vC: q,
        xC: q,
        wC: q,
        ctor: function() {
            var t = this;
            t.$k = Date.now(),
                M.wa.aF(M.Lb.Ou,
                    function() {
                        t.$k = Date.now()
                    })
        },
        ha: function() {
            return this.lD = this.yo = 1 / M.C1,
                this.Li = [],
                this.Os = M.cb.MU,
                this.JD = q,
                this.BC = this.xo = 0,
                this.is = r,
                this.ft = this.je = 0,
                this.$k = Date.now(),
                this.ox = this.wc = r,
                this.ac = M.size(0, 0),
                this.Ih = q,
                this.yh = 1,
                this.ag = new M.Er,
                this.Fg = M.FH ? new M.FH: q,
                this.ag.XG(this.Fg, M.Er.qv, r),
                this.vC = new M.bm(M.cb.rT),
                this.vC.setUserData(this),
                this.xC = new M.bm(M.cb.tT),
                this.xC.setUserData(this),
                this.wC = new M.bm(M.cb.sT),
                this.wC.setUserData(this),
                this.Cw = new M.bm(M.cb.uT),
                this.Cw.setUserData(this),
                p
        },
        m1: function() {
            var t = Date.now();
            this.Fs ? (this.Nk = 0, this.Fs = r) : this.Nk = (t - this.$k) / 1e3,
            0 < M.Lb.Je[M.Lb.xg.ut] && .2 < this.Nk && (this.Nk = 1 / 60),
                this.$k = t
        },
        zO: q,
        AO: q,
        N1: function() {
            var t = M.ia;
            this.m1(),
            this.wc || (this.ag.update(this.Nk), M.wa.dispatchEvent(this.wC)),
                this.Mk(),
            this.Bi && this.a7(),
            this.bC && this.bC(),
            this.fd && (t.oe === p ? (M.ia.xO(), this.fd.zh = 0, this.fd.G(), t.aR()) : t.cS() === p && t.transform(), M.wa.dispatchEvent(this.xC)),
            this.cx && this.cx.G(),
            this.is && this.U_(),
            this.XB && this.XB(),
                t.Ya(M.l),
                M.wa.dispatchEvent(this.vC),
                this.ft++,
            this.is && this.qX()
        },
        bC: q,
        XB: q,
        end: function() {
            this.ox = p
        },
        uea: E("yh"),
        wfa: E("cx"),
        Ea: function() {
            return M.size(this.ac)
        },
        Dt: function() {
            return M.size(this.ac.width * this.yh, this.ac.height * this.yh)
        },
        rq: q,
        xy: q,
        sq: q,
        pause: function() {
            this.wc || (this.lD = this.yo, this.kR(.25), this.wc = p)
        },
        ska: function() {
            M.assert(this.fd, M.i.fT),
                this.Li.pop();
            var t = this.Li.length;
            0 == t ? this.end() : (this.fl = p, this.Bi = this.Li[t - 1])
        },
        T5: function() {
            M.Zx.Mk(),
                M.Sl.Mk(),
                M.Ma.Mk()
        },
        U5: function() {
            this.Al().Uz(),
            M.wa && M.wa.Le(r),
            this.fd && (this.fd.ig(), this.fd.xb(), this.fd.bf()),
                this.Bi = this.fd = q,
                this.Li.length = 0,
                this.WR(),
                this.T5(),
                M.Zp()
        },
        V5: function(t) {
            M.assert(t, M.i.$H),
                this.fl = r,
                this.Li.push(t),
                this.Bi = t
        },
        mu: function(t) {
            if (M.assert(t, M.i.$H), this.fd) {
                var i = this.Li.length;
                0 === i ? (this.fl = p, this.Li[i] = t) : (this.fl = p, this.Li[i - 1] = t),
                    this.Bi = t
            } else this.V5(t),
                this.TR()
        },
        Mq: function() {
            this.wc && (this.kR(this.lD), (this.$k = Date.now()) || M.log(M.i.hT), this.wc = r, this.Nk = 0)
        },
        Jla: function(t) {
            t != this.yh && (this.yh = t, this.No())
        },
        aH: q,
        Mla: z(),
        qma: A("Fs"),
        a7: function() {
            var t = r,
                i = r;
            M.ga && (t = this.fd ? this.fd instanceof M.ga: r, i = this.Bi ? this.Bi instanceof M.ga: r),
            i || ((i = this.fd) && (i.ig(), i.xb()), this.fl && i && i.bf()),
                this.fd = this.Bi,
                M.ia.oe = p,
                this.Bi = q,
            !t && this.fd != q && (this.fd.W(), this.fd.fi())
        },
        tma: A("cx"),
        G2: E("JD"),
        J6: A("JD"),
        Iz: q,
        Tn: q,
        pH: q,
        m3: q,
        Gn: q,
        jR: q,
        U_: function() {
            this.je++,
                this.xo += this.Nk,
                this.Lf && this.Mf && this.Sf ? (this.xo > M.cT && (this.Mf.string = this.ZD.toFixed(3), this.BC = this.je / this.xo, this.xo = this.je = 0, this.Lf.string = this.BC.toFixed(1), this.Sf.string = (0 | M.Wc).toString()), this.Lf.G(), this.Mf.G(), this.Sf.G()) : this.No(),
                M.Wc = 0
        },
        pha: E("fl"),
        Ufa: E("fd"),
        gea: E("yo"),
        cha: E("is"),
        M6: A("is"),
        Zfa: E("ZD"),
        hha: E("Fs"),
        jha: E("wc"),
        uga: E("ft"),
        tka: function() {
            this.N5(1)
        },
        N5: function(t) {
            M.assert(this.fd, M.i.gT);
            var i = this.Li,
                e = i.length;
            if (0 == e) this.end();
            else if (! (t > e)) {
                for (; e > t;) {
                    var n = i.pop();
                    n.running && (n.ig(), n.xb()),
                        n.bf(),
                        e--
                }
                this.Bi = i[i.length - 1],
                    this.fl = r
            }
        },
        Al: E("ag"),
        HR: function(t) {
            this.ag != t && (this.ag = t)
        },
        my: E("Fg"),
        iR: function(t) {
            this.Fg != t && (this.Fg = t)
        },
        Aea: E("Nk"),
        No: q,
        qX: function() {
            this.ZD = (Date.now() - this.$k) / 1e3
        }
    }),
    M.cb.uT = "director_projection_changed",
    M.cb.rT = "director_after_draw",
    M.cb.tT = "director_after_visit",
    M.cb.sT = "director_after_update",
    M.jT = M.cb.extend({
        Oy: r,
        TR: function() {
            this.Fs = p,
                this.Oy = r
        },
        n5: function() {
            this.ox ? (this.ox = r, this.U5()) : this.Oy || this.N1()
        },
        WR: function() {
            this.Oy = p
        },
        kR: function(t) {
            this.yo = t,
            this.Oy || (this.WR(), this.TR())
        }
    }),
    M.cb.qH = q,
    M.cb.fP = p,
    M.cb.HC = function() {
        return M.cb.fP && (M.cb.fP = r, M.cb.qH = new M.jT, M.cb.qH.ha()),
            M.cb.qH
    },
    M.C1 = 60,
    M.cb.KU = 0,
    M.cb.CI = 1,
    M.cb.LU = 3,
    M.cb.MU = M.cb.CI,
    M.B === M.ya ? (T = M.cb.prototype, T.Tn = function(t) {
        this.Os = t,
            M.wa.dispatchEvent(this.Cw)
    },
        T.aH = z(), T.Iz = function(t) {
        this.ac.width = M.fb.width,
            this.ac.height = M.fb.height,
            this.Ih = t || M.view,
        M.wa && M.wa.Le(p)
    },
        T.Mk = function() {
            var t = this.Ih.Ie;
            M.l.clearRect( - t.x, t.y, t.width, -t.height)
        },
        T.No = function() {
            var t = 0,
                t = this.ac.width > this.ac.height ? 0 | 24 * (this.ac.height / 320) : 0 | 24 * (this.ac.width / 320);
            this.Lf = new M.Y("000.0", "Arial", t),
                this.Mf = new M.Y("0.000", "Arial", t),
                this.Sf = new M.Y("0000", "Arial", t),
                t = M.kA,
                this.Sf.H(this.Sf.width / 2 + t.x, 5 * this.Sf.height / 2 + t.y),
                this.Mf.H(this.Mf.width / 2 + t.x, 3 * this.Mf.height / 2 + t.y),
                this.Lf.H(this.Lf.width / 2 + t.x, this.Lf.height / 2 + t.y)
        },
        T.rq = function() {
            return this.Ea()
        },
        T.xy = function() {
            return M.d(0, 0)
        }) : (M.cb.bp = new Image, M.Na(M.cb.bp, "load",
        function() {
            M.cb.WL = p
        }), M.bp && (M.cb.bp.src = M.bp), M.assert(M.Vb(M.M.mA), M.i.Bd, "CCDirectorWebGL.js"), M.M.mA(), delete M.M.mA),
    M.br = M.xa.extend({
        Xo: q,
        Yo: q,
        Zo: q,
        qm: q,
        rm: q,
        sm: q,
        Kp: q,
        Lp: q,
        Mp: q,
        nb: q,
        op: q,
        ctor: function() {
            this.op = new M.da,
                this.restore()
        },
        description: function() {
            return "<CCCamera | center =(" + this.qm + "," + this.rm + "," + this.sm + ")>"
        },
        oR: A("nb"),
        tG: E("nb"),
        restore: function() {
            this.Xo = this.Yo = 0,
                this.Zo = M.br.sq(),
                this.Kp = this.qm = this.rm = this.sm = 0,
                this.Lp = 1,
                this.Mp = 0,
                M.Kn(this.op),
                this.nb = r
        },
        Rt: function() {
            if (this.nb) {
                var t = new M.rb,
                    i = new M.rb,
                    e = new M.rb;
                M.ek(t, this.Xo, this.Yo, this.Zo),
                    M.ek(i, this.qm, this.rm, this.sm),
                    M.ek(e, this.Kp, this.Lp, this.Mp),
                    M.wG(this.op, t, i, e),
                    this.nb = r
            }
            M.xq(this.op)
        },
        MM: function(t) {
            if (this.nb) {
                var i = new M.rb,
                    e = new M.rb,
                    n = new M.rb;
                M.ek(i, this.Xo, this.Yo, this.Zo),
                    M.ek(e, this.qm, this.rm, this.sm),
                    M.ek(n, this.Kp, this.Lp, this.Mp),
                    M.wG(this.op, i, e, n),
                    this.nb = r
            }
            M.ef(t, t, this.op)
        },
        Tla: function(t, i, e) {
            this.rR(t, i, e)
        },
        rR: function(t, i, e) {
            this.Xo = t,
                this.Yo = i,
                this.Zo = e,
                this.nb = p
        },
        Cla: function(t, i, e) {
            this.F6(t, i, e)
        },
        F6: function(t, i, e) {
            this.qm = t,
                this.rm = i,
                this.sm = e,
                this.nb = p
        },
        una: function(t, i, e) {
            this.x7(t, i, e)
        },
        x7: function(t, i, e) {
            this.Kp = t,
                this.Lp = i,
                this.Mp = e,
                this.nb = p
        },
        Rea: function() {
            return {
                x: this.Xo,
                y: this.Yo,
                e: this.Zo
            }
        },
        rP: function() {
            return {
                x: this.Xo,
                y: this.Yo,
                e: this.Zo
            }
        },
        nea: function() {
            return {
                x: this.qm,
                y: this.rm,
                e: this.sm
            }
        },
        nP: function() {
            return {
                x: this.qm,
                y: this.rm,
                e: this.sm
            }
        },
        zga: function() {
            return {
                x: this.Kp,
                y: this.Lp,
                e: this.Mp
            }
        },
        I3: function() {
            return {
                x: this.Kp,
                y: this.Lp,
                e: this.Mp
            }
        },
        Daa: z()
    }),
    M.br.sq = function() {
        return M.fv
    },
    M.L$ = M.qv + 1,
    M.oI = function(t, i, e) {
        this.next = this.uka = q,
            this.target = t,
            this.R5 = i,
            this.paused = e,
            this.ez = r
    },
    M.jI = function(t, i, e) {
        this.list = t,
            this.An = i,
            this.target = e,
            this.Ey = q
    },
    M.GT = function(t, i) {
        this.ij = q,
            this.target = t,
            this.Vq = 0,
            this.tt = this.st = q,
            this.paused = i,
            this.Ey = q
    },
    M.yJ = M.xa.extend({
        Yk: 0,
        Qc: q,
        Fe: q,
        tb: 0,
        uN: r,
        Vx: r,
        Ep: 0,
        RD: 0,
        rw: 0,
        dfa: E("Yk"),
        setInterval: A("Yk"),
        mea: E("Qc"),
        ctor: function(t, i, e, n, r) {
            this.Fe = t,
                this.Qc = i,
                this.tb = -1,
                this.Yk = e || 0,
                this.rw = r || 0,
                this.Vx = 0 < this.rw,
                this.RD = n == q ? M.Ar: n,
                this.uN = this.RD == M.Ar
        },
        tC: function() {
            M.zd(this.Qc) ? this.Fe[this.Qc](this.tb) : this.Qc.call(this.Fe, this.tb)
        },
        update: function(t) {
            if ( - 1 == this.tb) this.Ep = this.tb = 0;
            else {
                var i = this.Fe,
                    e = this.Qc;
                this.tb += t,
                    this.uN && !this.Vx ? this.tb >= this.Yk && (i && e && this.tC(), this.tb = 0) : (this.Vx ? this.tb >= this.rw && (i && e && this.tC(), this.tb -= this.rw, this.Ep += 1, this.Vx = r) : this.tb >= this.Yk && (i && e && this.tC(), this.tb = 0, this.Ep += 1), this.Ep > this.RD && M.K.Al().kS(i, e))
            }
        }
    }),
    M.Er = M.xa.extend({
        et: 1,
        fn: q,
        xj: q,
        dw: q,
        wj: q,
        Haa: q,
        rc: q,
        ui: r,
        Qx: r,
        ctor: function() {
            this.et = 1,
                this.fn = [[], [], []],
                this.xj = {},
                this.dw = [],
                this.wj = {},
                this.Ur = [],
                this.rc = q,
                this.Qx = this.ui = r
        },
        ND: function(t) {
            delete this.wj[t.target.ka],
                M.ne(this.Ur, t),
                t.yJ = q,
                t.target = q
        },
        kN: function(t) { (t = this.xj[t.target.ka]) && (M.ne(t.list, t.An), delete this.xj[t.target.ka], M.ne(this.dw, t), t.An = q, t.target = q)
        },
        $M: function(t, i, e, n) {
            if (n = new M.oI(i, e, n), t) {
                for (var r = t.length - 1, s = 0; r >= s && !(e < t[s].R5); s++);
                t.splice(s, 0, n)
            } else t = [],
                t.push(n);
            return e = new M.jI(t, n, i),
                this.dw.push(e),
                this.xj[i.ka] = e,
                t
        },
        gX: function(t, i, e) {
            e = new M.oI(i, 0, e),
                t.push(e),
                t = new M.jI(t, e, i),
                this.dw.push(t),
                this.xj[i.ka] = t
        },
        fna: A("et"),
        sga: E("et"),
        update: function(t) {
            var i,
                e,
                n,
                s = this.fn,
                h = this.Ur;
            for (this.Qx = p, 1 != this.et && (t *= this.et), e = 0, n = s.length; n > e && e >= 0; e++) for (var a = this.fn[e], o = 0, c = a.length; c > o; o++) i = a[o],
            !i.paused && !i.ez && i.target.update(t);
            for (e = 0, n = h.length; n > e && (i = h[e], i); e++) {
                if (this.rc = i, this.ui = r, !i.paused) for (i.Vq = 0; i.Vq < i.ij.length; i.Vq++) i.st = i.ij[i.Vq],
                    i.tt = r,
                    i.st.update(t),
                    i.st = q;
                this.ui && 0 == i.ij.length && (this.ND(i), e--)
            }
            for (e = 0, n = s.length; n > e; e++) for (a = this.fn[e], o = 0, c = a.length; c > o && (i = a[o], i);) i.ez ? this.kN(i) : o++;
            this.Qx = r,
                this.rc = q
        },
        z6: function(t, i, e, n, s, h) {
            M.assert(i, M.i.lV),
                M.assert(t, M.i.mV),
                e = e || 0,
                n = n == q ? M.Ar: n,
                s = s || 0,
                h = h || r;
            var a = this.wj[t.ka];
            if (a || (a = new M.GT(t, h), this.Ur.push(a), this.wj[t.ka] = a), a.ij == q) a.ij = [];
            else for (var o = 0; o < a.ij.length; o++) if (h = a.ij[o], i == h.Qc) return M.log(M.i.kV, h.Yk.toFixed(4), e.toFixed(4)),
                h.Yk = e,
                void 0;
            h = new M.yJ(t, i, e, n, s),
                a.ij.push(h)
        },
        XG: function(t, i, e) {
            if (t !== q) {
                var n = this.fn,
                    s = this.xj[t.ka];
                s ? s.An.ez = r: 0 == i ? this.gX(n[1], t, e) : 0 > i ? n[0] = this.$M(n[0], t, i, e) : n[2] = this.$M(n[2], t, i, e)
            }
        },
        kS: function(t, i) {
            if (t != q && i != q) {
                var e = this.wj[t.ka];
                if (e) for (var n = e.ij, r = 0, s = n.length; s > r; r++) {
                    var h = n[r];
                    if (i == h.Qc) {
                        h == e.st && !e.tt && (e.tt = p),
                            n.splice(r, 1),
                        e.Vq >= r && e.Vq--,
                        0 == n.length && (this.rc == e ? this.ui = p: this.ND(e));
                        break
                    }
                }
            }
        },
        Au: function(t) {
            t != q && (t = this.xj[t.ka], t != q && (this.Qx ? t.An.ez = p: this.kN(t.An)))
        },
        jS: function(t) {
            if (t != q) {
                var i = this.wj[t.ka];
                if (i) {
                    var e = i.ij; ! i.tt && 0 <= e.indexOf(i.st) && (i.tt = p),
                        e.length = 0,
                        this.rc == i ? this.ui = p: this.ND(i)
                }
                this.Au(t)
            }
        },
        Uz: function() {
            this.w8(M.Er.qv)
        },
        w8: function(t) {
            for (var i = this.Ur, e = this.fn, n = 0, r = i.length; r > n; n++) this.jS(i[n].target);
            for (n = 2; n >= 0; n--) if (! (1 == n && t > 0 || 0 == n && t >= 0)) for (var i = e[n], r = 0, s = i.length; s > r; r++) this.Au(i[r].target)
        },
        pka: function() {
            return this.F5(M.Er.qv)
        },
        F5: function() {
            for (var t, i = [], e = this.Ur, n = this.fn, r = 0, s = e.length; s > r; r++)(t = e[r]) && (t.paused = p, i.push(t.target));
            for (r = 0, s = n.length; s > r; r++) for (var e = n[r], h = 0, a = e.length; a > h; h++)(t = e[h]) && (t.paused = p, i.push(t.target));
            return i
        },
        u6: function(t) {
            if (t) for (var i = 0; i < t.length; i++) this.mk(t[i])
        },
        Fq: function(t) {
            M.assert(t, M.i.iV);
            var i = this.wj[t.ka];
            i && (i.paused = p),
            (t = this.xj[t.ka]) && (t.An.paused = p)
        },
        mk: function(t) {
            M.assert(t, M.i.jV);
            var i = this.wj[t.ka];
            i && (i.paused = r),
            (t = this.xj[t.ka]) && (t.An.paused = r)
        },
        sha: function(t) {
            return M.assert(t, M.i.hV),
                (t = this.wj[t.ka]) ? t.paused: r
        }
    }),
    M.Er.qv = -2147483648,
    M.yI = 2 * Math.PI,
    M.bI = M.xa.extend({
        fC: [],
        l: q,
        ctor: A("l"),
        CF: function(t, i) {
            i || (i = 1);
            var e = M.view.pa,
                n = M.d(t.x * e, t.y * M.view.Ta);
            this.l.beginPath(),
                this.l.arc(n.x, -n.y, i * e, 0, 2 * Math.PI, r),
                this.l.closePath(),
                this.l.fill()
        },
        L1: function(t, i, e) {
            if (t != q) {
                e || (e = 1),
                    i = this.l;
                var n = M.view.pa,
                    s = M.view.Ta;
                i.beginPath();
                for (var h = 0, a = t.length; a > h; h++) i.arc(t[h].x * n, -t[h].y * s, e * n, 0, 2 * Math.PI, r);
                i.closePath(),
                    i.fill()
            }
        },
        Wh: function(t, i) {
            var e = this.l,
                n = M.view.pa,
                r = M.view.Ta;
            e.beginPath(),
                e.moveTo(t.x * n, -t.y * r),
                e.lineTo(i.x * n, -i.y * r),
                e.closePath(),
                e.stroke()
        },
        EF: function(t, i) {
            this.Wh(M.d(t.x, t.y), M.d(i.x, t.y)),
                this.Wh(M.d(i.x, t.y), M.d(i.x, i.y)),
                this.Wh(M.d(i.x, i.y), M.d(t.x, i.y)),
                this.Wh(M.d(t.x, i.y), M.d(t.x, t.y))
        },
        UO: function(t, i, e) {
            t = [t, M.d(i.x, t.y), i, M.d(t.x, i.y)],
                this.GF(t, 4, e)
        },
        qe: function(t, i, e, n) {
            if (n = n || r, t != q) {
                3 > t.length && b(Error("Polygon's point must greater than 2"));
                var s = t[0];
                i = this.l;
                var h = M.view.pa,
                    a = M.view.Ta;
                i.beginPath(),
                    i.moveTo(s.x * h, -s.y * a);
                for (var s = 1, o = t.length; o > s; s++) i.lineTo(t[s].x * h, -t[s].y * a);
                e && i.closePath(),
                    n ? i.fill() : i.stroke()
            }
        },
        GF: function(t, i, e) {
            this.If(e.r, e.g, e.b, e.a),
                this.qe(t, i, p, p)
        },
        yF: function(t, i, e, n, s) {
            s = s || r,
                n = this.l;
            var h = M.view.pa,
                a = M.view.Ta;
            n.beginPath(),
                n.arc(0 | t.x * h, 0 | -(t.y * a), i * h, -e, -(e - 2 * Math.PI), r),
            s && n.lineTo(0 | t.x * h, 0 | -(t.y * a)),
                n.stroke()
        },
        DF: function(t, i, e, n) {
            for (var s = this.fC, h = s.length = 0, a = 0; n > a; a++) s.push(M.d(Math.pow(1 - h, 2) * t.x + 2 * (1 - h) * h * i.x + h * h * e.x, Math.pow(1 - h, 2) * t.y + 2 * (1 - h) * h * i.y + h * h * e.y)),
                h += 1 / n;
            s.push(M.d(e.x, e.y)),
                this.qe(s, n + 1, r, r)
        },
        zF: function(t, i, e, n, s) {
            for (var h = this.fC, a = h.length = 0, o = 0; s > o; o++) h.push(M.d(Math.pow(1 - a, 3) * t.x + 3 * Math.pow(1 - a, 2) * a * i.x + 3 * (1 - a) * a * a * e.x + a * a * a * n.x, Math.pow(1 - a, 3) * t.y + 3 * Math.pow(1 - a, 2) * a * i.y + 3 * (1 - a) * a * a * e.y + a * a * a * n.y)),
                a += 1 / s;
            h.push(M.d(n.x, n.y)),
                this.qe(h, s + 1, r, r)
        },
        xF: function(t, i) {
            this.xn(t, .5, i)
        },
        xn: function(t, i, e) {
            M.l.strokeStyle = "rgba(255,255,255,1)";
            var n = this.fC;
            n.length = 0;
            for (var s, h, a = 1 / t.length, o = 0; e + 1 > o; o++) h = o / e,
                1 == h ? (s = t.length - 1, h = 1) : (s = 0 | h / a, h = (h - a * s) / a),
                s = M.US(M.xd(t, s - 1), M.xd(t, s - 0), M.xd(t, s + 1), M.xd(t, s + 2), i, h),
                n.push(s);
            this.qe(n, e + 1, r, r)
        },
        drawImage: function(t, i, e, n, r) {
            switch (arguments.length) {
                case 2:
                    this.l.drawImage(t, i.x, -(i.y + t.height));
                    break;
                case 3:
                    this.l.drawImage(t, i.x, -(i.y + e.height), e.width, e.height);
                    break;
                case 5:
                    this.l.drawImage(t, i.x, i.y, e.width, e.height, n.x, -(n.y + r.height), r.width, r.height);
                    break;
                default:
                    b(Error("Argument must be non-nil"))
            }
        },
        VO: function(t, i, e) {
            t = t || this.l,
                i *= M.view.pa,
                e = "rgba(" + (0 | e.r) + "," + (0 | e.g) + "," + (0 | e.b),
                t.fillStyle = e + ",1)";
            var n = i / 10;
            t.beginPath(),
                t.moveTo( - i, i),
                t.lineTo(0, n),
                t.lineTo(i, i),
                t.lineTo(n, 0),
                t.lineTo(i, -i),
                t.lineTo(0, -n),
                t.lineTo( - i, -i),
                t.lineTo( - n, 0),
                t.lineTo( - i, i),
                t.closePath(),
                t.fill();
            var s = t.createRadialGradient(0, 0, n, 0, 0, i);
            s.addColorStop(0, e + ", 1)"),
                s.addColorStop(.3, e + ", 0.8)"),
                s.addColorStop(1, e + ", 0.0)"),
                t.fillStyle = s,
                t.beginPath(),
                t.arc(0, 0, i - n, 0, M.yI, r),
                t.closePath(),
                t.fill()
        },
        SO: function(t, i, e) {
            t = t || this.l,
                i *= M.view.pa,
                e = "rgba(" + (0 | e.r) + "," + (0 | e.g) + "," + (0 | e.b);
            var n = t.createRadialGradient(0, 0, i / 10, 0, 0, i);
            n.addColorStop(0, e + ", 1)"),
                n.addColorStop(.3, e + ", 0.8)"),
                n.addColorStop(.6, e + ", 0.4)"),
                n.addColorStop(1, e + ", 0.0)"),
                t.fillStyle = n,
                t.beginPath(),
                t.arc(0, 0, i, 0, M.yI, r),
                t.closePath(),
                t.fill()
        },
        fillText: function(t, i, e) {
            this.l.fillText(t, i, -e)
        },
        If: function(t, i, e, n) {
            this.l.fillStyle = "rgba(" + t + "," + i + "," + e + "," + n / 255 + ")",
                this.l.strokeStyle = "rgba(" + t + "," + i + "," + e + "," + n / 255 + ")"
        },
        gH: z(),
        Sn: function(t) {
            this.l.lineWidth = t * M.view.pa
        }
    }),
    M.oT = M.xa.extend({
        l: q,
        ys: r,
        Gc: q,
        ti: -1,
        sf: q,
        zD: -1,
        yD: -1,
        ctor: function(t) {
            t == q && (t = M.l),
            !t instanceof WebGLRenderingContext && b("Can't initialise DrawingPrimitiveWebGL. context need is WebGLRenderingContext"),
                this.l = t,
                this.sf = new Float32Array([1, 1, 1, 1])
        },
        fk: function() {
            this.ys || (this.Gc = M.be.Bc(M.kB), this.ti = this.l.getUniformLocation(this.Gc.Fn(), "u_color"), this.zD = this.l.getUniformLocation(this.Gc.Fn(), "u_pointSize"), this.ys = p)
        },
        cda: function() {
            this.ys = r
        },
        CF: function(t) {
            this.fk();
            var i = this.l;
            this.Gc.sb(),
                this.Gc.lf(),
                M.Sb(M.Dd),
                i.uniform4fv(this.ti, this.sf),
                this.Gc.su(this.zD, this.yD);
            var e = i.createBuffer();
            i.bindBuffer(i.ARRAY_BUFFER, e),
                i.bufferData(i.ARRAY_BUFFER, new Float32Array([t.x, t.y]), i.STATIC_DRAW),
                i.vertexAttribPointer(M.eb, 2, i.FLOAT, r, 0, 0),
                i.drawArrays(i.POINTS, 0, 1),
                i.deleteBuffer(e),
                M.fh()
        },
        L1: function(t) {
            if (t && 0 != t.length) {
                this.fk();
                var i = this.l;
                this.Gc.sb(),
                    this.Gc.lf(),
                    M.Sb(M.Dd),
                    i.uniform4fv(this.ti, this.sf),
                    this.Gc.su(this.zD, this.yD);
                var e = i.createBuffer();
                i.bindBuffer(i.ARRAY_BUFFER, e),
                    i.bufferData(i.ARRAY_BUFFER, this.lx(t), i.STATIC_DRAW),
                    i.vertexAttribPointer(M.eb, 2, i.FLOAT, r, 0, 0),
                    i.drawArrays(i.POINTS, 0, t.length),
                    i.deleteBuffer(e),
                    M.fh()
            }
        },
        lx: function(t) {
            for (var i = new Float32Array(2 * t.length), e = 0; e < t.length; e++) i[2 * e] = t[e].x,
                i[2 * e + 1] = t[e].y;
            return i
        },
        Wh: function(t, i) {
            this.fk();
            var e = this.l;
            this.Gc.sb(),
                this.Gc.lf(),
                M.Sb(M.Dd),
                e.uniform4fv(this.ti, this.sf);
            var n = e.createBuffer();
            e.bindBuffer(e.ARRAY_BUFFER, n),
                e.bufferData(e.ARRAY_BUFFER, this.lx([t, i]), e.STATIC_DRAW),
                e.vertexAttribPointer(M.eb, 2, e.FLOAT, r, 0, 0),
                e.drawArrays(e.LINES, 0, 2),
                e.deleteBuffer(n),
                M.fh()
        },
        EF: function(t, i) {
            this.Wh(M.d(t.x, t.y), M.d(i.x, t.y)),
                this.Wh(M.d(i.x, t.y), M.d(i.x, i.y)),
                this.Wh(M.d(i.x, i.y), M.d(t.x, i.y)),
                this.Wh(M.d(t.x, i.y), M.d(t.x, t.y))
        },
        UO: function(t, i, e) {
            t = [t, M.d(i.x, t.y), i, M.d(t.x, i.y)],
                this.GF(t, 4, e)
        },
        qe: function(t, i, e) {
            this.fk(),
                i = this.l,
                this.Gc.sb(),
                this.Gc.lf(),
                M.Sb(M.Dd),
                i.uniform4fv(this.ti, this.sf);
            var n = i.createBuffer();
            i.bindBuffer(i.ARRAY_BUFFER, n),
                i.bufferData(i.ARRAY_BUFFER, this.lx(t), i.STATIC_DRAW),
                i.vertexAttribPointer(M.eb, 2, i.FLOAT, r, 0, 0),
                e ? i.drawArrays(i.LINE_LOOP, 0, t.length) : i.drawArrays(i.LINE_STRIP, 0, t.length),
                i.deleteBuffer(n),
                M.fh()
        },
        GF: function(t, i, e) {
            this.fk(),
            e && this.If(e.r, e.g, e.b, e.a),
                i = this.l,
                this.Gc.sb(),
                this.Gc.lf(),
                M.Sb(M.Dd),
                i.uniform4fv(this.ti, this.sf),
                e = i.createBuffer(),
                i.bindBuffer(i.ARRAY_BUFFER, e),
                i.bufferData(i.ARRAY_BUFFER, this.lx(t), i.STATIC_DRAW),
                i.vertexAttribPointer(M.eb, 2, i.FLOAT, r, 0, 0),
                i.drawArrays(i.TRIANGLE_FAN, 0, t.length),
                i.deleteBuffer(e),
                M.fh()
        },
        yF: function(t, i, e, n, s) {
            this.fk();
            var h = 1;
            s && h++;
            var a = 2 * Math.PI / n;
            if (s = new Float32Array(2 * (n + 2))) {
                for (var o = 0; n >= o; o++) {
                    var c = o * a,
                        u = i * Math.sin(c + e) + t.y;
                    s[2 * o] = i * Math.cos(c + e) + t.x,
                        s[2 * o + 1] = u
                }
                s[2 * (n + 1)] = t.x,
                    s[2 * (n + 1) + 1] = t.y,
                    t = this.l,
                    this.Gc.sb(),
                    this.Gc.lf(),
                    M.Sb(M.Dd),
                    t.uniform4fv(this.ti, this.sf),
                    i = t.createBuffer(),
                    t.bindBuffer(t.ARRAY_BUFFER, i),
                    t.bufferData(t.ARRAY_BUFFER, s, t.STATIC_DRAW),
                    t.vertexAttribPointer(M.eb, 2, t.FLOAT, r, 0, 0),
                    t.drawArrays(t.LINE_STRIP, 0, n + h),
                    t.deleteBuffer(i),
                    M.fh()
            }
        },
        DF: function(t, i, e, n) {
            this.fk();
            for (var s = new Float32Array(2 * (n + 1)), h = 0, a = 0; n > a; a++) s[2 * a] = Math.pow(1 - h, 2) * t.x + 2 * (1 - h) * h * i.x + h * h * e.x,
                s[2 * a + 1] = Math.pow(1 - h, 2) * t.y + 2 * (1 - h) * h * i.y + h * h * e.y,
                h += 1 / n;
            s[2 * n] = e.x,
                s[2 * n + 1] = e.y,
                t = this.l,
                this.Gc.sb(),
                this.Gc.lf(),
                M.Sb(M.Dd),
                t.uniform4fv(this.ti, this.sf),
                i = t.createBuffer(),
                t.bindBuffer(t.ARRAY_BUFFER, i),
                t.bufferData(t.ARRAY_BUFFER, s, t.STATIC_DRAW),
                t.vertexAttribPointer(M.eb, 2, t.FLOAT, r, 0, 0),
                t.drawArrays(t.LINE_STRIP, 0, n + 1),
                t.deleteBuffer(i),
                M.fh()
        },
        zF: function(t, i, e, n, s) {
            this.fk();
            for (var h = new Float32Array(2 * (s + 1)), a = 0, o = 0; s > o; o++) h[2 * o] = Math.pow(1 - a, 3) * t.x + 3 * Math.pow(1 - a, 2) * a * i.x + 3 * (1 - a) * a * a * e.x + a * a * a * n.x,
                h[2 * o + 1] = Math.pow(1 - a, 3) * t.y + 3 * Math.pow(1 - a, 2) * a * i.y + 3 * (1 - a) * a * a * e.y + a * a * a * n.y,
                a += 1 / s;
            h[2 * s] = n.x,
                h[2 * s + 1] = n.y,
                t = this.l,
                this.Gc.sb(),
                this.Gc.lf(),
                M.Sb(M.Dd),
                t.uniform4fv(this.ti, this.sf),
                i = t.createBuffer(),
                t.bindBuffer(t.ARRAY_BUFFER, i),
                t.bufferData(t.ARRAY_BUFFER, h, t.STATIC_DRAW),
                t.vertexAttribPointer(M.eb, 2, t.FLOAT, r, 0, 0),
                t.drawArrays(t.LINE_STRIP, 0, s + 1),
                t.deleteBuffer(i),
                M.fh()
        },
        xF: function(t, i) {
            this.xn(t, .5, i)
        },
        xn: function(t, i, e) {
            this.fk();
            for (var n, s, h = new Float32Array(2 * (e + 1)), a = 1 / t.length, o = 0; e + 1 > o; o++) s = o / e,
                1 == s ? (n = t.length - 1, s = 1) : (n = 0 | s / a, s = (s - a * n) / a),
                n = M.US(M.xd(t, n - 1), M.xd(t, n), M.xd(t, n + 1), M.xd(t, n + 2), i, s),
                h[2 * o] = n.x,
                h[2 * o + 1] = n.y;
            t = this.l,
                this.Gc.sb(),
                this.Gc.lf(),
                M.Sb(M.Dd),
                t.uniform4fv(this.ti, this.sf),
                i = t.createBuffer(),
                t.bindBuffer(t.ARRAY_BUFFER, i),
                t.bufferData(t.ARRAY_BUFFER, h, t.STATIC_DRAW),
                t.vertexAttribPointer(M.eb, 2, t.FLOAT, r, 0, 0),
                t.drawArrays(t.LINE_STRIP, 0, e + 1),
                t.deleteBuffer(i),
                M.fh()
        },
        If: function(t, i, e, n) {
            this.sf[0] = t / 255,
                this.sf[1] = i / 255,
                this.sf[2] = e / 255,
                this.sf[3] = n / 255
        },
        gH: function(t) {
            this.yD = t * M.zb()
        },
        Sn: function(t) {
            this.l.lineWidth && this.l.lineWidth(t)
        }
    }),
    M.M.LB = function() {
        var t = M.Y.prototype;
        t.mb = M.O.prototype.mb,
            t.Ye = function() {
                this.Xf && (this.Xf = r, this.Np()),
                    M.n.prototype.Ye.call(this)
            },
            t.zf = function() {
                this.Xf = p;
                var t = this.Zm,
                    i = this.an;
                this.Ax = "rgba(128,128,128," + this.Nj + ")",
                    this.Fw = "rgba(" + (0 | i.r) + "," + (0 | i.g) + "," + (0 | i.b) + ", 1)",
                    this.Fx = "rgba(" + (0 | t.r) + "," + (0 | t.g) + "," + (0 | t.b) + ", 1)"
            },
            t.Zc = M.O.prototype.Zc,
            t.pb = M.O.prototype.pb,
            t.Mc = M.O.prototype.Mc,
            t.mG = function(t, i) {
                return M.O.prototype.ha.call(this) ? (this.shaderProgram = M.be.Bc(M.Y.WW), this.LE(i, r), this.string = t, p) : r
            },
            t.Dz = function(t) {
                var i = this.an; (i.r != t.r || i.g != t.g || i.b != t.b) && (i.r = t.r, i.g = t.g, i.b = t.b, this.zf(), this.Xf = p)
            },
            t.Ia = function(t) {
                if (this.Ub && "" != this.Ub) {
                    t = t || M.l;
                    var i = this.F;
                    if (i && i.Db && (this.la.sb(), this.la.lf(), M.kd(this.q.src, this.q.I), M.yd(i), M.Sb(M.wh), t.bindBuffer(t.ARRAY_BUFFER, this.up), this.Id && (t.bufferData(t.ARRAY_BUFFER, this.Pb.Tp, t.STATIC_DRAW), this.Id = r), t.vertexAttribPointer(M.eb, 3, t.FLOAT, r, 24, 0), t.vertexAttribPointer(M.bd, 2, t.FLOAT, r, 24, 16), t.vertexAttribPointer(M.nd, 4, t.UNSIGNED_BYTE, p, 24, 12), t.drawArrays(t.TRIANGLE_STRIP, 0, 4)), 1 === M.so) t = this.Pb,
                        t = [M.d(t.U.j.x, t.U.j.y), M.d(t.J.j.x, t.J.j.y), M.d(t.V.j.x, t.V.j.y), M.d(t.N.j.x, t.N.j.y)],
                        M.ye.qe(t, 4, p);
                    else if (2 === M.so) {
                        t = this.LP();
                        var i = this.offsetX,
                            e = this.offsetY;
                        t = [M.d(i, e), M.d(i + t.width, e), M.d(i + t.width, e + t.height), M.d(i, e + t.height)],
                            M.ye.qe(t, 4, p)
                    }
                    M.Wc++
                }
            },
            t.yb = M.O.prototype.yb
    },
    M.M.XA = function() {
        var t = M.Y.prototype;
        M.k(t, "color", t.fg, t.mb),
            M.k(t, "opacity", t.bh, t.pb),
            M.k(t, "string", t.Bl, t.Kc),
            M.k(t, "textAlign", t.T2, t.T6),
            M.k(t, "verticalAlign", t.M3, t.A7),
            M.k(t, "fontSize", t.RF, t.Fz),
            M.k(t, "fontName", t.QF, t.Ez),
            M.k(t, "font", t.rY, t.t_),
            M.k(t, "boundingWidth", t.FC, t.n_),
            M.k(t, "boundingHeight", t.oY, t.m_),
            M.k(t, "fillStyle", t.qY, t.Dz),
            M.k(t, "strokeStyle", t.MY, t.P_),
            M.k(t, "lineWidth", t.zY, t.x_),
            M.k(t, "shadowOffsetX", t.IY, t.F_),
            M.k(t, "shadowOffsetY", t.JY, t.G_),
            M.k(t, "shadowOpacity", t.KY, t.H_),
            M.k(t, "shadowBlur", t.HY, t.E_)
    },
    M.Y = M.O.extend({
        sc: q,
        Xk: M.mi,
        rl: M.Nr,
        jc: q,
        Yb: 0,
        Ub: "",
        rD: q,
        lp: r,
        Ah: q,
        Kd: r,
        Wd: q,
        Nj: 0,
        jl: 0,
        Ax: q,
        xp: q,
        Xg: r,
        Zm: q,
        Pj: 0,
        Fx: q,
        an: q,
        Fw: q,
        yE: 0,
        zE: 0,
        Xf: r,
        Vw: q,
        Ww: q,
        FM: q,
        Hb: "LabelTTF",
        Nd: function(t, i, e, n, s, h) {
            return t = t ? t + "": "",
                e = e || 16,
                n = n || M.size(0, 0),
                s = s || M.Ev,
                h = h || M.Nr,
                this.kb = r,
                this.sc = M.size(n.width, n.height),
                this.jc = i || "Arial",
                this.Xk = s,
                this.rl = h,
                this.Yb = e,
                this.Ah = this.Yb + "px '" + i + "'",
                this.wi = M.Y.Pr(i, this.Yb),
                this.string = t,
                this.zf(),
                this.Np(),
                this.xc(),
                p
        },
        xc: function() {
            this.Sm = this.Xf = p,
                M.ia.cu(this)
        },
        ctor: function(t, i, e, n, s, h) {
            M.O.prototype.ctor.call(this),
                this.sc = M.size(0, 0),
                this.Xk = M.Ev,
                this.rl = M.Nr,
                this.kb = r,
                this.Ah = "",
                this.jc = "Arial",
                this.Kd = this.lp = r,
                this.Wd = M.d(0, 0),
                this.jl = this.Nj = 0,
                this.Ax = "rgba(128, 128, 128, 0.5)",
                this.Xg = r,
                this.Zm = M.color(255, 255, 255, 255),
                this.Pj = 0,
                this.Fx = "",
                this.an = M.color(255, 255, 255, 255),
                this.Fw = "rgba(255,255,255,1)",
                this.zE = this.yE = 0,
                this.Xf = r,
                this.FM = [],
                this.zf(),
                i && i instanceof ga ? this.mG(t, i) : M.Y.prototype.Nd.call(this, t, i, e, n, s, h)
        },
        ha: function() {
            return this.Nd(" ", this.jc, this.Yb)
        },
        vZ: function() {
            this.IC().font = this.Ah
        },
        pp: function(t) {
            return this.IC().measureText(t).width
        },
        description: function() {
            return "<cc.LabelTTF | FontName =" + this.jc + " FontSize = " + this.Yb.toFixed(1) + ">"
        },
        mb: q,
        zf: q,
        Zc: q,
        pb: q,
        Mc: q,
        aoa: function(t) {
            M.n.prototype.Mc.call(this, t),
                this.zf()
        },
        Bl: E("Ub"),
        T2: E("Xk"),
        M3: E("rl"),
        Eea: function() {
            return M.size(this.sc)
        },
        RF: E("Yb"),
        QF: E("jc"),
        mG: q,
        $ma: function(t) {
            t && this.LE(t, p)
        },
        mga: function() {
            return this.WZ(r)
        },
        b2: function(t, i, e, n) {
            t.r != q && t.g != q && t.b != q && t.a != q ? this.XX(t, i, e) : this.LL(t, i, e, n)
        },
        LL: function(t, i, e, n) {
            e = e || .5,
            r === this.Kd && (this.Kd = p);
            var s = this.Wd; (s && s.x != t || s.af != i) && (s.x = t, s.y = i),
            this.Nj != e && (this.Nj = e),
                this.zf(),
            this.jl != n && (this.jl = n),
                this.xc()
        },
        XX: function(t, i, e) {
            this.xp || (this.xp = M.color(255, 255, 255, 128)),
                this.xp.r = t.r,
                this.xp.g = t.g,
                this.xp.b = t.b,
                this.LL(i.width || i.x || 0, i.height || i.y || 0, t.a != q ? t.a / 255: .5, e)
        },
        IY: function() {
            return this.Wd.x
        },
        F_: function(t) {
            r === this.Kd && (this.Kd = p),
            this.Wd.x != t && (this.Wd.x = t, this.xc())
        },
        JY: function() {
            return this.Wd.af
        },
        G_: function(t) {
            r === this.Kd && (this.Kd = p),
            this.Wd.af != t && (this.Wd.af = t, this.xc())
        },
        cba: function() {
            return M.d(this.Wd.x, this.Wd.y)
        },
        yba: function(t) {
            r === this.Kd && (this.Kd = p),
            (this.Wd.x != t.x || this.Wd.y != t.y) && (this.Wd.x = t.x, this.Wd.y = t.y, this.xc())
        },
        KY: E("Nj"),
        H_: function(t) {
            r === this.Kd && (this.Kd = p),
            this.Nj != t && (this.Nj = t, this.zf(), this.xc())
        },
        HY: E("jl"),
        E_: function(t) {
            r === this.Kd && (this.Kd = p),
            this.jl != t && (this.jl = t, this.xc())
        },
        Uca: function() {
            this.Kd && (this.Kd = r, this.xc())
        },
        c2: function(t, i) {
            this.Xg === r && (this.Xg = p);
            var e = this.Zm; (e.r !== t.r || e.g !== t.g || e.b !== t.b) && (e.r = t.r, e.g = t.g, e.b = t.b, this.zf()),
            this.Pj !== i && (this.Pj = i || 0),
                this.xc()
        },
        MY: E("Zm"),
        P_: function(t) {
            this.Xg === r && (this.Xg = p);
            var i = this.Zm; (i.r !== t.r || i.g !== t.g || i.b !== t.b) && (i.r = t.r, i.g = t.g, i.b = t.b, this.zf(), this.xc())
        },
        zY: E("Pj"),
        x_: function(t) {
            this.Xg === r && (this.Xg = p),
            this.Pj !== t && (this.Pj = t || 0, this.xc())
        },
        Vca: function() {
            this.Xg && (this.Xg = r, this.xc())
        },
        Dz: q,
        qY: E("an"),
        LE: function(t, i) {
            t.Zda ? (this.sc.width = t.boundingWidth, this.sc.height = t.boundingHeight) : (this.sc.width = 0, this.sc.height = 0),
                this.Xk = t.textAlign,
                this.rl = t.verticalAlign,
                this.jc = t.fontName,
                this.Yb = t.fontSize || 12,
                this.Ah = this.Yb + "px '" + this.jc + "'",
                this.wi = M.Y.Pr(this.jc, this.Yb),
            t.NR && this.b2(t.shadowOffsetX, t.shadowOffsetY, t.shadowOpacity, t.shadowBlur),
            t.uH && this.c2(t.strokeStyle, t.lineWidth),
                this.Dz(t.fillStyle),
            i && this.Np()
        },
        WZ: function(t) {
            var i = new ga;
            if (t ? (i.fontSize = this.Yb, i.boundingWidth = M.zb() * this.sc.width, i.boundingHeight = M.zb() * this.sc.height) : (i.fontSize = this.Yb, i.boundingWidth = this.sc.width, i.boundingHeight = this.sc.height), i.fontName = this.jc, i.textAlign = this.Xk, i.verticalAlign = this.rl, this.Xg) {
                i.uH = p;
                var e = this.Zm;
                i.strokeStyle = M.color(e.r, e.g, e.b),
                    i.lineWidth = this.Pj
            } else i.uH = r;
            return this.Kd ? (i.NR = p, i.shadowBlur = this.jl, i.shadowOpacity = this.Nj, i.shadowOffsetX = (t ? M.zb() : 1) * this.Wd.x, i.shadowOffsetY = (t ? M.zb() : 1) * this.Wd.y) : i.Kd = r,
                t = this.an,
                i.fillStyle = M.color(t.r, t.g, t.b),
                i
        },
        wi: 18,
        Kc: function(t) {
            t = String(t),
            this.rD != t && (this.rD = t + "", this.Tx(), this.xc())
        },
        Tx: function() {
            this.Ub = this.rD
        },
        T6: function(t) {
            t !== this.Xk && (this.Xk = t, this.xc())
        },
        A7: function(t) {
            t != this.rl && (this.rl = t, this.xc())
        },
        Pla: function(t, i) {
            var e;
            i === k ? (e = t.width, i = t.height) : e = t,
            (e != this.sc.width || i != this.sc.height) && (this.sc.width = e, this.sc.height = i, this.Tx(), this.xc())
        },
        FC: function() {
            return this.sc.width
        },
        n_: function(t) {
            t != this.sc.width && (this.sc.width = t, this.Tx(), this.xc())
        },
        oY: function() {
            return this.sc.height
        },
        m_: function(t) {
            t != this.sc.height && (this.sc.height = t, this.Tx(), this.xc())
        },
        Fz: function(t) {
            this.Yb !== t && (this.Yb = t, this.Ah = t + "px '" + this.jc + "'", this.wi = M.Y.Pr(this.jc, t), this.xc())
        },
        Ez: function(t) {
            this.jc && this.jc != t && (this.jc = t, this.Ah = this.Yb + "px '" + t + "'", this.wi = M.Y.Pr(t, this.Yb), this.xc())
        },
        rY: E("Ah"),
        t_: function(t) {
            var i = M.Y.dY.exec(t);
            i && (this.Yb = parseInt(i[1]), this.jc = i[2], this.Ah = t, this.wi = M.Y.Pr(this.jc, this.Yb), this.xc())
        },
        WX: function(t) {
            if (t) {
                var i = this.yE,
                    e = this.zE,
                    n = this.R.height - e,
                    r = this.rl,
                    s = this.Xk,
                    h = this.wi,
                    a = this.Pj;
                t.setTransform(1, 0, 0, 1, 0 + .5 * i, n + .5 * e),
                t.font != this.Ah && (t.font = this.Ah),
                    t.fillStyle = this.Fw;
                var o = e = 0,
                    c = this.Xg;
                if (c && (t.lineWidth = 2 * a, t.strokeStyle = this.Fx), this.Kd && (a = this.Wd, t.shadowColor = this.Ax, t.shadowOffsetX = a.x, t.shadowOffsetY = -a.y, t.shadowBlur = this.jl), t.textBaseline = M.Y.g0[r], t.textAlign = M.Y.f0[s], i = this.R.width - i, e = s === M.pJ ? e + i: s === M.mi ? e + i / 2: e + 0, this.lp) for (s = this.Oi.length, r === M.gK ? o = h + n - h * s: r === M.NW && (o = h / 2 + (n - h * s) / 2), r = 0; s > r; r++) i = this.Oi[r],
                    a = -n + h * r + o,
                c && t.strokeText(i, e, a),
                    t.fillText(i, e, a);
                else r !== M.gK && (o = r === M.Nr ? o - n: o - .5 * n),
                c && t.strokeText(this.Ub, e, o),
                    t.fillText(this.Ub, e, o)
            }
        },
        IC: function() {
            if (this.Ww) return this.Ww;
            if (!this.Vw) {
                var t = M.Wb("canvas"),
                    i = new M.fa;
                i.ld(t),
                    this.texture = i,
                    this.Vw = t
            }
            return this.Ww = this.Vw.getContext("2d")
        },
        wX: function(t, i, e) {
            var n = t[i],
                r = this.pp(n);
            if (r > e && 1 < n.length) {
                for (var s, h = 0 | n.length * (e / r), a = n.substr(h), o = r - this.pp(a), c = 0, u = 0; o > e && 100 > u++;) h *= e / o,
                    h |= 0,
                    a = n.substr(h),
                    o = r - this.pp(a);
                for (u = 0; e > o && 100 > u++;) a && (c = (s = M.Y.x0.exec(a)) ? s[0].length: 1, s = a),
                    h += c,
                    a = n.substr(h),
                    o = r - this.pp(a);
                h -= c,
                    e = n.substr(0, h),
                M.Y.J8 && M.Y.e0.test(s || a) && (r = M.Y.mZ.exec(e), h -= r ? r[0].length: 0, s = n.substr(h), e = n.substr(0, h)),
                M.Y.$X.test(s) && (r = M.Y.lZ.exec(e)) && e !== r[0] && (h -= r[0].length, s = n.substr(h), e = n.substr(0, h)),
                    t[i] = s || a,
                    t.splice(i, 0, e)
            }
        },
        Ux: function() {
            var t,
                i,
                e = this.sc.width,
                n = this.FM;
            if (n.length = 0, this.lp = r, this.vZ(), 0 !== e) for (this.Oi = this.Ub.split("\n"), t = 0; t < this.Oi.length; t++) this.wX(this.Oi, t, e);
            else for (this.Oi = this.Ub.split("\n"), t = 0, i = this.Oi.length; i > t; t++) n.push(this.pp(this.Oi[t]));
            if (0 < this.Oi.length && (this.lp = p), i = t = 0, this.Xg && (t = i = 2 * this.Pj), this.Kd) {
                var s = this.Wd;
                t += 2 * Math.abs(s.x),
                    i += 2 * Math.abs(s.y)
            }
            e = 0 === e ? this.lp ? M.size(0 | Math.max.apply(Math, n) + t, 0 | this.wi * this.Oi.length + i) : M.size(0 | this.pp(this.Ub) + t, 0 | this.wi + i) : 0 === this.sc.height ? this.lp ? M.size(0 | e + t, 0 | this.wi * this.Oi.length + i) : M.size(0 | e + t, 0 | this.wi + i) : M.size(0 | e + t, 0 | this.sc.height + i),
                this.re(e),
                this.yE = t,
                this.zE = i,
                n = this.cd,
                this.Cb.x = .5 * t + (e.width - t) * n.x,
                this.Cb.y = .5 * i + (e.height - i) * n.y
        },
        wd: function() {
            return this.Xf && this.Ux(),
                M.O.prototype.wd.call(this)
        },
        Bh: function() {
            return this.Xf && this.Ux(),
                M.O.prototype.Bh.call(this)
        },
        Vk: function() {
            return this.Xf && this.Ux(),
                M.O.prototype.Vk.call(this)
        },
        Np: function() {
            var t = this.IC(),
                i = this.Vw,
                e = this.R;
            if (0 === this.Ub.length) return i.width = 1,
                i.height = e.height || 1,
            this.F && this.F.Fb(),
                this.yb(M.rect(0, 0, 1, e.height)),
                p;
            t.font = this.Ah,
                this.Ux();
            var n = e.width,
                e = e.height,
                r = i.width == n && i.height == e;
            return i.width = n,
                i.height = e,
            r && t.clearRect(0, 0, n, e),
                this.WX(t),
            this.F && this.F.Fb(),
                this.yb(M.rect(0, 0, n, e)),
                p
        },
        G: function(t) {
            this.Ub && "" != this.Ub && (this.Xf && (this.Xf = r, this.Np()), M.O.prototype.G.call(this, t || M.l))
        },
        Ia: q,
        BN: function(t) {
            var i = this.ba ? this.textureAtlas.texture: this.F;
            if (i) {
                var e,
                    n = i.pixelsWidth,
                    r = i.pixelsHeight,
                    s = this.Pb;
                this.Sc ? (M.fo ? (i = (2 * t.x + 1) / (2 * n), n = i + (2 * t.height - 2) / (2 * n), e = (2 * t.y + 1) / (2 * r), t = e + (2 * t.width - 2) / (2 * r)) : (i = t.x / n, n = (t.x + t.height) / n, e = t.y / r, t = (t.y + t.width) / r), this.hc && (r = e, e = t, t = r), this.ic && (r = i, i = n, n = r), s.J.p.ma = i, s.J.p.na = e, s.V.p.ma = i, s.V.p.na = t, s.U.p.ma = n, s.U.p.na = e, s.N.p.ma = n, s.N.p.na = t) : (M.fo ? (i = (2 * t.x + 1) / (2 * n), n = i + (2 * t.width - 2) / (2 * n), e = (2 * t.y + 1) / (2 * r), t = e + (2 * t.height - 2) / (2 * r)) : (i = t.x / n, n = (t.x + t.width) / n, e = t.y / r, t = (t.y + t.height) / r), this.hc && (r = i, i = n, n = r), this.ic && (r = e, e = t, t = r), s.J.p.ma = i, s.J.p.na = t, s.V.p.ma = n, s.V.p.na = t, s.U.p.ma = i, s.U.p.na = e, s.N.p.ma = n, s.N.p.na = e),
                    this.Id = p
            }
        }
    }),
    M.B === M.ya ? (T = M.Y.prototype, T.mb = function(t) {
        M.n.prototype.mb.call(this, t),
            this.zf()
    },
        T.Ye = function() {
            this.Xf && (this.Xf = r, this.Np()),
                M.n.prototype.Ye.call(this)
        },
        T.zf = function() {
            this.xc();
            var t = this.ta,
                i = this.Wa,
                e = this.xp || this.ta,
                n = this.Zm,
                r = this.an;
            this.Ax = "rgba(" + (0 | .5 * e.r) + "," + (0 | .5 * e.g) + "," + (0 | .5 * e.b) + "," + this.Nj + ")",
                this.Fw = "rgba(" + (0 | t.r / 255 * r.r) + "," + (0 | t.g / 255 * r.g) + "," + (0 | t.b / 255 * r.b) + ", " + i / 255 + ")",
                this.Fx = "rgba(" + (0 | t.r / 255 * n.r) + "," + (0 | t.g / 255 * n.g) + "," + (0 | t.b / 255 * n.b) + ", " + i / 255 + ")"
        },
        T.Zc = function(t) {
            M.n.prototype.Zc.call(this, t),
                this.zf()
        },
        T.pb = function(t) {
            this.Be !== t && (M.O.prototype.pb.call(this, t), this.zf(), this.xc())
        },
        T.Mc = M.O.prototype.Mc, T.mG = function(t, i) {
        return this.LE(i, r),
            this.string = t,
            p
    },
        T.Dz = function(t) {
            var i = this.an; (i.r != t.r || i.g != t.g || i.b != t.b) && (i.r = t.r, i.g = t.g, i.b = t.b, this.zf(), this.xc())
        },
        T.Ia = M.O.prototype.Ia, T.yb = function(t, i, e) {
        this.Sc = i || r,
            this.re(e || t),
            this.oH(t),
            i = this.$.Pi,
            i.x = t.x,
            i.y = t.y,
            i.Jq = t.x,
            i.Kq = t.y,
            i.width = t.width,
            i.height = t.height,
            i.Wl = !(0 === i.width || 0 === i.height || 0 > i.x || 0 > i.y),
            t = this.Rh,
        this.hc && (t.x = -t.x),
        this.ic && (t.y = -t.y),
            this.Jb.x = t.x + (this.R.width - this.za.width) / 2,
            this.Jb.y = t.y + (this.R.height - this.za.height) / 2,
        this.ba && (this.dirty = p)
    },
        T = q) : (M.assert(M.Vb(M.M.LB), M.i.Bd, "LabelTTFWebGL.js"), M.M.LB(), delete M.M.LB),
    M.assert(M.Vb(M.M.XA), M.i.Bd, "LabelTTFPropertyDefine.js"),
    M.M.XA(),
    delete M.M.XA,
    M.Y.f0 = ["left", "center", "right"],
    M.Y.g0 = ["top", "middle", "bottom"],
    M.Y.J8 = p,
    M.Y.x0 = /([a-zA-Z0-9\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df\u00e9\u00e8\u00e7\u00e0\u00f9\u00ea\u00e2\u00ee\u00f4\u00fb]+|\S)/,
    M.Y.e0 = /^[!,.:;}\]%\?>\u3001\u2018\u201c\u300b\uff1f\u3002\uff0c\uff01]/,
    M.Y.mZ = /([a-zA-Z0-9\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df\u00e9\u00e8\u00e7\u00e0\u00f9\u00ea\u00e2\u00ee\u00f4\u00fb]+|\S)$/,
    M.Y.lZ = /[a-zA-Z0-9\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df\u00e9\u00e8\u00e7\u00e0\u00f9\u00ea\u00e2\u00ee\u00f4\u00fb]+$/,
M.Y.$X = /^[a-zA-Z0-9\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df\u00e9\u00e8\u00e7\u00e0\u00f9\u00ea\u00e2\u00ee\u00f4\u00fb]/,
M.Y.dY = /^(\d+)px\s+['"]?([\w\s\d]+)['"]?$/,
M.Y.create = function(t, i, e, n, r, s) {
    return new M.Y(t, i, e, n, r, s)
},
M.Y.Ica = M.Y.create,
M.Y.WW = M.MW ? M.oj: M.iB,
M.Y.Ik = M.Wb("div"),
M.Y.Ik.style.fontFamily = "Arial",
M.Y.Ik.style.position = "absolute",
M.Y.Ik.style.left = "-100px",
M.Y.Ik.style.top = "-100px",
M.Y.Ik.style.lineHeight = "normal",
document.body ? document.body.appendChild(M.Y.Ik) : M.Na(window, "load",
    function() {
        this.removeEventListener("load", arguments.callee, r),
            document.body.appendChild(M.Y.Ik)
    },
    r),
M.Y.Pr = function(t, i) {
    var e = M.Y.nK[t + "." + i];
    if (e > 0) return e;
    var n = M.Y.Ik;
    return n.innerHTML = "ajghl~!",
        n.style.fontFamily = t,
        n.style.fontSize = i + "px",
        e = n.clientHeight,
        M.Y.nK[t + "." + i] = e,
        n.innerHTML = "",
        e
},
M.Y.nK = {},
M.FT = M.xa.extend({
    Ic: q,
    target: q,
    ln: 0,
    Df: q,
    vn: r,
    paused: r,
    Ey: q,
    ctor: function() {
        this.Ic = [],
            this.target = q,
            this.ln = 0,
            this.Df = q,
            this.paused = this.vn = r,
            this.Ey = q
    }
}),
M.FH = M.xa.extend({
    Dh: q,
    Ao: q,
    rc: q,
    ui: r,
    vba: function(t, i) {
        for (var e = 0; e < t.length; e++) if (i == t[e].target) return t[e];
        return q
    },
    ctor: function() {
        this.Dh = {},
            this.Ao = [],
            this.rc = q,
            this.ui = r
    },
    C0: function(t, i, e) {
        t || b("cc.ActionManager.addAction(): action must be non-null"),
        i || b("cc.ActionManager.addAction(): action must be non-null");
        var n = this.Dh[i.ka];
        n || (n = new M.FT, n.paused = e, n.target = i, this.Dh[i.ka] = n, this.Ao.push(n)),
            this.YW(n),
            n.Ic.push(t),
            t.D(i)
    },
    Qka: function() {
        for (var t = this.Ao, i = 0; i < t.length; i++) {
            var e = t[i];
            e && this.UQ(e.target, p)
        }
    },
    UQ: function(t, i) {
        if (t != q) {
            var e = this.Dh[t.ka];
            e && ( - 1 !== e.Ic.indexOf(e.Df) && !e.vn && (e.vn = p), e.Ic.length = 0, this.rc != e || i ? this.qC(e) : this.ui = p)
        }
    },
    TQ: function(t) {
        if (t != q) {
            var i = this.Dh[t.originalTarget.ka];
            if (i) {
                for (var e = 0; e < i.Ic.length; e++) if (i.Ic[e] == t) {
                    i.Ic.splice(e, 1);
                    break
                }
            } else M.log(M.i.zS)
        }
    },
    c6: function(t, i) {
        t == M.Yn && M.log(M.i.GH),
            M.assert(i, M.i.GH);
        var e = this.Dh[i.ka];
        if (e) for (var n = e.Ic.length, r = 0; n > r; ++r) {
            var s = e.Ic[r];
            if (s && s.$F() === t && s.originalTarget == i) {
                this.$Z(r, e);
                break
            }
        }
    },
    LF: function(t, i) {
        t == M.Yn && M.log(M.i.xS);
        var e = this.Dh[i.ka];
        if (e) {
            if (e.Ic != q) for (var n = 0; n < e.Ic.length; ++n) {
                var r = e.Ic[n];
                if (r && r.$F() === t) return r
            }
            M.log(M.i.yS, t)
        }
        return q
    },
    s5: function(t) {
        return (t = this.Dh[t.ka]) ? t.Ic ? t.Ic.length: 0: 0
    },
    Fq: function(t) { (t = this.Dh[t.ka]) && (t.paused = p)
    },
    mk: function(t) { (t = this.Dh[t.ka]) && (t.paused = r)
    },
    oka: function() {
        for (var t = [], i = this.Ao, e = 0; e < i.length; e++) {
            var n = i[e];
            n && !n.paused && (n.paused = p, t.push(n.target))
        }
        return t
    },
    u6: function(t) {
        if (t) for (var i = 0; i < t.length; i++) t[i] && this.mk(t[i])
    },
    zka: function() {
        M.K.Al().Au(this)
    },
    $Z: function(t, i) {
        i.Ic[t] == i.Df && !i.vn && (i.vn = p),
            i.Ic.splice(t, 1),
        i.ln >= t && i.ln--,
        0 == i.Ic.length && (this.rc == i ? this.ui = p: this.qC(i))
    },
    qC: function(t) {
        t && (delete this.Dh[t.target.ka], M.ne(this.Ao, t), t.Ic = q, t.target = q)
    },
    YW: function(t) {
        t.Ic == q && (t.Ic = [])
    },
    update: function(t) {
        for (var i, e = this.Ao, n = 0; n < e.length; n++) {
            if (i = this.rc = e[n], !i.paused) for (i.ln = 0; i.ln < i.Ic.length; i.ln++) if (i.Df = i.Ic[i.ln], i.Df) {
                if (i.vn = r, i.Df.step(t * (i.Df.Xs ? i.Df.Ee: 1)), i.vn) i.Df = q;
                else if (i.Df.gh()) {
                    i.Df.stop();
                    var s = i.Df;
                    i.Df = q,
                        this.TQ(s)
                }
                i.Df = q
            }
            this.ui && 0 === i.Ic.length && this.qC(i)
        }
    }
}),
M.Kia = Number,
M.Bha = Number,
M.Cha = Number,
M.ko = 0,
M.lo = 1,
M.yG = 3.141592,
M.Q4 = .017453,
M.R4 = 57.295779,
M.Ka = .015625,
M.Xc = function(t) {
    return t * t
},
M.Mt = function(t) {
    return t * M.Q4
},
M.Fia = function(t) {
    return t * M.R4
},
M.Uy = function(t, i) {
    return i > t ? t: i
},
M.Ty = function(t, i) {
    return t > i ? t: i
},
M.Aha = function(t, i) {
    return t + M.Ka > i && t - M.Ka < i
},
M.ci = function() {
    this.y = this.x = 0
},
M.Oia = function(t, i, e) {
    return t.x = i,
        t.y = e,
        t
},
M.Wy = function(t) {
    return Math.sqrt(M.Xc(t.x) + M.Xc(t.y))
},
M.Pia = function(t) {
    return M.Xc(t.x) + M.Xc(t.y)
},
M.X4 = function(t, i) {
    var e = 1 / M.Wy(i),
        n = new M.ci;
    n.x = i.x * e,
        n.y = i.y * e,
        t.x = n.x,
        t.y = n.y
},
M.Lia = function(t, i, e) {
    return t.x = i.x + e.x,
        t.y = i.y + e.y,
        t
},
M.Nia = function(t, i) {
    return t.x * i.x + t.y * i.y
},
M.Xy = function(t, i, e) {
    return t.x = i.x - e.x,
        t.y = i.y - e.y,
        t
},
M.Ria = function(t, i, e) {
    var n = new M.ci;
    return n.x = i.x * e.c[0] + i.y * e.c[3] + e.c[6],
        n.y = i.x * e.c[1] + i.y * e.c[4] + e.c[7],
        t.x = n.x,
        t.y = n.y,
        t
},
M.Sia = F(q),
M.Qia = function(t, i, e) {
    return t.x = i.x * e,
        t.y = i.y * e,
        t
},
M.Mia = function(t, i) {
    return t.x < i.x + M.Ka && t.x > i.x - M.Ka && t.y < i.y + M.Ka && t.y > i.y - M.Ka
},
M.rb = function(t, i, e) {
    this.x = t || 0,
        this.y = i || 0,
        this.e = e || 0
},
M.ek = function(t, i, e, n) {
    return t ? (t.x = i, t.y = e, t.e = n, t) : new M.rb(i, e, n)
},
M.tQ = function(t) {
    return Math.sqrt(M.Xc(t.x) + M.Xc(t.y) + M.Xc(t.e))
},
M.uQ = function(t) {
    return M.Xc(t.x) + M.Xc(t.y) + M.Xc(t.e)
},
M.Gf = function(t, i) {
    var e = 1 / M.tQ(i);
    t.x = i.x * e,
        t.y = i.y * e,
        t.e = i.e * e
},
M.Fl = function(t, i, e) {
    t.x = i.y * e.e - i.e * e.y,
        t.y = i.e * e.x - i.x * e.e,
        t.e = i.x * e.y - i.y * e.x
},
M.AG = function(t, i) {
    return t.x * i.x + t.y * i.y + t.e * i.e
},
M.sQ = function(t, i, e) {
    t.x = i.x + e.x,
        t.y = i.y + e.y,
        t.e = i.e + e.e
},
M.CG = function(t, i, e) {
    t.x = i.x - e.x,
        t.y = i.y - e.y,
        t.e = i.e - e.e
},
M.Xia = function(t, i, e) {
    return t.x = i.x * e.c[0] + i.y * e.c[4] + i.e * e.c[8] + e.c[12],
        t.y = i.x * e.c[1] + i.y * e.c[5] + i.e * e.c[9] + e.c[13],
        t.e = i.x * e.c[2] + i.y * e.c[6] + i.e * e.c[10] + e.c[14],
        t
},
M.Yia = function(t, i, e) {
    return t.x = i.x * e.c[0] + i.y * e.c[4] + i.e * e.c[8],
        t.y = i.x * e.c[1] + i.y * e.c[5] + i.e * e.c[9],
        t.e = i.x * e.c[2] + i.y * e.c[6] + i.e * e.c[10],
        t
},
M.vQ = function(t, i, e) {
    var n = new M.wQ,
        r = new M.wQ;
    M.Y4(r, i.x, i.y, i.e),
        M.xQ(n, r, e),
        t.x = n.x / n.L,
        t.y = n.y / n.L,
        t.e = n.e / n.L
},
M.BG = function(t, i, e) {
    return t.x = i.x * e,
        t.y = i.y * e,
        t.e = i.e * e,
        t
},
M.Tia = function(t, i) {
    return t.x < i.x + M.Ka && t.x > i.x - M.Ka && t.y < i.y + M.Ka && t.y > i.y - M.Ka && t.e < i.e + M.Ka && t.e > i.e - M.Ka ? 1: 0
},
M.Uia = function(t, i, e) {
    return i = new M.rb(i.x - e.c[12], i.y - e.c[13], i.e - e.c[14]),
        t.x = i.x * e.c[0] + i.y * e.c[1] + i.e * e.c[2],
        t.y = i.x * e.c[4] + i.y * e.c[5] + i.e * e.c[6],
        t.e = i.x * e.c[8] + i.y * e.c[9] + i.e * e.c[10],
        t
},
M.Via = function(t, i, e) {
    return t.x = i.x * e.c[0] + i.y * e.c[1] + i.e * e.c[2],
        t.y = i.x * e.c[4] + i.y * e.c[5] + i.e * e.c[6],
        t.e = i.x * e.c[8] + i.y * e.c[9] + i.e * e.c[10],
        t
},
M.Ot = function(t, i) {
    t != i && (t.x = i.x, t.y = i.y, t.e = i.e)
},
M.Zia = function(t) {
    return t.x = 0,
        t.y = 0,
        t.e = 0,
        t
},
M.Wia = function(t) {
    if (!t) return q;
    var i = new Float32Array(3);
    return i[0] = t.x,
        i[1] = t.y,
        i[2] = t.e,
        i
},
M.wQ = function() {
    this.L = this.e = this.y = this.x = 0
},
M.Y4 = function(t, i, e, n) {
    t.x = i,
        t.y = e,
        t.e = n,
        t.L = 1
},
M.$ia = function(t, i, e) {
    return t.x = i.x + e.x,
        t.y = i.y + e.y,
        t.e = i.e + e.e,
        t.L = i.L + e.L,
        t
},
M.cja = function(t, i) {
    return t.x * i.x + t.y * i.y + t.e * i.e + t.L * i.L
},
M.Z4 = function(t) {
    return Math.sqrt(M.Xc(t.x) + M.Xc(t.y) + M.Xc(t.e) + M.Xc(t.L))
},
M.dja = function(t) {
    return M.Xc(t.x) + M.Xc(t.y) + M.Xc(t.e) + M.Xc(t.L)
},
M.eja = u(),
M.a5 = function(t, i) {
    var e = 1 / M.Z4(i);
    t.x *= e,
        t.y *= e,
        t.e *= e,
        t.L *= e
},
M.fja = function(t, i, e) {
    return M.a5(t, i),
        t.x *= e,
        t.y *= e,
        t.e *= e,
        t.L *= e,
        t
},
M.gja = function(t, i, e) {
    return t.x = i.x - e.x,
        t.y = i.y - e.y,
        t.e = i.e - e.e,
        t.L = i.L - e.L,
        t
},
M.xQ = function(t, i, e) {
    t.x = i.x * e.c[0] + i.y * e.c[4] + i.e * e.c[8] + i.L * e.c[12],
        t.y = i.x * e.c[1] + i.y * e.c[5] + i.e * e.c[9] + i.L * e.c[13],
        t.e = i.x * e.c[2] + i.y * e.c[6] + i.e * e.c[10] + i.L * e.c[14],
        t.L = i.x * e.c[3] + i.y * e.c[7] + i.e * e.c[11] + i.L * e.c[15]
},
M.ija = function(t, i, e, n, r, s) {
    for (var h = 0; s > h;) M.xQ(t + h * i, e + h * n, r),
        ++h;
    return t
},
M.aja = function(t, i) {
    return t.x < i.x + M.Ka && t.x > i.x - M.Ka && t.y < i.y + M.Ka && t.y > i.y - M.Ka && t.e < i.e + M.Ka && t.e > i.e - M.Ka && t.L < i.L + M.Ka && t.L > i.L - M.Ka
},
M.bja = function(t, i) {
    return t == i ? (M.log("destVec and srcVec are same object"), t) : (t.x = i.x, t.y = i.y, t.e = i.e, t.L = i.L, t)
},
M.hja = function(t) {
    if (!t) return q;
    var i = new Float32Array(4);
    return i[0] = t.x,
        i[1] = t.y,
        i[2] = t.e,
        i[3] = t.L,
        i
},
M.Gia = function(t) {
    this.start = t || new M.ci,
        this.start = t || new M.ci
},
M.Hia = function(t, i, e, n, r) {
    t.start.x = i,
        t.start.y = e,
        t.dir.x = n,
        t.dir.y = r
},
M.zG = function(t, i, e, n) {
    var r = t.start.x,
        s = t.start.y,
        h = t.start.x + t.dir.x;
    t = t.start.y + t.dir.y;
    var a = i.x,
        o = i.y,
        c = e.x,
        u = e.y,
        f = (u - o) * (h - r) - (c - a) * (t - s);
    return f > -M.Ka && f < M.Ka ? M.ko: (o = ((c - a) * (s - o) - (u - o) * (r - a)) / f, a = r + o * (h - r), o = s + o * (t - s), a < M.Uy(i.x, e.x) - M.Ka || a > M.Ty(i.x, e.x) + M.Ka || o < M.Uy(i.y, e.y) - M.Ka || o > M.Ty(i.y, e.y) + M.Ka || a < M.Uy(r, h) - M.Ka || a > M.Ty(r, h) + M.Ka || o < M.Uy(s, t) - M.Ka || o > M.Ty(s, t) + M.Ka ? M.ko: (n.x = a, n.y = o, M.lo))
},
M.kF = function(t, i, e) {
    var n = new M.ci;
    M.Xy(n, i, t),
        e.x = -n.y,
        e.y = n.x,
        M.X4(e, e)
},
M.Jia = function(t, i, e, n, r, s) {
    var h,
        a = new M.ci,
        o = new M.ci,
        c = new M.ci,
        u = 1e4,
        f = M.ko;
    return M.zG(t, i, e, a) && (h = new M.ci, f = M.lo, h = M.Wy(M.Xy(h, a, t.start)), u > h && (o.x = a.x, o.y = a.y, u = h, M.kF(i, e, c))),
    M.zG(t, e, n, a) && (h = new M.ci, f = M.lo, h = M.Wy(M.Xy(h, a, t.start)), u > h && (o.x = a.x, o.y = a.y, u = h, M.kF(e, n, c))),
    M.zG(t, n, i, a) && (h = new M.ci, f = M.lo, h = M.Wy(M.Xy(h, a, t.start)), u > h && (o.x = a.x, o.y = a.y, M.kF(n, i, c))),
    f && (r.x = o.x, r.y = o.y, s && (s.x = c.x, s.y = c.y)),
        f
},
M.Iia = function() {
    M.log("cc.kmRay2IntersectCircle() has not been implemented.")
};
var Float32Array = Float32Array || Array;
if (M.Ry = function() {
        this.c = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0])
    },
        M.Jha = function(t, i) {
            for (var e = 0; 9 > e; e++) t.c[e] = i;
            return t
        },
        M.J4 = function(t, i) {
            t.c[0] = i.c[4] * i.c[8] - i.c[5] * i.c[7],
                t.c[1] = i.c[2] * i.c[7] - i.c[1] * i.c[8],
                t.c[2] = i.c[1] * i.c[5] - i.c[2] * i.c[4],
                t.c[3] = i.c[5] * i.c[6] - i.c[3] * i.c[8],
                t.c[4] = i.c[0] * i.c[8] - i.c[2] * i.c[6],
                t.c[5] = i.c[2] * i.c[3] - i.c[0] * i.c[5],
                t.c[6] = i.c[3] * i.c[7] - i.c[4] * i.c[6],
                t.c[8] = i.c[0] * i.c[4] - i.c[1] * i.c[3]
        },
        M.mQ = function(t) {
            t.c[1] = t.c[2] = t.c[3] = t.c[5] = t.c[6] = t.c[7] = 0,
                t.c[0] = t.c[4] = t.c[8] = 1
        },
        M.Kha = function(t, i, e) {
            var n = new M.Ry;
            return 0 === i ? q: (i = 1 / i, M.J4(n, e), M.K4(t, n, i), t)
        },
        M.Ry.RC = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), M.Lha = function(t) {
        for (var i = 0; 9 > i; i++) if (M.Ry.RC[i] !== t.c[i]) return r;
        return p
    },
        M.Wha = function(t, i) {
            var e,
                n;
            for (e = 0; 3 > e; ++e) for (n = 0; 3 > n; ++n) t.c[3 * e + n] = i.c[3 * n + e];
            return t
        },
        M.Iha = function(t) {
            var i;
            return i = t.c[0] * t.c[4] * t.c[8] + t.c[1] * t.c[5] * t.c[6] + t.c[2] * t.c[3] * t.c[7],
                i -= t.c[2] * t.c[4] * t.c[6] + t.c[0] * t.c[5] * t.c[7] + t.c[1] * t.c[3] * t.c[8]
        },
        M.Mha = function(t, i, e) {
            return i = i.c,
                e = e.c,
                t.c[0] = i[0] * e[0] + i[3] * e[1] + i[6] * e[2],
                t.c[1] = i[1] * e[0] + i[4] * e[1] + i[7] * e[2],
                t.c[2] = i[2] * e[0] + i[5] * e[1] + i[8] * e[2],
                t.c[3] = i[0] * e[3] + i[3] * e[4] + i[6] * e[5],
                t.c[4] = i[1] * e[3] + i[4] * e[4] + i[7] * e[5],
                t.c[5] = i[2] * e[3] + i[5] * e[4] + i[8] * e[5],
                t.c[6] = i[0] * e[6] + i[3] * e[7] + i[6] * e[8],
                t.c[7] = i[1] * e[6] + i[4] * e[7] + i[7] * e[8],
                t.c[8] = i[2] * e[6] + i[5] * e[7] + i[8] * e[8],
                t
        },
        M.K4 = function(t, i, e) {
            for (var n = 0; 9 > n; n++) t.c[n] = i.c[n] * e
        },
        M.Oha = function(t, i, e) {
            var n = Math.cos(e);
            return e = Math.sin(e),
                t.c[0] = n + i.x * i.x * (1 - n),
                t.c[1] = i.e * e + i.y * i.x * (1 - n),
                t.c[2] = -i.y * e + i.e * i.x * (1 - n),
                t.c[3] = -i.e * e + i.x * i.y * (1 - n),
                t.c[4] = n + i.y * i.y * (1 - n),
                t.c[5] = i.x * e + i.e * i.y * (1 - n),
                t.c[6] = i.y * e + i.x * i.e * (1 - n),
                t.c[7] = -i.x * e + i.y * i.e * (1 - n),
                t.c[8] = n + i.e * i.e * (1 - n),
                t
        },
        M.Hha = function(t, i) {
            if (t == i) return M.log("cc.kmMat3Assign(): pOut equals pIn"),
                t;
            for (var e = 0; 9 > e; e++) t.c[e] = i.c[e];
            return t
        },
        M.Gha = function(t, i) {
            if (t == i) return p;
            for (var e = 0; 9 > e; ++e) if (! (t.c[e] + M.Ka > i.c[e] && t.c[e] - M.Ka < i.c[e])) return r;
            return p
        },
        M.Rha = function(t, i) {
            return t.c[0] = 1,
                t.c[1] = 0,
                t.c[2] = 0,
                t.c[3] = 0,
                t.c[4] = Math.cos(i),
                t.c[5] = Math.sin(i),
                t.c[6] = 0,
                t.c[7] = -Math.sin(i),
                t.c[8] = Math.cos(i),
                t
        },
        M.Sha = function(t, i) {
            return t.c[0] = Math.cos(i),
                t.c[1] = 0,
                t.c[2] = -Math.sin(i),
                t.c[3] = 0,
                t.c[4] = 1,
                t.c[5] = 0,
                t.c[6] = Math.sin(i),
                t.c[7] = 0,
                t.c[8] = Math.cos(i),
                t
        },
        M.Tha = function(t, i) {
            return t.c[0] = Math.cos(i),
                t.c[1] = -Math.sin(i),
                t.c[2] = 0,
                t.c[3] = Math.sin(i),
                t.c[4] = Math.cos(i),
                t.c[5] = 0,
                t.c[6] = 0,
                t.c[7] = 0,
                t.c[8] = 1,
                t
        },
        M.Nha = function(t, i) {
            return t.c[0] = Math.cos(i),
                t.c[1] = Math.sin(i),
                t.c[2] = 0,
                t.c[3] = -Math.sin(i),
                t.c[4] = Math.cos(i),
                t.c[5] = 0,
                t.c[6] = 0,
                t.c[7] = 0,
                t.c[8] = 1,
                t
        },
        M.Uha = function(t, i, e) {
            return M.mQ(t),
                t.c[0] = i,
                t.c[4] = e,
                t
        },
        M.Vha = function(t, i, e) {
            return M.mQ(t),
                t.c[6] = i,
                t.c[7] = e,
                t
        },
        M.Pha = function(t, i) {
            return i && t ? (t.c[0] = 1 - 2 * (i.y * i.y + i.e * i.e), t.c[1] = 2 * (i.x * i.y - i.L * i.e), t.c[2] = 2 * (i.x * i.e + i.L * i.y), t.c[3] = 2 * (i.x * i.y + i.L * i.e), t.c[4] = 1 - 2 * (i.x * i.x + i.e * i.e), t.c[5] = 2 * (i.y * i.e - i.L * i.x), t.c[6] = 2 * (i.x * i.e - i.L * i.y), t.c[7] = 2 * (i.y * i.e + i.L * i.x), t.c[8] = 1 - 2 * (i.x * i.x + i.y * i.y), t) : q
        },
        M.Qha = function(t, i, e) {
            return M.qQ(k, e),
                M.rQ(k, t),
                t
        },
        M.da = function() {
            this.c = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        },
        M.Zha = function(t, i) {
            t.c[0] = t.c[1] = t.c[2] = t.c[3] = t.c[4] = t.c[5] = t.c[6] = t.c[7] = t.c[8] = t.c[9] = t.c[10] = t.c[11] = t.c[12] = t.c[13] = t.c[14] = t.c[15] = i
        },
        M.Kn = function(t) {
            t.c[1] = t.c[2] = t.c[3] = t.c[4] = t.c[6] = t.c[7] = t.c[8] = t.c[9] = t.c[11] = t.c[12] = t.c[13] = t.c[14] = 0,
                t.c[0] = t.c[5] = t.c[10] = t.c[15] = 1
        },
        M.da.Vf = function(t, i, e) {
            return t.c[i + 4 * e]
        },
        M.da.hl = function(t, i, e, n) {
            t.c[i + 4 * e] = n
        },
        M.da.ol = function(t, i, e, n, r) {
            var s = M.da.Vf(t, i, e);
            M.da.hl(t, i, e, M.da.Vf(t, n, r)),
                M.da.hl(t, n, r, s)
        },
        M.da.fY = function(t, i) {
            var e,
                n,
                r,
                s,
                h = 0,
                a = 0,
                o = [0, 0, 0, 0],
                c = [0, 0, 0, 0],
                u = [0, 0, 0, 0];
            for (e = 0; 4 > e; e++) {
                for (n = s = 0; 4 > n; n++) if (1 != u[n]) for (r = 0; 4 > r; r++) 0 == u[r] && Math.abs(M.da.Vf(t, n, r)) >= s && (s = Math.abs(M.da.Vf(t, n, r)), a = n, h = r);
                if (++u[h], a != h) {
                    for (n = 0; 4 > n; n++) M.da.ol(t, a, n, h, n);
                    for (n = 0; 4 > n; n++) M.da.ol(i, a, n, h, n)
                }
                if (c[e] = a, o[e] = h, 0 == M.da.Vf(t, h, h)) return M.ko;
                for (r = 1 / M.da.Vf(t, h, h), M.da.hl(t, h, h, 1), n = 0; 4 > n; n++) M.da.hl(t, h, n, M.da.Vf(t, h, n) * r);
                for (n = 0; 4 > n; n++) M.da.hl(i, h, n, M.da.Vf(i, h, n) * r);
                for (r = 0; 4 > r; r++) if (r != h) {
                    for (s = M.da.Vf(t, r, h), M.da.hl(t, r, h, 0), n = 0; 4 > n; n++) M.da.hl(t, r, n, M.da.Vf(t, r, n) - M.da.Vf(t, h, n) * s);
                    for (n = 0; 4 > n; n++) M.da.hl(i, r, n, M.da.Vf(t, r, n) - M.da.Vf(i, h, n) * s)
                }
            }
            for (n = 3; n >= 0; n--) if (c[n] != o[n]) for (r = 0; 4 > r; r++) M.da.ol(t, r, c[n], r, o[n]);
            return M.lo
        },
        M.da.RC = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), M.M4 = function(t, i) {
        var e = new M.da,
            n = new M.da;
        M.hg(e, i),
            M.Kn(n),
        M.da.fY(e, n) != M.ko && M.hg(t, e)
    },
        M.cia = function(t) {
            for (var i = 0; 16 > i; i++) if (M.da.RC[i] != t.c[i]) return r;
            return p
        },
        M.kia = function(t, i) {
            var e,
                n,
                r = t.c,
                s = i.c;
            for (n = 0; 4 > n; ++n) for (e = 0; 4 > e; ++e) r[4 * n + e] = s[4 * e + n];
            return t
        },
        M.ef = function(t, i, e) {
            t = t.c;
            var n = i.c[0],
                r = i.c[1],
                s = i.c[2],
                h = i.c[3],
                a = i.c[4],
                o = i.c[5],
                c = i.c[6],
                M = i.c[7],
                u = i.c[8],
                f = i.c[9],
                l = i.c[10],
                d = i.c[11],
                p = i.c[12],
                g = i.c[13],
                b = i.c[14];
            i = i.c[15];
            var v = e.c[0],
                y = e.c[1],
                x = e.c[2],
                w = e.c[3],
                m = e.c[4],
                A = e.c[5],
                E = e.c[6],
                q = e.c[7],
                T = e.c[8],
                k = e.c[9],
                R = e.c[10],
                C = e.c[11],
                F = e.c[12],
                I = e.c[13],
                B = e.c[14];
            e = e.c[15],
                t[0] = v * n + y * a + x * u + w * p,
                t[1] = v * r + y * o + x * f + w * g,
                t[2] = v * s + y * c + x * l + w * b,
                t[3] = v * h + y * M + x * d + w * i,
                t[4] = m * n + A * a + E * u + q * p,
                t[5] = m * r + A * o + E * f + q * g,
                t[6] = m * s + A * c + E * l + q * b,
                t[7] = m * h + A * M + E * d + q * i,
                t[8] = T * n + k * a + R * u + C * p,
                t[9] = T * r + k * o + R * f + C * g,
                t[10] = T * s + k * c + R * l + C * b,
                t[11] = T * h + k * M + R * d + C * i,
                t[12] = F * n + I * a + B * u + e * p,
                t[13] = F * r + I * o + B * f + e * g,
                t[14] = F * s + I * c + B * l + e * b,
                t[15] = F * h + I * M + B * d + e * i
        },
        M.d3 = function() {
            var t = M.kk.top.c,
                i = M.gk.top.c,
                e = new Float32Array(16);
            return e[0] = t[0] * i[0] + t[4] * i[1] + t[8] * i[2] + t[12] * i[3],
                e[1] = t[1] * i[0] + t[5] * i[1] + t[9] * i[2] + t[13] * i[3],
                e[2] = t[2] * i[0] + t[6] * i[1] + t[10] * i[2] + t[14] * i[3],
                e[3] = t[3] * i[0] + t[7] * i[1] + t[11] * i[2] + t[15] * i[3],
                e[4] = t[0] * i[4] + t[4] * i[5] + t[8] * i[6] + t[12] * i[7],
                e[5] = t[1] * i[4] + t[5] * i[5] + t[9] * i[6] + t[13] * i[7],
                e[6] = t[2] * i[4] + t[6] * i[5] + t[10] * i[6] + t[14] * i[7],
                e[7] = t[3] * i[4] + t[7] * i[5] + t[11] * i[6] + t[15] * i[7],
                e[8] = t[0] * i[8] + t[4] * i[9] + t[8] * i[10] + t[12] * i[11],
                e[9] = t[1] * i[8] + t[5] * i[9] + t[9] * i[10] + t[13] * i[11],
                e[10] = t[2] * i[8] + t[6] * i[9] + t[10] * i[10] + t[14] * i[11],
                e[11] = t[3] * i[8] + t[7] * i[9] + t[11] * i[10] + t[15] * i[11],
                e[12] = t[0] * i[12] + t[4] * i[13] + t[8] * i[14] + t[12] * i[15],
                e[13] = t[1] * i[12] + t[5] * i[13] + t[9] * i[14] + t[13] * i[15],
                e[14] = t[2] * i[12] + t[6] * i[13] + t[10] * i[14] + t[14] * i[15],
                e[15] = t[3] * i[12] + t[7] * i[13] + t[11] * i[14] + t[15] * i[15],
                e
        },
        M.qfa = function(t, i, e) {
            t = t.c,
                i = i.c;
            var n = e.c;
            return n[0] = t[0] * i[0] + t[4] * i[1] + t[8] * i[2] + t[12] * i[3],
                n[1] = t[1] * i[0] + t[5] * i[1] + t[9] * i[2] + t[13] * i[3],
                n[2] = t[2] * i[0] + t[6] * i[1] + t[10] * i[2] + t[14] * i[3],
                n[3] = t[3] * i[0] + t[7] * i[1] + t[11] * i[2] + t[15] * i[3],
                n[4] = t[0] * i[4] + t[4] * i[5] + t[8] * i[6] + t[12] * i[7],
                n[5] = t[1] * i[4] + t[5] * i[5] + t[9] * i[6] + t[13] * i[7],
                n[6] = t[2] * i[4] + t[6] * i[5] + t[10] * i[6] + t[14] * i[7],
                n[7] = t[3] * i[4] + t[7] * i[5] + t[11] * i[6] + t[15] * i[7],
                n[8] = t[0] * i[8] + t[4] * i[9] + t[8] * i[10] + t[12] * i[11],
                n[9] = t[1] * i[8] + t[5] * i[9] + t[9] * i[10] + t[13] * i[11],
                n[10] = t[2] * i[8] + t[6] * i[9] + t[10] * i[10] + t[14] * i[11],
                n[11] = t[3] * i[8] + t[7] * i[9] + t[11] * i[10] + t[15] * i[11],
                n[12] = t[0] * i[12] + t[4] * i[13] + t[8] * i[14] + t[12] * i[15],
                n[13] = t[1] * i[12] + t[5] * i[13] + t[9] * i[14] + t[13] * i[15],
                n[14] = t[2] * i[12] + t[6] * i[13] + t[10] * i[14] + t[14] * i[15],
                n[15] = t[3] * i[12] + t[7] * i[13] + t[11] * i[14] + t[15] * i[15],
                e.c
        },
        M.hg = function(t, i) {
            if (t == i) M.log("cc.kmMat4Assign(): pOut equals pIn");
            else {
                var e = t.c,
                    n = i.c;
                e[0] = n[0],
                    e[1] = n[1],
                    e[2] = n[2],
                    e[3] = n[3],
                    e[4] = n[4],
                    e[5] = n[5],
                    e[6] = n[6],
                    e[7] = n[7],
                    e[8] = n[8],
                    e[9] = n[9],
                    e[10] = n[10],
                    e[11] = n[11],
                    e[12] = n[12],
                    e[13] = n[13],
                    e[14] = n[14],
                    e[15] = n[15]
            }
        },
        M.Xha = function(t, i) {
            if (t == i) return M.log("cc.kmMat4AreEqual(): pMat1 and pMat2 are same object."),
                p;
            for (var e = 0; 16 > e; e++) if (! (t.c[e] + M.Ka > i.c[e] && t.c[e] - M.Ka < i.c[e])) return r;
            return p
        },
        M.hia = function(t, i) {
            return t.c[0] = 1,
                t.c[1] = 0,
                t.c[2] = 0,
                t.c[3] = 0,
                t.c[4] = 0,
                t.c[5] = Math.cos(i),
                t.c[6] = Math.sin(i),
                t.c[7] = 0,
                t.c[8] = 0,
                t.c[9] = -Math.sin(i),
                t.c[10] = Math.cos(i),
                t.c[11] = 0,
                t.c[12] = 0,
                t.c[13] = 0,
                t.c[14] = 0,
                t.c[15] = 1,
                t
        },
        M.iia = function(t, i) {
            return t.c[0] = Math.cos(i),
                t.c[1] = 0,
                t.c[2] = -Math.sin(i),
                t.c[3] = 0,
                t.c[4] = 0,
                t.c[5] = 1,
                t.c[6] = 0,
                t.c[7] = 0,
                t.c[8] = Math.sin(i),
                t.c[9] = 0,
                t.c[10] = Math.cos(i),
                t.c[11] = 0,
                t.c[12] = 0,
                t.c[13] = 0,
                t.c[14] = 0,
                t.c[15] = 1,
                t
        },
        M.jia = function(t, i) {
            return t.c[0] = Math.cos(i),
                t.c[1] = Math.sin(i),
                t.c[2] = 0,
                t.c[3] = 0,
                t.c[4] = -Math.sin(i),
                t.c[5] = Math.cos(i),
                t.c[6] = 0,
                t.c[7] = 0,
                t.c[8] = 0,
                t.c[9] = 0,
                t.c[10] = 1,
                t.c[11] = 0,
                t.c[12] = 0,
                t.c[13] = 0,
                t.c[14] = 0,
                t.c[15] = 1,
                t
        },
        M.dia = function(t, i, e, n) {
            var r = Math.cos(i);
            i = Math.sin(i);
            var s = Math.cos(e);
            e = Math.sin(e);
            var h = Math.cos(n);
            n = Math.sin(n);
            var a = i * e,
                o = r * e;
            return t.c[0] = s * h,
                t.c[4] = s * n,
                t.c[8] = -e,
                t.c[1] = a * h - r * n,
                t.c[5] = a * n + r * h,
                t.c[9] = i * s,
                t.c[2] = o * h + i * n,
                t.c[6] = o * n - i * h,
                t.c[10] = r * s,
                t.c[3] = t.c[7] = t.c[11] = 0,
                t.c[15] = 1,
                t
        },
        M.eia = function(t, i) {
            return t.c[0] = 1 - 2 * (i.y * i.y + i.e * i.e),
                t.c[1] = 2 * (i.x * i.y + i.e * i.L),
                t.c[2] = 2 * (i.x * i.e - i.y * i.L),
                t.c[3] = 0,
                t.c[4] = 2 * (i.x * i.y - i.e * i.L),
                t.c[5] = 1 - 2 * (i.x * i.x + i.e * i.e),
                t.c[6] = 2 * (i.e * i.y + i.x * i.L),
                t.c[7] = 0,
                t.c[8] = 2 * (i.x * i.e + i.y * i.L),
                t.c[9] = 2 * (i.y * i.e - i.x * i.L),
                t.c[10] = 1 - 2 * (i.x * i.x + i.y * i.y),
                t.c[11] = 0,
                t.c[12] = 0,
                t.c[13] = 0,
                t.c[14] = 0,
                t.c[15] = 1,
                t
        },
        M.gia = function(t, i, e) {
            return t.c[0] = i.c[0],
                t.c[1] = i.c[1],
                t.c[2] = i.c[2],
                t.c[3] = 0,
                t.c[4] = i.c[3],
                t.c[5] = i.c[4],
                t.c[6] = i.c[5],
                t.c[7] = 0,
                t.c[8] = i.c[6],
                t.c[9] = i.c[7],
                t.c[10] = i.c[8],
                t.c[11] = 0,
                t.c[12] = e.x,
                t.c[13] = e.y,
                t.c[14] = e.e,
                t.c[15] = 1,
                t
        },
        M.P4 = function(t, i, e, n) {
            t.c[0] = i,
                t.c[5] = e,
                t.c[10] = n,
                t.c[15] = 1,
                t.c[1] = t.c[2] = t.c[3] = t.c[4] = t.c[6] = t.c[7] = t.c[8] = t.c[9] = t.c[11] = t.c[12] = t.c[13] = t.c[14] = 0
        },
        M.Sy = function(t, i, e, n) {
            t.c[0] = t.c[5] = t.c[10] = t.c[15] = 1,
                t.c[1] = t.c[2] = t.c[3] = t.c[4] = t.c[6] = t.c[7] = t.c[8] = t.c[9] = t.c[11] = 0,
                t.c[12] = i,
                t.c[13] = e,
                t.c[14] = n
        },
        M.bia = function(t, i) {
            return t.x = i.c[4],
                t.y = i.c[5],
                t.e = i.c[6],
                M.Gf(t, t),
                t
        },
        M.aia = function(t, i) {
            return t.x = i.c[0],
                t.y = i.c[1],
                t.e = i.c[2],
                M.Gf(t, t),
                t
        },
        M.$ha = function(t, i) {
            return t.x = i.c[8],
                t.y = i.c[9],
                t.e = i.c[10],
                M.Gf(t, t),
                t
        },
        M.N4 = function(t, i, e) {
            var n = M.Mt(30),
                r = e - .1,
                s = Math.sin(n);
            0 == r || 0 == s || 0 == i || (n = Math.cos(n) / s, M.Kn(t), t.c[0] = n / i, t.c[5] = n, t.c[10] = -(e + .1) / r, t.c[11] = -1, t.c[14] = -.2 * e / r, t.c[15] = 0)
        },
        M.xG = function(t, i, e, n, r, s, h) {
            M.Kn(t),
                t.c[0] = 2 / (e - i),
                t.c[5] = 2 / (r - n),
                t.c[10] = -2 / (h - s),
                t.c[12] = -((e + i) / (e - i)),
                t.c[13] = -((r + n) / (r - n)),
                t.c[14] = -((h + s) / (h - s))
        },
        M.wG = function(t, i, e, n) {
            var r = new M.rb,
                s = new M.rb,
                h = new M.rb,
                a = new M.rb,
                o = new M.da;
            M.CG(r, e, i),
                M.Gf(r, r),
                M.Ot(s, n),
                M.Gf(s, s),
                M.Fl(h, r, s),
                M.Gf(h, h),
                M.Fl(a, h, r),
                M.Gf(h, h),
                M.Kn(t),
                t.c[0] = h.x,
                t.c[4] = h.y,
                t.c[8] = h.e,
                t.c[1] = a.x,
                t.c[5] = a.y,
                t.c[9] = a.e,
                t.c[2] = -r.x,
                t.c[6] = -r.y,
                t.c[10] = -r.e,
                M.Sy(o, -i.x, -i.y, -i.e),
                M.ef(t, t, o)
        },
        M.O4 = function(t, i, e) {
            var n = Math.cos(e);
            e = Math.sin(e);
            var r = new M.rb;
            M.Gf(r, i),
                t.c[0] = n + r.x * r.x * (1 - n),
                t.c[1] = r.e * e + r.y * r.x * (1 - n),
                t.c[2] = -r.y * e + r.e * r.x * (1 - n),
                t.c[3] = 0,
                t.c[4] = -r.e * e + r.x * r.y * (1 - n),
                t.c[5] = n + r.y * r.y * (1 - n),
                t.c[6] = r.x * e + r.e * r.y * (1 - n),
                t.c[7] = 0,
                t.c[8] = r.y * e + r.x * r.e * (1 - n),
                t.c[9] = -r.x * e + r.y * r.e * (1 - n),
                t.c[10] = n + r.e * r.e * (1 - n),
                t.c[11] = 0,
                t.c[12] = 0,
                t.c[13] = 0,
                t.c[14] = 0,
                t.c[15] = 1
        },
        M.L4 = function(t, i) {
            t.c[0] = i.c[0],
                t.c[1] = i.c[1],
                t.c[2] = i.c[2],
                t.c[3] = i.c[4],
                t.c[4] = i.c[5],
                t.c[5] = i.c[6],
                t.c[6] = i.c[8],
                t.c[7] = i.c[9],
                t.c[8] = i.c[10]
        },
        M.Yha = function(t, i, e) {
            switch (e) {
                case M.VT:
                    t.a = i.c[3] - i.c[0],
                        t.b = i.c[7] - i.c[4],
                        t.s = i.c[11] - i.c[8],
                        t.z = i.c[15] - i.c[12];
                    break;
                case M.TT:
                    t.a = i.c[3] + i.c[0],
                        t.b = i.c[7] + i.c[4],
                        t.s = i.c[11] + i.c[8],
                        t.z = i.c[15] + i.c[12];
                    break;
                case M.RT:
                    t.a = i.c[3] + i.c[1],
                        t.b = i.c[7] + i.c[5],
                        t.s = i.c[11] + i.c[9],
                        t.z = i.c[15] + i.c[13];
                    break;
                case M.WT:
                    t.a = i.c[3] - i.c[1],
                        t.b = i.c[7] - i.c[5],
                        t.s = i.c[11] - i.c[9],
                        t.z = i.c[15] - i.c[13];
                    break;
                case M.ST:
                    t.a = i.c[3] - i.c[2],
                        t.b = i.c[7] - i.c[6],
                        t.s = i.c[11] - i.c[10],
                        t.z = i.c[15] - i.c[14];
                    break;
                case M.UT:
                    t.a = i.c[3] + i.c[2],
                        t.b = i.c[7] + i.c[6],
                        t.s = i.c[11] + i.c[10],
                        t.z = i.c[15] + i.c[14];
                    break;
                default:
                    M.log("cc.kmMat4ExtractPlane(): Invalid plane index")
            }
            return i = Math.sqrt(t.a * t.a + t.b * t.b + t.s * t.s),
                t.a /= i,
                t.b /= i,
                t.s /= i,
                t.z /= i,
                t
        },
        M.fia = function(t, i, e) {
            i = new ia;
            var n = new M.Ry;
            return M.L4(n, e),
                M.qQ(i, n),
                M.rQ(i, t),
                t
        },
        M.TT = 0, M.VT = 1, M.RT = 2, M.WT = 3, M.UT = 4, M.ST = 5, M.lia = function(t, i, e, n) {
        this.a = t || 0,
            this.b = i || 0,
            this.s = e || 0,
            this.z = n || 0
    },
        M.IU = 0, M.HU = 1, M.JU = 2, M.nia = function(t, i) {
        return t.a * i.x + t.b * i.y + t.s * i.e + t.z * i.L
    },
        M.oia = function(t, i) {
            return t.a * i.x + t.b * i.y + t.s * i.e + t.z
        },
        M.pia = function(t, i) {
            return t.a * i.x + t.b * i.y + t.s * i.e
        },
        M.qia = function(t, i, e) {
            return t.a = e.x,
                t.b = e.y,
                t.s = e.e,
                t.z = -M.AG(e, i),
                t
        },
        M.ria = function(t, i, e, n) {
            var r = new M.rb,
                s = new M.rb,
                h = new M.rb;
            return M.CG(s, e, i),
                M.CG(h, n, i),
                M.Fl(r, s, h),
                M.Gf(r, r),
                t.a = r.x,
                t.b = r.y,
                t.s = r.e,
                t.z = M.AG(M.BG(r, r, -1), i),
                t
        },
        M.sia = function() {
            b("cc.kmPlaneIntersectLine() hasn't been implemented.")
        },
        M.tia = function(t, i) {
            var e = new M.rb;
            e.x = i.a,
                e.y = i.b,
                e.e = i.s;
            var n = 1 / M.tQ(e);
            return M.Gf(e, e),
                t.a = e.x,
                t.b = e.y,
                t.s = e.e,
                t.z = i.z * n,
                t
        },
        M.uia = function() {
            M.log("cc.kmPlaneScale() has not been implemented.")
        },
        M.mia = function(t, i) {
            var e = t.a * i.x + t.b * i.y + t.s * i.e + t.z;
            return e > .001 ? M.IU: -.001 > e ? M.HU: M.JU
        },
        M.T4 = function(t, i) {
            return t.x = -i.x,
                t.y = -i.y,
                t.e = -i.e,
                t.L = i.L,
                t
        },
        M.U4 = function(t, i) {
            return t.L * i.L + t.x * i.x + t.y * i.y + t.e * i.e
        },
        M.wia = u(), M.V4 = function(t) {
        t.x = 0,
            t.y = 0,
            t.e = 0,
            t.L = 1
    },
        M.xia = function(t, i) {
            var e = M.nQ(i),
                n = new ia;
            return Math.abs(e) > M.Ka ? (t.x = 0, t.y = 0, t.e = 0, t.L = 0, t) : (M.Vy(t, M.T4(n, i), 1 / e), t)
        },
        M.yia = function(t) {
            return 0 == t.x && 0 == t.y && 0 == t.e && 1 == t.L
        },
        M.nQ = function(t) {
            return Math.sqrt(M.W4(t))
        },
        M.W4 = function(t) {
            return t.x * t.x + t.y * t.y + t.e * t.e + t.L * t.L
        },
        M.zia = u(), M.Aia = function(t, i, e) {
        return t.L = i.L * e.L - i.x * e.x - i.y * e.y - i.e * e.e,
            t.x = i.L * e.x + i.x * e.L + i.y * e.e - i.e * e.y,
            t.y = i.L * e.y + i.y * e.L + i.e * e.x - i.x * e.e,
            t.e = i.L * e.e + i.e * e.L + i.x * e.y - i.y * e.x,
            t
    },
        M.oQ = function(t, i) {
            var e = M.nQ(i);
            Math.abs(e) <= M.Ka && b("cc.kmQuaternionNormalize(): pIn is an invalid value"),
                M.Vy(t, i, 1 / e)
        },
        M.pQ = function(t, i) {
            var e = .5 * M.yG,
                n = Math.sin(e);
            t.L = Math.cos(e),
                t.x = i.x * n,
                t.y = i.y * n,
                t.e = i.e * n
        },
        M.qQ = function(t, i) {
            var e,
                n,
                r,
                s;
            if (e = [], n = s = 0, i) {
                e[0] = i.c[0],
                    e[1] = i.c[3],
                    e[2] = i.c[6],
                    e[4] = i.c[1],
                    e[5] = i.c[4],
                    e[6] = i.c[7],
                    e[8] = i.c[2],
                    e[9] = i.c[5],
                    e[10] = i.c[8],
                    e[15] = 1;
                var h = e[0];
                n = h[0] + h[5] + h[10] + 1,
                    n > M.Ka ? (s = 2 * Math.sqrt(n), e = (h[9] - h[6]) / s, n = (h[2] - h[8]) / s, r = (h[4] - h[1]) / s, s *= .25) : h[0] > h[5] && h[0] > h[10] ? (s = 2 * Math.sqrt(1 + h[0] - h[5] - h[10]), e = .25 * s, n = (h[4] + h[1]) / s, r = (h[2] + h[8]) / s, s = (h[9] - h[6]) / s) : h[5] > h[10] ? (s = 2 * Math.sqrt(1 + h[5] - h[0] - h[10]), e = (h[4] + h[1]) / s, n = .25 * s, r = (h[9] + h[6]) / s, s = (h[2] - h[8]) / s) : (s = 2 * Math.sqrt(1 + h[10] - h[0] - h[5]), e = (h[2] + h[8]) / s, n = (h[9] + h[6]) / s, r = .25 * s, s = (h[4] - h[1]) / s),
                    t.x = e,
                    t.y = n,
                    t.e = r,
                    t.L = s
            }
        },
        M.Dia = function(t, i, e, n) {
            var r,
                s,
                h,
                a,
                o;
            return r = M.Mt(e) / 2,
                s = M.Mt(i) / 2,
                h = M.Mt(n) / 2,
                n = Math.cos(r),
                i = Math.cos(s),
                e = Math.cos(h),
                r = Math.sin(r),
                s = Math.sin(s),
                h = Math.sin(h),
                a = i * e,
                o = s * h,
                t.L = n * a + r * o,
                t.x = r * a - n * o,
                t.y = n * s * e + r * i * h,
                t.e = n * i * h - r * s * e,
                M.oQ(t, t),
                t
        },
        M.Eia = function(t, i, e, n) {
            if (i.x == e.x && i.y == e.y && i.e == e.e && i.L == e.L) return t.x = i.x,
                t.y = i.y,
                t.e = i.e,
                t.L = i.L,
                t;
            var r = M.U4(i, e),
                s = Math.acos(r),
                r = Math.sqrt(1 - M.Xc(r)),
                h = Math.sin(n * s) / r,
                a = new ia,
                o = new ia;
            return M.Vy(a, i, Math.sin((1 - n) * s) / r),
                M.Vy(o, e, h),
                M.S4(t, a, o),
                t
        },
        M.rQ = function(t, i) {
            var e;
            e = Math.sqrt(M.Xc(t.x) + M.Xc(t.y) + M.Xc(t.e)),
                e > -M.Ka && e < M.Ka || e < 2 * M.yG + M.Ka && e > 2 * M.yG - M.Ka ? (i.x = 0, i.y = 0, i.e = 1) : (i.x = t.x / e, i.y = t.y / e, i.e = t.e / e, M.Gf(i, i))
        },
        M.Vy = function(t, i, e) {
            t.x = i.x * e,
                t.y = i.y * e,
                t.e = i.e * e,
                t.L = i.L * e
        },
        M.via = function(t, i) {
            return t.x = i.x,
                t.y = i.y,
                t.e = i.e,
                t.L = i.L,
                t
        },
        M.S4 = function(t, i, e) {
            t.x = i.x + e.x,
                t.y = i.y + e.y,
                t.e = i.e + e.e,
                t.L = i.L + e.L
        },
        M.Cia = function(t, i, e, n) {
            var r = new M.rb,
                s = new M.rb;
            return M.Ot(r, i),
                M.Ot(s, e),
                M.Gf(r, r),
                M.Gf(s, s),
                e = M.AG(r, s),
                e >= 1 ? (M.V4(t), t) : ( - .999999 > e ? Math.abs(M.uQ(n)) < M.Ka ? M.pQ(t, n) : (r = new M.rb, s = new M.rb, s.x = 1, s.y = 0, s.e = 0, M.Fl(r, s, i), Math.abs(M.uQ(r)) < M.Ka && (s = new M.rb, s.x = 0, s.y = 1, s.e = 0, M.Fl(r, s, i)), M.Gf(r, r), M.pQ(t, r)) : (i = Math.sqrt(2 * (1 + e)), n = 1 / i, e = new M.rb, M.Fl(e, r, s), t.x = e.x * n, t.y = e.y * n, t.e = e.e * n, t.L = .5 * i, M.oQ(t, t)), t)
        },
        M.Bia = function(t, i, e) {
            var n = new M.rb,
                r = new M.rb,
                s = new M.rb;
            return s.x = i.x,
                s.y = i.y,
                s.e = i.e,
                M.Fl(n, s, e),
                M.Fl(r, s, n),
                M.BG(n, n, 2 * i.L),
                M.BG(r, r, 2),
                M.sQ(t, e, n),
                M.sQ(t, t, r),
                t
        },
        M.wha = function(t, i) {
            this.min = t || new M.rb,
                this.max = i || new M.rb
        },
        M.yha = function(t, i) {
            return t.x >= i.min.x && t.x <= i.max.x && t.y >= i.min.y && t.y <= i.max.y && t.e >= i.min.e && t.e <= i.max.e ? M.lo: M.ko
        },
        M.xha = function(t, i) {
            return M.Ot(t.min, i.min),
                M.Ot(t.max, i.max),
                t
        },
        M.zha = function() {
            M.log("cc.kmAABBScale hasn't been supported.")
        },
        M.Yy = function(t, i, e, n) {
            this.top = e,
                this.stack = n
        },
    M.Yy.c$ = 30, M.DG = function(t) {
    t.stack = [],
        t.top = q
},
    M.Zy = function(t, i) {
        t.stack.push(t.top),
            t.top = new M.da,
            M.hg(t.top, i)
    },
    M.jja = function(t) {
        t.top = t.stack.pop()
    },
    M.EG = function(t) {
        t.stack = q,
            t.top = q
    },
    M.Kf = 5888, M.Ag = 5889, M.lI = 5890, M.gk = new M.Yy, M.kk = new M.Yy, M.xu = new M.Yy, M.ob = q, M.pG = r, M.c5 = function() {
    if (!M.pG) {
        var t = new M.da;
        M.DG(M.gk),
            M.DG(M.kk),
            M.DG(M.xu),
            M.ob = M.gk,
            M.pG = p,
            M.Kn(t),
            M.Zy(M.gk, t),
            M.Zy(M.kk, t),
            M.Zy(M.xu, t)
    }
},
    M.c5(), M.H4 = function() {
    M.EG(M.gk),
        M.EG(M.kk),
        M.EG(M.xu),
        M.pG = r,
        M.ob = q
},
    M.Jn = function() {
        M.Zy(M.ob, M.ob.top)
    },
    M.Dha = function(t) {
        M.ob.stack.push(M.ob.top),
            M.hg(t, M.ob.top),
            M.ob.top = t
    },
    M.dk = function() {
        M.ob.top = M.ob.stack.pop()
    },
    M.Ke = function(t) {
        switch (t) {
            case M.Kf:
                M.ob = M.gk;
                break;
            case M.Ag:
                M.ob = M.kk;
                break;
            case M.lI:
                M.ob = M.xu;
                break;
            default:
                b("Invalid matrix mode specified")
        }
    },
    M.El = function() {
        M.Kn(M.ob.top)
    },
    M.I4 = function(t) {
        M.hg(M.ob.top, t)
    },
    M.xq = function(t) {
        M.ef(M.ob.top, M.ob.top, t)
    },
    M.yq = function(t, i) {
        var e = new M.da;
        M.Sy(e, t, i, 0),
            M.ef(M.ob.top, M.ob.top, e)
    },
    M.Eha = function(t, i, e, n) {
        i = new M.rb(i, e, n),
            e = new M.da,
            M.O4(e, i, M.Mt(t)),
            M.ef(M.ob.top, M.ob.top, e)
    },
    M.Fha = function(t, i, e) {
        var n = new M.da;
        M.P4(n, t, i, e),
            M.ef(M.ob.top, M.ob.top, n)
    },
    M.Nt = function(t, i) {
        switch (t) {
            case M.Kf:
                M.hg(i, M.gk.top);
                break;
            case M.Ag:
                M.hg(i, M.kk.top);
                break;
            case M.lI:
                M.hg(i, M.xu.top);
                break;
            default:
                b("Invalid matrix mode specified")
        }
    },
    M.eV = "precision lowp float;\nvarying vec4 v_fragmentColor;\nvoid main()                              \n{ \n    gl_FragColor = v_fragmentColor;      \n}\n", M.fV = "attribute vec4 a_position;\nuniform    vec4 u_color;\nuniform float u_pointSize;\nvarying lowp vec4 v_fragmentColor; \nvoid main(void)   \n{\n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    gl_PointSize = u_pointSize;          \n    v_fragmentColor = u_color;           \n}", M.TU = "precision lowp float; \nvarying vec4 v_fragmentColor; \nvoid main() \n{ \n     gl_FragColor = v_fragmentColor; \n} ", M.WU = "attribute vec4 a_position;\nattribute vec4 a_color;\nvarying lowp vec4 v_fragmentColor;\nvoid main()\n{\n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor = a_color;             \n}", M.UU = "// #extension GL_OES_standard_derivatives : enable\nvarying mediump vec4 v_color;\nvarying mediump vec2 v_texcoord;\nvoid main()	\n{ \n// #if defined GL_OES_standard_derivatives	\n// gl_FragColor = v_color*smoothstep(0.0, length(fwidth(v_texcoord)), 1.0 - length(v_texcoord)); \n// #else	\ngl_FragColor = v_color * step(0.0, 1.0 - length(v_texcoord)); \n// #endif \n}", M.VU = "attribute mediump vec4 a_position; \nattribute mediump vec2 a_texcoord; \nattribute mediump vec4 a_color;	\nvarying mediump vec4 v_color; \nvarying mediump vec2 v_texcoord;	\nvoid main() \n{ \n     v_color = a_color;//vec4(a_color.rgb * a_color.a, a_color.a); \n     v_texcoord = a_texcoord; \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n}", M.aV = "precision lowp float;   \nvarying vec2 v_texCoord;  \nvoid main() \n{  \n    gl_FragColor =  texture2D(CC_Texture0, v_texCoord);   \n}", M.dV = "attribute vec4 a_position; \nattribute vec2 a_texCoord; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_texCoord = a_texCoord;               \n}", M.bV = "precision lowp float;  \nuniform vec4 u_color; \nvarying vec2 v_texCoord; \nvoid main() \n{  \n    gl_FragColor =  texture2D(CC_Texture0, v_texCoord) * u_color;    \n}", M.cV = "attribute vec4 a_position;\nattribute vec2 a_texCoord; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_texCoord = a_texCoord;                 \n}", M.XU = "precision lowp float;  \nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord; \nvoid main() \n{ \n    gl_FragColor = vec4( v_fragmentColor.rgb,         \n        v_fragmentColor.a * texture2D(CC_Texture0, v_texCoord).a   \n    ); \n}", M.YU = "attribute vec4 a_position; \nattribute vec2 a_texCoord; \nattribute vec4 a_color;  \nvarying lowp vec4 v_fragmentColor; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor = a_color; \n    v_texCoord = a_texCoord; \n}", M.$U = "precision lowp float;\nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord; \nvoid main() \n{ \n    gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord); \n}", M.dJ = "attribute vec4 a_position; \nattribute vec2 a_texCoord; \nattribute vec4 a_color;  \nvarying lowp vec4 v_fragmentColor; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor = a_color; \n    v_texCoord = a_texCoord; \n}", M.ZU = "precision lowp float;   \nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord;   \nuniform float CC_alpha_value; \nvoid main() \n{  \n    vec4 texColor = texture2D(CC_Texture0, v_texCoord);  \n    if ( texColor.a <= CC_alpha_value )          \n        discard; \n    gl_FragColor = texColor * v_fragmentColor;  \n}", M.Q$ = "precision lowp float; \nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord; \nuniform sampler2D u_texture;  \nuniform sampler2D   u_mask;   \nvoid main()  \n{  \n    vec4 texColor   = texture2D(u_texture, v_texCoord);  \n    vec4 maskColor  = texture2D(u_mask, v_texCoord); \n    vec4 finalColor = vec4(texColor.r, texColor.g, texColor.b, maskColor.a * texColor.a);        \n    gl_FragColor    = v_fragmentColor * finalColor; \n}", M.be = {
    vB: 0,
    wB: 1,
    tB: 2,
    uB: 3,
    yB: 4,
    xB: 5,
    zB: 6,
    tJ: 7,
    naa: 8,
    Hd: {},
    xs: function() {
        return this.h5(),
            p
    },
    Te: function(t, i) {
        switch (i) {
            case this.vB:
                t.Yi(M.dJ, M.$U),
                    t.Md(M.Xl, M.eb),
                    t.Md(M.Zq, M.nd),
                    t.Md(M.Zn, M.bd);
                break;
            case this.wB:
                t.Yi(M.dJ, M.ZU),
                    t.Md(M.Xl, M.eb),
                    t.Md(M.Zq, M.nd),
                    t.Md(M.Zn, M.bd);
                break;
            case this.tB:
                t.Yi(M.WU, M.TU),
                    t.Md(M.Xl, M.eb),
                    t.Md(M.Zq, M.nd);
                break;
            case this.uB:
                t.Yi(M.dV, M.aV),
                    t.Md(M.Xl, M.eb),
                    t.Md(M.Zn, M.bd);
                break;
            case this.yB:
                t.Yi(M.cV, M.bV),
                    t.Md(M.Xl, M.eb),
                    t.Md(M.Zn, M.bd);
                break;
            case this.xB:
                t.Yi(M.YU, M.XU),
                    t.Md(M.Xl, M.eb),
                    t.Md(M.Zq, M.nd),
                    t.Md(M.Zn, M.bd);
                break;
            case this.zB:
                t.Yi(M.fV, M.eV),
                    t.Md("aVertex", M.eb);
                break;
            case this.tJ:
                t.Yi(M.VU, M.UU),
                    t.Md(M.Xl, M.eb),
                    t.Md(M.Zn, M.bd),
                    t.Md(M.Zq, M.nd);
                break;
            default:
                return M.log("cocos2d: cc.shaderCache._loadDefaultShader, error shader type"),
                    void 0
        }
        t.link(),
            t.C8()
    },
    h5: function() {
        var t = new M.ki;
        this.Te(t, this.vB),
            this.Hd[M.oj] = t,
            this.Hd.ShaderPositionTextureColor = t,
            t = new M.ki,
            this.Te(t, this.wB),
            this.Hd[M.yv] = t,
            this.Hd.ShaderPositionTextureColorAlphaTest = t,
            t = new M.ki,
            this.Te(t, this.tB),
            this.Hd[M.xv] = t,
            this.Hd.ShaderPositionColor = t,
            t = new M.ki,
            this.Te(t, this.uB),
            this.Hd[M.Dr] = t,
            this.Hd.ShaderPositionTexture = t,
            t = new M.ki,
            this.Te(t, this.yB),
            this.Hd[M.jB] = t,
            this.Hd.ShaderPositionTextureUColor = t,
            t = new M.ki,
            this.Te(t, this.xB),
            this.Hd[M.iB] = t,
            this.Hd.ShaderPositionTextureA8Color = t,
            t = new M.ki,
            this.Te(t, this.zB),
            this.Hd[M.kB] = t,
            this.Hd.ShaderPositionUColor = t,
            t = new M.ki,
            this.Te(t, this.tJ),
            this.Hd[M.cJ] = t,
            this.Hd.ShaderPositionLengthTextureColor = t
    },
    Oka: function() {
        var t = this.Bc(M.oj);
        t.reset(),
            this.Te(t, this.vB),
            t = this.Bc(M.yv),
            t.reset(),
            this.Te(t, this.wB),
            t = this.Bc(M.xv),
            t.reset(),
            this.Te(t, this.tB),
            t = this.Bc(M.Dr),
            t.reset(),
            this.Te(t, this.uB),
            t = this.Bc(M.jB),
            t.reset(),
            this.Te(t, this.yB),
            t = this.Bc(M.iB),
            t.reset(),
            this.Te(t, this.xB),
            t = this.Bc(M.kB),
            t.reset(),
            this.Te(t, this.zB)
    },
    Bc: function(t) {
        return this.Hd[t]
    },
    Fn: function(t) {
        return this.Hd[t]
    },
    Pba: function(t, i) {
        this.Hd[i] = t
    }
},
    M.HT = function() {
        this.location = this.value = k,
            this.Ey = {}
    },
    M.ki = M.xa.extend({
        ja: q,
        Ob: q,
        Bf: q,
        Lg: q,
        Va: q,
        Ch: q,
        NE: r,
        Ze: function(t, i) {
            if (t == q) return r;
            for (var e = p, n = q, s = 0; s < this.Ch.length; s++) this.Ch[s].location == t && (n = this.Ch[s]);
            return n ? n.value == i ? e = r: n.value = i: (n = new M.HT, n.location = t, n.value = i, this.Ch.push(n)),
                e
        },
        Saa: function() {
            return "<CCGLProgram = " + this.toString() + " | Program = " + this.Ob.toString() + ", VertexShader = " + this.Bf.toString() + ", FragmentShader = " + this.Lg.toString() + ">"
        },
        IK: function(t, i, e) {
            return e && t ? (this.ja.shaderSource(t, "precision highp float;        \nuniform mat4 CC_PMatrix;         \nuniform mat4 CC_MVMatrix;        \nuniform mat4 CC_MVPMatrix;       \nuniform vec4 CC_Time;            \nuniform vec4 CC_SinTime;         \nuniform vec4 CC_CosTime;         \nuniform vec4 CC_Random01;        \nuniform sampler2D CC_Texture0;   \n//CC INCLUDES END                \n" + e), this.ja.compileShader(t), e = this.ja.getShaderParameter(t, this.ja.COMPILE_STATUS), e || (M.log("cocos2d: ERROR: Failed to compile shader:\n" + this.ja.getShaderSource(t)), i == this.ja.VERTEX_SHADER ? M.log("cocos2d: \n" + this.F8()) : M.log("cocos2d: \n" + this.v2())), 1 == e) : r
        },
        ctor: function(t, i, e) {
            this.Va = [],
                this.Ch = [],
                this.ja = e || M.l,
            t && i && this.ha(t, i)
        },
        Sca: function() {
            this.Ch = this.Va = this.Lg = this.Bf = q,
                this.ja.deleteProgram(this.Ob)
        },
        Yi: function(t, i) {
            var e = this.ja;
            return this.Ob = e.createProgram(),
                this.Lg = this.Bf = q,
            t && (this.Bf = e.createShader(e.VERTEX_SHADER), this.IK(this.Bf, e.VERTEX_SHADER, t) || M.log("cocos2d: ERROR: Failed to compile vertex shader")),
            i && (this.Lg = e.createShader(e.FRAGMENT_SHADER), this.IK(this.Lg, e.FRAGMENT_SHADER, i) || M.log("cocos2d: ERROR: Failed to compile fragment shader")),
            this.Bf && e.attachShader(this.Ob, this.Bf),
                M.Zp(),
            this.Lg && e.attachShader(this.Ob, this.Lg),
                this.Ch.length = 0,
                M.Zp(),
                p
        },
        Nd: function(t, i) {
            return this.Yi(t, i)
        },
        i4: function(t, i) {
            var e = M.aa.Yd(t);
            e || b("Please load the resource firset : " + t);
            var n = M.aa.Yd(i);
            return n || b("Please load the resource firset : " + i),
                this.Yi(e, n)
        },
        ha: function(t, i) {
            return this.i4(t, i)
        },
        Md: function(t, i) {
            this.ja.bindAttribLocation(this.Ob, i, t)
        },
        link: function() {
            return this.Ob ? (this.ja.linkProgram(this.Ob), this.Bf && this.ja.deleteShader(this.Bf), this.Lg && this.ja.deleteShader(this.Lg), this.Lg = this.Bf = q, M.Lb.Je[M.Lb.xg.ut] && !this.ja.getProgramParameter(this.Ob, this.ja.LINK_STATUS) ? (M.log("cocos2d: ERROR: Failed to link program: " + this.ja.getProgramInfoLog(this.Ob)), M.O3(this.Ob), this.Ob = q, r) : p) : (M.log("cc.GLProgram.link(): Cannot link invalid program"), r)
        },
        sb: function() {
            M.cG(this.Ob)
        },
        C8: function() {
            this.Va[M.Lr] = this.ja.getUniformLocation(this.Ob, M.GW),
                this.Va[M.Kr] = this.ja.getUniformLocation(this.Ob, M.EW),
                this.Va[M.uo] = this.ja.getUniformLocation(this.Ob, M.FW),
                this.Va[M.Rv] = this.ja.getUniformLocation(this.Ob, M.KW),
                this.Va[M.Qv] = this.ja.getUniformLocation(this.Ob, M.JW),
                this.Va[M.Pv] = this.ja.getUniformLocation(this.Ob, M.DW),
                this.NE = this.Va[M.Rv] != q || this.Va[M.Qv] != q || this.Va[M.Pv] != q,
                this.Va[M.Mr] = this.ja.getUniformLocation(this.Ob, M.HW),
                this.Va[M.GB] = this.ja.getUniformLocation(this.Ob, M.IW),
                this.sb(),
                this.MR(this.Va[M.GB], 0)
        },
        wga: function(t) {
            return t || b("cc.GLProgram.getUniformLocationForName(): uniform name should be non-null"),
            this.Ob || b("cc.GLProgram.getUniformLocationForName(): Invalid operation. Cannot get uniform location when program is not initialized"),
                this.ja.getUniformLocation(this.Ob, t)
        },
        xga: function() {
            return this.Va[M.uo]
        },
        yga: function() {
            return this.Va[M.GB]
        },
        MR: function(t, i) {
            this.Ze(t, i) && this.ja.uniform1i(t, i)
        },
        mna: function(t, i, e) {
            this.Ze(t, [i, e]) && this.ja.uniform2i(t, i, e)
        },
        pna: function(t, i, e, n) {
            this.Ze(t, [i, e, n]) && this.ja.uniform3i(t, i, e, n)
        },
        sna: function(t, i, e, n, r) {
            this.Ze(t, [i, e, n, r]) && this.ja.uniform4i(t, i, e, n, r)
        },
        nna: function(t, i) {
            this.Ze(t, i) && this.ja.uniform2iv(t, i)
        },
        qna: function(t, i) {
            this.Ze(t, i) && this.ja.uniform3iv(t, i)
        },
        tna: function(t, i) {
            this.Ze(t, i) && this.ja.uniform4iv(t, i)
        },
        kna: function(t, i) {
            this.MR(t, i)
        },
        su: function(t, i) {
            this.Ze(t, i) && this.ja.uniform1f(t, i)
        },
        v7: function(t, i, e) {
            this.Ze(t, [i, e]) && this.ja.uniform2f(t, i, e)
        },
        w7: function(t, i, e, n) {
            this.Ze(t, [i, e, n]) && this.ja.uniform3f(t, i, e, n)
        },
        pk: function(t, i, e, n, r) {
            this.Ze(t, [i, e, n, r]) && this.ja.uniform4f(t, i, e, n, r)
        },
        lna: function(t, i) {
            this.Ze(t, i) && this.ja.uniform2fv(t, i)
        },
        ona: function(t, i) {
            this.Ze(t, i) && this.ja.uniform3fv(t, i)
        },
        rna: function(t, i) {
            this.Ze(t, i) && this.ja.uniform4fv(t, i)
        },
        Oq: function(t, i) {
            this.Ze(t, i) && this.ja.uniformMatrix4fv(t, r, i)
        },
        jna: function() {
            if (! (2 > arguments.length)) switch (arguments.length) {
                case 2:
                    this.su(arguments[0], arguments[1]);
                    break;
                case 3:
                    this.v7(arguments[0], arguments[1], arguments[2]);
                    break;
                case 4:
                    this.w7(arguments[0], arguments[1], arguments[2], arguments[3]);
                    break;
                case 5:
                    this.pk(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4])
            }
        },
        tu: function() {
            var t = new M.da,
                i = new M.da,
                e = new M.da;
            M.Nt(M.Ag, t),
                M.Nt(M.Kf, i),
                M.ef(e, t, i),
                this.Oq(this.Va[M.Lr], t.c, 1),
                this.Oq(this.Va[M.Kr], i.c, 1),
                this.Oq(this.Va[M.uo], e.c, 1),
            this.NE && (t = M.K, t = t.ft * t.yo, this.pk(this.Va[M.Rv], t / 10, t, 2 * t, 4 * t), this.pk(this.Va[M.Qv], t / 8, t / 4, t / 2, Math.sin(t)), this.pk(this.Va[M.Pv], t / 8, t / 4, t / 2, Math.cos(t))),
            -1 != this.Va[M.Mr] && this.pk(this.Va[M.Mr], Math.random(), Math.random(), Math.random(), Math.random())
        },
        Aba: function(t) {
            var i = new M.da,
                e = new M.da;
            M.Nt(M.Ag, i),
                M.ef(e, i, t.Kb),
                this.Oq(this.Va[M.Lr], i.c, 1),
                this.Oq(this.Va[M.Kr], t.Kb.c, 1),
                this.Oq(this.Va[M.uo], e.c, 1),
            this.NE && (t = M.K, t = t.ft * t.yo, this.pk(this.Va[M.Rv], t / 10, t, 2 * t, 4 * t), this.pk(this.Va[M.Qv], t / 8, t / 4, t / 2, Math.sin(t)), this.pk(this.Va[M.Pv], t / 8, t / 4, t / 2, Math.cos(t))),
            -1 != this.Va[M.Mr] && this.pk(this.Va[M.Mr], Math.random(), Math.random(), Math.random(), Math.random())
        },
        hna: function() {
            this.ja.uniformMatrix4fv(this.Va[M.uo], r, M.d3())
        },
        ina: function(t) {
            M.ef(t, M.kk.top, M.gk.top),
                this.ja.uniformMatrix4fv(this.Va[M.uo], r, t.c)
        },
        lf: function() {
            this.ja.uniformMatrix4fv(this.Va[M.Kr], r, M.gk.top.c),
                this.ja.uniformMatrix4fv(this.Va[M.Lr], r, M.kk.top.c)
        },
        Oh: function(t) {
            t || b("modelView matrix is undefined."),
                this.ja.uniformMatrix4fv(this.Va[M.Kr], r, t.c),
                this.ja.uniformMatrix4fv(this.Va[M.Lr], r, M.kk.top.c)
        },
        F8: function() {
            return this.ja.getShaderInfoLog(this.Bf)
        },
        Dga: function() {
            return this.ja.getShaderInfoLog(this.Bf)
        },
        Vea: function() {
            return this.ja.getShaderInfoLog(this.Bf)
        },
        v2: function() {
            return this.ja.getShaderInfoLog(this.Lg)
        },
        wka: function() {
            return this.ja.getProgramInfoLog(this.Ob)
        },
        Nfa: function() {
            return this.ja.getProgramInfoLog(this.Ob)
        },
        reset: function() {
            this.Lg = this.Bf = q,
                this.Va.length = 0,
                this.ja.deleteProgram(this.Ob),
                this.Ob = q;
            for (var t = 0; t < this.Ch.length; t++) this.Ch[t].value = q,
                this.Ch[t] = q;
            this.Ch.length = 0
        },
        Fn: E("Ob"),
        xz: z(),
        fj: z()
    }), M.ki.create = function(t, i) {
    return new M.ki(t, i)
},
    M.AR = function(t, i) {
        t.shaderProgram = i;
        var e = t.children;
        if (e) for (var n = 0; n < e.length; n++) M.AR(e[n], i)
    },
    M.PK = -1, M.QE = r, M.PE = r, M.RE = r, M.th && (M.gU = 16, M.gs = -1, M.fs = [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], M.Fo = -1, M.Eo = -1, M.UW = 0, M.nB && (M.YN = 0)), M.Lga = function() {
    if (M.H4(), M.PK = -1, M.QE = r, M.PE = r, M.RE = r, M.th) {
        M.gs = -1;
        for (var t = 0; t < M.gU; t++) M.fs[t] = -1;
        M.Fo = -1,
            M.Eo = -1,
            M.UW = 0
    }
},
    M.cG = function(t) {
        t !== M.gs && (M.gs = t, M.l.useProgram(t))
    },
M.th || (M.cG = function(t) {
    M.l.useProgram(t)
}), M.O3 = function(t) {
    M.th && t === M.gs && (M.gs = -1),
        gl.deleteProgram(t)
},
    M.kd = function(t, i) { (t !== M.Fo || i !== M.Eo) && (M.Fo = t, M.Eo = i, M.Bz(t, i))
    },
    M.Bz = function(t, i) {
        var e = M.l;
        t === e.ONE && i === e.ZERO ? e.disable(e.BLEND) : (e.enable(e.BLEND), M.l.blendFunc(t, i))
    },
    M.Ay = function(t, i) {
        if (t !== M.Fo || i !== M.Eo) {
            M.Fo = t,
                M.Eo = i;
            var e = M.l;
            t === e.ONE && i === e.ZERO ? e.disable(e.BLEND) : (e.enable(e.BLEND), e.blendFuncSeparate(e.SRC_ALPHA, i, t, i))
        }
    },
M.th || (M.kd = M.Bz), M.Iga = function() {
    var t = M.l;
    t.blendEquation(t.FUNC_ADD),
        M.th ? M.Bz(M.Fo, M.Eo) : M.Bz(t.pc, t.oc)
},
    M.BR = function() {
        M.PK = -1
    },
    M.Sb = function(t) {
        var i = M.l,
            e = t & M.Dd;
        e !== M.QE && (e ? i.enableVertexAttribArray(M.eb) : i.disableVertexAttribArray(M.eb), M.QE = e),
            e = t & M.vo,
        e !== M.PE && (e ? i.enableVertexAttribArray(M.nd) : i.disableVertexAttribArray(M.nd), M.PE = e),
            t &= M.wo,
        t !== M.RE && (t ? i.enableVertexAttribArray(M.bd) : i.disableVertexAttribArray(M.bd), M.RE = t)
    },
    M.yd = function(t) {
        M.zy(0, t)
    },
    M.zy = function(t, i) {
        if (M.fs[t] != i) {
            M.fs[t] = i;
            var e = M.l;
            e.activeTexture(e.TEXTURE0 + t),
                i ? e.bindTexture(e.TEXTURE_2D, i.me) : e.bindTexture(e.TEXTURE_2D, q)
        }
    },
M.th || (M.zy = function(t, i) {
    var e = M.l;
    e.activeTexture(e.TEXTURE0 + t),
        i ? e.bindTexture(e.TEXTURE_2D, i.me) : e.bindTexture(e.TEXTURE_2D, q)
}), M.Jga = function(t) {
    M.P3(t)
},
    M.P3 = function(t) {
        M.th && t == M.fs[0] && (M.fs[0] = -1),
            M.l.deleteTexture(t)
    },
    M.Hga = function(t) {
        M.nB && M.th && M.YN != t && (M.YN = t)
    },
    M.Kga = z(), M.X9 = 0, M.Y9 = 1, M.Z9 = 9, M.wk = function(t) {
    return t -= 1,
        t |= t >> 1,
        t |= t >> 2,
        t |= t >> 4,
        t |= t >> 8,
    (t | t >> 16) + 1
},
    M.qo = M.n.extend({
        sprite: q,
        rt: 0,
        ey: 0,
        pn: r,
        Td: q,
        fe: q,
        Ew: 0,
        wm: 0,
        Ei: 0,
        F: q,
        dt: q,
        k0: q,
        Gi: M.fa.nj,
        Pf: q,
        fy: 0,
        mC: q,
        Hb: "RenderTexture",
        Kaa: q,
        Paa: q,
        Oaa: q,
        Jaa: q,
        Waa: q,
        ctor: q,
        cs: function(t, i, e, n) {
            M.n.prototype.ctor.call(this),
                this.Of = this.rf = p,
                this.Pf = M.color(255, 255, 255, 255),
                this.mC = "rgba(255,255,255,1)",
                this.Td = M.Wb("canvas"),
                this.fe = this.Td.getContext("2d"),
                this.anchorY = this.anchorX = 0,
            t !== k && i !== k && (e = e || M.fa.nj, this.My(t, i, e, n || 0))
        },
        Vd: function() {
            M.B === M.Z && (this.$ = new M.ZI(this))
        },
        ds: function(t, i, e, n) {
            M.n.prototype.ctor.call(this),
                this.Of = this.rf = p,
                this.Pf = M.color(0, 0, 0, 0),
            t !== k && i !== k && (e = e || M.fa.nj, this.My(t, i, e, n || 0))
        },
        bf: q,
        xX: function() {
            M.n.prototype.xb.call(this),
                this.Td = this.fe = q
        },
        yX: function() {
            M.n.prototype.xb.call(this),
                this.dt = q;
            var t = M.l;
            t.deleteFramebuffer(this.Ew),
            this.wm && t.deleteRenderbuffer(this.wm),
                this.k0 = q
        },
        FP: E("sprite"),
        Mz: A("sprite"),
        My: q,
        $Y: function(t, i) {
            var e = this.Td,
                n = M.zb();
            return e.width = 0 | t * n,
                e.height = 0 | i * n,
                this.fe.translate(0, e.height),
                n = new M.fa,
                n.ld(e),
                n.Fb(),
                e = this.sprite = new M.O(n),
                e.Od(M.ONE, M.ONE_MINUS_SRC_ALPHA),
                this.pn = r,
                this.T(e),
                p
        },
        aZ: function(t, i, e, n) {
            e == M.fa.xr && M.log("cc.RenderTexture._initWithWidthAndHeightForWebGL() : only RGB and RGBA formats are valid for a render texture;");
            var s = M.l,
                h = M.zb();
            t = 0 | t * h,
                i = 0 | i * h,
                this.Ei = s.getParameter(s.FRAMEBUFFER_BINDING);
            var a;
            M.$p.Lx ? (h = t, a = i) : (h = M.wk(t), a = M.wk(i));
            for (var o = new Uint8Array(4 * h * a), c = 0; 4 * h * a > c; c++) o[c] = 0;
            if (this.Gi = e, this.F = new M.fa, !this.F) return r;
            if (c = this.F, c.Ht(o, this.Gi, h, a, M.size(t, i)), e = s.getParameter(s.RENDERBUFFER_BINDING), M.$p.Yp("GL_QCOM")) {
                if (this.dt = new M.fa, !this.dt) return r;
                this.dt.Ht(o, this.Gi, h, a, M.size(t, i))
            }
            return this.Ew = s.createFramebuffer(),
                s.bindFramebuffer(s.FRAMEBUFFER, this.Ew),
                s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, c.me, 0),
            0 != n && (this.wm = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, this.wm), s.renderbufferStorage(s.RENDERBUFFER, n, h, a), n == s.DEPTH_STENCIL ? s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, this.wm) : n == s.STENCIL_INDEX || n == s.STENCIL_INDEX8 ? s.framebufferRenderbuffer(s.FRAMEBUFFER, s.STENCIL_ATTACHMENT, s.RENDERBUFFER, this.wm) : n == s.DEPTH_COMPONENT16 && s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, this.wm)),
            s.checkFramebufferStatus(s.FRAMEBUFFER) !== s.FRAMEBUFFER_COMPLETE && M.log("Could not attach texture to the framebuffer"),
                c.YG(),
                t = this.sprite = new M.O(c),
                t.scaleY = -1,
                t.Od(s.ONE, s.ONE_MINUS_SRC_ALPHA),
                s.bindRenderbuffer(s.RENDERBUFFER, e),
                s.bindFramebuffer(s.FRAMEBUFFER, this.Ei),
                this.pn = r,
                this.T(t),
                p
        },
        $g: q,
        kX: function() {
            M.ia.Jp(this.ka)
        },
        lX: function() {
            M.ia.Jp(this.ka),
                M.Ke(M.Ag),
                M.Jn(),
                M.Ke(M.Kf),
                M.Jn();
            var t = M.K;
            t.Tn(t.Gn());
            var i = this.F.R,
                e = M.K.Dt(),
                t = e.width / i.width,
                e = e.height / i.height,
                n = M.l;
            n.viewport(0, 0, i.width, i.height),
                i = new M.da,
                M.xG(i, -1 / t, 1 / t, -1 / e, 1 / e, -1, 1),
                M.xq(i),
                this.Ei = n.getParameter(n.FRAMEBUFFER_BINDING),
                n.bindFramebuffer(n.FRAMEBUFFER, this.Ew),
            M.$p.Yp("GL_QCOM") && (n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, this.dt.me, 0), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, this.F.me, 0))
        },
        g1: function(t, i, e, n, r, s) {
            var h = M.l;
            r = r || h.COLOR_BUFFER_BIT,
                s = s || h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT,
                this.cC(t, i, e, n, r, s, h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT | h.STENCIL_BUFFER_BIT)
        },
        cC: q,
        mX: function(t, i, e, n) {
            this.$g(),
                t = t || 0,
                i = i || 0,
                e = e || 0,
                n = isNaN(n) ? 1: n;
            var r = this.fe,
                s = this.Td;
            r.save(),
                r.fillStyle = "rgba(" + (0 | t) + "," + (0 | i) + "," + (0 | e) + "," + n / 255 + ")",
                r.clearRect(0, 0, s.width, -s.height),
                r.fillRect(0, 0, s.width, -s.height),
                r.restore()
        },
        nX: function(t, i, e, n, r, s, h) {
            t /= 255,
                i /= 255,
                e /= 255,
                n /= 255,
                this.$g();
            var a = M.l,
                o = [0, 0, 0, 0],
                c = 0,
                u = 0;
            h & a.COLOR_BUFFER_BIT && (o = a.getParameter(a.COLOR_CLEAR_VALUE), a.clearColor(t, i, e, n)),
            h & a.DEPTH_BUFFER_BIT && (c = a.getParameter(a.DEPTH_CLEAR_VALUE), a.clearDepth(r)),
            h & a.STENCIL_BUFFER_BIT && (u = a.getParameter(a.STENCIL_CLEAR_VALUE), a.clearStencil(s)),
                a.clear(h),
            h & a.COLOR_BUFFER_BIT && a.clearColor(o[0], o[1], o[2], o[3]),
            h & a.DEPTH_BUFFER_BIT && a.clearDepth(c),
            h & a.STENCIL_BUFFER_BIT && a.clearStencil(u)
        },
        end: q,
        YX: function() {
            M.ia.sx(this.fe, this.ka)
        },
        ZX: function() {
            M.ia.g_(this.ka);
            var t = M.l,
                i = M.K;
            t.bindFramebuffer(t.FRAMEBUFFER, this.Ei),
                i.pH(),
                M.Ke(M.Ag),
                M.dk(),
                M.Ke(M.Kf),
                M.dk()
        },
        clear: function(t, i, e, n) {
            this.g1(t, i, e, n),
                this.end()
        },
        clearRect: q,
        BX: function(t, i, e, n) {
            this.fe.clearRect(t, i, e, -n)
        },
        CX: z(),
        clearDepth: q,
        zX: function() {
            M.log("clearDepth isn't supported on Cocos2d-Html5")
        },
        AX: function(t) {
            this.$g();
            var i = M.l,
                e = i.getParameter(i.DEPTH_CLEAR_VALUE);
            i.clearDepth(t),
                i.clear(i.DEPTH_BUFFER_BIT),
                i.clearDepth(e),
                this.end()
        },
        clearStencil: q,
        DX: function() {
            M.log("clearDepth isn't supported on Cocos2d-Html5")
        },
        EX: function(t) {
            var i = M.l,
                e = i.getParameter(i.STENCIL_CLEAR_VALUE);
            i.clearStencil(t),
                i.clear(i.STENCIL_BUFFER_BIT),
                i.clearStencil(e)
        },
        G: q,
        hn: function(t) {
            this.zc && (t = t || M.l, this.transform(t), this.sprite.G(t))
        },
        jt: function(t) {
            this.zc && (M.Jn(), this.transform(t), this.sprite.G(), this.$ && M.ia.nc(this.$), M.dk())
        },
        Ia: q,
        Ro: function(t) {
            if (t = t || M.l, this.pn) {
                if (this.$g(), this.rt) {
                    var i = this.Td;
                    t.save(),
                        t.fillStyle = this.mC,
                        t.clearRect(0, 0, i.width, -i.height),
                        t.fillRect(0, 0, i.width, -i.height),
                        t.restore()
                }
                this.Lc(),
                    t = this.u;
                for (var i = t.length, e = this.sprite, n = 0; i > n; n++) {
                    var r = t[n];
                    r != e && r.G()
                }
                this.end()
            }
        },
        uj: function() {
            var t = M.l;
            if (this.pn) {
                this.$g();
                var i = this.rt;
                if (i) {
                    var e = [0, 0, 0, 0],
                        n = 0,
                        r = 0;
                    i & t.COLOR_BUFFER_BIT && (e = t.getParameter(t.COLOR_CLEAR_VALUE), t.clearColor(this.Pf.r / 255, this.Pf.g / 255, this.Pf.b / 255, this.Pf.a / 255)),
                    i & t.DEPTH_BUFFER_BIT && (n = t.getParameter(t.DEPTH_CLEAR_VALUE), t.clearDepth(this.ey)),
                    i & t.STENCIL_BUFFER_BIT && (r = t.getParameter(t.STENCIL_CLEAR_VALUE), t.clearStencil(this.fy)),
                        t.clear(i),
                    i & t.COLOR_BUFFER_BIT && t.clearColor(e[0], e[1], e[2], e[3]),
                    i & t.DEPTH_BUFFER_BIT && t.clearDepth(n),
                    i & t.STENCIL_BUFFER_BIT && t.clearStencil(r)
                }
                for (this.Lc(), t = this.u, i = 0; i < t.length; i++) e = t[i],
                e != this.sprite && e.G();
                this.end()
            }
        },
        xja: function() {
            return M.log("saveToFile isn't supported on cocos2d-html5"),
                q
        },
        mba: function(t, i, e, n, r) {
            for (var s = 0; r > s; s++) t[i + s] = e[n + s]
        },
        kla: function() {
            M.log("saveToFile isn't supported on Cocos2d-Html5")
        },
        mja: function() {
            M.log("listenToBackground isn't supported on Cocos2d-Html5")
        },
        nja: function() {
            M.log("listenToForeground isn't supported on Cocos2d-Html5")
        },
        rea: E("rt"),
        Ela: A("rt"),
        D2: E("Pf"),
        $G: q,
        o_: function(t) {
            var i = this.Pf;
            i.r = t.r,
                i.g = t.g,
                i.b = t.b,
                i.a = t.a,
                this.mC = "rgba(" + (0 | t.r) + "," + (0 | t.g) + "," + (0 | t.b) + "," + t.a / 255 + ")"
        },
        p_: function(t) {
            var i = this.Pf;
            i.r = t.r,
                i.g = t.g,
                i.b = t.b,
                i.a = t.a
        },
        qea: E("ey"),
        Dla: A("ey"),
        sea: E("fy"),
        Fla: A("fy"),
        Xga: E("pn"),
        wla: A("pn")
    }), T = M.qo.prototype, M.B == M.Z ? (T.ctor = T.ds, T.bf = T.yX, T.My = T.aZ, T.$g = T.lX, T.cC = T.nX, T.end = T.ZX, T.clearRect = T.CX, T.clearDepth = T.AX, T.clearStencil = T.EX, T.G = T.jt, T.Ia = T.uj, T.$G = T.p_) : (T.ctor = T.cs, T.bf = T.xX, T.My = T.$Y, T.$g = T.kX, T.cC = T.mX, T.end = T.YX, T.clearRect = T.BX, T.clearDepth = T.zX, T.clearStencil = T.DX, T.G = T.hn, T.Ia = T.Ro, T.$G = T.o_), M.k(T, "clearColorVal", T.D2, T.$G), M.qo.create = function(t, i, e, n) {
    return new M.qo(t, i, e, n)
},
    M.li = M.rk.extend({
        Ub: q,
        dD: q,
        Aa: r,
        Hb: "LabelAtlas",
        ctor: function(t, i, e, n, r) {
            M.rk.prototype.ctor.call(this),
                this.rf = this.Of = p,
            i && M.li.prototype.Nd.call(this, t, i, e, n, r)
        },
        wu: E("Aa"),
        nt: function(t, i) {
            this.addEventListener("load", t, i)
        },
        Nd: function(t, i, e, n, s) {
            var h,
                a,
                o = t + "";
            if (e === k) {
                if (e = M.aa.Yd(i), 1 !== parseInt(e.version, 10)) return M.log("cc.LabelAtlas.initWithString(): Unsupported version. Upgrade cocos2d version"),
                    r;
                i = M.path.Xp(i, e.textureFilename),
                    n = M.zb(),
                    h = parseInt(e.itemWidth, 10) / n,
                    a = parseInt(e.itemHeight, 10) / n,
                    e = String.fromCharCode(parseInt(e.firstChar, 10))
            } else h = e || 0,
                a = n || 0,
                e = s || " ";
            var c = q,
                c = i instanceof M.fa ? i: M.Ma.Vc(i);
            return (this.Aa = i = c.Db) || c.addEventListener("load",
                function() {
                    this.Ca(c, h, a, o.length),
                        this.string = o,
                        this.dispatchEvent("load")
                },
                this),
                this.Ca(c, h, a, o.length) ? (this.dD = e, this.string = o, p) : r
        },
        mb: function(t) {
            M.rk.prototype.mb.call(this, t),
                this.Xq()
        },
        Bl: E("Ub"),
        Ia: function(t) {
            M.rk.prototype.Ia.call(this, t),
            M.YT && (t = this.size, t = [M.d(0, 0), M.d(t.width, 0), M.d(t.width, t.height), M.d(0, t.height)], M.ye.qe(t, 4, p))
        },
        VB: function(t, i, e) {
            t.nZ = p,
                M.n.prototype.T.call(this, t, i, e)
        },
        Xq: q,
        l0: function() {
            for (var t = this.Ub || "", i = t.length, e = this.texture, n = this.zi, s = this.Gh, h = 0; i > h; h++) {
                var a = t.charCodeAt(h) - this.dD.charCodeAt(0),
                    a = M.rect(parseInt(a % this.mp, 10) * n, parseInt(a / this.mp, 10) * s, n, s),
                    o = t.charCodeAt(h),
                    c = this.Yh(h);
                c ? 32 == o ? (c.ha(), c.yb(M.rect(0, 0, 10, 10), r, M.size(0, 0))) : (c.Ca(e, a), c.visible = p) : (c = new M.O, 32 == o ? (c.ha(), c.yb(M.rect(0, 0, 10, 10), r, M.size(0, 0))) : c.Ca(e, a), M.n.prototype.T.call(this, c, 0, h)),
                    c.H(h * n + n / 2, s / 2)
            }
        },
        m0: function() {
            var t = this.Ub,
                i = t.length,
                e = this.textureAtlas,
                n = e.texture,
                r = n.pixelsWidth,
                n = n.pixelsHeight,
                s = this.zi,
                h = this.Gh;
            this.Nw || (s = this.zi * M.zb(), h = this.Gh * M.zb()),
            i > e.pd && M.log("cc.LabelAtlas._updateAtlasValues(): Invalid String length");
            for (var a = e.quads, o = this.ta, o = {
                    r: o.r,
                    g: o.g,
                    b: o.b,
                    a: this.Wa
                },
                     c = this.zi, u = 0; i > u; u++) {
                var f,
                    l = t.charCodeAt(u) - this.dD.charCodeAt(0),
                    d = l % this.mp,
                    g = 0 | l / this.mp;
                M.fo ? (d = (2 * d * s + 1) / (2 * r), l = d + (2 * s - 2) / (2 * r), g = (2 * g * h + 1) / (2 * n), f = g + (2 * h - 2) / (2 * n)) : (d = d * s / r, l = d + s / r, g = g * h / n, f = g + h / n);
                var b = a[u],
                    v = b.U,
                    y = b.N,
                    x = b.J,
                    b = b.V;
                v.p.ma = d,
                    v.p.na = g,
                    y.p.ma = l,
                    y.p.na = g,
                    x.p.ma = d,
                    x.p.na = f,
                    b.p.ma = l,
                    b.p.na = f,
                    x.j.x = u * c,
                    x.j.y = 0,
                    x.j.e = 0,
                    b.j.x = u * c + c,
                    b.j.y = 0,
                    b.j.e = 0,
                    v.j.x = u * c,
                    v.j.y = this.Gh,
                    v.j.e = 0,
                    y.j.x = u * c + c,
                    y.j.y = this.Gh,
                    y.j.e = 0,
                    v.A = o,
                    y.A = o,
                    x.A = o,
                    b.A = o
            }
            i > 0 && (e.dirty = p, t = e.totalQuads, i > t && e.SP(i - t))
        },
        Kc: q,
        M_: function(t) {
            t = String(t);
            var i = t.length;
            if (this.Ub = t, this.width = i * this.zi, this.height = this.Gh, this.u) {
                t = this.u;
                for (var i = t.length, e = 0; i > e; e++) {
                    var n = t[e];
                    n && !n.nZ && (n.visible = r)
                }
            }
            this.Xq(),
                this.quadsToDraw = i
        },
        O_: function(t) {
            t = String(t);
            var i = t.length;
            i > this.textureAtlas.totalQuads && this.textureAtlas.wz(i),
                this.Ub = t,
                this.width = i * this.zi,
                this.height = this.Gh,
                this.Xq(),
                this.quadsToDraw = i
        },
        pb: q,
        hE: function(t) {
            this.Be !== t && M.rk.prototype.pb.call(this, t)
        }
    }), T = M.li.prototype, M.uh.prototype.apply(T), M.B === M.Z ? (T.Xq = T.m0, T.Kc = T.O_, T.pb = T.hE) : (T.Xq = T.l0, T.Kc = T.M_, T.pb = T.zN, T.T = T.VB), M.k(T, "opacity", T.bh, T.pb), M.k(T, "color", T.fg, T.mb), M.k(T, "string", T.Bl, T.Kc), M.li.create = function(t, i, e, n, r) {
    return new M.li(t, i, e, n, r)
},
    M.g$ = -1, M.CA = M.Pe.extend({
    kb: r,
    Ub: "",
    Qf: q,
    Hw: "",
    ip: "",
    Sr: M.mi,
    kt: -1,
    EM: r,
    Ow: q,
    oN: q,
    Wa: 255,
    Rg: 255,
    ta: q,
    ke: q,
    rf: p,
    Of: p,
    Aa: r,
    Hb: "LabelBMFont",
    AN: function(t, i) {
        i ? this.ip = t: this.Ub = t;
        var e = this.u;
        if (e) for (var n = 0; n < e.length; n++) {
            var s = e[n];
            s && s.Oz(r)
        }
        this.Aa && (this.jy(), i && this.ug())
    },
    ctor: function(t, i, e, n, r) {
        M.Pe.prototype.ctor.call(this),
            this.Ow = M.d(0, 0),
            this.ta = M.color(255, 255, 255, 255),
            this.ke = M.color(255, 255, 255, 255),
            this.oN = [],
            this.Nd(t, i, e, n, r)
    },
    wu: E("Aa"),
    nt: function(t, i) {
        this.addEventListener("load", t, i)
    },
    Ia: function(t) {
        if (M.Pe.prototype.Ia.call(this, t), M.ZT) {
            t = this.wd();
            var i = M.d(0 | -this.Cb.x, 0 | -this.Cb.y);
            t = [M.d(i.x, i.y), M.d(i.x + t.width, i.y), M.d(i.x + t.width, i.y + t.height), M.d(i.x, i.y + t.height)],
                M.ye.If(0, 255, 0, 255),
                M.ye.qe(t, 4, p)
        }
    },
    mb: function(t) {
        var i = this.ta,
            e = this.ke;
        e.r == t.r && e.g == t.g && e.b == t.b && e.a == t.a || (i.r = e.r = t.r, i.g = e.g = t.g, i.b = e.b = t.b, this.Aa && this.rf && (t = M.color.WHITE, (i = this.Ha) && i.cascadeColor && (t = i.py()), this.Zc(t)))
    },
    gg: E("kb"),
    Jf: function(t) {
        if (this.kb = t, t = this.u) for (var i = 0; i < t.length; i++) {
            var e = t[i];
            e && (e.opacityModifyRGB = this.kb)
        }
    },
    bh: E("Rg"),
    L2: E("Wa"),
    pb: function(t) {
        if (this.Wa = this.Rg = t, this.Of) {
            var i = 255,
                e = this.Ha;
            e && e.cascadeOpacity && (i = e.Wa),
                this.Mc(i)
        }
        this.ta.a = this.ke.a = t
    },
    Mc: function(t) {
        this.Wa = this.Rg * t / 255,
            t = this.u;
        for (var i = 0; i < t.length; i++) {
            var e = t[i];
            M.B == M.Z ? e.Mc(this.Wa) : (M.n.prototype.Mc.call(e, this.Wa), e.La())
        }
        this.ve()
    },
    jQ: F(r),
    nR: A("Of"),
    fg: function() {
        var t = this.ke;
        return M.color(t.r, t.g, t.b, t.a)
    },
    py: function() {
        var t = this.ta;
        return M.color(t.r, t.g, t.b, t.a)
    },
    Zc: function(t) {
        var i = this.ta,
            e = this.ke;
        for (i.r = e.r * t.r / 255, i.g = e.g * t.g / 255, i.b = e.b * t.b / 255, t = this.u, i = 0; i < t.length; i++) e = t[i],
            M.B == M.Z ? e.Zc(this.ta) : (M.n.prototype.Zc.call(e, this.ta), e.La());
        this.ve()
    },
    ve: function() {
        if (M.B != M.Z) {
            var t = this.Ja();
            if (t && 0 < t.wd().width) {
                var i = this.vc.Sa;
                if (i) {
                    var e = t.Sa,
                        n = M.rect(0, 0, i.width, i.height);
                    e instanceof HTMLCanvasElement && !this.Sc ? M.Cn(i, this.ta, n, e) : (e = M.Cn(i, this.ta, n), t = new M.fa, t.ld(e), t.Fb()),
                        this.bb(t)
                }
            }
        }
    },
    iQ: F(r),
    mR: A("rf"),
    ha: function() {
        return this.Nd(q, q, q, q, q)
    },
    Nd: function(t, i, e, n, s) {
        if (t = t || "", this.Qf && M.log("cc.LabelBMFont.initWithString(): re-init is no longer supported"), i) {
            var h = M.aa.Yd(i);
            if (!h) return M.log("cc.LabelBMFont.initWithString(): Impossible to create font. Please check file"),
                r;
            this.Qf = h,
                this.Hw = i,
                i = M.Ma.Vc(h.mO),
            (this.Aa = h = i.Db) || i.addEventListener("load",
                function(t) {
                    this.Aa = p,
                        this.Ca(t, this.ip.length),
                        this.Kc(this.ip, p),
                        this.dispatchEvent("load")
                },
                this)
        } else i = new M.fa,
            h = new Image,
            i.ld(h),
            this.Aa = r;
        return this.Ca(i, t.length) ? (this.Sr = n || M.Ev, this.Ow = s || M.d(0, 0), this.kt = e == q ? -1: e, this.Wa = this.Rg = 255, this.ta = M.color(255, 255, 255, 255), this.ke = M.color(255, 255, 255, 255), this.rf = this.Of = p, this.R.width = 0, this.R.height = 0, this.Ol(.5, .5), M.B === M.Z && (e = this.textureAtlas.texture, this.kb = e.ai(), n = this.oN = new M.O, n.Ca(e, M.rect(0, 0, 0, 0), r), n.batchNode = this), this.Kc(t, p), p) : r
    },
    jy: function() {
        var t = M.B,
            i = t === M.ya ? this.texture: this.textureAtlas.texture,
            e = 0,
            n = M.size(0, 0),
            s = 0,
            h = 1,
            a = this.Ub,
            o = a ? a.length: 0;
        if (0 !== o) {
            var c,
                u = this.Qf,
                f = u.B4,
                l = u.qF,
                d = u.u2;
            for (c = 0; o - 1 > c; c++) 10 == a.charCodeAt(c) && h++;
            var g = l * h,
                h = -(l - l * h),
                b = -1;
            for (c = 0; o > c; c++) if (l = a.charCodeAt(c), 0 != l) if (10 === l) e = 0,
                h -= u.qF;
            else {
                var v = f[b << 16 | 65535 & l] || 0,
                    y = d[l];
                if (y) {
                    var x = M.rect(y.rect.x, y.rect.y, y.rect.width, y.rect.height),
                        x = M.Nl(x);
                    x.x += this.Ow.x,
                        x.y += this.Ow.y,
                        (b = this.Yh(c)) ? 32 === l && t === M.ya ? b.yb(x, r, M.size(0, 0)) : (b.yb(x, r), b.visible = p) : (b = new M.O, 32 === l && t === M.ya && (x = M.rect(0, 0, 0, 0)), b.Ca(i, x, r), b.ax = p, this.T(b, 0, c)),
                        b.opacityModifyRGB = this.kb,
                        M.B == M.Z ? (b.Zc(this.ta), b.Mc(this.Wa)) : (M.n.prototype.Zc.call(b, this.ta), M.n.prototype.Mc.call(b, this.Wa), b.La()),
                        x = M.d(e + y.uS + .5 * y.rect.width + v, h + (u.qF - y.vS) - .5 * x.height * M.zb()),
                        b.H(M.MG(x)),
                        e += y.AH + v,
                        b = l,
                    e > s && (s = e)
                } else M.log("cocos2d: LabelBMFont: character not found " + a[c])
            }
            n.width = y && y.AH < y.rect.width ? s - y.AH + y.rect.width: s,
                n.height = g,
                this.re(M.OR(n))
        }
    },
    coa: function(t) {
        var i = this.u;
        if (i) for (var e = 0, n = i.length; n > e; e++) {
            var s = i[e];
            s && (s.visible = r)
        }
        this.Qf && this.jy(),
        t || this.ug()
    },
    Bl: E("ip"),
    Kc: function(t, i) {
        t = String(t),
        i == q && (i = p),
        t != q && M.zd(t) || (t += ""),
            this.ip = t,
            this.AN(t, i)
    },
    N_: function(t) {
        this.Kc(t, r)
    },
    Ala: function(t) {
        this.Kc(t, p)
    },
    ug: function() {
        if (this.string = this.ip, 0 < this.kt) {
            for (var t, i = this.Ub.length, e = [], n = [], s = 1, h = 0, a = r, o = r, c = -1, u = -1, f = 0, l = 0, d = this.u.length; d > l; l++) {
                for (var g = 0; ! (t = this.Yh(l + f + g));) g++;
                if (f += g, h >= i) break;
                var b = this.Ub[h];
                if (o || (u = this.JC(t), o = p), a || (c = u, a = p), 10 == b.charCodeAt(0)) {
                    if (n.push("\n"), e = e.concat(n), n.length = 0, a = o = r, c = u = -1, l--, f -= g, s++, h >= i) break;
                    u || (u = this.JC(t), o = p),
                    c || (c = u, a = p),
                        h++
                } else if (this.$C(b)) n.push(b),
                    e = e.concat(n),
                    n.length = 0,
                    o = r,
                    u = -1,
                    h++;
                else if (this.yY(t) - c > this.kt) if (this.EM) {
                    if (this.eO(n), n.push("\n"), e = e.concat(n), n.length = 0, a = o = r, c = u = -1, s++, h >= i) break;
                    u || (u = this.JC(t), o = p),
                    c || (c = u, a = p),
                        l--
                } else n.push(b),
                    -1 != e.lastIndexOf(" ") ? this.eO(e) : e = [],
                0 < e.length && e.push("\n"),
                    s++,
                    a = r,
                    c = -1,
                    h++;
                else n.push(b),
                        h++
            }
            for (e = e.concat(n), l = e.length, t = "", h = 0; l > h; ++h) t += e[h];
            t += String.fromCharCode(0),
                this.AN(t, r)
        }
        if (this.Sr != M.Ev) for (e = h = 0, i = this.Ub.length, n = [], s = 0; i > s; s++) if (10 == this.Ub[s].charCodeAt(0) || 0 == this.Ub[s].charCodeAt(0)) {
            if (l = 0, a = n.length, 0 == a) e++;
            else if (t = h + a - 1 + e, !(0 > t) && (l = this.Yh(t), l != q)) {
                switch (l = l.df() + l.Bh() / 2, o = 0, this.Sr) {
                    case M.mi:
                        o = this.width / 2 - l / 2;
                        break;
                    case M.pJ:
                        o = this.width - l
                }
                if (0 != o) for (l = 0; a > l; l++) t = h + l + e,
                0 > t || !(t = this.Yh(t)) || (t.x += o);
                h += a,
                    e++,
                    n.length = 0
            }
        } else n.push(this.Ub[h])
    },
    A6: function(t) {
        this.Sr = t,
            this.ug()
    },
    iY: E("Sr"),
    E6: function(t) {
        this.kt = t,
            this.ug()
    },
    FC: E("kt"),
    lma: function(t) {
        this.EM = t,
            this.ug()
    },
    Pd: function(t, i) {
        M.n.prototype.Pd.call(this, t, i),
            this.ug()
    },
    pu: function(t) {
        M.n.prototype.pu.call(this, t),
            this.ug()
    },
    qu: function(t) {
        M.n.prototype.qu.call(this, t),
            this.ug()
    },
    Vla: function(t) {
        if (t != q && t != this.Hw) {
            var i = M.aa.Yd(t);
            i ? (this.Hw = t, this.Qf = i, t = M.Ma.Vc(i.mO), this.Aa = i = t.Db, this.texture = t, M.B === M.ya && (this.vc = this.texture), i ? this.jy() : t.addEventListener("load",
                function(t) {
                    this.Aa = p,
                        this.texture = t,
                        this.jy(),
                        this.ve(),
                        this.ug(),
                        this.dispatchEvent("load")
                },
                this)) : M.log("cc.LabelBMFont.setFntFile() : Impossible to create font. Please check file")
        }
    },
    Tea: E("Hw"),
    Ol: function(t, i) {
        M.n.prototype.Ol.call(this, t, i),
            this.ug()
    },
    xN: function(t) {
        M.n.prototype.xN.call(this, t),
            this.ug()
    },
    aE: function(t) {
        M.n.prototype.aE.call(this, t),
            this.ug()
    },
    bE: function(t) {
        M.n.prototype.bE.call(this, t),
            this.ug()
    },
    Iaa: z(),
    gba: function(t, i) {
        var e = 0;
        if (this.HX.C4) {
            var n = this.HX.C4[(t << 16 | 65535 & i).toString()];
            n && (e = n.fca)
        }
        return e
    },
    JC: function(t) {
        return t.df() * this.pa - t.Bh() * this.pa * t.cd.x
    },
    yY: function(t) {
        return t.df() * this.pa + t.Bh() * this.pa * t.cd.x
    },
    $C: function(t) {
        return t = t.charCodeAt(0),
        t >= 9 && 13 >= t || 32 == t || 133 == t || 160 == t || 5760 == t || t >= 8192 && 8202 >= t || 8232 == t || 8233 == t || 8239 == t || 8287 == t || 12288 == t
    },
    eO: function(t) {
        var i = t.length;
        if (! (0 >= i) && (i -= 1, this.$C(t[i]))) {
            for (var e = i - 1; e >= 0 && this.$C(t[e]); --e) i = e;
            this.v0(t, i)
        }
    },
    v0: function(t, i) {
        var e = t.length;
        i >= e || 0 > i || t.splice(i, e)
    }
}), T = M.CA.prototype, M.uh.prototype.apply(T), M.B === M.ya && (M.qa.Gx || (T.ve = function() {
    if (M.B != M.Z) {
        var t,
            i = this.Ja();
        if (i && 0 < i.wd().width && (t = i.Sa)) {
            var e = M.Ma.Bt(this.vc.Sa);
            e && (t instanceof HTMLCanvasElement && !this.Sc ? M.yl(t, e, this.ta, q, t) : (t = M.yl(t, e, this.ta), i = new M.fa, i.ld(t), i.Fb()), this.bb(i))
        }
    }
}), T.bb = function(t) {
    for (var i = this.u, e = this.ta, n = 0; n < i.length; n++) {
        var r = i[n],
            s = r.ta;
        this.Qi != r.F && (s.r !== e.r || s.g !== e.g || s.b !== e.b) || (r.texture = t)
    }
    this.Qi = t
}), M.k(T, "string", T.Bl, T.N_), M.k(T, "boundingWidth", T.FC, T.E6), M.k(T, "textAlign", T.iY, T.A6), M.CA.create = function(t, i, e, n, r) {
    return new M.CA(t, i, e, n, r)
},
    M.bY = {
        JT: /info [^\n]*(\n|$)/gi,
        TS: /common [^\n]*(\n|$)/gi,
        EU: /page [^\n]*(\n|$)/gi,
        SS: /char [^\n]*(\n|$)/gi,
        QT: /kerning [^\n]*(\n|$)/gi,
        LT: /\w+=[^ \r\n]+/gi,
        KT: /^[\-]?\d+$/,
        Js: function(t) {
            t = t.match(this.LT);
            var i = {};
            if (t) for (var e = 0, n = t.length; n > e; e++) {
                var r = t[e],
                    s = r.indexOf("="),
                    h = r.substring(0, s),
                    r = r.substring(s + 1);
                r.match(this.KT) ? r = parseInt(r) : '"' == r[0] && (r = r.substring(1, r.length - 1)),
                    i[h] = r
            }
            return i
        },
        B5: function(t, i) {
            var e = {};
            this.Js(t.match(this.JT)[0]);
            var n = this.Js(t.match(this.TS)[0]);
            if (e.qF = n.lineHeight, M.B === M.Z) {
                var r = M.$p.Es; (n.scaleW > r.width || n.scaleH > r.height) && M.log("cc.LabelBMFont._parseCommonArguments(): page can't be larger than supported")
            }
            1 !== n.pages && M.log("cc.LabelBMFont._parseCommonArguments(): only supports 1 page"),
                n = this.Js(t.match(this.EU)[0]),
            0 !== n.id && M.log("cc.LabelBMFont._parseImageFileName() : file could not be found"),
                e.mO = M.path.Xp(i, n.file);
            for (var s = t.match(this.SS), h = e.u2 = {},
                     n = 0, r = s.length; r > n; n++) {
                var a = this.Js(s[n]);
                h[a.id] = {
                    rect: {
                        x: a.x,
                        y: a.y,
                        width: a.width,
                        height: a.height
                    },
                    uS: a.xoffset,
                    vS: a.yoffset,
                    AH: a.xadvance
                }
            }
            if (s = e.B4 = {},
                    h = t.match(this.QT)) for (n = 0, r = h.length; r > n; n++) a = this.Js(h[n]),
                s[a.first << 16 | 65535 & a.second] = a.amount;
            return e
        },
        load: function(t, i, e, n) {
            var r = this;
            M.aa.cz(t,
                function(t, e) {
                    return t ? n(t) : (n(q, r.B5(e, i)), void 0)
                })
        }
    },
    M.aa.ej(["fnt"], M.bY), M.rI = M.n.extend({
    texture: q,
    fq: r,
    hj: r,
    q: q,
    at: 0,
    zC: 0,
    Hm: 0,
    gD: 0,
    Di: 0,
    HD: 0,
    BD: q,
    AD: q,
    Xa: q,
    um: q,
    Af: q,
    hd: q,
    vm: q,
    $m: q,
    Hb: "MotionStreak",
    ctor: function(t, i, e, n, s) {
        M.n.prototype.ctor.call(this),
            this.Qg = M.d(0, 0),
            this.q = new M.Xb(M.SRC_ALPHA, M.ONE_MINUS_SRC_ALPHA),
            this.Xx = M.l.createBuffer(),
            this.hj = this.fq = r,
            this.texture = q,
            this.HD = this.Di = this.gD = this.Hm = this.zC = this.at = 0,
            this.$m = this.vm = this.hd = this.Af = this.um = this.Xa = this.AD = this.BD = q,
        s !== k && this.a4(t, i, e, n, s)
    },
    Vd: function() {
        this.$ = new M.sI(this)
    },
    Ja: E("texture"),
    bb: function(t) {
        this.texture != t && (this.texture = t)
    },
    Ef: E("q"),
    Od: function(t, i) {
        i === k ? this.q = t: (this.q.src = t, this.q.I = i)
    },
    bh: function() {
        return M.log("cc.MotionStreak.getOpacity has not been supported."),
            0
    },
    pb: function() {
        M.log("cc.MotionStreak.setOpacity has not been supported.")
    },
    Jf: z(),
    gg: F(r),
    xb: function() {
        M.n.prototype.xb.call(this),
        this.hd && M.l.deleteBuffer(this.hd),
        this.$m && M.l.deleteBuffer(this.$m),
        this.vm && M.l.deleteBuffer(this.vm)
    },
    eha: E("fq"),
    Ula: A("fq"),
    qha: E("hj"),
    Rma: A("hj"),
    a4: function(t, i, e, n, s) {
        return s || b("cc.MotionStreak.initWithFade(): Invalid filename or texture"),
        M.zd(s) && (s = M.Ma.Vc(s)),
            M.n.prototype.H.call(this, M.d(0, 0)),
            this.anchorY = this.anchorX = 0,
            this.ignoreAnchor = p,
            this.hj = r,
            this.fq = p,
            this.Hm = -1 == i ? e / 5: i,
            this.Hm *= this.Hm,
            this.at = e,
            this.zC = 1 / t,
            t = (0 | 60 * t) + 2,
            this.Di = 0,
            this.AD = new Float32Array(t),
            this.BD = new Float32Array(2 * t),
            this.Xa = new Float32Array(4 * t),
            this.Af = new Float32Array(4 * t),
            this.um = new Uint8Array(8 * t),
            this.gD = t,
            t = M.l,
            this.hd = t.createBuffer(),
            this.$m = t.createBuffer(),
            this.vm = t.createBuffer(),
            this.q.src = t.SRC_ALPHA,
            this.q.I = t.ONE_MINUS_SRC_ALPHA,
            this.shaderProgram = M.be.Bc(M.oj),
            this.texture = s,
            this.color = n,
            this.fR(),
            t.bindBuffer(t.ARRAY_BUFFER, this.hd),
            t.bufferData(t.ARRAY_BUFFER, this.Xa, t.DYNAMIC_DRAW),
            t.bindBuffer(t.ARRAY_BUFFER, this.$m),
            t.bufferData(t.ARRAY_BUFFER, this.Af, t.DYNAMIC_DRAW),
            t.bindBuffer(t.ARRAY_BUFFER, this.vm),
            t.bufferData(t.ARRAY_BUFFER, this.um, t.DYNAMIC_DRAW),
            p
    },
    Xna: function(t) {
        this.color = t;
        for (var i = this.um, e = 0, n = 2 * this.Di; n > e; e++) i[4 * e] = t.r,
            i[4 * e + 1] = t.g,
            i[4 * e + 2] = t.b
    },
    reset: function() {
        this.Di = 0
    },
    H: function(t, i) {
        this.hj = p,
            i === k ? (this.Qg.x = t.x, this.Qg.y = t.y) : (this.Qg.x = t, this.Qg.y = i)
    },
    df: function() {
        return this.Qg.x
    },
    yR: function(t) {
        this.Qg.x = t,
        this.hj || (this.hj = p)
    },
    eh: function() {
        return this.Qg.y
    },
    zR: function(t) {
        this.Qg.y = t,
        this.hj || (this.hj = p)
    },
    Ia: function(t) { ! (1 >= this.Di) && this.texture && this.texture.Db && (t = t || M.l, M.St(this), M.Sb(M.wh), M.kd(this.q.src, this.q.I), M.yd(this.texture), t.bindBuffer(t.ARRAY_BUFFER, this.hd), t.bufferData(t.ARRAY_BUFFER, this.Xa, t.DYNAMIC_DRAW), t.vertexAttribPointer(M.eb, 2, t.FLOAT, r, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, this.$m), t.bufferData(t.ARRAY_BUFFER, this.Af, t.DYNAMIC_DRAW), t.vertexAttribPointer(M.bd, 2, t.FLOAT, r, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, this.vm), t.bufferData(t.ARRAY_BUFFER, this.um, t.DYNAMIC_DRAW), t.vertexAttribPointer(M.nd, 4, t.UNSIGNED_BYTE, p, 0, 0), t.drawArrays(t.TRIANGLE_STRIP, 0, 2 * this.Di), M.Wc++)
    },
    update: function(t) {
        if (this.hj) {
            t *= this.zC;
            var i,
                e,
                n,
                s,
                h = 0,
                a = this.Di,
                o = this.AD,
                c = this.BD,
                u = this.Xa,
                f = this.um;
            for (n = 0; a > n; n++) o[n] -= t,
                0 >= o[n] ? h++:(i = n - h, h > 0 ? (o[i] = o[n], c[2 * i] = c[2 * n], c[2 * i + 1] = c[2 * n + 1], s = 2 * n, e = 2 * i, u[2 * e] = u[2 * s], u[2 * e + 1] = u[2 * s + 1], u[2 * (e + 1)] = u[2 * (s + 1)], u[2 * (e + 1) + 1] = u[2 * (s + 1) + 1], s *= 4, e *= 4, f[e + 0] = f[s + 0], f[e + 1] = f[s + 1], f[e + 2] = f[s + 2], f[e + 4] = f[s + 4], f[e + 5] = f[s + 5], f[e + 6] = f[s + 6]) : e = 8 * i, i = 255 * o[i], f[e + 3] = i, f[e + 7] = i);
            if (a -= h, n = p, a >= this.gD ? n = r: a > 0 && (t = M.HQ(M.d(c[2 * (a - 1)], c[2 * (a - 1) + 1]), this.Qg) < this.Hm, e = 1 == a ? r: M.HQ(M.d(c[2 * (a - 2)], c[2 * (a - 2) + 1]), this.Qg) < 2 * this.Hm, t || e) && (n = r), n && (c[2 * a] = this.Qg.x, c[2 * a + 1] = this.Qg.y, o[a] = 1, o = 8 * a, n = this.ta, f[o] = n.r, f[o + 1] = n.g, f[o + 2] = n.b, f[o + 4] = n.r, f[o + 5] = n.g, f[o + 6] = n.b, f[o + 3] = 255, f[o + 7] = 255, a > 0 && this.fq && (a > 1 ? M.zH(c, this.at, this.Xa, a, 1) : M.zH(c, this.at, this.Xa, 0, 2)), a++), this.fq || M.zH(c, this.at, this.Xa, 0, a), a && this.HD != a) {
                for (c = 1 / a, f = this.Af, n = 0; a > n; n++) f[4 * n] = 0,
                    f[4 * n + 1] = c * n,
                    f[2 * (2 * n + 1)] = 1,
                    f[2 * (2 * n + 1) + 1] = c * n;
                this.HD = a
            }
            this.Di = a
        }
    }
}), M.rI.create = function(t, i, e, n, r) {
    return new M.rI(t, i, e, n, r)
},
    M.gm = M.n.extend({
        grid: q,
        Fe: q,
        PC: q,
        QC: q,
        ctor: function() {
            M.n.prototype.ctor.call(this),
            M.B === M.Z && (this.PC = new M.$n(this, this.u5), this.QC = new M.$n(this, this.v5))
        },
        zt: E("grid"),
        S6: A("grid"),
        gj: A("Fe"),
        u5: function() {
            var t = this.grid;
            M.B == M.Z && t && t.mm && t.e1()
        },
        v5: function() {
            var t = this.grid;
            M.B == M.Z && t && t.mm && t.I0(this.Fe)
        },
        G: function() {
            if (this.zc) {
                var t = M.B == M.Z,
                    i = this.grid;
                if (t) {
                    var e = M.ob;
                    e.stack.push(e.top),
                        M.hg(this.Kb, e.top),
                        e.top = this.Kb
                }
                if (this.transform(), t && (i && i.mm && M.K.Gn(), this.PC && M.ia.nc(this.PC), this.Fe && this.Fe.G()), (i = this.u) && 0 < i.length) {
                    var n = i.length;
                    this.Lc();
                    for (var r = 0; n > r; r++) {
                        var s = i[r];
                        s && s.G()
                    }
                }
                t && (this.QC && M.ia.nc(this.QC), e.top = e.stack.pop())
            }
        },
        i0: function() {
            var t = this.Px,
                i = M.ob.top,
                e = this.Hl(),
                n = t.c;
            n[0] = e.a,
                n[4] = e.s,
                n[12] = e.P,
                n[1] = e.b,
                n[5] = e.z,
                n[13] = e.Q,
                n[14] = this.Pp,
                M.ef(i, i, t),
            this.Hg == q || this.grid && this.grid.bk() || (t = this.Cb.x, i = this.Cb.y, 0 !== t || 0 !== i ? (M.zv || (t |= 0, i |= 0), M.yq(t, i), this.Hg.Rt(), M.yq( - t, -i)) : this.Hg.Rt())
        }
    }), T = M.gm.prototype, M.B === M.Z && (T.transform = T.i0), M.k(T, "target", q, T.gj), M.gm.create = function() {
    return new M.gm
},
    M.foa = function() {
        return {
            x: 0,
            y: 0
        }
    },
    M.Vl = function(t, i) {
        return {
            x: t,
            y: i
        }
    },
    M.Ne = function(t, i) {
        return M.Vl(t.x + i.x, t.y + i.y)
    },
    M.Cc = function(t, i) {
        return M.Vl(t.x - i.x, t.y - i.y)
    },
    M.Rd = function(t, i) {
        return M.Vl(t.x * i, t.y * i)
    },
    M.Yq = function(t) {
        return M.Vl( - t.y, t.x)
    },
    M.vg = function(t) {
        return M.Vl( - t.x, -t.y)
    },
    M.pS = function(t, i) {
        return t.x * i.x + t.y * i.y
    },
    M.eoa = function(t) {
        return M.Vl(Math.cos(t), Math.sin(t))
    },
    M.Du = function(t) {
        return t = M.ih(M.d(t.x, t.y)),
            M.Vl(t.x, t.y)
    },
    M.Qe = function(t) {
        return M.Vl(t.x, t.y)
    },
    M.Ra = function(t) {
        return {
            ma: t.x,
            na: t.y
        }
    },
    M.lT = M.n.extend({
        Da: q,
        q: q,
        rd: 1,
        xe: q,
        Hb: "DrawNodeCanvas",
        ctor: function() {
            M.n.prototype.ctor.call(this);
            var t = this.$;
            t.Da = this.Da = [],
                t.xe = this.xe = M.color(255, 255, 255, 255),
                t.q = this.q = new M.Xb(M.pc, M.oc),
                this.ha()
        },
        Vd: function() {
            this.$ = new M.lj(this)
        },
        Ef: E("q"),
        Od: function(t, i) {
            i === k ? (this.q.src = t.src, this.q.I = t.I) : (this.q.src = t, this.q.I = i)
        },
        Sn: A("rd"),
        Y2: E("rd"),
        If: function(t) {
            var i = this.xe;
            i.r = t.r,
                i.g = t.g,
                i.b = t.b,
                i.a = t.a == q ? 255: t.a
        },
        Xd: function() {
            return M.color(this.xe.r, this.xe.g, this.xe.b, this.xe.a)
        },
        EF: function(t, i, e, n, r) {
            n = n || this.rd,
                r = r || this.Xd(),
            r.a == q && (r.a = 255),
                t = [t, M.d(i.x, t.y), i, M.d(t.x, i.y)],
                i = new M.Ek(M.$c.pj),
                i.te = t,
                i.lineWidth = n,
                i.ei = r,
                i.It = p,
                i.Zi = p,
                i.lineCap = "butt",
            (i.fillColor = e) && (e.a == q && (e.a = 255), i.Jt = p),
                this.Da.push(i)
        },
        yF: function(t, i, e, n, r, s, h) {
            s = s || this.rd,
                h = h || this.Xd(),
            h.a == q && (h.a = 255);
            for (var a = 2 * Math.PI / n, o = [], c = 0; n >= c; c++) {
                var u = c * a;
                o.push(M.d(i * Math.cos(u + e) + t.x, i * Math.sin(u + e) + t.y))
            }
            r && o.push(M.d(t.x, t.y)),
                t = new M.Ek(M.$c.pj),
                t.te = o,
                t.lineWidth = s,
                t.ei = h,
                t.It = p,
                t.Zi = p,
                this.Da.push(t)
        },
        DF: function(t, i, e, n, r, s) {
            r = r || this.rd,
                s = s || this.Xd(),
            s.a == q && (s.a = 255);
            for (var h = [], a = 0, o = 0; n > o; o++) h.push(M.d(Math.pow(1 - a, 2) * t.x + 2 * (1 - a) * a * i.x + a * a * e.x, Math.pow(1 - a, 2) * t.y + 2 * (1 - a) * a * i.y + a * a * e.y)),
                a += 1 / n;
            h.push(M.d(e.x, e.y)),
                t = new M.Ek(M.$c.pj),
                t.te = h,
                t.lineWidth = r,
                t.ei = s,
                t.Zi = p,
                t.lineCap = "round",
                this.Da.push(t)
        },
        zF: function(t, i, e, n, r, s, h) {
            s = s || this.rd,
                h = h || this.Xd(),
            h.a == q && (h.a = 255);
            for (var a = [], o = 0, c = 0; r > c; c++) a.push(M.d(Math.pow(1 - o, 3) * t.x + 3 * Math.pow(1 - o, 2) * o * i.x + 3 * (1 - o) * o * o * e.x + o * o * o * n.x, Math.pow(1 - o, 3) * t.y + 3 * Math.pow(1 - o, 2) * o * i.y + 3 * (1 - o) * o * o * e.y + o * o * o * n.y)),
                o += 1 / r;
            a.push(M.d(n.x, n.y)),
                t = new M.Ek(M.$c.pj),
                t.te = a,
                t.lineWidth = s,
                t.ei = h,
                t.Zi = p,
                t.lineCap = "round",
                this.Da.push(t)
        },
        xF: function(t, i, e, n) {
            this.xn(t, .5, i, e, n)
        },
        xn: function(t, i, e, n, r) {
            n = n || this.rd,
                r = r || this.Xd(),
            r.a == q && (r.a = 255);
            for (var s, h, a = [], o = 1 / t.length, c = 0; e + 1 > c; c++) h = c / e,
                1 == h ? (s = t.length - 1, h = 1) : (s = 0 | h / o, h = (h - o * s) / o),
                s = M.oF(M.xd(t, s - 1), M.xd(t, s - 0), M.xd(t, s + 1), M.xd(t, s + 2), i, h),
                a.push(s);
            t = new M.Ek(M.$c.pj),
                t.te = a,
                t.lineWidth = n,
                t.ei = r,
                t.Zi = p,
                t.lineCap = "round",
                this.Da.push(t)
        },
        AF: function(t, i, e) {
            e = e || this.Xd(),
            e.a == q && (e.a = 255);
            var n = new M.Ek(M.$c.sB);
            n.te = [t],
                n.lineWidth = i,
                n.fillColor = e,
                this.Da.push(n)
        },
        J1: function(t, i, e) {
            if (t && 0 != t.length) {
                e = e || this.Xd(),
                e.a == q && (e.a = 255);
                for (var n = 0, r = t.length; r > n; n++) this.AF(t[n], i, e)
            }
        },
        FF: function(t, i, e, n) {
            e = e || this.rd,
                n = n || this.Xd(),
            n.a == q && (n.a = 255);
            var r = new M.Ek(M.$c.pj);
            r.te = [t, i],
                r.lineWidth = 2 * e,
                r.ei = n,
                r.Zi = p,
                r.lineCap = "round",
                this.Da.push(r)
        },
        M1: function(t, i, e, n) {
            e = e || this.rd,
                n = n || this.Xd(),
            n.a == q && (n.a = 255);
            var r = new M.Ek(M.$c.pj);
            r.te = t,
                r.fillColor = i,
                r.lineWidth = e,
                r.ei = n,
                r.It = p,
                r.Zi = p,
                r.lineCap = "round",
            i && (r.Jt = p),
                this.Da.push(r)
        },
        qe: function(t, i, e, n) {
            for (var r = [], s = 0; s < t.length; s++) r.push(M.d(t[s].x, t[s].y));
            return this.M1(r, i, e, n)
        },
        Ia: function(t) {
            t = t || M.l,
            this.q && this.q.src == M.SRC_ALPHA && this.q.I == M.ONE && (t.globalCompositeOperation = "lighter");
            for (var i = 0; i < this.Da.length; i++) {
                var e = this.Da[i];
                switch (e.type) {
                    case M.$c.sB:
                        this.js(t, e);
                        break;
                    case M.$c.uJ:
                        this.ls(t, e);
                        break;
                    case M.$c.pj:
                        this.ks(t, e)
                }
            }
        },
        js: function(t, i) {
            var e = i.fillColor,
                n = i.te[0],
                s = i.lineWidth,
                h = M.view.pa,
                a = M.view.Ta;
            t.fillStyle = "rgba(" + (0 | e.r) + "," + (0 | e.g) + "," + (0 | e.b) + "," + e.a / 255 + ")",
                t.beginPath(),
                t.arc(n.x * h, -n.y * a, s * h, 0, 2 * Math.PI, r),
                t.closePath(),
                t.fill()
        },
        ls: function(t, i) {
            var e = i.ei,
                n = i.te[0],
                r = i.te[1],
                s = i.lineWidth,
                h = i.lineCap,
                a = M.view.pa,
                o = M.view.Ta;
            t.strokeStyle = "rgba(" + (0 | e.r) + "," + (0 | e.g) + "," + (0 | e.b) + "," + e.a / 255 + ")",
                t.lineWidth = s * a,
                t.beginPath(),
                t.lineCap = h,
                t.moveTo(n.x * a, -n.y * o),
                t.lineTo(r.x * a, -r.y * o),
                t.stroke()
        },
        ks: function(t, i) {
            var e = i.te,
                n = i.lineCap,
                r = i.fillColor,
                s = i.lineWidth,
                h = i.ei,
                a = i.It,
                o = i.Jt,
                c = i.Zi;
            if (e != q) {
                var u = e[0],
                    f = M.view.pa,
                    l = M.view.Ta;
                for (t.lineCap = n, r && (t.fillStyle = "rgba(" + (0 | r.r) + "," + (0 | r.g) + "," + (0 | r.b) + "," + r.a / 255 + ")"), s && (t.lineWidth = s * f), h && (t.strokeStyle = "rgba(" + (0 | h.r) + "," + (0 | h.g) + "," + (0 | h.b) + "," + h.a / 255 + ")"), t.beginPath(), t.moveTo(u.x * f, -u.y * l), n = 1, r = e.length; r > n; n++) t.lineTo(e[n].x * f, -e[n].y * l);
                a && t.closePath(),
                o && t.fill(),
                c && t.stroke()
            }
        },
        clear: function() {
            this.Da.length = 0
        }
    }), M.mT = M.n.extend({
    Io: 0,
    Da: q,
    Uj: q,
    VN: q,
    UN: q,
    rd: 1,
    xe: q,
    q: q,
    nb: r,
    Hb: "DrawNodeWebGL",
    Ef: E("q"),
    Od: function(t, i) {
        i === k ? (this.q.src = t.src, this.q.I = t.I) : (this.q.src = t, this.q.I = i)
    },
    ctor: function() {
        M.n.prototype.ctor.call(this),
            this.Da = [],
            this.q = new M.Xb(M.pc, M.oc),
            this.xe = M.color(255, 255, 255, 255),
            this.ha()
    },
    Vd: function() {
        this.$ = new M.aI(this)
    },
    ha: function() {
        return M.n.prototype.ha.call(this) ? (this.shaderProgram = M.be.Bc(M.cJ), this.ms(64), this.VN = M.l.createBuffer(), this.nb = p) : r
    },
    Sn: A("rd"),
    Y2: E("rd"),
    If: function(t) {
        var i = this.xe;
        i.r = t.r,
            i.g = t.g,
            i.b = t.b,
            i.a = t.a
    },
    Xd: function() {
        return M.color(this.xe.r, this.xe.g, this.xe.b, this.xe.a)
    },
    EF: function(t, i, e, n, r) {
        n = n || this.rd,
            r = r || this.Xd(),
        r.a == q && (r.a = 255),
            t = [t, M.d(i.x, t.y), i, M.d(t.x, i.y)],
            e == q ? this.vw(t, n, r, p) : this.qe(t, e, n, r)
    },
    yF: function(t, i, e, n, r, s, h) {
        s = s || this.rd,
            h = h || this.Xd(),
        h.a == q && (h.a = 255);
        var a,
            o = 2 * Math.PI / n,
            c = [];
        for (a = 0; n >= a; a++) {
            var u = a * o;
            c.push(M.d(i * Math.cos(u + e) + t.x, i * Math.sin(u + e) + t.y))
        }
        for (r && c.push(M.d(t.x, t.y)), s *= .5, a = 0, t = c.length; t - 1 > a; a++) this.FF(c[a], c[a + 1], s, h)
    },
    DF: function(t, i, e, n, s, h) {
        s = s || this.rd,
            h = h || this.Xd(),
        h.a == q && (h.a = 255);
        for (var a = [], o = 0, c = 0; n > c; c++) a.push(M.d(Math.pow(1 - o, 2) * t.x + 2 * (1 - o) * o * i.x + o * o * e.x, Math.pow(1 - o, 2) * t.y + 2 * (1 - o) * o * i.y + o * o * e.y)),
            o += 1 / n;
        a.push(M.d(e.x, e.y)),
            this.vw(a, s, h, r)
    },
    zF: function(t, i, e, n, s, h, a) {
        h = h || this.rd,
            a = a || this.Xd(),
        a.a == q && (a.a = 255);
        for (var o = [], c = 0, u = 0; s > u; u++) o.push(M.d(Math.pow(1 - c, 3) * t.x + 3 * Math.pow(1 - c, 2) * c * i.x + 3 * (1 - c) * c * c * e.x + c * c * c * n.x, Math.pow(1 - c, 3) * t.y + 3 * Math.pow(1 - c, 2) * c * i.y + 3 * (1 - c) * c * c * e.y + c * c * c * n.y)),
            c += 1 / s;
        o.push(M.d(n.x, n.y)),
            this.vw(o, h, a, r)
    },
    xF: function(t, i, e, n) {
        this.xn(t, .5, i, e, n)
    },
    xn: function(t, i, e, n, r) {
        n = n || this.rd,
            r = r || this.Xd(),
        r.a == q && (r.a = 255);
        for (var s, h, a = [], o = 1 / t.length, c = 0; e + 1 > c; c++) h = c / e,
            1 == h ? (s = t.length - 1, h = 1) : (s = 0 | h / o, h = (h - o * s) / o),
            s = M.oF(M.xd(t, s - 1), M.xd(t, s - 0), M.xd(t, s + 1), M.xd(t, s + 2), i, h),
            a.push(s);
        for (n *= .5, t = 0, i = a.length; i - 1 > t; t++) this.FF(a[t], a[t + 1], n, r)
    },
    lN: function() {
        var t = M.l;
        M.Sb(M.wh),
            t.bindBuffer(t.ARRAY_BUFFER, this.VN),
        this.nb && (t.bufferData(t.ARRAY_BUFFER, this.Uj, t.STREAM_DRAW), this.nb = r);
        var i = M.Cd.BYTES_PER_ELEMENT;
        t.vertexAttribPointer(M.eb, 2, t.FLOAT, r, i, 0),
            t.vertexAttribPointer(M.nd, 4, t.UNSIGNED_BYTE, p, i, 8),
            t.vertexAttribPointer(M.bd, 2, t.FLOAT, r, i, 12),
            t.drawArrays(t.TRIANGLES, 0, 3 * this.Da.length),
            M.fh()
    },
    ms: function(t) {
        var i = this.Da;
        if (i.length + t > this.Io) {
            var e = M.fc.BYTES_PER_ELEMENT;
            if (this.Io += Math.max(this.Io, t), i == q || 0 === i.length) this.Da = [],
                this.Uj = new ArrayBuffer(e * this.Io),
                this.UN = new Uint8Array(this.Uj);
            else {
                t = [];
                for (var n = new ArrayBuffer(e * this.Io), r = 0; r < i.length; r++) t[r] = new M.fc(i[r].a, i[r].b, i[r].s, n, r * e);
                this.UN = new Uint8Array(n),
                    this.Uj = n,
                    this.Da = t
            }
        }
    },
    Ia: function() {
        M.kd(this.q.src, this.q.I),
            this.la.sb(),
            this.la.tu(),
            this.lN()
    },
    AF: function(t, i, e) {
        e = e || this.Xd(),
        e.a == q && (e.a = 255);
        var n = {
            r: 0 | e.r,
            g: 0 | e.g,
            b: 0 | e.b,
            a: 0 | e.a
        };
        e = {
            j: {
                x: t.x - i,
                y: t.y - i
            },
            A: n,
            p: {
                ma: -1,
                na: -1
            }
        };
        var r = {
                j: {
                    x: t.x - i,
                    y: t.y + i
                },
                A: n,
                p: {
                    ma: -1,
                    na: 1
                }
            },
            s = {
                j: {
                    x: t.x + i,
                    y: t.y + i
                },
                A: n,
                p: {
                    ma: 1,
                    na: 1
                }
            };
        t = {
            j: {
                x: t.x + i,
                y: t.y - i
            },
            A: n,
            p: {
                ma: 1,
                na: -1
            }
        },
            this.ms(6),
            this.Da.push(new M.fc(e, r, s, this.Uj, this.Da.length * M.fc.BYTES_PER_ELEMENT)),
            this.Da.push(new M.fc(e, s, t, this.Uj, this.Da.length * M.fc.BYTES_PER_ELEMENT)),
            this.nb = p
    },
    J1: function(t, i, e) {
        if (t && 0 != t.length) {
            e = e || this.Xd(),
            e.a == q && (e.a = 255);
            for (var n = 0, r = t.length; r > n; n++) this.AF(t[n], i, e)
        }
    },
    FF: function(t, i, e, n) {
        n = n || this.Xd(),
        n.a == q && (n.a = 255),
            e = e || .5 * this.rd,
            this.ms(18),
            n = {
                r: 0 | n.r,
                g: 0 | n.g,
                b: 0 | n.b,
                a: 0 | n.a
            };
        var r = M.Qe(t);
        i = M.Qe(i),
            t = M.Du(M.Yq(M.Cc(i, r)));
        var s = M.Yq(t),
            h = M.Rd(t, e);
        e = M.Rd(s, e);
        var a = M.Ne(i, M.Cc(h, e)),
            o = M.Cc(i, h),
            c = M.Ne(i, h),
            u = M.Cc(r, h),
            f = M.Ne(r, h),
            l = M.Cc(r, M.Cc(h, e)),
            r = M.Ne(r, M.Ne(h, e)),
            d = M.fc.BYTES_PER_ELEMENT,
            g = this.Uj,
            b = this.Da;
        b.push(new M.fc({
                j: M.Cc(i, M.Ne(h, e)),
                A: n,
                p: M.Ra(M.vg(M.Ne(t, s)))
            },
            {
                j: a,
                A: n,
                p: M.Ra(M.Cc(t, s))
            },
            {
                j: o,
                A: n,
                p: M.Ra(M.vg(t))
            },
            g, b.length * d)),
            b.push(new M.fc({
                    j: c,
                    A: n,
                    p: M.Ra(t)
                },
                {
                    j: a,
                    A: n,
                    p: M.Ra(M.Cc(t, s))
                },
                {
                    j: o,
                    A: n,
                    p: M.Ra(M.vg(t))
                },
                g, b.length * d)),
            b.push(new M.fc({
                    j: c,
                    A: n,
                    p: M.Ra(t)
                },
                {
                    j: u,
                    A: n,
                    p: M.Ra(M.vg(t))
                },
                {
                    j: o,
                    A: n,
                    p: M.Ra(M.vg(t))
                },
                g, b.length * d)),
            b.push(new M.fc({
                    j: c,
                    A: n,
                    p: M.Ra(t)
                },
                {
                    j: u,
                    A: n,
                    p: M.Ra(M.vg(t))
                },
                {
                    j: f,
                    A: n,
                    p: M.Ra(t)
                },
                g, b.length * d)),
            b.push(new M.fc({
                    j: l,
                    A: n,
                    p: M.Ra(M.Cc(s, t))
                },
                {
                    j: u,
                    A: n,
                    p: M.Ra(M.vg(t))
                },
                {
                    j: f,
                    A: n,
                    p: M.Ra(t)
                },
                g, b.length * d)),
            b.push(new M.fc({
                    j: l,
                    A: n,
                    p: M.Ra(M.Cc(s, t))
                },
                {
                    j: r,
                    A: n,
                    p: M.Ra(M.Ne(t, s))
                },
                {
                    j: f,
                    A: n,
                    p: M.Ra(t)
                },
                g, b.length * d)),
            this.nb = p
    },
    qe: function(t, i, e, n) {
        if (i == q) this.vw(t, e, n, p);
        else {
            i.a == q && (i.a = 255),
            n.a == q && (n.a = 255),
                e = e || this.rd,
                e *= .5,
                i = {
                    r: 0 | i.r,
                    g: 0 | i.g,
                    b: 0 | i.b,
                    a: 0 | i.a
                },
                n = {
                    r: 0 | n.r,
                    g: 0 | n.g,
                    b: 0 | n.b,
                    a: 0 | n.a
                };
            var s,
                h,
                a,
                o,
                c = [],
                u = t.length;
            for (s = 0; u > s; s++) {
                h = M.Qe(t[(s - 1 + u) % u]),
                    a = M.Qe(t[s]),
                    o = M.Qe(t[(s + 1) % u]);
                var f = M.Du(M.Yq(M.Cc(a, h)));
                a = M.Du(M.Yq(M.Cc(o, a))),
                    c[s] = {
                        offset: M.Rd(M.Ne(f, a), 1 / (M.pS(f, a) + 1)),
                        Gl: a
                    }
            }
            f = e > 0,
                this.ms(3 * (3 * u - 2));
            var l = M.fc.BYTES_PER_ELEMENT,
                d = this.Uj,
                g = this.Da,
                b = f == r ? .5: 0;
            for (s = 0; u - 2 > s; s++) h = M.Cc(M.Qe(t[0]), M.Rd(c[0].offset, b)),
                a = M.Cc(M.Qe(t[s + 1]), M.Rd(c[s + 1].offset, b)),
                o = M.Cc(M.Qe(t[s + 2]), M.Rd(c[s + 2].offset, b)),
                g.push(new M.fc({
                        j: h,
                        A: i,
                        p: M.Ra({
                            x: 0,
                            y: 0
                        })
                    },
                    {
                        j: a,
                        A: i,
                        p: M.Ra({
                            x: 0,
                            y: 0
                        })
                    },
                    {
                        j: o,
                        A: i,
                        p: M.Ra({
                            x: 0,
                            y: 0
                        })
                    },
                    d, g.length * l));
            for (s = 0; u > s; s++) {
                b = (s + 1) % u,
                    h = M.Qe(t[s]),
                    a = M.Qe(t[b]),
                    o = c[s].Gl;
                var v = c[s].offset,
                    y = c[b].offset,
                    b = f ? M.Cc(h, M.Rd(v, e)) : M.Cc(h, M.Rd(v, .5)),
                    x = f ? M.Cc(a, M.Rd(y, e)) : M.Cc(a, M.Rd(y, .5));
                h = f ? M.Ne(h, M.Rd(v, e)) : M.Ne(h, M.Rd(v, .5)),
                    a = f ? M.Ne(a, M.Rd(y, e)) : M.Ne(a, M.Rd(y, .5)),
                    f ? (g.push(new M.fc({
                            j: b,
                            A: n,
                            p: M.Ra(M.vg(o))
                        },
                        {
                            j: x,
                            A: n,
                            p: M.Ra(M.vg(o))
                        },
                        {
                            j: a,
                            A: n,
                            p: M.Ra(o)
                        },
                        d, g.length * l)), g.push(new M.fc({
                            j: b,
                            A: n,
                            p: M.Ra(M.vg(o))
                        },
                        {
                            j: h,
                            A: n,
                            p: M.Ra(o)
                        },
                        {
                            j: a,
                            A: n,
                            p: M.Ra(o)
                        },
                        d, g.length * l))) : (g.push(new M.fc({
                            j: b,
                            A: i,
                            p: M.Ra({
                                x: 0,
                                y: 0
                            })
                        },
                        {
                            j: x,
                            A: i,
                            p: M.Ra({
                                x: 0,
                                y: 0
                            })
                        },
                        {
                            j: a,
                            A: i,
                            p: M.Ra(o)
                        },
                        d, g.length * l)), g.push(new M.fc({
                            j: b,
                            A: i,
                            p: M.Ra({
                                x: 0,
                                y: 0
                            })
                        },
                        {
                            j: h,
                            A: i,
                            p: M.Ra(o)
                        },
                        {
                            j: a,
                            A: i,
                            p: M.Ra(o)
                        },
                        d, g.length * l)))
            }
            this.nb = p
        }
    },
    vw: function(t, i, e, n) {
        if (i = i || this.rd, e = e || this.xe, e.a == q && (e.a = 255), i *= .5, !(0 >= i)) {
            e = {
                r: 0 | e.r,
                g: 0 | e.g,
                b: 0 | e.b,
                a: 0 | e.a
            };
            var r,
                s,
                h,
                a,
                o = [],
                c = t.length;
            for (r = 0; c > r; r++) {
                s = M.Qe(t[(r - 1 + c) % c]),
                    h = M.Qe(t[r]),
                    a = M.Qe(t[(r + 1) % c]);
                var u = M.Du(M.Yq(M.Cc(h, s)));
                h = M.Du(M.Yq(M.Cc(a, h))),
                    o[r] = {
                        offset: M.Rd(M.Ne(u, h), 1 / (M.pS(u, h) + 1)),
                        Gl: h
                    }
            }
            this.ms(3 * (3 * c - 2)),
                a = M.fc.BYTES_PER_ELEMENT;
            var u = this.Uj,
                f = this.Da;
            for (n = n ? c: c - 1, r = 0; n > r; r++) {
                var l = (r + 1) % c;
                s = M.Qe(t[r]),
                    h = M.Qe(t[l]);
                var d = o[r].Gl,
                    g = o[r].offset,
                    l = o[l].offset,
                    b = M.Cc(s, M.Rd(g, i));
                s = M.Ne(s, M.Rd(g, i)),
                    g = M.Ne(h, M.Rd(l, i)),
                    f.push(new M.fc({
                            j: b,
                            A: e,
                            p: M.Ra(M.vg(d))
                        },
                        {
                            j: M.Cc(h, M.Rd(l, i)),
                            A: e,
                            p: M.Ra(M.vg(d))
                        },
                        {
                            j: g,
                            A: e,
                            p: M.Ra(d)
                        },
                        u, f.length * a)),
                    f.push(new M.fc({
                            j: b,
                            A: e,
                            p: M.Ra(M.vg(d))
                        },
                        {
                            j: s,
                            A: e,
                            p: M.Ra(d)
                        },
                        {
                            j: g,
                            A: e,
                            p: M.Ra(d)
                        },
                        u, f.length * a))
            }
            this.nb = p
        }
    },
    clear: function() {
        this.Da.length = 0,
            this.nb = p
    }
}), M.$c = M.B == M.Z ? M.mT: M.lT, M.$c.create = function() {
    return new M.$c
},
    M.Ek = function(t) {
        this.type = t,
            this.fillColor = this.te = q,
            this.lineWidth = 0,
            this.ei = q,
            this.lineCap = "butt",
            this.Zi = this.Jt = this.It = r
    },
    M.$c.sB = 0, M.$c.uJ = 1, M.$c.pj = 2, M.vu = -1, M.ec = M.n.extend({
    nn: 0,
    bi: r,
    QD: q,
    OD: q,
    PD: q,
    BK: q,
    vK: q,
    wK: q,
    $b: q,
    hM: r,
    Lo: q,
    SK: q,
    VK: q,
    WK: q,
    RK: q,
    TK: q,
    UK: q,
    XK: q,
    QK: q,
    NK: q,
    eD: q,
    ctor: function(t) {
        M.n.prototype.ctor.call(this),
            this.$b = q,
            this.nn = 0,
            this.bi = r,
            M.ec.prototype.ha.call(this, t || q)
    },
    Vd: function() {
        M.B === M.ya ? (this.QD = new M.TH(this), this.OD = new M.RH(this), this.PD = new M.SH(this)) : (this.BK = new M.$n(this, this.yZ), this.vK = new M.$n(this, this.wZ), this.wK = new M.$n(this, this.xZ))
    },
    ha: q,
    Hb: "ClippingNode",
    WY: function(t) {
        return this.$b = t,
            this.nn = 1,
            this.bi = r,
            M.ec.WC = p,
        M.ec.WC && (M.vu = M.l.getParameter(M.l.STENCIL_BITS), 0 >= M.vu && M.log("Stencil buffer is not enabled."), M.ec.WC = r),
            p
    },
    VY: function(t) {
        this.$b = t,
            this.nn = 1,
            this.bi = r
    },
    W: function() {
        M.n.prototype.W.call(this),
            this.$b.W()
    },
    fi: function() {
        M.n.prototype.fi.call(this),
            this.$b.fi()
    },
    ig: function() {
        this.$b.ig(),
            M.n.prototype.ig.call(this)
    },
    xb: function() {
        this.$b.xb(),
            M.n.prototype.xb.call(this)
    },
    G: q,
    jt: function(t) {
        if (1 > M.vu) M.n.prototype.G.call(this, t);
        else if (this.$b && this.$b.visible) if (M.ec.Xw + 1 == M.vu) M.ec.VE = p,
        M.ec.VE && (M.log("Nesting more than " + M.vu + "stencils is not supported. Everything will be drawn without stencil for this node and its childs."), M.ec.VE = r),
            M.n.prototype.G.call(this, t);
        else {
            M.ia.nc(this.BK),
                t = M.ob,
                t.stack.push(t.top),
                M.hg(this.Kb, t.top),
                t.top = this.Kb,
                this.transform(),
                this.$b.G(),
                M.ia.nc(this.vK);
            var i = this.u;
            if (i && 0 < i.length) {
                var e = i.length;
                this.Lc();
                for (var n = 0; e > n && i[n] && 0 > i[n].Ib; n++) i[n].G();
                for (this.$ && M.ia.nc(this.$); e > n; n++) i[n] && i[n].G()
            } else this.$ && M.ia.nc(this.$);
            M.ia.nc(this.wK),
                t.top = t.stack.pop()
        } else this.bi && M.n.prototype.G.call(this, t)
    },
    yZ: function(t) {
        t = t || M.l,
            M.ec.Xw++;
        var i = 1 << M.ec.Xw;
        this.eD = i | i - 1,
            this.QK = t.isEnabled(t.STENCIL_TEST),
            this.XK = t.getParameter(t.STENCIL_WRITEMASK),
            this.SK = t.getParameter(t.STENCIL_FUNC),
            this.VK = t.getParameter(t.STENCIL_REF),
            this.WK = t.getParameter(t.STENCIL_VALUE_MASK),
            this.RK = t.getParameter(t.STENCIL_FAIL),
            this.TK = t.getParameter(t.STENCIL_PASS_DEPTH_FAIL),
            this.UK = t.getParameter(t.STENCIL_PASS_DEPTH_PASS),
            t.enable(t.STENCIL_TEST),
            t.stencilMask(i),
            this.NK = t.getParameter(t.DEPTH_WRITEMASK),
            t.depthMask(r),
            t.stencilFunc(t.NEVER, i, i),
            t.stencilOp(this.bi ? t.REPLACE: t.ZERO, t.KEEP, t.KEEP),
            this.VX(),
            t.stencilFunc(t.NEVER, i, i),
            t.stencilOp(this.bi ? t.ZERO: t.REPLACE, t.KEEP, t.KEEP),
        1 > this.nn && (i = M.be.Bc(M.yv), t = t.getUniformLocation(i.Fn(), M.dK), M.cG(i.Fn()), i.su(t, this.nn), M.AR(this.$b, i))
    },
    VX: function() {
        M.Ke(M.Ag),
            M.Jn(),
            M.El(),
            M.Ke(M.Kf),
            M.Jn(),
            M.El(),
            M.ye.UO(M.d( - 1, -1), M.d(1, 1), M.color(255, 255, 255, 255)),
            M.Ke(M.Ag),
            M.dk(),
            M.Ke(M.Kf),
            M.dk()
    },
    wZ: function(t) {
        t = t || M.l,
            t.depthMask(this.NK),
            t.stencilFunc(t.EQUAL, this.eD, this.eD),
            t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
    },
    xZ: function(t) {
        t = t || M.l,
            t.stencilFunc(this.SK, this.VK, this.WK),
            t.stencilOp(this.RK, this.TK, this.UK),
            t.stencilMask(this.XK),
        this.QK || t.disable(t.STENCIL_TEST),
            M.ec.Xw--
    },
    hn: function(t) {
        this.Lo = this.hC() || this.$b instanceof M.O;
        var i,
            e = t || M.l,
            n = this.u;
        if (this.$b && this.$b.visible) {
            if (this.QD && M.ia.nc(this.QD), this.Lo ? M.n.prototype.G.call(this, e) : this.$b.G(e), this.OD && M.ia.nc(this.OD), this.transform(), this.Lo) this.$b.G();
            else {
                this.hC(p);
                var s = n.length;
                if (s > 0) {
                    for (this.Lc(), t = 0; s > t && (i = n[t], 0 > i.Ib); t++) i.G(e);
                    for (this.$ && M.ia.nc(this.$); s > t; t++) n[t].G(e)
                } else this.$ && M.ia.nc(this.$);
                this.hC(r)
            }
            this.PD && M.ia.nc(this.PD)
        } else this.bi && M.n.prototype.G.call(this, t)
    },
    F3: E("$b"),
    kH: q,
    L_: function(t) {
        this.$b != t && (this.$b && (this.$b.Ha = q), this.$b = t) && (this.$b.Ha = this)
    },
    K_: function(t) {
        if (this.$b = t, t.Da) for (var i = 0; i < t.Da.length; i++) t.Da[i].Jt = r,
            t.Da[i].Zi = r;
        t instanceof M.$c && (t.$.Ya = function(i, e, n) {
            e = e || M.view.pa,
                n = n || M.view.Ta,
                i = i || M.l;
            var r = this.S.vd;
            for (i.save(), i.transform(r.a, r.b, r.s, r.z, r.P * e, -r.Q * n), i.beginPath(), r = 0; r < t.Da.length; r++) {
                var s = t.Da[r].te,
                    h = s[0];
                i.moveTo(h.x * e, -h.y * n);
                for (var h = 1, a = s.length; a > h; h++) i.lineTo(s[h].x * e, -s[h].y * n)
            }
            i.restore()
        })
    },
    cea: E("nn"),
    vla: A("nn"),
    fha: E("bi"),
    fma: A("bi"),
    hC: function(t) {
        return (t === p || t === r) && (M.ec.prototype.hM = t),
            M.ec.prototype.hM
    },
    Ye: function(t) {
        M.n.prototype.Ye.call(this, t),
        this.$b && this.$b.Ye(this.Kb)
    }
}), T = M.ec.prototype, M.B === M.Z ? (T.ha = T.WY, T.G = T.jt, T.kH = T.L_) : (T.ha = T.VY, T.G = T.hn, T.kH = T.K_), M.k(T, "stencil", T.F3, T.kH), M.ec.WC = q, M.ec.VE = q, M.ec.Xw = -1, M.ec.GN = q, M.ec.eM = function() {
    return M.ec.GN || (M.ec.GN = document.createElement("canvas"))
},
    M.ec.create = function(t) {
        return new M.ec(t)
    },
    M.ho = M.xa.extend({
        mm: r,
        Ji: 0,
        ca: q,
        F: q,
        Wg: q,
        ep: q,
        Dm: r,
        la: q,
        cL: 0,
        nb: r,
        ctor: function(t, i, e) {
            M.lC(),
                this.mm = r,
                this.Ji = 0,
                this.F = this.ca = q,
                this.Wg = M.d(0, 0),
                this.ep = q,
                this.Dm = r,
                this.la = q,
                this.cL = 0,
                this.nb = r,
            t !== k && this.Ly(t, i, e)
        },
        bk: E("mm"),
        setActive: function(t) {
            if (this.mm = t, !t) {
                t = M.K;
                var i = t.Gn();
                t.Tn(i)
            }
        },
        Tfa: E("Ji"),
        i7: A("Ji"),
        R2: function() {
            return M.size(this.ca.width, this.ca.height)
        },
        cma: function(t) {
            this.ca.width = parseInt(t.width),
                this.ca.height = parseInt(t.height)
        },
        ZF: function() {
            return M.d(this.Wg.x, this.Wg.y)
        },
        Sma: function(t) {
            this.Wg.x = t.x,
                this.Wg.y = t.y
        },
        tha: E("Dm"),
        ana: function(t) {
            this.Dm != t && (this.Dm = t, this.cy())
        },
        Ly: function(t, i, e) {
            if (!i) {
                var n = M.K.Dt(),
                    s = M.wk(n.width),
                    h = M.wk(n.height),
                    a = new Uint8Array(4 * s * h);
                if (!a) return M.log("cocos2d: CCGrid: not enough memory."),
                    r;
                if (i = new M.fa, i.Ht(a, M.fa.nj, s, h, n), !i) return M.log("cocos2d: CCGrid: error creating texture"),
                    r
            }
            return this.mm = r,
                this.Ji = 0,
                this.ca = t,
                this.F = i,
                this.Dm = e || r,
                this.Wg.x = this.F.width / t.width,
                this.Wg.y = this.F.height / t.height,
                this.ep = new M.DT,
                this.ep ? (this.ep.Q3(this.F), this.la = M.be.Bc(M.Dr), this.cy(), p) : r
        },
        e1: function() {
            this.cL = M.K.Gn(),
                this.ep.f1(this.F)
        },
        I0: function(t) {
            if (this.ep.J0(this.F), t && t.En().tG()) {
                var i = t.ny();
                M.yq(i.x, i.y),
                    t.En().Rt(),
                    M.yq( - i.x, -i.y)
            }
            M.yd(this.F),
                this.fF()
        },
        fF: function() {
            M.log("cc.GridBase.blit(): Shall be overridden in subclass.")
        },
        UG: function() {
            M.log("cc.GridBase.reuse(): Shall be overridden in subclass.")
        },
        cy: function() {
            M.log("cc.GridBase.calculateVertexPoints(): Shall be overridden in subclass.")
        },
        rla: function() {
            var t = M.K.Dt();
            M.l.viewport(0, 0, t.width, t.height),
                M.Ke(M.Ag),
                M.El();
            var i = new M.da;
            M.xG(i, 0, t.width, 0, t.height, -1, 1),
                M.xq(i),
                M.Ke(M.Kf),
                M.El(),
                M.BR()
        }
    }), M.ho.create = function(t, i, e) {
    return new M.ho(t, i, e)
},
    M.wA = M.ho.extend({
        Yg: q,
        Xa: q,
        Cj: q,
        ub: q,
        bg: q,
        hd: q,
        Wf: q,
        ctor: function(t, i, e) {
            M.ho.prototype.ctor.call(this),
                this.Wf = this.hd = this.bg = this.ub = this.Cj = this.Xa = this.Yg = q,
            t !== k && this.Ly(t, i, e)
        },
        rS: function(t) { (t.x !== (0 | t.x) || t.y !== (0 | t.y)) && M.log("cc.Grid3D.vertex() : Numbers must be integers"),
            t = 0 | 3 * (t.x * (this.ca.height + 1) + t.y);
            var i = this.Xa;
            return new V(i[t], i[t + 1], i[t + 2])
        },
        Yc: function(t) { (t.x !== (0 | t.x) || t.y !== (0 | t.y)) && M.log("cc.Grid3D.originalVertex() : Numbers must be integers"),
            t = 0 | 3 * (t.x * (this.ca.height + 1) + t.y);
            var i = this.Cj;
            return new V(i[t], i[t + 1], i[t + 2])
        },
        ae: function(t, i) { (t.x !== (0 | t.x) || t.y !== (0 | t.y)) && M.log("cc.Grid3D.setVertex() : Numbers must be integers");
            var e = 0 | 3 * (t.x * (this.ca.height + 1) + t.y),
                n = this.Xa;
            n[e] = i.x,
                n[e + 1] = i.y,
                n[e + 2] = i.e,
                this.nb = p
        },
        fF: function() {
            var t = this.ca.width * this.ca.height;
            M.Sb(M.Dd | M.wo),
                this.la.sb(),
                this.la.tu();
            var i = M.l,
                e = this.nb;
            i.bindBuffer(i.ARRAY_BUFFER, this.hd),
            e && i.bufferData(i.ARRAY_BUFFER, this.Xa, i.DYNAMIC_DRAW),
                i.vertexAttribPointer(M.eb, 3, i.FLOAT, r, 0, 0),
                i.bindBuffer(i.ARRAY_BUFFER, this.bg),
            e && i.bufferData(i.ARRAY_BUFFER, this.Yg, i.DYNAMIC_DRAW),
                i.vertexAttribPointer(M.bd, 2, i.FLOAT, r, 0, 0),
                i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.Wf),
            e && i.bufferData(i.ELEMENT_ARRAY_BUFFER, this.ub, i.STATIC_DRAW),
                i.drawElements(i.TRIANGLES, 6 * t, i.UNSIGNED_SHORT, 0),
            e && (this.nb = r),
                M.fh()
        },
        UG: function() {
            if (0 < this.Ji) {
                for (var t = this.Cj, i = this.Xa, e = 0, n = this.Xa.length; n > e; e++) t[e] = i[e]; --this.Ji
            }
        },
        cy: function() {
            var t = M.l,
                i = this.F.pixelsWidth,
                e = this.F.pixelsHeight,
                n = this.F.R.height,
                r = this.ca,
                s = (r.width + 1) * (r.height + 1);
            this.Xa = new Float32Array(3 * s),
                this.Yg = new Float32Array(2 * s),
                this.ub = new Uint16Array(6 * r.width * r.height),
            this.hd && t.deleteBuffer(this.hd),
                this.hd = t.createBuffer(),
            this.bg && t.deleteBuffer(this.bg),
                this.bg = t.createBuffer(),
            this.Wf && t.deleteBuffer(this.Wf),
                this.Wf = t.createBuffer();
            for (var h, a, o = this.ub, c = this.Yg, u = this.Dm, f = this.Xa, s = 0; s < r.width; ++s) for (h = 0; h < r.height; ++h) {
                var l = h * r.width + s;
                a = s * this.Wg.x;
                var d = a + this.Wg.x,
                    g = h * this.Wg.y,
                    b = g + this.Wg.y,
                    v = s * (r.height + 1) + h,
                    y = (s + 1) * (r.height + 1) + h,
                    x = (s + 1) * (r.height + 1) + (h + 1),
                    w = s * (r.height + 1) + (h + 1);
                o[6 * l] = v,
                    o[6 * l + 1] = y,
                    o[6 * l + 2] = w,
                    o[6 * l + 3] = y,
                    o[6 * l + 4] = x,
                    o[6 * l + 5] = w;
                var l = [3 * v, 3 * y, 3 * x, 3 * w],
                    m = [{
                        x: a,
                        y: g,
                        e: 0
                    },
                        {
                            x: d,
                            y: g,
                            e: 0
                        },
                        {
                            x: d,
                            y: b,
                            e: 0
                        },
                        {
                            x: a,
                            y: b,
                            e: 0
                        }],
                    v = [2 * v, 2 * y, 2 * x, 2 * w],
                    d = [M.d(a, g), M.d(d, g), M.d(d, b), M.d(a, b)];
                for (a = 0; 4 > a; ++a) f[l[a]] = m[a].x,
                    f[l[a] + 1] = m[a].y,
                    f[l[a] + 2] = m[a].e,
                    c[v[a]] = d[a].x / i,
                    c[v[a] + 1] = u ? (n - d[a].y) / e: d[a].y / e
            }
            this.Cj = new Float32Array(this.Xa),
                t.bindBuffer(t.ARRAY_BUFFER, this.hd),
                t.bufferData(t.ARRAY_BUFFER, this.Xa, t.DYNAMIC_DRAW),
                t.bindBuffer(t.ARRAY_BUFFER, this.bg),
                t.bufferData(t.ARRAY_BUFFER, this.Yg, t.DYNAMIC_DRAW),
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.Wf),
                t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.ub, t.STATIC_DRAW),
                this.nb = p
        }
    }), M.wA.create = function(t, i, e) {
    return new M.wA(t, i, e)
},
    M.DB = M.ho.extend({
        Yg: q,
        Xa: q,
        Cj: q,
        ub: q,
        bg: q,
        hd: q,
        Wf: q,
        ctor: function(t, i, e) {
            M.ho.prototype.ctor.call(this),
                this.Wf = this.hd = this.bg = this.ub = this.Cj = this.Xa = this.Yg = q,
            t !== k && this.Ly(t, i, e)
        },
        $R: function(t) { (t.x !== (0 | t.x) || t.y !== (0 | t.y)) && M.log("cc.TiledGrid3D.tile() : Numbers must be integers"),
            t = 12 * (this.ca.height * t.x + t.y);
            var i = this.Xa;
            return new M.sv(new V(i[t], i[t + 1], i[t + 2]), new V(i[t + 3], i[t + 4], i[t + 5]), new V(i[t + 6], i[t + 7], i[t + 8]), new V(i[t + 9], i[t + 10], i[t + 11]))
        },
        kg: function(t) { (t.x !== (0 | t.x) || t.y !== (0 | t.y)) && M.log("cc.TiledGrid3D.originalTile() : Numbers must be integers"),
            t = 12 * (this.ca.height * t.x + t.y);
            var i = this.Cj;
            return new M.sv(new V(i[t], i[t + 1], i[t + 2]), new V(i[t + 3], i[t + 4], i[t + 5]), new V(i[t + 6], i[t + 7], i[t + 8]), new V(i[t + 9], i[t + 10], i[t + 11]))
        },
        kf: function(t, i) { (t.x !== (0 | t.x) || t.y !== (0 | t.y)) && M.log("cc.TiledGrid3D.setTile() : Numbers must be integers");
            var e = 12 * (this.ca.height * t.x + t.y),
                n = this.Xa;
            n[e] = i.J.x,
                n[e + 1] = i.J.y,
                n[e + 2] = i.J.e,
                n[e + 3] = i.V.x,
                n[e + 4] = i.V.y,
                n[e + 5] = i.V.e,
                n[e + 6] = i.U.x,
                n[e + 7] = i.U.y,
                n[e + 8] = i.U.e,
                n[e + 9] = i.N.x,
                n[e + 10] = i.N.y,
                n[e + 11] = i.N.e,
                this.nb = p

        },
        fF: function() {
            var t = this.ca.width * this.ca.height;
            this.la.sb(),
                this.la.tu();
            var i = M.l,
                e = this.nb;
            M.Sb(M.Dd | M.wo),
                i.bindBuffer(i.ARRAY_BUFFER, this.hd),
            e && i.bufferData(i.ARRAY_BUFFER, this.Xa, i.DYNAMIC_DRAW),
                i.vertexAttribPointer(M.eb, 3, i.FLOAT, r, 0, this.Xa),
                i.bindBuffer(i.ARRAY_BUFFER, this.bg),
            e && i.bufferData(i.ARRAY_BUFFER, this.Yg, i.DYNAMIC_DRAW),
                i.vertexAttribPointer(M.bd, 2, i.FLOAT, r, 0, this.Yg),
                i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.Wf),
            e && i.bufferData(i.ELEMENT_ARRAY_BUFFER, this.ub, i.STATIC_DRAW),
                i.drawElements(i.TRIANGLES, 6 * t, i.UNSIGNED_SHORT, 0),
            e && (this.nb = r),
                M.fh()
        },
        UG: function() {
            if (0 < this.Ji) {
                for (var t = this.Xa, i = this.Cj, e = 0; e < t.length; e++) i[e] = t[e]; --this.Ji
            }
        },
        cy: function() {
            var t = this.F.pixelsWidth,
                i = this.F.pixelsHeight,
                e = this.F.R.height,
                n = this.ca,
                r = n.width * n.height;
            this.Xa = new Float32Array(12 * r),
                this.Yg = new Float32Array(8 * r),
                this.ub = new Uint16Array(6 * r);
            var s = M.l;
            this.hd && s.deleteBuffer(this.hd),
                this.hd = s.createBuffer(),
            this.bg && s.deleteBuffer(this.bg),
                this.bg = s.createBuffer(),
            this.Wf && s.deleteBuffer(this.Wf),
                this.Wf = s.createBuffer();
            var h,
                a,
                o = 0,
                c = this.Wg,
                u = this.Xa,
                f = this.Yg,
                l = this.Dm;
            for (h = 0; h < n.width; h++) for (a = 0; a < n.height; a++) {
                var d = h * c.x,
                    g = d + c.x,
                    b = a * c.y,
                    v = b + c.y;
                u[12 * o] = d,
                    u[12 * o + 1] = b,
                    u[12 * o + 2] = 0,
                    u[12 * o + 3] = g,
                    u[12 * o + 4] = b,
                    u[12 * o + 5] = 0,
                    u[12 * o + 6] = d,
                    u[12 * o + 7] = v,
                    u[12 * o + 8] = 0,
                    u[12 * o + 9] = g,
                    u[12 * o + 10] = v,
                    u[12 * o + 11] = 0;
                var y = b,
                    x = v;
                l && (y = e - b, x = e - v),
                    f[8 * o] = d / t,
                    f[8 * o + 1] = y / i,
                    f[8 * o + 2] = g / t,
                    f[8 * o + 3] = y / i,
                    f[8 * o + 4] = d / t,
                    f[8 * o + 5] = x / i,
                    f[8 * o + 6] = g / t,
                    f[8 * o + 7] = x / i,
                    o++
            }
            for (t = this.ub, h = 0; r > h; h++) t[6 * h + 0] = 4 * h + 0,
                t[6 * h + 1] = 4 * h + 1,
                t[6 * h + 2] = 4 * h + 2,
                t[6 * h + 3] = 4 * h + 1,
                t[6 * h + 4] = 4 * h + 2,
                t[6 * h + 5] = 4 * h + 3;
            this.Cj = new Float32Array(this.Xa),
                s.bindBuffer(s.ARRAY_BUFFER, this.hd),
                s.bufferData(s.ARRAY_BUFFER, this.Xa, s.DYNAMIC_DRAW),
                s.bindBuffer(s.ARRAY_BUFFER, this.bg),
                s.bufferData(s.ARRAY_BUFFER, this.Yg, s.DYNAMIC_DRAW),
                s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, this.Wf),
                s.bufferData(s.ELEMENT_ARRAY_BUFFER, this.ub, s.DYNAMIC_DRAW),
                this.nb = p
        }
    }), M.DB.create = function(t, i, e) {
    return new M.DB(t, i, e)
},
    M.DT = M.xa.extend({
        Tv: q,
        Ei: q,
        OM: q,
        dp: q,
        ctor: function() {
            M.lC(),
                this.dp = M.l,
                this.OM = [0, 0, 0, 0],
                this.Ei = q,
                this.Tv = this.dp.createFramebuffer()
        },
        Q3: function(t) {
            var i = this.dp;
            this.Ei = i.getParameter(i.FRAMEBUFFER_BINDING),
                i.bindFramebuffer(i.FRAMEBUFFER, this.Tv),
                i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, t.me, 0),
            i.checkFramebufferStatus(i.FRAMEBUFFER) != i.FRAMEBUFFER_COMPLETE && M.log("Frame Grabber: could not attach texture to frmaebuffer"),
                i.bindFramebuffer(i.FRAMEBUFFER, this.Ei)
        },
        f1: function() {
            var t = this.dp;
            this.Ei = t.getParameter(t.FRAMEBUFFER_BINDING),
                t.bindFramebuffer(t.FRAMEBUFFER, this.Tv),
                this.OM = t.getParameter(t.COLOR_CLEAR_VALUE),
                t.clearColor(0, 0, 0, 0),
                t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT)
        },
        J0: function() {
            var t = this.dp;
            t.bindFramebuffer(t.FRAMEBUFFER, this.Ei),
                t.colorMask(p, p, p, p)
        },
        Qca: function() {
            this.dp.deleteFramebuffer(this.Tv)
        }
    }), M.Yn = -1, M.Sd = M.xa.extend({
    originalTarget: q,
    target: q,
    tag: M.Yn,
    ctor: function() {
        this.target = this.originalTarget = q,
            this.tag = M.Yn
    },
    copy: function() {
        return M.log("copy is deprecated. Please use clone instead."),
            this.m()
    },
    m: function() {
        var t = new M.Sd;
        return t.originalTarget = q,
            t.target = q,
            t.tag = this.tag,
            t
    },
    gh: F(p),
    D: function(t) {
        this.target = this.originalTarget = t
    },
    stop: function() {
        this.target = q
    },
    step: function() {
        M.log("[Action step]. override me")
    },
    update: function() {
        M.log("[Action update]. override me")
    },
    jga: E("target"),
    gj: A("target"),
    Dfa: E("originalTarget"),
    zma: A("originalTarget"),
    $F: E("tag"),
    Nz: A("tag"),
    xz: z(),
    fj: z()
}), M.action = function() {
    return new M.Sd
},
    M.Sd.create = M.action, M.mj = M.Sd.extend({
    t: 0,
    ctor: function() {
        M.Sd.prototype.ctor.call(this),
            this.t = 0
    },
    mq: function() {
        return this.t * (this.lc || 1)
    },
    mg: A("t"),
    reverse: function() {
        return M.log("cocos2d: FiniteTimeAction#reverse: Implement me"),
            q
    },
    m: function() {
        return new M.mj
    }
}), M.Dv = M.Sd.extend({
    Ee: 0,
    vb: q,
    ctor: function(t, i) {
        M.Sd.prototype.ctor.call(this),
            this.Ee = 0,
            this.vb = q,
        t && this.ea(t, i)
    },
    ty: E("Ee"),
    hf: A("Ee"),
    ea: function(t, i) {
        return t || b("cc.Speed.initWithAction(): action must be non nil"),
            this.vb = t,
            this.Ee = i,
            p
    },
    m: function() {
        var t = new M.Dv;
        return t.ea(this.vb.m(), this.Ee),
            t
    },
    D: function(t) {
        M.Sd.prototype.D.call(this, t),
            this.vb.D(t)
    },
    stop: function() {
        this.vb.stop(),
            M.Sd.prototype.stop.call(this)
    },
    step: function(t) {
        this.vb.step(t * this.Ee)
    },
    gh: function() {
        return this.vb.gh()
    },
    reverse: function() {
        return new M.Dv(this.vb.reverse(), this.Ee)
    },
    tR: function(t) {
        this.vb != t && (this.vb = t)
    },
    SF: E("vb")
}), M.speed = function(t, i) {
    return new M.Dv(t, i)
},
    M.Dv.create = M.speed, M.vA = M.Sd.extend({
    $o: q,
    Go: r,
    gw: r,
    Lw: q,
    ps: q,
    ZE: q,
    Ln: 0,
    Pn: 0,
    Un: 0,
    rn: 0,
    ctor: function(t, i) {
        M.Sd.prototype.ctor.call(this),
            this.$o = q,
            this.gw = this.Go = r,
            this.ps = this.Lw = q,
            this.rn = this.Un = this.Pn = this.Ln = 0,
            this.ZE = M.rect(0, 0, 0, 0),
        t && (i ? this.vq(t, i) : this.vq(t))
    },
    m: function() {
        var t = new M.vA,
            i = this.ZE;
        return t.vq(this.$o, new M.XI(i.x, i.y, i.width, i.height)),
            t
    },
    aha: E("Go"),
    zla: A("Go"),
    vq: function(t, i) {
        t || b("cc.Follow.initWithAction(): followedNode must be non nil"),
            i = i || M.rect(0, 0, 0, 0),
            this.$o = t,
            this.ZE = i,
            this.Go = !M.MD(i),
            this.gw = r;
        var e = M.K.Ea();
        return this.ps = M.d(e.width, e.height),
            this.Lw = M.cj(this.ps, .5),
        this.Go && (this.Ln = -(i.x + i.width - this.ps.x), this.Pn = -i.x, this.Un = -i.y, this.rn = -(i.y + i.height - this.ps.y), this.Pn < this.Ln && (this.Pn = this.Ln = (this.Ln + this.Pn) / 2), this.Un < this.rn && (this.Un = this.rn = (this.Un + this.rn) / 2), this.Un == this.rn && this.Ln == this.Pn && (this.gw = p)),
            p
    },
    step: function() {
        var t = this.$o.x,
            i = this.$o.y,
            t = this.Lw.x - t,
            i = this.Lw.y - i;
        this.Go ? this.gw || this.target.H(M.jd(t, this.Ln, this.Pn), M.jd(i, this.rn, this.Un)) : this.target.H(t, i)
    },
    gh: function() {
        return ! this.$o.running
    },
    stop: function() {
        this.target = q,
            M.Sd.prototype.stop.call(this)
    }
}), M.t2 = function(t, i) {
    return new M.vA(t, i)
},
    M.vA.create = M.t2, M.C = M.mj.extend({
    tb: 0,
    Gw: r,
    Kg: q,
    lc: 1,
    Ps: r,
    vp: r,
    Ee: 1,
    Xs: r,
    ctor: function(t) {
        this.lc = this.Ee = 1,
            this.Ps = r,
            this.MAX_VALUE = 2,
            this.Xs = this.vp = r,
            M.mj.prototype.ctor.call(this),
        t !== k && this.f(t)
    },
    Iea: E("tb"),
    f: function(t) {
        return this.t = 0 === t ? M.fv: t,
            this.tb = 0,
            this.Gw = p
    },
    gh: function() {
        return this.tb >= this.t
    },
    Fa: function(t) {
        t.Ps = this.Ps,
            t.Ee = this.Ee,
            t.lc = this.lc,
            t.Kg = this.Kg,
            t.Xs = this.Xs,
            t.vp = this.vp
    },
    Ce: function(t) {
        if (this.Kg) {
            t.Kg = [];
            for (var i = 0; i < this.Kg.length; i++) t.Kg.push(this.Kg[i].reverse())
        }
    },
    m: function() {
        var t = new M.C(this.t);
        return this.Fa(t),
            t
    },
    $a: function() {
        this.Kg ? this.Kg.length = 0: this.Kg = [];
        for (var t = 0; t < arguments.length; t++) this.Kg.push(arguments[t]);
        return this
    },
    Ed: function(t) {
        var i = this.Kg;
        if (!i || 0 === i.length) return t;
        for (var e = 0, n = i.length; n > e; e++) t = i[e].$a(t);
        return t
    },
    step: function(t) {
        this.Gw ? (this.Gw = r, this.tb = 0) : this.tb += t,
            t = this.tb / (1.192092896e - 7 < this.t ? this.t: 1.192092896e - 7),
            t = 1 > t ? t: 1,
            this.update(t > 0 ? t: 0),
        this.vp && 1 < this.lc && this.gh() && (this.Ps || this.lc--, this.D(this.target), this.step(this.tb - this.t))
    },
    D: function(t) {
        M.Sd.prototype.D.call(this, t),
            this.tb = 0,
            this.Gw = p
    },
    reverse: function() {
        return M.log("cc.IntervalAction: reverse not implemented."),
            q
    },
    Qn: function() {
        M.log("cc.ActionInterval.setAmplitudeRate(): it should be overridden in subclass.")
    },
    Dn: function() {
        return M.log("cc.ActionInterval.getAmplitudeRate(): it should be overridden in subclass."),
            0
    },
    speed: function(t) {
        return 0 >= t ? (M.log("The speed parameter error"), this) : (this.Xs = p, this.Ee *= t, this)
    },
    ty: E("Ee"),
    hf: function(t) {
        return this.Ee = t,
            this
    },
    repeat: function(t) {
        return t = Math.round(t),
            isNaN(t) || 1 > t ? (M.log("The repeat parameter error"), this) : (this.vp = p, this.lc *= t, this)
    },
    YQ: function() {
        return this.vp = p,
            this.lc = this.MAX_VALUE,
            this.Ps = p,
            this
    }
}), M.A0 = function(t) {
    return new M.C(t)
},
    M.C.create = M.A0, M.vh = M.C.extend({
    si: q,
    LN: q,
    Bs: 0,
    ctor: function(t) {
        M.C.prototype.ctor.call(this),
            this.si = [];
        var i = t instanceof Array ? t: arguments,
            e = i.length - 1;
        if (e >= 0 && i[e] == q && M.log("parameters should not be ending with null in Javascript"), e >= 0) {
            for (var n = i[0], r = 1; e > r; r++) i[r] && (n = M.vh.qj(n, i[r]));
            this.In(n, i[e])
        }
    },
    In: function(t, i) {
        return (!t || !i) && b("cc.Sequence.initWithTwoActions(): arguments must all be non nil"),
            this.f(t.t + i.t),
            this.si[0] = t,
            this.si[1] = i,
            p
    },
    m: function() {
        var t = new M.vh;
        return this.Fa(t),
            t.In(this.si[0].m(), this.si[1].m()),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            this.LN = this.si[0].t / this.t,
            this.Bs = -1
    },
    stop: function() { - 1 !== this.Bs && this.si[this.Bs].stop(),
        M.Sd.prototype.stop.call(this)
    },
    update: function(t) {
        t = this.Ed(t);
        var i = 0,
            e = this.LN,
            n = this.si,
            r = this.Bs;
        e > t ? (t = 0 !== e ? t / e: 1, 0 === i && 1 === r && (n[1].update(0), n[1].stop())) : (i = 1, t = 1 === e ? 1: (t - e) / (1 - e), -1 === r && (n[0].D(this.target), n[0].update(1), n[0].stop()), r || (n[0].update(1), n[0].stop())),
        r === i && n[i].gh() || (r !== i && n[i].D(this.target), n[i].update(t), this.Bs = i)
    },
    reverse: function() {
        var t = M.vh.qj(this.si[1].reverse(), this.si[0].reverse());
        return this.Fa(t),
            this.Ce(t),
            t
    }
}), M.Gb = function(t) {
    var i = t instanceof Array ? t: arguments;
    0 < i.length && i[i.length - 1] == q && M.log("parameters should not be ending with null in Javascript");
    for (var e = i[0], n = 1; n < i.length; n++) i[n] && (e = M.vh.qj(e, i[n]));
    return e
},
    M.vh.create = M.Gb, M.vh.qj = function(t, i) {
    var e = new M.vh;
    return e.In(t, i),
        e
},
    M.ro = M.C.extend({
        lc: 0,
        pl: 0,
        jD: 0,
        uK: r,
        vb: q,
        ctor: function(t, i) {
            M.C.prototype.ctor.call(this),
            i !== k && this.ea(t, i)
        },
        ea: function(t, i) {
            return this.f(t.t * i) ? (this.lc = i, this.vb = t, t instanceof M.Oe && (this.uK = p, this.lc -= 1), this.pl = 0, p) : r
        },
        m: function() {
            var t = new M.ro;
            return this.Fa(t),
                t.ea(this.vb.m(), this.lc),
                t
        },
        D: function(t) {
            this.pl = 0,
                this.jD = this.vb.t / this.t,
                M.C.prototype.D.call(this, t),
                this.vb.D(t)
        },
        stop: function() {
            this.vb.stop(),
                M.Sd.prototype.stop.call(this)
        },
        update: function(t) {
            t = this.Ed(t);
            var i = this.vb,
                e = this.t,
                n = this.lc,
                r = this.jD;
            if (t >= r) {
                for (; t > r && this.pl < n;) i.update(1),
                    this.pl++,
                    i.stop(),
                    i.D(this.target),
                    this.jD = r += i.t / e;
                t >= 1 && this.pl < n && this.pl++,
                this.uK || (this.pl === n ? (i.update(1), i.stop()) : i.update(t - (r - i.t / e)))
            } else i.update(t * n % 1)
        },
        gh: function() {
            return this.pl == this.lc
        },
        reverse: function() {
            var t = new M.ro(this.vb.reverse(), this.lc);
            return this.Fa(t),
                this.Ce(t),
                t
        },
        tR: function(t) {
            this.vb != t && (this.vb = t)
        },
        SF: E("vb")
    }), M.repeat = function(t, i) {
    return new M.ro(t, i)
},
    M.ro.create = M.repeat, M.uv = M.C.extend({
    vb: q,
    ctor: function(t) {
        M.C.prototype.ctor.call(this),
            this.vb = q,
        t && this.ea(t)
    },
    ea: function(t) {
        return t || b("cc.RepeatForever.initWithAction(): action must be non null"),
            this.vb = t,
            p
    },
    m: function() {
        var t = new M.uv;
        return this.Fa(t),
            t.ea(this.vb.m()),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            this.vb.D(t)
    },
    step: function(t) {
        var i = this.vb;
        i.step(t),
        i.gh() && (i.D(this.target), i.step(i.tb - i.t))
    },
    gh: F(r),
    reverse: function() {
        var t = new M.uv(this.vb.reverse());
        return this.Fa(t),
            this.Ce(t),
            t
    },
    tR: function(t) {
        this.vb != t && (this.vb = t)
    },
    SF: E("vb")
}), M.YQ = function(t) {
    return new M.uv(t)
},
    M.uv.create = M.YQ, M.im = M.C.extend({
    Bj: q,
    Vj: q,
    ctor: function(t) {
        M.C.prototype.ctor.call(this),
            this.Vj = this.Bj = q;
        var i = t instanceof Array ? t: arguments,
            e = i.length - 1;
        if (e >= 0 && i[e] == q && M.log("parameters should not be ending with null in Javascript"), e >= 0) {
            for (var n = i[0], r = 1; e > r; r++) i[r] && (n = M.im.qj(n, i[r]));
            this.In(n, i[e])
        }
    },
    In: function(t, i) { (!t || !i) && b("cc.Spawn.initWithTwoActions(): arguments must all be non null");
        var e = r,
            n = t.t,
            s = i.t;
        return this.f(Math.max(n, s)) && (this.Bj = t, this.Vj = i, n > s ? this.Vj = M.vh.qj(i, M.pe(n - s)) : s > n && (this.Bj = M.vh.qj(t, M.pe(s - n))), e = p),
            e
    },
    m: function() {
        var t = new M.im;
        return this.Fa(t),
            t.In(this.Bj.m(), this.Vj.m()),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            this.Bj.D(t),
            this.Vj.D(t)
    },
    stop: function() {
        this.Bj.stop(),
            this.Vj.stop(),
            M.Sd.prototype.stop.call(this)
    },
    update: function(t) {
        t = this.Ed(t),
        this.Bj && this.Bj.update(t),
        this.Vj && this.Vj.update(t)
    },
    reverse: function() {
        var t = M.im.qj(this.Bj.reverse(), this.Vj.reverse());
        return this.Fa(t),
            this.Ce(t),
            t
    }
}), M.Rl = function(t) {
    var i = t instanceof Array ? t: arguments;
    0 < i.length && i[i.length - 1] == q && M.log("parameters should not be ending with null in Javascript");
    for (var e = i[0], n = 1; n < i.length; n++) i[n] != q && (e = M.im.qj(e, i[n]));
    return e
},
    M.im.create = M.Rl, M.im.qj = function(t, i) {
    var e = new M.im;
    return e.In(t, i),
        e
},
    M.gB = M.C.extend({
        ww: 0,
        Ys: 0,
        aL: 0,
        uC: 0,
        Ap: 0,
        bL: 0,
        ctor: function(t, i, e) {
            M.C.prototype.ctor.call(this),
            i !== k && this.f(t, i, e)
        },
        f: function(t, i, e) {
            return M.C.prototype.f.call(this, t) ? (this.ww = i || 0, this.uC = e || this.ww, p) : r
        },
        m: function() {
            var t = new M.gB;
            return this.Fa(t),
                t.f(this.t, this.ww, this.uC),
                t
        },
        D: function(t) {
            M.C.prototype.D.call(this, t);
            var i = t.rotationX % 360,
                e = this.ww - i;
            e > 180 && (e -= 360),
            -180 > e && (e += 360),
                this.Ys = i,
                this.aL = e,
                this.Ap = t.rotationY % 360,
                t = this.uC - this.Ap,
            t > 180 && (t -= 360),
            -180 > t && (t += 360),
                this.bL = t
        },
        reverse: function() {
            M.log("cc.RotateTo.reverse(): it should be overridden in subclass.")
        },
        update: function(t) {
            t = this.Ed(t),
            this.target && (this.target.rotationX = this.Ys + this.aL * t, this.target.rotationY = this.Ap + this.bL * t)
        }
    }), M.x6 = function(t, i, e) {
    return new M.gB(t, i, e)
},
    M.gB.create = M.x6, M.vv = M.C.extend({
    xh: 0,
    Ys: 0,
    cw: 0,
    Ap: 0,
    ctor: function(t, i, e) {
        M.C.prototype.ctor.call(this),
        i !== k && this.f(t, i, e)
    },
    f: function(t, i, e) {
        return M.C.prototype.f.call(this, t) ? (this.xh = i || 0, this.cw = e || this.xh, p) : r
    },
    m: function() {
        var t = new M.vv;
        return this.Fa(t),
            t.f(this.t, this.xh, this.cw),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            this.Ys = t.rotationX,
            this.Ap = t.rotationY
    },
    update: function(t) {
        t = this.Ed(t),
        this.target && (this.target.rotationX = this.Ys + this.xh * t, this.target.rotationY = this.Ap + this.cw * t)
    },
    reverse: function() {
        var t = new M.vv(this.t, -this.xh, -this.cw);
        return this.Fa(t),
            this.Ce(t),
            t
    }
}), M.dR = function(t, i, e) {
    return new M.vv(t, i, e)
},
    M.vv.create = M.dR, M.vk = M.C.extend({
    Hi: q,
    Tc: q,
    ed: q,
    ctor: function(t, i, e) {
        M.C.prototype.ctor.call(this),
            this.Hi = M.d(0, 0),
            this.Tc = M.d(0, 0),
            this.ed = M.d(0, 0),
        i !== k && this.f(t, i, e)
    },
    f: function(t, i, e) {
        return M.C.prototype.f.call(this, t) ? (i.x !== k && (e = i.y, i = i.x), this.Hi.x = i, this.Hi.y = e, p) : r
    },
    m: function() {
        var t = new M.vk;
        return this.Fa(t),
            t.f(this.t, this.Hi),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t);
        var i = t.df();
        t = t.eh(),
            this.ed.x = i,
            this.ed.y = t,
            this.Tc.x = i,
            this.Tc.y = t
    },
    update: function(t) {
        if (t = this.Ed(t), this.target) {
            var i = this.Hi.x * t;
            t *= this.Hi.y;
            var e = this.Tc;
            if (M.Mu) {
                var n = this.target.eh(),
                    r = this.ed;
                e.x = e.x + this.target.df() - r.x,
                    e.y = e.y + n - r.y,
                    i += e.x,
                    t += e.y,
                    r.x = i,
                    r.y = t,
                    this.target.H(i, t)
            } else this.target.H(e.x + i, e.y + t)
        }
    },
    reverse: function() {
        var t = new M.vk(this.t, M.d( - this.Hi.x, -this.Hi.y));
        return this.Fa(t),
            this.Ce(t),
            t
    }
}), M.moveBy = function(t, i, e) {
    return new M.vk(t, i, e)
},
    M.vk.create = M.moveBy, M.fm = M.vk.extend({
    Tf: q,
    ctor: function(t, i, e) {
        M.vk.prototype.ctor.call(this),
            this.Tf = M.d(0, 0),
        i !== k && this.f(t, i, e)
    },
    f: function(t, i, e) {
        return M.vk.prototype.f.call(this, t, i, e) ? (i.x !== k && (e = i.y, i = i.x), this.Tf.x = i, this.Tf.y = e, p) : r
    },
    m: function() {
        var t = new M.fm;
        return this.Fa(t),
            t.f(this.t, this.Tf),
            t
    },
    D: function(t) {
        M.vk.prototype.D.call(this, t),
            this.Hi.x = this.Tf.x - t.df(),
            this.Hi.y = this.Tf.y - t.eh()
    }
}), M.moveTo = function(t, i, e) {
    return new M.fm(t, i, e)
},
    M.fm.create = M.moveTo, M.hm = M.C.extend({
    Ug: 0,
    Vg: 0,
    Cx: 0,
    Dx: 0,
    Aw: 0,
    Bw: 0,
    tf: 0,
    uf: 0,
    ctor: function(t, i, e) {
        M.C.prototype.ctor.call(this),
        e !== k && this.f(t, i, e)
    },
    f: function(t, i, e) {
        var n = r;
        return M.C.prototype.f.call(this, t) && (this.Aw = i, this.Bw = e, n = p),
            n
    },
    m: function() {
        var t = new M.hm;
        return this.Fa(t),
            t.f(this.t, this.Aw, this.Bw),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            this.Cx = t.skewX % 180,
            this.tf = this.Aw - this.Cx,
        180 < this.tf && (this.tf -= 360),
        -180 > this.tf && (this.tf += 360),
            this.Dx = t.skewY % 360,
            this.uf = this.Bw - this.Dx,
        180 < this.uf && (this.uf -= 360),
        -180 > this.uf && (this.uf += 360)
    },
    update: function(t) {
        t = this.Ed(t),
            this.target.skewX = this.Cx + this.tf * t,
            this.target.skewY = this.Dx + this.uf * t
    }
}), M.K7 = function(t, i, e) {
    return new M.hm(t, i, e)
},
    M.hm.create = M.K7, M.Cv = M.hm.extend({
    ctor: function(t, i, e) {
        M.hm.prototype.ctor.call(this),
        e !== k && this.f(t, i, e)
    },
    f: function(t, i, e) {
        var n = r;
        return M.hm.prototype.f.call(this, t, i, e) && (this.Ug = i, this.Vg = e, n = p),
            n
    },
    m: function() {
        var t = new M.Cv;
        return this.Fa(t),
            t.f(this.t, this.Ug, this.Vg),
            t
    },
    D: function(t) {
        M.hm.prototype.D.call(this, t),
            this.tf = this.Ug,
            this.uf = this.Vg,
            this.Aw = this.Cx + this.tf,
            this.Bw = this.Dx + this.uf
    },
    reverse: function() {
        var t = new M.Cv(this.t, -this.Ug, -this.Vg);
        return this.Fa(t),
            this.Ce(t),
            t
    }
}), M.J7 = function(t, i, e) {
    return new M.Cv(t, i, e)
},
    M.Cv.create = M.J7, M.uk = M.C.extend({
    Tc: q,
    vi: q,
    ws: 0,
    zj: 0,
    ed: q,
    ctor: function(t, i, e, n, r) {
        M.C.prototype.ctor.call(this),
            this.Tc = M.d(0, 0),
            this.ed = M.d(0, 0),
            this.vi = M.d(0, 0),
        n !== k && this.f(t, i, e, n, r)
    },
    f: function(t, i, e, n, s) {
        return M.C.prototype.f.call(this, t) ? (s === k && (s = n, n = e, e = i.y, i = i.x), this.vi.x = i, this.vi.y = e, this.ws = n, this.zj = s, p) : r
    },
    m: function() {
        var t = new M.uk;
        return this.Fa(t),
            t.f(this.t, this.vi, this.ws, this.zj),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t);
        var i = t.df();
        t = t.eh(),
            this.ed.x = i,
            this.ed.y = t,
            this.Tc.x = i,
            this.Tc.y = t
    },
    update: function(t) {
        if (t = this.Ed(t), this.target) {
            var i = t * this.zj % 1,
                i = 4 * this.ws * i * (1 - i),
                i = i + this.vi.y * t;
            t *= this.vi.x;
            var e = this.Tc;
            if (M.Mu) {
                var n = this.target.eh(),
                    r = this.ed;
                e.x = e.x + this.target.df() - r.x,
                    e.y = e.y + n - r.y,
                    t += e.x,
                    i += e.y,
                    r.x = t,
                    r.y = i,
                    this.target.H(t, i)
            } else this.target.H(e.x + t, e.y + i)
        }
    },
    reverse: function() {
        var t = new M.uk(this.t, M.d( - this.vi.x, -this.vi.y), this.ws, this.zj);
        return this.Fa(t),
            this.Ce(t),
            t
    }
}), M.lQ = function(t, i, e, n, r) {
    return new M.uk(t, i, e, n, r)
},
    M.uk.create = M.lQ, M.BA = M.uk.extend({
    Tf: q,
    ctor: function(t, i, e, n, r) {
        M.uk.prototype.ctor.call(this),
            this.Tf = M.d(0, 0),
        n !== k && this.f(t, i, e, n, r)
    },
    f: function(t, i, e, n, s) {
        return M.uk.prototype.f.call(this, t, i, e, n, s) ? (s === k && (e = i.y, i = i.x), this.Tf.x = i, this.Tf.y = e, p) : r
    },
    D: function(t) {
        M.uk.prototype.D.call(this, t),
            this.vi.x = this.Tf.x - this.Tc.x,
            this.vi.y = this.Tf.y - this.Tc.y
    },
    m: function() {
        var t = new M.BA;
        return this.Fa(t),
            t.f(this.t, this.Tf, this.ws, this.zj),
            t
    }
}), M.y4 = function(t, i, e, n, r) {
    return new M.BA(t, i, e, n, r)
},
    M.BA.create = M.y4, M.qO = function(t, i, e, n) {
    return 0 * Math.pow(1 - n, 3) + 3 * n * Math.pow(1 - n, 2) * t + 3 * Math.pow(n, 2) * (1 - n) * i + Math.pow(n, 3) * e
},
    M.Zl = M.C.extend({
        Qf: q,
        Tc: q,
        ed: q,
        ctor: function(t, i) {
            M.C.prototype.ctor.call(this),
                this.Qf = [],
                this.Tc = M.d(0, 0),
                this.ed = M.d(0, 0),
            i && this.f(t, i)
        },
        f: function(t, i) {
            return M.C.prototype.f.call(this, t) ? (this.Qf = i, p) : r
        },
        m: function() {
            var t = new M.Zl;
            this.Fa(t);
            for (var i = [], e = 0; e < this.Qf.length; e++) {
                var n = this.Qf[e];
                i.push(M.d(n.x, n.y))
            }
            return t.f(this.t, i),
                t
        },
        D: function(t) {
            M.C.prototype.D.call(this, t);
            var i = t.df();
            t = t.eh(),
                this.ed.x = i,
                this.ed.y = t,
                this.Tc.x = i,
                this.Tc.y = t
        },
        update: function(t) {
            if (t = this.Ed(t), this.target) {
                var i = this.Qf,
                    e = M.qO(i[0].x, i[1].x, i[2].x, t);
                if (t = M.qO(i[0].y, i[1].y, i[2].y, t), i = this.Tc, M.Mu) {
                    var n = this.target.eh(),
                        r = this.ed;
                    i.x = i.x + this.target.df() - r.x,
                        i.y = i.y + n - r.y,
                        e += i.x,
                        t += i.y,
                        r.x = e,
                        r.y = t,
                        this.target.H(e, t)
                } else this.target.H(i.x + e, i.y + t)
            }
        },
        reverse: function() {
            var t = this.Qf,
                t = [M.ik(t[1], M.IG(t[2])), M.ik(t[0], M.IG(t[2])), M.IG(t[2])],
                t = new M.Zl(this.t, t);
            return this.Fa(t),
                this.Ce(t),
                t
        }
    }), M.h1 = function(t, i) {
    return new M.Zl(t, i)
},
    M.Zl.create = M.h1, M.dA = M.Zl.extend({
    Ox: q,
    ctor: function(t, i) {
        M.Zl.prototype.ctor.call(this),
            this.Ox = [],
        i && this.f(t, i)
    },
    f: function(t, i) {
        return M.C.prototype.f.call(this, t) ? (this.Ox = i, p) : r
    },
    m: function() {
        var t = new M.dA;
        return this.Fa(t),
            t.f(this.t, this.Ox),
            t
    },
    D: function(t) {
        M.Zl.prototype.D.call(this, t),
            t = this.Tc;
        var i = this.Ox,
            e = this.Qf;
        e[0] = M.$d(i[0], t),
            e[1] = M.$d(i[1], t),
            e[2] = M.$d(i[2], t)
    }
}), M.i1 = function(t, i) {
    return new M.dA(t, i)
},
    M.dA.create = M.i1, M.to = M.C.extend({
    pa: 1,
    Ta: 1,
    Zs: 1,
    $s: 1,
    To: 0,
    Uo: 0,
    tf: 0,
    uf: 0,
    ctor: function(t, i, e) {
        M.C.prototype.ctor.call(this),
        i !== k && this.f(t, i, e)
    },
    f: function(t, i, e) {
        return M.C.prototype.f.call(this, t) ? (this.To = i, this.Uo = e != q ? e: i, p) : r
    },
    m: function() {
        var t = new M.to;
        return this.Fa(t),
            t.f(this.t, this.To, this.Uo),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            this.Zs = t.scaleX,
            this.$s = t.scaleY,
            this.tf = this.To - this.Zs,
            this.uf = this.Uo - this.$s
    },
    update: function(t) {
        t = this.Ed(t),
        this.target && (this.target.scaleX = this.Zs + this.tf * t, this.target.scaleY = this.$s + this.uf * t)
    }
}), M.lg = function(t, i, e) {
    return new M.to(t, i, e)
},
    M.to.create = M.lg, M.Av = M.to.extend({
    D: function(t) {
        M.to.prototype.D.call(this, t),
            this.tf = this.Zs * this.To - this.Zs,
            this.uf = this.$s * this.Uo - this.$s
    },
    reverse: function() {
        var t = new M.Av(this.t, 1 / this.To, 1 / this.Uo);
        return this.Fa(t),
            this.Ce(t),
            t
    },
    m: function() {
        var t = new M.Av;
        return this.Fa(t),
            t.f(this.t, this.To, this.Uo),
            t
    }
}), M.eR = function(t, i, e) {
    return new M.Av(t, i, e)
},
    M.Av.create = M.eR, M.Ju = M.C.extend({
    lc: 0,
    SM: r,
    ctor: function(t, i) {
        M.C.prototype.ctor.call(this),
        i !== k && this.f(t, i)
    },
    f: function(t, i) {
        return M.C.prototype.f.call(this, t) ? (this.lc = i, p) : r
    },
    m: function() {
        var t = new M.Ju;
        return this.Fa(t),
            t.f(this.t, this.lc),
            t
    },
    update: function(t) {
        if (t = this.Ed(t), this.target && !this.gh()) {
            var i = 1 / this.lc;
            this.target.visible = t % i > i / 2
        }
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            this.SM = t.visible
    },
    stop: function() {
        this.target.visible = this.SM,
            M.C.prototype.stop.call(this)
    },
    reverse: function() {
        var t = new M.Ju(this.t, this.lc);
        return this.Fa(t),
            this.Ce(t),
            t
    }
}), M.blink = function(t, i) {
    return new M.Ju(t, i)
},
    M.Ju.create = M.blink, M.tk = M.C.extend({
    Hp: 0,
    Iw: 0,
    ctor: function(t, i) {
        M.C.prototype.ctor.call(this),
        i !== k && this.f(t, i)
    },
    f: function(t, i) {
        return M.C.prototype.f.call(this, t) ? (this.Hp = i, p) : r
    },
    m: function() {
        var t = new M.tk;
        return this.Fa(t),
            t.f(this.t, this.Hp),
            t
    },
    update: function(t) {
        t = this.Ed(t);
        var i = this.Iw !== k ? this.Iw: 255;
        this.target.opacity = i + (this.Hp - i) * t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            this.Iw = t.opacity
    }
}), M.cP = function(t, i) {
    return new M.tk(t, i)
},
    M.tk.create = M.cP, M.gv = M.tk.extend({
    XD: q,
    ctor: function(t) {
        M.tk.prototype.ctor.call(this),
        t && this.f(t, 255)
    },
    reverse: function() {
        var t = new M.hv;
        return t.f(this.t, 0),
            this.Fa(t),
            this.Ce(t),
            t
    },
    m: function() {
        var t = new M.gv;
        return this.Fa(t),
            t.f(this.t, this.Hp),
            t
    },
    D: function(t) {
        this.XD && (this.Hp = this.XD.Iw),
            M.tk.prototype.D.call(this, t)
    }
}), M.YO = function(t) {
    return new M.gv(t)
},
    M.gv.create = M.YO, M.hv = M.tk.extend({
    ctor: function(t) {
        M.tk.prototype.ctor.call(this),
        t && this.f(t, 0)
    },
    reverse: function() {
        var t = new M.gv;
        return t.XD = this,
            t.f(this.t, 255),
            this.Fa(t),
            this.Ce(t),
            t
    },
    m: function() {
        var t = new M.hv;
        return this.Fa(t),
            t.f(this.t, this.Hp),
            t
    }
}), M.ZO = function(t) {
    return new M.hv(t)
},
    M.hv.create = M.ZO, M.EB = M.C.extend({
    Ld: q,
    Fd: q,
    ctor: function(t, i, e, n) {
        M.C.prototype.ctor.call(this),
            this.Ld = M.color(0, 0, 0),
            this.Fd = M.color(0, 0, 0),
        n !== k && this.f(t, i, e, n)
    },
    f: function(t, i, e, n) {
        return M.C.prototype.f.call(this, t) ? (this.Ld = M.color(i, e, n), p) : r
    },
    m: function() {
        var t = new M.EB;
        this.Fa(t);
        var i = this.Ld;
        return t.f(this.t, i.r, i.g, i.b),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            this.Fd = this.target.color
    },
    update: function(t) {
        t = this.Ed(t);
        var i = this.Fd,
            e = this.Ld;
        i && (this.target.color = M.color(i.r + (e.r - i.r) * t, i.g + (e.g - i.g) * t, i.b + (e.b - i.b) * t))
    }
}), M.p8 = function(t, i, e, n) {
    return new M.EB(t, i, e, n)
},
    M.EB.create = M.p8, M.Lv = M.C.extend({
    uw: 0,
    tw: 0,
    sw: 0,
    ZL: 0,
    YL: 0,
    XL: 0,
    ctor: function(t, i, e, n) {
        M.C.prototype.ctor.call(this),
        n !== k && this.f(t, i, e, n)
    },
    f: function(t, i, e, n) {
        return M.C.prototype.f.call(this, t) ? (this.uw = i, this.tw = e, this.sw = n, p) : r
    },
    m: function() {
        var t = new M.Lv;
        return this.Fa(t),
            t.f(this.t, this.uw, this.tw, this.sw),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            t = t.color,
            this.ZL = t.r,
            this.YL = t.g,
            this.XL = t.b
    },
    update: function(t) {
        t = this.Ed(t),
            this.target.color = M.color(this.ZL + this.uw * t, this.YL + this.tw * t, this.XL + this.sw * t)
    },
    reverse: function() {
        var t = new M.Lv(this.t, -this.uw, -this.tw, -this.sw);
        return this.Fa(t),
            this.Ce(t),
            t
    }
}), M.o8 = function(t, i, e, n) {
    return new M.Lv(t, i, e, n)
},
    M.Lv.create = M.o8, M.Lu = M.C.extend({
    update: z(),
    reverse: function() {
        var t = new M.Lu(this.t);
        return this.Fa(t),
            this.Ce(t),
            t
    },
    m: function() {
        var t = new M.Lu;
        return this.Fa(t),
            t.f(this.t),
            t
    }
}), M.pe = function(t) {
    return new M.Lu(t)
},
    M.Lu.create = M.pe, M.Br = M.C.extend({
    Dj: q,
    ctor: function(t) {
        M.C.prototype.ctor.call(this),
            this.Dj = q,
        t && this.ea(t)
    },
    ea: function(t) {
        return t || b("cc.ReverseTime.initWithAction(): action must be non null"),
        t == this.Dj && b("cc.ReverseTime.initWithAction(): the action was already passed in."),
            M.C.prototype.f.call(this, t.t) ? (this.Dj = t, p) : r
    },
    m: function() {
        var t = new M.Br;
        return this.Fa(t),
            t.ea(this.Dj.m()),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            this.Dj.D(t)
    },
    update: function(t) {
        t = this.Ed(t),
        this.Dj && this.Dj.update(1 - t)
    },
    reverse: function() {
        return this.Dj.m()
    },
    stop: function() {
        this.Dj.stop(),
            M.Sd.prototype.stop.call(this)
    }
}), M.cR = function(t) {
    return new M.Br(t)
},
    M.Br.create = M.cR, M.Iu = M.C.extend({
    Kk: q,
    Gs: 0,
    pD: q,
    Dw: 0,
    sE: q,
    ctor: function(t) {
        M.C.prototype.ctor.call(this),
            this.sE = [],
        t && this.UP(t)
    },
    kP: E("Kk"),
    B6: A("Kk"),
    UP: function(t) {
        t || b("cc.Animate.initWithAnimation(): animation must be non-NULL");
        var i = t.mq();
        if (this.f(i * t.Aj)) {
            this.Gs = 0,
                this.B6(t),
                this.pD = q,
                this.Dw = 0;
            var e = this.sE,
                n = e.length = 0,
                s = i / t.Si;
            t = t.je,
                M.ot(t, M.wg);
            for (var h = 0; h < t.length; h++) {
                var a = n * s / i,
                    n = n + t[h].ie;
                e.push(a)
            }
            return p
        }
        return r
    },
    m: function() {
        var t = new M.Iu;
        return this.Fa(t),
            t.UP(this.Kk.m()),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
        this.Kk.Tm && (this.pD = t.H1()),
            this.Dw = this.Gs = 0
    },
    update: function(t) {
        t = this.Ed(t),
        1 > t && (t *= this.Kk.Aj, (0 | t) > this.Dw && (this.Gs = 0, this.Dw++), t %= 1);
        for (var i = this.Kk.je, e = i.length, n = this.sE, r = this.Gs; e > r && n[r] <= t; r++) this.target.Ql(i[r].Zj()),
            this.Gs = r + 1
    },
    reverse: function() {
        var t = this.Kk,
            i = t.je,
            e = [];
        if (M.ot(i, M.wg), 0 < i.length) for (var n = i.length - 1; n >= 0; n--) {
            var r = i[n];
            if (!r) break;
            e.push(r.m())
        }
        return i = new M.jj(e, t.ie, t.Aj),
            i.Kz(t.Tm),
            t = new M.Iu(i),
            this.Fa(t),
            this.Ce(t),
            t
    },
    stop: function() {
        this.Kk.Tm && this.target && this.target.Ql(this.pD),
            M.Sd.prototype.stop.call(this)
    }
}), M.O0 = function(t) {
    return new M.Iu(t)
},
    M.Iu.create = M.O0, M.BB = M.C.extend({
    Qr: q,
    ap: q,
    ctor: function(t, i) {
        M.C.prototype.ctor.call(this),
        i && this.vq(t, i)
    },
    vq: function(t, i) {
        return this.f(i.t) ? (this.ap = t, this.Qr = i, p) : r
    },
    m: function() {
        var t = new M.BB;
        return this.Fa(t),
            t.vq(this.ap, this.Qr.m()),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            this.Qr.D(this.ap)
    },
    stop: function() {
        this.Qr.stop()
    },
    update: function(t) {
        t = this.Ed(t),
            this.Qr.update(t)
    },
    Uea: E("ap"),
    Wla: function(t) {
        this.ap != t && (this.ap = t)
    }
}), M.d8 = function(t, i) {
    return new M.BB(t, i)
},
    M.BB.create = M.d8, M.Oe = M.mj.extend({
    gh: F(p),
    step: function() {
        this.update(1)
    },
    update: z(),
    reverse: function() {
        return this.m()
    },
    m: function() {
        return new M.Oe
    }
}), M.Bv = M.Oe.extend({
    update: function() {
        this.target.visible = p
    },
    reverse: function() {
        return new M.mv
    },
    m: function() {
        return new M.Bv
    }
}), M.show = function() {
    return new M.Bv
},
    M.Bv.create = M.show, M.mv = M.Oe.extend({
    update: function() {
        this.target.visible = r
    },
    reverse: function() {
        return new M.Bv
    },
    m: function() {
        return new M.mv
    }
}), M.Hn = function() {
    return new M.mv
},
    M.mv.create = M.Hn, M.Mv = M.Oe.extend({
    update: function() {
        this.target.visible = !this.target.visible
    },
    reverse: function() {
        return new M.Mv
    },
    m: function() {
        return new M.Mv
    }
}), M.q8 = function() {
    return new M.Mv
},
    M.Mv.create = M.q8, M.tv = M.Oe.extend({
    Tw: p,
    ctor: function(t) {
        M.mj.prototype.ctor.call(this),
        t !== k && this.ha(t)
    },
    update: function() {
        this.target.TG(this.Tw)
    },
    ha: function(t) {
        return this.Tw = t,
            p
    },
    reverse: function() {
        return new M.tv(this.Tw)
    },
    m: function() {
        return new M.tv(this.Tw)
    }
}), M.j6 = function(t) {
    return new M.tv(t)
},
    M.tv.create = M.j6, M.kv = M.Oe.extend({
    hc: r,
    ctor: function(t) {
        M.mj.prototype.ctor.call(this),
            this.hc = r,
        t !== k && this.WP(t)
    },
    WP: function(t) {
        return this.hc = t,
            p
    },
    update: function() {
        this.target.flippedX = this.hc
    },
    reverse: function() {
        return new M.kv(!this.hc)
    },
    m: function() {
        var t = new M.kv;
        return t.WP(this.hc),
            t
    }
}), M.p2 = function(t) {
    return new M.kv(t)
},
    M.kv.create = M.p2, M.lv = M.Oe.extend({
    ic: r,
    ctor: function(t) {
        M.mj.prototype.ctor.call(this),
            this.ic = r,
        t !== k && this.XP(t)
    },
    XP: function(t) {
        return this.ic = t,
            p
    },
    update: function() {
        this.target.flippedY = this.ic
    },
    reverse: function() {
        return new M.lv(!this.ic)
    },
    m: function() {
        var t = new M.lv;
        return t.XP(this.ic),
            t
    }
}), M.r2 = function(t) {
    return new M.lv(t)
},
    M.lv.create = M.r2, M.QA = M.Oe.extend({
    Sh: 0,
    af: 0,
    ctor: function(t, i) {
        M.mj.prototype.ctor.call(this),
            this.af = this.Sh = 0,
        t !== k && (t.x !== k && (i = t.y, t = t.x), this.bQ(t, i))
    },
    bQ: function(t, i) {
        return this.Sh = t,
            this.af = i,
            p
    },
    update: function() {
        this.target.H(this.Sh, this.af)
    },
    m: function() {
        var t = new M.QA;
        return t.bQ(this.Sh, this.af),
            t
    }
}), M.I5 = function(t, i) {
    return new M.QA(t, i)
},
    M.QA.create = M.I5, M.gA = M.Oe.extend({
    Kj: q,
    jw: q,
    qs: q,
    Po: q,
    ctor: function(t, i, e) {
        M.mj.prototype.ctor.call(this),
        t !== k && (i === k ? this.Ky(t) : this.Ky(t, i, e))
    },
    Ky: function(t, i, e) {
        return i ? (this.Po = e, this.jw = t, this.Kj = i) : t && (this.qs = t),
            p
    },
    execute: function() {
        this.jw != q ? this.jw.call(this.Kj, this.target, this.Po) : this.qs && this.qs.call(q, this.target)
    },
    update: function() {
        this.execute()
    },
    kga: E("Kj"),
    Xma: function(t) {
        t != this.Kj && (this.Kj && (this.Kj = q), this.Kj = t)
    },
    m: function() {
        var t = new M.gA;
        return this.Kj ? t.Ky(this.jw, this.Kj, this.Po) : this.qs && t.Ky(this.qs),
            t
    }
}), M.Jc = function(t, i, e) {
    return new M.gA(t, i, e)
},
    M.gA.create = M.Jc, M.Xz = M.C.extend({
    iC: 0,
    jC: 0,
    kC: 0,
    PL: 0,
    QL: 0,
    RL: 0,
    ZN: 0,
    $N: 0,
    aO: 0,
    ctor: function() {
        M.C.prototype.ctor.call(this),
            this.aO = this.$N = this.ZN = this.RL = this.QL = this.PL = this.kC = this.jC = this.iC = 0
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            t = t.En();
        var i = t.nP();
        this.iC = i.x,
            this.jC = i.y,
            this.kC = i.e,
            i = t.rP(),
            this.PL = i.x,
            this.QL = i.y,
            this.RL = i.e,
            t = t.I3(),
            this.ZN = t.x,
            this.$N = t.y,
            this.aO = t.e
    },
    m: function() {
        return new M.Xz
    },
    reverse: function() {
        return new M.Br(this)
    }
}), M.MA = M.Xz.extend({
    xf: 0,
    rC: 0,
    Tr: 0,
    ZK: 0,
    xh: 0,
    YK: 0,
    dN: 0,
    bN: 0,
    cN: 0,
    aN: 0,
    ctor: function(t, i, e, n, r, s, h) {
        M.Xz.prototype.ctor.call(this),
        h !== k && this.f(t, i, e, n, r, s, h)
    },
    f: function(t, i, e, n, s, h, a) {
        return M.C.prototype.f.call(this, t) ? (this.xf = i, this.rC = e, this.Tr = n, this.ZK = s, this.xh = h, this.YK = a, this.bN = M.cf(s), this.aN = M.cf(a), p) : r
    },
    L7: function() {
        var t,
            i;
        i = this.target.En();
        var e = i.rP();
        t = i.nP(),
            i = e.x - t.x;
        var n = e.y - t.y;
        t = e.e - t.e;
        var e = Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2) + Math.pow(t, 2)),
            r = Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2));
        return 0 === r && (r = M.fv),
        0 === e && (e = M.fv),
            t = Math.acos(t / e),
            i = 0 > i ? Math.PI - Math.asin(n / r) : Math.asin(n / r),
        {
            r5: e / M.br.sq(),
            K8: t,
            azimuth: i
        }
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            t = this.L7(),
        isNaN(this.xf) && (this.xf = t.r5),
        isNaN(this.Tr) && (this.Tr = M.PG(t.K8)),
        isNaN(this.xh) && (this.xh = M.PG(t.azimuth)),
            this.dN = M.cf(this.Tr),
            this.cN = M.cf(this.xh)
    },
    m: function() {
        var t = new M.MA;
        return t.f(this.t, this.xf, this.rC, this.Tr, this.ZK, this.xh, this.YK),
            t
    },
    update: function(t) {
        t = this.Ed(t);
        var i = (this.xf + this.rC * t) * M.br.sq(),
            e = this.dN + this.bN * t,
            n = this.cN + this.aN * t;
        t = Math.sin(e) * Math.cos(n) * i + this.iC,
            n = Math.sin(e) * Math.sin(n) * i + this.jC,
            i = Math.cos(e) * i + this.kC,
            this.target.En().rR(t, n, i),
            this.target.La()
    }
}), M.jg = function(t, i, e, n, r, s, h) {
    return new M.MA(t, i, e, n, r, s, h)
},
    M.MA.create = M.jg, M.Za = M.C.extend({
    v: q,
    ctor: function(t) {
        M.C.prototype.ctor.call(this),
        t && this.ea(t)
    },
    ea: function(t) {
        return t || b("cc.ActionEase.initWithAction(): action must be non nil"),
            this.f(t.mq()) ? (this.v = t, p) : r
    },
    m: function() {
        var t = new M.Za;
        return t.ea(this.v.m()),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            this.v.D(this.target)
    },
    stop: function() {
        this.v.stop(),
            M.C.prototype.stop.call(this)
    },
    update: function(t) {
        this.v.update(t)
    },
    reverse: function() {
        return new M.Za(this.v.reverse())
    },
    SF: E("v")
}), M.z0 = function(t) {
    return new M.Za(t)
},
    M.Za.create = M.z0, M.am = M.Za.extend({
    kc: 0,
    ctor: function(t, i) {
        M.Za.prototype.ctor.call(this),
        i !== k && this.ea(t, i)
    },
    Ima: A("kc"),
    Pfa: E("kc"),
    ea: function(t, i) {
        return M.Za.prototype.ea.call(this, t) ? (this.kc = i, p) : r
    },
    m: function() {
        var t = new M.am;
        return t.ea(this.v.m(), this.kc),
            t
    },
    reverse: function() {
        return new M.am(this.v.reverse(), 1 / this.kc)
    }
}), M.Y1 = function(t, i) {
    return new M.am(t, i)
},
    M.am.create = M.Y1, M.bv = M.am.extend({
    update: function(t) {
        this.v.update(Math.pow(t, this.kc))
    },
    reverse: function() {
        return new M.bv(this.v.reverse(), 1 / this.kc)
    },
    m: function() {
        var t = new M.bv;
        return t.ea(this.v.m(), this.kc),
            t
    }
}), M.bv.create = function(t, i) {
    return new M.bv(t, i)
},
    M.V1 = function(t) {
        return {
            kc: t,
            $a: function(t) {
                return Math.pow(t, this.kc)
            },
            reverse: function() {
                return M.V1(1 / this.kc)
            }
        }
    },
    M.co = M.am.extend({
        update: function(t) {
            this.v.update(Math.pow(t, 1 / this.kc))
        },
        reverse: function() {
            return new M.co(this.v.reverse(), 1 / this.kc)
        },
        m: function() {
            var t = new M.co;
            return t.ea(this.v.m(), this.kc),
                t
        }
    }), M.co.create = function(t, i) {
    return new M.co(t, i)
},
    M.X1 = function(t) {
        return {
            kc: t,
            $a: function(t) {
                return Math.pow(t, 1 / this.kc)
            },
            reverse: function() {
                return M.X1(1 / this.kc)
            }
        }
    },
    M.bo = M.am.extend({
        update: function(t) {
            t *= 2,
                1 > t ? this.v.update(.5 * Math.pow(t, this.kc)) : this.v.update(1 - .5 * Math.pow(2 - t, this.kc))
        },
        m: function() {
            var t = new M.bo;
            return t.ea(this.v.m(), this.kc),
                t
        },
        reverse: function() {
            return new M.bo(this.v.reverse(), this.kc)
        }
    }), M.bo.create = function(t, i) {
    return new M.bo(t, i)
},
    M.W1 = function(t) {
        return {
            kc: t,
            $a: function(t) {
                return t *= 2,
                    1 > t ? .5 * Math.pow(t, this.kc) : 1 - .5 * Math.pow(2 - t, this.kc)
            },
            reverse: function() {
                return M.W1(this.kc)
            }
        }
    },
    M.Zu = M.Za.extend({
        update: function(t) {
            this.v.update(0 === t ? 0: Math.pow(2, 10 * (t - 1)))
        },
        reverse: function() {
            return new M.av(this.v.reverse())
        },
        m: function() {
            var t = new M.Zu;
            return t.ea(this.v.m()),
                t
        }
    }), M.Zu.create = function(t) {
    return new M.Zu(t)
},
    M.uL = {
        $a: function(t) {
            return 0 === t ? 0: Math.pow(2, 10 * (t - 1))
        },
        reverse: function() {
            return M.wL
        }
    },
    M.sda = function() {
        return M.uL
    },
    M.av = M.Za.extend({
        update: function(t) {
            this.v.update(1 == t ? 1: -Math.pow(2, -10 * t) + 1)
        },
        reverse: function() {
            return new M.Zu(this.v.reverse())
        },
        m: function() {
            var t = new M.av;
            return t.ea(this.v.m()),
                t
        }
    }), M.av.create = function(t) {
    return new M.av(t)
},
    M.wL = {
        $a: function(t) {
            return 1 == t ? 1: -Math.pow(2, -10 * t) + 1
        },
        reverse: function() {
            return M.uL
        }
    },
    M.uda = function() {
        return M.wL
    },
    M.$u = M.Za.extend({
        update: function(t) {
            1 != t && 0 !== t && (t *= 2, t = 1 > t ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * ( - Math.pow(2, -10 * (t - 1)) + 2)),
                this.v.update(t)
        },
        reverse: function() {
            return new M.$u(this.v.reverse())
        },
        m: function() {
            var t = new M.$u;
            return t.ea(this.v.m()),
                t
        }
    }), M.$u.create = function(t) {
    return new M.$u(t)
},
    M.vL = {
        $a: function(t) {
            return 1 !== t && 0 !== t ? (t *= 2, 1 > t ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * ( - Math.pow(2, -10 * (t - 1)) + 2)) : t

        },
        reverse: function() {
            return M.vL
        }
    },
    M.tda = function() {
        return M.vL
    },
    M.cv = M.Za.extend({
        update: function(t) {
            t = 0 === t || 1 === t ? t: -1 * Math.cos(t * Math.PI / 2) + 1,
                this.v.update(t)
        },
        reverse: function() {
            return new M.ev(this.v.reverse())
        },
        m: function() {
            var t = new M.cv;
            return t.ea(this.v.m()),
                t
        }
    }), M.cv.create = function(t) {
    return new M.cv(t)
},
    M.GL = {
        $a: function(t) {
            return 0 === t || 1 === t ? t: -1 * Math.cos(t * Math.PI / 2) + 1
        },
        reverse: function() {
            return M.IL
        }
    },
    M.Eda = function() {
        return M.GL
    },
    M.ev = M.Za.extend({
        update: function(t) {
            t = 0 === t || 1 === t ? t: Math.sin(t * Math.PI / 2),
                this.v.update(t)
        },
        reverse: function() {
            return new M.cv(this.v.reverse())
        },
        m: function() {
            var t = new M.ev;
            return t.ea(this.v.m()),
                t
        }
    }), M.ev.create = function(t) {
    return new M.ev(t)
},
    M.IL = {
        $a: function(t) {
            return 0 === t || 1 == t ? t: Math.sin(t * Math.PI / 2)
        },
        reverse: function() {
            return M.GL
        }
    },
    M.Gda = function() {
        return M.IL
    },
    M.dv = M.Za.extend({
        update: function(t) {
            t = 0 === t || 1 === t ? t: -.5 * (Math.cos(Math.PI * t) - 1),
                this.v.update(t)
        },
        m: function() {
            var t = new M.dv;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.dv(this.v.reverse())
        }
    }), M.dv.create = function(t) {
    return new M.dv(t)
},
    M.HL = {
        $a: function(t) {
            return 0 === t || 1 === t ? t: -.5 * (Math.cos(Math.PI * t) - 1)
        },
        reverse: function() {
            return M.HL
        }
    },
    M.Fda = function() {
        return M.HL
    },
    M.ao = M.Za.extend({
        Nb: .3,
        ctor: function(t, i) {
            M.Za.prototype.ctor.call(this),
            t && this.ea(t, i)
        },
        Ifa: E("Nb"),
        Ema: A("Nb"),
        ea: function(t, i) {
            return M.Za.prototype.ea.call(this, t),
                this.Nb = i == q ? .3: i,
                p
        },
        reverse: function() {
            return M.log("cc.EaseElastic.reverse(): it should be overridden in subclass."),
                q
        },
        m: function() {
            var t = new M.ao;
            return t.ea(this.v.m(), this.Nb),
                t
        }
    }), M.ao.create = function(t, i) {
    return new M.ao(t, i)
},
    M.Wu = M.ao.extend({
        update: function(t) {
            var i = 0;
            0 === t || 1 === t ? i = t: (i = this.Nb / 4, t -= 1, i = -Math.pow(2, 10 * t) * Math.sin(2 * (t - i) * Math.PI / this.Nb)),
                this.v.update(i)
        },
        reverse: function() {
            return new M.Yu(this.v.reverse(), this.Nb)
        },
        m: function() {
            var t = new M.Wu;
            return t.ea(this.v.m(), this.Nb),
                t
        }
    }), M.Wu.create = function(t, i) {
    return new M.Wu(t, i)
},
    M.sL = {
        $a: function(t) {
            return 0 === t || 1 === t ? t: (t -= 1, -Math.pow(2, 10 * t) * Math.sin(2 * (t - .075) * Math.PI / .3))
        },
        reverse: function() {
            return M.tL
        }
    },
    M.S1 = function(t) {
        return t && .3 !== t ? {
            Nb: t,
            $a: function(t) {
                return 0 === t || 1 === t ? t: (t -= 1, -Math.pow(2, 10 * t) * Math.sin(2 * (t - this.Nb / 4) * Math.PI / this.Nb))
            },
            reverse: function() {
                return M.U1(this.Nb)
            }
        }: M.sL
    },
    M.Yu = M.ao.extend({
        update: function(t) {
            var i = 0,
                i = 0 === t || 1 == t ? t: Math.pow(2, -10 * t) * Math.sin(2 * (t - this.Nb / 4) * Math.PI / this.Nb) + 1;
            this.v.update(i)
        },
        reverse: function() {
            return new M.Wu(this.v.reverse(), this.Nb)
        },
        m: function() {
            var t = new M.Yu;
            return t.ea(this.v.m(), this.Nb),
                t
        }
    }), M.Yu.create = function(t, i) {
    return new M.Yu(t, i)
},
    M.tL = {
        $a: function(t) {
            return 0 === t || 1 === t ? t: Math.pow(2, -10 * t) * Math.sin(2 * (t - .075) * Math.PI / .3) + 1
        },
        reverse: function() {
            return M.sL
        }
    },
    M.U1 = function(t) {
        return t && .3 !== t ? {
            Nb: t,
            $a: function(t) {
                return 0 === t || 1 === t ? t: Math.pow(2, -10 * t) * Math.sin(2 * (t - this.Nb / 4) * Math.PI / this.Nb) + 1
            },
            reverse: function() {
                return M.S1(this.Nb)
            }
        }: M.tL
    },
    M.Xu = M.ao.extend({
        update: function(t) {
            var i = 0,
                i = this.Nb;
            if (0 === t || 1 == t) i = t;
            else {
                i || (i = this.Nb = .3 * 1.5);
                var e = i / 4;
                t = 2 * t - 1,
                    i = 0 > t ? -.5 * Math.pow(2, 10 * t) * Math.sin(2 * (t - e) * Math.PI / i) : .5 * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1
            }
            this.v.update(i)
        },
        reverse: function() {
            return new M.Xu(this.v.reverse(), this.Nb)
        },
        m: function() {
            var t = new M.Xu;
            return t.ea(this.v.m(), this.Nb),
                t
        }
    }), M.Xu.create = function(t, i) {
    return new M.Xu(t, i)
},
    M.T1 = function(t) {
        return {
            Nb: t || .3,
            $a: function(t) {
                var i = 0,
                    i = this.Nb;
                if (0 === t || 1 === t) i = t;
                else {
                    i || (i = this.Nb = .3 * 1.5);
                    var e = i / 4;
                    t = 2 * t - 1,
                        i = 0 > t ? -.5 * Math.pow(2, 10 * t) * Math.sin(2 * (t - e) * Math.PI / i) : .5 * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1
                }
                return i
            },
            reverse: function() {
                return M.T1(this.Nb)
            }
        }
    },
    M.$l = M.Za.extend({
        by: function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t: 2 / 2.75 > t ? (t -= 1.5 / 2.75, 7.5625 * t * t + .75) : 2.5 / 2.75 > t ? (t -= 2.25 / 2.75, 7.5625 * t * t + .9375) : (t -= 2.625 / 2.75, 7.5625 * t * t + .984375)
        },
        m: function() {
            var t = new M.$l;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.$l(this.v.reverse())
        }
    }), M.$l.create = function(t) {
    return new M.$l(t)
},
    M.Tu = M.$l.extend({
        update: function(t) {
            this.v.update(1 - this.by(1 - t))
        },
        reverse: function() {
            return new M.Vu(this.v.reverse())
        },
        m: function() {
            var t = new M.Tu;
            return t.ea(this.v.m()),
                t
        }
    }), M.Tu.create = function(t) {
    return new M.Tu(t)
},
    M.fw = function(t) {
        return 1 / 2.75 > t ? 7.5625 * t * t: 2 / 2.75 > t ? (t -= 1.5 / 2.75, 7.5625 * t * t + .75) : 2.5 / 2.75 > t ? (t -= 2.25 / 2.75, 7.5625 * t * t + .9375) : (t -= 2.625 / 2.75, 7.5625 * t * t + .984375)
    },
    M.jL = {
        $a: function(t) {
            return 1 - M.fw(1 - t)
        },
        reverse: function() {
            return M.lL
        }
    },
    M.jda = function() {
        return M.jL
    },
    M.Vu = M.$l.extend({
        update: function(t) {
            this.v.update(this.by(t))
        },
        reverse: function() {
            return new M.Tu(this.v.reverse())
        },
        m: function() {
            var t = new M.Vu;
            return t.ea(this.v.m()),
                t
        }
    }), M.Vu.create = function(t) {
    return new M.Vu(t)
},
    M.lL = {
        $a: function(t) {
            return M.fw(t)
        },
        reverse: function() {
            return M.jL
        }
    },
    M.lda = function() {
        return M.lL
    },
    M.Uu = M.$l.extend({
        update: function(t) {
            var i = 0,
                i = .5 > t ? .5 * (1 - this.by(1 - 2 * t)) : .5 * this.by(2 * t - 1) + .5;
            this.v.update(i)
        },
        m: function() {
            var t = new M.Uu;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.Uu(this.v.reverse())
        }
    }), M.Uu.create = function(t) {
    return new M.Uu(t)
},
    M.kL = {
        $a: function(t) {
            return t = .5 > t ? .5 * (1 - M.fw(1 - 2 * t)) : .5 * M.fw(2 * t - 1) + .5
        },
        reverse: function() {
            return M.kL
        }
    },
    M.kda = function() {
        return M.kL
    },
    M.Qu = M.Za.extend({
        update: function(t) {
            this.v.update(0 === t || 1 == t ? t: t * t * (2.70158 * t - 1.70158))
        },
        reverse: function() {
            return new M.Su(this.v.reverse())
        },
        m: function() {
            var t = new M.Qu;
            return t.ea(this.v.m()),
                t
        }
    }), M.Qu.create = function(t) {
    return new M.Qu(t)
},
    M.gL = {
        $a: function(t) {
            return 0 === t || 1 === t ? t: t * t * (2.70158 * t - 1.70158)
        },
        reverse: function() {
            return M.iL
        }
    },
    M.gda = function() {
        return M.gL
    },
    M.Su = M.Za.extend({
        update: function(t) {
            t -= 1,
                this.v.update(t * t * (2.70158 * t + 1.70158) + 1)
        },
        reverse: function() {
            return new M.Qu(this.v.reverse())
        },
        m: function() {
            var t = new M.Su;
            return t.ea(this.v.m()),
                t
        }
    }), M.Su.create = function(t) {
    return new M.Su(t)
},
    M.iL = {
        $a: function(t) {
            return t -= 1,
            t * t * (2.70158 * t + 1.70158) + 1
        },
        reverse: function() {
            return M.gL
        }
    },
    M.ida = function() {
        return M.iL
    },
    M.Ru = M.Za.extend({
        update: function(t) {
            t *= 2,
                1 > t ? this.v.update(t * t * (3.5949095 * t - 2.5949095) / 2) : (t -= 2, this.v.update(t * t * (3.5949095 * t + 2.5949095) / 2 + 1))
        },
        m: function() {
            var t = new M.Ru;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.Ru(this.v.reverse())
        }
    }), M.Ru.create = function(t) {
    return new M.Ru(t)
},
    M.hL = {
        $a: function(t) {
            return t *= 2,
                1 > t ? t * t * (3.5949095 * t - 2.5949095) / 2: (t -= 2, t * t * (3.5949095 * t + 2.5949095) / 2 + 1)
        },
        reverse: function() {
            return M.hL
        }
    },
    M.hda = function() {
        return M.hL
    },
    M.er = M.Za.extend({
        gx: q,
        hx: q,
        ix: q,
        jx: q,
        ctor: function(t) {
            M.Za.prototype.ctor.call(this, t)
        },
        va: function(t, i, e, n, r) {
            return Math.pow(1 - r, 3) * t + 3 * r * Math.pow(1 - r, 2) * i + 3 * Math.pow(r, 2) * (1 - r) * e + Math.pow(r, 3) * n
        },
        update: function(t) {
            this.v.update(this.va(this.gx, this.hx, this.ix, this.jx, t))
        },
        m: function() {
            var t = new M.er;
            return t.ea(this.v.m()),
                t.lR(this.gx, this.hx, this.ix, this.jx),
                t
        },
        reverse: function() {
            var t = new M.er(this.v.reverse());
            return t.lR(this.jx, this.ix, this.hx, this.gx),
                t
        },
        lR: function(t, i, e, n) {
            this.gx = t || 0,
                this.hx = i || 0,
                this.ix = e || 0,
                this.jx = n || 0
        }
    }), M.er.create = function(t) {
    return new M.er(t)
},
    M.R1 = function(t, i, e, n) {
        return {
            $a: function(r) {
                return M.er.prototype.va(t, i, e, n, r)
            },
            reverse: function() {
                return M.R1(n, e, i, t)
            }
        }
    },
    M.lr = M.Za.extend({
        va: function(t) {
            return Math.pow(t, 2)
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.lr;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.lr(this.v.reverse())
        }
    }), M.lr.create = function(t) {
    return new M.lr(t)
},
    M.xL = {
        $a: M.lr.prototype.va,
        reverse: function() {
            return M.xL
        }
    },
    M.vda = function() {
        return M.xL
    },
    M.nr = M.Za.extend({
        va: function(t) {
            return - t * (t - 2)
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.nr;
            return t.ea(),
                t
        },
        reverse: function() {
            return new M.nr(this.v.reverse())
        }
    }), M.nr.create = function(t) {
    return new M.nr(t)
},
    M.zL = {
        $a: M.nr.prototype.va,
        reverse: function() {
            return M.zL
        }
    },
    M.xda = function() {
        return M.zL
    },
    M.mr = M.Za.extend({
        va: function(t) {
            var i = t;
            return t *= 2,
                1 > t ? i = .5 * t * t: (--t, i = -.5 * (t * (t - 2) - 1)),
                i
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.mr;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.mr(this.v.reverse())
        }
    }), M.mr.create = function(t) {
    return new M.mr(t)
},
    M.yL = {
        $a: M.mr.prototype.va,
        reverse: function() {
            return M.yL
        }
    },
    M.wda = function() {
        return M.yL
    },
    M.or = M.Za.extend({
        va: function(t) {
            return t * t * t * t
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.or;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.or(this.v.reverse())
        }
    }), M.or.create = function(t) {
    return new M.or(t)
},
    M.AL = {
        $a: M.or.prototype.va,
        reverse: function() {
            return M.AL
        }
    },
    M.yda = function() {
        return M.AL
    },
    M.qr = M.Za.extend({
        va: function(t) {
            return t -= 1,
                -(t * t * t * t - 1)
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.qr;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.qr(this.v.reverse())
        }
    }), M.qr.create = function(t) {
    return new M.qr(t)
},
    M.CL = {
        $a: M.qr.prototype.va,
        reverse: function() {
            return M.CL
        }
    },
    M.Ada = function() {
        return M.CL
    },
    M.pr = M.Za.extend({
        va: function(t) {
            return t *= 2,
                1 > t ? .5 * t * t * t * t: (t -= 2, -.5 * (t * t * t * t - 2))
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.pr;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.pr(this.v.reverse())
        }
    }), M.pr.create = function(t) {
    return new M.pr(t)
},
    M.BL = {
        $a: M.pr.prototype.va,
        reverse: function() {
            return M.BL
        }
    },
    M.zda = function() {
        return M.BL
    },
    M.rr = M.Za.extend({
        va: function(t) {
            return t * t * t * t * t
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.rr;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.rr(this.v.reverse())
        }
    }), M.rr.create = function(t) {
    return new M.rr(t)
},
    M.DL = {
        $a: M.rr.prototype.va,
        reverse: function() {
            return M.DL
        }
    },
    M.Bda = function() {
        return M.DL
    },
    M.tr = M.Za.extend({
        va: function(t) {
            return t -= 1,
            t * t * t * t * t + 1
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.tr;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.tr(this.v.reverse())
        }
    }), M.tr.create = function(t) {
    return new M.tr(t)
},
    M.FL = {
        $a: M.tr.prototype.va,
        reverse: function() {
            return M.FL
        }
    },
    M.Dda = function() {
        return M.FL
    },
    M.sr = M.Za.extend({
        va: function(t) {
            return t *= 2,
                1 > t ? .5 * t * t * t * t * t: (t -= 2, .5 * (t * t * t * t * t + 2))
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.sr;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.sr(this.v.reverse())
        }
    }), M.sr.create = function(t) {
    return new M.sr(t)
},
    M.EL = {
        $a: M.sr.prototype.va,
        reverse: function() {
            return M.EL
        }
    },
    M.Cda = function() {
        return M.EL
    },
    M.fr = M.Za.extend({
        va: function(t) {
            return - 1 * (Math.sqrt(1 - t * t) - 1)
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.fr;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.fr(this.v.reverse())
        }
    }), M.fr.create = function(t) {
    return new M.fr(t)
},
    M.mL = {
        $a: M.fr.prototype.va,
        reverse: function() {
            return M.mL
        }
    },
    M.mda = function() {
        return M.mL
    },
    M.hr = M.Za.extend({
        va: function(t) {
            return t -= 1,
                Math.sqrt(1 - t * t)
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.hr;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.hr(this.v.reverse())
        }
    }), M.hr.create = function(t) {
    return new M.hr(t)
},
    M.oL = {
        $a: M.hr.prototype.va,
        reverse: function() {
            return M.oL
        }
    },
    M.oda = function() {
        return M.oL
    },
    M.gr = M.Za.extend({
        va: function(t) {
            return t *= 2,
                1 > t ? -.5 * (Math.sqrt(1 - t * t) - 1) : (t -= 2, .5 * (Math.sqrt(1 - t * t) + 1))
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.gr;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.gr(this.v.reverse())
        }
    }), M.gr.create = function(t) {
    return new M.gr(t)
},
    M.nL = {
        $a: M.gr.prototype.va,
        reverse: function() {
            return M.nL
        }
    },
    M.nda = function() {
        return M.nL
    },
    M.ir = M.Za.extend({
        va: function(t) {
            return t * t * t
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.ir;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.ir(this.v.reverse())
        }
    }), M.ir.create = function(t) {
    return new M.ir(t)
},
    M.pL = {
        $a: M.ir.prototype.va,
        reverse: function() {
            return M.pL
        }
    },
    M.pda = function() {
        return M.pL
    },
    M.kr = M.Za.extend({
        va: function(t) {
            return t -= 1,
            t * t * t + 1
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.kr;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.kr(this.v.reverse())
        }
    }), M.kr.create = function(t) {
    return new M.kr(t)
},
    M.rL = {
        $a: M.kr.prototype.va,
        reverse: function() {
            return M.rL
        }
    },
    M.rda = function() {
        return M.rL
    },
    M.jr = M.Za.extend({
        va: function(t) {
            return t *= 2,
                1 > t ? .5 * t * t * t: (t -= 2, .5 * (t * t * t + 2))
        },
        update: function(t) {
            this.v.update(this.va(t))
        },
        m: function() {
            var t = new M.jr;
            return t.ea(this.v.m()),
                t
        },
        reverse: function() {
            return new M.jr(this.v.reverse())
        }
    }), M.jr.create = function(t) {
    return new M.jr(t)
},
    M.qL = {
        $a: M.jr.prototype.va,
        reverse: function() {
            return M.qL
        }
    },
    M.qda = function() {
        return M.qL
    },
    M.oF = function(t, i, e, n, r, s) {
        var h = s * s,
            a = h * s,
            o = (1 - r) / 2;
        r = o * ( - a + 2 * h - s);
        var c = o * ( - a + h) + (2 * a - 3 * h + 1);
        return s = o * (a - 2 * h + s) + ( - 2 * a + 3 * h),
            h = o * (a - h),
            M.d(t.x * r + i.x * c + e.x * s + n.x * h, t.y * r + i.y * c + e.y * s + n.y * h)
    },
    M.bR = function(t) {
        for (var i = [], e = t.length - 1; e >= 0; e--) i.push(M.d(t[e].x, t[e].y));
        return i
    },
    M.u1 = function(t) {
        for (var i = [], e = 0; e < t.length; e++) i.push(M.d(t[e].x, t[e].y));
        return i
    },
    M.hy = M.u1, M.xd = function(t, i) {
    var e = Math.min(t.length - 1, Math.max(i, 0));
    return t[e]
},
    M.hla = function(t) {
        for (var i = t.length, e = 0 | i / 2, n = 0; e > n; ++n) {
            var r = t[n];
            t[n] = t[i - n - 1],
                t[i - n - 1] = r
        }
    },
    M.kj = M.C.extend({
        Jh: q,
        $K: 0,
        Cp: 0,
        ed: q,
        tK: q,
        ctor: function(t, i, e) {
            M.C.prototype.ctor.call(this),
                this.Jh = [],
            e !== k && this.f(t, i, e)
        },
        f: function(t, i, e) {
            return (!i || 0 == i.length) && b("Invalid configuration. It must at least have one control point"),
                M.C.prototype.f.call(this, t) ? (this.e7(i), this.Cp = e, p) : r
        },
        m: function() {
            var t = new M.kj;
            return t.f(this.t, M.hy(this.Jh), this.Cp),
                t
        },
        D: function(t) {
            M.C.prototype.D.call(this, t),
                this.$K = 1 / (this.Jh.length - 1),
                this.ed = M.d(this.target.df(), this.target.eh()),
                this.tK = M.d(0, 0)
        },
        update: function(t) {
            t = this.Ed(t);
            var i,
                e = this.Jh;
            if (1 == t) i = e.length - 1,
                t = 1;
            else {
                var n = this.$K;
                i = 0 | t / n,
                    t = (t - n * i) / n
            }
            i = M.oF(M.xd(e, i - 1), M.xd(e, i - 0), M.xd(e, i + 1), M.xd(e, i + 2), this.Cp, t),
            M.Mu && (e = this.target.df() - this.ed.x, t = this.target.eh() - this.ed.y, 0 != e || 0 != t) && (n = this.tK, e = n.x + e, t = n.y + t, n.x = e, n.y = t, i.x += e, i.y += t),
                this.nS(i)
        },
        reverse: function() {
            var t = M.bR(this.Jh);
            return M.uO(this.t, t, this.Cp)
        },
        nS: function(t) {
            this.target.H(t),
                this.ed = t
        },
        Jfa: E("Jh"),
        e7: A("Jh")
    }), M.uO = function(t, i, e) {
    return new M.kj(t, i, e)
},
    M.kj.create = M.uO, M.cr = M.kj.extend({
    Tc: q,
    ctor: function(t, i, e) {
        M.kj.prototype.ctor.call(this),
            this.Tc = M.d(0, 0),
        e !== k && this.f(t, i, e)
    },
    D: function(t) {
        M.kj.prototype.D.call(this, t),
            this.Tc.x = t.df(),
            this.Tc.y = t.eh()
    },
    reverse: function() {
        for (var t, i = this.Jh.slice(), e = i[0], n = 1; n < i.length; ++n) t = i[n],
            i[n] = M.$d(t, e),
            e = t;
        for (i = M.bR(i), e = i[i.length - 1], i.pop(), e.x = -e.x, e.y = -e.y, i.unshift(e), n = 1; n < i.length; ++n) t = i[n],
            t.x = -t.x,
            t.y = -t.y,
            t.x += e.x,
            t.y += e.y,
            e = i[n] = t;
        return M.tO(this.t, i, this.Cp)
    },
    nS: function(t) {
        var i = this.Tc,
            e = t.x + i.x;
        t = t.y + i.y,
            this.ed.x = e,
            this.ed.y = t,
            this.target.H(e, t)
    },
    m: function() {
        var t = new M.cr;
        return t.f(this.t, M.hy(this.Jh), this.Cp),
            t
    }
}), M.tO = function(t, i, e) {
    return new M.cr(t, i, e)
},
    M.cr.create = M.tO, M.iA = M.kj.extend({
    ctor: function(t, i) {
        i && this.f(t, i)
    },
    f: function(t, i) {
        return M.kj.prototype.f.call(this, t, i, .5)
    },
    m: function() {
        var t = new M.iA;
        return t.f(this.t, M.hy(this.Jh)),
            t
    }
}), M.o1 = function(t, i) {
    return new M.iA(t, i)
},
    M.iA.create = M.o1, M.hA = M.cr.extend({
    ctor: function(t, i) {
        M.cr.prototype.ctor.call(this),
        i && this.f(t, i)
    },
    f: function(t, i) {
        return M.kj.prototype.f.call(this, t, i, .5)
    },
    m: function() {
        var t = new M.hA;
        return t.f(this.t, M.hy(this.Jh)),
            t
    }
}), M.n1 = function(t, i) {
    return new M.hA(t, i)
},
    M.hA.create = M.n1, M.b9 = M.xa.extend({
    B8: z()
}), M.Hu = M.C.extend({
    key: "",
    ly: 0,
    Tz: 0,
    vt: 0,
    ctor: function(t, i, e, n) {
        M.C.prototype.ctor.call(this),
            this.key = "",
        n !== k && this.f(t, i, e, n)
    },
    f: function(t, i, e, n) {
        return M.C.prototype.f.call(this, t) ? (this.key = i, this.Tz = n, this.ly = e, p) : r
    },
    D: function(t) { (!t || !t.B8) && b("cc.ActionTween.startWithTarget(): target must be non-null, and target must implement updateTweenAction function"),
        M.C.prototype.D.call(this, t),
        this.vt = this.Tz - this.ly
    },
    update: z(),
    reverse: function() {
        return new M.Hu(this.duration, this.key, this.Tz, this.ly)
    },
    m: function() {
        var t = new M.Hu;
        return t.f(this.t, this.key, this.ly, this.Tz),
            t
    }
}), M.B0 = function(t, i, e, n) {
    return new M.Hu(t, i, e, n)
},
    M.Hu.create = M.B0, M.qc = M.C.extend({
    ca: q,
    ctor: function(t, i) {
        M.lC(),
            M.C.prototype.ctor.call(this),
            this.ca = M.size(0, 0),
        i && this.f(t, i)
    },
    m: function() {
        var t = new M.qc,
            i = this.ca;
        return t.f(this.t, M.size(i.width, i.height)),
            t
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            M.ia.oe = p;
        var i = this.zt(),
            e = this.target; (t = e.grid) && 0 < t.Ji ? (i = t.R2(), t.bk() && i.width == this.ca.width && i.height == this.ca.height && t.UG()) : (t && t.bk() && t.setActive(r), e.grid = i, e.grid.setActive(p))
    },
    reverse: function() {
        return new M.Br(this)
    },
    f: function(t, i) {
        return M.C.prototype.f.call(this, t) ? (this.ca.width = i.width, this.ca.height = i.height, p) : r
    },
    zt: function() {
        M.log("cc.GridAction.getGrid(): it should be overridden in subclass.")
    }
}), M.S3 = function(t, i) {
    return new M.qc(t, i)
},
    M.qc.create = M.S3, M.md = M.qc.extend({
    zt: function() {
        return new M.wA(this.ca)
    },
    rS: function(t) {
        return this.target.grid.rS(t)
    },
    Yc: function(t) {
        return this.target.grid.Yc(t)
    },
    ae: function(t, i) {
        this.target.grid.ae(t, i)
    }
}), M.R3 = function(t, i) {
    return new M.md(t, i)
},
    M.md.create = M.R3, M.Fc = M.qc.extend({
    $R: function(t) {
        return this.target.grid.$R(t)
    },
    kg: function(t) {
        return this.target.grid.kg(t)
    },
    kf: function(t, i) {
        this.target.grid.kf(t, i)
    },
    zt: function() {
        return new M.DB(this.ca)
    }
}), M.n8 = function(t, i) {
    return new M.Fc(t, i)
},
    M.Fc.create = M.n8, M.mJ = M.Oe.extend({
    D: function(t) {
        M.Oe.prototype.D.call(this, t),
            M.ia.oe = p,
        (t = this.target.grid) && t.bk() && t.setActive(r)
    }
}), M.Uq = function() {
    return new M.mJ
},
    M.mJ.create = M.Uq, M.$I = M.Oe.extend({
    lc: q,
    ctor: function(t) {
        M.Oe.prototype.ctor.call(this),
        t !== k && this.h4(t)
    },
    h4: function(t) {
        return this.lc = t,
            p
    },
    D: function(t) {
        M.Oe.prototype.D.call(this, t),
            M.ia.oe = p,
        this.target.grid && this.target.grid.bk() && this.target.grid.i7(this.target.grid.Ji + this.lc)
    }
}), M.v6 = function(t) {
    return new M.$I(t)
},
    M.$I.create = M.v6, M.iK = M.md.extend({
    Cf: 0,
    ib: 0,
    jb: 0,
    ctor: function(t, i, e, n) {
        M.qc.prototype.ctor.call(this),
        n !== k && this.f(t, i, e, n)
    },
    jq: E("ib"),
    Nq: A("ib"),
    Dn: E("jb"),
    Qn: A("jb"),
    f: function(t, i, e, n) {
        return M.md.prototype.f.call(this, t, i) ? (this.Cf = e, this.ib = n, this.jb = 1, p) : r
    },
    update: function(t) {
        for (var i = this.ca, e = this.ib, n = M.d(0, 0), r = this.jb, s = this.Cf, h = 0; h < i.width + 1; ++h) for (var a = 0; a < i.height + 1; ++a) {
            n.x = h,
                n.y = a;
            var o = this.Yc(n);
            o.e += Math.sin(2 * Math.PI * t * s + .01 * (o.y + o.x)) * e * r,
                this.ae(n, o)
        }
    }
}), M.H8 = function(t, i, e, n) {
    return new M.iK(t, i, e, n)
},
    M.iK.create = M.H8, M.uA = M.md.extend({
    ctor: function(t) {
        t !== k ? M.qc.prototype.ctor.call(this, t, M.size(1, 1)) : M.qc.prototype.ctor.call(this)
    },
    f: function(t) {
        return M.md.prototype.f.call(this, t, M.size(1, 1))
    },
    Ly: function(t, i) {
        return 1 != t.width || 1 != t.height ? (M.log("Grid size must be (1,1)"), r) : M.md.prototype.f.call(this, i, t)
    },
    update: function(t) {
        var i = Math.PI * t;
        t = Math.sin(i);
        var e = Math.cos(i / 2),
            i = new V,
            n = M.d(0, 0);
        n.x = n.y = 1;
        var r = this.Yc(n);
        n.x = n.y = 0;
        var s,
            h,
            n = this.Yc(n),
            a = r.x,
            o = n.x;
        a > o ? (r = M.d(0, 0), n = M.d(0, 1), s = M.d(1, 0), h = M.d(1, 1)) : (s = M.d(0, 0), h = M.d(0, 1), r = M.d(1, 0), n = M.d(1, 1), a = o),
            i.x = a - a * e,
            i.e = Math.abs(parseFloat(a * t / 4)),
            t = this.Yc(r),
            t.x = i.x,
            t.e += i.e,
            this.ae(r, t),
            t = this.Yc(n),
            t.x = i.x,
            t.e += i.e,
            this.ae(n, t),
            t = this.Yc(s),
            t.x -= i.x,
            t.e -= i.e,
            this.ae(s, t),
            t = this.Yc(h),
            t.x -= i.x,
            t.e -= i.e,
            this.ae(h, t)
    }
}), M.q2 = function(t) {
    return new M.uA(t)
},
    M.uA.create = M.q2, M.gI = M.uA.extend({
    ctor: function(t) {
        t !== k ? M.qc.prototype.ctor.call(this, t, M.size(1, 1)) : M.qc.prototype.ctor.call(this)
    },
    update: function(t) {
        var i = Math.PI * t;
        t = Math.sin(i);
        var e = Math.cos(i / 2),
            i = new V,
            n = M.d(0, 0);
        n.x = n.y = 1;
        var r = this.Yc(n);
        n.x = n.y = 0;
        var s,
            h,
            n = this.Yc(n),
            a = r.y,
            o = n.y;
        a > o ? (r = M.d(0, 0), n = M.d(0, 1), s = M.d(1, 0), h = M.d(1, 1)) : (n = M.d(0, 0), r = M.d(0, 1), h = M.d(1, 0), s = M.d(1, 1), a = o),
            i.y = a - a * e,
            i.e = Math.abs(parseFloat(a * t) / 4),
            t = this.Yc(r),
            t.y = i.y,
            t.e += i.e,
            this.ae(r, t),
            t = this.Yc(n),
            t.y -= i.y,
            t.e -= i.e,
            this.ae(n, t),
            t = this.Yc(s),
            t.y = i.y,
            t.e += i.e,
            this.ae(s, t),
            t = this.Yc(h),
            t.y -= i.y,
            t.e -= i.e,
            this.ae(h, t)
    }
}), M.s2 = function(t) {
    return new M.gI(t)
},
    M.gI.create = M.s2, M.mI = M.md.extend({
    ua: q,
    xf: 0,
    Yw: 0,
    GX: r,
    nb: r,
    ctor: function(t, i, e, n) {
        M.qc.prototype.ctor.call(this),
            this.ua = M.d(0, 0),
        n !== k && this.f(t, i, e, n)
    },
    kfa: E("Yw"),
    kma: A("Yw"),
    Ila: A("GX"),
    dh: E("ua"),
    H: function(t) {
        M.qz(t, this.ua) || (this.ua.x = t.x, this.ua.y = t.y, this.nb = p)
    },
    f: function(t, i, e, n) {
        return M.md.prototype.f.call(this, t, i) ? (this.H(e), this.xf = n, this.Yw = .7, this.nb = p) : r
    },
    update: function() {
        if (this.nb) {
            for (var t, i, e, n = this.ca.width, s = this.ca.height, h = this.xf, a = this.Yw, o = M.d(0, 0), c = M.d(0, 0), u = 0; n + 1 > u; ++u) for (var f = 0; s + 1 > f; ++f) o.x = u,
                o.y = f,
                t = this.Yc(o),
                c.x = this.ua.x - t.x,
                c.y = this.ua.y - t.y,
                i = M.Ll(c),
            h > i && (i = h - i, i /= h, 0 == i && (i = .001), i = Math.log(i) * a, e = Math.exp(i) * h, i = M.Ll(c), i > 0 && (c.x /= i, c.y /= i, c.x *= e, c.y *= e, t.e += M.Ll(c) * a)),
                this.ae(o, t);
            this.nb = r
        }
    }
}), M.d5 = function(t, i, e, n) {
    return new M.mI(t, i, e, n)
},
    M.mI.create = M.d5, M.aJ = M.md.extend({
    ua: q,
    xf: 0,
    Cf: 0,
    ib: 0,
    jb: 0,
    ctor: function(t, i, e, n, r, s) {
        M.qc.prototype.ctor.call(this),
            this.ua = M.d(0, 0),
        s !== k && this.f(t, i, e, n, r, s)
    },
    dh: E("ua"),
    H: function(t) {
        this.ua.x = t.x,
            this.ua.y = t.y
    },
    jq: E("ib"),
    Nq: A("ib"),
    Dn: E("jb"),
    Qn: A("jb"),
    f: function(t, i, e, n, s, h) {
        return M.md.prototype.f.call(this, t, i) ? (this.H(e), this.xf = n, this.Cf = s, this.ib = h, this.jb = 1, p) : r
    },
    update: function(t) {
        for (var i, e, n = this.ca.width, r = this.ca.height, s = M.d(0, 0), h = this.xf, a = this.Cf, o = this.ib, c = this.jb, u = M.d(0, 0), f = 0; n + 1 > f; ++f) for (var l = 0; r + 1 > l; ++l) s.x = f,
            s.y = l,
            i = this.Yc(s),
            u.x = this.ua.x - i.x,
            u.y = this.ua.y - i.y,
            e = M.Ll(u),
        h > e && (e = h - e, i.e += Math.sin(2 * t * Math.PI * a + .1 * e) * o * c * Math.pow(e / h, 2)),
            this.ae(s, i)
    }
}), M.w6 = function(t, i, e, n, r, s) {
    return new M.aJ(t, i, e, n, r, s)
},
    M.aJ.create = M.w6, M.gJ = M.md.extend({
    el: 0,
    Vs: r,
    ctor: function(t, i, e, n) {
        M.qc.prototype.ctor.call(this),
        n !== k && this.f(t, i, e, n)
    },
    f: function(t, i, e, n) {
        return M.md.prototype.f.call(this, t, i) ? (this.el = e, this.Vs = n, p) : r
    },
    update: function() {
        for (var t, i = this.ca.width, e = this.ca.height, n = this.el, r = this.Vs, s = M.d(0, 0), h = 0; i + 1 > h; ++h) for (var a = 0; e + 1 > a; ++a) s.x = h,
            s.y = a,
            t = this.Yc(s),
            t.x += M.Mb() % (2 * n) - n,
            t.y += M.Mb() % (2 * n) - n,
        r && (t.e += M.Mb() % (2 * n) - n),
            this.ae(s, t)
    }
}), M.D7 = function(t, i, e, n) {
    return new M.gJ(t, i, e, n)
},
    M.gJ.create = M.D7, M.nI = M.md.extend({
    Cf: 0,
    ib: 0,
    jb: 0,
    ctor: function(t, i, e, n) {
        M.qc.prototype.ctor.call(this),
        n !== k && this.f(t, i, e, n)
    },
    jq: E("ib"),
    Nq: A("ib"),
    Dn: E("jb"),
    Qn: A("jb"),
    f: function(t, i, e, n) {
        return M.md.prototype.f.call(this, t, i) ? (this.Cf = e, this.ib = n, this.jb = 1, p) : r
    },
    update: function(t) {
        for (var i, e = this.ca.width, n = this.ca.height, r = M.d(0, 0), s = this.Cf, h = this.ib, a = this.jb, o = 1; e > o; ++o) for (var c = 1; n > c; ++c) r.x = o,
            r.y = c,
            i = this.Yc(r),
            i.x += Math.sin(2 * t * Math.PI * s + .01 * i.x) * h * a,
            i.y += Math.sin(2 * t * Math.PI * s + .01 * i.y) * h * a,
            this.ae(r, i)
    }
}), M.e5 = function(t, i, e, n) {
    return new M.nI(t, i, e, n)
},
    M.nI.create = M.e5, M.hK = M.md.extend({
    Cf: 0,
    ib: 0,
    jb: 0,
    gO: r,
    mM: r,
    ctor: function(t, i, e, n, r, s) {
        M.qc.prototype.ctor.call(this),
        s !== k && this.f(t, i, e, n, r, s)
    },
    jq: E("ib"),
    Nq: A("ib"),
    Dn: E("jb"),
    Qn: A("jb"),
    f: function(t, i, e, n, s, h) {
        return M.md.prototype.f.call(this, t, i) ? (this.Cf = e, this.ib = n, this.jb = 1, this.mM = s, this.gO = h, p) : r
    },
    update: function(t) {
        for (var i, e = this.ca.width, n = this.ca.height, r = M.d(0, 0), s = this.gO, h = this.mM, a = this.Cf, o = this.ib, c = this.jb, u = 0; e + 1 > u; ++u) for (var f = 0; n + 1 > f; ++f) r.x = u,
            r.y = f,
            i = this.Yc(r),
        s && (i.x += Math.sin(2 * t * Math.PI * a + .01 * i.y) * o * c),
        h && (i.y += Math.sin(2 * t * Math.PI * a + .01 * i.x) * o * c),
            this.ae(r, i)
    }
}), M.G8 = function(t, i, e, n, r, s) {
    return new M.hK(t, i, e, n, r, s)
},
    M.hK.create = M.G8, M.bK = M.md.extend({
    ua: q,
    WN: 0,
    ib: 0,
    jb: 0,
    ctor: function(t, i, e, n, r) {
        M.qc.prototype.ctor.call(this),
            this.ua = M.d(0, 0),
        r !== k && this.f(t, i, e, n, r)
    },
    dh: E("ua"),
    H: function(t) {
        this.ua.x = t.x,
            this.ua.y = t.y
    },
    jq: E("ib"),
    Nq: A("ib"),
    Dn: E("jb"),
    Qn: A("jb"),
    f: function(t, i, e, n, s) {
        return M.md.prototype.f.call(this, t, i) ? (this.H(e), this.WN = n, this.ib = s, this.jb = 1, p) : r
    },
    update: function(t) {
        for (var i, e, n, r = this.ua, s = this.ca.width, h = this.ca.height, a = M.d(0, 0), o = .1 * this.ib * this.jb, c = this.WN, u = M.d(0, 0), f = 0; s + 1 > f; ++f) for (var l = 0; h + 1 > l; ++l) a.x = f,
            a.y = l,
            i = this.Yc(a),
            u.x = f - s / 2,
            u.y = l - h / 2,
            e = M.Ll(u) * Math.cos(Math.PI / 2 + 2 * t * Math.PI * c) * o,
            n = Math.sin(e) * (i.y - r.y) + Math.cos(e) * (i.x - r.x),
            e = Math.cos(e) * (i.y - r.y) - Math.sin(e) * (i.x - r.x),
            i.x = r.x + n,
            i.y = r.y + e,
            this.ae(a, i)
    }
}), M.t8 = function(t, i, e, n, r) {
    return new M.bK(t, i, e, n, r)
},
    M.bK.create = M.t8, M.hJ = M.Fc.extend({
    el: 0,
    Vs: r,
    ctor: function(t, i, e, n) {
        M.qc.prototype.ctor.call(this),
        n !== k && this.f(t, i, e, n)
    },
    f: function(t, i, e, n) {
        return M.Fc.prototype.f.call(this, t, i) ? (this.el = e, this.Vs = n, p) : r
    },
    update: function() {
        for (var t = this.ca, i = this.el, e = M.d(0, 0), n = 0; n < t.width; ++n) for (var r = 0; r < t.height; ++r) {
            e.x = n,
                e.y = r;
            var s = this.kg(e);
            s.J.x += M.Mb() % (2 * i) - i,
                s.V.x += M.Mb() % (2 * i) - i,
                s.U.x += M.Mb() % (2 * i) - i,
                s.N.x += M.Mb() % (2 * i) - i,
                s.J.y += M.Mb() % (2 * i) - i,
                s.V.y += M.Mb() % (2 * i) - i,
                s.U.y += M.Mb() % (2 * i) - i,
                s.N.y += M.Mb() % (2 * i) - i,
            this.Vs && (s.J.e += M.Mb() % (2 * i) - i, s.V.e += M.Mb() % (2 * i) - i, s.U.e += M.Mb() % (2 * i) - i, s.N.e += M.Mb() % (2 * i) - i),
                this.kf(e, s)
        }
    }
}), M.E7 = function(t, i, e, n) {
    return new M.hJ(t, i, e, n)
},
    M.hJ.create = M.E7, M.iJ = M.Fc.extend({
    el: 0,
    oD: r,
    HN: r,
    ctor: function(t, i, e, n) {
        M.qc.prototype.ctor.call(this),
        n !== k && this.f(t, i, e, n)
    },
    f: function(t, i, e, n) {
        return M.Fc.prototype.f.call(this, t, i) ? (this.oD = r, this.el = e, this.HN = n, p) : r
    },
    update: function() {
        if (this.oD === r) {
            for (var t, i = this.ca, e = this.el, n = M.d(0, 0), s = 0; s < i.width; ++s) for (var h = 0; h < i.height; ++h) n.x = s,
                n.y = h,
                t = this.kg(n),
                t.J.x += M.Mb() % (2 * e) - e,
                t.V.x += M.Mb() % (2 * e) - e,
                t.U.x += M.Mb() % (2 * e) - e,
                t.N.x += M.Mb() % (2 * e) - e,
                t.J.y += M.Mb() % (2 * e) - e,
                t.V.y += M.Mb() % (2 * e) - e,
                t.U.y += M.Mb() % (2 * e) - e,
                t.N.y += M.Mb() % (2 * e) - e,
            this.HN && (t.J.e += M.Mb() % (2 * e) - e, t.V.e += M.Mb() % (2 * e) - e, t.U.e += M.Mb() % (2 * e) - e, t.N.e += M.Mb() % (2 * e) - e),
                this.kf(n, t);
            this.oD = p
        }
    }
}), M.F7 = function(t, i, e, n) {
    return new M.iJ(t, i, e, n)
},
    M.iJ.create = M.F7, M.jJ = M.Fc.extend({
    $D: 0,
    Rj: 0,
    Ri: q,
    Xe: q,
    ctor: function(t, i, e) {
        M.qc.prototype.ctor.call(this),
            this.Ri = [],
            this.Xe = [],
        e !== k && this.f(t, i, e)
    },
    f: function(t, i, e) {
        return M.Fc.prototype.f.call(this, t, i) ? (this.$D = e, this.Ri.length = 0, this.Xe.length = 0, p) : r
    },
    rH: function(t, i) {
        for (var e = i - 1; e >= 0; e--) {
            var n = 0 | M.Mb() % (e + 1),
                r = t[e];
            t[e] = t[n],
                t[n] = r
        }
    },
    lq: function(t) {
        var i = this.ca,
            e = t.width * i.height + t.height;
        return M.size(this.Ri[e] / i.height - t.width, this.Ri[e] % i.height - t.height)
    },
    J5: function(t, i) {
        var e = this.kg(t),
            n = this.target.grid.ZF(),
            r = i.position;
        e.J.x += r.x * n.x,
            e.J.y += r.y * n.y,
            e.V.x += r.x * n.x,
            e.V.y += r.y * n.y,
            e.U.x += r.x * n.x,
            e.U.y += r.y * n.y,
            e.N.x += r.x * n.x,
            e.N.y += r.y * n.y,
            this.kf(t, e)
    },
    D: function(t) {
        M.Fc.prototype.D.call(this, t),
            t = this.ca,
            this.Rj = t.width * t.height;
        for (var i = this.Ri, e = i.length = 0; e < this.Rj; ++e) i[e] = e;
        this.rH(i, this.Rj);
        for (var i = this.Xe, e = i.length = 0, n = M.size(0, 0), r = 0; r < t.width; ++r) for (var s = 0; s < t.height; ++s) i[e] = new ja,
            i[e].position = M.d(r, s),
            i[e].T7 = M.d(r, s),
            n.width = r,
            n.height = s,
            i[e].vt = this.lq(n),
            ++e
    },
    update: function(t) {
        for (var i, e = 0, n = this.ca, r = this.Xe, s = M.d(0, 0), h = 0; h < n.width; ++h) for (var a = 0; a < n.height; ++a) s.x = h,
            s.y = a,
            i = r[e],
            i.position.x = i.vt.width * t,
            i.position.y = i.vt.height * t,
            this.J5(s, i),
            ++e
    }
}), M.H7 = function(t, i, e) {
    return new M.jJ(t, i, e)
},
    M.jJ.create = M.H7, M.iv = M.Fc.extend({
    Sz: function(t, i) {
        var e = this.ca.width * i,
            n = this.ca.height * i;
        return 0 == e + n ? 1: Math.pow((t.width + t.height) / (e + n), 6)
    },
    yH: function(t) {
        this.kf(t, this.kg(t))
    },
    xH: function(t) {
        this.kf(t, new M.sv)
    },
    dS: function(t, i) {
        var e = this.kg(t),
            n = this.target.grid.ZF();
        e.J.x += n.x / 2 * (1 - i),
            e.J.y += n.y / 2 * (1 - i),
            e.V.x -= n.x / 2 * (1 - i),
            e.V.y += n.y / 2 * (1 - i),
            e.U.x += n.x / 2 * (1 - i),
            e.U.y -= n.y / 2 * (1 - i),
            e.N.x -= n.x / 2 * (1 - i),
            e.N.y -= n.y / 2 * (1 - i),
            this.kf(t, e)
    },
    update: function(t) {
        for (var i, e = this.ca, n = M.d(0, 0), r = M.size(0, 0), s = 0; s < e.width; ++s) for (var h = 0; h < e.height; ++h) n.x = s,
            n.y = h,
            r.width = s,
            r.height = h,
            i = this.Sz(r, t),
            0 == i ? this.xH(n) : 1 > i ? this.dS(n, i) : this.yH(n)
    }
}), M.bP = function(t, i) {
    return new M.iv(t, i)
},
    M.iv.create = M.bP, M.eI = M.iv.extend({
    Sz: function(t, i) {
        return 0 == t.width + t.height ? 1: Math.pow((this.ca.width * (1 - i) + this.ca.height * (1 - i)) / (t.width + t.height), 6)
    }
}), M.$O = function(t, i) {
    return new M.eI(t, i)
},
    M.eI.create = M.$O, M.jv = M.iv.extend({
    Sz: function(t, i) {
        var e = this.ca.height * i;
        return 0 == e ? 1: Math.pow(t.height / e, 6)
    },
    dS: function(t, i) {
        var e = this.kg(t),
            n = this.target.grid.ZF();
        e.J.y += n.y / 2 * (1 - i),
            e.V.y += n.y / 2 * (1 - i),
            e.U.y -= n.y / 2 * (1 - i),
            e.N.y -= n.y / 2 * (1 - i),
            this.kf(t, e)
    }
}), M.m2 = function(t, i) {
    return new M.jv(t, i)
},
    M.jv.create = M.m2, M.fI = M.jv.extend({
    Sz: function(t, i) {
        return 0 == t.height ? 1: Math.pow(this.ca.height * (1 - i) / t.height, 6)
    }
}), M.aP = function(t, i) {
    return new M.fI(t, i)
},
    M.fI.create = M.aP, M.aK = M.Fc.extend({
    $D: q,
    Rj: 0,
    Ri: q,
    ctor: function(t, i, e) {
        M.qc.prototype.ctor.call(this),
            this.Ri = [],
        i !== k && this.f(t, i, e)
    },
    f: function(t, i, e) {
        return M.Fc.prototype.f.call(this, t, i) ? (this.$D = e || 0, this.Ri.length = 0, p) : r
    },
    rH: function(t, i) {
        for (var e = i - 1; e >= 0; e--) {
            var n = 0 | M.Mb() % (e + 1),
                r = t[e];
            t[e] = t[n],
                t[n] = r
        }
    },
    yH: function(t) {
        this.kf(t, this.kg(t))
    },
    xH: function(t) {
        this.kf(t, new M.sv)
    },
    D: function(t) {
        M.Fc.prototype.D.call(this, t),
            this.Rj = this.ca.width * this.ca.height,
            t = this.Ri;
        for (var i = t.length = 0; i < this.Rj; ++i) t[i] = i;
        this.rH(t, this.Rj)
    },
    update: function(t) {
        t = 0 | t * this.Rj;
        for (var i, e = this.ca, n = M.d(0, 0), r = this.Ri, s = 0; s < this.Rj; s++) i = r[s],
            n.x = 0 | i / e.height,
            n.y = i % (0 | e.height),
            t > s ? this.xH(n) : this.yH(n)
    }
}), M.gS = function(t, i, e) {
    return new M.aK(t, i, e)
},
    M.aK.create = M.gS, M.jK = M.Fc.extend({
    Cf: 0,
    ib: 0,
    jb: 0,
    ctor: function(t, i, e, n) {
        M.qc.prototype.ctor.call(this),
        n !== k && this.f(t, i, e, n)
    },
    jq: E("ib"),
    Nq: A("ib"),
    Dn: E("jb"),
    Qn: A("jb"),
    f: function(t, i, e, n) {
        return M.Fc.prototype.f.call(this, t, i) ? (this.Cf = e, this.ib = n, this.jb = 1, p) : r
    },
    update: function(t) {
        for (var i, e = this.ca, n = this.Cf, r = this.ib, s = this.jb, h = M.d(0, 0), a = 0; a < e.width; a++) for (var o = 0; o < e.height; o++) h.x = a,
            h.y = o,
            i = this.kg(h),
            i.J.e = Math.sin(2 * t * Math.PI * n + .01 * (i.J.y + i.J.x)) * r * s,
            i.V.e = i.J.e,
            i.U.e = i.J.e,
            i.N.e = i.J.e,
            this.kf(h, i)
    }
}), M.I8 = function(t, i, e, n) {
    return new M.jK(t, i, e, n)
},
    M.jK.create = M.I8, M.kI = M.Fc.extend({
    zj: 0,
    ib: 0,
    jb: 0,
    ctor: function(t, i, e, n) {
        M.qc.prototype.ctor.call(this),
        n !== k && this.f(t, i, e, n)
    },
    jq: E("ib"),
    Nq: A("ib"),
    Dn: E("jb"),
    Qn: A("jb"),
    f: function(t, i, e, n) {
        return M.Fc.prototype.f.call(this, t, i) ? (this.zj = e, this.ib = n, this.jb = 1, p) : r
    },
    update: function(t) {
        var i = Math.sin(2 * Math.PI * t * this.zj) * this.ib * this.jb;
        t = Math.sin(Math.PI * (2 * t * this.zj + 1)) * this.ib * this.jb;
        for (var e, n = this.ca, r = this.target.grid, s = M.d(0, 0), h = 0; h < n.width; h++) for (var a = 0; a < n.height; a++) s.x = h,
            s.y = a,
            e = r.kg(s),
            0 == (h + a) % 2 ? (e.J.e += i, e.V.e += i, e.U.e += i, e.N.e += i) : (e.J.e += t, e.V.e += t, e.U.e += t, e.N.e += t),
            r.kf(s, e)
    }
}), M.x4 = function(t, i, e, n) {
    return new M.kI(t, i, e, n)
},
    M.kI.create = M.x4, M.lJ = M.Fc.extend({
    h_: 0,
    lt: q,
    ctor: function(t, i) {
        M.qc.prototype.ctor.call(this),
        i !== k && this.f(t, i)
    },
    f: function(t, i) {
        return this.h_ = i,
            M.Fc.prototype.f.call(this, t, M.size(1, i))
    },
    update: function(t) {
        for (var i, e, n = this.ca, r = this.lt.width, s = M.d(0, 0), h = 0; h < n.height; ++h) s.y = h,
            i = this.kg(s),
            e = 1,
        0 == h % 2 && (e = -1),
            i.J.x += e * r * t,
            i.V.x += e * r * t,
            i.U.x += e * r * t,
            i.N.x += e * r * t,
            this.kf(s, i)
    },
    D: function(t) {
        M.Fc.prototype.D.call(this, t),
            this.lt = M.K.Dt()
    }
}), M.SR = function(t, i) {
    return new M.lJ(t, i)
},
    M.lJ.create = M.SR, M.kJ = M.Fc.extend({
    FX: 0,
    lt: q,
    ctor: function(t, i) {
        M.qc.prototype.ctor.call(this),
        i !== k && this.f(t, i)
    },
    f: function(t, i) {
        return this.FX = i,
            M.Fc.prototype.f.call(this, t, M.size(i, 1))
    },
    update: function(t) {
        for (var i, e, n = this.ca.width, r = this.lt.height, s = M.d(0, 0), h = 0; n > h; ++h) s.x = h,
            i = this.kg(s),
            e = 1,
        0 == h % 2 && (e = -1),
            i.J.y += e * r * t,
            i.V.y += e * r * t,
            i.U.y += e * r * t,
            i.N.y += e * r * t,
            this.kf(s, i);
        M.ia.oe = p
    },
    D: function(t) {
        M.Fc.prototype.D.call(this, t),
            this.lt = M.K.Dt()
    }
}), M.RR = function(t, i) {
    return new M.kJ(t, i)
},
    M.kJ.create = M.RR, M.DI = M.md.extend({
    update: function(t) {
        var i = Math.max(0, t - .25),
            i = -100 - 500 * i * i,
            e = +Math.PI / 2 + -Math.PI / 2 * Math.sqrt(t);
        t = Math.sin(e);
        for (var e = Math.cos(e), n = this.ca, r = M.d(0, 0), s = 0; s <= n.width; ++s) for (var h = 0; h <= n.height; ++h) {
            r.x = s,
                r.y = h;
            var a = this.Yc(r),
                o = Math.sqrt(a.x * a.x + (a.y - i) * (a.y - i)),
                c = o * t,
                u = Math.asin(a.x / o) / t,
                f = Math.cos(u);
            a.x = u <= Math.PI ? c * Math.sin(u) : 0,
                a.y = o + i - c * (1 - f) * t,
                a.e = c * (1 - f) * e / 7,
            .5 > a.e && (a.e = .5),
                this.ae(r, a)
        }
    }
}), M.JG = function(t, i) {
    return new M.DI(t, i)
},
    M.DI.create = M.JG, M.Qa = M.n.extend({
    Rb: q,
    Fi: 0,
    Eb: q,
    Hh: q,
    pm: q,
    Jd: r,
    Hb: "ProgressTimer",
    g3: function() {
        return M.d(this.Hh.x, this.Hh.y)
    },
    Y6: function(t) {
        this.Hh = M.GQ(t)
    },
    x2: function() {
        return M.d(this.pm.x, this.pm.y)
    },
    D6: function(t) {
        this.pm = M.GQ(t)
    },
    bG: E("Rb"),
    o3: E("Fi"),
    FP: E("Eb"),
    d7: function(t) {
        this.Fi != t && (this.Fi = M.jd(t, 0, 100), this.KE())
    },
    Jf: z(),
    gg: F(r),
    r4: E("Jd"),
    eC: function(t) {
        if (t < M.Qa.oJ) {
            var i = M.Qa.UV;
            return this.Jd ? M.d(1 & i >> 7 - (t << 1), 1 & i >> 7 - ((t << 1) + 1)) : M.d(1 & i >> (t << 1) + 1, 1 & i >> (t << 1))
        }
        return M.d(0, 0)
    },
    Hc: 0,
    yc: q,
    $e: q,
    Xx: q,
    gn: r,
    ctor: q,
    cs: function(t) {
        M.n.prototype.ctor.call(this),
            this.Rb = M.Qa.Dg,
            this.Fi = 0,
            this.Hh = M.d(0, 0),
            this.pm = M.d(0, 0),
            this.Jd = r,
            this.Eb = q,
            this.$ = new M.UI(this),
        t && this.nM(t)
    },
    ds: function(t) {
        M.n.prototype.ctor.call(this),
            this.Rb = M.Qa.Dg,
            this.Fi = 0,
            this.Hh = M.d(0, 0),
            this.pm = M.d(0, 0),
            this.Jd = r,
            this.Eb = q,
            this.Xx = M.l.createBuffer(),
            this.Hc = 0,
            this.$e = this.yc = q,
            this.gn = r,
            this.$ = new M.VI(this),
        t && this.oM(t)
    },
    mb: function(t) {
        this.Eb.color = t,
            this.mc()
    },
    pb: function(t) {
        this.Eb.opacity = t,
            this.mc()
    },
    fg: function() {
        return this.Eb.color
    },
    bh: function() {
        return this.Eb.opacity
    },
    ER: q,
    C_: function(t) {
        this.Jd !== t && (this.Jd = t)
    },
    D_: function(t) {
        this.Jd !== t && (this.Jd = t, this.$e = this.yc = q, this.Hc = 0)
    },
    Mz: q,
    I_: function(t) {
        this.Eb != t && (this.Eb = t, this.$.Eb = t, this.width = this.Eb.width, this.height = this.Eb.height)
    },
    J_: function(t) {
        t && this.Eb != t && (this.Eb = t, this.width = t.width, this.height = t.height, this.yc && (this.$e = this.yc = q, this.Hc = 0))
    },
    nH: q,
    Q_: function(t) {
        t !== this.Rb && (this.Rb = t, this.$.Rb = t)
    },
    R_: function(t) {
        t !== this.Rb && (this.yc && (this.$e = this.yc = q, this.Hc = 0), this.Rb = t)
    },
    hH: q,
    A_: function(t) {
        this.Jd !== t && (this.Jd = t)

    },
    B_: function(t) {
        this.Jd !== t && (this.Jd = t, this.$e = this.yc = q, this.Hc = 0)
    },
    Ge: function(t) {
        var i = this.Eb;
        if (!i) return {
            ma: 0,
            na: 0
        };
        var e = i.quad,
            n = M.d(e.J.p.ma, e.J.p.na),
            e = M.d(e.N.p.ma, e.N.p.na);
        return i.textureRectRotated && (i = t.x, t.x = t.y, t.y = i),
        {
            ma: n.x * (1 - t.x) + e.x * t.x,
            na: n.y * (1 - t.y) + e.y * t.y
        }
    },
    He: function(t) {
        if (!this.Eb) return {
            x: 0,
            y: 0
        };
        var i = this.Eb.quad,
            e = M.d(i.J.j.x, i.J.j.y),
            i = M.d(i.N.j.x, i.N.j.y);
        return {
            x: e.x * (1 - t.x) + i.x * t.x,
            y: e.y * (1 - t.y) + i.y * t.y
        }
    },
    cQ: q,
    nM: function(t) {
        return this.percentage = 0,
            this.anchorY = this.anchorX = .5,
            this.Rb = M.Qa.Dg,
            this.Jd = r,
            this.midPoint = M.d(.5, .5),
            this.barChangeRate = M.d(1, 1),
            this.sprite = t,
            p
    },
    oM: function(t) {
        return this.percentage = 0,
            this.$e = this.yc = q,
            this.Hc = 0,
            this.anchorY = this.anchorX = .5,
            this.Rb = M.Qa.Dg,
            this.Jd = r,
            this.midPoint = M.d(.5, .5),
            this.barChangeRate = M.d(1, 1),
            this.sprite = t,
            this.shaderProgram = M.be.Bc(M.oj),
            p
    },
    Ia: q,
    uj: function(t) {
        if (t = t || M.l, this.yc && this.Eb) {
            M.St(this);
            var i = this.Eb.Ef();
            M.kd(i.src, i.I),
                M.Sb(M.wh),
                M.yd(this.Eb.texture),
                t.bindBuffer(t.ARRAY_BUFFER, this.Xx),
            this.gn && (t.bufferData(t.ARRAY_BUFFER, this.$e, t.DYNAMIC_DRAW), this.gn = r),
                i = M.Cd.BYTES_PER_ELEMENT,
                t.vertexAttribPointer(M.eb, 2, t.FLOAT, r, i, 0),
                t.vertexAttribPointer(M.nd, 4, t.UNSIGNED_BYTE, p, i, 8),
                t.vertexAttribPointer(M.bd, 2, t.FLOAT, r, i, 12),
                this.Rb === M.Qa.Dg ? t.drawArrays(t.TRIANGLE_FAN, 0, this.Hc) : this.Rb == M.Qa.Ak && (this.Jd ? (t.drawArrays(t.TRIANGLE_STRIP, 0, this.Hc / 2), t.drawArrays(t.TRIANGLE_STRIP, 4, this.Hc / 2), M.Wc++) : t.drawArrays(t.TRIANGLE_STRIP, 0, this.Hc)),
                M.Wc++
        }
    },
    t0: function() {
        if (this.Eb) {
            var t,
                i = this.Hh;
            t = this.Fi / 100;
            var e = 2 * M.PI * (this.Jd ? t: 1 - t),
                n = M.d(i.x, 1),
                s = M.z5(n, i, e),
                e = 0;
            if (0 == t) s = n,
                e = 0;
            else if (1 == t) s = n,
                e = 4;
            else {
                var h = M.AT,
                    a = M.Qa.oJ;
                for (t = 0; a >= t; ++t) {
                    var o = (t + (a - 1)) % a,
                        c = this.eC(t % a),
                        o = this.eC(o);
                    0 == t ? o = M.JQ(c, o, 1 - i.x) : 4 == t && (c = M.JQ(c, o, 1 - i.x));
                    var u = M.d(0, 0);
                    M.HG(c, o, i, s, u) && (0 != t && 4 != t || 0 <= u.x && 1 >= u.x) && 0 <= u.y && u.y < h && (h = u.y, e = t)
                }
                s = M.ik(i, M.cj(M.$d(s, i), h))
            }
            if (h = p, this.Hc != e + 3 && (h = r, this.$e = this.yc = q, this.Hc = 0), !this.yc) {
                for (a = this.Hc = e + 3, c = M.Cd.BYTES_PER_ELEMENT, this.$e = new ArrayBuffer(a * c), o = [], t = 0; a > t; t++) o[t] = new M.Cd(q, q, q, this.$e, t * c);
                if (this.yc = o, !this.yc) return M.log("cc.ProgressTimer._updateRadial() : Not enough memory"),
                    void 0
            }
            if (this.mc(), a = this.yc, !h) for (a[0].p = this.Ge(i), a[0].j = this.He(i), a[1].p = this.Ge(n), a[1].j = this.He(n), t = 0; e > t; t++) i = this.eC(t),
                a[t + 2].p = this.Ge(i),
                a[t + 2].j = this.He(i);
            a[this.Hc - 1].p = this.Ge(s),
                a[this.Hc - 1].j = this.He(s)
        }
    },
    n0: function() {
        if (this.Eb) {
            var t,
                i = this.Fi / 100,
                e = this.pm,
                e = M.cj(M.d(1 - e.x + i * e.x, 1 - e.y + i * e.y), .5),
                i = M.$d(this.Hh, e),
                e = M.ik(this.Hh, e);
            if (0 > i.x && (e.x += -i.x, i.x = 0), 1 < e.x && (i.x -= e.x - 1, e.x = 1), 0 > i.y && (e.y += -i.y, i.y = 0), 1 < e.y && (i.y -= e.y - 1, e.y = 1), this.Jd) {
                if (!this.yc) {
                    this.Hc = 8;
                    var n = M.Cd.BYTES_PER_ELEMENT;
                    this.$e = new ArrayBuffer(8 * n);
                    var r = [];
                    for (t = 0; 8 > t; t++) r[t] = new M.Cd(q, q, q, this.$e, t * n);
                    r[0].p = this.Ge(M.d(0, 1)),
                        r[0].j = this.He(M.d(0, 1)),
                        r[1].p = this.Ge(M.d(0, 0)),
                        r[1].j = this.He(M.d(0, 0)),
                        r[6].p = this.Ge(M.d(1, 1)),
                        r[6].j = this.He(M.d(1, 1)),
                        r[7].p = this.Ge(M.d(1, 0)),
                        r[7].j = this.He(M.d(1, 0)),
                        this.yc = r
                }
                t = this.yc,
                    t[2].p = this.Ge(M.d(i.x, e.y)),
                    t[2].j = this.He(M.d(i.x, e.y)),
                    t[3].p = this.Ge(M.d(i.x, i.y)),
                    t[3].j = this.He(M.d(i.x, i.y)),
                    t[4].p = this.Ge(M.d(e.x, e.y)),
                    t[4].j = this.He(M.d(e.x, e.y)),
                    t[5].p = this.Ge(M.d(e.x, i.y)),
                    t[5].j = this.He(M.d(e.x, i.y))
            } else {
                if (!this.yc) for (this.Hc = 4, n = M.Cd.BYTES_PER_ELEMENT, this.$e = new ArrayBuffer(4 * n), this.yc = [], t = 0; 4 > t; t++) this.yc[t] = new M.Cd(q, q, q, this.$e, t * n);
                t = this.yc,
                    t[0].p = this.Ge(M.d(i.x, e.y)),
                    t[0].j = this.He(M.d(i.x, e.y)),
                    t[1].p = this.Ge(M.d(i.x, i.y)),
                    t[1].j = this.He(M.d(i.x, i.y)),
                    t[2].p = this.Ge(M.d(e.x, e.y)),
                    t[2].j = this.He(M.d(e.x, e.y)),
                    t[3].p = this.Ge(M.d(e.x, i.y)),
                    t[3].j = this.He(M.d(e.x, i.y))
            }
            this.mc()
        }
    },
    mc: function() {
        if (this.Eb && this.yc) {
            for (var t = this.Eb.quad.U.A, i = this.yc, e = 0, n = this.Hc; n > e; ++e) i[e].A = t;
            this.gn = p
        }
    },
    KE: q,
    p0: function() {
        var t = this.Eb,
            i = t.width,
            e = t.height,
            n = this.Hh,
            s = this.$;
        if (this.Rb == M.Qa.Dg) {
            s.xf = Math.round(Math.sqrt(i * i + e * e));
            var h,
                a = r,
                o = s.qD;
            o.x = i * n.x,
                o.y = -e * n.y,
                this.Jd ? (h = 270, n = 270 - 3.6 * this.Fi) : (n = -90, h = -90 + 3.6 * this.Fi),
            t.hc && (o.x -= 2 * i * this.Hh.x, n = -n - 180, h = -h - 180, a = !a),
            t.ic && (o.y += 2 * e * this.Hh.y, a = !a, n = -n, h = -h),
                s.MN = n,
                s.ML = h,
                s.LK = a
        } else o = this.pm,
            a = this.Fi / 100,
            s = s.AK,
            o = M.size(i * (1 - o.x), e * (1 - o.y)),
            a = M.size((i - o.width) * a, (e - o.height) * a),
            a = M.size(o.width + a.width, o.height + a.height),
            h = M.d(i * n.x, e * n.y),
            o = h.x - a.width / 2,
        .5 < n.x && a.width / 2 >= i - h.x && (o = i - a.width),
            i = h.y - a.height / 2,
        .5 < n.y && a.height / 2 >= e - h.y && (i = e - a.height),
            s.x = 0,
            e = 1,
        t.hc && (s.x -= a.width, e = -1),
        o > 0 && (s.x += o * e),
            s.y = 0,
            e = 1,
        t.ic && (s.y += a.height, e = -1),
        i > 0 && (s.y -= i * e),
            s.width = a.width,
            s.height = -a.height
    },
    q0: function() {
        var t = this.Rb;
        t === M.Qa.Dg ? this.t0() : t === M.Qa.Ak && this.n0(),
            this.gn = p
    }
}), T = M.Qa.prototype, M.B == M.Z ? (T.ctor = T.ds, T.ER = T.D_, T.Mz = T.J_, T.nH = T.R_, T.hH = T.B_, T.cQ = T.oM, T.Ia = T.uj, T.KE = T.q0) : (T.ctor = T.cs, T.ER = T.C_, T.Mz = T.I_, T.nH = T.Q_, T.hH = T.A_, T.cQ = T.nM, T.Ia = T.Ro, T.KE = M.Qa.prototype.p0), M.k(T, "midPoint", T.g3, T.Y6), M.k(T, "barChangeRate", T.x2, T.D6), M.k(T, "type", T.bG, T.nH), M.k(T, "percentage", T.o3, T.d7), M.k(T, "sprite", T.FP, T.Mz), M.k(T, "reverseDir", T.r4, T.hH), M.Qa.create = function(t) {
    return new M.Qa(t)
},
    M.Qa.oJ = 4, M.Qa.UV = 75, M.Qa.Dg = 0, M.Qa.Ak = 1, M.UA = M.C.extend({
    Ld: 0,
    Fd: 0,
    ctor: function(t, i) {
        M.C.prototype.ctor.call(this),
            this.Fd = this.Ld = 0,
        i !== k && this.f(t, i)
    },
    f: function(t, i) {
        return M.C.prototype.f.call(this, t) ? (this.Ld = i, p) : r
    },
    m: function() {
        var t = new M.UA;
        return t.f(this.t, this.Ld),
            t
    },
    reverse: function() {
        return M.log("cc.ProgressTo.reverse(): reverse hasn't been supported."),
            q
    },
    D: function(t) {
        M.C.prototype.D.call(this, t),
            this.Fd = t.percentage
    },
    update: function(t) {
        this.target instanceof M.Qa && (this.target.percentage = this.Fd + (this.Ld - this.Fd) * t)
    }
}), M.S5 = function(t, i) {
    return new M.UA(t, i)
},
    M.UA.create = M.S5, M.TA = M.C.extend({
    Ld: 0,
    Fd: 0,
    ctor: function(t, i, e) {
        M.C.prototype.ctor.call(this),
            this.Fd = this.Ld = 0,
        e !== k && this.f(t, i, e)
    },
    f: function(t, i, e) {
        return M.C.prototype.f.call(this, t) ? (this.Ld = e, this.Fd = i, p) : r
    },
    m: function() {
        var t = new M.TA;
        return t.f(this.t, this.Fd, this.Ld),
            t
    },
    reverse: function() {
        return M.OG(this.t, this.Ld, this.Fd)
    },
    D: function(t) {
        M.C.prototype.D.call(this, t)
    },
    update: function(t) {
        this.target instanceof M.Qa && (this.target.percentage = this.Fd + (this.Ld - this.Fd) * t)
    }
}), M.OG = function(t, i, e) {
    return new M.TA(t, i, e)
},
    M.TA.create = M.OG, M.Cr = 4208917214, M.laa = 0, M.zk = 1, M.Jv = 0, M.kaa = 1, M.ga = M.xk.extend({
    oa: q,
    gb: q,
    t: q,
    Fh: r,
    yM: r,
    Hb: "TransitionScene",
    ctor: function(t, i) {
        M.xk.prototype.ctor.call(this),
        t !== k && i !== k && this.f(t, i)
    },
    yN: function() {
        this.iS(this.yN);
        var t = M.K;
        this.yM = t.fl,
            t.mu(this.oa),
            M.wa.Le(p),
            this.gb.visible = p
    },
    Ki: function() {
        this.Fh = p
    },
    G: function() {
        this.Fh ? (this.gb.G(), this.oa.G()) : (this.oa.G(), this.gb.G()),
            M.n.prototype.G.call(this)
    },
    W: function() {
        M.n.prototype.W.call(this),
            M.wa.Le(r),
            this.gb.ig(),
            this.oa.W()
    },
    xb: function() {
        M.n.prototype.xb.call(this),
            M.wa.Le(p),
            this.gb.xb(),
            this.oa.fi()
    },
    bf: function() {
        M.n.prototype.bf.call(this),
        this.yM && this.gb.bf()
    },
    f: function(t, i) {
        return i || b("cc.TransitionScene.initWithDuration(): Argument scene must be non-nil"),
            this.ha() ? (this.t = t, this.Th({
                x: 0,
                y: 0,
                anchorX: 0,
                anchorY: 0
            }), this.oa = i, this.gb = M.K.fd, this.gb || (this.gb = new M.xk, this.gb.ha()), this.oa == this.gb && b("cc.TransitionScene.initWithDuration(): Incoming scene must be different from the outgoing scene"), this.Ki(), p) : r
    },
    finish: function() {
        this.oa.Th({
            visible: p,
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0
        }),
        M.B === M.Z && this.oa.En().restore(),
            this.gb.Th({
                visible: r,
                x: 0,
                y: 0,
                scale: 1,
                rotation: 0
            }),
        M.B === M.Z && this.gb.En().restore(),
            this.nu(this.yN, 0)
    },
    hG: function() {
        this.oa.visible = p,
            this.gb.visible = r
    }
}), M.ga.create = function(t, i) {
    return new M.ga(t, i)
},
    M.pf = M.ga.extend({
        Lm: 0,
        ctor: function(t, i, e) {
            M.ga.prototype.ctor.call(this),
            e != k && this.f(t, i, e)
        },
        f: function(t, i, e) {
            return M.ga.prototype.f.call(this, t, i) && (this.Lm = e),
                p
        }
    }), M.pf.create = function(t, i, e) {
    return new M.pf(t, i, e)
},
    M.RJ = M.ga.extend({
        ctor: function(t, i) {
            M.ga.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        W: function() {
            M.ga.prototype.W.call(this),
                this.oa.Th({
                    scale: .001,
                    anchorX: .5,
                    anchorY: .5
                }),
                this.gb.Th({
                    scale: 1,
                    anchorX: .5,
                    anchorY: .5
                });
            var t = M.Gb(M.Rl(M.eR(this.t / 2, .001), M.dR(this.t / 2, 720)), M.pe(this.t / 2));
            this.gb.lb(t),
                this.oa.lb(M.Gb(t.reverse(), M.Jc(this.finish, this)))
        }
    }), M.RJ.create = function(t, i) {
    return new M.RJ(t, i)
},
    M.HJ = M.ga.extend({
        ctor: function(t, i) {
            M.ga.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        W: function() {
            M.ga.prototype.W.call(this);
            var t = M.K.Ea();
            this.oa.Th({
                scale: .5,
                x: t.width,
                y: 0,
                anchorX: .5,
                anchorY: .5
            }),
                this.gb.anchorX = .5,
                this.gb.anchorY = .5;
            var i = M.lQ(this.t / 4, M.d( - t.width, 0), t.width / 4, 2),
                e = M.lg(this.t / 4, 1),
                t = M.lg(this.t / 4, .5),
                t = M.Gb(t, i),
                i = M.Gb(i, e),
                e = M.pe(this.t / 2);
            this.gb.lb(t),
                this.oa.lb(M.Gb(e, i, M.Jc(this.finish, this)))
        }
    }), M.HJ.create = function(t, i) {
    return new M.HJ(t, i)
},
    M.Ck = M.ga.extend({
        ctor: function(t, i) {
            M.ga.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        W: function() {
            M.ga.prototype.W.call(this),
                this.ak();
            var t = this.action();
            this.oa.lb(M.Gb(this.eg(t), M.Jc(this.finish, this)))
        },
        ak: function() {
            this.oa.H( - M.K.Ea().width, 0)
        },
        action: function() {
            return M.moveTo(this.t, M.d(0, 0))
        },
        eg: function(t) {
            return new M.co(t, 2)
        }
    }), M.Ck.create = function(t, i) {
    return new M.Ck(t, i)
},
    M.JJ = M.Ck.extend({
        ctor: function(t, i) {
            M.Ck.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        ak: function() {
            this.oa.H(M.K.Ea().width, 0)
        }
    }), M.JJ.create = function(t, i) {
    return new M.JJ(t, i)
},
    M.KJ = M.Ck.extend({
        ctor: function(t, i) {
            M.Ck.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        ak: function() {
            this.oa.H(0, M.K.Ea().height)
        }
    }), M.KJ.create = function(t, i) {
    return new M.KJ(t, i)
},
    M.IJ = M.Ck.extend({
        ctor: function(t, i) {
            M.Ck.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        ak: function() {
            this.oa.H(0, -M.K.Ea().height)
        }
    }), M.IJ.create = function(t, i) {
    return new M.IJ(t, i)
},
    M.qk = .5, M.Dk = M.ga.extend({
    ctor: function(t, i) {
        M.ga.prototype.ctor.call(this),
        i && this.f(t, i)
    },
    Ki: function() {
        this.Fh = r
    },
    W: function() {
        M.ga.prototype.W.call(this),
            this.ak();
        var t = this.action(),
            i = this.action(),
            t = this.eg(t),
            i = M.Gb(this.eg(i), M.Jc(this.finish, this));
        this.oa.lb(t),
            this.gb.lb(i)
    },
    ak: function() {
        this.oa.H( - M.K.Ea().width + M.qk, 0)
    },
    action: function() {
        return M.moveBy(this.t, M.d(M.K.Ea().width - M.qk, 0))
    },
    eg: function(t) {
        return new M.bo(t, 2)
    }
}), M.Dk.create = function(t, i) {
    return new M.Dk(t, i)
},
    M.UJ = M.Dk.extend({
        ctor: function(t, i) {
            M.Dk.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        Ki: function() {
            this.Fh = p
        },
        ak: function() {
            this.oa.H(M.K.Ea().width - M.qk, 0)
        },
        action: function() {
            return M.moveBy(this.t, M.d( - (M.K.Ea().width - M.qk), 0))
        }
    }), M.UJ.create = function(t, i) {
    return new M.UJ(t, i)
},
    M.TJ = M.Dk.extend({
        ctor: function(t, i) {
            M.Dk.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        Ki: function() {
            this.Fh = r
        },
        ak: function() {
            this.oa.H(0, -(M.K.Ea().height - M.qk))
        },
        action: function() {
            return M.moveBy(this.t, M.d(0, M.K.Ea().height - M.qk))
        }
    }), M.TJ.create = function(t, i) {
    return new M.TJ(t, i)
},
    M.VJ = M.Dk.extend({
        ctor: function(t, i) {
            M.Dk.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        Ki: function() {
            this.Fh = p
        },
        ak: function() {
            this.oa.H(0, M.K.Ea().height - M.qk)
        },
        action: function() {
            return M.moveBy(this.t, M.d(0, -(M.K.Ea().height - M.qk)))
        }
    }), M.VJ.create = function(t, i) {
    return new M.VJ(t, i)
},
    M.SJ = M.ga.extend({
        ctor: function(t, i) {
            M.ga.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        W: function() {
            M.ga.prototype.W.call(this),
                this.oa.Th({
                    scale: .001,
                    anchorX: 2 / 3,
                    anchorY: .5
                }),
                this.gb.Th({
                    scale: 1,
                    anchorX: 1 / 3,
                    anchorY: .5
                });
            var t = M.lg(this.t, .01),
                i = M.lg(this.t, 1);
            this.oa.lb(this.eg(i)),
                this.gb.lb(M.Gb(this.eg(t), M.Jc(this.finish, this)))
        },
        eg: function(t) {
            return new M.co(t, 2)
        }
    }), M.SJ.create = function(t, i) {
    return new M.SJ(t, i)
},
    M.FJ = M.pf.extend({
        ctor: function(t, i, e) {
            M.pf.prototype.ctor.call(this),
            e == q && (e = M.zk),
            i && this.f(t, i, e)
        },
        W: function() {
            M.ga.prototype.W.call(this);
            var t,
                i;
            this.oa.visible = r;
            var e;
            this.Lm === M.zk ? (t = 90, e = 270, i = 90) : (t = -90, e = 90, i = -90),
                t = M.Gb(M.pe(this.t / 2), M.show(), M.jg(this.t / 2, 1, 0, e, t, 0, 0), M.Jc(this.finish, this)),
                i = M.Gb(M.jg(this.t / 2, 1, 0, 0, i, 0, 0), M.Hn(), M.pe(this.t / 2)),
                this.oa.lb(t),
                this.gb.lb(i)
        }
    }), M.FJ.create = function(t, i, e) {
    return new M.FJ(t, i, e)
},
    M.GJ = M.pf.extend({
        ctor: function(t, i, e) {
            M.pf.prototype.ctor.call(this),
            e == q && (e = M.Jv),
            i && this.f(t, i, e)
        },
        W: function() {
            M.ga.prototype.W.call(this);
            var t,
                i;
            this.oa.visible = r;
            var e;
            this.Lm == M.Jv ? (t = 90, e = 270, i = 90) : (t = -90, e = 90, i = -90),
                t = M.Gb(M.pe(this.t / 2), M.show(), M.jg(this.t / 2, 1, 0, e, t, 90, 0), M.Jc(this.finish, this)),
                i = M.Gb(M.jg(this.t / 2, 1, 0, 0, i, 90, 0), M.Hn(), M.pe(this.t / 2)),
                this.oa.lb(t),
                this.gb.lb(i)
        }
    }), M.GJ.create = function(t, i, e) {
    return new M.GJ(t, i, e)
},
    M.EJ = M.pf.extend({
        ctor: function(t, i, e) {
            M.pf.prototype.ctor.call(this),
            e == q && (e = M.zk),
            i && this.f(t, i, e)
        },
        W: function() {
            M.ga.prototype.W.call(this);
            var t,
                i;
            this.oa.visible = r;
            var e;
            this.Lm === M.zk ? (t = 90, e = 270, i = 90) : (t = -90, e = 90, i = -90),
                t = M.Gb(M.pe(this.t / 2), M.show(), M.jg(this.t / 2, 1, 0, e, t, -45, 0), M.Jc(this.finish, this)),
                i = M.Gb(M.jg(this.t / 2, 1, 0, 0, i, 45, 0), M.Hn(), M.pe(this.t / 2)),
                this.oa.lb(t),
                this.gb.lb(i)
        }
    }), M.EJ.create = function(t, i, e) {
    return new M.EJ(t, i, e)
},
    M.ZJ = M.pf.extend({
        ctor: function(t, i, e) {
            M.pf.prototype.ctor.call(this),
            e == q && (e = M.zk),
            i && this.f(t, i, e)
        },
        W: function() {
            M.ga.prototype.W.call(this);
            var t,
                i;
            this.oa.visible = r;
            var e;
            this.Lm === M.zk ? (t = 90, e = 270, i = 90) : (t = -90, e = 90, i = -90),
                t = M.Gb(M.pe(this.t / 2), M.Rl(M.jg(this.t / 2, 1, 0, e, t, 0, 0), M.lg(this.t / 2, 1), M.show()), M.Jc(this.finish, this)),
                i = M.Gb(M.Rl(M.jg(this.t / 2, 1, 0, 0, i, 0, 0), M.lg(this.t / 2, .5)), M.Hn(), M.pe(this.t / 2)),
                this.oa.scale = .5,
                this.oa.lb(t),
                this.gb.lb(i)
        }
    }), M.ZJ.create = function(t, i, e) {
    return new M.ZJ(t, i, e)
},
    M.$J = M.pf.extend({
        ctor: function(t, i, e) {
            M.pf.prototype.ctor.call(this),
            e == q && (e = M.Jv),
            i && this.f(t, i, e)
        },
        W: function() {
            M.ga.prototype.W.call(this);
            var t,
                i;
            this.oa.visible = r;
            var e;
            this.Lm === M.Jv ? (t = 90, e = 270, i = 90) : (t = -90, e = 90, i = -90),
                t = M.Gb(M.pe(this.t / 2), M.Rl(M.jg(this.t / 2, 1, 0, e, t, 90, 0), M.lg(this.t / 2, 1), M.show()), M.Jc(this.finish, this)),
                i = M.Gb(M.Rl(M.jg(this.t / 2, 1, 0, 0, i, 90, 0), M.lg(this.t / 2, .5)), M.Hn(), M.pe(this.t / 2)),
                this.oa.scale = .5,
                this.oa.lb(t),
                this.gb.lb(i)
        }
    }), M.$J.create = function(t, i, e) {
    return new M.$J(t, i, e)
},
    M.YJ = M.pf.extend({
        ctor: function(t, i, e) {
            M.pf.prototype.ctor.call(this),
            e == q && (e = M.zk),
            i && this.f(t, i, e)
        },
        W: function() {
            M.ga.prototype.W.call(this);
            var t,
                i;
            this.oa.visible = r;
            var e;
            this.Lm === M.zk ? (t = 90, e = 270, i = 90) : (t = -90, e = 90, i = -90),
                t = M.Gb(M.pe(this.t / 2), M.Rl(M.jg(this.t / 2, 1, 0, e, t, -45, 0), M.lg(this.t / 2, 1), M.show()), M.show(), M.Jc(this.finish, this)),
                i = M.Gb(M.Rl(M.jg(this.t / 2, 1, 0, 0, i, 45, 0), M.lg(this.t / 2, .5)), M.Hn(), M.pe(this.t / 2)),
                this.oa.scale = .5,
                this.oa.lb(t),
                this.gb.lb(i)
        }
    }), M.YJ.create = function(t, i, e) {
    return new M.YJ(t, i, e)
},
    M.AJ = M.ga.extend({
        he: q,
        ctor: function(t, i, e) {
            M.ga.prototype.ctor.call(this),
                this.he = M.color(),
            i && this.f(t, i, e)
        },
        W: function() {
            M.ga.prototype.W.call(this);
            var t = new M.Oc(this.he);
            this.oa.visible = r,
                this.T(t, 2, M.Cr);
            var t = this.Yh(M.Cr),
                i = M.Gb(M.YO(this.t / 2), M.Jc(this.hG, this), M.ZO(this.t / 2), M.Jc(this.finish, this));
            t.lb(i)
        },
        xb: function() {
            M.ga.prototype.xb.call(this),
                this.SG(M.Cr, r)
        },
        f: function(t, i, e) {
            return e = e || M.color.BLACK,
            M.ga.prototype.f.call(this, t, i) && (this.he.r = e.r, this.he.g = e.g, this.he.b = e.b, this.he.a = 0),
                p
        }
    }), M.AJ.create = function(t, i, e) {
    return new M.AJ(t, i, e)
},
    M.zJ = M.ga.extend({
        ctor: function(t, i) {
            M.ga.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        W: function() {
            M.ga.prototype.W.call(this);
            var t = M.color(0, 0, 0, 0),
                i = M.K.Ea(),
                t = new M.Oc(t),
                e = new M.qo(i.width, i.height);
            if (q != e) {
                e.sprite.anchorX = .5,
                    e.sprite.anchorY = .5,
                    e.Th({
                        x: i.width / 2,
                        y: i.height / 2,
                        anchorX: .5,
                        anchorY: .5
                    }),
                    e.$g(),
                    this.oa.G(),
                    e.end();
                var n = new M.qo(i.width, i.height);
                n.H(i.width / 2, i.height / 2),
                    n.sprite.anchorX = n.anchorX = .5,
                    n.sprite.anchorY = n.anchorY = .5,
                    n.$g(),
                    this.gb.G(),
                    n.end(),
                    e.sprite.Od(M.ONE, M.ONE),
                    n.sprite.Od(M.SRC_ALPHA, M.ONE_MINUS_SRC_ALPHA),
                    t.T(e),
                    t.T(n),
                    e.sprite.opacity = 255,
                    n.sprite.opacity = 255,
                    i = M.Gb(M.cP(this.t, 0), M.Jc(this.hG, this), M.Jc(this.finish, this)),
                    n.sprite.lb(i),
                    this.T(t, 2, M.Cr)
            }
        },
        xb: function() {
            this.SG(M.Cr, r),
                M.ga.prototype.xb.call(this)
        },
        G: function() {
            M.n.prototype.G.call(this)
        },
        Ia: z()
    }), M.zJ.create = function(t, i) {
    return new M.zJ(t, i)
},
    M.XJ = M.ga.extend({
        uc: q,
        ctor: function(t, i) {
            M.ga.prototype.ctor.call(this),
                this.uc = new M.gm,
            i && this.f(t, i)
        },
        Ki: function() {
            this.Fh = r
        },
        W: function() {
            M.ga.prototype.W.call(this),
                this.uc.gj(this.gb),
                this.uc.W();
            var t = M.K.Ea(),
                t = M.gS(this.t, M.size(0 | 12 * (t.width / t.height), 12)),
                t = this.eg(t);
            this.uc.lb(M.Gb(t, M.Jc(this.finish, this), M.Uq()))
        },
        G: function() {
            this.oa.G(),
                this.uc.G()
        },
        eg: u()
    }), M.XJ.create = function(t, i) {
    return new M.XJ(t, i)
},
    M.Ov = M.ga.extend({
        uc: q,
        d0: function() {
            this.uc.gj(this.oa)
        },
        ctor: function(t, i) {
            M.ga.prototype.ctor.call(this),
                this.uc = new M.gm,
            i && this.f(t, i)
        },
        W: function() {
            M.ga.prototype.W.call(this),
                this.uc.gj(this.gb),
                this.uc.W();
            var t = this.action(),
                t = M.Gb(t, M.Jc(this.d0, this), t.reverse());
            this.uc.lb(M.Gb(this.eg(t), M.Jc(this.finish, this), M.Uq()))
        },
        xb: function() {
            this.uc.gj(q),
                this.uc.xb(),
                M.ga.prototype.xb.call(this)
        },
        G: function() {
            this.uc.G()
        },
        eg: function(t) {
            return new M.bo(t, 3)
        },
        action: function() {
            return M.RR(this.t / 2, 3)
        }
    }), M.Ov.create = function(t, i) {
    return new M.Ov(t, i)
},
    M.WJ = M.Ov.extend({
        ctor: function(t, i) {
            M.Ov.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        action: function() {
            return M.SR(this.t / 2, 3)
        }
    }), M.WJ.create = function(t, i) {
    return new M.WJ(t, i)
},
    M.Bk = M.ga.extend({
        uc: q,
        ctor: function(t, i) {
            M.ga.prototype.ctor.call(this),
                this.uc = new M.gm,
            i && this.f(t, i)
        },
        Ki: function() {
            this.Fh = r
        },
        W: function() {
            M.ga.prototype.W.call(this),
                this.uc.gj(this.gb),
                this.uc.W();
            var t = M.K.Ea(),
                t = this.Qp(M.size(0 | 12 * (t.width / t.height), 12));
            this.uc.lb(M.Gb(this.eg(t), M.Jc(this.finish, this), M.Uq()))
        },
        G: function() {
            this.oa.G(),
                this.uc.G()
        },
        eg: u(),
        Qp: function(t) {
            return M.bP(this.t, t)
        }
    }), M.Bk.create = function(t, i) {
    return new M.Bk(t, i)
},
    M.BJ = M.Bk.extend({
        ctor: function(t, i) {
            M.Bk.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        Qp: function(t) {
            return M.$O(this.t, t)
        }
    }), M.BJ.create = function(t, i) {
    return new M.BJ(t, i)
},
    M.DJ = M.Bk.extend({
        ctor: function(t, i) {
            M.Bk.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        Qp: function(t) {
            return new M.jv(this.t, t)
        }
    }), M.DJ.create = function(t, i) {
    return new M.DJ(t, i)
},
    M.CJ = M.Bk.extend({
        ctor: function(t, i) {
            M.Bk.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        Qp: function(t) {
            return M.aP(this.t, t)
        }
    }), M.CJ.create = function(t, i) {
    return new M.CJ(t, i)
},
    M.bJ = 49153, M.of = M.ga.extend({
    Ld: 0,
    Fd: 0,
    vx: q,
    Hb: "TransitionProgress",
    ctor: function(t, i) {
        M.ga.prototype.ctor.call(this),
        i && this.f(t, i)
    },
    Vm: function(t, i, e) {
        t.Th({
            x: i,
            y: e,
            anchorX: .5,
            anchorY: .5
        })
    },
    W: function() {
        M.ga.prototype.W.call(this),
            this.FN();
        var t = M.K.Ea(),
            i = new M.qo(t.width, t.height);
        i.sprite.anchorX = .5,
            i.sprite.anchorY = .5,
            this.Vm(i, t.width / 2, t.height / 2),
            i.clear(0, 0, 0, 1),
            i.$g(),
            this.vx.G(),
            i.end(),
        this.vx == this.gb && this.hG(),
            t = this.Om(i),
            i = M.Gb(M.OG(this.t, this.Fd, this.Ld), M.Jc(this.finish, this)),
            t.lb(i),
            this.T(t, 2, M.bJ)
    },
    xb: function() {
        this.SG(M.bJ, p),
            M.ga.prototype.xb.call(this)
    },
    FN: function() {
        this.vx = this.gb,
            this.Fd = 100,
            this.Ld = 0
    },
    Om: function() {
        return M.log("cc.TransitionProgress._progressTimerNodeWithRenderTexture(): should be overridden in subclass"),
            q
    },
    Ki: function() {
        this.Fh = r
    }
}), M.of.create = function(t, i) {
    return new M.of(t, i)
},
    M.PJ = M.of.extend({
        ctor: function(t, i) {
            M.of.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        Om: function(t) {
            var i = M.K.Ea();
            return t = new M.Qa(t.sprite),
            M.B === M.Z && (t.sprite.flippedY = p),
                t.type = M.Qa.Dg,
                t.reverseDir = r,
                t.percentage = 100,
                this.Vm(t, i.width / 2, i.height / 2),
                t
        }
    }), M.PJ.create = function(t, i) {
    return new M.PJ(t, i)
},
    M.FB = M.of.extend({
        ctor: function(t, i) {
            M.of.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        Om: function(t) {
            var i = M.K.Ea();
            return t = new M.Qa(t.sprite),
            M.B === M.Z && (t.sprite.flippedY = p),
                t.type = M.Qa.Dg,
                t.reverseDir = p,
                t.percentage = 100,
                this.Vm(t, i.width / 2, i.height / 2),
                t
        }
    }), M.FB.create = function(t, i) {
    var e = new M.FB;
    return e != q && e.f(t, i) ? e: new M.FB(t, i)
},
    M.MJ = M.of.extend({
        ctor: function(t, i) {
            M.of.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        Om: function(t) {
            var i = M.K.Ea();
            return t = new M.Qa(t.sprite),
            M.B === M.Z && (t.sprite.flippedY = p),
                t.type = M.Qa.Ak,
                t.midPoint = M.d(1, 0),
                t.barChangeRate = M.d(1, 0),
                t.percentage = 100,
                this.Vm(t, i.width / 2, i.height / 2),
                t
        }
    }), M.MJ.create = function(t, i) {
    return new M.MJ(t, i)
},
    M.QJ = M.of.extend({
        ctor: function(t, i) {
            M.of.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        Om: function(t) {
            var i = M.K.Ea();
            return t = new M.Qa(t.sprite),
            M.B === M.Z && (t.sprite.flippedY = p),
                t.type = M.Qa.Ak,
                t.midPoint = M.d(0, 0),
                t.barChangeRate = M.d(0, 1),
                t.percentage = 100,
                this.Vm(t, i.width / 2, i.height / 2),
                t
        }
    }), M.QJ.create = function(t, i) {
    return new M.QJ(t, i)
},
    M.NJ = M.of.extend({
        ctor: function(t, i) {
            M.of.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        Om: function(t) {
            var i = M.K.Ea();
            return t = new M.Qa(t.sprite),
            M.B === M.Z && (t.sprite.flippedY = p),
                t.type = M.Qa.Ak,
                t.midPoint = M.d(.5, .5),
                t.barChangeRate = M.d(1, 1),
                t.percentage = 0,
                this.Vm(t, i.width / 2, i.height / 2),
                t
        },
        Ki: function() {
            this.Fh = r
        },
        FN: function() {
            this.vx = this.oa,
                this.Fd = 0,
                this.Ld = 100
        }
    }), M.NJ.create = function(t, i) {
    return new M.NJ(t, i)
},
    M.OJ = M.of.extend({
        ctor: function(t, i) {
            M.of.prototype.ctor.call(this),
            i && this.f(t, i)
        },
        Om: function(t) {
            var i = M.K.Ea();
            return t = new M.Qa(t.sprite),
            M.B === M.Z && (t.sprite.flippedY = p),
                t.type = M.Qa.Ak,
                t.midPoint = M.d(.5, .5),
                t.barChangeRate = M.d(1, 1),
                t.percentage = 100,
                this.Vm(t, i.width / 2, i.height / 2),
                t
        }
    }), M.OJ.create = function(t, i) {
    return new M.OJ(t, i)
},
    M.LJ = M.ga.extend({
        ctor: function(t, i, e) {
            M.ga.prototype.ctor.call(this),
                this.uc = new M.gm,
                this.f(t, i, e)
        },
        Wr: p,
        uc: q,
        Hb: "TransitionPageTurn",
        f: function(t, i, e) {
            return this.Wr = e,
                M.ga.prototype.f.call(this, t, i),
                p
        },
        Qp: function(t) {
            return this.Wr ? M.cR(M.JG(this.t, t)) : M.JG(this.t, t)
        },
        W: function() {
            M.ga.prototype.W.call(this);
            var t,
                i = M.K.Ea();
            i.width > i.height ? (i = 16, t = 12) : (i = 12, t = 16),
                i = this.Qp(M.size(i, t)),
                t = this.uc,
                this.Wr ? (t.gj(this.oa), t.W(), this.oa.visible = r, t.lb(M.Gb(i, M.Jc(this.finish, this), M.Uq())), this.oa.lb(M.show())) : (t.gj(this.gb), t.W(), t.lb(M.Gb(i, M.Jc(this.finish, this), M.Uq())))
        },
        G: function() {
            this.Wr ? this.gb.G() : this.oa.G(),
                this.uc.G()
        },
        Ki: function() {
            this.Fh = this.Wr
        }
    }), M.LJ.create = function(t, i, e) {
    return new M.LJ(t, i, e)
},
    M.ra = {
        name: "Jacob__Codec"
    },
    M.x8 = function() {
        return M.ra.Pa.By.apply(M.ra.Pa, arguments)
    },
    M.y8 = function() {
        var t = M.ra.Yl.GO.apply(M.ra.Yl, arguments);
        return M.ra.Pa.By.apply(M.ra.Pa, [t])
    },
    M.mS = function(t, i) {
        i = i || 1;
        var e,
            n,
            r,
            s = this.y8(t),
            h = [];
        for (e = 0, r = s.length / i; r > e; e++) for (h[e] = 0, n = i - 1; n >= 0; --n) h[e] += s.charCodeAt(e * i + n) << 8 * n;
        return h
    },
    M.Zna = function(t, i) {
        i = i || 1;
        var e,
            n,
            r,
            s = this.x8(t),
            h = [];
        for (e = 0, r = s.length / i; r > e; e++) for (h[e] = 0, n = i - 1; n >= 0; --n) h[e] += s.charCodeAt(e * i + n) << 8 * n;
        return h
    },
    M.X$ = function(t) {
        t = t.split(",");
        var i,
            e = [];
        for (i = 0; i < t.length; i++) e.push(parseInt(t[i]));
        return e
    },
    M.ra.Yl = {
        name: "Jacob__Codec__Base64"
    },
    M.ra.Yl.Uw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", M.ra.Yl.GO = function(t) {
    var i,
        e,
        n,
        r,
        s,
        h = [],
        a = 0;
    for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); a < t.length;) i = this.Uw.indexOf(t.charAt(a++)),
        e = this.Uw.indexOf(t.charAt(a++)),
        r = this.Uw.indexOf(t.charAt(a++)),
        s = this.Uw.indexOf(t.charAt(a++)),
        i = i << 2 | e >> 4,
        e = (15 & e) << 4 | r >> 2,
        n = (3 & r) << 6 | s,
        h.push(String.fromCharCode(i)),
    64 != r && h.push(String.fromCharCode(e)),
    64 != s && h.push(String.fromCharCode(n));
    return h = h.join("")
},
    M.ra.Yl.HO = function(t, i) {
        var e,
            n,
            r,
            s = this.GO(t),
            h = [];
        for (e = 0, r = s.length / i; r > e; e++) for (h[e] = 0, n = i - 1; n >= 0; --n) h[e] += s.charCodeAt(e * i + n) << 8 * n;
        return h
    },
    M.u8 = function(t) {
        if (0 != t.length % 4) return q;
        for (var i = t.length / 4, e = window.vaa ? new Uint32Array(i) : [], n = 0; i > n; n++) {
            var r = 4 * n;
            e[n] = t[r] + 256 * t[r + 1] + 65536 * t[r + 2] + 16777216 * t[r + 3]
        }
        return e
    },
    M.ra.Pa = function(t) {
        this.data = t,
            this.debug = r,
            this.$j = k,
            this.files = 0,
            this.Vz = [],
            this.hF = Array(32768),
            this.Uh = 0,
            this.fz = r,
            this.sO = 0,
            this.Ui = 1,
            this.Up = 0,
            this.Bq = [],
            this.dP = k,
            this.Pt = Array(M.ra.Pa.aU),
            this.wn = Array(32),
            this.zu = 0,
            this.RA = q,
            this.di = 0,
            this.hq = Array(17),
            this.hq[0] = 0,
            this.iP = this.gP = k
    },
    M.ra.Pa.By = function(t) {
        return new M.ra.Pa(t).By()[0][0]
    },
    M.ra.Pa.xA = function() {
        this.ay = this.$x = 0,
            this.vG = q,
            this.z4 = -1
    },
    M.ra.Pa.aU = 288, M.ra.Pa.tI = 256, M.ra.Pa.eF = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47, 175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255], M.ra.Pa.DO = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], M.ra.Pa.EO = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], M.ra.Pa.CO = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], M.ra.Pa.bq = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], M.ra.Pa.border = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], M.ra.Pa.prototype.By = function() {
    return this.$t = [],
        ka(this),
        this.Vz
},
    M.ra.Pa.prototype.X = function() {
        return this.Up += 8,
            this.sO < this.data.length ? this.data.charCodeAt(this.sO++) : -1
    },
    function() {
        function t(t) {
            b(t)
        }
        function i(t, i) {
            var e = t.split("."),
                n = A; ! (e[0] in n) && n.execScript && n.execScript("var " + e[0]);
            for (var r; e.length && (r = e.shift());) e.length || i === w ? n = n[r] ? n[r] : n[r] = {}: n[r] = i
        }
        function e(t) {
            if ("string" == typeof t) {
                t = t.split("");
                var i,
                    e;
                for (i = 0, e = t.length; e > i; i++) t[i] = (255 & t[i].charCodeAt(0)) >>> 0
            }
            i = 1,
                e = 0;
            for (var n, r = t.length, s = 0; r > 0;) {
                n = r > 1024 ? 1024: r,
                    r -= n;
                do i += t[s++],
                    e += i;
                while (--n);
                i %= 65521,
                    e %= 65521
            }
            return (e << 16 | i) >>> 0
        }
        function n(i, e) {
            this.index = "number" == typeof e ? e: 0,
                this.Ft = 0,
                this.buffer = i instanceof(E ? Uint8Array: Array) ? i: new(E ? Uint8Array: Array)(32768),
            2 * this.buffer.length <= this.index && t(Error("invalid index")),
            this.buffer.length <= this.index && this.Xh()
        }
        function s(t) {
            this.buffer = new(E ? Uint16Array: Array)(2 * t),
                this.length = 0
        }
        function h(t) {
            var i,
                e,
                n,
                r,
                s,
                h,
                a,
                o,
                c,
                M = t.length,
                u = 0,
                f = Number.POSITIVE_INFINITY;
            for (o = 0; M > o; ++o) t[o] > u && (u = t[o]),
            t[o] < f && (f = t[o]);
            for (i = 1 << u, e = new(E ? Uint32Array: Array)(i), n = 1, r = 0, s = 2; u >= n;) {
                for (o = 0; M > o; ++o) if (t[o] === n) {
                    for (h = 0, a = r, c = 0; n > c; ++c) h = h << 1 | 1 & a,
                        a >>= 1;
                    for (c = h; i > c; c += s) e[c] = n << 16 | o; ++r
                }++n,
                    r <<= 1,
                    s <<= 1
            }
            return [e, u, f]
        }
        function a(t, i) {
            this.tq = P,
                this.L = 0,
                this.input = t,
                this.b = 0,
            i && (i.b5 && (this.L = i.b5), "number" == typeof i.rF && (this.tq = i.rF), i.lz && (this.a = E && i.lz instanceof Array ? new Uint8Array(i.lz) : i.lz), "number" == typeof i.w5 && (this.b = i.w5)),
            this.a || (this.a = new(E ? Uint8Array: Array)(32768))
        }
        function o(t, i) {
            this.length = t,
                this.CT = i
        }
        function c() {
            var i = j;
            switch (m) {
                case 3 === i: return [257, i - 3, 0];
                case 4 === i: return [258, i - 4, 0];
                case 5 === i: return [259, i - 5, 0];
                case 6 === i: return [260, i - 6, 0];
                case 7 === i: return [261, i - 7, 0];
                case 8 === i: return [262, i - 8, 0];
                case 9 === i: return [263, i - 9, 0];
                case 10 === i: return [264, i - 10, 0];
                case 12 >= i: return [265, i - 11, 1];
                case 14 >= i: return [266, i - 13, 1];
                case 16 >= i: return [267, i - 15, 1];
                case 18 >= i: return [268, i - 17, 1];
                case 22 >= i: return [269, i - 19, 2];
                case 26 >= i: return [270, i - 23, 2];
                case 30 >= i: return [271, i - 27, 2];
                case 34 >= i: return [272, i - 31, 2];
                case 42 >= i: return [273, i - 35, 3];
                case 50 >= i: return [274, i - 43, 3];
                case 58 >= i: return [275, i - 51, 3];
                case 66 >= i: return [276, i - 59, 3];
                case 82 >= i: return [277, i - 67, 4];
                case 98 >= i: return [278, i - 83, 4];
                case 114 >= i: return [279, i - 99, 4];
                case 130 >= i: return [280, i - 115, 4];
                case 162 >= i: return [281, i - 131, 5];
                case 194 >= i: return [282, i - 163, 5];
                case 226 >= i: return [283, i - 195, 5];
                case 257 >= i: return [284, i - 227, 5];
                case 258 === i: return [285, i - 258, 0];
                default:
                    t("invalid length: " + i)
            }
        }
        function M(i, e) {
            function n(i, e) {
                var n,
                    r = i.CT,
                    s = [],
                    h = 0;
                n = L[i.length],
                    s[h++] = 65535 & n,
                    s[h++] = 255 & n >> 16,
                    s[h++] = n >> 24;
                var a;
                switch (m) {
                    case 1 === r: a = [0, r - 1, 0];
                        break;
                    case 2 === r: a = [1, r - 2, 0];
                        break;
                    case 3 === r: a = [2, r - 3, 0];
                        break;
                    case 4 === r: a = [3, r - 4, 0];
                        break;
                    case 6 >= r: a = [4, r - 5, 1];
                        break;
                    case 8 >= r: a = [5, r - 7, 1];
                        break;
                    case 12 >= r: a = [6, r - 9, 2];
                        break;
                    case 16 >= r: a = [7, r - 13, 2];
                        break;
                    case 24 >= r: a = [8, r - 17, 3];
                        break;
                    case 32 >= r: a = [9, r - 25, 3];
                        break;
                    case 48 >= r: a = [10, r - 33, 4];
                        break;
                    case 64 >= r: a = [11, r - 49, 4];
                        break;
                    case 96 >= r: a = [12, r - 65, 5];
                        break;
                    case 128 >= r: a = [13, r - 97, 5];
                        break;
                    case 192 >= r: a = [14, r - 129, 6];
                        break;
                    case 256 >= r: a = [15, r - 193, 6];
                        break;
                    case 384 >= r: a = [16, r - 257, 7];
                        break;
                    case 512 >= r: a = [17, r - 385, 7];
                        break;
                    case 768 >= r: a = [18, r - 513, 8];
                        break;
                    case 1024 >= r: a = [19, r - 769, 8];
                        break;
                    case 1536 >= r: a = [20, r - 1025, 9];
                        break;
                    case 2048 >= r: a = [21, r - 1537, 9];
                        break;
                    case 3072 >= r: a = [22, r - 2049, 10];
                        break;
                    case 4096 >= r: a = [23, r - 3073, 10];
                        break;
                    case 6144 >= r: a = [24, r - 4097, 11];
                        break;
                    case 8192 >= r: a = [25, r - 6145, 11];
                        break;
                    case 12288 >= r: a = [26, r - 8193, 12];
                        break;
                    case 16384 >= r: a = [27, r - 12289, 12];
                        break;
                    case 24576 >= r: a = [28, r - 16385, 13];
                        break;
                    case 32768 >= r: a = [29, r - 24577, 13];
                        break;
                    default:
                        t("invalid distance")
                }
                for (n = a, s[h++] = n[0], s[h++] = n[1], s[h++] = n[2], r = 0, h = s.length; h > r; ++r) l[d++] = s[r];
                g[s[0]]++,
                    b[s[3]]++,
                    p = i.length + e - 1,
                    M = q
            }
            var r,
                s,
                h,
                a,
                c,
                M,
                u,
                f = {},
                l = E ? new Uint16Array(2 * e.length) : [],
                d = 0,
                p = 0,
                g = new(E ? Uint32Array: Array)(286),
                b = new(E ? Uint32Array: Array)(30),
                v = i.L;
            if (!E) {
                for (h = 0; 285 >= h;) g[h++] = 0;
                for (h = 0; 29 >= h;) b[h++] = 0
            }
            for (g[256] = 1, r = 0, s = e.length; s > r; ++r) {
                for (h = c = 0, a = 3; a > h && r + h !== s; ++h) c = c << 8 | e[r + h];
                if (f[c] === w && (f[c] = []), h = f[c], !(0 < p--)) {
                    for (; 0 < h.length && 32768 < r - h[0];) h.shift();
                    if (r + 3 >= s) {
                        for (M && n(M, -1), h = 0, a = s - r; a > h; ++h) u = e[r + h],
                            l[d++] = u,
                            ++g[u];
                        break
                    }
                    if (0 < h.length) {
                        c = a = w;
                        var y = 0,
                            x = w,
                            A = w,
                            T = x = w,
                            k = e.length,
                            A = 0,
                            T = h.length;
                        t: for (; T > A; A++) {
                            if (a = h[T - A - 1], x = 3, y > 3) {
                                for (x = y; x > 3; x--) if (e[a + x - 1] !== e[r + x - 1]) continue t;
                                x = y
                            }
                            for (; 258 > x && k > r + x && e[a + x] === e[r + x];)++x;
                            if (x > y && (c = a, y = x), 258 === x) break
                        }
                        a = new o(y, r - c),
                            M ? M.length < a.length ? (u = e[r - 1], l[d++] = u, ++g[u], n(a, 0)) : n(M, -1) : a.length < v ? M = a: n(a, 0)
                    } else M ? n(M, -1) : (u = e[r], l[d++] = u, ++g[u])
                }
                h.push(r)
            }
            return l[d++] = 256,
                g[256]++,
                i.XT = g,
                i.PT = b,
                E ? l.subarray(0, d) : l
        }
        function u(t, i) {
            function e(t) {
                var i = p[t][g[t]];
                i === M ? (e(t + 1), e(t + 1)) : --u[i],
                    ++g[t]
            }
            var n,
                r,
                h,
                a = t.length,
                o = new s(572),
                c = new(E ? Uint8Array: Array)(a);
            if (!E) for (r = 0; a > r; r++) c[r] = 0;
            for (r = 0; a > r; ++r) 0 < t[r] && o.push(r, t[r]);
            if (a = Array(o.length / 2), n = new(E ? Uint32Array: Array)(o.length / 2), 1 === a.length) return c[o.pop().index] = 1,
                c;
            for (r = 0, h = o.length / 2; h > r; ++r) a[r] = o.pop(),
                n[r] = a[r].value;
            var M = n.length;
            r = new(E ? Uint16Array: Array)(i);
            var o = new(E ? Uint8Array: Array)(i),
                u = new(E ? Uint8Array: Array)(M);
            h = Array(i);
            var f,
                l,
                d,
                p = Array(i),
                g = Array(i),
                b = (1 << i) - M,
                v = 1 << i - 1;
            for (r[i - 1] = M, f = 0; i > f; ++f) v > b ? o[f] = 0: (o[f] = 1, b -= v),
                b <<= 1,
                r[i - 2 - f] = (0 | r[i - 1 - f] / 2) + M;
            for (r[0] = o[0], h[0] = Array(r[0]), p[0] = Array(r[0]), f = 1; i > f; ++f) r[f] > 2 * r[f - 1] + o[f] && (r[f] = 2 * r[f - 1] + o[f]),
                h[f] = Array(r[f]),
                p[f] = Array(r[f]);
            for (b = 0; M > b; ++b) u[b] = i;
            for (v = 0; v < r[i - 1]; ++v) h[i - 1][v] = n[v],
                p[i - 1][v] = v;
            for (b = 0; i > b; ++b) g[b] = 0;
            for (1 === o[i - 1] && (--u[0], ++g[i - 1]), f = i - 2; f >= 0; --f) {
                for (l = b = 0, d = g[f + 1], v = 0; v < r[f]; v++) l = h[f + 1][d] + h[f + 1][d + 1],
                    l > n[b] ? (h[f][v] = l, p[f][v] = M, d += 2) : (h[f][v] = n[b], p[f][v] = b, ++b);
                g[f] = 0,
                1 === o[f] && e(f)
            }
            for (n = u, r = 0, h = a.length; h > r; ++r) c[a[r].index] = n[r];
            return c
        }
        function f(i) {
            var e,
                n,
                r,
                s = new(E ? Uint16Array: Array)(i.length),
                h = [],
                a = [],
                o = 0;
            for (e = 0, n = i.length; n > e; e++) h[i[e]] = (0 | h[i[e]]) + 1;
            for (e = 1, n = 16; n >= e; e++) a[e] = o,
                o += 0 | h[e],
            o > 1 << e && t("overcommitted"),
                o <<= 1;
            for (65536 > o && t("undercommitted"), e = 0, n = i.length; n > e; e++) for (o = a[i[e]], a[i[e]] += 1, h = s[e] = 0, r = i[e]; r > h; h++) s[e] = s[e] << 1 | 1 & o,
                o >>>= 1;
            return s
        }
        function l(t, i) {
            this.input = t,
                this.a = new(E ? Uint8Array: Array)(32768),
                this.tq = N.Py;
            var e,
                n = {}; ! i && (i = {}) || "number" != typeof i.rF || (this.tq = i.rF);
            for (e in i) n[e] = i[e];
            n.lz = this.a,
                this.e = new a(this.input, n)
        }
        function d(i, e) {
            switch (this.Qy = [], this.$y = 32768, this.ah = this.g = this.s = this.rz = 0, this.input = E ? new Uint8Array(i) : i, this.VG = r, this.dz = O, this.LH = r, (e || !(e = {})) && (e.index && (this.s = e.index), e.iF && (this.$y = e.iF), e.jF && (this.dz = e.jF), e.lu && (this.LH = e.lu)), this.dz) {
                case D:
                    this.b = 32768,
                        this.a = new(E ? Uint8Array: Array)(32768 + this.$y + 258);
                    break;
                case O:
                    this.b = 0,
                        this.a = new(E ? Uint8Array: Array)(this.$y),
                        this.Xh = this.OT,
                        this.vH = this.ET,
                        this.gz = this.IT;
                    break;
                default:
                    t(Error("invalid inflate mode"))
            }
        }
        function g(i, e) {
            for (var n, r = i.g, s = i.ah, h = i.input, a = i.s; e > s;) n = h[a++],
            n === w && t(Error("input buffer is broken")),
                r |= n << s,
                s += 8;
            return i.g = r >>> e,
                i.ah = s - e,
                i.s = a,
            r & (1 << e) - 1
        }
        function v(i, e) {
            for (var n, r = i.g, s = i.ah, h = i.input, a = i.s, o = e[0], c = e[1]; c > s;) n = h[a++],
            n === w && t(Error("input buffer is broken")),
                r |= n << s,
                s += 8;
            return h = o[r & (1 << c) - 1],
                o = h >>> 16,
                i.g = r >> o,
                i.ah = s - o,
                i.s = a,
            65535 & h
        }
        function y(t) {
            function i(t, i, e) {
                var n,
                    r,
                    s,
                    h;
                for (h = 0; t > h;) switch (n = v(this, i)) {
                    case 16:
                        for (s = 3 + g(this, 2); s--;) e[h++] = r;
                        break;
                    case 17:
                        for (s = 3 + g(this, 3); s--;) e[h++] = 0;
                        r = 0;
                        break;
                    case 18:
                        for (s = 11 + g(this, 7); s--;) e[h++] = 0;
                        r = 0;
                        break;
                    default:
                        r = e[h++] = n
                }
                return e
            }
            var e,
                n = g(t, 5) + 257,
                r = g(t, 5) + 1,
                s = g(t, 4) + 4,
                a = new(E ? Uint8Array: Array)(U.length);
            for (e = 0; s > e; ++e) a[U[e]] = g(t, 3);
            s = h(a),
                a = new(E ? Uint8Array: Array)(n),
                e = new(E ? Uint8Array: Array)(r),
                t.gz(h(i.call(t, n, s, a)), h(i.call(t, r, s, e)))
        }
        function x(i, e) {
            var n,
                r;
            switch (this.input = i, this.s = 0, (e || !(e = {})) && (e.index && (this.s = e.index), e.qS && (this.fU = e.qS)), n = i[this.s++], r = i[this.s++], 15 & n) {
                case V:
                    this.method = V;
                    break;
                default:
                    t(Error("unsupported compression method"))
            }
            0 !== ((n << 8) + r) % 31 && t(Error("invalid fcheck flag:" + ((n << 8) + r) % 31)),
            32 & r && t(Error("fdict flag is not supported")),
                this.CH = new d(i, {
                    index: this.s,
                    iF: e.iF,
                    jF: e.jF,
                    lu: e.lu
                })
        }
        var w = k,
            m = p,
            A = this,
            E = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array;
        n.prototype.Xh = function() {
            var t,
                i = this.buffer,
                e = i.length,
                n = new(E ? Uint8Array: Array)(e << 1);
            if (E) n.set(i);
            else for (t = 0; e > t; ++t) n[t] = i[t];
            return this.buffer = n
        },
            n.prototype.z = function(t, i, e) {
                var n = this.buffer,
                    r = this.index,
                    s = this.Ft,
                    h = n[r];
                if (e && i > 1 && (t = i > 8 ? (B[255 & t] << 24 | B[255 & t >>> 8] << 16 | B[255 & t >>> 16] << 8 | B[255 & t >>> 24]) >> 32 - i: B[t] >> 8 - i), 8 > i + s) h = h << i | t,
                    s += i;
                else for (e = 0; i > e; ++e) h = h << 1 | 1 & t >> i - e - 1,
                8 === ++s && (s = 0, n[r++] = B[h], h = 0, r === n.length && (n = this.Xh()));
                n[r] = h,
                    this.buffer = n,
                    this.Ft = s,
                    this.index = r
            },
            n.prototype.finish = function() {
                var t,
                    i = this.buffer,
                    e = this.index;
                return 0 < this.Ft && (i[e] <<= 8 - this.Ft, i[e] = B[i[e]], e++),
                    E ? t = i.subarray(0, e) : (i.length = e, t = i),
                    t
            };
        var T,
            R = new(E ? Uint8Array: Array)(256);
        for (T = 0; 256 > T; ++T) {
            for (var C = T, F = C, I = 7, C = C >>> 1; C; C >>>= 1) F <<= 1,
                F |= 1 & C,
                --I;
            R[T] = (255 & F << I) >>> 0
        }
        var B = R,
            R = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
        E && new Uint32Array(R),
            s.prototype.getParent = function(t) {
                return 2 * (0 | (t - 2) / 4)
            },
            s.prototype.push = function(t, i) {
                var e,
                    n,
                    r,
                    s = this.buffer;
                for (e = this.length, s[this.length++] = i, s[this.length++] = t; e > 0 && (n = this.getParent(e), s[e] > s[n]);) r = s[e],
                    s[e] = s[n],
                    s[n] = r,
                    r = s[e + 1],
                    s[e + 1] = s[n + 1],
                    s[n + 1] = r,
                    e = n;
                return this.length
            },
            s.prototype.pop = function() {
                var t,
                    i,
                    e,
                    n,
                    r,
                    s = this.buffer;
                for (i = s[0], t = s[1], this.length -= 2, s[0] = s[this.length], s[1] = s[this.length + 1], r = 0; (n = 2 * r + 2, !(n >= this.length)) && (n + 2 < this.length && s[n + 2] > s[n] && (n += 2), s[n] > s[r]);) e = s[r],
                    s[r] = s[n],
                    s[n] = e,
                    e = s[r + 1],
                    s[r + 1] = s[n + 1],
                    s[n + 1] = e,
                    r = n;
                return {
                    index: t,
                    value: i,
                    length: this.length
                }
            };
        var P = 2,
            R = {
                NONE: 0,
                r: 1,
                Py: P,
                z$: 3
            },
            S = [];
        for (T = 0; 288 > T; T++) switch (m) {
            case 143 >= T: S.push([T + 48, 8]);
                break;
            case 255 >= T: S.push([T - 144 + 400, 9]);
                break;
            case 279 >= T: S.push([T - 256 + 0, 7]);
                break;
            case 287 >= T: S.push([T - 280 + 192, 8]);
                break;
            default:
                t("invalid literal: " + T)
        }
        a.prototype.Gl = function() {
            var i,
                e,
                r,
                s,
                h = this.input;
            switch (this.tq) {
                case 0:
                    for (r = 0, s = h.length; s > r;) {
                        e = E ? h.subarray(r, r + 65535) : h.slice(r, r + 65535),
                            r += e.length;
                        var a = r === s,
                            o = w,
                            c = o = w,
                            c = o = w,
                            l = this.a,
                            d = this.b;
                        if (E) {
                            for (l = new Uint8Array(this.a.buffer); l.length <= d + e.length + 5;) l = new Uint8Array(l.length << 1);
                            l.set(this.a)
                        }
                        if (o = a ? 1: 0, l[d++] = 0 | o, o = e.length, c = 65535 & ~o + 65536, l[d++] = 255 & o, l[d++] = 255 & o >>> 8, l[d++] = 255 & c, l[d++] = 255 & c >>> 8, E) l.set(e, d),
                            d += e.length,
                            l = l.subarray(0, d);
                        else {
                            for (o = 0, c = e.length; c > o; ++o) l[d++] = e[o];
                            l.length = d
                        }
                        this.b = d,
                            this.a = l
                    }
                    break;
                case 1:
                    for (r = new n(new Uint8Array(this.a.buffer), this.b), r.z(1, 1, m), r.z(1, 2, m), h = M(this, h), e = 0, a = h.length; a > e; e++) if (s = h[e], n.prototype.z.apply(r, S[s]), s > 256) r.z(h[++e], h[++e], m),
                        r.z(h[++e], 5),
                        r.z(h[++e], h[++e], m);
                    else if (256 === s) break;
                    this.a = r.finish(),
                        this.b = this.a.length;
                    break;
                case P:
                    s = new n(new Uint8Array(this.a), this.b);
                    var p,
                        g,
                        b,
                        v,
                        y,
                        x,
                        A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                        o = Array(19),
                        l = P;
                    for (s.z(1, 1, m), s.z(l, 2, m), h = M(this, h), c = u(this.XT, 15), v = f(c), l = u(this.PT, 7), d = f(l), p = 286; p > 257 && 0 === c[p - 1]; p--);
                    for (g = 30; g > 1 && 0 === l[g - 1]; g--);
                    var q = p,
                        T = g;
                    i = new(E ? Uint32Array: Array)(q + T);
                    var k,
                        R,
                        C = new(E ? Uint32Array: Array)(316);
                    for (y = new(E ? Uint8Array: Array)(19), x = b = 0; q > x; x++) i[b++] = c[x];
                    for (x = 0; T > x; x++) i[b++] = l[x];
                    if (!E) for (x = 0, T = y.length; T > x; ++x) y[x] = 0;
                    for (x = k = 0, T = i.length; T > x; x += b) {
                        for (b = 1; T > x + b && i[x + b] === i[x]; ++b);
                        if (q = b, 0 === i[x]) if (3 > q) for (; 0 < q--;) C[k++] = 0,
                            y[0]++;
                        else for (; q > 0;) R = 138 > q ? q: 138,
                            R > q - 3 && q > R && (R = q - 3),
                                10 >= R ? (C[k++] = 17, C[k++] = R - 3, y[17]++) : (C[k++] = 18, C[k++] = R - 11, y[18]++),
                                q -= R;
                        else if (C[k++] = i[x], y[i[x]]++, q--, 3 > q) for (; 0 < q--;) C[k++] = i[x],
                            y[i[x]]++;
                        else for (; q > 0;) R = 6 > q ? q: 6,
                            R > q - 3 && q > R && (R = q - 3),
                                C[k++] = 16,
                                C[k++] = R - 3,
                                y[16]++,
                                q -= R
                    }
                    for (i = E ? C.subarray(0, k) : C.slice(0, k), y = u(y, 7), x = 0; 19 > x; x++) o[x] = y[A[x]];
                    for (b = 19; b > 4 && 0 === o[b - 1]; b--);
                    for (A = f(y), s.z(p - 257, 5, m), s.z(g - 1, 5, m), s.z(b - 4, 4, m), x = 0; b > x; x++) s.z(o[x], 3, m);
                    for (x = 0, o = i.length; o > x; x++) if (e = i[x], s.z(A[e], y[e], m), e >= 16) {
                        switch (x++, e) {
                            case 16:
                                a = 2;
                                break;
                            case 17:
                                a = 3;
                                break;
                            case 18:
                                a = 7;
                                break;
                            default:
                                t("invalid code: " + e)
                        }
                        s.z(i[x], a, m)
                    }
                    for (a = [v, c], d = [d, l], e = a[0], a = a[1], l = d[0], v = d[1], d = 0, o = h.length; o > d; ++d) if (r = h[d], s.z(e[r], a[r], m), r > 256) s.z(h[++d], h[++d], m),
                        c = h[++d],
                        s.z(l[c], v[c], m),
                        s.z(h[++d], h[++d], m);
                    else if (256 === r) break;
                    this.a = s.finish(),
                        this.b = this.a.length;
                    break;
                default:
                    t("invalid compression type")
            }
            return this.a
        },
            T = [];
        var j;
        for (j = 3; 258 >= j; j++) C = c(),
            T[j] = C[2] << 24 | C[1] << 16 | C[0];
        var L = E ? new Uint32Array(T) : T,
            N = R;
        l.prototype.Gl = function() {
            var i,
                n,
                r,
                s,
                h = 0;
            switch (s = this.a, i = V) {
                case V:
                    n = Math.LOG2E * Math.log(32768) - 8;
                    break;
                default:
                    t(Error("invalid compression method"))
            }
            switch (n = n << 4 | i, s[h++] = n, i) {
                case V:
                    switch (this.tq) {
                        case N.NONE:
                            r = 0;
                            break;
                        case N.r:
                            r = 1;
                            break;
                        case N.Py:
                            r = 2;
                            break;
                        default:
                            t(Error("unsupported compression type"))
                    }
                    break;
                default:
                    t(Error("invalid compression method"))
            }
            return i = 0 | r << 6,
                s[h++] = i | 31 - (256 * n + i) % 31,
                i = e(this.input),
                this.e.b = h,
                s = this.e.Gl(),
                h = s.length,
            E && (s = new Uint8Array(s.buffer), s.length <= h + 4 && (this.a = new Uint8Array(s.length + 4), this.a.set(s), s = this.a), s = s.subarray(0, h + 4)),
                s[h++] = 255 & i >> 24,
                s[h++] = 255 & i >> 16,
                s[h++] = 255 & i >> 8,
                s[h++] = 255 & i,
                s
        },
            i("Zlib.Deflate", l),
            i("Zlib.Deflate.compress",
                function(t, i) {
                    return new l(t, i).Gl()
                }),
            i("Zlib.Deflate.CompressionType", N),
            i("Zlib.Deflate.CompressionType.NONE", N.NONE),
            i("Zlib.Deflate.CompressionType.FIXED", N.r),
            i("Zlib.Deflate.CompressionType.DYNAMIC", N.Py);
        var D = 0,
            O = 1,
            R = {
                WS: D,
                IS: O
            };
        d.prototype.d = function() {
            for (; ! this.VG;) {
                var i = g(this, 3);
                switch (1 & i && (this.VG = m), i >>>= 1) {
                    case 0:
                        var i = this.input,
                            e = this.s,
                            n = this.a,
                            r = this.b,
                            s = w,
                            h = w,
                            a = w,
                            o = n.length,
                            s = w;
                        switch (this.ah = this.g = 0, s = i[e++], s === w && t(Error("invalid uncompressed block header: LEN (first byte)")), h = s, s = i[e++], s === w && t(Error("invalid uncompressed block header: LEN (second byte)")), h |= s << 8, s = i[e++], s === w && t(Error("invalid uncompressed block header: NLEN (first byte)")), a = s, s = i[e++], s === w && t(Error("invalid uncompressed block header: NLEN (second byte)")), a |= s << 8, h === ~a && t(Error("invalid uncompressed block header: length verify")), e + h > i.length && t(Error("input buffer is broken")), this.dz) {
                            case D:
                                for (; r + h > n.length;) {
                                    if (s = o - r, h -= s, E) n.set(i.subarray(e, e + s), r),
                                        r += s,
                                        e += s;
                                    else for (; s--;) n[r++] = i[e++];
                                    this.b = r,
                                        n = this.Xh(),
                                        r = this.b
                                }
                                break;
                            case O:
                                for (; r + h > n.length;) n = this.Xh({
                                    na: 2
                                });
                                break;
                            default:
                                t(Error("invalid inflate mode"))
                        }
                        if (E) n.set(i.subarray(e, e + h), r),
                            r += h,
                            e += h;
                        else for (; h--;) n[r++] = i[e++];
                        this.s = e,
                            this.b = r,
                            this.a = n;
                        break;
                    case 1:
                        this.gz(H, W);
                        break;
                    case 2:
                        y(this);
                        break;
                    default:
                        t(Error("unknown BTYPE: " + i))
                }
            }
            return this.vH()
        },
            T = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        var U = E ? new Uint16Array(T) : T;
        T = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
        var z = E ? new Uint16Array(T) : T;
        T = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
        var G = E ? new Uint8Array(T) : T;
        T = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
        var _ = E ? new Uint16Array(T) : T;
        T = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
        var Y = E ? new Uint8Array(T) : T;
        for (T = new(E ? Uint8Array: Array)(288), C = 0, F = T.length; F > C; ++C) T[C] = 143 >= C ? 8: 255 >= C ? 9: 279 >= C ? 7: 8;
        var H = h(T);
        for (T = new(E ? Uint8Array: Array)(30), C = 0, F = T.length; F > C; ++C) T[C] = 5;
        var W = h(T);
        for (d.prototype.gz = function(t, i) {
            var e = this.a,
                n = this.b;
            this.ma = t;
            for (var r, s, h, a = e.length - 258; 256 !== (r = v(this, t));) if (256 > r) n >= a && (this.b = n, e = this.Xh(), n = this.b),
                e[n++] = r;
            else for (r -= 257, h = z[r], 0 < G[r] && (h += g(this, G[r])), r = v(this, i), s = _[r], 0 < Y[r] && (s += g(this, Y[r])), n >= a && (this.b = n, e = this.Xh(), n = this.b); h--;) e[n] = e[n++-s];
            for (; 8 <= this.ah;) this.ah -= 8,
                this.s--;
            this.b = n
        },
                 d.prototype.IT = function(t, i) {
                     var e = this.a,
                         n = this.b;
                     this.ma = t;
                     for (var r, s, h, a = e.length; 256 !== (r = v(this, t));) if (256 > r) n >= a && (e = this.Xh(), a = e.length),
                         e[n++] = r;
                     else for (r -= 257, h = z[r], 0 < G[r] && (h += g(this, G[r])), r = v(this, i), s = _[r], 0 < Y[r] && (s += g(this, Y[r])), n + h > a && (e = this.Xh(), a = e.length); h--;) e[n] = e[n++-s];
                     for (; 8 <= this.ah;) this.ah -= 8,
                         this.s--;
                     this.b = n
                 },
                 d.prototype.Xh = function() {
                     var t,
                         i,
                         e = new(E ? Uint8Array: Array)(this.b - 32768),
                         n = this.b - 32768,
                         r = this.a;
                     if (E) e.set(r.subarray(32768, e.length));
                     else for (t = 0, i = e.length; i > t; ++t) e[t] = r[t + 32768];
                     if (this.Qy.push(e), this.rz += e.length, E) r.set(r.subarray(n, n + 32768));
                     else for (t = 0; 32768 > t; ++t) r[t] = r[n + t];
                     return this.b = 32768,
                         r
                 },
                 d.prototype.OT = function(t) {
                     var i,
                         e,
                         n,
                         r,
                         s = 0 | this.input.length / this.s + 1,
                         h = this.input,
                         a = this.a;
                     return t && ("number" == typeof t.na && (s = t.na), "number" == typeof t.zT && (s += t.zT)),
                         2 > s ? (e = (h.length - this.s) / this.ma[2], r = 0 | 258 * (e / 2), n = r < a.length ? a.length + r: a.length << 1) : n = a.length * s,
                         E ? (i = new Uint8Array(n), i.set(a)) : i = a,
                         this.a = i
                 },
                 d.prototype.vH = function() {
                     var t,
                         i,
                         e,
                         n,
                         r,
                         s = 0,
                         h = this.a,
                         a = this.Qy,
                         o = new(E ? Uint8Array: Array)(this.rz + (this.b - 32768));
                     if (0 === a.length) return E ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
                     for (i = 0, e = a.length; e > i; ++i) for (t = a[i], n = 0, r = t.length; r > n; ++n) o[s++] = t[n];
                     for (i = 32768, e = this.b; e > i; ++i) o[s++] = h[i];
                     return this.Qy = [],
                         this.buffer = o
                 },
                 d.prototype.ET = function() {
                     var t,
                         i = this.b;
                     return E ? this.LH ? (t = new Uint8Array(i), t.set(this.a.subarray(0, i))) : t = this.a.subarray(0, i) : (this.a.length > i && (this.a.length = i), t = this.a),
                         this.buffer = t
                 },
                 x.prototype.d = function() {
                     var i,
                         n,
                         r = this.input;
                     return i = this.CH.d(),
                         this.s = this.CH.s,
                     this.fU && (n = (r[this.s++] << 24 | r[this.s++] << 16 | r[this.s++] << 8 | r[this.s++]) >>> 0, n !== e(i) && t(Error("invalid adler-32 checksum"))),
                         i
                 },
                 i("Zlib.Inflate", x), i("Zlib.Inflate.BufferType", R), R.L8 = R.IS, R.f9 = R.WS, i("Zlib.Inflate.prototype.decompress", x.prototype.d), R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], E && new Uint16Array(R), R = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258], E && new Uint16Array(R), R = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0], E && new Uint8Array(R), R = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], E && new Uint16Array(R), R = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], E && new Uint8Array(R), R = new(E ? Uint8Array: Array)(288), T = 0, C = R.length; C > T; ++T) R[T] = 143 >= T ? 8: 255 >= T ? 9: 279 >= T ? 7: 8;
        for (h(R), R = new(E ? Uint8Array: Array)(30), T = 0, C = R.length; C > T; ++T) R[T] = 5;
        h(R);
        var V = 8
    }.call(this), T = window, T = T.Caa = T.Zlib, T.ZH = T.Deflate, T.ZH.Cca = T.ZH.compress, T.io = T.Inflate, T.io.t9 = T.io.BufferType, T.io.prototype.IO = T.io.prototype.decompress, M.GU = M.xa.extend({
    ctor: function(t) {
        var i,
            e,
            n,
            r;
        for (this.data = t, this.hb = 8, this.KG = [], this.Hy = [], this.Vn = {},
                 this.dF = q, this.text = {},
                 n = q;;) {
            for (i = this.lk(), r = t = k, r = [], t = 0; 4 > t; ++t) r.push(String.fromCharCode(this.data[this.hb++]));
            switch (t = r.join("")) {
                case "IHDR":
                    this.width = this.lk(),
                        this.height = this.lk(),
                        this.Up = this.data[this.hb++],
                        this.pF = this.data[this.hb++],
                        this.Dca = this.data[this.hb++],
                        this.Wda = this.data[this.hb++],
                        this.Wga = this.data[this.hb++];
                    break;
                case "acTL":
                    this.dF = {
                        Jja: this.lk(),
                        Kja: this.lk() || 1 / 0,
                        frames: []
                    };
                    break;
                case "PLTE":
                    this.KG = this.eu(i);
                    break;
                case "fcTL":
                    n && this.dF.frames.push(n),
                        this.hb += 4,
                        n = {
                            width: this.lk(),
                            height: this.lk(),
                            uS: this.lk(),
                            vS: this.lk()
                        },
                        t = this.QQ(),
                        i = this.QQ() || 100,
                        n.Oca = 1e3 * t / i,
                        n.ada = this.data[this.hb++],
                        n.nca = this.data[this.hb++],
                        n.data = [];
                    break;
                case "IDAT":
                case "fdAT":
                    for ("fdAT" === t && (this.hb += 4, i -= 4), t = (n != q ? n.data: k) || this.Hy, r = 0; i >= 0 ? i > r: r > i; i >= 0 ? ++r: --r) t.push(this.data[this.hb++]);
                    break;
                case "tRNS":
                    switch (this.Vn = {},
                        this.pF) {
                        case 3:
                            if (this.Vn.jG = this.eu(i), i = 255 - this.Vn.jG.length, i > 0) for (t = 0; i >= 0 ? i > t: t > i; i >= 0 ? ++t: --t) this.Vn.jG.push(255);
                            break;
                        case 0:
                            this.Vn.Nga = this.eu(i)[0];
                            break;
                        case 2:
                            this.Vn.jla = this.eu(i)
                    }
                    break;
                case "tEXt":
                    r = this.eu(i),
                        i = r.indexOf(0),
                        t = String.fromCharCode.apply(String, r.slice(0, i)),
                        this.text[t] = String.fromCharCode.apply(String, r.slice(i + 1));
                    break;
                case "IEND":
                    n && this.dF.frames.push(n);
                    t: {
                        switch (this.pF) {
                            case 0:
                            case 3:
                            case 4:
                                n = 1;
                                break t;
                            case 2:
                            case 6:
                                n = 3;
                                break t
                        }
                        n = k
                    }
                    this.A = n,
                        this.QP = 4 === (e = this.pF) || 6 === e,
                        e = this.A + (this.QP ? 1: 0),
                        this.H5 = this.Up * e;
                    t: {
                        switch (this.A) {
                            case 1:
                                e = "DeviceGray";
                                break t;
                            case 3:
                                e = "DeviceRGB";
                                break t
                        }
                        e = k
                    }
                    return this.zca = e,
                    Uint8Array != Array && (this.Hy = new Uint8Array(this.Hy)),
                        void 0;
                default:
                    this.hb += i
            }
            this.hb += 4,
            this.hb > this.data.length && b(Error("Incomplete or corrupt PNG file"))
        }
    },
    eu: function(t) {
        var i,
            e;
        for (e = [], i = 0; t >= 0 ? t > i: i > t; t >= 0 ? ++i: --i) e.push(this.data[this.hb++]);
        return e
    },
    lk: function() {
        var t,
            i,
            e,
            n;
        return t = this.data[this.hb++] << 24,
            i = this.data[this.hb++] << 16,
            e = this.data[this.hb++] << 8,
            n = this.data[this.hb++],
        t | i | e | n
    },
    QQ: function() {
        var t,
            i;
        return t = this.data[this.hb++] << 8,
            i = this.data[this.hb++],
        t | i
    },
    B1: function(t) {
        var i,
            e,
            n,
            s,
            h,
            a,
            o,
            c,
            M,
            u,
            f,
            l,
            d,
            p,
            g;
        if (t == q && (t = this.Hy), 0 === t.length) return new Uint8Array(0);
        for (t = new Zlib.io(t, {
            index: 0,
            qS: r
        }).IO(), c = this.H5 / 8, l = c * this.width, M = new Uint8Array(l * this.height), a = t.length, e = u = f = 0; a > u;) {
            switch (t[u++]) {
                case 0:
                    for (i = 0; l > i; i += 1) M[e++] = t[u++];
                    break;
                case 1:
                    for (s = d = 0; l > d; s = d += 1) i = t[u++],
                        h = c > s ? 0: M[e - c],
                        M[e++] = (i + h) % 256;
                    break;
                case 2:
                    for (s = h = 0; l > h; s = h += 1) i = t[u++],
                        n = (s - s % c) / c,
                        d = f && M[(f - 1) * l + n * c + s % c],
                        M[e++] = (d + i) % 256;
                    break;
                case 3:
                    for (s = g = 0; l > g; s = g += 1) i = t[u++],
                        n = (s - s % c) / c,
                        h = c > s ? 0: M[e - c],
                        d = f && M[(f - 1) * l + n * c + s % c],
                        M[e++] = (i + Math.floor((h + d) / 2)) % 256;
                    break;
                case 4:
                    for (s = g = 0; l > g; s = g += 1) i = t[u++],
                        n = (s - s % c) / c,
                        h = c > s ? 0: M[e - c],
                        0 === f ? d = p = 0: (d = M[(f - 1) * l + n * c + s % c], p = n && M[(f - 1) * l + (n - 1) * c + s % c]),
                        o = h + d - p,
                        s = Math.abs(o - h),
                        n = Math.abs(o - d),
                        o = Math.abs(o - p),
                        h = n >= s && o >= s ? h: o >= n ? d: p,
                        M[e++] = (i + h) % 256;
                    break;
                default:
                    b(Error("Invalid filter algorithm: " + t[u - 1]))
            }
            f++
        }
        return M
    },
    z1: function(t, i) {
        var e,
            n,
            r,
            s,
            h,
            a,
            o,
            c;
        if (n = this.A, c = q, e = this.QP, this.KG.length && (c = (r = this.OX) != q ? r: this.OX = this.A1(), n = 4, e = p), r = t.data || t, o = r.length, h = c || i, s = a = 0, 1 === n) for (; o > s;) n = c ? 4 * i[s / 4] : a,
            a = h[n++],
            r[s++] = a,
            r[s++] = a,
            r[s++] = a,
            r[s++] = e ? h[n++] : 255,
            a = n;
        else for (; o > s;) n = c ? 4 * i[s / 4] : a,
            r[s++] = h[n++],
            r[s++] = h[n++],
            r[s++] = h[n++],
            r[s++] = e ? h[n++] : 255,
            a = n
    },
    A1: function() {
        var t,
            i,
            e,
            n,
            r,
            s,
            h,
            a,
            o;
        for (e = this.KG, s = this.Vn.jG || [], r = new Uint8Array((s.length || 0) + e.length), i = h = t = n = 0, a = e.length; a > h; i = h += 3) r[n++] = e[i],
            r[n++] = e[i + 1],
            r[n++] = e[i + 2],
            r[n++] = (o = s[t++]) != q ? o: 255;
        return r
    },
    l6: function(t) {
        var i;
        return t.width = this.width,
            t.height = this.height,
            t = t.getContext("2d"),
            i = t.createImageData(this.width, this.height),
            this.z1(i, this.B1()),
            t.putImageData(i, 0, 0)
    }
}), M.m8 = {
    GM: r,
    bn: q,
    AC: [],
    getUint8: function(t) {
        return this.bn[t]
    },
    getUint16: function(t) {
        return this.GM ? this.bn[t + 1] << 8 | this.bn[t] : this.bn[t] << 8 | this.bn[t + 1]
    },
    getUint32: function(t) {
        var i = this.bn;
        return this.GM ? i[t + 3] << 24 | i[t + 2] << 16 | i[t + 1] << 8 | i[t] : i[t] << 24 | i[t + 1] << 16 | i[t + 2] << 8 | i[t + 3]
    },
    q1: function() {
        var t = this.getUint16(0);
        return 18761 === t ? this.FG = p: 19789 === t ? this.FG = r: (console.log(t), b(TypeError("Invalid byte order value."))),
            this.FG
    },
    U3: function() {
        return 42 !== this.getUint16(2) && b(RangeError("You forgot your towel!")),
            p
    },
    P2: function(t) {
        var i = this.o2;
        return t in i ? i[t] : q
    },
    N2: function(t) {
        var i = this.n2;
        return t in i ? i[t] : (console.log("Unknown Field Tag:", t), "Tag" + t)
    },
    O2: function(t) {
        return - 1 !== ["BYTE", "ASCII", "SBYTE", "UNDEFINED"].indexOf(t) ? 1: -1 !== ["SHORT", "SSHORT"].indexOf(t) ? 2: -1 !== ["LONG", "SLONG", "FLOAT"].indexOf(t) ? 4: -1 !== ["RATIONAL", "SRATIONAL", "DOUBLE"].indexOf(t) ? 8: q
    },
    Q2: function(t, i, e, n) {
        t = [];
        var s = this.O2(i);
        if (4 >= s * e) this.FG === r ? t.push(n >>> 8 * (4 - s)) : t.push(n);
        else for (var h = 0; e > h; h++) {
            var a = s * h;
            s >= 8 ? -1 !== ["RATIONAL", "SRATIONAL"].indexOf(i) ? (t.push(this.getUint32(n + a)), t.push(this.getUint32(n + a + 4))) : M.log("Can't handle this field type or size") : t.push(this.lP(s, n + a))
        }
        return "ASCII" === i && t.forEach(function(t, i, e) {
            e[i] = String.fromCharCode(t)
        }),
            t
    },
    lP: function(t, i) {
        if (0 >= t) M.log("No bytes requested");
        else {
            if (1 >= t) return this.getUint8(i);
            if (2 >= t) return this.getUint16(i);
            if (3 >= t) return this.getUint32(i) >>> 8;
            if (4 >= t) return this.getUint32(i);
            M.log("Too many bytes requested")
        }
    },
    y2: function(t, i, e) {
        e = e || 0,
            i += Math.floor(e / 8);
        var n = e + t;
        t = 32 - t;
        var r,
            s;
        return 0 >= n ? console.log("No bits requested") : 8 >= n ? (r = 24 + e, s = this.getUint8(i)) : 16 >= n ? (r = 16 + e, s = this.getUint16(i)) : 32 >= n ? (r = e, s = this.getUint32(i)) : console.log("Too many bits requested"),
        {
            bits: s << r >>> t,
            byteOffset: i + Math.floor(n / 8),
            bitOffset: n % 8
        }
    },
    MQ: function(t) {
        var i = this.getUint16(t),
            e = [];
        t += 2;
        for (var n = 0; i > n; t += 12, n++) {
            var r = this.getUint16(t),
                s = this.getUint16(t + 2),
                h = this.getUint32(t + 4),
                a = this.getUint32(t + 8),
                r = this.N2(r),
                s = this.P2(s),
                h = this.Q2(r, s, h, a);
            e[r] = {
                type: s,
                ii: h
            }
        }
        this.AC.push(e),
            i = this.getUint32(t),
        0 !== i && this.MQ(i)
    },
    tn: function(t, i) {
        var e = Math.pow(2, 8 - i);
        return Math.floor(t * e + (e - 1))
    },
    C5: function(t, i) {
        if (i = i || M.Wb("canvas"), this.bn = t, this.canvas = i, this.q1(), this.U3()) {
            var e = this.getUint32(4);
            this.AC.length = 0,
                this.MQ(e);
            var n = this.AC[0],
                e = n.ImageWidth.ii[0],
                s = n.ImageLength.ii[0];
            this.canvas.width = e,
                this.canvas.height = s;
            var h = [],
                a = n.Compression ? n.Compression.ii[0] : 1,
                o = n.SamplesPerPixel.ii[0],
                c = [],
                u = 0,
                f = r;
            if (n.BitsPerSample.ii.forEach(function(t, i) {
                        c[i] = {
                            Vp: t,
                            Dy: r,
                            qt: k
                        },
                        0 === t % 8 && (c[i].Dy = p, c[i].qt = t / 8),
                            u += t
                    },
                    this), 0 === u % 8) var f = p,
                l = u / 8;
            var d = n.StripOffsets.ii,
                g = d.length;
            if (n.StripByteCounts) var v = n.StripByteCounts.ii;
            else M.log("Missing StripByteCounts!"),
                1 === g ? v = [Math.ceil(e * s * u / 8)] : b(Error("Cannot recover from missing StripByteCounts"));
            for (var y = 0; g > y; y++) {
                var x = d[y];
                h[y] = [];
                for (var w = v[y], m = 0, A = 0, E = 1, q = p, T = [], R = 0, C = 0, F = 0; w > m; m += E) switch (a) {
                    case 1:
                        for (E = 0, T = []; o > E; E++) c[E].Dy ? T.push(this.lP(c[E].qt, x + m + c[E].qt * E)) : (A = this.y2(c[E].Vp, x + m, A), T.push(A.Up), m = A.byteOffset - x, A = A.lca, b(RangeError("Cannot handle sub-byte bits per sample")));
                        h[y].push(T),
                            f ? E = l: (E = 0, b(RangeError("Cannot handle sub-byte bits per pixel")));
                        break;
                    case 32773:
                        if (q) {
                            var q = r,
                                I = 1,
                                B = 1,
                                E = this.getInt8(x + m);
                            E >= 0 && 127 >= E ? I = E + 1: E >= -127 && -1 >= E ? B = -E + 1: q = p
                        } else {
                            for (var P = this.getUint8(x + m), E = 0; B > E; E++) c[C].Dy ? (F = F << 8 * R | P, R++, R === c[C].qt && (T.push(F), F = R = 0, C++)) : b(RangeError("Cannot handle sub-byte bits per sample")),
                            C === o && (h[y].push(T), T = [], C = 0);
                            I--,
                            0 === I && (q = p)
                        }
                        E = 1
                }
            }
            if (i.getContext) {
                if (l = this.canvas.getContext("2d"), l.fillStyle = "rgba(255, 255, 255, 0)", y = n.RowsPerStrip ? n.RowsPerStrip.ii[0] : s, v = h.length, s %= y, s = 0 === s ? y: s, I = y, f = 0, B = n.PhotometricInterpretation.ii[0], a = [], o = 0, n.ExtraSamples && (a = n.ExtraSamples.ii, o = a.length), n.ColorMap) var S = n.ColorMap.ii,
                    j = Math.pow(2, c[0].Vp);
                for (y = 0; v > y; y++) {
                    for (y + 1 === v && (I = s), n = h[y].length, f *= y, g = d = 0; n > g; d++) for (x = 0; e > x; x++, g++) {
                        if (T = h[y][g], R = m = w = 0, q = 1, o > 0) for (C = 0; o > C; C++) if (1 === a[C] || 2 === a[C]) {
                            q = T[3 + C] / 256;
                            break
                        }
                        switch (B) {
                            case 0:
                                if (c[0].Dy) var L = Math.pow(16, 2 * c[0].qt);
                                T.forEach(function(t, i, e) {
                                    e[i] = L - t
                                });
                            case 1:
                                w = m = R = this.tn(T[0], c[0].Vp);
                                break;
                            case 2:
                                w = this.tn(T[0], c[0].Vp),
                                    m = this.tn(T[1], c[1].Vp),
                                    R = this.tn(T[2], c[2].Vp);
                                break;
                            case 3:
                                S === k && b(Error("Palette image missing color map")),
                                    T = T[0],
                                    w = this.tn(S[T], 16),
                                    m = this.tn(S[j + T], 16),
                                    R = this.tn(S[2 * j + T], 16);
                                break;
                            default:
                                b(RangeError("Unknown Photometric Interpretation:", B))
                        }
                        l.fillStyle = "rgba(" + w + ", " + m + ", " + R + ", " + q + ")",
                            l.fillRect(x, f + d, 1, 1)
                    }
                    f = I
                }
            }
            return this.canvas
        }
    },
    n2: {
        315: "Artist",
        258: "BitsPerSample",
        265: "CellLength",
        264: "CellWidth",
        320: "ColorMap",
        259: "Compression",
        33432: "Copyright",
        306: "DateTime",
        338: "ExtraSamples",
        266: "FillOrder",
        289: "FreeByteCounts",
        288: "FreeOffsets",
        291: "GrayResponseCurve",
        290: "GrayResponseUnit",
        316: "HostComputer",
        270: "ImageDescription",
        257: "ImageLength",
        256: "ImageWidth",
        271: "Make",
        281: "MaxSampleValue",
        280: "MinSampleValue",
        272: "Model",
        254: "NewSubfileType",
        274: "Orientation",
        262: "PhotometricInterpretation",
        284: "PlanarConfiguration",
        296: "ResolutionUnit",
        278: "RowsPerStrip",
        277: "SamplesPerPixel",
        305: "Software",
        279: "StripByteCounts",
        273: "StripOffsets",
        255: "SubfileType",
        263: "Threshholding",
        282: "XResolution",
        283: "YResolution",
        326: "BadFaxLines",
        327: "CleanFaxData",
        343: "ClipPath",
        328: "ConsecutiveBadFaxLines",
        433: "Decode",
        434: "DefaultImageColor",
        269: "DocumentName",
        336: "DotRange",
        321: "HalftoneHints",
        346: "Indexed",
        347: "JPEGTables",
        285: "PageName",
        297: "PageNumber",
        317: "Predictor",
        319: "PrimaryChromaticities",
        532: "ReferenceBlackWhite",
        339: "SampleFormat",
        559: "StripRowCounts",
        330: "SubIFDs",
        292: "T4Options",
        293: "T6Options",
        325: "TileByteCounts",
        323: "TileLength",
        324: "TileOffsets",
        322: "TileWidth",
        301: "TransferFunction",
        318: "WhitePoint",
        344: "XClipPathUnits",
        286: "XPosition",
        529: "YCbCrCoefficients",
        531: "YCbCrPositioning",
        530: "YCbCrSubSampling",
        345: "YClipPathUnits",
        287: "YPosition",
        37378: "ApertureValue",
        40961: "ColorSpace",
        36868: "DateTimeDigitized",
        36867: "DateTimeOriginal",
        34665: "Exif IFD",
        36864: "ExifVersion",
        33434: "ExposureTime",
        41728: "FileSource",
        37385: "Flash",
        40960: "FlashpixVersion",
        33437: "FNumber",
        42016: "ImageUniqueID",
        37384: "LightSource",
        37500: "MakerNote",
        37377: "ShutterSpeedValue",
        37510: "UserComment",
        33723: "IPTC",
        34675: "ICC Profile",
        700: "XMP",
        42112: "GDAL_METADATA",
        42113: "GDAL_NODATA",
        34377: "Photoshop"
    },
    o2: {
        1: "BYTE",
        2: "ASCII",
        3: "SHORT",
        4: "LONG",
        5: "RATIONAL",
        6: "SBYTE",
        7: "UNDEFINED",
        8: "SSHORT",
        9: "SLONG",
        10: "SRATIONAL",
        11: "FLOAT",
        12: "DOUBLE"
    }
},
    M.Bg = function(t, i, e, n, s, h, a, o, c, u, f, l) {
        this.hb = t ? t: M.d(0, 0),
            this.Qz = i ? i: M.d(0, 0),
            this.color = e ? e: {
                r: 0,
                g: 0,
                b: 0,
                a: 255
            },
            this.wt = n ? n: {
                r: 0,
                g: 0,
                b: 0,
                a: 255
            },
            this.size = s || 0,
            this.wF = h || 0,
            this.rotation = a || 0,
            this.OO = o || 0,
            this.Ul = c || 0,
            this.atlasIndex = u || 0,
            this.dc = f ? f: new M.Bg.IA,
            this.Zd = l ? l: new M.Bg.JA,
            this.sG = r,
            this.Xj = M.d(0, 0)
    },
    M.Bg.IA = function(t, i, e) {
        this.dir = t ? t: M.d(0, 0),
            this.radialAccel = i || 0,
            this.tangentialAccel = e || 0
    },
    M.Bg.JA = function(t, i, e, n) {
        this.Zg = t || 0,
            this.KO = i || 0,
            this.du = e || 0,
            this.NO = n || 0
    },
    M.Bg.Kv = [M.d(), M.d(), M.d(), M.d()], M.o = M.n.extend({
    wD: "",
    tb: 0,
    eL: r,
    dc: q,
    Zd: q,
    Hb: "ParticleSystem",
    CD: M.d(0, 0),
    Ej: q,
    ym: 0,
    Ue: 0,
    ba: q,
    atlasIndex: 0,
    dn: r,
    bw: 0,
    ky: q,
    Pz: q,
    jp: r,
    Ad: 0,
    duration: 0,
    yp: q,
    dl: q,
    ff: 0,
    zq: 0,
    Zg: 0,
    Sp: 0,
    Qq: 0,
    Rq: 0,
    zn: 0,
    cq: 0,
    ll: q,
    ml: q,
    Se: q,
    Qk: q,
    Sq: 0,
    Tq: 0,
    dq: 0,
    eq: 0,
    yn: 0,
    wb: 0,
    F: q,
    q: q,
    kb: r,
    dj: q,
    pt: r,
    Oa: 0,
    Rc: q,
    ub: q,
    gc: q,
    Nm: q,
    Aa: q,
    ud: q,
    ctor: function(t) {
        M.n.prototype.ctor.call(this),
            this.Oa = M.o.qb,
            this.dc = new M.o.IA,
            this.Zd = new M.o.JA,
            this.q = {
                src: M.pc,
                I: M.oc
            },
            this.Ej = [],
            this.yp = M.d(0, 0),
            this.dl = M.d(0, 0),
            this.ll = M.color(255, 255, 255, 255),
            this.ml = M.color(255, 255, 255, 255),
            this.Se = M.color(255, 255, 255, 255),
            this.Qk = M.color(255, 255, 255, 255),
            this.wD = "",
            this.tb = 0,
            this.eL = r,
            this.CD = M.d(0, 0),
            this.Ue = this.ym = 0,
            this.ba = q,
            this.atlasIndex = 0,
            this.dn = r,
            this.bw = 0,
            this.ky = M.o.eJ,
            this.Pz = M.o.MH,
            this.jp = r,
            this.wb = this.yn = this.eq = this.dq = this.Tq = this.Sq = this.cq = this.zn = this.Rq = this.Qq = this.Sp = this.Zg = this.zq = this.ff = this.duration = this.Ad = 0,
            this.F = q,
            this.kb = r,
            this.dj = M.o.Jr,
            this.pt = r,
            this.gc = [0, 0],
            this.Rc = [],
            this.ub = [],
            this.Nm = M.rect(0, 0, 0, 0),
            this.Aa = p,
        M.B === M.Z && (this.ud = q),
            !t || M.Kt(t) ? (t = t || 100, this.N6(M.o.oB), this.bc(t)) : t && this.Ac(t)
    },
    Vd: function() {
        this.$ = M.B === M.ya ? new M.NI(this) : new M.OI(this)
    },
    kG: function() {
        for (var t = this.ub, i = 0, e = this.wb; e > i; ++i) {
            var n = 6 * i,
                r = 4 * i;
            t[n + 0] = r + 0,
                t[n + 1] = r + 1,
                t[n + 2] = r + 2,
                t[n + 5] = r + 1,
                t[n + 4] = r + 2,
                t[n + 3] = r + 3
        }
    },
    TP: function(t) {
        var i = M.zb(),
            e = M.rect(t.x * i, t.y * i, t.width * i, t.height * i),
            n = t.width,
            r = t.height;
        if (this.F && (n = this.F.pixelsWidth, r = this.F.pixelsHeight), M.B !== M.ya) {
            M.fo ? (t = (2 * e.x + 1) / (2 * n), i = (2 * e.y + 1) / (2 * r), n = t + (2 * e.width - 2) / (2 * n), e = i + (2 * e.height - 2) / (2 * r)) : (t = e.x / n, i = e.y / r, n = t + e.width / n, e = i + e.height / r);
            var r = e,
                e = i,
                i = r,
                s = 0,
                h = 0;
            for (this.ba ? (r = this.ba.textureAtlas.quads, s = this.atlasIndex, h = this.atlasIndex + this.wb) : (r = this.Rc, s = 0, h = this.wb); h > s; s++) {
                r[s] || (r[s] = M.fK());
                var a = r[s];
                a.J.p.ma = t,
                    a.J.p.na = i,
                    a.V.p.ma = n,
                    a.V.p.na = i,
                    a.U.p.ma = t,
                    a.U.p.na = e,
                    a.N.p.ma = n,
                    a.N.p.na = e
            }
        }
    },
    MF: E("ba"),
    Pl: function(t) {
        if (this.ba != t) {
            var i = this.ba;
            if (this.ba = t) for (var e = this.Ej, n = 0; n < this.wb; n++) e[n].atlasIndex = n;
            t ? i || (this.ba.textureAtlas.JX(this.Rc, this.atlasIndex), M.l.deleteBuffer(this.gc[1])) : (this.xK(), this.kG(), this.bb(i.Ja()), this.Xm())
        }
    },
    kq: E("atlasIndex"),
    ZG: A("atlasIndex"),
    Gea: E("ky"),
    N6: function(t) {
        this.ky = t,
        this.$ && (this.$.Vaa = t)
    },
    $fa: E("Pz"),
    Pma: function(t) {
        this.Pz = t,
        this.$ && (this.$.Cba = t)
    },
    bk: E("jp"),
    Hfa: E("Ad"),
    Dma: A("Ad"),
    mq: E("duration"),
    mg: A("duration"),
    D3: function() {
        return {
            x: this.yp.x,
            y: this.yp.y
        }
    },
    o7: A("yp"),
    WF: function() {
        return {
            x: this.dl.x,
            y: this.dl.y
        }
    },
    qh: A("dl"),
    lfa: E("ff"),
    oh: A("ff"),
    mfa: E("zq"),
    ph: A("zq"),
    eea: E("Zg"),
    jh: A("Zg"),
    fea: E("Sp"),
    kh: A("Sp"),
    sP: function() {
        this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.getGravity() : Particle Mode should be Gravity");
        var t = this.dc.gravity;
        return M.d(t.x, t.y)
    },
    og: function(t) {
        this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.setGravity() : Particle Mode should be Gravity"),
            this.dc.gravity = t
    },
    ty: function() {
        return this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.getSpeed() : Particle Mode should be Gravity"),
            this.dc.speed
    },
    hf: function(t) {
        this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.setSpeed() : Particle Mode should be Gravity"),
            this.dc.speed = t
    },
    EP: function() {
        return this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.getSpeedVar() : Particle Mode should be Gravity"),
            this.dc.speedVar
    },
    rg: function(t) {
        this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.setSpeedVar() : Particle Mode should be Gravity"),
            this.dc.speedVar = t
    },
    JP: function() {
        return this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.getTangentialAccel() : Particle Mode should be Gravity"),
            this.dc.tangentialAccel
    },
    nk: function(t) {
        this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.setTangentialAccel() : Particle Mode should be Gravity"),
            this.dc.tangentialAccel = t
    },
    KP: function() {
        return this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.getTangentialAccelVar() : Particle Mode should be Gravity"),
            this.dc.tangentialAccelVar
    },
    ok: function(t) {
        this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.setTangentialAccelVar() : Particle Mode should be Gravity"),
            this.dc.tangentialAccelVar = t
    },
    xP: function() {
        return this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.getRadialAccel() : Particle Mode should be Gravity"),
            this.dc.radialAccel
    },
    pg: function(t) {
        this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.setRadialAccel() : Particle Mode should be Gravity"),
            this.dc.radialAccel = t
    },
    yP: function() {
        return this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.getRadialAccelVar() : Particle Mode should be Gravity"),
            this.dc.radialAccelVar
    },
    qg: function(t) {
        this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.setRadialAccelVar() : Particle Mode should be Gravity"),
            this.dc.radialAccelVar = t
    },
    v3: function() {
        return this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.getRotationIsDir() : Particle Mode should be Gravity"),
            this.dc.rotationIsDir
    },
    j7: function(t) {
        this.Oa !== M.o.qb && M.log("cc.ParticleBatchNode.setRotationIsDir() : Particle Mode should be Gravity"),
            this.dc.rotationIsDir = t
    },
    HP: function() {
        return this.Oa !== M.o.mf && M.log("cc.ParticleBatchNode.getStartRadius() : Particle Mode should be Radius"),
            this.Zd.startRadius
    },
    JR: function(t) {
        this.Oa !== M.o.mf && M.log("cc.ParticleBatchNode.setStartRadius() : Particle Mode should be Radius"),
            this.Zd.startRadius = t
    },
    IP: function() {
        return this.Oa !== M.o.mf && M.log("cc.ParticleBatchNode.getStartRadiusVar() : Particle Mode should be Radius"),
            this.Zd.startRadiusVar
    },
    KR: function(t) {
        this.Oa !== M.o.mf && M.log("cc.ParticleBatchNode.setStartRadiusVar() : Particle Mode should be Radius"),
            this.Zd.startRadiusVar = t
    },
    pP: function() {
        return this.Oa !== M.o.mf && M.log("cc.ParticleBatchNode.getEndRadius() : Particle Mode should be Radius"),
            this.Zd.endRadius
    },
    pR: function(t) {
        this.Oa !== M.o.mf && M.log("cc.ParticleBatchNode.setEndRadius() : Particle Mode should be Radius"),
            this.Zd.endRadius = t
    },
    qP: function() {
        return this.Oa !== M.o.mf && M.log("cc.ParticleBatchNode.getEndRadiusVar() : Particle Mode should be Radius"),
            this.Zd.endRadiusVar
    },
    qR: function(t) {
        this.Oa !== M.o.mf && M.log("cc.ParticleBatchNode.setEndRadiusVar() : Particle Mode should be Radius"),
            this.Zd.endRadiusVar = t
    },
    zP: function() {
        return this.Oa !== M.o.mf && M.log("cc.ParticleBatchNode.getRotatePerSecond() : Particle Mode should be Radius"),
            this.Zd.yz
    },
    FR: function(t) {
        this.Oa !== M.o.mf && M.log("cc.ParticleBatchNode.setRotatePerSecond() : Particle Mode should be Radius"),
            this.Zd.yz = t
    },
    AP: function() {
        return this.Oa !== M.o.mf && M.log("cc.ParticleBatchNode.getRotatePerSecondVar() : Particle Mode should be Radius"),
            this.Zd.zz
    },
    GR: function(t) {
        this.Oa !== M.o.mf && M.log("cc.ParticleBatchNode.setRotatePerSecondVar() : Particle Mode should be Radius"),
            this.Zd.zz = t
    },
    Pd: function(t, i) {
        this.dn = p,
            M.n.prototype.Pd.call(this, t, i)
    },
    iH: function(t) {
        this.dn = p,
            M.n.prototype.iH.call(this, t)
    },
    pu: function(t) {
        this.dn = p,
            M.n.prototype.pu.call(this, t)
    },
    qu: function(t) {
        this.dn = p,
            M.n.prototype.qu.call(this, t)
    },
    cga: E("Qq"),
    rh: A("Qq"),
    dga: E("Rq"),
    sh: A("Rq"),
    Lea: E("zn"),
    nh: A("zn"),
    Mea: E("cq"),
    P6: A("cq"),
    uy: function() {
        return M.color(this.ll.r, this.ll.g, this.ll.b, this.ll.a)
    },
    jf: function(t) {
        this.ll = M.color(t)
    },
    GP: function() {
        return M.color(this.ml.r, this.ml.g, this.ml.b, this.ml.a)
    },
    sg: function(t) {
        this.ml = M.color(t)
    },
    qy: function() {
        return M.color(this.Se.r, this.Se.g, this.Se.b, this.Se.a)
    },
    gf: function(t) {
        this.Se = M.color(t)
    },
    oP: function() {
        return M.color(this.Qk.r, this.Qk.g, this.Qk.b, this.Qk.a)
    },
    ng: function(t) {
        this.Qk = M.color(t)
    },
    ega: E("Sq"),
    q7: A("Sq"),
    fga: E("Tq"),
    r7: A("Tq"),
    Nea: E("dq"),
    Q6: A("dq"),
    Oea: E("eq"),
    R6: A("eq"),
    Jea: E("yn"),
    lh: A("yn"),
    H3: E("wb"),
    u7: function(t) {
        if (M.B === M.ya) this.wb = 200 > t ? t: 200;
        else {
            if (t > this.bw) {
                var i = M.Bb.BYTES_PER_ELEMENT;
                this.ub = new Uint16Array(6 * t);
                var e = new ArrayBuffer(t * i),
                    n = this.Ej;
                n.length = 0;
                for (var r = this.Rc, s = r.length = 0; t > s; s++) n[s] = new M.Bg,
                    r[s] = new M.Bb(q, q, q, q, e, s * i);
                if (this.wb = this.bw = t, this.ba) for (i = 0; t > i; i++) n[i].atlasIndex = i;
                this.ud = e,
                    this.kG(),
                    this.Xm(),
                this.F && this.TP(M.rect(0, 0, this.F.width, this.F.height))
            } else this.wb = t;
            this.o6()
        }
    },
    Ja: E("F"),
    bb: function(t) {
        t.Db ? this.mH(t, M.rect(0, 0, t.width, t.height)) : (this.Aa = r, t.addEventListener("load",
            function(t) {
                this.Aa = p,
                    this.mH(t, M.rect(0, 0, t.width, t.height))
            },
            this))
    },
    Ef: E("q"),
    Od: function(t, i) {
        i === k ? this.q != t && (this.q = t, this.cg()) : (this.q.src != t || this.q.I != i) && (this.q = {
            src: t,
            I: i
        },
            this.cg())
    },
    gg: E("kb"),
    Jf: A("kb"),
    gQ: function() {
        return this.q.src == M.SRC_ALPHA && this.q.I == M.ONE || this.q.src == M.ONE && this.q.I == M.ONE
    },
    gi: function(t) {
        var i = this.q;
        t ? (i.src = M.SRC_ALPHA, i.I = M.ONE) : M.B === M.Z ? this.F && !this.F.ai() ? (i.src = M.SRC_ALPHA, i.I = M.ONE_MINUS_SRC_ALPHA) : (i.src = M.pc, i.I = M.oc) : (i.src = M.pc, i.I = M.oc)
    },
    Kfa: E("dj"),
    Fma: A("dj"),
    Zga: E("pt"),
    xla: A("pt"),
    Kea: E("Oa"),
    mh: A("Oa"),
    ha: function() {
        return this.bc(150)
    },
    Ac: function(t) {
        return this.wD = t,
            t = M.aa.Yd(t),
            t ? this.Y3(t, "") : (M.log("cc.ParticleSystem.initWithFile(): Particles: file not found"), r)
    },
    z2: function() {
        return M.rect(0, 0, M.fb.width, M.fb.height)
    },
    Y3: function(t) {
        var i = r,
            e = q,
            e = this.w0,
            n = parseInt(e("maxParticles", t));
        if (this.bc(n)) {
            if (this.Zg = parseFloat(e("angle", t)), this.Sp = parseFloat(e("angleVariance", t)), this.duration = parseFloat(e("duration", t)), this.q.src = parseInt(e("blendFuncSource", t)), this.q.I = parseInt(e("blendFuncDestination", t)), i = this.ll, i.r = 255 * parseFloat(e("startColorRed", t)), i.g = 255 * parseFloat(e("startColorGreen", t)), i.b = 255 * parseFloat(e("startColorBlue", t)), i.a = 255 * parseFloat(e("startColorAlpha", t)), i = this.ml, i.r = 255 * parseFloat(e("startColorVarianceRed", t)), i.g = 255 * parseFloat(e("startColorVarianceGreen", t)), i.b = 255 * parseFloat(e("startColorVarianceBlue", t)), i.a = 255 * parseFloat(e("startColorVarianceAlpha", t)), i = this.Se, i.r = 255 * parseFloat(e("finishColorRed", t)), i.g = 255 * parseFloat(e("finishColorGreen", t)), i.b = 255 * parseFloat(e("finishColorBlue", t)), i.a = 255 * parseFloat(e("finishColorAlpha", t)), i = this.Qk, i.r = 255 * parseFloat(e("finishColorVarianceRed", t)), i.g = 255 * parseFloat(e("finishColorVarianceGreen", t)), i.b = 255 * parseFloat(e("finishColorVarianceBlue", t)), i.a = 255 * parseFloat(e("finishColorVarianceAlpha", t)), this.Qq = parseFloat(e("startParticleSize", t)), this.Rq = parseFloat(e("startParticleSizeVariance", t)), this.zn = parseFloat(e("finishParticleSize", t)), this.cq = parseFloat(e("finishParticleSizeVariance", t)), this.H(parseFloat(e("sourcePositionx", t)), parseFloat(e("sourcePositiony", t))), this.dl.x = parseFloat(e("sourcePositionVariancex", t)), this.dl.y = parseFloat(e("sourcePositionVariancey", t)), this.Sq = parseFloat(e("rotationStart", t)), this.Tq = parseFloat(e("rotationStartVariance", t)), this.dq = parseFloat(e("rotationEnd", t)), this.eq = parseFloat(e("rotationEndVariance", t)), this.Oa = parseInt(e("emitterType", t)), this.Oa == M.o.qb) i = this.dc,
                i.gravity.x = parseFloat(e("gravityx", t)),
                i.gravity.y = parseFloat(e("gravityy", t)),
                i.speed = parseFloat(e("speed", t)),
                i.speedVar = parseFloat(e("speedVariance", t)),
                n = e("radialAcceleration", t),
                i.radialAccel = n ? parseFloat(n) : 0,
                n = e("radialAccelVariance", t),
                i.radialAccelVar = n ? parseFloat(n) : 0,
                n = e("tangentialAcceleration", t),
                i.tangentialAccel = n ? parseFloat(n) : 0,
                n = e("tangentialAccelVariance", t),
                i.tangentialAccelVar = n ? parseFloat(n) : 0,
                n = e("rotationIsDir", t).toLowerCase(),
                i.rotationIsDir = n != q && ("true" === n || "1" === n);
            else {
                if (this.Oa != M.o.mf) return M.log("cc.ParticleSystem.initWithDictionary(): Invalid emitterType in config file"),
                    r;
                i = this.Zd,
                    i.startRadius = parseFloat(e("maxRadius", t)),
                    i.startRadiusVar = parseFloat(e("maxRadiusVariance", t)),
                    i.endRadius = parseFloat(e("minRadius", t)),
                    i.endRadiusVar = 0,
                    i.yz = parseFloat(e("rotatePerSecond", t)),
                    i.zz = parseFloat(e("rotatePerSecondVariance", t))
            }
            if (this.ff = parseFloat(e("particleLifespan", t)), this.zq = parseFloat(e("particleLifespanVariance", t)), this.yn = this.wb / this.ff, !this.ba) if (this.kb = r, i = e("textureFileName", t), i = M.path.Xp(this.wD, i), n = M.Ma.Cl(i)) this.bb(n);
            else if (t = e("textureImageData", t), t && 0 !== t.length) {
                if (e = M.mS(t, 1), !e) return M.log("cc.ParticleSystem: error decoding or ungzipping textureImageData"),
                    r;
                if (t = M.V2(e), t !== M.dI && t !== M.tA) return M.log("cc.ParticleSystem: unknown image format with Data"),
                    r;
                n = M.Wb("canvas"),
                    t === M.tA ? new M.GU(e).l6(n) : M.m8.C5(e, n),
                    M.Ma.l1(i, n),
                (t = M.Ma.Cl(i)) || M.log("cc.ParticleSystem.initWithDictionary() : error loading the texture"),
                    this.bb(t)
            } else {
                if (n = M.Ma.Vc(i), !n) return r;
                this.bb(n)
            }
            i = p
        }
        return i
    },
    bc: function(t) {
        this.wb = t;
        var i,
            e = this.Ej;
        for (i = e.length = 0; t > i; i++) e[i] = new M.Bg;
        if (!e) return M.log("Particle system: not enough memory"),
            r;
        if (this.bw = t, this.ba) for (i = 0; i < this.wb; i++) e[i].atlasIndex = i;
        if (this.jp = p, this.q.src = M.pc, this.q.I = M.oc, this.dj = M.o.Jr, this.Oa = M.o.qb, this.dn = this.pt = r, this.gR(1), M.B === M.Z) {
            if (!this.xK()) return r;
            this.kG(),
                this.Xm(),
                this.shaderProgram = M.be.Bc(M.oj)
        }
        return p
    },
    Rca: function() {
        this.lS()
    },
    D0: function() {
        if (this.o4()) return r;
        var t,
            i = this.Ej;
        return M.B === M.ya ? this.Ad < i.length ? t = i[this.Ad] : (t = new M.Bg, i.push(t)) : t = i[this.Ad],
            this.W3(t),
            ++this.Ad,
            p
    },
    W3: function(t) {
        var i = M.W5;
        t.Ul = this.ff + this.zq * i(),
            t.Ul = Math.max(0, t.Ul),
            t.hb.x = this.yp.x + this.dl.x * i(),
            t.hb.y = this.yp.y + this.dl.y * i();
        var e,
            n;
        e = this.ll;
        var r = this.ml,
            s = this.Se;
        if (n = this.Qk, M.B === M.ya ? (e = M.color(M.jd(e.r + r.r * i(), 0, 255), M.jd(e.g + r.g * i(), 0, 255), M.jd(e.b + r.b * i(), 0, 255), M.jd(e.a + r.a * i(), 0, 255)), n = M.color(M.jd(s.r + n.r * i(), 0, 255), M.jd(s.g + n.g * i(), 0, 255), M.jd(s.b + n.b * i(), 0, 255), M.jd(s.a + n.a * i(), 0, 255))) : (e = {
                r: M.jd(e.r + r.r * i(), 0, 255),
                g: M.jd(e.g + r.g * i(), 0, 255),
                b: M.jd(e.b + r.b * i(), 0, 255),
                a: M.jd(e.a + r.a * i(), 0, 255)
            },
                n = {
                    r: M.jd(s.r + n.r * i(), 0, 255),
                    g: M.jd(s.g + n.g * i(), 0, 255),
                    b: M.jd(s.b + n.b * i(), 0, 255),
                    a: M.jd(s.a + n.a * i(), 0, 255)
                }), t.color = e, r = t.wt, s = t.Ul, r.r = (n.r - e.r) / s, r.g = (n.g - e.g) / s, r.b = (n.b - e.b) / s, r.a = (n.a - e.a) / s, e = this.Qq + this.Rq * i(), e = Math.max(0, e), t.size = e, this.zn === M.o.Cg ? t.wF = 0: (n = this.zn + this.cq * i(), n = Math.max(0, n), t.wF = (n - e) / s), e = this.Sq + this.Tq * i(), n = this.dq + this.eq * i(), t.rotation = e, t.OO = (n - e) / s, this.dj == M.o.Jr ? t.Qz = this.gy(this.CD) : this.dj == M.o.AB && (t.Qz.x = this.ua.x, t.Qz.y = this.ua.y), e = M.cf(this.Zg + this.Sp * i()), this.Oa === M.o.qb) s = this.dc,
            n = t.dc,
            r = s.speed + s.speedVar * i(),
            n.dir.x = Math.cos(e),
            n.dir.y = Math.sin(e),
            M.Eq(n.dir, r),
            n.radialAccel = s.radialAccel + s.radialAccelVar * i(),
            n.tangentialAccel = s.tangentialAccel + s.tangentialAccelVar * i(),
        s.rotationIsDir && (t.rotation = -M.PG(M.A5(n.dir)));
        else {
            n = this.Zd,
                t = t.Zd;
            var r = n.startRadius + n.startRadiusVar * i(),
                h = n.endRadius + n.endRadiusVar * i();
            t.du = r,
                t.NO = n.endRadius === M.o.gV ? 0: (h - r) / s,
                t.Zg = e,
                t.KO = M.cf(n.yz + n.zz * i())
        }
    },
    Z7: function() {
        this.jp = r,
            this.tb = this.duration,
            this.ym = 0
    },
    o6: function() {
        this.jp = p,
            this.tb = 0;
        var t = this.Ej;
        for (this.Ue = 0; this.Ue < this.Ad; ++this.Ue) t[this.Ue].Ul = 0
    },
    o4: function() {
        return this.Ad >= this.wb
    },
    A8: function(t, i) {
        var e = q;
        this.ba ? (e = this.ba.textureAtlas.quads[this.atlasIndex + t.atlasIndex], this.ba.textureAtlas.dirty = p) : e = this.Rc[this.Ue];
        var n,
            r,
            s,
            h;
        this.kb ? (n = 0 | t.color.r * t.color.a / 255, r = 0 | t.color.g * t.color.a / 255, s = 0 | t.color.b * t.color.a / 255) : (n = 0 | t.color.r, r = 0 | t.color.g, s = 0 | t.color.b),
            h = 0 | t.color.a;
        var a = e.J.A;
        if (a.r = n, a.g = r, a.b = s, a.a = h, a = e.V.A, a.r = n, a.g = r, a.b = s, a.a = h, a = e.U.A, a.r = n, a.g = r, a.b = s, a.a = h, a = e.N.A, a.r = n, a.g = r, a.b = s, a.a = h, n = t.size / 2, t.rotation) {
            r = -n,
                s = -n,
                h = i.x;
            var a = i.y,
                o = -M.cf(t.rotation),
                c = Math.cos(o),
                o = Math.sin(o);
            e.J.j.x = r * c - s * o + h,
                e.J.j.y = r * o + s * c + a,
                e.V.j.x = n * c - s * o + h,
                e.V.j.y = n * o + s * c + a,
                e.U.j.x = r * c - n * o + h,
                e.U.j.y = r * o + n * c + a,
                e.N.j.x = n * c - n * o + h,
                e.N.j.y = n * o + n * c + a
        } else e.J.j.x = i.x - n,
            e.J.j.y = i.y - n,
            e.V.j.x = i.x + n,
            e.V.j.y = i.y - n,
            e.U.j.x = i.x - n,
            e.U.j.y = i.y + n,
            e.N.j.x = i.x + n,
            e.N.j.y = i.y + n
    },
    O5: function() {
        if (M.B === M.Z) {
            var t = M.l;
            t.bindBuffer(t.ARRAY_BUFFER, this.gc[0]),
                t.bufferData(t.ARRAY_BUFFER, this.ud, t.DYNAMIC_DRAW)
        }
    },
    update: function(t) {
        if (this.jp && this.yn) {
            var i = 1 / this.yn;
            for (this.Ad < this.wb && (this.ym += t); this.Ad < this.wb && this.ym > i;) this.D0(),
                this.ym -= i;
            this.tb += t,
            -1 != this.duration && this.duration < this.tb && this.Z7()
        }
        if (this.Ue = 0, i = M.Bg.Kv[0], this.dj == M.o.Jr ? M.jk(i, this.gy(this.CD)) : this.dj == M.o.AB && (i.x = this.ua.x, i.y = this.ua.y), this.zc) {
            for (var e = M.Bg.Kv[1], n = M.Bg.Kv[2], s = M.Bg.Kv[3], h = this.Ej; this.Ue < this.Ad;) {
                M.oz(e),
                    M.oz(n),
                    M.oz(s);
                var a = h[this.Ue];
                if (a.Ul -= t, 0 < a.Ul) {
                    if (this.Oa == M.o.qb) {
                        var o = s,
                            c = e,
                            u = n;
                        a.hb.x || a.hb.y ? (M.jk(c, a.hb), M.y5(c)) : M.oz(c),
                            M.jk(u, c),
                            M.Eq(c, a.dc.radialAccel);
                        var f = u.x;
                        u.x = -u.y,
                            u.y = f,
                            M.Eq(u, a.dc.tangentialAccel),
                            M.jk(o, c),
                            M.mz(o, u),
                            M.mz(o, this.dc.gravity),
                            M.Eq(o, t),
                            M.mz(a.dc.dir, o),
                            M.jk(o, a.dc.dir),
                            M.Eq(o, t),
                            M.mz(a.hb, o)
                    } else o = a.Zd,
                        o.Zg += o.KO * t,
                        o.du += o.NO * t,
                        a.hb.x = -Math.cos(o.Zg) * o.du,
                        a.hb.y = -Math.sin(o.Zg) * o.du;
                    this.eL && M.B !== M.Z || (a.color.r += a.wt.r * t, a.color.g += a.wt.g * t, a.color.b += a.wt.b * t, a.color.a += a.wt.a * t, a.sG = p),
                        a.size += a.wF * t,
                        a.size = Math.max(0, a.size),
                        a.rotation += a.OO * t,
                        o = e,
                        this.dj == M.o.Jr || this.dj == M.o.AB ? (c = n, M.jk(c, i), M.LQ(c, a.Qz), M.jk(o, a.hb), M.LQ(o, c)) : M.jk(o, a.hb),
                    this.ba && (o.x += this.ua.x, o.y += this.ua.y),
                        M.B == M.Z ? this.A8(a, o) : M.jk(a.Xj, o),
                        ++this.Ue
                } else if (a = a.atlasIndex, this.Ue !== this.Ad - 1 && (o = h[this.Ue], h[this.Ue] = h[this.Ad - 1], h[this.Ad - 1] = o), this.ba && (this.ba.G1(this.atlasIndex + a), h[this.Ad - 1].atlasIndex = a), --this.Ad, 0 == this.Ad && this.pt) return this.lS(),
                    this.Ha.removeChild(this, p),
                    void 0
            }
            this.dn = r
        }
        this.ba || this.O5()
    },
    D8: function() {
        this.update(0)
    },
    w0: function(t, i) {
        if (i) {
            var e = i[t];
            return e != q ? e: ""
        }
        return ""
    },
    cg: function() {
        if (this.ba) M.log("Can't change blending functions when the particle is being batched");
        else {
            var t = this.F;
            if (t && t instanceof M.fa) {
                this.kb = r;
                var i = this.q;
                i.src == M.pc && i.I == M.oc && (t.ai() ? this.kb = p: (i.src = M.SRC_ALPHA, i.I = M.ONE_MINUS_SRC_ALPHA))
            }
        }
    },
    m: function() {
        var t = new M.o;
        if (t.bc(this.wb)) {
            t.jh(this.Zg),
                t.kh(this.Sp),
                t.mg(this.mq());
            var i = this.Ef();
            if (t.Od(i.src, i.I), t.jf(this.uy()), t.sg(this.GP()), t.gf(this.qy()), t.ng(this.oP()), t.rh(this.Qq), t.sh(this.Rq), t.nh(this.zn), t.P6(this.cq), t.H(M.d(this.x, this.y)), t.qh(M.d(this.WF().x, this.WF().y)), t.q7(this.Sq || 0), t.r7(this.Tq || 0), t.Q6(this.dq || 0), t.R6(this.eq || 0), t.mh(this.Oa), this.Oa == M.o.qb ? (i = this.sP(), t.og(M.d(i.x, i.y)), t.hf(this.ty()), t.rg(this.EP()), t.pg(this.xP()), t.qg(this.yP()), t.nk(this.JP()), t.ok(this.KP())) : this.Oa == M.o.mf && (t.JR(this.HP()), t.KR(this.IP()), t.pR(this.pP()), t.qR(this.qP()), t.FR(this.zP()), t.GR(this.AP())), t.oh(this.ff), t.ph(this.zq), t.lh(this.yn), !this.ba && (t.Jf(this.gg()), i = this.Ja())) {
                var e = i.wd();
                t.mH(i, M.rect(0, 0, e.width, e.height))
            }
        }
        return t
    },
    L6: function(t) {
        var i = t.k3(); (0 != i.x || 0 != i.y) && M.log("cc.ParticleSystem.setDisplayFrame(): QuadParticle only supports SpriteFrames with no offsets"),
        M.B === M.Z && (!this.F || t.Ja().me != this.F.me) && this.bb(t.Ja())
    },
    mH: function(t, i) {
        var e = this.F;
        M.B === M.Z ? e && t.me == e.me || e == t || (this.F = t, this.cg()) : e && t == e || e == t || (this.F = t, this.cg()),
            this.Nm = i,
            this.TP(i)
    },
    Ia: function(t) {
        this.Aa && !this.ba && (M.B === M.ya ? this.Ro(t) : this.uj(t), M.Wc++)
    },
    Ro: function(t) {
        t = t || M.l,
            t.save(),
            t.globalCompositeOperation = this.gQ() ? "lighter": "source-over";
        for (var i = this.F.Sa, e = M.view.pa, n = M.view.Ta, r = 0; r < this.Ad; r++) {
            var s = this.Ej[r],
                h = 0 | .5 * s.size;
            if (this.ky == M.o.oB) {
                if (i.width && i.height) {
                    t.save(),
                        t.globalAlpha = s.color.a / 255,
                        t.translate(0 | s.Xj.x, -(0 | s.Xj.y));
                    var h = 4 * Math.floor(s.size / 4),
                        a = this.Nm.width,
                        o = this.Nm.height;
                    t.scale(Math.max(h * e / a, 1e - 6), Math.max(h * n / o, 1e - 6)),
                    s.rotation && t.rotate(M.cf(s.rotation)),
                        t.translate( - (0 | a / 2), -(0 | o / 2)),
                    (s = s.sG ? this.ve(i, s.color, this.Nm) : i) && t.drawImage(s, 0, 0),
                        t.restore()
                }
            } else t.save(),
                t.globalAlpha = s.color.a / 255,
                t.translate(0 | s.Xj.x, -(0 | s.Xj.y)),
                this.Pz == M.o.fJ ? (s.rotation && t.rotate(M.cf(s.rotation)), M.ye.VO(t, h, s.color)) : M.ye.SO(t, h, s.color),
                t.restore()
        }
        t.restore()
    },
    ve: function(t, i, e) {
        return t.Me || (t.Me = document.createElement("canvas"), t.Me.width = t.width, t.Me.height = t.height),
            M.Cn(t, i, e, t.Me)
    },
    uj: function(t) {
        this.F && (t = t || M.l, this.la.sb(), this.la.lf(), M.yd(this.F), M.Ay(this.q.src, this.q.I), M.Sb(M.wh), t.bindBuffer(t.ARRAY_BUFFER, this.gc[0]), t.vertexAttribPointer(M.eb, 3, t.FLOAT, r, 24, 0), t.vertexAttribPointer(M.nd, 4, t.UNSIGNED_BYTE, p, 24, 12), t.vertexAttribPointer(M.bd, 2, t.FLOAT, r, 24, 16), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.gc[1]), t.drawElements(t.TRIANGLES, 6 * this.Ue, t.UNSIGNED_SHORT, 0))
    },
    lja: function() {
        M.nB || this.Xm()
    },
    Bba: z(),
    Xm: function() {
        if (M.B != M.ya) {
            var t = M.l;
            this.gc[0] = t.createBuffer(),
                t.bindBuffer(t.ARRAY_BUFFER, this.gc[0]),
                t.bufferData(t.ARRAY_BUFFER, this.ud, t.DYNAMIC_DRAW),
                this.gc[1] = t.createBuffer(),
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.gc[1]),
                t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.ub, t.STATIC_DRAW)
        }
    },
    xK: function() {
        if (M.B === M.ya) return p;
        if (this.ba) return M.log("cc.ParticleSystem._allocMemory(): Memory should not be allocated when not using batchNode"),
            r;
        var t = M.Bb.BYTES_PER_ELEMENT,
            i = this.wb,
            e = this.Rc;
        e.length = 0,
            this.ub = new Uint16Array(6 * i);
        for (var n = new ArrayBuffer(t * i), s = 0; i > s; s++) e[s] = new M.Bb(q, q, q, q, n, s * t);
        return e && this.ub ? (this.ud = n, p) : (M.log("cocos2d: Particle system: not enough memory"), r)
    }
}), T = M.o.prototype, M.B === M.ya && !M.qa.Gx && (T.ve = function(t, i, e) {
    var n = M.Ma.Bt(t);
    return n ? (n.Me || (n.Me = document.createElement("canvas"), n.Me.width = t.width, n.Me.height = t.height), M.yl(t, n, i, e, n.Me), n.Me) : q
}), M.k(T, "opacityModifyRGB", T.gg, T.Jf), M.k(T, "batchNode", T.MF, T.Pl), M.k(T, "active", T.bk), M.k(T, "sourcePos", T.D3, T.o7), M.k(T, "posVar", T.WF, T.qh), M.k(T, "gravity", T.sP, T.og), M.k(T, "speed", T.ty, T.hf), M.k(T, "speedVar", T.EP, T.rg), M.k(T, "tangentialAccel", T.JP, T.nk), M.k(T, "tangentialAccelVar", T.KP, T.ok), M.k(T, "radialAccel", T.xP, T.pg), M.k(T, "radialAccelVar", T.yP, T.qg), M.k(T, "rotationIsDir", T.v3, T.j7), M.k(T, "startRadius", T.HP, T.JR), M.k(T, "startRadiusVar", T.IP, T.KR), M.k(T, "endRadius", T.pP, T.pR), M.k(T, "endRadiusVar", T.qP, T.qR), M.k(T, "rotatePerS", T.zP, T.FR), M.k(T, "rotatePerSVar", T.AP, T.GR), M.k(T, "startColor", T.uy, T.jf), M.k(T, "startColorVar", T.GP, T.sg), M.k(T, "endColor", T.qy, T.gf), M.k(T, "endColorVar", T.oP, T.ng), M.k(T, "totalParticles", T.H3, T.u7), M.k(T, "texture", T.Ja, T.bb), M.o.create = function(t) {
    return new M.o(t)
},
    M.o.Lca = M.o.create, M.o.IA = function(t, i, e, n, s, h, a, o) {
    this.gravity = t ? t: M.d(0, 0),
        this.speed = i || 0,
        this.speedVar = e || 0,
        this.tangentialAccel = n || 0,
        this.tangentialAccelVar = s || 0,
        this.radialAccel = h || 0,
        this.radialAccelVar = a || 0,
        this.rotationIsDir = o || r
},
    M.o.JA = function(t, i, e, n, r, s) {
        this.startRadius = t || 0,
            this.startRadiusVar = i || 0,
            this.endRadius = e || 0,
            this.endRadiusVar = n || 0,
            this.yz = r || 0,
            this.zz = s || 0
    },
    M.o.eJ = 0, M.o.oB = 1, M.o.fJ = 0, M.o.MH = 1, M.o.ji = -1, M.o.Cg = -1, M.o.gV = -1, M.o.qb = 0, M.o.mf = 1, M.o.Jr = 0, M.o.AB = 1, M.o.maa = 2, M.HI = M.o.extend({
    ctor: function() {
        M.o.prototype.ctor.call(this, M.B === M.Z ? 300: 150)
    },
    bc: function(t) {
        return M.o.prototype.bc.call(this, t) ? (this.mg(M.o.ji), this.mh(M.o.qb), this.og(M.d(0, 0)), this.pg(0), this.qg(0), this.hf(60), this.rg(20), this.jh(90), this.kh(10), t = M.K.Ea(), this.H(t.width / 2, 60), this.qh(M.d(40, 20)), this.oh(3), this.ph(.25), this.rh(54), this.sh(10), this.nh(M.o.Cg), this.lh(this.wb / this.ff), this.jf(M.color(194, 64, 31, 255)), this.sg(M.color(0, 0, 0, 0)), this.gf(M.color(0, 0, 0, 255)), this.ng(M.color(0, 0, 0, 0)), this.gi(p), p) : r
    }
}), M.HI.create = function() {
    return new M.HI
},
    M.II = M.o.extend({
        ctor: function() {
            M.o.prototype.ctor.call(this, M.B === M.Z ? 1500: 150)
        },
        bc: function(t) {
            return M.o.prototype.bc.call(this, t) ? (this.mg(M.o.ji), this.mh(M.o.qb), this.og(M.d(0, -90)), this.pg(0), this.qg(0), this.hf(180), this.rg(50), t = M.K.Ea(), this.H(t.width / 2, t.height / 2), this.jh(90), this.kh(20), this.oh(3.5), this.ph(1), this.lh(this.wb / this.ff), this.jf(M.color(128, 128, 128, 255)), this.sg(M.color(128, 128, 128, 255)), this.gf(M.color(26, 26, 26, 51)), this.ng(M.color(26, 26, 26, 51)), this.rh(8), this.sh(2), this.nh(M.o.Cg), this.gi(r), p) : r
        }
    }), M.II.create = function() {
    return new M.II
},
    M.TI = M.o.extend({
        ctor: function() {
            M.o.prototype.ctor.call(this, M.B === M.Z ? 350: 150)
        },
        bc: function(t) {
            return M.o.prototype.bc.call(this, t) ? (this.gi(p), this.mg(M.o.ji), this.mh(M.o.qb), this.og(M.d(0, 0)), this.pg(0), this.qg(0), this.hf(20), this.rg(5), this.jh(90), this.kh(360), t = M.K.Ea(), this.H(t.width / 2, t.height / 2), this.qh(M.d(0, 0)), this.oh(1), this.ph(.5), this.rh(30), this.sh(10), this.nh(M.o.Cg), this.lh(this.wb / this.ff), this.jf(M.color(194, 64, 31, 255)), this.sg(M.color(0, 0, 0, 0)), this.gf(M.color(0, 0, 0, 255)), this.ng(M.color(0, 0, 0, 0)), p) : r
        }
    }), M.TI.create = function() {
    return new M.TI
},
    M.KI = M.o.extend({
        ctor: function() {
            M.o.prototype.ctor.call(this, M.B === M.Z ? 200: 100)
        },
        bc: function(t) {
            return M.o.prototype.bc.call(this, t) ? (this.mg(M.o.ji), this.mh(M.o.qb), this.og(M.d(0, 0)), this.hf(60), this.rg(10), this.pg( - 80), this.qg(0), this.nk(80), this.ok(0), this.jh(90), this.kh(360), t = M.K.Ea(), this.H(t.width / 2, t.height / 2), this.qh(M.d(0, 0)), this.oh(4), this.ph(1), this.rh(37), this.sh(10), this.nh(M.o.Cg), this.lh(this.wb / this.ff), this.jf(M.color(31, 64, 194, 255)), this.sg(M.color(0, 0, 0, 0)), this.gf(M.color(0, 0, 0, 255)), this.ng(M.color(0, 0, 0, 0)), this.gi(p), p) : r
        }
    }), M.KI.create = function() {
    return new M.KI
},
    M.JI = M.o.extend({
        ctor: function() {
            M.o.prototype.ctor.call(this, M.B === M.Z ? 250: 100)
        },
        bc: function(t) {
            return M.o.prototype.bc.call(this, t) ? (this.mg(M.o.ji), this.mh(M.o.qb), this.og(M.d(0, 0)), this.hf(80), this.rg(10), this.pg( - 60), this.qg(0), this.nk(15), this.ok(0), this.jh(90), this.kh(360), t = M.K.Ea(), this.H(t.width / 2, t.height / 2), this.qh(M.d(0, 0)), this.oh(4), this.ph(1), this.rh(30), this.sh(10), this.nh(M.o.Cg), this.lh(this.wb / this.ff), this.jf(M.color(128, 128, 128, 255)), this.sg(M.color(128, 128, 128, 128)), this.gf(M.color(0, 0, 0, 255)), this.ng(M.color(0, 0, 0, 0)), this.gi(p), p) : r
        }
    }), M.JI.create = function() {
    return new M.JI
},
    M.LI = M.o.extend({
        ctor: function() {
            M.o.prototype.ctor.call(this, M.B === M.Z ? 150: 100)
        },
        bc: function(t) {
            return M.o.prototype.bc.call(this, t) ? (this.mg(M.o.ji), this.mh(M.o.qb), this.og(M.d( - 200, 200)), this.hf(15), this.rg(5), this.pg(0), this.qg(0), this.nk(0), this.ok(0), this.jh(90), this.kh(360), t = M.K.Ea(), this.H(t.width / 2, t.height / 2), this.qh(M.d(0, 0)), this.oh(2), this.ph(1), this.rh(60), this.sh(10), this.nh(M.o.Cg), this.lh(this.wb / this.ff), this.jf(M.color(51, 102, 179)), this.sg(M.color(0, 0, 51, 26)), this.gf(M.color(0, 0, 0, 255)), this.ng(M.color(0, 0, 0, 0)), this.gi(p), p) : r
        }
    }), M.LI.create = function() {
    return new M.LI
},
    M.SI = M.o.extend({
        ctor: function() {
            M.o.prototype.ctor.call(this, M.B === M.Z ? 500: 100)
        },
        bc: function(t) {
            return M.o.prototype.bc.call(this, t) ? (this.mg(M.o.ji), this.mh(M.o.qb), this.og(M.d(0, 0)), this.hf(150), this.rg(0), this.pg( - 380), this.qg(0), this.nk(45), this.ok(0), this.jh(90), this.kh(0), t = M.K.Ea(), this.H(t.width / 2, t.height / 2), this.qh(M.d(0, 0)), this.oh(12), this.ph(0), this.rh(20), this.sh(0), this.nh(M.o.Cg), this.lh(this.wb / this.ff), this.jf(M.color(128, 128, 128, 255)), this.sg(M.color(128, 128, 128, 0)), this.gf(M.color(128, 128, 128, 255)), this.ng(M.color(128, 128, 128, 0)), this.gi(r), p) : r
        }
    }), M.SI.create = function() {
    return new M.SI
},
    M.GI = M.o.extend({
        ctor: function() {
            M.o.prototype.ctor.call(this, M.B === M.Z ? 700: 300)
        },
        bc: function(t) {
            return M.o.prototype.bc.call(this, t) ? (this.mg(.1), this.mh(M.o.qb), this.og(M.d(0, 0)), this.hf(70), this.rg(40), this.pg(0), this.qg(0), this.nk(0), this.ok(0), this.jh(90), this.kh(360), t = M.K.Ea(), this.H(t.width / 2, t.height / 2), this.qh(M.d(0, 0)), this.oh(5), this.ph(2), this.rh(15), this.sh(10), this.nh(M.o.Cg), this.lh(this.wb / this.mq()), this.jf(M.color(179, 26, 51, 255)), this.sg(M.color(128, 128, 128, 0)), this.gf(M.color(128, 128, 128, 0)), this.ng(M.color(128, 128, 128, 0)), this.gi(r), p) : r
        }
    }), M.GI.create = function() {
    return new M.GI
},
    M.QI = M.o.extend({
        ctor: function() {
            M.o.prototype.ctor.call(this, M.B === M.Z ? 200: 100)
        },
        bc: function(t) {
            return M.o.prototype.bc.call(this, t) ? (this.mg(M.o.ji), this.mh(M.o.qb), this.og(M.d(0, 0)), this.pg(0), this.qg(0), this.hf(25), this.rg(10), this.jh(90), this.kh(5), t = M.K.Ea(), this.H(t.width / 2, 0), this.qh(M.d(20, 0)), this.oh(4), this.ph(1), this.rh(60), this.sh(10), this.nh(M.o.Cg), this.lh(this.wb / this.ff), this.jf(M.color(204, 204, 204, 255)), this.sg(M.color(5, 5, 5, 0)), this.gf(M.color(0, 0, 0, 255)), this.ng(M.color(0, 0, 0, 0)), this.gi(r), p) : r
        }
    }), M.QI.create = function() {
    return new M.QI
},
    M.RI = M.o.extend({
        ctor: function() {
            M.o.prototype.ctor.call(this, M.B === M.Z ? 700: 250)
        },
        bc: function(t) {
            return M.o.prototype.bc.call(this, t) ? (this.mg(M.o.ji), this.mh(M.o.qb), this.og(M.d(0, -1)), this.hf(5), this.rg(1), this.pg(0), this.qg(1), this.nk(0), this.ok(1), t = M.K.Ea(), this.H(t.width / 2, t.height + 10), this.qh(M.d(t.width / 2, 0)), this.jh( - 90), this.kh(5), this.oh(45), this.ph(15), this.rh(10), this.sh(5), this.nh(M.o.Cg), this.lh(10), this.jf(M.color(255, 255, 255, 255)), this.sg(M.color(0, 0, 0, 0)), this.gf(M.color(255, 255, 255, 0)), this.ng(M.color(0, 0, 0, 0)), this.gi(r), p) : r
        }
    }), M.RI.create = function() {
    return new M.RI
},
    M.MI = M.o.extend({
        ctor: function() {
            M.o.prototype.ctor.call(this, M.B === M.Z ? 1e3: 300)
        },
        bc: function(t) {
            return M.o.prototype.bc.call(this, t) ? (this.mg(M.o.ji), this.mh(M.o.qb), this.og(M.d(10, -10)), this.pg(0), this.qg(1), this.nk(0), this.ok(1), this.hf(130), this.rg(30), this.jh( - 90), this.kh(5), t = M.K.Ea(), this.H(t.width / 2, t.height), this.qh(M.d(t.width / 2, 0)), this.oh(4.5), this.ph(0), this.rh(4), this.sh(2), this.nh(M.o.Cg), this.lh(20), this.jf(M.color(179, 204, 255, 255)), this.sg(M.color(0, 0, 0, 0)), this.gf(M.color(179, 204, 255, 128)), this.ng(M.color(0, 0, 0, 0)), this.gi(r), p) : r
        }
    }), M.MI.create = function() {
    return new M.MI
},
    M.K$ = 500, M.PA = M.n.extend({
    textureAtlas: q,
    qaa: p,
    q: q,
    Hb: "ParticleBatchNode",
    ctor: function(t, i) {
        M.n.prototype.ctor.call(this),
            this.q = {
                src: M.pc,
                I: M.oc
            },
            M.zd(t) ? this.ha(t, i) : t instanceof M.fa && this.Ca(t, i)
    },
    Ca: function(t, i) {
        return this.textureAtlas = new M.ni,
            this.textureAtlas.Ca(t, i),
            this.u.length = 0,
        M.B === M.Z && (this.shaderProgram = M.be.Bc(M.oj)),
            p
    },
    Ac: function(t, i) {
        var e = M.Ma.Vc(t);
        return this.Ca(e, i)
    },
    ha: function(t, i) {
        var e = M.paa.cfa().Vc(t);
        return this.Ca(e, i)
    },
    T: function(t, i, e) {
        t || b("cc.ParticleBatchNode.addChild() : child should be non-null"),
        t instanceof M.o || b("cc.ParticleBatchNode.addChild() : only supports cc.ParticleSystem as children"),
            i = i == q ? t.zIndex: i,
            e = e == q ? t.tag: e,
        t.Ja() != this.textureAtlas.texture && b("cc.ParticleSystem.addChild() : the child is not using the same texture id");
        var n = t.Ef();
        if (0 === this.u.length) this.Od(n);
        else if (n.src != this.q.src || n.I != this.q.I) return M.log("cc.ParticleSystem.addChild() : Can't add a ParticleSystem that uses a different blending function"),
            void 0;
        i = this.WB(t, i, e),
            e = 0,
            0 != i ? (i = this.u[i - 1], e = i.kq() + i.wb) : e = 0,
            this.qG(t, e),
            t.Pl(this)
    },
    qG: function(t, i) {
        var e = t.wb,
            n = this.textureAtlas,
            r = n.totalQuads;
        t.ZG(i),
        r + e > n.pd && (this.SY(r + e), n.eP(n.pd - e, e)),
        t.kq() + e != r && n.AQ(i, i + e),
            n.SP(e),
            this.JE()
    },
    removeChild: function(t, i) {
        if (t != q) if (t instanceof M.o || b("cc.ParticleBatchNode.removeChild(): only supports cc.ParticleSystem as children"), -1 == this.u.indexOf(t)) M.log("cc.ParticleBatchNode.removeChild(): doesn't contain the sprite. Can't remove it");
        else {
            M.n.prototype.removeChild.call(this, t, i);
            var e = this.textureAtlas;
            e.i6(t.kq(), t.wb),
                e.eP(e.totalQuads, t.wb),
                t.Pl(q),
                this.JE()
        }
    },
    Lq: function(t, i) {
        if (t || b("cc.ParticleBatchNode.reorderChild(): child should be non-null"), t instanceof M.o || b("cc.ParticleBatchNode.reorderChild(): only supports cc.QuadParticleSystems as children"), -1 === this.u.indexOf(t)) M.log("cc.ParticleBatchNode.reorderChild(): Child doesn't belong to batch");
        else if (i != t.zIndex) {
            if (1 < this.u.length) {
                var e = this.pY(t, i);
                if (e.DQ != e.BQ) {
                    this.u.splice(e.DQ, 1),
                        this.u.splice(e.BQ, 0, t),
                        e = t.kq(),
                        this.JE();
                    for (var n = 0, r = this.u, s = 0; s < r.length; s++) if (r[s] == t) {
                        n = t.kq();
                        break
                    }
                    this.textureAtlas.AQ(e, t.wb, n),
                        t.D8()
                }
            }
            t.xx(i)
        }
    },
    e6: function(t, e) {
        this.removeChild(this.u[i], e)
    },
    Hf: function(t) {
        for (var i = this.u, e = 0; e < i.length; e++) i[e].Pl(q);
        M.n.prototype.Hf.call(this, t),
            this.textureAtlas.Iq()
    },
    G1: function(t) {
        t = this.textureAtlas.quads[t],
            t.V.j.x = t.V.j.y = t.N.j.x = t.N.j.y = t.U.j.x = t.U.j.y = t.J.j.x = t.J.j.y = 0,
            this.textureAtlas.il(p)
    },
    Ia: function() {
        M.B !== M.ya && 0 != this.textureAtlas.totalQuads && (M.St(this), M.Ay(this.q.src, this.q.I), this.textureAtlas.wl())
    },
    Ja: function() {
        return this.textureAtlas.texture
    },
    bb: function(t) {
        this.textureAtlas.texture = t;
        var i = this.q;
        t && !t.ai() && i.src == M.pc && i.I == M.oc && (i.src = M.SRC_ALPHA, i.I = M.ONE_MINUS_SRC_ALPHA)
    },
    Od: function(t, i) {
        i === k ? (this.q.src = t.src, this.q.I = t.I) : (this.q.src = t, this.q.src = i)
    },
    Ef: function() {
        return {
            src: this.q.src,
            I: this.q.I
        }
    },
    G: function(t) {
        if (M.B !== M.ya && this.zc) {
            var i = M.ob;
            i.stack.push(i.top),
                M.hg(this.Kb, i.top),
                i.top = this.Kb,
                this.transform(t),
            this.$ && M.ia.nc(this.$),
                M.dk()
        }
    },
    JE: function() {
        for (var t = 0, i = this.u, e = 0; e < i.length; e++) {
            var n = i[e];
            n.ZG(t),
                t += n.wb
        }
    },
    SY: function(t) {
        M.log("cocos2d: cc.ParticleBatchNode: resizing TextureAtlas capacity from [" + this.textureAtlas.pd + "] to [" + t + "]."),
        this.textureAtlas.wz(t) || M.log("cc.ParticleBatchNode._increaseAtlasCapacityTo() : WARNING: Not enough memory to resize the atlas")
    },
    i_: function(t) {
        for (var i = this.u, e = i.length, n = 0; e > n; n++) if (i[n].zIndex > t) return n;
        return e
    },
    pY: function(t, i) {
        for (var e = r, n = r, s = 0, h = 0, a = 0, o = this.u, c = o.length, M = 0; c > M; M++) {
            var u = o[M];
            if (u.zIndex > i && !n && (s = M, n = p, e && n)) break;
            if (t == u && (h = M, e = p, n || (a = -1), e && n)) break
        }
        return n || (s = c),
        {
            BQ: s + a,
            DQ: h
        }
    },
    WB: function(t, i, e) {
        if (t || b("cc.ParticleBatchNode._addChildHelper(): child should be non-null"), t.parent) return M.log("cc.ParticleBatchNode._addChildHelper(): child already added. It can't be added again"),
            q;
        this.u || (this.u = []);
        var n = this.i_(i);
        return this.u.splice(n, 0, t),
            t.tag = e,
            t.xx(i),
            t.parent = this,
        this.Mh && (t.W(), t.fi()),
            n
    },
    cg: function() {
        this.textureAtlas.texture.ai() || (this.q.src = M.SRC_ALPHA, this.q.I = M.ONE_MINUS_SRC_ALPHA)
    },
    vy: E("textureAtlas"),
    lH: A("textureAtlas"),
    Vd: function() {
        M.B === M.Z && (this.$ = new M.FI(this))
    }
}), T = M.PA.prototype, M.k(T, "texture", T.Ja, T.bb), M.PA.create = function(t, i) {
    return new M.PA(t, i)
},
    M.b$ = function(t, i, e) {
        this.$g = t || M.rect(0, 0, 0, 0),
            this.end = i || M.rect(0, 0, 0, 0),
            this.duration = e || 0
    },
    M.a$ = M.xa.extend({
        ctor: function() {
            M.Wi.kO(this)
        },
        tz: function() {
            M.Wi.tz(this)
        },
        $0: function() {
            return M.Wi.nO(this)
        },
        QO: function() {
            return M.Wi.PO(this)
        },
        lF: F(r),
        E1: z(),
        mF: F(r),
        F1: z(),
        fQ: z(),
        MO: z(),
        OF: F(""),
        G4: z(),
        E4: z(),
        F4: z(),
        D4: z()
    }), M.yA = M.xa.extend({
    tc: q,
    ab: q,
    tj: "",
    Em: q,
    ctor: function() {
        this.ab = new M.yA.NT,
            this.Em = M.d(0, 0)
    },
    ha: function() {
        if (!M.qa.hh) {
            this.tc = M.Ab("#imeDispatcherInput"),
            this.tc || (this.tc = M.wS(), this.tc.setAttribute("type", "text"), this.tc.setAttribute("id", "imeDispatcherInput"), this.tc.lu(0, 0), this.tc.eS(0, 0), this.tc.style.opacity = "0", this.tc.style.fontSize = "1px", this.tc.setAttribute("tabindex", 2), this.tc.style.position = "absolute", this.tc.style.top = 0, this.tc.style.left = 0, document.body.appendChild(this.tc));
            var t = this;
            M.Na(this.tc, "input",
                function() {
                    t.ID(t.tc.value)
                },
                r),
                M.Na(this.tc, "keydown",
                    function(i) {
                        i.keyCode === M.ur.c8 ? (i.stopPropagation(), i.preventDefault()) : i.keyCode == M.ur.XO && (t.xt("\n", 1), i.stopPropagation(), i.preventDefault())
                    },
                    r),
            /msie/i.test(navigator.userAgent) && M.Na(this.tc, "keyup",
                function(i) {
                    i.keyCode == M.ur.oO && t.ID(t.tc.value)
                },
                r),
                M.Na(window, "mousedown",
                    function(i) {
                        var e = i.pageY || 0;
                        t.Em.x = i.pageX || 0,
                            t.Em.y = e
                    },
                    r)
        }
    },
    ID: function(t) {
        var i,
            e;
        for (i = this.tj.length < t.length ? this.tj.length: t.length, e = 0; i > e && t[e] === this.tj[e]; e++);
        var n = this.tj.length - e,
            r = t.length - e;
        for (i = 0; n > i; i++) this.RO();
        for (i = 0; r > i; i++) this.xt(t[e + i], 1);
        this.tj = t
    },
    xt: function(t, i) {
        this.ab && t && !(0 >= i) && this.ab.we && this.ab.we.fQ(t, i)
    },
    RO: function() {
        this.ab && this.ab.we && this.ab.we.MO()
    },
    OF: function() {
        if (this.ab && this.ab.we) {
            var t = this.ab.we.OF();
            return t ? t: ""
        }
        return ""
    },
    $ca: function() {
        if (this.ab) for (var t = 0; t < this.ab.Jg.length; t++);
    },
    Yca: function() {
        if (this.ab) for (var t = 0; t < this.ab.Jg.length; t++);
    },
    Zca: function() {
        if (this.ab) for (var t = 0; t < this.ab.Jg.length; t++);
    },
    Xca: function() {
        if (this.ab) for (var t = 0; t < this.ab.Jg.length; t++);
    },
    kO: function(t) {
        t && this.ab && ( - 1 < this.ab.Jg.indexOf(t) || this.ab.Jg.splice(0, 0, t))
    },
    nO: function(t) {
        return this.ab && t && -1 != this.ab.Jg.indexOf(t) ? this.ab.we ? this.ab.we.mF() && t.lF() ? (this.ab.we = q, this.TL(t), p) : r: t.lF() ? (this.TL(t), p) : r: r
    },
    TL: function(t) {
        M.qa.hh ? (this.ab.we = t, this.tj = t.string || "", t = prompt("please enter your word:", this.tj), t != q && this.ID(t), this.xt("\n", 1)) : (this.ab.we = t, this.tj = t.string || "", this.tc.focus(), this.tc.value = this.tj, this.UX())
    },
    UX: function() { / msie / i.test(navigator.userAgent) ? (this.tc.style.left = this.Em.x + "px", this.tc.style.top = this.Em.y + "px") : this.tc.eS(this.Em.x, this.Em.y)
    },
    PO: function(t) {
        return this.ab && t && this.ab.we == t && t.mF() ? (this.ab.we = q, M.fb.focus(), p) : r
    },
    tz: function(t) {
        this.ab && t && -1 != this.ab.Jg.indexOf(t) && (this.ab.we && t == this.ab.we && (this.ab.we = q), M.ne(this.ab.Jg, t))
    },
    vka: function(t) {
        32 > t ? t == M.ur.oO ? this.RO() : t == M.ur.XO && this.xt("\n", 1) : 255 > t && this.xt(String.fromCharCode(t), 1)
    }
}), M.yA.NT = M.xa.extend({
    we: q,
    Jg: q,
    ctor: function() {
        this.Jg = []
    },
    Xda: function(t) {
        for (var i = 0; i < this.Jg.length; i++) if (this.Jg[i] == t) return i;
        return q
    }
}), M.Wi = new M.yA, document.body ? M.Wi.ha() : M.Na(window, "load",
    function() {
        M.Wi.ha()
    },
    r), M.oaa = M.xa.extend({
    Rja: F(r),
    Tja: F(r),
    Uja: F(r),
    Sja: F(r),
    Nja: F(r)
}), M.CB = M.Y.extend({
    LO: q,
    Wj: q,
    Mo: q,
    iba: q,
    Eh: "",
    Mm: "",
    kw: 0,
    Hb: "TextFieldTTF",
    ctor: function(t, i, e, n, r) {
        this.Wj = M.color(127, 127, 127),
            this.Mo = M.color(255, 255, 255, 255),
            M.Wi.kO(this),
            M.Y.prototype.ctor.call(this),
            r !== k ? (this.d4("", i, e, n, r), t && this.ou(t)) : n === k && e !== k && (this.Nd("", i, e), t && this.ou(t))
    },
    G2: E("LO"),
    J6: A("LO"),
    A2: E("kw"),
    tea: function() {
        return M.color(this.Wj)
    },
    Gla: function(t) {
        this.Wj.r = t.r,
            this.Wj.g = t.g,
            this.Wj.b = t.b,
            this.Wj.a = M.ck(t.a) ? 255: t.a
    },
    Zma: function(t) {
        this.Mo.r = t.r,
            this.Mo.g = t.g,
            this.Mo.b = t.b,
            this.Mo.a = M.ck(t.a) ? 255: t.a
    },
    d4: function(t, i, e, n, r) {
        switch (arguments.length) {
            case 5:
                return t && this.ou(t),
                    this.Nd(this.Mm, n, r, i, e);
            case 3:
                return t && this.ou(t),
                    this.Nd(this.Mm, arguments[1], arguments[2]);
            default:
                b("Argument must be non-nil ")
        }
    },
    Kc: function(t) {
        this.Eh = (t = String(t)) || "",
            this.Eh.length ? (M.Y.prototype.Kc.call(this, this.Eh), this.mb(this.Mo)) : (M.Y.prototype.Kc.call(this, this.Mm), this.mb(this.Wj)),
        M.B === M.ya && this.Np(),
            this.kw = this.Eh.length
    },
    Bl: E("Eh"),
    ou: function(t) {
        this.Mm = t || "",
        this.Eh.length || (M.Y.prototype.Kc.call(this, this.Mm), this.mb(this.Wj))
    },
    p3: E("Mm"),
    Ia: function(t) {
        M.Y.prototype.Ia.call(this, t || M.l)
    },
    G: function(t) {
        this._super(t)
    },
    $0: function() {
        return M.Wi.nO(this)
    },
    QO: function() {
        return M.Wi.PO(this)
    },
    lF: F(p),
    E1: z(),
    mF: F(p),
    F1: z(),
    MO: function() {
        var t = this.Eh.length;
        0 != t && (1 >= t ? (this.Eh = "", this.kw = 0, M.Y.prototype.Kc.call(this, this.Mm), this.mb(this.Wj)) : this.string = this.Eh.substring(0, t - 1))
    },
    tz: function() {
        M.Wi.tz(this)
    },
    fQ: function(t) {
        var i = t;
        t = i.indexOf("\n"),
        t > -1 && (i = i.substring(0, t)),
        0 < i.length && (i = this.Eh + i, this.kw = i.length, this.string = i),
        -1 != t && this.QO()
    },
    OF: E("Eh"),
    G4: z(),
    E4: z(),
    F4: z(),
    D4: z()
}), T = M.CB.prototype, M.k(T, "charCount", T.A2), M.k(T, "placeHolder", T.p3, T.ou), M.CB.create = function(t, i, e, n, r) {
    return new M.CB(t, i, e, n, r)
},
    M.Kw = M.MT, M.vs = "Arial", M.fM = r, M.Pc = M.n.extend({
    vf: r,
    Fe: q,
    Qc: q,
    zs: r,
    Hb: "MenuItem",
    ctor: function(t, i) {
        var e = M.n.prototype;
        e.ctor.call(this),
            this.Qc = this.Fe = q,
            this.vf = this.zs = r,
            e.Ol.call(this, .5, .5),
            this.Fe = i || q,
        (this.Qc = t || q) && (this.vf = p)
    },
    oha: E("zs"),
    Jf: z(),
    gg: F(r),
    gj: function(t, i) {
        this.Fe = i,
            this.Qc = t
    },
    isEnabled: E("vf"),
    Le: A("vf"),
    Gt: function(t, i) {
        return this.anchorY = this.anchorX = .5,
            this.Fe = i,
            this.Qc = t,
            this.vf = p,
            this.zs = r,
            p
    },
    rect: function() {
        var t = this.ua,
            i = this.R,
            e = this.cd;
        return M.rect(t.x - i.width * e.x, t.y - i.height * e.y, i.width, i.height)
    },
    selected: function() {
        this.zs = p
    },
    hi: function() {
        this.zs = r
    },
    Bla: function(t, i) {
        this.Fe = i,
            this.Qc = t
    },
    mt: function() {
        if (this.vf) {
            var t = this.Fe,
                i = this.Qc;
            i && (t && M.zd(i) ? t[i](this) : t && M.Vb(i) ? i.call(t, this) : i(this))
        }
    }
}), T = M.Pc.prototype, M.k(T, "enabled", T.isEnabled, T.Le), M.Pc.create = function(t, i) {
    return new M.Pc(t, i)
},
    M.em = M.Pc.extend({
        Qo: q,
        qd: q,
        KZ: 0,
        $r: q,
        ctor: function(t, i, e) {
            M.Pc.prototype.ctor.call(this, i, e),
                this.qd = this.Qo = q,
                this.KZ = 0,
                this.$r = q,
            t && (this.Is = 1, this.$r = M.color.WHITE, this.Qo = M.color(126, 126, 126), this.Gz(t), this.cascadeOpacity = this.cascadeColor = p)
        },
        I2: E("Qo"),
        K6: A("Qo"),
        X2: E("qd"),
        Gz: function(t) {
            t && (this.T(t), t.anchorX = 0, t.anchorY = 0, this.width = t.width, this.height = t.height),
            this.qd && this.removeChild(this.qd, p),
                this.qd = t
        },
        Le: function(t) {
            if (this.vf != t) {
                var i = this.qd;
                t ? i.color = this.$r: (this.$r = i.color, i.color = this.Qo)
            }
            M.Pc.prototype.Le.call(this, t)
        },
        pb: function(t) {
            this.qd.opacity = t
        },
        bh: function() {
            return this.qd.opacity
        },
        mb: function(t) {
            this.qd.color = t
        },
        fg: function() {
            return this.qd.color
        },
        ZP: function(t, i, e) {
            return this.Gt(i, e),
                this.Is = 1,
                this.$r = M.color.WHITE,
                this.Qo = M.color(126, 126, 126),
                this.Gz(t),
                this.cascadeOpacity = this.cascadeColor = p
        },
        Kc: function(t) {
            this.qd.string = t,
                this.width = this.qd.width,
                this.height = this.qd.height
        },
        Bl: function() {
            return this.qd.string
        },
        mt: function() {
            this.vf && (this.sH(), this.scale = this.Is, M.Pc.prototype.mt.call(this))
        },
        selected: function() {
            if (this.vf) {
                M.Pc.prototype.selected.call(this);
                var t = this.LF(M.Sv);
                t ? this.V7(t) : this.Is = this.scale,
                    t = M.lg(.1, 1.2 * this.Is),
                    t.Nz(M.Sv),
                    this.lb(t)
            }
        },
        hi: function() {
            if (this.vf) {
                M.Pc.prototype.hi.call(this),
                    this.W7(M.Sv);
                var t = M.lg(.1, this.Is);
                t.Nz(M.Sv),
                    this.lb(t)
            }
        }
    }), T = M.em.prototype, M.k(T, "string", T.Bl, T.Kc), M.k(T, "disabledColor", T.I2, T.K6), M.k(T, "label", T.X2, T.Gz), M.em.create = function(t, i, e) {
    return new M.em(t, i, e)
},
    M.qI = M.em.extend({
        ctor: function(t, i, e, n, r, s, h) {
            var a;
            t && 0 < t.length && (a = new M.li(t, i, e, n, r)),
                M.em.prototype.ctor.call(this, a, s, h)
        },
        Nd: function(t, i, e, n, r, s, h) { (!t || 0 == t.length) && b("cc.MenuItemAtlasFont.initWithString(): value should be non-null and its length should be greater than 0");
            var a = new M.li;
            return a.Nd(t, i, e, n, r),
                this.ZP(a, s, h),
                p
        }
    }), M.qI.create = function(t, i, e, n, r, s, h) {
    return new M.qI(t, i, e, n, r, s, h)
},
    M.dm = M.em.extend({
        Yb: q,
        jc: q,
        ctor: function(t, i, e) {
            var n;
            t && 0 < t.length ? (this.jc = M.vs, this.Yb = M.Kw, n = new M.Y(t, this.jc, this.Yb)) : (this.Yb = 0, this.jc = ""),
                M.em.prototype.ctor.call(this, n, i, e)
        },
        Nd: function(t, i, e) {
            return (!t || 0 == t.length) && b("Value should be non-null and its length should be greater than 0"),
                this.jc = M.vs,
                this.Yb = M.Kw,
                t = new M.Y(t, this.jc, this.Yb),
                this.ZP(t, i, e),
                p
        },
        Fz: function(t) {
            this.Yb = t,
                this.eN()
        },
        RF: E("Yb"),
        Ez: function(t) {
            this.jc = t,
                this.eN()
        },
        QF: E("jc"),
        eN: function() {
            var t = new M.Y(this.qd.string, this.jc, this.Yb);
            this.Gz(t)
        }
    }), M.dm.Fz = function(t) {
    M.Kw = t
},
    M.dm.fontSize = function() {
        return M.Kw
    },
    M.dm.Ez = function(t) {
        M.fM && (M.vs = ""),
            M.vs = t,
            M.fM = p
    },
    T = M.dm.prototype, M.k(T, "fontSize", T.RF, T.Fz), M.k(T, "fontName", T.QF, T.Ez), M.dm.fontName = function() {
    return M.vs
},
    M.dm.create = function(t, i, e) {
        return new M.dm(t, i, e)
    },
    M.oo = M.Pc.extend({
        Gd: q,
        We: q,
        Re: q,
        ctor: function(t, i, e, n, r) {
            if (M.Pc.prototype.ctor.call(this), this.Re = this.We = this.Gd = q, i !== k) {
                var s,
                    h,
                    a;
                r !== k ? (s = e, a = n, h = r) : n !== k && M.Vb(n) ? (s = e, a = n) : n !== k && M.Vb(e) ? (h = n, a = e, s = new M.O(i)) : e === k && (s = new M.O(i)),
                    this.aQ(t, i, s, a, h)
            }
        },
        j3: E("Gd"),
        fH: function(t) {
            this.Gd != t && (t && (this.T(t, 0, M.iU), t.anchorX = 0, t.anchorY = 0), this.Gd && this.removeChild(this.Gd, p), this.Gd = t, this.width = this.Gd.width, this.height = this.Gd.height, this.Rx(), t.wu && !t.Aa && t.addEventListener("load",
                function(t) {
                    this.width = t.width,
                        this.height = t.height
                },
                this))
        },
        z3: E("We"),
        jH: function(t) {
            this.We != t && (t && (this.T(t, 0, M.SU), t.anchorX = 0, t.anchorY = 0), this.We && this.removeChild(this.We, p), this.We = t, this.Rx())
        },
        J2: E("Re"),
        dH: function(t) {
            this.Re != t && (t && (this.T(t, 0, M.dT), t.anchorX = 0, t.anchorY = 0), this.Re && this.removeChild(this.Re, p), this.Re = t, this.Rx())
        },
        aQ: function(t, i, e, n, r) {
            return this.Gt(n, r),
                this.fH(t),
                this.jH(i),
                this.dH(e),
            (t = this.Gd) && (this.width = t.width, this.height = t.height, t.wu && !t.Aa && t.addEventListener("load",
                function(t) {
                    this.width = t.width,
                        this.height = t.height,
                        this.cascadeOpacity = this.cascadeColor = p
                },
                this)),
                this.cascadeOpacity = this.cascadeColor = p
        },
        mb: function(t) {
            this.Gd.color = t,
            this.We && (this.We.color = t),
            this.Re && (this.Re.color = t)
        },
        fg: function() {
            return this.Gd.color
        },
        pb: function(t) {
            this.Gd.opacity = t,
            this.We && (this.We.opacity = t),
            this.Re && (this.Re.opacity = t)
        },
        bh: function() {
            return this.Gd.opacity
        },
        selected: function() {
            M.Pc.prototype.selected.call(this),
            this.Gd && (this.Re && (this.Re.visible = r), this.We ? (this.Gd.visible = r, this.We.visible = p) : this.Gd.visible = p)
        },
        hi: function() {
            M.Pc.prototype.hi.call(this),
            this.Gd && (this.Gd.visible = p, this.We && (this.We.visible = r), this.Re && (this.Re.visible = r))
        },
        Le: function(t) {
            this.vf != t && (M.Pc.prototype.Le.call(this, t), this.Rx())
        },
        Rx: function() {
            var t = this.Gd,
                i = this.We,
                e = this.Re;
            this.vf ? (t && (t.visible = p), i && (i.visible = r), e && (e.visible = r)) : e ? (t && (t.visible = r), i && (i.visible = r), e && (e.visible = p)) : (t && (t.visible = p), i && (i.visible = r))
        }
    }), T = M.oo.prototype, M.k(T, "normalImage", T.j3, T.fH), M.k(T, "selectedImage", T.z3, T.jH), M.k(T, "disabledImage", T.J2, T.dH), M.oo.create = function(t, i, e, n, r) {
    return new M.oo(t, i, e, n, r || k)
},
    M.GA = M.oo.extend({
        ctor: function(t, i, e, n, r) {
            var s = q,
                h = q,
                a = q,
                o = q,
                c = q;
            t === k ? M.oo.prototype.ctor.call(this) : (s = new M.O(t), i && (h = new M.O(i)), n === k ? o = e: r === k ? (o = e, c = n) : r && (a = new M.O(e), o = n, c = r), M.oo.prototype.ctor.call(this, s, h, a, o, c))
        },
        rma: function(t) {
            this.fH(new M.O(t))
        },
        Oma: function(t) {
            this.jH(new M.O(t))
        },
        Qla: function(t) {
            this.dH(new M.O(t))
        },
        Rga: function(t, i, e, n, r) {
            var s = q,
                h = q,
                a = q;
            return t && (s = new M.O(t)),
            i && (h = new M.O(i)),
            e && (a = new M.O(e)),
                this.aQ(s, h, a, n, r)

        }
    }), M.GA.create = function(t, i, e, n, r) {
    return new M.GA(t, i, e, n, r)
},
    M.HA = M.Pc.extend({
        Qd: q,
        Nh: 0,
        Be: q,
        he: q,
        ctor: function() {
            M.Pc.prototype.ctor.call(this),
                this.Nh = 0,
                this.Qd = [],
                this.Be = 0,
                this.he = M.color.WHITE,
            0 < arguments.length && this.lG(Array.prototype.slice.apply(arguments))
        },
        bh: E("Be"),
        pb: function(t) {
            if (this.Be = t, this.Qd && 0 < this.Qd.length) for (var i = 0; i < this.Qd.length; i++) this.Qd[i].opacity = t;
            this.he.a = t
        },
        fg: function() {
            var t = this.he;
            return M.color(t.r, t.g, t.b, t.a)
        },
        mb: function(t) {
            var i = this.he;
            if (i.r = t.r, i.g = t.g, i.b = t.b, this.Qd && 0 < this.Qd.length) for (i = 0; i < this.Qd.length; i++) this.Qd[i].mb(t);
            t.a !== k && !t.y0 && this.pb(t.a)
        },
        A3: E("Nh"),
        Lz: function(t) {
            if (t != this.Nh) {
                this.Nh = t,
                (t = this.Yh(M.QH)) && t.TG(r),
                    t = this.Qd[this.Nh],
                    this.T(t, 0, M.QH);
                var i = t.width,
                    e = t.height;
                this.width = i,
                    this.height = e,
                    t.H(i / 2, e / 2)
            }
        },
        hga: E("Qd"),
        Uma: A("Qd"),
        lG: function(t) {
            var i = t.length;
            M.Vb(t[t.length - 2]) ? (this.Gt(t[t.length - 2], t[t.length - 1]), i -= 2) : M.Vb(t[t.length - 1]) ? (this.Gt(t[t.length - 1], q), i -= 1) : this.Gt(q, q);
            for (var e = this.Qd, n = e.length = 0; i > n; n++) t[n] && e.push(t[n]);
            return this.Nh = M.cK,
                this.Lz(0),
                this.cascadeOpacity = this.cascadeColor = p
        },
        Sba: function(t) {
            this.Qd.push(t)
        },
        mt: function() {
            this.vf && this.Lz((this.Nh + 1) % this.Qd.length),
                M.Pc.prototype.mt.call(this)
        },
        selected: function() {
            M.Pc.prototype.selected.call(this),
                this.Qd[this.Nh].selected()
        },
        hi: function() {
            M.Pc.prototype.hi.call(this),
                this.Qd[this.Nh].hi()
        },
        Le: function(t) {
            if (this.vf != t) {
                M.Pc.prototype.Le.call(this, t);
                var i = this.Qd;
                if (i && 0 < i.length) for (var e = 0; e < i.length; e++) i[e].enabled = t
            }
        },
        ola: function() {
            return this.Qd[this.Nh]
        },
        W: function() {
            M.n.prototype.W.call(this),
                this.Lz(this.Nh)
        }
    }), T = M.HA.prototype, M.k(T, "selectedIndex", T.A3, T.Lz), M.HA.create = function() {
    0 < arguments.length && arguments[arguments.length - 1] == q && M.log("parameters should not be ending with null in Javascript");
    var t = new M.HA;
    return t.lG(Array.prototype.slice.apply(arguments)),
        t
},
    M.wr = 0, M.vr = 1, M.y$ = -128, M.WH = 5, M.no = M.Nc.extend({
    enabled: r,
    gd: q,
    Qh: -1,
    TN: q,
    Hb: "Menu",
    ctor: function(t) {
        M.Nc.prototype.ctor.call(this),
            this.he = M.color.WHITE,
            this.enabled = r,
            this.Be = 255,
            this.gd = q,
            this.Qh = -1,
            this.TN = M.sa.create({
                event: M.sa.km,
                Tl: p,
                hk: this.EZ,
                Jl: this.IZ,
                Il: this.GZ,
                Vt: this.FZ
            }),
        0 < arguments.length && arguments[arguments.length - 1] == q && M.log("parameters should not be ending with null in Javascript");
        var i,
            e = arguments.length;
        if (0 == e) i = [];
        else if (1 == e) i = t instanceof Array ? t: [t];
        else if (e > 1) {
            i = [];
            for (var n = 0; e > n; n++) arguments[n] && i.push(arguments[n])
        }
        this.VP(i)
    },
    W: function() {
        var t = this.TN;
        t.yf || M.wa.addListener(t, this),
            M.n.prototype.W.call(this)
    },
    isEnabled: E("enabled"),
    Le: A("enabled"),
    lG: function(t) {
        var i = [];
        if (t) for (var e = 0; e < t.length; e++) t[e] && i.push(t[e]);
        return this.VP(i)
    },
    VP: function(t) {
        if (M.Nc.prototype.ha.call(this)) {
            this.enabled = p;
            var i = M.Eu;
            if (this.H(i.width / 2, i.height / 2), this.re(i), this.Ol(.5, .5), this.Fy(p), t) for (i = 0; i < t.length; i++) this.T(t[i], i);
            return this.gd = q,
                this.Qh = M.wr,
                this.cascadeOpacity = this.cascadeColor = p
        }
        return r
    },
    T: function(t, i, e) {
        t instanceof M.Pc || b("cc.Menu.addChild() : Menu only supports MenuItem objects as children"),
            M.Nc.prototype.T.call(this, t, i, e)
    },
    dca: function() {
        this.M0(M.WH)
    },
    M0: function(t) {
        var i,
            e,
            n,
            r,
            s = -t,
            h = this.u;
        if (h && 0 < h.length) {
            for (e = 0, i = h.length; i > e; e++) s += h[e].height * h[e].scaleY + t;
            var a = s / 2;
            for (e = 0, i = h.length; i > e; e++) r = h[e],
                n = r.height,
                s = r.scaleY,
                r.H(0, a - n * s / 2),
                a -= n * s + t
        }
    },
    aca: function() {
        this.L0(M.WH)
    },
    L0: function(t) {
        var i,
            e,
            n,
            r,
            s = -t,
            h = this.u;
        if (h && 0 < h.length) {
            for (i = 0, e = h.length; e > i; i++) s += h[i].width * h[i].scaleX + t;
            var a = -s / 2;
            for (i = 0, e = h.length; e > i; i++) r = h[i],
                s = r.scaleX,
                n = h[i].width,
                r.H(a + n * s / 2, 0),
                a += n * s + t
        }
    },
    bca: function() {
        0 < arguments.length && arguments[arguments.length - 1] == q && M.log("parameters should not be ending with null in Javascript");
        for (var t = [], i = 0; i < arguments.length; i++) t.push(arguments[i]);
        var e,
            n,
            r,
            s = -5,
            h = 0,
            a = 0,
            o = 0,
            c = this.u;
        if (c && 0 < c.length) for (i = 0, r = c.length; r > i; i++) h >= t.length || !(e = t[h]) || (n = c[i].height, a = a >= n || isNaN(n) ? a: n, ++o, o >= e && (s += a + 5, a = o = 0, ++h));
        var u = M.K.Ea(),
            f = e = a = h = 0,
            l = 0,
            s = s / 2;
        if (c && 0 < c.length) for (i = 0, r = c.length; r > i; i++) {
            var d = c[i];
            0 == e && (e = t[h], l = f = u.width / (1 + e)),
                n = d.Vk(),
                a = a >= n || isNaN(n) ? a: n,
                d.H(l - u.width / 2, s - n / 2),
                l += f,
                ++o,
            o >= e && (s -= a + 5, a = e = o = 0, ++h)
        }
    },
    cca: function() {
        0 < arguments.length && arguments[arguments.length - 1] == q && M.log("parameters should not be ending with null in Javascript");
        var t,
            i = [];
        for (t = 0; t < arguments.length; t++) i.push(arguments[t]);
        var e,
            n,
            r,
            s,
            h = [],
            a = [],
            o = -10,
            c = -5,
            u = 0,
            f = 0,
            l = 0,
            d = this.u;
        if (d && 0 < d.length) for (t = 0, r = d.length; r > t; t++) n = d[t],
        u >= i.length || !(e = i[u]) || (s = n.width, f = f >= s || isNaN(s) ? f: s, c += n.height + 5, ++l, l >= e && (h.push(f), a.push(c), o += f + 10, f = l = 0, c = -5, ++u));
        c = M.K.Ea(),
            e = f = u = 0;
        var o = -o / 2,
            p = 0;
        if (d && 0 < d.length) for (t = 0, r = d.length; r > t; t++) n = d[t],
        0 == e && (e = i[u], p = a[u]),
            s = n.Bh(),
            f = f >= s || isNaN(s) ? f: s,
            n.H(o + h[u] / 2, p - c.height / 2),
            p -= n.height + 10,
            ++l,
        l >= e && (o += f + 5, f = e = l = 0, ++u)
    },
    removeChild: function(t, i) {
        t != q && (t instanceof M.Pc ? (this.gd == t && (this.gd = q), M.n.prototype.removeChild.call(this, t, i)) : M.log("cc.Menu.removeChild():Menu only supports MenuItem objects as children"))
    },
    EZ: function(t, i) {
        var e = i.rc;
        if (e.Qh != M.wr || !e.zc || !e.enabled) return r;
        for (var n = e.parent; n != q; n = n.parent) if (!n.zc) return r;
        return e.gd = e.zM(t),
            e.gd ? (e.Qh = M.vr, e.gd.selected(), p) : r
    },
    GZ: function(t, i) {
        var e = i.rc;
        e.Qh !== M.vr ? M.log("cc.Menu.onTouchEnded(): invalid state") : (e.gd && (e.gd.hi(), e.gd.mt()), e.Qh = M.wr)
    },
    FZ: function(t, i) {
        var e = i.rc;
        e.Qh !== M.vr ? M.log("cc.Menu.onTouchCancelled(): invalid state") : (this.gd && e.gd.hi(), e.Qh = M.wr)
    },
    IZ: function(t, i) {
        var e = i.rc;
        if (e.Qh !== M.vr) M.log("cc.Menu.onTouchMoved(): invalid state");
        else {
            var n = e.zM(t);
            n != e.gd && (e.gd && e.gd.hi(), e.gd = n, e.gd && e.gd.selected())
        }
    },
    xb: function() {
        this.Qh == M.vr && (this.gd && (this.gd.hi(), this.gd = q), this.Qh = M.wr),
            M.n.prototype.xb.call(this)
    },
    Jf: z(),
    gg: F(r),
    zM: function(t) {
        t = t.zl();
        var i,
            e = this.u;
        if (e && 0 < e.length) for (var n = e.length - 1; n >= 0; n--) if (i = e[n], i.zc && i.isEnabled()) {
            var r = i.aq(t),
                s = i.rect();
            if (s.x = 0, s.y = 0, M.fu(s, r)) return i
        }
        return q
    }
}), T = M.no.prototype, M.no.create = function(t) {
    var i = arguments.length;
    return i > 0 && arguments[i - 1] == q && M.log("parameters should not be ending with null in Javascript"),
        0 == i ? new M.no: 1 == i ? new M.no(t) : new M.no(Array.prototype.slice.call(arguments, 0))
},
    M.daa = 0, M.$$ = 1, M.caa = 2, M.aaa = 3, M.baa = 4, M.Z$ = 5, M.Tna = function(t, i, e) {
    var n = 2;
    return n + 1 > i ? r: (t = new M.HS(t), t.Hz(n), e.type = t.X(), n += 10, n + 4 + 1 > i ? r: (t.Hz(n), e.width = t.Y5(), e.height = t.X5(), e.pixelDepth = t.X(), n + 5 + 1 > i ? r: (i = t.X(), e.hP = 0, 32 & i && (e.hP = 1), p)))
},
    M.Una = function(t, i, e) {
        var n,
            s;
        if (n = 0 | e.pixelDepth / 2, s = e.height * e.width * n, 18 + s > i) return r;
        if (e.Ff = M.Wv(t, 18, 18 + s), n >= 3) for (t = 0; s > t; t += n) i = e.Ff[t],
            e.Ff[t] = e.Ff[t + 2],
            e.Ff[t + 2] = i;
        return p
    },
    M.Wna = function(t) {
        var i,
            e;
        if (8 !== t.pixelDepth) {
            var n = t.pixelDepth / 8,
                r = new Uint8Array(t.height * t.width);
            if (r !== q) {
                for (e = i = 0; e < t.width * t.height; i += n, e++) r[e] = .3 * t.Ff[i] + .59 * t.Ff[i + 1] + .11 * t.Ff[i + 2];
                t.pixelDepth = 8,
                    t.type = 3,
                    t.Ff = r
            }
        }
    },
    M.Rna = function(t) {
        t && (t.Ff = q)
    },
    M.Vna = function(t, i, e) {
        var n,
            r,
            s,
            h = 0,
            a = 0,
            o = 0,
            c = [],
            u = 0,
            f = 18;
        for (n = e.pixelDepth / 8, r = e.height * e.width, s = 0; r > s; s++) {
            if (0 != u) u--,
                a = 0 != o;
            else {
                if (f + 1 > i) break;
                u = t[f],
                    f += 1,
                (o = 128 & u) && (u -= 128),
                    a = 0
            }
            if (!a) {
                if (f + n > i) break;
                c = M.Wv(t, f, f + n),
                    f += n,
                n >= 3 && (a = c[0], c[0] = c[2], c[2] = a)
            }
            for (a = 0; n > a; a++) e.Ff[h + a] = c[a];
            h += n
        }
        return p
    },
    M.Sna = function(t) {
        for (var i = t.width * (t.pixelDepth / 8), e = 0; e < t.height / 2; e++) {
            var n = M.Wv(t.Ff, e * i, e * i + i);
            M.oK(M.Wv(t.Ff, (t.height - (e + 1)) * i, i), t.Ff, e * i),
                M.oK(n, t.Ff, (t.height - (e + 1)) * i)
        }
        t.hP = 0
    },
    M.Wv = function(t, i, e) {
        return t instanceof Array ? t.slice(i, e) : t.subarray(i, e)
    },
    M.oK = function(t, i, e) {
        for (var n = 0; n < t.length; n++) i[e + n] = t[n]
    },
    M.HS = M.xa.extend({
        Co: q,
        Ga: 0,
        ctor: A("Co"),
        yla: function(t) {
            this.Co = t,
                this.Ga = 0
        },
        hea: E("Co"),
        vX: function(t) {
            this.Ga + Math.ceil(t / 8) < this.Po.length || b(Error("Index out of bound"))
        },
        NX: function(t, i) {
            var e = t + i + 1,
                n = e >> 3;
            this.vX(e);
            var e = Math.pow(2, i - 1) - 1,
                r = this.LD(t + i, 1, n),
                s = this.LD(t, i, n),
                h = 0,
                a = 2,
                o = 0;
            do
                for (var c = this.px(++o, n), M = t % 8 || 8, u = 1 << M; u >>= 1;) c & u && (h += 1 / a),
                    a *= 2;
            while (t -= M);
            return this.Ga += n,
                s == (e << 1) + 1 ? h ? 0 / 0: r ? -1 / 0: 1 / 0: (1 + -2 * r) * (s || h ? s ? Math.pow(2, s - e) * (1 + h) : Math.pow(2, -e + 1) * h: 0)
        },
        px: function(t, i) {
            return this.Po[this.Ga + i - t - 1]
        },
        qw: function(t, i) {
            var e = this.LD(0, t, t / 8),
                n = Math.pow(2, t);
            return this.Ga += t / 8,
                i && e >= n / 2 ? e - n: e
        },
        T_: function(t, i) {
            for (++i; --i; t = 1073741824 == (1073741824 & (t %= 2147483648)) ? 2 * t: 2 * (t - 1073741824) + 2147483648);
            return t
        },
        LD: function(t, i, e) {
            var n = (t + i) % 8,
                r = t % 8,
                s = e - (t >> 3) - 1;
            t = e + ( - (t + i) >> 3);
            var h = s - t;
            for (i = this.px(s, e) >> r & (1 << (h ? 8 - r: i)) - 1, h && n && (i += (this.px(t++, e) & (1 << n) - 1) << (h--<<3) - r); h;) i += this.T_(this.px(t++, e), (h--<<3) - r);
            return i
        },
        Eka: function() {
            return this.qw(32, p)
        },
        X5: function() {
            return this.qw(32, r)
        },
        Gka: function() {
            return this.NX(23, 8)
        },
        Fka: function() {
            return this.qw(16, p)
        },
        Y5: function() {
            return this.qw(16, r)
        },
        X: function() {
            var t = this.Po[this.Ga];
            return this.Ga += 1,
                t
        },
        Bka: function(t, i) {
            return this.Co instanceof Array ? this.Co.slice(t, i) : this.Co.subarray(t, i)
        },
        Hz: A("Ga"),
        Yj: E("Ga")
    }), M.Hv = 0, M.yk = 1, M.Gv = 2, M.pB = M.n.extend({
    Tb: q,
    GG: q,
    Cq: q,
    sd: q,
    Qb: q,
    Qj: q,
    Hb: "TMXTiledMap",
    ctor: function(t, i) {
        M.n.prototype.ctor.call(this),
            this.sd = M.size(0, 0),
            this.Qb = M.size(0, 0),
            i !== k ? this.oG(t, i) : t !== k && this.nG(t)
    },
    TF: function() {
        return M.size(this.sd.width, this.sd.height)
    },
    vR: function(t) {
        this.sd.width = t.width,
            this.sd.height = t.height
    },
    MC: function() {
        return this.sd.width
    },
    gE: function(t) {
        this.sd.width = t
    },
    LC: function() {
        return this.sd.height
    },
    fE: function(t) {
        this.sd.height = t
    },
    qq: function() {
        return M.size(this.Qb.width, this.Qb.height)
    },
    LR: function(t) {
        this.Qb.width = t.width,
            this.Qb.height = t.height
    },
    us: function() {
        return this.Qb.width
    },
    Us: function(t) {
        this.Qb.width = t
    },
    ts: function() {
        return this.Qb.height
    },
    Ts: function(t) {
        this.Qb.height = t
    },
    ofa: E("GG"),
    nma: A("GG"),
    tP: E("Cq"),
    wR: A("Cq"),
    sy: E("Tb"),
    Jz: A("Tb"),
    nG: function(t) {
        if ((!t || 0 == t.length) && b("cc.TMXTiledMap.initWithTMXFile(): tmxFile should be non-null or non-empty string."), this.height = this.width = 0, t = new M.Gr(t), !t) return r;
        var i = t.cn;
        return (!i || 0 === i.length) && M.log("cc.TMXTiledMap.initWithTMXFile(): Map not found. Please check the filename."),
            this.DK(t),
            p
    },
    oG: function(t, i) {
        this.height = this.width = 0;
        var e = new M.Gr(t, i),
            n = e.cn;
        return (!n || 0 === n.length) && M.log("cc.TMXTiledMap.initWithXML(): Map not found. Please check the filename."),
            this.DK(e),
            p
    },
    DK: function(t) {
        this.sd = t.TF(),
            this.Qb = t.qq(),
            this.GG = t.orientation,
            this.Cq = t.tP(),
            this.Tb = t.Tb,
            this.Qj = t.Qj;
        var i = 0,
            e = t.Ae;
        if (e) for (var n = q, r = 0, s = e.length; s > r; r++)(n = e[r]) && n.visible && (n = this.OZ(n, t), this.T(n, i, i), this.width = Math.max(this.width, n.width), this.height = Math.max(this.height, n.height), i++)
    },
    eca: function() {
        for (var t = [], i = this.u, e = 0, n = i.length; n > e; e++) {
            var r = i[e];
            r && r instanceof M.Fr && t.push(r)
        }
        return t
    },
    efa: function(t) { (!t || 0 === t.length) && b("cc.TMXTiledMap.getLayer(): layerName should be non-null or non-empty string.");
        for (var i = this.u, e = 0; e < i.length; e++) {
            var n = i[e];
            if (n && n.bz == t) return n
        }
        return q
    },
    yfa: function(t) {
        if ((!t || 0 === t.length) && b("cc.TMXTiledMap.getObjectGroup(): groupName should be non-null or non-empty string."), this.Cq) for (var i = 0; i < this.Cq.length; i++) {
            var e = this.Cq[i];
            if (e && e.Et == t) return e
        }
        return q
    },
    XF: function(t) {
        return this.Tb[t.toString()]
    },
    xka: function(t) {
        return M.log("propertiesForGID is deprecated. Please use getPropertiesForGID instead."),
            this.r3[t]
    },
    r3: function(t) {
        return this.Qj[t]
    },
    OZ: function(t, i) {
        var e = this.h0(t, i),
            e = new M.Fr(e, t, i);
        return t.FQ = r,
            e.C7(),
            e
    },
    h0: function(t, i) {
        var e = t.Ba,
            n = i.cn;
        if (n) for (var r = n.length - 1; r >= 0; r--) {
            var s = n[r];
            if (s) for (var h = 0; h < e.height; h++) for (var a = 0; a < e.width; a++) {
                var o = t.Xe[a + e.width * h];
                if (0 != o && (o & M.qB) >>> 0 >= s.Bn) return s
            }
        }
        return M.log("cocos2d: Warning: TMX Layer " + t.name + " has no tiles"),
            q
    }
}), T = M.pB.prototype, M.k(T, "mapWidth", T.MC, T.gE), M.k(T, "mapHeight", T.LC, T.fE), M.k(T, "tileWidth", T.us, T.Us), M.k(T, "tileHeight", T.ts, T.Ts), M.pB.create = function(t, i) {
    return new M.pB(t, i)
},
    M.XV = 0, M.gaa = 1, M.faa = 2, M.iaa = 3, M.haa = 4, M.jaa = 5, M.Hr = 2147483648, M.Ir = 1073741824, M.rJ = 536870912, M.sJ = (M.Hr | M.Ir | M.rJ) >>> 0, M.qB = ~M.sJ >>> 0, M.jm = M.xa.extend({
    Tb: q,
    name: "",
    Ba: q,
    Xe: q,
    visible: q,
    Be: q,
    FQ: p,
    Gm: 1e5,
    Fm: 0,
    offset: q,
    ctor: function() {
        this.Tb = [],
            this.name = "",
            this.Ba = q,
            this.Xe = [],
            this.visible = p,
            this.Be = 0,
            this.FQ = p,
            this.Gm = 1e5,
            this.Fm = 0,
            this.offset = M.d(0, 0)
    },
    sy: E("Tb"),
    Jz: A("Tb")
}), M.WV = M.xa.extend({
    name: "",
    Bn: 0,
    Qb: q,
    uu: 0,
    margin: 0,
    QR: "",
    Gy: q,
    ctor: function() {
        this.Qb = M.size(0, 0),
            this.Gy = M.size(0, 0)
    },
    gu: function(t) {
        var i = M.rect(0, 0, 0, 0);
        i.width = this.Qb.width,
            i.height = this.Qb.height,
            t &= M.qB,
            t -= parseInt(this.Bn, 10);
        var e = parseInt((this.Gy.width - 2 * this.margin + this.uu) / (this.Qb.width + this.uu), 10);
        return i.x = parseInt(t % e * (this.Qb.width + this.uu) + this.margin, 10),
            i.y = parseInt(parseInt(t / e, 10) * (this.Qb.height + this.uu) + this.margin, 10),
            i
    }
}), M.Gr = M.wv.extend({
    Tb: q,
    orientation: q,
    parentElement: q,
    pz: q,
    az: 0,
    tH: r,
    Wq: q,
    uF: q,
    dx: q,
    sd: q,
    Qb: q,
    Ae: q,
    cn: q,
    Qj: q,
    tx: "",
    OK: 0,
    ctor: function(t, i) {
        M.wv.prototype.ctor.apply(this),
            this.sd = M.size(0, 0),
            this.Qb = M.size(0, 0),
            this.Ae = [],
            this.cn = [],
            this.dx = [],
            this.Tb = [],
            this.Qj = {},
            this.OK = 0,
            i !== k ? this.oG(t, i) : t !== k && this.nG(t)
    },
    Bfa: E("orientation"),
    wma: A("orientation"),
    TF: function() {
        return M.size(this.sd.width, this.sd.height)
    },
    vR: function(t) {
        this.sd.width = t.width,
            this.sd.height = t.height
    },
    MC: function() {
        return this.sd.width
    },
    gE: function(t) {
        this.sd.width = t
    },
    LC: function() {
        return this.sd.height
    },
    fE: function(t) {
        this.sd.height = t
    },
    qq: function() {
        return M.size(this.Qb.width, this.Qb.height)
    },
    LR: function(t) {
        this.Qb.width = t.width,
            this.Qb.height = t.height
    },
    us: function() {
        return this.Qb.width
    },
    Us: function(t) {
        this.Qb.width = t
    },
    ts: function() {
        return this.Qb.height
    },
    Ts: function(t) {
        this.Qb.height = t
    },
    jfa: E("Ae"),
    U6: function(t) {
        this.Ae.push(t)
    },
    rga: E("cn"),
    t7: function(t) {
        this.cn.push(t)
    },
    tP: E("dx"),
    wR: function(t) {
        this.dx.push(t)
    },
    Ffa: E("parentElement"),
    Bma: A("parentElement"),
    Gfa: E("pz"),
    Cma: A("pz"),
    ffa: E("az"),
    gma: A("az"),
    gga: E("tH"),
    Tma: A("tH"),
    sy: E("Tb"),
    Jz: A("Tb"),
    nG: function(t) {
        return this.qM(t, q),
            this.LG(t)
    },
    oG: function(t, i) {
        return this.qM(q, i),
            this.D5(t)
    },
    LG: function(t, i) {
        var e = (i = i || r) ? t: M.aa.Yd(t);
        e || b("Please load the resource first : " + t);
        var n,
            s,
            e = this.tD(e).documentElement;
        if (n = e.getAttribute("version"), s = e.getAttribute("orientation"), "map" == e.nodeName && ("1.0" != n && n !== q && M.log("cocos2d: TMXFormat: Unsupported TMX version:" + n), "orthogonal" == s ? this.orientation = M.Hv: "isometric" == s ? this.orientation = M.Gv: "hexagonal" == s ? this.orientation = M.yk: s !== q && M.log("cocos2d: TMXFomat: Unsupported orientation:" + s), n = M.size(0, 0), n.width = parseFloat(e.getAttribute("width")), n.height = parseFloat(e.getAttribute("height")), this.vR(n), n = M.size(0, 0), n.width = parseFloat(e.getAttribute("tilewidth")), n.height = parseFloat(e.getAttribute("tileheight")), this.LR(n), s = e.querySelectorAll("map > properties >  property"))) {
            var h = {};
            for (n = 0; n < s.length; n++) h[s[n].getAttribute("name")] = s[n].getAttribute("value");
            this.Tb = h
        }
        for (h = e.getElementsByTagName("tileset"), "map" !== e.nodeName && (h = [], h.push(e)), n = 0; n < h.length; n++) {
            s = h[n];
            var a = s.getAttribute("source");
            if (a) s = i ? M.path.join(this.tx, a) : M.path.Xp(t, a),
                this.LG(s);
            else {
                a = new M.WV,
                    a.name = s.getAttribute("name") || "",
                    a.Bn = parseInt(s.getAttribute("firstgid")) || 0,
                    a.uu = parseInt(s.getAttribute("spacing")) || 0,
                    a.margin = parseInt(s.getAttribute("margin")) || 0;
                var o = M.size(0, 0);
                o.width = parseFloat(s.getAttribute("tilewidth")),
                    o.height = parseFloat(s.getAttribute("tileheight")),
                    a.Qb = o;
                var o = s.getElementsByTagName("image")[0].getAttribute("source"),
                    c = -1;
                if (this.Wq && (c = this.Wq.lastIndexOf("/")), a.QR = -1 !== c ? this.Wq.substr(0, c + 1) + o: this.tx + (this.tx ? "/": "") + o, this.t7(a), o = s.getElementsByTagName("tile")) for (c = 0; c < o.length; c++) {
                    s = o[c],
                        this.pz = parseInt(a.Bn) + parseInt(s.getAttribute("id") || 0);
                    var u = s.querySelectorAll("properties > property");
                    if (u) {
                        var f = {};
                        for (s = 0; s < u.length; s++) {
                            var l = u[s].getAttribute("name");
                            f[l] = u[s].getAttribute("value")
                        }
                        this.Qj[this.pz] = f
                    }
                }
            }
        }
        if (h = e.getElementsByTagName("layer")) for (n = 0; n < h.length; n++) {
            for (o = h[n], c = o.getElementsByTagName("data")[0], a = new M.jm, a.name = o.getAttribute("name"), s = M.size(0, 0), s.width = parseFloat(o.getAttribute("width")), s.height = parseFloat(o.getAttribute("height")), a.Ba = s, s = o.getAttribute("visible"), a.visible = "0" != s, s = o.getAttribute("opacity") || 1, a.Be = s ? parseInt(255 * parseFloat(s)) : 255, a.offset = M.d(parseFloat(o.getAttribute("x")) || 0, parseFloat(o.getAttribute("y")) || 0), u = "", s = 0; s < c.childNodes.length; s++) u += c.childNodes[s].nodeValue;
            if (u = u.trim(), s = c.getAttribute("compression"), f = c.getAttribute("encoding"), s && "gzip" !== s && "zlib" !== s) return M.log("cc.TMXMapInfo.parseXMLFile(): unsupported compression method"),
                q;
            switch (s) {
                case "gzip":
                    a.Xe = M.mS(u, 4);
                    break;
                case "zlib":
                    s = new Zlib.io(M.ra.Yl.HO(u, 1)),
                        a.Xe = M.u8(s.IO());
                    break;
                case q:
                case "":
                    if ("base64" == f) a.Xe = M.ra.Yl.HO(u, 4);
                    else if ("csv" === f) for (a.Xe = [], s = u.split(","), c = 0; c < s.length; c++) a.Xe.push(parseInt(s[c]));
                    else for (s = c.getElementsByTagName("tile"), a.Xe = [], c = 0; c < s.length; c++) a.Xe.push(parseInt(s[c].getAttribute("gid")));
                    break;
                default:
                    this.az == M.jm.EH && M.log("cc.TMXMapInfo.parseXMLFile(): Only base64 and/or gzip/zlib maps are supported")
            }
            if (o = o.querySelectorAll("properties > property")) {
                for (c = {},
                         s = 0; s < o.length; s++) c[o[s].getAttribute("name")] = o[s].getAttribute("value");
                a.Tb = c
            }
            this.U6(a)
        }
        if (h = e.getElementsByTagName("objectgroup")) for (n = 0; n < h.length; n++) {
            if (o = h[n], a = new M.VV, a.Et = o.getAttribute("name"), a.f7(M.d(parseFloat(o.getAttribute("x")) * this.qq().width || 0, parseFloat(o.getAttribute("y")) * this.qq().height || 0)), c = o.querySelectorAll("objectgroup > properties > property")) for (s = 0; s < c.length; s++) u = {},
                u[c[s].getAttribute("name")] = c[s].getAttribute("value"),
                a.Tb = u;
            if (o = o.querySelectorAll("object")) for (s = 0; s < o.length; s++) {
                if (u = o[s], c = {},
                        c.name = u.getAttribute("name") || "", c.type = u.getAttribute("type") || "", c.x = parseInt(u.getAttribute("x") || 0) + a.vP().x, f = parseInt(u.getAttribute("y") || 0) + a.vP().y, c.width = parseInt(u.getAttribute("width")) || 0, c.height = parseInt(u.getAttribute("height")) || 0, c.y = parseInt(this.TF().height * this.qq().height) - f - c.height, c.rotation = parseInt(u.getAttribute("rotation")) || 0, f = u.querySelectorAll("properties > property")) for (l = 0; l < f.length; l++) c[f[l].getAttribute("name")] = f[l].getAttribute("value"); (f = u.querySelectorAll("polygon")) && 0 < f.length && (f = f[0].getAttribute("points")) && (c.polygonPoints = this.TM(f)),
                (u = u.querySelectorAll("polyline")) && 0 < u.length && (u = u[0].getAttribute("points")) && (c.polylinePoints = this.TM(u)),
                    a.b7(c)
            }
            this.wR(a)
        }
        return e
    },
    TM: function(t) {
        if (!t) return q;
        var i = [];
        t = t.split(" ");
        for (var e = 0; e < t.length; e++) {
            var n = t[e].split(",");
            i.push({
                x: n[0],
                y: n[1]
            })
        }
        return i
    },
    D5: function(t) {
        return this.LG(t, p)
    },
    oga: E("Qj"),
    cna: function(t) {
        this.Qj.push(t)
    },
    wea: E("uF"),
    Lla: A("uF"),
    iga: E("Wq"),
    Wma: A("Wq"),
    qM: function(t, i) {
        this.cn.length = 0,
            this.Ae.length = 0,
            this.Wq = t,
        i && (this.tx = i),
            this.dx.length = 0,
            this.Tb.length = 0,
            this.Qj.length = 0,
            this.uF = "",
            this.tH = r,
            this.az = M.jm.EH,
            this.parentElement = M.XV,
            this.OK = 0
    }
}), T = M.Gr.prototype, M.k(T, "mapWidth", T.MC, T.gE), M.k(T, "mapHeight", T.LC, T.fE), M.k(T, "tileWidth", T.us, T.Us), M.k(T, "tileHeight", T.ts, T.Ts), M.Gr.create = function(t, i) {
    return new M.Gr(t, i)
},
    M.aa.ej(["tmx", "tsx"], M.XN), M.jm.EH = 1, M.jm.W8 = 2, M.jm.X8 = 4, M.jm.Y8 = 8, M.VV = M.xa.extend({
    Tb: q,
    Et: "",
    mx: q,
    sp: q,
    ctor: function() {
        this.Et = "",
            this.mx = M.d(0, 0),
            this.Tb = [],
            this.sp = []
    },
    vP: function() {
        return M.d(this.mx)
    },
    f7: function(t) {
        this.mx.x = t.x,
            this.mx.y = t.y
    },
    sy: E("Tb"),
    Jz: function(t) {
        this.Tb.push(t)
    },
    $ea: function() {
        return this.Et.toString()
    },
    dma: A("Et"),
    yka: function(t) {
        return this.Tb[t]
    },
    Mja: function(t) {
        if (this.sp && 0 < this.sp.length) for (var i = this.sp, e = 0, n = i.length; n > e; e++) {
            var r = i[e].name;
            if (r && r == t) return i[e]
        }
        return q
    },
    zfa: E("sp"),
    b7: function(t) {
        this.sp.push(t)
    }
}), M.Fr = M.Pe.extend({
    ce: q,
    tg: q,
    $i: q,
    Tb: q,
    bz: "",
    Ba: q,
    Zb: q,
    Be: 255,
    Gm: q,
    Fm: q,
    SE: q,
    ME: q,
    Sg: q,
    ee: q,
    yh: q,
    Td: q,
    fe: q,
    gC: q,
    Hb: "TMXLayer",
    ctor: function(t, i, e) {
        if (M.Pe.prototype.ctor.call(this), this.Ud = [], this.Ba = M.size(0, 0), this.Zb = M.size(0, 0), M.B === M.ya) {
            var n = M.fb,
                r = M.Wb("canvas");
            r.width = n.width,
                r.height = n.height,
                this.Td = r,
                this.fe = this.Td.getContext("2d");
            var s = new M.fa;
            s.ld(r),
                s.Fb(),
                this.gC = s,
                this.width = n.width,
                this.height = n.height,
                this.Lk = this
        }
        e !== k && this.g4(t, i, e)
    },
    Vd: function() {
        this.$ = M.B === M.ya ? new M.Fv(this) : new M.qJ(this)
    },
    re: function(t, i) {
        var e = this.R;
        if (M.n.prototype.re.call(this, t, i), M.B === M.ya) {
            var n = this.Td,
                r = M.zb();
            if (n.width = 0 | 1.5 * e.width * r, n.height = 0 | 1.5 * e.height * r, this.$i === M.yk ? this.fe.translate(0, n.height - .5 * this.Zb.height) : this.fe.translate(0, n.height), e = this.gC.R, e.width = n.width, e.height = n.height, e = n.width * n.height, e > this.tZ) {
                for (this.AE || (this.AE = []), this.RN || (this.RN = []), this.bt = Math.ceil(e / this.tZ), e = this.AE, r = 0; r < this.bt; r++) {
                    e[r] || (e[r] = document.createElement("canvas"), this.RN[r] = e[r].getContext("2d"));
                    var s = e[r];
                    s.width = this.SN = Math.round(n.width / this.bt),
                        s.height = n.height
                }
                for (r = this.bt; r < e.length; r++) s.width = 0,
                    s.height = 0
            } else this.bt = 0
        }
    },
    Ja: q,
    ss: E("gC"),
    G: q,
    hn: function() {
        var t,
            i,
            e = this.u;
        if (this.zc && e && 0 !== e.length) {
            if (this.Ha && (this.zh = this.Ha.zh + 1), this.transform(), this.ge) {
                var n = this.fe,
                    s = this.Td,
                    h = M.view,
                    a = this.ka,
                    o = M.ia;
                for (o.Jp(a), this.Lc(), t = 0, i = e.length; i > t; t++) e[t] && (e[t].G(), e[t].ge = r);
                this.$.KX(o.Zr[a]),
                    n.save(),
                    n.clearRect(0, 0, s.width, -s.height),
                    t = M.Rp(this.vd),
                    n.transform(t.a, t.s, t.b, t.z, t.P * h.pa, -t.Q * h.Ta),
                    o.sx(n, a),
                    n.restore(),
                    this.ge = r
            }
            M.ia.nc(this.$)
        }
    },
    Tg: function() {
        this.ge = p,
        -1 === M.ia.Ti.indexOf(this) && M.ia.cu(this),
            this.Sm = p
    },
    Ia: q,
    Ro: function(t) {
        t = t || M.l;
        var i = 0 | -this.Cb.x,
            e = 0 | -this.Cb.y,
            n = M.view,
            r = this.Td;
        if (r) {
            var s = this.bt,
                h = r.height * n.Ta,
                a = .5 * this.Zb.height * n.Ta;
            if (s > 0) for (var r = this.AE, o = 0; s > o; o++) {
                var c = r[o];
                this.$i === M.yk ? t.drawImage(r[o], 0, 0, c.width, c.height, i + o * this.SN * n.pa, -(e + h) + a, c.width * n.pa, h) : t.drawImage(r[o], 0, 0, c.width, c.height, i + o * this.SN * n.pa, -(e + h), c.width * n.pa, h)
            } else this.$i === M.yk ? t.drawImage(r, 0, 0, r.width, r.height, i, -(e + h) + a, r.width * n.pa, h) : t.drawImage(r, 0, 0, r.width, r.height, i, -(e + h), r.width * n.pa, h)
        }
    },
    ifa: function() {
        return M.size(this.Ba.width, this.Ba.height)
    },
    jma: function(t) {
        this.Ba.width = t.width,
            this.Ba.height = t.height
    },
    xY: function() {
        return this.Ba.width
    },
    w_: function(t) {
        this.Ba.width = t
    },
    wY: function() {
        return this.Ba.height
    },
    v_: function(t) {
        this.Ba.height = t
    },
    pfa: function() {
        return M.size(this.Zb.width, this.Zb.height)
    },
    oma: function(t) {
        this.Zb.width = t.width,
            this.Zb.height = t.height
    },
    us: function() {
        return this.Zb.width
    },
    Us: function(t) {
        this.Zb.width = t
    },
    ts: function() {
        return this.Zb.height
    },
    Ts: function(t) {
        this.Zb.height = t
    },
    pga: E("ce"),
    dna: A("ce"),
    qga: E("tg"),
    ena: A("tg"),
    hfa: E("$i"),
    ima: A("$i"),
    sy: E("Tb"),
    Jz: A("Tb"),
    g4: function(t, i, e) {
        var n,
            s = i.Ba,
            h = .35 * parseInt(s.width * s.height) + 1;
        return t && (n = M.Ma.Vc(t.QR)),
            this.Ca(n, h) ? (this.bz = i.name, this.Ba = s, this.ce = i.Xe, this.Gm = i.Gm, this.Fm = i.Fm, this.Be = i.Be, this.Tb = i.Tb, this.yh = M.K.yh, this.tg = t, this.Zb = e.qq(), this.$i = e.orientation, t = this.pX(i.offset), this.H(M.MG(t)), this.ee = [], this.re(M.OR(M.size(this.Ba.width * this.Zb.width, this.Ba.height * this.Zb.height))), this.ME = r, this.SE = 0, p) : r
    },
    Nka: function() {
        this.ce && (this.ce = q),
        this.ee && (this.ee = q)
    },
    nga: function(t, i) {
        if (t || b("cc.TMXLayer.getTileAt(): pos should be non-null"), i !== k && (t = M.d(t, i)), (t.x >= this.Ba.width || t.y >= this.Ba.height || 0 > t.x || 0 > t.y) && b("cc.TMXLayer.getTileAt(): invalid position"), !this.ce || !this.ee) return M.log("cc.TMXLayer.getTileAt(): TMXLayer: the tiles map has been released"),
            q;
        var e = q,
            n = this.aG(t);
        if (0 === n) return e;
        var r = 0 | t.x + t.y * this.Ba.width,
            e = this.Yh(r);
        return e || (n = this.tg.gu(n), n = M.Nl(n), e = new M.O, e.Ca(this.texture, n), e.batchNode = this, e.H(this.ry(t)), e.vertexZ = this.fO(t), e.anchorX = 0, e.anchorY = 0, e.opacity = this.Be, n = this.YB(r), this.F0(e, n, r)),
            e
    },
    aG: function(t, i) {
        return t || b("cc.TMXLayer.getTileGIDAt(): pos should be non-null"),
        i !== k && (t = M.d(t, i)),
        (t.x >= this.Ba.width || t.y >= this.Ba.height || 0 > t.x || 0 > t.y) && b("cc.TMXLayer.getTileGIDAt(): invalid position"),
            this.ce && this.ee ? (this.ce[0 | t.x + t.y * this.Ba.width] & M.qB) >>> 0: (M.log("cc.TMXLayer.getTileGIDAt(): TMXLayer: the tiles map has been released"), q)
    },
    G3: function(t, i) {
        return t || b("cc.TMXLayer.getTileFlagsAt(): pos should be non-null"),
        i !== k && (t = M.d(t, i)),
        (t.x >= this.Ba.width || t.y >= this.Ba.height || 0 > t.x || 0 > t.y) && b("cc.TMXLayer.getTileFlagsAt(): invalid position"),
            this.ce && this.ee ? (this.ce[0 | t.x + t.y * this.Ba.width] & M.sJ) >>> 0: (M.log("cc.TMXLayer.getTileFlagsAt(): TMXLayer: the tiles map has been released"), q)
    },
    bna: function(t, i, e, n) {
        if (i || b("cc.TMXLayer.setTileGID(): pos should be non-null"), n !== k ? i = M.d(i, e) : n = e, (i.x >= this.Ba.width || i.y >= this.Ba.height || 0 > i.x || 0 > i.y) && b("cc.TMXLayer.setTileGID(): invalid position"), this.ce && this.ee) if (0 !== t && t < this.tg.Bn) M.log("cc.TMXLayer.setTileGID(): invalid gid:" + t);
        else {
            n = n || 0,
                this.Tg(),
                e = this.G3(i);
            var s = this.aG(i);
            if (s != t || e != n) if (e = (t | n) >>> 0, 0 === t) this.k6(i);
            else if (0 === s) this.fZ(e, i);
            else {
                var s = i.x + i.y * this.Ba.width,
                    h = this.Yh(s);
                h ? (t = this.tg.gu(t), t = M.Nl(t), h.yb(t, r), n != q && this.zx(h, i, e), this.ce[s] = e) : this.u0(e, i)
            }
        } else M.log("cc.TMXLayer.setTileGID(): TMXLayer: the tiles map has been released")
    },
    k6: function(t, i) {
        if (t || b("cc.TMXLayer.removeTileAt(): pos should be non-null"), i !== k && (t = M.d(t, i)), (t.x >= this.Ba.width || t.y >= this.Ba.height || 0 > t.x || 0 > t.y) && b("cc.TMXLayer.removeTileAt(): invalid position"), this.ce && this.ee) {
            if (0 !== this.aG(t)) {
                M.B === M.ya && this.Tg();
                var e = 0 | t.x + t.y * this.Ba.width,
                    n = this.YB(e);
                if (this.ce[e] = 0, this.ee.splice(n, 1), e = this.Yh(e)) M.Pe.prototype.removeChild.call(this, e, p);
                else if (M.B === M.Z && this.textureAtlas.WQ(n), this.u) for (var e = this.u, r = 0, s = e.length; s > r; r++) {
                    var h = e[r];
                    if (h) {
                        var a = h.atlasIndex;
                        a >= n && (h.atlasIndex = a - 1)
                    }
                }
            }
        } else M.log("cc.TMXLayer.removeTileAt(): TMXLayer: the tiles map has been released")
    },
    ry: function(t, i) {
        i !== k && (t = M.d(t, i));
        var e = M.d(0, 0);
        switch (this.$i) {
            case M.Hv:
                e = this.UZ(t);
                break;
            case M.Gv:
                e = this.TZ(t);
                break;
            case M.yk:
                e = this.SZ(t)
        }
        return M.MG(e)
    },
    XF: function(t) {
        return this.Tb[t]
    },
    C7: function() {
        M.B === M.ya ? this.tg.Gy = this.vc.R: (this.tg.Gy = this.textureAtlas.texture.R, this.textureAtlas.texture.YG()),
            this.NZ(),
        M.B === M.ya && this.Tg();
        for (var t = this.Ba.height, i = this.Ba.width, e = 0; t > e; e++) for (var n = 0; i > n; n++) {
            var r = this.ce[n + i * e];
            0 !== r && (this.hX(r, M.d(n, e)), this.Gm = Math.min(r, this.Gm), this.Fm = Math.max(r, this.Fm))
        }
        this.Fm >= this.tg.Bn && this.Gm >= this.tg.Bn || M.log("cocos2d:TMX: Only 1 tileset per layer is supported")
    },
    T: function() {
        M.log("addChild: is not supported on cc.TMXLayer. Instead use setTileGID or tileAt.")
    },
    removeChild: function(t, i) {
        if (t) if ( - 1 === this.u.indexOf(t)) M.log("cc.TMXLayer.removeChild(): Tile does not belong to TMXLayer");
        else {
            M.B === M.ya && this.Tg();
            var e = t.atlasIndex;
            this.ce[this.ee[e]] = 0,
                this.ee.splice(e, 1),
                M.Pe.prototype.removeChild.call(this, t, i),
                M.ia.oe = p
        }
    },
    gfa: E("bz"),
    hma: A("bz"),
    TZ: function(t) {
        return M.d(this.Zb.width / 2 * (this.Ba.width + t.x - t.y - 1), this.Zb.height / 2 * (2 * this.Ba.height - t.x - t.y - 2))
    },
    UZ: function(t) {
        return M.d(t.x * this.Zb.width, (this.Ba.height - t.y - 1) * this.Zb.height)
    },
    SZ: function(t) {
        return M.d(3 * t.x * this.Zb.width / 4, (this.Ba.height - t.y - 1) * this.Zb.height + (1 == t.x % 2 ? -this.Zb.height / 2: 0))
    },
    pX: function(t) {
        var i = M.d(0, 0);
        switch (this.$i) {
            case M.Hv:
                i = M.d(t.x * this.Zb.width, -t.y * this.Zb.height);
                break;
            case M.Gv:
                i = M.d(this.Zb.width / 2 * (t.x - t.y), this.Zb.height / 2 * ( - t.x - t.y));
                break;
            case M.yk:
                (0 !== t.x || 0 !== t.y) && M.log("offset for hexagonal map not implemented yet")
        }
        return i
    },
    hX: function(t, i) {
        var e = this.tg.gu(t),
            e = M.Nl(e),
            n = 0 | i.x + i.y * this.Ba.width,
            e = this.WD(e);
        this.zx(e, i, t);
        var r = this.ee.length;
        return this.Ny(e, r),
            this.ee.splice(r, 0, n),
            e
    },
    fZ: function(t, i) {
        var e = this.tg.gu(t),
            e = M.Nl(e),
            n = 0 | i.x + i.y * this.Ba.width,
            e = this.WD(e);
        this.zx(e, i, t);
        var r = this.jX(n);
        if (this.Ny(e, r), this.ee.splice(r, 0, n), this.u) for (var s = this.u, h = 0, a = s.length; a > h; h++) {
            var o = s[h];
            if (o) {
                var c = o.atlasIndex;
                c >= r && (o.atlasIndex = c + 1)
            }
        }
        return this.ce[n] = t,
            e
    },
    u0: function(t, i) {
        var e = this.tg.gu(t),
            n = this.yh,
            e = M.rect(e.x / n, e.y / n, e.width / n, e.height / n),
            n = i.x + i.y * this.Ba.width,
            e = this.WD(e);
        return this.zx(e, i, t),
            e.atlasIndex = this.YB(n),
            e.dirty = p,
            e.se(),
            this.ce[n] = t,
            e
    },
    NZ: function() {
        var t = this.XF("cc_vertexz");
        if (t) if ("automatic" == t) {
            this.ME = p;
            var i = this.XF("cc_alpha_func"),
                t = 0;
            i && (t = parseFloat(i)),
            M.B === M.Z && (this.shaderProgram = M.be.Bc(M.yv), i = M.l.getUniformLocation(this.shaderProgram.Fn(), M.dK), this.shaderProgram.sb(), this.shaderProgram.su(i, t))
        } else this.SE = parseInt(t, 10)
    },
    zx: function(t, i, e) {
        var n = i.x + i.y * this.Ba.width;
        t.H(this.ry(i)),
            M.B === M.Z ? t.vertexZ = this.fO(i) : t.tag = n,
            t.anchorX = 0,
            t.anchorY = 0,
            t.opacity = this.Be,
        M.B === M.Z && (t.rotation = 0),
            t.Cz(r),
            t.eH(r),
            (e & M.rJ) >>> 0 ? (t.anchorX = .5, t.anchorY = .5, t.x = this.ry(i).x + t.width / 2, t.y = this.ry(i).y + t.height / 2, i = (e & (M.Hr | M.Ir) >>> 0) >>> 0, i == M.Hr ? t.rotation = 90: i == M.Ir ? t.rotation = 270: (t.rotation = i == (M.Ir | M.Hr) >>> 0 ? 90: 270, t.Cz(p))) : ((e & M.Hr) >>> 0 && t.Cz(p), (e & M.Ir) >>> 0 && t.eH(p))
    },
    WD: function(t) {
        return M.B === M.Z ? (this.Sg ? (this.Sg.batchNode = q, this.Sg.yb(t, r)) : (this.Sg = new M.O, this.Sg.Ca(this.texture, t, r)), this.Sg.batchNode = this) : (this.Sg = new M.O, this.Sg.Ca(this.Qi, t, r), this.Sg.batchNode = this, this.Sg.parent = this, this.Sg.Lk = this),
            this.Sg
    },
    fO: function(t) {
        var i = 0,
            e = 0;
        if (this.ME) switch (this.$i) {
            case M.Gv:
                e = this.Ba.width + this.Ba.height,
                    i = -(e - (t.x + t.y));
                break;
            case M.Hv:
                i = -(this.Ba.height - t.y);
                break;
            case M.yk:
                M.log("TMX Hexa zOrder not supported");
                break;
            default:
                M.log("TMX invalid value")
        } else i = this.SE;
        return i
    },
    YB: function(t) {
        var i;
        if (this.ee) for (var e = this.ee, n = 0, r = e.length; r > n && (i = e[n], !(i == t)); n++);
        return M.Kt(i) || M.log("cc.TMXLayer._atlasIndexForExistantZ(): TMX atlas index not found. Shall not happen"),
            n
    },
    jX: function(t) {
        for (var i = this.ee, e = 0, n = i.length; n > e && !(t < i[e]); e++);
        return e
    }
}), T = M.Fr.prototype, M.B == M.Z ? (T.Ia = M.Pe.prototype.Ia, T.G = M.Pe.prototype.G, T.Ja = M.Pe.prototype.Ja) : (T.Ia = T.Ro, T.G = T.hn, T.Ja = T.ss), M.k(T, "texture", T.Ja, T.bb), M.k(T, "layerWidth", T.xY, T.w_), M.k(T, "layerHeight", T.wY, T.v_), M.k(T, "tileWidth", T.us, T.Us), M.k(T, "tileHeight", T.ts, T.Ts), M.Fr.create = function(t, i, e) {
    return new M.Fr(t, i, e)
},
    M.SA = M.xa.extend({
        Qm: q,
        Ga: q,
        Jo: q,
        ctor: function(t, i) {
            this.X3(t, i)
        },
        Qfa: E("Qm"),
        Jma: A("Qm"),
        Yj: E("Ga"),
        Hz: A("Ga"),
        oea: E("Jo"),
        G6: A("Jo"),
        X3: function(t, i) {
            return this.Qm = t,
                this.Ga = i,
                this.Jo = q,
                p
        }
    }), M.SA.create = function(t, i) {
    return new M.SA(t, i)
},
    M.EI = M.n.extend({
        Ml: q,
        Cs: q,
        Hb: "ParallaxNode",
        Efa: E("Ml"),
        Ama: A("Ml"),
        ctor: function() {
            M.n.prototype.ctor.call(this),
                this.Ml = [],
                this.Cs = M.d( - 100, -100)
        },
        T: function(t, i, e, n) {
            if (3 === arguments.length) M.log("ParallaxNode: use addChild(child, z, ratio, offset) instead");
            else {
                t || b("cc.ParallaxNode.addChild(): child should be non-null");
                var r = new M.SA(e, n);
                r.G6(t),
                    this.Ml.push(r),
                    t.H(this.ua.x * e.x + n.x, this.ua.y * e.y + n.y),
                    M.n.prototype.T.call(this, t, i, t.tag)
            }
        },
        removeChild: function(t, i) {
            for (var e = this.Ml, n = 0; n < e.length; n++) if (e[n].Jo == t) {
                e.splice(n, 1);
                break
            }
            M.n.prototype.removeChild.call(this, t, i)
        },
        Hf: function(t) {
            this.Ml.length = 0,
                M.n.prototype.Hf.call(this, t)
        },
        G: function() {
            var t = this.qK();
            if (!M.qz(t, this.Cs)) {
                for (var i = this.Ml, e = 0, n = i.length; n > e; e++) {
                    var r = i[e];
                    r.Jo.H( - t.x + t.x * r.Qm.x + r.Yj().x, -t.y + t.y * r.Qm.y + r.Yj().y)
                }
                this.Cs = t
            }
            M.n.prototype.G.call(this)
        },
        qK: function() {
            for (var t = this.ua, i = this; i.parent != q;) i = i.parent,
                t = M.ik(t, i.dh());
            return t
        },
        Ye: function() {
            var t = this.qK();
            if (!M.qz(t, this.Cs)) {
                for (var i = this.Ml, e = 0, n = i.length; n > e; e++) {
                    var r = i[e];
                    r.Jo.H( - t.x + t.x * r.Qm.x + r.Yj().x, -t.y + t.y * r.Qm.y + r.Yj().y)
                }
                this.Cs = t
            }
            M.n.prototype.Ye.call(this)
        }
    }), M.EI.create = function() {
    return new M.EI
},
    M.qa.Ix) {
    var xa = M.koa = new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext);
    M.IB = M.xa.extend({
        Vo: q,
        Da: q,
        Ym: q,
        XE: q,
        src: q,
        NG: q,
        autoplay: q,
        controls: q,
        tja: q,
        currentTime: 0,
        startTime: 0,
        duration: 0,
        cD: q,
        WE: 1,
        kx: 0,
        wc: r,
        Ni: p,
        Og: -1,
        ctor: function(t) {
            this.Vo = {},
                this.src = t,
                this.XE = xa.createGain ? xa.createGain() : xa.createGainNode(),
                this.DZ = this.CZ.bind(this),
                this.AZ = this.zZ.bind(this)
        },
        uD: function(t) {
            var i = this.Ym = xa.createBufferSource(),
                e = this.XE;
            t = t || 0,
                i.buffer = this.Da,
                e.gain.value = this.WE,
                i.connect(e),
                e.connect(xa.destination),
                i.loop = this.cD,
                i.Ni = r,
            i.playbackState || (i.onended = function() {
                this.Ni = p
            }),
                this.Ni = this.wc = r,
                i.start ? i.start(0, t) : i.noteGrainOn ? (e = i.buffer.duration, this.loop ? i.noteGrainOn(0, t, e) : i.noteGrainOn(0, t, e - t)) : i.noteOn(0),
                this.kx = 0
        },
        QN: function() {
            var t = this.Ym;
            this.Ni || (t.stop ? t.stop(0) : t.yja(0), this.Ni = p)
        },
        play: function() {
            if ( - 1 == this.Og) this.Og = 0;
            else if (1 == this.Og) {
                var t = this.Ym; (this.Ni || !t || 2 != t.playbackState && t.Ni) && (this.startTime = xa.currentTime, this.uD(0))
            }
        },
        pause: function() {
            this.kx = xa.currentTime,
                this.wc = p,
                this.QN()
        },
        Mq: function() {
            this.wc && this.uD(this.Da ? (this.kx - this.startTime) % this.Da.duration: 0)
        },
        stop: function() {
            this.kx = 0,
                this.wc = r,
                this.QN()
        },
        load: function() {
            var t = this;
            if (1 != t.Og) {
                t.Og = -1,
                    t.played = r,
                    t.ended = p;
                var i = new XMLHttpRequest;
                i.open("GET", t.src, p),
                    i.responseType = "arraybuffer",
                    i.onload = function() {
                        xa.decodeAudioData(i.response, t.DZ, t.AZ)
                    },
                    i.send()
            }
        },
        addEventListener: function(t, i) {
            this.Vo[t] = i.bind(this)
        },
        removeEventListener: function(t) {
            delete this.Vo[t]
        },
        qca: function() {
            return M.qa.Ix
        },
        CZ: function(t) {
            this.Da = t,
                t = this.Vo.success;
            var i = this.Vo.canplaythrough;
            t && t(),
            i && i(),
            (0 == this.Og || "autoplay" == this.autoplay || this.autoplay == p) && this.uD(),
                this.Og = 1
        },
        zZ: function() {
            var t = this.Vo.error;
            t && t(),
                this.Og = -2
        },
        cloneNode: function() {
            var t = new M.IB(this.src);
            return t.volume = this.volume,
                t.Og = this.Og,
                t.Da = this.Da,
            (0 == t.Og || -1 == t.Og) && t.load(),
                t
        }
    }),
        T = M.IB.prototype,
        M.k(T, "loop", E("cD"),
            function(t) {
                this.cD = t,
                this.Ym && (this.Ym.loop = t)
            }),
        M.k(T, "volume", E("WE"),
            function(t) {
                this.WE = t,
                    this.XE.gain.value = t

            }),
        M.k(T, "paused", E("wc")),
        M.k(T, "ended",
            function() {
                var t = this.Ym;
                return this.wc ? r: this.Ni && !t ? p: t.playbackState == q ? t.Ni: 3 == t.playbackState
            }),
        M.k(T, "played",
            function() {
                var t = this.Ym;
                return t && (2 == t.playbackState || !t.Ni)
            })
}
M.JH = M.xa.extend({
    rE: r,
    dd: q,
    es: q,
    wf: 0,
    yK: 0,
    ze: {},
    Vr: {},
    yw: 1,
    fD: 5,
    Pk: q,
    Ls: [],
    ctor: function() {
        this.rE = 0 < M.ZB.Jx.length,
        this.Pk && (this.Pk = this.Pk.bind(this))
    },
    noa: F(r),
    Hea: E("yw"),
    bu: function(t, i) {
        if (this.rE) {
            var e = this.dd;
            e && this.nl(e),
                M.qa.hh && M.qa.Kl == M.qa.po ? (e = this.Jw(t), this.dd = e.cloneNode(), this.es = t) : t != this.es && (this.dd = e = this.Jw(t), this.es = t),
            this.dd && (this.dd.loop = i || r, this.vD(this.dd))
        }
    },
    Jw: function(t) {
        var i = M.aa,
            e = i.Yd(t);
        return e || (i.load(t), e = i.Yd(t)),
            e
    },
    vD: function(t) {
        t.ended || (t.stop ? t.stop() : (t.pause(), 2 < t.readyState && (t.currentTime = 0))),
            this.wf = 2,
            t.play()
    },
    Y7: function(t) {
        if (0 < this.wf) {
            var i = this.dd;
            i && this.nl(i) && (t && M.aa.fj(this.es), this.es = this.dd = q, this.wf = 0)
        }
    },
    nl: function(t) {
        return t && !t.ended ? (t.stop ? t.stop() : (t.pause(), 2 < t.readyState && t.duration && 1 / 0 != t.duration && (t.currentTime = t.duration)), p) : r
    },
    NQ: function() {
        2 == this.wf && (this.dd.pause(), this.wf = 1)
    },
    t6: function() {
        1 == this.wf && (this.Ij(this.dd), this.wf = 2)
    },
    Ij: function(t) {
        t && !t.ended && (t.Mq ? t.Mq() : t.play())
    },
    ila: function() {
        this.dd && this.vD(this.dd)
    },
    ufa: function() {
        return 0 == this.wf ? 0: this.dd.volume
    },
    pma: function(t) {
        0 < this.wf && (this.dd.volume = Math.min(Math.max(t, 0), 1))
    },
    uG: function() {
        return 2 == this.wf && this.dd && !this.dd.ended
    },
    GC: function(t) {
        var i = this.Vr[t];
        return i || (i = this.Vr[t] = []),
            i
    },
    bM: function(t) {
        var i;
        if (!this.rE) return q;
        var e = this.GC(t);
        if (M.qa.hh && M.qa.Kl == M.qa.po) i = this.cM(e, t);
        else {
            for (var n = 0, r = e.length; r > n; n++) {
                var s = e[n];
                if (s.ended) {
                    i = s,
                    2 < i.readyState && (i.currentTime = 0),
                    window.wca && i.load();
                    break
                }
            }
            i || (i = this.cM(e, t)) && e.push(i)
        }
        return i
    },
    cM: function(t, i) {
        var e;
        return t.length >= this.fD ? (M.log("Error: " + i + " greater than " + this.fD), q) : (e = this.Jw(i)) ? (e = e.cloneNode(p), this.Pk && M.Na(e, "pause", this.Pk), e.volume = this.yw, e) : q
    },
    K5: function(t, i) {
        var e = this.bM(t);
        if (!e) return q;
        e.loop = i || r,
            e.play();
        var n = this.yK++;
        return this.ze[n] = e,
            n
    },
    Sla: function(t) {
        t = this.yw = Math.min(Math.max(t, 0), 1);
        var i,
            e = this.ze;
        for (i in e) e[i].volume = t
    },
    G5: function(t) { (t = this.ze[t]) && !t.ended && t.pause()
    },
    E5: function() {
        var t,
            i = this.ze;
        for (t in i) {
            var e = i[t];
            e.ended || e.pause()
        }
    },
    s6: function(t) {
        this.Ij(this.ze[t])
    },
    r6: function() {
        var t,
            i = this.ze;
        for (t in i) this.Ij(i[t])
    },
    X7: function(t) {
        this.nl(this.ze[t]),
            delete this.ze[t]
    },
    VR: function() {
        var t,
            i = this.ze;
        for (t in i) this.nl(i[t]),
            delete i[t]
    },
    v8: function(t) {
        var i = M.aa,
            e = this.ze,
            n = this.GC(t);
        if (i.fj(t), 0 != n.length) {
            i = n[0].src,
                delete this.Vr[t];
            for (var r in e) e[r].src == i && (this.nl(e[r]), delete e[r])
        }
    },
    end: function() {
        this.Y7(),
            this.VR()
    },
    VM: function() {
        var t,
            i,
            e = this.ze;
        for (i in e) ! (t = e[i]) || t.ended || t.paused || (this.Ls.push(t), t.pause());
        this.uG() && (this.Ls.push(this.dd), this.dd.pause())
    },
    nN: function() {
        for (var t = this.Ls, i = 0, e = t.length; e > i; i++) this.Ij(t[i]);
        t.length = 0
    }
}),
!M.qa.Ix && !M.qa.c0 && (M.KH = M.JH.extend({
    tl: [],
    Ks: [],
    Rf: q,
    fD: 2,
    xw: {},
    Im: r,
    Wo: 0,
    XC: r,
    vD: function(t) {
        this.xE(),
            this._super(t)
    },
    t6: function() {
        1 == this.wf && (this.xE(), this.Im = r, this.Wo = 0, this._super())
    },
    K5: function(t, i) {
        var e = this.Rf,
            n = i ? this.bM(t) : this.LY(t);
        if (!n) return q;
        n.loop = i || r;
        var s = this.yK++;
        return this.ze[s] = n,
        this.uG() && (this.NQ(), this.Im = p),
            e ? (e != n && this.tl.push(this.Oo), this.tl.push(s), e.pause()) : (this.Rf = n, this.Oo = s, n.play()),
            s
    },
    G5: function() {
        M.log("pauseEffect not supported in single audio mode!")
    },
    E5: function() {
        var t = this.tl,
            i = this.Ks,
            e = this.Rf;
        if (e) {
            for (var n = 0, r = t.length; r > n; n++) i.push(t[n]);
            t.length = 0,
                i.push(this.Oo),
                e.pause()
        }
    },
    s6: function() {
        M.log("resumeEffect not supported in single audio mode!")
    },
    r6: function() {
        var t = this.tl,
            i = this.Ks;
        this.uG() && (this.NQ(), this.Im = p);
        for (var e = 0, n = i.length; n > e; e++) t.push(i[e]);
        i.length = 0,
        !this.Rf && 0 <= t.length && (t = t.pop(), i = this.ze[t]) && (this.Oo = t, this.Rf = i, this.Ij(i))
    },
    X7: function(t) {
        var i = this.Rf,
            e = this.tl,
            n = this.Ks;
        i && this.Oo == t ? this.nl(i) : (i = e.indexOf(t), i >= 0 ? e.splice(i, 1) : (i = n.indexOf(t), i >= 0 && n.splice(i, 1)))
    },
    VR: function() {
        this.xE(),
        !this.Rf && this.Im && (this.Ij(this.dd), this.wf = 2, this.Im = r, this.Wo = 0)
    },
    v8: function(t) {
        var i = M.aa,
            e = this.ze,
            n = this.xw,
            r = this.GC(t),
            s = this.Rf;
        if (i.fj(t), 0 != r.length || n[t]) {
            i = 0 < r.length ? r[0].src: n[t].src,
                delete this.Vr[t],
                delete n[t];
            for (var h in e) e[h].src == i && delete e[h];
            s && s.src == i && this.nl(s)
        }
    },
    LY: function(t) {
        var i = this.xw[t],
            e = this.tl,
            n = this.Ks,
            r = this.ze;
        if (i) 2 < i.readyState && (i.currentTime = 0);
        else {
            if (i = this.Jw(t), !i) return q;
            i = i.cloneNode(p),
            this.Pk && M.Na(i, "pause", this.Pk),
                i.volume = this.yw,
                this.xw[t] = i
        }
        t = 0;
        for (var s = e.length; s > t;) r[e[t]] == i ? e.splice(t, 1) : t++;
        for (t = 0, s = n.length; s > t;) r[n[t]] == i ? n.splice(t, 1) : t++;
        return i.As = p,
            i
    },
    xE: function() {
        var t = this.Rf,
            i = this.Vr,
            e = this.xw,
            n = this.tl,
            s = this.Ks;
        if (t || 0 != n.length || 0 != s.length) {
            for (var h in e) {
                var a = e[h];
                2 < a.readyState && a.duration && 1 / 0 != a.duration && (a.currentTime = a.duration)
            }
            n.length = 0,
                s.length = 0;
            for (h in i) for (e = i[h], n = 0, s = e.length; s > n; n++) a = e[n],
                a.loop = r,
            2 < a.readyState && a.duration && 1 / 0 != a.duration && (a.currentTime = a.duration);
            t && this.nl(t)
        }
    },
    Pk: function() {
        if (!this.XC) {
            var t = this.OY();
            if (t) t.As ? (delete t.As, t.play()) : this.Ij(t);
            else if (this.Im) {
                if (t = this.dd, 2 < t.readyState && t.duration && 1 / 0 != t.duration) {
                    var i = t.currentTime + this.Wo,
                        i = i - t.duration * (0 | i / t.duration);
                    t.currentTime = i
                }
                this.Wo = 0,
                    this.Ij(t),
                    this.wf = 2,
                    this.Im = r
            }
        }
    },
    OY: function() {
        var t = this.tl,
            i = this.ze,
            e = this.Rf,
            n = e ? e.currentTime - (e.startTime || 0) : 0;
        for (this.Wo += n; 0 != t.length;) {
            var s = t.pop();
            if (e = i[s]) {
                if (e.As || e.loop || e.duration && e.currentTime + n < e.duration) return this.Oo = s,
                    this.Rf = e,
                !e.As && 2 < e.readyState && e.duration && 1 / 0 != e.duration && (t = e.currentTime + n, t -= e.duration * (0 | t / e.duration), e.currentTime = t),
                    e.As = r,
                    e;
                2 < e.readyState && e.duration && 1 / 0 != e.duration && (e.currentTime = e.duration)
            }
        }
        return this.Rf = this.Oo = q
    },
    VM: function() {
        var t = this.Rf;
        this.XC = p,
        (t = 2 == this.wf ? this.dd: t) && (this.Ls.push(t), t.pause())
    },
    nN: function() {
        var t = this.Ls;
        this.XC = r,
        0 < t.length && (this.Ij(t[0]), t.length = 0)
    }
})),
    M.ZB = {
        Jx: q,
        oy: function() {
            return M.aa.a1
        },
        bD: function(t, i, e, n, r, s, h) {
            var a = this,
                o = M.aa,
                c = M.path,
                u = this.Jx,
                f = "";
            if (0 == u.length) return h("can not support audio!");
            if ( - 1 == n) f = (c.xl(t) || "").toLowerCase(),
            a.b1(f) || (f = u[0], n = 0);
            else {
                if (! (n < u.length)) return h("can not found the resource of audio! Last match url is : " + t);
                f = u[n]
            }
            return 0 <= r.indexOf(f) ? a.bD(t, i, e, n + 1, r, s, h) : (t = c.vO(t, f), r.push(f), s = a.oZ(t, s,
                function(o) {
                    return o ? a.bD(t, i, e, n + 1, r, s, h) : (h(q, s), void 0)
                },
                n == u.length - 1), o.dg[i] = s, void 0)
        },
        b1: function(t) {
            return t ? 0 <= this.Jx.indexOf(t.toLowerCase()) : r
        },
        oZ: function(t, i, e, n) {
            var s;
            if (s = M.wq(window.cc) || "firefox" != M.qa.Vh ? "file://" == location.origin ? Audio: M.IB || Audio: Audio, 2 == arguments.length ? (e = i, i = new s) : 3 < arguments.length && !i && (i = new s), i.src = t, i.NG = "auto", s = navigator.userAgent, /Mobile/.test(s) && (/iPhone OS/.test(s) || /iPad/.test(s) || /Firefox/.test(s)) || /MSIE/.test(s)) i.load(),
                e(q, i);
            else {
                M.Na(i, "canplaythrough",
                    function() {
                        e(q, i),
                            this.removeEventListener("canplaythrough", arguments.callee, r),
                            this.removeEventListener("error", arguments.callee, r)
                    },
                    r);
                var h = function() {
                    i.removeEventListener("emptied", h),
                        i.removeEventListener("error", h),
                        e("load " + t + " failed"),
                    n && (this.removeEventListener("canplaythrough", arguments.callee, r), this.removeEventListener("error", arguments.callee, r))
                };
                M.qa.Vh === M.qa.cA && M.Na(i, "emptied", h, r),
                    M.Na(i, "error", h, r),
                    i.load()
            }
            return i
        },
        load: function(t, i, e, n) {
            this.bD(t, i, e, -1, [], q, n)
        }
    },
    M.ZB.Jx = function() {
        var t = M.Wb("audio"),
            i = [];
        if (t.canPlayType) {
            var e = function(i) {
                return i = t.canPlayType(i),
                "no" != i && "" != i
            };
            e('audio/ogg; codecs="vorbis"') && i.push(".ogg"),
            e("audio/mpeg") && i.push(".mp3"),
            e('audio/wav; codecs="1"') && i.push(".wav"),
            e("audio/mp4") && i.push(".mp4"),
            (e("audio/x-m4a") || e("audio/aac")) && i.push(".m4a")
        }
        return i
    } (),
    M.aa.ej(["mp3", "ogg", "wav", "mp4", "m4a"], M.ZB),
    M.on = M.KH ? new M.KH: new M.JH,
    M.wa.aF(M.Lb.qA,
        function() {
            M.on.VM()
        }),
    M.wa.aF(M.Lb.Ou,
        function() {
            M.on.nN()
        });
var ya = "res/banner_0.png res/banner_1.png res/banner_3.png res/test.jpg res/ele1.png res/cart.png res/bomb.png res/item0_s.png res/item1_s.png res/item2_s.png res/item3_s.png res/item4_s.png res/item5_s.png res/item6_s.png res/item7_s.png res/item8_s.png res/item9_s.png res/boom_0.png res/start_buttom_0.png res/start_buttom_1.png res/tips-count.png res/tips.png res/hand.png res/cloud.png res/music_on.png res/music_off.png res/cart_static.png res/Music/sound_catch.mp3 res/Music/explode.mp3".split(" "),
    za = M.O.extend({
        ctor: function() {
            this._super(),
                this.Ac("res/banner_0.png"),
                this.Pd(.46)
        },
        W: function() {
            this.H(126, $ - 60)
        }
    }),
    Aa = M.O.extend({
        ctor: function() {
            this._super(),
                this.Ac("res/banner_1.png"),
                this.Pd(.5)
        },
        W: function() {
            this.H(160, 200)
        }
    }),
    Ca = M.O.extend({
        ctor: function() {
            this._super(),
                this.Ac("res/banner_3.png"),
                this.Pd(.5)
        },
        W: function() {
            this.H(160, 14)
        }
    }),
    Da = M.O.extend({
        ctor: function() {
            this._super(),
                this.Ac("res/tips-count.png"),
                this.Pd(.5)
        },
        W: function() {
            this.H(160, 270)
        }
    }),
    Ea = M.O.extend({
        ctor: function() {
            this._super(),
                this.Ac("res/tips.png"),
                this.Pd(.5)
        },
        W: function() {
            this.H(160, 170)
        }
    }),
    Fa = M.O.extend({
        ctor: function() {
            this._super(),
                this.Ac("res/hand.png")
        },
        W: function() {
            this._super(),
                this.Pd(.8),
                this.H(126, 24);
            var t = new M.ro.create(M.vh.create(M.fm.create(.5, M.d(166, 24)), M.fm.create(.5, M.d(126, 24))), 6);
            this.lb(t)
        }
    }),
    Ga = M.O.extend({
        ctor: function() {
            this._super(),
                this.Ac("res/boom_0.png"),
                this.Pd(.4)
        },
        W: function() {
            this._super();
            var t = new M.to(.1, .6);
            this.lb(t),
                this.H(26, 36),
                t = M.Y.create("time -5", "Arial", "20", M.mi),
                t.mb(M.color(201, 0, 0)),
                t.H(34, 76),
                this.T(t)
        }
    }),
    Ka = M.O.extend({
        ctor: function(t, i, e, n) {
            this._super(),
                this.Ac("res/cloud.png"),
                this.H(t, i),
                this.U7 = t,
                this.UR = i,
                this.hO = e,
                this.d2 = n,
                this.pb(99.9)
        },
        W: function() {
            this._super();
            var t = M.vh.create(M.fm.create(this.hO, M.d(this.d2, this.UR)), M.fm.create(this.hO, M.d(this.U7, this.UR)));
            this.lb(M.ro.create(t, 100))
        }
    }),
    La = M.O.extend({
        ctor: function() {
            this._super(),
                this.Ac("res/cart_static.png"),
                this.Pd(1)
        },
        W: function() {
            this.H(196, 40)
        }
    }),
    Na = M.O.extend({
        ctor: function() {
            this._super(),
                1 == Ma ? this.Ac("res/music_on.png") : this.Ac("res/music_off.png")
        },
        W: function() {
            this._super(),
                this.H(296, $ - 24)
        },
        b8: function() {
            0 == Ma ? (Ma = 1, window.localStorage.setItem("MusicOn", 1), this.Ac("res/music_on.png"), M.on.bu("res/Music/sound_catch.mp3", r)) : (Ma = 0, window.localStorage.setItem("MusicOn", 0), this.Ac("res/music_off.png"))
        }
    }),
    Pa = M.sa.create({
        event: M.sa.km,
        Tl: p,
        hk: function(t, i) {
            var e = i.rc,
                n = e.aq(t.zl()),
                e = e.wd(),
                e = M.rect(0, 0, e.width + 20, e.height + 20);
            return M.fu(e, n) ? p: r
        },
        Jl: function(t, i) {
            var e = i.rc;
            return Oa = t.lq(),
                e.wd(),
                5 > Oa.x && 5 > Oa.y ? p: r
        },
        Il: function(t, i) {
            i.rc.b8()
        }
    }),
    Ra = M.xk.extend({
        W: function() {
            this._super();
            var t = new Qa;
            t.ha(),
                this.T(t)
        }
    }),
    Sa,
    Qa = M.Nc.extend({
        ha: function() {
            M.K.Ea();
            var t = M.Oc.create(new M.de(251, 88, 115, 255), 320, $);
            this.T(t);
            var i = new za,
                e = new Aa,
                n = new Ca;
            t.T(i),
                t.T(e),
                t.T(n),
                t.T(new Ka(20, $ - 20, 10, 320)),
                t.T(new Ka(20, $ - 100, 20, 200)),
                t.T(new Ka(200, $ - 110, 6, 320)),
                i = new Na,
                t.T(i),
                M.wa.addListener(Pa, i);
            var s = new La;
            t.T(s),
                i = M.Y.create("time:  30", "Arial", "16", M.mi),
                i.H(270, $ - 86),
                t.T(i),
                i = M.Y.create("catch:  0", "Arial", "16", M.mi),
                i.H(270, $ - 60),
                t.T(i),
                i = new M.GA("res/start_buttom_0.png", "res/start_buttom_1.png",
                    function() {
                        t.removeChild(e),
                            t.removeChild(h),
                            t.removeChild(s),
                            t.T(M.Oc.create(new M.de(0, 0, 0, 200), 320, $)),
                            t.T(new Ea, 0),
                            t.T(new Va, 0),
                            t.T(new Fa, 0),
                            M.on.bu("res/Music/explode.mp3", r),
                            M.on.bu("res/Music/sound_catch.mp3", r),
                            M.wa.addListener(Wa, t),
                            Sa = window.setTimeout(function() {
                                    M.K.mu(new Xa)
                                },
                                2400),
                            window.parent.postMessage("click", "http://m.zhe800.com")
                    },
                    this),
                i.Th({
                    x: 160,
                    y: 180,
                    scale: .5,
                    anchorX: .5,
                    anchorY: .5
                });
            var h = new M.no(i);
            h.x = 0,
                h.y = 0,
                t.T(h, 1)
        }
    }),
    Wa = M.sa.create({
        event: M.sa.km,
        Tl: p,
        hk: function(t, i) {
            var e = i.rc,
                n = e.aq(t.zl()),
                e = e.wd(),
                e = M.rect(0, 0, e.width + 20, e.height + 50);
            return M.fu(e, n) ? p: r
        },
        Jl: function(t) {
            return t = t.lq(),
                10 > t.x && 10 > t.y ? p: r
        },
        Il: function() {
            window.clearInterval(Sa),
                M.K.mu(new Xa)
        }
    }),
    Ya,
    Za,
    $a,
    ab,
    bb = 30,
    cb = 0,
    Oa,
    Xa = M.xk.extend({
        W: function() {
            this._super(),
                Za = new db,
                Za.ha(),
                this.T(Za)
        }
    }),
    db = M.Nc.extend({
        ha: function() {
            var t = M.Oc.create(new M.de(251, 88, 115, 255), 320, $);
            this.T(t),
                $a = M.Y.create("time:  30", "Arial", "16", M.mi),
                $a.H(270, $ - 86),
                this.T($a),
                ab = M.Y.create("catch:  0", "Arial", "16", M.mi),
                ab.H(270, $ - 60),
                this.T(ab),
                t.T(new Ka(20, $ - 20, 10, 320)),
                t.T(new Ka(20, $ - 100, 20, 200)),
                t.T(new Ka(200, $ - 110, 6, 320)),
                t.T(new Ca);
            var i = new Na;
            t.T(i),
                M.wa.addListener(Pa, i),
                this.T(new za),
                this.nu(this.bF, .2),
                this.nu(this.z8, 1)
        },
        W: function() {
            this._super(),
                Ya = new Va,
                this.T(Ya, 4),
                M.wa.addListener(eb, Ya)
        },
        z8: function() {
            0 > bb ? this.jP() : $a.Kc("time:  " + bb--)
        },
        bF: function() {
            var t = new fb;
            this.T(t, 1),
            10 > Ya.x && (Ya.x = 30)
        },
        removeItem: function(t) {
            this.removeChild(t)
        },
        jP: function() {
            this.T(M.Oc.create(new M.de(0, 0, 0, 155), 320, $), 5),
                this.T(new Da, 6),
                M.K.pause(),
                window.parent.postMessage(cb, "http://m.zhe800.com")
        }
    }),
    eb = M.sa.create({
        event: M.sa.km,
        Tl: p,
        hk: function(t, i) {
            var e = i.rc,
                n = e.aq(t.zl()),
                e = e.wd(),
                e = M.rect(0, 0, e.width + 20, e.height + 50);
            return M.fu(e, n) ? p: r
        },
        Jl: function(t, i) {
            var e = i.rc;
            Oa = t.lq();
            var n = e.wd();
            return 0 < Oa.x && e.x <= 320 - 1.28 * n.width / 2 + 10 && (e.x += Oa.x),
            0 > Oa.x && e.x >= 1.28 * n.width / 2 && (e.x += Oa.x),
                p
        },
        Il: z()
    }),
    Va = M.O.extend({
        ctor: function() {
            this._super(),
                this.Ac("res/cart.png"),
                this.Pd(1.28)
        },
        W: function() {
            this._super(),
                this.H(160, 42)
        },
        bF: function(t) {
            this.Hf(),
                t = new M.O("res/item" + t + "_s.png"),
                t.Pd(.6),
                t.H(24, 46),
                this.T(t)
        },
        k1: function() {
            var t = this;
            this.Hf();
            var i = new Ga;
            this.T(i, 1),
                window.setTimeout(function() {
                        t.removeChild(i)
                    },
                    400)
        }
    }),
    fb = M.O.extend({
        ctor: function() {
            this._super();
            var t = Math.floor(10 * Math.random());.4 > Math.random() ? (this.Ac("res/bomb.png"), this.hQ = p, this.gravity = -.2) : (this.Ac("res/item" + t + "_s.png"), this.gravity = -.18),
                this.v4 = t,
                this.Pd(.8)
        },
        W: function() {
            this._super(),
                this.H(20 + 280 * Math.random(), $),
                this.BH = 0,
                this.fR()
        },
        scale: function() {
            this.Pd(.8 + Math.random() / 10)
        },
        update: function() {
            var t = Ya.NF(),
                i = this.NF();
            this.H(this.dh().x, this.dh().y + this.BH),
                this.BH += this.gravity,
                !this.hQ && M.Z5(t, i) ? (1 == Ma && M.on.bu("res/Music/sound_catch.mp3", r), Ya.bF(this.v4), Za.removeItem(this), cb++, ab.Kc("catch:  " + cb)) : this.hQ && 35 > this.dh().y && 0 < this.dh().y && 26 > Math.abs(this.dh().x - Ya.dh().x) && (1 == Ma && M.on.bu("res/Music/explode.mp3", r), Ya.k1(), Za.removeItem(this), bb -= 5, 0 >= bb ? ($a.Kc("time:  0"), Za.jP()) : $a.Kc("time:  " + bb)),
            10 > this.dh().y && this.Pd(.3),
            .5 > this.dh().y && Za.removeItem(this)
        }
    }),
    Ma = 1;
window.localStorage.getItem("MusicOn") && !isNaN(window.localStorage.getItem("MusicOn")) && (Ma = window.localStorage.getItem("MusicOn"));
var gb = window.matchMedia("(min-height: 500px)"),
    hb = window.matchMedia("(min-height: 560px)"),
    ib = 480;
gb.matches && (ib = 500),
hb.matches && (ib = 560);
var $ = 480;
M.Lb.EQ = function() {
    M.view.Z1(r),
        M.view.bH(320, ib, M.nf.Pu),
        M.view.G0(p),
        M.view.p6(p),
        $ = M.K.Ea().height,
        M.EA.NG(ya,
            function() {
                M.K.mu(new Ra)
            },
            this)
},
    M.Lb.y6();