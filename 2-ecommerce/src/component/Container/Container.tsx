


type Containerprops={
    children?: React.ReactNode;
}

export default function Container({children}:Containerprops) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {children}
    </div>
  )
}


