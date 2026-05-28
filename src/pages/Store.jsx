import PageWrapper from "../components/PageWrapper";
import StoreHero from "../components/StoreHero";

function Store() {
  return (
    <PageWrapper>
    <div className="  h-screen overflow-hidden text-white bg-black">

      {/* Background Image */}
      <img
        className="absolute  inset-0  w-screen h-screen  opacity-40"
        src="/images/newp.png"
        alt="Store Background"
      />

      {/* Dark Overlay */}

      {/* Content */}
      <div className="relative z-20">
        <StoreHero />
      </div>

    </div>
    </PageWrapper>
 
  );
}

export default Store;