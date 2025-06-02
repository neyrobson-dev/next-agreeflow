import React, { useRef, useEffect } from "react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";

const FullCalendar = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      const calendar = new Calendar(calendarRef.current, {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        locale: ptBrLocale,
        events: [
          { title: "Event 1", date: "2025-06-02" },
          { title: "Convocação", date: "2025-06-03" },
        ],
      });

      calendar.render();
    }
  }, []);

  return <div ref={calendarRef}></div>;
};

export default FullCalendar;
