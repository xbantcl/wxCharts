/**
 * Created by ChenChao on 2016/9/27.
 */

var http = require('../../utils/http');
var app = getApp();
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    stocks: [],
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  /**
   * 股票搜索.
   * @param data
   */
  onShow: function () {
    var that = this;
    wx.request({
        url: 'https://hq.sinajs.cn/rn=xppzh&list=sh000001,sz399001,sz399006',
        header: {
            'content-type': 'application/json'
        },
        method: 'GET',
        success: function(res) {
            var stocks = [
                {'name': 'aaa', 'price': '121', 'pft': '2.5%'},
                {'name': 'bbb', 'price': '23', 'pft': '3.5%'},
                {'name': 'ccc', 'price': '45', 'pft': '5.5%'},
            ];
            var retArr = res.data.split(';');
            console.log(retArr[0].lastIndexOf(','));
            console.log(retArr[0].substr(retArr[0].indexOf('="')+2, 150));
            that.setData({stocks: res.data});
        },
        fail: function () {
            // fail
        },
        complete: function () {
            // complete
        }
    });
  }
})
