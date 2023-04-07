export default function Layout(props: any) {
  console.log(props.modal);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {props.modal}
      {props.children}
    </main>
  );
}
