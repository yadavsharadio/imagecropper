 //variables
 let result = document.querySelector(".result"),
 img_result = document.querySelector(".img-result"),
 img_w = document.querySelector(".img-w"),
 save = document.querySelector(".save"),
 cropped = document.querySelector(".cropped"),
 upload = document.querySelector("#file-input"),
 cropper = "";

 //upload function
 upload.addEventListener('change',(e) =>{
    const reader = new FileReader();
    reader.onload = (e) => {
     if(e.target.result){
       let img =document.createElement("img");
       img.id = "image";
       img.src = e.target.result;

       result.innerHTML = "";

       result.appendChild(img);

       save.classList.remove("hide");

       cropper = new Cropper(img);
     }
   };
   reader.readAsDataURL(e.target.files[0]);
     //save button triggering
     save.addEventListener('click',(e) =>{
       e.preventDefault();

       let imgSrc = cropper.getCroppedCanvas({width: img_w.value}).toDataURL();

       cropped.classList.remove("hide");
       img_result.classList.remove("hide");

       cropped.src = imgSrc;
     });
 });