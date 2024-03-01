'use client';

import {Card, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/button";
import {Image} from "@nextui-org/image";
import NextImage from "next/image";
import {useRef} from "react";
import {useIsVisible} from "@/components/viewport";
import {MapPin} from "react-feather";

export default function Home() {
  const googleMapsLink = 'https://www.google.com/maps/place/Dr.+med.+Jiri+Trcka/@49.2766354,11.4592672,19z/data=!4m6!' +
    '3m5!1s0x479f6f5350355359:0x1262982f48271d15!8m2!3d49.276624!4d11.459691!16s%2Fg%2F11gy3f8mfq?entry=ttu';

  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  return (
    <main className="flex h-full flex-col items-center justify-center p-3 space-y-14">
      <div ref={ref1} className={`mt-14 flex flex-col items-center justify-center space-y-2 sm:text-xl md:text-3xl lg:text-5xl font-bold
      transition-opacity ease-in duration-400 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <span>HERZLICH WILLKOMMEN IN DER</span>
        <span>HAUTARZT<span className="text-blue-500">PRAXIS</span></span>
        <span>VON <span className="text-blue-500">DR. MED. JIRI TRCKA</span></span>
      </div>

      <div ref={ref2} className={`transition-opacity delay-100 ease-in duration-400 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none"
        >
          <Image
            as={NextImage}
            alt="Google Maps"
            className="object-cover"
            src="/map.png"
            isZoomed
            height={300}
            width={400}
          />
          <CardFooter
            className="flex-wrap justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <div className="flex flex-col justify-center align-items-center flex-1">
              <p className="text-tiny text-black/80 text-center">Bahnhofstraße 2</p>
              <p className="text-tiny text-black/80 text-center">92318 Neumarkt</p>
            </div>
            <div className="flex justify-center align-items-center flex-1">
              <Button className="text-tiny text-black bg-black/20" variant="flat" color="default" radius="lg" size="sm"
                      endContent={<MapPin size={18}/>}
                      onPress={() => window.open(googleMapsLink)}>
                Maps öffnen
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
