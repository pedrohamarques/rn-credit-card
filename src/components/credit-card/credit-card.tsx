import { Text, View } from "react-native";
import Animated, { type SharedValue } from "react-native-reanimated";

import { useCreditCard } from "./credit-card.hook";

import { styles } from "./styles";

type CreditCardProps = {
    cardSide: SharedValue<number>;
};

export function CreditCard({ cardSide }: CreditCardProps) {
    const { frontAnimatedStyles, backAnimatedStyle } = useCreditCard({
        cardSide,
    });
    return (
        <View>
            <Animated.View
                style={[styles.card, styles.front, frontAnimatedStyles]}>
                <View style={styles.header}>
                    <View style={[styles.circle, styles.logo]} />
                    <Text>Meu Cartão</Text>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.name}>Pedro Almeida</Text>
                    <View style={styles.flag}>
                        <View style={[styles.circle, styles.red]} />
                        <View style={[styles.circle, styles.orange]} />
                    </View>
                </View>
            </Animated.View>

            <Animated.View
                style={[styles.card, styles.back, backAnimatedStyle]}>
                <View>
                    <Text style={styles.label}>Número do cartão</Text>
                    <Text style={styles.value}>1234 5678 9012 3456</Text>
                </View>

                <View style={styles.footer}>
                    <View>
                        <Text style={styles.label}>Validade</Text>
                        <Text style={styles.value}>01/02</Text>
                    </View>

                    <View>
                        <Text style={styles.label}>CVV</Text>
                        <Text style={styles.value}>123</Text>
                    </View>
                </View>
            </Animated.View>
        </View>
    );
}
