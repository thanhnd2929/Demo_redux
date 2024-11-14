import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SeeDocsScreen from '../screens/SeeDocsScreen';
import HomeScreen from '../screens/HomeScreen';
import FolderScreen from '../screens/FolderScreen';
import ReviewDocScreen from '../screens/ReviewDocScreen';
import ReleaseScreen from '../screens/ReleaseScreen';
import EcontractScreen from '../screens/EcontractScreen';
import MyDocScreen from '../screens/MyDocScreen';
import ResetPassScreen from '../screens/ResetPassScreen';
import ApprovedScreen from '../screens/ApprovedScreen';
import { Image, Text, View } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import CustomDrawerContent from './CustomDrawerContent';



const Drawer = createDrawerNavigator();

function CustomHeader() {
  return (
    <View style={{ width: '100%',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-betweens' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('../images/logo01.png')}
          style={{ width: 80, height: 80, resizeMode: 'contain' }}
        />
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>LDMS</Text>
      </View>

      <View style={{marginLeft: 140}}>
        <Image
          source={require('../images/lang-vi.png')}
          style={{ width: 40, height: 40, resizeMode: 'contain' }}
        />
      </View>
    </View>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1D50C9',
        },
      }}
    >
      <Drawer.Screen
        name="Folder"
        component={FolderScreen}
        options={{
          headerTitle: () => <CustomHeader />
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <CustomHeader />
        }} />
      <Drawer.Screen
        name="SeeDocs"
        component={SeeDocsScreen}
        options={{
          headerTitle: () => <CustomHeader />
        }}
      />
      <Drawer.Screen
        name="Approved"
        component={ApprovedScreen}
        options={{
          headerTitle: () => <CustomHeader />
        }}
      />
      <Drawer.Screen
        name="Review"
        component={ReviewDocScreen}
        options={{
          headerTitle: () => <CustomHeader />
        }}
      />
      <Drawer.Screen
        name="Release"
        component={ReleaseScreen}
        options={{
          headerTitle: () => <CustomHeader />
        }}
      />
      <Drawer.Screen
        name="Econtract"
        component={EcontractScreen}
        options={{
          headerTitle: () => <CustomHeader />
        }}
      />
      <Drawer.Screen
        name="MyDoc"
        component={MyDocScreen}
        options={{
          headerTitle: () => <CustomHeader />
        }}
      />
      <Drawer.Screen
        name="Pass"
        component={ResetPassScreen}
        options={{
          headerTitle: () => <CustomHeader />
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
