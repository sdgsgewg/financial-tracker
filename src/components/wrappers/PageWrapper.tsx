import ScrollToTop from "../shared/ScrollToTop";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <ScrollToTop />
      {children}
    </div>
  );
};

export default PageWrapper;
