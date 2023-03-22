import CheckBoxField from './CheckBoxField';

export default function SearchBar() {
  return (
    <div className='search-bar'>
      <div>
        <input type='text' placeholder='Search...' />
      </div>
      <CheckBoxField label='Only show products in stock' />
    </div>
  );
}
