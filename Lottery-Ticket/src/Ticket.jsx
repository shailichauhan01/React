import React from 'react';
import TicketNum from './TicketNum';
import "./Ticket.css";

function Ticket(  {ticket}) {
  return (
    <div className='Ticket'>
      <p>Ticket</p>
      {ticket.map((num,indx) => (
      <TicketNum num={num} key={indx}/>
      )
      )}
    </div>
  )
}

export default Ticket;