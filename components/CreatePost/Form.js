import React, { useEffect, useState } from "react";
import Data from "../../shared/Data";
import { useSession } from "next-auth/react";
import app from "./../../shared/FirebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, 
    ref, uploadBytes } from "firebase/storage";
import Toast from "../Toast";

function Form() {
  const [inputs, setInputs] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [file, setFile] = useState();
  const [submit, setSubmit] = useState(false);

  const { data: session } = useSession();
  const db = getFirestore(app);
  const storage = getStorage(app);

  // Update inputs state with session user data
  useEffect(() => {
    if (session) {
      setInputs((values) => ({ ...values, userName: session.user?.name }));
      setInputs((values) => ({ ...values, userImage: session.user?.image }));
      setInputs((values) => ({ ...values, email: session.user?.email }));
    }
  }, [session]);

  // Save post to Firestore when submit state changes
  useEffect(() => {
    if (submit) {
      savePost();
    }
  }, [submit]);

  // Handle input changes
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowToast(true);

    // Upload image to Firebase Storage
    const storageRef = ref(storage, 'ninja-player/' + file?.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    }).then(resp => {
      // Get download URL of uploaded image
      getDownloadURL(storageRef).then(async (url) => {
        // Update inputs state with image URL
        setInputs((values) => ({ ...values, image: url }));
        setSubmit(true); // Trigger submission after image upload
      });
    });
  };

  // Save post data to Firestore
  const savePost = async () => {
    await setDoc(doc(db, "chatgroups", Date.now().toString()), inputs);
  };

  return (
    <div className="mt-4">
      {showToast && (
        <div className="absolute top-10 right-10">
          <Toast
            msg={"Post Created Successfully"}
            closeToast={() => setShowToast(false)}
          />
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <textarea
          name="desc"
          className="w-full mb-4 outline-blue-400 border-[1px] p-2 rounded-md"
          required
          onChange={handleChange}
          placeholder="Write Description here"
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <select
          name="game"
          onChange={handleChange}
          required
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        >
          <option disabled defaultValue>
            Select Category
          </option>
          {Data.GameList.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/gif, image/jpeg, image/png"
          className="mb-5 border-[1px] w-full"
        />
        <button
          type="submit"
          className="bg-red-700 w-full p-1 rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
