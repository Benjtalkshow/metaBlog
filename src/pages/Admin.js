import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useSelector } from "react-redux";
import { selectUname, selectUserId } from "../redux/slice/authSlice";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Admin = () => {
  const isUserName = useSelector(selectUname);
  const isUserId = useSelector(selectUserId);
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const collectionRef = collection(db, "posts");

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formattedTitle = capitalizeFirstLetter(title);

      await addDoc(collectionRef, {
        title: formattedTitle,
        category: capitalizeFirstLetter(category),
        content,
        file,
        author: { name: isUserName || "Admin", id: isUserId },
      });
      setTitle("");
      setCategory("");
      setContent("");
      setFile("");
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      toast.success("Post created Successfully!!");
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      toast.error("Post not created!");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 mb-5">
      {isLoading && <Loader />}
      <div className="p-5 max-w-md w-full md:w-[700px] bg-white shadow-md rounded-lg overflow-hidden">
        <h1 className="font-bold text-lg text-badge text-center">
          Admin Dashboard
        </h1>
        <p className="text-primary text-center">Create a Post</p>
        <form
          className="mt-5 flex-col flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-start items-center w-full">
            <label className="text-badge block">Title</label>
          </div>
          <input
            placeholder="Title"
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="outline-none border-primary p-2 mb-2 border-[1px] rounded focus:ring focus:border-badge w-full"
          />
          <div className="flex justify-start items-center w-full">
            <label className="text-badge block">Category</label>
          </div>
          <input
            placeholder="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            className="outline-none border-primary p-2 mb-2 border-[1px] rounded focus:ring focus:border-badge w-full"
          />
          <div className="flex justify-start items-center w-full">
            <label className="text-badge block">Content</label>
          </div>
          <textarea
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
            type="textarea"
            placeholder="content"
            className="outline-none border-primary p-2 w-full mb-2 border-[1px] rounded focus:ring focus:border-badge"
          />
          <div className="flex justify-start items-center w-full">
            <label className="text-badge block">Image</label>
          </div>
          <input
            placeholder="image url"
            type="text"
            value={file}
            onChange={(e) => setFile(e.target.value)}
            className="outline-none border-primary p-2 mb-2 border-[1px] rounded focus:ring focus:border-badge w-full"
          />
          <button
            type="submit"
            className="bg-badge rounded py-2 text-white mt-2 cursor-pointer focus:ring w-full"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
