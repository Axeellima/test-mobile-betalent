import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import {colors, fontFamily} from '../../global/theme';
const Header = () => {
  return (
    <View style={style.containerHeader}>
      <View style={style.content}>
        <View
          style={[
            style.card,
            {backgroundColor: colors.gray10, borderRadius: 45},
          ]}>
          <Text style={style.cardText}>BT</Text>
        </View>
        <TouchableHighlight
          underlayColor={colors.gray10}
          style={style.card}
          onPress={() => {}}>
          <Image
            source={require('../../assets/icons/bell.png')}
            style={style.image}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  containerHeader: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  image: {
    width: 40,
    height: 40,
  },
  cardText: {
    fontFamily: fontFamily.thin,
    color: colors.black,
    fontSize: 18,
  },
});

export default Header;
