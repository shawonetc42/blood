// RecentActivity.js

import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../Shared/FirebaseConfig';

const RecentActivity = () => {
  const [activityLog, setActivityLog] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'announcements'), (snapshot) => {
      const activityData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setActivityLog(activityData);
    });

    return () => {
      // Unsubscribe from the real-time updates when the component unmounts
      unsubscribe();
    };
  }, []);

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
      <ul>
        {activityLog.map((activity, index) => (
          <li key={index} className="mb-2">{activity.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
