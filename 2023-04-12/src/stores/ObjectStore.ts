type Listener = () => void;

export default class ObjectStore {
	private readonly listeners = new Set<Listener>();

	addListener(listener: Listener) {
		this.listeners.add(listener);
	}

	removeListener(listener: Listener) {
		this.listeners.delete(listener);
	}

	protected publish() {
		this.listeners.forEach(listener => {
			listener();
		});
	}
}

