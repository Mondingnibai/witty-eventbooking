<template>
    <div class="d-flex align-item-center justify-content-center vh-100">
        <div class="form-signin">
            <form class="text-center">

                <img class="mb-4" src="../../src/assets/login-icon.png" alt="" width="72" height="72">
                <h1 class="h3 mb-3 fw-normal text-center">Sign In</h1>

                <div class="form-floating mb-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Username">
                    <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="form-control-sm text-center">
                    <p class="text-secondary fw-light">Don&apos;t have an account? <router-link to="/sign-up">Sign Up</router-link></p>
                </div>

                <button class="w-100 btn btn-lg btn-primary rounded-2" type="submit">Sign in</button>
            </form>
        </div>
    </div>
   <!-- <div class="row justify-content-center">
        <div class="col-md-6 col-sm-12 col-lg-6">
            <form name="login_form" class="border rounded-3 bg-white">
            <div class="d-grid mt-3 align-items-center justify-content-center">
                <p class=" fs-6 text-secondary fw-light">Sign In</p>
            </div>
            
            <div class="form-control-sm mt-3">
                <input type="email" class="form-control fs-6 fw-light" id="loginInputEmail" placeholder="Email Address">
            </div>

            <div class="form-control-sm mb-3">
                <input type="password" class="form-control fs-6 fw-light" id="loginInputPassword" placeholder="Password">
            </div>

            <router-link to="/dashboard" class="text-white text-decoration-none">
                <div class="d-grid gap-3">
                    <button type="button" class="btn btn-primary btn-sm m-2 p-2 fw-light rounded-3">
                        Sign In
                    </button>
                </div>
            </router-link>
            
            
            <div class="form-control-sm text-center">
                <p class="text-secondary fw-light">Don&apos;t have an account? <router-link to="/sign-up">Sign Up</router-link></p>
            </div>

            </form> 
        </div>
    </div> -->
</template>

<style>
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
</style>