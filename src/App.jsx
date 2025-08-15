import { Routes, Route } from "react-router-dom";
import { Prezentare } from "./prezentare/prezentare";
import { Mall } from "./mall/produse/mall";
import { Lmall } from "./mall/lista/lmall";
import { Magazin } from "./magazin/produse/magazin";
import { Lmagazin } from "./magazin/lista/lmagazin";
import { Lenin } from "./lenin/produse/lenin";
import { Llenin } from "./lenin/lista/llenin";
import { Horezu } from "./horezu/produse/horezu";
import { Lhorezu } from "./horezu/lista/lhorezu";
import { Cafenea } from "./cafenea/produse/cafenea";
import { Lcafenea } from "./cafenea/lista/lcafenea";
import { Bulevard } from "./bulevard/produse/bulevard";
import { Lbulevard } from "./bulevard/lista/lbulevard";
import { Ban } from "./ban/produse/ban";
import { Lban } from "./ban/lista/lban";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Prezentare />} />
      <Route path="/prezentare" element={<Prezentare />} />
      <Route path="/mall" element={<Mall />} />
      <Route path="/lmall" element={<Lmall />} />
      <Route path="/magazin" element={<Magazin />} />
      <Route path="/lmagazin" element={<Lmagazin />} />
      <Route path="/lenin" element={<Lenin />} />
      <Route path="/llenin" element={<Llenin />} />
      <Route path="/horezu" element={<Horezu />} />
      <Route path="/lhorezu" element={<Lhorezu />} />
      <Route path="/cafenea" element={<Cafenea />} />
      <Route path="/lcafenea" element={<Lcafenea />} />
      <Route path="/bulevard" element={<Bulevard />} />
      <Route path="/lbulevard" element={<Lbulevard />} />
      <Route path="/ban" element={<Ban />} />
      <Route path="/lban" element={<Lban />} />
    </Routes>
  );
}

export default App;
