import { SafeAreaView } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

export default function Index() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}
