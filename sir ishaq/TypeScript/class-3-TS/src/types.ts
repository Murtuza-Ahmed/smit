// INTERFACE TYPE
export interface Person {
    name: string;
    speak(sentance: string): void
}

// ADVANCED TYPE UNION
/**
 * (|) union type
 */

export type Combined = string | number;