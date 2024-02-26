'use client';

import {Card, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/button";
import {Image} from "@nextui-org/image";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center p-3">
        <span className="sm:text-lg md:text-2xl lg:text-4xl font-bold">HERZLICH WILLKOMMEN IN DER</span>
        <span className="sm:text-lg md:text-2xl lg:text-4xl font-bold">HAUTARZT<span className="text-blue-500">PRAXIS</span></span>
        <span className="sm:text-lg md:text-2xl lg:text-4xl font-bold">VON <span className="text-blue-500">DR. MED. JIRI TRCKA</span></span>

        <div>
            <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
            >
                <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={200}
                    src="/map.png"
                    width={300}
                    isZoomed
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <div>
                        <p className="text-tiny text-black/80">Bahnhofstraße 2</p>
                        <p className="text-tiny text-black/80">92318 Neumarkt</p>
                    </div>
                    <Button className="text-tiny text-black bg-black/20" variant="flat" color="default" radius="lg" size="sm" onPress={() => window.open('https://www.google.com/maps/place/Dr.+med.+Jiri+Trcka/@49.2766354,11.4592672,19z/data=!4m6!3m5!1s0x479f6f5350355359:0x1262982f48271d15!8m2!3d49.276624!4d11.459691!16s%2Fg%2F11gy3f8mfq?entry=ttu', '_blank')}>
                        Maps öffnen
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </main>
  );
}
