import React, {Component} from 'React'
import {View, Text} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {connect} from 'react-redux'
import axios from 'axios'


class Splash extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    
    componentDidMount(){
        console.log("componentDidMount")
        this.userAsync(this.props);
    }
    
    userAsync = async(props)=>{
        const userInfo = await AsyncStorage.getItem('USER_INFO')
        console.log("userInfo",userInfo)

        setTimeout(() => {
            if(userInfo){
                console.log(userInfo)
                this.props.checkLogin(userInfo, props)
            }else{
                props.navigation.navigate('Login')
            }
        }, 500);
    }

    render(){
        return(
            <View>
                <Text>Splash</Text>
            </View>
        )
    }
}

const fetchLogin = (userInfo,props) => {
    console.log("fetchlogin..................")
    console.log("userInfo",userInfo)
    return (dispatch) => {
        userObj = JSON.parse(userInfo)
        console.log(userObj)
        console.log(dispatch)
        console.log(props)
        // axios.post("http://192.168.41.38:8080/member/getUser", userObj)
    //   axios.post("http://192.168.41.68:8082/member/getMember", userObj)
      axios.post("http://172.20.10.2:8082/member/getMember", userObj)
    
        .then(res => {
            console.log(res.data)
            dispatch({type:'SUCCESS_LOGIN', payload:res.data})
            console.log(props)
                        
            props.navigation.navigate('Main')
        })
    }
}

const mapStateToProps = ({memberReducer}) => {
    console.log("mapStateToProps", memberReducer)
    return {user: memberReducer.user}
  }

const mapDispatchToProps = (dispatch) => {
    console.log("mapdispatchtoprops", dispatch)
    return {checkLogin: (userInfo, props) => dispatch(fetchLogin(userInfo, props))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Splash)

// const storageLogin=(props)=>{
//     console.log("storageLogin",props)
//     return(dispatch)=>{
//         console.log("storageloginreturn")
//         userAsync(props, dispatch);
        
//     }
// }

// const storageLogin=(props)=>{
//     console.log("storageLogin",props)
//     return(dispatch)=>{
//         console.log("storageloginreturn")
//         userAsync(props, dispatch);

//     }
// }

// const userAsync = async(props, dispatch)=>{
//     const userInfo = await AsyncStorage.getItem('USER_INFO')
//     console.log(userInfo)
//     console.log(props)
//     console.log(dispatch)

    


//     // fetchLogin(userInfo,props)

//     dispatch({type:'SUCCESS_LOGIN', payload:userInfo})
//     // this.setState(userInfo)
//     setTimeout(() => {
//         console.log(userInfo)
//         console.log(props)
//         userInfo?
//         fetchLogin(userInfo,props)
//         :
//         props.navigation.navigate('Login')
//         // props.navigation.navigate(userInfo? 'Main':'Login')
//     }, 500);


    // fetchLogin = (userObj,props) => {
    //     console.log("fetchlogin..................")
    //     return (dispatch) => {
    //       console.log(dispatch)
    //         axios.post("http://192.168.41.38:8080/member/getUser", userObj)
    //         .then(res => {
    //             console.log(res.data)
    //             dispatch({type:'SUCCESS_LOGIN', payload:res.data})
    //             console.log(props)
                         
    //             props.navigation.navigate('Main')
                
    //             const key="USER_INFO"
    //             AsyncStorage.setItem(key,JSON.stringify(userObj))
    //           .then(()=>{
    //               console.log("Item is stored..........")
    //               // this.setState({msg:'item is stored'})
      
    //           })
    //         })
    //     }
    //   }



// const mapStateToProps = ({memberReducer}) => {
//     console.log("mapStateToProps", memberReducer)
//     return {user: memberReducer.user}
//   }


// const mapDispatchToProps = (dispatch) => {
//     console.log("mapdispatchtoprops", dispatch)
//     return {checkLogin: (props) => dispatch(storageLogin(props))
//     }
//   }

// export default connect(mapStateToProps, mapDispatchToProps)(Splash)

