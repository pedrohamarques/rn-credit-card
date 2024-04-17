import { Text, TouchableOpacity, View } from "react-native";

import { CreditCard } from "@components/credit-card";
import { Input } from "@components/input";

import { formatCreditCardNumber, formatExpiringDate } from "@utils/format";

import { styles } from "./styles";

import { usePayment } from "./payment.hook";

import { ACTION_KIND } from "./reducer";

export function Payment() {
    const {
        cardSide,
        state,
        handleFlipCard,
        showBackCard,
        showFrontCard,
        handleTyping,
    } = usePayment();
    return (
        <View style={styles.container}>
            <CreditCard cardSide={cardSide} data={state} />
            <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
                <Text>Inverter</Text>
            </TouchableOpacity>

            <View style={styles.form}>
                <Input
                    placeholder='Nome do titular'
                    onChangeText={event =>
                        handleTyping(event, ACTION_KIND.TYPING_NAME)
                    }
                    value={state.name}
                    onFocus={showFrontCard}
                />
                <Input
                    placeholder='Número do cartão'
                    keyboardType='numeric'
                    onChangeText={event =>
                        handleTyping(event, ACTION_KIND.TYPING_NUMBER)
                    }
                    maxLength={19}
                    value={formatCreditCardNumber(state.number)}
                    onFocus={showBackCard}
                />

                <View style={styles.inputInLine}>
                    <Input
                        placeholder='01/02'
                        style={styles.smallInput}
                        onChangeText={event =>
                            handleTyping(event, ACTION_KIND.TYPING_DATE)
                        }
                        value={formatExpiringDate(state.date)}
                        keyboardType='numeric'
                        maxLength={5}
                        onFocus={showBackCard}
                    />
                    <Input
                        placeholder='123'
                        style={styles.smallInput}
                        keyboardType='numeric'
                        onChangeText={event =>
                            handleTyping(event, ACTION_KIND.TYPING_CODE)
                        }
                        maxLength={3}
                        onFocus={showBackCard}
                    />
                </View>
            </View>
        </View>
    );
}
