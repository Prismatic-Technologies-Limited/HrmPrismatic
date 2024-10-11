import * as IMG from 'assets/images';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';

const ServiceCard = ({
  item,
  backgroundColor,
  index,
  style,
  onPress = () => {},
  onPressCart = () => {},
}) => {
  const {t} = i18n;
  const Icon = item.icon;
  return (
    <TouchableOpacity
<<<<<<< HEAD
      onPress={onPress}
      style={[styles.container, {backgroundColor}]}>
      <View style={styles.bg}>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            padding: mvs(10),
          }}>
          <Image
            source={item?.image}
=======
      onPress={onPress}>
     <View style={styles.container}>
     <Image
            source={
              item?.icon ? {uri: `${item?.icon}`} : IMG.serviceAntiqueicon
            }
>>>>>>> qadirbranch
            resizeMode="cover"
            style={{marginTop: mvs(10)}}
          />
            <Medium
              label={item?.title}
              numberOfLines={2}
              color={colors.primary}
              fontSize={mvs(14)}
<<<<<<< HEAD
              style={{marginTop: mvs(10), textAlign: 'center'}}
=======
              // style={{marginTop: mvs(5), textAlign: 'center'}}
>>>>>>> qadirbranch
            />
     </View>
    </TouchableOpacity>
  );
};
export default React.memo(ServiceCard);
const styles = StyleSheet.create({
  container: {
    height: mvs(123),
    width: '45%',
    borderRadius: mvs(15),
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center',
    // marginBottom: mvs(20),
  },
  row: {alignItems: 'flex-end'},
  bg: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  btn: {
    backgroundColor: colors.white,
    height: mvs(28),
    width: mvs(96),
    borderRadius: mvs(10),
    ...colors.shadow,
  },
  btnTxt: {color: colors.primary, fontSize: mvs(12), lineHeight: mvs(16)},
  imgStyle: {borderRadius: mvs(15)},
});


// import * as IMG from 'assets/images';
// import React from 'react';
// import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
// import i18n from 'translation';
// import Medium from 'typography/medium-text';
// import Regular from 'typography/regular-text';
// import {colors} from '../../../config/colors';
// import {mvs} from '../../../config/metrices';

// const ServiceCard = ({
//   item,
//   backgroundColor,
//   index,
//   style,
//   onPress = () => {},
//   onPressCart = () => {},
// }) => {
//   const {t} = i18n;
//   const Icon = item.icon;
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={[styles.container, {backgroundColor}]}>
//       <View style={styles.bg}>
//         <View
//           style={{
//             alignSelf: 'center',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flex: 1,
//             padding: mvs(10),
//           }}>
//           <Image
//             source={
//               item?.icon ? {uri: `${item?.icon}`} : IMG.serviceAntiqueicon
//             }
//             resizeMode="cover"
//             style={{height: mvs(36), width: mvs(36)}}
//           />

//           <View style={{flex: 1}}>
//             <Medium
//               label={item?.title}
//               numberOfLines={2}
//               color={colors.primary}
//               fontSize={mvs(14)}
//               style={{marginTop: mvs(5), textAlign: 'center'}}
//             />
//             <Regular
//               label={item?.desc}
//               fontSize={mvs(12)}
//               style={{textAlign: 'center'}}
//             />
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };
// export default React.memo(ServiceCard);
// const styles = StyleSheet.create({
//   container: {
//     height: mvs(123),
//     width: '45%',
//     borderRadius: mvs(15),
//     marginBottom: mvs(20),
//   },
//   row: {alignItems: 'flex-end'},
//   bg: {
//     width: '100%',
//     height: '100%',
//     justifyContent: 'flex-end',
//   },
//   btn: {
//     backgroundColor: colors.white,
//     height: mvs(28),
//     width: mvs(96),
//     borderRadius: mvs(10),
//     ...colors.shadow,
//   },
//   btnTxt: {color: colors.primary, fontSize: mvs(12), lineHeight: mvs(16)},
//   imgStyle: {borderRadius: mvs(15)},
// });
