# Implementation Plan for Vite 8 Migration

Tujuan migrasi ini adalah menaikkan toolchain dari Vite 5 ke Vite 8 dengan risiko serendah mungkin pada project React + TypeScript + Tailwind yang sekarang memakai konfigurasi Vite sangat minimal. Pendekatannya adalah upgrade dependency inti lebih dulu, lalu menyesuaikan konfigurasi runtime/build yang terkait, memvalidasi seluruh alur `typecheck`/`lint`/`build`, dan terakhir merapikan dokumentasi serta artefak konfigurasi agar baseline baru jelas untuk developer berikutnya.

### Task 1: Upgrade the Vite toolchain dependencies
**Depends on:** none
**Files:** package.json, package-lock.json
Naikkan `vite` dari `^5.4.10` ke major Vite 8 dan upgrade `@vitejs/plugin-react` ke major yang kompatibel. Pada tahap ini juga perlu menambahkan atau menyesuaikan deklarasi requirement Node.js di `package.json` bila Vite 8 membutuhkan baseline runtime yang lebih baru, supaya environment lokal dan CI tidak diam-diam tetap memakai versi Node lama. Setelah itu, refresh `package-lock.json` lewat install bersih agar dependency tree benar-benar sesuai dengan baseline baru.

### Task 2: Align the project configuration with Vite 8
**Depends on:** Task 1
**Files:** vite.config.ts, tsconfig.json, tsconfig.node.json, postcss.config.js, tailwind.config.ts
Verifikasi bahwa konfigurasi yang sekarang dipakai tetap valid di Vite 8: `defineConfig`, `@vitejs/plugin-react`, alias `@` berbasis `node:path`, serta hubungan antara config TypeScript, PostCSS, dan Tailwind. Jika ada requirement baru dari Vite 8 atau plugin React terkait resolusi module, typing config file, atau Node-side compilation, sesuaikan di `tsconfig.json` dan `tsconfig.node.json`. Pastikan juga pipeline CSS tetap membaca `tailwind.config.ts` dengan benar selama dev server dan build production.

### Task 3: Validate the migration and fix regressions
**Depends on:** Task 1, Task 2
**Files:** package.json, src/main.tsx, src/app/App.tsx, src/vite-env.d.ts, src/styles/globals.css
Jalankan validasi penuh terhadap baseline baru lewat `npm run typecheck`, `npm run lint`, dan `npm run build`, lalu perbaiki error yang muncul akibat perubahan versi Vite. Karena `vite.config.ts` di repo ini sangat sederhana, area risiko utamanya kemungkinan ada di env typing, import resolution, plugin behavior React, dan asset/CSS processing, bukan pada arsitektur komponen. Jika ada incompatibility yang muncul saat bundling atau HMR, perbaikannya sebaiknya difokuskan pada entrypoint (`src/main.tsx`), tipe environment (`src/vite-env.d.ts`), dan global stylesheet (`src/styles/globals.css`) sebelum menyentuh section/component lain.

### Task 4: Clean up duplicate config artifacts and document the new baseline
**Depends on:** Task 3
**Files:** README.md, vite.config.js, vite.config.d.ts, tailwind.config.js, tailwind.config.d.ts
Setelah migrasi lolos validasi, audit file konfigurasi root yang tampak seperti artefak hasil transpile atau duplikasi dari source `.ts`, lalu hapus atau rapikan bila memang sudah tidak menjadi source of truth. Ini penting karena repo saat ini memiliki `vite.config.ts` dan `tailwind.config.ts` sebagai file utama, tetapi juga menyimpan varian `.js`/`.d.ts` yang berpotensi membingungkan saat maintenance. Terakhir, update `README.md` agar menjelaskan versi Node yang dibutuhkan, dependency baseline baru, dan langkah verifikasi pasca-migrasi.
