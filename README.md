# Portfolio QA Engineer

Portfolio website (Next.js) – dễ deploy lên Vercel.

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Build & Deploy Vercel

1. Đẩy code lên GitHub (hoặc GitLab/Bitbucket).
2. Vào [vercel.com](https://vercel.com) → Import project → chọn repo.
3. Vercel tự nhận Next.js, bấm Deploy.

Hoặc dùng Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Tùy chỉnh

- **Avatar:** Thêm ảnh của bạn vào `public/avatar.jpg` (hiện đang dùng ảnh mặc định từ DiceBear).
- **Download CV:** Sửa link nút "Download CV" trong `components/Hero.tsx` (hoặc thêm file PDF vào `public/` rồi link `/cv.pdf`).
- **Logo công ty:** Đang dùng Clearbit (logo.clearbit.com). Có thể thay bằng ảnh trong `public/companies/` và cập nhật `data/cv.ts`.

## Công nghệ

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- next-themes (light/dark mode)
- react-icons (LinkedIn, email, phone, skills icons)
