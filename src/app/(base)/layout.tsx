import Footer from "@/components/Footer";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col min-h-screen bg-app-white">
      {/* <Header /> */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
