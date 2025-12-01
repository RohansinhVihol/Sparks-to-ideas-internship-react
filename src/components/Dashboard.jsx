import React from "react";
import "./Dashboard.css"

const Dashboard = () => {

    //https://i.pravatar.cc/100?img=6
  const user = [
    {
      id: 1,
      profile: "https://i.pravatar.cc/100?img=2",
      name: "John Doe",
      email: "john.doe@example.com",
      gender: "male",
      phone: "+1234567890",
    },
    {
      id: 2,
      profile: "https://i.pravatar.cc/100?img=2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      gender: "female",
      phone: "+1234567891",
    },
    {
      id: 3,
      profile: "https://i.pravatar.cc/100?img=2",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      gender: "male",
      phone: "+1234567892",
    },
    {
      id: 4,
      profile: "https://i.pravatar.cc/100?img=2",
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      gender: "female",
      phone: "+1234567893",
    },
    {
      id: 5,
      profile: "https://i.pravatar.cc/100?img=2",
      name: "William Davis",
      email: "william.davis@example.com",
      gender: "male",
      phone: "+1234567894",
    },
    {
      id: 6,
      profile: "https://i.pravatar.cc/100?img=2",
      name: "Olivia Wilson",
      email: "olivia.wilson@example.com",
      gender: "female",
      phone: "+1234567895",
    },
    {
      id: 7,
      profile: "https://i.pravatar.cc/100?img=2",
      name: "James Miller",
      email: "james.miller@example.com",
      gender: "male",
      phone: "+1234567896",
    },
    {
      id: 8,
      profile: "https://i.pravatar.cc/100?img=2",
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      gender: "female",
      phone: "+1234567897",
    },
    {
      id: 9,
      profile: "https://i.pravatar.cc/100?img=2",
      name: "Alexander Garcia",
      email: "alex.garcia@example.com",
      gender: "male",
      phone: "+1234567898",
    },
    {
      id: 10,
      profile: "https://i.pravatar.cc/100?img=2",
      name: "Isabella Martinez",
      email: "isabella.martinez@example.com",
      gender: "female",
      phone: "+1234567899",
    },
  ];

  return (
    <>
      <>
  <div className="dashboard-container">
    {/* <div className="user">
    <h1>User Dashboard</h1>
    </div> */}
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Profile</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Mobile Phone</th>
        </tr>
      </thead>
      <tbody>
        {user.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>
              <img src={user.profile} alt={user.name} className="profile-img" />
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</>

    </>
  );
};

export default Dashboard;
