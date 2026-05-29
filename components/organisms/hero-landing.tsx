import { HeroTitle } from '../molecules/hero-title';
import { HeroSubtitle } from '../molecules/hero-subtitle';
import { HeroButton } from '../molecules/hero-button';
import { HeroRating } from '../molecules/hero-rating';
import { HeroClients } from '../molecules/hero-clients';
import { HeroBackground } from '../molecules/hero-background';
import { HeroNoise } from '../molecules/hero-noise';

export const HeroLanding = () => {
  return (
    <div className="bg-[var(--base,#050506)] content-stretch flex flex-col gap-[var(--m-0,0px)] isolate items-center justify-center overflow-hidden p-[var(--m-0,0px)] relative max-w-screen">
      <div className="content-stretch flex flex-col gap-[var(--responsive-padding-p-lg,0px)] isolate items-center justify-center min-w-[272px] pb-[var(--responsive-padding-p-md,64px)] pt-[var(--responsive-padding-p-lg,128px)] px-[var(--m-0,0px)] relative shrink-0 w-full z-[4]" data-name="Text & Rating">
        <div className="content-stretch flex flex-col gap-[var(--m-16,64px)] items-center pt-[var(--responsive-margin-m-sm,32px)] relative shrink-0 w-full z-[1]" data-name="Main Content">
          <div className="content-stretch flex flex-col gap-[var(--m-16,64px)] items-center pb-[var(--responsive-padding-p-sm,32px)] pt-[var(--m-0,0px)] relative shrink-0 w-full" data-name="Container">
            <HeroNoise />
            <div className="content-stretch flex flex-col gap-[var(--m-8,32px)] items-center max-w-[900px] px-[var(--responsive-margin-m-sm,32px)] relative shrink-0 w-full" data-name="Container">
              <HeroTitle />
              <HeroSubtitle />
            </div>
            <HeroButton />
          </div>
          <HeroRating />
          <HeroClients />
        </div>
      </div>
      <HeroBackground />
      <div className="absolute bg-gradient-to-b from-black h-[781px] left-1/2 to-[rgba(0,0,0,0)] top-0 translate-x-[-50%] w-full max-w-[1512px] z-[1]" data-name="bg color" />
    </div>
  );
};