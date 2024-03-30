'use client';

import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {DayTime, sprechstunden} from "@/public/sprechstunden";
import {Button} from "@nextui-org/button";
import {Phone} from "react-feather";

function getCurrentDate(): Date {
  const currentDate = new Date();
  console.log(currentDate);
  return currentDate;
}

interface TimeCardProps {
  dayTimes: Array<DayTime>;
  footerTop: string;
  footerBottom: string;
  ariaLabel: string;
}

export default function TimeCard({ dayTimes, footerTop, footerBottom, ariaLabel }: TimeCardProps) {
  return (
    <Card
      className="border-none flex-1 basis-[350px]"
      radius="lg"
    >
      <CardBody>
        <Table
          hideHeader
          removeWrapper
          color="primary"
          selectionMode="single"
          defaultSelectedKeys={[(getCurrentDate().getDay() - 1).toString()]}
          aria-label={ariaLabel}>
          <TableHeader>
            <TableColumn>WOCHENTAG</TableColumn>
            <TableColumn>ZEITEN</TableColumn>
          </TableHeader>
          <TableBody>
            {dayTimes.map((row, index) =>
              <TableRow key={index}>
                <TableCell>{row.weekday}</TableCell>
                <TableCell><div className="flex flex-col">{row.times.map((time, index) => <span key={index}>{time}</span>)}</div></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardBody>
      <hr className="mx-2 my-0" />
      <CardFooter className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col justify-center align-center">
          <p className="text-black/80 text-center whitespace-nowrap">{ footerTop }</p>
          <p className="text-black/80 text-center whitespace-nowrap">{ footerBottom }</p>
        </div>
        <div className="flex justify-center align-center">
          <a href="tel:09181-48780">
            <Button
              className="bg-gradient-to-tr from-blue-400 to-blue-700 text-white shadow-lg transform transition-transform duration-200 hover:-translate-y-1 focus:-translate-y-1"
              color="default"
              radius="full"
              endContent={<Phone size={18} color="white"/>}>
              09181-48780
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
