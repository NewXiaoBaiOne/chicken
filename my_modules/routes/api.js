// 加载自定控制器模块
const express = require('express');

const DB = require('../model/Base');     // 加载数据库操作类

module.exports = function (app) {
    // 前台路由

    //   登录路由
    app.post('/login', function (req, res) {
        console.log(req.body)
        let loginData = new DB("users");
        loginData.where(req.body).select(function (result) {
            res.json(result)
        })
    })
    //  注册路由
    app.post('/register', function (req, res) {
        let registerData = new DB("users");
        registerData.data(req.body).insert(function (result) {
            res.json(result)
        })
    })
    //  购物付款
    app.post('/buygoods', function (req, res) {
        let registerData = new DB("history");
        registerData.data(req.body).insert(function (result) {
            res.json(result)
        })
    })

    //   历史订单
    app.post('/orderbuy', function (req, res) {
        console.log(req.body)
        let orderbuyData = new DB("history");
        orderbuyData.where(req.body).select(function (result) {
            res.json(result)
        })
    })

    //  用户游览 地址 路由
    app.post('/user/address', function (req, res) {
        let addressData = new DB("address");
        addressData.select(function (result) {
            res.json(result)
        })
    })
    //  用户游览 单一 地址 路由
    app.post('/user/address/one', function (req, res) {
        let addressData = new DB("address");
        addressData.where(req.body).select(function (result) {
            res.json(result)
        })
    })

    //  用户修改 地址 路由
    app.post('/user/modify', function (req, res) {
        let addressModifyData = new DB("address");
        let id = {}
        id.addressid = req.body.addressid
        addressModifyData.where(id).data(req.body).update(function (result) {
            res.json(result)
        })
    })

    //  用户修改 地址 路由
    app.post('/user/deladdress', function (req, res) {
        let addressDelData = new DB("address");
        addressDelData.where(req.body).delete(function (result) {
            res.json(result)
        })
    })

    //  用户添加地址路由
    app.post('/user/addwhere', function (req, res) {
        let addwhereData = new DB("address");
        addwhereData.data(req.body).insert(function (result) {
            res.json(result)
        })
    })

    //  初始化  菜单列表路由
    app.post('/content/origin/goodshouse', function (req, res) {
        let origingoodslist = new DB("goods");
        origingoodslist.select(function (result) {
            res.json(result)
        })
    })

    //  初始化用户  评论列表路由
    app.post('/content/origin/comment', function (req, res) {
        let origingoodslist = new DB("comment");
        origingoodslist.select(function (result) {
            res.json(result)
        })
    })

    //  初始化  购物车列表路由
    app.post('/origin/carbuy', function (req, res) {
        let origincarlist = new DB("carbuy");
        origincarlist.select(function (result) {
            res.json(result)
        })
    })

}


