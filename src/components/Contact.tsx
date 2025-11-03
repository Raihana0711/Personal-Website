export default function Contact() {
	return (
		<section id="contact" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wider font-medium text-zinc-500 dark:text-zinc-300">Contact</h3>

			<p className="text-zinc-800 dark:text-zinc-200">
				Jangan ragu untuk menghubungi saya jika Anda ingin berdiskusi mengenai teknologi, 
				berkolaborasi dalam proyek, atau sekadar ingin 
				bertukar ide dan menjalin koneksi baru.
			</p>

			<div className="flex gap-x-6 mt-6 flex-col md:flex-row gap-y-2">

				{/* Email */}
				<span className="text-zinc-500 dark:text-zinc-300">
					raihanaa.nun07114@gmail.com
				</span>

				{/* Instagram */}
				<a 
					href="https://www.instagram.com/rhanaanun" 
					target="_blank" 
					className="text-zinc-500 dark:text-zinc-300 flex items-center gap-x-2.5"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="1.5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.5 11.994a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
						/>
						<circle cx="17" cy="7" r="1" fill="currentColor" />
					</svg>
					@rhanaanun
				</a>

			</div>
		</section>
	);
}
