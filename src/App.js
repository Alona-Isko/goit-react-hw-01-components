import './App.css';

import Profile from './components/Profile/Profile';
import user from './data/user.json';

import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';
  
  
function App() {
  return (
    <div className="App">

      <Profile
        name={user.name}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <FriendList friends={friends} />
      
      <Statistics
        title="Upload stats"
        stats={statisticalData}
      />

      <TransactionHistory items={transactions} />

    </div>
  );
}

export default App;
