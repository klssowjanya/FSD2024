import React from 'react';
import Card from './Card';

function CardListUI2() {
  const name123 = 'React';
  const college = 'SVECW';
  const userObject = { name: 'Sowji', branch: 'AIML', year: '3' };
  const users = ['Sowji', 'Alee', 'Sai', 'Devi', 'Rama'];

  return (
    <div style={{ display: 'flex' ,gap: '20px',padding: '100px',marginLeft:'20px',marginRight:'20px'}}>
      {users.map((user1, index) => (
        <Card
          key={index}
          program={name123}
          col={college}
          user={userObject}
          userFromArray={user1}
        />
      ))}
    </div>
  );
}

export default CardListUI2;
