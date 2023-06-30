import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabRoutes from './tab.routes';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{title: ''}}>
        <Stack.Screen 
        name="profile" 
        component={Profile}
        />
    </Stack.Navigator>
  )
}

export default StackRoutes