
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
} from "react-native";
import Button from "../../Component/Button";
import Textinputfield from "../../Component/TextInput";
import { LogStackParamList } from "../../Navigation/Authnavigation";
import { Loginstyle } from "./Loginstyle";

const Login = () => {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    const [isValidpass, setIsValidpass] = useState(false);
    const [messagepass, setMessagepass] = useState('');
    const [login, setLogin] = useState(false);

    const checkTextInput = () => {
        if (email === " " || password === " ") {
            Alert.alert('Please Enter Required field');
            return;
        }
        _storeData()
        Alert.alert('Success');
    };

    const _storeData = async () => {
        try {
            await AsyncStorage.setItem(
                'Keyvalue',
                'true',
            );
        } catch (error) {
            // Error saving data
        }
    };

    const emailRegex = /\S+@\S+\.\S+/;
    const validateEmail = (email) => {
        if (emailRegex.test(email)) {
            setIsValid(true);
            setMessage('Your email looks good!');
            setEmail(email)
        } else {
            setIsValid(false);
            setMessage('Please enter a valid email!');
        }
    };

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const passwordvalidate = (password) => {
        if (passRegex.test(password)) {
            setIsValidpass(true);
            setMessagepass('Your Password looks good!');
            setPassword(password)
        } else {
            setIsValidpass(false);
            setMessagepass('Please enter a Strong Password!');
        }

    }

    const navigation = useNavigation<LogStackParamList>();
    const Forgetscreen = () => {
        navigation.navigate('ForgotPasswordScreen')
    }

    return (
        <View style={Loginstyle.container}>
            <Image style={Loginstyle.image} source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAts5OQU2G6UBCh1SQPfbB4ef2u85q1B_Bg&usqp=CAU',
            }} />
            <View style={Loginstyle.inputView}>

                <Textinputfield
                    placeholder={'Email'}
                    secureTextEntry={false}
                    onChangeText={(email) => validateEmail(email)}

                />

            </View>
            <Text >{isValid == false ? <Text style={Loginstyle.errortxt}>{message} </Text> : <Text style={Loginstyle.sucesstxt}>{message} </Text>}</Text>
            <View style={Loginstyle.inputView}>

                <Textinputfield
                    placeholder={'Password'}
                    secureTextEntry={true}
                    onChangeText={(password) => passwordvalidate(password)} />

            </View>
            <Text >{isValidpass == false ? <Text style={Loginstyle.errortxt}>{messagepass} </Text> : <Text style={Loginstyle.sucesstxt}>{messagepass} </Text>}</Text>
            <TouchableOpacity onPress={Forgetscreen}>
                <Text style={Loginstyle.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Loginstyle.butonstyel} onPress={checkTextInput}>
                <Button />
            </TouchableOpacity>
        </View>
    );
}

export default Login;

function setLogin(arg0: boolean) {
    throw new Error("Function not implemented.");
}
