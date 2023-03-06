import React from 'react';

import { TextInput, View, Text } from 'react-native';
import { Textstyle } from './Textstyle';

const Textinputfield = ({ placeholder,value,secureTextEntry,onChangeText,label }) => {

    return (
        <View style={Textstyle.containerStyle}> 
            <Text style={Textstyle.labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={Textstyle.inputStyle}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={'black'}
            />
        </View>

    );

};
export default Textinputfield;
