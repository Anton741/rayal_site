import './advantagesBlock.scss'

const AdvantagesBlock = () => {
  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__main">
          <div className="advantages__title title">Why you choose us!</div>
          <div className="advantages__dsr description">
            Naturally, it’s becoming even more important for hotel and
            hospitality brands to stand out from the crowd. Content marketing
            remains a key way for hotels to do this.
          </div>
          <div className="advantages__raw">
            <div className="advantages__column item-advantages">
              <div className="item-advantages__icon item-advantages__icon-booking"></div>
              <div className="item-advantages__title title">Easy booking</div>
              <div className="item-advantages__dsr description">
                The booking process should include minimal steps.
              </div>
            </div>
            <div className="advantages__column item-advantages">
              <div className="item-advantages__icon item-advantages__icon-interface"></div>
              <div className="item-advantages__title title">
                Friendly interface
              </div>
              <div className="item-advantages__dsr description">
                A hotel booking engine with a good user-friendly.
              </div>
            </div>
            <div className="advantages__column item-advantages">
              <div className="item-advantages__icon item-advantages__icon-responsibility"></div>
              <div className="item-advantages__title title">Responsibility</div>
              <div className="item-advantages__dsr description">
                You should be able to add rooms to your system.
              </div>
            </div>
            <div className="advantages__column item-advantages">
              <div className="item-advantages__icon item-advantages__icon-order"></div>
              <div className="item-advantages__title title">
                Quick order supply
              </div>
              <div className="item-advantages__dsr description">
                The booking process should include minimal steps.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default AdvantagesBlock;