cc.LoaderScene = cc.Scene.extend(
    {
        _interval: null,
        _length: 0,
        _count: 0,
        _label: null,
        _className: "LoaderScene",
        init: function () {
            var a = this, b = 200, c = a._bgLayer = cc.LayerColor.create(cc.color(32, 32, 32, 255));
            c.setPosition(cc.visibleRect.bottomLeft);
            a.addChild(c, 0);
            var d = 24, e = -b / 2 + 100;
            cc._loaderImage && (cc.loader.loadImg(cc._loaderImage, {isCrossOrigin: !1}, function (c, d) {
                b = d.height;
                a._initStage(d, cc.visibleRect.center)
            }), d = 14, e = -b / 2 - 10);
            d = a._label = cc.LabelTTF.create("加载中... 0%", "黑体", d);
            d.setPosition(cc.pAdd(cc.visibleRect.center,
                cc.p(0, e)));
            d.setColor(cc.color(180, 180, 180));
            c.addChild(this._label, 10);
            return!0
        },
        _initStage: function (a, b) {
    var c = this._texture2d = new cc.Texture2D;
    c.initWithElement(a);
    c.handleLoadedTexture();
    c = this._logo = cc.Sprite.create(c);
    c.setScale(cc.contentScaleFactor());
    c.x = b.x;
    c.y = b.y;
    this._bgLayer.addChild(c, 10)
}, onEnter: function () {
    cc.Node.prototype.onEnter.call(this);
    this.schedule(this._startLoading, 0.3)
}, onExit: function () {
    cc.Node.prototype.onExit.call(this);
    this._label.setString("加载中... 0%")
}, initWithResources: function (a, b) {
    "string" == typeof a && (a = [a]);
    this.resources = a || [];
    this.cb = b
}, _startLoading: function () {
    var a = this;
    a.unschedule(a._startLoading);
    var b = a.resources;
    a._length = b.length;
    a._count = 0;
    cc.loader.load(b, function (b, d) {
        a._count = d
    }, function () {
        a.cb && a.cb()
    });
    a.schedule(a._updatePercent)
}, _updatePercent: function () {
    var a = this._count, b = this._length, c;
    c = Math.min(100 * (a / b) | 0, 100);
    this._label.setString("加载中aaa... " + c + "%");
    a >= b && this.unschedule(this._updatePercent)
}});
cc.LoaderScene.preload = function (a, b) {
    var c = cc;
    c.loaderScene || (c.loaderScene = new cc.LoaderScene, c.loaderScene.init());
    c.loaderScene.initWithResources(a, b);
    cc.director.runScene(c.loaderScene);
    return c.loaderScene
};