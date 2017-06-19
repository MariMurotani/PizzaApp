// @flow
'use strict'
import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/LaunchScreenStyles'

export default class TestDetail extends React.Component {
  constructor (props) {
    super(props)
    // ステートの設定
    this.state = {
      loaded: true
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
      <View style={styles.mainContainer}>
        <Text>TEST</Text>
        <Text>{this.props.title}</Text>
        <Image
          source={{uri: this.props.thumbnail}}
        />
        <Text>{this.props.author}</Text>
      </View>
    )
  }
}
