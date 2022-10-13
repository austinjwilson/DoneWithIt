import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View
} from 'react-native';
import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import WelcomScreen from './app/assets/screens/WelcomScreen';
import ViewImageScreen from './app/assets/screens/ViewImageScreen';

export default function App() {
  // const {landscape} = useDeviceOrientation();
  return (
    // <WelcomScreen></WelcomScreen>
    <ViewImageScreen/>
    );
  }
    // <View style={{
    //   backgroundColor: "#fff",
    //   flex: 1,
    //   flexDirection: "row",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   alignContent: "center",
    //   // flexWrap: "wrap"
    // }}>
    //   <View style={{
    //     backgroundColor: "dodgerblue",
    //     // flex: 2
    //     width: 100,
    //     height: 100,
    //     // flexBasis: 100,
    //     // flex: 1
    //     // alignSelf: "flex-start"
    //   }} /><View style={{
    //     backgroundColor: "gold",
    //     width: 100,
    //     height: 100,
    //     left: 20,
    //     // right: 20,
    //     position: "absolute",
    //     // bottom: 20
    //     top: 20
    //     // flex: 1
    //   }} /><View style={{
    //     backgroundColor: "tomato",
    //     width: 100,
    //     height: 100
    //     // flex: 1
    //   }}/>
    // </View>
    // <SafeAreaView style={styles.container}>
    //   <View style= {{
    //     backgroundColor: "dodgerblue",
    //     width: '100%',
    //     height: landscape ? "100%" : "30%"
    //   }}></View>
    // </SafeAreaView>
    // // <SafeAreaView style={styles.container}>
    // {/* <SafeAreaView style={[styles.container, containerStyle]}> */}
    // {/* <SafeAreaView style={containerStyle}> */}
    // {/* <SafeAreaView style={{ backgroundColor: "orange" }}> */}
    //   // <Button
    //   //   title="Click me"
    //   //   onPress={() =>
    //   //     Alert.prompt("My title", "My message", text => console.log(text))
    //   //     // Alert.alert("My title", "My messagge", [
    //   //     //   {text: "Yes", onPress: () => console.log("Yes") },
    //   //     //   {text: "No", onPress: () => console.log("No") }
    //   //       // ])}
    //   //   }
    //   // />
    //   {/* <Text>Hello React Native</Text>
    //   <TouchableHighlight onPress={() =>  console.log('Image Tapped')}>
    //   <Image
    //     // blurRadius={10}
    //     // fadeDuration={1000}
    //     source={{
    //     width: 200,
    //     height: 300,
    //     uri: "https://picsum.photos/200/300"}}/>
    //   </TouchableHighlight> */}
    //   {/* <TouchableOpacity onPress={() =>  console.log('Image Tapped')}>
    //   <Image
    //     // blurRadius={10}
    //     // fadeDuration={1000}
    //     source={{
    //     width: 200,
    //     height: 300,
    //     uri: "https://picsum.photos/200/300"}}/>
    //   </TouchableOpacity> */}
    //   {/* <TouchableWithoutFeedback onPress={() =>  console.log('Image Tapped')}>
    //   <Image
    //     // blurRadius={10}
    //     // fadeDuration={1000}
    //     source={{
    //     width: 200,
    //     height: 300,
    //     uri: "https://picsum.photos/200/300"}}/>
    //   </TouchableWithoutFeedback>
    //   <StatusBar style="auto" /> */}
    // // </SafeAreaView>

// const containerStyle = { backgroundColor: "orange" };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
