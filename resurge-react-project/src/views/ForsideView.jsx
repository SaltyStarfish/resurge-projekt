import Værdier from "../components/Værdier"
import infographic2 from "../assets/images/inforgraphic 2 - 2 stack.png"


function ForsideView() {
  const værdierBlocks = [
    { title: "vores værdier", imageSrc: infographic2, imageAlt: "infographic 2" },
  ]

  return (
    <>
      {/* Opret sidens indhold herunder som "normal HTML" eller referer til components*/}
      <h1>Forside</h1>
      <Værdier blocks={værdierBlocks} />
    </>
  )
}

export default ForsideView
