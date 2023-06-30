import { createDrawerNavigator } from '@react-navigation/drawer';

import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();


const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{title: ''}}>
        <Drawer.Screen 
          name="home" 
          component={TabRoutes}
          options = {{
              drawerLabel: 'Accueil'
          }} 
        />

        <Drawer.Screen 
          name="profile" 
          component={StackRoutes}
          options = {{
              drawerLabel: 'Mon Profile'
          }} 
        />
    </Drawer.Navigator>
  )
}

export default DrawerRoutes