layui.define('layer', function (exports) {
    var layer = layui.layer;
    console.log('我是自定义函数，哈哈');
    exports('haha', function () {
        layer.msg('自定义模块回调函数触发.')
    })
})