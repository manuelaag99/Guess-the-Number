import { Pressable, Text, TextInput, View } from "react-native";

export default function InitialGameScreen () {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 60  }}>
            <TextInput style={{ width: "100%", height: 50, borderColor: "black", borderWidth: 1, borderRadius: 9 }} />
            <View style={{ justifyContent: "space-between", flexDirection: "row", width: "100%", marginVertical: 10 }}>
                <Pressable>
                    <Text>
                        Reset
                    </Text>
                </Pressable>
                <Pressable>
                    <Text>
                        Confirm
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}