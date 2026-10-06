import "./styles.css";
import data from "./unfaelle.json";

export default function App() {
  const unfaelle = data; // Unfaelle ist ein Array mit Objekten aus der JSON Datei.

  // Aufgabe 1
  console.log(unfaelle[unfaelle.length - 1]);

  const letzterUnfall = `${unfaelle[unfaelle.length - 1].id_unfall} : ${
    unfaelle[unfaelle.length - 1].schwere
  }`;

  // Aufgabe 2
  const unfaelleNebenstrassen = unfaelle.filter(
    (unfall) => unfall.strasseart === "Nebenstrasse",
  );
  console.log(unfaelleNebenstrassen);

  // Aufgabe 3
  const veloUnfall = unfaelle.find(
    (unfall) =>
      unfall.monat === 11 &&
      unfall.jahr === "2015" &&
      unfall.fahrrd_bet === true,
  );
  console.log(veloUnfall);

  return (
    <div className="App">
      <div>{letzterUnfall}</div>
      {myTemplateString}
      {/* Aufgabe 4 */}
      <ol>
        {unfaelle.map((unfall, index) => (
          <li key={index}>{unfall.id_unfall}</li>
          /* Was fehlte hier noch? Die geschweiften Klammern um unfall.id_unfall! Wir erzeugen mit der .map() Funktion dynamisch HTML Elemente und in denen wollen wir eine JavaScript Variable evaluieren. Daher müssen wir mit Klammern wieder in den JS Kontext wechseln. */
        ))}
      </ol>
    </div>
  );
}
