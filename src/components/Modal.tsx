import {a, useSpring, useTransition} from "@react-spring/web"
import Cross from "assets/Cross"
import React, {PropsWithChildren, useEffect, useState} from "react"
import {createPortal} from "react-dom"

interface Props {
  onClose: () => void
  isOpened: boolean
}

export default function Modal({
  onClose,
  isOpened,
  children
}: PropsWithChildren<Props>) {
  const [mounted, setMounted] = useState(false)
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const [spring, api] = useSpring(() => ({
    opacity: 0
  }))

  useEffect(() => {
    if (opened) {
      api.start({opacity: 1})
    } else {
      api.start({opacity: 0})
    }
  }, [opened])

  const transition = useTransition(opened,{
    from: {transform: "translateX(100vw)"},
    enter: {transform: "translateX(0vw)"},
    leave: {
      config: {
        duration: 300
      },
      transform: "translateX(100vw)"
    },
    config: {
      mass: 1,
      tension: 130,
      friction: 14,
      clamp: false,
      precision: 0.0001,
      velocity: 0
    }
  })

  useEffect(() => {
    const root = document.getElementsByTagName("html")[0]
    isOpened && setOpened(isOpened)
    if (isOpened) {
      root.classList.add("overflow-hidden")
    } else {
      root.classList.remove("overflow-hidden")
    }
  }, [isOpened])

  return mounted ? createPortal( (
    <>
      {transition((style, opened) => (
          opened && (
            <div className="fixed z-50 w-screen h-screen top-0 left-0">
              <a.div style={spring} className="absolute backdrop-blur w-full h-full "/>
              <div className="absolute w-full h-full flex justify-end items-center sm:pr-0 sm:justify-center pr-20">
                <a.div style={style} className="relative bg-gray shadow-2xl rounded-xl max-h-[96vh] sm:max-h-[85vh] max-w-[96vw]">
                  {!!onClose && (
                    <div onClick={() => {
                      setOpened(false)
                      onClose()
                    }} className="absolute z-20 group cursor-pointer top-4 right-4 w-4 h-4">
                      <Cross className="group-hover:fill-white/50 transition"/>
                    </div>
                  )}
                  <div className="relative overflow-y-auto h-full max-h-[inherit] sm:p-4 scrollbar-hide p-20">
                    {children}
                  </div>
                </a.div>
              </div>
            </div>
          )))}
    </>
    ),
    document.getElementById("modalRoot")!
  ) : null
}
