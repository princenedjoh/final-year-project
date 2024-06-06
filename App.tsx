import { StyleSheet } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications'
import MainStack from './src/navigation/stacks/MainStack';
import { AuthProvider } from './src/context/authcontext';

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <MainStack />
      </AuthProvider>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
