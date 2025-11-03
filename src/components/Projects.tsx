import Image from 'next/image';

export default function Projects() {
	return (
		<section id="projects" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wide font-medium text-zinc-500 dark:text-zinc-300">projects</h3>
			
			{/* ✅ Project 1: Nun's Dimsum */}
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
				<Image
					alt="Nun's Dimsum"
					src="/nuns.jpg"
					className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
					width={800}
					height={500}
				/>
				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">Nun’s Dimsum Web Application</h4>
					<p className="text-sm text-zinc-500 dark:text-zinc-300 loading-relaxed">
						Nun’s Dimsum adalah aplikasi web pemesanan makanan yang saya kembangkan pada semester sebelumnya.
						Aplikasi memiliki sistem pemesanan makanan online, fitur admin dan user, manajemen menu, pemrosesan pesanan,
						serta laporan transaksi real-time untuk memonitor pendapatan usaha dimsum secara digital.
					</p>
					<div className="flex items-center gap-x-2.5 mt-2">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">Web App</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">Food Ordering</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">PHP & MySQL</span>
					</div>
				</div>
			</div>

			{/* ✅ Project 2: Buku Tamu Digital STITEK Bontang */}
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2 mt-6">
				<Image
					alt="Buku Tamu Digital"
					src="/bukudigital.jpg"
					className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
					width={800}
					height={500}
				/>
				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
						Buku Tamu Digital STITEK Bontang
					</h4>
					<p className="text-sm text-zinc-500 dark:text-zinc-300 loading-relaxed">
						Pada project ini saya membuat Aplikasi Buku Tamu Digital STITEK Bontang yang berfungsi untuk mencatat data pengunjung secara online.
						Pengguna dapat mengisi nama lengkap, alamat email, serta pesan atau komentar terkait kunjungan mereka.
						Aplikasi ini dirancang untuk menggantikan buku tamu manual agar proses pencatatan lebih praktis, rapi, dan mudah diakses secara digital.
						Tampilan dibuat sederhana dan user-friendly sehingga tamu dapat mengisi data dengan mudah melalui komputer maupun smartphone.
					</p>
					<div className="flex items-center gap-x-2.5 mt-2">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">Web App</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">Guestbook System</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">PHP</span>
					</div>
				</div>
			</div>

		</section>
	);
}
