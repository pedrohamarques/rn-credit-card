import { Text, TouchableOpacity, View } from "react-native";

import { CreditCard } from "@components/credit-card";
import { Input } from "@components/input";

import { formatCreditCardNumber, formatExpiringDate } from "@utils/format";

import { styles } from "./styles";

import { usePayment } from "./payment.hook";

export function Payment() {
    const {
        cardSide,
        handleFlipCard,
        showBackCard,
        showFrontCard,
        setCode,
        setDate,
        setName,
        setNumber,
        name,
        number,
        date,
        code,
    } = usePayment();
    return (
        <View style={styles.container}>
            <CreditCard
                cardSide={cardSide}
                data={{ name, number, date, code }}
            />
            <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
                <Text>Inverter</Text>
            </TouchableOpacity>

            <View style={styles.form}>
                <Input
                    placeholder='Nome do titular'
                    onChangeText={setName}
                    onFocus={showFrontCard}
                />
                <Input
                    placeholder='Número do cartão'
                    keyboardType='numeric'
                    onChangeText={setNumber}
                    maxLength={19}
                    value={formatCreditCardNumber(number)}
                    onFocus={showBackCard}
                />

                <View style={styles.inputInLine}>
                    <Input
                        placeholder='01/02'
                        style={styles.smallInput}
                        onChangeText={setDate}
                        value={formatExpiringDate(date)}
                        keyboardType='numeric'
                        maxLength={5}
                        onFocus={showBackCard}
                    />
                    <Input
                        placeholder='123'
                        style={styles.smallInput}
                        keyboardType='numeric'
                        onChangeText={setCode}
                        maxLength={3}
                        onFocus={showBackCard}
                    />
                </View>
            </View>
        </View>
    );
}
