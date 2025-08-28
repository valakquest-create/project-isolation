import { customAlphabet } from "nanoid";

const alphabet = "0123456789abcdefghijklmnopqrstuv";
export const base32id = customAlphabet(alphabet);
