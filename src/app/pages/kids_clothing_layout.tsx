export default function KidsPageLayout({ children }) {
  return (
    <html lang="ja">
      <body className={styles.main}>{children}</body>
    </html>
  );
}
