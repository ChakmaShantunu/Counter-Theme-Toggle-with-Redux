"use client"
import { decrement, increment, reset } from "@/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Image from "next/image";
import { setTheme } from "@/features/theme/themeSlice";
import { useEffect, useState } from "react";


export default function Home() {
  const count = useSelector(state => state.counter.value);
  const theme = useSelector(state => state.theme.value)
  const dispatch = useDispatch();
  const [autoTriggered, setAutoTriggered] = useState(false)

  useEffect(() => {
    if (count > 10 && theme !== "dark" && !autoTriggered) {
      dispatch(setTheme("dark"))
      setAutoTriggered(true)
    }
    if(count <= 10 && autoTriggered) {
      setAutoTriggered(false)
    }
  }, [count, theme, dispatch, autoTriggered])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme)
    }

  }, [theme])
  return (
    <div className="flex justify-center items-center min-h-screen mx-auto">
      <div className="space-y-4">
        <h1 className="text-5xl text-center font-bold">Counter + Theme toggle with Redux</h1>
        <div className="space-x-4 flex justify-center items-center mx-auto">
          <button onClick={() => dispatch(decrement())} className="btn">Decrease -</button>
          <button className="btn">{count}</button>
          <button onClick={() => dispatch(increment())} className="btn">Increase +</button>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button onClick={() => dispatch(reset())} className="btn">Reset</button>
          <div className="flex justify-center items-center gap-2">
            <h2 className="text-2xl font-bold">Change theme:</h2>
            <label className="flex cursor-pointer gap-2">
              <span className="label-text">Dark</span>
              <input type="checkbox" checked={theme === 'dark'} onChange={() => dispatch(setTheme("dark"))} className="checkbox theme-controller" />
              <span className="label-text">Light</span>
              <input type="checkbox" checked={theme === 'light'} onChange={() => dispatch(setTheme("light"))} className="checkbox theme-controller" />
              <span className="label-text">Cupcake</span>
              <input type="checkbox" checked={theme === "cupcake"} onChange={() => dispatch(setTheme("cupcake"))} className="checkbox theme-controller" />
              <span className="label-text">Cyberpunk</span>
              <input type="checkbox" checked={theme === "cyberpunk"} onChange={() => dispatch(setTheme("cyberpunk"))} className="checkbox theme-controller" />
              <span className="label-text">forest</span>
              <input type="checkbox" checked={theme === "forest"} onChange={() => dispatch(setTheme("forest"))} className="checkbox theme-controller" />
              <span className="label-text">synthwave</span>
              <input type="checkbox" checked={theme === "synthwave"} onChange={() => dispatch(setTheme("synthwave"))} className="checkbox theme-controller" />
              <span className="label-text">halloween</span>
              <input type="checkbox" checked={theme === "halloween"} onChange={() => dispatch(setTheme("halloween"))} className="checkbox theme-controller" />
              <span className="label-text">black</span>
              <input type="checkbox" checked={theme === "black"} onChange={() => dispatch(setTheme("black"))} className="checkbox theme-controller" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
