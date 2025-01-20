import { UserProps } from '@/interfaces';
import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
    console.log(users)
    return (
        <div className="flex flex-col h-screen">
        <Header />
        <main className="p-4">
          <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Post Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
          </div>
          <div className="grid grid-cols-3 gap-2 ">
            {
              users?.map(({ name, website, username, id, email, address, phone, company }: UserProps, key: number) => (
                <UserCard name={name} website={website} username={username} id={id} email={email} address={address} phone={phone} company={company} key={key} />
              ))
            }
          </div>
        </main>
      </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
  
    return {
      props: {
        users
      }
    }
  }

export default Users;

