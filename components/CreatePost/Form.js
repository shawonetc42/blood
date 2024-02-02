import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter hook
import { useSession } from "next-auth/react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import app from "../../shared/FirebaseConfig";
import Toast from "../Toast";

function Form() {
  const [inputs, setInputs] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [file, setFile] = useState();
  const [submit, setSubmit] = useState(false);

  const { data: session } = useSession();
  const db = getFirestore(app);
  const storage = getStorage(app);
  const router = useRouter(); // Initialize useRouter hook

  // Update inputs state with session user data
  useEffect(() => {
    if (session) {
      setInputs((values) => ({
        ...values,
        userName: session.user?.name,
        userImage: session.user?.image,
        email: session.user?.email,
      }));
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

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowToast(true);

    // Upload image to Firebase Storage
    const storageRef = ref(storage, "ninja-player/" + file?.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
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
    // Navigate to home page after successful submission
    router.push("/");
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

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-gray-200 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-300 ml-4"
          >
            Choose Photo
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/gif, image/jpeg, image/png"
            className="hidden"
            id="file-upload"
          />
        </div>
        {file && <span className="block text-sm mb-2 ml-2">{file.name}</span>}
        <button
          type="submit"
          className="w-full bg-red-700 text-white py-2 rounded-md transition duration-300 hover:bg-red-800 focus:outline-none focus:ring focus:bg-red-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
