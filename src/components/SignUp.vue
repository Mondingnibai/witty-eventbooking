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
</template>