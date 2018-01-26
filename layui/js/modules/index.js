// layui.define(['layer', 'form'], function (exports) {
//     var layer = layui.layer, form = layui.form;
//
//     console.log('Hello World. This is index page');
//     exports('index', {});
// });

layui.define(['layer'], function (exports) {
    var layer = layui.layer;

    var obj = {
        alertMsg : function printMsg(msg) {
            layer.alert(msg);
        }
    }


    exports('myMsg', obj);
});

