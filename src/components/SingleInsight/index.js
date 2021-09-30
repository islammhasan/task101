import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {strings} from '../../strings';

export const SingleInsight = ({title, num}) => {
  return (
    <View style={styles.singleColStyle}>
      <Text numberOfLines={1} style={styles.colTitle}>
        {title}
      </Text>
      <Text numberOfLines={1} style={styles.colInfo}>
        {num || strings.defaultInsightNum}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  singleColStyle: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  colTitle: {
    fontSize: moderateScale(18),
    color: colors.secondary,
  },
  colInfo: {
    fontSize: moderateScale(18),
    color: colors.main,
    fontWeight: '700',
    marginTop: verticalScale(10),
  },
});
