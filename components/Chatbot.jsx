"use client";

import React, { useState, useRef, useEffect } from "react";
import { TbMessageChatbot } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import Image from "next/image";
import LoadingDots from "./LoadingDots";
import { Send } from "react-feather";

const Chatbot = () => {
  const [openChat, setOpenChat] = useState(false);
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([
    {
      role: "assistant",
      content: "Hello! Write What You Want",
    },
  ]);
  const lastMessageRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (message == "") return;
    setHistory((oldHistory) => [
      ...oldHistory,
      { role: "user", content: message },
    ]);
    setMessage("");
    setLoading(true);
    fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: message, history: history }),
    })
      .then(async (res) => {
        const r = await res.json();
        setHistory((oldHistory) => [...oldHistory, r]);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const formatPageName = (url) => {
    // Split the URL by "/" and get the last segment
    const pageName = url.split("/").pop();

    // Split by "-" and then join with space
    if (pageName) {
      const formattedName = pageName.split("-").join(" ");

      // Capitalize only the first letter of the entire string
      return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
    }
  };

  //scroll to bottom of chat
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  return (
    <section className="relative">
      <div className="fixed bottom-[2rem] right-[2rem] p-[1.3rem] bg-main-color rounded-full z-50">
        <div>
          <TbMessageChatbot
            onClick={() => {
              setOpenChat(!openChat);
            }}
            className="text-[2rem] text-white cursor-pointer"
          />
        </div>

        {openChat && (
          <div className="absolute z-10 bottom-0 right-[5.5rem]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleClick();
              }}
              className="w-[25rem] h-[35rem] bg-white border rounded-[.8rem] flex flex-col flex-grow overflow-clip justify-end items-center border-main-color/40"
            >
              <div className="flex flex-col h-full gap-5 p-10">
                {history.map((message, idx) => {
                  const isLastMessage = idx === history.length - 1;
                  switch (message.role) {
                    case "assistant":
                      return (
                        <div
                          ref={isLastMessage ? lastMessageRef : null}
                          key={idx}
                          className="flex gap-2"
                        >
                          <Image
                            src="/img/logo.png"
                            width={700}
                            height={700}
                            alt="assistant avatar"
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="w-auto max-w-xl break-words bg-white rounded-b-xl rounded-tr-xl text-black p-4 shadow-[0_10px_40px_0px_rgba(0,0,0,0.15)]">
                            <p className="mb-2 text-sm font-medium text-main-color">
                              AI assistant
                            </p>
                            {message.content}
                          </div>
                        </div>
                      );
                    case "user":
                      return (
                        <div
                          className="w-auto max-w-xl break-words bg-white rounded-b-xl rounded-tl-xl text-black p-6 self-end shadow-[0_10px_40px_0px_rgba(0,0,0,0.15)]"
                          key={idx}
                          ref={isLastMessage ? lastMessageRef : null}
                        >
                          <p className="mb-2 text-sm font-medium text-violet-500">
                            You
                          </p>
                          {message.content}
                        </div>
                      );
                  }
                })}
                {loading && (
                  <div ref={lastMessageRef} className="flex gap-2">
                    <Image
                      src="/img/logo.png"
                      width={700}
                      height={700}
                      alt="assistant avatar"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="w-auto max-w-xl break-words bg-white rounded-b-xl rounded-tr-xl text-black p-6 shadow-[0_10px_40px_0px_rgba(0,0,0,0.15)]">
                      <p className="mb-4 text-sm font-medium text-violet-500">
                        AI assistant
                      </p>
                      <LoadingDots />
                    </div>
                  </div>
                )}
              </div>

              {/* input area */}
              <div className="sticky bottom-0 flex w-full h-24 px-6 pb-6">
                <div className="relative w-full">
                  <textarea
                    aria-label="chat input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message"
                    className="w-full h-full resize-none rounded-full border border-slate-900/10 bg-white pl-6 pr-24 py-[23px] text-base placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 shadow-[0_10px_40px_0px_rgba(0,0,0,0.15)]"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleClick();
                      }
                    }}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick();
                    }}
                    className="absolute flex items-center justify-center px-3 text-sm font-semibold text-white rounded-full w-14 h-14 bg-main-color right-2 bottom-2 disabled:bg-main-color disabled:text-white"
                    type="submit"
                    aria-label="Send"
                    disabled={!message || loading}
                  >
                    <Send />
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Chatbot;
