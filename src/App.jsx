import FriendList from './components/FriendList'
import Profile from './components/Profile'
import TransactionHistory from './components/TransactionHistory' 

import userData from "./db/userData.json"
// import friends from "./db/friends.json"
// import transactions from "./db/transactions.json"

export const App = () => {
  return (
    <>
       <Profile
       name={userData.username}
       tag={userData.tag}
       location={userData.location}
       image={userData.avatar}
       stats={userData.stats}
      />
      <FriendList />
      <TransactionHistory />
  
      </>
      
  );
};
export default App;



