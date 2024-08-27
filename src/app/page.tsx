import ContentWrapper from "@/components/contentWrapper";
import HeroBanner from "@/components/heroBanner";
import HeroImage from "@/components/heroImage";
import MarginTopWrapper from "@/components/marginTopWrapper";
import RecommendedProducts from "@/components/recommendedProducts";
export default function Home() {
  return (
    <main>
      <MarginTopWrapper>
        <div className="relative mx-auto flex h-[500px] max-w-[1200px] flex-col justify-center">
          <HeroImage />
          <ContentWrapper>
            <div className="relative hidden lg:block">
              <div className="z-50 max-w-[50%]">
                <HeroBanner />
              </div>
            </div>
          </ContentWrapper>
        </div>
        <ContentWrapper>
          <div className="lg:hidden">
            <HeroBanner />
          </div>
        </ContentWrapper>
          <RecommendedProducts />
      </MarginTopWrapper>
    </main>
  );
}
