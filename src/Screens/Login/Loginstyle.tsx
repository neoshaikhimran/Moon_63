import { StyleSheet } from 'react-native';


export const Loginstyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 20,
        height: '30%',
        width: '40%'
    },
    inputView: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 10,
        width: "70%",
        height: 45,
        marginTop:"5%",
        justifyContent:"flex-start",

        
    },
    
    forgot_button: {
        height: 30,
        marginTop:20,
        marginBottom: 30,
        color:"blue"
    },
    loginBtn: {
        width: "80%",
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "black",
    },
    loginText: {
        color: 'white'
    },
    butonstyel:{
        width:'100%',
        alignItems:"center"
    },
    errortxt:{
        color:"red",

    },
    sucesstxt:{
        color:"green"
            }

});
