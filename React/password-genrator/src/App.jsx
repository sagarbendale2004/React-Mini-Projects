import { useCallback, useEffect, useState, useRef } from "react"


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null); //useRef hook

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '@!#$%^&*(){}_'

    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }

    setPassword(pass)

  },[length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 17)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, charAllowed, passwordGenrator])

  return (
   <div className="w-full max-w-3xl mx-auto shadow-md rounded-lg px-4 py-3 mt-20 bg-gray-800">
    <h1 className="text-white text-center my-3 text-3xl">Password Genrator</h1>
    <div className="flex shadow rounded-xl overflow-hidden mt-6">
      <input type="text" 
        value={password} 
        className="outline-none w-full py-3 px-3 text-xl"
        placeholder="password"
        readOnly 
        ref={passwordRef}
      />
      <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white text-xl px-3 py-3 shrink-0">copy</button>
    </div>

    <div className="flex text-xl gap-x-14 mt-8">
      <div className="flex items-center gap-x-1">
        <input type="range" 
          min={8}
          max={16}
          value={length}
          onChange={(e) => {setLength(e.target.value)}}
        />
        <label className="text-white ml-1">length: {length}</label>
    </div>

    <div className="flex items-center gap-x-1 ">
      <input type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="numberInput" className="text-white">Numbers</label>
    </div>

    <div className="flex items-center gap-x-1">
      <input type="checkbox"
        defaultChecked={charAllowed}
        id="charInput"
        onChange={() => {
          setCharAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="charInput" className="text-white">Characters</label>
    </div>

    </div>
   </div>
  )
}

export default App
