$('#myModal').on('shown.bs.modal', function () {
   $('#myInput').trigger('focus')
 })
 
let http = new XMLHttpRequest();
http.open('get', './js/newsdata.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let newsdata = JSON.parse(this.responseText);
      let output = "";
      for (var i=0, l=newsdata.length; i<l ; i++) {

         output += `
         
            <div class="row" id="news">
               <div class="col-9" id="newsTitle">
               <b>${newsdata[i].title}</b> <br> <i class="bi bi-person-circle"></i> 
               <b>${newsdata[i].author}</b>  <i class="bi bi-calendar-week"></i> ${newsdata[i].date}  
               </div>
               
               <div class="col text-right" id="newsTitle">
                  <button type="button" class="btn btn-outline-success">#Sports</button>  
                  <button type="button" class="btn btn-outline-success">#Worldwide</button>
                  <button type="button" class="btn btn-outline-success">#Local</button> <br>
               </div>
                ${newsdata[i].content}  
              
              <a href="#" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal"> 
              <i class="bi bi-eye-fill"></i> Full View</a>
                
                
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${newsdata[i].content} 
    
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
          </div>
            
         `;
         
      }
      document.querySelector(".news").innerHTML = output;
   }
}