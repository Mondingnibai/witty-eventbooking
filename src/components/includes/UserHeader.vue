<template>
    <div class="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <img src="../../../src/assets/login-icon.png" alt="" width="50" height="50">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/dashboard">
                                <i class="bi-house fs-5"></i><span class="ms-1 d-sm-inline">Home</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">
                                <i class="bi-box-arrow-left fs-5"></i><span class="ms-1 d-sm-inline">Sign Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="text-center border-bottom-0 border-top mh-100 bg-light">
            <div class="mb-3">
                <img src="../../../src/assets/login-icon.png" alt="" width="100" height="100">
                <p class="fs-4 mb-0">Marie Pedraza</p>
                <small class="fs-6 text-secondary fw-light mb-3">marie.pedraza@gmail.com</small>
            </div>
        </div>
    </div>
</template>