import { ChangeEvent, useState } from 'react';

type TextFieldProps = {
  placeholder: string;
}

export default function TextField({ placeholder }: TextFieldProps) {
  const [filterText, setFilterText] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
