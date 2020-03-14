import React,{Component} from "react";
import {Col, Row} from "antd";
import Util from "../../utils/utils"
import menuList from "../../config/menuConfig";
import {withRouter} from "react-router-dom"
import axios from "../../axios"
import "./index.less"

export default @withRouter class Header extends Component{
  constructor(props) {
    super(props);
    this.state={
      sysTime:'',
      city:'天津'
    }
  }

  componentDidMount() {
    setInterval(()=>{
      let sysTime = Util.formateDate("YYYY-mm-dd HH:MM:SS",new Date());
      this.setState({sysTime})
    },1000);

    this.getWeatherAPIData();

  }

  getTitle(){
    return menuList.map((item) => {
      if (item.key.endsWith(this.props.location.pathname)){
        return item.title
      }
      return null
    })
  }

  //百度天气API
  //http://api.map.baidu.com/telematics/v3/weather?location=tianjin&output=json&ak=wTUF45irelbZlRS4vKs58v3cH27wuhzW
  getWeatherAPIData(){
    axios.jsonp({
      url:"http://api.map.baidu.com/telematics/v3/weather?location="+encodeURIComponent(this.state.city)+"&output=json&ak=wTUF45irelbZlRS4vKs58v3cH27wuhzW"
    }).then((res) => {
      if (res.status === 'success'){
        let data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl:data.dayPictureUrl,
          weather:data.weather,
          temperature:data.temperature
        })
      }
    })
  }

  render() {
    return (
      <div className={'header'}>
        <Row className={'header-top'}>
          <Col span={'24'}>
            <span>欢迎，xxx</span>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className={'breadcrumb'}>
          <Col span={'4'} className={'breadcrumb-title'}>{this.getTitle()}</Col>
          <Col span={'20'} className={'weather'}>
            <span className={'data'}>{this.state.sysTime}</span>
            <span className={'weather-detail'}>
              <img className={'PictureUrl'} src={this.state.dayPictureUrl} alt={''}/>
            </span>
            <span>{this.state.weather}</span>
            <span>{this.state.temperature}</span>
          </Col>
        </Row>
      </div>
    )
  }
}