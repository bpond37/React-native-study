import React ,{Component} from 'react'
import {View, Text, Button} from 'react-native'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

class Main extends Component {
  
  constructor(props){
    super(props)
    console.log(props)
    console.log("Main")
  }

  render(){
    return(
        <View>
            <Text>Main</Text>
            
            <Text>{this.props.user.username}</Text>
            {/* { this.props.user != null}?<Text>{this.props.user.username}</Text>:<View></View> */}
            <Button title=" sign out" onPress={this.signOutAsync} />
        </View>
    )
  }
  
  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };
}

    const mapStateToProps = (state) => {
      return {
        user: state.memberReducer.user
      }
    }
    
    export default connect(mapStateToProps)(Main)