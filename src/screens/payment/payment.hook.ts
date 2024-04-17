import { useSharedValue } from "react-native-reanimated";
import { CARD_SIDE } from "@constants/credit-card";

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

    return {
        cardSide,
        handleFlipCard,
    };
}
