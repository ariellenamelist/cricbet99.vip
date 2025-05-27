'use client'
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Welcome() {
    const settings = {          
          infinite: true,
          spacing: 15,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 768, // screens less than 768px
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };

    return (
        <>

			<div className="section-one">
					<div className="e-con-inner">
                        <Slider {...settings}>
                <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/top-sl1.jpg"
                    alt="Welcome to CricBet99 "
                    width={1140}
                    height={213}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/top-sl2.jpg"
                    alt="Welcome to CricBet99 "
                    width={1140}
                    height={213}      
                    />
                 </div>
                 
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/top-sl3.jpg"
                    alt="Welcome to CricBet99 "
                    width={1140}
                    height={213}         
                    />
                 </div>

                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/top-sl4.jpg"
                    alt="Welcome to CricBet99 "
                    width={1140}
                    height={213}         
                    />
                 </div>

                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/top-sl5.jpg"
                    alt="Welcome to CricBet99 "
                    width={1140}
                    height={213}         
                    />
                 </div>
            </Slider> 
                    <br/>
					<div className="row">
					<div className="col-12">
					<div className="left text-center">
                        <h1 className="elementor-heading-title elementor-size-default">
                            Welcome to CricBet99 – India’s #1 Online Betting <br/> Platform for Sports and Casino Games

                        </h1>
                        <br />
                        <div className="text-left">
                            <p>
                            Would you like to make predictions about your favorite sports and try your luck at sports? CricBet99 Fantasy Gaming is the best platform for achieving this.{" "}
                            </p>
                            <p>
                           CricBet99 allows you to build a squad, compete with other players, and get incentives based on your ranking (or fantasy point scores). You may also get more involved in your favorite sport by seeing the players you've selected perform in real time.
                            </p>
                            <p>
                            Additionally, using CricBet99 doesn't require you to be an expert. Both the app and the online interface are easy to use and understand. Additionally, our sign-up process is really simple. Just "The Blink of an Eye" is needed.
                            </p>
                            As a result, CricBet99 allows you to keep watching your favorite games while having fun and earning real money.
                            <p />
                        </div>
                        </div>

					</div>
					</div>				
					</div>					
					<br/>	
					<div className="text-center anc-tab">
						<a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-pulse-grow" href="https://wa.me/918441068489">
							<span className="elementor-button-content-wrapper">
								
								<span className="elementor-button-text">Get CricBet99 Login ID</span>
							</span>
						</a>
					</div>	
					<br/>					
					</div>
							
        </>
    )
}
