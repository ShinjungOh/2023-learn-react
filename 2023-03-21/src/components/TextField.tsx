import { ChangeEvent, useRef } from 'react';

type TextFieldProps = {
  placeholder: string;
  filterText: string;
  setFilterText: (value: string) => void;
}

export default function TextField({ placeholder, filterText, setFilterText }: TextFieldProps) {
  const id = useRef(`input-${Math.random()}`);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div>
      <label htmlFor={id.current}>
        Search
      </label>
      <input
        id={id.current}
        type='text'
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
