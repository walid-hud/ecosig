import { useState } from "react"
import { MdClose } from "react-icons/md"
import { FadeLoader } from "react-spinners"

const FormSendUI = ({Visible, requestState, loading }) => {
  const [isVisible, setVisibile] = useState(Visible)
  const [isLoading, setLoading] = useState(loading)
  const [requestSuccess, setRequestSuccess] = useState(requestState)
  function cancel(){
    setVisibile(false)
  }
  return (
    <>
      {isVisible &&
        <div className="fixed top-1/2 px-4 z-[9999] border-2 h-[100px] w-[200px] border-blue-600 rounded-lg backdrop:brightness-75">
          <button onClick={() => cancel()}>
            <MdClose />
          </button>
          <FadeLoader loading={isLoading} />
        </div>}
    </>
  )
}

export default FormSendUI
