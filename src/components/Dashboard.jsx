
import { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  
  const user = [
    {
      id: 1,
      profile: "https://i.pravatar.cc/100?img=60",
      name: "John Doe",
      email: "john.doe@example.com",
      gender: "male",
      phone: "+1234567890",
    },
    {
      id: 2,
      profile: "https://i.pravatar.cc/100?img=20",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      gender: "female",
      phone: "+1234567891",
    },
    {
      id: 3,
      profile: "https://i.pravatar.cc/100?img=11",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      gender: "male",
      phone: "+1234567892",
    },
    {
      id: 4,
      profile: "https://i.pravatar.cc/100?img=21",
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      gender: "female",
      phone: "+1234567893",
    },
    {
      id: 5,
      profile: "https://i.pravatar.cc/100?img=14",
      name: "William Davis",
      email: "william.davis@example.com",
      gender: "male",
      phone: "+1234567894",
    },
    {
      id: 6,
      profile: "https://i.pravatar.cc/100?img=16",
      name: "Olivia Wilson",
      email: "olivia.wilson@example.com",
      gender: "female",
      phone: "+1234567895",
    },
    {
      id: 7,
      profile: "https://i.pravatar.cc/100?img=4",
      name: "James Miller",
      email: "james.miller@example.com",
      gender: "male",
      phone: "+1234567896",
    },
    {
      id: 8,
      profile: "https://i.pravatar.cc/100?img=24",
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      gender: "female",
      phone: "+1234567897",
    },
    {
      id: 9,
      profile: "https://i.pravatar.cc/100?img=12",
      name: "Alexander Garcia",
      email: "alex.garcia@example.com",
      gender: "male",
      phone: "+1234567898",
    },
    {
      id: 10,
      profile: "https://i.pravatar.cc/100?img=31",
      name: "Isabella Martinez",
      email: "isabella.martinez@example.com",
      gender: "female",
      phone: "+1234567899",
    },
  ];

  const [blockStatus, setblockStatus] = useState({})

  const toggleButton = (id) =>{
    setblockStatus((prev)=>({...prev,[id] : !prev[id]}))
  }



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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <img
                      src={user.profile}
                      alt={user.name}
                      className="profile-img"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button
                      className={`p-2  rounded-md hover: scale-110 transition hover:bg-green-500 ${
                      blockStatus[user.id]
                        ? "bg-red-400 hover:bg-red-500"
                        : "bg-green-300 hover:bg-green-500"
                    }`}
                      onClick={()=>toggleButton(user.id)}
                    >
                      {blockStatus[user.id] ? "Block": "Unblock"  }
                    </button>
                  </td>
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
