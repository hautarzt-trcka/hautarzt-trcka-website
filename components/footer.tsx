import { ContactData } from "@/lib/models";
import {Button} from "@nextui-org/button";
import { useEffect, useState } from "react";
import {Mail, Phone} from "react-feather";

export default function AppFooter() {
  const [contactData, setContactData] = useState<ContactData | null>(null);

  useEffect(() => {
    fetch('/kontakt.json', { cache: 'no-cache' })
      .then(response => response.json())
      .then(data => {
        setContactData(data);
      });
  }, []);

  if (!contactData) {
    setContactData('setContactData'); // or a loading spinner
  }

  return (
    <footer className="fixed inset-x-0 bottom-0 z-10 p-4 backdrop-blur-lg backdrop-saturate-150 bg-background/70 border-t border-divider">
      <div className="relative flex items-center justify-center gap-4">
        <a href="mailto:test@gmail.com">
          <Button
            className="bg-gradient-to-tr from-blue-400 to-blue-700 text-white shadow-lg transform transition-transform duration-200 hover:-translate-y-1 focus:-translate-y-1"
            color="default" radius="full"
            endContent={<Mail size={18} color="white"/>}>
            E-Mail
          </Button>
        </a>
        <a href={`tel:${contactData.phone}`}>
          <Button
            className="bg-gradient-to-tr from-blue-400 to-blue-700 text-white shadow-lg transform transition-transform duration-200 hover:-translate-y-1 focus:-translate-y-1"
            color="default" radius="full"
            endContent={<Phone size={18} color="white"/>}>
            Anrufen
          </Button>
        </a>
      </div>
    </footer>
  );
}
