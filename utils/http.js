/**
 * Created by xbantcl on 2017/5/18.
 */

module.exports = {
    httpReq: function (url, reqType) {
        wx.request({
            url: url || 'http://47.93.244.122/decorate/v1/diary/get',
            data: {},
            header: {
                'content-type': 'application/json'
            },
            method: reqType || 'POST',
            success: function(res) {
                console.log(res.data)
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })
    },
    post: function (url) {
        this.httpReq(url, 'POST');
    },
    get: function (url) {
        this.httpReq(url, 'GET');
    }
}