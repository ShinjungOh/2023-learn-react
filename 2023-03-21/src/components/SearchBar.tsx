import TextField from './TextField';
import CheckBoxField from './CheckBoxField';

export default function SearchBar() {
  return (
    <div className='search-bar'>
      <TextField placeholder='Search...'/>
      <CheckBoxField label='Only show products in stock' />
    </div>
  );
}
