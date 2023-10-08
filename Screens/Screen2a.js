import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
function A() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.textView1}>LOGIN</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.view2_1}>
          <Image
            style={styles.image}
            source={require("../assets/avatar_user.png")}
          />
          <TextInput placeholder='Name' style={styles.input}></TextInput>
        </View>
        <View style={styles.view2_2}>
          <Image
            style={styles.image}
            source={require("../assets/lock.png")}
          />
          <TextInput placeholder='Password' style={styles.input}></TextInput>
          <Image
            style={styles.image}
            source={require("../assets/eye.png")}
          />
        </View>

      </View>
      <View style={styles.view3}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}> login </Text>
        </TouchableOpacity>
        <Text style={styles.textView3}>Forgot your password?</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient( #FBCB00 1000%, #BF9A00 0%)",

  },
  view1: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  view2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'

  },
  view2_1: {
    width: '330px',
    height: '50px',
    flexDirection: 'row',
    borderWidth: '1px',
    marginLeft: '10px',
    marginRight: '10px',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  view2_2: {
    width: '330px',
    height: '50px',
    flexDirection: 'row',
    borderWidth: '1px',
    marginLeft: '10px',
    marginRight: '10px',
    justifyContent: 'space-between',
    marginTop: '5px',
    alignItems: 'center'
  },
  view3: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textView1: {
    fontWeight: 'bold',
    fontSize: '40px'
  },
  image: {
    height: '32px',
    width: '32px',
    bottom: '5px'
  },
  input: {
    height: '100%',
    width: '90%',
    marginLeft: '5px',
    fontSize: '18px',
    lineHeight: '21.09px',
    fontFamily: 'Roboto'

  },
  button: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: 50,
    margin: 12,
    paddingVertical: 20,
    width: '91%'
  },
  button_text: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "normal",
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  textView3: {
    fontSize: 20,
    alignItems: 'center',
    lineHeight: '23,44px',
    fontWeight: 'bold'
  }
});
export default A;