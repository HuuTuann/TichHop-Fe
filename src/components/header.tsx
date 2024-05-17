import Navigation from "@/components/navigation";

const Header = () => {
  return (
    <div className="text-white space-y-10">
      <Navigation />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">System Integration Practices</h1>
        <p className="opacity-80">
          This is a simple application to demonstrate the system integration
          practices.
        </p>
      </div>
    </div>
  );
};

export default Header;
