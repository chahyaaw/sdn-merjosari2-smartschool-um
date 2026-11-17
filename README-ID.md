# SDN Merjosari 2 Smart School

Project ini disiapkan dari file React JSX yang Anda kirim, menggunakan React + Vite + Tailwind CSS.

## Menjalankan di komputer

1. Ekstrak ZIP ini.
2. Buka folder hasil ekstrak di Visual Studio Code.
3. Pastikan Node.js sudah terpasang.
4. Buka Terminal di VS Code, lalu jalankan:

   ```bash
   npm install
   ```

5. Buat file `.env.local` di folder utama (sejajar dengan `package.json`) dengan isi:

   ```env
   VITE_SUPABASE_URL=https://PROJECT-REF.supabase.co
   VITE_SUPABASE_ANON_KEY=PASTE_PUBLISHABLE_KEY_DI_SINI
   ```

6. Jalankan:

   ```bash
   npm run dev
   ```

7. Buka alamat lokal yang ditampilkan terminal (umumnya http://localhost:5173).

## Catatan penting

- Kode website saat ini masih memakai `localStorage` untuk menyimpan data aplikasi. File `src/lib/supabase.js` baru menyiapkan client Supabase; form belum diubah untuk membaca/menulis database.
- Login contoh di kode awal masih menggunakan akun simulasi dan kata sandi `123`. Jangan publikasikan website dengan login simulasi tersebut. Kita perlu menggantinya dengan Supabase Auth dan pengaturan peran yang aman sebelum website digunakan sungguhan.
- Jangan pernah memasukkan `service_role` key atau secret key ke frontend. Gunakan hanya Project URL dan Publishable key.
- File `.env.local` tidak disertakan dalam ZIP dan diabaikan oleh Git.
