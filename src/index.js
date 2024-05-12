import '@/sass/index.sass';
import { initHeaderFixer } from '@/scripts/headerFixer';
import { initChoices } from '@/scripts/choices';
import { initCart } from '@/scripts/cart';
import { renderProducts } from '@/scripts/renderProducts';
import { store } from '@/scripts/Store';
import { initChoicesType } from '@/scripts/choicesType';
import { filterProducts } from '@/scripts/filterProducts';
import { initSearchProducts } from '@/scripts/searchProducts';

const init = () => {
	initHeaderFixer();
	initChoices();
	initChoicesType();
	initCart();
	initSearchProducts();
	renderProducts();
	filterProducts();
};

document.addEventListener('DOMContentLoaded', init);
