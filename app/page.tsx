'use client';

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { MapPin, Phone, Mail } from "react-feather";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { sprechstunden, terminvereinbarungen } from "@/public/sprechstunden";
import FadeInY from "@/components/fadeInY";

export default function Home() {
  const googleMapsLink = `https://www.google.com/maps/place/Dr.+med.+Jiri+Trcka/@49.2766354,11.4592672,19z/data=!4m6!
    3m5!1s0x479f6f5350355359:0x1262982f48271d15!8m2!3d49.276624!4d11.459691!16s%2Fg%2F11gy3f8mfq?entry=ttu`;

  const currentDate = new Date();

  return (
    <div className="flex h-full flex-col items-center justify-center p-3 space-y-14">
      <div className="mt-14 flex flex-col items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
        <span>HERZLICH WILLKOMMEN IN DER</span>
        <span>HAUTARZT<span className="text-gradient bg-gradient-to-tr from-blue-400 to-blue-700">PRAXIS</span></span>
        <span>VON <span className="text-gradient bg-gradient-to-tr from-blue-400 to-blue-700">DR. MED. JIRI TRCKA</span></span>
      </div>

      <div className="flex flex-row flex-wrap justify-center align-center gap-4">
        <Card
          className="border-none"
          radius="lg"
        >
          <CardBody>
          <Table 
              hideHeader
              removeWrapper 
              color="primary" 
              selectionMode="single" 
              defaultSelectedKeys={[(currentDate.getDay() - 1).toString()]} 
              aria-label="Sprechstunden">
            <TableHeader>
              <TableColumn>WOCHENTAG</TableColumn>
              <TableColumn>ZEITEN</TableColumn>
            </TableHeader>
            <TableBody>
              {sprechstunden.map((row, index) =>
                <TableRow key={index}>
                  <TableCell>{row.weekday}</TableCell>
                  <TableCell><div className="flex flex-col">{row.times.map((time, index) => <span key={index}>{time}</span>)}</div></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          </CardBody>
          <hr className="mx-2 my-0"/>
          <CardFooter
            className="flex flex-wrap justify-between gap-2">
            <div className="flex flex-col justify-center align-items-center flex-1">
              <p className="text-black/80 text-center">Sprechstunde vereinbaren</p>
            </div>
            <div className="flex justify-center align-center flex-1">
              <a href="tel:09181-48780">
                <Button className="bg-gradient-to-tr from-blue-400 to-blue-700 text-white shadow-lg transform transition-transform duration-200 hover:-translate-y-1 focus:-translate-y-1" color="default" radius="full"
                  endContent={<Phone size={18} color="white" />}>
                  09181-48780
                </Button>
              </a>
            </div>
          </CardFooter>
        </Card>

        <Card
          className="border-none p-2"
          radius="lg"
        >
          <CardBody>
          <Table 
              hideHeader 
              removeWrapper 
              color="primary" 
              selectionMode="single" 
              defaultSelectedKeys={[(currentDate.getDay() - 1).toString()]} 
              aria-label="Terminvereinbarungen">
            <TableHeader>
              <TableColumn>WOCHENTAG</TableColumn>
              <TableColumn>ZEITEN</TableColumn>
            </TableHeader>
            <TableBody>
              {terminvereinbarungen.map((row, index) =>
                <TableRow key={index.toString()}>
                  <TableCell>{row.weekday}</TableCell>
                  <TableCell><div className="flex flex-col">{row.times.map((time, index) => <span key={index}>{time}</span>)}</div></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          </CardBody>
          <hr className="mx-2 my-0"/>
          <CardFooter
            className="flex flex-wrap justify-between gap-2">
            <div className="flex flex-col justify-center align-items-center flex-1">
              <p className="text-black/80 text-center">Termin vereinbaren</p>
            </div>
            <div className="flex justify-center align-center flex-1">
              <a href="tel:09181-48780">
                <Button className="bg-gradient-to-tr from-blue-400 to-blue-700 text-white shadow-lg transform transition-transform duration-200 hover:-translate-y-1 focus:-translate-y-1" color="default" radius="full"
                  endContent={<Phone size={18} color="white" />}>
                  09181-48780
                </Button>
              </a>
            </div>
          </CardFooter>
        </Card>

        <Card
          className="border-none min-h-[350px]"
          radius="lg"
        >
          <CardBody>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d650.7469964183489!2d11.459047269661136!3d49.27662487315907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f6f5350355359%3A0x1262982f48271d15!2sDr.%20med.%20Jiri%20Trcka!5e0!3m2!1sen!2sde!4v1709804919215!5m2!1sen!2sde"
              className="w-full h-full border-none rounded-lg"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </CardBody>
          <hr className="mx-2 my-0"/>
          <CardFooter
            className="flex flex-wrap justify-between gap-2">
            <div className="flex flex-col justify-center align-center flex-1">
              <p className="text-black/80 text-center">Bahnhofstraße 2</p>
              <p className="text-black/80 text-center">92318 Neumarkt</p>
            </div>
            <div className="flex justify-center align-center flex-1">
              <Button className="bg-gradient-to-tr from-blue-400 to-blue-700 text-white shadow-lg transform transition-transform duration-200 hover:-translate-y-1 focus:-translate-y-1" color="default" radius="full"
                endContent={<MapPin size={18} color="white" />}
                onPress={() => window.open(googleMapsLink)}>
                Maps öffnen
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>

      <div className="relative flex flex-col items-center justify-center space-y-2 sm:text-lg md:text-xl lg:text-2xl font-bold z-10 pb-20">
        <FadeInY delay={0.2}>
          WIR FREUEN UNS AUF <span className="text-gradient bg-gradient-to-tr from-blue-400 to-blue-700">IHREN BESUCH</span>
        </FadeInY>
        <FadeInY delay={0.4}>
          IN <span className="text-gradient bg-gradient-to-tr from-blue-400 to-blue-700">UNSERER PRAXIS</span>
        </FadeInY>
      </div>

      <footer className="fixed inset-x-0 bottom-0 z-10 p-4 backdrop-blur-lg backdrop-saturate-150 bg-background/70 border-t border-divider">
        <div className="relative flex items-center justify-center gap-4">
          <a href="mailto:test@gmail.com">
            <Button className="bg-gradient-to-tr from-blue-400 to-blue-700 text-white shadow-lg transform transition-transform duration-200 hover:-translate-y-1 focus:-translate-y-1" color="default" radius="full"
              endContent={<Mail size={18} color="white" />}>
              E-Mail
            </Button>
          </a>
          <a href="tel:09181-48780">
            <Button className="bg-gradient-to-tr from-blue-400 to-blue-700 text-white shadow-lg transform transition-transform duration-200 hover:-translate-y-1 focus:-translate-y-1" color="default" radius="full"
              endContent={<Phone size={18} color="white" />}>
              Anrufen
            </Button>
          </a>
        </div>
      </footer>
    </div>
  );
}
