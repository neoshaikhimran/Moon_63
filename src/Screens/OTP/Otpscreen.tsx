import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import { Otpstyle } from "./Otpstyle";
import Tabnavigation from "../../Navigation/Tabnavigation";

const Otp = () => {
    const [selectedTab, setSelectedTab] = useState(3);
    return (
        <View style={Otpstyle.Maincontainer}>
            <View style={Otpstyle.Innermain}>
                <View style={Otpstyle.imgstylecon}>
                    <View style={Otpstyle.imgcontiner}>
                        <Image
                            style={Otpstyle.tinyLogo}
                            source={{
                                uri: 'https://reactnative.dev/img/tiny_logo.png',
                            }}
                        />

                    </View>

                </View>
                <View style={Otpstyle.textcon}>
                    <Text style={Otpstyle.HeaderTxt}>OM</Text>
                    <Text style={Otpstyle.UserTxt}>User ID : OM</Text>
                    <Text style={Otpstyle.Switchtxt}>Switch Account</Text>
                </View>

            </View>
            <Tabnavigation/>
            

        </View>
    )
}

export default Otp;
