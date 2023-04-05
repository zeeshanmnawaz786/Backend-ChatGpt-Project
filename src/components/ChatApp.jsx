import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

import faq from "../data/questions";
export default function ChatApp() {
  const [ans, setAns] = useState("");
  const [err, setErr] = useState("");

  const changeFunc = (e) => {
    if (e.target.value === "") {
      setErr("Please select a question");
      return;
    }
    faq.forEach((item) => {
      if (e.target.value === item.question) {
        setAns(item.answer);
      }
    });
  };

  return (
    <>
      <div className="py-12 md:px-8">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="mb-3 w-96">
              <div className="lg:w-2/5 flex ml-2 lg:ml-0">
                <div className="pt-2 relative  text-gray-600">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="teacher">
                      <div className="mt-4 flex mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="red"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                          />
                        </svg>

                        <p className="ml-2">Please select something</p>
                      </div>
                    </label>
                    <select
                      name="qusetion"
                      onChange={changeFunc}
                      id="qusetion"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    >
                      <option value="">Select Qusetion</option>
                      {faq.map((item, index) => {
                        return <option key={index}>{item.question}</option>;
                      })}
                    </select>
                  </div>

                  {ans ? (
                    <div>
                      <h1
                        style={{
                          paddingTop: "1rem",
                          margin: "auto 0",
                          fontWeight: "normal",
                        }}
                      >
                        <span style={{ color: "red", fontWeight: "bold" }}>
                          <Typewriter
                            words={[ans]}
                            loop={1}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            delaySpeed={1000}
                            onLoopDone={() => {}}
                            onType={() => {}}
                          />
                        </span>
                      </h1>
                    </div>
                  ) : (
                    <div>{err}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
