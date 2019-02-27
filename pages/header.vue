<template>
    <div class="container-fluid">
        <div class ="topnav" id="topdiv">
            <img src="left-logo.png" alt="Not found" height="60" width="60" id="imgrt">

                <nav class="navbar navbar-expand-sm topnav-right navbar navbar-inverse">
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right" style="display:inline-block;">
                        <li><a href="home.vue"><span class="glyphicon glyphicon-home"></span> Home</a></li>
                        <li><a href="about.vue"><span class="glyphicon glyphicon-user"></span> About</a></li>
                        <li><a href="profile.vue"><span class="glyphicon glyphicon-user"></span> Profile</a></li>
                        <li><a href="settings.vue"><span class="glyphicon glyphicon-cog"></span> Settings</a></li>
                        
                    </ul>
                    </div>
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                    </div>
              </nav>
              <form class="form-inline" role="search" >
                <div class="input-group add-on">
                    <input class="form-control " placeholder="Search" name="srch-term" id="srch-term" type="text">
                    <div class="input-group-btn">
                        <button class="btn btn-default btst"  type="submit"><i class="glyphicon glyphicon-search"></i></button>
                    </div>
                    </div>
              </form>
         </div>
  <div class="row">
    <div class="panel panel-default main">
	         <div class="panel-body">
		         <div class="box box-info">
                     <h4>Account Setting</h4>
             <div class="box-body">
                       
                        <img alt="User Pic" 
                          src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" 
                          id="profile-image1" class="img-circle img-responsive"> 

                    <button type="submit" class="btn btn-default" @click="signup" id="btnhav"
                          style="">Edit &nbsp;
                          <i class="fa fa-edit"></i></button> 
                          
                           <div class="col-sm-12">
                          <h4 style="color:white;">Mr ABC </h4>        
                          </div>
                      
                   
                          <hr style="margin:5px 0 5px 0;">
              
              <div class="control" >    
                <div class="col-sm-5 col-xs-6 tital " >Language:</div><div class="col-sm-7 col-xs-6 ">Kannada</div>
                <div class="col-sm-5 col-xs-6 tital " >Mobie No:</div><div class="col-sm-7 col-xs-6 ">7894561231</div>
                <div class="col-sm-5 col-xs-6 tital " >Privacy:</div><div class="col-sm-7 col-xs-6 ">Private</div>
                <div class="col-sm-5 col-xs-6 tital " >Security:</div><div class="col-sm-7 col-xs-6 ">Email Me</div>
             </div>    
          </div>
          
        </div>    
       </div> 
    </div>
  </div>

          <div id="bottomdiv">&copy; 2019 NFriendship Reserved</div>
    </div>

</template>

<script>
export default {
  
}
</script>


<style>
body
{
background: #ccc;
margin: 44px 0px 0px 0px;
width: 100%;
height: 100%;
background-image: url('/backimg.png');
}

div #topdiv
{
position: fixed;
top: 0px;
left:0px;
width: 100%;
color:#ccc;
background:black;
}
div #bottomdiv
{
position: fixed;
bottom: 0px;
left:0px;
width: 100%;
color:#ccc;
background:black;
padding: 10px;
text-align: center;
}
img
{
margin-left:25px;
margin-top: 10px;
max-width: 100%;;
}
form
{
    float: right;
    margin-right:10%;
    margin-top: 20px;
    width: 350px;
}
form .btst
{
    background-color:#d02d76;
    color: white;
}
.topnav-right 
{
  float: right;
  background-color:black;
}
li a
{
    color: white;
    margin-right:10px;
}
#myNavbar li a:hover
{
color:#d02d76;

}

/*    setting css*/
#profile-image1 
{
    cursor: pointer;
    width: 140px;
    height: 140px;
	  border:2px solid #03b1ce ;
    margin-left:120px;
    margin-top: 10px;
    }
	.tital
  { 
    font-size:16px; font-weight:500;
  }
   .main
   {
    height:450px;
    width:400px;
    margin-top:90px;
    background-color: #c02d76;
    color: white;
    margin-left:300px;
    background-size:cover;
    overflow:hidden; 
    min-height:100%;
    max-height:100%;

   }
   #btnhav
   {
     margin-left:30px;width:120px;
     margin-bottom: 5px;
     border:1px solid black;
     background-color: white;
     margin-top:15px;
     margin-left:225px;
     color: black;
   }

ul.navbar-right li p.navbar-text {
  display: block;
}
   
@media(max-width:1000px)
{
    form
    {
     flex-direction:column; padding: 0 6px 5px; 
    }
  
    .main
    {
        flex-direction:column; padding: 0 5px;
        margin-left:-10px ;
        margin-top:120px;
        height: 510px;
    }
  #topdiv
  {
    flex-direction:column; padding: 0;  
  }
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
  .navbar-toggle 
  {
    display: block;
  }
  .navbar-collapse {
    border-top: 1px solid transparent;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  .navbar-collapse.collapse:not(.in) 
  {
    display:none;
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
/***********************************************/
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>

