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


/**
 * INTERSECTION TYPE
 */
type Bird = {
    name: string;
    flyingSpeed: number;
}
type Animal = {
    name: string;
    runningSpeed: number;
}

export type Creature = Bird & Animal;