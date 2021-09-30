import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';

export const ScreenTitle = ({title, style}) => {
  return (
    <Text numberOfLines={1} style={[styles.profileTitle, style]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  profileTitle: {
    color: colors.main,
    fontSize: moderateScale(28),
    fontWeight: '800',
    marginStart: scale(20),
  },
});
