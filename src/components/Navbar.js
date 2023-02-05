function Navbar(){
    return (<nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">&nbsp; &nbsp; &nbsp; artSC</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#"> Home Page <span class="sr-only"></span></a>
        <a class="nav-item nav-link active" href="#"> Profile <span class="sr-only"></span></a>
        <a class="nav-item nav-link" href="#">Log Out</a>
        {/* <a class="nav-item nav-link" href="#">Pricing</a> */}
        {/* <a class="nav-item nav-link disabled" href="#">Disabled</a> */}
      </div>
    </div>
  </nav>)
}

export default Navbar