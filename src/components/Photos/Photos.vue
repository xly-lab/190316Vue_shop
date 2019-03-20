<template>
    <div class="pho_container">
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <a  v-for="(item,index) in ImgCategoryList" :key=" index" :class="['mui-control-item ',index==0?'mui-active':'']" href="#item1mobile"  @click="">
            {{item.title}}
            </a>
          </div>
        </div>
      </div>
      <ul>
        <router-link tag="li" :to="'/home/photoinfo/'+item.id" v-for="item in imgList" :key="item.id" >
          <img v-lazy="item.img_url" alt="">
          <div class="info_container">
            <div class="info_title">{{item.title}}</div>
            <div class="info_content">{{item.zhaiyao}}</div>
          </div>
        </router-link>
      </ul>
    </div>

</template>

<script>
  import mui from '../../lib/mui/js/mui.js'
  import {Toast} from 'mint-ui'

    export default {
      data(){
        return{
          ImgCategoryList:[
            {
              title:'家具分类',
              id:14
            },
            {
              title:'美女分类',
              id:15
            },
            {
              title:'摄影设计',
              id:16
            },
            {
              title:'宠物家居',
              id:11
            },
            {
              title:'爱购物',
              id:10
            },
          ],
          imgList:[
            {
              id:10,
              title:'asdnbv avkh驳',
              img_url:'http://img5.imgtn.bdimg.com/it/u=3943723512,1898909937&fm=26&gp=0.jpg',
              zhaiyao:'美丽的地方，不接受反驳,just now 就是不一样'
            },
            {
              id:20,
              title:'就是很美丽的地方，不接ofihwiu he',
              img_url:'http://img1.3lian.com/2015/w6/53/d/85.jpg',
              zhaiyao:'美丽进口巴萨的机会巴拉感受到挂机圣彼得堡温热代金券不为过去感染接收不到开码比较就是不一样'
            },
            {
              id:12,
              title:'奥斯卡接电话接受反驳',
              img_url:'http://pic1.win4000.com/wallpaper/7/53bce10032f18.jpg',
              zhaiyao:'美太热了科技哦雄风欧尼我离开没离开没喝过来看水电费几位自己交水电费是不一样'
            },
            {
              id:16,
              title:'就是很美丽的地方，不接受反驳',
              img_url:'http://pic23.nipic.com/20120914/8596621_201337844000_2.jpg',
              zhaiyao:'美丽的阿萨德来看价快速机动我， 没想法那不就 电饭锅速度快结婚st now 就是不一样'
            },
            {
              id:13,
              title:'就是很美丽的地方，不接受反驳',
              img_url:'http://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/lvpics/h=800/sign=dace5628d400baa1a52c4abb7712b9b1/024f78f0f736afc33cc2a4a1b619ebc4b6451223.jpg',
              zhaiyao:'美丽的地看见你姐夫的规划我hi会啊解放后八大家㝉 just now 就是不一样'
            },
            {
              id:55,
              title:'就是很美丽的地方，不接受反驳',
              img_url:'http://pic14.nipic.com/20110529/7570613_004640647181_2.jpg',
              zhaiyao:'美丽的地方，不接受反驳,just now 就是不一样'
            },
            {
              id:62,
              title:'就是很美丽的地方，不接受反驳',
              img_url:'http://pic2.16pic.com/00/11/70/16pic_1170466_b.jpg',
              zhaiyao:'美丽阿斯蒂芬奥诶不如飞花大姐夫高密度板司机师傅低功耗等方面 和客户的快感个st now 就是不一样'
            },
            {
              id:31,
              title:'就是很美丽的地方，不接受反驳',
              img_url:'http://pic144.nipic.com/file/20171030/20261224_123622249000_2.jpg',
              zhaiyao:'美丽的地方看黑uy换个人爱过不过发动机那个电饭锅囊看见你的风格t now 就是不一样'
            }
          ]
        }
      },
      mounted(){
        mui('.mui-scroll-wrapper').scroll({
          deceleration:0.0005
        });
        this.getImgCategory()
      },
      methods:{

        getImgCategory(){
          var item=
          {
            title:'全部',
            id:0
          }
          this.ImgCategoryList.unshift(item)

          this.$http.get('api/getimgcategory').then(result=>{
            if(result.body.status === 0){
              this.ImgCategoryList = result.body.message
            }else{
              Toast('haha')
            }
          })
        }
      }
    }

</script>

<style lang="scss" scoped>
.pho_container{
    margin-top: 40px;
}
*{
  touch-action: pan-y;
}

  ul{
    /*background-color: #59ddff;*/
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li{
      background-color: #ccc;
      text-align: center;
      margin-bottom: 15px;
      box-shadow: 0 0 8px #c2c0c3;
      position: relative;
      img{

        /*height: 400px;*/
        width: 100%;
        vertical-align: middle;
      }
      .info_container{
        background-color: rgba(201, 134, 167, 0.5);
        color: white;
        text-align: left;
        position: absolute;
        bottom:0px;
        width: 100%;
        max-height: 62px;
        .info_title{
          font-size: 15px;
          font-weight: 600;
        }
        .info_content{
          font-size: 12px;
        }
      }
    }
  }
</style>
