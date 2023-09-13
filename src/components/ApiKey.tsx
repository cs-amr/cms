import { useState } from "react";
import { Button } from "./ui/button";
import cuid from "cuid";

export default function ApiKey() {
  const [key, setKey] = useState<string>();
  function copyToClipboard(event: any) {
    navigator.clipboard.writeText("CMS_SECRET=" + key);
  }
  function getNewKey() {
    const key = cuid();
    console.log(key);
    setKey(key);
  }
  return (
    <>
      <div className="border md:max-w-2xl rounded-lg px-4 py-4 my-2">
        <div className="flex">
          <code className=" w-full overflow-hidden overflow-ellipsis">
            <span className="text-blue-600 ">CMS_SECRET=</span>
            {key}
          </code>
          <button title="copy to clipboard" onClick={copyToClipboard}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-clipboard"
              viewBox="0 0 16 16"
            >
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
          </button>
        </div>
      </div>
      <Button className="my-4" onClick={getNewKey}>
        Get New Key
      </Button>
    </>
  );
}
