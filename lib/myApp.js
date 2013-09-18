define(function (require, exports, module){
    var $ = require('jquery');

    var Action = {};
    Action.setBg = function (){
        $("body").css("background", "red");
    }
    Action.setText = function (){
        $("body").append('<h1>欢迎来到模块化的Javasctipt的世界</h1>');
    }

    module.exports = {
        Action : Action
    }

});
