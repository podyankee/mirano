class Store {
	constructor() {
		this.observers = [];
		this.products = [];
	}

	subscribe(observerFunction) {
		this.observers.push(observerFunction);
	}

	notifyObservers() {
		this.observers.forEach(observer => observer());
	}
	getProducts() {
		return this.products;
	}
	setProducts(newProducts) {
		this.products = newProducts;
		this.notifyObservers();
	}
}

export const store = new Store();
