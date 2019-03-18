<template>
    <div class="info_container">
     <h3 class="title">{{NewsInfo.title}}</h3>
      <p class="subtitle">
        <span>{{NewsInfo.add_time }}</span>
        <span>点击：{{NewsInfo.click}}次</span>
      </p>
      <hr>
      <div class="content" v-html="NewsInfo.content"></div>
      <comment :id="id"> </comment>
    </div>

</template>

<script>
  import {Toast} from 'mint-ui'
  import comment from '../suncomponents/comment.vue'
  export default {

      data(){
        return{
          id:this.$route.params.id,
          NewsInfo:{
            id:this.$route.params.id,
            title:'hello，there are not have title!!!',
            click:1,
            add_time:'2019-03-15 16:23:55',
            content:'<div class="post_content_main" id="epContentLeft">\n' +
              '        <h1>国内女大学生丢苹果手机 一年后收到韩国警方消息</h1>\n' +
              '        <div class="post_time_source">\n' +
              '            2019-03-17 08:01:31　来源: <a id="ne_article_source" href="http://www.xinhuanet.com" target="_blank" rel="nofollow"></a>        </div>\n' +
              '        <div class="post_body">\n' +
              '                        <div class="post_topshare_wrap">\n' +
              '                \t\t\t\t\t<div class="post_topad"><!--触发擎天柱投放代码开始--></div>\n' +
              '\t\t\t\t\t\t\t\t\t\t<div class="post_tie_top">\n' +
              '\t\t\t\t\t\t<a class="post_icon_tie" target="_self" href="#post_comment_area" title="快速发贴"></a>\n' +
              '\t\t\t\t\t\t<a class="post_cnum_tie js-tielink js-tiejoincount" href="#" title="点击查看跟贴">0</a>\n' +
              '\t\t\t\t\t</div>\n' +
              '\t\t\t\t\t\t\t\t\t\t<div class="post_topshare">\n' +
              '\t\t\t\t\t\t<span class="post_topshare_title">分享到：</span>\n' +
              '\t\t\t\t\t\t<ul class="post_share">\n' +
              '\t\t\t\t\t\t\t<li class="share_yixin js_share" data-type="yixin">\n' +
              '\t\t\t\t\t\t\t\t<a href="javascript:;" target="_self"><i title="分享到易信"></i><span></span>易信</a>\n' +
              '\t\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t\t<li class="share_weixin js_weixin" data-type="top">\n' +
              '\t\t\t\t\t\t\t    <a href="javascript:;" target="_self"><i title="分享到微信"></i><span></span>微信</a>\n' +
              '\t\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t\t<li class="share_qzone js_share" data-type="qzone">\n' +
              '\t\t\t\t\t\t\t\t<a href="javascript:;" target="_self"><i title="分享到QQ空间"></i><span></span>QQ空间</a>\n' +
              '\t\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t\t<li class="share_weibo js_share" data-type="weibo">\n' +
              '\t\t\t\t\t\t\t\t<a href="javascript:;" target="_self"><i title="分享到新浪微博"></i><span></span>微博</a>\n' +
              '\t\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t\t<li class="share_more">\n' +
              '\t\t\t\t\t\t\t\t<a href="javascript:;" target="_self"><i title="更多"></i><span></span>更多</a>\n' +
              '\t\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t\t<ul class="more">\n' +
              '\t\t\t\t\t\t\t\t<span class="tri"></span>\n' +
              '\t\t\t\t\t\t\t\t<li class="share_lofter js_share" data-type="lofter">\n' +
              '\t\t\t\t\t\t\t\t\t<a href="javascript:;" target="_self" title="分享到Lofter"><i></i><span></span></a>\n' +
              '\t\t\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t\t\t<li class="share_rr js_share" data-type="rr">\n' +
              '\t\t\t\t\t\t\t\t\t<a href="javascript:;" target="_self" title="分享到人人网"><i></i><span></span></a>\n' +
              '\t\t\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t\t\t<li class="share_youdao js_share" data-type="youdao">\n' +
              '\t\t\t\t\t\t\t\t\t<a href="javascript:;" target="_self" title="收藏到有道云笔记"><i></i><span></span></a>\n' +
              '\t\t\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t\t</ul>\n' +
              '\t\t\t\t\t\t</ul>\n' +
              '<div class="js_qrcode_wrap hidden" id="js_qrcode_top">\n' +
              '                                <div class="js_qrcode_arr"></div>\n' +
              '                                <a href="javascript:;" target="_self" class="js_qrcode_close" data-type="top" title="关闭"></a>\n' +
              '                                <div class="js_qrcode_img js_share_qrcode"></div>\n' +
              '                                <p>用微信扫码二维码</p>\n' +
              '                                <p>分享至好友和朋友圈</p>\n' +
              '                            </div>\n' +
              '\t\t\t\t\t</div>\n' +
              '\t\t\t\t\t\t\t\t\t\t<div class="post_size_ctrl">\n' +
              '\t\t\t\t\t\t<span class="post_size_t">T</span>\n' +
              '\t\t\t\t\t\t<a class="post_size_large" href="javascript:;" target="_self">+</a>\n' +
              '\t\t\t\t\t\t<a class="post_size_small" href="javascript:;" target="_self">-</a>\n' +
              '\t\t\t\t\t</div>\n' +
              '            </div>\n' +
              '                                                            <div class="post_text" id="endText" style="border-top:1px solid #ddd;">\n' +
              '                                <p class="otitle">\n' +
              '                    （原标题：女大学生丢了部手机，一年后一通神秘电话从国外打来……）\n' +
              '                </p>\n' +
              '                                <p>一位女大学生</p><p>在大连丢失的手机</p><p>漂洋过海转了一圈后</p><p>从韩国被邮寄回来了！</p><p class="f_center"><img alt="国内女大学生丢苹果手机 一年后收到韩国警方消息" src="http://cms-bucket.ws.126.net/2019/03/17/ced7e6de19aa4f4a9bcf8e0a77abc415.jpeg?imageView&amp;thumbnail=550x0" /><br  /></p><p><b>事情要从一年前说起</b></p><p>20岁的小尹是大连外国语大学的大二学生。2018年1月，小尹通过“大外失物招领墙”的QQ账号得知，一名女同学在学校附近的饭店吃饭时，不慎把iPhone手机遗失。小尹与失主取得联系后，表达了想为同学找回手机的愿望。</p><p class="f_center"><img alt="国内女大学生丢苹果手机 一年后收到韩国警方消息" src="http://cms-bucket.ws.126.net/2019/03/17/74aaceb417de4deebe0cd05ee77d4f6a.jpeg?imageView&amp;thumbnail=550x0" /><br  /></p><p>小尹登录了女同学的苹果ID</p><p>在“查找iPhone”中标注</p><p>“丢失的iPhone?求归还！”</p><p>并留下了自己的手机号码</p><p>如此一来</p><p>拾到者在使用手机时</p><p>就会看到相应的提示</p><p>“这就像往大海里扔了一个漂流瓶一样，把希望寄托在捡到手机的人身上，等对方看到后打来电话归还手机。”小尹说。</p><p class="f_center"><img alt="国内女大学生丢苹果手机 一年后收到韩国警方消息" src="http://cms-bucket.ws.126.net/2019/03/17/3cf546f42e76452e9fb782ebe73df706.jpeg?imageView&amp;thumbnail=550x0" /><br  /></p><p><b>一年后接到韩国警方消息</b></p><p>从去年1月到今年年初，小尹没有接到归还手机的来电，他和失主对此事已经不抱希望。让小尹没想到的是，今年3月12日下午，小尹突然接到一个来自韩国的电话：</p><p>来电者是在韩国生活的一名女性华人，受了韩国警方委托与他取得联系，说那部丢失的手机在釜山被找到了！</p><p>这名华人称，此前一名与她相识的当地警察找到她，希望她能帮忙翻译一段中国文字，这些文字出现在一部手机里。她赶到警局后，在手机上所看到的文字正是小尹当初标注的。</p><p>她意识到，这是一部被遗失的手机，需要立即归还给失主。于是，她按照标注所留下的电话号码，给小尹打来了电话，并表示将以邮寄的方式尽快把手机归还给失主。</p><p><b>手机为何会“漂”到异国？</b></p><p>接到电话后，小尹和失主惊喜不已，但也产生了疑问。</p><p>“在大连丢失的手机，</p><p>怎么会出现在异国呢？”</p><p>小尹说，他曾试图向那名热心的华人了解当地警方发现手机的过程，但那名女士表示并不清楚此事。所以，事发过程至此成了一个谜。</p><p class="f_center"><img alt="国内女大学生丢苹果手机 一年后收到韩国警方消息" src="http://cms-bucket.ws.126.net/2019/03/17/34aed80f8f7142aa99da985f881819be.png?imageView&amp;thumbnail=550x0" /><br  /></p><p style="text-align: center; ">小尹和热心华人的聊天记录</p><p><!-- AD200x300_2 -->\n' +
              '<div class="gg200x300">\n' +
              '<div class="at_item right_ad_item" adType="rightAd" requestUrl="https://nex.163.com/q?app=7BE0FC82&c=news&l=133&site=netease&affiliate=news&cat=article&type=logo300x250&location=12"></div>\n' +
              '<a href="javascript:;" target="_self" class="ad_hover_href"></a>\n' +
              '</div><p>不排除一种可能：当初有人捡到这部手机后，把它带到了境外。当地警方在处理某起事情时，发现了这部手机，并且在开机后看到了中文提示。</p><p>“不管如何，手机漂洋过海后又重回失主手中，在感慨事件离奇的同时，也体会到了一个道理：乐于帮助别人的人，运气不会差。”小尹说。</p>\n' +
              '                <p></p>\n' +
              '                                                <div class="ep-source cDGray">\n' +
              '                    <span class="left"><a href="https://news.163.com/"><img src="http://static.ws.126.net/cnews/css13/img/end_news.png" alt="潘晴晴" width="13" height="12" class="icon"></a> </span>\n' +
              '                    <!--潘晴晴_NBJS5830--><span class="ep-editor"></span>                </div>\n' +
              '                                \t\t\t\t\t\t\t\t            </div>\n' +
              '                                <div class="post_btmshare">\n' +
              '\t\t\t\t\t<span class="post_topshare_title">分享到：</span>\n' +
              '\t\t\t\t\t<ul class="post_share">\n' +
              '\t\t\t\t\t\t<li class="share_yixin js_share" data-type="yixin">\n' +
              '\t\t\t\t\t\t\t<a href="javascript:;" target="_self"><i title="分享到易信"></i><span></span>易信</a>\n' +
              '\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t<li class="share_weixin js_weixin" data-type="btm">\n' +
              '\t\t\t\t\t\t\t<a href="javascript:;" target="_self"><i title="分享到微信"></i><span></span>微信</a>\n' +
              '\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t<li class="share_qzone js_share" data-type="qzone">\n' +
              '\t\t\t\t\t\t\t<a href="javascript:;" target="_self"><i title="分享到QQ空间"></i><span></span>QQ空间</a>\n' +
              '\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t<li class="share_weibo js_share" data-type="weibo">\n' +
              '\t\t\t\t\t\t\t<a href="javascript:;" target="_self"><i title="分享到新浪微博"></i><span></span>微博</a>\n' +
              '\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t<li class="share_more">\n' +
              '\t\t\t\t\t\t\t<a href="javascript:;" target="_self"><i title="更多"></i><span></span>更多</a>\n' +
              '\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t<ul class="more">\n' +
              '\t\t\t\t\t\t\t<span class="tri"></span>\n' +
              '\t\t\t\t\t\t\t<li class="share_lofter js_share" data-type="lofter">\n' +
              '\t\t\t\t\t\t\t\t<a href="javascript:;" target="_self"><i title="分享到Lofter"></i><span></span></a>\n' +
              '\t\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t\t<li class="share_rr js_share" data-type="rr">\n' +
              '\t\t\t\t\t\t\t\t<a href="javascript:;" target="_self"><i title="分享到人人网"></i><span></span></a>\n' +
              '\t\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t\t<li class="share_youdao js_share" data-type="youdao">\n' +
              '\t\t\t\t\t\t\t\t<a href="javascript:;" target="_self"><i title="收藏到有道云笔记"></i><span></span></a>\n' +
              '\t\t\t\t\t\t\t</li>\n' +
              '\t\t\t\t\t\t</ul>\n' +
              '\t\t\t\t\t</ul>\n' +
              '<div class="js_qrcode_wrap hidden" id="js_qrcode_btm">\n' +
              '    <div class="js_qrcode_arr"></div>\n' +
              '    <a href="javascript:;" target="_self" class="js_qrcode_close" data-type="btm" title="关闭"></a>\n' +
              '    <div class="js_qrcode_img js_share_qrcode"></div>\n' +
              '    <p>用微信扫码二维码</p>\n' +
              '    <p>分享至好友和朋友圈</p>\n' +
              '</div>\n' +
              '\t\t\t\t</div>'
          }
        }
      },
      created(){
        this.getNewsInfo()
      },
      methods:{
        getNewsInfo(){
          Toast('发送请求了，但是肯定没有就收到数据')
          this.$http.get('app/getnew/:'+this.id).then(result=>{
            if(result.body.status===0){
                this.NewsInfo=result.body.message
            }else{
              Toast('无法获取新闻')
            }
          })
        }
      },
    components:{
      comment
    }
  }

</script>

<style lang="scss" scoped>
  .info_container{
    margin-top: 40px;
    .title{
      padding-top: 5px;
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
      color: #26a2ff;
    }
    .subtitle {
      padding: 0 5px;
      font-size: 13px;
      color: #62bafc;
      display: flex;
      justify-content: space-between;
    }
  }


</style>
