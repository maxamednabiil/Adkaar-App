import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import RootSack from './Navigation/Rootstack'
const App = () => {
  return (
    <View style={{flex: 1,}}>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent/>
      <RootSack/>
    </View>
  )
}

export default App