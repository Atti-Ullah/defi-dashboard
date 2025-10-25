import { useConfig } from "../../context/ConfigProvider"

export default function PopupMessage () {

  const { popupMessage } = useConfig()

  return (
    <>
      {popupMessage.message && (
        <div className={`fixed bottom-4 right-4 bg-white dark:bg-gray-900 border-l-3 border-${popupMessage.type}-400 rounded-r-lg shadow-lg p-4`}>
          <p className="text-sm text-gray-600 dark:text-gray-200">{popupMessage.message}</p>
        </div>
      )}
    </>
  )
}