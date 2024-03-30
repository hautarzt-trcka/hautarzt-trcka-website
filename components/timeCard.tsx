'use client';

import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {Button} from "@nextui-org/button";
import {Skeleton} from "@nextui-org/skeleton";
import {Phone} from "react-feather";
import {useEffect, useState} from "react";

function getCurrentDate(): Date {
  const currentDate = new Date();
  console.log(currentDate);
  return currentDate;
}

interface DayTime {
  weekday: string;
  times: string[];
}

interface TimeCardProps {
  path: string;
  footerTop: string;
  footerBottom: string;
  ariaLabel: string;
}

export default function TimeCard({path, footerTop, footerBottom, ariaLabel}: TimeCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [dayTimes, setDayTimes] = useState<DayTime[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://raw.githubusercontent.com/hautarzt-trcka/hautarzt-trcka-data/master/' + path)
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setDayTimes(data);
          setIsLoading(false);
        }, 3000); // delay of 3 seconds
      });
  }, [path]);

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
            {!dayTimes || dayTimes.length == 0 ? (
              Array.from({ length: 5 }).map((_: unknown, index: number) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="w-full rounded-lg">
                      <div className="h-5 w-full rounded-lg bg-default-200"></div>
                    </Skeleton>
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-full rounded-lg">
                      <div className="h-5 w-full rounded-lg bg-default-200"></div>
                    </Skeleton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              dayTimes.map((row, index) =>
                <TableRow key={index}>
                  <TableCell>{row.weekday}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      {row.times.map((time, index) => <span key={index}>{time}</span>)}
                    </div>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </CardBody>
      <hr className="mx-2 my-0"/>
      <CardFooter className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col justify-center align-center">
          <p className="text-black/80 text-center whitespace-nowrap">{footerTop}</p>
          <p className="text-black/80 text-center whitespace-nowrap">{footerBottom}</p>
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
