<script setup>
</script>
<template>
<div class="row mb-none-30">
    <div class="col-md-12 mb-30">
        <form action="">
            <div class="card overflow-hidden">
                <div class="card-body">
                    <div class="row my-3 mx-2">
                        <div class="col-lg-6 ">
                            <div class="shadow-none p-3 mb-5 bg-light rounded">
                                <div class="col-md-12 mb-3">
                                    <label class="text-secondary">Logo</label>
                                    <div class="file-upload-wrapper" data-text="Select your file!">
                                        <input type="file" accept=".png, .jpg, .jpeg" name="logo" class="file-upload-field" />
                                    </div>
                                </div>
                                <div class="col-md-12 bg--dark mb-3">
                                    <img src="">
                                </div>
                                <div class="col-md-12 bg--gray mb-3">
                                    <img src="">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="shadow-none p-3 mb-5 bg-light rounded">
                                <div class="col-lg-12 mb-3">
                                    <label class="text-secondary">Favicon</label>
                                    <div class="file-upload-wrapper" data-text="Select your file!">
                                        <input type="file" accept=".png, .jpg, .jpeg" name="favicon"
                                            class="file-upload-field" />
                                    </div>
                                </div>
                                <div class="col-lg-12 mb-3 align-items-center justify-content-center">
                                    <img src=" " alt="" width="70">
                                </div>
                            </div>
                            <div class="form-group mb-0 text-end">
                                <button type="submit" class="btn bg--primary btn-global w-100">Update Logo and Favicon</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
</template>