import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../MeusComponentes";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Header}
            />
        </Stack.Navigator>
    )
}