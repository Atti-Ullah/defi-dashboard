import { useConfig } from "../../context/configProvider";


export default function Loader() {
  const { loading, setLoading } = useConfig()

  setTimeout(() => {
    if (loading) {
      setLoading(false)
    }
  }, 3500);

  return (
    <>
        { loading &&
          <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(176, 176, 176, 0.7)' }} className="flex items-center justify-center backdrop-blur-xs">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-white border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          </div>
        }
    </>
  )
}
