import React from 'react';
import styled from 'styled-components';
import { mixins, theme } from '@styles';
const { fontSizes, fonts } = theme;

const mobileBreakpoint = '768px'; // Adjust based on your design breakpoints

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 20px;
  text-align: center;
  background-color: #213555;
  color: #a8b2d1;
  font-family: 'Roboto', sans-serif; // Ensure font fallbacks for better compatibility
  height: auto;
  min-height: 100px;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 15px; // Reduce padding on smaller screens
  }
`;

const StyledImpressumContent = styled.div`
  margin-top: 20px;
  line-height: 1.5;
  max-width: 800px;
  margin: auto;
  padding: 0 15px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.s};
  line-height: 1.5; // Ensure this is a decimal for consistency

  @media (max-width: ${mobileBreakpoint}) {
    font-size: ${fontSizes.s}; // Adjust font size for mobile devices
    padding: 0 10px; // Adjust padding
  }
`;

const StyledMetadata = styled.div`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xl};
  line-height: 1;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: ${fontSizes.l}; // Adjust font size for readability
  }
`;

const navigateToIndex = () => {
  window.location.href = '/';
};

function Impressum() {
  const impressumHTML = {
    __html: `
    <div class='impressum'><h1>Impressum und Datenschutzerklärung</h1><h2>Impressum</h2><p>Angaben gemäß § 5 TMG</p><p>Robert Lukas <br> 
    Humannweg 10<br> 
    80973 München <br> 
    </p><p> <strong>Vertreten durch: </strong><br>
    Robert Lukas<br>
    </p><p><h2><strong>Kontakt:</strong></h2>
    Telefon: +49175-7298012<br>
    E-Mail: <a href='mailto:robert_lukas@outlook.de'>robert_lukas@outlook.de</a></p><p><h2>Datenschutzerklärung</h2><h3><strong>Haftungsausschluss:</strong></h3><br><br><strong>Haftung für Inhalte</strong><br><br>
    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br><strong>Haftung für Links</strong><br><br>
    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br><br><strong>Urheberrecht</strong><br><br>
    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.<br><br><strong>Datenschutz</strong><br><br>
    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br>
    Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br>
    Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br>
    </p><br> 
    Website Impressum erstellt durch <a href="https://www.impressum-generator.de">impressum-generator.de</a> von der <a href="https://www.kanzlei-hasselbach.de/" rel="nofollow">Kanzlei Hasselbach</a>
     </div>
    `,
  };

  return (
    <StyledContainer>
      <StyledMetadata 
        tabindex="-1" target="_blank" onClick={navigateToIndex}>
        &#8594; Back to Robert Philipp Lukas Portfolio &#8592;
      </StyledMetadata>
      <StyledImpressumContent dangerouslySetInnerHTML={impressumHTML} />
      <StyledMetadata 
        tabindex="-1" target="_blank" onClick={navigateToIndex}>
        &#8594; Back to Robert Philipp Lukas Portfolio &#8592;
      </StyledMetadata>
      <br /><span>&#169;</span>Robert Philipp Lukas, 2024
    </StyledContainer>
  );
}

export default Impressum;