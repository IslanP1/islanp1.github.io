import Header from "../../components/components-home/Header/Header";
import SecaoSobreMim from "../../components/components-home/SecaoSobreMim/SecaoSobreMim";
import SecaoCardMaisSobreMim from "../../components/components-home/SecaoCardMaisSobreMim/SecaoCardMaisSobreMim";
import SecaoProjetos from "../../components/components-home/SecaoProjetos/SecaoProjetos";
import SecaoContate from "../../components/components-home/SecaoContate/SecaoContate";
import Footer from "../../components/components-home/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <SecaoSobreMim />
      <SecaoCardMaisSobreMim />
      <SecaoProjetos />
      <SecaoContate />
      <Footer />
    </>
  );
}

export default Home;
