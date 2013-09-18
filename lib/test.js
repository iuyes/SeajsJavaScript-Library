define(function (require){

    // jQuery 不多说
    var $ = require('jquery');
    console.dir($);

    // 一个很好用的时间格式处理插件
    var moment = require('moment');
    console.dir(moment);

    //underscore
    var _ = require('_');
    console.dir(_);


    // 自定义的模块
    var myApp = require('./myApp');
    console.info(myApp);

    myApp.Action.setBg();
    myApp.Action.setText();


});
