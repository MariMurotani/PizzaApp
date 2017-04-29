import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import RoundedButton from '../../App/Components/RoundedButton'
import { Images } from '../Themes'
import { Actions } from 'react-native-router-flux'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  goToNext = () => {
    Actions.testScreen()
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              {"This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! "}
            </Text>
          </View>

          <DevscreensButton />

          <RoundedButton onPress={this.goToNext}>
            Go To My Example
          </RoundedButton>

        </ScrollView>
      </View>
    )
  }
}
