import Wrapper from "components/Wrapper";
import CaseHeader from "components/casePage/CaseHeader";
import { AllCases } from "components/allCases/AllCases";

const AllCasesPage = () => {
  return (
    <section>
      <Wrapper>
        <CaseHeader />
        <AllCases />
      </Wrapper>
    </section>
  );
};

export default AllCasesPage;
