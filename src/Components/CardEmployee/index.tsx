import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Animated,
  Easing,
} from 'react-native';
import {Employee} from '../../interfaces/employee';
import {colors, fontFamily} from '../../global/theme';
import formatDateToBRLocale from '../../utils/formatDate';
import formatPhoneNumber from '../../utils/formatPhone';
import {useMemo, useRef, useState} from 'react';

type CardEmployeeProps = {
  item: Employee;
  index: number;
  seeInformations: boolean;
  lastIndex?: boolean;
  handleSelectEmployee: (n: number) => void;
};

const CardEmployee = ({
  item,
  index,
  seeInformations,
  lastIndex,
  handleSelectEmployee,
}: CardEmployeeProps) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [display, setDisplay] = useState<'none' | 'flex'>('none');

  useMemo(() => {
    if (seeInformations) {
      setDisplay('flex');
      Animated.timing(animation, {
        toValue: seeInformations ? 1 : 0,
        duration: 350,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.ease),
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: seeInformations ? 1 : 0,
        duration: 350,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.ease),
      }).start();

      setTimeout(() => {
        setDisplay('none');
      }, 300);
    }
  }, [seeInformations]);

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  return (
    <View
      style={[
        style.contentCard,
        !lastIndex && {borderBottomWidth: 1, borderColor: colors.gray10},
      ]}>
      <View style={style.row}>
        <View style={style.photoView}>
          <Image source={{uri: item.image}} style={style.image} />
        </View>
        <View style={style.nameView}>
          <Text style={style.name}>{item.name}</Text>
        </View>
        <TouchableHighlight
          underlayColor={colors.gray10}
          style={style.actionView}
          onPress={() => handleSelectEmployee(index)}>
          <Image
            source={require('../../assets/icons/chevron-down.png')}
            style={{transform: [{rotate: seeInformations ? '180deg' : '0deg'}]}}
          />
        </TouchableHighlight>
      </View>

      <Animated.View
        style={[
          style.informationsView,
          {
            height: animatedHeight ? animatedHeight : 0,
            overflow: 'hidden',
            display: display,
          },
        ]}>
        {seeInformations && (
          <>
            <View style={style.informationsRowView}>
              <Text style={style.informationsTextRegular}>Cargo</Text>
              <Text style={style.informationsTextThin}>{item.job}</Text>
            </View>
            <View style={style.informationsRowView}>
              <Text style={style.informationsTextRegular}>
                Data de admissão
              </Text>
              <Text style={style.informationsTextThin}>
                {item.admission_date
                  ? formatDateToBRLocale(item.admission_date)
                  : new Date().toLocaleDateString('pt-BR')}
              </Text>
            </View>
            <View style={style.informationsRowView}>
              <Text style={style.informationsTextRegular}>Telefone</Text>
              <Text style={style.informationsTextThin}>
                {item.phone ? formatPhoneNumber(item.phone) : 'Sem telefone'}
              </Text>
            </View>
          </>
        )}
      </Animated.View>
    </View>
  );
};
const style = StyleSheet.create({
  contentCard: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'column',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    gap: '9.5%',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },
  name: {
    fontFamily: fontFamily.thin,
    fontSize: 16,
  },
  photoView: {
    alignItems: 'center',
    width: '10%',
  },

  nameView: {
    justifyContent: 'center',
    height: 35,
    width: '60%',
  },

  actionView: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: '9%',
  },
  informationsView: {
    height: 'auto',
    marginTop: 15,
    gap: 10,
  },
  informationsRowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  informationsTextRegular: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
  },
  informationsTextThin: {
    fontFamily: fontFamily.thin,
    fontSize: 16,
  },
});
export default CardEmployee;
