// @flow
'use strict'
import React from 'react'
import { View, Text, Image, ListView, StyleSheet, TouchableHighlight } from 'react-native'
import { Metrics } from '../Themes'
// import R from 'ramda'

// Styles
import styles from './Styles/LaunchScreenStyles'
// import styles from './Styles/ThemeScreenStyle'

// Colors
// const colors = R.keys(Colors)
// Font Types
// const types = R.keys(Fonts.type)
// Font Styles
// const fontStyles = R.keys(Fonts.style)

// URL feed
var REQUEST_URL = 'https://lingohub.com/blog/feed/json?v=2.0&num=200&q=http://feeds.reuters.com/reuters/businessNews'

/*
* http://facebook.github.io/react-native/releases/0.19/docs/tutorial.html
* */
// TestScreenScene
export default class TestScreen extends React.Component {
  // コンストラクタ
  constructor (props) {
    super(props)
    // ステートの設定
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      title: '',
      description: '',
      loaded: false
    }
    // データ取得
    this.fetchData()
  }
  // データ取得用
  fetchData () {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        // ステートに値を設定
        this.setState({
          title: 'Test Title',
          description: 'Test Description',
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true
        })
        this.render()
      })
      .done()
  }
  //  描画用のrender
  render () {
    if (!this.state.loaded) {
      return this.renderLoadingView()
    }
    return this.renderListView()
  }
  //  ローディング用の表示をする
  renderLoadingView () {
    return (
      <View style={styles.mainContainer}>
        <Text>Loading......</Text>
      </View>
    )
  }
  //  リスト用の表示をする
  renderListView () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderListViewRows.bind(this)}
        style={styles.mainContainer}
      />
    )
  }
  //  一行ごとの
  renderListViewRows (entry) {
    return (
      <TouchableHighlight onPress={() => {
        console.log(this.onClickRow(entry))
      }}>
        <View style={ListStyles.container}>
          <Image
            source={{uri: entry.thumbnail}}
            style={ListStyles.thumbnail}
          />
          <View style={ListStyles.rightContainer}>
            <Text style={ListStyles.title}>{entry.title}</Text>
            <Text style={ListStyles.year}>{entry.date}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  //  行をクリック
  onClickRow (event) {
    console.log('onClickRow:')
    console.log(event)
    console.log(this)
  }
}

//  スタイル
var ListStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF'
  },
  rightContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    flexWrap: 'wrap'
  },
  year: {
    fontSize: 12,
    textAlign: 'right',
    flexWrap: 'wrap'
  },
  thumbnail: {
    width: 53,
    height: 53
  },
  listView: {
    marginTop: Metrics.navBarHeight,
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  }
})
