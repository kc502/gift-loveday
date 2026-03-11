import {r as t, R as e, a as n, b as i, c as o} from "./react-vendor-CGn0MLJ7.js";
var r = {
    exports: {}
}
  , s = {}
  , a = t
  , l = Symbol.for("react.element")
  , u = Symbol.for("react.fragment")
  , c = Object.prototype.hasOwnProperty
  , d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , h = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function p(t, e, n) {
    var i, o = {}, r = null, s = null;
    for (i in void 0 !== n && (r = "" + n),
    void 0 !== e.key && (r = "" + e.key),
    void 0 !== e.ref && (s = e.ref),
    e)
        c.call(e, i) && !h.hasOwnProperty(i) && (o[i] = e[i]);
    if (t && t.defaultProps)
        for (i in e = t.defaultProps)
            void 0 === o[i] && (o[i] = e[i]);
    return {
        $$typeof: l,
        type: t,
        key: r,
        ref: s,
        props: o,
        _owner: d.current
    }
}
s.Fragment = u,
s.jsx = p,
s.jsxs = p,
r.exports = s;
var f = r.exports;
const m = t.createContext({});
function v(e) {
    const n = t.useRef(null);
    return null === n.current && (n.current = e()),
    n.current
}
const g = t.createContext(null)
  , y = t.createContext({
    transformPagePoint: t=>t,
    isStatic: !1,
    reducedMotion: "never"
});
class x extends t.Component {
    getSnapshotBeforeUpdate(t) {
        const e = this.props.childRef.current;
        if (e && t.isPresent && !this.props.isPresent) {
            const t = this.props.sizeRef.current;
            t.height = e.offsetHeight || 0,
            t.width = e.offsetWidth || 0,
            t.top = e.offsetTop,
            t.left = e.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function w({children: e, isPresent: n}) {
    const i = t.useId()
      , o = t.useRef(null)
      , r = t.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: s} = t.useContext(y);
    return t.useInsertionEffect(()=>{
        const {width: t, height: e, top: a, left: l} = r.current;
        if (n || !o.current || !t || !e)
            return;
        o.current.dataset.motionPopId = i;
        const u = document.createElement("style");
        return s && (u.nonce = s),
        document.head.appendChild(u),
        u.sheet && u.sheet.insertRule(`\n          [data-motion-pop-id="${i}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${e}px !important;\n            top: ${a}px !important;\n            left: ${l}px !important;\n          }\n        `),
        ()=>{
            document.head.removeChild(u)
        }
    }
    , [n]),
    f.jsx(x, {
        isPresent: n,
        childRef: o,
        sizeRef: r,
        children: t.cloneElement(e, {
            ref: o
        })
    })
}
const b = ({children: e, initial: n, isPresent: i, onExitComplete: o, custom: r, presenceAffectsLayout: s, mode: a})=>{
    const l = v(E)
      , u = t.useId()
      , c = t.useCallback(t=>{
        l.set(t, !0);
        for (const e of l.values())
            if (!e)
                return;
        o && o()
    }
    , [l, o])
      , d = t.useMemo(()=>({
        id: u,
        initial: n,
        isPresent: i,
        custom: r,
        onExitComplete: c,
        register: t=>(l.set(t, !1),
        ()=>l.delete(t))
    }), s ? [Math.random(), c] : [i, c]);
    return t.useMemo(()=>{
        l.forEach((t,e)=>l.set(e, !1))
    }
    , [i]),
    t.useEffect(()=>{
        !i && !l.size && o && o()
    }
    , [i]),
    "popLayout" === a && (e = f.jsx(w, {
        isPresent: i,
        children: e
    })),
    f.jsx(g.Provider, {
        value: d,
        children: e
    })
}
;
function E() {
    return new Map
}
function P(e=!0) {
    const n = t.useContext(g);
    if (null === n)
        return [!0, null];
    const {isPresent: i, onExitComplete: o, register: r} = n
      , s = t.useId();
    t.useEffect(()=>{
        e && r(s)
    }
    , [e]);
    const a = t.useCallback(()=>e && o && o(s), [s, o, e]);
    return !i && o ? [!1, a] : [!0]
}
const T = t=>t.key || "";
function S(e) {
    const n = [];
    return t.Children.forEach(e, e=>{
        t.isValidElement(e) && n.push(e)
    }
    ),
    n
}
const A = "undefined" != typeof window
  , C = A ? t.useLayoutEffect : t.useEffect
  , R = ({children: e, custom: n, initial: i=!0, onExitComplete: o, presenceAffectsLayout: r=!0, mode: s="sync", propagate: a=!1})=>{
    const [l,u] = P(a)
      , c = t.useMemo(()=>S(e), [e])
      , d = a && !l ? [] : c.map(T)
      , h = t.useRef(!0)
      , p = t.useRef(c)
      , g = v(()=>new Map)
      , [y,x] = t.useState(c)
      , [w,E] = t.useState(c);
    C(()=>{
        h.current = !1,
        p.current = c;
        for (let t = 0; t < w.length; t++) {
            const e = T(w[t]);
            d.includes(e) ? g.delete(e) : !0 !== g.get(e) && g.set(e, !1)
        }
    }
    , [w, d.length, d.join("-")]);
    const A = [];
    if (c !== y) {
        let t = [...c];
        for (let e = 0; e < w.length; e++) {
            const n = w[e]
              , i = T(n);
            d.includes(i) || (t.splice(e, 0, n),
            A.push(n))
        }
        return "wait" === s && A.length && (t = A),
        E(S(t)),
        void x(c)
    }
    const {forceRender: R} = t.useContext(m);
    return f.jsx(f.Fragment, {
        children: w.map(t=>{
            const e = T(t)
              , m = !(a && !l) && (c === w || d.includes(e));
            return f.jsx(b, {
                isPresent: m,
                initial: !(h.current && !i) && void 0,
                custom: m ? void 0 : n,
                presenceAffectsLayout: r,
                mode: s,
                onExitComplete: m ? void 0 : ()=>{
                    if (!g.has(e))
                        return;
                    g.set(e, !0);
                    let t = !0;
                    g.forEach(e=>{
                        e || (t = !1)
                    }
                    ),
                    t && (null == R || R(),
                    E(p.current),
                    a && (null == u || u()),
                    o && o())
                }
                ,
                children: t
            }, e)
        }
        )
    })
}
  , D = t=>t;
let M = D
  , k = D;
function L(t) {
    let e;
    return ()=>(void 0 === e && (e = t()),
    e)
}
const V = (t,e,n)=>{
    const i = e - t;
    return 0 === i ? 1 : (n - t) / i
}
  , j = t=>1e3 * t
  , F = t=>t / 1e3
  , O = !1;
const I = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
function B(t, e) {
    let n = !1
      , i = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , r = ()=>n = !0
      , s = I.reduce((t,e)=>(t[e] = function(t) {
        let e = new Set
          , n = new Set
          , i = !1
          , o = !1;
        const r = new WeakSet;
        let s = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        };
        function a(e) {
            r.has(e) && (l.schedule(e),
            t()),
            e(s)
        }
        const l = {
            schedule: (t,o=!1,s=!1)=>{
                const a = s && i ? e : n;
                return o && r.add(t),
                a.has(t) || a.add(t),
                t
            }
            ,
            cancel: t=>{
                n.delete(t),
                r.delete(t)
            }
            ,
            process: t=>{
                s = t,
                i ? o = !0 : (i = !0,
                [e,n] = [n, e],
                e.forEach(a),
                e.clear(),
                i = !1,
                o && (o = !1,
                l.process(t)))
            }
        };
        return l
    }(r),
    t), {})
      , {read: a, resolveKeyframes: l, update: u, preRender: c, render: d, postRender: h} = s
      , p = ()=>{
        const r = performance.now();
        n = !1,
        o.delta = i ? 1e3 / 60 : Math.max(Math.min(r - o.timestamp, 40), 1),
        o.timestamp = r,
        o.isProcessing = !0,
        a.process(o),
        l.process(o),
        u.process(o),
        c.process(o),
        d.process(o),
        h.process(o),
        o.isProcessing = !1,
        n && e && (i = !1,
        t(p))
    }
    ;
    return {
        schedule: I.reduce((e,r)=>{
            const a = s[r];
            return e[r] = (e,r=!1,s=!1)=>(n || (n = !0,
            i = !0,
            o.isProcessing || t(p)),
            a.schedule(e, r, s)),
            e
        }
        , {}),
        cancel: t=>{
            for (let e = 0; e < I.length; e++)
                s[I[e]].cancel(t)
        }
        ,
        state: o,
        steps: s
    }
}
const {schedule: N, cancel: U, state: W, steps: _} = B("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : D, !0)
  , $ = t.createContext({
    strict: !1
})
  , z = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , K = {};
for (const Yc in z)
    K[Yc] = {
        isEnabled: t=>z[Yc].some(e=>!!t[e])
    };
const H = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Y(t) {
    return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || H.has(t)
}
let X = t=>!Y(t);
try {
    (G = require("@emotion/is-prop-valid").default) && (X = t=>t.startsWith("on") ? !Y(t) : G(t))
} catch (Kc) {}
var G;
function q(t) {
    if ("undefined" == typeof Proxy)
        return t;
    const e = new Map;
    return new Proxy((...e)=>t(...e),{
        get: (n,i)=>"create" === i ? t : (e.has(i) || e.set(i, t(i)),
        e.get(i))
    })
}
const Z = t.createContext({});
function J(t) {
    return "string" == typeof t || Array.isArray(t)
}
function Q(t) {
    return null !== t && "object" == typeof t && "function" == typeof t.start
}
const tt = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , et = ["initial", ...tt];
function nt(t) {
    return Q(t.animate) || et.some(e=>J(t[e]))
}
function it(t) {
    return Boolean(nt(t) || t.variants)
}
function ot(e) {
    const {initial: n, animate: i} = function(t, e) {
        if (nt(t)) {
            const {initial: e, animate: n} = t;
            return {
                initial: !1 === e || J(e) ? e : void 0,
                animate: J(n) ? n : void 0
            }
        }
        return !1 !== t.inherit ? e : {}
    }(e, t.useContext(Z));
    return t.useMemo(()=>({
        initial: n,
        animate: i
    }), [rt(n), rt(i)])
}
function rt(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const st = Symbol.for("motionComponentSymbol");
function at(t) {
    return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
}
function lt(e, n, i) {
    return t.useCallback(t=>{
        t && e.onMount && e.onMount(t),
        n && (t ? n.mount(t) : n.unmount()),
        i && ("function" == typeof i ? i(t) : at(i) && (i.current = t))
    }
    , [n])
}
const ut = t=>t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , ct = "data-" + ut("framerAppearId")
  , {schedule: dt} = B(queueMicrotask, !1)
  , ht = t.createContext({});
function pt(e, n, i, o, r) {
    var s, a;
    const {visualElement: l} = t.useContext(Z)
      , u = t.useContext($)
      , c = t.useContext(g)
      , d = t.useContext(y).reducedMotion
      , h = t.useRef(null);
    o = o || u.renderer,
    !h.current && o && (h.current = o(e, {
        visualState: n,
        parent: l,
        props: i,
        presenceContext: c,
        blockInitialAnimation: !!c && !1 === c.initial,
        reducedMotionConfig: d
    }));
    const p = h.current
      , f = t.useContext(ht);
    !p || p.projection || !r || "html" !== p.type && "svg" !== p.type || function(t, e, n, i) {
        const {layoutId: o, layout: r, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: u} = e;
        t.projection = new n(t.latestValues,e["data-framer-portal-id"] ? void 0 : ft(t.parent)),
        t.projection.setOptions({
            layoutId: o,
            layout: r,
            alwaysMeasureLayout: Boolean(s) || a && at(a),
            visualElement: t,
            animationType: "string" == typeof r ? r : "both",
            initialPromotionConfig: i,
            layoutScroll: l,
            layoutRoot: u
        })
    }(h.current, i, r, f);
    const m = t.useRef(!1);
    t.useInsertionEffect(()=>{
        p && m.current && p.update(i, c)
    }
    );
    const v = i[ct]
      , x = t.useRef(Boolean(v) && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, v)) && (null === (a = window.MotionHasOptimisedAnimation) || void 0 === a ? void 0 : a.call(window, v)));
    return C(()=>{
        p && (m.current = !0,
        window.MotionIsMounted = !0,
        p.updateFeatures(),
        dt.render(p.render),
        x.current && p.animationState && p.animationState.animateChanges())
    }
    ),
    t.useEffect(()=>{
        p && (!x.current && p.animationState && p.animationState.animateChanges(),
        x.current && (queueMicrotask(()=>{
            var t;
            null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, v)
        }
        ),
        x.current = !1))
    }
    ),
    p
}
function ft(t) {
    if (t)
        return !1 !== t.options.allowProjection ? t.projection : ft(t.parent)
}
function mt({preloadedFeatures: e, createVisualElement: n, useRender: i, useVisualState: o, Component: r}) {
    var s, a;
    function l(e, s) {
        let a;
        const l = {
            ...t.useContext(y),
            ...e,
            layoutId: vt(e)
        }
          , {isStatic: u} = l
          , c = ot(e)
          , d = o(e, u);
        if (!u && A) {
            t.useContext($).strict;
            const e = function(t) {
                const {drag: e, layout: n} = K;
                if (!e && !n)
                    return {};
                const i = {
                    ...e,
                    ...n
                };
                return {
                    MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == n ? void 0 : n.isEnabled(t)) ? i.MeasureLayout : void 0,
                    ProjectionNode: i.ProjectionNode
                }
            }(l);
            a = e.MeasureLayout,
            c.visualElement = pt(r, d, l, n, e.ProjectionNode)
        }
        return f.jsxs(Z.Provider, {
            value: c,
            children: [a && c.visualElement ? f.jsx(a, {
                visualElement: c.visualElement,
                ...l
            }) : null, i(r, e, lt(d, c.visualElement, s), d, u, c.visualElement)]
        })
    }
    e && function(t) {
        for (const e in t)
            K[e] = {
                ...K[e],
                ...t[e]
            }
    }(e),
    l.displayName = `motion.${"string" == typeof r ? r : `create(${null !== (a = null !== (s = r.displayName) && void 0 !== s ? s : r.name) && void 0 !== a ? a : ""})`}`;
    const u = t.forwardRef(l);
    return u[st] = r,
    u
}
function vt({layoutId: e}) {
    const n = t.useContext(m).id;
    return n && void 0 !== e ? n + "-" + e : e
}
const gt = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function yt(t) {
    return "string" == typeof t && !t.includes("-") && !!(gt.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function xt(t) {
    const e = [{}, {}];
    return null == t || t.values.forEach((t,n)=>{
        e[0][n] = t.get(),
        e[1][n] = t.getVelocity()
    }
    ),
    e
}
function wt(t, e, n, i) {
    if ("function" == typeof e) {
        const [o,r] = xt(i);
        e = e(void 0 !== n ? n : t.custom, o, r)
    }
    if ("string" == typeof e && (e = t.variants && t.variants[e]),
    "function" == typeof e) {
        const [o,r] = xt(i);
        e = e(void 0 !== n ? n : t.custom, o, r)
    }
    return e
}
const bt = t=>Array.isArray(t)
  , Et = t=>bt(t) ? t[t.length - 1] || 0 : t
  , Pt = t=>Boolean(t && t.getVelocity);
function Tt(t) {
    const e = Pt(t) ? t.get() : t;
    return n = e,
    Boolean(n && "object" == typeof n && n.mix && n.toValue) ? e.toValue() : e;
    var n
}
const St = e=>(n,i)=>{
    const o = t.useContext(Z)
      , r = t.useContext(g)
      , s = ()=>function({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n}, i, o, r) {
        const s = {
            latestValues: At(i, o, r, t),
            renderState: e()
        };
        return n && (s.onMount = t=>n({
            props: i,
            current: t,
            ...s
        }),
        s.onUpdate = t=>n(t)),
        s
    }(e, n, o, r);
    return i ? s() : v(s)
}
;
function At(t, e, n, i) {
    const o = {}
      , r = i(t, {});
    for (const h in r)
        o[h] = Tt(r[h]);
    let {initial: s, animate: a} = t;
    const l = nt(t)
      , u = it(t);
    e && u && !l && !1 !== t.inherit && (void 0 === s && (s = e.initial),
    void 0 === a && (a = e.animate));
    let c = !!n && !1 === n.initial;
    c = c || !1 === s;
    const d = c ? a : s;
    if (d && "boolean" != typeof d && !Q(d)) {
        const e = Array.isArray(d) ? d : [d];
        for (let n = 0; n < e.length; n++) {
            const i = wt(t, e[n]);
            if (i) {
                const {transitionEnd: t, transition: e, ...n} = i;
                for (const i in n) {
                    let t = n[i];
                    if (Array.isArray(t)) {
                        t = t[c ? t.length - 1 : 0]
                    }
                    null !== t && (o[i] = t)
                }
                for (const i in t)
                    o[i] = t[i]
            }
        }
    }
    return o
}
const Ct = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Rt = new Set(Ct)
  , Dt = t=>e=>"string" == typeof e && e.startsWith(t)
  , Mt = Dt("--")
  , kt = Dt("var(--")
  , Lt = t=>!!kt(t) && Vt.test(t.split("/*")[0].trim())
  , Vt = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , jt = (t,e)=>e && "number" == typeof t ? e.transform(t) : t
  , Ft = (t,e,n)=>n > e ? e : n < t ? t : n
  , Ot = {
    test: t=>"number" == typeof t,
    parse: parseFloat,
    transform: t=>t
}
  , It = {
    ...Ot,
    transform: t=>Ft(0, 1, t)
}
  , Bt = {
    ...Ot,
    default: 1
}
  , Nt = t=>({
    test: e=>"string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
    parse: parseFloat,
    transform: e=>`${e}${t}`
})
  , Ut = Nt("deg")
  , Wt = Nt("%")
  , _t = Nt("px")
  , $t = Nt("vh")
  , zt = Nt("vw")
  , Kt = {
    ...Wt,
    parse: t=>Wt.parse(t) / 100,
    transform: t=>Wt.transform(100 * t)
}
  , Ht = {
    borderWidth: _t,
    borderTopWidth: _t,
    borderRightWidth: _t,
    borderBottomWidth: _t,
    borderLeftWidth: _t,
    borderRadius: _t,
    radius: _t,
    borderTopLeftRadius: _t,
    borderTopRightRadius: _t,
    borderBottomRightRadius: _t,
    borderBottomLeftRadius: _t,
    width: _t,
    maxWidth: _t,
    height: _t,
    maxHeight: _t,
    top: _t,
    right: _t,
    bottom: _t,
    left: _t,
    padding: _t,
    paddingTop: _t,
    paddingRight: _t,
    paddingBottom: _t,
    paddingLeft: _t,
    margin: _t,
    marginTop: _t,
    marginRight: _t,
    marginBottom: _t,
    marginLeft: _t,
    backgroundPositionX: _t,
    backgroundPositionY: _t
}
  , Yt = {
    rotate: Ut,
    rotateX: Ut,
    rotateY: Ut,
    rotateZ: Ut,
    scale: Bt,
    scaleX: Bt,
    scaleY: Bt,
    scaleZ: Bt,
    skew: Ut,
    skewX: Ut,
    skewY: Ut,
    distance: _t,
    translateX: _t,
    translateY: _t,
    translateZ: _t,
    x: _t,
    y: _t,
    z: _t,
    perspective: _t,
    transformPerspective: _t,
    opacity: It,
    originX: Kt,
    originY: Kt,
    originZ: _t
}
  , Xt = {
    ...Ot,
    transform: Math.round
}
  , Gt = {
    ...Ht,
    ...Yt,
    zIndex: Xt,
    size: _t,
    fillOpacity: It,
    strokeOpacity: It,
    numOctaves: Xt
}
  , qt = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Zt = Ct.length;
function Jt(t, e, n) {
    const {style: i, vars: o, transformOrigin: r} = t;
    let s = !1
      , a = !1;
    for (const l in e) {
        const t = e[l];
        if (Rt.has(l))
            s = !0;
        else if (Mt(l))
            o[l] = t;
        else {
            const e = jt(t, Gt[l]);
            l.startsWith("origin") ? (a = !0,
            r[l] = e) : i[l] = e
        }
    }
    if (e.transform || (s || n ? i.transform = function(t, e, n) {
        let i = ""
          , o = !0;
        for (let r = 0; r < Zt; r++) {
            const s = Ct[r]
              , a = t[s];
            if (void 0 === a)
                continue;
            let l = !0;
            if (l = "number" == typeof a ? a === (s.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a),
            !l || n) {
                const t = jt(a, Gt[s]);
                l || (o = !1,
                i += `${qt[s] || s}(${t}) `),
                n && (e[s] = t)
            }
        }
        return i = i.trim(),
        n ? i = n(e, o ? "" : i) : o && (i = "none"),
        i
    }(e, t.transform, n) : i.transform && (i.transform = "none")),
    a) {
        const {originX: t="50%", originY: e="50%", originZ: n=0} = r;
        i.transformOrigin = `${t} ${e} ${n}`
    }
}
const Qt = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , te = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function ee(t, e, n) {
    return "string" == typeof t ? t : _t.transform(e + n * t)
}
function ne(t, {attrX: e, attrY: n, attrScale: i, originX: o, originY: r, pathLength: s, pathSpacing: a=1, pathOffset: l=0, ...u}, c, d) {
    if (Jt(t, u, d),
    c)
        return void (t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
    t.attrs = t.style,
    t.style = {};
    const {attrs: h, style: p, dimensions: f} = t;
    h.transform && (f && (p.transform = h.transform),
    delete h.transform),
    f && (void 0 !== o || void 0 !== r || p.transform) && (p.transformOrigin = function(t, e, n) {
        return `${ee(e, t.x, t.width)} ${ee(n, t.y, t.height)}`
    }(f, void 0 !== o ? o : .5, void 0 !== r ? r : .5)),
    void 0 !== e && (h.x = e),
    void 0 !== n && (h.y = n),
    void 0 !== i && (h.scale = i),
    void 0 !== s && function(t, e, n=1, i=0, o=!0) {
        t.pathLength = 1;
        const r = o ? Qt : te;
        t[r.offset] = _t.transform(-i);
        const s = _t.transform(e)
          , a = _t.transform(n);
        t[r.array] = `${s} ${a}`
    }(h, s, a, l, !1)
}
const ie = ()=>({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , oe = ()=>({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
    attrs: {}
})
  , re = t=>"string" == typeof t && "svg" === t.toLowerCase();
function se(t, {style: e, vars: n}, i, o) {
    Object.assign(t.style, e, o && o.getProjectionStyles(i));
    for (const r in n)
        t.style.setProperty(r, n[r])
}
const ae = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function le(t, e, n, i) {
    se(t, e, void 0, i);
    for (const o in e.attrs)
        t.setAttribute(ae.has(o) ? o : ut(o), e.attrs[o])
}
const ue = {};
function ce(t, {layout: e, layoutId: n}) {
    return Rt.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!ue[t] || "opacity" === t)
}
function de(t, e, n) {
    var i;
    const {style: o} = t
      , r = {};
    for (const s in o)
        (Pt(o[s]) || e.style && Pt(e.style[s]) || ce(s, t) || void 0 !== (null === (i = null == n ? void 0 : n.getValue(s)) || void 0 === i ? void 0 : i.liveStyle)) && (r[s] = o[s]);
    return r
}
function he(t, e, n) {
    const i = de(t, e, n);
    for (const o in t)
        if (Pt(t[o]) || Pt(e[o])) {
            i[-1 !== Ct.indexOf(o) ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o] = t[o]
        }
    return i
}
const pe = ["x", "y", "width", "height", "cx", "cy", "r"]
  , fe = {
    useVisualState: St({
        scrapeMotionValuesFromProps: he,
        createRenderState: oe,
        onUpdate: ({props: t, prevProps: e, current: n, renderState: i, latestValues: o})=>{
            if (!n)
                return;
            let r = !!t.drag;
            if (!r)
                for (const a in o)
                    if (Rt.has(a)) {
                        r = !0;
                        break
                    }
            if (!r)
                return;
            let s = !e;
            if (e)
                for (let a = 0; a < pe.length; a++) {
                    const n = pe[a];
                    t[n] !== e[n] && (s = !0)
                }
            s && N.read(()=>{
                !function(t, e) {
                    try {
                        e.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                    } catch (n) {
                        e.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }(n, i),
                N.render(()=>{
                    ne(i, o, re(n.tagName), t.transformTemplate),
                    le(n, i)
                }
                )
            }
            )
        }
    })
}
  , me = {
    useVisualState: St({
        scrapeMotionValuesFromProps: de,
        createRenderState: ie
    })
};
function ve(t, e, n) {
    for (const i in e)
        Pt(e[i]) || ce(i, n) || (t[i] = e[i])
}
function ge(e, n) {
    const i = {};
    return ve(i, e.style || {}, e),
    Object.assign(i, function({transformTemplate: e}, n) {
        return t.useMemo(()=>{
            const t = {
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            };
            return Jt(t, n, e),
            Object.assign({}, t.vars, t.style)
        }
        , [n])
    }(e, n)),
    i
}
function ye(t, e) {
    const n = {}
      , i = ge(t, e);
    return t.drag && !1 !== t.dragListener && (n.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")),
    void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
    n.style = i,
    n
}
function xe(e, n, i, o) {
    const r = t.useMemo(()=>{
        const t = {
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {}
        };
        return ne(t, n, re(o), e.transformTemplate),
        {
            ...t.attrs,
            style: {
                ...t.style
            }
        }
    }
    , [n]);
    if (e.style) {
        const t = {};
        ve(t, e.style, e),
        r.style = {
            ...t,
            ...r.style
        }
    }
    return r
}
function we(e=!1) {
    return (n,i,o,{latestValues: r},s)=>{
        const a = (yt(n) ? xe : ye)(i, r, s, n)
          , l = function(t, e, n) {
            const i = {};
            for (const o in t)
                "values" === o && "object" == typeof t.values || (X(o) || !0 === n && Y(o) || !e && !Y(o) || t.draggable && o.startsWith("onDrag")) && (i[o] = t[o]);
            return i
        }(i, "string" == typeof n, e)
          , u = n !== t.Fragment ? {
            ...l,
            ...a,
            ref: o
        } : {}
          , {children: c} = i
          , d = t.useMemo(()=>Pt(c) ? c.get() : c, [c]);
        return t.createElement(n, {
            ...u,
            children: d
        })
    }
}
function be(t, e) {
    return function(n, {forwardMotionProps: i}={
        forwardMotionProps: !1
    }) {
        return mt({
            ...yt(n) ? fe : me,
            preloadedFeatures: t,
            useRender: we(i),
            createVisualElement: e,
            Component: n
        })
    }
}
function Ee(t, e) {
    if (!Array.isArray(e))
        return !1;
    const n = e.length;
    if (n !== t.length)
        return !1;
    for (let i = 0; i < n; i++)
        if (e[i] !== t[i])
            return !1;
    return !0
}
function Pe(t, e, n) {
    const i = t.getProps();
    return wt(i, e, void 0 !== n ? n : i.custom, t)
}
const Te = L(()=>void 0 !== window.ScrollTimeline);
class Se {
    constructor(t) {
        this.stop = ()=>this.runAll("stop"),
        this.animations = t.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(t=>"finished"in t ? t.finished : t))
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, e) {
        for (let n = 0; n < this.animations.length; n++)
            this.animations[n][t] = e
    }
    attachTimeline(t, e) {
        const n = this.animations.map(n=>Te() && n.attachTimeline ? n.attachTimeline(t) : "function" == typeof e ? e(n) : void 0);
        return ()=>{
            n.forEach((t,e)=>{
                t && t(),
                this.animations[e].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(e=>e[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class Ae extends Se {
    then(t, e) {
        return Promise.all(this.animations).then(t).catch(e)
    }
}
function Ce(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const Re = 2e4;
function De(t) {
    let e = 0;
    let n = t.next(e);
    for (; !n.done && e < Re; )
        e += 50,
        n = t.next(e);
    return e >= Re ? 1 / 0 : e
}
function Me(t) {
    return "function" == typeof t
}
function ke(t, e) {
    t.timeline = e,
    t.onfinish = null
}
const Le = t=>Array.isArray(t) && "number" == typeof t[0]
  , Ve = {
    linearEasing: void 0
};
function je(t, e) {
    const n = L(t);
    return ()=>{
        var t;
        return null !== (t = Ve[e]) && void 0 !== t ? t : n()
    }
}
const Fe = je(()=>{
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch (t) {
        return !1
    }
    return !0
}
, "linearEasing")
  , Oe = (t,e,n=10)=>{
    let i = "";
    const o = Math.max(Math.round(e / n), 2);
    for (let r = 0; r < o; r++)
        i += t(V(0, o - 1, r)) + ", ";
    return `linear(${i.substring(0, i.length - 2)})`
}
;
function Ie(t) {
    return Boolean("function" == typeof t && Fe() || !t || "string" == typeof t && (t in Ne || Fe()) || Le(t) || Array.isArray(t) && t.every(Ie))
}
const Be = ([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`
  , Ne = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Be([0, .65, .55, 1]),
    circOut: Be([.55, 0, 1, .45]),
    backIn: Be([.31, .01, .66, -.59]),
    backOut: Be([.33, 1.53, .69, .99])
};
function Ue(t, e) {
    return t ? "function" == typeof t && Fe() ? Oe(t, e) : Le(t) ? Be(t) : Array.isArray(t) ? t.map(t=>Ue(t, e) || Ne.easeOut) : Ne[t] : void 0
}
const We = {
    x: !1,
    y: !1
};
function _e() {
    return We.x || We.y
}
function $e(t, e, n) {
    if (t instanceof Element)
        return [t];
    if ("string" == typeof t) {
        const e = document.querySelectorAll(t);
        return e ? Array.from(e) : []
    }
    return Array.from(t)
}
function ze(t, e) {
    const n = $e(t)
      , i = new AbortController;
    return [n, {
        passive: !0,
        ...e,
        signal: i.signal
    }, ()=>i.abort()]
}
function Ke(t) {
    return e=>{
        "touch" === e.pointerType || _e() || t(e)
    }
}
const He = (t,e)=>!!e && (t === e || He(t, e.parentElement))
  , Ye = t=>"mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary
  , Xe = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
const Ge = new WeakSet;
function qe(t) {
    return e=>{
        "Enter" === e.key && t(e)
    }
}
function Ze(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e,{
        isPrimary: !0,
        bubbles: !0
    }))
}
function Je(t) {
    return Ye(t) && !_e()
}
function Qe(t, e, n={}) {
    const [i,o,r] = ze(t, n)
      , s = t=>{
        const i = t.currentTarget;
        if (!Je(t) || Ge.has(i))
            return;
        Ge.add(i);
        const r = e(t)
          , s = (t,e)=>{
            window.removeEventListener("pointerup", a),
            window.removeEventListener("pointercancel", l),
            Je(t) && Ge.has(i) && (Ge.delete(i),
            "function" == typeof r && r(t, {
                success: e
            }))
        }
          , a = t=>{
            s(t, n.useGlobalTarget || He(i, t.target))
        }
          , l = t=>{
            s(t, !1)
        }
        ;
        window.addEventListener("pointerup", a, o),
        window.addEventListener("pointercancel", l, o)
    }
    ;
    return i.forEach(t=>{
        (function(t) {
            return Xe.has(t.tagName) || -1 !== t.tabIndex
        }
        )(t) || null !== t.getAttribute("tabindex") || (t.tabIndex = 0);
        (n.useGlobalTarget ? window : t).addEventListener("pointerdown", s, o),
        t.addEventListener("focus", t=>((t,e)=>{
            const n = t.currentTarget;
            if (!n)
                return;
            const i = qe(()=>{
                if (Ge.has(n))
                    return;
                Ze(n, "down");
                const t = qe(()=>{
                    Ze(n, "up")
                }
                );
                n.addEventListener("keyup", t, e),
                n.addEventListener("blur", ()=>Ze(n, "cancel"), e)
            }
            );
            n.addEventListener("keydown", i, e),
            n.addEventListener("blur", ()=>n.removeEventListener("keydown", i), e)
        }
        )(t, o), o)
    }
    ),
    r
}
const tn = new Set(["width", "height", "top", "left", "right", "bottom", ...Ct]);
let en;
function nn() {
    en = void 0
}
const on = {
    now: ()=>(void 0 === en && on.set(W.isProcessing || O ? W.timestamp : performance.now()),
    en),
    set: t=>{
        en = t,
        queueMicrotask(nn)
    }
};
function rn(t, e) {
    -1 === t.indexOf(e) && t.push(e)
}
function sn(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class an {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return rn(this.subscriptions, t),
        ()=>sn(this.subscriptions, t)
    }
    notify(t, e, n) {
        const i = this.subscriptions.length;
        if (i)
            if (1 === i)
                this.subscriptions[0](t, e, n);
            else
                for (let o = 0; o < i; o++) {
                    const i = this.subscriptions[o];
                    i && i(t, e, n)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function ln(t, e) {
    return e ? t * (1e3 / e) : 0
}
const un = {
    current: void 0
};
class cn {
    constructor(t, e={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (t,e=!0)=>{
            const n = on.now();
            this.updatedAt !== n && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(t),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = e.owner
    }
    setCurrent(t) {
        var e;
        this.current = t,
        this.updatedAt = on.now(),
        null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = (e = this.current,
        !isNaN(parseFloat(e))))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, e) {
        this.events[t] || (this.events[t] = new an);
        const n = this.events[t].add(e);
        return "change" === t ? ()=>{
            n(),
            N.read(()=>{
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : n
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, e) {
        this.passiveEffect = t,
        this.stopPassiveEffect = e
    }
    set(t, e=!0) {
        e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
    }
    setWithVelocity(t, e, n) {
        this.set(e),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - n
    }
    jump(t, e=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        e && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return un.current && un.current.push(this),
        this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = on.now();
        if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30)
            return 0;
        const e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
        return ln(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
    }
    start(t) {
        return this.stop(),
        new Promise(e=>{
            this.hasAnimated = !0,
            this.animation = t(e),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then(()=>{
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function dn(t, e) {
    return new cn(t,e)
}
function hn(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, dn(n))
}
function pn(t, e) {
    const n = t.getValue("willChange");
    if (i = n,
    Boolean(Pt(i) && i.add))
        return n.add(e);
    var i
}
function fn(t) {
    return t.props[ct]
}
const mn = (t,e,n)=>(((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
function vn(t, e, n, i) {
    if (t === e && n === i)
        return D;
    const o = e=>function(t, e, n, i, o) {
        let r, s, a = 0;
        do {
            s = e + (n - e) / 2,
            r = mn(s, i, o) - t,
            r > 0 ? n = s : e = s
        } while (Math.abs(r) > 1e-7 && ++a < 12);
        return s
    }(e, 0, 1, t, n);
    return t=>0 === t || 1 === t ? t : mn(o(t), e, i)
}
const gn = t=>e=>e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , yn = t=>e=>1 - t(1 - e)
  , xn = vn(.33, 1.53, .69, .99)
  , wn = yn(xn)
  , bn = gn(wn)
  , En = t=>(t *= 2) < 1 ? .5 * wn(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , Pn = t=>1 - Math.sin(Math.acos(t))
  , Tn = yn(Pn)
  , Sn = gn(Pn)
  , An = t=>/^0[^.\s]+$/u.test(t);
function Cn(t) {
    return "number" == typeof t ? 0 === t : null === t || ("none" === t || "0" === t || An(t))
}
const Rn = t=>Math.round(1e5 * t) / 1e5
  , Dn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
const Mn = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , kn = (t,e)=>n=>Boolean("string" == typeof n && Mn.test(n) && n.startsWith(t) || e && !function(t) {
    return null == t
}(n) && Object.prototype.hasOwnProperty.call(n, e))
  , Ln = (t,e,n)=>i=>{
    if ("string" != typeof i)
        return i;
    const [o,r,s,a] = i.match(Dn);
    return {
        [t]: parseFloat(o),
        [e]: parseFloat(r),
        [n]: parseFloat(s),
        alpha: void 0 !== a ? parseFloat(a) : 1
    }
}
  , Vn = {
    ...Ot,
    transform: t=>Math.round((t=>Ft(0, 255, t))(t))
}
  , jn = {
    test: kn("rgb", "red"),
    parse: Ln("red", "green", "blue"),
    transform: ({red: t, green: e, blue: n, alpha: i=1})=>"rgba(" + Vn.transform(t) + ", " + Vn.transform(e) + ", " + Vn.transform(n) + ", " + Rn(It.transform(i)) + ")"
};
const Fn = {
    test: kn("#"),
    parse: function(t) {
        let e = ""
          , n = ""
          , i = ""
          , o = "";
        return t.length > 5 ? (e = t.substring(1, 3),
        n = t.substring(3, 5),
        i = t.substring(5, 7),
        o = t.substring(7, 9)) : (e = t.substring(1, 2),
        n = t.substring(2, 3),
        i = t.substring(3, 4),
        o = t.substring(4, 5),
        e += e,
        n += n,
        i += i,
        o += o),
        {
            red: parseInt(e, 16),
            green: parseInt(n, 16),
            blue: parseInt(i, 16),
            alpha: o ? parseInt(o, 16) / 255 : 1
        }
    },
    transform: jn.transform
}
  , On = {
    test: kn("hsl", "hue"),
    parse: Ln("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: n, alpha: i=1})=>"hsla(" + Math.round(t) + ", " + Wt.transform(Rn(e)) + ", " + Wt.transform(Rn(n)) + ", " + Rn(It.transform(i)) + ")"
}
  , In = {
    test: t=>jn.test(t) || Fn.test(t) || On.test(t),
    parse: t=>jn.test(t) ? jn.parse(t) : On.test(t) ? On.parse(t) : Fn.parse(t),
    transform: t=>"string" == typeof t ? t : t.hasOwnProperty("red") ? jn.transform(t) : On.transform(t)
}
  , Bn = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
const Nn = "number"
  , Un = "color"
  , Wn = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function _n(t) {
    const e = t.toString()
      , n = []
      , i = {
        color: [],
        number: [],
        var: []
    }
      , o = [];
    let r = 0;
    const s = e.replace(Wn, t=>(In.test(t) ? (i.color.push(r),
    o.push(Un),
    n.push(In.parse(t))) : t.startsWith("var(") ? (i.var.push(r),
    o.push("var"),
    n.push(t)) : (i.number.push(r),
    o.push(Nn),
    n.push(parseFloat(t))),
    ++r,
    "${}")).split("${}");
    return {
        values: n,
        split: s,
        indexes: i,
        types: o
    }
}
function $n(t) {
    return _n(t).values
}
function zn(t) {
    const {split: e, types: n} = _n(t)
      , i = e.length;
    return t=>{
        let o = "";
        for (let r = 0; r < i; r++)
            if (o += e[r],
            void 0 !== t[r]) {
                const e = n[r];
                o += e === Nn ? Rn(t[r]) : e === Un ? In.transform(t[r]) : t[r]
            }
        return o
    }
}
const Kn = t=>"number" == typeof t ? 0 : t;
const Hn = {
    test: function(t) {
        var e, n;
        return isNaN(t) && "string" == typeof t && ((null === (e = t.match(Dn)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(Bn)) || void 0 === n ? void 0 : n.length) || 0) > 0
    },
    parse: $n,
    createTransformer: zn,
    getAnimatableNone: function(t) {
        const e = $n(t);
        return zn(t)(e.map(Kn))
    }
}
  , Yn = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Xn(t) {
    const [e,n] = t.slice(0, -1).split("(");
    if ("drop-shadow" === e)
        return t;
    const [i] = n.match(Dn) || [];
    if (!i)
        return t;
    const o = n.replace(i, "");
    let r = Yn.has(e) ? 1 : 0;
    return i !== n && (r *= 100),
    e + "(" + r + o + ")"
}
const Gn = /\b([a-z-]*)\(.*?\)/gu
  , qn = {
    ...Hn,
    getAnimatableNone: t=>{
        const e = t.match(Gn);
        return e ? e.map(Xn).join(" ") : t
    }
}
  , Zn = {
    ...Gt,
    color: In,
    backgroundColor: In,
    outlineColor: In,
    fill: In,
    stroke: In,
    borderColor: In,
    borderTopColor: In,
    borderRightColor: In,
    borderBottomColor: In,
    borderLeftColor: In,
    filter: qn,
    WebkitFilter: qn
}
  , Jn = t=>Zn[t];
function Qn(t, e) {
    let n = Jn(t);
    return n !== qn && (n = Hn),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const ti = new Set(["auto", "none", "0"]);
const ei = t=>t === Ot || t === _t
  , ni = (t,e)=>parseFloat(t.split(", ")[e])
  , ii = (t,e)=>(n,{transform: i})=>{
    if ("none" === i || !i)
        return 0;
    const o = i.match(/^matrix3d\((.+)\)$/u);
    if (o)
        return ni(o[1], e);
    {
        const e = i.match(/^matrix\((.+)\)$/u);
        return e ? ni(e[1], t) : 0
    }
}
  , oi = new Set(["x", "y", "z"])
  , ri = Ct.filter(t=>!oi.has(t));
const si = {
    width: ({x: t},{paddingLeft: e="0", paddingRight: n="0"})=>t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({y: t},{paddingTop: e="0", paddingBottom: n="0"})=>t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t,{top: e})=>parseFloat(e),
    left: (t,{left: e})=>parseFloat(e),
    bottom: ({y: t},{top: e})=>parseFloat(e) + (t.max - t.min),
    right: ({x: t},{left: e})=>parseFloat(e) + (t.max - t.min),
    x: ii(4, 13),
    y: ii(5, 14)
};
si.translateX = si.x,
si.translateY = si.y;
const ai = new Set;
let li = !1
  , ui = !1;
function ci() {
    if (ui) {
        const t = Array.from(ai).filter(t=>t.needsMeasurement)
          , e = new Set(t.map(t=>t.element))
          , n = new Map;
        e.forEach(t=>{
            const e = function(t) {
                const e = [];
                return ri.forEach(n=>{
                    const i = t.getValue(n);
                    void 0 !== i && (e.push([n, i.get()]),
                    i.set(n.startsWith("scale") ? 1 : 0))
                }
                ),
                e
            }(t);
            e.length && (n.set(t, e),
            t.render())
        }
        ),
        t.forEach(t=>t.measureInitialState()),
        e.forEach(t=>{
            t.render();
            const e = n.get(t);
            e && e.forEach(([e,n])=>{
                var i;
                null === (i = t.getValue(e)) || void 0 === i || i.set(n)
            }
            )
        }
        ),
        t.forEach(t=>t.measureEndState()),
        t.forEach(t=>{
            void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
        }
        )
    }
    ui = !1,
    li = !1,
    ai.forEach(t=>t.complete()),
    ai.clear()
}
function di() {
    ai.forEach(t=>{
        t.readKeyframes(),
        t.needsMeasurement && (ui = !0)
    }
    )
}
class hi {
    constructor(t, e, n, i, o, r=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = e,
        this.name = n,
        this.motionValue = i,
        this.element = o,
        this.isAsync = r
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (ai.add(this),
        li || (li = !0,
        N.read(di),
        N.resolveKeyframes(ci))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: e, element: n, motionValue: i} = this;
        for (let o = 0; o < t.length; o++)
            if (null === t[o])
                if (0 === o) {
                    const o = null == i ? void 0 : i.get()
                      , r = t[t.length - 1];
                    if (void 0 !== o)
                        t[0] = o;
                    else if (n && e) {
                        const i = n.readValue(e, r);
                        null != i && (t[0] = i)
                    }
                    void 0 === t[0] && (t[0] = r),
                    i && void 0 === o && i.set(t[0])
                } else
                    t[o] = t[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        ai.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        ai.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const pi = t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
  , fi = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function mi(t, e, n=1) {
    const [i,o] = function(t) {
        const e = fi.exec(t);
        if (!e)
            return [, ];
        const [,n,i,o] = e;
        return [`--${null != n ? n : i}`, o]
    }(t);
    if (!i)
        return;
    const r = window.getComputedStyle(e).getPropertyValue(i);
    if (r) {
        const t = r.trim();
        return pi(t) ? parseFloat(t) : t
    }
    return Lt(o) ? mi(o, e, n + 1) : o
}
const vi = t=>e=>e.test(t)
  , gi = [Ot, _t, Wt, Ut, zt, $t, {
    test: t=>"auto" === t,
    parse: t=>t
}]
  , yi = t=>gi.find(vi(t));
class xi extends hi {
    constructor(t, e, n, i, o) {
        super(t, e, n, i, o, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: e, name: n} = this;
        if (!e || !e.current)
            return;
        super.readKeyframes();
        for (let a = 0; a < t.length; a++) {
            let n = t[a];
            if ("string" == typeof n && (n = n.trim(),
            Lt(n))) {
                const i = mi(n, e.current);
                void 0 !== i && (t[a] = i),
                a === t.length - 1 && (this.finalKeyframe = n)
            }
        }
        if (this.resolveNoneKeyframes(),
        !tn.has(n) || 2 !== t.length)
            return;
        const [i,o] = t
          , r = yi(i)
          , s = yi(o);
        if (r !== s)
            if (ei(r) && ei(s))
                for (let a = 0; a < t.length; a++) {
                    const e = t[a];
                    "string" == typeof e && (t[a] = parseFloat(e))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: e} = this
          , n = [];
        for (let i = 0; i < t.length; i++)
            Cn(t[i]) && n.push(i);
        n.length && function(t, e, n) {
            let i, o = 0;
            for (; o < t.length && !i; ) {
                const e = t[o];
                "string" == typeof e && !ti.has(e) && _n(e).values.length && (i = t[o]),
                o++
            }
            if (i && n)
                for (const r of e)
                    t[r] = Qn(n, i)
        }(t, n, e)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: e, name: n} = this;
        if (!t || !t.current)
            return;
        "height" === n && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = si[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        e[0] = this.measuredOrigin;
        const i = e[e.length - 1];
        void 0 !== i && t.getValue(n, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {element: e, name: n, unresolvedKeyframes: i} = this;
        if (!e || !e.current)
            return;
        const o = e.getValue(n);
        o && o.jump(this.measuredOrigin, !1);
        const r = i.length - 1
          , s = i[r];
        i[r] = si[n](e.measureViewportBox(), window.getComputedStyle(e.current)),
        null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s),
        (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach(([t,n])=>{
            e.getValue(t).set(n)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const wi = (t,e)=>"zIndex" !== e && (!("number" != typeof t && !Array.isArray(t)) || !("string" != typeof t || !Hn.test(t) && "0" !== t || t.startsWith("url(")));
const bi = t=>null !== t;
function Ei(t, {repeat: e, repeatType: n="loop"}, i) {
    const o = t.filter(bi)
      , r = e && "loop" !== n && e % 2 == 1 ? 0 : o.length - 1;
    return r && void 0 !== i ? i : o[r]
}
class Pi {
    constructor({autoplay: t=!0, delay: e=0, type: n="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: r="loop", ...s}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = on.now(),
        this.options = {
            autoplay: t,
            delay: e,
            type: n,
            repeat: i,
            repeatDelay: o,
            repeatType: r,
            ...s
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
    }
    get resolved() {
        return this._resolved || this.hasAttemptedResolve || (di(),
        ci()),
        this._resolved
    }
    onKeyframesResolved(t, e) {
        this.resolvedAt = on.now(),
        this.hasAttemptedResolve = !0;
        const {name: n, type: i, velocity: o, delay: r, onComplete: s, onUpdate: a, isGenerator: l} = this.options;
        if (!l && !function(t, e, n, i) {
            const o = t[0];
            if (null === o)
                return !1;
            if ("display" === e || "visibility" === e)
                return !0;
            const r = t[t.length - 1]
              , s = wi(o, e)
              , a = wi(r, e);
            return !(!s || !a) && (function(t) {
                const e = t[0];
                if (1 === t.length)
                    return !0;
                for (let n = 0; n < t.length; n++)
                    if (t[n] !== e)
                        return !0
            }(t) || ("spring" === n || Me(n)) && i)
        }(t, n, i, o)) {
            if (!r)
                return a && a(Ei(t, this.options, e)),
                s && s(),
                void this.resolveFinishedPromise();
            this.options.duration = 0
        }
        const u = this.initPlayback(t, e);
        !1 !== u && (this._resolved = {
            keyframes: t,
            finalKeyframe: e,
            ...u
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, e) {
        return this.currentFinishedPromise.then(t, e)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t=>{
            this.resolveFinishedPromise = t
        }
        )
    }
}
const Ti = (t,e,n)=>t + (e - t) * n;
function Si(t, e, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}
function Ai(t, e) {
    return n=>n > 0 ? e : t
}
const Ci = (t,e,n)=>{
    const i = t * t
      , o = n * (e * e - i) + i;
    return o < 0 ? 0 : Math.sqrt(o)
}
  , Ri = [Fn, jn, On];
function Di(t) {
    const e = (n = t,
    Ri.find(t=>t.test(n)));
    var n;
    if (!Boolean(e))
        return !1;
    let i = e.parse(t);
    return e === On && (i = function({hue: t, saturation: e, lightness: n, alpha: i}) {
        t /= 360,
        n /= 100;
        let o = 0
          , r = 0
          , s = 0;
        if (e /= 100) {
            const i = n < .5 ? n * (1 + e) : n + e - n * e
              , a = 2 * n - i;
            o = Si(a, i, t + 1 / 3),
            r = Si(a, i, t),
            s = Si(a, i, t - 1 / 3)
        } else
            o = r = s = n;
        return {
            red: Math.round(255 * o),
            green: Math.round(255 * r),
            blue: Math.round(255 * s),
            alpha: i
        }
    }(i)),
    i
}
const Mi = (t,e)=>{
    const n = Di(t)
      , i = Di(e);
    if (!n || !i)
        return Ai(t, e);
    const o = {
        ...n
    };
    return t=>(o.red = Ci(n.red, i.red, t),
    o.green = Ci(n.green, i.green, t),
    o.blue = Ci(n.blue, i.blue, t),
    o.alpha = Ti(n.alpha, i.alpha, t),
    jn.transform(o))
}
  , ki = (t,e)=>n=>e(t(n))
  , Li = (...t)=>t.reduce(ki)
  , Vi = new Set(["none", "hidden"]);
function ji(t, e) {
    return n=>Ti(t, e, n)
}
function Fi(t) {
    return "number" == typeof t ? ji : "string" == typeof t ? Lt(t) ? Ai : In.test(t) ? Mi : Bi : Array.isArray(t) ? Oi : "object" == typeof t ? In.test(t) ? Mi : Ii : Ai
}
function Oi(t, e) {
    const n = [...t]
      , i = n.length
      , o = t.map((t,n)=>Fi(t)(t, e[n]));
    return t=>{
        for (let e = 0; e < i; e++)
            n[e] = o[e](t);
        return n
    }
}
function Ii(t, e) {
    const n = {
        ...t,
        ...e
    }
      , i = {};
    for (const o in n)
        void 0 !== t[o] && void 0 !== e[o] && (i[o] = Fi(t[o])(t[o], e[o]));
    return t=>{
        for (const e in i)
            n[e] = i[e](t);
        return n
    }
}
const Bi = (t,e)=>{
    const n = Hn.createTransformer(e)
      , i = _n(t)
      , o = _n(e);
    return i.indexes.var.length === o.indexes.var.length && i.indexes.color.length === o.indexes.color.length && i.indexes.number.length >= o.indexes.number.length ? Vi.has(t) && !o.values.length || Vi.has(e) && !i.values.length ? function(t, e) {
        return Vi.has(t) ? n=>n <= 0 ? t : e : n=>n >= 1 ? e : t
    }(t, e) : Li(Oi(function(t, e) {
        var n;
        const i = []
          , o = {
            color: 0,
            var: 0,
            number: 0
        };
        for (let r = 0; r < e.values.length; r++) {
            const s = e.types[r]
              , a = t.indexes[s][o[s]]
              , l = null !== (n = t.values[a]) && void 0 !== n ? n : 0;
            i[r] = l,
            o[s]++
        }
        return i
    }(i, o), o.values), n) : Ai(t, e)
}
;
function Ni(t, e, n) {
    if ("number" == typeof t && "number" == typeof e && "number" == typeof n)
        return Ti(t, e, n);
    return Fi(t)(t, e)
}
function Ui(t, e, n) {
    const i = Math.max(e - 5, 0);
    return ln(n - t(i), e - i)
}
const Wi = 100
  , _i = 10
  , $i = 1
  , zi = 0
  , Ki = 800
  , Hi = .3
  , Yi = .3
  , Xi = {
    granular: .01,
    default: 2
}
  , Gi = {
    granular: .005,
    default: .5
}
  , qi = .01
  , Zi = 10
  , Ji = .05
  , Qi = 1
  , to = .001;
function eo({duration: t=Ki, bounce: e=Hi, velocity: n=zi, mass: i=$i}) {
    let o, r, s = 1 - e;
    s = Ft(Ji, Qi, s),
    t = Ft(qi, Zi, F(t)),
    s < 1 ? (o = e=>{
        const i = e * s
          , o = i * t
          , r = i - n
          , a = io(e, s)
          , l = Math.exp(-o);
        return to - r / a * l
    }
    ,
    r = e=>{
        const i = e * s * t
          , r = i * n + n
          , a = Math.pow(s, 2) * Math.pow(e, 2) * t
          , l = Math.exp(-i)
          , u = io(Math.pow(e, 2), s);
        return (-o(e) + to > 0 ? -1 : 1) * ((r - a) * l) / u
    }
    ) : (o = e=>Math.exp(-e * t) * ((e - n) * t + 1) - .001,
    r = e=>Math.exp(-e * t) * (t * t * (n - e)));
    const a = function(t, e, n) {
        let i = n;
        for (let o = 1; o < no; o++)
            i -= t(i) / e(i);
        return i
    }(o, r, 5 / t);
    if (t = j(t),
    isNaN(a))
        return {
            stiffness: Wi,
            damping: _i,
            duration: t
        };
    {
        const e = Math.pow(a, 2) * i;
        return {
            stiffness: e,
            damping: 2 * s * Math.sqrt(i * e),
            duration: t
        }
    }
}
const no = 12;
function io(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const oo = ["duration", "bounce"]
  , ro = ["stiffness", "damping", "mass"];
function so(t, e) {
    return e.some(e=>void 0 !== t[e])
}
function ao(t=Yi, e=Hi) {
    const n = "object" != typeof t ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {restSpeed: i, restDelta: o} = n;
    const r = n.keyframes[0]
      , s = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: r
    }
      , {stiffness: l, damping: u, mass: c, duration: d, velocity: h, isResolvedFromDuration: p} = function(t) {
        let e = {
            velocity: zi,
            stiffness: Wi,
            damping: _i,
            mass: $i,
            isResolvedFromDuration: !1,
            ...t
        };
        if (!so(t, ro) && so(t, oo))
            if (t.visualDuration) {
                const n = t.visualDuration
                  , i = 2 * Math.PI / (1.2 * n)
                  , o = i * i
                  , r = 2 * Ft(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(o);
                e = {
                    ...e,
                    mass: $i,
                    stiffness: o,
                    damping: r
                }
            } else {
                const n = eo(t);
                e = {
                    ...e,
                    ...n,
                    mass: $i
                },
                e.isResolvedFromDuration = !0
            }
        return e
    }({
        ...n,
        velocity: -F(n.velocity || 0)
    })
      , f = h || 0
      , m = u / (2 * Math.sqrt(l * c))
      , v = s - r
      , g = F(Math.sqrt(l / c))
      , y = Math.abs(v) < 5;
    let x;
    if (i || (i = y ? Xi.granular : Xi.default),
    o || (o = y ? Gi.granular : Gi.default),
    m < 1) {
        const t = io(g, m);
        x = e=>{
            const n = Math.exp(-m * g * e);
            return s - n * ((f + m * g * v) / t * Math.sin(t * e) + v * Math.cos(t * e))
        }
    } else if (1 === m)
        x = t=>s - Math.exp(-g * t) * (v + (f + g * v) * t);
    else {
        const t = g * Math.sqrt(m * m - 1);
        x = e=>{
            const n = Math.exp(-m * g * e)
              , i = Math.min(t * e, 300);
            return s - n * ((f + m * g * v) * Math.sinh(i) + t * v * Math.cosh(i)) / t
        }
    }
    const w = {
        calculatedDuration: p && d || null,
        next: t=>{
            const e = x(t);
            if (p)
                a.done = t >= d;
            else {
                let n = 0;
                m < 1 && (n = 0 === t ? j(f) : Ui(x, t, e));
                const r = Math.abs(n) <= i
                  , l = Math.abs(s - e) <= o;
                a.done = r && l
            }
            return a.value = a.done ? s : e,
            a
        }
        ,
        toString: ()=>{
            const t = Math.min(De(w), Re)
              , e = Oe(e=>w.next(t * e).value, t, 30);
            return t + "ms " + e
        }
    };
    return w
}
function lo({keyframes: t, velocity: e=0, power: n=.8, timeConstant: i=325, bounceDamping: o=10, bounceStiffness: r=500, modifyTarget: s, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const d = t[0]
      , h = {
        done: !1,
        value: d
    }
      , p = t=>void 0 === a ? l : void 0 === l || Math.abs(a - t) < Math.abs(l - t) ? a : l;
    let f = n * e;
    const m = d + f
      , v = void 0 === s ? m : s(m);
    v !== m && (f = v - d);
    const g = t=>-f * Math.exp(-t / i)
      , y = t=>v + g(t)
      , x = t=>{
        const e = g(t)
          , n = y(t);
        h.done = Math.abs(e) <= u,
        h.value = h.done ? v : n
    }
    ;
    let w, b;
    const E = t=>{
        var e;
        (e = h.value,
        void 0 !== a && e < a || void 0 !== l && e > l) && (w = t,
        b = ao({
            keyframes: [h.value, p(h.value)],
            velocity: Ui(y, t, h.value),
            damping: o,
            stiffness: r,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return E(0),
    {
        calculatedDuration: null,
        next: t=>{
            let e = !1;
            return b || void 0 !== w || (e = !0,
            x(t),
            E(t)),
            void 0 !== w && t >= w ? b.next(t - w) : (!e && x(t),
            h)
        }
    }
}
const uo = vn(.42, 0, 1, 1)
  , co = vn(0, 0, .58, 1)
  , ho = vn(.42, 0, .58, 1)
  , po = {
    linear: D,
    easeIn: uo,
    easeInOut: ho,
    easeOut: co,
    circIn: Pn,
    circInOut: Sn,
    circOut: Tn,
    backIn: wn,
    backInOut: bn,
    backOut: xn,
    anticipate: En
}
  , fo = t=>{
    if (Le(t)) {
        k(4 === t.length);
        const [e,n,i,o] = t;
        return vn(e, n, i, o)
    }
    return "string" == typeof t ? po[t] : t
}
;
function mo(t, e, {clamp: n=!0, ease: i, mixer: o}={}) {
    const r = t.length;
    if (k(r === e.length),
    1 === r)
        return ()=>e[0];
    if (2 === r && e[0] === e[1])
        return ()=>e[1];
    const s = t[0] === t[1];
    t[0] > t[r - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const a = function(t, e, n) {
        const i = []
          , o = n || Ni
          , r = t.length - 1;
        for (let s = 0; s < r; s++) {
            let n = o(t[s], t[s + 1]);
            if (e) {
                const t = Array.isArray(e) ? e[s] || D : e;
                n = Li(t, n)
            }
            i.push(n)
        }
        return i
    }(e, i, o)
      , l = a.length
      , u = n=>{
        if (s && n < t[0])
            return e[0];
        let i = 0;
        if (l > 1)
            for (; i < t.length - 2 && !(n < t[i + 1]); i++)
                ;
        const o = V(t[i], t[i + 1], n);
        return a[i](o)
    }
    ;
    return n ? e=>u(Ft(t[0], t[r - 1], e)) : u
}
function vo(t) {
    const e = [0];
    return function(t, e) {
        const n = t[t.length - 1];
        for (let i = 1; i <= e; i++) {
            const o = V(0, e, i);
            t.push(Ti(n, 1, o))
        }
    }(e, t.length - 1),
    e
}
function go({duration: t=300, keyframes: e, times: n, ease: i="easeInOut"}) {
    const o = (t=>Array.isArray(t) && "number" != typeof t[0])(i) ? i.map(fo) : fo(i)
      , r = {
        done: !1,
        value: e[0]
    }
      , s = function(t, e) {
        return t.map(t=>t * e)
    }(n && n.length === e.length ? n : vo(e), t)
      , a = mo(s, e, {
        ease: Array.isArray(o) ? o : (l = e,
        u = o,
        l.map(()=>u || ho).splice(0, l.length - 1))
    });
    var l, u;
    return {
        calculatedDuration: t,
        next: e=>(r.value = a(e),
        r.done = e >= t,
        r)
    }
}
const yo = t=>{
    const e = ({timestamp: e})=>t(e);
    return {
        start: ()=>N.update(e, !0),
        stop: ()=>U(e),
        now: ()=>W.isProcessing ? W.timestamp : on.now()
    }
}
  , xo = {
    decay: lo,
    inertia: lo,
    tween: go,
    keyframes: go,
    spring: ao
}
  , wo = t=>t / 100;
class bo extends Pi {
    constructor(t) {
        super(t),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = ()=>{
            if (this.resolver.cancel(),
            this.isStopped = !0,
            "idle" === this.state)
                return;
            this.teardown();
            const {onStop: t} = this.options;
            t && t()
        }
        ;
        const {name: e, motionValue: n, element: i, keyframes: o} = this.options
          , r = (null == i ? void 0 : i.KeyframeResolver) || hi;
        this.resolver = new r(o,(t,e)=>this.onKeyframesResolved(t, e),e,n,i),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {type: e="keyframes", repeat: n=0, repeatDelay: i=0, repeatType: o, velocity: r=0} = this.options
          , s = Me(e) ? e : xo[e] || go;
        let a, l;
        s !== go && "number" != typeof t[0] && (a = Li(wo, Ni(t[0], t[1])),
        t = [0, 100]);
        const u = s({
            ...this.options,
            keyframes: t
        });
        "mirror" === o && (l = s({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -r
        })),
        null === u.calculatedDuration && (u.calculatedDuration = De(u));
        const {calculatedDuration: c} = u
          , d = c + i;
        return {
            generator: u,
            mirroredGenerator: l,
            mapPercentToKeyframes: a,
            calculatedDuration: c,
            resolvedDuration: d,
            totalDuration: d * (n + 1) - i
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
    }
    tick(t, e=!1) {
        const {resolved: n} = this;
        if (!n) {
            const {keyframes: t} = this.options;
            return {
                done: !0,
                value: t[t.length - 1]
            }
        }
        const {finalKeyframe: i, generator: o, mirroredGenerator: r, mapPercentToKeyframes: s, keyframes: a, calculatedDuration: l, totalDuration: u, resolvedDuration: c} = n;
        if (null === this.startTime)
            return o.next(0);
        const {delay: d, repeat: h, repeatType: p, repeatDelay: f, onUpdate: m} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
        e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const v = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
          , g = this.speed >= 0 ? v < 0 : v > u;
        this.currentTime = Math.max(v, 0),
        "finished" === this.state && null === this.holdTime && (this.currentTime = u);
        let y = this.currentTime
          , x = o;
        if (h) {
            const t = Math.min(this.currentTime, u) / c;
            let e = Math.floor(t)
              , n = t % 1;
            !n && t >= 1 && (n = 1),
            1 === n && e--,
            e = Math.min(e, h + 1);
            Boolean(e % 2) && ("reverse" === p ? (n = 1 - n,
            f && (n -= f / c)) : "mirror" === p && (x = r)),
            y = Ft(0, 1, n) * c
        }
        const w = g ? {
            done: !1,
            value: a[0]
        } : x.next(y);
        s && (w.value = s(w.value));
        let {done: b} = w;
        g || null === l || (b = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
        const E = null === this.holdTime && ("finished" === this.state || "running" === this.state && b);
        return E && void 0 !== i && (w.value = Ei(a, this.options, i)),
        m && m(w.value),
        E && this.finish(),
        w
    }
    get duration() {
        const {resolved: t} = this;
        return t ? F(t.calculatedDuration) : 0
    }
    get time() {
        return F(this.currentTime)
    }
    set time(t) {
        t = j(t),
        this.currentTime = t,
        null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const e = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        e && (this.time = F(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved)
            return void (this.pendingPlayState = "running");
        if (this.isStopped)
            return;
        const {driver: t=yo, onPlay: e, startTime: n} = this.options;
        this.driver || (this.driver = t(t=>this.tick(t))),
        e && e();
        const i = this.driver.now();
        null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = i) : this.startTime = null != n ? n : this.calcStartTime(),
        "finished" === this.state && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        this._resolved ? (this.state = "paused",
        this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0) : this.pendingPlayState = "paused"
    }
    complete() {
        "running" !== this.state && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        null !== this.cancelTime && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const Eo = new Set(["opacity", "clipPath", "filter", "transform"]);
function Po(t, e, n, {delay: i=0, duration: o=300, repeat: r=0, repeatType: s="loop", ease: a="easeInOut", times: l}={}) {
    const u = {
        [e]: n
    };
    l && (u.offset = l);
    const c = Ue(a, o);
    return Array.isArray(c) && (u.easing = c),
    t.animate(u, {
        delay: i,
        duration: o,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: r + 1,
        direction: "reverse" === s ? "alternate" : "normal"
    })
}
const To = L(()=>Object.hasOwnProperty.call(Element.prototype, "animate"));
const So = {
    anticipate: En,
    backInOut: bn,
    circInOut: Sn
};
class Ao extends Pi {
    constructor(t) {
        super(t);
        const {name: e, motionValue: n, element: i, keyframes: o} = this.options;
        this.resolver = new xi(o,(t,e)=>this.onKeyframesResolved(t, e),e,n,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, e) {
        let {duration: n=300, times: i, ease: o, type: r, motionValue: s, name: a, startTime: l} = this.options;
        if (!s.owner || !s.owner.current)
            return !1;
        if ("string" == typeof o && Fe() && o in So && (o = So[o]),
        function(t) {
            return Me(t.type) || "spring" === t.type || !Ie(t.ease)
        }(this.options)) {
            const {onComplete: e, onUpdate: s, motionValue: a, element: l, ...u} = this.options
              , c = function(t, e) {
                const n = new bo({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0
                });
                let i = {
                    done: !1,
                    value: t[0]
                };
                const o = [];
                let r = 0;
                for (; !i.done && r < 2e4; )
                    i = n.sample(r),
                    o.push(i.value),
                    r += 10;
                return {
                    times: void 0,
                    keyframes: o,
                    duration: r - 10,
                    ease: "linear"
                }
            }(t, u);
            1 === (t = c.keyframes).length && (t[1] = t[0]),
            n = c.duration,
            i = c.times,
            o = c.ease,
            r = "keyframes"
        }
        const u = Po(s.owner.current, a, t, {
            ...this.options,
            duration: n,
            times: i,
            ease: o
        });
        return u.startTime = null != l ? l : this.calcStartTime(),
        this.pendingTimeline ? (ke(u, this.pendingTimeline),
        this.pendingTimeline = void 0) : u.onfinish = ()=>{
            const {onComplete: n} = this.options;
            s.set(Ei(t, this.options, e)),
            n && n(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: u,
            duration: n,
            times: i,
            type: r,
            ease: o,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: e} = t;
        return F(e)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: e} = t;
        return F(e.currentTime || 0)
    }
    set time(t) {
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n} = e;
        n.currentTime = j(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: e} = t;
        return e.playbackRate
    }
    set speed(t) {
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n} = e;
        n.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: e} = t;
        return e.playState
    }
    get startTime() {
        const {resolved: t} = this;
        if (!t)
            return null;
        const {animation: e} = t;
        return e.startTime
    }
    attachTimeline(t) {
        if (this._resolved) {
            const {resolved: e} = this;
            if (!e)
                return D;
            const {animation: n} = e;
            ke(n, t)
        } else
            this.pendingTimeline = t;
        return D
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: e} = t;
        "finished" === e.playState && this.updateFinishedPromise(),
        e.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: e} = t;
        e.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        "idle" === this.state)
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: e, keyframes: n, duration: i, type: o, ease: r, times: s} = t;
        if ("idle" === e.playState || "finished" === e.playState)
            return;
        if (this.time) {
            const {motionValue: t, onUpdate: e, onComplete: a, element: l, ...u} = this.options
              , c = new bo({
                ...u,
                keyframes: n,
                duration: i,
                type: o,
                ease: r,
                times: s,
                isGenerator: !0
            })
              , d = j(this.time);
            t.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10)
        }
        const {onStop: a} = this.options;
        a && a(),
        this.cancel()
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: e, name: n, repeatDelay: i, repeatType: o, damping: r, type: s} = t;
        if (!(e && e.owner && e.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: a, transformTemplate: l} = e.owner.getProps();
        return To() && n && Eo.has(n) && !a && !l && !i && "mirror" !== o && 0 !== r && "inertia" !== s
    }
}
const Co = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , Ro = {
    type: "keyframes",
    duration: .8
}
  , Do = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , Mo = (t,{keyframes: e})=>e.length > 2 ? Ro : Rt.has(t) ? t.startsWith("scale") ? {
    type: "spring",
    stiffness: 550,
    damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
} : Co : Do;
const ko = (t,e,n,i={},o,r)=>s=>{
    const a = Ce(i, t) || {}
      , l = a.delay || i.delay || 0;
    let {elapsed: u=0} = i;
    u -= j(l);
    let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: t=>{
            e.set(t),
            a.onUpdate && a.onUpdate(t)
        }
        ,
        onComplete: ()=>{
            s(),
            a.onComplete && a.onComplete()
        }
        ,
        name: t,
        motionValue: e,
        element: r ? void 0 : o
    };
    (function({when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: o, repeat: r, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c}) {
        return !!Object.keys(c).length
    }
    )(a) || (c = {
        ...c,
        ...Mo(t, c)
    }),
    c.duration && (c.duration = j(c.duration)),
    c.repeatDelay && (c.repeatDelay = j(c.repeatDelay)),
    void 0 !== c.from && (c.keyframes[0] = c.from);
    let d = !1;
    if ((!1 === c.type || 0 === c.duration && !c.repeatDelay) && (c.duration = 0,
    0 === c.delay && (d = !0)),
    d && !r && void 0 !== e.get()) {
        const t = Ei(c.keyframes, a);
        if (void 0 !== t)
            return N.update(()=>{
                c.onUpdate(t),
                c.onComplete()
            }
            ),
            new Ae([])
    }
    return !r && Ao.supports(c) ? new Ao(c) : new bo(c)
}
;
function Lo({protectedKeys: t, needsAnimating: e}, n) {
    const i = t.hasOwnProperty(n) && !0 !== e[n];
    return e[n] = !1,
    i
}
function Vo(t, e, {delay: n=0, transitionOverride: i, type: o}={}) {
    var r;
    let {transition: s=t.getDefaultTransition(), transitionEnd: a, ...l} = e;
    i && (s = i);
    const u = []
      , c = o && t.animationState && t.animationState.getState()[o];
    for (const d in l) {
        const e = t.getValue(d, null !== (r = t.latestValues[d]) && void 0 !== r ? r : null)
          , i = l[d];
        if (void 0 === i || c && Lo(c, d))
            continue;
        const o = {
            delay: n,
            ...Ce(s || {}, d)
        };
        let a = !1;
        if (window.MotionHandoffAnimation) {
            const e = fn(t);
            if (e) {
                const t = window.MotionHandoffAnimation(e, d, N);
                null !== t && (o.startTime = t,
                a = !0)
            }
        }
        pn(t, d),
        e.start(ko(d, e, i, t.shouldReduceMotion && tn.has(d) ? {
            type: !1
        } : o, t, a));
        const h = e.animation;
        h && u.push(h)
    }
    return a && Promise.all(u).then(()=>{
        N.update(()=>{
            a && function(t, e) {
                const n = Pe(t, e);
                let {transitionEnd: i={}, transition: o={}, ...r} = n || {};
                r = {
                    ...r,
                    ...i
                };
                for (const s in r)
                    hn(t, s, Et(r[s]))
            }(t, a)
        }
        )
    }
    ),
    u
}
function jo(t, e, n={}) {
    var i;
    const o = Pe(t, e, "exit" === n.type ? null === (i = t.presenceContext) || void 0 === i ? void 0 : i.custom : void 0);
    let {transition: r=t.getDefaultTransition() || {}} = o || {};
    n.transitionOverride && (r = n.transitionOverride);
    const s = o ? ()=>Promise.all(Vo(t, o, n)) : ()=>Promise.resolve()
      , a = t.variantChildren && t.variantChildren.size ? (i=0)=>{
        const {delayChildren: o=0, staggerChildren: s, staggerDirection: a} = r;
        return function(t, e, n=0, i=0, o=1, r) {
            const s = []
              , a = (t.variantChildren.size - 1) * i
              , l = 1 === o ? (t=0)=>t * i : (t=0)=>a - t * i;
            return Array.from(t.variantChildren).sort(Fo).forEach((t,i)=>{
                t.notify("AnimationStart", e),
                s.push(jo(t, e, {
                    ...r,
                    delay: n + l(i)
                }).then(()=>t.notify("AnimationComplete", e)))
            }
            ),
            Promise.all(s)
        }(t, e, o + i, s, a, n)
    }
    : ()=>Promise.resolve()
      , {when: l} = r;
    if (l) {
        const [t,e] = "beforeChildren" === l ? [s, a] : [a, s];
        return t().then(()=>e())
    }
    return Promise.all([s(), a(n.delay)])
}
function Fo(t, e) {
    return t.sortNodePosition(e)
}
const Oo = et.length;
function Io(t) {
    if (!t)
        return;
    if (!t.isControllingVariants) {
        const e = t.parent && Io(t.parent) || {};
        return void 0 !== t.props.initial && (e.initial = t.props.initial),
        e
    }
    const e = {};
    for (let n = 0; n < Oo; n++) {
        const i = et[n]
          , o = t.props[i];
        (J(o) || !1 === o) && (e[i] = o)
    }
    return e
}
const Bo = [...tt].reverse()
  , No = tt.length;
function Uo(t) {
    return e=>Promise.all(e.map(({animation: e, options: n})=>function(t, e, n={}) {
        let i;
        if (t.notify("AnimationStart", e),
        Array.isArray(e)) {
            const o = e.map(e=>jo(t, e, n));
            i = Promise.all(o)
        } else if ("string" == typeof e)
            i = jo(t, e, n);
        else {
            const o = "function" == typeof e ? Pe(t, e, n.custom) : e;
            i = Promise.all(Vo(t, o, n))
        }
        return i.then(()=>{
            t.notify("AnimationComplete", e)
        }
        )
    }(t, e, n)))
}
function Wo(t) {
    let e = Uo(t)
      , n = zo()
      , i = !0;
    const o = e=>(n,i)=>{
        var o;
        const r = Pe(t, i, "exit" === e ? null === (o = t.presenceContext) || void 0 === o ? void 0 : o.custom : void 0);
        if (r) {
            const {transition: t, transitionEnd: e, ...i} = r;
            n = {
                ...n,
                ...i,
                ...e
            }
        }
        return n
    }
    ;
    function r(r) {
        const {props: s} = t
          , a = Io(t.parent) || {}
          , l = []
          , u = new Set;
        let c = {}
          , d = 1 / 0;
        for (let e = 0; e < No; e++) {
            const h = Bo[e]
              , p = n[h]
              , f = void 0 !== s[h] ? s[h] : a[h]
              , m = J(f)
              , v = h === r ? p.isActive : null;
            !1 === v && (d = e);
            let g = f === a[h] && f !== s[h] && m;
            if (g && i && t.manuallyAnimateOnMount && (g = !1),
            p.protectedKeys = {
                ...c
            },
            !p.isActive && null === v || !f && !p.prevProp || Q(f) || "boolean" == typeof f)
                continue;
            const y = _o(p.prevProp, f);
            let x = y || h === r && p.isActive && !g && m || e > d && m
              , w = !1;
            const b = Array.isArray(f) ? f : [f];
            let E = b.reduce(o(h), {});
            !1 === v && (E = {});
            const {prevResolvedValues: P={}} = p
              , T = {
                ...P,
                ...E
            }
              , S = e=>{
                x = !0,
                u.has(e) && (w = !0,
                u.delete(e)),
                p.needsAnimating[e] = !0;
                const n = t.getValue(e);
                n && (n.liveStyle = !1)
            }
            ;
            for (const t in T) {
                const e = E[t]
                  , n = P[t];
                if (c.hasOwnProperty(t))
                    continue;
                let i = !1;
                i = bt(e) && bt(n) ? !Ee(e, n) : e !== n,
                i ? null != e ? S(t) : u.add(t) : void 0 !== e && u.has(t) ? S(t) : p.protectedKeys[t] = !0
            }
            p.prevProp = f,
            p.prevResolvedValues = E,
            p.isActive && (c = {
                ...c,
                ...E
            }),
            i && t.blockInitialAnimation && (x = !1);
            x && (!(g && y) || w) && l.push(...b.map(t=>({
                animation: t,
                options: {
                    type: h
                }
            })))
        }
        if (u.size) {
            const e = {};
            u.forEach(n=>{
                const i = t.getBaseTarget(n)
                  , o = t.getValue(n);
                o && (o.liveStyle = !0),
                e[n] = null != i ? i : null
            }
            ),
            l.push({
                animation: e
            })
        }
        let h = Boolean(l.length);
        return !i || !1 !== s.initial && s.initial !== s.animate || t.manuallyAnimateOnMount || (h = !1),
        i = !1,
        h ? e(l) : Promise.resolve()
    }
    return {
        animateChanges: r,
        setActive: function(e, i) {
            var o;
            if (n[e].isActive === i)
                return Promise.resolve();
            null === (o = t.variantChildren) || void 0 === o || o.forEach(t=>{
                var n;
                return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, i)
            }
            ),
            n[e].isActive = i;
            const s = r(e);
            for (const t in n)
                n[t].protectedKeys = {};
            return s
        },
        setAnimateFunction: function(n) {
            e = n(t)
        },
        getState: ()=>n,
        reset: ()=>{
            n = zo(),
            i = !0
        }
    }
}
function _o(t, e) {
    return "string" == typeof e ? e !== t : !!Array.isArray(e) && !Ee(e, t)
}
function $o(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function zo() {
    return {
        animate: $o(!0),
        whileInView: $o(),
        whileHover: $o(),
        whileTap: $o(),
        whileDrag: $o(),
        whileFocus: $o(),
        exit: $o()
    }
}
class Ko {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
let Ho = 0;
const Yo = {
    animation: {
        Feature: class extends Ko {
            constructor(t) {
                super(t),
                t.animationState || (t.animationState = Wo(t))
            }
            updateAnimationControlsSubscription() {
                const {animate: t} = this.node.getProps();
                Q(t) && (this.unmountControls = t.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                const {animate: t} = this.node.getProps()
                  , {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }
            unmount() {
                var t;
                this.node.animationState.reset(),
                null === (t = this.unmountControls) || void 0 === t || t.call(this)
            }
        }
    },
    exit: {
        Feature: class extends Ko {
            constructor() {
                super(...arguments),
                this.id = Ho++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                const {isPresent: t, onExitComplete: e} = this.node.presenceContext
                  , {isPresent: n} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === n)
                    return;
                const i = this.node.animationState.setActive("exit", !t);
                e && !t && i.then(()=>e(this.id))
            }
            mount() {
                const {register: t} = this.node.presenceContext || {};
                t && (this.unmount = t(this.id))
            }
            unmount() {}
        }
    }
};
function Xo(t, e, n, i={
    passive: !0
}) {
    return t.addEventListener(e, n, i),
    ()=>t.removeEventListener(e, n)
}
function Go(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
function qo(t, e, n, i) {
    return Xo(t, e, (t=>e=>Ye(e) && t(e, Go(e)))(n), i)
}
const Zo = (t,e)=>Math.abs(t - e);
class Jo {
    constructor(t, e, {transformPagePoint: n, contextWindow: i, dragSnapToOrigin: o=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = ()=>{
            if (!this.lastMoveEvent || !this.lastMoveEventInfo)
                return;
            const t = er(this.lastMoveEventInfo, this.history)
              , e = null !== this.startEvent
              , n = function(t, e) {
                const n = Zo(t.x, e.x)
                  , i = Zo(t.y, e.y);
                return Math.sqrt(n ** 2 + i ** 2)
            }(t.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!e && !n)
                return;
            const {point: i} = t
              , {timestamp: o} = W;
            this.history.push({
                ...i,
                timestamp: o
            });
            const {onStart: r, onMove: s} = this.handlers;
            e || (r && r(this.lastMoveEvent, t),
            this.startEvent = this.lastMoveEvent),
            s && s(this.lastMoveEvent, t)
        }
        ,
        this.handlePointerMove = (t,e)=>{
            this.lastMoveEvent = t,
            this.lastMoveEventInfo = Qo(e, this.transformPagePoint),
            N.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (t,e)=>{
            this.end();
            const {onEnd: n, onSessionEnd: i, resumeAnimation: o} = this.handlers;
            if (this.dragSnapToOrigin && o && o(),
            !this.lastMoveEvent || !this.lastMoveEventInfo)
                return;
            const r = er("pointercancel" === t.type ? this.lastMoveEventInfo : Qo(e, this.transformPagePoint), this.history);
            this.startEvent && n && n(t, r),
            i && i(t, r)
        }
        ,
        !Ye(t))
            return;
        this.dragSnapToOrigin = o,
        this.handlers = e,
        this.transformPagePoint = n,
        this.contextWindow = i || window;
        const r = Qo(Go(t), this.transformPagePoint)
          , {point: s} = r
          , {timestamp: a} = W;
        this.history = [{
            ...s,
            timestamp: a
        }];
        const {onSessionStart: l} = e;
        l && l(t, er(r, this.history)),
        this.removeListeners = Li(qo(this.contextWindow, "pointermove", this.handlePointerMove), qo(this.contextWindow, "pointerup", this.handlePointerUp), qo(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        U(this.updatePoint)
    }
}
function Qo(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function tr(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function er({point: t}, e) {
    return {
        point: t,
        delta: tr(t, ir(e)),
        offset: tr(t, nr(e)),
        velocity: or(e, .1)
    }
}
function nr(t) {
    return t[0]
}
function ir(t) {
    return t[t.length - 1]
}
function or(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = t.length - 1
      , i = null;
    const o = ir(t);
    for (; n >= 0 && (i = t[n],
    !(o.timestamp - i.timestamp > j(e))); )
        n--;
    if (!i)
        return {
            x: 0,
            y: 0
        };
    const r = F(o.timestamp - i.timestamp);
    if (0 === r)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (o.x - i.x) / r,
        y: (o.y - i.y) / r
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function rr(t) {
    return t.max - t.min
}
function sr(t, e, n, i=.5) {
    t.origin = i,
    t.originPoint = Ti(e.min, e.max, t.origin),
    t.scale = rr(n) / rr(e),
    t.translate = Ti(n.min, n.max, t.origin) - t.originPoint,
    (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
}
function ar(t, e, n, i) {
    sr(t.x, e.x, n.x, i ? i.originX : void 0),
    sr(t.y, e.y, n.y, i ? i.originY : void 0)
}
function lr(t, e, n) {
    t.min = n.min + e.min,
    t.max = t.min + rr(e)
}
function ur(t, e, n) {
    t.min = e.min - n.min,
    t.max = t.min + rr(e)
}
function cr(t, e, n) {
    ur(t.x, e.x, n.x),
    ur(t.y, e.y, n.y)
}
function dr(t, e, n) {
    return {
        min: void 0 !== e ? t.min + e : void 0,
        max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
    }
}
function hr(t, e) {
    let n = e.min - t.min
      , i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n,i] = [i, n]),
    {
        min: n,
        max: i
    }
}
const pr = .35;
function fr(t, e, n) {
    return {
        min: mr(t, e),
        max: mr(t, n)
    }
}
function mr(t, e) {
    return "number" == typeof t ? t : t[e] || 0
}
const vr = ()=>({
    x: {
        min: 0,
        max: 0
    },
    y: {
        min: 0,
        max: 0
    }
});
function gr(t) {
    return [t("x"), t("y")]
}
function yr({top: t, left: e, right: n, bottom: i}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: i
        }
    }
}
function xr(t) {
    return void 0 === t || 1 === t
}
function wr({scale: t, scaleX: e, scaleY: n}) {
    return !xr(t) || !xr(e) || !xr(n)
}
function br(t) {
    return wr(t) || Er(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function Er(t) {
    return Pr(t.x) || Pr(t.y)
}
function Pr(t) {
    return t && "0%" !== t
}
function Tr(t, e, n) {
    return n + e * (t - n)
}
function Sr(t, e, n, i, o) {
    return void 0 !== o && (t = Tr(t, o, i)),
    Tr(t, n, i) + e
}
function Ar(t, e=0, n=1, i, o) {
    t.min = Sr(t.min, e, n, i, o),
    t.max = Sr(t.max, e, n, i, o)
}
function Cr(t, {x: e, y: n}) {
    Ar(t.x, e.translate, e.scale, e.originPoint),
    Ar(t.y, n.translate, n.scale, n.originPoint)
}
const Rr = .999999999999
  , Dr = 1.0000000000001;
function Mr(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function kr(t, e, n, i, o=.5) {
    Ar(t, e, n, Ti(t.min, t.max, o), i)
}
function Lr(t, e) {
    kr(t.x, e.x, e.scaleX, e.scale, e.originX),
    kr(t.y, e.y, e.scaleY, e.scale, e.originY)
}
function Vr(t, e) {
    return yr(function(t, e) {
        if (!e)
            return t;
        const n = e({
            x: t.left,
            y: t.top
        })
          , i = e({
            x: t.right,
            y: t.bottom
        });
        return {
            top: n.y,
            left: n.x,
            bottom: i.y,
            right: i.x
        }
    }(t.getBoundingClientRect(), e))
}
const jr = ({current: t})=>t ? t.ownerDocument.defaultView : null
  , Fr = new WeakMap;
class Or {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = {
            x: {
                min: 0,
                max: 0
            },
            y: {
                min: 0,
                max: 0
            }
        },
        this.visualElement = t
    }
    start(t, {snapToCursor: e=!1}={}) {
        const {presenceContext: n} = this.visualElement;
        if (n && !1 === n.isPresent)
            return;
        const {dragSnapToOrigin: i} = this.getProps();
        this.panSession = new Jo(t,{
            onSessionStart: t=>{
                const {dragSnapToOrigin: n} = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                e && this.snapToCursor(Go(t).point)
            }
            ,
            onStart: (t,e)=>{
                const {drag: n, dragPropagation: i, onDragStart: o} = this.getProps();
                if (n && !i && (this.openDragLock && this.openDragLock(),
                this.openDragLock = "x" === (r = n) || "y" === r ? We[r] ? null : (We[r] = !0,
                ()=>{
                    We[r] = !1
                }
                ) : We.x || We.y ? null : (We.x = We.y = !0,
                ()=>{
                    We.x = We.y = !1
                }
                ),
                !this.openDragLock))
                    return;
                var r;
                this.isDragging = !0,
                this.currentDirection = null,
                this.resolveConstraints(),
                this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                this.visualElement.projection.target = void 0),
                gr(t=>{
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (Wt.test(e)) {
                        const {projection: n} = this.visualElement;
                        if (n && n.layout) {
                            const i = n.layout.layoutBox[t];
                            if (i) {
                                e = rr(i) * (parseFloat(e) / 100)
                            }
                        }
                    }
                    this.originPoint[t] = e
                }
                ),
                o && N.postRender(()=>o(t, e)),
                pn(this.visualElement, "transform");
                const {animationState: s} = this.visualElement;
                s && s.setActive("whileDrag", !0)
            }
            ,
            onMove: (t,e)=>{
                const {dragPropagation: n, dragDirectionLock: i, onDirectionLock: o, onDrag: r} = this.getProps();
                if (!n && !this.openDragLock)
                    return;
                const {offset: s} = e;
                if (i && null === this.currentDirection)
                    return this.currentDirection = function(t, e=10) {
                        let n = null;
                        Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x");
                        return n
                    }(s),
                    void (null !== this.currentDirection && o && o(this.currentDirection));
                this.updateAxis("x", e.point, s),
                this.updateAxis("y", e.point, s),
                this.visualElement.render(),
                r && r(t, e)
            }
            ,
            onSessionEnd: (t,e)=>this.stop(t, e),
            resumeAnimation: ()=>gr(t=>{
                var e;
                return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
            }
            )
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: i,
            contextWindow: jr(this.visualElement)
        })
    }
    stop(t, e) {
        const n = this.isDragging;
        if (this.cancel(),
        !n)
            return;
        const {velocity: i} = e;
        this.startAnimation(i);
        const {onDragEnd: o} = this.getProps();
        o && N.postRender(()=>o(t, e))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: e} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: n} = this.getProps();
        !n && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        e && e.setActive("whileDrag", !1)
    }
    updateAxis(t, e, n) {
        const {drag: i} = this.getProps();
        if (!n || !Ir(t, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(t);
        let r = this.originPoint[t] + n[t];
        this.constraints && this.constraints[t] && (r = function(t, {min: e, max: n}, i) {
            return void 0 !== e && t < e ? t = i ? Ti(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? Ti(n, t, i.max) : Math.min(t, n)),
            t
        }(r, this.constraints[t], this.elastic[t])),
        o.set(r)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: e, dragElastic: n} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout
          , o = this.constraints;
        e && at(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!e || !i) && function(t, {top: e, left: n, bottom: i, right: o}) {
            return {
                x: dr(t.x, n, o),
                y: dr(t.y, e, i)
            }
        }(i.layoutBox, e),
        this.elastic = function(t=pr) {
            return !1 === t ? t = 0 : !0 === t && (t = pr),
            {
                x: fr(t, "left", "right"),
                y: fr(t, "top", "bottom")
            }
        }(n),
        o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && gr(t=>{
            !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                const n = {};
                return void 0 !== e.min && (n.min = e.min - t.min),
                void 0 !== e.max && (n.max = e.max - t.min),
                n
            }(i.layoutBox[t], this.constraints[t]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: e} = this.getProps();
        if (!t || !at(t))
            return !1;
        const n = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = function(t, e, n) {
            const i = Vr(t, n)
              , {scroll: o} = e;
            return o && (Mr(i.x, o.offset.x),
            Mr(i.y, o.offset.y)),
            i
        }(n, i.root, this.visualElement.getTransformPagePoint());
        let r = function(t, e) {
            return {
                x: hr(t.x, e.x),
                y: hr(t.y, e.y)
            }
        }(i.layout.layoutBox, o);
        if (e) {
            const t = e(function({x: t, y: e}) {
                return {
                    top: e.min,
                    right: t.max,
                    bottom: e.max,
                    left: t.min
                }
            }(r));
            this.hasMutatedConstraints = !!t,
            t && (r = yr(t))
        }
        return r
    }
    startAnimation(t) {
        const {drag: e, dragMomentum: n, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: s} = this.getProps()
          , a = this.constraints || {}
          , l = gr(s=>{
            if (!Ir(s, e, this.currentDirection))
                return;
            let l = a && a[s] || {};
            r && (l = {
                min: 0,
                max: 0
            });
            const u = i ? 200 : 1e6
              , c = i ? 40 : 1e7
              , d = {
                type: "inertia",
                velocity: n ? t[s] : 0,
                bounceStiffness: u,
                bounceDamping: c,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...l
            };
            return this.startAxisValueAnimation(s, d)
        }
        );
        return Promise.all(l).then(s)
    }
    startAxisValueAnimation(t, e) {
        const n = this.getAxisMotionValue(t);
        return pn(this.visualElement, t),
        n.start(ko(t, n, 0, e, this.visualElement, !1))
    }
    stopAnimation() {
        gr(t=>this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        gr(t=>{
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
        }
        )
    }
    getAnimationState(t) {
        var e;
        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
    }
    getAxisMotionValue(t) {
        const e = `_drag ${t.toUpperCase()}`
          , n = this.visualElement.getProps()
          , i = n[e];
        return i || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        gr(e=>{
            const {drag: n} = this.getProps();
            if (!Ir(e, n, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , o = this.getAxisMotionValue(e);
            if (i && i.layout) {
                const {min: n, max: r} = i.layout.layoutBox[e];
                o.set(t[e] - Ti(n, r, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: e} = this.getProps()
          , {projection: n} = this.visualElement;
        if (!at(e) || !n || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        gr(t=>{
            const e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
                const n = e.get();
                i[t] = function(t, e) {
                    let n = .5;
                    const i = rr(t)
                      , o = rr(e);
                    return o > i ? n = V(e.min, e.max - i, t.min) : i > o && (n = V(t.min, t.max - o, e.min)),
                    Ft(0, 1, n)
                }({
                    min: n,
                    max: n
                }, this.constraints[t])
            }
        }
        );
        const {transformTemplate: o} = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        gr(e=>{
            if (!Ir(e, t, null))
                return;
            const n = this.getAxisMotionValue(e)
              , {min: o, max: r} = this.constraints[e];
            n.set(Ti(o, r, i[e]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Fr.set(this.visualElement, this);
        const t = qo(this.visualElement.current, "pointerdown", t=>{
            const {drag: e, dragListener: n=!0} = this.getProps();
            e && n && this.start(t)
        }
        )
          , e = ()=>{
            const {dragConstraints: t} = this.getProps();
            at(t) && t.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: n} = this.visualElement
          , i = n.addEventListener("measure", e);
        n && !n.layout && (n.root && n.root.updateScroll(),
        n.updateLayout()),
        N.read(e);
        const o = Xo(window, "resize", ()=>this.scalePositionWithinConstraints())
          , r = n.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e})=>{
            this.isDragging && e && (gr(e=>{
                const n = this.getAxisMotionValue(e);
                n && (this.originPoint[e] += t[e].translate,
                n.set(n.get() + t[e].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return ()=>{
            o(),
            t(),
            i(),
            r && r()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: e=!1, dragDirectionLock: n=!1, dragPropagation: i=!1, dragConstraints: o=!1, dragElastic: r=pr, dragMomentum: s=!0} = t;
        return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: r,
            dragMomentum: s
        }
    }
}
function Ir(t, e, n) {
    return !(!0 !== e && e !== t || null !== n && n !== t)
}
const Br = t=>(e,n)=>{
    t && N.postRender(()=>t(e, n))
}
;
const Nr = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Ur(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Wr = {
    correct: (t,e)=>{
        if (!e.target)
            return t;
        if ("string" == typeof t) {
            if (!_t.test(t))
                return t;
            t = parseFloat(t)
        }
        return `${Ur(t, e.target.x)}% ${Ur(t, e.target.y)}%`
    }
}
  , _r = {
    correct: (t,{treeScale: e, projectionDelta: n})=>{
        const i = t
          , o = Hn.parse(t);
        if (o.length > 5)
            return i;
        const r = Hn.createTransformer(t)
          , s = "number" != typeof o[0] ? 1 : 0
          , a = n.x.scale * e.x
          , l = n.y.scale * e.y;
        o[0 + s] /= a,
        o[1 + s] /= l;
        const u = Ti(a, l, .5);
        return "number" == typeof o[2 + s] && (o[2 + s] /= u),
        "number" == typeof o[3 + s] && (o[3 + s] /= u),
        r(o)
    }
};
class $r extends t.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: e, switchLayoutGroup: n, layoutId: i} = this.props
          , {projection: o} = t;
        var r;
        r = Kr,
        Object.assign(ue, r),
        o && (e.group && e.group.add(o),
        n && n.register && i && n.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", ()=>{
            this.safeToRemove()
        }
        ),
        o.setOptions({
            ...o.options,
            onExitComplete: ()=>this.safeToRemove()
        })),
        Nr.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: e, visualElement: n, drag: i, isPresent: o} = this.props
          , r = n.projection;
        return r ? (r.isPresent = o,
        i || t.layoutDependency !== e || void 0 === e ? r.willUpdate() : this.safeToRemove(),
        t.isPresent !== o && (o ? r.promote() : r.relegate() || N.postRender(()=>{
            const t = r.getStack();
            t && t.members.length || this.safeToRemove()
        }
        )),
        null) : null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        dt.postRender(()=>{
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: e, switchLayoutGroup: n} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        e && e.group && e.group.remove(i),
        n && n.deregister && n.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function zr(e) {
    const [n,i] = P()
      , o = t.useContext(m);
    return f.jsx($r, {
        ...e,
        layoutGroup: o,
        switchLayoutGroup: t.useContext(ht),
        isPresent: n,
        safeToRemove: i
    })
}
const Kr = {
    borderRadius: {
        ...Wr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Wr,
    borderTopRightRadius: Wr,
    borderBottomLeftRadius: Wr,
    borderBottomRightRadius: Wr,
    boxShadow: _r
};
const Hr = (t,e)=>t.depth - e.depth;
class Yr {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        rn(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        sn(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(Hr),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
const Xr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , Gr = Xr.length
  , qr = t=>"string" == typeof t ? parseFloat(t) : t
  , Zr = t=>"number" == typeof t || _t.test(t);
function Jr(t, e) {
    return void 0 !== t[e] ? t[e] : t.borderRadius
}
const Qr = es(0, .5, Tn)
  , ts = es(.5, .95, D);
function es(t, e, n) {
    return i=>i < t ? 0 : i > e ? 1 : n(V(t, e, i))
}
function ns(t, e) {
    t.min = e.min,
    t.max = e.max
}
function is(t, e) {
    ns(t.x, e.x),
    ns(t.y, e.y)
}
function os(t, e) {
    t.translate = e.translate,
    t.scale = e.scale,
    t.originPoint = e.originPoint,
    t.origin = e.origin
}
function rs(t, e, n, i, o) {
    return t = Tr(t -= e, 1 / n, i),
    void 0 !== o && (t = Tr(t, 1 / o, i)),
    t
}
function ss(t, e, [n,i,o], r, s) {
    !function(t, e=0, n=1, i=.5, o, r=t, s=t) {
        Wt.test(e) && (e = parseFloat(e),
        e = Ti(s.min, s.max, e / 100) - s.min);
        if ("number" != typeof e)
            return;
        let a = Ti(r.min, r.max, i);
        t === r && (a -= e),
        t.min = rs(t.min, e, n, a, o),
        t.max = rs(t.max, e, n, a, o)
    }(t, e[n], e[i], e[o], e.scale, r, s)
}
const as = ["x", "scaleX", "originX"]
  , ls = ["y", "scaleY", "originY"];
function us(t, e, n, i) {
    ss(t.x, e, as, n ? n.x : void 0, i ? i.x : void 0),
    ss(t.y, e, ls, n ? n.y : void 0, i ? i.y : void 0)
}
function cs(t) {
    return 0 === t.translate && 1 === t.scale
}
function ds(t) {
    return cs(t.x) && cs(t.y)
}
function hs(t, e) {
    return t.min === e.min && t.max === e.max
}
function ps(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}
function fs(t, e) {
    return ps(t.x, e.x) && ps(t.y, e.y)
}
function ms(t) {
    return rr(t.x) / rr(t.y)
}
function vs(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class gs {
    constructor() {
        this.members = []
    }
    add(t) {
        rn(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (sn(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const t = this.members[this.members.length - 1];
            t && this.promote(t)
        }
    }
    relegate(t) {
        const e = this.members.findIndex(e=>t === e);
        if (0 === e)
            return !1;
        let n;
        for (let i = e; i >= 0; i--) {
            const t = this.members[i];
            if (!1 !== t.isPresent) {
                n = t;
                break
            }
        }
        return !!n && (this.promote(n),
        !0)
    }
    promote(t, e) {
        const n = this.lead;
        if (t !== n && (this.prevLead = n,
        this.lead = t,
        t.show(),
        n)) {
            n.instance && n.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = n,
            e && (t.resumeFrom.preserveOpacity = !0),
            n.snapshot && (t.snapshot = n.snapshot,
            t.snapshot.latestValues = n.animationValues || n.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            !1 === i && n.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t=>{
            const {options: e, resumingFrom: n} = t;
            e.onExitComplete && e.onExitComplete(),
            n && n.options.onExitComplete && n.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t=>{
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const ys = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , xs = "undefined" != typeof window && void 0 !== window.MotionDebug
  , ws = ["", "X", "Y", "Z"]
  , bs = {
    visibility: "hidden"
};
let Es = 0;
function Ps(t, e, n, i) {
    const {latestValues: o} = e;
    o[t] && (n[t] = o[t],
    e.setStaticValue(t, 0),
    i && (i[t] = 0))
}
function Ts(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: e} = t.options;
    if (!e)
        return;
    const n = fn(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: e, layoutId: i} = t.options;
        window.MotionCancelOptimisedAnimation(n, "transform", N, !(e || i))
    }
    const {parent: i} = t;
    i && !i.hasCheckedOptimisedAppear && Ts(i)
}
function Ss({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: o}) {
    return class {
        constructor(t={}, n=(null == e ? void 0 : e())) {
            this.id = Es++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = ()=>this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = ()=>{
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = ()=>{
                this.projectionUpdateScheduled = !1,
                xs && (ys.totalNodes = ys.resolvedTargetDeltas = ys.recalculatedProjection = 0),
                this.nodes.forEach(Rs),
                this.nodes.forEach(Fs),
                this.nodes.forEach(Os),
                this.nodes.forEach(Ds),
                xs && window.MotionDebug.record(ys)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = t,
            this.root = n ? n.root || n : this,
            this.path = n ? [...n.path, n] : [],
            this.parent = n,
            this.depth = n ? n.depth + 1 : 0;
            for (let e = 0; e < this.path.length; e++)
                this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Yr)
        }
        addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new an),
            this.eventHandlers.get(t).add(e)
        }
        notifyListeners(t, ...e) {
            const n = this.eventHandlers.get(t);
            n && n.notify(...e)
        }
        hasListeners(t) {
            return this.eventHandlers.has(t)
        }
        mount(e, n=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            var i;
            this.isSVG = (i = e)instanceof SVGElement && "svg" !== i.tagName,
            this.instance = e;
            const {layoutId: o, layout: r, visualElement: s} = this.options;
            if (s && !s.current && s.mount(e),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            n && (r || o) && (this.isLayoutDirty = !0),
            t) {
                let n;
                const i = ()=>this.root.updateBlockedByResize = !1;
                t(e, ()=>{
                    this.root.updateBlockedByResize = !0,
                    n && n(),
                    n = function(t, e) {
                        const n = on.now()
                          , i = ({timestamp: o})=>{
                            const r = o - n;
                            r >= e && (U(i),
                            t(r - e))
                        }
                        ;
                        return N.read(i, !0),
                        ()=>U(i)
                    }(i, 250),
                    Nr.hasAnimatedSinceResize && (Nr.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(js))
                }
                )
            }
            o && this.root.registerSharedNode(o, this),
            !1 !== this.options.animate && s && (o || r) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: n, layout: i})=>{
                if (this.isTreeAnimationBlocked())
                    return this.target = void 0,
                    void (this.relativeTarget = void 0);
                const o = this.options.transition || s.getDefaultTransition() || _s
                  , {onLayoutAnimationStart: r, onLayoutAnimationComplete: a} = s.getProps()
                  , l = !this.targetLayout || !fs(this.targetLayout, i) || n
                  , u = !e && n;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(t, u);
                    const e = {
                        ...Ce(o, "layout"),
                        onPlay: r,
                        onComplete: a
                    };
                    (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                    e.type = !1),
                    this.startAnimation(e)
                } else
                    e || js(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = i
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const t = this.getStack();
            t && t.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            U(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(Is),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: t} = this.options;
            return t && t.getProps().transformTemplate
        }
        willUpdate(t=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked())
                return void (this.options.onExitComplete && this.options.onExitComplete());
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ts(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let o = 0; o < this.path.length; o++) {
                const t = this.path[o];
                t.shouldResetTransform = !0,
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1)
            }
            const {layoutId: e, layout: n} = this.options;
            if (void 0 === e && !n)
                return;
            const i = this.getTransformTemplate();
            this.prevTransformTemplateValue = i ? i(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            t && this.notifyListeners("willUpdate")
        }
        update() {
            this.updateScheduled = !1;
            if (this.isUpdateBlocked())
                return this.unblockUpdate(),
                this.clearAllSnapshots(),
                void this.nodes.forEach(ks);
            this.isUpdating || this.nodes.forEach(Ls),
            this.isUpdating = !1,
            this.nodes.forEach(Vs),
            this.nodes.forEach(As),
            this.nodes.forEach(Cs),
            this.clearAllSnapshots();
            const t = on.now();
            W.delta = Ft(0, 1e3 / 60, t - W.timestamp),
            W.timestamp = t,
            W.isProcessing = !0,
            _.update.process(W),
            _.preRender.process(W),
            _.render.process(W),
            W.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            dt.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Ms),
            this.sharedNodes.forEach(Bs)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            N.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            N.postRender(()=>{
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance)
                return;
            if (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let n = 0; n < this.path.length; n++) {
                    this.path[n].updateScroll()
                }
            const t = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            },
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: e} = this.options;
            e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
        }
        updateScroll(t="measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
            e) {
                const e = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: t,
                    isRoot: e,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : e
                }
            }
        }
        resetTransform() {
            if (!o)
                return;
            const t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , e = this.projectionDelta && !ds(this.projectionDelta)
              , n = this.getTransformTemplate()
              , i = n ? n(this.latestValues, "") : void 0
              , r = i !== this.prevTransformTemplateValue;
            t && (e || br(this.latestValues) || r) && (o(this.instance, i),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(t=!0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var i;
            return t && (n = this.removeTransform(n)),
            Ks((i = n).x),
            Ks(i.y),
            {
                animationId: this.root.animationId,
                measuredBox: e,
                layoutBox: n,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var t;
            const {visualElement: e} = this.options;
            if (!e)
                return {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                };
            const n = e.measureViewportBox();
            if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(Ys))) {
                const {scroll: t} = this.root;
                t && (Mr(n.x, t.offset.x),
                Mr(n.y, t.offset.y))
            }
            return n
        }
        removeElementScroll(t) {
            var e;
            const n = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            };
            if (is(n, t),
            null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
                return n;
            for (let i = 0; i < this.path.length; i++) {
                const e = this.path[i]
                  , {scroll: o, options: r} = e;
                e !== this.root && o && r.layoutScroll && (o.wasRoot && is(n, t),
                Mr(n.x, o.offset.x),
                Mr(n.y, o.offset.y))
            }
            return n
        }
        applyTransform(t, e=!1) {
            const n = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            };
            is(n, t);
            for (let i = 0; i < this.path.length; i++) {
                const t = this.path[i];
                !e && t.options.layoutScroll && t.scroll && t !== t.root && Lr(n, {
                    x: -t.scroll.offset.x,
                    y: -t.scroll.offset.y
                }),
                br(t.latestValues) && Lr(n, t.latestValues)
            }
            return br(this.latestValues) && Lr(n, this.latestValues),
            n
        }
        removeTransform(t) {
            const e = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            };
            is(e, t);
            for (let n = 0; n < this.path.length; n++) {
                const t = this.path[n];
                if (!t.instance)
                    continue;
                if (!br(t.latestValues))
                    continue;
                wr(t.latestValues) && t.updateSnapshot();
                const i = vr();
                is(i, t.measurePageBox()),
                us(e, t.latestValues, t.snapshot ? t.snapshot.layoutBox : void 0, i)
            }
            return br(this.latestValues) && us(e, this.latestValues),
            e
        }
        setTargetDelta(t) {
            this.targetDelta = t,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(t) {
            this.options = {
                ...this.options,
                ...t,
                crossfade: void 0 === t.crossfade || t.crossfade
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== W.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(t=!1) {
            var e;
            const n = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
            const i = Boolean(this.resumingFrom) || this !== n;
            if (!(t || i && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: o, layoutId: r} = this.options;
            if (this.layout && (o || r)) {
                if (this.resolvedRelativeTargetAt = W.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const t = this.getClosestProjectingParent();
                    t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.relativeTargetOrigin = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    cr(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                    is(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (this.relativeTarget || this.targetDelta) {
                    var s, a, l;
                    if (this.target || (this.target = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.targetWithTransforms = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    s = this.target,
                    a = this.relativeTarget,
                    l = this.relativeParent.target,
                    lr(s.x, a.x, l.x),
                    lr(s.y, a.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : is(this.target, this.layout.layoutBox),
                    Cr(this.target, this.targetDelta)) : is(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const t = this.getClosestProjectingParent();
                        t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        },
                        this.relativeTargetOrigin = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        },
                        cr(this.relativeTargetOrigin, this.target, t.target),
                        is(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    xs && ys.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (this.parent && !wr(this.parent.latestValues) && !Er(this.parent.latestValues))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var t;
            const e = this.getLead()
              , n = Boolean(this.resumingFrom) || this !== e;
            let i = !0;
            if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (i = !1),
            n && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1),
            this.resolvedRelativeTargetAt === W.timestamp && (i = !1),
            i)
                return;
            const {layout: o, layoutId: r} = this.options;
            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !o && !r)
                return;
            is(this.layoutCorrected, this.layout.layoutBox);
            const s = this.treeScale.x
              , a = this.treeScale.y;
            !function(t, e, n, i=!1) {
                const o = n.length;
                if (!o)
                    return;
                let r, s;
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                    r = n[a],
                    s = r.projectionDelta;
                    const {visualElement: o} = r.options;
                    o && o.props.style && "contents" === o.props.style.display || (i && r.options.layoutScroll && r.scroll && r !== r.root && Lr(t, {
                        x: -r.scroll.offset.x,
                        y: -r.scroll.offset.y
                    }),
                    s && (e.x *= s.x.scale,
                    e.y *= s.y.scale,
                    Cr(t, s)),
                    i && br(r.latestValues) && Lr(t, r.latestValues))
                }
                e.x < Dr && e.x > Rr && (e.x = 1),
                e.y < Dr && e.y > Rr && (e.y = 1)
            }(this.layoutCorrected, this.treeScale, this.path, n),
            !e.layout || e.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (e.target = e.layout.layoutBox,
            e.targetWithTransforms = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            });
            const {target: l} = e;
            l ? (this.projectionDelta && this.prevProjectionDelta ? (os(this.prevProjectionDelta.x, this.projectionDelta.x),
            os(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
            ar(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
            this.treeScale.x === s && this.treeScale.y === a && vs(this.projectionDelta.x, this.prevProjectionDelta.x) && vs(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", l)),
            xs && ys.recalculatedProjection++) : this.prevProjectionDelta && (this.createProjectionDeltas(),
            this.scheduleRender())
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(t=!0) {
            var e;
            if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(),
            t) {
                const t = this.getStack();
                t && t.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            },
            this.projectionDelta = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            },
            this.projectionDeltaWithTransform = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            }
        }
        setAnimationOrigin(t, e=!1) {
            const n = this.snapshot
              , i = n ? n.latestValues : {}
              , o = {
                ...this.latestValues
            }
              , r = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            };
            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !e;
            const s = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            }
              , a = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0)
              , l = this.getStack()
              , u = !l || l.members.length <= 1
              , c = Boolean(a && !u && !0 === this.options.crossfade && !this.path.some(Ws));
            let d;
            this.animationProgress = 0,
            this.mixTargetDelta = e=>{
                const n = e / 1e3;
                var l, h, p, f, m, v;
                Ns(r.x, t.x, n),
                Ns(r.y, t.y, n),
                this.setTargetDelta(r),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (cr(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                p = this.relativeTarget,
                f = this.relativeTargetOrigin,
                m = s,
                v = n,
                Us(p.x, f.x, m.x, v),
                Us(p.y, f.y, m.y, v),
                d && (l = this.relativeTarget,
                h = d,
                hs(l.x, h.x) && hs(l.y, h.y)) && (this.isProjectionDirty = !1),
                d || (d = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                }),
                is(d, this.relativeTarget)),
                a && (this.animationValues = o,
                function(t, e, n, i, o, r) {
                    o ? (t.opacity = Ti(0, void 0 !== n.opacity ? n.opacity : 1, Qr(i)),
                    t.opacityExit = Ti(void 0 !== e.opacity ? e.opacity : 1, 0, ts(i))) : r && (t.opacity = Ti(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, i));
                    for (let s = 0; s < Gr; s++) {
                        const o = `border ${Xr[s]}Radius`;
                        let r = Jr(e, o)
                          , a = Jr(n, o);
                        void 0 === r && void 0 === a || (r || (r = 0),
                        a || (a = 0),
                        0 === r || 0 === a || Zr(r) === Zr(a) ? (t[o] = Math.max(Ti(qr(r), qr(a), i), 0),
                        (Wt.test(a) || Wt.test(r)) && (t[o] += "%")) : t[o] = a)
                    }
                    (e.rotate || n.rotate) && (t.rotate = Ti(e.rotate || 0, n.rotate || 0, i))
                }(o, i, this.latestValues, n, c, u)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = n
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(t) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (U(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = N.update(()=>{
                Nr.hasAnimatedSinceResize = !0,
                this.currentAnimation = function(t, e, n) {
                    const i = Pt(t) ? t : dn(t);
                    return i.start(ko("", i, e, n)),
                    i.animation
                }(0, 1e3, {
                    ...t,
                    onUpdate: e=>{
                        this.mixTargetDelta(e),
                        t.onUpdate && t.onUpdate(e)
                    }
                    ,
                    onComplete: ()=>{
                        t.onComplete && t.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const t = this.getStack();
            t && t.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const t = this.getLead();
            let {targetWithTransforms: e, target: n, layout: i, latestValues: o} = t;
            if (e && n && i) {
                if (this !== t && this.layout && i && Hs(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                    n = this.target || {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    const e = rr(this.layout.layoutBox.x);
                    n.x.min = t.target.x.min,
                    n.x.max = n.x.min + e;
                    const i = rr(this.layout.layoutBox.y);
                    n.y.min = t.target.y.min,
                    n.y.max = n.y.min + i
                }
                is(e, n),
                Lr(e, o),
                ar(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
            }
        }
        registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new gs);
            this.sharedNodes.get(t).add(e);
            const n = e.options.initialPromotionConfig;
            e.promote({
                transition: n ? n.transition : void 0,
                preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
            })
        }
        isLead() {
            const t = this.getStack();
            return !t || t.lead === this
        }
        getLead() {
            var t;
            const {layoutId: e} = this.options;
            return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
        }
        getPrevLead() {
            var t;
            const {layoutId: e} = this.options;
            return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
        }
        getStack() {
            const {layoutId: t} = this.options;
            if (t)
                return this.root.sharedNodes.get(t)
        }
        promote({needsReset: t, transition: e, preserveFollowOpacity: n}={}) {
            const i = this.getStack();
            i && i.promote(this, n),
            t && (this.projectionDelta = void 0,
            this.needsReset = !0),
            e && this.setOptions({
                transition: e
            })
        }
        relegate() {
            const t = this.getStack();
            return !!t && t.relegate(this)
        }
        resetSkewAndRotation() {
            const {visualElement: t} = this.options;
            if (!t)
                return;
            let e = !1;
            const {latestValues: n} = t;
            if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (e = !0),
            !e)
                return;
            const i = {};
            n.z && Ps("z", t, i, this.animationValues);
            for (let o = 0; o < ws.length; o++)
                Ps(`rotate ${ws[o]}`, t, i, this.animationValues),
                Ps(`skew ${ws[o]}`, t, i, this.animationValues);
            t.render();
            for (const o in i)
                t.setStaticValue(o, i[o]),
                this.animationValues && (this.animationValues[o] = i[o]);
            t.scheduleRender()
        }
        getProjectionStyles(t) {
            var e, n;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return bs;
            const i = {
                visibility: ""
            }
              , o = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                i.opacity = "",
                i.pointerEvents = Tt(null == t ? void 0 : t.pointerEvents) || "",
                i.transform = o ? o(this.latestValues, "") : "none",
                i;
            const r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
                const e = {};
                return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                e.pointerEvents = Tt(null == t ? void 0 : t.pointerEvents) || ""),
                this.hasProjected && !br(this.latestValues) && (e.transform = o ? o({}, "") : "none",
                this.hasProjected = !1),
                e
            }
            const s = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
            i.transform = function(t, e, n) {
                let i = "";
                const o = t.x.translate / e.x
                  , r = t.y.translate / e.y
                  , s = (null == n ? void 0 : n.z) || 0;
                if ((o || r || s) && (i = `translate3d(${o}px, ${r}px, ${s}px) `),
                1 === e.x && 1 === e.y || (i += `scale(${1 / e.x}, ${1 / e.y}) `),
                n) {
                    const {transformPerspective: t, rotate: e, rotateX: o, rotateY: r, skewX: s, skewY: a} = n;
                    t && (i = `perspective(${t}px) ${i}`),
                    e && (i += `rotate(${e}deg) `),
                    o && (i += `rotateX(${o}deg) `),
                    r && (i += `rotateY(${r}deg) `),
                    s && (i += `skewX(${s}deg) `),
                    a && (i += `skewY(${a}deg) `)
                }
                const a = t.x.scale * e.x
                  , l = t.y.scale * e.y;
                return 1 === a && 1 === l || (i += `scale(${a}, ${l})`),
                i || "none"
            }(this.projectionDeltaWithTransform, this.treeScale, s),
            o && (i.transform = o(s, i.transform));
            const {x: a, y: l} = this.projectionDelta;
            i.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
            r.animationValues ? i.opacity = r === this ? null !== (n = null !== (e = s.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : i.opacity = r === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0;
            for (const u in ue) {
                if (void 0 === s[u])
                    continue;
                const {correct: t, applyTo: e} = ue[u]
                  , n = "none" === i.transform ? s[u] : t(s[u], r);
                if (e) {
                    const t = e.length;
                    for (let o = 0; o < t; o++)
                        i[e[o]] = n
                } else
                    i[u] = n
            }
            return this.options.layoutId && (i.pointerEvents = r === this ? Tt(null == t ? void 0 : t.pointerEvents) || "" : "none"),
            i
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(t=>{
                var e;
                return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            }
            ),
            this.root.nodes.forEach(ks),
            this.root.sharedNodes.clear()
        }
    }
}
function As(t) {
    t.updateLayout()
}
function Cs(t) {
    var e;
    const n = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {layoutBox: e, measuredBox: i} = t.layout
          , {animationType: o} = t.options
          , r = n.source !== t.layout.source;
        "size" === o ? gr(t=>{
            const i = r ? n.measuredBox[t] : n.layoutBox[t]
              , o = rr(i);
            i.min = e[t].min,
            i.max = i.min + o
        }
        ) : Hs(o, n.layoutBox, e) && gr(i=>{
            const o = r ? n.measuredBox[i] : n.layoutBox[i]
              , s = rr(e[i]);
            o.max = o.min + s,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[i].max = t.relativeTarget[i].min + s)
        }
        );
        const s = {
            x: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            },
            y: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            }
        };
        ar(s, e, n.layoutBox);
        const a = {
            x: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            },
            y: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            }
        };
        r ? ar(a, t.applyTransform(i, !0), n.measuredBox) : ar(a, e, n.layoutBox);
        const l = !ds(s);
        let u = !1;
        if (!t.resumeFrom) {
            const i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
                const {snapshot: o, layout: r} = i;
                if (o && r) {
                    const s = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    cr(s, n.layoutBox, o.layoutBox);
                    const a = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    cr(a, e, r.layoutBox),
                    fs(s, a) || (u = !0),
                    i.options.layoutRoot && (t.relativeTarget = a,
                    t.relativeTargetOrigin = s,
                    t.relativeParent = i)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: n,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
        })
    } else if (t.isLead()) {
        const {onExitComplete: e} = t.options;
        e && e()
    }
    t.options.transition = void 0
}
function Rs(t) {
    xs && ys.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function Ds(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function Ms(t) {
    t.clearSnapshot()
}
function ks(t) {
    t.clearMeasurements()
}
function Ls(t) {
    t.isLayoutDirty = !1
}
function Vs(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function js(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function Fs(t) {
    t.resolveTargetDelta()
}
function Os(t) {
    t.calcProjection()
}
function Is(t) {
    t.resetSkewAndRotation()
}
function Bs(t) {
    t.removeLeadSnapshot()
}
function Ns(t, e, n) {
    t.translate = Ti(e.translate, 0, n),
    t.scale = Ti(e.scale, 1, n),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function Us(t, e, n, i) {
    t.min = Ti(e.min, n.min, i),
    t.max = Ti(e.max, n.max, i)
}
function Ws(t) {
    return t.animationValues && void 0 !== t.animationValues.opacityExit
}
const _s = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , $s = t=>"undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , zs = $s("applewebkit/") && !$s("chrome/") ? Math.round : D;
function Ks(t) {
    t.min = zs(t.min),
    t.max = zs(t.max)
}
function Hs(t, e, n) {
    return "position" === t || "preserve-aspect" === t && (i = ms(e),
    o = ms(n),
    r = .2,
    !(Math.abs(i - o) <= r));
    var i, o, r
}
function Ys(t) {
    var e;
    return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
}
const Xs = Ss({
    attachResizeListener: (t,e)=>Xo(t, "resize", e),
    measureScroll: ()=>({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: ()=>!0
})
  , Gs = {
    current: void 0
}
  , qs = Ss({
    measureScroll: t=>({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: ()=>{
        if (!Gs.current) {
            const t = new Xs({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            Gs.current = t
        }
        return Gs.current
    }
    ,
    resetTransform: (t,e)=>{
        t.style.transform = void 0 !== e ? e : "none"
    }
    ,
    checkIsScrollRoot: t=>Boolean("fixed" === window.getComputedStyle(t).position)
})
  , Zs = {
    pan: {
        Feature: class extends Ko {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = D
            }
            onPointerDown(t) {
                this.session = new Jo(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: jr(this.node)
                })
            }
            createPanHandlers() {
                const {onPanSessionStart: t, onPanStart: e, onPan: n, onPanEnd: i} = this.node.getProps();
                return {
                    onSessionStart: Br(t),
                    onStart: Br(e),
                    onMove: n,
                    onEnd: (t,e)=>{
                        delete this.session,
                        i && N.postRender(()=>i(t, e))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = qo(this.node.current, "pointerdown", t=>this.onPointerDown(t))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
    },
    drag: {
        Feature: class extends Ko {
            constructor(t) {
                super(t),
                this.removeGroupControls = D,
                this.removeListeners = D,
                this.controls = new Or(t)
            }
            mount() {
                const {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || D
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        ,
        ProjectionNode: qs,
        MeasureLayout: zr
    }
};
function Js(t, e, n) {
    const {props: i} = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", "Start" === n);
    const o = i["onHover" + n];
    o && N.postRender(()=>o(e, Go(e)))
}
function Qs(t, e, n) {
    const {props: i} = t;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", "Start" === n);
    const o = i["onTap" + ("End" === n ? "" : n)];
    o && N.postRender(()=>o(e, Go(e)))
}
const ta = new WeakMap
  , ea = new WeakMap
  , na = t=>{
    const e = ta.get(t.target);
    e && e(t)
}
  , ia = t=>{
    t.forEach(na)
}
;
function oa(t, e, n) {
    const i = function({root: t, ...e}) {
        const n = t || document;
        ea.has(n) || ea.set(n, {});
        const i = ea.get(n)
          , o = JSON.stringify(e);
        return i[o] || (i[o] = new IntersectionObserver(ia,{
            root: t,
            ...e
        })),
        i[o]
    }(e);
    return ta.set(t, n),
    i.observe(t),
    ()=>{
        ta.delete(t),
        i.unobserve(t)
    }
}
const ra = {
    some: 0,
    all: 1
};
const sa = {
    inView: {
        Feature: class extends Ko {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                const {viewport: t={}} = this.node.getProps()
                  , {root: e, margin: n, amount: i="some", once: o} = t
                  , r = {
                    root: e ? e.current : void 0,
                    rootMargin: n,
                    threshold: "number" == typeof i ? i : ra[i]
                };
                return oa(this.node.current, r, t=>{
                    const {isIntersecting: e} = t;
                    if (this.isInView === e)
                        return;
                    if (this.isInView = e,
                    o && !e && this.hasEnteredView)
                        return;
                    e && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    const {onViewportEnter: n, onViewportLeave: i} = this.node.getProps()
                      , r = e ? n : i;
                    r && r(t)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                const {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                    return n=>t[n] !== e[n]
                }(t, e)) && this.startObserver()
            }
            unmount() {}
        }
    },
    tap: {
        Feature: class extends Ko {
            mount() {
                const {current: t} = this.node;
                t && (this.unmount = Qe(t, t=>(Qs(this.node, t, "Start"),
                (t,{success: e})=>Qs(this.node, t, e ? "End" : "Cancel")), {
                    useGlobalTarget: this.node.props.globalTapTarget
                }))
            }
            unmount() {}
        }
    },
    focus: {
        Feature: class extends Ko {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = Li(Xo(this.node.current, "focus", ()=>this.onFocus()), Xo(this.node.current, "blur", ()=>this.onBlur()))
            }
            unmount() {}
        }
    },
    hover: {
        Feature: class extends Ko {
            mount() {
                const {current: t} = this.node;
                t && (this.unmount = function(t, e, n={}) {
                    const [i,o,r] = ze(t, n)
                      , s = Ke(t=>{
                        const {target: n} = t
                          , i = e(t);
                        if ("function" != typeof i || !n)
                            return;
                        const r = Ke(t=>{
                            i(t),
                            n.removeEventListener("pointerleave", r)
                        }
                        );
                        n.addEventListener("pointerleave", r, o)
                    }
                    );
                    return i.forEach(t=>{
                        t.addEventListener("pointerenter", s, o)
                    }
                    ),
                    r
                }(t, t=>(Js(this.node, t, "Start"),
                t=>Js(this.node, t, "End"))))
            }
            unmount() {}
        }
    }
}
  , aa = {
    layout: {
        ProjectionNode: qs,
        MeasureLayout: zr
    }
}
  , la = {
    current: null
}
  , ua = {
    current: !1
};
const ca = [...gi, In, Hn]
  , da = new WeakMap;
const ha = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class pa {
    scrapeMotionValuesFromProps(t, e, n) {
        return {}
    }
    constructor({parent: t, props: e, presenceContext: n, reducedMotionConfig: i, blockInitialAnimation: o, visualState: r}, s={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = hi,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
        this.render = ()=>{
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = ()=>{
            const t = on.now();
            this.renderScheduledAt < t && (this.renderScheduledAt = t,
            N.render(this.render, !1, !0))
        }
        ;
        const {latestValues: a, renderState: l, onUpdate: u} = r;
        this.onUpdate = u,
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = e.initial ? {
            ...a
        } : {},
        this.renderState = l,
        this.parent = t,
        this.props = e,
        this.presenceContext = n,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = s,
        this.blockInitialAnimation = Boolean(o),
        this.isControllingVariants = nt(e),
        this.isVariantNode = it(e),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = Boolean(t && t.current);
        const {willChange: c, ...d} = this.scrapeMotionValuesFromProps(e, {}, this);
        for (const h in d) {
            const t = d[h];
            void 0 !== a[h] && Pt(t) && t.set(a[h], !1)
        }
    }
    mount(t) {
        this.current = t,
        da.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((t,e)=>this.bindToMotionValue(e, t)),
        ua.current || function() {
            if (ua.current = !0,
            A)
                if (window.matchMedia) {
                    const t = window.matchMedia("(prefers-reduced-motion)")
                      , e = ()=>la.current = t.matches;
                    t.addListener(e),
                    e()
                } else
                    la.current = !1
        }(),
        this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || la.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        da.delete(this.current),
        this.projection && this.projection.unmount(),
        U(this.notifyUpdate),
        U(this.render),
        this.valueSubscriptions.forEach(t=>t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const e = this.features[t];
            e && (e.unmount(),
            e.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, e) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const n = Rt.has(t)
          , i = e.on("change", e=>{
            this.latestValues[t] = e,
            this.props.onUpdate && N.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , o = e.on("renderRequest", this.scheduleRender);
        let r;
        window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, t, e)),
        this.valueSubscriptions.set(t, ()=>{
            i(),
            o(),
            r && r(),
            e.owner && e.stop()
        }
        )
    }
    sortNodePosition(t) {
        return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
    }
    updateFeatures() {
        let t = "animation";
        for (t in K) {
            const e = K[t];
            if (!e)
                continue;
            const {isEnabled: n, Feature: i} = e;
            if (!this.features[t] && i && n(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const e = this.features[t];
                e.isMounted ? e.update() : (e.mount(),
                e.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : {
            x: {
                min: 0,
                max: 0
            },
            y: {
                min: 0,
                max: 0
            }
        }
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, e) {
        this.latestValues[t] = e
    }
    update(t, e) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = e;
        for (let n = 0; n < ha.length; n++) {
            const e = ha[n];
            this.propEventSubscriptions[e] && (this.propEventSubscriptions[e](),
            delete this.propEventSubscriptions[e]);
            const i = t["on" + e];
            i && (this.propEventSubscriptions[e] = this.on(e, i))
        }
        this.prevMotionValues = function(t, e, n) {
            for (const i in e) {
                const o = e[i]
                  , r = n[i];
                if (Pt(o))
                    t.addValue(i, o);
                else if (Pt(r))
                    t.addValue(i, dn(o, {
                        owner: t
                    }));
                else if (r !== o)
                    if (t.hasValue(i)) {
                        const e = t.getValue(i);
                        !0 === e.liveStyle ? e.jump(o) : e.hasAnimated || e.set(o)
                    } else {
                        const e = t.getStaticValue(i);
                        t.addValue(i, dn(void 0 !== e ? e : o, {
                            owner: t
                        }))
                    }
            }
            for (const i in n)
                void 0 === e[i] && t.removeValue(i);
            return e
        }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const e = this.getClosestVariantNode();
        if (e)
            return e.variantChildren && e.variantChildren.add(t),
            ()=>e.variantChildren.delete(t)
    }
    addValue(t, e) {
        const n = this.values.get(t);
        e !== n && (n && this.removeValue(t),
        this.bindToMotionValue(t, e),
        this.values.set(t, e),
        this.latestValues[t] = e.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const e = this.valueSubscriptions.get(t);
        e && (e(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, e) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let n = this.values.get(t);
        return void 0 === n && void 0 !== e && (n = dn(null === e ? void 0 : e, {
            owner: this
        }),
        this.addValue(t, n)),
        n
    }
    readValue(t, e) {
        var n;
        let i = void 0 === this.latestValues[t] && this.current ? null !== (n = this.getBaseTargetFromProps(this.props, t)) && void 0 !== n ? n : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
        var o;
        return null != i && ("string" == typeof i && (pi(i) || An(i)) ? i = parseFloat(i) : (o = i,
        !ca.find(vi(o)) && Hn.test(e) && (i = Qn(t, e))),
        this.setBaseTarget(t, Pt(i) ? i.get() : i)),
        Pt(i) ? i.get() : i
    }
    setBaseTarget(t, e) {
        this.baseTarget[t] = e
    }
    getBaseTarget(t) {
        var e;
        const {initial: n} = this.props;
        let i;
        if ("string" == typeof n || "object" == typeof n) {
            const o = wt(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
            o && (i = o[t])
        }
        if (n && void 0 !== i)
            return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return void 0 === o || Pt(o) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : o
    }
    on(t, e) {
        return this.events[t] || (this.events[t] = new an),
        this.events[t].add(e)
    }
    notify(t, ...e) {
        this.events[t] && this.events[t].notify(...e)
    }
}
class fa extends pa {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = xi
    }
    sortInstanceNodePosition(t, e) {
        return 2 & t.compareDocumentPosition(e) ? 1 : -1
    }
    getBaseTargetFromProps(t, e) {
        return t.style ? t.style[e] : void 0
    }
    removeValueFromRenderState(t, {vars: e, style: n}) {
        delete e[t],
        delete n[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Pt(t) && (this.childSubscription = t.on("change", t=>{
            this.current && (this.current.textContent = `${t}`)
        }
        ))
    }
}
class ma extends fa {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = se
    }
    readValueFromInstance(t, e) {
        if (Rt.has(e)) {
            const t = Jn(e);
            return t && t.default || 0
        }
        {
            const i = (n = t,
            window.getComputedStyle(n))
              , o = (Mt(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof o ? o.trim() : o
        }
        var n
    }
    measureInstanceViewportBox(t, {transformPagePoint: e}) {
        return Vr(t, e)
    }
    build(t, e, n) {
        Jt(t, e, n.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, e, n) {
        return de(t, e, n)
    }
}
class va extends fa {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = vr
    }
    getBaseTargetFromProps(t, e) {
        return t[e]
    }
    readValueFromInstance(t, e) {
        if (Rt.has(e)) {
            const t = Jn(e);
            return t && t.default || 0
        }
        return e = ae.has(e) ? e : ut(e),
        t.getAttribute(e)
    }
    scrapeMotionValuesFromProps(t, e, n) {
        return he(t, e, n)
    }
    build(t, e, n) {
        ne(t, e, this.isSVGTag, n.transformTemplate)
    }
    renderInstance(t, e, n, i) {
        le(t, e, 0, i)
    }
    mount(t) {
        this.isSVGTag = re(t.tagName),
        super.mount(t)
    }
}
const ga = (e,n)=>yt(e) ? new va(n) : new ma(n,{
    allowProjection: e !== t.Fragment
})
  , ya = q(be({
    ...Yo,
    ...sa,
    ...Zs,
    ...aa
}, ga));
function xa(t, e) {
    let n;
    const i = ()=>{
        const {currentTime: i} = e
          , o = (null === i ? 0 : i.value) / 100;
        n !== o && t(o),
        n = o
    }
    ;
    return N.update(i, !0),
    ()=>U(i)
}
const wa = new WeakMap;
let ba;
function Ea({target: t, contentRect: e, borderBoxSize: n}) {
    var i;
    null === (i = wa.get(t)) || void 0 === i || i.forEach(i=>{
        i({
            target: t,
            contentSize: e,
            get size() {
                return function(t, e) {
                    if (e) {
                        const {inlineSize: t, blockSize: n} = e[0];
                        return {
                            width: t,
                            height: n
                        }
                    }
                    return t instanceof SVGElement && "getBBox"in t ? t.getBBox() : {
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    }
                }(t, n)
            }
        })
    }
    )
}
function Pa(t) {
    t.forEach(Ea)
}
function Ta(t, e) {
    ba || "undefined" != typeof ResizeObserver && (ba = new ResizeObserver(Pa));
    const n = $e(t);
    return n.forEach(t=>{
        let n = wa.get(t);
        n || (n = new Set,
        wa.set(t, n)),
        n.add(e),
        null == ba || ba.observe(t)
    }
    ),
    ()=>{
        n.forEach(t=>{
            const n = wa.get(t);
            null == n || n.delete(e),
            (null == n ? void 0 : n.size) || null == ba || ba.unobserve(t)
        }
        )
    }
}
const Sa = new Set;
let Aa;
function Ca(t) {
    return Sa.add(t),
    Aa || (Aa = ()=>{
        const t = {
            width: window.innerWidth,
            height: window.innerHeight
        }
          , e = {
            target: window,
            size: t,
            contentSize: t
        };
        Sa.forEach(t=>t(e))
    }
    ,
    window.addEventListener("resize", Aa)),
    ()=>{
        Sa.delete(t),
        !Sa.size && Aa && (Aa = void 0)
    }
}
const Ra = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function Da(t, e, n, i) {
    const o = n[e]
      , {length: r, position: s} = Ra[e]
      , a = o.current
      , l = n.time;
    o.current = t[`scroll ${s}`],
    o.scrollLength = t[`scroll ${r}`] - t[`client ${r}`],
    o.offset.length = 0,
    o.offset[0] = 0,
    o.offset[1] = o.scrollLength,
    o.progress = V(0, o.scrollLength, o.current);
    const u = i - l;
    o.velocity = u > 50 ? 0 : ln(o.current - a, u)
}
const Ma = {
    start: 0,
    center: .5,
    end: 1
};
function ka(t, e, n=0) {
    let i = 0;
    if (t in Ma && (t = Ma[t]),
    "string" == typeof t) {
        const e = parseFloat(t);
        t.endsWith("px") ? i = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? i = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? i = e / 100 * document.documentElement.clientHeight : t = e
    }
    return "number" == typeof t && (i = e * t),
    n + i
}
const La = [0, 0];
function Va(t, e, n, i) {
    let o = Array.isArray(t) ? t : La
      , r = 0
      , s = 0;
    return "number" == typeof t ? o = [t, t] : "string" == typeof t && (o = (t = t.trim()).includes(" ") ? t.split(" ") : [t, Ma[t] ? t : "0"]),
    r = ka(o[0], n, i),
    s = ka(o[1], e),
    r - s
}
const ja = {
    All: [[0, 0], [1, 1]]
}
  , Fa = {
    x: 0,
    y: 0
};
function Oa(t, e, n) {
    const {offset: i=ja.All} = n
      , {target: o=t, axis: r="y"} = n
      , s = "y" === r ? "height" : "width"
      , a = o !== t ? function(t, e) {
        const n = {
            x: 0,
            y: 0
        };
        let i = t;
        for (; i && i !== e; )
            if (i instanceof HTMLElement)
                n.x += i.offsetLeft,
                n.y += i.offsetTop,
                i = i.offsetParent;
            else if ("svg" === i.tagName) {
                const t = i.getBoundingClientRect();
                i = i.parentElement;
                const e = i.getBoundingClientRect();
                n.x += t.left - e.left,
                n.y += t.top - e.top
            } else {
                if (!(i instanceof SVGGraphicsElement))
                    break;
                {
                    const {x: t, y: e} = i.getBBox();
                    n.x += t,
                    n.y += e;
                    let o = null
                      , r = i.parentNode;
                    for (; !o; )
                        "svg" === r.tagName && (o = r),
                        r = i.parentNode;
                    i = o
                }
            }
        return n
    }(o, t) : Fa
      , l = o === t ? {
        width: t.scrollWidth,
        height: t.scrollHeight
    } : function(t) {
        return "getBBox"in t && "svg" !== t.tagName ? t.getBBox() : {
            width: t.clientWidth,
            height: t.clientHeight
        }
    }(o)
      , u = {
        width: t.clientWidth,
        height: t.clientHeight
    };
    e[r].offset.length = 0;
    let c = !e[r].interpolate;
    const d = i.length;
    for (let h = 0; h < d; h++) {
        const t = Va(i[h], u[s], l[s], a[r]);
        c || t === e[r].interpolatorOffsets[h] || (c = !0),
        e[r].offset[h] = t
    }
    c && (e[r].interpolate = mo(e[r].offset, vo(i), {
        clamp: !1
    }),
    e[r].interpolatorOffsets = [...e[r].offset]),
    e[r].progress = Ft(0, 1, e[r].interpolate(e[r].current))
}
function Ia(t, e, n, i={}) {
    return {
        measure: ()=>function(t, e=t, n) {
            if (n.x.targetOffset = 0,
            n.y.targetOffset = 0,
            e !== t) {
                let i = e;
                for (; i && i !== t; )
                    n.x.targetOffset += i.offsetLeft,
                    n.y.targetOffset += i.offsetTop,
                    i = i.offsetParent
            }
            n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth,
            n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight,
            n.x.containerLength = t.clientWidth,
            n.y.containerLength = t.clientHeight
        }(t, i.target, n),
        update: e=>{
            !function(t, e, n) {
                Da(t, "x", e, n),
                Da(t, "y", e, n),
                e.time = n
            }(t, n, e),
            (i.offset || i.target) && Oa(t, n, i)
        }
        ,
        notify: ()=>e(n)
    }
}
const Ba = new WeakMap
  , Na = new WeakMap
  , Ua = new WeakMap
  , Wa = t=>t === document.documentElement ? window : t;
function _a(t, {container: e=document.documentElement, ...n}={}) {
    let i = Ua.get(e);
    i || (i = new Set,
    Ua.set(e, i));
    const o = Ia(e, t, {
        time: 0,
        x: {
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        },
        y: {
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }
    }, n);
    if (i.add(o),
    !Ba.has(e)) {
        const t = ()=>{
            for (const t of i)
                t.measure()
        }
          , n = ()=>{
            for (const t of i)
                t.update(W.timestamp)
        }
          , o = ()=>{
            for (const t of i)
                t.notify()
        }
          , a = ()=>{
            N.read(t, !1, !0),
            N.read(n, !1, !0),
            N.update(o, !1, !0)
        }
        ;
        Ba.set(e, a);
        const l = Wa(e);
        window.addEventListener("resize", a, {
            passive: !0
        }),
        e !== document.documentElement && Na.set(e, (s = a,
        "function" == typeof (r = e) ? Ca(r) : Ta(r, s))),
        l.addEventListener("scroll", a, {
            passive: !0
        })
    }
    var r, s;
    const a = Ba.get(e);
    return N.read(a, !1, !0),
    ()=>{
        var t;
        U(a);
        const n = Ua.get(e);
        if (!n)
            return;
        if (n.delete(o),
        n.size)
            return;
        const i = Ba.get(e);
        Ba.delete(e),
        i && (Wa(e).removeEventListener("scroll", i),
        null === (t = Na.get(e)) || void 0 === t || t(),
        window.removeEventListener("resize", i))
    }
}
const $a = new Map;
function za({source: t, container: e=document.documentElement, axis: n="y"}={}) {
    t && (e = t),
    $a.has(e) || $a.set(e, {});
    const i = $a.get(e);
    return i[n] || (i[n] = Te() ? new ScrollTimeline({
        source: e,
        axis: n
    }) : function({source: t, container: e, axis: n="y"}) {
        t && (e = t);
        const i = {
            value: 0
        }
          , o = _a(t=>{
            i.value = 100 * t[n].progress
        }
        , {
            container: e,
            axis: n
        });
        return {
            currentTime: i,
            cancel: o
        }
    }({
        source: e,
        axis: n
    })),
    i[n]
}
function Ka(t) {
    return t && (t.target || t.offset)
}
function Ha(t, {axis: e="y", ...n}={}) {
    const i = {
        axis: e,
        ...n
    };
    return "function" == typeof t ? function(t, e) {
        return function(t) {
            return 2 === t.length
        }(t) || Ka(e) ? _a(n=>{
            t(n[e.axis].progress, n)
        }
        , e) : xa(t, za(e))
    }(t, i) : function(t, e) {
        if (t.flatten(),
        Ka(e))
            return t.pause(),
            _a(n=>{
                t.time = t.duration * n[e.axis].progress
            }
            , e);
        {
            const n = za(e);
            return t.attachTimeline ? t.attachTimeline(n, t=>(t.pause(),
            xa(e=>{
                t.time = t.duration * e
            }
            , n))) : D
        }
    }(t, i)
}
function Ya(t, e) {
    M(Boolean(!e || e.current))
}
const Xa = ()=>({
    scrollX: dn(0),
    scrollY: dn(0),
    scrollXProgress: dn(0),
    scrollYProgress: dn(0)
});
function Ga({container: e, target: n, layoutEffect: i=!0, ...o}={}) {
    const r = v(Xa);
    return (i ? C : t.useEffect)(()=>(Ya(0, n),
    Ya(0, e),
    Ha((t,{x: e, y: n})=>{
        r.scrollX.set(e.current),
        r.scrollXProgress.set(e.progress),
        r.scrollY.set(n.current),
        r.scrollYProgress.set(n.progress)
    }
    , {
        ...o,
        container: (null == e ? void 0 : e.current) || void 0,
        target: (null == n ? void 0 : n.current) || void 0
    })), [e, n, JSON.stringify(o.offset)]),
    r
}
function qa(e) {
    const n = v(()=>dn(e))
      , {isStatic: i} = t.useContext(y);
    if (i) {
        const [,i] = t.useState(e);
        t.useEffect(()=>n.on("change", i), [])
    }
    return n
}
function Za(t, e) {
    const n = qa(e())
      , i = ()=>n.set(e());
    return i(),
    C(()=>{
        const e = ()=>N.preRender(i, !1, !0)
          , n = t.map(t=>t.on("change", e));
        return ()=>{
            n.forEach(t=>t()),
            U(i)
        }
    }
    ),
    n
}
function Ja(t) {
    return "number" == typeof t ? t : parseFloat(t)
}
function Qa(e, n={}) {
    const {isStatic: i} = t.useContext(y)
      , o = t.useRef(null)
      , r = qa(Pt(e) ? Ja(e.get()) : e)
      , s = t.useRef(r.get())
      , a = t.useRef(()=>{}
    )
      , l = ()=>{
        const t = o.current;
        t && 0 === t.time && t.sample(W.delta),
        u(),
        o.current = function(t) {
            return new bo(t)
        }({
            keyframes: [r.get(), s.current],
            velocity: r.getVelocity(),
            type: "spring",
            restDelta: .001,
            restSpeed: .01,
            ...n,
            onUpdate: a.current
        })
    }
      , u = ()=>{
        o.current && o.current.stop()
    }
    ;
    return t.useInsertionEffect(()=>r.attach((t,e)=>i ? e(t) : (s.current = t,
    a.current = e,
    N.update(l),
    r.get()), u), [JSON.stringify(n)]),
    C(()=>{
        if (Pt(e))
            return e.on("change", t=>r.set(Ja(t)))
    }
    , [r]),
    r
}
function tl(t, e, n, i) {
    if ("function" == typeof t)
        return function(t) {
            un.current = [],
            t();
            const e = Za(un.current, t);
            return un.current = void 0,
            e
        }(t);
    const o = "function" == typeof e ? e : function(...t) {
        const e = !Array.isArray(t[0])
          , n = e ? 0 : -1
          , i = t[0 + n]
          , o = t[1 + n]
          , r = t[2 + n]
          , s = t[3 + n]
          , a = mo(o, r, {
            mixer: (l = r[0],
            (t=>t && "object" == typeof t && t.mix)(l) ? l.mix : void 0),
            ...s
        });
        var l;
        return e ? a(i) : a
    }(e, n, i);
    return Array.isArray(t) ? el(t, o) : el([t], ([t])=>o(t))
}
function el(t, e) {
    const n = v(()=>[]);
    return Za(t, ()=>{
        n.length = 0;
        const i = t.length;
        for (let e = 0; e < i; e++)
            n[e] = t[e].get();
        return e(n)
    }
    )
}
function nl(t, e, {checkForDefaultPrevented: n=!0}={}) {
    return function(i) {
        if (null == t || t(i),
        !1 === n || !i.defaultPrevented)
            return null == e ? void 0 : e(i)
    }
}
function il(t, e) {
    if ("function" == typeof t)
        return t(e);
    null != t && (t.current = e)
}
function ol(...t) {
    return e=>{
        let n = !1;
        const i = t.map(t=>{
            const i = il(t, e);
            return n || "function" != typeof i || (n = !0),
            i
        }
        );
        if (n)
            return ()=>{
                for (let e = 0; e < i.length; e++) {
                    const n = i[e];
                    "function" == typeof n ? n() : il(t[e], null)
                }
            }
    }
}
function rl(...e) {
    return t.useCallback(ol(...e), e)
}
function sl(e, n=[]) {
    let i = [];
    const o = ()=>{
        const n = i.map(e=>t.createContext(e));
        return function(i) {
            const o = (null == i ? void 0 : i[e]) || n;
            return t.useMemo(()=>({
                [`__scope ${e}`]: {
                    ...i,
                    [e]: o
                }
            }), [i, o])
        }
    }
    ;
    return o.scopeName = e,
    [function(n, o) {
        const r = t.createContext(o)
          , s = i.length;
        i = [...i, o];
        const a = n=>{
            var i;
            const {scope: o, children: a, ...l} = n
              , u = (null == (i = null == o ? void 0 : o[e]) ? void 0 : i[s]) || r
              , c = t.useMemo(()=>l, Object.values(l));
            return f.jsx(u.Provider, {
                value: c,
                children: a
            })
        }
        ;
        return a.displayName = n + "Provider",
        [a, function(i, a) {
            var l;
            const u = (null == (l = null == a ? void 0 : a[e]) ? void 0 : l[s]) || r
              , c = t.useContext(u);
            if (c)
                return c;
            if (void 0 !== o)
                return o;
            throw new Error(`\`${i}\` must be used within \`${n}\``)
        }
        ]
    }
    , al(o, ...n)]
}
function al(...e) {
    const n = e[0];
    if (1 === e.length)
        return n;
    const i = ()=>{
        const i = e.map(t=>({
            useScope: t(),
            scopeName: t.scopeName
        }));
        return function(e) {
            const o = i.reduce((t,{useScope: n, scopeName: i})=>({
                ...t,
                ...n(e)[`__scope ${i}`]
            }), {});
            return t.useMemo(()=>({
                [`__scope ${n.scopeName}`]: o
            }), [o])
        }
    }
    ;
    return i.scopeName = n.scopeName,
    i
}
var ll = (null == globalThis ? void 0 : globalThis.document) ? t.useLayoutEffect : ()=>{}
  , ul = e[" useInsertionEffect ".trim().toString()] || ll;
function cl({prop: e, defaultProp: n, onChange: i=()=>{}
, caller: o}) {
    const [r,s,a] = function({defaultProp: e, onChange: n}) {
        const [i,o] = t.useState(e)
          , r = t.useRef(i)
          , s = t.useRef(n);
        return ul(()=>{
            s.current = n
        }
        , [n]),
        t.useEffect(()=>{
            var t;
            r.current !== i && (null == (t = s.current) || t.call(s, i),
            r.current = i)
        }
        , [i, r]),
        [i, o, s]
    }({
        defaultProp: n,
        onChange: i
    })
      , l = void 0 !== e
      , u = l ? e : r;
    {
        const n = t.useRef(void 0 !== e);
        t.useEffect(()=>{
            const t = n.current;
            if (t !== l) {}
            n.current = l
        }
        , [l, o])
    }
    const c = t.useCallback(t=>{
        var n;
        if (l) {
            const i = function(t) {
                return "function" == typeof t
            }(t) ? t(e) : t;
            i !== e && (null == (n = a.current) || n.call(a, i))
        } else
            s(t)
    }
    , [l, e, s, a]);
    return [u, c]
}
function dl(e) {
    const n = hl(e)
      , i = t.forwardRef((e,i)=>{
        const {children: o, ...r} = e
          , s = t.Children.toArray(o)
          , a = s.find(fl);
        if (a) {
            const e = a.props.children
              , o = s.map(n=>n === a ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : n);
            return f.jsx(n, {
                ...r,
                ref: i,
                children: t.isValidElement(e) ? t.cloneElement(e, void 0, o) : null
            })
        }
        return f.jsx(n, {
            ...r,
            ref: i,
            children: o
        })
    }
    );
    return i.displayName = `${e}.Slot`,
    i
}
function hl(e) {
    const n = t.forwardRef((e,n)=>{
        const {children: i, ...o} = e;
        if (t.isValidElement(i)) {
            const e = function(t) {
                var e, n;
                let i = null == (e = Object.getOwnPropertyDescriptor(t.props, "ref")) ? void 0 : e.get
                  , o = i && "isReactWarning"in i && i.isReactWarning;
                if (o)
                    return t.ref;
                if (i = null == (n = Object.getOwnPropertyDescriptor(t, "ref")) ? void 0 : n.get,
                o = i && "isReactWarning"in i && i.isReactWarning,
                o)
                    return t.props.ref;
                return t.props.ref || t.ref
            }(i)
              , r = function(t, e) {
                const n = {
                    ...e
                };
                for (const i in e) {
                    const o = t[i]
                      , r = e[i];
                    /^on[A-Z]/.test(i) ? o && r ? n[i] = (...t)=>{
                        const e = r(...t);
                        return o(...t),
                        e
                    }
                    : o && (n[i] = o) : "style" === i ? n[i] = {
                        ...o,
                        ...r
                    } : "className" === i && (n[i] = [o, r].filter(Boolean).join(" "))
                }
                return {
                    ...t,
                    ...n
                }
            }(o, i.props);
            return i.type !== t.Fragment && (r.ref = n ? ol(n, e) : e),
            t.cloneElement(i, r)
        }
        return t.Children.count(i) > 1 ? t.Children.only(null) : null
    }
    );
    return n.displayName = `${e}.SlotClone`,
    n
}
var pl = Symbol("radix.slottable");
function fl(e) {
    return t.isValidElement(e) && "function" == typeof e.type && "__radixId"in e.type && e.type.__radixId === pl
}
var ml = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e,n)=>{
    const i = dl(`Primitive.${n}`)
      , o = t.forwardRef((t,e)=>{
        const {asChild: o, ...r} = t
          , s = o ? i : n;
        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
        f.jsx(s, {
            ...r,
            ref: e
        })
    }
    );
    return o.displayName = `Primitive.${n}`,
    {
        ...e,
        [n]: o
    }
}
, {});
function vl(t, e) {
    t && n.flushSync(()=>t.dispatchEvent(e))
}
function gl(t) {
    const e = t + "CollectionProvider"
      , [n,o] = sl(e)
      , [r,s] = n(e, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , a = t=>{
        const {scope: e, children: n} = t
          , o = i.useRef(null)
          , s = i.useRef(new Map).current;
        return f.jsx(r, {
            scope: e,
            itemMap: s,
            collectionRef: o,
            children: n
        })
    }
    ;
    a.displayName = e;
    const l = t + "CollectionSlot"
      , u = dl(l)
      , c = i.forwardRef((t,e)=>{
        const {scope: n, children: i} = t
          , o = rl(e, s(l, n).collectionRef);
        return f.jsx(u, {
            ref: o,
            children: i
        })
    }
    );
    c.displayName = l;
    const d = t + "CollectionItemSlot"
      , h = "data-radix-collection-item"
      , p = dl(d)
      , m = i.forwardRef((t,e)=>{
        const {scope: n, children: o, ...r} = t
          , a = i.useRef(null)
          , l = rl(e, a)
          , u = s(d, n);
        return i.useEffect(()=>(u.itemMap.set(a, {
            ref: a,
            ...r
        }),
        ()=>{
            u.itemMap.delete(a)
        }
        )),
        f.jsx(p, {
            [h]: "",
            ref: l,
            children: o
        })
    }
    );
    return m.displayName = d,
    [{
        Provider: a,
        Slot: c,
        ItemSlot: m
    }, function(e) {
        const n = s(t + "CollectionConsumer", e);
        return i.useCallback(()=>{
            const t = n.collectionRef.current;
            if (!t)
                return [];
            const e = Array.from(t.querySelectorAll(`[${h}]`));
            return Array.from(n.itemMap.values()).sort((t,n)=>e.indexOf(t.ref.current) - e.indexOf(n.ref.current))
        }
        , [n.collectionRef, n.itemMap])
    }
    , o]
}
var yl = t.createContext(void 0);
function xl(e) {
    const n = t.useContext(yl);
    return e || n || "ltr"
}
function wl(e) {
    const n = t.useRef(e);
    return t.useEffect(()=>{
        n.current = e
    }
    ),
    t.useMemo(()=>(...t)=>{
        var e;
        return null == (e = n.current) ? void 0 : e.call(n, ...t)
    }
    , [])
}
var bl, El = "dismissableLayer.update", Pl = "dismissableLayer.pointerDownOutside", Tl = "dismissableLayer.focusOutside", Sl = t.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Al = t.forwardRef((e,n)=>{
    const {disableOutsidePointerEvents: i=!1, onEscapeKeyDown: o, onPointerDownOutside: r, onFocusOutside: s, onInteractOutside: a, onDismiss: l, ...u} = e
      , c = t.useContext(Sl)
      , [d,h] = t.useState(null)
      , p = (null == d ? void 0 : d.ownerDocument) ?? (null == globalThis ? void 0 : globalThis.document)
      , [,m] = t.useState({})
      , v = rl(n, t=>h(t))
      , g = Array.from(c.layers)
      , [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1)
      , x = g.indexOf(y)
      , w = d ? g.indexOf(d) : -1
      , b = c.layersWithOutsidePointerEventsDisabled.size > 0
      , E = w >= x
      , P = function(e, n=(null == globalThis ? void 0 : globalThis.document)) {
        const i = wl(e)
          , o = t.useRef(!1)
          , r = t.useRef(()=>{}
        );
        return t.useEffect(()=>{
            const t = t=>{
                if (t.target && !o.current) {
                    let e = function() {
                        Dl(Pl, i, o, {
                            discrete: !0
                        })
                    };
                    const o = {
                        originalEvent: t
                    };
                    "touch" === t.pointerType ? (n.removeEventListener("click", r.current),
                    r.current = e,
                    n.addEventListener("click", r.current, {
                        once: !0
                    })) : e()
                } else
                    n.removeEventListener("click", r.current);
                o.current = !1
            }
              , e = window.setTimeout(()=>{
                n.addEventListener("pointerdown", t)
            }
            , 0);
            return ()=>{
                window.clearTimeout(e),
                n.removeEventListener("pointerdown", t),
                n.removeEventListener("click", r.current)
            }
        }
        , [n, i]),
        {
            onPointerDownCapture: ()=>o.current = !0
        }
    }(t=>{
        const e = t.target
          , n = [...c.branches].some(t=>t.contains(e));
        E && !n && (null == r || r(t),
        null == a || a(t),
        t.defaultPrevented || null == l || l())
    }
    , p)
      , T = function(e, n=(null == globalThis ? void 0 : globalThis.document)) {
        const i = wl(e)
          , o = t.useRef(!1);
        return t.useEffect(()=>{
            const t = t=>{
                if (t.target && !o.current) {
                    Dl(Tl, i, {
                        originalEvent: t
                    }, {
                        discrete: !1
                    })
                }
            }
            ;
            return n.addEventListener("focusin", t),
            ()=>n.removeEventListener("focusin", t)
        }
        , [n, i]),
        {
            onFocusCapture: ()=>o.current = !0,
            onBlurCapture: ()=>o.current = !1
        }
    }(t=>{
        const e = t.target;
        [...c.branches].some(t=>t.contains(e)) || (null == s || s(t),
        null == a || a(t),
        t.defaultPrevented || null == l || l())
    }
    , p);
    return function(e, n=(null == globalThis ? void 0 : globalThis.document)) {
        const i = wl(e);
        t.useEffect(()=>{
            const t = t=>{
                "Escape" === t.key && i(t)
            }
            ;
            return n.addEventListener("keydown", t, {
                capture: !0
            }),
            ()=>n.removeEventListener("keydown", t, {
                capture: !0
            })
        }
        , [i, n])
    }(t=>{
        w === c.layers.size - 1 && (null == o || o(t),
        !t.defaultPrevented && l && (t.preventDefault(),
        l()))
    }
    , p),
    t.useEffect(()=>{
        if (d)
            return i && (0 === c.layersWithOutsidePointerEventsDisabled.size && (bl = p.body.style.pointerEvents,
            p.body.style.pointerEvents = "none"),
            c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            Rl(),
            ()=>{
                i && 1 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = bl)
            }
    }
    , [d, p, i, c]),
    t.useEffect(()=>()=>{
        d && (c.layers.delete(d),
        c.layersWithOutsidePointerEventsDisabled.delete(d),
        Rl())
    }
    , [d, c]),
    t.useEffect(()=>{
        const t = ()=>m({});
        return document.addEventListener(El, t),
        ()=>document.removeEventListener(El, t)
    }
    , []),
    f.jsx(ml.div, {
        ...u,
        ref: v,
        style: {
            pointerEvents: b ? E ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: nl(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: nl(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: nl(e.onPointerDownCapture, P.onPointerDownCapture)
    })
}
);
Al.displayName = "DismissableLayer";
var Cl = t.forwardRef((e,n)=>{
    const i = t.useContext(Sl)
      , o = t.useRef(null)
      , r = rl(n, o);
    return t.useEffect(()=>{
        const t = o.current;
        if (t)
            return i.branches.add(t),
            ()=>{
                i.branches.delete(t)
            }
    }
    , [i.branches]),
    f.jsx(ml.div, {
        ...e,
        ref: r
    })
}
);
function Rl() {
    const t = new CustomEvent(El);
    document.dispatchEvent(t)
}
function Dl(t, e, n, {discrete: i}) {
    const o = n.originalEvent.target
      , r = new CustomEvent(t,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    e && o.addEventListener(t, e, {
        once: !0
    }),
    i ? vl(o, r) : o.dispatchEvent(r)
}
Cl.displayName = "DismissableLayerBranch";
var Ml = Al
  , kl = Cl
  , Ll = 0;
function Vl() {
    t.useEffect(()=>{
        const t = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", t[0] ?? jl()),
        document.body.insertAdjacentElement("beforeend", t[1] ?? jl()),
        Ll++,
        ()=>{
            1 === Ll && document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),
            Ll--
        }
    }
    , [])
}
function jl() {
    const t = document.createElement("span");
    return t.setAttribute("data-radix-focus-guard", ""),
    t.tabIndex = 0,
    t.style.outline = "none",
    t.style.opacity = "0",
    t.style.position = "fixed",
    t.style.pointerEvents = "none",
    t
}
var Fl = "focusScope.autoFocusOnMount"
  , Ol = "focusScope.autoFocusOnUnmount"
  , Il = {
    bubbles: !1,
    cancelable: !0
}
  , Bl = t.forwardRef((e,n)=>{
    const {loop: i=!1, trapped: o=!1, onMountAutoFocus: r, onUnmountAutoFocus: s, ...a} = e
      , [l,u] = t.useState(null)
      , c = wl(r)
      , d = wl(s)
      , h = t.useRef(null)
      , p = rl(n, t=>u(t))
      , m = t.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    t.useEffect(()=>{
        if (o) {
            let t = function(t) {
                if (m.paused || !l)
                    return;
                const e = t.target;
                l.contains(e) ? h.current = e : _l(h.current, {
                    select: !0
                })
            }
              , e = function(t) {
                if (m.paused || !l)
                    return;
                const e = t.relatedTarget;
                null !== e && (l.contains(e) || _l(h.current, {
                    select: !0
                }))
            }
              , n = function(t) {
                if (document.activeElement === document.body)
                    for (const e of t)
                        e.removedNodes.length > 0 && _l(l)
            };
            document.addEventListener("focusin", t),
            document.addEventListener("focusout", e);
            const i = new MutationObserver(n);
            return l && i.observe(l, {
                childList: !0,
                subtree: !0
            }),
            ()=>{
                document.removeEventListener("focusin", t),
                document.removeEventListener("focusout", e),
                i.disconnect()
            }
        }
    }
    , [o, l, m.paused]),
    t.useEffect(()=>{
        if (l) {
            $l.add(m);
            const e = document.activeElement;
            if (!l.contains(e)) {
                const n = new CustomEvent(Fl,Il);
                l.addEventListener(Fl, c),
                l.dispatchEvent(n),
                n.defaultPrevented || (!function(t, {select: e=!1}={}) {
                    const n = document.activeElement;
                    for (const i of t)
                        if (_l(i, {
                            select: e
                        }),
                        document.activeElement !== n)
                            return
                }((t = Nl(l),
                t.filter(t=>"A" !== t.tagName)), {
                    select: !0
                }),
                document.activeElement === e && _l(l))
            }
            return ()=>{
                l.removeEventListener(Fl, c),
                setTimeout(()=>{
                    const t = new CustomEvent(Ol,Il);
                    l.addEventListener(Ol, d),
                    l.dispatchEvent(t),
                    t.defaultPrevented || _l(e ?? document.body, {
                        select: !0
                    }),
                    l.removeEventListener(Ol, d),
                    $l.remove(m)
                }
                , 0)
            }
        }
        var t
    }
    , [l, c, d, m]);
    const v = t.useCallback(t=>{
        if (!i && !o)
            return;
        if (m.paused)
            return;
        const e = "Tab" === t.key && !t.altKey && !t.ctrlKey && !t.metaKey
          , n = document.activeElement;
        if (e && n) {
            const e = t.currentTarget
              , [o,r] = function(t) {
                const e = Nl(t)
                  , n = Ul(e, t)
                  , i = Ul(e.reverse(), t);
                return [n, i]
            }(e);
            o && r ? t.shiftKey || n !== r ? t.shiftKey && n === o && (t.preventDefault(),
            i && _l(r, {
                select: !0
            })) : (t.preventDefault(),
            i && _l(o, {
                select: !0
            })) : n === e && t.preventDefault()
        }
    }
    , [i, o, m.paused]);
    return f.jsx(ml.div, {
        tabIndex: -1,
        ...a,
        ref: p,
        onKeyDown: v
    })
}
);
function Nl(t) {
    const e = []
      , n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
        acceptNode: t=>{
            const e = "INPUT" === t.tagName && "hidden" === t.type;
            return t.disabled || t.hidden || e ? NodeFilter.FILTER_SKIP : t.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        e.push(n.currentNode);
    return e
}
function Ul(t, e) {
    for (const n of t)
        if (!Wl(n, {
            upTo: e
        }))
            return n
}
function Wl(t, {upTo: e}) {
    if ("hidden" === getComputedStyle(t).visibility)
        return !0;
    for (; t; ) {
        if (void 0 !== e && t === e)
            return !1;
        if ("none" === getComputedStyle(t).display)
            return !0;
        t = t.parentElement
    }
    return !1
}
function _l(t, {select: e=!1}={}) {
    if (t && t.focus) {
        const n = document.activeElement;
        t.focus({
            preventScroll: !0
        }),
        t !== n && function(t) {
            return t instanceof HTMLInputElement && "select"in t
        }(t) && e && t.select()
    }
}
Bl.displayName = "FocusScope";
var $l = function() {
    let t = [];
    return {
        add(e) {
            const n = t[0];
            e !== n && (null == n || n.pause()),
            t = zl(t, e),
            t.unshift(e)
        },
        remove(e) {
            var n;
            t = zl(t, e),
            null == (n = t[0]) || n.resume()
        }
    }
}();
function zl(t, e) {
    const n = [...t]
      , i = n.indexOf(e);
    return -1 !== i && n.splice(i, 1),
    n
}
var Kl = e[" useId ".trim().toString()] || (()=>{}
)
  , Hl = 0;
function Yl(e) {
    const [n,i] = t.useState(Kl());
    return ll(()=>{
        i(t=>t ?? String(Hl++))
    }
    , [e]),
    e || (n ? `radix-${n}` : "")
}
var Xl = t.forwardRef((e,n)=>{
    var i;
    const {container: r, ...s} = e
      , [a,l] = t.useState(!1);
    ll(()=>l(!0), []);
    const u = r || a && (null == (i = null == globalThis ? void 0 : globalThis.document) ? void 0 : i.body);
    return u ? o.createPortal(f.jsx(ml.div, {
        ...s,
        ref: n
    }), u) : null
}
);
Xl.displayName = "Portal";
var Gl = e=>{
    const {present: n, children: i} = e
      , o = function(e) {
        const [n,i] = t.useState()
          , o = t.useRef(null)
          , r = t.useRef(e)
          , s = t.useRef("none")
          , a = e ? "mounted" : "unmounted"
          , [l,u] = function(e, n) {
            return t.useReducer((t,e)=>n[t][e] ?? t, e)
        }(a, {
            mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
            },
            unmounted: {
                MOUNT: "mounted"
            }
        });
        return t.useEffect(()=>{
            const t = ql(o.current);
            s.current = "mounted" === l ? t : "none"
        }
        , [l]),
        ll(()=>{
            const t = o.current
              , n = r.current;
            if (n !== e) {
                const i = s.current
                  , o = ql(t);
                if (e)
                    u("MOUNT");
                else if ("none" === o || "none" === (null == t ? void 0 : t.display))
                    u("UNMOUNT");
                else {
                    u(n && i !== o ? "ANIMATION_OUT" : "UNMOUNT")
                }
                r.current = e
            }
        }
        , [e, u]),
        ll(()=>{
            if (n) {
                let t;
                const e = n.ownerDocument.defaultView ?? window
                  , i = i=>{
                    const s = ql(o.current).includes(CSS.escape(i.animationName));
                    if (i.target === n && s && (u("ANIMATION_END"),
                    !r.current)) {
                        const i = n.style.animationFillMode;
                        n.style.animationFillMode = "forwards",
                        t = e.setTimeout(()=>{
                            "forwards" === n.style.animationFillMode && (n.style.animationFillMode = i)
                        }
                        )
                    }
                }
                  , a = t=>{
                    t.target === n && (s.current = ql(o.current))
                }
                ;
                return n.addEventListener("animationstart", a),
                n.addEventListener("animationcancel", i),
                n.addEventListener("animationend", i),
                ()=>{
                    e.clearTimeout(t),
                    n.removeEventListener("animationstart", a),
                    n.removeEventListener("animationcancel", i),
                    n.removeEventListener("animationend", i)
                }
            }
            u("ANIMATION_END")
        }
        , [n, u]),
        {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: t.useCallback(t=>{
                o.current = t ? getComputedStyle(t) : null,
                i(t)
            }
            , [])
        }
    }(n)
      , r = "function" == typeof i ? i({
        present: o.isPresent
    }) : t.Children.only(i)
      , s = rl(o.ref, function(t) {
        var e, n;
        let i = null == (e = Object.getOwnPropertyDescriptor(t.props, "ref")) ? void 0 : e.get
          , o = i && "isReactWarning"in i && i.isReactWarning;
        if (o)
            return t.ref;
        if (i = null == (n = Object.getOwnPropertyDescriptor(t, "ref")) ? void 0 : n.get,
        o = i && "isReactWarning"in i && i.isReactWarning,
        o)
            return t.props.ref;
        return t.props.ref || t.ref
    }(r));
    return "function" == typeof i || o.isPresent ? t.cloneElement(r, {
        ref: s
    }) : null
}
;
function ql(t) {
    return (null == t ? void 0 : t.animationName) || "none"
}
Gl.displayName = "Presence";
var Zl = "rovingFocusGroup.onEntryFocus"
  , Jl = {
    bubbles: !1,
    cancelable: !0
}
  , Ql = "RovingFocusGroup"
  , [tu,eu,nu] = gl(Ql)
  , [iu,ou] = sl(Ql, [nu])
  , [ru,su] = iu(Ql)
  , au = t.forwardRef((t,e)=>f.jsx(tu.Provider, {
    scope: t.__scopeRovingFocusGroup,
    children: f.jsx(tu.Slot, {
        scope: t.__scopeRovingFocusGroup,
        children: f.jsx(lu, {
            ...t,
            ref: e
        })
    })
}));
au.displayName = Ql;
var lu = t.forwardRef((e,n)=>{
    const {__scopeRovingFocusGroup: i, orientation: o, loop: r=!1, dir: s, currentTabStopId: a, defaultCurrentTabStopId: l, onCurrentTabStopIdChange: u, onEntryFocus: c, preventScrollOnEntryFocus: d=!1, ...h} = e
      , p = t.useRef(null)
      , m = rl(n, p)
      , v = xl(s)
      , [g,y] = cl({
        prop: a,
        defaultProp: l ?? null,
        onChange: u,
        caller: Ql
    })
      , [x,w] = t.useState(!1)
      , b = wl(c)
      , E = eu(i)
      , P = t.useRef(!1)
      , [T,S] = t.useState(0);
    return t.useEffect(()=>{
        const t = p.current;
        if (t)
            return t.addEventListener(Zl, b),
            ()=>t.removeEventListener(Zl, b)
    }
    , [b]),
    f.jsx(ru, {
        scope: i,
        orientation: o,
        dir: v,
        loop: r,
        currentTabStopId: g,
        onItemFocus: t.useCallback(t=>y(t), [y]),
        onItemShiftTab: t.useCallback(()=>w(!0), []),
        onFocusableItemAdd: t.useCallback(()=>S(t=>t + 1), []),
        onFocusableItemRemove: t.useCallback(()=>S(t=>t - 1), []),
        children: f.jsx(ml.div, {
            tabIndex: x || 0 === T ? -1 : 0,
            "data-orientation": o,
            ...h,
            ref: m,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: nl(e.onMouseDown, ()=>{
                P.current = !0
            }
            ),
            onFocus: nl(e.onFocus, t=>{
                const e = !P.current;
                if (t.target === t.currentTarget && e && !x) {
                    const e = new CustomEvent(Zl,Jl);
                    if (t.currentTarget.dispatchEvent(e),
                    !e.defaultPrevented) {
                        const t = E().filter(t=>t.focusable);
                        hu([t.find(t=>t.active), t.find(t=>t.id === g), ...t].filter(Boolean).map(t=>t.ref.current), d)
                    }
                }
                P.current = !1
            }
            ),
            onBlur: nl(e.onBlur, ()=>w(!1))
        })
    })
}
)
  , uu = "RovingFocusGroupItem"
  , cu = t.forwardRef((e,n)=>{
    const {__scopeRovingFocusGroup: i, focusable: o=!0, active: r=!1, tabStopId: s, children: a, ...l} = e
      , u = Yl()
      , c = s || u
      , d = su(uu, i)
      , h = d.currentTabStopId === c
      , p = eu(i)
      , {onFocusableItemAdd: m, onFocusableItemRemove: v, currentTabStopId: g} = d;
    return t.useEffect(()=>{
        if (o)
            return m(),
            ()=>v()
    }
    , [o, m, v]),
    f.jsx(tu.ItemSlot, {
        scope: i,
        id: c,
        focusable: o,
        active: r,
        children: f.jsx(ml.span, {
            tabIndex: h ? 0 : -1,
            "data-orientation": d.orientation,
            ...l,
            ref: n,
            onMouseDown: nl(e.onMouseDown, t=>{
                o ? d.onItemFocus(c) : t.preventDefault()
            }
            ),
            onFocus: nl(e.onFocus, ()=>d.onItemFocus(c)),
            onKeyDown: nl(e.onKeyDown, t=>{
                if ("Tab" === t.key && t.shiftKey)
                    return void d.onItemShiftTab();
                if (t.target !== t.currentTarget)
                    return;
                const e = function(t, e, n) {
                    const i = function(t, e) {
                        return "rtl" !== e ? t : "ArrowLeft" === t ? "ArrowRight" : "ArrowRight" === t ? "ArrowLeft" : t
                    }(t.key, n);
                    return "vertical" === e && ["ArrowLeft", "ArrowRight"].includes(i) || "horizontal" === e && ["ArrowUp", "ArrowDown"].includes(i) ? void 0 : du[i]
                }(t, d.orientation, d.dir);
                if (void 0 !== e) {
                    if (t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
                        return;
                    t.preventDefault();
                    let o = p().filter(t=>t.focusable).map(t=>t.ref.current);
                    if ("last" === e)
                        o.reverse();
                    else if ("prev" === e || "next" === e) {
                        "prev" === e && o.reverse();
                        const r = o.indexOf(t.currentTarget);
                        o = d.loop ? (i = r + 1,
                        (n = o).map((t,e)=>n[(i + e) % n.length])) : o.slice(r + 1)
                    }
                    setTimeout(()=>hu(o))
                }
                var n, i
            }
            ),
            children: "function" == typeof a ? a({
                isCurrentTabStop: h,
                hasTabStop: null != g
            }) : a
        })
    })
}
);
cu.displayName = uu;
var du = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function hu(t, e=!1) {
    const n = document.activeElement;
    for (const i of t) {
        if (i === n)
            return;
        if (i.focus({
            preventScroll: e
        }),
        document.activeElement !== n)
            return
    }
}
var pu = au
  , fu = cu
  , mu = new WeakMap
  , vu = new WeakMap
  , gu = {}
  , yu = 0
  , xu = function(t) {
    return t && (t.host || xu(t.parentNode))
}
  , wu = function(t, e, n, i) {
    var o = function(t, e) {
        return e.map(function(e) {
            if (t.contains(e))
                return e;
            var n = xu(e);
            return n && t.contains(n) ? n : null
        }).filter(function(t) {
            return Boolean(t)
        })
    }(e, Array.isArray(t) ? t : [t]);
    gu[n] || (gu[n] = new WeakMap);
    var r = gu[n]
      , s = []
      , a = new Set
      , l = new Set(o)
      , u = function(t) {
        t && !a.has(t) && (a.add(t),
        u(t.parentNode))
    };
    o.forEach(u);
    var c = function(t) {
        t && !l.has(t) && Array.prototype.forEach.call(t.children, function(t) {
            if (a.has(t))
                c(t);
            else
                try {
                    var e = t.getAttribute(i)
                      , o = null !== e && "false" !== e
                      , l = (mu.get(t) || 0) + 1
                      , u = (r.get(t) || 0) + 1;
                    mu.set(t, l),
                    r.set(t, u),
                    s.push(t),
                    1 === l && o && vu.set(t, !0),
                    1 === u && t.setAttribute(n, "true"),
                    o || t.setAttribute(i, "true")
                } catch (d) {}
        })
    };
    return c(e),
    a.clear(),
    yu++,
    function() {
        s.forEach(function(t) {
            var e = mu.get(t) - 1
              , o = r.get(t) - 1;
            mu.set(t, e),
            r.set(t, o),
            e || (vu.has(t) || t.removeAttribute(i),
            vu.delete(t)),
            o || t.removeAttribute(n)
        }),
        --yu || (mu = new WeakMap,
        mu = new WeakMap,
        vu = new WeakMap,
        gu = {})
    }
}
  , bu = function(t, e, n) {
    void 0 === n && (n = "data-aria-hidden");
    var i = Array.from(Array.isArray(t) ? t : [t])
      , o = function(t) {
        return "undefined" == typeof document ? null : (Array.isArray(t) ? t[0] : t).ownerDocument.body
    }(t);
    return o ? (i.push.apply(i, Array.from(o.querySelectorAll("[aria-live], script"))),
    wu(i, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , Eu = function() {
    return Eu = Object.assign || function(t) {
        for (var e, n = 1, i = arguments.length; n < i; n++)
            for (var o in e = arguments[n])
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t
    }
    ,
    Eu.apply(this, arguments)
};
function Pu(t, e) {
    var n = {};
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (i = Object.getOwnPropertySymbols(t); o < i.length; o++)
            e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[o]) && (n[i[o]] = t[i[o]])
    }
    return n
}
"function" == typeof SuppressedError && SuppressedError;
var Tu = "right-scroll-bar-position"
  , Su = "width-before-scroll-bar";
function Au(t, e) {
    return "function" == typeof t ? t(e) : t && (t.current = e),
    t
}
var Cu = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect
  , Ru = new WeakMap;
function Du(e, n) {
    var i, o, r, s = (i = null,
    o = function(t) {
        return e.forEach(function(e) {
            return Au(e, t)
        })
    }
    ,
    (r = t.useState(function() {
        return {
            value: i,
            callback: o,
            facade: {
                get current() {
                    return r.value
                },
                set current(t) {
                    var e = r.value;
                    e !== t && (r.value = t,
                    r.callback(t, e))
                }
            }
        }
    })[0]).callback = o,
    r.facade);
    return Cu(function() {
        var t = Ru.get(s);
        if (t) {
            var n = new Set(t)
              , i = new Set(e)
              , o = s.current;
            n.forEach(function(t) {
                i.has(t) || Au(t, null)
            }),
            i.forEach(function(t) {
                n.has(t) || Au(t, o)
            })
        }
        Ru.set(s, e)
    }, [e]),
    s
}
function Mu(t) {
    return t
}
var ku = function(e) {
    var n = e.sideCar
      , i = Pu(e, ["sideCar"]);
    if (!n)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var o = n.read();
    if (!o)
        throw new Error("Sidecar medium not found");
    return t.createElement(o, Eu({}, i))
};
ku.isSideCarExport = !0;
var Lu = function(t) {
    void 0 === t && (t = {});
    var e = function(t, e) {
        void 0 === e && (e = Mu);
        var n = []
          , i = !1;
        return {
            read: function() {
                if (i)
                    throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : t
            },
            useMedium: function(t) {
                var o = e(t, i);
                return n.push(o),
                function() {
                    n = n.filter(function(t) {
                        return t !== o
                    })
                }
            },
            assignSyncMedium: function(t) {
                for (i = !0; n.length; ) {
                    var e = n;
                    n = [],
                    e.forEach(t)
                }
                n = {
                    push: function(e) {
                        return t(e)
                    },
                    filter: function() {
                        return n
                    }
                }
            },
            assignMedium: function(t) {
                i = !0;
                var e = [];
                if (n.length) {
                    var o = n;
                    n = [],
                    o.forEach(t),
                    e = n
                }
                var r = function() {
                    var n = e;
                    e = [],
                    n.forEach(t)
                }
                  , s = function() {
                    return Promise.resolve().then(r)
                };
                s(),
                n = {
                    push: function(t) {
                        e.push(t),
                        s()
                    },
                    filter: function(t) {
                        return e = e.filter(t),
                        n
                    }
                }
            }
        }
    }(null);
    return e.options = Eu({
        async: !0,
        ssr: !1
    }, t),
    e
}()
  , Vu = function() {}
  , ju = t.forwardRef(function(e, n) {
    var i = t.useRef(null)
      , o = t.useState({
        onScrollCapture: Vu,
        onWheelCapture: Vu,
        onTouchMoveCapture: Vu
    })
      , r = o[0]
      , s = o[1]
      , a = e.forwardProps
      , l = e.children
      , u = e.className
      , c = e.removeScrollBar
      , d = e.enabled
      , h = e.shards
      , p = e.sideCar
      , f = e.noRelative
      , m = e.noIsolation
      , v = e.inert
      , g = e.allowPinchZoom
      , y = e.as
      , x = void 0 === y ? "div" : y
      , w = e.gapMode
      , b = Pu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , E = p
      , P = Du([i, n])
      , T = Eu(Eu({}, b), r);
    return t.createElement(t.Fragment, null, d && t.createElement(E, {
        sideCar: Lu,
        removeScrollBar: c,
        shards: h,
        noRelative: f,
        noIsolation: m,
        inert: v,
        setCallbacks: s,
        allowPinchZoom: !!g,
        lockRef: i,
        gapMode: w
    }), a ? t.cloneElement(t.Children.only(l), Eu(Eu({}, T), {
        ref: P
    })) : t.createElement(x, Eu({}, T, {
        className: u,
        ref: P
    }), l))
});
ju.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
},
ju.classNames = {
    fullWidth: Su,
    zeroRight: Tu
};
function Fu() {
    if (!document)
        return null;
    var t = document.createElement("style");
    t.type = "text/css";
    var e = function() {
        if ("undefined" != typeof __webpack_nonce__)
            return __webpack_nonce__
    }();
    return e && t.setAttribute("nonce", e),
    t
}
var Ou = function() {
    var t = 0
      , e = null;
    return {
        add: function(n) {
            var i, o;
            0 == t && (e = Fu()) && (o = n,
            (i = e).styleSheet ? i.styleSheet.cssText = o : i.appendChild(document.createTextNode(o)),
            function(t) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(t)
            }(e)),
            t++
        },
        remove: function() {
            !--t && e && (e.parentNode && e.parentNode.removeChild(e),
            e = null)
        }
    }
}
  , Iu = function() {
    var e, n = (e = Ou(),
    function(n, i) {
        t.useEffect(function() {
            return e.add(n),
            function() {
                e.remove()
            }
        }, [n && i])
    }
    );
    return function(t) {
        var e = t.styles
          , i = t.dynamic;
        return n(e, i),
        null
    }
}
  , Bu = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Nu = function(t) {
    return parseInt(t || "", 10) || 0
}
  , Uu = function(t) {
    if (void 0 === t && (t = "margin"),
    "undefined" == typeof window)
        return Bu;
    var e = function(t) {
        var e = window.getComputedStyle(document.body)
          , n = e["padding" === t ? "paddingLeft" : "marginLeft"]
          , i = e["padding" === t ? "paddingTop" : "marginTop"]
          , o = e["padding" === t ? "paddingRight" : "marginRight"];
        return [Nu(n), Nu(i), Nu(o)]
    }(t)
      , n = document.documentElement.clientWidth
      , i = window.innerWidth;
    return {
        left: e[0],
        top: e[1],
        right: e[2],
        gap: Math.max(0, i - n + e[2] - e[0])
    }
}
  , Wu = Iu()
  , _u = "data-scroll-locked"
  , $u = function(t, e, n, i) {
    var o = t.left
      , r = t.top
      , s = t.right
      , a = t.gap;
    return void 0 === n && (n = "margin"),
    "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(i, ";\n   padding-right: ").concat(a, "px ").concat(i, ";\n  }\n  body[").concat(_u, "] {\n    overflow: hidden ").concat(i, ";\n    overscroll-behavior: contain;\n    ").concat([e && "position: relative ".concat(i, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(r, "px;\n    padding-right: ").concat(s, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(i, ";\n    "), "padding" === n && "padding-right: ".concat(a, "px ").concat(i, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(Tu, " {\n    right: ").concat(a, "px ").concat(i, ";\n  }\n  \n  .").concat(Su, " {\n    margin-right: ").concat(a, "px ").concat(i, ";\n  }\n  \n  .").concat(Tu, " .").concat(Tu, " {\n    right: 0 ").concat(i, ";\n  }\n  \n  .").concat(Su, " .").concat(Su, " {\n    margin-right: 0 ").concat(i, ";\n  }\n  \n  body[").concat(_u, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
}
  , zu = function() {
    var t = parseInt(document.body.getAttribute(_u) || "0", 10);
    return isFinite(t) ? t : 0
}
  , Ku = function(e) {
    var n = e.noRelative
      , i = e.noImportant
      , o = e.gapMode
      , r = void 0 === o ? "margin" : o;
    t.useEffect(function() {
        return document.body.setAttribute(_u, (zu() + 1).toString()),
        function() {
            var t = zu() - 1;
            t <= 0 ? document.body.removeAttribute(_u) : document.body.setAttribute(_u, t.toString())
        }
    }, []);
    var s = t.useMemo(function() {
        return Uu(r)
    }, [r]);
    return t.createElement(Wu, {
        styles: $u(s, !n, r, i ? "" : "!important")
    })
}
  , Hu = !1;
if ("undefined" != typeof window)
    try {
        var Yu = Object.defineProperty({}, "passive", {
            get: function() {
                return Hu = !0,
                !0
            }
        });
        window.addEventListener("test", Yu, Yu),
        window.removeEventListener("test", Yu, Yu)
    } catch (Hc) {
        Hu = !1
    }
var Xu = !!Hu && {
    passive: !1
}
  , Gu = function(t, e) {
    if (!(t instanceof Element))
        return !1;
    var n = window.getComputedStyle(t);
    return "hidden" !== n[e] && !(n.overflowY === n.overflowX && !function(t) {
        return "TEXTAREA" === t.tagName
    }(t) && "visible" === n[e])
}
  , qu = function(t, e) {
    var n = e.ownerDocument
      , i = e;
    do {
        if ("undefined" != typeof ShadowRoot && i instanceof ShadowRoot && (i = i.host),
        Zu(t, i)) {
            var o = Ju(t, i);
            if (o[1] > o[2])
                return !0
        }
        i = i.parentNode
    } while (i && i !== n.body);
    return !1
}
  , Zu = function(t, e) {
    return "v" === t ? function(t) {
        return Gu(t, "overflowY")
    }(e) : function(t) {
        return Gu(t, "overflowX")
    }(e)
}
  , Ju = function(t, e) {
    return "v" === t ? [(n = e).scrollTop, n.scrollHeight, n.clientHeight] : function(t) {
        return [t.scrollLeft, t.scrollWidth, t.clientWidth]
    }(e);
    var n
}
  , Qu = function(t) {
    return "changedTouches"in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0]
}
  , tc = function(t) {
    return [t.deltaX, t.deltaY]
}
  , ec = function(t) {
    return t && "current"in t ? t.current : t
}
  , nc = function(t) {
    return "\n  .block-interactivity-".concat(t, " {pointer-events: none;}\n  .allow-interactivity-").concat(t, " {pointer-events: all;}\n")
}
  , ic = 0
  , oc = [];
function rc(t) {
    for (var e = null; null !== t; )
        t instanceof ShadowRoot && (e = t.host,
        t = t.host),
        t = t.parentNode;
    return e
}
const sc = (ac = function(e) {
    var n = t.useRef([])
      , i = t.useRef([0, 0])
      , o = t.useRef()
      , r = t.useState(ic++)[0]
      , s = t.useState(Iu)[0]
      , a = t.useRef(e);
    t.useEffect(function() {
        a.current = e
    }, [e]),
    t.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(r));
            var t = function(t, e, n) {
                if (n || 2 === arguments.length)
                    for (var i, o = 0, r = e.length; o < r; o++)
                        !i && o in e || (i || (i = Array.prototype.slice.call(e, 0, o)),
                        i[o] = e[o]);
                return t.concat(i || Array.prototype.slice.call(e))
            }([e.lockRef.current], (e.shards || []).map(ec), !0).filter(Boolean);
            return t.forEach(function(t) {
                return t.classList.add("allow-interactivity-".concat(r))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(r)),
                t.forEach(function(t) {
                    return t.classList.remove("allow-interactivity-".concat(r))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var l = t.useCallback(function(t, e) {
        if ("touches"in t && 2 === t.touches.length || "wheel" === t.type && t.ctrlKey)
            return !a.current.allowPinchZoom;
        var n, r = Qu(t), s = i.current, l = "deltaX"in t ? t.deltaX : s[0] - r[0], u = "deltaY"in t ? t.deltaY : s[1] - r[1], c = t.target, d = Math.abs(l) > Math.abs(u) ? "h" : "v";
        if ("touches"in t && "h" === d && "range" === c.type)
            return !1;
        var h = qu(d, c);
        if (!h)
            return !0;
        if (h ? n = d : (n = "v" === d ? "h" : "v",
        h = qu(d, c)),
        !h)
            return !1;
        if (!o.current && "changedTouches"in t && (l || u) && (o.current = n),
        !n)
            return !0;
        var p = o.current || n;
        return function(t, e, n, i) {
            var o = function(t, e) {
                return "h" === t && "rtl" === e ? -1 : 1
            }(t, window.getComputedStyle(e).direction)
              , r = o * i
              , s = n.target
              , a = e.contains(s)
              , l = !1
              , u = r > 0
              , c = 0
              , d = 0;
            do {
                if (!s)
                    break;
                var h = Ju(t, s)
                  , p = h[0]
                  , f = h[1] - h[2] - o * p;
                (p || f) && Zu(t, s) && (c += f,
                d += p);
                var m = s.parentNode;
                s = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m
            } while (!a && s !== document.body || a && (e.contains(s) || e === s));
            return (u && Math.abs(c) < 1 || !u && Math.abs(d) < 1) && (l = !0),
            l
        }(p, e, t, "h" === p ? l : u)
    }, [])
      , u = t.useCallback(function(t) {
        var e = t;
        if (oc.length && oc[oc.length - 1] === s) {
            var i = "deltaY"in e ? tc(e) : Qu(e)
              , o = n.current.filter(function(t) {
                return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (n = t.delta,
                o = i,
                n[0] === o[0] && n[1] === o[1]);
                var n, o
            })[0];
            if (o && o.should)
                e.cancelable && e.preventDefault();
            else if (!o) {
                var r = (a.current.shards || []).map(ec).filter(Boolean).filter(function(t) {
                    return t.contains(e.target)
                });
                (r.length > 0 ? l(e, r[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault()
            }
        }
    }, [])
      , c = t.useCallback(function(t, e, i, o) {
        var r = {
            name: t,
            delta: e,
            target: i,
            should: o,
            shadowParent: rc(i)
        };
        n.current.push(r),
        setTimeout(function() {
            n.current = n.current.filter(function(t) {
                return t !== r
            })
        }, 1)
    }, [])
      , d = t.useCallback(function(t) {
        i.current = Qu(t),
        o.current = void 0
    }, [])
      , h = t.useCallback(function(t) {
        c(t.type, tc(t), t.target, l(t, e.lockRef.current))
    }, [])
      , p = t.useCallback(function(t) {
        c(t.type, Qu(t), t.target, l(t, e.lockRef.current))
    }, []);
    t.useEffect(function() {
        return oc.push(s),
        e.setCallbacks({
            onScrollCapture: h,
            onWheelCapture: h,
            onTouchMoveCapture: p
        }),
        document.addEventListener("wheel", u, Xu),
        document.addEventListener("touchmove", u, Xu),
        document.addEventListener("touchstart", d, Xu),
        function() {
            oc = oc.filter(function(t) {
                return t !== s
            }),
            document.removeEventListener("wheel", u, Xu),
            document.removeEventListener("touchmove", u, Xu),
            document.removeEventListener("touchstart", d, Xu)
        }
    }, []);
    var f = e.removeScrollBar
      , m = e.inert;
    return t.createElement(t.Fragment, null, m ? t.createElement(s, {
        styles: nc(r)
    }) : null, f ? t.createElement(Ku, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
,
Lu.useMedium(ac),
ku);
var ac, lc = t.forwardRef(function(e, n) {
    return t.createElement(ju, Eu({}, e, {
        ref: n,
        sideCar: sc
    }))
});
lc.classNames = ju.classNames;
var uc = "Dialog"
  , [cc] = sl(uc)
  , [dc,hc] = cc(uc)
  , pc = e=>{
    const {__scopeDialog: n, children: i, open: o, defaultOpen: r, onOpenChange: s, modal: a=!0} = e
      , l = t.useRef(null)
      , u = t.useRef(null)
      , [c,d] = cl({
        prop: o,
        defaultProp: r ?? !1,
        onChange: s,
        caller: uc
    });
    return f.jsx(dc, {
        scope: n,
        triggerRef: l,
        contentRef: u,
        contentId: Yl(),
        titleId: Yl(),
        descriptionId: Yl(),
        open: c,
        onOpenChange: d,
        onOpenToggle: t.useCallback(()=>d(t=>!t), [d]),
        modal: a,
        children: i
    })
}
;
pc.displayName = uc;
var fc = "DialogTrigger";
t.forwardRef((t,e)=>{
    const {__scopeDialog: n, ...i} = t
      , o = hc(fc, n)
      , r = rl(e, o.triggerRef);
    return f.jsx(ml.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Vc(o.open),
        ...i,
        ref: r,
        onClick: nl(t.onClick, o.onOpenToggle)
    })
}
).displayName = fc;
var mc = "DialogPortal"
  , [vc,gc] = cc(mc, {
    forceMount: void 0
})
  , yc = e=>{
    const {__scopeDialog: n, forceMount: i, children: o, container: r} = e
      , s = hc(mc, n);
    return f.jsx(vc, {
        scope: n,
        forceMount: i,
        children: t.Children.map(o, t=>f.jsx(Gl, {
            present: i || s.open,
            children: f.jsx(Xl, {
                asChild: !0,
                container: r,
                children: t
            })
        }))
    })
}
;
yc.displayName = mc;
var xc = "DialogOverlay"
  , wc = t.forwardRef((t,e)=>{
    const n = gc(xc, t.__scopeDialog)
      , {forceMount: i=n.forceMount, ...o} = t
      , r = hc(xc, t.__scopeDialog);
    return r.modal ? f.jsx(Gl, {
        present: i || r.open,
        children: f.jsx(Ec, {
            ...o,
            ref: e
        })
    }) : null
}
);
wc.displayName = xc;
var bc = dl("DialogOverlay.RemoveScroll")
  , Ec = t.forwardRef((t,e)=>{
    const {__scopeDialog: n, ...i} = t
      , o = hc(xc, n);
    return f.jsx(lc, {
        as: bc,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: f.jsx(ml.div, {
            "data-state": Vc(o.open),
            ...i,
            ref: e,
            style: {
                pointerEvents: "auto",
                ...i.style
            }
        })
    })
}
)
  , Pc = "DialogContent"
  , Tc = t.forwardRef((t,e)=>{
    const n = gc(Pc, t.__scopeDialog)
      , {forceMount: i=n.forceMount, ...o} = t
      , r = hc(Pc, t.__scopeDialog);
    return f.jsx(Gl, {
        present: i || r.open,
        children: r.modal ? f.jsx(Sc, {
            ...o,
            ref: e
        }) : f.jsx(Ac, {
            ...o,
            ref: e
        })
    })
}
);
Tc.displayName = Pc;
var Sc = t.forwardRef((e,n)=>{
    const i = hc(Pc, e.__scopeDialog)
      , o = t.useRef(null)
      , r = rl(n, i.contentRef, o);
    return t.useEffect(()=>{
        const t = o.current;
        if (t)
            return bu(t)
    }
    , []),
    f.jsx(Cc, {
        ...e,
        ref: r,
        trapFocus: i.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: nl(e.onCloseAutoFocus, t=>{
            var e;
            t.preventDefault(),
            null == (e = i.triggerRef.current) || e.focus()
        }
        ),
        onPointerDownOutside: nl(e.onPointerDownOutside, t=>{
            const e = t.detail.originalEvent
              , n = 0 === e.button && !0 === e.ctrlKey;
            (2 === e.button || n) && t.preventDefault()
        }
        ),
        onFocusOutside: nl(e.onFocusOutside, t=>t.preventDefault())
    })
}
)
  , Ac = t.forwardRef((e,n)=>{
    const i = hc(Pc, e.__scopeDialog)
      , o = t.useRef(!1)
      , r = t.useRef(!1);
    return f.jsx(Cc, {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: t=>{
            var n, s;
            null == (n = e.onCloseAutoFocus) || n.call(e, t),
            t.defaultPrevented || (o.current || null == (s = i.triggerRef.current) || s.focus(),
            t.preventDefault()),
            o.current = !1,
            r.current = !1
        }
        ,
        onInteractOutside: t=>{
            var n, s;
            null == (n = e.onInteractOutside) || n.call(e, t),
            t.defaultPrevented || (o.current = !0,
            "pointerdown" === t.detail.originalEvent.type && (r.current = !0));
            const a = t.target;
            (null == (s = i.triggerRef.current) ? void 0 : s.contains(a)) && t.preventDefault(),
            "focusin" === t.detail.originalEvent.type && r.current && t.preventDefault()
        }
    })
}
)
  , Cc = t.forwardRef((e,n)=>{
    const {__scopeDialog: i, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: s, ...a} = e
      , l = hc(Pc, i)
      , u = t.useRef(null)
      , c = rl(n, u);
    return Vl(),
    f.jsxs(f.Fragment, {
        children: [f.jsx(Bl, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: r,
            onUnmountAutoFocus: s,
            children: f.jsx(Al, {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": Vc(l.open),
                ...a,
                ref: c,
                onDismiss: ()=>l.onOpenChange(!1)
            })
        }), f.jsxs(f.Fragment, {
            children: [f.jsx(Ic, {
                titleId: l.titleId
            }), f.jsx(Bc, {
                contentRef: u,
                descriptionId: l.descriptionId
            })]
        })]
    })
}
)
  , Rc = "DialogTitle"
  , Dc = t.forwardRef((t,e)=>{
    const {__scopeDialog: n, ...i} = t
      , o = hc(Rc, n);
    return f.jsx(ml.h2, {
        id: o.titleId,
        ...i,
        ref: e
    })
}
);
Dc.displayName = Rc;
var Mc = "DialogDescription";
t.forwardRef((t,e)=>{
    const {__scopeDialog: n, ...i} = t
      , o = hc(Mc, n);
    return f.jsx(ml.p, {
        id: o.descriptionId,
        ...i,
        ref: e
    })
}
).displayName = Mc;
var kc = "DialogClose"
  , Lc = t.forwardRef((t,e)=>{
    const {__scopeDialog: n, ...i} = t
      , o = hc(kc, n);
    return f.jsx(ml.button, {
        type: "button",
        ...i,
        ref: e,
        onClick: nl(t.onClick, ()=>o.onOpenChange(!1))
    })
}
);
function Vc(t) {
    return t ? "open" : "closed"
}
Lc.displayName = kc;
var jc = "DialogTitleWarning"
  , [Fc,Oc] = function(e, n) {
    const i = t.createContext(n)
      , o = e=>{
        const {children: n, ...o} = e
          , r = t.useMemo(()=>o, Object.values(o));
        return f.jsx(i.Provider, {
            value: r,
            children: n
        })
    }
    ;
    return o.displayName = e + "Provider",
    [o, function(o) {
        const r = t.useContext(i);
        if (r)
            return r;
        if (void 0 !== n)
            return n;
        throw new Error(`\`${o}\` must be used within \`${e}\``)
    }
    ]
}(jc, {
    contentName: Pc,
    titleName: Rc,
    docsSlug: "dialog"
})
  , Ic = ({titleId: e})=>{
    const n = Oc(jc)
      , i = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
    return t.useEffect(()=>{
        if (e) {
            document.getElementById(e)
        }
    }
    , [i, e]),
    null
}
  , Bc = ({contentRef: e, descriptionId: n})=>{
    const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Oc("DialogDescriptionWarning").contentName}}.`;
    return t.useEffect(()=>{
        var t;
        const i = null == (t = e.current) ? void 0 : t.getAttribute("aria-describedby");
        if (n && i) {
            document.getElementById(n)
        }
    }
    , [i, e, n]),
    null
}
  , Nc = pc
  , Uc = yc
  , Wc = wc
  , _c = Tc
  , $c = Dc
  , zc = Lc;
export {R as A, kl as B, _c as C, Al as D, Ga as E, Bl as F, Qa as G, fu as I, Wc as O, ml as P, Ml as R, $c as T, sl as a, cl as b, gl as c, Gl as d, nl as e, wl as f, Xl as g, vl as h, ll as i, f as j, qa as k, tl as l, ya as m, ou as n, xl as o, bu as p, Vl as q, lc as r, dl as s, pu as t, rl as u, ol as v, Yl as w, Nc as x, Uc as y, zc as z};
