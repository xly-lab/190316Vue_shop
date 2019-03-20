<template>
    <div class="desc_container">
      <p v-html="msg"></p>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          msg:'<div class="detail_info_wrap" id="detail" style="height: 2187px;">\n' +
            '        <div class="detail_list" id="detailCont" style="transform: translate3d(0px, 0px, 0px); transition: all 0ms ease 0s;">\n' +
            '\n' +
            '            <!-- 商品介绍 -->\n' +
            '            <div class="detail_item p_desc" id="detail1" style="position: relative; padding: 0px;">\n' +
            '                <!-- 视频播放器 -->\n' +
            '                <div class="jdvideo_div" id="videoMain"></div>\n' +
            '                <!-- 强制广告位 -->\n' +
            '                <div style="display:none;" id="adPosition"></div>\n' +
            '                <!-- 关联版式、统一海报 -->\n' +
            '                <div style="display:none;" id="detailAdvertise"></div>\n' +
            '                <div style="display:none;" id="globalNotice" class="world">\n' +
            '                    <div class="world_title">\n' +
            '                        <span class="text">海囤全球公告</span>\n' +
            '                    </div>\n' +
            '                    <div><div id="globalNoticeArea" class="detail_pc"></div></div>\n' +
            '                </div>\n' +
            '                <div class="world_title" id="globalComm" style="display:none;">\n' +
            '                    <span class="text">商品详情</span>\n' +
            '                </div>\n' +
            '                <div class="refer_area" style="display:none;" id="sizeArea"></div>\n' +
            '                <div style="width: 375px; height: 2074.84px;"><div id="commDesc" class="detail_pc" hasdata="1" style="line-height: 2; transform-origin: 0px 0px; transform: scale(0.474684); font-size: 30px;"><img src="//img30.360buyimg.com/popWaterMark/jfs/t26251/32/693287214/74732/c1ec00af/5bb621caN11564275.jpg!q70.dpg" id="1" alt="" loaded="10"><br style="text-align: center;"><img src="//img30.360buyimg.com/popWaterMark/jfs/t25006/85/1574022819/129203/eb65a3ca/5bb621caNff6979de.jpg!q70.dpg" id="1" alt="" loaded="9"><br style="text-align: center;"><img src="//img14.360buyimg.com/popWaterMark/jfs/t1/2019/14/11878/225891/5bd1a206E047d1989/95f98c95e01e599e.jpg!q70.dpg" alt="" loaded="8"><img src="//img30.360buyimg.com/popWaterMark/jfs/t26008/42/1584765594/186499/b6391776/5bb621caN543b9a65.jpg!q70.dpg" id="1" alt="" loaded="7"><img src="//img30.360buyimg.com/popWaterMark/jfs/t26269/104/722814194/172084/e8d5efec/5bb6221cN1f229fe4.jpg!q70.dpg" alt="" loaded="6"><br style="text-align: center;"><img src="//img30.360buyimg.com/popWaterMark/jfs/t26440/48/702503730/99848/aced2af3/5bb62375N1bab7cc7.jpg!q70.dpg" id="1" alt="" loaded="5"><br style="text-align: center;"><img src="//img30.360buyimg.com/popWaterMark/jfs/t27019/21/691513016/208378/14b9c8c3/5bb62375Necad6556.jpg!q70.dpg" id="1" alt="" loaded="4"><br style="text-align: center;"><img src="//img30.360buyimg.com/popWaterMark/jfs/t27547/344/712475919/146912/921da7ea/5bb62375N4cc14d98.jpg!q70.dpg" id="1" alt="" loaded="3"><br style="text-align: center;"><img src="//img30.360buyimg.com/popWaterMark/jfs/t26449/59/715560867/107069/1c71129b/5bb62375N6d8993b5.jpg!q70.dpg" id="1" alt="" loaded="2"><br style="text-align: center;"><img src="//img30.360buyimg.com/popWaterMark/jfs/t25030/153/1611521467/118042/43cb5885/5bb62375N41dbb5ba.jpg!q70.dpg" id="1" alt="" loaded="1"><p><br></p></div></div>\n' +
            '                <div><div style="display:none;" class="detail_pc" id="detailAdvertise1"></div></div>\n' +
            '                <!-- 品牌活动 -->\n' +
            '                <div style="display:none;" id="brandAct"></div>\n' +
            '                <!-- 温馨提示语 -->\n' +
            '                <div style="display:none;" class="reminder" id="reminder"></div>\n' +
            '                <div id="pcItemLink" style="" ptag="7001.1.17">\n' +
            '                    <a class="btn btn_full" href="javascript:;">查看电脑版商品详情</a>\n' +
            '                    <div class="detail_full_tip">（ 查看电脑版商品详情，可能会消耗较多流量 ）</div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <!-- 商品参数 -->\n' +
            '            <div class="detail_item p_prop" id="detail2">\n' +
            '                <div id="package">\n' +
            '                    <div class="mod_tit_line">\n' +
            '                        <h3>包装清单</h3>\n' +
            '                    </div>\n' +
            '                    <div class="mod_row" id="detPackage"></div>\n' +
            '                </div>\n' +
            '                <div>\n' +
            '                    <div class="mod_tit_line">\n' +
            '                        <h3>商品参数</h3>\n' +
            '                    </div>\n' +
            '                    <div id="detParam"></div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <!--售后保障-->\n' +
            '            <div class="detail_item p_cmt" id="detail3">\n' +
            '                <div id="detail3Normal">\n' +
            '                    <div id="detServer"></div>\n' +
            '                    <div id="skusfkc" style="display: none;">\n' +
            '                        <div class="mod_tit_line"><h3>商品提示</h3></div>\n' +
            '                        该商品超时未付款，订单将被自动取消\n' +
            '                    </div>\n' +
            '                    <div id="normalServerPromise" style="display:none;"></div>\n' +
            '\n' +
            '                    <div id="serverPromise" style="display: none;">\n' +
            '                        <div class="mod_tit_line"><h3>服务承诺</h3></div>\n' +
            '                        京东商城向您保证所售商品均为正品行货，京东自营商品开具机打发票或电子发票。凭质保证书及京东商城发票，可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由京东联系保修，享受法定三包售后服务），与您亲临商场选购的商品享受相同的质量保证。京东商城还为您提供具有竞争力的商品价格和<a target="_self" href="//wqs.jd.com/my/cart/extraYunfeiRule.shtml?detail=1">运费政策</a>，请您放心购买！\n' +
            '                        <div class="for_separator"></div>\n' +
            '                        注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！\n' +
            '                    </div>\n' +
            '                    <div id="freshServerPromise" style="display:none;">\n' +
            '                        <div class="mod_tit_line"><h3>售后服务</h3></div>\n' +
            '                        1、生鲜“优鲜赔”绿色通道\n' +
            '                        <div class="for_separator"></div>\n' +
            '                        生鲜自营商品的破损或腐坏等问题，请在商品签收后48小时内提交“优鲜赔”申请，100分钟内审核通过后即享补偿，无需返回商品；非鲜活易腐类产品除外，需上门取件。\n' +
            '                        <div class="for_separator"></div>\n' +
            '                        2、专业生鲜客服团队—让您售后无忧 \n' +
            '                        <div class="for_separator"></div>\n' +
            '                        微信在线客服：JD-fresh\n' +
            '                        <div class="for_separator"></div>\n' +
            '                        京东生鲜专享客服电话：400-606-3311 \n' +
            '                        <div class="for_separator"></div>\n' +
            '                        3、京东自营商品开具机打发票或电子发票\n' +
            '                        <div class="for_separator"></div>\n' +
            '                        如您发现商品有质量问题，请在收到商品之时起48小时内及时提交申请或联系客服处理。\n' +
            '                    </div>\n' +
            '                    <div>\n' +
            '                        <div class="mod_tit_line"><h3>权利声明</h3></div>\n' +
            '                        京东商城上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是京东商城重要的经营资源，未经许可，禁止非法转载使用。\n' +
            '                        <div class="for_separator"></div>\n' +
            '                        <p><b>注：</b>本站商品信息均来自于厂商，其真实性、准确性和合法性由信息拥有者（厂商）负责。本站不提供任何保证，并不承担任何法律责任。</p>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div id="priceDescDetail">\n' +
            '                    <div class="mod_tit_line"><h3>价格说明</h3></div>\n' +
            '                    <p><strong>1.京东价：</strong>京东价为商品的销售价，是您最终决定是否购买商品的依据。</p>\n' +
            '                    <p><strong>2.划线价：</strong>商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在京东平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>\n' +
            '                    <p><strong>3.折扣：</strong>如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。</p>\n' +
            '                    <p><strong>4.异常问题：</strong>商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。</p>\n' +
            '                </div>\n' +
            '               <div id="ecoTip" style="display:none;">\n' +
            '                   <div class="mod_tit_line"><h3>能效标识说明</h3></div>\n' +
            '                   <p>根据国家相关能效标识法规和标准的要求，京东自营在售商品的能效标识图样，将会逐步替换为新版能源效率标识贴；受能效标识标准变化影响，部分产品的新版和旧版能效标识，在能效等级、测试值等方面会有差异，但产品实际性能完全一样，并不影响购买和使用，加贴新版或旧版能效标识的商品会随机发放，请您放心购买；如有疑问，请在购买前通过咚咚或来电咨询。</p>\n' +
            '               </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>'
        }
      }
    }

</script>

<style lang="scss" scoped>
.desc_container{
  margin-top: 40px;
}

</style>
