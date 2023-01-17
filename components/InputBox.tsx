import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import { db, storage } from '../firebase';
import firebase from 'firebase';

function InputBox() {
  const { data: session, data: loading } = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e: any) => {
    e.preventDefault();

    if (!inputRef.current?.value) return;

    db.collection('post')
      .add({
        message: inputRef.current?.value,
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, 'data_url');

          removeImage();

          uploadTask.on(
            'state_changed',
            null,
            (error) => {
              // ERROR function
              console.log(error);
            },
            () => {
              // COMPLETE function
              storage
                .ref('posts')
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection('posts').doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true } // this is IMPORTANT or it will replace your post!!
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = '';
  };

  const addImageToPost = (e) => {
    // read the users click about their file
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    // bc it is asychronous wait until it comes back
    reader.onload = (readerEvent: any) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={40}
          height={40}
          alt=""
        />
        <form action="" className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 hover:outline-none"
            type="text"
            placeholder={`Whats on your mind, ${session?.user?.name}?`}
            ref={inputRef}
          />

          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {/* If there is somethin in imagePost then do something */}
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="object-contain h-10 " src={imageToPost} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          onClick={() => filepickerRef.current?.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filepickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>
        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
