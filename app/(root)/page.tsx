import BalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/HeaderBox';
import React from 'react'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = {firstName: 'Baysah', lastName: 'Korti', email: 'baysah.korti@horizonbank.com'};
  return (
    <section className="home">
      <div className="home-content">
        <header>
          <HeaderBox
            type="greeting"
            title="Welcome, "
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and Manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={1250.23}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 1234.50, name: 'Horizon Bank'}, {currentBalance: 456.78, name: 'Chase Bank'}]} />
    </section>
  );
}

export default Home