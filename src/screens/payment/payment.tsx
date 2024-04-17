import { Text, TouchableOpacity, View } from "react-native";

import { CreditCard } from "@components/credit-card";

import { styles } from "./styles";

import { usePayment } from "./payment.hook";

export function Payment() {
    const { cardSide, handleFlipCard } = usePayment();
    return (
        <View style={styles.container}>
            <CreditCard cardSide={cardSide} />
            <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
                <Text>Inverter</Text>
            </TouchableOpacity>
        </View>
    );
}
