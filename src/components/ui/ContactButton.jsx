import { useState } from 'react';
import './ContactButton.css';

export default function ContactButton({ label }) {
	const [isNumberShown, setIsNumberShown] = useState(false);

	return isNumberShown ? (
		<div class="typewriter font-monospace text-black">
			<a href="tel:+4915123255552">
				<h1>+49 15123255552</h1>
			</a>
		</div>
	) : (
		<btn
			id="call-me"
			class={
				'border-transparent rounded-xl border-2 bg-black px-6 py-3 text-center text-white ring-orange  ring-offset-2 transition hover:bg-orange focus-visible:ring-2'
			}
			style={{ cursor: 'pointer' }}
			name="learn more"
			onClick={() => setIsNumberShown(true)}
		>
			{label}
		</btn>
	);
}
