import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';

export const LoginIcon = props => {
  const {img} = props;
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={styles.IconContainer}>
      <Image style={styles.imgStyle} source={img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  IconContainer: {
    width: scale(30),
    height: verticalScale(30),
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(30),
  },
  imgStyle: {
    width: scale(15),
    height: verticalScale(15),
  },
});
