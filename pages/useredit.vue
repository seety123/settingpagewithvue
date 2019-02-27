<template>
<div class="container">
 
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">

                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Modal Header</h4>
                    </div>

                    <div class="modal-body">
                    <p>Some text in the modal.</p>
                    </div>

                    <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
            </div>
        </div>
    </div>

</div>
</template>
    
<style>
input[type="text"],[type="password"]
 {
  background: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
  margin-left:50px;
  max-width:300px;
  padding-top:50px;
}
input[type="text"]:focus
 {
  -webkit-box-shadow: none;
  box-shadow: none;
  
}
input[type="password"]:focus
 {
  -webkit-box-shadow: none;
  box-shadow: none;
  
}
.color:hover
{
  background-color:#C02D76;
}


.modal-content
{
 min-height:100%;
  max-height:100%;
  width: 290px;
}
form
{
margin-top:25px;
}
</style>
