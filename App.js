import { AuthProvider } from './src/contexts/AuthContext';
import RootNavigation from './src/navigation';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootNavigation />
      </GestureHandlerRootView>
    </AuthProvider>
  );
};

export default App;
