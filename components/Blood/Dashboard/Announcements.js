// Announcements.js

import React, { useState, useEffect } from 'react';
import { getDocs, collection, addDoc, query, orderBy, limit, startAfter } from 'firebase/firestore';
import { db } from '../../Shared/FirebaseConfig';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState('');
  const [lastDoc, setLastDoc] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const announcementsCollection = collection(db, 'announcements');
        const q = query(announcementsCollection, orderBy('timestamp', 'desc'), limit(5));

        const announcementsSnapshot = await getDocs(q);
        const announcementsData = [];

        announcementsSnapshot.forEach((doc) => {
          const data = doc.data();
          announcementsData.push({ id: doc.id, ...data });
        });

        setAnnouncements(announcementsData);

        // Set the last document for pagination
        const lastVisible = announcementsSnapshot.docs[announcementsSnapshot.docs.length - 1];
        setLastDoc(lastVisible);
      } catch (error) {
        console.error('Error fetching announcements:', error.message);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleLoadMore = async () => {
    try {
      const announcementsCollection = collection(db, 'announcements');
      const q = query(
        announcementsCollection,
        orderBy('timestamp', 'desc'),
        startAfter(lastDoc),
        limit(5)
      );

      const newAnnouncementsSnapshot = await getDocs(q);
      const newAnnouncementsData = [];

      newAnnouncementsSnapshot.forEach((doc) => {
        const data = doc.data();
        newAnnouncementsData.push({ id: doc.id, ...data });
      });

      setAnnouncements((prevAnnouncements) => [...prevAnnouncements, ...newAnnouncementsData]);

      // Set the last document for the next pagination
      const lastVisible = newAnnouncementsSnapshot.docs[newAnnouncementsSnapshot.docs.length - 1];
      setLastDoc(lastVisible);
    } catch (error) {
      console.error('Error fetching more announcements:', error.message);
    }
  };

  const handleAddAnnouncement = async () => {
    try {
      const newAnnouncementDoc = await addDoc(collection(db, 'announcements'), {
        message: newAnnouncement,
        timestamp: new Date(),
      });

      setNewAnnouncement('');
      setAnnouncements((prevAnnouncements) => [
        { id: newAnnouncementDoc.id, message: newAnnouncement },
        ...prevAnnouncements,
      ]);
    } catch (error) {
      console.error('Error adding announcement:', error.message);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Announcements</h3>
      <ul className="list-disc list-inside">
        {announcements.map((announcement) => (
          <li key={announcement.id} className="mb-2">
            {announcement.message}
          </li>
        ))}
      </ul>

      {/* Load more button for pagination */}
      <button
        onClick={handleLoadMore}
        className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Load More
      </button>

      {/* Form to add new announcement */}
      <div className="mt-4">
        <textarea
          rows="4"
          placeholder="Type your announcement..."
          value={newAnnouncement}
          onChange={(e) => setNewAnnouncement(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAddAnnouncement}
          className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Announcement
        </button>
      </div>
    </div>
  );
};

export default Announcements;
