'use client'


import React, { useEffect } from 'react';
import $ from 'jquery';

export default function Faq() {
  
  useEffect(() => {
    function closeAccordionSection() {
      $('.accordion .accordion-section-title').removeClass('active');
      $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').on('click', function (e) {
      e.preventDefault();
      const currentAttrValue = $(this).attr('href');

      if ($(e.target).hasClass('active')) {
        closeAccordionSection();
      } else {
        closeAccordionSection();
        $(this).addClass('active');
        $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
      }
    });

    return () => {
      $('.accordion-section-title').off('click');
    };
  }, []);


    return (
        <>
        <div className="section-one section-one-9 section-one-22">
  <div className="e-con-inner">
    <h2 className="elementor-heading-title elementor-size-default">
      Frequently Asked Questions{" "}
    </h2>
    <div className="accordion">
      <div className="accordion-section">
        <a href="#accordion-1" className="accordion-section-title">
          1. How do I sign up at CricBet99? <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-1"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            The registration process is really simple. Click the "Sign Up" or "Register" button on our main page. Furthermore, you can get your customer ID directly from the homepage's WhatsApp (recommended) button. You will first be asked for your full name, active WhatsApp number, and email address.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-2" className="accordion-section-title">
          2. Are there new player welcome bonuses at CricBet99?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-2"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Yes, both new and returning players can take advantage of promos and welcome offers. Right now, you can get a 100% welcome bonus on your first deposit. We also provide special referral bonuses for loyal users, along with 1% lifetime referral awards.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-3" className="accordion-section-title">
          3. How many betting options are available on CricBet99?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-3"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            CricBet99 offers a wide range of betting alternatives, including live casino, virtual sports, popular sports betting (including football, cricket, and tennis), and hundreds of other activities. You may view all of the lists in the top bar or side menu of the CricBet99 app.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-4" className="accordion-section-title">
          4. What options are available for downloading the CricBet99 apps?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-4"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            For iOS and Android users, the CricBet99 app can be downloaded from the official website. During the first installation, you have the option to ignore the warning and click "Install Anyway."
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-5" className="accordion-section-title">
          5. How long does it take to get funds in my CricBet99 account after a deposit?
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-5"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            E-wallets and UPI deposits are usually credited within a few seconds. Net banking transfers (RTGS, NEFT, and IMPS) take five minutes, depending on the banking system. Because bitcoin deposits require network confirmations, the times may vary.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-6" className="accordion-section-title">
          6. What if I forget my CricBet99 password?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-6"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            If you can't remember your password, just select the "Forgot Password" option on the login screen. You will be prompted to input your registered email address or WhatsApp number. You can also get in touch with our support team directly on WhatsApp. {" "}
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-7" className="accordion-section-title">
          7. How do I get customer support if I face any problem?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-7"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            We provide 24/7 human, not chatbot, one-on-one client care. We can also be contacted via WhatsApp live chat. {" "}
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-8" className="accordion-section-title">
          8. What if a match or an event on which I have bet is cancelled?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-8"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Examples of situations that are covered by our betting rules include events that are postponed or canceled. In most cases, wagers on canceled events are worthless; the funds are credited back to your CricBet99 balance.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}