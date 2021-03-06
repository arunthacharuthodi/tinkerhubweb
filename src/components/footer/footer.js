import {React} from 'react';
import './footer.css'

export default function Footer(){
    return (
        <>1
                <div class="d-flex flex-column h-100">

                <section class="hero text-white py-5 flex-grow-1">
                    <div class="container py-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-4">Why TinkerHub Foundation Exists?</h1>
                                <p class="fst-italic text-muted">The world is changing, and we want India to be ready. We're here to make sure that everyone has access to the knowledge required to set the course for a better future.<a class="text-primary" href="https://tinkerhub.org/" target="_blank">tinkerhub.org</a></p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="w-100 py-4 flex-shrink-0">
                    <div class="container py-4">
                        <div class="row gy-4 gx-5">
                            <div class="col-lg-4 col-md-6">
                                <h5 class="h1 text-white">FB.</h5>
                                <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">Tinkerhub gecwayanad</a></p>
                            </div>
                            <div class="col-lg-2 col-md-6">
                                <h5 class="text-white mb-3">Quick links</h5>
                                <ul class="list-unstyled text-muted">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Get started</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-2 col-md-6">
                                <h5 class="text-white mb-3">Quick links</h5>
                                <ul class="list-unstyled text-muted">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Get started</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <h5 class="text-white mb-3">Newsletter</h5>
                                <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <form action="#">
                                    <div class="input-group mb-3">
                                        <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
                </div>
        </>
    );
}