/****************************************************************************
 Cocos2d-html5 show case : Moon Warriors

 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 @Authors:
 Programmer: Shengxiang Chen (陈升想), Dingping Lv (吕定平), Ricardo Quesada
 Effects animation: Hao Wu (吴昊)
 Quality Assurance: Sean Lin (林顺)
 ****************************************************************************/

cc.TAG_LAYER = 1;

var SysMenu = cc.Layer.extend({
    _ship:null,

    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        winSize = cc.director.getWinSize();

        //var sp = new cc.Sprite(res.loading_png);
        //sp.anchorX = 0;
        //sp.anchorY = 0;
        //sp.scale = MW.SCALE;
        //this.addChild(sp, 0, 1);

        console.log("width:"+winSize.width+"------height:"+winSize.height);

        var layer = new cc.LayerColor(cc.color(255,86,115));
        this.addChild(layer,1,cc.TAG_LAYER);


        var newGameNormal = new cc.Sprite(res.start_buttom_0);
        newGameNormal.anchorX = 0.5;
        newGameNormal.anchorY = 0.5;
        newGameNormal.scale = 0.7;
        //newGameNormal.x = winSize.width/2;
        var newGamePress = new cc.Sprite(res.start_buttom_1);
        newGamePress.anchorX = 0.5;
        newGamePress.anchorY = 0.5;
        newGamePress.scale = 0.7;
        //newGamePress.x = winSize.width/2;

        var newGameMenu = new cc.MenuItemSprite(newGameNormal,newGamePress,function(){
            console.log("newGameMenu-------->");
            this.onNewGame();
        },this);

        var menu = new cc.Menu(newGameMenu);
        //menu.alignItemsVerticallyWithPadding(15);
        this.addChild(menu,1,2);
        //+ newGamePress.getBoundingBox().width/2
        menu.x = winSize.width / 2 +60;
        menu.y = winSize.height / 2 - 140;



        //var logo = new cc.Sprite(res.banner_0);
        ////logo.setTextureRect(cc.rect(0, 0, 100, 100));
        //
        //logo.attr({
        //    anchorX: 0,
        //    anchorY: 0,
        //    x: MW.LOGOX,
        //    y: MW.LOGOY,
        //    scale: 0.7
        //});
        //
        //
        //
        ////scale: MW.SCALE
        //
        ////logo.y = 560;
        //
        ////logo.y= winSize.height - logo.getBoundingBox().height-20;
        ////
        //console.log("logo height:"+logo.getBoundingBox().height);
        //
        //this.addChild(logo,10,"logo");
        //
        //
        //
        ////var banner01 = new cc.Sprite(res.banner_1);
        ////banner01.x = winSize.width/2;
        ////banner01.y = winSize.height/2;
        ////banner01.scale = 0.8;
        ////this.addChild(banner01,9,"banner01");
        //
        //var label = new cc.LabelTTF("width:"+winSize.width+"----------------------------height:"+winSize.height, "Arial", 21);
        //label.setColor(cc.color(MW.FONTCOLOR));
        //this.addChild(label, 11);
        //label.x = winSize.width  / 2;
        //label.y = 80;
        ////label.y = logo.y;
        //
        //
        //
        //
        ////var imageView = new ccui.ImageView();
        ////imageView.setScale9Enabled(true);
        ////imageView.loadTexture("res/banner_0.png");
        ////imageView.setContentSize(cc.size(100, 100));
        ////imageView.x = winSize.width / 2;
        ////imageView.y = winSize.height / 2 + imageView.height / 4;
        ////
        ////this.addChild(imageView,13,"nbanner_0");
        //
        ////var aDraw = new cc.DrawNode();
        ////
        ////aDraw.drawDot(
        ////    cc.p(MW.LOGOX,MW.LOGOY), // 圆点
        ////    10, // 半径
        ////    cc.color(0,0, 255, 125) // 圆的颜色
        ////);




        //cc.spriteFrameCache.addSpriteFrames(res.textureTransparentPack_plist);
        //
        //winSize = cc.director.getWinSize();
        //var sp = new cc.Sprite(res.loading_png);
        //sp.anchorX = 0;
        //sp.anchorY = 0;
        //sp.scale = MW.SCALE;
        //this.addChild(sp, 0, 1);
        //
        //var logo = new cc.Sprite(res.logo_png);
        //logo.attr({
        //    anchorX: 0,
        //    anchorY: 0,
        //    x: 0,
        //    y: MW.LOGOY,
        //    scale: MW.SCALE
        //});
        //this.addChild(logo, 10, 1);
        //
        //var logoBack = new cc.Sprite(res.logoBack_png);
        //logoBack.attr({
        //    anchorX: 0,
        //    anchorY: 0,
        //    x: 60,
        //    y: MW.LOGOY + logo.height,
        //    scale: MW.SCALE
        //});
        //this.addChild(logoBack, 9);
        //
        //var singalHeight = MW.menuHeight;
        //var singalWidth = MW.menuWidth;
        //var newGameNormal = new cc.Sprite(res.menu_png, cc.rect(0, 0, singalWidth, singalHeight));
        //var newGameSelected = new cc.Sprite(res.menu_png, cc.rect(0, singalHeight, singalWidth, singalHeight));
        //var newGameDisabled = new cc.Sprite(res.menu_png, cc.rect(0, singalHeight * 2, singalWidth, singalHeight));
        //
        //var gameSettingsNormal = new cc.Sprite(res.menu_png, cc.rect(singalWidth, 0, singalWidth, singalHeight));
        //var gameSettingsSelected = new cc.Sprite(res.menu_png, cc.rect(singalWidth, singalHeight, singalWidth, singalHeight));
        //var gameSettingsDisabled = new cc.Sprite(res.menu_png, cc.rect(singalWidth, singalHeight * 2, singalWidth, singalHeight));
        //
        //var aboutNormal = new cc.Sprite(res.menu_png, cc.rect(singalWidth * 2, 0, singalWidth, singalHeight));
        //var aboutSelected = new cc.Sprite(res.menu_png, cc.rect(singalWidth * 2, singalHeight, singalWidth, singalHeight));
        //var aboutDisabled = new cc.Sprite(res.menu_png, cc.rect(singalWidth * 2, singalHeight * 2, singalWidth, singalHeight));
        //var flare = new cc.Sprite(res.flare_jpg);
        //this.addChild(flare, 15, 10);
        //flare.visible = false;
        //var newGame = new cc.MenuItemSprite(newGameNormal, newGameSelected, newGameDisabled, function () {
        //    this.onButtonEffect();
        //    //this.onNewGame();
        //    flareEffect(flare, this, this.onNewGame);
        //}.bind(this));
        //var gameSettings = new cc.MenuItemSprite(gameSettingsNormal, gameSettingsSelected, gameSettingsDisabled, this.onSettings, this);
        //var about = new cc.MenuItemSprite(aboutNormal, aboutSelected, aboutDisabled, this.onAbout, this);
        //newGame.scale = MW.SCALE;
        //gameSettings.scale = MW.SCALE;
        //about.scale = MW.SCALE;
        //
        //var menu = new cc.Menu(newGame, gameSettings, about);
        //menu.alignItemsVerticallyWithPadding(15);
        //this.addChild(menu, 1, 2);
        //menu.x = winSize.width / 2;
        //menu.y = winSize.height / 2 - 140;
        //
        //var label = new cc.LabelTTF("Power by Cocos2d-JS", "Arial", 21);
        //label.setColor(cc.color(MW.FONTCOLOR));
        //this.addChild(label, 1);
        //label.x = winSize.width  / 2;
        //label.y = 80;
        //
        //this.schedule(this.update, 0.1);
        //
        //this._ship = new cc.Sprite("#ship03.png");
        //this.addChild(this._ship, 0, 4);
        //this._ship.x = Math.random() * winSize.width;
        //this._ship.y = 0;
        //this._ship.runAction(cc.moveBy(2, cc.p(Math.random() * winSize.width, this._ship.y + winSize.height + 100)));
        //
        //if (MW.SOUND) {
        //    cc.audioEngine.setMusicVolume(0.7);
        //    cc.audioEngine.playMusic(cc.sys.os == cc.sys.OS_WP8 || cc.sys.os == cc.sys.OS_WINRT ? res.mainMainMusic_wav : res.mainMainMusic_mp3, true);
        //}

        return true;
    },
    onNewGame:function (pSender) {
        //load resources
        cc.LoaderScene.preload(g_maingame, function () {
            cc.audioEngine.stopMusic();
            cc.audioEngine.stopAllEffects();
            var scene = new cc.Scene();
            scene.addChild(new GameLayer());
            scene.addChild(new GameControlMenu());
	        cc.director.runScene(new cc.TransitionFade(1.2, scene));
        }, this);
    },
    onSettings:function (pSender) {
        this.onButtonEffect();
        var scene = new cc.Scene();
        scene.addChild(new SettingsLayer());
	    cc.director.runScene(new cc.TransitionFade(1.2, scene));
    },
    onAbout:function (pSender) {
        this.onButtonEffect();
        var scene = new cc.Scene();
        scene.addChild(new AboutLayer());
	    cc.director.runScene(new cc.TransitionFade(1.2, scene));
    },
    update:function () {
        if (this._ship.y > 750) {
            this._ship.x = Math.random() * winSize.width;
	        this._ship.y = 10;
            this._ship.runAction(cc.moveBy(
                parseInt(5 * Math.random(), 10),
                cc.p(Math.random() * winSize.width, this._ship.y + 750)
            ));
        }
    },
    onButtonEffect:function(){
        if (MW.SOUND) {
            var s = cc.audioEngine.playEffect(cc.sys.os == cc.sys.OS_WP8 || cc.sys.os == cc.sys.OS_WINRT ? res.buttonEffet_wav : res.buttonEffet_mp3);
        }
    }
});

SysMenu.scene = function () {
    var scene = new cc.Scene();
    var layer = new SysMenu();
    scene.addChild(layer);
    return scene;
};
