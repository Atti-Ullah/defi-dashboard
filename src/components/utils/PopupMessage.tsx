import { useConfig } from "../../context/configProvider"

export default function PopupMessage () {

  const { popupMessage } = useConfig()

  return (
    <>
      {popupMessage.message && (
        <div className={`fixed bottom-4 right-4 bg-white border-l-3 border-${popupMessage.type}-400 rounded-r-lg shadow-lg p-4`}>
          <p className="text-sm text-gray-600">{popupMessage.message}</p>
        </div>
      )}
    </>
  )
}