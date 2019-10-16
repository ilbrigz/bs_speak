import React, { createContext, useState } from "react"

export const Context = createContext({})

export const Provider = props => {
  const [modalState, setModalState] = useState(false)
  const [appEmail, setAppEmail] = useState("")
  const { children } = props

  const closeModal = () => {
    setModalState(false)
  }

  const openModal = () => {
    setModalState(true)
  }

  const toggleModal = () => {
    setModalState(!modalState)
  }

  const appContext = {
    modalState,
    openModal,
    closeModal,
    toggleModal,
    appEmail,
    setAppEmail,
  }

  return <Context.Provider value={appContext}>{children}</Context.Provider>
}

export const { Consumer } = Context
