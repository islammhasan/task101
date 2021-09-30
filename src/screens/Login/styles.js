import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
  },
  switcherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: scale(200),
    height: verticalScale(35),
    backgroundColor: colors.white,
    elevation: 2,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    borderRadius: 50,
    overflow: 'hidden',
  },
  switcherBtn: {
    width: scale(100),
    height: verticalScale(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  activeSwitcher: {
    backgroundColor: colors.orange,
    overflow: 'visible',
  },
  switcherTxt: {
    color: colors.black,
    fontSize: moderateScale(16),
    paddingHorizontal: scale(5),
  },
  socialLoginContainer: {
    width: scale(140),
    flexDirection: 'row',
    marginTop: verticalScale(30),
    justifyContent: 'space-between',
  },
  switchContent: {
    marginTop: verticalScale(40),
    alignItems: 'center',
  },
  btnStyle: {
    marginTop: verticalScale(40),
  },
  toggleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: verticalScale(20),
  },
  toggleTxtStyle: {
    fontSize: moderateScale(16),
    color: colors.main,
  },
});
