import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function Profile() {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return user ? <h1>{user.displayName}</h1> : 'Not logged in';
}
