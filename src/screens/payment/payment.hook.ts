import { useReducer } from "react";
import { useSharedValue } from "react-native-reanimated";

import { CARD_SIDE } from "@constants/credit-card";

import { ACTION_KIND, cardDataReducer } from "./reducer";

import type { CardDataProps } from "@typings/data";

const initialCardState: CardDataProps = {
    code: "",
    date: "",
    name: "",
    number: "",
};

export function usePayment() {
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

    function handleTyping(data: string, identifier: ACTION_KIND) {
        dispatch({ type: identifier, payload: data });
    }

    const [state, dispatch] = useReducer(cardDataReducer, initialCardState);

    return {
        cardSide,
        handleFlipCard,
        showFrontCard,
        showBackCard,
        handleTyping,
        state,
    };
}
