layui.define(['jquery', 'layer'], function(exports){
    var $ = layui.jquery, layer = layui.layer;
    var obj = {
        ajax: function (url, type, dataType, data, callback) {
            $.ajax({
                url: url,
                type: type,
                dataType: dataType,
                data: data,
                success: callback
            });
        },
        commonMsg: function (msg) {
            layer.alert('common msg:' + msg);
        }
    };
    //输出接口
    exports('common', obj);
});