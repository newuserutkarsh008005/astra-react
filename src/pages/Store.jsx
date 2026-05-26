import PageWrapper from "../components/PageWrapper";
import StoreHero from "../components/StoreHero";

function Store() {
  return (
    <PageWrapper>
    <div className="relative h-screen overflow-hidden text-white bg-black">

      {/* Background Image */}
      <img
        className="fixed inset-0  w-screen"
        src="/images/newp.png"
        alt="Store Background"
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-20">
        <StoreHero />
      </div>

    </div>
    </PageWrapper>
 
  );
}

export default Store;