import { useState } from "react";

export const useForm = <T extends object>(initialState: T) => {
  const [state, setState] = useState(initialState);

  const onChange = (value: string, campo: string) => {
    const nestedFields: string[] = campo.split(".");
    const nestedState = JSON.parse(JSON.stringify(state));
    switch (nestedFields.length) {
      case 1:
        setState({ ...state, [campo]: value });
        return;
      case 2:
        nestedState[nestedFields[0]][nestedFields[1]] = value;
        setState({ ...nestedState });
        return;
      case 3:
        nestedState[nestedFields[0]][nestedFields[1]][nestedFields[2]] = value;
        setState({ ...nestedState });
        return;
      default:
        break;
    }
  };

  return { ...state, state,setState, onChange };
};
