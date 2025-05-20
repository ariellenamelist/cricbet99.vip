
'use client'
import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Fantasygames() {

        const settings = {          
          infinite: true,
          spacing: 15,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 768, // screens less than 768px
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
          ],
        };

    return (
        <>
      
  <div className="section-one section-one-14">
    <div className="e-con-inner">
      <div className="row">
        <div className="col-12">
          <div className="left text-center">
            <h2 className="elementor-heading-title elementor-size-default">
              {" "}
              Are there any fantasy games available at CricBet99?
            </h2>
            <div className="top--slider">
            <Slider {...settings}>
                <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-01.webp"
                    alt="Welcome to CricBet99"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-02.webp"
                    alt="Welcome to CricBet99"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-03.webp"
                    alt="Welcome to CricBet99"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-04.webp"
                    alt="Welcome to CricBet99"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-06.webp"
                    alt="Welcome to CricBet99"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-05.webp"
                    alt="Welcome to CricBet99"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-06.webp"
                    alt="Welcome to CricBet99"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-07.webp"
                    alt="Welcome to CricBet99"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-08.webp"
                    alt="Welcome to CricBet99"
                    width={174}
                    height={235}      
                    />
                 </div>
            </Slider>            
            </div>
            <br />
            <div className="elcontainer text-left">
              <p>
                <strong>1. Cricket: </strong> For big series including the IPL, World Cup, T20s, One-Day, and Test series, we offer pre-match and live betting options. Toss-winner, match-winner, total runs, top bowler, top batsman, and other amazing game highlights are just a few of the many options available to our subscribers.
              </p>
              <p>
                <strong>2. Football:</strong> For football enthusiasts, we provide a range of leagues, such as the English Premier League, La Liga, Serie A, UEFA Champions League, and FIFA World Cup. There are bets on Full Time/Full Time, Total Goals, Goal Difference, and other things.{" "}
              </p>
              <p>
                <strong>3. Tennis:</strong>  If you choose tennis, you can place bets on important events like Wimbledon, the US Open, and others. You can bet on a single or team victory in addition to betting options like match winner, set winner, total sets, etc.{" "}
              </p>
              <p>
                <strong>4. Horse Racing:</strong> Horse racing wagering has been popular since antiquity. We also give our users the same thrilling experience with our platform. You have the option to place a bet on the winner or the finish line of a race.
              </p>
              <p>
                <strong>5. Basketball:</strong> Leagues such as the FIBA, NBA, NCAA, BCL, and others are available on our site. The individual with the most goals, the winning team, or the difference between basket victories are all possible bets.{" "}
              </p>
            </div>
            <br />
            <h3 className="elementor-heading-title elementor-size-default">
              {" "}
              Online Casino Games
            </h3>{" "}
            <br />
            <div className="elcontainer text-left">
              <p>
                If you don't like any of the sports or don't want to play any, we also have casino games. And that's what sets our platform apart. At CricBet99, you may play both conventional casino games and fantasy sports.
              </p>
              <p>
                Because there are so many casino games, you will never run out of options and will always have something to play. Our CricBet99 casino section offers exciting slots, traditional table games, and even live dealer interactive events.
              </p>
              <div className="f-bx">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="ibx">
                      <div className="img">                       
                        <Image
                          className="img-fluid"
                          src="/images/slot_game-1.webp"
                          alt="CricBet99 Login ID"
                          width={360}
                          height={240}      
                          />
                      </div>
                      <div className="inf">
                        <h4>Slot Games</h4>
                        <p>
                          Over 100 games are available, each with its own special features, themes, and jackpot sequences. Bingo, video poker, slots, craps, pino, and live dealer are some of the most played games.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="ibx">
                      <div className="img">
                      <Image
                          className="img-fluid"
                          src="/images/slot_game-2.webp"
                          alt="CricBet99 Login ID"
                          width={360}
                          height={240}      
                          />
                      </div>
                      <div className="inf">
                        <h4>Table Games</h4>
                        <p>
                          You can test your skills in live or virtual versions of classic table games including baccarat, roulette, and blackjack.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="ibx">
                      <div className="img">
                      <Image
                          className="img-fluid"
                          src="/images/slot_game-3.webp"
                          alt="CricBet99 Login ID"
                          width={360}
                          height={240}      
                          />                       
                      </div>
                      <div className="inf">
                        <h4>Live Casino</h4>
                        <p>
                          If you would rather not play against programmed boards or anonymous players, you can take part in our special live casino event. With live dealers and gamers, it's a real live casino. It offers a fantastic experience that mimics playing in a real casino.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>{" "}
            <br />
            <h3 className="elementor-heading-title elementor-size-default">
              {" "}
              Here’s a quick table showing common fantasy game types:{" "}
            </h3>{" "}
            <br />
            <div className="table-container table-responsive py-3">
              <table className="table table-bordered table-hover">
                <tbody>
                  <tr>
                    <th>Entertainment Category</th>
                    <th> Popular Games &amp; Events </th>
                    <th> Key Features</th>
                    <th> Betting Range</th>
                  </tr>
                  <tr>
                    <td>Cricket Betting </td>
                    <td>IPL, World Cups, BBL, PSL, Domestic Leagues</td>
                    <td>Live In-Match Betting, per ball/over bets</td>
                    <td>₹2 to ₹1 lakhs</td>
                  </tr>
                  <tr>
                    <td>Football &amp; Other Sports</td>
                    <td>
                      Premier League, La Liga, NBA, Tennis, Kabaddi, Horse Racing
                    </td>
                    <td>Bet on Global Sports, Acca Boost </td>
                    <td>₹2 to ₹1 lakhs</td>
                  </tr>
                  <tr>
                    <td>Authentic Desi Card Games</td>
                    <td>
                     Teen Patti (6 variants), Andar Bahar, Marriage Card, 32 Cards
                    </td>
                    <td>Play Classic Indian Games, Hindi-Speaking Dealers</td>
                    <td>₹2 to ₹1 lakh</td>
                  </tr>
                  <tr>
                    <td>Classic International Cards</td>
                    <td>Blackjack, Poker, Baccarat, Rummy, Dragon Tiger</td>
                    <td>Standard Casino Games, Auto-Translate Option</td>
                    <td>₹5 to ₹2 lakhs</td>
                  </tr>
                  <tr>
                    <td>Roulette & Immersive Tables </td>
                    <td>European/American/French Roulette, Sic Bo, Craps</td>
                    <td>Multiple Table Types, Multi-Camera Angles</td>
                    <td>₹5 to ₹2 lakhs</td>
                  </tr>
                  <tr>
                    <td>Exciting Fast Games</td>
                    <td>Aviator, Crash, Dice, Plinko, Mines </td>
                    <td>Instant Results, Quick Gameplay</td>
                    <td>₹5 to ₹50k </td>
                  </tr>
                  <tr>
                    <td>Diverse Slot Machines</td>
                    <td>
                      Bollywood Themes, Mythology, Lucky 7s (200+ options)
                    </td>
                    <td>Huge Game Selection, Progressive Jackpots </td>
                    <td>₹2 to ₹10k per spin </td>
                  </tr>
                  <tr>
                    <td>Premium Live Casino </td>
                    <td>Live Dealers for Cards, Roulette, etc.</td>
                    <td>Real-time Interaction, HD Streaming, VIP Tables</td>
                    <td>₹100 to ₹2 lakhs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />



                            
        </>
    )
}
