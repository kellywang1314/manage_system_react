
import React, { Component, PropTypes } from 'react';
import { Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router';
import styles from './bcrumb.css';
export default class Bcrumb extends Component {
	constructor(props) {
		super(props); //后才能用this获取实例化对象
		
	}
	render() {
		console.log(this.props)
		return (
			<Breadcrumb className="bread-crumb">
                <Breadcrumb.Item>
                    <Link to="/home/home"><Icon type="home" /><span>主页</span></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Icon type={this.props.icon ? this.props.icon : 'laptop'} /><span>{ this.props.title }</span>
                </Breadcrumb.Item>
            </Breadcrumb> 
		)
	}
}