import { SDataUnit } from "./SFormat.t";

export const SDataTypes: Record<string, string> = {
	_STRING: "string",
	_NUMBER: "number",
} as const;

export const SRegex: Record<string, RegExp> = {
	_TRIM: /^\s|\s+$/g,
	_LEFT_NUMBER: /[^\d]/g,
	_REMOVE_NUMBER: /[\d]/g,
} as const;

export const SDataUnits: readonly SDataUnit[] = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
