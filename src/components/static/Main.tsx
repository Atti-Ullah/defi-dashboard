type Props = {
  children: React.ReactNode;
}

export default function Main ({ children }: Props) {
  return (
    <main className="flex-grow">
      {children}
    </main>
  )
}