//https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/utils/Draggable.min.js
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";function n(n,e,s){var r=n.type,p=n.setRatio,l=e._tween,_=e._target;n.type=2,n.m=s,n.setRatio=function(e){var t,o,i;if(1!==e||l._time!==l._duration&&0!==l._time)if(e||l._time!==l._duration&&0!==l._time||-1e-6===l._rawPrevTime)if(t=n.c*e+n.s,n.r?t=Math.round(t):t<1e-6&&-1e-6<t&&(t=0),r)if(1===r){for(o=n.xs0+t+n.xs1,i=1;i<n.l;i++)o+=n["xn"+i]+n["xs"+(i+1)];n.t[n.p]=s.call(l,o,_,l)}else-1===r?n.t[n.p]=s.call(l,n.xs0,_,l):p&&p.call(n,e);else n.t[n.p]=s.call(l,t+n.xs0,_,l);else 2!==r?n.t[n.p]=s.call(l,n.b,_,l):p.call(n,e);else if(2!==r)if(n.r&&-1!==r)if(t=Math.round(n.s+n.c),r){if(1===r){for(o=n.xs0+t+n.xs1,i=1;i<n.l;i++)o+=n["xn"+i]+n["xs"+(i+1)];n.t[n.p]=s.call(l,o,_,l)}}else n.t[n.p]=s.call(l,t+n.xs0,_,l);else n.t[n.p]=s.call(l,n.e,_,l);else p.call(n,e)}}function s(e,t){var o=t._firstPT,i=e.rotation&&-1!==t._overwriteProps.join("").indexOf("bezier");for(e.scale?e.scaleX=e.scaleY=e.scale:e.rotationZ&&(e.rotation=e.rotationZ);o;)"function"==typeof e[o.p]?n(o,t,e[o.p]):i&&"bezier"===o.n&&-1!==o.plugin._overwriteProps.join("").indexOf("rotation")&&(o.data.mod=e.rotation),o=o._next}var e=_gsScope._gsDefine.plugin({propName:"modifiers",version:"0.0.4",API:2,init:function(e,t,o){return this._tween=o,this._vars=t,!0},initAll:function(){var e,t,o=this._tween,i=this._vars,n=o._firstPT;if(n._modInitted)return!1;for(n._modInitted=1;n;)t=n._next,e=i[n.n],n.pg?"css"===n.t._propName?s(i,n.t):n.t!==this&&(e=i[n.t._propName],n.t._tween=o,n.t._mod("object"==typeof e?e:i)):"function"==typeof e&&(2===n.f&&n.t?(n.t._applyPT.m=e,n.t._tween=o):(this._add(n.t,n.p,n.s,n.c,e),t&&(t._prev=n._prev),n._prev?n._prev._next=t:o._firstPT===n&&(o._firstPT=t),n._next=n._prev=null,o._propLookup[n.n]=this)),n=t;return!1}}).prototype;e._add=function(e,t,o,i,n){this._addTween(e,t,o,o+i,t,n),this._overwriteProps.push(t)},e=_gsScope._gsDefine.globals.TweenLite.version.split("."),Number(e[0])<=1&&Number(e[1])<19&&_gsScope.console&&console.log("ModifiersPlugin requires GSAP 1.19.0 or later.")}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(){"use strict";function e(){return(_gsScope.GreenSockGlobals||_gsScope).ModifiersPlugin}"undefined"!=typeof module&&module.exports?(require("../TweenLite.js"),module.exports=e()):"function"==typeof define&&define.amd&&define(["TweenLite"],e)}();

