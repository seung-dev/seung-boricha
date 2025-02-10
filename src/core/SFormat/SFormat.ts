import { SDataTypes, SDataUnits, SRegex } from "./SFormat.c";
import { SDataUnit } from "./SFormat.t";

const is_null = (value: unknown): boolean => value == null;

const is_blank = (value: string | undefined): boolean => value === "";

const is_empty = (value: string | undefined): boolean => is_null(value) || is_blank(value);

const is_equal_lower_case = (a: string | undefined, b: string | undefined): boolean =>
	!a || !b ? false : a.toLowerCase() === b.toLowerCase();

const is_string = (value: unknown): boolean => typeof value === SDataTypes._STRING;

const is_number = (value: unknown): boolean => !isNaN(Number(value));

const is_array = (value: unknown): boolean => Array.isArray(value);

const repeat = (value: string | undefined, size: number): string | undefined => value?.repeat(size);

const concat = (...values: (string | number | undefined)[]): string => values.join("");

const left = (value: string | undefined, size: number): string | undefined => value?.substring(0, size);

const right = (value: string | undefined, size: number): string | undefined => value?.slice(size * -1);

const pad_start = (value: string | number | undefined, size: number, fill: string): string | undefined =>
	String(value).padStart(size, fill);

const pad_end = (value: string | number | undefined, size: number, fill: string): string | undefined =>
	String(value).padEnd(size, fill);

const replace = (value: string | undefined, regex: RegExp, fill: string): string | undefined => value?.replace(regex, fill);

const trim = (value: string | undefined): string | undefined => replace(value, SRegex._TRIM, "");

const arr = (length: number, begin?: number): number[] => {
	const add: number = begin ?? 0;
	return Array.from({ length: length }).map((_, i) => i + add);
};

const to_string = (value: unknown, default_value?: string): string | undefined =>
	value ? String(value) : default_value ? default_value : undefined;

const to_number = (value: unknown, default_value?: number): number | undefined =>
	this.is_null(value) && default_value ? default_value : is_number(value) ? Number(value) : undefined;

const to_color = (value: string | undefined): string | undefined => {
	if (!value) {
		return undefined;
	}
	const hash = value.split("").reduce((item, v) => v.charCodeAt(0) + ((item << 5) - item), 0);
	return this.arr(3).reduce((item, v) => {
		const bit = (hash >> (v * 8)) & 0xff;
		console.log(bit.toString(16).padStart(2, "0"));
		return this.concat(item, bit.toString(16).padStart(2, "0"));
	}, "#");
};

const left_number = (value: string | undefined): string | undefined => replace(value, SRegex._LEFT_NUMBER, "");

const remove_number = (value: string | undefined): string | undefined => replace(value, SRegex._REMOVE_NUMBER, "");

const format_comma = (value: string | number | undefined): string | undefined => to_number(value)?.toLocaleString();

const format_phone_number = (value: string | undefined): string | undefined => {
	const num = this.left_number(value) ?? "";
	switch (num.length) {
		case 11:
			return num.replace(/(\d{3})(\d{4})(\d{4})+/g, "$1-$2-$3");
			break;
		case 10:
			if (num.startsWith("02")) {
				return num.replace(/(\d{2})(\d{4})(\d{4})+/g, "$1-$2-$3");
			}
			return num.replace(/(\d{3})(\d{3})(\d{4})+/g, "$1-$2-$3");
			break;
		case 9:
			return num.replace(/(\d{2})(\d{3})(\d{4})+/g, "$1-$2-$3");
			break;
		case 8:
			return num.replace(/(\d{4})(\d{4})+/g, "$1-$2-$3");
			break;
		case 4:
		case 3:
			return num;
			break;
		default:
			return undefined;
			break;
	}
};

const format_file_size = (value: string | number | undefined, unit?: SDataUnit): string | undefined => {
	const num = this.to_number(value);
	if (this.is_null(num)) return undefined;
	const safe: number = num ?? 0;
	const k = 1024;
	let index;
	if (unit) {
		index = SDataUnits.indexOf(unit);
	} else {
		index = Math.floor(Math.log(safe) / Math.log(k));
	}
	const size = safe / Math.pow(k, index);
	const exponent = size > 999 ? index + 1 : index;
	return `${(Math.floor((10 * safe) / Math.pow(k, exponent)) / 10).toFixed(1)} ${SDataUnits[exponent]}`;
};

