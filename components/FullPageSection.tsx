import Header from "../components/Header";

/**
 * Props for the FullPageSection component.
 *
 * @property {React.ReactNode} children - The content of the section
 * @property {boolean} header - Whether or not to render the header (default: false)
 *
 * Any other props will be passed to the section element.
 */
interface FullPageSectionProps {
  children: React.ReactNode;
  header?: boolean;
  [key: string]: any;
}

/**
 * Generic component for making a section that spans the full page.
 */
function FullPageSection({ children, header, ...props }: FullPageSectionProps) {
  return (
    <section
      className="w-screen min-h-screen bg-uoftbg-purple-darkest"
      {...props}
    >
      {header && <Header />}
      {children}
    </section>
  );
}

FullPageSection.defaultProps = {
  header: false,
};

export default FullPageSection;
