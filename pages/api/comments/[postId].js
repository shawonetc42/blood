// pages/api/comments/[postId].js

import { firestore } from '../../../shared/FirebaseConfig';

export default async function handler(req, res) {
  const { postId } = req.query;

  if (req.method === 'GET') {
    try {
      const commentsSnapshot = await firestore.collection('comments').where('postId', '==', postId).get();
      const comments = commentsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      res.status(200).json({ comments });
    } catch (error) {
      console.error('Error fetching comments:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    const { text } = req.body;

    try {
      const newCommentRef = await firestore.collection('comments').add({ postId, text });
      const newCommentSnapshot = await newCommentRef.get();
      const newComment = { id: newCommentSnapshot.id, ...newCommentSnapshot.data() };
      res.status(201).json({ newComment });
    } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
