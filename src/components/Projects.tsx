import Image from 'next/image';

export default function Projects() {
	return (
		<section id="projects" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wide font-medium text-zinc-500 dark:text-zinc-300">projects</h3>
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
				<Image
					alt="image"
					src="/nuns.jpg"
					className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
					width={800}
					height={500}
				/>
				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">Nun’s Dimsum Web Application</h4>
					<p className="text-sm text-zinc-500 dark:text-zinc-300 loading-relaxed">
						Nun’s Dimsum adalah aplikasi web pemesanan makanan yang saya kembangkan pada semester sebelumnya.
						Sistem ini mendukung dua jenis pengguna, yaitu pembeli dan admin. Pembeli dapat melihat daftar menu
						dimsum lengkap beserta harga dan gambar, kemudian melakukan pemesanan melalui aplikasi.
						Admin memiliki akses untuk mengelola menu, memproses pesanan, serta melihat laporan transaksi secara
						real-time untuk mengetahui pendapatan. Aplikasi ini dirancang untuk mempermudah proses pemesanan
						makanan dan membantu pengelolaan usaha secara digital serta terstruktur.
					</p>
					<div className="flex items-center gap-x-2.5 mt-2">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							Web App
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							Food Ordering
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							PHP & MySQL
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
