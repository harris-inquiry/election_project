
// setting the NavBar
document.getElementById('navbar').innerHTML = `
<a class="navbar-brand" href="#">Vote</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarCollapse">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <a id="home-link" class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a id="page2-link" class="nav-link" href="whyvote.html">Why Vote</a>
    </li>
    <li class="nav-item">
      <a id="page3-link" class="nav-link" href="different_groups.html">Resources</a>
    </li>
    <li class="nav-item">
      <a id="page4-link" class="nav-link" href="#">Other</a>
    </li>
  </ul>
</div>
`;

var titleToLink = {
  "Vote": "home-link",
  "Why Vote": "page2-link",
  "Resources": "page3-link",
  "page4": "page4-link",
};

curDocTitle = document.title;
if(Object.keys(titleToLink).includes(curDocTitle)) {
  document.getElementById(titleToLink[curDocTitle]).classList.add('active');
};
