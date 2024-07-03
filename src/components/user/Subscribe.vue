<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="row bg-white border rounded-3">
            <div class="d-grip gap-2 bg-primary">
                <p class="d-flex align-items-start fs-5 mb-0 text-white mt-2">Hi Test!</p>
                <p class="d-flex align-items-start fs-6 text-decoration-underline text-white">test@gmail.com</p>
            </div>

            <div class="d-grip gap-2 mb-3">
                <p class="d-flex align-items-start fs-5 mb-0 text-secondary fw-light mt-2">Subscription</p>
            </div>

            <div class="row mb-4">
                <!--subscription 1 -->
                <div class="col-md-4 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="align-items-center justify-content-center">
                                <p class="fs-6 mb-0 text-secondary fw-light mt-2">Beginner Lesson</p>
                                <p class="fs-2 mb-0 text-black fw-light mt-2">$0000</p>
                                <p class="mb-2 text-secondary fw-light mt-2"><small>This is a test description..</small></p>

                                <router-link to="/lesson" class="text-white text-decoration-none">
                                    <button type="button" class="btn btn-danger fw-light mt-1 text-white">
                                        Subscribe
                                    </button>
                                </router-link>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <!--subscription 2 -->
                <div class="col-md-4 col-sm-12 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="align-items-center justify-content-center">
                                <p class="fs-6 mb-0 text-secondary fw-light mt-2">Make-up Schedule</p>
                                <p class="fs-2 mb-0 text-black fw-light mt-2">$0000</p>
                                <p class="mb-2 text-secondary fw-light mt-2"><small>This is a test description..</small></p>

                                <router-link to="/lesson" class="text-white text-decoration-none">
                                    <button type="button" class="btn btn-danger fw-light mt-1 text-white">
                                        Subscribe
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!--subscription 3 -->
                <div class="col-md-4 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="align-items-center justify-content-center">
                                <p class="fs-6 mb-0 text-secondary fw-light mt-2">Add-on Lesson Schedule</p>
                                <p class="fs-2 mb-0 text-black fw-light mt-2">$0000</p>
                                <p class="mb-2 text-secondary fw-light mt-2"><small>This is a test description..</small></p>

                                <router-link to="/lesson">
                                    <button type="button" class="btn btn-danger fw-light mt-1 text-white">
                                        Subscribe
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>