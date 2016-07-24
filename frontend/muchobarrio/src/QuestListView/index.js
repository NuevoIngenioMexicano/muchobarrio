import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  MapView,
  ListView
} from 'react-native';

import Footer from '../../src/Footer'

const {height, width} = Dimensions.get('window')

var lista = [
  {
    timeLeft: '15:02',
    barrioPoints: 250,
    name: 'Pistear como Campeón',
    description: 'Tomate 3 mezcales en la Cantina Pepe en menos de una hora'
  },

  {
    timeLeft: '11:02',
    barrioPoints: 350,
    name: '¡Virgencita Pliz!',
    description: 'Tómate una Selfie, persignándote en la Catedral'
  },
  {
    timeLeft: '08:02',
    barrioPoints: 500,
    name: 'A la antigüita',
    description: 'Compra antiguedades en la Lagunilla'
  }
]

class QuestListView extends Component {

  constructor (props, context) {
    super(props, context)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
        dataSource: ds.cloneWithRows(lista)
    }
  }


  render () {
    return (

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={styles.questCardWrapper}>
              <Footer data={rowData}></Footer>
            </View>
          }
        />
      )
    }
}

const styles = StyleSheet.create({
  questCardWrapper: {
    marginBottom: 10
  }
})

module.exports = QuestListView
