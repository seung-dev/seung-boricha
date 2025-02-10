import { SDividerI } from "./SDividerV.t";

export const SDividerV = (args: SDividerI) => {
	const { text } = args;

	return (
		<div>
			<hr />
			<div>{text}</div>
		</div>
	);
};