$(document).ready(function () {
    var eyes = $(".eyes")

    $(document).mousemove(function(e){
        var x = (eyes.offset().left) + (eyes.width() / 2);
        var y = (eyes.offset().top) + (eyes.height() / 2);
        var rad = Math.atan2(event.pageX - x, event.pageY - y);
        var deg = (rad * (180 / Math.PI) * -1) + 180 + 45;

        eyes.css("transform", "rotate("+deg+"deg)");
    });

    var windowWidth = $(window).width();

    if(windowWidth < 767) {
        $('.skin-needs-items-wrap').jScrollPane();
    }

    //Shader
    var init = function init() {
        var content = document.querySelector(".content-canvas");
        var s = {
            w: innerWidth,
            h: innerHeight
        };
        var gl = {
            renderer: new THREE.WebGLRenderer({
                antialias: true
            }),
            camera: new THREE.PerspectiveCamera(75, s.w / s.h, 0.1, 100),
            scene: new THREE.Scene(),
            loader: new THREE.TextureLoader()
        };
        var time = 0;

        var addScene = function addScene() {
            gl.camera.position.set(0, 0, 1);
            gl.scene.add(gl.camera);
            gl.renderer.setSize(s.w, s.h);
            gl.renderer.setPixelRatio(devicePixelRatio);
            content.appendChild(gl.renderer.domElement);
            mesh();
        };

        var uniforms = {
            time: {
                type: "f",
                value: 0
            },
            resolution: {
                type: "v2",
                value: new THREE.Vector2(innerWidth, innerHeight)
            },
            mouse: {
                type: "v2",
                value: new THREE.Vector2(0, 0)
            },
            waveLength: {
                type: "f",
                value: 1.5
            },
            texture1: {
                value: gl.loader.load("img/information-canvas-bg.jpg")
            }
        };

        var getGeom = function getGeom() {
            return new THREE.PlaneGeometry(1, 1, 64, 64);
        };

        var getMaterial = function getMaterial() {
            return new THREE.ShaderMaterial({
                side: THREE.DoubleSide,
                uniforms: uniforms,
                vertexShader: document.querySelector("#vertex-shader").textContent,
                fragmentShader: document.querySelector("#fragment-shader").textContent
            });
        };

        var mesh = function mesh() {
            gl.geometry = getGeom();
            gl.material = getMaterial();
            gl.mesh = new THREE.Mesh(gl.geometry, gl.material);
            gl.scene.add(gl.mesh);
        };

        var update = function update() {
            time += 0.05;
            gl.material.uniforms.time.value = time;
            render();
            requestAnimationFrame(update);
        };

        var render = function render() {
            return gl.renderer.render(gl.scene, gl.camera);
        };

        var resize = function resize() {
            var w = innerWidth;
            var h = innerHeight;
            gl.camera.aspect = w / h;
            gl.renderer.setSize(w, h);
            var dist = gl.camera.position.z - gl.mesh.position.z;
            var height = 1;
            gl.camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));
            if (w / h > 1) gl.mesh.scale.x = gl.mesh.scale.y = 1.05 * w / h;
            gl.camera.updateProjectionMatrix();
        };

        addScene();
        update();
        resize();
        window.addEventListener("resize", resize);
    };

    if(windowWidth > 1025) {
        init(); // flask
    }

    var init2 = function init2() {
        var content = document.querySelector(".cnt-cnvs");
        var s = {
            w: innerWidth,
            h: innerHeight
        };

        var gl = {
            renderer: new THREE.WebGLRenderer({ antialias: true }),
            camera: new THREE.PerspectiveCamera(75, s.w / s.h, 0.1, 100),
            scene: new THREE.Scene(),
            loader: new THREE.TextureLoader()
        };

        var time = 0;

        var addScene = function addScene() {
            gl.camera.position.set(0, 0, 1);
            gl.scene.add(gl.camera);

            gl.renderer.setSize(s.w, s.h);
            gl.renderer.setPixelRatio(devicePixelRatio);
            content.appendChild(gl.renderer.domElement);

            mesh();
        };

        var uniforms = {
            time: { type: "f", value: 0 },
            resolution: {
                type: "v2",
                value: new THREE.Vector2(innerWidth, innerHeight)
            },
            mouse: { type: "v2", value: new THREE.Vector2(0, 0) },
            waveLength: { type: "f", value: 1.5 },
            texture1: {
                value: gl.loader.load("img/cnt-cnvs-1-bg.jpg")
            }
        };

        var getGeom = function getGeom() {
            return new THREE.PlaneGeometry(1, 1, 64, 64);
        };

        var getMaterial = function getMaterial() {
            return new THREE.ShaderMaterial({
                side: THREE.DoubleSide,
                uniforms: uniforms,
                vertexShader: document.querySelector("#vertex-shader").textContent,
                fragmentShader: document.querySelector("#fragment-shader").textContent
            });
        };

        var mesh = function mesh() {
            gl.geometry = getGeom();
            gl.material = getMaterial();

            gl.mesh = new THREE.Mesh(gl.geometry, gl.material);

            gl.scene.add(gl.mesh);
        };

        var update = function update() {
            time += 0.05;
            gl.material.uniforms.time.value = time;

            render();
            requestAnimationFrame(update);
        };

        var render = function render() {
            return gl.renderer.render(gl.scene, gl.camera);
        };

        var resize = function resize() {
            var w = innerWidth;
            var h = innerHeight;

            gl.camera.aspect = w / h;
            gl.renderer.setSize(w, h);

            var dist = gl.camera.position.z - gl.mesh.position.z;
            var height = 1;

            gl.camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));

            if (w / h > 1) gl.mesh.scale.x = gl.mesh.scale.y = 1.05 * w / h;

            gl.camera.updateProjectionMatrix();
        };

        addScene();
        update();
        resize();
        window.addEventListener("resize", resize);
    };

    if(windowWidth > 1025) {
        // init2();
    }

    var init3 = function init3() {
        var content = document.querySelector(".cnt-cnvs-main");
        var s = {
            w: innerWidth,
            h: innerHeight
        };

        var gl = {
            renderer: new THREE.WebGLRenderer({ antialias: true }),
            camera: new THREE.PerspectiveCamera(75, s.w / s.h, 0.1, 100),
            scene: new THREE.Scene(),
            loader: new THREE.TextureLoader()
        };

        var time = 0;

        var addScene = function addScene() {
            gl.camera.position.set(0, 0, 1);
            gl.scene.add(gl.camera);

            gl.renderer.setSize(s.w, s.h);
            gl.renderer.setPixelRatio(devicePixelRatio);
            content.appendChild(gl.renderer.domElement);

            mesh();
        };

        var uniforms = {
            time: { type: "f", value: 0 },
            resolution: {
                type: "v2",
                value: new THREE.Vector2(innerWidth, innerHeight)
            },
            mouse: { type: "v2", value: new THREE.Vector2(0, 0) },
            waveLength: { type: "f", value: 1.5 },
            texture1: {
                value: gl.loader.load("img/cnt-cnvs-1-bg.jpg")
            }
        };

        var getGeom = function getGeom() {
            return new THREE.PlaneGeometry(1, 1, 64, 64);
        };

        var getMaterial = function getMaterial() {
            return new THREE.ShaderMaterial({
                side: THREE.DoubleSide,
                uniforms: uniforms,
                vertexShader: document.querySelector("#vertex-shader").textContent,
                fragmentShader: document.querySelector("#fragment-shader").textContent
            });
        };

        var mesh = function mesh() {
            gl.geometry = getGeom();
            gl.material = getMaterial();

            gl.mesh = new THREE.Mesh(gl.geometry, gl.material);

            gl.scene.add(gl.mesh);
        };

        var update = function update() {
            time += 0.05;
            gl.material.uniforms.time.value = time;

            render();
            requestAnimationFrame(update);
        };

        var render = function render() {
            return gl.renderer.render(gl.scene, gl.camera);
        };

        var resize = function resize() {
            var w = innerWidth;
            var h = innerHeight;

            gl.camera.aspect = w / h;
            gl.renderer.setSize(w, h);

            var dist = gl.camera.position.z - gl.mesh.position.z;
            var height = 1;

            gl.camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));

            if (w / h > 1) gl.mesh.scale.x = gl.mesh.scale.y = 1.05 * w / h;

            gl.camera.updateProjectionMatrix();
        };

        addScene();
        update();
        resize();
        window.addEventListener("resize", resize);
    };

    if(windowWidth > 1025) {
        // init3();
    }

    function flask() {
        var select = function select(s) {
                return document.querySelector(s);
            },
            selectAll = function selectAll(s) {
                return document.querySelectorAll(s);
            },
            liquid = selectAll('.liquid'),
            label = select('.label'),
            dragger = select('.dragger'),
            dragTip = select('.dragTip'),
            minDragY = -380,
            liquidId = 0,
            step = Math.abs(minDragY / 100);

        TweenMax.set('svg', {
            visibility: 'visible'
        });
        TweenMax.set(dragTip, {
            transformOrigin: '20% 50%'
        });
        var tl = new TimelineMax();
        tl.staggerTo(liquid, 0.7, {
            x: '-=200',
            ease: Linear.easeNone,
            repeat: -1
        }, 0.9);
        tl.time(100);

        function onUpdate() {
            liquidId = Math.abs(Math.round(dragger._gsTransform.y / step / 10));

            if (liquidId > 3) {
                label.textContent = 'pH' + liquidId + '.0';
            }

            TweenMax.to(liquid, 1.3, {
                y: dragger._gsTransform.y * 1.12,
                ease: Elastic.easeOut.config(1, 0.4)
            });
        }

        TweenMax.to(dragger, 1.4, {
            y: minDragY / 2,
            onUpdate: onUpdate,
            ease: Expo.easeInOut
        });
    }

    var temp = 0;
    $(document).scroll(function () {
        var scrollTop = $(window).scrollTop() + $(window).height();
        var positionBottom = $("#flask").offset().top + $("#flask").height() / 1.2;

        if (scrollTop > positionBottom && temp == 0) {
            flask();
            temp = 1;
            flask();
            return temp;
        }
    });

    $(".video .video-wrap").click(function () {
        $(this).find(".video-poster").hide();
        $(this).find(".video-play").hide();
        var videoURL = $(this).find(".video-iframe").prop('src');
        videoURL += "&autoplay=1";
        $(this).find(".video-iframe").prop('src', videoURL);
    });
});
