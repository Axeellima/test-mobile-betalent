import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import {style} from './HomeScreen.style';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import {fontFamily} from '../global/theme';
import List from '../Components/List';
import getAllEmployees from '../services/employees';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {Employee} from '../interfaces/employee';

const HomeScreen = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  const [search, setSearch] = useState<string>('');

  const setEmployeesData = async () => {
    let res = await getAllEmployees();
    if (res.data) {
      setEmployees(res.data);
    }
    setLoading(false);
  };
  const filterEmployeesData = useCallback(
    (search: string) => {
      let searchLowerCase = search.toLowerCase();
      let filterEmployees = employees.filter(
        employee =>
          employee.job.toLowerCase().includes(searchLowerCase) ||
          employee.name.toLowerCase().includes(searchLowerCase) ||
          employee.admission_date.toLowerCase().includes(searchLowerCase) ||
          employee.phone.toLowerCase().includes(searchLowerCase),
      );

      setFilteredEmployees(filterEmployees);
    },
    [search, filteredEmployees],
  );

  useEffect(() => {
    setEmployeesData();
  }, []);

  useMemo(() => {
    filterEmployeesData(search);
  }, [search]);

  return (
    <SafeAreaView style={style.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={style.container}>
        <Header />
        <View style={{paddingHorizontal: 20, paddingTop: 30}}>
          <Text style={{fontFamily: fontFamily.regular, fontSize: 20}}>
            Funcionários
          </Text>
          <SearchBar onChange={t => setSearch(t)} />
          <List
            data={filteredEmployees.length ? filteredEmployees : employees}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
