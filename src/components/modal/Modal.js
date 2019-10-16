import React from "react"
import { Modal, Button } from "antd"
import styled from "styled-components"
import { AppContext } from "../../context"

import WrappedRegistrationForm from "../form/RegistrationForm"

const StyledTitle = styled.h2`
  color: ${props => props.theme.font_green};
`

const ModalTitle = () => <StyledTitle>Register Now</StyledTitle>

const ModalForm = () => {
  const { modalState, setAppEmail, closeModal } = React.useContext(AppContext)

  const handleOnCancel = () => {
    closeModal()
    setAppEmail("")
  }

  return (
    <div style={{ zIndex: 200 }}>
      <Modal
        title={<ModalTitle />}
        onCancel={handleOnCancel}
        visible={modalState}
        footer={<Button onClick={closeModal}>Cancel</Button>}
      >
        <WrappedRegistrationForm />
      </Modal>
    </div>
  )
}

export default ModalForm
