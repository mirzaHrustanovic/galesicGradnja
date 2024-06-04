import Header from "../Header";
import "../styles/parallax-image.css";
import malterisanje from "../serviceImage/malterisanje.jpg";
import plocice from "../serviceImage/polaganje-keramike1.jpg";
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
          <h4>Zidarski radovi</h4>
          <img src={malterisanje} alt="malterisanje" />

          <li>Maltarenje, struganje, gletovanje i krecenje</li>
          <p>
            Pripreme za malterisanje obavljaju se još tokom zidanja uvlačenjem
            zidarskih spojnica od maltera za 1.5-2cm. Prije malterisanja zidove
            treba čistiti od žica preostalih od skidanja oplate i od slučajnih
            izbočina nastalih prosipanjem maltera tokom zidanja. Zatim zidove
            treba dobro nakvasiti vodom kako opeka ne bi povukla vlagu iz
            maltera neophodnu za njegovo vezivanje. Svu nataloženu prašinu po
            površinama i spojnicama treba sprati. Na svim ivicama (prozorske
            špaletne, uglovi, stubovi...) treba postaviti zaštitne pocinčane
            ugaone profile. Najpogodnije vrijeme za melterisanje je proljeće i
            jesen zbog umjerene temperature i vlažnosti vazduha. Zimi ne treba
            malterisati mraznim danima, a ljeti površine koje se malterišu treba
            zaštiti od direktnih sunčevih zraka. Kada su svi grubi građevinski
            radovi gotovi počinje se sa malterisanjem unutrašnjih, a zatim
            spoljnih površina. U zavisnosti od namjene prostorije i završne
            obloge zida vrši se grubo malterisanje, glatko malterisanje zidova
            ili mašinsko malterisanje.
          </p>
        </div>

        <div className="wall-work">
          <h4>Keramičarski radovi</h4>
          <img src={plocice} alt="plocice" width={600} height={300} />

          <li>postavljanje keramičkih pločica, zamjena podnih obloga</li>

          <p>
            Postavljanje pločica je jedan od najčešćih metoda za modernizovanje
            izgleda bilo kojeg prostora. Uz razvoj tehnologije izrade kao i
            samih ideja, pločice postaju sve popularniji izbor za različite
            prostore i namjene. Danas postoji gotovo bezbroj oblika, dezena i
            nijansi pločica koje će se uklopiti u koji god stil uređenja da
            želite. Podloga mmora da bude ravna, ujednačena i čvrsta površina
            kako se pločice ne bi klackale i vremenom pucale. Ukoliko površina
            ne zadovoljava ove osnovne uslove, pripremite je tako što ćete
            nanijeti cementnu glazuru ili masu za izravnavanje podova. Samo
            pažljivo! Ukoliko dodajete sloj na podlogu vodite računa o svim
            drugim elementima na koje će uticati nova visina poda: vrata,
            slivnici, odvodi… Prije nanošenja ljepila, podlogu je potrebno
            ovlažiti vodom ili ako je vodoupojna impregnirati proizvodom PODLOGA
            KONCENTRAT. Za glatke površine preporučujemo proizvod PODLOGA KVARC.
            Posebno je pogodna kao vezni most prilikom lijepljenja nove keramike
            preko stare. Oba premaza ujedno predstavljaju vezujući most između
            podloge i upotrebljenog materijala stvarajući jaču vezu i smanjujući
            potrošnju istog. Ukoliko je primjena kod podova većih površina,
            i/ili sa izraženim prelazima između prostorija u istom nivou,
            obavezno treba obratiti pažnju na dilatacione fugne ili lajsne.
          </p>
        </div>

        <div>
          {" "}
          Parketarski i podopolagački radovi -postavljanje parketa i laminata
        </div>

        <div> Elektroinstalacije i vodovodne instalacije</div>

        <div>
          {" "}
          Suha gradnja -gips, knauf i rigips, pregradni zidovi i spušteni plafon
        </div>
      </div>
    </>
  );
};

export default Adaptation;
