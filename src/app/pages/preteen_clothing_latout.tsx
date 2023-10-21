export default function PreteenPageLayout({ children }) {
  return (
    <html lang="ja">
      <body className={styles.main}>{children}</body>
    </html>
  );
}
