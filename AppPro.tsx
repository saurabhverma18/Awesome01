import React from 'react'

import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    useColorScheme
} from'react-native'

function AppPro(): JSX.Element{
    const isdarkmode= useColorScheme() === 'dark'
    return(
       <View style={styles.container}>
        <Text style={isdarkmode?styles.whiteText : styles.darkText}>hello World@!</Text>

       </View> 
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    whiteText:{
        color: '#FFFFFF'
    },
    darkText:{
        color:'#000000'
    }
})


export default AppPro;