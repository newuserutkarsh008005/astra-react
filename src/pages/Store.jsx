import PageWrapper from "../components/PageWrapper";
import StoreHero from "../components/StoreHero";

function Store() {
  return (
    <PageWrapper>
    <div className="  h-screen overflow-hidden text-white bg-black ">

      {/* Background Image */}
      <img
        className=" storeimage  absolute  inset-0  w-screen h-screen  opacity-40 md:overflow-hidden md:h-full md:object-cover"
        src="/images/newp.png"
        alt="Store Background"
      />
      <img
        className=" storei  absolute  inset-0  w-screen h-screen  opacity-40 md:overflow-hidden md:h-full md:object-cover"
        src="/images/space.jpg"
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