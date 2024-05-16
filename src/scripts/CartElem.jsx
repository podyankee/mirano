import { API_URL } from '@/scripts/API';
import { cartStore } from './Store';

export const CartElem = product => (
	<li class='cart__item'>
		<img class='cart__img' src={`${API_URL}${product.photoUrl}`} alt={product.name} />
		<h4 class='cart__item-title'>{product.name}</h4>
		<div class='cart__counter'>
			<button
				class='cart__counter-btn'
				onclick={() => {
					cartStore.postCart({ id: product.id, quantity: product.quantity - 1 });
				}}>
				-
			</button>
			<input class='cart__counter-input' type='number' max='99' min='1' value={product.quantity} />
			<button
				class='cart__counter-btn'
				onclick={() => {
					cartStore.postCart({ id: product.id, quantity: product.quantity + 1 });
				}}>
				+
			</button>
		</div>
		<p class='cart__price'>{product.quantity * product.price}&nbsp;₽</p>
	</li>
);