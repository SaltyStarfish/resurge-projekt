// Husk at importere alle Links og Components, der referes til
import ComponentTemplate from "../components/ComponentTemplate"


function BlogView() {

  return (
    <>
      {/* Opret sidens indhold herunder som "normal HTML" eller referer til components*/}
      <h1>Blog</h1>
      <ComponentTemplate/>
    </>
  )
}

export default BlogView
