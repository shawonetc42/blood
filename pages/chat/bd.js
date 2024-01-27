import React, { useState } from 'react';

const data = {
  messages: [
    {
      id: 1,
      sender: {
        name: 'John Doe',
        department: 'Technical Department',
        avatar: '/2.png',
      },
      timestamp: '2h ago',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      sender: {
        name: 'Jane Smith',
        department: 'Marketing Department',
        avatar: '/2.png',
      },
      timestamp: '1d ago',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more messages as needed
  ],
  notifications: 2,
  // You can add more data here as needed
};

function MessagesComponent() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMessages = data.messages.filter(message =>
    message.sender.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="justify-center items-stretch border bg-white flex w-auto flex-col pt-7 rounded-xl border-solid border-gray-200">
      <div className="flex w-full flex-col items-stretch px-7">
        <div className="flex items-stretch justify-between gap-2">
          <div className="justify-center text-gray-800 text-base font-semibold leading-5 grow shrink basis-auto my-auto">
            Messages
          </div>
          <div className="justify-center text-blue-500 text-xs font-semibold leading-4 items-stretch bg-red-700 bg-opacity-10 aspect-[2.22] p-3 rounded-2xl">
            {data.notifications}
          </div>
        </div>
        <div className="justify-between items-stretch border bg-white flex gap-4 mt-6 px-4 py-3.5 rounded-lg border-solid border-slate-300">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/05221133d0a673fc6ad8c1a5707e8574e25e2648a2af67a37e0391be85b8a767?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
            className="aspect-[0.91] object-contain object-center w-5 shrink-0"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search"
            className="justify-center text-slate-300 text-sm grow shrink basis-auto my-auto"
          />
        </div>
      </div>
      <div>
        {filteredMessages.map(message => (
          <div key={message.id} className="bg-white flex items-stretch justify-between gap-5 mt-6 px-5 py-4 border-b-gray-200 border-b border-solid">
            <div className="flex items-stretch justify-between gap-2">
              <img src={message.sender.avatar} alt={message.sender.name} className="w-8 h-8 rounded-full" />
              <div>
                <div className="relative rounded bg-emerald-500 flex shrink-0 h-2 flex-col" />
              </div>
              <div className="flex flex-col items-stretch my-auto flex-1">
                <div className="justify-center text-gray-800 text-sm font-semibold leading-4">
                  {message.sender.name}
                </div>
                <div className="justify-center text-neutral-800 text-opacity-80 text-xs leading-5 whitespace-nowrap mt-2.5">
                  {message.sender.department}
                </div>
              </div>
            </div>
            <div className="flex basis-0 flex-col items-stretch my-auto">
              <div className="justify-center text-neutral-800 text-opacity-80 text-xs leading-4 whitespace-nowrap">
                {message.timestamp}
              </div>
              <div className="justify-center text-white text-xs leading-5 items-center bg-red-600 aspect-square h-5 ml-5 px-2 rounded-xl self-start">
                9
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* logout */}
      <div className="flex max-w-full flex-col items-stretch">
      <div className="items-stretch bg-white flex justify-between gap-1 px-6 py-5 border-b-gray-200 border-b border-solid">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/13de6957c374c0cdfdb760c8f7f72e020d621811ea30cdf1df0ad60710032d9a?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="aspect-[0.93] object-contain object-center w-3.5 shrink-0 self-start"
        />
        <div className="justify-center text-zinc-900 text-sm leading-5 grow shrink basis-auto">
          Logout
        </div>
      </div>
      <div className="items-stretch bg-white flex justify-between gap-1 px-6 py-5 border-b-gray-200 border-b border-solid">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/11931cfa217c00ad39132ebe29928d7919085179f74bd91e1bdbb212eb9b3705?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="aspect-[0.93] object-contain object-center w-3.5 shrink-0 self-start"
        />
        <div className="justify-center text-zinc-900 text-sm leading-5 grow shrink basis-auto">
          Setting
        </div>
      </div>
      <div className="bg-white flex w-full items-stretch justify-between gap-5 px-7 py-4">
        <div className="flex items-stretch justify-between gap-4">
          <div className="flex-col overflow-hidden relative flex aspect-square w-10 items-stretch pl-8 pr-px pt-8 pb-px">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/651243e788ce97d6f14e01ecd19443859b01903c0849326ac6065971ec997cc9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/651243e788ce97d6f14e01ecd19443859b01903c0849326ac6065971ec997cc9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/651243e788ce97d6f14e01ecd19443859b01903c0849326ac6065971ec997cc9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/651243e788ce97d6f14e01ecd19443859b01903c0849326ac6065971ec997cc9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/651243e788ce97d6f14e01ecd19443859b01903c0849326ac6065971ec997cc9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/651243e788ce97d6f14e01ecd19443859b01903c0849326ac6065971ec997cc9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/651243e788ce97d6f14e01ecd19443859b01903c0849326ac6065971ec997cc9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/651243e788ce97d6f14e01ecd19443859b01903c0849326ac6065971ec997cc9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="absolute object-cover object-center inset-0 size-full"
            />
            <div className="relative rounded bg-emerald-500 flex shrink-0 h-2 flex-col" />
          </div>
          <div className="justify-center text-gray-800 text-sm font-semibold leading-4 my-auto">
            John Doe
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/048db090a17b63768d3eccde5e6aff54d0832921799748320724b06a3763666b?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="aspect-[0.88] object-contain object-center w-4 shrink-0 my-auto"
        />
      </div>
    </div>
    {/* end */}
    </div>
  );
}

export default MessagesComponent;
