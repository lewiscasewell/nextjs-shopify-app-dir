export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen pt-20 max-w-5xl mx-auto">
      <main>{children}</main>
    </div>
  );
}
