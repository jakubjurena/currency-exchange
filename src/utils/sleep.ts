/**
 * Helps to simulate loading behaviour
 */
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
