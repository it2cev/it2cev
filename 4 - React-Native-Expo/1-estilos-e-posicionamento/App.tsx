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
    container:{flex:1,width:200,height:200,backgroundColor:'black'},
    box1:{width:200,height:200,backgroundColor:'white'},
    box2:{width:200,height:200,backgroundColor:'red'},
    box3:{width:200,height:200,backgroundColor:'yellow'},
})

