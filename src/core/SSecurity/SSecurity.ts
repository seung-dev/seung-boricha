import CryptoJS from "crypto-js";

export const to_wordarray = (value: string | undefined): CryptoJS.lib.WordArray | undefined =>
	value ? CryptoJS.enc.Utf8.parse(value) : undefined;

export const to_text = (value: CryptoJS.lib.WordArray | undefined): string | undefined =>
	value ? CryptoJS.enc.Utf8.stringify(value) : undefined;

export const encode_hex = (value: string | CryptoJS.lib.WordArray | undefined): string | undefined => {
	if (typeof value === "string") {
		const wordarray = to_wordarray(value);
		if (wordarray) {
			return CryptoJS.enc.Hex.stringify(wordarray);
		}
	} else {
		if (value) {
			return CryptoJS.enc.Hex.stringify(value);
		}
	}
	return undefined;
};
export const decode_hex = (value: string | undefined): CryptoJS.lib.WordArray | undefined =>
	value ? CryptoJS.enc.Hex.parse(value) : undefined;

export const encode_base64 = (value: string | CryptoJS.lib.WordArray | undefined): string | undefined => {
	if (typeof value === "string") {
		const wordarray = to_wordarray(value);
		if (wordarray) {
			return CryptoJS.enc.Base64.stringify(wordarray);
		}
	} else {
		if (value) {
			return CryptoJS.enc.Base64.stringify(value);
		}
	}
	return undefined;
};
export const decode_base64 = (value: string | null): CryptoJS.lib.WordArray | undefined =>
	value ? CryptoJS.enc.Base64.parse(value) : undefined;

export const sha256 = (value: string | CryptoJS.lib.WordArray | undefined): CryptoJS.lib.WordArray | undefined =>
	value ? CryptoJS.SHA256(value) : undefined;
