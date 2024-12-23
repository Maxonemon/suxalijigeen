import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NosActions } from "./pages/NosActions";
import { NosPartenaires } from "./pages/NosPartenaires";
import { QuiSommesNous } from "./pages/QuiSommesNous";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <QuiSommesNous />
        <NosActions />
        <NosPartenaires />
      </main>
      <Footer />
    </div>
  );
}
