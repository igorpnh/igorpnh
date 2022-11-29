import Header from "./components/header";
import Projects from "./components/projects";

export default function Home({data}) {
  return (
  <>
  <Header/>
  <Projects data={data}/>
  </>
  );
}


export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/igorpnh/repos");
  const data = await res.json();

  return {
    props: {
      data
    },
  };
}