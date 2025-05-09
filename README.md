# Insectlands

Insectlands 是一個專注於推廣甲蟲文化與飼養知識的網站，致力於為甲蟲愛好者提供資訊與服務。

## 功能特色

- **動態背景與動畫效果**：使用 Framer Motion 提供流暢的動畫體驗。
- **響應式設計**：適配各種裝置，從桌面到行動裝置皆能完美顯示。
- **即時通知**：使用自定義的 Toast 提示用戶操作結果。
- **外部連結整合**：
  - 添加 Line 好友
  - 前往 Shopee 購物
  - 追蹤 Instagram

## 技術棧

- **前端框架**：Next.js
- **樣式**：Tailwind CSS
- **動畫**：Framer Motion
- **圖標庫**：Lucide React
- **圖片優化**：Next.js Image 組件

## 文件結構

insectlands/
├── app/ # Next.js 應用目錄
│ ├── page.tsx # 主頁面
│ ├── layout.tsx # 全局佈局
│ └── globals.css # 全局樣式
├── components/ # 可重用的 React 組件
├── hooks/ # 自定義 Hook
│ └── use-toast.ts # Toast 通知邏輯
├── public/ # 靜態資源（圖片等）
├── [next.config.mjs](http://_vscodecontentref_/0) # Next.js 配置
└── [README.md](http://_vscodecontentref_/1) # 專案說明文件
