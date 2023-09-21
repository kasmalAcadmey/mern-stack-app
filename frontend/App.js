import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigation';
import { Provider } from "react-redux";
import { store } from './store';
import { ModalPortal } from 'react-native-modals';
import UserContex from './UserContex';
import Tes from './screens/Tes';
export default function App() {
  return (
    <>
      <Provider store={store} >
        {/* <UserContex>
     
        </UserContex> */}
        <StackNavigator/>
      </Provider>
      <StatusBar style="auto" />
      <ModalPortal/>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
});
