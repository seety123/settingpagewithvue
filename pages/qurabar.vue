<template>
   <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <!--Making the toggle button-->
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <!--Logo-->
      <a href="#" class="navbar-brand">Lorem ipsum dolor.</a>
    </div>

    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="#">Lorem</a>
        </li>
        <li><a href="#">Lorem</a>
        </li>
        <li><a href="#">Lorem</a>
        </li>
        <li><a href="#">Lorem</a>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <p class="navbar-text">Contact Me:</p>
        </li>
        <li><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
        </li>
        <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
        </li>
        <li><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a>
        </li>
        <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style>
.navbar {
  background-color: #202C39;
}
div.navbar-header a.navbar-brand {
  font-family: "Caveat Brush";
  margin-right: 20px;
  font-size: 23px;
  color: #F29559;
}
div.navbar-header a.navbar-brand:hover {
  color: #ffb36b;
}
ul.nav.navbar-nav li a {
  font-family: "PT Sans", "cursive";
  color: #e6e6e6;
}
ul.nav.navbar-nav li a:hover {
  color: #ffffff;
  background-color: #2a394a;
}
ul.navbar-right li p.navbar-text {
  display: block;
}
@media (max-width: 1050px) {
  ul.navbar-right li a {
    float: left;
  }
  ul.navbar-right li p.navbar-text {
    margin-left: 15px;
    position: relative;
    top: -4px;
  }
}
@media (max-width: 1000px) {
  .navbar-header {
    float: none;
  }
  .navbar-toggle {
    display: block;
  }
  .navbar-collapse {
    border-top: 1px solid transparent;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  .navbar-collapse.collapse:not(.in) {
    display: none !important;
  }
  .navbar-nav {
    float: none !important;
    margin: 7.5px -15px;
  }
  .navbar-nav > li {
    float: none;
  }
  .navbar-nav > li > a {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>

