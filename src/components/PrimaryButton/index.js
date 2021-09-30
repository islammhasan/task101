import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';

export const PrimaryButton = props => {
  const {btnTxt, style} = props;
  return (
    <TouchableOpacity {...props} style={[styles.btnStyle, style]}>
      <Text style={styles.btnTxtStyle} numberOfLines={1}>
        {btnTxt || 'Default Button!'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    width: scale(240),
    height: verticalScale(35),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(50),
    backgroundColor: colors.orange,
  },
  btnTxtStyle: {
    fontSize: moderateScale(16),
    color: colors.black,
  },
});
