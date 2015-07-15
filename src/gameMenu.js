cc.TAG_LAYER = 1;

var GameMenu = cc.Layer.extend({
    _ship:null,
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var layer = new cc.LayerColor(cc.color(255,86,115));
        this.addChild(layer,1,cc.TAG_LAYER);
        return true;
    }
});

GameMenu.scene = function () {
    var scene = new cc.Scene();
    var layer = new GameMenu();
    scene.addChild(layer);
    return scene;
};