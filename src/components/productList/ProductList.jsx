import "./productList.css";
import Product from "../product/Product";

import Pol from "../../img/screenshot.png";
import Zcu from "../../img/zcu.png";
import Vol from "../../img/vol.png";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
          Останні яскраві події що повпливали на мене{" "}
        </h1>
        <p className="pl-desc">
          Тема, яку хотілося б розглянути, містить у собі два аспекти, які не
          суперечать один одному. Чи то йдеться про спогади, чи то про
          ремінісценції, в обох випадках маємо на увазі одну й ту саму складову
          людської свідомості – пам'ять. Таким чином, ми розглянемо два види
          пам'яті, як це видно із заголовку статті. Нас не влаштовує бесіда
          просто про пам'ять, ми повинні уточнити, що існує форма, можливо,
          більш конкретна, більш поширена, більш повсякденна – «спогад» – і інша
          – більш тонка, котру важко визначити – «ремінісценція». Обидві форми є
          пам'яттю, і, врешті решт, для одних – це дивовижна здатність і істинне
          благословення, для інших – прокляття, від якого вони воліють втекти
          якомога швидше, для третіх – дещо цікаве, а для філософів, – мабуть,
          найбільш привабливе, що є в людині. Пам'ять охоплює всі без виключення
          сфери, ми зустрічаємося з нею в нашому емоційному світі, в нашому
          ментальному світі, у висотах нашого
        </p>
      </div>

      <div className="pl-list">
        <Product img={Pol} link="https://lpnu.ua/" />
        <Product
          img={Zcu}
          link="https://lb.ua/tag/10205_zbroyni_sili_ukraini"
        />
        <Product
          img={Vol}
          link="https://sport.rayon.in.ua/news/517123-v-uzhgorodi-vidbuvsya-blagodiyniy-miks-turnir-z-plyazhnogo-voleybolu"
        />
      </div>
    </div>
  );
};

export default ProductList;
