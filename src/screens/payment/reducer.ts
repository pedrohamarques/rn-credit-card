import { CardDataProps } from "@typings/data";

export enum ACTION_KIND {
    TYPING_NAME = "TypingName",
    TYPING_NUMBER = "TypingNumber",
    TYPING_DATE = "TypingDate",
    TYPING_CODE = "TypingCode",
}

type ActionProps = {
    type: ACTION_KIND;
    payload: string;
};

export function cardDataReducer(
    state: CardDataProps,
    action: ActionProps,
): CardDataProps {
    switch (action.type) {
        case ACTION_KIND.TYPING_CODE: {
            return {
                ...state,
                code: action.payload,
            };
        }
        case ACTION_KIND.TYPING_DATE: {
            return {
                ...state,
                date: action.payload,
            };
        }
        case ACTION_KIND.TYPING_NAME: {
            return {
                ...state,
                name: action.payload,
            };
        }
        case ACTION_KIND.TYPING_NUMBER: {
            return {
                ...state,
                number: action.payload,
            };
        }
        default:
            return {
                ...state,
            };
    }
}
