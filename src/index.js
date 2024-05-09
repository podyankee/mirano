import '@/sass/index.sass';
import { initHeaderFixer } from '@/scripts/headerFixer';
import { initChoices } from '@/scripts/choices';
import { initCart } from '@/scripts/cart';
import { renderProducts } from '@/scripts/renderProducts';

const init = () => {
	initHeaderFixer();
	initChoices();
	initCart();
	renderProducts();
};

document.addEventListener('DOMContentLoaded', init);
