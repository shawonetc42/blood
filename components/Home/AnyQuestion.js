import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../Shared/FirebaseConfig';

function AnyQuestion() {
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'questionblood'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setQuestionData(data);
    });

    return () => {
      // Unsubscribe from the real-time updates when the component unmounts
      unsubscribe();
    };
  }, []);

  return (
    <div className="justify-center items-center bg-white flex flex-col max-md:px-5">
      <span className="flex w-full max-w-[1310px] flex-col max-md:max-w-full max-md:my-10">
        <div>
          <div className="max-md:flex max-md:flex-col max-md:items-center max-md:gap-5">
            {questionData.map((question) => (
              <div
                key={question.id}
                className="justify-center items-stretch border bg-white flex flex-col pl-3.5 pr-8 pt-px pb-9 rounded-md border-solid border-zinc-100 border-opacity-50 max-md:max-w-full max-md:mt-10 max-md:pr-5"
              >
                <span className="justify-center text-neutral-950 text-base font-semibold leading-5 whitespace-nowrap bg-white pl-5 pr-16 py-6 rounded-xl items-start max-md:max-w-full max-md:pr-5">
                  {question.title}
                </span>{' '}
                <span className="justify-center text-neutral-500 text-base leading-6 shadow-2xl bg-white pl-5 pr-16 pt-1.5 pb-5 rounded-none items-start max-md:max-w-full max-md:pr-5">
                  {question.discription}
                </span>
              </div>
            ))}
          </div>
        </div>
      </span>
    </div>
  );
}

export default AnyQuestion;
