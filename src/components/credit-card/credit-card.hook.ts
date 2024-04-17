import {
    SharedValue,
    interpolate,
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";

import { CARD_SIDE } from "@constants/credit-card";

type useCreditCardProps = {
    cardSide: SharedValue<number>;
};

export function useCreditCard({ cardSide }: useCreditCardProps) {
    const frontAnimatedStyles = useAnimatedStyle(() => {
        const rotateValue = interpolate(
            cardSide.value,
            [CARD_SIDE.front, CARD_SIDE.back],
            [0, 180],
        );
        return {
            transform: [
                {
                    rotateY: withTiming(`${rotateValue}deg`, {
                        duration: 1000,
                    }),
                },
            ],
        };
    });

    const backAnimatedStyle = useAnimatedStyle(() => {
        const rotateValue = interpolate(
            cardSide.value,
            [CARD_SIDE.front, CARD_SIDE.back],
            [180, 360],
        );
        return {
            transform: [
                {
                    rotateY: withTiming(`${rotateValue}deg`, {
                        duration: 1000,
                    }),
                },
            ],
        };
    });

    return { frontAnimatedStyles, backAnimatedStyle };
}
