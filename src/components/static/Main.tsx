type Props = {
  children: React.ReactNode;
}

export default function Main ({ children }: Props) {
  return (
    <main className="flex-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {children}
    </main>
  )
}