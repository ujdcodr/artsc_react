import "../App.css";

const NewPost = ()=>{
    return (
        <>
        <div class="container py-5">

<header class="text-white text-center">
    <h1 class="display-4">Upload your artwork.</h1>
    <p class="lead mb-0">Please select a file from your local device..</p>
    <img src="https://bootstrapious.com/i/snippets/sn-img-upload/image.svg" alt="" width="150" class="mb-4"/>
</header>


<div class="row py-4">
    <div class="col-lg-6 mx-auto">

        <div class="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
            <input id="upload" type="file" class="form-control border-0"/>
            {/* <label id="upload-label" for="upload" class="font-weight-light text-muted">Choose file</label> */}
            <div class="input-group-append">
                <label for="upload" class="btn btn-light m-0 rounded-pill px-4"> <i class="fa fa-cloud-upload mr-2 text-muted"></i><small class="text-uppercase font-weight-bold text-muted">Choose file</small></label>
            </div>
        </div>
        <div style={{justifyContent:"center", textAlign : "center"}}>
        <button type="button" class="btn btn-secondary btn-lg">Upload</button>
        </div>
      
    </div>
</div>
</div>

        </>
    );
}
export default NewPost