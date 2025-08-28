import { CertificateCharacteristics } from "@/features/certificates-characteristics";
import { Slider } from "@/features/slider";
import { PageHeaderLayout } from "@/shared/ui/page-header";
import { ScrollDown } from "@/shared/ui/scroll-down";

export function CertificatesHeader() {
  const images = [
    "/images/14feb.webp",
    "/images/call.webp",
    "/images/doll.webp",
    "/images/karych.webp",
    "/images/orig.webp",
    "/images/shelter.webp",
  ];

  return (
    <PageHeaderLayout
      slider={
        <Slider images={images} objectFit="contain" autoplay={false} />
      }
      characteristics={<CertificateCharacteristics />}
      scrollDown={<ScrollDown />}
    />
  );
}
