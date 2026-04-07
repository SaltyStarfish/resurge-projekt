export default function Footer() {

  return (
    <footer className="mt-2 p-4 verdana flex flex-wrap text-white" style={{backgroundColor: "#383727"}}>
      <address className="p-4 flex-1">
        <p className="not-italic">Find vej:</p>
        <p>Åboulevarden&nbsp;1 <br /> 8000 Aarhus <br /> Danmark
        </p>
      </address>
      <address className="p-4 flex-1 not-italic">
        <p>Kontakt: </p>
        <a href="tel:+45 56 67 78 89">+45 56 67 78 89</a><br />
        <a href="mailto:kontakt@resurge.dk">kontakt@resurge.dk</a>
      </address>
      <div className="p-4 flex-1">
        <p>Links: </p>
        <a href="#!">Cookies</a> <br />
        <a href="#!">Privatlivspolitik</a><br />
        <a href="#!">Klimaansvar</a>
      </div>
      <div className="p-4 flex-1">
        <p>Find os: @resurge_dk</p>
        <a href="#!">Instagram</a> <br />
        <a href="#!">Facebook</a><br />
        <a href="#!">LinkedIn</a>
      </div>
    </footer>
  )
}

//dette er en komponent