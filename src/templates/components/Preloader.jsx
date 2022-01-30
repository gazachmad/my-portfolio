import { useEffect } from "react";
import $ from "jquery";

export const Preloader = () => {
    useEffect(() => {
        $(window).on('load', function () {
            $('#status').fadeOut();
            $('#preloader').delay(1000).fadeOut('slow');
            $('body').delay(1000).css({
                'overflow': 'visible'
            });
        });
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });
    })

    return (
        <div id="preloader">
            <div id="status">
                {/* <div className="logo">
                    <img src={"./assets/images/logo.png"} height="20" className="d-block mx-auto" alt="" />
                </div> */}
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </div>
    );
}
