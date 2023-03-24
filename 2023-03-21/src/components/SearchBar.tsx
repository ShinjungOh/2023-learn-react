import TextField from './TextField';
import CheckBoxField from './CheckBoxField';

type SearchBarProps = {
  filterText: string;
  setFilterText: (value: string) => void;
}

export default function SearchBar({ filterText, setFilterText }: SearchBarProps) {
  return (
    <div className='search-bar'>
      <TextField
        placeholder='Search...'
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <CheckBoxField label='Only show products in stock' />
    </div>
  );
}
