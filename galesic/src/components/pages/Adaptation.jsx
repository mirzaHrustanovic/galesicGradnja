import Header from "../Header";
import "../styles/parallax-image.css";
import malterisanje from "../serviceImage/malterisanje.jpg";
import plocice from "../serviceImage/polaganje-keramike1.jpg";
import laminat from "../serviceImage/laminat.jpg";
import elektro from "../serviceImage/elektro-installation1.jpg";
import vodo from "../serviceImage/vodo.jpg";
import rigips from "../serviceImage/rigips.jpg";
import Contact from "./Contact";

const Adaptation = () => {
  return (
    <>
      <Header />
      <div className="main">
        <h1>Adaptacije stana i kuće</h1>
        <div className="parallax-container">
          <div className="parallax-image">
            {/*this is the place where image is set in css and get the effect of parallax */}
          </div>
        </div>
        <p>
          Šta uraditi da Vaš stan i dalje bude mjesto porodične harmonije i kako
          ga preurediti da bude mjesto poželjnog i nezaboravnog druženja. Kako
          pronaći majstore koji će svaku Vašu želju i viziju pretočiti u
          stvarnost. Odgovore na ta i sva druga pitanja vezana za adaptaciju ili
          renoviranje Vaseg stana, kuće ili poslovnog prostora možete pronaći
          kod nas. Naš cilj je da Vam ponudimo rešenja adaptacije, bilo da se
          radi o adaptaciji stana, adaptaciji kupatila, adaptaciji poslovnih
          prostora, adaptaciji kuća, izolacije, vodovodu, kanalizaciji, zidanju,
          malterisanju, elektro-radovima, parketu, keramici, iskopu, rušenju,
          odvozu šuta.
        </p>
        <h3>
          Izvodimo sve vrste adaptacijsko-završnih radova po sistemu ključ u
          ruke ali isto tako i pojedinačnih obrtničkih radova:
        </h3>
        <div className="wall-work">
          <div className="text-content">
            <h4>Zidarski radovi</h4>

            <li>Maltarenje, struganje, gletovanje i krecenje</li>
            <p>
              Prije malterisanja zidove treba čistiti od žica preostalih od
              skidanja oplate i od slučajnih izbočina nastalih prosipanjem
              maltera tokom zidanja.Zatim zidove treba dobro nakvasiti vodom
              kako zid ne bi povukao vlagu iz maltera neophodnu za njegovo
              vezivanje.Svu nataloženu prašinu po površinama i spojnicama treba
              sprati.Na svim ivicama (prozorske špaletne, uglovi, stubovi...)
              treba postaviti zaštitne pocinčane ugaone profile.Najpogodnije
              vrijeme za melterisanje je proljeće i jesen zbog umjerene
              temperature i vlažnosti vazduha.Zimi ne treba malterisati mraznim
              danima, a ljeti površine koje se malterišu treba zaštiti od
              direktnih sunčevih zraka. Kada su svi grubi građevinski radovi
              gotovi počinje se sa malterisanjem unutrašnjih, a zatim spoljnih
              površina.U zavisnosti od namjene prostorije i završne obloge zida
              vrši se grubo malterisanje, glatko malterisanje zidova ili
              mašinsko malterisanje.
            </p>
          </div>
          <img src={malterisanje} alt="malterisanje" />
        </div>

        <div className="wall-work__other">
          <img src={plocice} alt="plocice" />
          <div className="text-content__other">
            <h4>Keramičarski radovi</h4>

            <li>postavljanje keramičkih pločica, zamjena podnih obloga</li>

            <p>
              Postavljanje pločica je jedan od najčešćih metoda za
              modernizovanje izgleda bilo kojeg prostora.Danas postoji gotovo
              veliki broj oblika, dezena i nijansi pločica koje će se uklopiti u
              bilo koji stil uređenja.Podloga mora da bude ravna, ujednačena i
              čvrsta kako se pločice ne bi klackale i vremenom pucale.Ukoliko
              površina ne zadovoljava ove osnovne uslove, pripremite je tako što
              ćete nanijeti cementnu glazuru ili masu za izravnavanje
              podova.Ukoliko dodajete sloj na podlogu vodite računa o svim
              drugim elementima na koje će uticati nova visina poda:vrata,
              slivnici, odvodi, itd..Podlogu je potrebno ovlažiti vodom ili
              impregnirati proizvodom PODLOGA KONCENTRAT.Za glatke površine
              preporučujemo tu je PODLOGA KVARC.Oba premaza ujedno predstavljaju
              vezujući most između podloge i upotrebljenog materijala stvarajući
              jaču vezu i smanjujući potrošnju istog. Ukoliko je primjena kod
              podova većih površina,sa izraženim prelazima između prostorija u
              istom nivou, obavezno treba obratiti pažnju na dilatacione fugne
              ili lajsne.
            </p>
          </div>
        </div>

        <div className="wall-work">
          <div className="text-content">
            <h4>Parketarski i podopolagački radovi</h4>
            <li>postavljanje parketa i laminata</li>
            <p>
              Laminatni podovi popularan su izbor za mnoge kupce. To je
              isplativa i izdržljiva opcija koja može oponašati izgled tvrdog
              drva.Prije postavljanja laminata, pobrinite se da je podna
              površina čista, ravna i naravno suha. Također se pobrinite da
              pokrijete i sanirate eventualna oštećenja na podu, te ujednačite
              dijelove koji su izdignuti ili udubljeni puneći ih pijeskom. Na
              kraju naravno usisajte svu prljavštinu i prašinu sa poda.Većina
              proizvođača preporučuje da vanjski rub laminata bude pričvršćen sa
              100% -tnim silikonskim sredstvom za brtvljenje kako bi se
              spriječilo da voda dospije ispod laminata i izazove nepopravljivu
              štetu. Ako kao podnu oblogu imate beton, proizvođači preporučuju
              sloj od 6 milimetara polietilena ispod laminata.
            </p>
          </div>
          <img src={laminat} alt="laminat" />
        </div>

        <div className="wall-work__other">
          <img src={elektro} alt="elektroinstalacije" />
          <img src={vodo} alt="vodoinstalater" />
          <div className="text-content__other">
            <h4>Elektroinstalacije i vodovodne instalacije</h4>
            <p>
              Elektroinstalaterski radovi obuhvaćaju cjlovitu električnu mrežnu
              strukturu instalacija električnih sistema u novogradnji te
              popravke, zamjenu i adaptacije postojećih. U sklopu naših
              djelatnosti obavljamo i elektroinstalaterske radove. Pod
              izvođenjem elektroinstalacija podrazumjeva se dobava, ugradnja i
              spajanje svog elektromaterijala u elektroinstalacijama.
            </p>
            <p>
              Vodoinstalaterski radovi su cjeloviti radovi ili intervencije na
              dovodnim i odvodnim instalacijama u objektu ali i ivan nejga.
              Vodoinstalaterski radovi se odnose na spajanja na priključak,
              montažu svih sanitarija te puštanja u pogon sustava. Pri tom se
              koriste provjereni i u svijetu poznati sustavi vrhunske kvalitete.
            </p>
          </div>
        </div>

        <div className="wall-work">
          <div className="text-content">
            <h4>Suha gradnja</h4>
            <li>gips, knauf i rigips, pregradni zidovi i spušteni plafon</li>
            <p>
              Današnji pronicljivi kupci imaju visoka očekivanja od strane
              investitora u pogledu kvaliteta proizvoda, blagovremenog završetka
              i usluge.Dodajte ovome pitanja rastuće inflacije troškova i jasno
              je da je brza i značajna transformacija u praksi izgradnje
              nekretnina potreba sata.Jedna od njih je tehnika suve
              gradnje koja pomaže u kreiranju visokokvalitetnih,
              jeftinih, vremenski učinkovitih i ekološki prihvatljivih projekata
              
            </p>
          </div>
          <img src={rigips} alt="rigips"/>
        </div>
      </div>
      <Contact/>
    </>
  );
};

export default Adaptation;
