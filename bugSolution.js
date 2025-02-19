The best solution involves using React Hooks, specifically `useEffect`, to manage the listener's lifecycle more effectively:

```javascript
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Your Firebase configuration
import { useEffect, useState } from 'react';

function MyComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Cleanup function
  }, []);

  return (
    // ... your JSX ...
  );
}

export default MyComponent;
```

By using the `useEffect` hook and its cleanup function (the function returned from `useEffect`), the `onAuthStateChanged` listener is reliably detached when the component unmounts, preventing potential memory leaks.  This approach provides a cleaner and more reliable way to handle Firebase authentication changes within React components.