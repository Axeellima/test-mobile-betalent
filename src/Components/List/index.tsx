import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Employee} from '../../interfaces/employee';
import CardEmployee from '../CardEmployee';
import {colors, fontFamily} from '../../global/theme';
import {useCallback, useState} from 'react';

type ListProps = {
  data: Employee[];
};

const List = ({data}: ListProps) => {
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null);

  const handleSelectEmployee = useCallback(
    (n: number) => {
      if (n === selectedEmployee) setSelectedEmployee(null);
      else setSelectedEmployee(n);
    },
    [selectedEmployee],
  );
  return (
    <FlatList
      style={style.listStyle}
      ListHeaderComponentStyle={style.listHeader}
      ListHeaderComponent={
        <View style={[style.listHeader, {borderBottomWidth: 0}]}>
          <Text style={[style.textListHeader, {width: '10%'}]}>Foto</Text>
          <Text style={[style.textListHeader, {width: '60%'}]}>Nome</Text>
          <Text style={[style.textListHeader, {width: '8%', fontSize: 18}]}>
            {'\u2022'}
          </Text>
        </View>
      }
      keyExtractor={(_, index) => index.toString()}
      data={data}
      renderItem={i => {
        return (
          <CardEmployee
            item={i.item}
            index={i.index}
            seeInformations={selectedEmployee === i.index}
            lastIndex={i.index + 1 === data.length}
            handleSelectEmployee={handleSelectEmployee}
          />
        );
      }}
    />
  );
};
const style = StyleSheet.create({
  listHeader: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.gray5,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textListHeader: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
  },
  listStyle: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.gray10,
    borderRadius: 8,
  },
});
export default List;
