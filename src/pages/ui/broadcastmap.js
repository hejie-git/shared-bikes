import React,{Component} from "react";
import {Card,Carousel} from "antd";
import "./ui.less"

class Broadcastmap extends Component{
  render() {
    return (
      <div className={'broadcastmap'}>
        <Card title={'文字背景轮播'} className={'btn'}>
          <Carousel autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Card>
        <Card title={'图片轮播'} className={'slide-wrap'}>
          <Carousel autoplay>
            <div>
              <img src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584351334571&di=1c0e2376f571af38cdad42999464f0c7&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F0e2442a7d933c895f7116ee6d01373f08202003b.jpg'} alt={''} />
            </div>
            <div>
              <img src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584351974563&di=a45aa95fad04a9f46a300baf56fb4f59&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1211%2F27%2Fc9%2F16142347_1354014176593.jpg'} alt={''}/>
            </div>
            <div>
              <img src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584351974563&di=645f707375a628d86388ca136fb74e65&imgtype=0&src=http%3A%2F%2Fimg3.iqilu.com%2Fdata%2Fattachment%2Fforum%2F201308%2F21%2F194954f38vozs8ox1xff5b.jpg'} alt={''}/>
            </div>
          </Carousel>
        </Card>
      </div>
    )
  };
}

export default Broadcastmap