export default function ToddlerPageLayout({ children }) {
  return (
    <html lang="ja">
      <body className={styles.main}>{children}</body>
    </html>
  );
}
