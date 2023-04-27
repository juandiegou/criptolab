import { useState } from "react";

export const useData = (initialData = {}) => {
	const [dataState, setDataState] = useState(initialData);

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setDataState({
			...dataState,
			[name]: value,
		});
	};

	const change = (name, value) => {
		setDataState({
			...dataState,
			[name]: value,
		});
	};

  const onResetData =()=>{
    setDataState(initialData);
  }

	return {
		...dataState,
		dataState,
    onResetData,
		onInputChange,
		change,
	};
};
