// In App.js in a new project

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';




function App() {

  const [fd, setfd] = useState('column')
  const [jc, setjc] = useState('flex-start')
  const [ai, setai] = useState('flex-start')

  const styles = {
    root: {
      flex: 1,
      // height: "50%",
      // backgroundColor: 'yellow',
    },
    container: {
      flex: 4,
      flexDirection: fd,
      alignItems: ai,
      justifyContent: jc
      // backgroundColor: 'aqua'
    },
    buttons: {
      flex: 3,
      // backgroundColor: 'yellow'
    },
    box1: {
      width: "30% ",
      height: "15%  ",
      backgroundColor: 'red'
    },
    box2: {
      width: "30% ",
      height: "15%  ",
      backgroundColor: 'blue'
    },
    btntext: {
      fontSize: 10,
      color: 'white',
      textAlign: 'center'
    },
    btn: {
      backgroundColor: 'darkslateblue',
      padding: 5,
      margin: 5,
      width: "30%",
      borderRadius: 5
    },
    ibtn: {
      backgroundColor: 'darkslateblue',
      padding: 5,
      marginBottom: 5,
      width: "100%",
      borderRadius: 5,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10
    },
    txt: {
      fontSize: 15,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 5
    },
    icont: {
      width: "30%"
    }
  }

  return (
    <>
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.box1}>

          </View>
          <View style={styles.box2}>

          </View>
        </View>
        <View style={styles.buttons}>
          <Text style={styles.txt}>flexDirection</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.btn} onPress={() => setfd('row')} ><Text style={styles.btntext}>Row</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => setfd('column')}> <Text style={styles.btntext}>Column</Text></TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View style={styles.icont}>
              <Text style={styles.txt}>justifyContent</Text>
              <TouchableOpacity style={styles.ibtn} onPress={() => setjc('center')}><Text style={styles.btntext}>center</Text></TouchableOpacity>
              <TouchableOpacity style={styles.ibtn} onPress={() => setjc('flex-start')}><Text style={styles.btntext}>flexStart</Text></TouchableOpacity>
              <TouchableOpacity style={styles.ibtn} onPress={() => setjc('flex-end')}><Text style={styles.btntext}>flexEnd</Text></TouchableOpacity>
              <TouchableOpacity style={styles.ibtn} onPress={() => setjc('space-between')}><Text style={styles.btntext}>space between</Text></TouchableOpacity>
            </View>
            <View style={styles.icont}>
              <Text style={styles.txt}>alignItems</Text>
              <TouchableOpacity style={styles.ibtn} onPress={() => setai('center')}><Text style={styles.btntext}>center</Text></TouchableOpacity>
              <TouchableOpacity style={styles.ibtn} onPress={() => setai('flex-start')}><Text style={styles.btntext}>flexStart</Text></TouchableOpacity>
              <TouchableOpacity style={styles.ibtn} onPress={() => setai('flex-end')}><Text style={styles.btntext}>flexEnd</Text></TouchableOpacity>
              <TouchableOpacity style={styles.ibtn} onPress={() => setai('stretch')}><Text style={styles.btntext}>stretch</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

    </>
  );
}


export default App;