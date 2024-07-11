<template>
    <div class="col-sm-auto bg-danger sticky-top">
        <div class="d-flex flex-sm-column flex-row flex-nowrap bg-danger align-items-center sticky-top">
            <a href="/" class="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                <i class="bi-bootstrap fs-1 text-white"></i>
            </a>
            <ul class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                <li class="nav-item">
                    <router-link to="/admin/teachers" class="nav-link py-3 px-2" title="Teacher" data-bs-toggle="Teacher" data-bs-placement="right" data-bs-original-title="Teacher">
                        <i class="bi-person fs-4 text-white"></i><span class="ms-1 d-none d-sm-inline text-white">Teachers</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/students" class="nav-link py-3 px-2" title="Students" data-bs-toggle="Students" data-bs-placement="right" data-bs-original-title="Students">
                        <i class="bi-person-circle fs-4 text-white"></i><span class="ms-1 d-none d-sm-inline text-white">Students</span>
                    </router-link>
                </li>
                <li>
                    <div class="dropdown">
                        <a href="#" class="text-white d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi-exclude fs-4 text-white"></i><span class="ms-1 d-none d-sm-inline text-white">Others</span>
                        </a>    
                        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                            <li>
                                <router-link to="/admin/lesson-type" class="text-decoration-none p-2 text-black">
                                    Lesson Type
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/location" class="text-decoration-none p-2 text-black">
                                    Location
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/session" class="text-decoration-none p-2 text-black">
                                    Session
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <router-link to="/admin/lesson-booked" class="nav-link py-3 px-2" title="Lesson Booked" data-bs-toggle="Lesson Booked" data-bs-placement="right" data-bs-original-title="Lesson Booked">
                        <i class="bi-bar-chart-fill fs-4 text-white"></i><span class="ms-1 d-none d-sm-inline text-white">Booked</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/" class="nav-link py-3 px-2" title="Sign Out" data-bs-toggle="Sign Out" data-bs-placement="right" data-bs-original-title="Sign Out">
                        <i class="bi-box-arrow-left fs-4 text-white"></i><span class="ms-1 d-none d-sm-inline text-white">Sign Out</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>