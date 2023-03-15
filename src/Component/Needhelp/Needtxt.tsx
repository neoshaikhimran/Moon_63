import { Text, View, TouchableOpacity } from 'react-native';
import { ListRenderItem } from 'react-native';
import React from 'react';
import { Needhelp, INeed } from './Needhelp';
import { Needstyle } from './Needstyle';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';




export const Needtxt = () => {
    const navigation= useNavigation();
    const { t } = useTranslation();

    const onPressToNavigate=(navigatePath:string)=>{
        navigation.navigate(navigatePath)
    }

    return (
        <View style={Needstyle.newmaincon}>
            <View style={Needstyle.maincontainer}>
                {Needhelp.map((Needhelp) => {
                    return (
                        <TouchableOpacity onPress={(index) => onPressToNavigate(Needhelp.navigateTo)}>
                            <View style={Needstyle.innercon}>
                                <Text style={Needstyle.txtstyle}>{t(Needhelp.title)}?</Text>
                            </View>
                        </TouchableOpacity>

                    );
                })}
            </View>

        </View >


    )
};





