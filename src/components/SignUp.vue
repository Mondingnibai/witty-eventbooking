<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
        <form name="login_form" class="border rounded-3 col-md-6 p-3 bg-white">
            <div class="d-grid mt-3 align-items-center justify-content-center">
                <p class="fs-6 text-secondary fw-light">Sign Up</p>
            </div>

            <div class="row">
                <!-- name inputs -->
                <label for="labelInput" class="form-label fw-light fs-6">Name</label>
                <div class="col-md-6">
                    <input type="text" class="form-control"/>
                    <small class="fs-6 text-secondary fw-light">First Name</small>
                </div>
                <div class="col-md-6 mb-3">
                    <input type="text" class="form-control"/>
                    <small class="fs-6 text-secondary fw-light">Last Name</small>
                </div>
                <!-- end of name inputs -->
            </div>


            <div class="row">
                <!-- sign in credentials -->
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
    </div>
</template>