<template>
  <div class="container-fluid">
              <header >
                <img src="left-logo.png" alt="Not found" height="60" width="60" id="imgrt">

             <nav class="navbar navbar-expand-sm topnav-right">
                      <h6><ul class="navbar-nav" >
                        <li class="nav-item">
                          <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Profile</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Settings</a>
                        </li>
                      </ul></h6>
              </nav>
          
                <form class="navbar-form navbar-right" action=""  style="margin-top: 25px;">
                      <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                      </div>
                      <button type="submit" class="btn" style="background-color:#C02D76;color:white;">Submit</button>
                </form>
              </header>

 
	    <div class="panel panel-default main">
	         <div class="panel-body">
		         <div class="box box-info">
                     <h4>Account Setting</h4>
             <div class="box-body">
                       
                        <img alt="User Pic" 
                          src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" 
                          id="profile-image1" class="img-circle img-responsive">  
                            <button type="submit" class="btn btn-default" @click="signup" id="btnhav"
                          style="">
                          Edit &nbsp;<i class="fa fa-edit">
                            </i></button>
                          <br>
                      

                          <div class="col-sm-12">
                          <h4 style="color:white;">Mr ABC </h4>        
                          </div>
                   
                          <hr style="margin:5px 0 5px 0;">
              
                        
                          <div class="col-sm-5 col-xs-6 tital " >Language:</div>
                          <div class="col-sm-7 col-xs-6 ">English</div>
                            

                          <div class="col-sm-5 col-xs-6 tital " >Mobile:</div>
                          <div class="col-sm-7"> 7745123620</div>


                          <div class="col-sm-5 col-xs-6 tital " >Privacy:</div>
                          <div class="col-sm-7">Private</div>


                          <div class="col-sm-5 col-xs-6 tital " >Security:</div>
                          <div class="col-sm-7">Email Me</div>      
                      
          </div>
          
        </div>    
       </div> 
    </div>



              <div>
              <footer>&copy; 2019 NFriendship reserved</footer>
              </div>
  </div>
</template>



<style>
div.container {
    max-width: 950px;
    border: none;
    margin: auto;

}
header
{
    color: white;
    background-color:#2d2d2d;
    clear: left;
    position:absolute;
    top:0;
    left:0;
    width:100%; 
}
 footer {
    padding: 1em;
    color: white;
    background-color:#151718;
    clear: left;
    position:absolute;
    left:0;
    margin-top: 100px;
    width:100%;
    text-align: center; 
}


#art 
{
    padding: 16em;
    
}
.topnav-right 
{
  float: right;
}

nav
{
  margin-left:150px;
  color: white;
}
li a
{
    color: white;
    margin-right:40px;
    margin-top:10px;
}
li a:hover
{
color:rgb(192,45,118);

}

#imgrt
{
  margin-left: 50px;
  margin-top: 20px;
}

    input.hidden {
    position: absolute;
    left: -9999px;
}

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
	 .bot-border
   { border-bottom:1px #f8f8f8 solid;  margin:5px 0  5px 0}
   .main
   {
    height:500px;
    width:400px;
    margin-top:180px;
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
     margin-top:30px;
     margin-left:225px;
     color: black;
   }
   #btnhav:hover{background-color:#c02d76; color: white; }
  @media(max-width:767px)
{
    .main
    {
        flex-direction:column; padding: 0 5px;
        margin-left:-25px;
        margin-top:380px;
    }
}
</style>



