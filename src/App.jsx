import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./db/userData.json";
import friends from "./db/friends.json";
import transactions from "./db/transactions.json";
import ProfileModal from "./components/ProfileModal/ProfileModal";

 const App = () => {
  return (
    <>
       <div className="App">
         <ProfileModal/>
       </div>
      <Profile
       name={userData.username}
       tag={userData.tag}
       location={userData.location}
       image={userData.avatar}
       stats={userData.stats}
      />
      <>
      <FriendList friends={friends}/>
      </>
      <>
      <TransactionHistory transactions={transactions}/> 
      </>
      </>
      
  );
};
export default App;



