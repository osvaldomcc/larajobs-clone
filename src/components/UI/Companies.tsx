import { Company } from './Company';

export const Companies = () => {
  return (
    <div className="companies">
      <Company name="adobe" className="mr-20" />
      <Company name="ge" className="mr-20" />
      <Company name="hellofresh" className="mr-20" />
      <Company name="usbank" className="mr-20" />
      <Company name="wto" />
    </div>
  );
};
