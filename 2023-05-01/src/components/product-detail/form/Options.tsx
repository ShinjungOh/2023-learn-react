import useProductFormStore from '../../../hooks/useProductFormStore';
import Option from './Option';
import {type ChangeFunction} from './types';

export default function Options() {
	const [{product, selectedOptionItems}, store] = useProductFormStore();

	const handleChange: ChangeFunction = ({optionId, optionItemId}) => {
		store.changeOptionItem({optionId, optionItemId});
	};

	return (
		<div>
			{product.options.map((option, index) => (
				<Option
					key={option.id}
					option={option}
					selectedItem={selectedOptionItems[index]}
					onChange={handleChange}
				/>
			))}
		</div>
	);
}
