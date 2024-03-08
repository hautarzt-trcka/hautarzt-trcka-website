import { Link } from "@nextui-org/link";

export default function Impressum() {
  return (
    <div className="p-3">
      <div>Dr. med. Jiri Trcka</div>
      <div>Hautarztpraxis</div>
      <div>Bahnhofstr. 2</div>
      <div>92318 Neumarkt</div>
      <div>Tel. Praxis: <Link href="tel:09181-4878-0">09181-4878-0</Link></div>
      <div>Fax. Praxis: <Link href="tel:09181-4878-13">09181-4878-13</Link></div>
      <hr />
      <h3>Haftungsausschluss (Disclaimer)</h3>
      <h4 className="mt-2 mb-1">Haftung für Inhalte</h4>
      <p>Als Diensteanbieter sind wir gemäß § 7
        Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis
        10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
        Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
        bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
        einer
        konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
        diese
        Inhalte umgehend entfernen.</p>
      <h4 className="mt-2 mb-1">Haftung für Links</h4>
      <p>Unser Angebot enthält Links zu externen Webseiten
        Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
        keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
        Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
        mögliche
        Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
        permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
        Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
        umgehend entfernen.</p>
      <h4 className="mt-2 mb-1">Urheberrecht</h4>
      <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
        diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
        jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
        des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
        kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
        wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
        gekennzeichnet.
        Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden
        Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
    </div>
  );
}
