export default function Container(props) {
  return (
    <main
      className={`flex-grow ${props.backgroundColor ?? "bg-white"} text-white`}
    >
      <section className="container mx-auto px-4 py-16">
        {props.children}
      </section>
    </main>
  );
}
