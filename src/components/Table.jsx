import React from "react";
import './table.css'


export default function Table() {

    const users = [
  {
    "id": 1,
    "name": "Markus Müller",
    "email": "markus.mueller@bmw.com",
    "department": "Engineering"
  },
  {
    "id": 2,
    "name": "Sophie Schneider",
    "email": "sophie.schneider@bmw.com",
    "department": "Design"
  },
  {
    "id": 3,
    "name": "Leon Fischer",
    "email": "leon.fischer@bmw.com",
    "department": "Research & Development"
  },
  {
    "id": 4,
    "name": "Hannah Weber",
    "email": "hannah.weber@bmw.com",
    "department": "Customer Experience"
  },
  {
    "id": 5,
    "name": "Tobias Wagner",
    "email": "tobias.wagner@bmw.com",
    "department": "Production"
  },
  {
    "id": 6,
    "name": "Felix Bauer",
    "email": "felix.bauer@bmw.com",
    "department": "Quality Control"
  },
  {
    "id": 7,
    "name": "Mia Hoffmann",
    "email": "mia.hoffmann@bmw.com",
    "department": "Marketing"
  },
  {
    "id": 8,
    "name": "Jonas Keller",
    "email": "jonas.keller@bmw.com",
    "department": "IT & Software Systems"
  },
  {
    "id": 9,
    "name": "Laura Vogel",
    "email": "laura.vogel@bmw.com",
    "department": "Finance"
  },
  {
    "id": 10,
    "name": "Daniel Schäfer",
    "email": "daniel.schaefer@bmw.com",
    "department": "Logistics"
  },
  {
    "id": 11,
    "name": "Nina Krause",
    "email": "nina.krause@bmw.com",
    "department": "Human Resources"
  },
  {
    "id": 12,
    "name": "Paul Zimmer",
    "email": "paul.zimmer@bmw.com",
    "department": "Mechanical Engineering"
  },
  {
    "id": 13,
    "name": "Lena Brandt",
    "email": "lena.brandt@bmw.com",
    "department": "Public Relations"
  },
  {
    "id": 14,
    "name": "Sebastian König",
    "email": "sebastian.koenig@bmw.com",
    "department": "Vehicle Testing"
  },
  {
    "id": 15,
    "name": "Katrin Busch",
    "email": "katrin.busch@bmw.com",
    "department": "Innovation Lab"
  }
];


  
//API FOR BMW USER = fetch("https://my-backend.com/api/bmw-users"


  return (
    <div className="data">
      <table border="1" cellPadding="10" className="t1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
             <th>department</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user , index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
               <td>{user.department}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
