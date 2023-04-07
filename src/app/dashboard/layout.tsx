export default function Layout(props: any) {
  console.log(props.modal);

  return (
    <main>
      {props.modal}
      {props.children}
    </main>
  );
}
