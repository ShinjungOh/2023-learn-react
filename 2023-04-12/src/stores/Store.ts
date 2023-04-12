import {singleton} from 'tsyringe';

@singleton()
export default class Store {
	count = 0;
}
