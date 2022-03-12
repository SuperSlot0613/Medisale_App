import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import CustomDrawerContent from "./Screens/CustomDrawerContent";
import Header from "./Component/Header";
import tabs from "./constants/tabs";
import Orders from "./Screens/Orders";
import WishList from "./Screens/WishList";
import Elements from "./Screens/Elements";
import Register from "./Screens/Register";
import useAuth from "./Hooks/useAuth";
import OnboardingScreen from "./Screens/OnboardingScreen";
import ProductScreen from "./Screens/ProductScreen";
import ItemDetails from "./Component/ItemDetails";
import BuyScreen from "./Screens/BuyScreen";
import MapScreen from "./Screens/MapScreen";
import { theme } from "./src/core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
} from "./src/screens";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import OptionLogin from "./src/screens/OptionLogin";
import SellerLogin from "./src/screens/SellerLogin";
import StartScreen2 from "./src/screens/StartScreen2";
import Instruction from "./src/screens/Instruction";
import CameraScan from "./src/screens/CameraScan";
import HomePage from "./SellerPages/HomePage";
import {
  Feather,
  AntDesign,
  MaterialIcons,
  SimpleLineIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import DeliveryPage from "./Component/DeliveryPage";
import UploadImage from "./Component/UploadImage";
import AddNewAddress from "./Component/AddNewAddress";
import Loader from "./src/components/Loader";
import ProfilePage from "./SellerPages/ProfilePage";
// import CardScan from "./src/screens/CardScan";

const { width } = Dimensions.get("screen");

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              navigation={navigation}
              scene={scene}
              tabs={tabs.categories}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        options={{
          header: ({ navigation, scene }) => (
            <Header
              black
              title="Product"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
        name="ProductScreen"
        component={ProductScreen}
      />
      <Stack.Screen
        options={{
          header: ({ navigation, scene }) => (
            <Header
              black
              title="Item Details"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
        name="ItemDetails"
        component={ItemDetails}
      />
      <Stack.Screen
        options={{
          cardStyle: { backgroundColor: "#278591" },
          headerStyle: { backgroundColor: "#278591", color: "white" },
          headerTitle: "Delivery",
          headerBackTitleStyle: { color: "white" },
          headerTitleAlign: "center",
          headerTransparent: false,
          headerText: true,
        }}
        name="Delivery"
        component={DeliveryPage}
      />
      <Stack.Screen
        options={{
          cardStyle: { backgroundColor: "#278591" },
          headerStyle: { backgroundColor: "#278591", color: "white" },
          headerTitle: "Add Address",
          headerBackTitleStyle: { color: "white" },
          headerTitleAlign: "center",
          headerTransparent: false,
          headerText: false,
        }}
        name="AddAddress"
        component={AddNewAddress}
      />
      <Stack.Screen
        options={{
          cardStyle: { backgroundColor: "#278591" },
          headerStyle: { backgroundColor: "#278591", color: "white" },
          headerTitle: "Delivery",
          headerBackTitleStyle: { color: "white" },
          headerTitleAlign: "center",
          headerTransparent: false,
          headerText: false,
        }}
        name="Image Upload"
        component={UploadImage}
      />
      <Stack.Screen
        name="MapScreen"
        options={{
          headerShown: false,
        }}
        component={MapScreen}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="YourAccount"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="YourAccount"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              black
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function LoginStack(props) {
  return (
    <Provider theme={theme}>
      <Stack.Navigator
        initialRouteName="OptionLogin"
        screenOptions={{
          headerShown: false,
          drawerContent: false,
          drawer: false,
        }}
      >
        <Stack.Screen name="OptionLogin" component={OptionLogin} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="StartScreen2" component={StartScreen2} />
        <Stack.Screen
          options={{ headerShown: true, headerTitleAlign: "center" }}
          name="SellerLogin"
          component={SellerLogin}
        />
        <Stack.Screen
          options={{ headerShown: true, headerTitleAlign: "center" }}
          name="Instruction"
          component={Instruction}
        />
        <Stack.Screen
          options={{ headerShown: true, headerTitleAlign: "center" }}
          name="CameraScan"
          component={CameraScan}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
        <Stack.Screen name="SellerPages" component={TabNavigaytor} />
        <Stack.Screen
          name="Loader"
          options={{
            headerShown: false,
          }}
          component={Loader}
        />
      </Stack.Navigator>
    </Provider>
  );
}

function TabNavigaytor() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <Feather name="home" size={24} color={color} />;
          } else if (route.name === "Orders") {
            return <FontAwesome name="first-order" size={24} color={color} />;
          } else if (route.name === "Chat") {
            return (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={24}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            return <AntDesign name="user" size={24} color={color} />;
          }
        },
        tabBarActiveTintColor: "crimson",
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Group>
        <Tab.Screen
          name="Home"
          options={{
            drawer: false,
            header: ({ navigation, scene }) => (
              <Header
                title="Home"
                search
                navigation={navigation}
                scene={scene}
              />
            ),
            cardStyle: { backgroundColor: "#F8F9FE" },
          }}
          component={HomePage}
        />
        <Tab.Screen
          options={{
            header: ({ navigation, scene }) => (
              <Header title="Profile" navigation={navigation} scene={scene} />
            ),
            cardStyle: { backgroundColor: "#F8F9FE" },
          }}
          name="Profile"
          component={ProfilePage}
        />
        <Tab.Screen
          options={{
            header: ({ navigation, scene }) => (
              <Header title="Chat" navigation={navigation} scene={scene} />
            ),
            cardStyle: { backgroundColor: "#F8F9FE" },
          }}
          name="Chat"
          component={HomePage}
        />
        <Tab.Screen
          options={{
            header: ({ navigation, scene }) => (
              <Header title="Orders" navigation={navigation} scene={scene} />
            ),
            cardStyle: { backgroundColor: "#F8F9FE" },
          }}
          name="Orders"
          component={HomePage}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

const Menu = () => {
  const { user, isFirstLaunch } = useAuth();

  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) =>
        user !== null && <CustomDrawerContent {...props} />
      }
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      screenOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName={
        user === null && !isFirstLaunch ? "OnboardingScreen" : "Home"
      }
    >
      {user !== null ? (
        <>
          <Drawer.Screen
            options={{
              headerShown: false,
            }}
            name="HomeScreen"
            component={HomeStack}
          />
          <Drawer.Screen
            options={{
              headerShown: false,
            }}
            name="YourAccount"
            component={ProfileStack}
          />
          <Drawer.Screen
            options={{
              header: ({ navigation, scene }) => (
                <Header
                  black
                  title="Recommended"
                  navigation={navigation}
                  scene={scene}
                />
              ),
              cardStyle: { backgroundColor: "#FFFFFF" },
              headerTransparent: true,
            }}
            name="Recommended"
            component={Elements}
          />
          <Drawer.Screen
            options={{
              header: ({ navigation, scene }) => (
                <Header
                  black
                  title="Your Orders"
                  navigation={navigation}
                  scene={scene}
                />
              ),
              cardStyle: { backgroundColor: "#FFFFFF" },
              headerTransparent: true,
            }}
            name="YourOrders"
            component={Orders}
          />
          <Drawer.Screen
            options={{
              header: ({ navigation, scene }) => (
                <Header
                  black
                  title="Your WishList"
                  navigation={navigation}
                  scene={scene}
                />
              ),
              cardStyle: { backgroundColor: "#FFFFFF" },
              headerTransparent: true,
            }}
            name="YourWishList"
            component={WishList}
          />
          <Drawer.Screen
            options={{
              header: ({ navigation, scene }) => (
                <Header
                  black
                  title="Buy Again"
                  navigation={navigation}
                  scene={scene}
                />
              ),
              cardStyle: { backgroundColor: "#FFFFFF" },
              headerTransparent: true,
            }}
            name="BuyAgain"
            component={BuyScreen}
          />
        </>
      ) : (
        <>
          {!isFirstLaunch ? (
            <Drawer.Screen
              options={{
                headerShown: false,
              }}
              name="LoginPage"
              component={LoginStack}
            />
          ) : (
            <Drawer.Screen
              options={{
                headerShown: false,
              }}
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
        </>
      )}
    </Drawer.Navigator>
  );
};

export default Menu;

const styles = StyleSheet.create({});