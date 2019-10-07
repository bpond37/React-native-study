
import {createSwitchNavigator, createAppContainer } from 'react-navigation'

import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'
import {Text} from 'react-native'
import Main from './Main';
import MyPage from './MyPage';
import Login from './Login';
import Splash from './Splash';

const stackNav = createStackNavigator({
    Main:{screen:Main},
    MyPage:{screen:MyPage}
}
// ,{
//     defaultNavigationOptions:({navigation})=>{
//         return{
//             headerLeft:(
//                 <Text>dd</Text>
//             )
//         }
//     }
// }
)

const switchNav = createSwitchNavigator({
    Splash:{screen:Splash},
    Login:{screen:Login},
    Main:{screen:Main}
},{
    initialRouteName:'Splash'
})

const AppNav = createAppContainer(switchNav)

export default AppNav