/**
 * YYYY, YY
 * MM, M, MMM, MMMM
 * DD, D
 * d, ddd, dd, dddd
 * HH, H, hh, h
 * mm, m
 * ss, s
 * SSS
 * Z, ZZ
 * A, a: AM, PM
 */
// export const date_format = (
// 	{ format = "YYYY-MM-DD", unit, add = 0, unix }: SDateFormatI = { format: "YYYY-MM-DD", add: 0 },
// ): string => {
// 	const date = !!unix ? dayjs.unix(unix) : dayjs();
// 	return date.subtract(add * -1, unit).format(format);
// };

// export const date_diff = ({
// 	unit,
// 	begin,
// 	end,
// }: {
// 	unit: "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "months" | "years";
// 	begin: string | number | Date | Dayjs;
// 	end?: string | number | Date | Dayjs;
// }): number => {
// 	const begin_date = dayjs(begin);
// 	const end_date = !!end ? dayjs(end) : dayjs();
// 	return end_date.diff(begin_date, unit);
// };

// export const time_format = ({
// 	time,
// 	format = "mm:ss",
// }: {
// 	time: number;
// 	format?: "mm:ss" | "HH:mm:ss" | "D HH:mm:ss";
// }): string => {
// 	const ss = time % 60;
// 	const mm = (time % (60 * 60)) / 60;
// 	if ("mm:ss" === format) {
// 		return `${String(Math.floor(mm)).padStart(2, "0")}:${String(Math.floor(ss)).padStart(2, "0")}`;
// 	}
// 	const hh = (time % (60 * 60 * 24)) / (60 * 60);
// 	if ("HH:mm:ss" === format) {
// 		return `${String(Math.floor(hh)).padStart(2, "0")}:${String(Math.floor(mm)).padStart(2, "0")}:${String(
// 			Math.floor(ss),
// 		).padStart(2, "0")}`;
// 	}
// 	const d = time / (60 * 60 * 24);
// 	return `${Math.floor(d) ?? 0}D ${String(Math.floor(hh)).padStart(2, "0")}:${String(Math.floor(mm)).padStart(
// 		2,
// 		"0",
// 	)}:${String(Math.floor(ss)).padStart(2, "0")}`;
// };

// export const time_unit_ms = (
// 	value: number,
// 	unit: "week" | "w" | "day" | "d" | "hour" | "h" | "minute" | "m" | "second" | "s",
// ): number => {
// 	switch (unit) {
// 		case "week":
// 		case "w":
// 			return 1000 * 60 * 60 * 24 * 7 * value;
// 		case "day":
// 		case "d":
// 			return 1000 * 60 * 60 * 24 * value;
// 		case "hour":
// 		case "h":
// 			return 1000 * 60 * 60 * value;
// 		case "minute":
// 		case "m":
// 			return 1000 * 60 * value;
// 		case "second":
// 		case "s":
// 			return 1000 * value;
// 		default:
// 			return 0;
// 	}
// 	return 0;
// };

// export const date_add_ms = ({
// 	value,
// 	unit,
// 	date,
// }: {
// 	value: number;
// 	unit: "week" | "w" | "day" | "d" | "hour" | "h" | "minute" | "m" | "second" | "s";
// 	date?: Date;
// }) => {
// 	const d = date ?? new Date();
// 	return d.getTime() + time_unit_ms(value, unit);
// };

// export const to_flat = (data?: SOptionI[], level_no = 0): SOptionI[] => {
// 	return (
// 		data?.reduce((items, item) => {
// 			return [
// 				...items,
// 				{ value: item.value, label: item.label, level: item.level, level_no: level_no, misc: item.misc },
// 				...to_flat(item.children, level_no + 1),
// 			];
// 		}, [] as SOptionI[]) ?? []
// 	);
// };
