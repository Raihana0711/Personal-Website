import Image from "next/image";

export default function Header() {
  return (
    <header className="flex gap-x-8 flex-col md:flex-row items-center md:items-start">
      <Image
        className="size-[140px] rounded-full"
        src="/Raihanaa.jpg"
        alt="picture of author"
        width={140}
        height={140}
      />
      <div>
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-50 mb-1.5">
          Raihana
        </h1>
        <h2 className="text-lg font-light text-zinc-500 dark:text-zinc-300">
          Mahasiswa Semester 5 Teknik Informatika
        </h2>
        <div className="flex gap-x-6 mt-6 flex-col md:flex-row gap-y-2">
          <span className="text-zinc-500 dark:text-zinc-300">
            Sekolah Tinggi Teknologi Bontang
          </span>
        </div>
      </div>
    </header>
  );
}
