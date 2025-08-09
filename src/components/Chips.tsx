export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="chips">
      {items.map((t) => (
        <li key={t} className="chip">{t}</li>
      ))}
    </ul>
  )
}

