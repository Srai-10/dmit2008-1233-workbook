<<<<<<< HEAD
const friends = [
    {
        firstName: 'Jane',
        lastName: 'Doe',
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',

    },
];

export default function FriendList() {
    return (
        <ul>
            {friends.map((friend, idx) => {
                const { firstName, lastName } = friend;
                return (
                    <li key={idx}>
                    {firstName} {lastName}
                </li>
                );
                })}
        </ul>
    );
                }
=======
const friends = [
  {
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    firstName: 'Clark',
    lastName: 'Kent',
  },
];

export default function FriendList() {
  return (
    <ul>
      {friends.map((friend, idx) => {
        const { firstName, lastName } = friend;
        return (
          <li key={idx}>
            {firstName} {lastName}
          </li>
        );
      })}
    </ul>
  );
}
>>>>>>> 9321ec24d913848735cd57ef4872e27c67e0a9fd
