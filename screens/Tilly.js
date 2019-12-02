import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Tilly extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Tilly is Cute!!!</Text>
            </View>
        );
    }
}
export default Tilly;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});