/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Vi = u(() => {
    window.tram = (function (e) {
      function t(l, I) {
        var w = new g.Bare();
        return w.init(l, I);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (I) {
          return "-" + I.toLowerCase();
        });
      }
      function n(l) {
        var I = parseInt(l.slice(1), 16),
          w = (I >> 16) & 255,
          R = (I >> 8) & 255,
          b = 255 & I;
        return [w, R, b];
      }
      function i(l, I, w) {
        return (
          "#" + ((1 << 24) | (l << 16) | (I << 8) | w).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, I) {
        d("Type warning: Expected: [" + l + "] Got: [" + typeof I + "] " + I);
      }
      function s(l, I, w) {
        d("Units do not match [" + l + "]: " + I + ", " + w);
      }
      function c(l, I, w) {
        if ((I !== void 0 && (w = I), l === void 0)) return w;
        var R = w;
        return (
          Ye.test(l) || !Ve.test(l)
            ? (R = parseInt(l, 10))
            : Ve.test(l) && (R = 1e3 * parseFloat(l)),
          0 > R && (R = 0),
          R === R ? R : w
        );
      }
      function d(l) {
        fe.debug && window && window.console.warn(l);
      }
      function _(l) {
        for (var I = -1, w = l ? l.length : 0, R = []; ++I < w; ) {
          var b = l[I];
          b && R.push(b);
        }
        return R;
      }
      var f = (function (l, I, w) {
          function R(ae) {
            return typeof ae == "object";
          }
          function b(ae) {
            return typeof ae == "function";
          }
          function x() {}
          function J(ae, _e) {
            function k() {
              var Me = new le();
              return b(Me.init) && Me.init.apply(Me, arguments), Me;
            }
            function le() {}
            _e === w && ((_e = ae), (ae = Object)), (k.Bare = le);
            var de,
              we = (x[l] = ae[l]),
              st = (le[l] = k[l] = new x());
            return (
              (st.constructor = k),
              (k.mixin = function (Me) {
                return (le[l] = k[l] = J(k, Me)[l]), k;
              }),
              (k.open = function (Me) {
                if (
                  ((de = {}),
                  b(Me) ? (de = Me.call(k, st, we, k, ae)) : R(Me) && (de = Me),
                  R(de))
                )
                  for (var Or in de) I.call(de, Or) && (st[Or] = de[Or]);
                return b(st.init) || (st.init = ae), k;
              }),
              k.open(_e)
            );
          }
          return J;
        })("prototype", {}.hasOwnProperty),
        m = {
          ease: [
            "ease",
            function (l, I, w, R) {
              var b = (l /= R) * l,
                x = b * l;
              return (
                I +
                w * (-2.75 * x * b + 11 * b * b + -15.5 * x + 8 * b + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, I, w, R) {
              var b = (l /= R) * l,
                x = b * l;
              return I + w * (-1 * x * b + 3 * b * b + -3 * x + 2 * b);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, I, w, R) {
              var b = (l /= R) * l,
                x = b * l;
              return (
                I +
                w * (0.3 * x * b + -1.6 * b * b + 2.2 * x + -1.8 * b + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, I, w, R) {
              var b = (l /= R) * l,
                x = b * l;
              return I + w * (2 * x * b + -5 * b * b + 2 * x + 2 * b);
            },
          ],
          linear: [
            "linear",
            function (l, I, w, R) {
              return (w * l) / R + I;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, I, w, R) {
              return w * (l /= R) * l + I;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, I, w, R) {
              return -w * (l /= R) * (l - 2) + I;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, I, w, R) {
              return (l /= R / 2) < 1
                ? (w / 2) * l * l + I
                : (-w / 2) * (--l * (l - 2) - 1) + I;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, I, w, R) {
              return w * (l /= R) * l * l + I;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, I, w, R) {
              return w * ((l = l / R - 1) * l * l + 1) + I;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, I, w, R) {
              return (l /= R / 2) < 1
                ? (w / 2) * l * l * l + I
                : (w / 2) * ((l -= 2) * l * l + 2) + I;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, I, w, R) {
              return w * (l /= R) * l * l * l + I;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, I, w, R) {
              return -w * ((l = l / R - 1) * l * l * l - 1) + I;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, I, w, R) {
              return (l /= R / 2) < 1
                ? (w / 2) * l * l * l * l + I
                : (-w / 2) * ((l -= 2) * l * l * l - 2) + I;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, I, w, R) {
              return w * (l /= R) * l * l * l * l + I;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, I, w, R) {
              return w * ((l = l / R - 1) * l * l * l * l + 1) + I;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, I, w, R) {
              return (l /= R / 2) < 1
                ? (w / 2) * l * l * l * l * l + I
                : (w / 2) * ((l -= 2) * l * l * l * l + 2) + I;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, I, w, R) {
              return -w * Math.cos((l / R) * (Math.PI / 2)) + w + I;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, I, w, R) {
              return w * Math.sin((l / R) * (Math.PI / 2)) + I;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, I, w, R) {
              return (-w / 2) * (Math.cos((Math.PI * l) / R) - 1) + I;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, I, w, R) {
              return l === 0 ? I : w * Math.pow(2, 10 * (l / R - 1)) + I;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, I, w, R) {
              return l === R
                ? I + w
                : w * (-Math.pow(2, (-10 * l) / R) + 1) + I;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, I, w, R) {
              return l === 0
                ? I
                : l === R
                ? I + w
                : (l /= R / 2) < 1
                ? (w / 2) * Math.pow(2, 10 * (l - 1)) + I
                : (w / 2) * (-Math.pow(2, -10 * --l) + 2) + I;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, I, w, R) {
              return -w * (Math.sqrt(1 - (l /= R) * l) - 1) + I;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, I, w, R) {
              return w * Math.sqrt(1 - (l = l / R - 1) * l) + I;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, I, w, R) {
              return (l /= R / 2) < 1
                ? (-w / 2) * (Math.sqrt(1 - l * l) - 1) + I
                : (w / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + I;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, I, w, R, b) {
              return (
                b === void 0 && (b = 1.70158),
                w * (l /= R) * l * ((b + 1) * l - b) + I
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, I, w, R, b) {
              return (
                b === void 0 && (b = 1.70158),
                w * ((l = l / R - 1) * l * ((b + 1) * l + b) + 1) + I
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, I, w, R, b) {
              return (
                b === void 0 && (b = 1.70158),
                (l /= R / 2) < 1
                  ? (w / 2) * l * l * (((b *= 1.525) + 1) * l - b) + I
                  : (w / 2) *
                      ((l -= 2) * l * (((b *= 1.525) + 1) * l + b) + 2) +
                    I
              );
            },
          ],
        },
        p = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        h = document,
        T = window,
        A = "bkwld-tram",
        S = /[\-\.0-9]/g,
        N = /[A-Z]/,
        O = "number",
        M = /^(rgb|#)/,
        D = /(em|cm|mm|in|pt|pc|px)$/,
        F = /(em|cm|mm|in|pt|pc|px|%)$/,
        W = /(deg|rad|turn)$/,
        z = "unitless",
        Q = /(all|none) 0s ease 0s/,
        oe = /^(width|height)$/,
        B = " ",
        L = h.createElement("a"),
        v = ["Webkit", "Moz", "O", "ms"],
        P = ["-webkit-", "-moz-", "-o-", "-ms-"],
        C = function (l) {
          if (l in L.style) return { dom: l, css: l };
          var I,
            w,
            R = "",
            b = l.split("-");
          for (I = 0; I < b.length; I++)
            R += b[I].charAt(0).toUpperCase() + b[I].slice(1);
          for (I = 0; I < v.length; I++)
            if (((w = v[I] + R), w in L.style))
              return { dom: w, css: P[I] + l };
        },
        G = (t.support = {
          bind: Function.prototype.bind,
          transform: C("transform"),
          transition: C("transition"),
          backface: C("backface-visibility"),
          timing: C("transition-timing-function"),
        });
      if (G.transition) {
        var K = G.timing.dom;
        if (((L.style[K] = m["ease-in-back"][0]), !L.style[K]))
          for (var te in p) m[te][0] = p[te];
      }
      var X = (t.frame = (function () {
          var l =
            T.requestAnimationFrame ||
            T.webkitRequestAnimationFrame ||
            T.mozRequestAnimationFrame ||
            T.oRequestAnimationFrame ||
            T.msRequestAnimationFrame;
          return l && G.bind
            ? l.bind(T)
            : function (I) {
                T.setTimeout(I, 16);
              };
        })()),
        V = (t.now = (function () {
          var l = T.performance,
            I = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return I && G.bind
            ? I.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        Y = f(function (l) {
          function I(ie, pe) {
            var Ie = _(("" + ie).split(B)),
              he = Ie[0];
            pe = pe || {};
            var Fe = j[he];
            if (!Fe) return d("Unsupported property: " + he);
            if (!pe.weak || !this.props[he]) {
              var $e = Fe[0],
                We = this.props[he];
              return (
                We || (We = this.props[he] = new $e.Bare()),
                We.init(this.$el, Ie, Fe, pe),
                We
              );
            }
          }
          function w(ie, pe, Ie) {
            if (ie) {
              var he = typeof ie;
              if (
                (pe ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                he == "number" && pe)
              )
                return (
                  (this.timer = new ne({
                    duration: ie,
                    context: this,
                    complete: x,
                  })),
                  void (this.active = !0)
                );
              if (he == "string" && pe) {
                switch (ie) {
                  case "hide":
                    k.call(this);
                    break;
                  case "stop":
                    J.call(this);
                    break;
                  case "redraw":
                    le.call(this);
                    break;
                  default:
                    I.call(this, ie, Ie && Ie[1]);
                }
                return x.call(this);
              }
              if (he == "function") return void ie.call(this, this);
              if (he == "object") {
                var Fe = 0;
                st.call(
                  this,
                  ie,
                  function (Se, wy) {
                    Se.span > Fe && (Fe = Se.span), Se.stop(), Se.animate(wy);
                  },
                  function (Se) {
                    "wait" in Se && (Fe = c(Se.wait, 0));
                  }
                ),
                  we.call(this),
                  Fe > 0 &&
                    ((this.timer = new ne({ duration: Fe, context: this })),
                    (this.active = !0),
                    pe && (this.timer.complete = x));
                var $e = this,
                  We = !1,
                  cn = {};
                X(function () {
                  st.call($e, ie, function (Se) {
                    Se.active && ((We = !0), (cn[Se.name] = Se.nextStyle));
                  }),
                    We && $e.$el.css(cn);
                });
              }
            }
          }
          function R(ie) {
            (ie = c(ie, 0)),
              this.active
                ? this.queue.push({ options: ie })
                : ((this.timer = new ne({
                    duration: ie,
                    context: this,
                    complete: x,
                  })),
                  (this.active = !0));
          }
          function b(ie) {
            return this.active
              ? (this.queue.push({ options: ie, args: arguments }),
                void (this.timer.complete = x))
              : d(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function x() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ie = this.queue.shift();
              w.call(this, ie.options, !0, ie.args);
            }
          }
          function J(ie) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var pe;
            typeof ie == "string"
              ? ((pe = {}), (pe[ie] = 1))
              : (pe = typeof ie == "object" && ie != null ? ie : this.props),
              st.call(this, pe, Me),
              we.call(this);
          }
          function ae(ie) {
            J.call(this, ie), st.call(this, ie, Or, by);
          }
          function _e(ie) {
            typeof ie != "string" && (ie = "block"),
              (this.el.style.display = ie);
          }
          function k() {
            J.call(this), (this.el.style.display = "none");
          }
          function le() {
            this.el.offsetHeight;
          }
          function de() {
            J.call(this), e.removeData(this.el, A), (this.$el = this.el = null);
          }
          function we() {
            var ie,
              pe,
              Ie = [];
            this.upstream && Ie.push(this.upstream);
            for (ie in this.props)
              (pe = this.props[ie]), pe.active && Ie.push(pe.string);
            (Ie = Ie.join(",")),
              this.style !== Ie &&
                ((this.style = Ie), (this.el.style[G.transition.dom] = Ie));
          }
          function st(ie, pe, Ie) {
            var he,
              Fe,
              $e,
              We,
              cn = pe !== Me,
              Se = {};
            for (he in ie)
              ($e = ie[he]),
                he in ve
                  ? (Se.transform || (Se.transform = {}),
                    (Se.transform[he] = $e))
                  : (N.test(he) && (he = r(he)),
                    he in j ? (Se[he] = $e) : (We || (We = {}), (We[he] = $e)));
            for (he in Se) {
              if ((($e = Se[he]), (Fe = this.props[he]), !Fe)) {
                if (!cn) continue;
                Fe = I.call(this, he);
              }
              pe.call(this, Fe, $e);
            }
            Ie && We && Ie.call(this, We);
          }
          function Me(ie) {
            ie.stop();
          }
          function Or(ie, pe) {
            ie.set(pe);
          }
          function by(ie) {
            this.$el.css(ie);
          }
          function Qe(ie, pe) {
            l[ie] = function () {
              return this.children
                ? Oy.call(this, pe, arguments)
                : (this.el && pe.apply(this, arguments), this);
            };
          }
          function Oy(ie, pe) {
            var Ie,
              he = this.children.length;
            for (Ie = 0; he > Ie; Ie++) ie.apply(this.children[Ie], pe);
            return this;
          }
          (l.init = function (ie) {
            if (
              ((this.$el = e(ie)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              fe.keepInherited && !fe.fallback)
            ) {
              var pe = H(this.el, "transition");
              pe && !Q.test(pe) && (this.upstream = pe);
            }
            G.backface &&
              fe.hideBackface &&
              E(this.el, G.backface.css, "hidden");
          }),
            Qe("add", I),
            Qe("start", w),
            Qe("wait", R),
            Qe("then", b),
            Qe("next", x),
            Qe("stop", J),
            Qe("set", ae),
            Qe("show", _e),
            Qe("hide", k),
            Qe("redraw", le),
            Qe("destroy", de);
        }),
        g = f(Y, function (l) {
          function I(w, R) {
            var b = e.data(w, A) || e.data(w, A, new Y.Bare());
            return b.el || b.init(w), R ? b.start(R) : b;
          }
          l.init = function (w, R) {
            var b = e(w);
            if (!b.length) return this;
            if (b.length === 1) return I(b[0], R);
            var x = [];
            return (
              b.each(function (J, ae) {
                x.push(I(ae, R));
              }),
              (this.children = x),
              this
            );
          };
        }),
        y = f(function (l) {
          function I() {
            var x = this.get();
            this.update("auto");
            var J = this.get();
            return this.update(x), J;
          }
          function w(x, J, ae) {
            return J !== void 0 && (ae = J), x in m ? x : ae;
          }
          function R(x) {
            var J = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(x);
            return (J ? i(J[1], J[2], J[3]) : x).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var b = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (x, J, ae, _e) {
            (this.$el = x), (this.el = x[0]);
            var k = J[0];
            ae[2] && (k = ae[2]),
              $[k] && (k = $[k]),
              (this.name = k),
              (this.type = ae[1]),
              (this.duration = c(J[1], this.duration, b.duration)),
              (this.ease = w(J[2], this.ease, b.ease)),
              (this.delay = c(J[3], this.delay, b.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = oe.test(this.name)),
              (this.unit = _e.unit || this.unit || fe.defaultUnit),
              (this.angle = _e.angle || this.angle || fe.defaultAngle),
              fe.fallback || _e.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    B +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? B + m[this.ease][0] : "") +
                    (this.delay ? B + this.delay + "ms" : "")));
          }),
            (l.set = function (x) {
              (x = this.convert(x, this.type)), this.update(x), this.redraw();
            }),
            (l.transition = function (x) {
              (this.active = !0),
                (x = this.convert(x, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  x == "auto" && (x = I.call(this))),
                (this.nextStyle = x);
            }),
            (l.fallback = function (x) {
              var J =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (x = this.convert(x, this.type)),
                this.auto &&
                  (J == "auto" && (J = this.convert(this.get(), this.type)),
                  x == "auto" && (x = I.call(this))),
                (this.tween = new Z({
                  from: J,
                  to: x,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return H(this.el, this.name);
            }),
            (l.update = function (x) {
              E(this.el, this.name, x);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                E(this.el, this.name, this.get()));
              var x = this.tween;
              x && x.context && x.destroy();
            }),
            (l.convert = function (x, J) {
              if (x == "auto" && this.auto) return x;
              var ae,
                _e = typeof x == "number",
                k = typeof x == "string";
              switch (J) {
                case O:
                  if (_e) return x;
                  if (k && x.replace(S, "") === "") return +x;
                  ae = "number(unitless)";
                  break;
                case M:
                  if (k) {
                    if (x === "" && this.original) return this.original;
                    if (J.test(x))
                      return x.charAt(0) == "#" && x.length == 7 ? x : R(x);
                  }
                  ae = "hex or rgb string";
                  break;
                case D:
                  if (_e) return x + this.unit;
                  if (k && J.test(x)) return x;
                  ae = "number(px) or string(unit)";
                  break;
                case F:
                  if (_e) return x + this.unit;
                  if (k && J.test(x)) return x;
                  ae = "number(px) or string(unit or %)";
                  break;
                case W:
                  if (_e) return x + this.angle;
                  if (k && J.test(x)) return x;
                  ae = "number(deg) or string(angle)";
                  break;
                case z:
                  if (_e || (k && F.test(x))) return x;
                  ae = "number(unitless) or string(unit or %)";
              }
              return a(ae, x), x;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        U = f(y, function (l, I) {
          l.init = function () {
            I.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), M));
          };
        }),
        ee = f(y, function (l, I) {
          (l.init = function () {
            I.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (w) {
              this.$el[this.name](w);
            });
        }),
        re = f(y, function (l, I) {
          function w(R, b) {
            var x, J, ae, _e, k;
            for (x in R)
              (_e = ve[x]),
                (ae = _e[0]),
                (J = _e[1] || x),
                (k = this.convert(R[x], ae)),
                b.call(this, J, k, ae);
          }
          (l.init = function () {
            I.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                ve.perspective &&
                  fe.perspective &&
                  ((this.current.perspective = fe.perspective),
                  E(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (R) {
              w.call(this, R, function (b, x) {
                this.current[b] = x;
              }),
                E(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (R) {
              var b = this.values(R);
              this.tween = new be({
                current: this.current,
                values: b,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var x,
                J = {};
              for (x in this.current) J[x] = x in b ? b[x] : this.current[x];
              (this.active = !0), (this.nextStyle = this.style(J));
            }),
            (l.fallback = function (R) {
              var b = this.values(R);
              this.tween = new be({
                current: this.current,
                values: b,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              E(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (R) {
              var b,
                x = "";
              for (b in R) x += b + "(" + R[b] + ") ";
              return x;
            }),
            (l.values = function (R) {
              var b,
                x = {};
              return (
                w.call(this, R, function (J, ae, _e) {
                  (x[J] = ae),
                    this.current[J] === void 0 &&
                      ((b = 0),
                      ~J.indexOf("scale") && (b = 1),
                      (this.current[J] = this.convert(b, _e)));
                }),
                x
              );
            });
        }),
        Z = f(function (l) {
          function I(k) {
            ae.push(k) === 1 && X(w);
          }
          function w() {
            var k,
              le,
              de,
              we = ae.length;
            if (we)
              for (X(w), le = V(), k = we; k--; )
                (de = ae[k]), de && de.render(le);
          }
          function R(k) {
            var le,
              de = e.inArray(k, ae);
            de >= 0 &&
              ((le = ae.slice(de + 1)),
              (ae.length = de),
              le.length && (ae = ae.concat(le)));
          }
          function b(k) {
            return Math.round(k * _e) / _e;
          }
          function x(k, le, de) {
            return i(
              k[0] + de * (le[0] - k[0]),
              k[1] + de * (le[1] - k[1]),
              k[2] + de * (le[2] - k[2])
            );
          }
          var J = { ease: m.ease[1], from: 0, to: 1 };
          (l.init = function (k) {
            (this.duration = k.duration || 0), (this.delay = k.delay || 0);
            var le = k.ease || J.ease;
            m[le] && (le = m[le][1]),
              typeof le != "function" && (le = J.ease),
              (this.ease = le),
              (this.update = k.update || o),
              (this.complete = k.complete || o),
              (this.context = k.context || this),
              (this.name = k.name);
            var de = k.from,
              we = k.to;
            de === void 0 && (de = J.from),
              we === void 0 && (we = J.to),
              (this.unit = k.unit || ""),
              typeof de == "number" && typeof we == "number"
                ? ((this.begin = de), (this.change = we - de))
                : this.format(we, de),
              (this.value = this.begin + this.unit),
              (this.start = V()),
              k.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = V()), (this.active = !0), I(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), R(this));
            }),
            (l.render = function (k) {
              var le,
                de = k - this.start;
              if (this.delay) {
                if (de <= this.delay) return;
                de -= this.delay;
              }
              if (de < this.duration) {
                var we = this.ease(de, 0, 1, this.duration);
                return (
                  (le = this.startRGB
                    ? x(this.startRGB, this.endRGB, we)
                    : b(this.begin + we * this.change)),
                  (this.value = le + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (le = this.endHex || this.begin + this.change),
                (this.value = le + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (k, le) {
              if (((le += ""), (k += ""), k.charAt(0) == "#"))
                return (
                  (this.startRGB = n(le)),
                  (this.endRGB = n(k)),
                  (this.endHex = k),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var de = le.replace(S, ""),
                  we = k.replace(S, "");
                de !== we && s("tween", le, k), (this.unit = de);
              }
              (le = parseFloat(le)),
                (k = parseFloat(k)),
                (this.begin = this.value = le),
                (this.change = k - le);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ae = [],
            _e = 1e3;
        }),
        ne = f(Z, function (l) {
          (l.init = function (I) {
            (this.duration = I.duration || 0),
              (this.complete = I.complete || o),
              (this.context = I.context),
              this.play();
          }),
            (l.render = function (I) {
              var w = I - this.start;
              w < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        be = f(Z, function (l, I) {
          (l.init = function (w) {
            (this.context = w.context),
              (this.update = w.update),
              (this.tweens = []),
              (this.current = w.current);
            var R, b;
            for (R in w.values)
              (b = w.values[R]),
                this.current[R] !== b &&
                  this.tweens.push(
                    new Z({
                      name: R,
                      from: this.current[R],
                      to: b,
                      duration: w.duration,
                      delay: w.delay,
                      ease: w.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (w) {
              var R,
                b,
                x = this.tweens.length,
                J = !1;
              for (R = x; R--; )
                (b = this.tweens[R]),
                  b.context &&
                    (b.render(w), (this.current[b.name] = b.value), (J = !0));
              return J
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((I.destroy.call(this), this.tweens)) {
                var w,
                  R = this.tweens.length;
                for (w = R; w--; ) this.tweens[w].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        fe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !G.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!G.transition) return (fe.fallback = !0);
        fe.agentTests.push("(" + l + ")");
        var I = new RegExp(fe.agentTests.join("|"), "i");
        fe.fallback = I.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new Z(l);
        }),
        (t.delay = function (l, I, w) {
          return new ne({ complete: I, duration: l, context: w });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var E = e.style,
        H = e.css,
        $ = { transform: G.transform && G.transform.css },
        j = {
          color: [U, M],
          background: [U, M, "background-color"],
          "outline-color": [U, M],
          "border-color": [U, M],
          "border-top-color": [U, M],
          "border-right-color": [U, M],
          "border-bottom-color": [U, M],
          "border-left-color": [U, M],
          "border-width": [y, D],
          "border-top-width": [y, D],
          "border-right-width": [y, D],
          "border-bottom-width": [y, D],
          "border-left-width": [y, D],
          "border-spacing": [y, D],
          "letter-spacing": [y, D],
          margin: [y, D],
          "margin-top": [y, D],
          "margin-right": [y, D],
          "margin-bottom": [y, D],
          "margin-left": [y, D],
          padding: [y, D],
          "padding-top": [y, D],
          "padding-right": [y, D],
          "padding-bottom": [y, D],
          "padding-left": [y, D],
          "outline-width": [y, D],
          opacity: [y, O],
          top: [y, F],
          right: [y, F],
          bottom: [y, F],
          left: [y, F],
          "font-size": [y, F],
          "text-indent": [y, F],
          "word-spacing": [y, F],
          width: [y, F],
          "min-width": [y, F],
          "max-width": [y, F],
          height: [y, F],
          "min-height": [y, F],
          "max-height": [y, F],
          "line-height": [y, z],
          "scroll-top": [ee, O, "scrollTop"],
          "scroll-left": [ee, O, "scrollLeft"],
        },
        ve = {};
      G.transform &&
        ((j.transform = [re]),
        (ve = {
          x: [F, "translateX"],
          y: [F, "translateY"],
          rotate: [W],
          rotateX: [W],
          rotateY: [W],
          scale: [O],
          scaleX: [O],
          scaleY: [O],
          skew: [W],
          skewX: [W],
          skewY: [W],
        })),
        G.transform &&
          G.backface &&
          ((ve.z = [F, "translateZ"]),
          (ve.rotateZ = [W]),
          (ve.scaleZ = [O]),
          (ve.perspective = [D]));
      var Ye = /ms/,
        Ve = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Rs = u((VW, As) => {
    var Sy = window.$,
      Ay = Vi() && Sy.tram;
    As.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        d = n.hasOwnProperty,
        _ = r.forEach,
        f = r.map,
        m = r.reduce,
        p = r.reduceRight,
        h = r.filter,
        T = r.every,
        A = r.some,
        S = r.indexOf,
        N = r.lastIndexOf,
        O = Array.isArray,
        M = Object.keys,
        D = i.bind,
        F =
          (e.each =
          e.forEach =
            function (v, P, C) {
              if (v == null) return v;
              if (_ && v.forEach === _) v.forEach(P, C);
              else if (v.length === +v.length) {
                for (var G = 0, K = v.length; G < K; G++)
                  if (P.call(C, v[G], G, v) === t) return;
              } else
                for (var te = e.keys(v), G = 0, K = te.length; G < K; G++)
                  if (P.call(C, v[te[G]], te[G], v) === t) return;
              return v;
            });
      (e.map = e.collect =
        function (v, P, C) {
          var G = [];
          return v == null
            ? G
            : f && v.map === f
            ? v.map(P, C)
            : (F(v, function (K, te, X) {
                G.push(P.call(C, K, te, X));
              }),
              G);
        }),
        (e.find = e.detect =
          function (v, P, C) {
            var G;
            return (
              W(v, function (K, te, X) {
                if (P.call(C, K, te, X)) return (G = K), !0;
              }),
              G
            );
          }),
        (e.filter = e.select =
          function (v, P, C) {
            var G = [];
            return v == null
              ? G
              : h && v.filter === h
              ? v.filter(P, C)
              : (F(v, function (K, te, X) {
                  P.call(C, K, te, X) && G.push(K);
                }),
                G);
          });
      var W =
        (e.some =
        e.any =
          function (v, P, C) {
            P || (P = e.identity);
            var G = !1;
            return v == null
              ? G
              : A && v.some === A
              ? v.some(P, C)
              : (F(v, function (K, te, X) {
                  if (G || (G = P.call(C, K, te, X))) return t;
                }),
                !!G);
          });
      (e.contains = e.include =
        function (v, P) {
          return v == null
            ? !1
            : S && v.indexOf === S
            ? v.indexOf(P) != -1
            : W(v, function (C) {
                return C === P;
              });
        }),
        (e.delay = function (v, P) {
          var C = a.call(arguments, 2);
          return setTimeout(function () {
            return v.apply(null, C);
          }, P);
        }),
        (e.defer = function (v) {
          return e.delay.apply(e, [v, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (v) {
          var P, C, G;
          return function () {
            P ||
              ((P = !0),
              (C = arguments),
              (G = this),
              Ay.frame(function () {
                (P = !1), v.apply(G, C);
              }));
          };
        }),
        (e.debounce = function (v, P, C) {
          var G,
            K,
            te,
            X,
            V,
            Y = function () {
              var g = e.now() - X;
              g < P
                ? (G = setTimeout(Y, P - g))
                : ((G = null), C || ((V = v.apply(te, K)), (te = K = null)));
            };
          return function () {
            (te = this), (K = arguments), (X = e.now());
            var g = C && !G;
            return (
              G || (G = setTimeout(Y, P)),
              g && ((V = v.apply(te, K)), (te = K = null)),
              V
            );
          };
        }),
        (e.defaults = function (v) {
          if (!e.isObject(v)) return v;
          for (var P = 1, C = arguments.length; P < C; P++) {
            var G = arguments[P];
            for (var K in G) v[K] === void 0 && (v[K] = G[K]);
          }
          return v;
        }),
        (e.keys = function (v) {
          if (!e.isObject(v)) return [];
          if (M) return M(v);
          var P = [];
          for (var C in v) e.has(v, C) && P.push(C);
          return P;
        }),
        (e.has = function (v, P) {
          return d.call(v, P);
        }),
        (e.isObject = function (v) {
          return v === Object(v);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var z = /(.)^/,
        Q = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        oe = /\\|'|\r|\n|\u2028|\u2029/g,
        B = function (v) {
          return "\\" + Q[v];
        },
        L = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (v, P, C) {
          !P && C && (P = C), (P = e.defaults({}, P, e.templateSettings));
          var G = RegExp(
              [
                (P.escape || z).source,
                (P.interpolate || z).source,
                (P.evaluate || z).source,
              ].join("|") + "|$",
              "g"
            ),
            K = 0,
            te = "__p+='";
          v.replace(G, function (g, y, U, ee, re) {
            return (
              (te += v.slice(K, re).replace(oe, B)),
              (K = re + g.length),
              y
                ? (te +=
                    `'+
((__t=(` +
                    y +
                    `))==null?'':_.escape(__t))+
'`)
                : U
                ? (te +=
                    `'+
((__t=(` +
                    U +
                    `))==null?'':__t)+
'`)
                : ee &&
                  (te +=
                    `';
` +
                    ee +
                    `
__p+='`),
              g
            );
          }),
            (te += `';
`);
          var X = P.variable;
          if (X) {
            if (!L.test(X))
              throw new Error("variable is not a bare identifier: " + X);
          } else
            (te =
              `with(obj||{}){
` +
              te +
              `}
`),
              (X = "obj");
          te =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            te +
            `return __p;
`;
          var V;
          try {
            V = new Function(P.variable || "obj", "_", te);
          } catch (g) {
            throw ((g.source = te), g);
          }
          var Y = function (g) {
            return V.call(this, g, e);
          };
          return (
            (Y.source =
              "function(" +
              X +
              `){
` +
              te +
              "}"),
            Y
          );
        }),
        e
      );
    })();
  });
  var Be = u((WW, Ms) => {
    var ge = {},
      Kt = {},
      zt = [],
      Bi = window.Webflow || [],
      Tt = window.jQuery,
      Je = Tt(window),
      Ry = Tt(document),
      ut = Tt.isFunction,
      Ze = (ge._ = Rs()),
      xs = (ge.tram = Vi() && Tt.tram),
      fn = !1,
      Hi = !1;
    xs.config.hideBackface = !1;
    xs.config.keepInherited = !0;
    ge.define = function (e, t, r) {
      Kt[e] && qs(Kt[e]);
      var n = (Kt[e] = t(Tt, Ze, r) || {});
      return Ns(n), n;
    };
    ge.require = function (e) {
      return Kt[e];
    };
    function Ns(e) {
      ge.env() &&
        (ut(e.design) && Je.on("__wf_design", e.design),
        ut(e.preview) && Je.on("__wf_preview", e.preview)),
        ut(e.destroy) && Je.on("__wf_destroy", e.destroy),
        e.ready && ut(e.ready) && Cy(e);
    }
    function Cy(e) {
      if (fn) {
        e.ready();
        return;
      }
      Ze.contains(zt, e.ready) || zt.push(e.ready);
    }
    function qs(e) {
      ut(e.design) && Je.off("__wf_design", e.design),
        ut(e.preview) && Je.off("__wf_preview", e.preview),
        ut(e.destroy) && Je.off("__wf_destroy", e.destroy),
        e.ready && ut(e.ready) && xy(e);
    }
    function xy(e) {
      zt = Ze.filter(zt, function (t) {
        return t !== e.ready;
      });
    }
    ge.push = function (e) {
      if (fn) {
        ut(e) && e();
        return;
      }
      Bi.push(e);
    };
    ge.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var ln = navigator.userAgent.toLowerCase(),
      Ls = (ge.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      Ny = (ge.env.chrome =
        /chrome/.test(ln) &&
        /Google/.test(navigator.vendor) &&
        parseInt(ln.match(/chrome\/(\d+)\./)[1], 10)),
      qy = (ge.env.ios = /(ipod|iphone|ipad)/.test(ln));
    ge.env.safari = /safari/.test(ln) && !Ny && !qy;
    var Wi;
    Ls &&
      Ry.on("touchstart mousedown", function (e) {
        Wi = e.target;
      });
    ge.validClick = Ls
      ? function (e) {
          return e === Wi || Tt.contains(e, Wi);
        }
      : function () {
          return !0;
        };
    var Ps = "resize.webflow orientationchange.webflow load.webflow",
      Ly = "scroll.webflow " + Ps;
    ge.resize = ki(Je, Ps);
    ge.scroll = ki(Je, Ly);
    ge.redraw = ki();
    function ki(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Ze.throttle(function (i) {
          Ze.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Ze.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Ze.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ge.location = function (e) {
      window.location = e;
    };
    ge.env() && (ge.location = function () {});
    ge.ready = function () {
      (fn = !0), Hi ? Py() : Ze.each(zt, Cs), Ze.each(Bi, Cs), ge.resize.up();
    };
    function Cs(e) {
      ut(e) && e();
    }
    function Py() {
      (Hi = !1), Ze.each(Kt, Ns);
    }
    var Pt;
    ge.load = function (e) {
      Pt.then(e);
    };
    function Ds() {
      Pt && (Pt.reject(), Je.off("load", Pt.resolve)),
        (Pt = new Tt.Deferred()),
        Je.on("load", Pt.resolve);
    }
    ge.destroy = function (e) {
      (e = e || {}),
        (Hi = !0),
        Je.triggerHandler("__wf_destroy"),
        e.domready != null && (fn = e.domready),
        Ze.each(Kt, qs),
        ge.resize.off(),
        ge.scroll.off(),
        ge.redraw.off(),
        (zt = []),
        (Bi = []),
        Pt.state() === "pending" && Ds();
    };
    Tt(ge.ready);
    Ds();
    Ms.exports = window.Webflow = ge;
  });
  var Xs = u((BW, Gs) => {
    var Fs = Be();
    Fs.define(
      "brand",
      (Gs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          d;
        t.ready = function () {
          var p = n.attr("data-wf-status"),
            h = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(h) && a.hostname !== h && (p = !0),
            p &&
              !s &&
              ((d = d || f()),
              m(),
              setTimeout(m, 500),
              e(r).off(c, _).on(c, _));
        };
        function _() {
          var p =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(d).attr("style", p ? "display: none !important;" : "");
        }
        // function f() {
        //   var p = e('<a class="w-webflow-badge"></a>').attr(
        //       "href",
        //       "https://webflow.com?utm_campaign=brandjs"
        //     ),
        //     h = e("<img>")
        //       .attr(
        //         "src",
        //         "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg"
        //       )
        //       .attr("alt", "")
        //       .css({ marginRight: "8px", width: "16px" }),
        //     T = e("<img>")
        //       .attr(
        //         "src",
        //         "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
        //       )
        //       .attr("alt", "Made in Webflow");
        //   return p.append(h, T), p[0];
        // }
        function m() {
          var p = i.children(o),
            h = p.length && p.get(0) === d,
            T = Fs.env("editor");
          if (h) {
            T && p.remove();
            return;
          }
          p.length && p.remove(), T || i.append(d);
        }
        return t;
      })
    );
  });
  var Vs = u((HW, Us) => {
    var ji = Be();
    ji.define(
      "edit",
      (Us.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (ji.env("test") || ji.env("frame")) && !r.fixture && !Dy())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          c,
          d = r.load || m,
          _ = !1;
        try {
          _ =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        _
          ? d()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            d()
          : i.on(s, f).triggerHandler(s);
        function f() {
          c || (/\?edit/.test(a.hash) && d());
        }
        function m() {
          (c = !0),
            (window.WebflowEditor = !0),
            i.off(s, f),
            N(function (M) {
              e.ajax({
                url: S("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: p(M),
              });
            });
        }
        function p(M) {
          return function (D) {
            if (!D) {
              console.error("Could not load editor data");
              return;
            }
            (D.thirdPartyCookiesSupported = M),
              h(A(D.bugReporterScriptPath), function () {
                h(A(D.scriptPath), function () {
                  window.WebflowEditor(D);
                });
              });
          };
        }
        function h(M, D) {
          e.ajax({ type: "GET", url: M, dataType: "script", cache: !0 }).then(
            D,
            T
          );
        }
        function T(M, D, F) {
          throw (console.error("Could not load editor script: " + D), F);
        }
        function A(M) {
          return M.indexOf("//") >= 0
            ? M
            : S("https://editor-api.webflow.com" + M);
        }
        function S(M) {
          return M.replace(/([^:])\/\//g, "$1/");
        }
        function N(M) {
          var D = window.document.createElement("iframe");
          (D.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (D.style.display = "none"),
            (D.sandbox = "allow-scripts allow-same-origin");
          var F = function (W) {
            W.data === "WF_third_party_cookies_unsupported"
              ? (O(D, F), M(!1))
              : W.data === "WF_third_party_cookies_supported" &&
                (O(D, F), M(!0));
          };
          (D.onerror = function () {
            O(D, F), M(!1);
          }),
            window.addEventListener("message", F, !1),
            window.document.body.appendChild(D);
        }
        function O(M, D) {
          window.removeEventListener("message", D, !1), M.remove();
        }
        return n;
      })
    );
    function Dy() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Bs = u((kW, Ws) => {
    var My = Be();
    My.define(
      "focus-visible",
      (Ws.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(O) {
            return !!(
              O &&
              O !== document &&
              O.nodeName !== "HTML" &&
              O.nodeName !== "BODY" &&
              "classList" in O &&
              "contains" in O.classList
            );
          }
          function c(O) {
            var M = O.type,
              D = O.tagName;
            return !!(
              (D === "INPUT" && a[M] && !O.readOnly) ||
              (D === "TEXTAREA" && !O.readOnly) ||
              O.isContentEditable
            );
          }
          function d(O) {
            O.getAttribute("data-wf-focus-visible") ||
              O.setAttribute("data-wf-focus-visible", "true");
          }
          function _(O) {
            O.getAttribute("data-wf-focus-visible") &&
              O.removeAttribute("data-wf-focus-visible");
          }
          function f(O) {
            O.metaKey ||
              O.altKey ||
              O.ctrlKey ||
              (s(r.activeElement) && d(r.activeElement), (n = !0));
          }
          function m() {
            n = !1;
          }
          function p(O) {
            s(O.target) && (n || c(O.target)) && d(O.target);
          }
          function h(O) {
            s(O.target) &&
              O.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              _(O.target));
          }
          function T() {
            document.visibilityState === "hidden" && (i && (n = !0), A());
          }
          function A() {
            document.addEventListener("mousemove", N),
              document.addEventListener("mousedown", N),
              document.addEventListener("mouseup", N),
              document.addEventListener("pointermove", N),
              document.addEventListener("pointerdown", N),
              document.addEventListener("pointerup", N),
              document.addEventListener("touchmove", N),
              document.addEventListener("touchstart", N),
              document.addEventListener("touchend", N);
          }
          function S() {
            document.removeEventListener("mousemove", N),
              document.removeEventListener("mousedown", N),
              document.removeEventListener("mouseup", N),
              document.removeEventListener("pointermove", N),
              document.removeEventListener("pointerdown", N),
              document.removeEventListener("pointerup", N),
              document.removeEventListener("touchmove", N),
              document.removeEventListener("touchstart", N),
              document.removeEventListener("touchend", N);
          }
          function N(O) {
            (O.target.nodeName && O.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), S());
          }
          document.addEventListener("keydown", f, !0),
            document.addEventListener("mousedown", m, !0),
            document.addEventListener("pointerdown", m, !0),
            document.addEventListener("touchstart", m, !0),
            document.addEventListener("visibilitychange", T, !0),
            A(),
            r.addEventListener("focus", p, !0),
            r.addEventListener("blur", h, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var js = u((jW, ks) => {
    var Hs = Be();
    Hs.define(
      "focus",
      (ks.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Hs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Ys = u((KW, zs) => {
    "use strict";
    var Ki = window.jQuery,
      ct = {},
      dn = [],
      Ks = ".w-ix",
      pn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Ki(t).triggerHandler(ct.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Ki(t).triggerHandler(ct.types.OUTRO));
        },
      };
    ct.triggers = {};
    ct.types = { INTRO: "w-ix-intro" + Ks, OUTRO: "w-ix-outro" + Ks };
    ct.init = function () {
      for (var e = dn.length, t = 0; t < e; t++) {
        var r = dn[t];
        r[0](0, r[1]);
      }
      (dn = []), Ki.extend(ct.triggers, pn);
    };
    ct.async = function () {
      for (var e in pn) {
        var t = pn[e];
        pn.hasOwnProperty(e) &&
          (ct.triggers[e] = function (r, n) {
            dn.push([t, n]);
          });
      }
    };
    ct.async();
    zs.exports = ct;
  });
  var hn = u((zW, Zs) => {
    "use strict";
    var zi = Ys();
    function Qs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var Fy = window.jQuery,
      vn = {},
      $s = ".w-ix",
      Gy = {
        reset: function (e, t) {
          zi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          zi.triggers.intro(e, t), Qs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          zi.triggers.outro(e, t), Qs(t, "COMPONENT_INACTIVE");
        },
      };
    vn.triggers = {};
    vn.types = { INTRO: "w-ix-intro" + $s, OUTRO: "w-ix-outro" + $s };
    Fy.extend(vn.triggers, Gy);
    Zs.exports = vn;
  });
  var Js = u((YW, Et) => {
    function Yi(e) {
      return (
        (Et.exports = Yi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (Et.exports.__esModule = !0),
        (Et.exports.default = Et.exports),
        Yi(e)
      );
    }
    (Et.exports = Yi),
      (Et.exports.__esModule = !0),
      (Et.exports.default = Et.exports);
  });
  var Dt = u((QW, wr) => {
    var Xy = Js().default;
    function eu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (eu = function (i) {
        return i ? r : t;
      })(e);
    }
    function Uy(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (Xy(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = eu(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (wr.exports = Uy),
      (wr.exports.__esModule = !0),
      (wr.exports.default = wr.exports);
  });
  var et = u(($W, Sr) => {
    function Vy(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Sr.exports = Vy),
      (Sr.exports.__esModule = !0),
      (Sr.exports.default = Sr.exports);
  });
  var ye = u((ZW, tu) => {
    var gn = function (e) {
      return e && e.Math == Math && e;
    };
    tu.exports =
      gn(typeof globalThis == "object" && globalThis) ||
      gn(typeof window == "object" && window) ||
      gn(typeof self == "object" && self) ||
      gn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Yt = u((JW, ru) => {
    ru.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Mt = u((eB, nu) => {
    var Wy = Yt();
    nu.exports = !Wy(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var En = u((tB, iu) => {
    var Ar = Function.prototype.call;
    iu.exports = Ar.bind
      ? Ar.bind(Ar)
      : function () {
          return Ar.apply(Ar, arguments);
        };
  });
  var uu = u((su) => {
    "use strict";
    var ou = {}.propertyIsEnumerable,
      au = Object.getOwnPropertyDescriptor,
      By = au && !ou.call({ 1: 2 }, 1);
    su.f = By
      ? function (t) {
          var r = au(this, t);
          return !!r && r.enumerable;
        }
      : ou;
  });
  var Qi = u((nB, cu) => {
    cu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var tt = u((iB, fu) => {
    var lu = Function.prototype,
      $i = lu.bind,
      Zi = lu.call,
      Hy = $i && $i.bind(Zi);
    fu.exports = $i
      ? function (e) {
          return e && Hy(Zi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Zi.apply(e, arguments);
            }
          );
        };
  });
  var vu = u((oB, pu) => {
    var du = tt(),
      ky = du({}.toString),
      jy = du("".slice);
    pu.exports = function (e) {
      return jy(ky(e), 8, -1);
    };
  });
  var gu = u((aB, hu) => {
    var Ky = ye(),
      zy = tt(),
      Yy = Yt(),
      Qy = vu(),
      Ji = Ky.Object,
      $y = zy("".split);
    hu.exports = Yy(function () {
      return !Ji("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return Qy(e) == "String" ? $y(e, "") : Ji(e);
        }
      : Ji;
  });
  var eo = u((sB, Eu) => {
    var Zy = ye(),
      Jy = Zy.TypeError;
    Eu.exports = function (e) {
      if (e == null) throw Jy("Can't call method on " + e);
      return e;
    };
  });
  var Rr = u((uB, _u) => {
    var eI = gu(),
      tI = eo();
    _u.exports = function (e) {
      return eI(tI(e));
    };
  });
  var lt = u((cB, mu) => {
    mu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Qt = u((lB, yu) => {
    var rI = lt();
    yu.exports = function (e) {
      return typeof e == "object" ? e !== null : rI(e);
    };
  });
  var Cr = u((fB, Iu) => {
    var to = ye(),
      nI = lt(),
      iI = function (e) {
        return nI(e) ? e : void 0;
      };
    Iu.exports = function (e, t) {
      return arguments.length < 2 ? iI(to[e]) : to[e] && to[e][t];
    };
  });
  var bu = u((dB, Tu) => {
    var oI = tt();
    Tu.exports = oI({}.isPrototypeOf);
  });
  var wu = u((pB, Ou) => {
    var aI = Cr();
    Ou.exports = aI("navigator", "userAgent") || "";
  });
  var qu = u((vB, Nu) => {
    var xu = ye(),
      ro = wu(),
      Su = xu.process,
      Au = xu.Deno,
      Ru = (Su && Su.versions) || (Au && Au.version),
      Cu = Ru && Ru.v8,
      rt,
      _n;
    Cu &&
      ((rt = Cu.split(".")),
      (_n = rt[0] > 0 && rt[0] < 4 ? 1 : +(rt[0] + rt[1])));
    !_n &&
      ro &&
      ((rt = ro.match(/Edge\/(\d+)/)),
      (!rt || rt[1] >= 74) &&
        ((rt = ro.match(/Chrome\/(\d+)/)), rt && (_n = +rt[1])));
    Nu.exports = _n;
  });
  var no = u((hB, Pu) => {
    var Lu = qu(),
      sI = Yt();
    Pu.exports =
      !!Object.getOwnPropertySymbols &&
      !sI(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Lu && Lu < 41)
        );
      });
  });
  var io = u((gB, Du) => {
    var uI = no();
    Du.exports = uI && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var oo = u((EB, Mu) => {
    var cI = ye(),
      lI = Cr(),
      fI = lt(),
      dI = bu(),
      pI = io(),
      vI = cI.Object;
    Mu.exports = pI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = lI("Symbol");
          return fI(t) && dI(t.prototype, vI(e));
        };
  });
  var Gu = u((_B, Fu) => {
    var hI = ye(),
      gI = hI.String;
    Fu.exports = function (e) {
      try {
        return gI(e);
      } catch {
        return "Object";
      }
    };
  });
  var Uu = u((mB, Xu) => {
    var EI = ye(),
      _I = lt(),
      mI = Gu(),
      yI = EI.TypeError;
    Xu.exports = function (e) {
      if (_I(e)) return e;
      throw yI(mI(e) + " is not a function");
    };
  });
  var Wu = u((yB, Vu) => {
    var II = Uu();
    Vu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : II(r);
    };
  });
  var Hu = u((IB, Bu) => {
    var TI = ye(),
      ao = En(),
      so = lt(),
      uo = Qt(),
      bI = TI.TypeError;
    Bu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && so((r = e.toString)) && !uo((n = ao(r, e)))) ||
        (so((r = e.valueOf)) && !uo((n = ao(r, e)))) ||
        (t !== "string" && so((r = e.toString)) && !uo((n = ao(r, e))))
      )
        return n;
      throw bI("Can't convert object to primitive value");
    };
  });
  var ju = u((TB, ku) => {
    ku.exports = !1;
  });
  var mn = u((bB, zu) => {
    var Ku = ye(),
      OI = Object.defineProperty;
    zu.exports = function (e, t) {
      try {
        OI(Ku, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Ku[e] = t;
      }
      return t;
    };
  });
  var yn = u((OB, Qu) => {
    var wI = ye(),
      SI = mn(),
      Yu = "__core-js_shared__",
      AI = wI[Yu] || SI(Yu, {});
    Qu.exports = AI;
  });
  var co = u((wB, Zu) => {
    var RI = ju(),
      $u = yn();
    (Zu.exports = function (e, t) {
      return $u[e] || ($u[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: RI ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var ec = u((SB, Ju) => {
    var CI = ye(),
      xI = eo(),
      NI = CI.Object;
    Ju.exports = function (e) {
      return NI(xI(e));
    };
  });
  var bt = u((AB, tc) => {
    var qI = tt(),
      LI = ec(),
      PI = qI({}.hasOwnProperty);
    tc.exports =
      Object.hasOwn ||
      function (t, r) {
        return PI(LI(t), r);
      };
  });
  var lo = u((RB, rc) => {
    var DI = tt(),
      MI = 0,
      FI = Math.random(),
      GI = DI((1).toString);
    rc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + GI(++MI + FI, 36);
    };
  });
  var fo = u((CB, sc) => {
    var XI = ye(),
      UI = co(),
      nc = bt(),
      VI = lo(),
      ic = no(),
      ac = io(),
      $t = UI("wks"),
      Ft = XI.Symbol,
      oc = Ft && Ft.for,
      WI = ac ? Ft : (Ft && Ft.withoutSetter) || VI;
    sc.exports = function (e) {
      if (!nc($t, e) || !(ic || typeof $t[e] == "string")) {
        var t = "Symbol." + e;
        ic && nc(Ft, e)
          ? ($t[e] = Ft[e])
          : ac && oc
          ? ($t[e] = oc(t))
          : ($t[e] = WI(t));
      }
      return $t[e];
    };
  });
  var fc = u((xB, lc) => {
    var BI = ye(),
      HI = En(),
      uc = Qt(),
      cc = oo(),
      kI = Wu(),
      jI = Hu(),
      KI = fo(),
      zI = BI.TypeError,
      YI = KI("toPrimitive");
    lc.exports = function (e, t) {
      if (!uc(e) || cc(e)) return e;
      var r = kI(e, YI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = HI(r, e, t)), !uc(n) || cc(n))
        )
          return n;
        throw zI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), jI(e, t);
    };
  });
  var po = u((NB, dc) => {
    var QI = fc(),
      $I = oo();
    dc.exports = function (e) {
      var t = QI(e, "string");
      return $I(t) ? t : t + "";
    };
  });
  var ho = u((qB, vc) => {
    var ZI = ye(),
      pc = Qt(),
      vo = ZI.document,
      JI = pc(vo) && pc(vo.createElement);
    vc.exports = function (e) {
      return JI ? vo.createElement(e) : {};
    };
  });
  var go = u((LB, hc) => {
    var eT = Mt(),
      tT = Yt(),
      rT = ho();
    hc.exports =
      !eT &&
      !tT(function () {
        return (
          Object.defineProperty(rT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var Eo = u((Ec) => {
    var nT = Mt(),
      iT = En(),
      oT = uu(),
      aT = Qi(),
      sT = Rr(),
      uT = po(),
      cT = bt(),
      lT = go(),
      gc = Object.getOwnPropertyDescriptor;
    Ec.f = nT
      ? gc
      : function (t, r) {
          if (((t = sT(t)), (r = uT(r)), lT))
            try {
              return gc(t, r);
            } catch {}
          if (cT(t, r)) return aT(!iT(oT.f, t, r), t[r]);
        };
  });
  var xr = u((DB, mc) => {
    var _c = ye(),
      fT = Qt(),
      dT = _c.String,
      pT = _c.TypeError;
    mc.exports = function (e) {
      if (fT(e)) return e;
      throw pT(dT(e) + " is not an object");
    };
  });
  var Nr = u((Tc) => {
    var vT = ye(),
      hT = Mt(),
      gT = go(),
      yc = xr(),
      ET = po(),
      _T = vT.TypeError,
      Ic = Object.defineProperty;
    Tc.f = hT
      ? Ic
      : function (t, r, n) {
          if ((yc(t), (r = ET(r)), yc(n), gT))
            try {
              return Ic(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw _T("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var In = u((FB, bc) => {
    var mT = Mt(),
      yT = Nr(),
      IT = Qi();
    bc.exports = mT
      ? function (e, t, r) {
          return yT.f(e, t, IT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var mo = u((GB, Oc) => {
    var TT = tt(),
      bT = lt(),
      _o = yn(),
      OT = TT(Function.toString);
    bT(_o.inspectSource) ||
      (_o.inspectSource = function (e) {
        return OT(e);
      });
    Oc.exports = _o.inspectSource;
  });
  var Ac = u((XB, Sc) => {
    var wT = ye(),
      ST = lt(),
      AT = mo(),
      wc = wT.WeakMap;
    Sc.exports = ST(wc) && /native code/.test(AT(wc));
  });
  var yo = u((UB, Cc) => {
    var RT = co(),
      CT = lo(),
      Rc = RT("keys");
    Cc.exports = function (e) {
      return Rc[e] || (Rc[e] = CT(e));
    };
  });
  var Tn = u((VB, xc) => {
    xc.exports = {};
  });
  var Mc = u((WB, Dc) => {
    var xT = Ac(),
      Pc = ye(),
      Io = tt(),
      NT = Qt(),
      qT = In(),
      To = bt(),
      bo = yn(),
      LT = yo(),
      PT = Tn(),
      Nc = "Object already initialized",
      wo = Pc.TypeError,
      DT = Pc.WeakMap,
      bn,
      qr,
      On,
      MT = function (e) {
        return On(e) ? qr(e) : bn(e, {});
      },
      FT = function (e) {
        return function (t) {
          var r;
          if (!NT(t) || (r = qr(t)).type !== e)
            throw wo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    xT || bo.state
      ? ((Ot = bo.state || (bo.state = new DT())),
        (qc = Io(Ot.get)),
        (Oo = Io(Ot.has)),
        (Lc = Io(Ot.set)),
        (bn = function (e, t) {
          if (Oo(Ot, e)) throw new wo(Nc);
          return (t.facade = e), Lc(Ot, e, t), t;
        }),
        (qr = function (e) {
          return qc(Ot, e) || {};
        }),
        (On = function (e) {
          return Oo(Ot, e);
        }))
      : ((Gt = LT("state")),
        (PT[Gt] = !0),
        (bn = function (e, t) {
          if (To(e, Gt)) throw new wo(Nc);
          return (t.facade = e), qT(e, Gt, t), t;
        }),
        (qr = function (e) {
          return To(e, Gt) ? e[Gt] : {};
        }),
        (On = function (e) {
          return To(e, Gt);
        }));
    var Ot, qc, Oo, Lc, Gt;
    Dc.exports = { set: bn, get: qr, has: On, enforce: MT, getterFor: FT };
  });
  var Xc = u((BB, Gc) => {
    var So = Mt(),
      GT = bt(),
      Fc = Function.prototype,
      XT = So && Object.getOwnPropertyDescriptor,
      Ao = GT(Fc, "name"),
      UT = Ao && function () {}.name === "something",
      VT = Ao && (!So || (So && XT(Fc, "name").configurable));
    Gc.exports = { EXISTS: Ao, PROPER: UT, CONFIGURABLE: VT };
  });
  var Hc = u((HB, Bc) => {
    var WT = ye(),
      Uc = lt(),
      BT = bt(),
      Vc = In(),
      HT = mn(),
      kT = mo(),
      Wc = Mc(),
      jT = Xc().CONFIGURABLE,
      KT = Wc.get,
      zT = Wc.enforce,
      YT = String(String).split("String");
    (Bc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Uc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!BT(r, "name") || (jT && r.name !== s)) && Vc(r, "name", s),
          (c = zT(r)),
          c.source || (c.source = YT.join(typeof s == "string" ? s : ""))),
        e === WT)
      ) {
        o ? (e[t] = r) : HT(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Vc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Uc(this) && KT(this).source) || kT(this);
    });
  });
  var Ro = u((kB, kc) => {
    var QT = Math.ceil,
      $T = Math.floor;
    kc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? $T : QT)(t);
    };
  });
  var Kc = u((jB, jc) => {
    var ZT = Ro(),
      JT = Math.max,
      eb = Math.min;
    jc.exports = function (e, t) {
      var r = ZT(e);
      return r < 0 ? JT(r + t, 0) : eb(r, t);
    };
  });
  var Yc = u((KB, zc) => {
    var tb = Ro(),
      rb = Math.min;
    zc.exports = function (e) {
      return e > 0 ? rb(tb(e), 9007199254740991) : 0;
    };
  });
  var $c = u((zB, Qc) => {
    var nb = Yc();
    Qc.exports = function (e) {
      return nb(e.length);
    };
  });
  var Co = u((YB, Jc) => {
    var ib = Rr(),
      ob = Kc(),
      ab = $c(),
      Zc = function (e) {
        return function (t, r, n) {
          var i = ib(t),
            o = ab(i),
            a = ob(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    Jc.exports = { includes: Zc(!0), indexOf: Zc(!1) };
  });
  var No = u((QB, tl) => {
    var sb = tt(),
      xo = bt(),
      ub = Rr(),
      cb = Co().indexOf,
      lb = Tn(),
      el = sb([].push);
    tl.exports = function (e, t) {
      var r = ub(e),
        n = 0,
        i = [],
        o;
      for (o in r) !xo(lb, o) && xo(r, o) && el(i, o);
      for (; t.length > n; ) xo(r, (o = t[n++])) && (~cb(i, o) || el(i, o));
      return i;
    };
  });
  var wn = u(($B, rl) => {
    rl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var il = u((nl) => {
    var fb = No(),
      db = wn(),
      pb = db.concat("length", "prototype");
    nl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return fb(t, pb);
      };
  });
  var al = u((ol) => {
    ol.f = Object.getOwnPropertySymbols;
  });
  var ul = u((eH, sl) => {
    var vb = Cr(),
      hb = tt(),
      gb = il(),
      Eb = al(),
      _b = xr(),
      mb = hb([].concat);
    sl.exports =
      vb("Reflect", "ownKeys") ||
      function (t) {
        var r = gb.f(_b(t)),
          n = Eb.f;
        return n ? mb(r, n(t)) : r;
      };
  });
  var ll = u((tH, cl) => {
    var yb = bt(),
      Ib = ul(),
      Tb = Eo(),
      bb = Nr();
    cl.exports = function (e, t) {
      for (var r = Ib(t), n = bb.f, i = Tb.f, o = 0; o < r.length; o++) {
        var a = r[o];
        yb(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var dl = u((rH, fl) => {
    var Ob = Yt(),
      wb = lt(),
      Sb = /#|\.prototype\./,
      Lr = function (e, t) {
        var r = Rb[Ab(e)];
        return r == xb ? !0 : r == Cb ? !1 : wb(t) ? Ob(t) : !!t;
      },
      Ab = (Lr.normalize = function (e) {
        return String(e).replace(Sb, ".").toLowerCase();
      }),
      Rb = (Lr.data = {}),
      Cb = (Lr.NATIVE = "N"),
      xb = (Lr.POLYFILL = "P");
    fl.exports = Lr;
  });
  var vl = u((nH, pl) => {
    var qo = ye(),
      Nb = Eo().f,
      qb = In(),
      Lb = Hc(),
      Pb = mn(),
      Db = ll(),
      Mb = dl();
    pl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        c,
        d,
        _;
      if (
        (n
          ? (a = qo)
          : i
          ? (a = qo[r] || Pb(r, {}))
          : (a = (qo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((d = t[s]),
            e.noTargetGet ? ((_ = Nb(a, s)), (c = _ && _.value)) : (c = a[s]),
            (o = Mb(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && c !== void 0)
          ) {
            if (typeof d == typeof c) continue;
            Db(d, c);
          }
          (e.sham || (c && c.sham)) && qb(d, "sham", !0), Lb(a, s, d, e);
        }
    };
  });
  var gl = u((iH, hl) => {
    var Fb = No(),
      Gb = wn();
    hl.exports =
      Object.keys ||
      function (t) {
        return Fb(t, Gb);
      };
  });
  var _l = u((oH, El) => {
    var Xb = Mt(),
      Ub = Nr(),
      Vb = xr(),
      Wb = Rr(),
      Bb = gl();
    El.exports = Xb
      ? Object.defineProperties
      : function (t, r) {
          Vb(t);
          for (var n = Wb(r), i = Bb(r), o = i.length, a = 0, s; o > a; )
            Ub.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var yl = u((aH, ml) => {
    var Hb = Cr();
    ml.exports = Hb("document", "documentElement");
  });
  var Rl = u((sH, Al) => {
    var kb = xr(),
      jb = _l(),
      Il = wn(),
      Kb = Tn(),
      zb = yl(),
      Yb = ho(),
      Qb = yo(),
      Tl = ">",
      bl = "<",
      Po = "prototype",
      Do = "script",
      wl = Qb("IE_PROTO"),
      Lo = function () {},
      Sl = function (e) {
        return bl + Do + Tl + e + bl + "/" + Do + Tl;
      },
      Ol = function (e) {
        e.write(Sl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      $b = function () {
        var e = Yb("iframe"),
          t = "java" + Do + ":",
          r;
        return (
          (e.style.display = "none"),
          zb.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Sl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      Sn,
      An = function () {
        try {
          Sn = new ActiveXObject("htmlfile");
        } catch {}
        An =
          typeof document < "u"
            ? document.domain && Sn
              ? Ol(Sn)
              : $b()
            : Ol(Sn);
        for (var e = Il.length; e--; ) delete An[Po][Il[e]];
        return An();
      };
    Kb[wl] = !0;
    Al.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Lo[Po] = kb(t)), (n = new Lo()), (Lo[Po] = null), (n[wl] = t))
            : (n = An()),
          r === void 0 ? n : jb(n, r)
        );
      };
  });
  var xl = u((uH, Cl) => {
    var Zb = fo(),
      Jb = Rl(),
      eO = Nr(),
      Mo = Zb("unscopables"),
      Fo = Array.prototype;
    Fo[Mo] == null && eO.f(Fo, Mo, { configurable: !0, value: Jb(null) });
    Cl.exports = function (e) {
      Fo[Mo][e] = !0;
    };
  });
  var Nl = u(() => {
    "use strict";
    var tO = vl(),
      rO = Co().includes,
      nO = xl();
    tO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return rO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    nO("includes");
  });
  var Ll = u((fH, ql) => {
    var iO = ye(),
      oO = tt();
    ql.exports = function (e, t) {
      return oO(iO[e].prototype[t]);
    };
  });
  var Dl = u((dH, Pl) => {
    Nl();
    var aO = Ll();
    Pl.exports = aO("Array", "includes");
  });
  var Fl = u((pH, Ml) => {
    var sO = Dl();
    Ml.exports = sO;
  });
  var Xl = u((vH, Gl) => {
    var uO = Fl();
    Gl.exports = uO;
  });
  var Go = u((hH, Ul) => {
    var cO =
      typeof global == "object" && global && global.Object === Object && global;
    Ul.exports = cO;
  });
  var nt = u((gH, Vl) => {
    var lO = Go(),
      fO = typeof self == "object" && self && self.Object === Object && self,
      dO = lO || fO || Function("return this")();
    Vl.exports = dO;
  });
  var Zt = u((EH, Wl) => {
    var pO = nt(),
      vO = pO.Symbol;
    Wl.exports = vO;
  });
  var jl = u((_H, kl) => {
    var Bl = Zt(),
      Hl = Object.prototype,
      hO = Hl.hasOwnProperty,
      gO = Hl.toString,
      Pr = Bl ? Bl.toStringTag : void 0;
    function EO(e) {
      var t = hO.call(e, Pr),
        r = e[Pr];
      try {
        e[Pr] = void 0;
        var n = !0;
      } catch {}
      var i = gO.call(e);
      return n && (t ? (e[Pr] = r) : delete e[Pr]), i;
    }
    kl.exports = EO;
  });
  var zl = u((mH, Kl) => {
    var _O = Object.prototype,
      mO = _O.toString;
    function yO(e) {
      return mO.call(e);
    }
    Kl.exports = yO;
  });
  var wt = u((yH, $l) => {
    var Yl = Zt(),
      IO = jl(),
      TO = zl(),
      bO = "[object Null]",
      OO = "[object Undefined]",
      Ql = Yl ? Yl.toStringTag : void 0;
    function wO(e) {
      return e == null
        ? e === void 0
          ? OO
          : bO
        : Ql && Ql in Object(e)
        ? IO(e)
        : TO(e);
    }
    $l.exports = wO;
  });
  var Xo = u((IH, Zl) => {
    function SO(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Zl.exports = SO;
  });
  var Uo = u((TH, Jl) => {
    var AO = Xo(),
      RO = AO(Object.getPrototypeOf, Object);
    Jl.exports = RO;
  });
  var _t = u((bH, ef) => {
    function CO(e) {
      return e != null && typeof e == "object";
    }
    ef.exports = CO;
  });
  var Vo = u((OH, rf) => {
    var xO = wt(),
      NO = Uo(),
      qO = _t(),
      LO = "[object Object]",
      PO = Function.prototype,
      DO = Object.prototype,
      tf = PO.toString,
      MO = DO.hasOwnProperty,
      FO = tf.call(Object);
    function GO(e) {
      if (!qO(e) || xO(e) != LO) return !1;
      var t = NO(e);
      if (t === null) return !0;
      var r = MO.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && tf.call(r) == FO;
    }
    rf.exports = GO;
  });
  var nf = u((Wo) => {
    "use strict";
    Object.defineProperty(Wo, "__esModule", { value: !0 });
    Wo.default = XO;
    function XO(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var of = u((Ho, Bo) => {
    "use strict";
    Object.defineProperty(Ho, "__esModule", { value: !0 });
    var UO = nf(),
      VO = WO(UO);
    function WO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Jt;
    typeof self < "u"
      ? (Jt = self)
      : typeof window < "u"
      ? (Jt = window)
      : typeof global < "u"
      ? (Jt = global)
      : typeof Bo < "u"
      ? (Jt = Bo)
      : (Jt = Function("return this")());
    var BO = (0, VO.default)(Jt);
    Ho.default = BO;
  });
  var ko = u((Dr) => {
    "use strict";
    Dr.__esModule = !0;
    Dr.ActionTypes = void 0;
    Dr.default = cf;
    var HO = Vo(),
      kO = uf(HO),
      jO = of(),
      af = uf(jO);
    function uf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var sf = (Dr.ActionTypes = { INIT: "@@redux/INIT" });
    function cf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(cf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        c = !1;
      function d() {
        s === a && (s = a.slice());
      }
      function _() {
        return o;
      }
      function f(T) {
        if (typeof T != "function")
          throw new Error("Expected listener to be a function.");
        var A = !0;
        return (
          d(),
          s.push(T),
          function () {
            if (A) {
              (A = !1), d();
              var N = s.indexOf(T);
              s.splice(N, 1);
            }
          }
        );
      }
      function m(T) {
        if (!(0, kO.default)(T))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof T.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (o = i(o, T));
        } finally {
          c = !1;
        }
        for (var A = (a = s), S = 0; S < A.length; S++) A[S]();
        return T;
      }
      function p(T) {
        if (typeof T != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = T), m({ type: sf.INIT });
      }
      function h() {
        var T,
          A = f;
        return (
          (T = {
            subscribe: function (N) {
              if (typeof N != "object")
                throw new TypeError("Expected the observer to be an object.");
              function O() {
                N.next && N.next(_());
              }
              O();
              var M = A(O);
              return { unsubscribe: M };
            },
          }),
          (T[af.default] = function () {
            return this;
          }),
          T
        );
      }
      return (
        m({ type: sf.INIT }),
        (n = { dispatch: m, subscribe: f, getState: _, replaceReducer: p }),
        (n[af.default] = h),
        n
      );
    }
  });
  var Ko = u((jo) => {
    "use strict";
    jo.__esModule = !0;
    jo.default = KO;
    function KO(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var df = u((zo) => {
    "use strict";
    zo.__esModule = !0;
    zo.default = ZO;
    var lf = ko(),
      zO = Vo(),
      RH = ff(zO),
      YO = Ko(),
      CH = ff(YO);
    function ff(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function QO(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function $O(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: lf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                lf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function ZO(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        $O(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var d =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          _ = arguments[1];
        if (s) throw s;
        if (!1) var f;
        for (var m = !1, p = {}, h = 0; h < o.length; h++) {
          var T = o[h],
            A = r[T],
            S = d[T],
            N = A(S, _);
          if (typeof N > "u") {
            var O = QO(T, _);
            throw new Error(O);
          }
          (p[T] = N), (m = m || N !== S);
        }
        return m ? p : d;
      };
    }
  });
  var vf = u((Yo) => {
    "use strict";
    Yo.__esModule = !0;
    Yo.default = JO;
    function pf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function JO(e, t) {
      if (typeof e == "function") return pf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = pf(a, t));
      }
      return n;
    }
  });
  var $o = u((Qo) => {
    "use strict";
    Qo.__esModule = !0;
    Qo.default = ew;
    function ew() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var hf = u((Zo) => {
    "use strict";
    Zo.__esModule = !0;
    var tw =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Zo.default = ow;
    var rw = $o(),
      nw = iw(rw);
    function iw(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function ow() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            c = s.dispatch,
            d = [],
            _ = {
              getState: s.getState,
              dispatch: function (m) {
                return c(m);
              },
            };
          return (
            (d = t.map(function (f) {
              return f(_);
            })),
            (c = nw.default.apply(void 0, d)(s.dispatch)),
            tw({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var Jo = u((Ke) => {
    "use strict";
    Ke.__esModule = !0;
    Ke.compose =
      Ke.applyMiddleware =
      Ke.bindActionCreators =
      Ke.combineReducers =
      Ke.createStore =
        void 0;
    var aw = ko(),
      sw = er(aw),
      uw = df(),
      cw = er(uw),
      lw = vf(),
      fw = er(lw),
      dw = hf(),
      pw = er(dw),
      vw = $o(),
      hw = er(vw),
      gw = Ko(),
      PH = er(gw);
    function er(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Ke.createStore = sw.default;
    Ke.combineReducers = cw.default;
    Ke.bindActionCreators = fw.default;
    Ke.applyMiddleware = pw.default;
    Ke.compose = hw.default;
  });
  var gf = u((xe) => {
    "use strict";
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.QuickEffectIds =
      xe.QuickEffectDirectionConsts =
      xe.EventTypeConsts =
      xe.EventLimitAffectedElements =
      xe.EventContinuousMouseAxes =
      xe.EventBasedOn =
      xe.EventAppliesTo =
        void 0;
    var Ew = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    xe.EventTypeConsts = Ew;
    var _w = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    xe.EventAppliesTo = _w;
    var mw = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    xe.EventBasedOn = mw;
    var yw = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    xe.EventContinuousMouseAxes = yw;
    var Iw = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    xe.EventLimitAffectedElements = Iw;
    var Tw = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    xe.QuickEffectIds = Tw;
    var bw = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    xe.QuickEffectDirectionConsts = bw;
  });
  var ea = u((tr) => {
    "use strict";
    Object.defineProperty(tr, "__esModule", { value: !0 });
    tr.ActionTypeConsts = tr.ActionAppliesTo = void 0;
    var Ow = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      OBJECT_VALUE: "OBJECT_VALUE",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      PLUGIN_SPLINE: "PLUGIN_SPLINE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    tr.ActionTypeConsts = Ow;
    var ww = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    tr.ActionAppliesTo = ww;
  });
  var Ef = u((Rn) => {
    "use strict";
    Object.defineProperty(Rn, "__esModule", { value: !0 });
    Rn.InteractionTypeConsts = void 0;
    var Sw = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    Rn.InteractionTypeConsts = Sw;
  });
  var _f = u((Cn) => {
    "use strict";
    Object.defineProperty(Cn, "__esModule", { value: !0 });
    Cn.ReducedMotionTypes = void 0;
    var Aw = ea(),
      {
        TRANSFORM_MOVE: Rw,
        TRANSFORM_SCALE: Cw,
        TRANSFORM_ROTATE: xw,
        TRANSFORM_SKEW: Nw,
        STYLE_SIZE: qw,
        STYLE_FILTER: Lw,
        STYLE_FONT_VARIATION: Pw,
      } = Aw.ActionTypeConsts,
      Dw = {
        [Rw]: !0,
        [Cw]: !0,
        [xw]: !0,
        [Nw]: !0,
        [qw]: !0,
        [Lw]: !0,
        [Pw]: !0,
      };
    Cn.ReducedMotionTypes = Dw;
  });
  var mf = u((ue) => {
    "use strict";
    Object.defineProperty(ue, "__esModule", { value: !0 });
    ue.IX2_VIEWPORT_WIDTH_CHANGED =
      ue.IX2_TEST_FRAME_RENDERED =
      ue.IX2_STOP_REQUESTED =
      ue.IX2_SESSION_STOPPED =
      ue.IX2_SESSION_STARTED =
      ue.IX2_SESSION_INITIALIZED =
      ue.IX2_RAW_DATA_IMPORTED =
      ue.IX2_PREVIEW_REQUESTED =
      ue.IX2_PLAYBACK_REQUESTED =
      ue.IX2_PARAMETER_CHANGED =
      ue.IX2_MEDIA_QUERIES_DEFINED =
      ue.IX2_INSTANCE_STARTED =
      ue.IX2_INSTANCE_REMOVED =
      ue.IX2_INSTANCE_ADDED =
      ue.IX2_EVENT_STATE_CHANGED =
      ue.IX2_EVENT_LISTENER_ADDED =
      ue.IX2_ELEMENT_STATE_CHANGED =
      ue.IX2_CLEAR_REQUESTED =
      ue.IX2_ANIMATION_FRAME_CHANGED =
      ue.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var Mw = "IX2_RAW_DATA_IMPORTED";
    ue.IX2_RAW_DATA_IMPORTED = Mw;
    var Fw = "IX2_SESSION_INITIALIZED";
    ue.IX2_SESSION_INITIALIZED = Fw;
    var Gw = "IX2_SESSION_STARTED";
    ue.IX2_SESSION_STARTED = Gw;
    var Xw = "IX2_SESSION_STOPPED";
    ue.IX2_SESSION_STOPPED = Xw;
    var Uw = "IX2_PREVIEW_REQUESTED";
    ue.IX2_PREVIEW_REQUESTED = Uw;
    var Vw = "IX2_PLAYBACK_REQUESTED";
    ue.IX2_PLAYBACK_REQUESTED = Vw;
    var Ww = "IX2_STOP_REQUESTED";
    ue.IX2_STOP_REQUESTED = Ww;
    var Bw = "IX2_CLEAR_REQUESTED";
    ue.IX2_CLEAR_REQUESTED = Bw;
    var Hw = "IX2_EVENT_LISTENER_ADDED";
    ue.IX2_EVENT_LISTENER_ADDED = Hw;
    var kw = "IX2_EVENT_STATE_CHANGED";
    ue.IX2_EVENT_STATE_CHANGED = kw;
    var jw = "IX2_ANIMATION_FRAME_CHANGED";
    ue.IX2_ANIMATION_FRAME_CHANGED = jw;
    var Kw = "IX2_PARAMETER_CHANGED";
    ue.IX2_PARAMETER_CHANGED = Kw;
    var zw = "IX2_INSTANCE_ADDED";
    ue.IX2_INSTANCE_ADDED = zw;
    var Yw = "IX2_INSTANCE_STARTED";
    ue.IX2_INSTANCE_STARTED = Yw;
    var Qw = "IX2_INSTANCE_REMOVED";
    ue.IX2_INSTANCE_REMOVED = Qw;
    var $w = "IX2_ELEMENT_STATE_CHANGED";
    ue.IX2_ELEMENT_STATE_CHANGED = $w;
    var Zw = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    ue.IX2_ACTION_LIST_PLAYBACK_CHANGED = Zw;
    var Jw = "IX2_VIEWPORT_WIDTH_CHANGED";
    ue.IX2_VIEWPORT_WIDTH_CHANGED = Jw;
    var eS = "IX2_MEDIA_QUERIES_DEFINED";
    ue.IX2_MEDIA_QUERIES_DEFINED = eS;
    var tS = "IX2_TEST_FRAME_RENDERED";
    ue.IX2_TEST_FRAME_RENDERED = tS;
  });
  var yf = u((q) => {
    "use strict";
    Object.defineProperty(q, "__esModule", { value: !0 });
    q.W_MOD_JS =
      q.W_MOD_IX =
      q.WILL_CHANGE =
      q.WIDTH =
      q.WF_PAGE =
      q.TRANSLATE_Z =
      q.TRANSLATE_Y =
      q.TRANSLATE_X =
      q.TRANSLATE_3D =
      q.TRANSFORM =
      q.SKEW_Y =
      q.SKEW_X =
      q.SKEW =
      q.SIBLINGS =
      q.SCALE_Z =
      q.SCALE_Y =
      q.SCALE_X =
      q.SCALE_3D =
      q.ROTATE_Z =
      q.ROTATE_Y =
      q.ROTATE_X =
      q.RENDER_TRANSFORM =
      q.RENDER_STYLE =
      q.RENDER_PLUGIN =
      q.RENDER_GENERAL =
      q.PRESERVE_3D =
      q.PLAIN_OBJECT =
      q.PARENT =
      q.OPACITY =
      q.IX2_ID_DELIMITER =
      q.IMMEDIATE_CHILDREN =
      q.HTML_ELEMENT =
      q.HEIGHT =
      q.FONT_VARIATION_SETTINGS =
      q.FLEX =
      q.FILTER =
      q.DISPLAY =
      q.CONFIG_Z_VALUE =
      q.CONFIG_Z_UNIT =
      q.CONFIG_Y_VALUE =
      q.CONFIG_Y_UNIT =
      q.CONFIG_X_VALUE =
      q.CONFIG_X_UNIT =
      q.CONFIG_VALUE =
      q.CONFIG_UNIT =
      q.COMMA_DELIMITER =
      q.COLOR =
      q.COLON_DELIMITER =
      q.CHILDREN =
      q.BOUNDARY_SELECTOR =
      q.BORDER_COLOR =
      q.BAR_DELIMITER =
      q.BACKGROUND_COLOR =
      q.BACKGROUND =
      q.AUTO =
      q.ABSTRACT_NODE =
        void 0;
    var rS = "|";
    q.IX2_ID_DELIMITER = rS;
    var nS = "data-wf-page";
    q.WF_PAGE = nS;
    var iS = "w-mod-js";
    q.W_MOD_JS = iS;
    var oS = "w-mod-ix";
    q.W_MOD_IX = oS;
    var aS = ".w-dyn-item";
    q.BOUNDARY_SELECTOR = aS;
    var sS = "xValue";
    q.CONFIG_X_VALUE = sS;
    var uS = "yValue";
    q.CONFIG_Y_VALUE = uS;
    var cS = "zValue";
    q.CONFIG_Z_VALUE = cS;
    var lS = "value";
    q.CONFIG_VALUE = lS;
    var fS = "xUnit";
    q.CONFIG_X_UNIT = fS;
    var dS = "yUnit";
    q.CONFIG_Y_UNIT = dS;
    var pS = "zUnit";
    q.CONFIG_Z_UNIT = pS;
    var vS = "unit";
    q.CONFIG_UNIT = vS;
    var hS = "transform";
    q.TRANSFORM = hS;
    var gS = "translateX";
    q.TRANSLATE_X = gS;
    var ES = "translateY";
    q.TRANSLATE_Y = ES;
    var _S = "translateZ";
    q.TRANSLATE_Z = _S;
    var mS = "translate3d";
    q.TRANSLATE_3D = mS;
    var yS = "scaleX";
    q.SCALE_X = yS;
    var IS = "scaleY";
    q.SCALE_Y = IS;
    var TS = "scaleZ";
    q.SCALE_Z = TS;
    var bS = "scale3d";
    q.SCALE_3D = bS;
    var OS = "rotateX";
    q.ROTATE_X = OS;
    var wS = "rotateY";
    q.ROTATE_Y = wS;
    var SS = "rotateZ";
    q.ROTATE_Z = SS;
    var AS = "skew";
    q.SKEW = AS;
    var RS = "skewX";
    q.SKEW_X = RS;
    var CS = "skewY";
    q.SKEW_Y = CS;
    var xS = "opacity";
    q.OPACITY = xS;
    var NS = "filter";
    q.FILTER = NS;
    var qS = "font-variation-settings";
    q.FONT_VARIATION_SETTINGS = qS;
    var LS = "width";
    q.WIDTH = LS;
    var PS = "height";
    q.HEIGHT = PS;
    var DS = "backgroundColor";
    q.BACKGROUND_COLOR = DS;
    var MS = "background";
    q.BACKGROUND = MS;
    var FS = "borderColor";
    q.BORDER_COLOR = FS;
    var GS = "color";
    q.COLOR = GS;
    var XS = "display";
    q.DISPLAY = XS;
    var US = "flex";
    q.FLEX = US;
    var VS = "willChange";
    q.WILL_CHANGE = VS;
    var WS = "AUTO";
    q.AUTO = WS;
    var BS = ",";
    q.COMMA_DELIMITER = BS;
    var HS = ":";
    q.COLON_DELIMITER = HS;
    var kS = "|";
    q.BAR_DELIMITER = kS;
    var jS = "CHILDREN";
    q.CHILDREN = jS;
    var KS = "IMMEDIATE_CHILDREN";
    q.IMMEDIATE_CHILDREN = KS;
    var zS = "SIBLINGS";
    q.SIBLINGS = zS;
    var YS = "PARENT";
    q.PARENT = YS;
    var QS = "preserve-3d";
    q.PRESERVE_3D = QS;
    var $S = "HTML_ELEMENT";
    q.HTML_ELEMENT = $S;
    var ZS = "PLAIN_OBJECT";
    q.PLAIN_OBJECT = ZS;
    var JS = "ABSTRACT_NODE";
    q.ABSTRACT_NODE = JS;
    var eA = "RENDER_TRANSFORM";
    q.RENDER_TRANSFORM = eA;
    var tA = "RENDER_GENERAL";
    q.RENDER_GENERAL = tA;
    var rA = "RENDER_STYLE";
    q.RENDER_STYLE = rA;
    var nA = "RENDER_PLUGIN";
    q.RENDER_PLUGIN = nA;
  });
  var He = u((Ae) => {
    "use strict";
    var If = Dt().default;
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    var xn = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    Ae.IX2EngineConstants = Ae.IX2EngineActionTypes = void 0;
    var ta = gf();
    Object.keys(ta).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(xn, e) ||
        (e in Ae && Ae[e] === ta[e]) ||
        Object.defineProperty(Ae, e, {
          enumerable: !0,
          get: function () {
            return ta[e];
          },
        });
    });
    var ra = ea();
    Object.keys(ra).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(xn, e) ||
        (e in Ae && Ae[e] === ra[e]) ||
        Object.defineProperty(Ae, e, {
          enumerable: !0,
          get: function () {
            return ra[e];
          },
        });
    });
    var na = Ef();
    Object.keys(na).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(xn, e) ||
        (e in Ae && Ae[e] === na[e]) ||
        Object.defineProperty(Ae, e, {
          enumerable: !0,
          get: function () {
            return na[e];
          },
        });
    });
    var ia = _f();
    Object.keys(ia).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(xn, e) ||
        (e in Ae && Ae[e] === ia[e]) ||
        Object.defineProperty(Ae, e, {
          enumerable: !0,
          get: function () {
            return ia[e];
          },
        });
    });
    var iA = If(mf());
    Ae.IX2EngineActionTypes = iA;
    var oA = If(yf());
    Ae.IX2EngineConstants = oA;
  });
  var Tf = u((Nn) => {
    "use strict";
    Object.defineProperty(Nn, "__esModule", { value: !0 });
    Nn.ixData = void 0;
    var aA = He(),
      { IX2_RAW_DATA_IMPORTED: sA } = aA.IX2EngineActionTypes,
      uA = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case sA:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    Nn.ixData = uA;
  });
  var rr = u((HH, mt) => {
    function oa() {
      return (
        (mt.exports = oa =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (mt.exports.__esModule = !0),
        (mt.exports.default = mt.exports),
        oa.apply(this, arguments)
      );
    }
    (mt.exports = oa),
      (mt.exports.__esModule = !0),
      (mt.exports.default = mt.exports);
  });
  var nr = u((Te) => {
    "use strict";
    Object.defineProperty(Te, "__esModule", { value: !0 });
    var cA =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    Te.clone = Ln;
    Te.addLast = wf;
    Te.addFirst = Sf;
    Te.removeLast = Af;
    Te.removeFirst = Rf;
    Te.insert = Cf;
    Te.removeAt = xf;
    Te.replaceAt = Nf;
    Te.getIn = Pn;
    Te.set = Dn;
    Te.setIn = Mn;
    Te.update = Lf;
    Te.updateIn = Pf;
    Te.merge = Df;
    Te.mergeDeep = Mf;
    Te.mergeIn = Ff;
    Te.omit = Gf;
    Te.addDefaults = Xf;
    var bf = "INVALID_ARGS";
    function Of(e) {
      throw new Error(e);
    }
    function aa(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var lA = {}.hasOwnProperty;
    function Ln(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = aa(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function ke(e, t, r) {
      var n = r;
      n == null && Of(bf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (d != null) {
          var _ = aa(d);
          if (_.length)
            for (var f = 0; f <= _.length; f++) {
              var m = _[f];
              if (!(e && n[m] !== void 0)) {
                var p = d[m];
                t && qn(n[m]) && qn(p) && (p = ke(e, t, n[m], p)),
                  !(p === void 0 || p === n[m]) &&
                    (i || ((i = !0), (n = Ln(n))), (n[m] = p));
              }
            }
        }
      }
      return n;
    }
    function qn(e) {
      var t = typeof e > "u" ? "undefined" : cA(e);
      return e != null && (t === "object" || t === "function");
    }
    function wf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Sf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Af(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Rf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Cf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function xf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Nf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Pn(e, t) {
      if ((!Array.isArray(t) && Of(bf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Dn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Ln(i);
      return (o[t] = r), o;
    }
    function qf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          qn(e) && qn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = qf(a, t, r, n + 1);
      }
      return Dn(e, o, i);
    }
    function Mn(e, t, r) {
      return t.length ? qf(e, t, r, 0) : r;
    }
    function Lf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Dn(e, t, i);
    }
    function Pf(e, t, r) {
      var n = Pn(e, t),
        i = r(n);
      return Mn(e, t, i);
    }
    function Df(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? ke.call.apply(ke, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : ke(!1, !1, e, t, r, n, i, o);
    }
    function Mf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? ke.call.apply(ke, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : ke(!1, !0, e, t, r, n, i, o);
    }
    function Ff(e, t, r, n, i, o, a) {
      var s = Pn(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          d = arguments.length,
          _ = Array(d > 7 ? d - 7 : 0),
          f = 7;
        f < d;
        f++
      )
        _[f - 7] = arguments[f];
      return (
        _.length
          ? (c = ke.call.apply(ke, [null, !1, !1, s, r, n, i, o, a].concat(_)))
          : (c = ke(!1, !1, s, r, n, i, o, a)),
        Mn(e, t, c)
      );
    }
    function Gf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (lA.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = aa(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (o[c] = e[c]);
      }
      return o;
    }
    function Xf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? ke.call.apply(ke, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : ke(!0, !1, e, t, r, n, i, o);
    }
    var fA = {
      clone: Ln,
      addLast: wf,
      addFirst: Sf,
      removeLast: Af,
      removeFirst: Rf,
      insert: Cf,
      removeAt: xf,
      replaceAt: Nf,
      getIn: Pn,
      set: Dn,
      setIn: Mn,
      update: Lf,
      updateIn: Pf,
      merge: Df,
      mergeDeep: Mf,
      mergeIn: Ff,
      omit: Gf,
      addDefaults: Xf,
    };
    Te.default = fA;
  });
  var Vf = u((Fn) => {
    "use strict";
    var dA = et().default;
    Object.defineProperty(Fn, "__esModule", { value: !0 });
    Fn.ixRequest = void 0;
    var pA = dA(rr()),
      vA = He(),
      hA = nr(),
      {
        IX2_PREVIEW_REQUESTED: gA,
        IX2_PLAYBACK_REQUESTED: EA,
        IX2_STOP_REQUESTED: _A,
        IX2_CLEAR_REQUESTED: mA,
      } = vA.IX2EngineActionTypes,
      yA = { preview: {}, playback: {}, stop: {}, clear: {} },
      Uf = Object.create(null, {
        [gA]: { value: "preview" },
        [EA]: { value: "playback" },
        [_A]: { value: "stop" },
        [mA]: { value: "clear" },
      }),
      IA = (e = yA, t) => {
        if (t.type in Uf) {
          let r = [Uf[t.type]];
          return (0, hA.setIn)(e, [r], (0, pA.default)({}, t.payload));
        }
        return e;
      };
    Fn.ixRequest = IA;
  });
  var Bf = u((Gn) => {
    "use strict";
    Object.defineProperty(Gn, "__esModule", { value: !0 });
    Gn.ixSession = void 0;
    var TA = He(),
      ft = nr(),
      {
        IX2_SESSION_INITIALIZED: bA,
        IX2_SESSION_STARTED: OA,
        IX2_TEST_FRAME_RENDERED: wA,
        IX2_SESSION_STOPPED: SA,
        IX2_EVENT_LISTENER_ADDED: AA,
        IX2_EVENT_STATE_CHANGED: RA,
        IX2_ANIMATION_FRAME_CHANGED: CA,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: xA,
        IX2_VIEWPORT_WIDTH_CHANGED: NA,
        IX2_MEDIA_QUERIES_DEFINED: qA,
      } = TA.IX2EngineActionTypes,
      Wf = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      LA = 20,
      PA = (e = Wf, t) => {
        switch (t.type) {
          case bA: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, ft.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case OA:
            return (0, ft.set)(e, "active", !0);
          case wA: {
            let {
              payload: { step: r = LA },
            } = t;
            return (0, ft.set)(e, "tick", e.tick + r);
          }
          case SA:
            return Wf;
          case CA: {
            let {
              payload: { now: r },
            } = t;
            return (0, ft.set)(e, "tick", r);
          }
          case AA: {
            let r = (0, ft.addLast)(e.eventListeners, t.payload);
            return (0, ft.set)(e, "eventListeners", r);
          }
          case RA: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, ft.setIn)(e, ["eventState", r], n);
          }
          case xA: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, ft.setIn)(e, ["playbackState", r], n);
          }
          case NA: {
            let { width: r, mediaQueries: n } = t.payload,
              i = n.length,
              o = null;
            for (let a = 0; a < i; a++) {
              let { key: s, min: c, max: d } = n[a];
              if (r >= c && r <= d) {
                o = s;
                break;
              }
            }
            return (0, ft.merge)(e, { viewportWidth: r, mediaQueryKey: o });
          }
          case qA:
            return (0, ft.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    Gn.ixSession = PA;
  });
  var kf = u((zH, Hf) => {
    function DA() {
      (this.__data__ = []), (this.size = 0);
    }
    Hf.exports = DA;
  });
  var Xn = u((YH, jf) => {
    function MA(e, t) {
      return e === t || (e !== e && t !== t);
    }
    jf.exports = MA;
  });
  var Mr = u((QH, Kf) => {
    var FA = Xn();
    function GA(e, t) {
      for (var r = e.length; r--; ) if (FA(e[r][0], t)) return r;
      return -1;
    }
    Kf.exports = GA;
  });
  var Yf = u(($H, zf) => {
    var XA = Mr(),
      UA = Array.prototype,
      VA = UA.splice;
    function WA(e) {
      var t = this.__data__,
        r = XA(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : VA.call(t, r, 1), --this.size, !0;
    }
    zf.exports = WA;
  });
  var $f = u((ZH, Qf) => {
    var BA = Mr();
    function HA(e) {
      var t = this.__data__,
        r = BA(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Qf.exports = HA;
  });
  var Jf = u((JH, Zf) => {
    var kA = Mr();
    function jA(e) {
      return kA(this.__data__, e) > -1;
    }
    Zf.exports = jA;
  });
  var td = u((ek, ed) => {
    var KA = Mr();
    function zA(e, t) {
      var r = this.__data__,
        n = KA(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    ed.exports = zA;
  });
  var Fr = u((tk, rd) => {
    var YA = kf(),
      QA = Yf(),
      $A = $f(),
      ZA = Jf(),
      JA = td();
    function ir(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    ir.prototype.clear = YA;
    ir.prototype.delete = QA;
    ir.prototype.get = $A;
    ir.prototype.has = ZA;
    ir.prototype.set = JA;
    rd.exports = ir;
  });
  var id = u((rk, nd) => {
    var e0 = Fr();
    function t0() {
      (this.__data__ = new e0()), (this.size = 0);
    }
    nd.exports = t0;
  });
  var ad = u((nk, od) => {
    function r0(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    od.exports = r0;
  });
  var ud = u((ik, sd) => {
    function n0(e) {
      return this.__data__.get(e);
    }
    sd.exports = n0;
  });
  var ld = u((ok, cd) => {
    function i0(e) {
      return this.__data__.has(e);
    }
    cd.exports = i0;
  });
  var dt = u((ak, fd) => {
    function o0(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    fd.exports = o0;
  });
  var sa = u((sk, dd) => {
    var a0 = wt(),
      s0 = dt(),
      u0 = "[object AsyncFunction]",
      c0 = "[object Function]",
      l0 = "[object GeneratorFunction]",
      f0 = "[object Proxy]";
    function d0(e) {
      if (!s0(e)) return !1;
      var t = a0(e);
      return t == c0 || t == l0 || t == u0 || t == f0;
    }
    dd.exports = d0;
  });
  var vd = u((uk, pd) => {
    var p0 = nt(),
      v0 = p0["__core-js_shared__"];
    pd.exports = v0;
  });
  var Ed = u((ck, gd) => {
    var ua = vd(),
      hd = (function () {
        var e = /[^.]+$/.exec((ua && ua.keys && ua.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function h0(e) {
      return !!hd && hd in e;
    }
    gd.exports = h0;
  });
  var ca = u((lk, _d) => {
    var g0 = Function.prototype,
      E0 = g0.toString;
    function _0(e) {
      if (e != null) {
        try {
          return E0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    _d.exports = _0;
  });
  var yd = u((fk, md) => {
    var m0 = sa(),
      y0 = Ed(),
      I0 = dt(),
      T0 = ca(),
      b0 = /[\\^$.*+?()[\]{}|]/g,
      O0 = /^\[object .+?Constructor\]$/,
      w0 = Function.prototype,
      S0 = Object.prototype,
      A0 = w0.toString,
      R0 = S0.hasOwnProperty,
      C0 = RegExp(
        "^" +
          A0.call(R0)
            .replace(b0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function x0(e) {
      if (!I0(e) || y0(e)) return !1;
      var t = m0(e) ? C0 : O0;
      return t.test(T0(e));
    }
    md.exports = x0;
  });
  var Td = u((dk, Id) => {
    function N0(e, t) {
      return e?.[t];
    }
    Id.exports = N0;
  });
  var St = u((pk, bd) => {
    var q0 = yd(),
      L0 = Td();
    function P0(e, t) {
      var r = L0(e, t);
      return q0(r) ? r : void 0;
    }
    bd.exports = P0;
  });
  var Un = u((vk, Od) => {
    var D0 = St(),
      M0 = nt(),
      F0 = D0(M0, "Map");
    Od.exports = F0;
  });
  var Gr = u((hk, wd) => {
    var G0 = St(),
      X0 = G0(Object, "create");
    wd.exports = X0;
  });
  var Rd = u((gk, Ad) => {
    var Sd = Gr();
    function U0() {
      (this.__data__ = Sd ? Sd(null) : {}), (this.size = 0);
    }
    Ad.exports = U0;
  });
  var xd = u((Ek, Cd) => {
    function V0(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Cd.exports = V0;
  });
  var qd = u((_k, Nd) => {
    var W0 = Gr(),
      B0 = "__lodash_hash_undefined__",
      H0 = Object.prototype,
      k0 = H0.hasOwnProperty;
    function j0(e) {
      var t = this.__data__;
      if (W0) {
        var r = t[e];
        return r === B0 ? void 0 : r;
      }
      return k0.call(t, e) ? t[e] : void 0;
    }
    Nd.exports = j0;
  });
  var Pd = u((mk, Ld) => {
    var K0 = Gr(),
      z0 = Object.prototype,
      Y0 = z0.hasOwnProperty;
    function Q0(e) {
      var t = this.__data__;
      return K0 ? t[e] !== void 0 : Y0.call(t, e);
    }
    Ld.exports = Q0;
  });
  var Md = u((yk, Dd) => {
    var $0 = Gr(),
      Z0 = "__lodash_hash_undefined__";
    function J0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = $0 && t === void 0 ? Z0 : t),
        this
      );
    }
    Dd.exports = J0;
  });
  var Gd = u((Ik, Fd) => {
    var eR = Rd(),
      tR = xd(),
      rR = qd(),
      nR = Pd(),
      iR = Md();
    function or(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    or.prototype.clear = eR;
    or.prototype.delete = tR;
    or.prototype.get = rR;
    or.prototype.has = nR;
    or.prototype.set = iR;
    Fd.exports = or;
  });
  var Vd = u((Tk, Ud) => {
    var Xd = Gd(),
      oR = Fr(),
      aR = Un();
    function sR() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Xd(),
          map: new (aR || oR)(),
          string: new Xd(),
        });
    }
    Ud.exports = sR;
  });
  var Bd = u((bk, Wd) => {
    function uR(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Wd.exports = uR;
  });
  var Xr = u((Ok, Hd) => {
    var cR = Bd();
    function lR(e, t) {
      var r = e.__data__;
      return cR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Hd.exports = lR;
  });
  var jd = u((wk, kd) => {
    var fR = Xr();
    function dR(e) {
      var t = fR(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    kd.exports = dR;
  });
  var zd = u((Sk, Kd) => {
    var pR = Xr();
    function vR(e) {
      return pR(this, e).get(e);
    }
    Kd.exports = vR;
  });
  var Qd = u((Ak, Yd) => {
    var hR = Xr();
    function gR(e) {
      return hR(this, e).has(e);
    }
    Yd.exports = gR;
  });
  var Zd = u((Rk, $d) => {
    var ER = Xr();
    function _R(e, t) {
      var r = ER(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    $d.exports = _R;
  });
  var Vn = u((Ck, Jd) => {
    var mR = Vd(),
      yR = jd(),
      IR = zd(),
      TR = Qd(),
      bR = Zd();
    function ar(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    ar.prototype.clear = mR;
    ar.prototype.delete = yR;
    ar.prototype.get = IR;
    ar.prototype.has = TR;
    ar.prototype.set = bR;
    Jd.exports = ar;
  });
  var tp = u((xk, ep) => {
    var OR = Fr(),
      wR = Un(),
      SR = Vn(),
      AR = 200;
    function RR(e, t) {
      var r = this.__data__;
      if (r instanceof OR) {
        var n = r.__data__;
        if (!wR || n.length < AR - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new SR(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    ep.exports = RR;
  });
  var la = u((Nk, rp) => {
    var CR = Fr(),
      xR = id(),
      NR = ad(),
      qR = ud(),
      LR = ld(),
      PR = tp();
    function sr(e) {
      var t = (this.__data__ = new CR(e));
      this.size = t.size;
    }
    sr.prototype.clear = xR;
    sr.prototype.delete = NR;
    sr.prototype.get = qR;
    sr.prototype.has = LR;
    sr.prototype.set = PR;
    rp.exports = sr;
  });
  var ip = u((qk, np) => {
    var DR = "__lodash_hash_undefined__";
    function MR(e) {
      return this.__data__.set(e, DR), this;
    }
    np.exports = MR;
  });
  var ap = u((Lk, op) => {
    function FR(e) {
      return this.__data__.has(e);
    }
    op.exports = FR;
  });
  var up = u((Pk, sp) => {
    var GR = Vn(),
      XR = ip(),
      UR = ap();
    function Wn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new GR(); ++t < r; ) this.add(e[t]);
    }
    Wn.prototype.add = Wn.prototype.push = XR;
    Wn.prototype.has = UR;
    sp.exports = Wn;
  });
  var lp = u((Dk, cp) => {
    function VR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    cp.exports = VR;
  });
  var dp = u((Mk, fp) => {
    function WR(e, t) {
      return e.has(t);
    }
    fp.exports = WR;
  });
  var fa = u((Fk, pp) => {
    var BR = up(),
      HR = lp(),
      kR = dp(),
      jR = 1,
      KR = 2;
    function zR(e, t, r, n, i, o) {
      var a = r & jR,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var d = o.get(e),
        _ = o.get(t);
      if (d && _) return d == t && _ == e;
      var f = -1,
        m = !0,
        p = r & KR ? new BR() : void 0;
      for (o.set(e, t), o.set(t, e); ++f < s; ) {
        var h = e[f],
          T = t[f];
        if (n) var A = a ? n(T, h, f, t, e, o) : n(h, T, f, e, t, o);
        if (A !== void 0) {
          if (A) continue;
          m = !1;
          break;
        }
        if (p) {
          if (
            !HR(t, function (S, N) {
              if (!kR(p, N) && (h === S || i(h, S, r, n, o))) return p.push(N);
            })
          ) {
            m = !1;
            break;
          }
        } else if (!(h === T || i(h, T, r, n, o))) {
          m = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), m;
    }
    pp.exports = zR;
  });
  var hp = u((Gk, vp) => {
    var YR = nt(),
      QR = YR.Uint8Array;
    vp.exports = QR;
  });
  var Ep = u((Xk, gp) => {
    function $R(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    gp.exports = $R;
  });
  var mp = u((Uk, _p) => {
    function ZR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    _p.exports = ZR;
  });
  var Op = u((Vk, bp) => {
    var yp = Zt(),
      Ip = hp(),
      JR = Xn(),
      eC = fa(),
      tC = Ep(),
      rC = mp(),
      nC = 1,
      iC = 2,
      oC = "[object Boolean]",
      aC = "[object Date]",
      sC = "[object Error]",
      uC = "[object Map]",
      cC = "[object Number]",
      lC = "[object RegExp]",
      fC = "[object Set]",
      dC = "[object String]",
      pC = "[object Symbol]",
      vC = "[object ArrayBuffer]",
      hC = "[object DataView]",
      Tp = yp ? yp.prototype : void 0,
      da = Tp ? Tp.valueOf : void 0;
    function gC(e, t, r, n, i, o, a) {
      switch (r) {
        case hC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case vC:
          return !(e.byteLength != t.byteLength || !o(new Ip(e), new Ip(t)));
        case oC:
        case aC:
        case cC:
          return JR(+e, +t);
        case sC:
          return e.name == t.name && e.message == t.message;
        case lC:
        case dC:
          return e == t + "";
        case uC:
          var s = tC;
        case fC:
          var c = n & nC;
          if ((s || (s = rC), e.size != t.size && !c)) return !1;
          var d = a.get(e);
          if (d) return d == t;
          (n |= iC), a.set(e, t);
          var _ = eC(s(e), s(t), n, i, o, a);
          return a.delete(e), _;
        case pC:
          if (da) return da.call(e) == da.call(t);
      }
      return !1;
    }
    bp.exports = gC;
  });
  var Bn = u((Wk, wp) => {
    function EC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    wp.exports = EC;
  });
  var Ne = u((Bk, Sp) => {
    var _C = Array.isArray;
    Sp.exports = _C;
  });
  var pa = u((Hk, Ap) => {
    var mC = Bn(),
      yC = Ne();
    function IC(e, t, r) {
      var n = t(e);
      return yC(e) ? n : mC(n, r(e));
    }
    Ap.exports = IC;
  });
  var Cp = u((kk, Rp) => {
    function TC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Rp.exports = TC;
  });
  var va = u((jk, xp) => {
    function bC() {
      return [];
    }
    xp.exports = bC;
  });
  var ha = u((Kk, qp) => {
    var OC = Cp(),
      wC = va(),
      SC = Object.prototype,
      AC = SC.propertyIsEnumerable,
      Np = Object.getOwnPropertySymbols,
      RC = Np
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                OC(Np(e), function (t) {
                  return AC.call(e, t);
                }));
          }
        : wC;
    qp.exports = RC;
  });
  var Pp = u((zk, Lp) => {
    function CC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Lp.exports = CC;
  });
  var Mp = u((Yk, Dp) => {
    var xC = wt(),
      NC = _t(),
      qC = "[object Arguments]";
    function LC(e) {
      return NC(e) && xC(e) == qC;
    }
    Dp.exports = LC;
  });
  var Ur = u((Qk, Xp) => {
    var Fp = Mp(),
      PC = _t(),
      Gp = Object.prototype,
      DC = Gp.hasOwnProperty,
      MC = Gp.propertyIsEnumerable,
      FC = Fp(
        (function () {
          return arguments;
        })()
      )
        ? Fp
        : function (e) {
            return PC(e) && DC.call(e, "callee") && !MC.call(e, "callee");
          };
    Xp.exports = FC;
  });
  var Vp = u(($k, Up) => {
    function GC() {
      return !1;
    }
    Up.exports = GC;
  });
  var Hn = u((Vr, ur) => {
    var XC = nt(),
      UC = Vp(),
      Hp = typeof Vr == "object" && Vr && !Vr.nodeType && Vr,
      Wp = Hp && typeof ur == "object" && ur && !ur.nodeType && ur,
      VC = Wp && Wp.exports === Hp,
      Bp = VC ? XC.Buffer : void 0,
      WC = Bp ? Bp.isBuffer : void 0,
      BC = WC || UC;
    ur.exports = BC;
  });
  var kn = u((Zk, kp) => {
    var HC = 9007199254740991,
      kC = /^(?:0|[1-9]\d*)$/;
    function jC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? HC),
        !!t &&
          (r == "number" || (r != "symbol" && kC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    kp.exports = jC;
  });
  var jn = u((Jk, jp) => {
    var KC = 9007199254740991;
    function zC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= KC;
    }
    jp.exports = zC;
  });
  var zp = u((ej, Kp) => {
    var YC = wt(),
      QC = jn(),
      $C = _t(),
      ZC = "[object Arguments]",
      JC = "[object Array]",
      ex = "[object Boolean]",
      tx = "[object Date]",
      rx = "[object Error]",
      nx = "[object Function]",
      ix = "[object Map]",
      ox = "[object Number]",
      ax = "[object Object]",
      sx = "[object RegExp]",
      ux = "[object Set]",
      cx = "[object String]",
      lx = "[object WeakMap]",
      fx = "[object ArrayBuffer]",
      dx = "[object DataView]",
      px = "[object Float32Array]",
      vx = "[object Float64Array]",
      hx = "[object Int8Array]",
      gx = "[object Int16Array]",
      Ex = "[object Int32Array]",
      _x = "[object Uint8Array]",
      mx = "[object Uint8ClampedArray]",
      yx = "[object Uint16Array]",
      Ix = "[object Uint32Array]",
      me = {};
    me[px] =
      me[vx] =
      me[hx] =
      me[gx] =
      me[Ex] =
      me[_x] =
      me[mx] =
      me[yx] =
      me[Ix] =
        !0;
    me[ZC] =
      me[JC] =
      me[fx] =
      me[ex] =
      me[dx] =
      me[tx] =
      me[rx] =
      me[nx] =
      me[ix] =
      me[ox] =
      me[ax] =
      me[sx] =
      me[ux] =
      me[cx] =
      me[lx] =
        !1;
    function Tx(e) {
      return $C(e) && QC(e.length) && !!me[YC(e)];
    }
    Kp.exports = Tx;
  });
  var Qp = u((tj, Yp) => {
    function bx(e) {
      return function (t) {
        return e(t);
      };
    }
    Yp.exports = bx;
  });
  var Zp = u((Wr, cr) => {
    var Ox = Go(),
      $p = typeof Wr == "object" && Wr && !Wr.nodeType && Wr,
      Br = $p && typeof cr == "object" && cr && !cr.nodeType && cr,
      wx = Br && Br.exports === $p,
      ga = wx && Ox.process,
      Sx = (function () {
        try {
          var e = Br && Br.require && Br.require("util").types;
          return e || (ga && ga.binding && ga.binding("util"));
        } catch {}
      })();
    cr.exports = Sx;
  });
  var Kn = u((rj, tv) => {
    var Ax = zp(),
      Rx = Qp(),
      Jp = Zp(),
      ev = Jp && Jp.isTypedArray,
      Cx = ev ? Rx(ev) : Ax;
    tv.exports = Cx;
  });
  var Ea = u((nj, rv) => {
    var xx = Pp(),
      Nx = Ur(),
      qx = Ne(),
      Lx = Hn(),
      Px = kn(),
      Dx = Kn(),
      Mx = Object.prototype,
      Fx = Mx.hasOwnProperty;
    function Gx(e, t) {
      var r = qx(e),
        n = !r && Nx(e),
        i = !r && !n && Lx(e),
        o = !r && !n && !i && Dx(e),
        a = r || n || i || o,
        s = a ? xx(e.length, String) : [],
        c = s.length;
      for (var d in e)
        (t || Fx.call(e, d)) &&
          !(
            a &&
            (d == "length" ||
              (i && (d == "offset" || d == "parent")) ||
              (o &&
                (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
              Px(d, c))
          ) &&
          s.push(d);
      return s;
    }
    rv.exports = Gx;
  });
  var zn = u((ij, nv) => {
    var Xx = Object.prototype;
    function Ux(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || Xx;
      return e === r;
    }
    nv.exports = Ux;
  });
  var ov = u((oj, iv) => {
    var Vx = Xo(),
      Wx = Vx(Object.keys, Object);
    iv.exports = Wx;
  });
  var Yn = u((aj, av) => {
    var Bx = zn(),
      Hx = ov(),
      kx = Object.prototype,
      jx = kx.hasOwnProperty;
    function Kx(e) {
      if (!Bx(e)) return Hx(e);
      var t = [];
      for (var r in Object(e)) jx.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    av.exports = Kx;
  });
  var Xt = u((sj, sv) => {
    var zx = sa(),
      Yx = jn();
    function Qx(e) {
      return e != null && Yx(e.length) && !zx(e);
    }
    sv.exports = Qx;
  });
  var Hr = u((uj, uv) => {
    var $x = Ea(),
      Zx = Yn(),
      Jx = Xt();
    function eN(e) {
      return Jx(e) ? $x(e) : Zx(e);
    }
    uv.exports = eN;
  });
  var lv = u((cj, cv) => {
    var tN = pa(),
      rN = ha(),
      nN = Hr();
    function iN(e) {
      return tN(e, nN, rN);
    }
    cv.exports = iN;
  });
  var pv = u((lj, dv) => {
    var fv = lv(),
      oN = 1,
      aN = Object.prototype,
      sN = aN.hasOwnProperty;
    function uN(e, t, r, n, i, o) {
      var a = r & oN,
        s = fv(e),
        c = s.length,
        d = fv(t),
        _ = d.length;
      if (c != _ && !a) return !1;
      for (var f = c; f--; ) {
        var m = s[f];
        if (!(a ? m in t : sN.call(t, m))) return !1;
      }
      var p = o.get(e),
        h = o.get(t);
      if (p && h) return p == t && h == e;
      var T = !0;
      o.set(e, t), o.set(t, e);
      for (var A = a; ++f < c; ) {
        m = s[f];
        var S = e[m],
          N = t[m];
        if (n) var O = a ? n(N, S, m, t, e, o) : n(S, N, m, e, t, o);
        if (!(O === void 0 ? S === N || i(S, N, r, n, o) : O)) {
          T = !1;
          break;
        }
        A || (A = m == "constructor");
      }
      if (T && !A) {
        var M = e.constructor,
          D = t.constructor;
        M != D &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof M == "function" &&
            M instanceof M &&
            typeof D == "function" &&
            D instanceof D
          ) &&
          (T = !1);
      }
      return o.delete(e), o.delete(t), T;
    }
    dv.exports = uN;
  });
  var hv = u((fj, vv) => {
    var cN = St(),
      lN = nt(),
      fN = cN(lN, "DataView");
    vv.exports = fN;
  });
  var Ev = u((dj, gv) => {
    var dN = St(),
      pN = nt(),
      vN = dN(pN, "Promise");
    gv.exports = vN;
  });
  var mv = u((pj, _v) => {
    var hN = St(),
      gN = nt(),
      EN = hN(gN, "Set");
    _v.exports = EN;
  });
  var _a = u((vj, yv) => {
    var _N = St(),
      mN = nt(),
      yN = _N(mN, "WeakMap");
    yv.exports = yN;
  });
  var Qn = u((hj, Av) => {
    var ma = hv(),
      ya = Un(),
      Ia = Ev(),
      Ta = mv(),
      ba = _a(),
      Sv = wt(),
      lr = ca(),
      Iv = "[object Map]",
      IN = "[object Object]",
      Tv = "[object Promise]",
      bv = "[object Set]",
      Ov = "[object WeakMap]",
      wv = "[object DataView]",
      TN = lr(ma),
      bN = lr(ya),
      ON = lr(Ia),
      wN = lr(Ta),
      SN = lr(ba),
      Ut = Sv;
    ((ma && Ut(new ma(new ArrayBuffer(1))) != wv) ||
      (ya && Ut(new ya()) != Iv) ||
      (Ia && Ut(Ia.resolve()) != Tv) ||
      (Ta && Ut(new Ta()) != bv) ||
      (ba && Ut(new ba()) != Ov)) &&
      (Ut = function (e) {
        var t = Sv(e),
          r = t == IN ? e.constructor : void 0,
          n = r ? lr(r) : "";
        if (n)
          switch (n) {
            case TN:
              return wv;
            case bN:
              return Iv;
            case ON:
              return Tv;
            case wN:
              return bv;
            case SN:
              return Ov;
          }
        return t;
      });
    Av.exports = Ut;
  });
  var Dv = u((gj, Pv) => {
    var Oa = la(),
      AN = fa(),
      RN = Op(),
      CN = pv(),
      Rv = Qn(),
      Cv = Ne(),
      xv = Hn(),
      xN = Kn(),
      NN = 1,
      Nv = "[object Arguments]",
      qv = "[object Array]",
      $n = "[object Object]",
      qN = Object.prototype,
      Lv = qN.hasOwnProperty;
    function LN(e, t, r, n, i, o) {
      var a = Cv(e),
        s = Cv(t),
        c = a ? qv : Rv(e),
        d = s ? qv : Rv(t);
      (c = c == Nv ? $n : c), (d = d == Nv ? $n : d);
      var _ = c == $n,
        f = d == $n,
        m = c == d;
      if (m && xv(e)) {
        if (!xv(t)) return !1;
        (a = !0), (_ = !1);
      }
      if (m && !_)
        return (
          o || (o = new Oa()),
          a || xN(e) ? AN(e, t, r, n, i, o) : RN(e, t, c, r, n, i, o)
        );
      if (!(r & NN)) {
        var p = _ && Lv.call(e, "__wrapped__"),
          h = f && Lv.call(t, "__wrapped__");
        if (p || h) {
          var T = p ? e.value() : e,
            A = h ? t.value() : t;
          return o || (o = new Oa()), i(T, A, r, n, o);
        }
      }
      return m ? (o || (o = new Oa()), CN(e, t, r, n, i, o)) : !1;
    }
    Pv.exports = LN;
  });
  var wa = u((Ej, Gv) => {
    var PN = Dv(),
      Mv = _t();
    function Fv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Mv(e) && !Mv(t))
        ? e !== e && t !== t
        : PN(e, t, r, n, Fv, i);
    }
    Gv.exports = Fv;
  });
  var Uv = u((_j, Xv) => {
    var DN = la(),
      MN = wa(),
      FN = 1,
      GN = 2;
    function XN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var c = s[0],
          d = e[c],
          _ = s[1];
        if (a && s[2]) {
          if (d === void 0 && !(c in e)) return !1;
        } else {
          var f = new DN();
          if (n) var m = n(d, _, c, e, t, f);
          if (!(m === void 0 ? MN(_, d, FN | GN, n, f) : m)) return !1;
        }
      }
      return !0;
    }
    Xv.exports = XN;
  });
  var Sa = u((mj, Vv) => {
    var UN = dt();
    function VN(e) {
      return e === e && !UN(e);
    }
    Vv.exports = VN;
  });
  var Bv = u((yj, Wv) => {
    var WN = Sa(),
      BN = Hr();
    function HN(e) {
      for (var t = BN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, WN(i)];
      }
      return t;
    }
    Wv.exports = HN;
  });
  var Aa = u((Ij, Hv) => {
    function kN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Hv.exports = kN;
  });
  var jv = u((Tj, kv) => {
    var jN = Uv(),
      KN = Bv(),
      zN = Aa();
    function YN(e) {
      var t = KN(e);
      return t.length == 1 && t[0][2]
        ? zN(t[0][0], t[0][1])
        : function (r) {
            return r === e || jN(r, e, t);
          };
    }
    kv.exports = YN;
  });
  var kr = u((bj, Kv) => {
    var QN = wt(),
      $N = _t(),
      ZN = "[object Symbol]";
    function JN(e) {
      return typeof e == "symbol" || ($N(e) && QN(e) == ZN);
    }
    Kv.exports = JN;
  });
  var Zn = u((Oj, zv) => {
    var eq = Ne(),
      tq = kr(),
      rq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      nq = /^\w*$/;
    function iq(e, t) {
      if (eq(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        tq(e)
        ? !0
        : nq.test(e) || !rq.test(e) || (t != null && e in Object(t));
    }
    zv.exports = iq;
  });
  var $v = u((wj, Qv) => {
    var Yv = Vn(),
      oq = "Expected a function";
    function Ra(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(oq);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (Ra.Cache || Yv)()), r;
    }
    Ra.Cache = Yv;
    Qv.exports = Ra;
  });
  var Jv = u((Sj, Zv) => {
    var aq = $v(),
      sq = 500;
    function uq(e) {
      var t = aq(e, function (n) {
          return r.size === sq && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Zv.exports = uq;
  });
  var th = u((Aj, eh) => {
    var cq = Jv(),
      lq =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      fq = /\\(\\)?/g,
      dq = cq(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(lq, function (r, n, i, o) {
            t.push(i ? o.replace(fq, "$1") : n || r);
          }),
          t
        );
      });
    eh.exports = dq;
  });
  var Ca = u((Rj, rh) => {
    function pq(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    rh.exports = pq;
  });
  var uh = u((Cj, sh) => {
    var nh = Zt(),
      vq = Ca(),
      hq = Ne(),
      gq = kr(),
      Eq = 1 / 0,
      ih = nh ? nh.prototype : void 0,
      oh = ih ? ih.toString : void 0;
    function ah(e) {
      if (typeof e == "string") return e;
      if (hq(e)) return vq(e, ah) + "";
      if (gq(e)) return oh ? oh.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -Eq ? "-0" : t;
    }
    sh.exports = ah;
  });
  var lh = u((xj, ch) => {
    var _q = uh();
    function mq(e) {
      return e == null ? "" : _q(e);
    }
    ch.exports = mq;
  });
  var jr = u((Nj, fh) => {
    var yq = Ne(),
      Iq = Zn(),
      Tq = th(),
      bq = lh();
    function Oq(e, t) {
      return yq(e) ? e : Iq(e, t) ? [e] : Tq(bq(e));
    }
    fh.exports = Oq;
  });
  var fr = u((qj, dh) => {
    var wq = kr(),
      Sq = 1 / 0;
    function Aq(e) {
      if (typeof e == "string" || wq(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -Sq ? "-0" : t;
    }
    dh.exports = Aq;
  });
  var Jn = u((Lj, ph) => {
    var Rq = jr(),
      Cq = fr();
    function xq(e, t) {
      t = Rq(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[Cq(t[r++])];
      return r && r == n ? e : void 0;
    }
    ph.exports = xq;
  });
  var ei = u((Pj, vh) => {
    var Nq = Jn();
    function qq(e, t, r) {
      var n = e == null ? void 0 : Nq(e, t);
      return n === void 0 ? r : n;
    }
    vh.exports = qq;
  });
  var gh = u((Dj, hh) => {
    function Lq(e, t) {
      return e != null && t in Object(e);
    }
    hh.exports = Lq;
  });
  var _h = u((Mj, Eh) => {
    var Pq = jr(),
      Dq = Ur(),
      Mq = Ne(),
      Fq = kn(),
      Gq = jn(),
      Xq = fr();
    function Uq(e, t, r) {
      t = Pq(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = Xq(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && Gq(i) && Fq(a, i) && (Mq(e) || Dq(e)));
    }
    Eh.exports = Uq;
  });
  var yh = u((Fj, mh) => {
    var Vq = gh(),
      Wq = _h();
    function Bq(e, t) {
      return e != null && Wq(e, t, Vq);
    }
    mh.exports = Bq;
  });
  var Th = u((Gj, Ih) => {
    var Hq = wa(),
      kq = ei(),
      jq = yh(),
      Kq = Zn(),
      zq = Sa(),
      Yq = Aa(),
      Qq = fr(),
      $q = 1,
      Zq = 2;
    function Jq(e, t) {
      return Kq(e) && zq(t)
        ? Yq(Qq(e), t)
        : function (r) {
            var n = kq(r, e);
            return n === void 0 && n === t ? jq(r, e) : Hq(t, n, $q | Zq);
          };
    }
    Ih.exports = Jq;
  });
  var ti = u((Xj, bh) => {
    function eL(e) {
      return e;
    }
    bh.exports = eL;
  });
  var xa = u((Uj, Oh) => {
    function tL(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Oh.exports = tL;
  });
  var Sh = u((Vj, wh) => {
    var rL = Jn();
    function nL(e) {
      return function (t) {
        return rL(t, e);
      };
    }
    wh.exports = nL;
  });
  var Rh = u((Wj, Ah) => {
    var iL = xa(),
      oL = Sh(),
      aL = Zn(),
      sL = fr();
    function uL(e) {
      return aL(e) ? iL(sL(e)) : oL(e);
    }
    Ah.exports = uL;
  });
  var At = u((Bj, Ch) => {
    var cL = jv(),
      lL = Th(),
      fL = ti(),
      dL = Ne(),
      pL = Rh();
    function vL(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? fL
        : typeof e == "object"
        ? dL(e)
          ? lL(e[0], e[1])
          : cL(e)
        : pL(e);
    }
    Ch.exports = vL;
  });
  var Na = u((Hj, xh) => {
    var hL = At(),
      gL = Xt(),
      EL = Hr();
    function _L(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!gL(t)) {
          var o = hL(r, 3);
          (t = EL(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    xh.exports = _L;
  });
  var qa = u((kj, Nh) => {
    function mL(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Nh.exports = mL;
  });
  var Lh = u((jj, qh) => {
    var yL = /\s/;
    function IL(e) {
      for (var t = e.length; t-- && yL.test(e.charAt(t)); );
      return t;
    }
    qh.exports = IL;
  });
  var Dh = u((Kj, Ph) => {
    var TL = Lh(),
      bL = /^\s+/;
    function OL(e) {
      return e && e.slice(0, TL(e) + 1).replace(bL, "");
    }
    Ph.exports = OL;
  });
  var ri = u((zj, Gh) => {
    var wL = Dh(),
      Mh = dt(),
      SL = kr(),
      Fh = 0 / 0,
      AL = /^[-+]0x[0-9a-f]+$/i,
      RL = /^0b[01]+$/i,
      CL = /^0o[0-7]+$/i,
      xL = parseInt;
    function NL(e) {
      if (typeof e == "number") return e;
      if (SL(e)) return Fh;
      if (Mh(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Mh(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = wL(e);
      var r = RL.test(e);
      return r || CL.test(e) ? xL(e.slice(2), r ? 2 : 8) : AL.test(e) ? Fh : +e;
    }
    Gh.exports = NL;
  });
  var Vh = u((Yj, Uh) => {
    var qL = ri(),
      Xh = 1 / 0,
      LL = 17976931348623157e292;
    function PL(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = qL(e)), e === Xh || e === -Xh)) {
        var t = e < 0 ? -1 : 1;
        return t * LL;
      }
      return e === e ? e : 0;
    }
    Uh.exports = PL;
  });
  var La = u((Qj, Wh) => {
    var DL = Vh();
    function ML(e) {
      var t = DL(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Wh.exports = ML;
  });
  var Hh = u(($j, Bh) => {
    var FL = qa(),
      GL = At(),
      XL = La(),
      UL = Math.max;
    function VL(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : XL(r);
      return i < 0 && (i = UL(n + i, 0)), FL(e, GL(t, 3), i);
    }
    Bh.exports = VL;
  });
  var Pa = u((Zj, kh) => {
    var WL = Na(),
      BL = Hh(),
      HL = WL(BL);
    kh.exports = HL;
  });
  var ii = u((Ge) => {
    "use strict";
    var kL = et().default;
    Object.defineProperty(Ge, "__esModule", { value: !0 });
    Ge.withBrowser =
      Ge.TRANSFORM_STYLE_PREFIXED =
      Ge.TRANSFORM_PREFIXED =
      Ge.IS_BROWSER_ENV =
      Ge.FLEX_PREFIXED =
      Ge.ELEMENT_MATCHES =
        void 0;
    var jL = kL(Pa()),
      Kh = typeof window < "u";
    Ge.IS_BROWSER_ENV = Kh;
    var ni = (e, t) => (Kh ? e() : t);
    Ge.withBrowser = ni;
    var KL = ni(() =>
      (0, jL.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    Ge.ELEMENT_MATCHES = KL;
    var zL = ni(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let i = 0; i < n; i++) {
          let o = t[i];
          if (((e.style.display = o), e.style.display === o)) return o;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    Ge.FLEX_PREFIXED = zL;
    var zh = ni(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let i = 0; i < n; i++) {
          let o = t[i] + r;
          if (e.style[o] !== void 0) return o;
        }
      }
      return "transform";
    }, "transform");
    Ge.TRANSFORM_PREFIXED = zh;
    var jh = zh.split("transform")[0],
      YL = jh ? jh + "TransformStyle" : "transformStyle";
    Ge.TRANSFORM_STYLE_PREFIXED = YL;
  });
  var Da = u((e5, Jh) => {
    var QL = 4,
      $L = 0.001,
      ZL = 1e-7,
      JL = 10,
      Kr = 11,
      oi = 1 / (Kr - 1),
      eP = typeof Float32Array == "function";
    function Yh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Qh(e, t) {
      return 3 * t - 6 * e;
    }
    function $h(e) {
      return 3 * e;
    }
    function ai(e, t, r) {
      return ((Yh(t, r) * e + Qh(t, r)) * e + $h(t)) * e;
    }
    function Zh(e, t, r) {
      return 3 * Yh(t, r) * e * e + 2 * Qh(t, r) * e + $h(t);
    }
    function tP(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = ai(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > ZL && ++s < JL);
      return a;
    }
    function rP(e, t, r, n) {
      for (var i = 0; i < QL; ++i) {
        var o = Zh(t, r, n);
        if (o === 0) return t;
        var a = ai(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    Jh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = eP ? new Float32Array(Kr) : new Array(Kr);
      if (t !== r || n !== i)
        for (var a = 0; a < Kr; ++a) o[a] = ai(a * oi, t, n);
      function s(c) {
        for (var d = 0, _ = 1, f = Kr - 1; _ !== f && o[_] <= c; ++_) d += oi;
        --_;
        var m = (c - o[_]) / (o[_ + 1] - o[_]),
          p = d + m * oi,
          h = Zh(p, t, n);
        return h >= $L ? rP(c, p, t, n) : h === 0 ? p : tP(c, d, d + oi, t, n);
      }
      return function (d) {
        return t === r && n === i
          ? d
          : d === 0
          ? 0
          : d === 1
          ? 1
          : ai(s(d), r, i);
      };
    };
  });
  var Ma = u((se) => {
    "use strict";
    var nP = et().default;
    Object.defineProperty(se, "__esModule", { value: !0 });
    se.bounce = XP;
    se.bouncePast = UP;
    se.easeOut = se.easeInOut = se.easeIn = se.ease = void 0;
    se.inBack = xP;
    se.inCirc = SP;
    se.inCubic = fP;
    se.inElastic = LP;
    se.inExpo = bP;
    se.inOutBack = qP;
    se.inOutCirc = RP;
    se.inOutCubic = pP;
    se.inOutElastic = DP;
    se.inOutExpo = wP;
    se.inOutQuad = lP;
    se.inOutQuart = gP;
    se.inOutQuint = mP;
    se.inOutSine = TP;
    se.inQuad = uP;
    se.inQuart = vP;
    se.inQuint = EP;
    se.inSine = yP;
    se.outBack = NP;
    se.outBounce = CP;
    se.outCirc = AP;
    se.outCubic = dP;
    se.outElastic = PP;
    se.outExpo = OP;
    se.outQuad = cP;
    se.outQuart = hP;
    se.outQuint = _P;
    se.outSine = IP;
    se.swingFrom = FP;
    se.swingFromTo = MP;
    se.swingTo = GP;
    var si = nP(Da()),
      yt = 1.70158,
      iP = (0, si.default)(0.25, 0.1, 0.25, 1);
    se.ease = iP;
    var oP = (0, si.default)(0.42, 0, 1, 1);
    se.easeIn = oP;
    var aP = (0, si.default)(0, 0, 0.58, 1);
    se.easeOut = aP;
    var sP = (0, si.default)(0.42, 0, 0.58, 1);
    se.easeInOut = sP;
    function uP(e) {
      return Math.pow(e, 2);
    }
    function cP(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function lP(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function fP(e) {
      return Math.pow(e, 3);
    }
    function dP(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function pP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function vP(e) {
      return Math.pow(e, 4);
    }
    function hP(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function gP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function EP(e) {
      return Math.pow(e, 5);
    }
    function _P(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function mP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function yP(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function IP(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function TP(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function bP(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function OP(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function wP(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function SP(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function AP(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function RP(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function CP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function xP(e) {
      let t = yt;
      return e * e * ((t + 1) * e - t);
    }
    function NP(e) {
      let t = yt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function qP(e) {
      let t = yt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function LP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function PP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function DP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function MP(e) {
      let t = yt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function FP(e) {
      let t = yt;
      return e * e * ((t + 1) * e - t);
    }
    function GP(e) {
      let t = yt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function XP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function UP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Ga = u((zr) => {
    "use strict";
    var VP = et().default,
      WP = Dt().default;
    Object.defineProperty(zr, "__esModule", { value: !0 });
    zr.applyEasing = kP;
    zr.createBezierEasing = HP;
    zr.optimizeFloat = Fa;
    var eg = WP(Ma()),
      BP = VP(Da());
    function Fa(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        i = Number(Math.round(e * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0;
    }
    function HP(e) {
      return (0, BP.default)(...e);
    }
    function kP(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : Fa(r ? (t > 0 ? r(t) : t) : t > 0 && e && eg[e] ? eg[e](t) : t);
    }
  });
  var ig = u((dr) => {
    "use strict";
    Object.defineProperty(dr, "__esModule", { value: !0 });
    dr.createElementState = ng;
    dr.ixElements = void 0;
    dr.mergeActionState = Xa;
    var ui = nr(),
      rg = He(),
      {
        HTML_ELEMENT: n5,
        PLAIN_OBJECT: jP,
        ABSTRACT_NODE: i5,
        CONFIG_X_VALUE: KP,
        CONFIG_Y_VALUE: zP,
        CONFIG_Z_VALUE: YP,
        CONFIG_VALUE: QP,
        CONFIG_X_UNIT: $P,
        CONFIG_Y_UNIT: ZP,
        CONFIG_Z_UNIT: JP,
        CONFIG_UNIT: eD,
      } = rg.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: tD,
        IX2_INSTANCE_ADDED: rD,
        IX2_ELEMENT_STATE_CHANGED: nD,
      } = rg.IX2EngineActionTypes,
      tg = {},
      iD = "refState",
      oD = (e = tg, t = {}) => {
        switch (t.type) {
          case tD:
            return tg;
          case rD: {
            let {
                elementId: r,
                element: n,
                origin: i,
                actionItem: o,
                refType: a,
              } = t.payload,
              { actionTypeId: s } = o,
              c = e;
            return (
              (0, ui.getIn)(c, [r, n]) !== n && (c = ng(c, n, a, r, o)),
              Xa(c, r, s, i, o)
            );
          }
          case nD: {
            let {
              elementId: r,
              actionTypeId: n,
              current: i,
              actionItem: o,
            } = t.payload;
            return Xa(e, r, n, i, o);
          }
          default:
            return e;
        }
      };
    dr.ixElements = oD;
    function ng(e, t, r, n, i) {
      let o =
        r === jP ? (0, ui.getIn)(i, ["config", "target", "objectId"]) : null;
      return (0, ui.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
    }
    function Xa(e, t, r, n, i) {
      let o = sD(i),
        a = [t, iD, r];
      return (0, ui.mergeIn)(e, a, n, o);
    }
    var aD = [
      [KP, $P],
      [zP, ZP],
      [YP, JP],
      [QP, eD],
    ];
    function sD(e) {
      let { config: t } = e;
      return aD.reduce((r, n) => {
        let i = n[0],
          o = n[1],
          a = t[i],
          s = t[o];
        return a != null && s != null && (r[o] = s), r;
      }, {});
    }
  });
  var og = u((qe) => {
    "use strict";
    Object.defineProperty(qe, "__esModule", { value: !0 });
    qe.renderPlugin =
      qe.getPluginOrigin =
      qe.getPluginDuration =
      qe.getPluginDestination =
      qe.getPluginConfig =
      qe.createPluginInstance =
      qe.clearPlugin =
        void 0;
    var uD = (e) => e.value;
    qe.getPluginConfig = uD;
    var cD = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    qe.getPluginDuration = cD;
    var lD = (e) => e || { value: 0 };
    qe.getPluginOrigin = lD;
    var fD = (e) => ({ value: e.value });
    qe.getPluginDestination = fD;
    var dD = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    qe.createPluginInstance = dD;
    var pD = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    qe.renderPlugin = pD;
    var vD = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    qe.clearPlugin = vD;
  });
  var sg = u((Le) => {
    "use strict";
    Object.defineProperty(Le, "__esModule", { value: !0 });
    Le.renderPlugin =
      Le.getPluginOrigin =
      Le.getPluginDuration =
      Le.getPluginDestination =
      Le.getPluginConfig =
      Le.createPluginInstance =
      Le.clearPlugin =
        void 0;
    var hD = (e) => document.querySelector(`[data-w-id="${e}"]`),
      gD = () => window.Webflow.require("spline"),
      ED = (e, t) => e.filter((r) => !t.includes(r)),
      _D = (e, t) => e.value[t];
    Le.getPluginConfig = _D;
    var mD = () => null;
    Le.getPluginDuration = mD;
    var ag = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      yD = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = ED(n, o);
          return a.length ? a.reduce((c, d) => ((c[d] = ag[d]), c), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = ag[a]), o), {});
      };
    Le.getPluginOrigin = yD;
    var ID = (e) => e.value;
    Le.getPluginDestination = ID;
    var TD = (e, t) => {
      var r, n;
      let i =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (n = r.target) === null ||
        n === void 0
          ? void 0
          : n.pluginElement;
      return i ? hD(i) : null;
    };
    Le.createPluginInstance = TD;
    var bD = (e, t, r) => {
      let n = gD().getInstance(e),
        i = r.config.target.objectId;
      if (!n || !i) return;
      let o = n.spline.findObjectById(i);
      if (!o) return;
      let { PLUGIN_SPLINE: a } = t;
      a.positionX != null && (o.position.x = a.positionX),
        a.positionY != null && (o.position.y = a.positionY),
        a.positionZ != null && (o.position.z = a.positionZ),
        a.rotationX != null && (o.rotation.x = a.rotationX),
        a.rotationY != null && (o.rotation.y = a.rotationY),
        a.rotationZ != null && (o.rotation.z = a.rotationZ),
        a.scaleX != null && (o.scale.x = a.scaleX),
        a.scaleY != null && (o.scale.y = a.scaleY),
        a.scaleZ != null && (o.scale.z = a.scaleZ);
    };
    Le.renderPlugin = bD;
    var OD = () => null;
    Le.clearPlugin = OD;
  });
  var fg = u((ci) => {
    "use strict";
    var lg = Dt().default,
      wD = et().default;
    Object.defineProperty(ci, "__esModule", { value: !0 });
    ci.pluginMethodMap = void 0;
    var ug = wD(rr()),
      cg = He(),
      SD = lg(og()),
      AD = lg(sg()),
      RD = new Map([
        [cg.ActionTypeConsts.PLUGIN_LOTTIE, (0, ug.default)({}, SD)],
        [cg.ActionTypeConsts.PLUGIN_SPLINE, (0, ug.default)({}, AD)],
      ]);
    ci.pluginMethodMap = RD;
  });
  var Ua = u((Ce) => {
    "use strict";
    Object.defineProperty(Ce, "__esModule", { value: !0 });
    Ce.getPluginOrigin =
      Ce.getPluginDuration =
      Ce.getPluginDestination =
      Ce.getPluginConfig =
      Ce.createPluginInstance =
      Ce.clearPlugin =
        void 0;
    Ce.isPluginType = xD;
    Ce.renderPlugin = void 0;
    var CD = ii(),
      dg = fg();
    function xD(e) {
      return dg.pluginMethodMap.has(e);
    }
    var Vt = (e) => (t) => {
        if (!CD.IS_BROWSER_ENV) return () => null;
        let r = dg.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      ND = Vt("getPluginConfig");
    Ce.getPluginConfig = ND;
    var qD = Vt("getPluginOrigin");
    Ce.getPluginOrigin = qD;
    var LD = Vt("getPluginDuration");
    Ce.getPluginDuration = LD;
    var PD = Vt("getPluginDestination");
    Ce.getPluginDestination = PD;
    var DD = Vt("createPluginInstance");
    Ce.createPluginInstance = DD;
    var MD = Vt("renderPlugin");
    Ce.renderPlugin = MD;
    var FD = Vt("clearPlugin");
    Ce.clearPlugin = FD;
  });
  var vg = u((l5, pg) => {
    function GD(e, t) {
      return e == null || e !== e ? t : e;
    }
    pg.exports = GD;
  });
  var gg = u((f5, hg) => {
    function XD(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    hg.exports = XD;
  });
  var _g = u((d5, Eg) => {
    function UD(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++i];
          if (r(o[c], c, o) === !1) break;
        }
        return t;
      };
    }
    Eg.exports = UD;
  });
  var yg = u((p5, mg) => {
    var VD = _g(),
      WD = VD();
    mg.exports = WD;
  });
  var Va = u((v5, Ig) => {
    var BD = yg(),
      HD = Hr();
    function kD(e, t) {
      return e && BD(e, t, HD);
    }
    Ig.exports = kD;
  });
  var bg = u((h5, Tg) => {
    var jD = Xt();
    function KD(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!jD(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Tg.exports = KD;
  });
  var Wa = u((g5, Og) => {
    var zD = Va(),
      YD = bg(),
      QD = YD(zD);
    Og.exports = QD;
  });
  var Sg = u((E5, wg) => {
    function $D(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    wg.exports = $D;
  });
  var Rg = u((_5, Ag) => {
    var ZD = gg(),
      JD = Wa(),
      eM = At(),
      tM = Sg(),
      rM = Ne();
    function nM(e, t, r) {
      var n = rM(e) ? ZD : tM,
        i = arguments.length < 3;
      return n(e, eM(t, 4), r, i, JD);
    }
    Ag.exports = nM;
  });
  var xg = u((m5, Cg) => {
    var iM = qa(),
      oM = At(),
      aM = La(),
      sM = Math.max,
      uM = Math.min;
    function cM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = aM(r)), (i = r < 0 ? sM(n + i, 0) : uM(i, n - 1))),
        iM(e, oM(t, 3), i, !0)
      );
    }
    Cg.exports = cM;
  });
  var qg = u((y5, Ng) => {
    var lM = Na(),
      fM = xg(),
      dM = lM(fM);
    Ng.exports = dM;
  });
  var Pg = u((li) => {
    "use strict";
    Object.defineProperty(li, "__esModule", { value: !0 });
    li.default = void 0;
    var pM = Object.prototype.hasOwnProperty;
    function Lg(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function vM(e, t) {
      if (Lg(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let i = 0; i < r.length; i++)
        if (!pM.call(t, r[i]) || !Lg(e[r[i]], t[r[i]])) return !1;
      return !0;
    }
    var hM = vM;
    li.default = hM;
  });
  var Jg = u((Ee) => {
    "use strict";
    var vi = et().default;
    Object.defineProperty(Ee, "__esModule", { value: !0 });
    Ee.cleanupHTMLElement = p1;
    Ee.clearAllStyles = d1;
    Ee.clearObjectCache = LM;
    Ee.getActionListProgress = h1;
    Ee.getAffectedElements = Ya;
    Ee.getComputedStyle = VM;
    Ee.getDestinationValues = zM;
    Ee.getElementId = FM;
    Ee.getInstanceId = DM;
    Ee.getInstanceOrigin = HM;
    Ee.getItemConfigByKey = void 0;
    Ee.getMaxDurationItemIndex = Zg;
    Ee.getNamespacedParameterId = _1;
    Ee.getRenderType = Yg;
    Ee.getStyleProp = YM;
    Ee.mediaQueriesEqual = y1;
    Ee.observeStore = UM;
    Ee.reduceListToGroup = g1;
    Ee.reifyState = GM;
    Ee.renderHTMLElement = QM;
    Object.defineProperty(Ee, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return Wg.default;
      },
    });
    Ee.shouldAllowMediaQuery = m1;
    Ee.shouldNamespaceEventParameter = E1;
    Ee.stringifyTarget = I1;
    var Rt = vi(vg()),
      ka = vi(Rg()),
      Ha = vi(qg()),
      Dg = nr(),
      Wt = He(),
      Wg = vi(Pg()),
      gM = Ga(),
      ht = Ua(),
      Xe = ii(),
      {
        BACKGROUND: EM,
        TRANSFORM: _M,
        TRANSLATE_3D: mM,
        SCALE_3D: yM,
        ROTATE_X: IM,
        ROTATE_Y: TM,
        ROTATE_Z: bM,
        SKEW: OM,
        PRESERVE_3D: wM,
        FLEX: SM,
        OPACITY: di,
        FILTER: Yr,
        FONT_VARIATION_SETTINGS: Qr,
        WIDTH: pt,
        HEIGHT: vt,
        BACKGROUND_COLOR: Bg,
        BORDER_COLOR: AM,
        COLOR: RM,
        CHILDREN: Mg,
        IMMEDIATE_CHILDREN: CM,
        SIBLINGS: Fg,
        PARENT: xM,
        DISPLAY: pi,
        WILL_CHANGE: pr,
        AUTO: Ct,
        COMMA_DELIMITER: $r,
        COLON_DELIMITER: NM,
        BAR_DELIMITER: Ba,
        RENDER_TRANSFORM: Hg,
        RENDER_GENERAL: ja,
        RENDER_STYLE: Ka,
        RENDER_PLUGIN: kg,
      } = Wt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: vr,
        TRANSFORM_SCALE: hr,
        TRANSFORM_ROTATE: gr,
        TRANSFORM_SKEW: Zr,
        STYLE_OPACITY: jg,
        STYLE_FILTER: Jr,
        STYLE_FONT_VARIATION: en,
        STYLE_SIZE: Er,
        STYLE_BACKGROUND_COLOR: _r,
        STYLE_BORDER: mr,
        STYLE_TEXT_COLOR: yr,
        GENERAL_DISPLAY: hi,
        OBJECT_VALUE: qM,
      } = Wt.ActionTypeConsts,
      Kg = (e) => e.trim(),
      za = Object.freeze({ [_r]: Bg, [mr]: AM, [yr]: RM }),
      zg = Object.freeze({
        [Xe.TRANSFORM_PREFIXED]: _M,
        [Bg]: EM,
        [di]: di,
        [Yr]: Yr,
        [pt]: pt,
        [vt]: vt,
        [Qr]: Qr,
      }),
      fi = new Map();
    function LM() {
      fi.clear();
    }
    var PM = 1;
    function DM() {
      return "i" + PM++;
    }
    var MM = 1;
    function FM(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + MM++;
    }
    function GM({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, ka.default)(
          e,
          (a, s) => {
            let { eventTypeId: c } = s;
            return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
          },
          {}
        ),
        i = r && r.mediaQueries,
        o = [];
      return (
        i
          ? (o = i.map((a) => a.key))
          : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: i,
            mediaQueryKeys: o,
          },
        }
      );
    }
    var XM = (e, t) => e === t;
    function UM({ store: e, select: t, onChange: r, comparator: n = XM }) {
      let { getState: i, subscribe: o } = e,
        a = o(c),
        s = t(i());
      function c() {
        let d = t(i());
        if (d == null) {
          a();
          return;
        }
        n(d, s) || ((s = d), r(s, e));
      }
      return a;
    }
    function Gg(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: o,
          appliesTo: a,
          useEventTarget: s,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: o,
          appliesTo: a,
          useEventTarget: s,
        };
      }
      return {};
    }
    function Ya({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: i,
    }) {
      var o, a, s;
      if (!i) throw new Error("IX2 missing elementApi");
      let { targets: c } = e;
      if (Array.isArray(c) && c.length > 0)
        return c.reduce(
          (C, G) =>
            C.concat(
              Ya({
                config: { target: G },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i,
              })
            ),
          []
        );
      let {
          getValidDocument: d,
          getQuerySelector: _,
          queryDocument: f,
          getChildElements: m,
          getSiblingElements: p,
          matchSelector: h,
          elementContains: T,
          isSiblingNode: A,
        } = i,
        { target: S } = e;
      if (!S) return [];
      let {
        id: N,
        objectId: O,
        selector: M,
        selectorGuids: D,
        appliesTo: F,
        useEventTarget: W,
      } = Gg(S);
      if (O) return [fi.has(O) ? fi.get(O) : fi.set(O, {}).get(O)];
      if (F === Wt.EventAppliesTo.PAGE) {
        let C = d(N);
        return C ? [C] : [];
      }
      let Q =
          ((o =
            t == null ||
            (a = t.action) === null ||
            a === void 0 ||
            (s = a.config) === null ||
            s === void 0
              ? void 0
              : s.affectedElements) !== null && o !== void 0
            ? o
            : {})[N || M] || {},
        oe = !!(Q.id || Q.selector),
        B,
        L,
        v,
        P = t && _(Gg(t.target));
      if (
        (oe
          ? ((B = Q.limitAffectedElements), (L = P), (v = _(Q)))
          : (L = v = _({ id: N, selector: M, selectorGuids: D })),
        t && W)
      ) {
        let C = r && (v || W === !0) ? [r] : f(P);
        if (v) {
          if (W === xM) return f(v).filter((G) => C.some((K) => T(G, K)));
          if (W === Mg) return f(v).filter((G) => C.some((K) => T(K, G)));
          if (W === Fg) return f(v).filter((G) => C.some((K) => A(K, G)));
        }
        return C;
      }
      return L == null || v == null
        ? []
        : Xe.IS_BROWSER_ENV && n
        ? f(v).filter((C) => n.contains(C))
        : B === Mg
        ? f(L, v)
        : B === CM
        ? m(f(L)).filter(h(v))
        : B === Fg
        ? p(f(L)).filter(h(v))
        : f(v);
    }
    function VM({ element: e, actionItem: t }) {
      if (!Xe.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case Er:
        case _r:
        case mr:
        case yr:
        case hi:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var Xg = /px/,
      WM = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = $M[n.type]), r),
          e || {}
        ),
      BM = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = ZM[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function HM(e, t = {}, r = {}, n, i) {
      let { getStyle: o } = i,
        { actionTypeId: a } = n;
      if ((0, ht.isPluginType)(a)) return (0, ht.getPluginOrigin)(a)(t[a], n);
      switch (n.actionTypeId) {
        case vr:
        case hr:
        case gr:
        case Zr:
          return t[n.actionTypeId] || Qa[n.actionTypeId];
        case Jr:
          return WM(t[n.actionTypeId], n.config.filters);
        case en:
          return BM(t[n.actionTypeId], n.config.fontVariations);
        case jg:
          return { value: (0, Rt.default)(parseFloat(o(e, di)), 1) };
        case Er: {
          let s = o(e, pt),
            c = o(e, vt),
            d,
            _;
          return (
            n.config.widthUnit === Ct
              ? (d = Xg.test(s) ? parseFloat(s) : parseFloat(r.width))
              : (d = (0, Rt.default)(parseFloat(s), parseFloat(r.width))),
            n.config.heightUnit === Ct
              ? (_ = Xg.test(c) ? parseFloat(c) : parseFloat(r.height))
              : (_ = (0, Rt.default)(parseFloat(c), parseFloat(r.height))),
            { widthValue: d, heightValue: _ }
          );
        }
        case _r:
        case mr:
        case yr:
          return c1({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: o,
          });
        case hi:
          return { value: (0, Rt.default)(o(e, pi), r.display) };
        case qM:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var kM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      jM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      KM = (e, t, r) => {
        if ((0, ht.isPluginType)(e)) return (0, ht.getPluginConfig)(e)(r, t);
        switch (e) {
          case Jr: {
            let n = (0, Ha.default)(r.filters, ({ type: i }) => i === t);
            return n ? n.value : 0;
          }
          case en: {
            let n = (0, Ha.default)(r.fontVariations, ({ type: i }) => i === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    Ee.getItemConfigByKey = KM;
    function zM({ element: e, actionItem: t, elementApi: r }) {
      if ((0, ht.isPluginType)(t.actionTypeId))
        return (0, ht.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case vr:
        case hr:
        case gr:
        case Zr: {
          let { xValue: n, yValue: i, zValue: o } = t.config;
          return { xValue: n, yValue: i, zValue: o };
        }
        case Er: {
          let { getStyle: n, setStyle: i, getProperty: o } = r,
            { widthUnit: a, heightUnit: s } = t.config,
            { widthValue: c, heightValue: d } = t.config;
          if (!Xe.IS_BROWSER_ENV) return { widthValue: c, heightValue: d };
          if (a === Ct) {
            let _ = n(e, pt);
            i(e, pt, ""), (c = o(e, "offsetWidth")), i(e, pt, _);
          }
          if (s === Ct) {
            let _ = n(e, vt);
            i(e, vt, ""), (d = o(e, "offsetHeight")), i(e, vt, _);
          }
          return { widthValue: c, heightValue: d };
        }
        case _r:
        case mr:
        case yr: {
          let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
          return { rValue: n, gValue: i, bValue: o, aValue: a };
        }
        case Jr:
          return t.config.filters.reduce(kM, {});
        case en:
          return t.config.fontVariations.reduce(jM, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function Yg(e) {
      if (/^TRANSFORM_/.test(e)) return Hg;
      if (/^STYLE_/.test(e)) return Ka;
      if (/^GENERAL_/.test(e)) return ja;
      if (/^PLUGIN_/.test(e)) return kg;
    }
    function YM(e, t) {
      return e === Ka ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function QM(e, t, r, n, i, o, a, s, c) {
      switch (s) {
        case Hg:
          return t1(e, t, r, i, a);
        case Ka:
          return l1(e, t, r, i, o, a);
        case ja:
          return f1(e, i, a);
        case kg: {
          let { actionTypeId: d } = i;
          if ((0, ht.isPluginType)(d)) return (0, ht.renderPlugin)(d)(c, t, i);
        }
      }
    }
    var Qa = {
        [vr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [hr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [gr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Zr]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      $M = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      ZM = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      JM = (e, t) => {
        let r = (0, Ha.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      e1 = Object.keys(Qa);
    function t1(e, t, r, n, i) {
      let o = e1
          .map((s) => {
            let c = Qa[s],
              {
                xValue: d = c.xValue,
                yValue: _ = c.yValue,
                zValue: f = c.zValue,
                xUnit: m = "",
                yUnit: p = "",
                zUnit: h = "",
              } = t[s] || {};
            switch (s) {
              case vr:
                return `${mM}(${d}${m}, ${_}${p}, ${f}${h})`;
              case hr:
                return `${yM}(${d}${m}, ${_}${p}, ${f}${h})`;
              case gr:
                return `${IM}(${d}${m}) ${TM}(${_}${p}) ${bM}(${f}${h})`;
              case Zr:
                return `${OM}(${d}${m}, ${_}${p})`;
              default:
                return "";
            }
          })
          .join(" "),
        { setStyle: a } = i;
      Bt(e, Xe.TRANSFORM_PREFIXED, i),
        a(e, Xe.TRANSFORM_PREFIXED, o),
        i1(n, r) && a(e, Xe.TRANSFORM_STYLE_PREFIXED, wM);
    }
    function r1(e, t, r, n) {
      let i = (0, ka.default)(t, (a, s, c) => `${a} ${c}(${s}${JM(c, r)})`, ""),
        { setStyle: o } = n;
      Bt(e, Yr, n), o(e, Yr, i);
    }
    function n1(e, t, r, n) {
      let i = (0, ka.default)(
          t,
          (a, s, c) => (a.push(`"${c}" ${s}`), a),
          []
        ).join(", "),
        { setStyle: o } = n;
      Bt(e, Qr, n), o(e, Qr, i);
    }
    function i1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === vr && n !== void 0) ||
        (e === hr && n !== void 0) ||
        (e === gr && (t !== void 0 || r !== void 0))
      );
    }
    var o1 = "\\(([^)]+)\\)",
      a1 = /^rgb/,
      s1 = RegExp(`rgba?${o1}`);
    function u1(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function c1({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let i = za[t],
        o = n(e, i),
        a = a1.test(o) ? o : r[i],
        s = u1(s1, a).split($r);
      return {
        rValue: (0, Rt.default)(parseInt(s[0], 10), 255),
        gValue: (0, Rt.default)(parseInt(s[1], 10), 255),
        bValue: (0, Rt.default)(parseInt(s[2], 10), 255),
        aValue: (0, Rt.default)(parseFloat(s[3]), 1),
      };
    }
    function l1(e, t, r, n, i, o) {
      let { setStyle: a } = o;
      switch (n.actionTypeId) {
        case Er: {
          let { widthUnit: s = "", heightUnit: c = "" } = n.config,
            { widthValue: d, heightValue: _ } = r;
          d !== void 0 &&
            (s === Ct && (s = "px"), Bt(e, pt, o), a(e, pt, d + s)),
            _ !== void 0 &&
              (c === Ct && (c = "px"), Bt(e, vt, o), a(e, vt, _ + c));
          break;
        }
        case Jr: {
          r1(e, r, n.config, o);
          break;
        }
        case en: {
          n1(e, r, n.config, o);
          break;
        }
        case _r:
        case mr:
        case yr: {
          let s = za[n.actionTypeId],
            c = Math.round(r.rValue),
            d = Math.round(r.gValue),
            _ = Math.round(r.bValue),
            f = r.aValue;
          Bt(e, s, o),
            a(
              e,
              s,
              f >= 1 ? `rgb(${c},${d},${_})` : `rgba(${c},${d},${_},${f})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = n.config;
          Bt(e, i, o), a(e, i, r.value + s);
          break;
        }
      }
    }
    function f1(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case hi: {
          let { value: i } = t.config;
          i === SM && Xe.IS_BROWSER_ENV
            ? n(e, pi, Xe.FLEX_PREFIXED)
            : n(e, pi, i);
          return;
        }
      }
    }
    function Bt(e, t, r) {
      if (!Xe.IS_BROWSER_ENV) return;
      let n = zg[t];
      if (!n) return;
      let { getStyle: i, setStyle: o } = r,
        a = i(e, pr);
      if (!a) {
        o(e, pr, n);
        return;
      }
      let s = a.split($r).map(Kg);
      s.indexOf(n) === -1 && o(e, pr, s.concat(n).join($r));
    }
    function Qg(e, t, r) {
      if (!Xe.IS_BROWSER_ENV) return;
      let n = zg[t];
      if (!n) return;
      let { getStyle: i, setStyle: o } = r,
        a = i(e, pr);
      !a ||
        a.indexOf(n) === -1 ||
        o(
          e,
          pr,
          a
            .split($r)
            .map(Kg)
            .filter((s) => s !== n)
            .join($r)
        );
    }
    function d1({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: i = {} } = r;
      Object.keys(n).forEach((o) => {
        let a = n[o],
          { config: s } = a.action,
          { actionListId: c } = s,
          d = i[c];
        d && Ug({ actionList: d, event: a, elementApi: t });
      }),
        Object.keys(i).forEach((o) => {
          Ug({ actionList: i[o], elementApi: t });
        });
    }
    function Ug({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: i } = e;
      n &&
        n.forEach((o) => {
          Vg({ actionGroup: o, event: t, elementApi: r });
        }),
        i &&
          i.forEach((o) => {
            let { continuousActionGroups: a } = o;
            a.forEach((s) => {
              Vg({ actionGroup: s, event: t, elementApi: r });
            });
          });
    }
    function Vg({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach(({ actionTypeId: i, config: o }) => {
        let a;
        (0, ht.isPluginType)(i)
          ? (a = (0, ht.clearPlugin)(i))
          : (a = $g({ effect: v1, actionTypeId: i, elementApi: r })),
          Ya({ config: o, event: t, elementApi: r }).forEach(a);
      });
    }
    function p1(e, t, r) {
      let { setStyle: n, getStyle: i } = r,
        { actionTypeId: o } = t;
      if (o === Er) {
        let { config: a } = t;
        a.widthUnit === Ct && n(e, pt, ""), a.heightUnit === Ct && n(e, vt, "");
      }
      i(e, pr) && $g({ effect: Qg, actionTypeId: o, elementApi: r })(e);
    }
    var $g =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case vr:
          case hr:
          case gr:
          case Zr:
            e(n, Xe.TRANSFORM_PREFIXED, r);
            break;
          case Jr:
            e(n, Yr, r);
            break;
          case en:
            e(n, Qr, r);
            break;
          case jg:
            e(n, di, r);
            break;
          case Er:
            e(n, pt, r), e(n, vt, r);
            break;
          case _r:
          case mr:
          case yr:
            e(n, za[t], r);
            break;
          case hi:
            e(n, pi, r);
            break;
        }
      };
    function v1(e, t, r) {
      let { setStyle: n } = r;
      Qg(e, t, r),
        n(e, t, ""),
        t === Xe.TRANSFORM_PREFIXED && n(e, Xe.TRANSFORM_STYLE_PREFIXED, "");
    }
    function Zg(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, i) => {
          let { config: o } = n,
            a = o.delay + o.duration;
          a >= t && ((t = a), (r = i));
        }),
        r
      );
    }
    function h1(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: i, verboseTimeElapsed: o = 0 } = t,
        a = 0,
        s = 0;
      return (
        r.forEach((c, d) => {
          if (n && d === 0) return;
          let { actionItems: _ } = c,
            f = _[Zg(_)],
            { config: m, actionTypeId: p } = f;
          i.id === f.id && (s = a + o);
          let h = Yg(p) === ja ? 0 : m.duration;
          a += m.delay + h;
        }),
        a > 0 ? (0, gM.optimizeFloat)(s / a) : 0
      );
    }
    function g1({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: i } = e,
        o = [],
        a = (s) => (
          o.push((0, Dg.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        n && n.some(({ actionItems: s }) => s.some(a)),
        i &&
          i.some((s) => {
            let { continuousActionGroups: c } = s;
            return c.some(({ actionItems: d }) => d.some(a));
          }),
        (0, Dg.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
        })
      );
    }
    function E1(e, { basedOn: t }) {
      return (
        (e === Wt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === Wt.EventBasedOn.ELEMENT || t == null)) ||
        (e === Wt.EventTypeConsts.MOUSE_MOVE && t === Wt.EventBasedOn.ELEMENT)
      );
    }
    function _1(e, t) {
      return e + NM + t;
    }
    function m1(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function y1(e, t) {
      return (0, Wg.default)(e && e.sort(), t && t.sort());
    }
    function I1(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId)
        return e.pluginElement + Ba + e.objectId;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + Ba + r + Ba + n;
    }
  });
  var Ht = u((Ue) => {
    "use strict";
    var Ir = Dt().default;
    Object.defineProperty(Ue, "__esModule", { value: !0 });
    Ue.IX2VanillaUtils =
      Ue.IX2VanillaPlugins =
      Ue.IX2ElementsReducer =
      Ue.IX2Easings =
      Ue.IX2EasingUtils =
      Ue.IX2BrowserSupport =
        void 0;
    var T1 = Ir(ii());
    Ue.IX2BrowserSupport = T1;
    var b1 = Ir(Ma());
    Ue.IX2Easings = b1;
    var O1 = Ir(Ga());
    Ue.IX2EasingUtils = O1;
    var w1 = Ir(ig());
    Ue.IX2ElementsReducer = w1;
    var S1 = Ir(Ua());
    Ue.IX2VanillaPlugins = S1;
    var A1 = Ir(Jg());
    Ue.IX2VanillaUtils = A1;
  });
  var nE = u((Ei) => {
    "use strict";
    Object.defineProperty(Ei, "__esModule", { value: !0 });
    Ei.ixInstances = void 0;
    var eE = He(),
      tE = Ht(),
      Tr = nr(),
      {
        IX2_RAW_DATA_IMPORTED: R1,
        IX2_SESSION_STOPPED: C1,
        IX2_INSTANCE_ADDED: x1,
        IX2_INSTANCE_STARTED: N1,
        IX2_INSTANCE_REMOVED: q1,
        IX2_ANIMATION_FRAME_CHANGED: L1,
      } = eE.IX2EngineActionTypes,
      {
        optimizeFloat: gi,
        applyEasing: rE,
        createBezierEasing: P1,
      } = tE.IX2EasingUtils,
      { RENDER_GENERAL: D1 } = eE.IX2EngineConstants,
      {
        getItemConfigByKey: $a,
        getRenderType: M1,
        getStyleProp: F1,
      } = tE.IX2VanillaUtils,
      G1 = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: i,
            destinationKeys: o,
            smoothing: a,
            restingValue: s,
            actionTypeId: c,
            customEasingFn: d,
            skipMotion: _,
            skipToValue: f,
          } = e,
          { parameters: m } = t.payload,
          p = Math.max(1 - a, 0.01),
          h = m[n];
        h == null && ((p = 1), (h = s));
        let T = Math.max(h, 0) || 0,
          A = gi(T - r),
          S = _ ? f : gi(r + A * p),
          N = S * 100;
        if (S === r && e.current) return e;
        let O, M, D, F;
        for (let z = 0, { length: Q } = i; z < Q; z++) {
          let { keyframe: oe, actionItems: B } = i[z];
          if ((z === 0 && (O = B[0]), N >= oe)) {
            O = B[0];
            let L = i[z + 1],
              v = L && N !== oe;
            (M = v ? L.actionItems[0] : null),
              v && ((D = oe / 100), (F = (L.keyframe - oe) / 100));
          }
        }
        let W = {};
        if (O && !M)
          for (let z = 0, { length: Q } = o; z < Q; z++) {
            let oe = o[z];
            W[oe] = $a(c, oe, O.config);
          }
        else if (O && M && D !== void 0 && F !== void 0) {
          let z = (S - D) / F,
            Q = O.config.easing,
            oe = rE(Q, z, d);
          for (let B = 0, { length: L } = o; B < L; B++) {
            let v = o[B],
              P = $a(c, v, O.config),
              K = ($a(c, v, M.config) - P) * oe + P;
            W[v] = K;
          }
        }
        return (0, Tr.merge)(e, { position: S, current: W });
      },
      X1 = (e, t) => {
        let {
            active: r,
            origin: n,
            start: i,
            immediate: o,
            renderType: a,
            verbose: s,
            actionItem: c,
            destination: d,
            destinationKeys: _,
            pluginDuration: f,
            instanceDelay: m,
            customEasingFn: p,
            skipMotion: h,
          } = e,
          T = c.config.easing,
          { duration: A, delay: S } = c.config;
        f != null && (A = f),
          (S = m ?? S),
          a === D1 ? (A = 0) : (o || h) && (A = S = 0);
        let { now: N } = t.payload;
        if (r && n) {
          let O = N - (i + S);
          if (s) {
            let z = N - i,
              Q = A + S,
              oe = gi(Math.min(Math.max(0, z / Q), 1));
            e = (0, Tr.set)(e, "verboseTimeElapsed", Q * oe);
          }
          if (O < 0) return e;
          let M = gi(Math.min(Math.max(0, O / A), 1)),
            D = rE(T, M, p),
            F = {},
            W = null;
          return (
            _.length &&
              (W = _.reduce((z, Q) => {
                let oe = d[Q],
                  B = parseFloat(n[Q]) || 0,
                  v = (parseFloat(oe) - B) * D + B;
                return (z[Q] = v), z;
              }, {})),
            (F.current = W),
            (F.position = M),
            M === 1 && ((F.active = !1), (F.complete = !0)),
            (0, Tr.merge)(e, F)
          );
        }
        return e;
      },
      U1 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case R1:
            return t.payload.ixInstances || Object.freeze({});
          case C1:
            return Object.freeze({});
          case x1: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: i,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: d,
                isCarrier: _,
                origin: f,
                destination: m,
                immediate: p,
                verbose: h,
                continuous: T,
                parameterId: A,
                actionGroups: S,
                smoothing: N,
                restingValue: O,
                pluginInstance: M,
                pluginDuration: D,
                instanceDelay: F,
                skipMotion: W,
                skipToValue: z,
              } = t.payload,
              { actionTypeId: Q } = i,
              oe = M1(Q),
              B = F1(oe, Q),
              L = Object.keys(m).filter((P) => m[P] != null),
              { easing: v } = i.config;
            return (0, Tr.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: f,
              destination: m,
              destinationKeys: L,
              immediate: p,
              verbose: h,
              current: null,
              actionItem: i,
              actionTypeId: Q,
              eventId: o,
              eventTarget: a,
              eventStateKey: s,
              actionListId: c,
              groupIndex: d,
              renderType: oe,
              isCarrier: _,
              styleProp: B,
              continuous: T,
              parameterId: A,
              actionGroups: S,
              smoothing: N,
              restingValue: O,
              pluginInstance: M,
              pluginDuration: D,
              instanceDelay: F,
              skipMotion: W,
              skipToValue: z,
              customEasingFn:
                Array.isArray(v) && v.length === 4 ? P1(v) : void 0,
            });
          }
          case N1: {
            let { instanceId: r, time: n } = t.payload;
            return (0, Tr.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case q1: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              i = Object.keys(e),
              { length: o } = i;
            for (let a = 0; a < o; a++) {
              let s = i[a];
              s !== r && (n[s] = e[s]);
            }
            return n;
          }
          case L1: {
            let r = e,
              n = Object.keys(e),
              { length: i } = n;
            for (let o = 0; o < i; o++) {
              let a = n[o],
                s = e[a],
                c = s.continuous ? G1 : X1;
              r = (0, Tr.set)(r, a, c(s, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    Ei.ixInstances = U1;
  });
  var iE = u((_i) => {
    "use strict";
    Object.defineProperty(_i, "__esModule", { value: !0 });
    _i.ixParameters = void 0;
    var V1 = He(),
      {
        IX2_RAW_DATA_IMPORTED: W1,
        IX2_SESSION_STOPPED: B1,
        IX2_PARAMETER_CHANGED: H1,
      } = V1.IX2EngineActionTypes,
      k1 = (e = {}, t) => {
        switch (t.type) {
          case W1:
            return t.payload.ixParameters || {};
          case B1:
            return {};
          case H1: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    _i.ixParameters = k1;
  });
  var oE = u((mi) => {
    "use strict";
    Object.defineProperty(mi, "__esModule", { value: !0 });
    mi.default = void 0;
    var j1 = Jo(),
      K1 = Tf(),
      z1 = Vf(),
      Y1 = Bf(),
      Q1 = Ht(),
      $1 = nE(),
      Z1 = iE(),
      { ixElements: J1 } = Q1.IX2ElementsReducer,
      eF = (0, j1.combineReducers)({
        ixData: K1.ixData,
        ixRequest: z1.ixRequest,
        ixSession: Y1.ixSession,
        ixElements: J1,
        ixInstances: $1.ixInstances,
        ixParameters: Z1.ixParameters,
      });
    mi.default = eF;
  });
  var aE = u((A5, tn) => {
    function tF(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        i,
        o;
      for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
      return r;
    }
    (tn.exports = tF),
      (tn.exports.__esModule = !0),
      (tn.exports.default = tn.exports);
  });
  var uE = u((R5, sE) => {
    var rF = wt(),
      nF = Ne(),
      iF = _t(),
      oF = "[object String]";
    function aF(e) {
      return typeof e == "string" || (!nF(e) && iF(e) && rF(e) == oF);
    }
    sE.exports = aF;
  });
  var lE = u((C5, cE) => {
    var sF = xa(),
      uF = sF("length");
    cE.exports = uF;
  });
  var dE = u((x5, fE) => {
    var cF = "\\ud800-\\udfff",
      lF = "\\u0300-\\u036f",
      fF = "\\ufe20-\\ufe2f",
      dF = "\\u20d0-\\u20ff",
      pF = lF + fF + dF,
      vF = "\\ufe0e\\ufe0f",
      hF = "\\u200d",
      gF = RegExp("[" + hF + cF + pF + vF + "]");
    function EF(e) {
      return gF.test(e);
    }
    fE.exports = EF;
  });
  var IE = u((N5, yE) => {
    var vE = "\\ud800-\\udfff",
      _F = "\\u0300-\\u036f",
      mF = "\\ufe20-\\ufe2f",
      yF = "\\u20d0-\\u20ff",
      IF = _F + mF + yF,
      TF = "\\ufe0e\\ufe0f",
      bF = "[" + vE + "]",
      Za = "[" + IF + "]",
      Ja = "\\ud83c[\\udffb-\\udfff]",
      OF = "(?:" + Za + "|" + Ja + ")",
      hE = "[^" + vE + "]",
      gE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      EE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      wF = "\\u200d",
      _E = OF + "?",
      mE = "[" + TF + "]?",
      SF = "(?:" + wF + "(?:" + [hE, gE, EE].join("|") + ")" + mE + _E + ")*",
      AF = mE + _E + SF,
      RF = "(?:" + [hE + Za + "?", Za, gE, EE, bF].join("|") + ")",
      pE = RegExp(Ja + "(?=" + Ja + ")|" + RF + AF, "g");
    function CF(e) {
      for (var t = (pE.lastIndex = 0); pE.test(e); ) ++t;
      return t;
    }
    yE.exports = CF;
  });
  var bE = u((q5, TE) => {
    var xF = lE(),
      NF = dE(),
      qF = IE();
    function LF(e) {
      return NF(e) ? qF(e) : xF(e);
    }
    TE.exports = LF;
  });
  var wE = u((L5, OE) => {
    var PF = Yn(),
      DF = Qn(),
      MF = Xt(),
      FF = uE(),
      GF = bE(),
      XF = "[object Map]",
      UF = "[object Set]";
    function VF(e) {
      if (e == null) return 0;
      if (MF(e)) return FF(e) ? GF(e) : e.length;
      var t = DF(e);
      return t == XF || t == UF ? e.size : PF(e).length;
    }
    OE.exports = VF;
  });
  var AE = u((P5, SE) => {
    var WF = "Expected a function";
    function BF(e) {
      if (typeof e != "function") throw new TypeError(WF);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    SE.exports = BF;
  });
  var es = u((D5, RE) => {
    var HF = St(),
      kF = (function () {
        try {
          var e = HF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    RE.exports = kF;
  });
  var ts = u((M5, xE) => {
    var CE = es();
    function jF(e, t, r) {
      t == "__proto__" && CE
        ? CE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    xE.exports = jF;
  });
  var qE = u((F5, NE) => {
    var KF = ts(),
      zF = Xn(),
      YF = Object.prototype,
      QF = YF.hasOwnProperty;
    function $F(e, t, r) {
      var n = e[t];
      (!(QF.call(e, t) && zF(n, r)) || (r === void 0 && !(t in e))) &&
        KF(e, t, r);
    }
    NE.exports = $F;
  });
  var DE = u((G5, PE) => {
    var ZF = qE(),
      JF = jr(),
      e2 = kn(),
      LE = dt(),
      t2 = fr();
    function r2(e, t, r, n) {
      if (!LE(e)) return e;
      t = JF(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var c = t2(t[i]),
          d = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (i != a) {
          var _ = s[c];
          (d = n ? n(_, c, s) : void 0),
            d === void 0 && (d = LE(_) ? _ : e2(t[i + 1]) ? [] : {});
        }
        ZF(s, c, d), (s = s[c]);
      }
      return e;
    }
    PE.exports = r2;
  });
  var FE = u((X5, ME) => {
    var n2 = Jn(),
      i2 = DE(),
      o2 = jr();
    function a2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = n2(e, a);
        r(s, a) && i2(o, o2(a, e), s);
      }
      return o;
    }
    ME.exports = a2;
  });
  var XE = u((U5, GE) => {
    var s2 = Bn(),
      u2 = Uo(),
      c2 = ha(),
      l2 = va(),
      f2 = Object.getOwnPropertySymbols,
      d2 = f2
        ? function (e) {
            for (var t = []; e; ) s2(t, c2(e)), (e = u2(e));
            return t;
          }
        : l2;
    GE.exports = d2;
  });
  var VE = u((V5, UE) => {
    function p2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    UE.exports = p2;
  });
  var BE = u((W5, WE) => {
    var v2 = dt(),
      h2 = zn(),
      g2 = VE(),
      E2 = Object.prototype,
      _2 = E2.hasOwnProperty;
    function m2(e) {
      if (!v2(e)) return g2(e);
      var t = h2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !_2.call(e, n))) || r.push(n);
      return r;
    }
    WE.exports = m2;
  });
  var kE = u((B5, HE) => {
    var y2 = Ea(),
      I2 = BE(),
      T2 = Xt();
    function b2(e) {
      return T2(e) ? y2(e, !0) : I2(e);
    }
    HE.exports = b2;
  });
  var KE = u((H5, jE) => {
    var O2 = pa(),
      w2 = XE(),
      S2 = kE();
    function A2(e) {
      return O2(e, S2, w2);
    }
    jE.exports = A2;
  });
  var YE = u((k5, zE) => {
    var R2 = Ca(),
      C2 = At(),
      x2 = FE(),
      N2 = KE();
    function q2(e, t) {
      if (e == null) return {};
      var r = R2(N2(e), function (n) {
        return [n];
      });
      return (
        (t = C2(t)),
        x2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    zE.exports = q2;
  });
  var $E = u((j5, QE) => {
    var L2 = At(),
      P2 = AE(),
      D2 = YE();
    function M2(e, t) {
      return D2(e, P2(L2(t)));
    }
    QE.exports = M2;
  });
  var JE = u((K5, ZE) => {
    var F2 = Yn(),
      G2 = Qn(),
      X2 = Ur(),
      U2 = Ne(),
      V2 = Xt(),
      W2 = Hn(),
      B2 = zn(),
      H2 = Kn(),
      k2 = "[object Map]",
      j2 = "[object Set]",
      K2 = Object.prototype,
      z2 = K2.hasOwnProperty;
    function Y2(e) {
      if (e == null) return !0;
      if (
        V2(e) &&
        (U2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          W2(e) ||
          H2(e) ||
          X2(e))
      )
        return !e.length;
      var t = G2(e);
      if (t == k2 || t == j2) return !e.size;
      if (B2(e)) return !F2(e).length;
      for (var r in e) if (z2.call(e, r)) return !1;
      return !0;
    }
    ZE.exports = Y2;
  });
  var t_ = u((z5, e_) => {
    var Q2 = ts(),
      $2 = Va(),
      Z2 = At();
    function J2(e, t) {
      var r = {};
      return (
        (t = Z2(t, 3)),
        $2(e, function (n, i, o) {
          Q2(r, i, t(n, i, o));
        }),
        r
      );
    }
    e_.exports = J2;
  });
  var n_ = u((Y5, r_) => {
    function eG(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    r_.exports = eG;
  });
  var o_ = u((Q5, i_) => {
    var tG = ti();
    function rG(e) {
      return typeof e == "function" ? e : tG;
    }
    i_.exports = rG;
  });
  var s_ = u(($5, a_) => {
    var nG = n_(),
      iG = Wa(),
      oG = o_(),
      aG = Ne();
    function sG(e, t) {
      var r = aG(e) ? nG : iG;
      return r(e, oG(t));
    }
    a_.exports = sG;
  });
  var c_ = u((Z5, u_) => {
    var uG = nt(),
      cG = function () {
        return uG.Date.now();
      };
    u_.exports = cG;
  });
  var d_ = u((J5, f_) => {
    var lG = dt(),
      rs = c_(),
      l_ = ri(),
      fG = "Expected a function",
      dG = Math.max,
      pG = Math.min;
    function vG(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        c,
        d = 0,
        _ = !1,
        f = !1,
        m = !0;
      if (typeof e != "function") throw new TypeError(fG);
      (t = l_(t) || 0),
        lG(r) &&
          ((_ = !!r.leading),
          (f = "maxWait" in r),
          (o = f ? dG(l_(r.maxWait) || 0, t) : o),
          (m = "trailing" in r ? !!r.trailing : m));
      function p(F) {
        var W = n,
          z = i;
        return (n = i = void 0), (d = F), (a = e.apply(z, W)), a;
      }
      function h(F) {
        return (d = F), (s = setTimeout(S, t)), _ ? p(F) : a;
      }
      function T(F) {
        var W = F - c,
          z = F - d,
          Q = t - W;
        return f ? pG(Q, o - z) : Q;
      }
      function A(F) {
        var W = F - c,
          z = F - d;
        return c === void 0 || W >= t || W < 0 || (f && z >= o);
      }
      function S() {
        var F = rs();
        if (A(F)) return N(F);
        s = setTimeout(S, T(F));
      }
      function N(F) {
        return (s = void 0), m && n ? p(F) : ((n = i = void 0), a);
      }
      function O() {
        s !== void 0 && clearTimeout(s), (d = 0), (n = c = i = s = void 0);
      }
      function M() {
        return s === void 0 ? a : N(rs());
      }
      function D() {
        var F = rs(),
          W = A(F);
        if (((n = arguments), (i = this), (c = F), W)) {
          if (s === void 0) return h(c);
          if (f) return clearTimeout(s), (s = setTimeout(S, t)), p(c);
        }
        return s === void 0 && (s = setTimeout(S, t)), a;
      }
      return (D.cancel = O), (D.flush = M), D;
    }
    f_.exports = vG;
  });
  var v_ = u((eK, p_) => {
    var hG = d_(),
      gG = dt(),
      EG = "Expected a function";
    function _G(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(EG);
      return (
        gG(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        hG(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    p_.exports = _G;
  });
  var yi = u((ce) => {
    "use strict";
    var mG = et().default;
    Object.defineProperty(ce, "__esModule", { value: !0 });
    ce.viewportWidthChanged =
      ce.testFrameRendered =
      ce.stopRequested =
      ce.sessionStopped =
      ce.sessionStarted =
      ce.sessionInitialized =
      ce.rawDataImported =
      ce.previewRequested =
      ce.playbackRequested =
      ce.parameterChanged =
      ce.mediaQueriesDefined =
      ce.instanceStarted =
      ce.instanceRemoved =
      ce.instanceAdded =
      ce.eventStateChanged =
      ce.eventListenerAdded =
      ce.elementStateChanged =
      ce.clearRequested =
      ce.animationFrameChanged =
      ce.actionListPlaybackChanged =
        void 0;
    var h_ = mG(rr()),
      g_ = He(),
      yG = Ht(),
      {
        IX2_RAW_DATA_IMPORTED: IG,
        IX2_SESSION_INITIALIZED: TG,
        IX2_SESSION_STARTED: bG,
        IX2_SESSION_STOPPED: OG,
        IX2_PREVIEW_REQUESTED: wG,
        IX2_PLAYBACK_REQUESTED: SG,
        IX2_STOP_REQUESTED: AG,
        IX2_CLEAR_REQUESTED: RG,
        IX2_EVENT_LISTENER_ADDED: CG,
        IX2_TEST_FRAME_RENDERED: xG,
        IX2_EVENT_STATE_CHANGED: NG,
        IX2_ANIMATION_FRAME_CHANGED: qG,
        IX2_PARAMETER_CHANGED: LG,
        IX2_INSTANCE_ADDED: PG,
        IX2_INSTANCE_STARTED: DG,
        IX2_INSTANCE_REMOVED: MG,
        IX2_ELEMENT_STATE_CHANGED: FG,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: GG,
        IX2_VIEWPORT_WIDTH_CHANGED: XG,
        IX2_MEDIA_QUERIES_DEFINED: UG,
      } = g_.IX2EngineActionTypes,
      { reifyState: VG } = yG.IX2VanillaUtils,
      WG = (e) => ({ type: IG, payload: (0, h_.default)({}, VG(e)) });
    ce.rawDataImported = WG;
    var BG = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: TG,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    ce.sessionInitialized = BG;
    var HG = () => ({ type: bG });
    ce.sessionStarted = HG;
    var kG = () => ({ type: OG });
    ce.sessionStopped = kG;
    var jG = ({ rawData: e, defer: t }) => ({
      type: wG,
      payload: { defer: t, rawData: e },
    });
    ce.previewRequested = jG;
    var KG = ({
      actionTypeId: e = g_.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: i,
      immediate: o,
      testManual: a,
      verbose: s,
      rawData: c,
    }) => ({
      type: SG,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: a,
        eventId: n,
        allowEvents: i,
        immediate: o,
        verbose: s,
        rawData: c,
      },
    });
    ce.playbackRequested = KG;
    var zG = (e) => ({ type: AG, payload: { actionListId: e } });
    ce.stopRequested = zG;
    var YG = () => ({ type: RG });
    ce.clearRequested = YG;
    var QG = (e, t) => ({
      type: CG,
      payload: { target: e, listenerParams: t },
    });
    ce.eventListenerAdded = QG;
    var $G = (e = 1) => ({ type: xG, payload: { step: e } });
    ce.testFrameRendered = $G;
    var ZG = (e, t) => ({ type: NG, payload: { stateKey: e, newState: t } });
    ce.eventStateChanged = ZG;
    var JG = (e, t) => ({ type: qG, payload: { now: e, parameters: t } });
    ce.animationFrameChanged = JG;
    var eX = (e, t) => ({ type: LG, payload: { key: e, value: t } });
    ce.parameterChanged = eX;
    var tX = (e) => ({ type: PG, payload: (0, h_.default)({}, e) });
    ce.instanceAdded = tX;
    var rX = (e, t) => ({ type: DG, payload: { instanceId: e, time: t } });
    ce.instanceStarted = rX;
    var nX = (e) => ({ type: MG, payload: { instanceId: e } });
    ce.instanceRemoved = nX;
    var iX = (e, t, r, n) => ({
      type: FG,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    ce.elementStateChanged = iX;
    var oX = ({ actionListId: e, isPlaying: t }) => ({
      type: GG,
      payload: { actionListId: e, isPlaying: t },
    });
    ce.actionListPlaybackChanged = oX;
    var aX = ({ width: e, mediaQueries: t }) => ({
      type: XG,
      payload: { width: e, mediaQueries: t },
    });
    ce.viewportWidthChanged = aX;
    var sX = () => ({ type: UG });
    ce.mediaQueriesDefined = sX;
  });
  var m_ = u((Pe) => {
    "use strict";
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    Pe.elementContains = mX;
    Pe.getChildElements = IX;
    Pe.getClosestElement = void 0;
    Pe.getProperty = vX;
    Pe.getQuerySelector = gX;
    Pe.getRefType = OX;
    Pe.getSiblingElements = TX;
    Pe.getStyle = pX;
    Pe.getValidDocument = EX;
    Pe.isSiblingNode = yX;
    Pe.matchSelector = hX;
    Pe.queryDocument = _X;
    Pe.setStyle = dX;
    var uX = Ht(),
      cX = He(),
      { ELEMENT_MATCHES: ns } = uX.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: E_,
        HTML_ELEMENT: lX,
        PLAIN_OBJECT: fX,
        WF_PAGE: __,
      } = cX.IX2EngineConstants;
    function dX(e, t, r) {
      e.style[t] = r;
    }
    function pX(e, t) {
      return e.style[t];
    }
    function vX(e, t) {
      return e[t];
    }
    function hX(e) {
      return (t) => t[ns](e);
    }
    function gX({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(E_) !== -1) {
          let n = e.split(E_),
            i = n[0];
          if (((r = n[1]), i !== document.documentElement.getAttribute(__)))
            return null;
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
      }
      return t;
    }
    function EX(e) {
      return e == null || e === document.documentElement.getAttribute(__)
        ? document
        : null;
    }
    function _X(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function mX(e, t) {
      return e.contains(t);
    }
    function yX(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function IX(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: i } = e[r],
          { length: o } = i;
        if (o) for (let a = 0; a < o; a++) t.push(i[a]);
      }
      return t;
    }
    function TX(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: i } = e; n < i; n++) {
        let { parentNode: o } = e[n];
        if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
          continue;
        r.push(o);
        let a = o.firstElementChild;
        for (; a != null; )
          e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
      }
      return t;
    }
    var bX = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[ns] && r[ns](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    Pe.getClosestElement = bX;
    function OX(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? lX
          : fX
        : null;
    }
  });
  var is = u((nK, I_) => {
    var wX = dt(),
      y_ = Object.create,
      SX = (function () {
        function e() {}
        return function (t) {
          if (!wX(t)) return {};
          if (y_) return y_(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    I_.exports = SX;
  });
  var Ii = u((iK, T_) => {
    function AX() {}
    T_.exports = AX;
  });
  var bi = u((oK, b_) => {
    var RX = is(),
      CX = Ii();
    function Ti(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Ti.prototype = RX(CX.prototype);
    Ti.prototype.constructor = Ti;
    b_.exports = Ti;
  });
  var A_ = u((aK, S_) => {
    var O_ = Zt(),
      xX = Ur(),
      NX = Ne(),
      w_ = O_ ? O_.isConcatSpreadable : void 0;
    function qX(e) {
      return NX(e) || xX(e) || !!(w_ && e && e[w_]);
    }
    S_.exports = qX;
  });
  var x_ = u((sK, C_) => {
    var LX = Bn(),
      PX = A_();
    function R_(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = PX), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? R_(s, t - 1, r, n, i)
            : LX(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    C_.exports = R_;
  });
  var q_ = u((uK, N_) => {
    var DX = x_();
    function MX(e) {
      var t = e == null ? 0 : e.length;
      return t ? DX(e, 1) : [];
    }
    N_.exports = MX;
  });
  var P_ = u((cK, L_) => {
    function FX(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    L_.exports = FX;
  });
  var F_ = u((lK, M_) => {
    var GX = P_(),
      D_ = Math.max;
    function XX(e, t, r) {
      return (
        (t = D_(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = D_(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), GX(e, this, s);
        }
      );
    }
    M_.exports = XX;
  });
  var X_ = u((fK, G_) => {
    function UX(e) {
      return function () {
        return e;
      };
    }
    G_.exports = UX;
  });
  var W_ = u((dK, V_) => {
    var VX = X_(),
      U_ = es(),
      WX = ti(),
      BX = U_
        ? function (e, t) {
            return U_(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: VX(t),
              writable: !0,
            });
          }
        : WX;
    V_.exports = BX;
  });
  var H_ = u((pK, B_) => {
    var HX = 800,
      kX = 16,
      jX = Date.now;
    function KX(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = jX(),
          i = kX - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= HX) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    B_.exports = KX;
  });
  var j_ = u((vK, k_) => {
    var zX = W_(),
      YX = H_(),
      QX = YX(zX);
    k_.exports = QX;
  });
  var z_ = u((hK, K_) => {
    var $X = q_(),
      ZX = F_(),
      JX = j_();
    function eU(e) {
      return JX(ZX(e, void 0, $X), e + "");
    }
    K_.exports = eU;
  });
  var $_ = u((gK, Q_) => {
    var Y_ = _a(),
      tU = Y_ && new Y_();
    Q_.exports = tU;
  });
  var J_ = u((EK, Z_) => {
    function rU() {}
    Z_.exports = rU;
  });
  var os = u((_K, tm) => {
    var em = $_(),
      nU = J_(),
      iU = em
        ? function (e) {
            return em.get(e);
          }
        : nU;
    tm.exports = iU;
  });
  var nm = u((mK, rm) => {
    var oU = {};
    rm.exports = oU;
  });
  var as = u((yK, om) => {
    var im = nm(),
      aU = Object.prototype,
      sU = aU.hasOwnProperty;
    function uU(e) {
      for (
        var t = e.name + "", r = im[t], n = sU.call(im, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    om.exports = uU;
  });
  var wi = u((IK, am) => {
    var cU = is(),
      lU = Ii(),
      fU = 4294967295;
    function Oi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = fU),
        (this.__views__ = []);
    }
    Oi.prototype = cU(lU.prototype);
    Oi.prototype.constructor = Oi;
    am.exports = Oi;
  });
  var um = u((TK, sm) => {
    function dU(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    sm.exports = dU;
  });
  var lm = u((bK, cm) => {
    var pU = wi(),
      vU = bi(),
      hU = um();
    function gU(e) {
      if (e instanceof pU) return e.clone();
      var t = new vU(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = hU(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    cm.exports = gU;
  });
  var pm = u((OK, dm) => {
    var EU = wi(),
      fm = bi(),
      _U = Ii(),
      mU = Ne(),
      yU = _t(),
      IU = lm(),
      TU = Object.prototype,
      bU = TU.hasOwnProperty;
    function Si(e) {
      if (yU(e) && !mU(e) && !(e instanceof EU)) {
        if (e instanceof fm) return e;
        if (bU.call(e, "__wrapped__")) return IU(e);
      }
      return new fm(e);
    }
    Si.prototype = _U.prototype;
    Si.prototype.constructor = Si;
    dm.exports = Si;
  });
  var hm = u((wK, vm) => {
    var OU = wi(),
      wU = os(),
      SU = as(),
      AU = pm();
    function RU(e) {
      var t = SU(e),
        r = AU[t];
      if (typeof r != "function" || !(t in OU.prototype)) return !1;
      if (e === r) return !0;
      var n = wU(r);
      return !!n && e === n[0];
    }
    vm.exports = RU;
  });
  var mm = u((SK, _m) => {
    var gm = bi(),
      CU = z_(),
      xU = os(),
      ss = as(),
      NU = Ne(),
      Em = hm(),
      qU = "Expected a function",
      LU = 8,
      PU = 32,
      DU = 128,
      MU = 256;
    function FU(e) {
      return CU(function (t) {
        var r = t.length,
          n = r,
          i = gm.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(qU);
          if (i && !a && ss(o) == "wrapper") var a = new gm([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = ss(o),
            c = s == "wrapper" ? xU(o) : void 0;
          c &&
          Em(c[0]) &&
          c[1] == (DU | LU | PU | MU) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[ss(c[0])].apply(a, c[3]))
            : (a = o.length == 1 && Em(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var d = arguments,
            _ = d[0];
          if (a && d.length == 1 && NU(_)) return a.plant(_).value();
          for (var f = 0, m = r ? t[f].apply(this, d) : _; ++f < r; )
            m = t[f].call(this, m);
          return m;
        };
      });
    }
    _m.exports = FU;
  });
  var Im = u((AK, ym) => {
    var GU = mm(),
      XU = GU();
    ym.exports = XU;
  });
  var bm = u((RK, Tm) => {
    function UU(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Tm.exports = UU;
  });
  var wm = u((CK, Om) => {
    var VU = bm(),
      us = ri();
    function WU(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = us(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = us(t)), (t = t === t ? t : 0)),
        VU(us(e), t, r)
      );
    }
    Om.exports = WU;
  });
  var Bm = u((Ni) => {
    "use strict";
    var xi = et().default;
    Object.defineProperty(Ni, "__esModule", { value: !0 });
    Ni.default = void 0;
    var ze = xi(rr()),
      BU = xi(Im()),
      HU = xi(ei()),
      kU = xi(wm()),
      kt = He(),
      cs = ps(),
      Ai = yi(),
      jU = Ht(),
      {
        MOUSE_CLICK: KU,
        MOUSE_SECOND_CLICK: zU,
        MOUSE_DOWN: YU,
        MOUSE_UP: QU,
        MOUSE_OVER: $U,
        MOUSE_OUT: ZU,
        DROPDOWN_CLOSE: JU,
        DROPDOWN_OPEN: eV,
        SLIDER_ACTIVE: tV,
        SLIDER_INACTIVE: rV,
        TAB_ACTIVE: nV,
        TAB_INACTIVE: iV,
        NAVBAR_CLOSE: oV,
        NAVBAR_OPEN: aV,
        MOUSE_MOVE: sV,
        PAGE_SCROLL_DOWN: Pm,
        SCROLL_INTO_VIEW: Dm,
        SCROLL_OUT_OF_VIEW: uV,
        PAGE_SCROLL_UP: cV,
        SCROLLING_IN_VIEW: lV,
        PAGE_FINISH: Mm,
        ECOMMERCE_CART_CLOSE: fV,
        ECOMMERCE_CART_OPEN: dV,
        PAGE_START: Fm,
        PAGE_SCROLL: pV,
      } = kt.EventTypeConsts,
      ls = "COMPONENT_ACTIVE",
      Gm = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: Sm } = kt.IX2EngineConstants,
      { getNamespacedParameterId: Am } = jU.IX2VanillaUtils,
      Xm = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      nn = Xm(({ element: e, nativeEvent: t }) => e === t.target),
      vV = Xm(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      gt = (0, BU.default)([nn, vV]),
      Um = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            i = n[t];
          if (i && !gV[i.eventTypeId]) return i;
        }
        return null;
      },
      hV = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!Um(e, n);
      },
      je = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
        let { action: o, id: a } = t,
          { actionListId: s, autoStopEventId: c } = o.config,
          d = Um(e, c);
        return (
          d &&
            (0, cs.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: r,
              eventStateKey: c + Sm + n.split(Sm)[1],
              actionListId: (0, HU.default)(d, "action.config.actionListId"),
            }),
          (0, cs.stopActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          (0, cs.startActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          i
        );
      },
      it = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      on = { handler: it(gt, je) },
      Vm = (0, ze.default)({}, on, { types: [ls, Gm].join(" ") }),
      fs = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      Rm = "mouseover mouseout",
      ds = { types: fs },
      gV = { PAGE_START: Fm, PAGE_FINISH: Mm },
      rn = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, kU.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      EV = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      _V = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: i } = t,
          o = e.contains(n);
        if (r === "mouseover" && o) return !0;
        let a = e.contains(i);
        return !!(r === "mouseout" && o && a);
      },
      mV = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: i } = rn(),
          o = r.scrollOffsetValue,
          c = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
        return EV(t.getBoundingClientRect(), {
          left: 0,
          top: c,
          right: n,
          bottom: i - c,
        });
      },
      Wm = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          i = [ls, Gm].indexOf(n) !== -1 ? n === ls : r.isActive,
          o = (0, ze.default)({}, r, { isActive: i });
        return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
      },
      Cm = (e) => (t, r) => {
        let n = { elementHovered: _V(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      yV = (e) => (t, r) => {
        let n = (0, ze.default)({}, r, { elementVisible: mV(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      xm =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = rn(),
            {
              event: { config: a, eventTypeId: s },
            } = t,
            { scrollOffsetValue: c, scrollOffsetUnit: d } = a,
            _ = d === "PX",
            f = i - o,
            m = Number((n / f).toFixed(2));
          if (r && r.percentTop === m) return r;
          let p = (_ ? c : (o * (c || 0)) / 100) / f,
            h,
            T,
            A = 0;
          r &&
            ((h = m > r.percentTop),
            (T = r.scrollingDown !== h),
            (A = T ? m : r.anchorTop));
          let S = s === Pm ? m >= A + p : m <= A - p,
            N = (0, ze.default)({}, r, {
              percentTop: m,
              inBounds: S,
              anchorTop: A,
              scrollingDown: h,
            });
          return (r && S && (T || N.inBounds !== r.inBounds) && e(t, N)) || N;
        },
      IV = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      TV = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      bV = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      Nm =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      Ri = (e = !0) =>
        (0, ze.default)({}, Vm, {
          handler: it(
            e ? gt : nn,
            Wm((t, r) => (r.isActive ? on.handler(t, r) : r))
          ),
        }),
      Ci = (e = !0) =>
        (0, ze.default)({}, Vm, {
          handler: it(
            e ? gt : nn,
            Wm((t, r) => (r.isActive ? r : on.handler(t, r)))
          ),
        }),
      qm = (0, ze.default)({}, ds, {
        handler: yV((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: i } = e,
            { ixData: o } = i.getState(),
            { events: a } = o;
          return !a[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === Dm) === r
            ? (je(e), (0, ze.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      Lm = 0.05,
      OV = {
        [tV]: Ri(),
        [rV]: Ci(),
        [eV]: Ri(),
        [JU]: Ci(),
        [aV]: Ri(!1),
        [oV]: Ci(!1),
        [nV]: Ri(),
        [iV]: Ci(),
        [dV]: { types: "ecommerce-cart-open", handler: it(gt, je) },
        [fV]: { types: "ecommerce-cart-close", handler: it(gt, je) },
        [KU]: {
          types: "click",
          handler: it(
            gt,
            Nm((e, { clickCount: t }) => {
              hV(e) ? t === 1 && je(e) : je(e);
            })
          ),
        },
        [zU]: {
          types: "click",
          handler: it(
            gt,
            Nm((e, { clickCount: t }) => {
              t === 2 && je(e);
            })
          ),
        },
        [YU]: (0, ze.default)({}, on, { types: "mousedown" }),
        [QU]: (0, ze.default)({}, on, { types: "mouseup" }),
        [$U]: {
          types: Rm,
          handler: it(
            gt,
            Cm((e, t) => {
              t.elementHovered && je(e);
            })
          ),
        },
        [ZU]: {
          types: Rm,
          handler: it(
            gt,
            Cm((e, t) => {
              t.elementHovered || je(e);
            })
          ),
        },
        [sV]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: i,
            },
            o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: c,
                reverse: d,
                restingState: _ = 0,
              } = r,
              {
                clientX: f = o.clientX,
                clientY: m = o.clientY,
                pageX: p = o.pageX,
                pageY: h = o.pageY,
              } = n,
              T = s === "X_AXIS",
              A = n.type === "mouseout",
              S = _ / 100,
              N = c,
              O = !1;
            switch (a) {
              case kt.EventBasedOn.VIEWPORT: {
                S = T
                  ? Math.min(f, window.innerWidth) / window.innerWidth
                  : Math.min(m, window.innerHeight) / window.innerHeight;
                break;
              }
              case kt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: M,
                  scrollTop: D,
                  scrollWidth: F,
                  scrollHeight: W,
                } = rn();
                S = T ? Math.min(M + p, F) / F : Math.min(D + h, W) / W;
                break;
              }
              case kt.EventBasedOn.ELEMENT:
              default: {
                N = Am(i, c);
                let M = n.type.indexOf("mouse") === 0;
                if (M && gt({ element: t, nativeEvent: n }) !== !0) break;
                let D = t.getBoundingClientRect(),
                  { left: F, top: W, width: z, height: Q } = D;
                if (!M && !IV({ left: f, top: m }, D)) break;
                (O = !0), (S = T ? (f - F) / z : (m - W) / Q);
                break;
              }
            }
            return (
              A && (S > 1 - Lm || S < Lm) && (S = Math.round(S)),
              (a !== kt.EventBasedOn.ELEMENT || O || O !== o.elementHovered) &&
                ((S = d ? 1 - S : S),
                e.dispatch((0, Ai.parameterChanged)(N, S))),
              { elementHovered: O, clientX: f, clientY: m, pageX: p, pageY: h }
            );
          },
        },
        [pV]: {
          types: fs,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: i, scrollHeight: o, clientHeight: a } = rn(),
              s = i / (o - a);
            (s = n ? 1 - s : s), e.dispatch((0, Ai.parameterChanged)(r, s));
          },
        },
        [lV]: {
          types: fs,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            i = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: o,
                scrollTop: a,
                scrollWidth: s,
                scrollHeight: c,
                clientHeight: d,
              } = rn(),
              {
                basedOn: _,
                selectedAxis: f,
                continuousParameterGroupId: m,
                startsEntering: p,
                startsExiting: h,
                addEndOffset: T,
                addStartOffset: A,
                addOffsetValue: S = 0,
                endOffsetValue: N = 0,
              } = r,
              O = f === "X_AXIS";
            if (_ === kt.EventBasedOn.VIEWPORT) {
              let M = O ? o / s : a / c;
              return (
                M !== i.scrollPercent &&
                  t.dispatch((0, Ai.parameterChanged)(m, M)),
                { scrollPercent: M }
              );
            } else {
              let M = Am(n, m),
                D = e.getBoundingClientRect(),
                F = (A ? S : 0) / 100,
                W = (T ? N : 0) / 100;
              (F = p ? F : 1 - F), (W = h ? W : 1 - W);
              let z = D.top + Math.min(D.height * F, d),
                oe = D.top + D.height * W - z,
                B = Math.min(d + oe, c),
                v = Math.min(Math.max(0, d - z), B) / B;
              return (
                v !== i.scrollPercent &&
                  t.dispatch((0, Ai.parameterChanged)(M, v)),
                { scrollPercent: v }
              );
            }
          },
        },
        [Dm]: qm,
        [uV]: qm,
        [Pm]: (0, ze.default)({}, ds, {
          handler: xm((e, t) => {
            t.scrollingDown && je(e);
          }),
        }),
        [cV]: (0, ze.default)({}, ds, {
          handler: xm((e, t) => {
            t.scrollingDown || je(e);
          }),
        }),
        [Mm]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: it(nn, TV(je)),
        },
        [Fm]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: it(nn, bV(je)),
        },
      };
    Ni.default = OV;
  });
  var ps = u((Nt) => {
    "use strict";
    var at = et().default,
      wV = Dt().default;
    Object.defineProperty(Nt, "__esModule", { value: !0 });
    Nt.observeRequests = tW;
    Nt.startActionGroup = ms;
    Nt.startEngine = Mi;
    Nt.stopActionGroup = _s;
    Nt.stopAllActionGroups = Zm;
    Nt.stopEngine = Fi;
    var SV = at(rr()),
      AV = at(aE()),
      RV = at(Pa()),
      xt = at(ei()),
      CV = at(wE()),
      xV = at($E()),
      NV = at(JE()),
      qV = at(t_()),
      an = at(s_()),
      LV = at(v_()),
      ot = He(),
      jm = Ht(),
      Oe = yi(),
      Re = wV(m_()),
      PV = at(Bm()),
      DV = ["store", "computedStyle"],
      MV = Object.keys(ot.QuickEffectIds),
      vs = (e) => MV.includes(e),
      {
        COLON_DELIMITER: hs,
        BOUNDARY_SELECTOR: qi,
        HTML_ELEMENT: Km,
        RENDER_GENERAL: FV,
        W_MOD_IX: Hm,
      } = ot.IX2EngineConstants,
      {
        getAffectedElements: Li,
        getElementId: GV,
        getDestinationValues: gs,
        observeStore: jt,
        getInstanceId: XV,
        renderHTMLElement: UV,
        clearAllStyles: zm,
        getMaxDurationItemIndex: VV,
        getComputedStyle: WV,
        getInstanceOrigin: BV,
        reduceListToGroup: HV,
        shouldNamespaceEventParameter: kV,
        getNamespacedParameterId: jV,
        shouldAllowMediaQuery: Pi,
        cleanupHTMLElement: KV,
        clearObjectCache: zV,
        stringifyTarget: YV,
        mediaQueriesEqual: QV,
        shallowEqual: $V,
      } = jm.IX2VanillaUtils,
      {
        isPluginType: Di,
        createPluginInstance: Es,
        getPluginDuration: ZV,
      } = jm.IX2VanillaPlugins,
      km = navigator.userAgent,
      JV = km.match(/iPad/i) || km.match(/iPhone/),
      eW = 12;
    function tW(e) {
      jt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: iW }),
        jt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: oW,
        }),
        jt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: aW }),
        jt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: sW });
    }
    function rW(e) {
      jt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          Fi(e),
            zm({ store: e, elementApi: Re }),
            Mi({ store: e, allowEvents: !0 }),
            Ym();
        },
      });
    }
    function nW(e, t) {
      let r = jt({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function iW({ rawData: e, defer: t }, r) {
      let n = () => {
        Mi({ store: r, rawData: e, allowEvents: !0 }), Ym();
      };
      t ? setTimeout(n, 0) : n();
    }
    function Ym() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function oW(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: i,
          eventId: o,
          allowEvents: a,
          immediate: s,
          testManual: c,
          verbose: d = !0,
        } = e,
        { rawData: _ } = e;
      if (n && i && _ && s) {
        let f = _.actionLists[n];
        f && (_ = HV({ actionList: f, actionItemId: i, rawData: _ }));
      }
      if (
        (Mi({ store: t, rawData: _, allowEvents: a, testManual: c }),
        (n && r === ot.ActionTypeConsts.GENERAL_START_ACTION) || vs(r))
      ) {
        _s({ store: t, actionListId: n }),
          $m({ store: t, actionListId: n, eventId: o });
        let f = ms({
          store: t,
          eventId: o,
          actionListId: n,
          immediate: s,
          verbose: d,
        });
        d &&
          f &&
          t.dispatch(
            (0, Oe.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !s,
            })
          );
      }
    }
    function aW({ actionListId: e }, t) {
      e ? _s({ store: t, actionListId: e }) : Zm({ store: t }), Fi(t);
    }
    function sW(e, t) {
      Fi(t), zm({ store: t, elementApi: Re });
    }
    function Mi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: i } = e.getState();
      t && e.dispatch((0, Oe.rawDataImported)(t)),
        i.active ||
          (e.dispatch(
            (0, Oe.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(qi),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (pW(e),
            uW(),
            e.getState().ixSession.hasDefinedMediaQueries && rW(e)),
          e.dispatch((0, Oe.sessionStarted)()),
          cW(e, n));
    }
    function uW() {
      let { documentElement: e } = document;
      e.className.indexOf(Hm) === -1 && (e.className += ` ${Hm}`);
    }
    function cW(e, t) {
      let r = (n) => {
        let { ixSession: i, ixParameters: o } = e.getState();
        i.active &&
          (e.dispatch((0, Oe.animationFrameChanged)(n, o)),
          t ? nW(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function Fi(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(lW), zV(), e.dispatch((0, Oe.sessionStopped)());
      }
    }
    function lW({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function fW({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: i,
      actionListId: o,
      parameterGroup: a,
      smoothing: s,
      restingValue: c,
    }) {
      let { ixData: d, ixSession: _ } = e.getState(),
        { events: f } = d,
        m = f[n],
        { eventTypeId: p } = m,
        h = {},
        T = {},
        A = [],
        { continuousActionGroups: S } = a,
        { id: N } = a;
      kV(p, i) && (N = jV(t, N));
      let O = _.hasBoundaryNodes && r ? Re.getClosestElement(r, qi) : null;
      S.forEach((M) => {
        let { keyframe: D, actionItems: F } = M;
        F.forEach((W) => {
          let { actionTypeId: z } = W,
            { target: Q } = W.config;
          if (!Q) return;
          let oe = Q.boundaryMode ? O : null,
            B = YV(Q) + hs + z;
          if (((T[B] = dW(T[B], D, W)), !h[B])) {
            h[B] = !0;
            let { config: L } = W;
            Li({
              config: L,
              event: m,
              eventTarget: r,
              elementRoot: oe,
              elementApi: Re,
            }).forEach((v) => {
              A.push({ element: v, key: B });
            });
          }
        });
      }),
        A.forEach(({ element: M, key: D }) => {
          let F = T[D],
            W = (0, xt.default)(F, "[0].actionItems[0]", {}),
            { actionTypeId: z } = W,
            Q = Di(z) ? Es(z)(M, W) : null,
            oe = gs({ element: M, actionItem: W, elementApi: Re }, Q);
          ys({
            store: e,
            element: M,
            eventId: n,
            actionListId: o,
            actionItem: W,
            destination: oe,
            continuous: !0,
            parameterId: N,
            actionGroups: F,
            smoothing: s,
            restingValue: c,
            pluginInstance: Q,
          });
        });
    }
    function dW(e = [], t, r) {
      let n = [...e],
        i;
      return (
        n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
        i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[i].actionItems.push(r),
        n
      );
    }
    function pW(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      Qm(e),
        (0, an.default)(r, (i, o) => {
          let a = PV.default[o];
          if (!a) {
            console.warn(`IX2 event type not configured: ${o}`);
            return;
          }
          mW({ logic: a, store: e, events: i });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && hW(e);
    }
    var vW = ["resize", "orientationchange"];
    function hW(e) {
      let t = () => {
        Qm(e);
      };
      vW.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, Oe.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function Qm(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: i } = r;
        e.dispatch((0, Oe.viewportWidthChanged)({ width: n, mediaQueries: i }));
      }
    }
    var gW = (e, t) => (0, xV.default)((0, qV.default)(e, t), NV.default),
      EW = (e, t) => {
        (0, an.default)(e, (r, n) => {
          r.forEach((i, o) => {
            let a = n + hs + o;
            t(i, n, a);
          });
        });
      },
      _W = (e) => {
        let t = { target: e.target, targets: e.targets };
        return Li({ config: t, elementApi: Re });
      };
    function mW({ logic: e, store: t, events: r }) {
      yW(r);
      let { types: n, handler: i } = e,
        { ixData: o } = t.getState(),
        { actionLists: a } = o,
        s = gW(r, _W);
      if (!(0, CV.default)(s)) return;
      (0, an.default)(s, (f, m) => {
        let p = r[m],
          { action: h, id: T, mediaQueries: A = o.mediaQueryKeys } = p,
          { actionListId: S } = h.config;
        QV(A, o.mediaQueryKeys) || t.dispatch((0, Oe.mediaQueriesDefined)()),
          h.actionTypeId === ot.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(p.config) ? p.config : [p.config]).forEach((O) => {
              let { continuousParameterGroupId: M } = O,
                D = (0, xt.default)(a, `${S}.continuousParameterGroups`, []),
                F = (0, RV.default)(D, ({ id: Q }) => Q === M),
                W = (O.smoothing || 0) / 100,
                z = (O.restingState || 0) / 100;
              F &&
                f.forEach((Q, oe) => {
                  let B = T + hs + oe;
                  fW({
                    store: t,
                    eventStateKey: B,
                    eventTarget: Q,
                    eventId: T,
                    eventConfig: O,
                    actionListId: S,
                    parameterGroup: F,
                    smoothing: W,
                    restingValue: z,
                  });
                });
            }),
          (h.actionTypeId === ot.ActionTypeConsts.GENERAL_START_ACTION ||
            vs(h.actionTypeId)) &&
            $m({ store: t, actionListId: S, eventId: T });
      });
      let c = (f) => {
          let { ixSession: m } = t.getState();
          EW(s, (p, h, T) => {
            let A = r[h],
              S = m.eventState[T],
              { action: N, mediaQueries: O = o.mediaQueryKeys } = A;
            if (!Pi(O, m.mediaQueryKey)) return;
            let M = (D = {}) => {
              let F = i(
                {
                  store: t,
                  element: p,
                  event: A,
                  eventConfig: D,
                  nativeEvent: f,
                  eventStateKey: T,
                },
                S
              );
              $V(F, S) || t.dispatch((0, Oe.eventStateChanged)(T, F));
            };
            N.actionTypeId === ot.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(M)
              : M();
          });
        },
        d = (0, LV.default)(c, eW),
        _ = ({ target: f = document, types: m, throttle: p }) => {
          m.split(" ")
            .filter(Boolean)
            .forEach((h) => {
              let T = p ? d : c;
              f.addEventListener(h, T),
                t.dispatch((0, Oe.eventListenerAdded)(f, [h, T]));
            });
        };
      Array.isArray(n) ? n.forEach(_) : typeof n == "string" && _(e);
    }
    function yW(e) {
      if (!JV) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: i, target: o } = e[n],
          a = Re.getQuerySelector(o);
        t[a] ||
          ((i === ot.EventTypeConsts.MOUSE_CLICK ||
            i === ot.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function $m({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: i } = e.getState(),
        { actionLists: o, events: a } = n,
        s = a[r],
        c = o[t];
      if (c && c.useFirstGroupAsInitialState) {
        let d = (0, xt.default)(c, "actionItemGroups[0].actionItems", []),
          _ = (0, xt.default)(s, "mediaQueries", n.mediaQueryKeys);
        if (!Pi(_, i.mediaQueryKey)) return;
        d.forEach((f) => {
          var m;
          let { config: p, actionTypeId: h } = f,
            T =
              (p == null || (m = p.target) === null || m === void 0
                ? void 0
                : m.useEventTarget) === !0
                ? { target: s.target, targets: s.targets }
                : p,
            A = Li({ config: T, event: s, elementApi: Re }),
            S = Di(h);
          A.forEach((N) => {
            let O = S ? Es(h)(N, f) : null;
            ys({
              destination: gs({ element: N, actionItem: f, elementApi: Re }, O),
              immediate: !0,
              store: e,
              element: N,
              eventId: r,
              actionItem: f,
              actionListId: t,
              pluginInstance: O,
            });
          });
        });
      }
    }
    function Zm({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, an.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: i } = r;
          Is(r, e),
            i &&
              e.dispatch(
                (0, Oe.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function _s({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
    }) {
      let { ixInstances: o, ixSession: a } = e.getState(),
        s = a.hasBoundaryNodes && r ? Re.getClosestElement(r, qi) : null;
      (0, an.default)(o, (c) => {
        let d = (0, xt.default)(c, "actionItem.config.target.boundaryMode"),
          _ = n ? c.eventStateKey === n : !0;
        if (c.actionListId === i && c.eventId === t && _) {
          if (s && d && !Re.elementContains(s, c.element)) return;
          Is(c, e),
            c.verbose &&
              e.dispatch(
                (0, Oe.actionListPlaybackChanged)({
                  actionListId: i,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function ms({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
      groupIndex: o = 0,
      immediate: a,
      verbose: s,
    }) {
      var c;
      let { ixData: d, ixSession: _ } = e.getState(),
        { events: f } = d,
        m = f[t] || {},
        { mediaQueries: p = d.mediaQueryKeys } = m,
        h = (0, xt.default)(d, `actionLists.${i}`, {}),
        { actionItemGroups: T, useFirstGroupAsInitialState: A } = h;
      if (!T || !T.length) return !1;
      o >= T.length && (0, xt.default)(m, "config.loop") && (o = 0),
        o === 0 && A && o++;
      let N =
          (o === 0 || (o === 1 && A)) &&
          vs((c = m.action) === null || c === void 0 ? void 0 : c.actionTypeId)
            ? m.config.delay
            : void 0,
        O = (0, xt.default)(T, [o, "actionItems"], []);
      if (!O.length || !Pi(p, _.mediaQueryKey)) return !1;
      let M = _.hasBoundaryNodes && r ? Re.getClosestElement(r, qi) : null,
        D = VV(O),
        F = !1;
      return (
        O.forEach((W, z) => {
          let { config: Q, actionTypeId: oe } = W,
            B = Di(oe),
            { target: L } = Q;
          if (!L) return;
          let v = L.boundaryMode ? M : null;
          Li({
            config: Q,
            event: m,
            eventTarget: r,
            elementRoot: v,
            elementApi: Re,
          }).forEach((C, G) => {
            let K = B ? Es(oe)(C, W) : null,
              te = B ? ZV(oe)(C, W) : null;
            F = !0;
            let X = D === z && G === 0,
              V = WV({ element: C, actionItem: W }),
              Y = gs({ element: C, actionItem: W, elementApi: Re }, K);
            ys({
              store: e,
              element: C,
              actionItem: W,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: i,
              groupIndex: o,
              isCarrier: X,
              computedStyle: V,
              destination: Y,
              immediate: a,
              verbose: s,
              pluginInstance: K,
              pluginDuration: te,
              instanceDelay: N,
            });
          });
        }),
        F
      );
    }
    function ys(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        i = (0, AV.default)(e, DV),
        {
          element: o,
          actionItem: a,
          immediate: s,
          pluginInstance: c,
          continuous: d,
          restingValue: _,
          eventId: f,
        } = i,
        m = !d,
        p = XV(),
        { ixElements: h, ixSession: T, ixData: A } = r.getState(),
        S = GV(h, o),
        { refState: N } = h[S] || {},
        O = Re.getRefType(o),
        M = T.reducedMotion && ot.ReducedMotionTypes[a.actionTypeId],
        D;
      if (M && d)
        switch (
          (t = A.events[f]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case ot.EventTypeConsts.MOUSE_MOVE:
          case ot.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            D = _;
            break;
          default:
            D = 0.5;
            break;
        }
      let F = BV(o, N, n, a, Re, c);
      if (
        (r.dispatch(
          (0, Oe.instanceAdded)(
            (0, SV.default)(
              {
                instanceId: p,
                elementId: S,
                origin: F,
                refType: O,
                skipMotion: M,
                skipToValue: D,
              },
              i
            )
          )
        ),
        Jm(document.body, "ix2-animation-started", p),
        s)
      ) {
        IW(r, p);
        return;
      }
      jt({ store: r, select: ({ ixInstances: W }) => W[p], onChange: ey }),
        m && r.dispatch((0, Oe.instanceStarted)(p, T.tick));
    }
    function Is(e, t) {
      Jm(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: i } = t.getState(),
        { ref: o, refType: a } = i[r] || {};
      a === Km && KV(o, n, Re), t.dispatch((0, Oe.instanceRemoved)(e.id));
    }
    function Jm(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function IW(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, Oe.instanceStarted)(t, 0)),
        e.dispatch((0, Oe.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      ey(n[t], e);
    }
    function ey(e, t) {
      let {
          active: r,
          continuous: n,
          complete: i,
          elementId: o,
          actionItem: a,
          actionTypeId: s,
          renderType: c,
          current: d,
          groupIndex: _,
          eventId: f,
          eventTarget: m,
          eventStateKey: p,
          actionListId: h,
          isCarrier: T,
          styleProp: A,
          verbose: S,
          pluginInstance: N,
        } = e,
        { ixData: O, ixSession: M } = t.getState(),
        { events: D } = O,
        F = D[f] || {},
        { mediaQueries: W = O.mediaQueryKeys } = F;
      if (Pi(W, M.mediaQueryKey) && (n || r || i)) {
        if (d || (c === FV && i)) {
          t.dispatch((0, Oe.elementStateChanged)(o, s, d, a));
          let { ixElements: z } = t.getState(),
            { ref: Q, refType: oe, refState: B } = z[o] || {},
            L = B && B[s];
          (oe === Km || Di(s)) && UV(Q, B, L, f, a, A, Re, c, N);
        }
        if (i) {
          if (T) {
            let z = ms({
              store: t,
              eventId: f,
              eventTarget: m,
              eventStateKey: p,
              actionListId: h,
              groupIndex: _ + 1,
              verbose: S,
            });
            S &&
              !z &&
              t.dispatch(
                (0, Oe.actionListPlaybackChanged)({
                  actionListId: h,
                  isPlaying: !1,
                })
              );
          }
          Is(e, t);
        }
      }
    }
  });
  var ry = u((It) => {
    "use strict";
    var TW = Dt().default,
      bW = et().default;
    Object.defineProperty(It, "__esModule", { value: !0 });
    It.actions = void 0;
    It.destroy = ty;
    It.init = RW;
    It.setEnv = AW;
    It.store = void 0;
    Xl();
    var OW = Jo(),
      wW = bW(oE()),
      Ts = ps(),
      SW = TW(yi());
    It.actions = SW;
    var Gi = (0, OW.createStore)(wW.default);
    It.store = Gi;
    function AW(e) {
      e() && (0, Ts.observeRequests)(Gi);
    }
    function RW(e) {
      ty(), (0, Ts.startEngine)({ store: Gi, rawData: e, allowEvents: !0 });
    }
    function ty() {
      (0, Ts.stopEngine)(Gi);
    }
  });
  var ay = u((LK, oy) => {
    var ny = Be(),
      iy = ry();
    iy.setEnv(ny.env);
    ny.define(
      "ix2",
      (oy.exports = function () {
        return iy;
      })
    );
  });
  var uy = u((PK, sy) => {
    var br = Be();
    br.define(
      "links",
      (sy.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = br.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "w--current",
          d = /index\.(html|php)$/,
          _ = /\/$/,
          f,
          m;
        r.ready = r.design = r.preview = p;
        function p() {
          (i = o && br.env("design")),
            (m = br.env("slug") || a.pathname || ""),
            br.scroll.off(T),
            (f = []);
          for (var S = document.links, N = 0; N < S.length; ++N) h(S[N]);
          f.length && (br.scroll.on(T), T());
        }
        function h(S) {
          var N =
            (i && S.getAttribute("href-disabled")) || S.getAttribute("href");
          if (((s.href = N), !(N.indexOf(":") >= 0))) {
            var O = e(S);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var M = e(s.hash);
              M.length && f.push({ link: O, sec: M, active: !1 });
              return;
            }
            if (!(N === "#" || N === "")) {
              var D = s.href === a.href || N === m || (d.test(N) && _.test(m));
              A(O, c, D);
            }
          }
        }
        function T() {
          var S = n.scrollTop(),
            N = n.height();
          t.each(f, function (O) {
            var M = O.link,
              D = O.sec,
              F = D.offset().top,
              W = D.outerHeight(),
              z = N * 0.5,
              Q = D.is(":visible") && F + W - z >= S && F + z <= S + N;
            O.active !== Q && ((O.active = Q), A(M, c, Q));
          });
        }
        function A(S, N, O) {
          var M = S.hasClass(N);
          (O && M) || (!O && !M) || (O ? S.addClass(N) : S.removeClass(N));
        }
        return r;
      })
    );
  });
  var ly = u((DK, cy) => {
    var Xi = Be();
    Xi.define(
      "scroll",
      (cy.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = h() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (L) {
              window.setTimeout(L, 15);
            },
          c = Xi.env("editor") ? ".w-editor-body" : "body",
          d =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          _ = 'a[href="#"]',
          f = 'a[href*="#"]:not(.w-tab-link):not(' + _ + ")",
          m = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          p = document.createElement("style");
        p.appendChild(document.createTextNode(m));
        function h() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var T = /^#[a-zA-Z0-9][\w:.-]*$/;
        function A(L) {
          return T.test(L.hash) && L.host + L.pathname === r.host + r.pathname;
        }
        let S =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function N() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            S.matches
          );
        }
        function O(L, v) {
          var P;
          switch (v) {
            case "add":
              (P = L.attr("tabindex")),
                P
                  ? L.attr("data-wf-tabindex-swap", P)
                  : L.attr("tabindex", "-1");
              break;
            case "remove":
              (P = L.attr("data-wf-tabindex-swap")),
                P
                  ? (L.attr("tabindex", P),
                    L.removeAttr("data-wf-tabindex-swap"))
                  : L.removeAttr("tabindex");
              break;
          }
          L.toggleClass("wf-force-outline-none", v === "add");
        }
        function M(L) {
          var v = L.currentTarget;
          if (
            !(
              Xi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(v.className))
            )
          ) {
            var P = A(v) ? v.hash : "";
            if (P !== "") {
              var C = e(P);
              C.length &&
                (L && (L.preventDefault(), L.stopPropagation()),
                D(P, L),
                window.setTimeout(
                  function () {
                    F(C, function () {
                      O(C, "add"),
                        C.get(0).focus({ preventScroll: !0 }),
                        O(C, "remove");
                    });
                  },
                  L ? 0 : 300
                ));
            }
          }
        }
        function D(L) {
          if (
            r.hash !== L &&
            n &&
            n.pushState &&
            !(Xi.env.chrome && r.protocol === "file:")
          ) {
            var v = n.state && n.state.hash;
            v !== L && n.pushState({ hash: L }, "", L);
          }
        }
        function F(L, v) {
          var P = i.scrollTop(),
            C = W(L);
          if (P !== C) {
            var G = z(L, P, C),
              K = Date.now(),
              te = function () {
                var X = Date.now() - K;
                window.scroll(0, Q(P, C, X, G)),
                  X <= G ? s(te) : typeof v == "function" && v();
              };
            s(te);
          }
        }
        function W(L) {
          var v = e(d),
            P = v.css("position") === "fixed" ? v.outerHeight() : 0,
            C = L.offset().top - P;
          if (L.data("scroll") === "mid") {
            var G = i.height() - P,
              K = L.outerHeight();
            K < G && (C -= Math.round((G - K) / 2));
          }
          return C;
        }
        function z(L, v, P) {
          if (N()) return 0;
          var C = 1;
          return (
            a.add(L).each(function (G, K) {
              var te = parseFloat(K.getAttribute("data-scroll-time"));
              !isNaN(te) && te >= 0 && (C = te);
            }),
            (472.143 * Math.log(Math.abs(v - P) + 125) - 2e3) * C
          );
        }
        function Q(L, v, P, C) {
          return P > C ? v : L + (v - L) * oe(P / C);
        }
        function oe(L) {
          return L < 0.5
            ? 4 * L * L * L
            : (L - 1) * (2 * L - 2) * (2 * L - 2) + 1;
        }
        function B() {
          var { WF_CLICK_EMPTY: L, WF_CLICK_SCROLL: v } = t;
          o.on(v, f, M),
            o.on(L, _, function (P) {
              P.preventDefault();
            }),
            document.head.insertBefore(p, document.head.firstChild);
        }
        return { ready: B };
      })
    );
  });
  var dy = u((MK, fy) => {
    var CW = Be();
    CW.define(
      "touch",
      (fy.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            d,
            _;
          o.addEventListener("touchstart", f, !1),
            o.addEventListener("touchmove", m, !1),
            o.addEventListener("touchend", p, !1),
            o.addEventListener("touchcancel", h, !1),
            o.addEventListener("mousedown", f, !1),
            o.addEventListener("mousemove", m, !1),
            o.addEventListener("mouseup", p, !1),
            o.addEventListener("mouseout", h, !1);
          function f(A) {
            var S = A.touches;
            (S && S.length > 1) ||
              ((a = !0),
              S ? ((s = !0), (d = S[0].clientX)) : (d = A.clientX),
              (_ = d));
          }
          function m(A) {
            if (a) {
              if (s && A.type === "mousemove") {
                A.preventDefault(), A.stopPropagation();
                return;
              }
              var S = A.touches,
                N = S ? S[0].clientX : A.clientX,
                O = N - _;
              (_ = N),
                Math.abs(O) > c &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", A, { direction: O > 0 ? "right" : "left" }), h());
            }
          }
          function p(A) {
            if (a && ((a = !1), s && A.type === "mouseup")) {
              A.preventDefault(), A.stopPropagation(), (s = !1);
              return;
            }
          }
          function h() {
            a = !1;
          }
          function T() {
            o.removeEventListener("touchstart", f, !1),
              o.removeEventListener("touchmove", m, !1),
              o.removeEventListener("touchend", p, !1),
              o.removeEventListener("touchcancel", h, !1),
              o.removeEventListener("mousedown", f, !1),
              o.removeEventListener("mousemove", m, !1),
              o.removeEventListener("mouseup", p, !1),
              o.removeEventListener("mouseout", h, !1),
              (o = null);
          }
          this.destroy = T;
        }
        function i(o, a, s) {
          var c = e.Event(o, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var py = u((bs) => {
    "use strict";
    Object.defineProperty(bs, "__esModule", { value: !0 });
    bs.default = xW;
    function xW(e, t, r, n, i, o, a, s, c, d, _, f, m) {
      return function (p) {
        e(p);
        var h = p.form,
          T = {
            name: h.attr("data-name") || h.attr("name") || "Untitled Form",
            pageId: h.attr("data-wf-page-id") || "",
            elementId: h.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              h.html()
            ),
            trackingCookies: n(),
          };
        let A = h.attr("data-wf-flow");
        A && (T.wfFlow = A), i(p);
        var S = o(h, T.fields);
        if (S) return a(S);
        if (((T.fileUploads = s(h)), c(p), !d)) {
          _(p);
          return;
        }
        f.ajax({
          url: m,
          type: "POST",
          data: T,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (N) {
            N && N.code === 200 && (p.success = !0), _(p);
          })
          .fail(function () {
            _(p);
          });
      };
    }
  });
  var hy = u((GK, vy) => {
    var Ui = Be();
    Ui.define(
      "forms",
      (vy.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          c,
          d = /e(-)?mail/i,
          _ = /^\S+@\S+$/,
          f = window.alert,
          m = Ui.env(),
          p,
          h,
          T,
          A = /list-manage[1-9]?.com/i,
          S = t.debounce(function () {
            f(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              N(), !m && !p && M();
            };
        function N() {
          (c = e("html").attr("data-wf-site")),
            (h = "https://webflow.com/api/v1/form/" + c),
            a &&
              h.indexOf("https://webflow.com") >= 0 &&
              (h = h.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (T = `${h}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(O);
        }
        function O(X, V) {
          var Y = e(V),
            g = e.data(V, s);
          g || (g = e.data(V, s, { form: Y })), D(g);
          var y = Y.closest("div.w-form");
          (g.done = y.find("> .w-form-done")),
            (g.fail = y.find("> .w-form-fail")),
            (g.fileUploads = y.find(".w-file-upload")),
            g.fileUploads.each(function (re) {
              G(re, g);
            });
          var U =
            g.form.attr("aria-label") || g.form.attr("data-name") || "Form";
          g.done.attr("aria-label") || g.form.attr("aria-label", U),
            g.done.attr("tabindex", "-1"),
            g.done.attr("role", "region"),
            g.done.attr("aria-label") ||
              g.done.attr("aria-label", U + " success"),
            g.fail.attr("tabindex", "-1"),
            g.fail.attr("role", "region"),
            g.fail.attr("aria-label") ||
              g.fail.attr("aria-label", U + " failure");
          var ee = (g.action = Y.attr("action"));
          if (
            ((g.handler = null),
            (g.redirect = Y.attr("data-redirect")),
            A.test(ee))
          ) {
            g.handler = v;
            return;
          }
          if (!ee) {
            if (c) {
              g.handler = (() => {
                let re = py().default;
                return re(D, o, Ui, oe, C, W, f, z, F, c, P, e, h);
              })();
              return;
            }
            S();
          }
        }
        function M() {
          (p = !0),
            n.on("submit", s + " form", function (re) {
              var Z = e.data(this, s);
              Z.handler && ((Z.evt = re), Z.handler(Z));
            });
          let X = ".w-checkbox-input",
            V = ".w-radio-input",
            Y = "w--redirected-checked",
            g = "w--redirected-focus",
            y = "w--redirected-focus-visible",
            U = ":focus-visible, [data-wf-focus-visible]",
            ee = [
              ["checkbox", X],
              ["radio", V],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + X + ")",
            (re) => {
              e(re.target).siblings(X).toggleClass(Y);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (re) => {
              e(`input[name="${re.target.name}"]:not(${X})`).map((ne, be) =>
                e(be).siblings(V).removeClass(Y)
              );
              let Z = e(re.target);
              Z.hasClass("w-radio-input") || Z.siblings(V).addClass(Y);
            }),
            ee.forEach(([re, Z]) => {
              n.on(
                "focus",
                s + ` form input[type="${re}"]:not(` + Z + ")",
                (ne) => {
                  e(ne.target).siblings(Z).addClass(g),
                    e(ne.target).filter(U).siblings(Z).addClass(y);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${re}"]:not(` + Z + ")",
                  (ne) => {
                    e(ne.target).siblings(Z).removeClass(`${g} ${y}`);
                  }
                );
            });
        }
        function D(X) {
          var V = (X.btn = X.form.find(':input[type="submit"]'));
          (X.wait = X.btn.attr("data-wait") || null),
            (X.success = !1),
            V.prop("disabled", !1),
            X.label && V.val(X.label);
        }
        function F(X) {
          var V = X.btn,
            Y = X.wait;
          V.prop("disabled", !0), Y && ((X.label = V.val()), V.val(Y));
        }
        function W(X, V) {
          var Y = null;
          return (
            (V = V || {}),
            X.find(':input:not([type="submit"]):not([type="file"])').each(
              function (g, y) {
                var U = e(y),
                  ee = U.attr("type"),
                  re =
                    U.attr("data-name") || U.attr("name") || "Field " + (g + 1),
                  Z = U.val();
                if (ee === "checkbox") Z = U.is(":checked");
                else if (ee === "radio") {
                  if (V[re] === null || typeof V[re] == "string") return;
                  Z =
                    X.find(
                      'input[name="' + U.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof Z == "string" && (Z = e.trim(Z)),
                  (V[re] = Z),
                  (Y = Y || B(U, ee, re, Z));
              }
            ),
            Y
          );
        }
        function z(X) {
          var V = {};
          return (
            X.find(':input[type="file"]').each(function (Y, g) {
              var y = e(g),
                U = y.attr("data-name") || y.attr("name") || "File " + (Y + 1),
                ee = y.attr("data-value");
              typeof ee == "string" && (ee = e.trim(ee)), (V[U] = ee);
            }),
            V
          );
        }
        let Q = { _mkto_trk: "marketo" };
        function oe() {
          return document.cookie.split("; ").reduce(function (V, Y) {
            let g = Y.split("="),
              y = g[0];
            if (y in Q) {
              let U = Q[y],
                ee = g.slice(1).join("=");
              V[U] = ee;
            }
            return V;
          }, {});
        }
        function B(X, V, Y, g) {
          var y = null;
          return (
            V === "password"
              ? (y = "Passwords cannot be submitted.")
              : X.attr("required")
              ? g
                ? d.test(X.attr("type")) &&
                  (_.test(g) ||
                    (y = "Please enter a valid email address for: " + Y))
                : (y = "Please fill out the required field: " + Y)
              : Y === "g-recaptcha-response" &&
                !g &&
                (y = "Please confirm you\u2019re not a robot."),
            y
          );
        }
        function L(X) {
          C(X), P(X);
        }
        function v(X) {
          D(X);
          var V = X.form,
            Y = {};
          if (/^https/.test(o.href) && !/^https/.test(X.action)) {
            V.attr("method", "post");
            return;
          }
          C(X);
          var g = W(V, Y);
          if (g) return f(g);
          F(X);
          var y;
          t.each(Y, function (Z, ne) {
            d.test(ne) && (Y.EMAIL = Z),
              /^((full[ _-]?)?name)$/i.test(ne) && (y = Z),
              /^(first[ _-]?name)$/i.test(ne) && (Y.FNAME = Z),
              /^(last[ _-]?name)$/i.test(ne) && (Y.LNAME = Z);
          }),
            y &&
              !Y.FNAME &&
              ((y = y.split(" ")),
              (Y.FNAME = y[0]),
              (Y.LNAME = Y.LNAME || y[1]));
          var U = X.action.replace("/post?", "/post-json?") + "&c=?",
            ee = U.indexOf("u=") + 2;
          ee = U.substring(ee, U.indexOf("&", ee));
          var re = U.indexOf("id=") + 3;
          (re = U.substring(re, U.indexOf("&", re))),
            (Y["b_" + ee + "_" + re] = ""),
            e
              .ajax({ url: U, data: Y, dataType: "jsonp" })
              .done(function (Z) {
                (X.success = Z.result === "success" || /already/.test(Z.msg)),
                  X.success || console.info("MailChimp error: " + Z.msg),
                  P(X);
              })
              .fail(function () {
                P(X);
              });
        }
        function P(X) {
          var V = X.form,
            Y = X.redirect,
            g = X.success;
          if (g && Y) {
            Ui.location(Y);
            return;
          }
          X.done.toggle(g),
            X.fail.toggle(!g),
            g ? X.done.focus() : X.fail.focus(),
            V.toggle(!g),
            D(X);
        }
        function C(X) {
          X.evt && X.evt.preventDefault(), (X.evt = null);
        }
        function G(X, V) {
          if (!V.fileUploads || !V.fileUploads[X]) return;
          var Y,
            g = e(V.fileUploads[X]),
            y = g.find("> .w-file-upload-default"),
            U = g.find("> .w-file-upload-uploading"),
            ee = g.find("> .w-file-upload-success"),
            re = g.find("> .w-file-upload-error"),
            Z = y.find(".w-file-upload-input"),
            ne = y.find(".w-file-upload-label"),
            be = ne.children(),
            fe = re.find(".w-file-upload-error-msg"),
            E = ee.find(".w-file-upload-file"),
            H = ee.find(".w-file-remove-link"),
            $ = E.find(".w-file-upload-file-name"),
            j = fe.attr("data-w-size-error"),
            ve = fe.attr("data-w-type-error"),
            Ye = fe.attr("data-w-generic-error");
          if (
            (m ||
              ne.on("click keydown", function (b) {
                (b.type === "keydown" && b.which !== 13 && b.which !== 32) ||
                  (b.preventDefault(), Z.click());
              }),
            ne.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            H.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            m)
          )
            Z.on("click", function (b) {
              b.preventDefault();
            }),
              ne.on("click", function (b) {
                b.preventDefault();
              }),
              be.on("click", function (b) {
                b.preventDefault();
              });
          else {
            H.on("click keydown", function (b) {
              if (b.type === "keydown") {
                if (b.which !== 13 && b.which !== 32) return;
                b.preventDefault();
              }
              Z.removeAttr("data-value"),
                Z.val(""),
                $.html(""),
                y.toggle(!0),
                ee.toggle(!1),
                ne.focus();
            }),
              Z.on("change", function (b) {
                (Y = b.target && b.target.files && b.target.files[0]),
                  Y &&
                    (y.toggle(!1),
                    re.toggle(!1),
                    U.toggle(!0),
                    U.focus(),
                    $.text(Y.name),
                    R() || F(V),
                    (V.fileUploads[X].uploading = !0),
                    K(Y, I));
              });
            var Ve = ne.outerHeight();
            Z.height(Ve), Z.width(1);
          }
          function l(b) {
            var x = b.responseJSON && b.responseJSON.msg,
              J = Ye;
            typeof x == "string" && x.indexOf("InvalidFileTypeError") === 0
              ? (J = ve)
              : typeof x == "string" &&
                x.indexOf("MaxFileSizeError") === 0 &&
                (J = j),
              fe.text(J),
              Z.removeAttr("data-value"),
              Z.val(""),
              U.toggle(!1),
              y.toggle(!0),
              re.toggle(!0),
              re.focus(),
              (V.fileUploads[X].uploading = !1),
              R() || D(V);
          }
          function I(b, x) {
            if (b) return l(b);
            var J = x.fileName,
              ae = x.postData,
              _e = x.fileId,
              k = x.s3Url;
            Z.attr("data-value", _e), te(k, ae, Y, J, w);
          }
          function w(b) {
            if (b) return l(b);
            U.toggle(!1),
              ee.css("display", "inline-block"),
              ee.focus(),
              (V.fileUploads[X].uploading = !1),
              R() || D(V);
          }
          function R() {
            var b = (V.fileUploads && V.fileUploads.toArray()) || [];
            return b.some(function (x) {
              return x.uploading;
            });
          }
        }
        function K(X, V) {
          var Y = new URLSearchParams({ name: X.name, size: X.size });
          e.ajax({ type: "GET", url: `${T}?${Y}`, crossDomain: !0 })
            .done(function (g) {
              V(null, g);
            })
            .fail(function (g) {
              V(g);
            });
        }
        function te(X, V, Y, g, y) {
          var U = new FormData();
          for (var ee in V) U.append(ee, V[ee]);
          U.append("file", Y, g),
            e
              .ajax({
                type: "POST",
                url: X,
                data: U,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                y(null);
              })
              .fail(function (re) {
                y(re);
              });
        }
        return r;
      })
    );
  });
  var _y = u((XK, Ey) => {
    var Os = Be(),
      gy = "w-condition-invisible",
      NW = "." + gy;
    function qW(e) {
      return e.filter(function (t) {
        return !un(t);
      });
    }
    function un(e) {
      return !!(e.$el && e.$el.closest(NW).length);
    }
    function ws(e, t) {
      for (var r = e; r >= 0; r--) if (!un(t[r])) return r;
      return -1;
    }
    function Ss(e, t) {
      for (var r = e; r <= t.length - 1; r++) if (!un(t[r])) return r;
      return -1;
    }
    function LW(e, t) {
      return ws(e - 1, t) === -1;
    }
    function PW(e, t) {
      return Ss(e + 1, t) === -1;
    }
    function sn(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function DW(e, t, r, n) {
      var i = r.tram,
        o = Array.isArray,
        a = "w-lightbox",
        s = a + "-",
        c = /(^|\s+)/g,
        d = [],
        _,
        f,
        m,
        p = [];
      function h(g, y) {
        return (
          (d = o(g) ? g : [g]),
          f || h.build(),
          qW(d).length > 1 &&
            ((f.items = f.empty),
            d.forEach(function (U, ee) {
              var re = V("thumbnail"),
                Z = V("item")
                  .prop("tabIndex", 0)
                  .attr("aria-controls", "w-lightbox-view")
                  .attr("role", "tab")
                  .append(re);
              sn(Z, `show item ${ee + 1} of ${d.length}`),
                un(U) && Z.addClass(gy),
                (f.items = f.items.add(Z)),
                oe(U.thumbnailUrl || U.url, function (ne) {
                  ne.prop("width") > ne.prop("height")
                    ? G(ne, "wide")
                    : G(ne, "tall"),
                    re.append(G(ne, "thumbnail-image"));
                });
            }),
            f.strip.empty().append(f.items),
            G(f.content, "group")),
          i(K(f.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          G(f.html, "noscroll"),
          h.show(y || 0)
        );
      }
      (h.build = function () {
        return (
          h.destroy(),
          (f = { html: r(t.documentElement), empty: r() }),
          (f.arrowLeft = V("control left inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (f.arrowRight = V("control right inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (f.close = V("control close").attr("role", "button")),
          sn(f.arrowLeft, "previous image"),
          sn(f.arrowRight, "next image"),
          sn(f.close, "close lightbox"),
          (f.spinner = V("spinner")
            .attr("role", "progressbar")
            .attr("aria-live", "polite")
            .attr("aria-hidden", !1)
            .attr("aria-busy", !0)
            .attr("aria-valuemin", 0)
            .attr("aria-valuemax", 100)
            .attr("aria-valuenow", 0)
            .attr("aria-valuetext", "Loading image")),
          (f.strip = V("strip").attr("role", "tablist")),
          (m = new v(f.spinner, P("hide"))),
          (f.content = V("content").append(
            f.spinner,
            f.arrowLeft,
            f.arrowRight,
            f.close
          )),
          (f.container = V("container").append(f.content, f.strip)),
          (f.lightbox = V("backdrop hide").append(f.container)),
          f.strip.on("click", C("item"), O),
          f.content
            .on("swipe", M)
            .on("click", C("left"), A)
            .on("click", C("right"), S)
            .on("click", C("close"), N)
            .on("click", C("image, caption"), S),
          f.container.on("click", C("view"), N).on("dragstart", C("img"), F),
          f.lightbox.on("keydown", W).on("focusin", D),
          r(n).append(f.lightbox),
          h
        );
      }),
        (h.destroy = function () {
          f && (K(f.html, "noscroll"), f.lightbox.remove(), (f = void 0));
        }),
        (h.show = function (g) {
          if (g !== _) {
            var y = d[g];
            if (!y) return h.hide();
            if (un(y)) {
              if (g < _) {
                var U = ws(g - 1, d);
                g = U > -1 ? U : g;
              } else {
                var ee = Ss(g + 1, d);
                g = ee > -1 ? ee : g;
              }
              y = d[g];
            }
            var re = _;
            (_ = g),
              f.spinner
                .attr("aria-hidden", !1)
                .attr("aria-busy", !0)
                .attr("aria-valuenow", 0)
                .attr("aria-valuetext", "Loading image"),
              m.show();
            var Z = (y.html && Y(y.width, y.height)) || y.url;
            return (
              oe(Z, function (ne) {
                if (g !== _) return;
                var be = V("figure", "figure").append(G(ne, "image")),
                  fe = V("frame").append(be),
                  E = V("view")
                    .prop("tabIndex", 0)
                    .attr("id", "w-lightbox-view")
                    .append(fe),
                  H,
                  $;
                y.html &&
                  ((H = r(y.html)),
                  ($ = H.is("iframe")),
                  $ && H.on("load", j),
                  be.append(G(H, "embed"))),
                  y.caption &&
                    be.append(V("caption", "figcaption").text(y.caption)),
                  f.spinner.before(E),
                  $ || j();
                function j() {
                  if (
                    (f.spinner
                      .attr("aria-hidden", !0)
                      .attr("aria-busy", !1)
                      .attr("aria-valuenow", 100)
                      .attr("aria-valuetext", "Loaded image"),
                    m.hide(),
                    g !== _)
                  ) {
                    E.remove();
                    return;
                  }
                  let ve = LW(g, d);
                  te(f.arrowLeft, "inactive", ve),
                    X(f.arrowLeft, ve),
                    ve && f.arrowLeft.is(":focus") && f.arrowRight.focus();
                  let Ye = PW(g, d);
                  if (
                    (te(f.arrowRight, "inactive", Ye),
                    X(f.arrowRight, Ye),
                    Ye && f.arrowRight.is(":focus") && f.arrowLeft.focus(),
                    f.view
                      ? (i(f.view)
                          .add("opacity .3s")
                          .start({ opacity: 0 })
                          .then(B(f.view)),
                        i(E)
                          .add("opacity .3s")
                          .add("transform .3s")
                          .set({ x: g > re ? "80px" : "-80px" })
                          .start({ opacity: 1, x: 0 }))
                      : E.css("opacity", 1),
                    (f.view = E),
                    f.view.prop("tabIndex", 0),
                    f.items)
                  ) {
                    K(f.items, "active"), f.items.removeAttr("aria-selected");
                    var Ve = f.items.eq(g);
                    G(Ve, "active"), Ve.attr("aria-selected", !0), L(Ve);
                  }
                }
              }),
              f.close.prop("tabIndex", 0),
              r(":focus").addClass("active-lightbox"),
              p.length === 0 &&
                (r("body")
                  .children()
                  .each(function () {
                    r(this).hasClass("w-lightbox-backdrop") ||
                      r(this).is("script") ||
                      (p.push({
                        node: r(this),
                        hidden: r(this).attr("aria-hidden"),
                        tabIndex: r(this).attr("tabIndex"),
                      }),
                      r(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                  }),
                f.close.focus()),
              h
            );
          }
        }),
        (h.hide = function () {
          return (
            i(f.lightbox).add("opacity .3s").start({ opacity: 0 }).then(Q), h
          );
        }),
        (h.prev = function () {
          var g = ws(_ - 1, d);
          g > -1 && h.show(g);
        }),
        (h.next = function () {
          var g = Ss(_ + 1, d);
          g > -1 && h.show(g);
        });
      function T(g) {
        return function (y) {
          this === y.target && (y.stopPropagation(), y.preventDefault(), g());
        };
      }
      var A = T(h.prev),
        S = T(h.next),
        N = T(h.hide),
        O = function (g) {
          var y = r(this).index();
          g.preventDefault(), h.show(y);
        },
        M = function (g, y) {
          g.preventDefault(),
            y.direction === "left"
              ? h.next()
              : y.direction === "right" && h.prev();
        },
        D = function () {
          this.focus();
        };
      function F(g) {
        g.preventDefault();
      }
      function W(g) {
        var y = g.keyCode;
        y === 27 || z(y, "close")
          ? h.hide()
          : y === 37 || z(y, "left")
          ? h.prev()
          : y === 39 || z(y, "right")
          ? h.next()
          : z(y, "item") && r(":focus").click();
      }
      function z(g, y) {
        if (g !== 13 && g !== 32) return !1;
        var U = r(":focus").attr("class"),
          ee = P(y).trim();
        return U.includes(ee);
      }
      function Q() {
        f &&
          (f.strip.scrollLeft(0).empty(),
          K(f.html, "noscroll"),
          G(f.lightbox, "hide"),
          f.view && f.view.remove(),
          K(f.content, "group"),
          G(f.arrowLeft, "inactive"),
          G(f.arrowRight, "inactive"),
          (_ = f.view = void 0),
          p.forEach(function (g) {
            var y = g.node;
            y &&
              (g.hidden
                ? y.attr("aria-hidden", g.hidden)
                : y.removeAttr("aria-hidden"),
              g.tabIndex
                ? y.attr("tabIndex", g.tabIndex)
                : y.removeAttr("tabIndex"));
          }),
          (p = []),
          r(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function oe(g, y) {
        var U = V("img", "img");
        return (
          U.one("load", function () {
            y(U);
          }),
          U.attr("src", g),
          U
        );
      }
      function B(g) {
        return function () {
          g.remove();
        };
      }
      function L(g) {
        var y = g.get(0),
          U = f.strip.get(0),
          ee = y.offsetLeft,
          re = y.clientWidth,
          Z = U.scrollLeft,
          ne = U.clientWidth,
          be = U.scrollWidth - ne,
          fe;
        ee < Z
          ? (fe = Math.max(0, ee + re - ne))
          : ee + re > ne + Z && (fe = Math.min(ee, be)),
          fe != null &&
            i(f.strip).add("scroll-left 500ms").start({ "scroll-left": fe });
      }
      function v(g, y, U) {
        (this.$element = g),
          (this.className = y),
          (this.delay = U || 200),
          this.hide();
      }
      (v.prototype.show = function () {
        var g = this;
        g.timeoutId ||
          (g.timeoutId = setTimeout(function () {
            g.$element.removeClass(g.className), delete g.timeoutId;
          }, g.delay));
      }),
        (v.prototype.hide = function () {
          var g = this;
          if (g.timeoutId) {
            clearTimeout(g.timeoutId), delete g.timeoutId;
            return;
          }
          g.$element.addClass(g.className);
        });
      function P(g, y) {
        return g.replace(c, (y ? " ." : " ") + s);
      }
      function C(g) {
        return P(g, !0);
      }
      function G(g, y) {
        return g.addClass(P(y));
      }
      function K(g, y) {
        return g.removeClass(P(y));
      }
      function te(g, y, U) {
        return g.toggleClass(P(y), U);
      }
      function X(g, y) {
        return g.attr("aria-hidden", y).attr("tabIndex", y ? -1 : 0);
      }
      function V(g, y) {
        return G(r(t.createElement(y || "div")), g);
      }
      function Y(g, y) {
        var U =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
          g +
          '" height="' +
          y +
          '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(U);
      }
      return (
        (function () {
          var g = e.navigator.userAgent,
            y = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            U = g.match(y),
            ee = g.indexOf("Android ") > -1 && g.indexOf("Chrome") === -1;
          if (!ee && (!U || U[2] > 7)) return;
          var re = t.createElement("style");
          t.head.appendChild(re), e.addEventListener("resize", Z, !0);
          function Z() {
            var ne = e.innerHeight,
              be = e.innerWidth,
              fe =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                ne +
                "px}.w-lightbox-view {width:" +
                be +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * ne +
                "px}.w-lightbox-image {max-width:" +
                be +
                "px;max-height:" +
                ne +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * ne +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * ne +
                "px}.w-lightbox-item {width:" +
                0.1 * ne +
                "px;padding:" +
                0.02 * ne +
                "px " +
                0.01 * ne +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * ne +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * ne +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * ne +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * ne +
                "px}.w-lightbox-image {max-width:" +
                0.96 * be +
                "px;max-height:" +
                0.96 * ne +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * be +
                "px;max-height:" +
                0.84 * ne +
                "px}}";
            re.textContent = fe;
          }
          Z();
        })(),
        h
      );
    }
    Os.define(
      "lightbox",
      (Ey.exports = function (e) {
        var t = {},
          r = Os.env(),
          n = DW(window, document, e, r ? "#lightbox-mountpoint" : "body"),
          i = e(document),
          o,
          a,
          s = ".w-lightbox",
          c;
        t.ready = t.design = t.preview = d;
        function d() {
          (a = r && Os.env("design")),
            n.destroy(),
            (c = {}),
            (o = i.find(s)),
            o.webflowLightBox(),
            o.each(function () {
              sn(e(this), "open lightbox"),
                e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var p = this;
            e.each(p, function (h, T) {
              var A = e.data(T, s);
              A ||
                (A = e.data(T, s, {
                  el: e(T),
                  mode: "images",
                  images: [],
                  embed: "",
                })),
                A.el.off(s),
                _(A),
                a
                  ? A.el.on("setting" + s, _.bind(null, A))
                  : A.el.on("click" + s, f(A)).on("click" + s, function (S) {
                      S.preventDefault();
                    });
            });
          },
        });
        function _(p) {
          var h = p.el.children(".w-json").html(),
            T,
            A;
          if (!h) {
            p.items = [];
            return;
          }
          try {
            h = JSON.parse(h);
          } catch (S) {
            console.error("Malformed lightbox JSON configuration.", S);
          }
          m(h),
            h.items.forEach(function (S) {
              S.$el = p.el;
            }),
            (T = h.group),
            T
              ? ((A = c[T]),
                A || (A = c[T] = []),
                (p.items = A),
                h.items.length &&
                  ((p.index = A.length), A.push.apply(A, h.items)))
              : ((p.items = h.items), (p.index = 0));
        }
        function f(p) {
          return function () {
            p.items.length && n(p.items, p.index || 0);
          };
        }
        function m(p) {
          p.images &&
            (p.images.forEach(function (h) {
              h.type = "image";
            }),
            (p.items = p.images)),
            p.embed && ((p.embed.type = "video"), (p.items = [p.embed])),
            p.groupId && (p.group = p.groupId);
        }
        return t;
      })
    );
  });
  var yy = u((UK, my) => {
    var qt = Be(),
      MW = hn(),
      De = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    qt.define(
      "navbar",
      (my.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          c,
          d,
          _,
          f = qt.env(),
          m = '<div class="w-nav-overlay" data-wf-ignore />',
          p = ".w-nav",
          h = "w--open",
          T = "w--nav-dropdown-open",
          A = "w--nav-dropdown-toggle-open",
          S = "w--nav-dropdown-list-open",
          N = "w--nav-link-open",
          O = MW.triggers,
          M = e();
        (r.ready = r.design = r.preview = D),
          (r.destroy = function () {
            (M = e()), F(), c && c.length && c.each(oe);
          });
        function D() {
          (d = f && qt.env("design")),
            (_ = qt.env("editor")),
            (s = e(document.body)),
            (c = o.find(p)),
            c.length && (c.each(Q), F(), W());
        }
        function F() {
          qt.resize.off(z);
        }
        function W() {
          qt.resize.on(z);
        }
        function z() {
          c.each(y);
        }
        function Q(E, H) {
          var $ = e(H),
            j = e.data(H, p);
          j ||
            (j = e.data(H, p, {
              open: !1,
              el: $,
              config: {},
              selectedIdx: -1,
            })),
            (j.menu = $.find(".w-nav-menu")),
            (j.links = j.menu.find(".w-nav-link")),
            (j.dropdowns = j.menu.find(".w-dropdown")),
            (j.dropdownToggle = j.menu.find(".w-dropdown-toggle")),
            (j.dropdownList = j.menu.find(".w-dropdown-list")),
            (j.button = $.find(".w-nav-button")),
            (j.container = $.find(".w-container")),
            (j.overlayContainerId = "w-nav-overlay-" + E),
            (j.outside = Y(j));
          var ve = $.find(".w-nav-brand");
          ve &&
            ve.attr("href") === "/" &&
            ve.attr("aria-label") == null &&
            ve.attr("aria-label", "home"),
            j.button.attr("style", "-webkit-user-select: text;"),
            j.button.attr("aria-label") == null &&
              j.button.attr("aria-label", "menu"),
            j.button.attr("role", "button"),
            j.button.attr("tabindex", "0"),
            j.button.attr("aria-controls", j.overlayContainerId),
            j.button.attr("aria-haspopup", "menu"),
            j.button.attr("aria-expanded", "false"),
            j.el.off(p),
            j.button.off(p),
            j.menu.off(p),
            v(j),
            d
              ? (B(j), j.el.on("setting" + p, P(j)))
              : (L(j),
                j.button.on("click" + p, X(j)),
                j.menu.on("click" + p, "a", V(j)),
                j.button.on("keydown" + p, C(j)),
                j.el.on("keydown" + p, G(j))),
            y(E, H);
        }
        function oe(E, H) {
          var $ = e.data(H, p);
          $ && (B($), e.removeData(H, p));
        }
        function B(E) {
          E.overlay && (fe(E, !0), E.overlay.remove(), (E.overlay = null));
        }
        function L(E) {
          E.overlay ||
            ((E.overlay = e(m).appendTo(E.el)),
            E.overlay.attr("id", E.overlayContainerId),
            (E.parent = E.menu.parent()),
            fe(E, !0));
        }
        function v(E) {
          var H = {},
            $ = E.config || {},
            j = (H.animation = E.el.attr("data-animation") || "default");
          (H.animOver = /^over/.test(j)),
            (H.animDirect = /left$/.test(j) ? -1 : 1),
            $.animation !== j && E.open && t.defer(te, E),
            (H.easing = E.el.attr("data-easing") || "ease"),
            (H.easing2 = E.el.attr("data-easing2") || "ease");
          var ve = E.el.attr("data-duration");
          (H.duration = ve != null ? Number(ve) : 400),
            (H.docHeight = E.el.attr("data-doc-height")),
            (E.config = H);
        }
        function P(E) {
          return function (H, $) {
            $ = $ || {};
            var j = i.width();
            v(E),
              $.open === !0 && ne(E, !0),
              $.open === !1 && fe(E, !0),
              E.open &&
                t.defer(function () {
                  j !== i.width() && te(E);
                });
          };
        }
        function C(E) {
          return function (H) {
            switch (H.keyCode) {
              case De.SPACE:
              case De.ENTER:
                return X(E)(), H.preventDefault(), H.stopPropagation();
              case De.ESCAPE:
                return fe(E), H.preventDefault(), H.stopPropagation();
              case De.ARROW_RIGHT:
              case De.ARROW_DOWN:
              case De.HOME:
              case De.END:
                return E.open
                  ? (H.keyCode === De.END
                      ? (E.selectedIdx = E.links.length - 1)
                      : (E.selectedIdx = 0),
                    K(E),
                    H.preventDefault(),
                    H.stopPropagation())
                  : (H.preventDefault(), H.stopPropagation());
            }
          };
        }
        function G(E) {
          return function (H) {
            if (E.open)
              switch (
                ((E.selectedIdx = E.links.index(document.activeElement)),
                H.keyCode)
              ) {
                case De.HOME:
                case De.END:
                  return (
                    H.keyCode === De.END
                      ? (E.selectedIdx = E.links.length - 1)
                      : (E.selectedIdx = 0),
                    K(E),
                    H.preventDefault(),
                    H.stopPropagation()
                  );
                case De.ESCAPE:
                  return (
                    fe(E),
                    E.button.focus(),
                    H.preventDefault(),
                    H.stopPropagation()
                  );
                case De.ARROW_LEFT:
                case De.ARROW_UP:
                  return (
                    (E.selectedIdx = Math.max(-1, E.selectedIdx - 1)),
                    K(E),
                    H.preventDefault(),
                    H.stopPropagation()
                  );
                case De.ARROW_RIGHT:
                case De.ARROW_DOWN:
                  return (
                    (E.selectedIdx = Math.min(
                      E.links.length - 1,
                      E.selectedIdx + 1
                    )),
                    K(E),
                    H.preventDefault(),
                    H.stopPropagation()
                  );
              }
          };
        }
        function K(E) {
          if (E.links[E.selectedIdx]) {
            var H = E.links[E.selectedIdx];
            H.focus(), V(H);
          }
        }
        function te(E) {
          E.open && (fe(E, !0), ne(E, !0));
        }
        function X(E) {
          return a(function () {
            E.open ? fe(E) : ne(E);
          });
        }
        function V(E) {
          return function (H) {
            var $ = e(this),
              j = $.attr("href");
            if (!qt.validClick(H.currentTarget)) {
              H.preventDefault();
              return;
            }
            j && j.indexOf("#") === 0 && E.open && fe(E);
          };
        }
        function Y(E) {
          return (
            E.outside && o.off("click" + p, E.outside),
            function (H) {
              var $ = e(H.target);
              (_ && $.closest(".w-editor-bem-EditorOverlay").length) || g(E, $);
            }
          );
        }
        var g = a(function (E, H) {
          if (E.open) {
            var $ = H.closest(".w-nav-menu");
            E.menu.is($) || fe(E);
          }
        });
        function y(E, H) {
          var $ = e.data(H, p),
            j = ($.collapsed = $.button.css("display") !== "none");
          if (($.open && !j && !d && fe($, !0), $.container.length)) {
            var ve = ee($);
            $.links.each(ve), $.dropdowns.each(ve);
          }
          $.open && be($);
        }
        var U = "max-width";
        function ee(E) {
          var H = E.container.css(U);
          return (
            H === "none" && (H = ""),
            function ($, j) {
              (j = e(j)), j.css(U, ""), j.css(U) === "none" && j.css(U, H);
            }
          );
        }
        function re(E, H) {
          H.setAttribute("data-nav-menu-open", "");
        }
        function Z(E, H) {
          H.removeAttribute("data-nav-menu-open");
        }
        function ne(E, H) {
          if (E.open) return;
          (E.open = !0),
            E.menu.each(re),
            E.links.addClass(N),
            E.dropdowns.addClass(T),
            E.dropdownToggle.addClass(A),
            E.dropdownList.addClass(S),
            E.button.addClass(h);
          var $ = E.config,
            j = $.animation;
          (j === "none" || !n.support.transform || $.duration <= 0) && (H = !0);
          var ve = be(E),
            Ye = E.menu.outerHeight(!0),
            Ve = E.menu.outerWidth(!0),
            l = E.el.height(),
            I = E.el[0];
          if (
            (y(0, I),
            O.intro(0, I),
            qt.redraw.up(),
            d || o.on("click" + p, E.outside),
            H)
          ) {
            b();
            return;
          }
          var w = "transform " + $.duration + "ms " + $.easing;
          if (
            (E.overlay &&
              ((M = E.menu.prev()), E.overlay.show().append(E.menu)),
            $.animOver)
          ) {
            n(E.menu)
              .add(w)
              .set({ x: $.animDirect * Ve, height: ve })
              .start({ x: 0 })
              .then(b),
              E.overlay && E.overlay.width(Ve);
            return;
          }
          var R = l + Ye;
          n(E.menu).add(w).set({ y: -R }).start({ y: 0 }).then(b);
          function b() {
            E.button.attr("aria-expanded", "true");
          }
        }
        function be(E) {
          var H = E.config,
            $ = H.docHeight ? o.height() : s.height();
          return (
            H.animOver
              ? E.menu.height($)
              : E.el.css("position") !== "fixed" && ($ -= E.el.outerHeight(!0)),
            E.overlay && E.overlay.height($),
            $
          );
        }
        function fe(E, H) {
          if (!E.open) return;
          (E.open = !1), E.button.removeClass(h);
          var $ = E.config;
          if (
            (($.animation === "none" ||
              !n.support.transform ||
              $.duration <= 0) &&
              (H = !0),
            O.outro(0, E.el[0]),
            o.off("click" + p, E.outside),
            H)
          ) {
            n(E.menu).stop(), I();
            return;
          }
          var j = "transform " + $.duration + "ms " + $.easing2,
            ve = E.menu.outerHeight(!0),
            Ye = E.menu.outerWidth(!0),
            Ve = E.el.height();
          if ($.animOver) {
            n(E.menu)
              .add(j)
              .start({ x: Ye * $.animDirect })
              .then(I);
            return;
          }
          var l = Ve + ve;
          n(E.menu).add(j).start({ y: -l }).then(I);
          function I() {
            E.menu.height(""),
              n(E.menu).set({ x: 0, y: 0 }),
              E.menu.each(Z),
              E.links.removeClass(N),
              E.dropdowns.removeClass(T),
              E.dropdownToggle.removeClass(A),
              E.dropdownList.removeClass(S),
              E.overlay &&
                E.overlay.children().length &&
                (M.length ? E.menu.insertAfter(M) : E.menu.prependTo(E.parent),
                E.overlay.attr("style", "").hide()),
              E.el.triggerHandler("w-close"),
              E.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var Ty = u((VK, Iy) => {
    var Lt = Be(),
      FW = hn();
    Lt.define(
      "tabs",
      (Iy.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = Lt.env,
          s = a.safari,
          c = a(),
          d = "data-w-tab",
          _ = "data-w-pane",
          f = ".w-tabs",
          m = "w--current",
          p = "w--tab-active",
          h = FW.triggers,
          T = !1;
        (t.ready = t.design = t.preview = A),
          (t.redraw = function () {
            (T = !0), A(), (T = !1);
          }),
          (t.destroy = function () {
            (i = n.find(f)), i.length && (i.each(O), S());
          });
        function A() {
          (o = c && Lt.env("design")),
            (i = n.find(f)),
            i.length &&
              (i.each(M), Lt.env("preview") && !T && i.each(O), S(), N());
        }
        function S() {
          Lt.redraw.off(t.redraw);
        }
        function N() {
          Lt.redraw.on(t.redraw);
        }
        function O(B, L) {
          var v = e.data(L, f);
          v &&
            (v.links && v.links.each(h.reset),
            v.panes && v.panes.each(h.reset));
        }
        function M(B, L) {
          var v = f.substr(1) + "-" + B,
            P = e(L),
            C = e.data(L, f);
          if (
            (C || (C = e.data(L, f, { el: P, config: {} })),
            (C.current = null),
            (C.tabIdentifier = v + "-" + d),
            (C.paneIdentifier = v + "-" + _),
            (C.menu = P.children(".w-tab-menu")),
            (C.links = C.menu.children(".w-tab-link")),
            (C.content = P.children(".w-tab-content")),
            (C.panes = C.content.children(".w-tab-pane")),
            C.el.off(f),
            C.links.off(f),
            C.menu.attr("role", "tablist"),
            C.links.attr("tabindex", "-1"),
            D(C),
            !o)
          ) {
            C.links.on("click" + f, W(C)), C.links.on("keydown" + f, z(C));
            var G = C.links.filter("." + m),
              K = G.attr(d);
            K && Q(C, { tab: K, immediate: !0 });
          }
        }
        function D(B) {
          var L = {};
          L.easing = B.el.attr("data-easing") || "ease";
          var v = parseInt(B.el.attr("data-duration-in"), 10);
          v = L.intro = v === v ? v : 0;
          var P = parseInt(B.el.attr("data-duration-out"), 10);
          (P = L.outro = P === P ? P : 0),
            (L.immediate = !v && !P),
            (B.config = L);
        }
        function F(B) {
          var L = B.current;
          return Array.prototype.findIndex.call(
            B.links,
            (v) => v.getAttribute(d) === L,
            null
          );
        }
        function W(B) {
          return function (L) {
            L.preventDefault();
            var v = L.currentTarget.getAttribute(d);
            v && Q(B, { tab: v });
          };
        }
        function z(B) {
          return function (L) {
            var v = F(B),
              P = L.key,
              C = {
                ArrowLeft: v - 1,
                ArrowUp: v - 1,
                ArrowRight: v + 1,
                ArrowDown: v + 1,
                End: B.links.length - 1,
                Home: 0,
              };
            if (P in C) {
              L.preventDefault();
              var G = C[P];
              G === -1 && (G = B.links.length - 1),
                G === B.links.length && (G = 0);
              var K = B.links[G],
                te = K.getAttribute(d);
              te && Q(B, { tab: te });
            }
          };
        }
        function Q(B, L) {
          L = L || {};
          var v = B.config,
            P = v.easing,
            C = L.tab;
          if (C !== B.current) {
            B.current = C;
            var G;
            B.links.each(function (y, U) {
              var ee = e(U);
              if (L.immediate || v.immediate) {
                var re = B.panes[y];
                U.id || (U.id = B.tabIdentifier + "-" + y),
                  re.id || (re.id = B.paneIdentifier + "-" + y),
                  (U.href = "#" + re.id),
                  U.setAttribute("role", "tab"),
                  U.setAttribute("aria-controls", re.id),
                  U.setAttribute("aria-selected", "false"),
                  re.setAttribute("role", "tabpanel"),
                  re.setAttribute("aria-labelledby", U.id);
              }
              U.getAttribute(d) === C
                ? ((G = U),
                  ee
                    .addClass(m)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(h.intro))
                : ee.hasClass(m) &&
                  ee
                    .removeClass(m)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(h.outro);
            });
            var K = [],
              te = [];
            B.panes.each(function (y, U) {
              var ee = e(U);
              U.getAttribute(d) === C
                ? K.push(U)
                : ee.hasClass(p) && te.push(U);
            });
            var X = e(K),
              V = e(te);
            if (L.immediate || v.immediate) {
              X.addClass(p).each(h.intro),
                V.removeClass(p),
                T || Lt.redraw.up();
              return;
            } else {
              var Y = window.scrollX,
                g = window.scrollY;
              G.focus(), window.scrollTo(Y, g);
            }
            V.length && v.outro
              ? (V.each(h.outro),
                r(V)
                  .add("opacity " + v.outro + "ms " + P, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => oe(v, V, X)))
              : oe(v, V, X);
          }
        }
        function oe(B, L, v) {
          if (
            (L.removeClass(p).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            v.addClass(p).each(h.intro),
            Lt.redraw.up(),
            !B.intro)
          )
            return r(v).set({ opacity: 1 });
          r(v)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + B.intro + "ms " + B.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Xs();
  Vs();
  Bs();
  js();
  hn();
  ay();
  uy();
  ly();
  dy();
  hy();
  _y();
  yy();
  Ty();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".fade-in-on-scroll",
        originalId:
          "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".fade-in-on-scroll",
          originalId:
            "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1659003967481,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64f1cebc70a9b0815791ffb5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64f1cebc70a9b0815791ffb5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675625338673,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64f1cebc70a9b0815791ffb5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64f1cebc70a9b0815791ffb5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675625338674,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".featured-logo-wrapper",
        originalId:
          "64f1cebc70a9b0815791ffb5|54cfcadb-e8d1-3fdf-1592-7c88d740b00e",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".featured-logo-wrapper",
          originalId:
            "64f1cebc70a9b0815791ffb5|54cfcadb-e8d1-3fdf-1592-7c88d740b00e",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675681124152,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".title-container",
        originalId:
          "64f1cebc70a9b0815791ffb5|1c29725b-cf9e-a49d-7d7c-ccc70a12802d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".title-container",
          originalId:
            "64f1cebc70a9b0815791ffb5|1c29725b-cf9e-a49d-7d7c-ccc70a12802d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675681132576,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".paragraph-holder",
        originalId:
          "64f1cebc70a9b0815791ffb5|3bb9b8e4-b80e-0d2a-22f1-52ccfe3b118d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".paragraph-holder",
          originalId:
            "64f1cebc70a9b0815791ffb5|3bb9b8e4-b80e-0d2a-22f1-52ccfe3b118d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675681138517,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".early-access-tag-holder",
        originalId:
          "64f1cebc70a9b0815791ffb5|ede77518-7561-2248-c811-452853b87491",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".early-access-tag-holder",
          originalId:
            "64f1cebc70a9b0815791ffb5|ede77518-7561-2248-c811-452853b87491",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675681172353,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-21",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".early-access-title-holder",
        originalId:
          "64f1cebc70a9b0815791ffb5|d9bdf272-db6d-e0cc-f5ce-12a3addc546c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".early-access-title-holder",
          originalId:
            "64f1cebc70a9b0815791ffb5|d9bdf272-db6d-e0cc-f5ce-12a3addc546c",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675681177413,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".early-access-paraghaph-holder",
        originalId:
          "64f1cebc70a9b0815791ffb5|4c9c4307-106c-be6d-738d-d09730864a25",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".early-access-paraghaph-holder",
          originalId:
            "64f1cebc70a9b0815791ffb5|4c9c4307-106c-be6d-738d-d09730864a25",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675681183879,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-25",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".early-access-button-holder",
        originalId:
          "64f1cebc70a9b0815791ffb5|2fd1adc7-a016-60a8-e041-af5290c334ea",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".early-access-button-holder",
          originalId:
            "64f1cebc70a9b0815791ffb5|2fd1adc7-a016-60a8-e041-af5290c334ea",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675681189281,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-41",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".power-feature-heading",
        originalId:
          "64f1cebc70a9b0815791ffb5|93d70ad6-7625-200b-5dfd-bd850990f3fd",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".power-feature-heading",
          originalId:
            "64f1cebc70a9b0815791ffb5|93d70ad6-7625-200b-5dfd-bd850990f3fd",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675682408849,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-43",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".power-feature-paragraph",
        originalId:
          "64f1cebc70a9b0815791ffb5|44c6d9db-29c3-2396-72c1-32492179481b",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".power-feature-paragraph",
          originalId:
            "64f1cebc70a9b0815791ffb5|44c6d9db-29c3-2396-72c1-32492179481b",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 7,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675682414336,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-47",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".checked-list-holder",
        originalId:
          "64f1cebc70a9b0815791ffb5|4b914be7-8f9c-d8a1-d12c-9672f1ebf313",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".checked-list-holder",
          originalId:
            "64f1cebc70a9b0815791ffb5|4b914be7-8f9c-d8a1-d12c-9672f1ebf313",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675693928036,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".pricing-footer-holder",
        originalId:
          "64f1cebc70a9b0815791ffb5|4fbcff52-53ec-c681-6c72-16023f59cb28",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".pricing-footer-holder",
          originalId:
            "64f1cebc70a9b0815791ffb5|4fbcff52-53ec-c681-6c72-16023f59cb28",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675693935174,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-51",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".pricing-list-holder",
        originalId:
          "64f1cebc70a9b0815791ffb5|be005dbd-a7e9-0a25-7511-6cc26b3985cb",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".pricing-list-holder",
          originalId:
            "64f1cebc70a9b0815791ffb5|be005dbd-a7e9-0a25-7511-6cc26b3985cb",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675693940977,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-53",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".pricing-header",
        originalId:
          "64f1cebc70a9b0815791ffb5|e304e7a6-8278-db59-7b91-6f2a88c134da",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".pricing-header",
          originalId:
            "64f1cebc70a9b0815791ffb5|e304e7a6-8278-db59-7b91-6f2a88c134da",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675693947082,
    },
    "e-54": {
      id: "e-54",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-55",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".pricing-tag",
        originalId:
          "64f1cebc70a9b0815791ffb5|e24521b3-dd2e-36c7-294f-c709844f83f2",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".pricing-tag",
          originalId:
            "64f1cebc70a9b0815791ffb5|e24521b3-dd2e-36c7-294f-c709844f83f2",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675693951690,
    },
    "e-56": {
      id: "e-56",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-57",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".tab-link-tab-2",
        originalId:
          "64f1cebc70a9b0815791ffb5|a80c16af-d978-4e08-d416-9a3f44b8c510",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tab-link-tab-2",
          originalId:
            "64f1cebc70a9b0815791ffb5|a80c16af-d978-4e08-d416-9a3f44b8c510",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1693579162432,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".tab-link-tab-2",
        originalId:
          "64f1cebc70a9b0815791ffb5|a80c16af-d978-4e08-d416-9a3f44b8c510",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tab-link-tab-2",
          originalId:
            "64f1cebc70a9b0815791ffb5|a80c16af-d978-4e08-d416-9a3f44b8c510",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1693579162433,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".blog-item-wrapper",
        originalId:
          "64f1cebc70a9b0815791ffb5|cbcc153d-2d22-43d1-bb82-be34f44b4ab8",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".blog-item-wrapper",
          originalId:
            "64f1cebc70a9b0815791ffb5|cbcc153d-2d22-43d1-bb82-be34f44b4ab8",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 93,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-5-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 93,
          restingState: 50,
        },
      ],
      createdOn: 1693589911416,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-60" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64f1cebc70a9b0815791ffb5|a67a8ea1-6021-6e80-863b-f3ca6ce8c4da",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64f1cebc70a9b0815791ffb5|a67a8ea1-6021-6e80-863b-f3ca6ce8c4da",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1693590285154,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-62" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64f1cebc70a9b0815791ffb5|7d9dab5a-f623-61a4-8cd2-85fe37b1b703",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64f1cebc70a9b0815791ffb5|7d9dab5a-f623-61a4-8cd2-85fe37b1b703",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1693590297953,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-64" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64f1cebc70a9b0815791ffb5|1547d440-29ae-b566-b45b-f1d72811a97d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64f1cebc70a9b0815791ffb5|1547d440-29ae-b566-b45b-f1d72811a97d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1693590307234,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".tabs-section-holder",
        originalId:
          "64f1cebc70a9b0815791ffb5|d3e0ded1-2266-016b-ab4b-2cbcd640f92f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tabs-section-holder",
          originalId:
            "64f1cebc70a9b0815791ffb5|d3e0ded1-2266-016b-ab4b-2cbcd640f92f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1693590325720,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-68" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64f1cebc70a9b0815791ffb5|7d47df40-22c6-8ee6-a1ed-466ae262d1d6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64f1cebc70a9b0815791ffb5|7d47df40-22c6-8ee6-a1ed-466ae262d1d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1693590341665,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-70" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64f1cebc70a9b0815791ffb5|45ed55e4-4d98-8875-25b2-7e9b43e3fc70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64f1cebc70a9b0815791ffb5|45ed55e4-4d98-8875-25b2-7e9b43e3fc70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1693590351048,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".featured-card-title",
        originalId:
          "64f1cebc70a9b0815791ffb5|eb546173-c08e-1c2f-25f5-073e051bd22e",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".featured-card-title",
          originalId:
            "64f1cebc70a9b0815791ffb5|eb546173-c08e-1c2f-25f5-073e051bd22e",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1693590363259,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".featured-paragraph",
        originalId:
          "64f1cebc70a9b0815791ffb5|605c6169-2172-014b-9235-fb8bd580b3be",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".featured-paragraph",
          originalId:
            "64f1cebc70a9b0815791ffb5|605c6169-2172-014b-9235-fb8bd580b3be",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1693590367319,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SHRINK_EFFECT",
        instant: false,
        config: { actionListId: "shrinkIn", autoStopEventId: "e-76" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64f1cebc70a9b0815791ffb5|c44d7c5f-c031-4b8b-9e75-766dff527841",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64f1cebc70a9b0815791ffb5|c44d7c5f-c031-4b8b-9e75-766dff527841",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: null,
        effectIn: true,
      },
      createdOn: 1693590376373,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".fast-feature",
        originalId:
          "64f1cebc70a9b0815791ffb5|b6c95c80-b3d3-e1aa-9578-9f9b3ef6c674",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".fast-feature",
          originalId:
            "64f1cebc70a9b0815791ffb5|b6c95c80-b3d3-e1aa-9578-9f9b3ef6c674",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1693590397219,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".blog-item",
        originalId:
          "64f1cebc70a9b0815791ffb5|51a48151-ef98-08d8-effb-371191d90fe5",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".blog-item",
          originalId:
            "64f1cebc70a9b0815791ffb5|51a48151-ef98-08d8-effb-371191d90fe5",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1693590408769,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64f1cebc70a9b0815791ffb5|a0cda4f0-7ea0-e44e-785b-03accf4ac225",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64f1cebc70a9b0815791ffb5|a0cda4f0-7ea0-e44e-785b-03accf4ac225",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1693590427414,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64f1fc072a35f4183ad444f8",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64f1fc072a35f4183ad444f8",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1693591889329,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64f1fc072a35f4183ad444f8|cd475b82-0b39-2f53-f59c-59b5a2311bdb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64f1fc072a35f4183ad444f8|cd475b82-0b39-2f53-f59c-59b5a2311bdb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1693591911851,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "👁 Fade In On Scroll",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1659003970898,
    },
    "a-2": {
      id: "a-2",
      title: "⏰Animate On Load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n-35",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".navbar",
                  selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-89",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".block-images",
                  selectorGuids: ["c5c7e52d-a723-08dc-a255-1e954c42afc6"],
                },
                xValue: 1.3,
                yValue: 1.3,
                locked: true,
              },
            },
            {
              id: "a-2-n-79",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-on-load-01",
                  selectorGuids: ["bba863ed-2f63-1fb9-134b-13c27a03110a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-78",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-on-load-01",
                  selectorGuids: ["bba863ed-2f63-1fb9-134b-13c27a03110a"],
                },
                xValue: 40,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-2-n-77",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-on-load-01",
                  selectorGuids: ["bba863ed-2f63-1fb9-134b-13c27a03110a"],
                },
                yValue: 40,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-80",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-on-load-03",
                  selectorGuids: ["449b28c3-cfbc-996d-f719-c01a3bfb420c"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-82",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-on-load-03",
                  selectorGuids: ["449b28c3-cfbc-996d-f719-c01a3bfb420c"],
                },
                yValue: 40,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-81",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-on-load-03",
                  selectorGuids: ["449b28c3-cfbc-996d-f719-c01a3bfb420c"],
                },
                xValue: 40,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-2-n-83",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-on-load-04",
                  selectorGuids: ["94f49f40-4b08-0d55-24d1-428a5bdf6439"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-85",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-on-load-04",
                  selectorGuids: ["94f49f40-4b08-0d55-24d1-428a5bdf6439"],
                },
                xValue: 40,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-2-n-84",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-on-load-04",
                  selectorGuids: ["94f49f40-4b08-0d55-24d1-428a5bdf6439"],
                },
                yValue: 40,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-86",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-on-load-02",
                  selectorGuids: ["439e7d99-687b-22a8-d70b-8b7499d477c1"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-88",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-on-load-02",
                  selectorGuids: ["439e7d99-687b-22a8-d70b-8b7499d477c1"],
                },
                xValue: 40,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-2-n-87",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-on-load-02",
                  selectorGuids: ["439e7d99-687b-22a8-d70b-8b7499d477c1"],
                },
                yValue: 40,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-90",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-section-app-holder",
                  selectorGuids: ["7dc6c806-6af4-2ebf-9270-7cbfefd17b90"],
                },
                xValue: 50,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-91",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-section-app-holder",
                  selectorGuids: ["7dc6c806-6af4-2ebf-9270-7cbfefd17b90"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-92",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".animate-on-load-01",
                  selectorGuids: ["bba863ed-2f63-1fb9-134b-13c27a03110a"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-93",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".animate-on-load-01",
                  selectorGuids: ["bba863ed-2f63-1fb9-134b-13c27a03110a"],
                },
                xValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-2-n-94",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".animate-on-load-01",
                  selectorGuids: ["bba863ed-2f63-1fb9-134b-13c27a03110a"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-96",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 100,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".animate-on-load-02",
                  selectorGuids: ["439e7d99-687b-22a8-d70b-8b7499d477c1"],
                },
                xValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-2-n-95",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".animate-on-load-02",
                  selectorGuids: ["439e7d99-687b-22a8-d70b-8b7499d477c1"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-97",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".animate-on-load-02",
                  selectorGuids: ["439e7d99-687b-22a8-d70b-8b7499d477c1"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-99",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".animate-on-load-03",
                  selectorGuids: ["449b28c3-cfbc-996d-f719-c01a3bfb420c"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-98",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".animate-on-load-03",
                  selectorGuids: ["449b28c3-cfbc-996d-f719-c01a3bfb420c"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-100",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 200,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".animate-on-load-03",
                  selectorGuids: ["449b28c3-cfbc-996d-f719-c01a3bfb420c"],
                },
                xValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-2-n-106",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 200,
                easing: "outExpo",
                duration: 1200,
                target: {
                  selector: ".block-images",
                  selectorGuids: ["c5c7e52d-a723-08dc-a255-1e954c42afc6"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-2-n-102",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 300,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".animate-on-load-04",
                  selectorGuids: ["94f49f40-4b08-0d55-24d1-428a5bdf6439"],
                },
                xValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-2-n-101",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".animate-on-load-04",
                  selectorGuids: ["94f49f40-4b08-0d55-24d1-428a5bdf6439"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-103",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".animate-on-load-04",
                  selectorGuids: ["94f49f40-4b08-0d55-24d1-428a5bdf6439"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-76",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "",
                duration: 500,
                target: {
                  selector: ".navbar",
                  selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-104",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".hero-section-app-holder",
                  selectorGuids: ["7dc6c806-6af4-2ebf-9270-7cbfefd17b90"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-105",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".hero-section-app-holder",
                  selectorGuids: ["7dc6c806-6af4-2ebf-9270-7cbfefd17b90"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1675625341467,
    },
    "a-7": {
      id: "a-7",
      title: "Lights Moving",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-light-holder",
                  selectorGuids: ["eba40408-9eb1-d12f-82b1-135855dbda4a"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-light-holder",
                  selectorGuids: ["eba40408-9eb1-d12f-82b1-135855dbda4a"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".hero-light-holder",
                  selectorGuids: ["eba40408-9eb1-d12f-82b1-135855dbda4a"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 2000,
                target: {
                  selector: ".hero-light-holder",
                  selectorGuids: ["eba40408-9eb1-d12f-82b1-135855dbda4a"],
                },
                yValue: -200,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1500,
                easing: "",
                duration: 200,
                target: {
                  selector: ".hero-light-holder",
                  selectorGuids: ["eba40408-9eb1-d12f-82b1-135855dbda4a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2000,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero-light-holder",
                  selectorGuids: ["eba40408-9eb1-d12f-82b1-135855dbda4a"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1693591094004,
    },
    "a-3": {
      id: "a-3",
      title: "Tab -> On View",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-paragraph",
                  selectorGuids: ["3fd7594e-829e-b040-f64a-3494a615f7bc"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-paragraph",
                  selectorGuids: ["3fd7594e-829e-b040-f64a-3494a615f7bc"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1693579164561,
    },
    "a-4": {
      id: "a-4",
      title: "Tab -> Out Of View",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-paragraph",
                  selectorGuids: ["3fd7594e-829e-b040-f64a-3494a615f7bc"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1693579164561,
    },
    "a-5": {
      id: "a-5",
      title: "Blog Animation",
      continuousParameterGroups: [
        {
          id: "a-5-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-5-n",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64f1cebc70a9b0815791ffb5|cbcc153d-2d22-43d1-bb82-be34f44b4ab8",
                    },
                    yValue: -15,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-5-n-5",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".blog-thumbanil",
                      selectorGuids: ["3f2ac929-4b91-3f25-4688-866832caf4b1"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-5-n-2",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64f1cebc70a9b0815791ffb5|cbcc153d-2d22-43d1-bb82-be34f44b4ab8",
                    },
                    yValue: 15,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-5-n-6",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".blog-thumbanil",
                      selectorGuids: ["3f2ac929-4b91-3f25-4688-866832caf4b1"],
                    },
                    xValue: 1.2,
                    yValue: 1.2,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-5-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-5-n-3",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64f1cebc70a9b0815791ffb5|cbcc153d-2d22-43d1-bb82-be34f44b4ab8",
                    },
                    xValue: 15,
                    xUnit: "deg",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-5-n-4",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64f1cebc70a9b0815791ffb5|cbcc153d-2d22-43d1-bb82-be34f44b4ab8",
                    },
                    xValue: -15,
                    xUnit: "deg",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1693589912999,
    },
    "a-6": {
      id: "a-6",
      title: "CTA Animate On View",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-heading",
                  selectorGuids: ["9a919002-c25a-4e97-d42a-25a3065ae388"],
                },
                yValue: 35,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".block-images",
                  selectorGuids: ["c5c7e52d-a723-08dc-a255-1e954c42afc6"],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
            {
              id: "a-6-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-heading",
                  selectorGuids: ["9a919002-c25a-4e97-d42a-25a3065ae388"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-6-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-paragraph-holder",
                  selectorGuids: ["6209a846-88f5-556e-6b47-beee6e76408f"],
                },
                yValue: 35,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-paragraph-holder",
                  selectorGuids: ["6209a846-88f5-556e-6b47-beee6e76408f"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-6-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".form-block",
                  selectorGuids: ["3d92b1b6-d4d0-dea6-a551-d13f72ec67e0"],
                },
                yValue: 35,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".form-block",
                  selectorGuids: ["3d92b1b6-d4d0-dea6-a551-d13f72ec67e0"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-6-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-app-holder",
                  selectorGuids: ["a24f2376-9b0b-88c1-3895-ea62efe4a1f4"],
                },
                xValue: 80,
                yValue: null,
                xUnit: "%",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-app-holder",
                  selectorGuids: ["a24f2376-9b0b-88c1-3895-ea62efe4a1f4"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-heading",
                  selectorGuids: ["9a919002-c25a-4e97-d42a-25a3065ae388"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-heading",
                  selectorGuids: ["9a919002-c25a-4e97-d42a-25a3065ae388"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-6-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-paragraph-holder",
                  selectorGuids: ["6209a846-88f5-556e-6b47-beee6e76408f"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-paragraph-holder",
                  selectorGuids: ["6209a846-88f5-556e-6b47-beee6e76408f"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-6-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".form-block",
                  selectorGuids: ["3d92b1b6-d4d0-dea6-a551-d13f72ec67e0"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-6-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".form-block",
                  selectorGuids: ["3d92b1b6-d4d0-dea6-a551-d13f72ec67e0"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-11",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 200,
                easing: "outExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".block-images",
                  selectorGuids: ["c5c7e52d-a723-08dc-a255-1e954c42afc6"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-6-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "outExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-app-holder",
                  selectorGuids: ["a24f2376-9b0b-88c1-3895-ea62efe4a1f4"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-6-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "outExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-app-holder",
                  selectorGuids: ["a24f2376-9b0b-88c1-3895-ea62efe4a1f4"],
                },
                xValue: 0,
                yValue: null,
                xUnit: "%",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1693590429023,
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    shrinkIn: {
      id: "shrinkIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1.25,
                yValue: 1.25,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
