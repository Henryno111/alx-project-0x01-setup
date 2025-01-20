import React from 'react';

const Users: React.FC = () => {
    return (
        <div>
            <h1>Users</h1>
            <p>List of users...</p>
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()
  
    return {
      props: {
        posts
      }
    }
  }
  
export default Users;

