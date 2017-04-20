/**
 * 使用了单例模式
 * 单例可以节省不必要的内存开销，屏蔽对象创建的复杂性
 */

// 更多模块显示
var more = (function () {
    function init() {
        return {
            moreShow: function () {
                var btn = $('#more_product');
                btn.mouseenter(function () {
                    $("#more_product").css('display', 'none');
                    $("#nav_div").css('display', 'block');
                });
            }
        };
    }

    var instance = null;
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

more.getInstance().moreShow();

// 鼠标离开，更多模块收起
var moreNav = (function () {
    function init() {
        return {
            moreNavShow: function () {
                var btn = $('#nav_div');
                btn.mouseleave(function () {
                    $("#more_product").css('display', 'inline-block');
                    $("#nav_div").css('display', 'none');
                });
            }
        };
    }

    var instance = null;
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

moreNav.getInstance().moreNavShow();

//正文中的导航、新闻、音乐、购物、视频模块的js
var nav = {
    init: function (argument) {
        var nav = this;
        nav.render();
        nav.bind();
    },
    render: function () {
        var nav = this;
        nav.btn = $('#s_menus_1');
    },
    bind: function () {
        var nav = this;
        nav.btn.click(function () {
            $(".s-menu.current").removeClass("current");
            $("#s_menus_1").addClass("current");
            $(".s-content.s-current").removeClass("s-current");
            $("#s_content_1").addClass("s-current");
            $("#s_content_1").css('display', 'block');
            $("#s_content_2,#s_content_3,#s_content_4,#s_content_5").css('display', 'none');
        });
    }
};
nav.init();

var news = {
    init: function (argument) {
        var news = this;
        news.render();
        news.bind();
    },
    render: function () {
        var news = this;
        news.btn = $('#s_menus_2');
    },
    bind: function () {
        var news = this;
        news.btn.click(function () {
            $(".s-menu.current").removeClass("current");
            $("#s_menus_2").addClass("current");
            $(".s-content.s-current").removeClass("s-current");
            $("#s_content_2").addClass("s-current");
            $("#s_content_2").css('display', 'block');
            $("#s_content_1,#s_content_3,#s_content_4,#s_content_5").css('display', 'none');
        });
    }
};
news.init();

var music = {
    init: function (argument) {
        var music = this;
        music.render();
        music.bind();
    },
    render: function () {
        var music = this;
        music.btn = $('#s_menus_3');
    },
    bind: function () {
        var music = this;
        music.btn.click(function () {
            $(".s-menu.current").removeClass("current");
            $("#s_menus_3").addClass("current");
            $(".s-content.s-current").removeClass("s-current");
            $("#s_content_3").addClass("s-current");
            $("#s_content_3").css('display', 'block');
            $("#s_content_1,#s_content_2,#s_content_4,#s_content_5").css('display', 'none');
        });
    }
};
music.init();

var shopping = {
    init: function (argument) {
        var shopping = this;
        shopping.render();
        shopping.bind();
    },
    render: function () {
        var shopping = this;
        shopping.btn = $('#s_menus_4');
    },
    bind: function () {
        var shopping = this;
        shopping.btn.click(function () {
            $(".s-menu.current").removeClass("current");
            $("#s_menus_4").addClass("current");
            $(".s-content.s-current").removeClass("s-current");
            $("#s_content_4").addClass("s-current");
            $("#s_content_4").css('display', 'block');
            $("#s_content_1,#s_content_2,#s_content_3,#s_content_5").css('display', 'none');
        });
    }
};
shopping.init();

var video = {
    init: function (argument) {
        var video = this;
        video.render();
        video.bind();
    },
    render: function () {
        var video = this;
        video.btn = $('#s_menus_5');
    },
    bind: function () {
        var video = this;
        video.btn.click(function () {
            $(".s-menu.current").removeClass("current");
            $("#s_menus_5").addClass("current");
            $(".s-content.s-current").removeClass("s-current");
            $("#s_content_5").addClass("s-current");
            $("#s_content_5").css('display', 'block');
            $("#s_content_1,#s_content_2,#s_content_3,#s_content_4").css('display', 'none');
        });
    }
};
video.init();

// 我的导航和推荐导航的js
var myNav = {
    init: function (argument) {
        var myNav = this;
        myNav.render();
        myNav.bind();
    },
    render: function () {
        var myNav = this;
        myNav.btn = $('#tab_nav');
    },
    bind: function () {
        var myNav = this;
        myNav.btn.click(function () {
            $("#s_nav").css('display', 'block');
            $("#s_nused").css('display', 'none');
            $(".tab-common.tab-on").removeClass("tab-on");
            $("#tab_nav").addClass("tab-on");
        });
    }
};
myNav.init();

var recommendNav = {
    init: function (argument) {
        var recommendNav = this;
        recommendNav.render();
        recommendNav.bind();
    },
    render: function () {
        var recommendNav = this;
        recommendNav.btn = $('#tab_used');
    },
    bind: function () {
        var recommendNav = this;
        recommendNav.btn.click(function () {
            $("#s_nused").css('display', 'block');
            $("#s_nav").css('display', 'none');
            $(".tab-common.tab-on").removeClass("tab-on");
            $("#tab_used").addClass("tab-on");
        });
    }
};
recommendNav.init();
