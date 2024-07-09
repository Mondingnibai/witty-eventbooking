<template>
    <div class="d-flex align-item-center justify-content-center vh-100">
        <div class="form-signin">
            <form class="text-center">

                <img class="mb-4" src="../../src/assets/login-icon.png" alt="" width="72" height="72">
                <h1 class="h3 mb-3 fw-normal text-center">Create Account</h1>

                <div class="form-floating mb-2">
                    <input type="email" class="form-control border-top-0 border-start-0 border-end-0" id="floatingInput" placeholder="Username">
                    <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-2">
                    <input type="password" class="form-control border-top-0 border-start-0 border-end-0" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="form-floating mb-2">
                    <input type="firstname" class="form-control border-top-0 border-start-0 border-end-0" id="floatingInput" placeholder="First Name">
                    <label for="floatingInput">First Name</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="lastname" class="form-control border-top-0 border-start-0 border-end-0" id="floatingInput" placeholder="Last Name">
                    <label for="floatingInput">Last Name</label>
                </div>

                <router-link to="/" class="text-white text-decoration-none mb-3">
                    <button class="w-100 btn btn-lg btn-danger rounded-2 mb-3" type="submit">Create Account</button>
                </router-link>
                
                <div class="row form-control-sm text-center">
                    <p class="text-secondary fw-light">Already have an account? <a href="/">Sign In</a></p>
                </div>
            </form>
        </div>
    </div>
    <!-- <div class="d-flex align-items-center justify-content-center vh-100">
        <form name="login_form" class="border rounded-3 col-md-6 p-3 bg-white">
            <div class="d-grid mt-3 align-items-center justify-content-center">
                <p class="fs-6 text-secondary fw-light">Sign Up</p>
            </div>

            <div class="row">
                
                <label for="labelInput" class="form-label fw-light fs-6">Name</label>
                <div class="col-md-6">
                    <input type="text" class="form-control"/>
                    <small class="fs-6 text-secondary fw-light">First Name</small>
                </div>
                <div class="col-md-6 mb-3">
                    <input type="text" class="form-control"/>
                    <small class="fs-6 text-secondary fw-light">Last Name</small>
                </div>
                
            </div>


            <div class="row">
                
                <label for="labelInput" class="form-label fw-light fs-6">Account Credentials</label>
                <div class="col-md-6 mb-3">
                    <input type="email" class="form-control"/>
                    <small class="fs-6 text-secondary fw-light">Email Address</small>
                </div>

                <div class="col-md-6 mb-3">
                    <input type="password" class="form-control"/>
                    <small class="fs-6 text-secondary fw-light">Password</small>
                </div>
            </div>

            <router-link to="/">
                <div class="d-grid gap-3">
                    <button type="submit" class="btn btn-primary btn-sm  p-2 fw-light mb-3 rounded-3">Sign Up</button>
                </div>
            </router-link>

            
            <div class="row form-control-sm text-center">
                <p class="text-secondary fw-light">Already have an account? <a href="/">Sign In</a></p>
            </div>
        </form>
    </div> -->
</template>