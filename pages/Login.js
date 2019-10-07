import React,{Component} from 'react'
import {
 
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import axios from 'axios'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

class Login extends Component {

  constructor(props){
    super(props)
    console.log(props)
    this.state = {uid:'Heo', pw:'12345678'}
}

  render(){

    return(
     <View>
       <Text>Login</Text>
       
       <Text>USERID</Text><TextInput type='text' value = {this.state.uid} onChangeText = {(text) => {this.setState({uid:text}) } } />
        <Text>USERPW</Text><TextInput type='text' value = {this.state.pw} onChangeText = {(text) => { this.setState({pw:text}) } } />
        <Button title='login' onPress={() => 
            
            {
              console.log("login button is clicked")
                this.props.doLogin(this.state,this.props)
            }
            }></Button>
     </View>
    )
  }
}

const fetchLogin = (userObj,props) => {
  console.log("fetchlogin..................")
  return (dispatch) => {
    console.log(dispatch)
      // axios.post("http://192.168.41.68:8080/member/getUser", userObj)
      axios.post("http://172.20.10.2:8082/member/getMember", userObj)
      .then(res => {
          console.log(res.data)
          dispatch({type:'SUCCESS_LOGIN', payload:res.data})
          console.log(props)
          
          props.navigation.navigate('Main')

          const key="USER_INFO"
          AsyncStorage.setItem(key,JSON.stringify(userObj))
        .then(()=>{
            console.log("Item is stored..........")
            // this.setState({msg:'item is stored'})

        })
      })
  }
}

const mapStateToProps = ({memberReducer}) => {
  console.log("mapStateToProps", memberReducer)
  return {user: memberReducer.user}
}

const mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps",dispatch)
  return {doLogin: (userObj,props) => dispatch(fetchLogin(userObj,props))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)