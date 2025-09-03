import {View,StyleSheet} from 'react-native';


export default function App (){

    return(
        <View style={styles.container}>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <View style={styles.box3}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:'black',flexDirection:'column',justifyContent:'center'},
    box1:{width:100,height:100,backgroundColor:'blue'},
    box2:{width:100,height:100,backgroundColor:'red'},
    box3:{width:100,height:100,backgroundColor:'yellow'},
})
