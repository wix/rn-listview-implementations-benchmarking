import React, {Component} from 'react';
import {WebView, Text} from 'react-native';
import _ from 'lodash';

export default class ListviewWebview extends Component {

  render() {
    const content = _.map(this.props.dataProvider.all(), (item) => `
      <div style="height:27;background-color:white">
        <div style="height:25;background-color:cyan;text-align:center; font-size:14">
          <img src=${"file://" + item.img_path} style="width:25;height:25;float:left;"/>
          <span style="display:inline-block;float:center;margin-top:4;">${item.name}</span>
          <span style="display:inline-block;float:right;margin-right:5;margin-top:4">${item.index}</span>
        </div>
      </div>
    `).join("")

    return (
      <WebView
        source={{html: content, baseUrl: "assets/src/autogenerated/images_dir/"}}
        contentInset={{top:-8, bottom: -8, left: -8, right: -8}}
      />
    );
  }
}