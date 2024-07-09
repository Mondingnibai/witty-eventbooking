<template>
    <div class="d-flex align-item-center justify-content-center vh-100">
        <div class="form-signin">
            <form class="text-center">

                <img class="mb-4" src="../../src/assets/login-icon.png" alt="" width="72" height="72">
                <h1 class="h3 mb-3 fw-normal text-center">Sign In</h1>

                <div class="form-floating mb-2">
                    <input type="email" class="form-control border-top-0 border-start-0 border-end-0" id="floatingInput" placeholder="Username">
                    <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control border-top-0 border-start-0 border-end-0" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>

                <router-link to="/dashboard" class="text-white text-decoration-none">
                    <button class="w-100 btn btn-lg btn-danger rounded-2 mb-3" type="submit">Sign in</button>
                </router-link>

                <div class="form-control-sm text-center">
                    <p class="text-secondary fw-light">Don&apos;t have an account? <router-link to="/sign-up">Create now</router-link></p>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
</style>