'use client';

import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/button";
import {MapPin} from "react-feather";
import FadeInY from "@/components/fadeInY";
import TimeCard from "@/components/timeCard";

export default function Home() {
  const googleMapsLink = 'https://maps.app.goo.gl/zWBaw1sbewTeFTn18';
  const googleMapsEmbeddedLink = `https://www.google.com/maps/embed?
pb=!1m18!1m12!1m3!1d650.7469964183489!2d11.459047269661136!3d49.27662487315907!2m3!1f0!2f0!3f0!3m2!1
i1024!2i768!4f13.1!3m3!1m2!1s0x479f6f5350355359%3A0x1262982f48271d15!2sDr.%20med.%20Jiri%20Trcka!5e0
!3m2!1sen!2sde!4v1709804919215!5m2!1sen!2sde`;

  return (
    <div className="flex h-full flex-col items-center justify-center p-3 space-y-14">
      <div className="mt-14 flex flex-col items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
        <FadeInY delay={0.2}>
          <span>HERZLICH WILLKOMMEN IN DER</span>
        </FadeInY>
        <FadeInY delay={0.4}>
          <span>HAUTARZT<span className="text-gradient bg-gradient-to-tr from-blue-400 to-blue-700">PRAXIS</span></span>
        </FadeInY>
        <FadeInY delay={0.6}>
          <span>VON <span className="text-gradient bg-gradient-to-tr from-blue-400 to-blue-700">DR. MED. JIRI TRCKA</span></span>
        </FadeInY>
      </div>

      <div className="flex flex-row flex-wrap justify-center align-center gap-4">

        <TimeCard path="sprechstunden.json" footerTop="Sprechstunden" footerBottom="vereinbaren" ariaLabel="Sprechstunden"/>
        <TimeCard path="terminvereinbarungen.json" footerTop="Termin" footerBottom="vereinbaren" ariaLabel="Terminvereinbarungen"/>

        <Card
          className="border-none flex-1 basis-[300px] min-h-[350px]"
          radius="lg"
        >
          <CardBody className="flex-1">
            <iframe
              src={googleMapsEmbeddedLink}
              className="w-full h-full border-none rounded-lg focus-visible:outline-none"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </CardBody>
          <hr className="mx-2 my-0"/>
          <CardFooter className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-col justify-center align-center">
              <p className="text-black/80 text-center whitespace-nowrap">Bahnhofstraße 2</p>
              <p className="text-black/80 text-center whitespace-nowrap">92318 Neumarkt</p>
            </div>
            <div className="flex justify-center align-center">
              <Button
                className="bg-gradient-to-tr from-blue-400 to-blue-700 text-white shadow-lg transform transition-transform duration-200 hover:-translate-y-1 focus:-translate-y-1"
                color="default"
                radius="full"
                endContent={<MapPin size={18} color="white"/>}
                onPress={() => window.open(googleMapsLink)}>
                Maps öffnen
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>

      <div className="relative flex flex-col items-center justify-center text-lg sm:text-lg md:text-xl lg:text-2xl font-bold z-10 pb-8">
        <FadeInY delay={0.2}>
          WIR FREUEN UNS AUF <span className="text-gradient bg-gradient-to-tr from-blue-400 to-blue-700">IHREN BESUCH</span>
        </FadeInY>
        <FadeInY delay={0.4}>
          IN <span className="text-gradient bg-gradient-to-tr from-blue-400 to-blue-700">UNSERER PRAXIS</span>
        </FadeInY>
      </div>
    </div>
  );
}
