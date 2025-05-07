import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col min-h-screen bg-app-white dark:bg-app-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
