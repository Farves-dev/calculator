import React, { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <>
      <div className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 mx-0 my-auto w-[256px] text-center border-[#a3b18a] border-[10px] rounded-md bg-[#a3b18a]">
        <form>
          <input
            type="text"
            value={result}
            className="h-[75px] w-[236px] bg-[#344e41] p-1 border-0 mb-2 text-[#a3b18a] text-right text-2xl font-medium tracking-[1px] focus:outline-none"
          />
        </form>
        <div className="grid grid-cols-4 keypad">
          <button
            onClick={clear}
            className=" col-span-2 row-span-1 m-[5px] border-none border-[5px] cursor-pointer bg-[#cad2c5] text-[#52796f] rounded-full font-medium focus:outline-none"
          >
            Clear
          </button>
          <button
            onClick={backspace}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#cad2c5] text-[#52796f] rounded-full font-medium focus:outline-none"
          >
            C
          </button>
          <button
            name="/"
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#cad2c5] text-[#52796f] rounded-full font-medium focus:outline-none"
          >
            &divide;
          </button>
          <button
            name="7"
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#344e41] text-[#a3b18a] rounded-full font-medium focus:outline-none"
          >
            7
          </button>
          <button
            name="8"
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#344e41] text-[#a3b18a] rounded-full font-medium focus:outline-none"
          >
            8
          </button>
          <button
            name="9"
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#344e41] text-[#a3b18a] rounded-full font-medium focus:outline-none"
          >
            9
          </button>
          <button
            name="*"
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#cad2c5] text-[#52796f] rounded-full font-medium focus:outline-none"
          >
            &times;
          </button>
          <button
            name="4"
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#344e41] text-[#a3b18a] rounded-full font-medium focus:outline-none"
          >
            4
          </button>
          <button
            name="5"
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#344e41] text-[#a3b18a] rounded-full font-medium focus:outline-none"
          >
            5
          </button>
          <button
            name="6"
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#344e41] text-[#a3b18a] rounded-full font-medium focus:outline-none"
          >
            6
          </button>
          <button
            name="-"
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#cad2c5] text-[#52796f] rounded-full font-medium focus:outline-none"
          >
            &ndash;
          </button>
          <button
            name="1"
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#344e41] text-[#a3b18a] rounded-full font-medium focus:outline-none"
          >
            1
          </button>
          <button
            name="2"
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#344e41] text-[#a3b18a] rounded-full font-medium focus:outline-none"
          >
            2
          </button>
          <button
            name="3"
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#344e41] text-[#a3b18a] rounded-full font-medium focus:outline-none"
          >
            3
          </button>
          <button
            name="+"
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#cad2c5] text-[#52796f] rounded-full font-medium focus:outline-none"
          >
            +
          </button>
          <button
            name="."
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#344e41] text-[#a3b18a] rounded-full font-medium focus:outline-none"
          >
            .
          </button>
          <button
            name="0"
            onClick={handleClick}
            className="m-[5px] border-none border-[5px] cursor-pointer bg-[#344e41] text-[#a3b18a] rounded-full font-medium focus:outline-none"
          >
            0
          </button>
          <button
            onClick={calculate}
            className="grid-column-start: 3 col-span-2 m-[5px] border-none border-[5px] cursor-pointer bg-[#cad2c5] text-[#52796f] rounded-full font-medium focus:outline-none"
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
