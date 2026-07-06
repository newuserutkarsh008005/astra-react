import React from 'react'

const Calenderbig = () => {
   const event = [
  {
    id: 1,
    title: "Career Consultation",
    start: new Date(2026, 5, 15, 19, 0),
    end: new Date(2026, 5, 15, 20, 0),
  },
];

  return (
    <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 p-4">

   <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />
   
    </div>
  )
}

export default Calenderbig