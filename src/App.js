import "./App.css";
import React from "react";
import BirthdayCircle from "./BirthdayCircle";
import LifeEventCircle from "./LifeEventCircle";
import StickyNote from "./utils/StickyNote";
import DigitalClock from "./utils/DigitalClock";
import ToDoChecklist from "./utils/TodoList";


const people = [
  { name: "Justin", birthDate: "1981-08-27" },
  { name: "Sandy", birthDate: "1989-05-25" },
  { name: "Finnley", birthDate: "2015-06-17" },
  { name: "Fox", birthDate: "2021-09-24" },
  { name: "Gizmo", birthDate: "2023-10-31" },
];

const lifeevents = [
  { name: "Anniversary", birthDate: "2020-02-29" },
];

export default function App() {
  return (
    <section>


    <div className="dashboard content">
      {/* Left column */}
      <div className="sidebar">
        <DigitalClock />
        <ToDoChecklist />
      </div>

      {/* Right column - row of circles */}
      <div className="main-content">
        <div className="circle-row">
          {people.map((person, index) => (
            <BirthdayCircle
              key={index}
              id={index}
              name={person.name}
              birthDate={person.birthDate}
            />
          ))}
          {lifeevents.map((event, index) => (
            <LifeEventCircle
              key={index}
              id={index}
              name={event.name}
              birthDate={event.birthDate}
            />
          ))}
        </div>
      </div>
    </div>

    <div class="wave">
      <span></span>
      <span></span>
      <span></span>
    </div>

    </section>
  );
}


