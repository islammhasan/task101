import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.light,
  },
  titleStyle: {
    alignSelf: 'flex-start',
    marginBottom: verticalScale(20),
  },
  infoContainer: {
    alignItems: 'center',
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(30),
    backgroundColor: colors.white,
    borderBottomEndRadius: moderateScale(25),
    borderBottomStartRadius: moderateScale(25),
    elevation: 2,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  profilePicStyle: {
    width: scale(100),
    height: verticalScale(100),
    borderRadius: moderateScale(100),
  },
  userNameText: {
    fontSize: moderateScale(22),
    marginVertical: verticalScale(10),
    color: colors.main,
    fontWeight: '700',
  },
  infoText: {
    fontSize: moderateScale(18),
    marginTop: verticalScale(5),
    color: colors.secondary,
  },
  detailsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: verticalScale(30),
  },
  listStyle: {
    paddingVertical: verticalScale(20),
    alignSelf: 'center',
  },
  modelStyle: {
    width: scale(140),
    height: verticalScale(180),
    borderRadius: moderateScale(10),
    marginHorizontal: scale(5),
  },
  separatorStyle: {
    height: verticalScale(10),
  },
});
