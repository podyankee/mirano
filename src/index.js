import '@/sass/index.sass';
import { initHeaderFixer } from '@/scripts/headerFixer';
import { initChoices } from '@/scripts/choices';
import { initCart } from '@/scripts/cart';
import { renderProducts } from '@/scripts/renderProducts';
import { store } from './scripts/Store';
import { fetchProducts } from './scripts/API';

const init = () => {
	initHeaderFixer();
	initChoices();
	initCart();
	fetchProducts({ type: 'bouquets', minPrice: 3000 });
	renderProducts();
};

document.addEventListener('DOMContentLoaded', init);
