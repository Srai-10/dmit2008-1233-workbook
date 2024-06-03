<<<<<<< HEAD
import Hello from './components/Hello';
import Greeting from './components/Greeting';
import ComponentWrapper from './components/ComponentWrapper';
import FriendList from './components/FriendList';

export default function Home() {
  return (
  <main>
    <h1>Home Page</h1>
    <ComponentWrapper>
    <Hello />
    <Greeting />
    <Greeting name="Sam" />
    </ComponentWrapper>

    <h2>Friend List</h2>
    <FriendList />
  </main>
=======
import ComponentWrapper from './components/ComponentWrapper';
import FriendList from './components/FriendList';
import Greeting from './components/Greeting';
import Hello from './components/Hello';

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <ComponentWrapper>
        <Hello />
        <Greeting />
        <Greeting name="Nate" />
      </ComponentWrapper>

      <h2>Friend List</h2>
      <FriendList />
    </main>
>>>>>>> 9321ec24d913848735cd57ef4872e27c67e0a9fd
  );
}
