import AboutSkills from "./components/aboutSkills";
import SmallWithSocial from "./components/footer";
import Header from "./components/header";
import Projects from "./components/projects";

export default function Home({data}) {
  return (
  <>
  <Header/>
  <Projects data={data}/>
  <AboutSkills/>
  <SmallWithSocial/>
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