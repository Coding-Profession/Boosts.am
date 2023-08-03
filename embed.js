window.onload = function() {
    var e = document.createElement("div");
    e.setAttribute("id", "sellix-container"), document.body.appendChild(e);
    var t = document.createElement("div");
    t.setAttribute("id", "sellix-buttons-pointers-fix"), t.innerHTML = "<style>[data-sellix-product] * {\n    pointer-events: none;\n}\n[data-sellix-group] * {\n    pointer-events: none;\n}</style>", document.getElementById("sellix-container").appendChild(t);
    var l = document.querySelectorAll("[data-sellix-product]"),
        n = document.querySelectorAll("[data-sellix-group]"),
        i = function(e, t, l) {
            var n = [];
            for (let i = 0; i < e.length; i++) {
                var r = e[i];
                if (r.hasAttribute(l)) {
                    var a = r.getAttribute(l); - 1 === n.indexOf(a) ? n.push(a) : n.splice(n.indexOf(a), 1)
                }
            }
            for (let o = 0; o < t.length; o++) {
                var r = t[o];
                if (r.hasAttribute(l)) {
                    var a = r.getAttribute(l); - 1 === n.indexOf(a) ? n.push(a) : n.splice(n.indexOf(a), 1)
                }
            }
            return n.length > 0 && n
        };
    setTimeout(function e(t) {
        var r = document.querySelector("[data-sellix-product]"),
            a = document.querySelector("[data-sellix-group]"),
            o = document.querySelectorAll("[data-sellix-product]"),
            s = document.querySelectorAll("[data-sellix-group]");
        if (i(o, l, "data-sellix-product") && (t = !1), i(s, n, "data-sellix-group") && (t = !1), (r || a) && !t) {
            for (var d = document.getElementById("sellix-css"), c = function(e, t) {
                    var l = e.target.getAttribute("data-sellix-" + t);
                    if (!l) return null;
                    for (var n = "?", i = e.target.attributes, r = 0; r < i.length; r++) {
                        let a = i[r];
                        a.nodeName.indexOf("data-sellix-css") > -1 && (n += "css=" + a.nodeValue + "&")
                    }
                    for (var r = 0; r < i.length; r++) {
                        let o = i[r];
                        o.nodeName.indexOf("data-sellix-referral") > -1 && (n += "rcid=" + o.nodeValue + "&")
                    }
                    for (var r = 0; r < i.length; r++) {
                        let s = i[r];
                        s.nodeName.indexOf("data-sellix-custom") > -1 && (n += s.nodeName.replace("data-sellix-custom-", "") + "=" + s.nodeValue + "&")
                    }
                    d && !(n.indexOf("css=") > -1) && (n += "css=" + d.href);
                    var c = "https://embed.sellix.io/" + t + "/" + l + n,
                        x = document.createElement("div");
                    x.setAttribute("id", "sellix-modal-" + l), x.setAttribute("style", "display:none; position:fixed; top: 0; left:0; width: 100%; height:100%; z-index:-1050"), x.innerHTML = '<div id="backdrop" class="sellix-backdrop"></div><style>.sellix-iframe {\n    width:100%;\n    height:100%;\n    border:none;\n}\n\n.sellix-iframe-content {\n    height: 100%;\n}\n\n.sellix-iframe-wrapper {\n    top:20px;\n    margin:auto;\n    width: 100%;\n    height:100%;\n    z-index: 1;\n}\n\n.sellix-iframe-loader-container {\n    z-index: 1;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.sellix-backdrop {\n    background: #00000075;\n    backdrop-filter: blur(3px);\n    width:100%;\n    height:100%;\n    position:absolute;\n}\n\n.sellix-fallback-button {\n    font-family: "Open Sans";\n    font-size: 14px;\n    font-weight: 600;\n    color: white;\n    text-decoration: none;\n}\n\n.sellix-fallback-button-container {\n    position: absolute;\n    z-index: 2;\n    display: none;\n    top: 50%;\n    height: 50px;\n    line-height: 40px;\n    max-height: 50px;\n    box-sizing: border-box;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #613bea;\n    padding: .375rem .75rem;\n    border-radius: 3px;\n}</style><div class="sellix-iframe-loader-container"><img src="https://cdn.sellix.io/static/embed/loader.png" alt="Loader" class="sellix-iframe-loader" style="width: 35px;" /></div><div class="sellix-fallback-button-container"><a class="sellix-fallback-button" href="' + c + '" target="_blank" >Go to product</a></div><div class="sellix-iframe-wrapper"><div class="sellix-iframe-content"><iframe scrolling="auto" src="' + c + '" class="sellix-iframe" id="sellix-iframe" onerror="(e) => console.log(e)"></div></div>', document.getElementById("sellix-container").appendChild(x);
                    var u = document.getElementById("sellix-modal-" + l);
                    u.style.display = "flex", u.style.zIndex = "99999";
                    var p = document.querySelector("#sellix-iframe");
                    p.addEventListener("load", function(e) {
                        document.querySelector(".sellix-iframe-loader").style.display = "none"
                    }), p.addEventListener("error", function(e) {
                        document.querySelector(".sellix-iframe-loader").style.display = "none", document.querySelector(".sellix-fallback-button-container").style.display = "flex"
                    }), window.addEventListener("message", function(e) {
                        "close-embed" === e.data && (u.style.display = "none", u.style.zIndex = "-1050", u.parentNode && u.parentNode.removeChild(u))
                    }, !1)
                }, x = function(e) {
                    c(e, "product")
                }, u = function(e) {
                    c(e, "group")
                }, p = function(e) {
                    let t = e.cloneNode(!0);
                    return e.replaceWith(t), t
                }, f = 0; f < o.length; f++) p(o[f]).addEventListener("click", x);
            for (var f = 0; f < s.length; f++) p(s[f]).addEventListener("click", u);
            l = document.querySelectorAll("[data-sellix-product]"), n = document.querySelectorAll("[data-sellix-group]"), t = !0
        }
        r || a ? setTimeout(e, 1e3, t) : setTimeout(e, 1e3, t = !1)
    }, 1e3, !1)
};