<template>
   <div class="d-flex align-items-center justify-content-center">
        <form name="login_form" class="border rounded-3  bg-white col-md-3">
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
</template>