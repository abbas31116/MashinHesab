type ListProps<T> = {
  items: T[];
};

export default function ListComponent<T>({ items }: ListProps<T>) {
  return (
    <div>
      {items.map((item: any, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

//generic
