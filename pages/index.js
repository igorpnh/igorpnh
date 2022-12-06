import AboutSkills from "./components/aboutSkills";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home({data}) {
  return (
  <>
  <Header/>
  <Projects data={data}/>
  <AboutSkills/>
  </>
  );
}


export async function getServerSideProps(context) {
  
  const limit = context.query.limit

  const res = await fetch("https://api.github.com/users/igorpnh/repos", {
    params: {
      limit
    }
  });

  const data = await res.json();

  return {
    props: {
      data
    },
  };
}