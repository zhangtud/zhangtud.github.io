/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */
var router = require('express').Router()
router.all('/getInfo', (req, res) => {
  res.send({obj:{env: 'local'}, resCode: '00100000'});
})

router.all('/3009', (req, res) => {
  res.send({obj:{inventoryList: [
        {goodsInventoryId:'3049258d1e934253ac51c717780640b6', publishedAt: '2018-03-20 15:29:56', goodsList: [
            {breviaryQualityName:'手机', goodsId: '369892859225620480', imgUrl:'http://img.st.iblimg.com/cloud-1/737857994.jpg', normQualityName:'手机', price:'10000.00', stockState:'1', goodsState:'1'},
            {breviaryQualityName:'爱屋及乌', goodsId: '423535048723578880', imgUrl:'http://img.st.iblimg.com/cloud-1/132143251.jpg', normQualityName:'爱屋及乌', price:'100.00', stockState:'1', goodsState:'1'},
            {breviaryQualityName:'手机', goodsId: '369892859225620480', imgUrl:'http://img.st.iblimg.com/cloud-1/737857994.jpg', normQualityName:'手机', price:'10000.00', stockState:'1', goodsState:'1'},
          ]},
        {goodsInventoryId:'3049258d1e934253ac51c717780640b6', publishedAt: '2018-03-20 15:29:56', goodsList: [
            {breviaryQualityName:'手机', goodsId: '369892859225620480', imgUrl:'http://img.st.iblimg.com/cloud-1/737857994.jpg', normQualityName:'手机', price:'10000.00', stockState:'1', goodsState:'1'},
            {breviaryQualityName:'爱屋及乌', goodsId: '423535048723578880', imgUrl:'http://img.st.iblimg.com/cloud-1/132143251.jpg', normQualityName:'爱屋及乌', price:'100.00', stockState:'1', goodsState:'1'},
            {breviaryQualityName:'手机', goodsId: '369892859225620480', imgUrl:'http://img.st.iblimg.com/cloud-1/737857994.jpg', normQualityName:'手机', price:'10000.00', stockState:'1', goodsState:'1'},
          ]},
        {goodsInventoryId:'3049258d1e934253ac51c717780640b6', publishedAt: '2018-03-20 15:29:56', goodsList: [
            {breviaryQualityName:'手机', goodsId: '369892859225620480', imgUrl:'http://img.st.iblimg.com/cloud-1/737857994.jpg', normQualityName:'手机', price:'10000.00', stockState:'1', goodsState:'1'},
            {breviaryQualityName:'爱屋及乌', goodsId: '423535048723578880', imgUrl:'http://img.st.iblimg.com/cloud-1/132143251.jpg', normQualityName:'爱屋及乌', price:'100.00', stockState:'1', goodsState:'1'},
            {breviaryQualityName:'手机', goodsId: '369892859225620480', imgUrl:'http://img.st.iblimg.com/cloud-1/737857994.jpg', normQualityName:'手机', price:'10000.00', stockState:'1', goodsState:'1'},
            {breviaryQualityName:'手机', goodsId: '369892859225620480', imgUrl:'http://img.st.iblimg.com/cloud-1/737857994.jpg', normQualityName:'手机', price:'10000.00', stockState:'1', goodsState:'1'},
            {breviaryQualityName:'手机', goodsId: '369892859225620480', imgUrl:'http://img.st.iblimg.com/cloud-1/737857994.jpg', normQualityName:'手机', price:'10000.00', stockState:'1', goodsState:'1'},
            {breviaryQualityName:'手机', goodsId: '369892859225620480', imgUrl:'http://img.st.iblimg.com/cloud-1/737857994.jpg', normQualityName:'手机', price:'10000.00', stockState:'1', goodsState:'1'}
          ]}
        ]
    }, resCode: "00100000", msg: '网络错误'});
})
module.exports = router

//废弃，写法太low
// module.exports = {
//   api: '/mockapi/testpost',
//   response: function (req, res) {
//     res.json({
//       name: '1',
//       status: 0
//     })
//   }
// }
