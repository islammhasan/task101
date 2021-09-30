import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';

export const PrimaryInput = props => {
  const [isFocused, SetIsFocused] = useState(false);
  const {value} = props;
  return (
    <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
      <TextInput
        {...props}
        value={value}
        placeholderTextColor={colors.secondary}
        onFocus={() => SetIsFocused(!isFocused)}
        onBlur={() => SetIsFocused(!isFocused)}
        style={[styles.inputStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: scale(280),
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
  },
  inputStyle: {
    fontSize: moderateScale(16),
  },
  inputFocused: {
    borderBottomColor: colors.main,
  },
});
