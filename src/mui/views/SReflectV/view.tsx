import { reflect } from "@/core";
import { SReflectI } from "./type";

const SReflectV = (args: SReflectI) => {
	const { value } = args;

	return <>{reflect(value)}</>;
};

export default SReflectV;
