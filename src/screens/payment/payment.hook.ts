import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";

import { CARD_SIDE } from "@constants/credit-card";

export function usePayment() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [date, setDate] = useState("");
    const [code, setCode] = useState("");

    const cardSide = useSharedValue(CARD_SIDE.front);

    function showFrontCard() {
        cardSide.value = CARD_SIDE.front;
    }

    function showBackCard() {
        cardSide.value = CARD_SIDE.back;
    }

    function handleFlipCard() {
        if (cardSide.value === CARD_SIDE.front) {
            showBackCard();
        } else {
            showFrontCard();
        }
    }

    return {
        cardSide,
        name,
        number,
        date,
        code,
        handleFlipCard,
        showFrontCard,
        showBackCard,
        setName,
        setDate,
        setCode,
        setNumber,
    };
}
