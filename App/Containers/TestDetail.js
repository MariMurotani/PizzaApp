// @flow
'use strict'
import React from 'react'
import { View, Text, Image } from 'react-native'

export default class TestDetail extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loaded: false
    }
  }
  //  描画用のrender
  render () {
    return this.renderView()
  }
  //  リスト用の表示をする
  renderView () {
    console.log('detail view')
    console.log(this.props)
    return (
      <View>
        <Text>{this.props.title}</Text>
        <Image
          source={{uri: this.props.thumbnail}}
        />
        <Text>{this.props.author}</Text>
      </View>
    )
  }
}
